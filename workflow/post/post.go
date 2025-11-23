package post

import (
	"os"
	"strings"
	"text/template"
	"time"

	"github.com/jhseoeo/notion-blog/workflow/model"
)

func ExportPost(outputDir string, page *model.Page, contents []*model.Block) error {
	// new template
	t, err := template.New("post").Parse(postTmpl)
	if err != nil {
		return err
	}

	// parse params
	lastEditedTime, err := time.Parse(time.RFC3339, page.LastEditedTime)
	if err != nil {
		return err
	}
	categories := make([]string, len(page.Tags))
	for i, tag := range page.Tags {
		categories[i] = tag.Name
	}
	var content string
	for _, block := range contents {
		content += block.ToDocs() + "  \n"
	}
	params := templateParams{
		Title:      page.Title,
		Date:       lastEditedTime.Format("2006-01-02"),
		Categories: categories,
		Excerpt:    page.SubTitle,
		Content:    content,
	}

	fileName := outputDir + "/" + strings.ReplaceAll(page.Title, " ", "_") + ".md"

	// open file
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}
	defer file.Close()
	// execute template
	return t.Execute(file, params)
}
