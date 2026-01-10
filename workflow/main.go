package main

import (
	"io"
	"os"

	"github.com/jhseoeo/notion-blog/workflow/notion"
	"github.com/jhseoeo/notion-blog/workflow/post"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

const (
	OUTPUT_DIR = "./output"
)

// copyFile copies a file from src to dst
func copyFile(src, dst string) error {
	sourceFile, err := os.Open(src)
	if err != nil {
		return err
	}
	defer sourceFile.Close()

	destFile, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer destFile.Close()

	_, err = io.Copy(destFile, sourceFile)
	return err
}

func main() {
	logrus.SetLevel(logrus.DebugLevel)
	logrus.Info("Starting...")

	if err := godotenv.Load(); err != nil {
		logrus.WithError(err).Warn("Failed to load .env file (this is expected in production)")
	} else {
		logrus.Info("Loaded .env file")
	}

	// Get database ID from environment variable
	notionDBID := os.Getenv("NOTION_DB_ID")
	if notionDBID == "" {
		logrus.Fatal("NOTION_DB_ID environment variable is required")
	}

	logrus.Info("Fetching pages...")
	client := notion.NewNotionClient(os.Getenv("NOTION_SECRET"))
	pages, err := client.GetPages(notionDBID)
	if err != nil {
		logrus.WithError(err).Fatal("Failed to fetch pages from Notion")
	}

	// output dir이 없으면 디렉토리 생성
	if _, err := os.Stat(OUTPUT_DIR); os.IsNotExist(err) {
		logrus.Info("Output directory does not exist, creating...")
		if err := os.Mkdir(OUTPUT_DIR, 0755); err != nil {
			logrus.WithError(err).Fatal("Failed to create output directory")
		}
	}

	// Copy default cover image to output/images/
	logrus.Info("Copying default cover image...")
	imagesDir := OUTPUT_DIR + "/images"
	if err := os.MkdirAll(imagesDir, 0755); err != nil {
		logrus.WithError(err).Fatal("Failed to create images directory")
	}
	if err := copyFile("default-cover.jpg", imagesDir+"/default-cover.jpg"); err != nil {
		logrus.WithError(err).Warn("Failed to copy default cover image (will use posts' images as fallback)")
	}

	for _, page := range pages {
		if !page.Exportable {
			continue
		}
		logrus.Info("Fetching page contents: " + page.Title)
		blocks, err := client.RetrieveBlockChildren(page.ID, 0)
		if err != nil {
			logrus.WithError(err).WithField("page", page.Title).Fatal("Failed to fetch page contents")
		}
		logrus.Info("Exporting post: " + page.Title)
		if err := post.ExportPost(OUTPUT_DIR, page, blocks); err != nil {
			logrus.WithError(err).WithField("page", page.Title).Fatal("Failed to export post")
		}
	}

	logrus.Info("Successfully exported all posts!")
}
