package post

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
	"text/template"
	"time"

	"github.com/jhseoeo/notion-blog/workflow/model"
)

func ExportPost(outputDir string, page *model.Page, contents []*model.Block) error {
	// new template
	t, err := template.New("svelte").Parse(svelteTmpl)
	if err != nil {
		return err
	}

	// parse params
	lastEditedTime, err := time.Parse(time.RFC3339, page.LastEditedTime)
	if err != nil {
		return err
	}

	categories := func() []string {
		categories := make([]string, len(page.Tags))
		for i, tag := range page.Tags {
			categories[i] = tag.Name
		}
		return categories
	}()

	// Convert categories to JSON array format for JavaScript
	categoriesJS, err := json.Marshal(categories)
	if err != nil {
		return err
	}

	fileTitle := func() string {
		title := strings.ReplaceAll(page.Title, " ", "_")
		title = strings.ReplaceAll(title, "/", "-")
		return title
	}()

	// Download images and replace URLs with local paths
	if err := DownloadImagesInBlocks(contents, outputDir, fileTitle); err != nil {
		return fmt.Errorf("failed to download images: %w", err)
	}

	// Generate HTML content with list grouping
	htmlContent := model.RenderBlocksWithListGrouping(contents, 0)

	params := templateParams{
		Title:        page.Title,
		Date:         lastEditedTime.Format("2006-01-02"),
		Categories:   categories,
		CategoriesJS: string(categoriesJS),
		Excerpt:      page.SubTitle,
		CoverImage:   "/images/default-cover.jpg", // TODO: Get from Notion
		Content:      htmlContent,
	}

	fileName := fmt.Sprintf("%s/%s.svelte", outputDir, fileTitle)

	// open file
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0644)
	if err != nil {
		return err
	}
	defer file.Close()

	// execute template
	return t.Execute(file, params)
}
