package main

import (
	"os"

	"github.com/jhseoeo/notion-blog/workflow/notion"
	"github.com/jhseoeo/notion-blog/workflow/post"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

const (
	OUTPUT_DIR   = "./output"
	NOTION_DB_ID = "3c2ef9d1-18f9-4120-be26-e13ded946712"
)

func main() {
	logrus.SetLevel(logrus.DebugLevel)
	logrus.Info("Starting...")

	if err := godotenv.Load(); err != nil {
		panic(err)
	}
	logrus.Info("Loaded environment variables")

	logrus.Info("Fetching pages...")
	client := notion.NewNotionClient(os.Getenv("NOTION_SECRET"))
	pages, err := client.GetPages(NOTION_DB_ID)
	if err != nil {
		panic(err)
	}

	// output dir이 없으면 디렉토리 생성
	if _, err := os.Stat(OUTPUT_DIR); os.IsNotExist(err) {
		logrus.Info("Output directory does not exist, creating...")
		if err := os.Mkdir(OUTPUT_DIR, 0755); err != nil {
			panic(err)
		}
	}

	for _, page := range pages {
		if !page.Exportable {
			continue
		}
		logrus.Info("Fetching page contents: " + page.Title)
		blocks, err := client.RetrieveBlockChildren(page.ID, 0)
		if err != nil {
			panic(err)
		}
		logrus.Info("Exporting post: " + page.Title)
		if err := post.ExportPost(OUTPUT_DIR, page, blocks); err != nil {
			panic(err)
		}
	}
}
