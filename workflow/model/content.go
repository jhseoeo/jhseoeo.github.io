package model

import (
	"fmt"
	"strings"

	"github.com/jhseoeo/notion-blog/workflow/types"
)

type ContentType string

const (
	ContentTypeText             ContentType = "text"
	ContentTypeParagraph        ContentType = "paragraph"
	ContentTypeHeading1         ContentType = "heading_1"
	ContentTypeHeading2         ContentType = "heading_2"
	ContentTypeHeading3         ContentType = "heading_3"
	ContentTypeBulletedListItem ContentType = "bulleted_list_item"
	ContentTypeNumberedListItem ContentType = "numbered_list_item"
	ContentTypeToggle           ContentType = "toggle"
	ContentTypeMention          ContentType = "mention"
	ContentTypeChildPage        ContentType = "child_page"
	ContentTypeImage            ContentType = "image"
	ContentTypeCode             ContentType = "code"
)

type Contents []Content

func (c Contents) Find(t ContentType) (*Content, error) {
	for _, content := range c {
		if content.Type == t {
			return &content, nil
		}
	}
	return nil, fmt.Errorf("notion: no content '%s' found", t)
}

type Content struct {
	Type ContentType `json:"type"`

	*ContentText
	Paragraph *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"paragraph,omitempty"`
	BulletedListItem *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"bulleted_list_item,omitempty"`
	NumberedListItem *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"numbered_list_item,omitempty"`
	ContentHeading1 *struct {
		RichText     []Content   `json:"rich_text"`
		Color        types.Color `json:"color"`
		IsToggleable bool        `json:"is_toggleable"`
	} `json:"heading_1,omitempty"`
	ContentHeading2 *struct {
		RichText     []Content   `json:"rich_text"`
		Color        types.Color `json:"color"`
		IsToggleable bool        `json:"is_toggleable"`
	} `json:"heading_2,omitempty"`
	ContentHeading3 *struct {
		RichText     []Content   `json:"rich_text"`
		Color        types.Color `json:"color"`
		IsToggleable bool        `json:"is_toggleable"`
	} `json:"heading_3,omitempty"`
	ContentToggle *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"toggle,omitempty"`
	*ContentMention
	ChildPage *struct {
		Title string `json:"title"`
	} `json:"child_page,omitempty"`
	Image *struct {
		Caption []Content `json:"caption"`
		Type    string    `json:"type"` // 다른 것도 있나..?
		File    struct {
			URL        string `json:"url"`
			ExpiryTime string `json:"expiry_time"`
		} `json:"file"`
	} `json:"image,omitempty"`
	Code *struct {
		Caption  []Content `json:"caption"`
		RichText []Content `json:"rich_text"`
		Language string    `json:"language"`
	} `json:"code,omitempty"`
}

func (c *Content) ToDocs(depth int) string {
	indent := strings.Repeat("\t", depth)

	var ret string
	switch c.Type {
	case ContentTypeText:
		ret += fmt.Sprintf("%s%s", indent, c.Text.Content)
	case ContentTypeParagraph:
		ret += indent
		for _, content := range c.Paragraph.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeBulletedListItem:
		ret += fmt.Sprintf("%s- ", indent)
		for _, content := range c.BulletedListItem.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeNumberedListItem:
		// 뭔가 방법이 필요한 데 일단 1로 뭉뚱그리자
		ret += fmt.Sprintf("%s1. ", indent)
		for _, content := range c.NumberedListItem.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeHeading1:
		ret += fmt.Sprintf("%s# ", indent)
		for _, content := range c.ContentHeading1.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeHeading2:
		ret += fmt.Sprintf("%s## ", indent)
		for _, content := range c.ContentHeading2.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeHeading3:
		ret += fmt.Sprintf("%s### ", indent)
		for _, content := range c.ContentHeading3.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeToggle:
		ret += fmt.Sprintf("%s", indent)
		for _, content := range c.ContentToggle.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += "\n"
	case ContentTypeMention:
		ret += fmt.Sprintf("%s%s\n", indent, c.ContentMention.ToDocs(0))
	case ContentTypeChildPage:
		ret += fmt.Sprintf("%s%s\n", indent, c.ChildPage.Title)
	case ContentTypeImage: // TODO: 이미지는 나중에 배치로 다운받기
		caption := ""
		if len(c.Image.Caption) > 0 {
			caption = c.Image.Caption[0].ToDocs(0)
		}
		ret += fmt.Sprintf("%s![%s](%s)\n", indent, caption, c.Image.File.URL)
	case ContentTypeCode:
		ret += fmt.Sprintf("%s```%s\n", indent, c.Code.Language)
		for _, content := range c.Code.RichText {
			ret += fmt.Sprintf("%s\n", content.ToDocs(0))
		}
		ret += fmt.Sprintf("%s```\n", indent)
	default:
		panic("notion: unknown content type: " + string(c.Type))
	}

	return ret
}

type ContentText struct {
	Text *struct {
		Content string `json:"content"`
		Link    *struct {
			URL string `json:"url"`
		}
	} `json:"text,omitempty"`
	TextProperties
}

type MentionType string

const (
	MentionTypeLinkMention MentionType = "link_mention"
)

