package renderer

import (
	"fmt"
	"strings"

	"github.com/jhseoeo/notion-blog/workflow/model"
	"github.com/sirupsen/logrus"
)

// headingTags maps content types to their corresponding HTML tags
var headingTags = map[model.ContentType]string{
	model.ContentTypeHeading1: "h1",
	model.ContentTypeHeading2: "h2",
	model.ContentTypeHeading3: "h3",
}

// renderInlineText converts inline content (Text, Mention) to HTML with styling
func renderInlineText(c *model.Content) string {
	switch c.Type {
	case model.ContentTypeText:
		if c.Text == nil {
			return ""
		}
		text := c.Text.Content

		// Escape HTML entities and Svelte special characters
		text = strings.ReplaceAll(text, "&", "&amp;") // Must be first
		text = strings.ReplaceAll(text, "<", "&lt;")
		text = strings.ReplaceAll(text, ">", "&gt;")
		text = strings.ReplaceAll(text, "{", "&#123;")
		text = strings.ReplaceAll(text, "}", "&#125;")

		// Apply text styling
		if c.ContentText != nil && c.ContentText.Annotations.Bold {
			text = fmt.Sprintf("<strong>%s</strong>", text)
		}
		if c.ContentText != nil && c.ContentText.Annotations.Italic {
			text = fmt.Sprintf("<em>%s</em>", text)
		}
		if c.ContentText != nil && c.ContentText.Annotations.Code {
			text = fmt.Sprintf("<code>%s</code>", text)
		}
		if c.ContentText != nil && c.ContentText.Annotations.Strikethrough {
			text = fmt.Sprintf("<s>%s</s>", text)
		}
		if c.Text.Link != nil {
			text = fmt.Sprintf("<a href=\"%s\">%s</a>", c.Text.Link.URL, text)
		}
		return text

	case model.ContentTypeMention:
		if c.Mention == nil {
			return ""
		}

		switch c.Mention.Type {
		case model.MentionTypeLinkMention:
			return fmt.Sprintf("<a href=\"%s\">%s</a>", c.Mention.LinkMention.Href, c.Mention.LinkMention.Title)
		default:
			logrus.Warnf("Unknown mention type: %s", c.Mention.Type)
			return fmt.Sprintf("(unknown mention type %s)", c.Mention.Type)
		}
	default:
		logrus.Warnf("Unknown content type: %s", c.Type)
		return fmt.Sprintf("(unknown content type %s)", c.Type)
	}
}

// renderContents converts an array of content to HTML (typically inline elements)
func renderContents(contents []model.Content) string {
	var builder strings.Builder
	for _, content := range contents {
		builder.WriteString(renderInlineText(&content))
	}
	return builder.String()
}

// getRichText extracts the RichText field from content based on type
func getRichText(c *model.Content) []model.Content {
	switch c.Type {
	case model.ContentTypeParagraph:
		return c.Paragraph.RichText
	case model.ContentTypeBulletedListItem:
		return c.BulletedListItem.RichText
	case model.ContentTypeNumberedListItem:
		return c.NumberedListItem.RichText
	case model.ContentTypeHeading1:
		return c.ContentHeading1.RichText
	case model.ContentTypeHeading2:
		return c.ContentHeading2.RichText
	case model.ContentTypeHeading3:
		return c.ContentHeading3.RichText
	case model.ContentTypeToggle:
		return c.ContentToggle.RichText
	default:
		return nil
	}
}

// renderRichText renders rich text content without wrapper tags
func renderRichText(c *model.Content) string {
	return renderContents(getRichText(c))
}

// groupConsecutiveListItems groups consecutive list items of the same type with the given wrapper tag
func groupConsecutiveListItems(blocks []*model.Block, i *int, listType model.ContentType, wrapperTag string, depth int) string {
	indent := strings.Repeat("  ", depth)
	var builder strings.Builder

	builder.WriteString(fmt.Sprintf("%s<%s>\n", indent, wrapperTag))

	for *i < len(blocks) && blocks[*i].Type == listType {
		builder.WriteString(RenderBlock(blocks[*i], depth))
		*i++
	}

	builder.WriteString(fmt.Sprintf("%s</%s>\n", indent, wrapperTag))
	return builder.String()
}

