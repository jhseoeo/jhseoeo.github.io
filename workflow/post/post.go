package post

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
	"text/template"
	"time"

	"github.com/jhseoeo/notion-blog/workflow/model"
	"github.com/jhseoeo/notion-blog/workflow/renderer"
)

// findFirstImage recursively finds the first image in blocks
func findFirstImage(blocks []*model.Block) string {
	for _, block := range blocks {
		if block.Type == model.ContentTypeImage && block.Content.Image != nil {
			imageURL := block.Content.Image.File.URL
			if imageURL != "" {
				return imageURL
			}
		}
		// Search in children recursively
		if len(block.Children) > 0 {
			if imageURL := findFirstImage(block.Children); imageURL != "" {
				return imageURL
			}
		}
	}
	return ""
}

// determineCoverImage determines the cover image for a post
// Priority: 1. First image in post content, 2. Default cover image
func determineCoverImage(contents []*model.Block) string {
	// Try to find first image in post content
	if firstImage := findFirstImage(contents); firstImage != "" {
		return firstImage
	}

	// Use default cover image
	return "/images/default-cover.jpg"
}

func ExportPost(outputDir string, page *model.Page, contents []*model.Block) error {
	// new template
	t, err := template.New("svelte").Parse(svelteTmpl)
	if err != nil {
		return err
	}

	// parse params
	// Use Date field from Notion database instead of LastEditedTime
	var dateStr string
	if page.Date != "" {
		dateStr = page.Date
	} else {
		// Fallback to LastEditedTime if Date is not set
		lastEditedTime, err := time.Parse(time.RFC3339, page.LastEditedTime)
		if err != nil {
			return err
		}
		dateStr = lastEditedTime.Format("2006-01-02")
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

	// Determine cover image
	coverImage := determineCoverImage(contents)

	// Generate HTML content with list grouping
	htmlContent := renderer.RenderBlocks(contents, 0)

	params := templateParams{
		Title:        page.Title,
		Date:         dateStr,
		Categories:   categories,
		CategoriesJS: string(categoriesJS),
		Excerpt:      page.SubTitle,
		CoverImage:   coverImage,
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
