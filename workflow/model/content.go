package model

import (
	"fmt"

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

// RichTextBlock is a common structure for blocks with rich text and color
type RichTextBlock struct {
	RichText []Content   `json:"rich_text"`
	Color    types.Color `json:"color"`
}

// HeadingBlock extends RichTextBlock with toggleable capability
type HeadingBlock struct {
	RichText     []Content   `json:"rich_text"`
	Color        types.Color `json:"color"`
	IsToggleable bool        `json:"is_toggleable"`
}

type Content struct {
	Type ContentType `json:"type"`

	*ContentText
	Paragraph        *RichTextBlock `json:"paragraph,omitempty"`
	BulletedListItem *RichTextBlock `json:"bulleted_list_item,omitempty"`
	NumberedListItem *RichTextBlock `json:"numbered_list_item,omitempty"`
	ContentHeading1  *HeadingBlock  `json:"heading_1,omitempty"`
	ContentHeading2  *HeadingBlock  `json:"heading_2,omitempty"`
	ContentHeading3  *HeadingBlock  `json:"heading_3,omitempty"`
	ContentToggle    *RichTextBlock `json:"toggle,omitempty"`
	*ContentMention
	ChildPage *struct {
		Title string `json:"title"`
	} `json:"child_page,omitempty"`
	Image *struct {
		Caption []Content `json:"caption"`
		Type    string    `json:"type"` // Other types may exist
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