// RenderBlocks groups consecutive list items with proper <ol>/<ul> tags and renders all blocks
// This is used both for top-level blocks and nested children
func RenderBlocks(blocks []*model.Block, depth int) string {
	var builder strings.Builder
	i := 0

	for i < len(blocks) {
		block := blocks[i]

		// Group consecutive numbered list items
		if block.Type == model.ContentTypeNumberedListItem {
			builder.WriteString(groupConsecutiveListItems(blocks, &i, model.ContentTypeNumberedListItem, "ol", depth))
			continue
		}

		// Group consecutive bulleted list items
		if block.Type == model.ContentTypeBulletedListItem {
			builder.WriteString(groupConsecutiveListItems(blocks, &i, model.ContentTypeBulletedListItem, "ul", depth))
			continue
		}

		// Regular block
		builder.WriteString(RenderBlock(block, depth))
		i++
	}

	return builder.String()
}

// RenderBlock converts a block to HTML format for Svelte
// Note: List grouping (<ol>, <ul> tags) should be handled by RenderBlocks
func RenderBlock(b *model.Block, depth int) string {
	indent := strings.Repeat("  ", depth)
	var builder strings.Builder

	switch b.Type {
	case model.ContentTypeText:
		builder.WriteString(fmt.Sprintf("%s%s\n", indent, renderRichText(&b.Content)))

	case model.ContentTypeParagraph:
		builder.WriteString(fmt.Sprintf("%s<p>%s</p>\n\n", indent, renderRichText(&b.Content)))

	case model.ContentTypeHeading1, model.ContentTypeHeading2, model.ContentTypeHeading3:
		tag := headingTags[b.Type]
		builder.WriteString(fmt.Sprintf("%s<%s>%s</%s>\n\n", indent, tag, renderRichText(&b.Content), tag))

	case model.ContentTypeToggle:
		// Handle toggle blocks with proper opening and closing tags
		builder.WriteString(fmt.Sprintf("%s<details>\n", indent))
		builder.WriteString(fmt.Sprintf("%s  <summary>%s</summary>\n", indent, renderRichText(&b.Content)))

		// Add children inside details
		builder.WriteString(RenderBlocks(b.Children, depth+1))

		builder.WriteString(fmt.Sprintf("%s</details>\n\n", indent))

	case model.ContentTypeBulletedListItem, model.ContentTypeNumberedListItem:
		// List items: just render <li> tags, wrapper <ol>/<ul> handled by RenderBlocks
		builder.WriteString(fmt.Sprintf("%s<li>%s", indent, renderRichText(&b.Content)))

		// Process children (nested lists) with proper grouping
		if len(b.Children) > 0 {
			builder.WriteString("\n")
			builder.WriteString(RenderBlocks(b.Children, depth+1))
			builder.WriteString(indent)
		}

		builder.WriteString("</li>\n")

	case model.ContentTypeCode:
		lang := ""
		if b.Content.Code != nil && b.Content.Code.Language != "" {
			lang = b.Content.Code.Language
		} else {
			lang = "text"
		}

		codeContent := ""
		if b.Content.Code != nil {
			codeContent = renderContents(b.Content.Code.RichText)
		}

		builder.WriteString(fmt.Sprintf("%s<pre class=\"language-%s\"><code class=\"language-%s\">%s</code></pre>\n\n",
			indent, lang, lang, codeContent))

	case model.ContentTypeImage:
		caption := ""
		altText := ""
		imageURL := ""

		if b.Content.Image != nil {
			imageURL = b.Content.Image.File.URL
			if len(b.Content.Image.Caption) > 0 {
				caption = renderContents(b.Content.Image.Caption)
				altText = caption
			}
		}

		builder.WriteString(fmt.Sprintf("%s<img src=\"%s\" alt=\"%s\" class=\"responsive-image\" />\n", indent, imageURL, altText))
		if caption != "" {
			builder.WriteString(fmt.Sprintf("%s<p class=\"image-caption\">%s</p>\n", indent, caption))
		}
		builder.WriteString("\n")

	case model.ContentTypeMention:
		// Mention as a block-level element (rare, usually inline in RichText)
		mentionHTML := renderInlineText(&b.Content)
		if mentionHTML != "" {
			builder.WriteString(fmt.Sprintf("%s%s\n", indent, mentionHTML))
		}

	case model.ContentTypeChildPage:
		if b.Content.ChildPage != nil {
			builder.WriteString(fmt.Sprintf("%s<p>%s</p>\n", indent, b.Content.ChildPage.Title))
		}

	default:
		logrus.Warnf("Unknown block type: %s", b.Type)
		builder.WriteString(fmt.Sprintf("%s<!-- Unknown block type: %s -->\n", indent, b.Type))
	}

	// Process children for non-list, non-toggle blocks
	if b.Type != model.ContentTypeBulletedListItem &&
		b.Type != model.ContentTypeNumberedListItem &&
		b.Type != model.ContentTypeToggle {
		builder.WriteString(RenderBlocks(b.Children, depth))
	}

	return builder.String()
}