type ContentMention struct {
	Mention *struct {
		Type        MentionType `json:"type"`
		LinkMention *struct {
			Href         string `json:"href"`
			Title        string `json:"title"`
			IconUrl      string `json:"icon_url"`
			Description  string `json:"description"`
			LinkAuthor   string `json:"link_author"`
			LinkProvider string `json:"link_provider"`
			ThumbnailUrl string `json:"thumbnail_url"`
		} `json:"link_mention"`
	} `json:"mention"`
	TextProperties
}

func (c *ContentMention) ToDocs(depth int) string {
	indent := strings.Repeat("\t", depth)
	if c.Mention.LinkMention != nil {
		return fmt.Sprintf("%s%s", indent, c.Mention.LinkMention.Title)
	}
	return fmt.Sprintf("%s(악 아직 모르겠어요)", indent)
}

type TextProperties struct {
	Annotations struct {
		Bold          bool        `json:"bold"`
		Italic        bool        `json:"italic"`
		Strikethrough bool        `json:"strikethrough"`
		Underline     bool        `json:"underline"`
		Code          bool        `json:"code"`
		Color         types.Color `json:"color"`
	} `json:"annotations,omitempty"`
	PlainText string `json:"plain_text,omitempty"`
	Href      string `json:"href,omitempty"` // 이거 타입 뭘까
}

// RenderRichText renders rich text content without wrapper tags
func (c *Content) RenderRichText() string {
	switch c.Type {
	case ContentTypeParagraph:
		var ret string
		for _, content := range c.Paragraph.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeBulletedListItem:
		var ret string
		for _, content := range c.BulletedListItem.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeNumberedListItem:
		var ret string
		for _, content := range c.NumberedListItem.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeHeading1:
		var ret string
		for _, content := range c.ContentHeading1.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeHeading2:
		var ret string
		for _, content := range c.ContentHeading2.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeHeading3:
		var ret string
		for _, content := range c.ContentHeading3.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	case ContentTypeToggle:
		var ret string
		for _, content := range c.ContentToggle.RichText {
			ret += content.ToHTML(0)
		}
		return ret
	default:
		return ""
	}
}

// ToHTML converts content to HTML format for Svelte
func (c *Content) ToHTML(depth int) string {
	indent := strings.Repeat("  ", depth)

	var ret string
	switch c.Type {
	case ContentTypeText:
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
		ret += text

	case ContentTypeParagraph:
		ret += fmt.Sprintf("%s<p>", indent)
		for _, content := range c.Paragraph.RichText {
			ret += content.ToHTML(0)
		}
		ret += "</p>\n\n"

	case ContentTypeBulletedListItem:
		// List item HTML structure is now fully handled by Block.ToHTML()
		// This should not be called directly for list item blocks
		ret += fmt.Sprintf("<!-- Bulleted list item should be handled by Block.ToHTML() -->\n")

	case ContentTypeNumberedListItem:
		// List item HTML structure is now fully handled by Block.ToHTML()
		// This should not be called directly for list item blocks
		ret += fmt.Sprintf("<!-- Numbered list item should be handled by Block.ToHTML() -->\n")

	case ContentTypeHeading1:
		ret += fmt.Sprintf("%s<h1>", indent)
		for _, content := range c.ContentHeading1.RichText {
			ret += content.ToHTML(0)
		}
		ret += "</h1>\n\n"

	case ContentTypeHeading2:
		ret += fmt.Sprintf("%s<h2>", indent)
		for _, content := range c.ContentHeading2.RichText {
			ret += content.ToHTML(0)
		}
		ret += "</h2>\n\n"

	case ContentTypeHeading3:
		ret += fmt.Sprintf("%s<h3>", indent)
		for _, content := range c.ContentHeading3.RichText {
			ret += content.ToHTML(0)
		}
		ret += "</h3>\n\n"

	case ContentTypeToggle:
		// Toggle HTML structure is now fully handled by Block.ToHTML()
		// This should not be called directly for toggle blocks
		ret += fmt.Sprintf("<!-- Toggle block should be handled by Block.ToHTML() -->\n")

	case ContentTypeMention:
		if c.Mention.LinkMention != nil {
			ret += fmt.Sprintf("<a href=\"%s\">%s</a>", c.Mention.LinkMention.Href, c.Mention.LinkMention.Title)
		} else {
			ret += "(unknown mention)"
		}

	case ContentTypeChildPage:
		ret += fmt.Sprintf("%s<p>%s</p>\n", indent, c.ChildPage.Title)

	case ContentTypeImage:
		caption := ""
		if len(c.Image.Caption) > 0 {
			caption = c.Image.Caption[0].ToHTML(0)
		}
		ret += fmt.Sprintf("%s<img src=\"%s\" alt=\"%s\" class=\"responsive-image\" />\n", indent, c.Image.File.URL, caption)
		if caption != "" {
			ret += fmt.Sprintf("%s<p class=\"image-caption\">%s</p>\n", indent, caption)
		}
		ret += "\n"

	case ContentTypeCode:
		// For code blocks, recursively call ToHTML on RichText
		// Text escaping will be handled by ContentTypeText case
		lang := c.Code.Language
		if lang == "" {
			lang = "text"
		}

		ret += fmt.Sprintf("%s<pre class=\"language-%s\"><code class=\"language-%s\">", indent, lang, lang)
		for _, richText := range c.Code.RichText {
			ret += richText.ToHTML(0)
		}
		ret += "</code></pre>\n\n"

	default:
		ret += fmt.Sprintf("<!-- unknown content type: %s -->\n", c.Type)
	}

	return ret
}
