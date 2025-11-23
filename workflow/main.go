package main

import (
	"os"

	"github.com/jhseoeo/notion-blog/workflow/notion"
	"github.com/jhseoeo/notion-blog/workflow/post"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		panic(err)
	}

	client := notion.NewNotionClient(os.Getenv("NOTION_SECRET"))
	pages, err := client.GetPages("3c2ef9d1-18f9-4120-be26-e13ded946712")
	if err != nil {
		panic(err)
	}

	if len(pages) > 0 {
		blocks, err := client.RetrieveBlockChildren(pages[0].ID)
		if err != nil {
			panic(err)
		}
		if err := post.ExportPost("./output", pages[0], blocks); err != nil {
			panic(err)
		}
	}
}
