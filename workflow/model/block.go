package model

import (
	"fmt"
	"strings"
)

// RenderBlocksWithListGrouping groups consecutive list items with proper <ol>/<ul> tags
// This is used both for top-level blocks and nested children
func RenderBlocksWithListGrouping(blocks []*Block, depth int) string {
	indent := strings.Repeat("  ", depth)
	var ret string
	i := 0

	for i < len(blocks) {
		block := blocks[i]

		// Group consecutive numbered list items
		if block.Type == ContentTypeNumberedListItem {
			ret += fmt.Sprintf("%s<ol>\n", indent)
			for i < len(blocks) && blocks[i].Type == ContentTypeNumberedListItem {
				ret += blocks[i].ToHTML(depth)
				i++
			}
			ret += fmt.Sprintf("%s</ol>\n", indent)
			continue
		}

		// Group consecutive bulleted list items
		if block.Type == ContentTypeBulletedListItem {
			ret += fmt.Sprintf("%s<ul>\n", indent)
			for i < len(blocks) && blocks[i].Type == ContentTypeBulletedListItem {
				ret += blocks[i].ToHTML(depth)
				i++
			}
			ret += fmt.Sprintf("%s</ul>\n", indent)
			continue
		}

		// Regular block
		ret += block.ToHTML(depth)
		i++
	}

	return ret
}

type Block struct {
	ID          string   `json:"id"`
	Object      string   `json:"object"`
	HasChildren bool     `json:"has_children"`
	Children    []*Block `json:"-"`
	Content
}

func (b *Block) ToDocs(depth int) string {
	var ret string
	ret += b.Content.ToDocs(depth)
	for _, child := range b.Children {
		ret += child.ToDocs(depth + 1)
	}
	return ret
}

// ToHTML converts block to HTML format for Svelte
// Note: List grouping (<ol>, <ul> tags) should be handled by the caller
func (b *Block) ToHTML(depth int) string {
	indent := strings.Repeat("  ", depth)
	var ret string

	switch b.Type {
	case ContentTypeParagraph:
		ret += fmt.Sprintf("%s<p>%s</p>\n\n", indent, b.Content.RenderRichText())

	case ContentTypeHeading1:
		ret += fmt.Sprintf("%s<h1>%s</h1>\n\n", indent, b.Content.RenderRichText())

	case ContentTypeHeading2:
		ret += fmt.Sprintf("%s<h2>%s</h2>\n\n", indent, b.Content.RenderRichText())

	case ContentTypeHeading3:
		ret += fmt.Sprintf("%s<h3>%s</h3>\n\n", indent, b.Content.RenderRichText())

	case ContentTypeToggle:
		// Handle toggle blocks with proper opening and closing tags
		ret += fmt.Sprintf("%s<details>\n", indent)
		ret += fmt.Sprintf("%s  <summary>%s</summary>\n", indent, b.Content.RenderRichText())

		// Add children inside details
		for _, child := range b.Children {
			ret += child.ToHTML(depth + 1)
		}

		ret += fmt.Sprintf("%s</details>\n\n", indent)

	case ContentTypeBulletedListItem, ContentTypeNumberedListItem:
		// List items: just render <li> tags, wrapper <ol>/<ul> handled by post.go
		ret += fmt.Sprintf("%s<li>%s", indent, b.Content.RenderRichText())

		// Process children (nested lists) with proper grouping
		if len(b.Children) > 0 {
			ret += "\n"
			ret += RenderBlocksWithListGrouping(b.Children, depth+1)
			ret += fmt.Sprintf("%s", indent)
		}

		ret += "</li>\n"

	case ContentTypeCode:
		lang := ""
		if b.Content.Code != nil && b.Content.Code.Language != "" {
			lang = b.Content.Code.Language
		} else {
			lang = "text"
		}

		codeContent := ""
		if b.Content.Code != nil {
			for _, richText := range b.Content.Code.RichText {
				// Use ToHTML for proper escaping
				codeContent += richText.ToHTML(0)
			}
		}

		ret += fmt.Sprintf("%s<pre class=\"language-%s\"><code class=\"language-%s\">%s</code></pre>\n\n",
			indent, lang, lang, codeContent)

	case ContentTypeImage:
		caption := ""
		altText := ""
		imageURL := ""

		if b.Content.Image != nil {
			imageURL = b.Content.Image.File.URL
			if len(b.Content.Image.Caption) > 0 {
				for _, c := range b.Content.Image.Caption {
					caption += c.ToHTML(0)
				}
				altText = caption
			}
		}

		ret += fmt.Sprintf("%s<img src=\"%s\" alt=\"%s\" class=\"responsive-image\" />\n", indent, imageURL, altText)
		if caption != "" {
			ret += fmt.Sprintf("%s<p class=\"image-caption\">%s</p>\n", indent, caption)
		}
		ret += "\n"

	case ContentTypeMention:
		if b.Content.Mention != nil && b.Content.Mention.LinkMention != nil {
			ret += fmt.Sprintf("%s<a href=\"%s\">%s</a>\n", indent,
				b.Content.Mention.LinkMention.Href, b.Content.Mention.LinkMention.Title)
		}

	case ContentTypeChildPage:
		if b.Content.ChildPage != nil {
			ret += fmt.Sprintf("%s<p>%s</p>\n", indent, b.Content.ChildPage.Title)
		}

	default:
		ret += fmt.Sprintf("%s<!-- Unknown block type: %s -->\n", indent, b.Type)
	}

	// Process children for non-list, non-toggle blocks
	if b.Type != ContentTypeBulletedListItem &&
	   b.Type != ContentTypeNumberedListItem &&
	   b.Type != ContentTypeToggle {
		for _, child := range b.Children {
			ret += child.ToHTML(depth)
		}
	}

	return ret
}
