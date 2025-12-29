package main

import (
	"os"

	"github.com/jhseoeo/notion-blog/workflow/notion"
	"github.com/jhseoeo/notion-blog/workflow/post"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

const (
	OUTPUT_DIR = "./output"
)

func main() {
	logrus.SetLevel(logrus.DebugLevel)
	logrus.Info("Starting...")

	if err := godotenv.Load(); err != nil {
		logrus.WithError(err).Fatal("Failed to load environment variables")
	}
	logrus.Info("Loaded environment variables")

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
}
