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
	ContentTypeBulletedListItem ContentType = "bulleted_list_item"
	ContentTypeToggle           ContentType = "toggle"
	ContentTypeMention          ContentType = "mention"
	ContentTypeChildPage        ContentType = "child_page"
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
	} `json:"paragraph"`
	BulletedListItem *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"bulleted_list_item"`
	ContentHeading1 *struct {
		RichText     []Content   `json:"rich_text"`
		Color        types.Color `json:"color"`
		IsToggleable bool        `json:"is_toggleable"`
	} `json:"heading_1"`
	ContentHeading2 *struct {
		RichText     []Content   `json:"rich_text"`
		Color        types.Color `json:"color"`
		IsToggleable bool        `json:"is_toggleable"`
	} `json:"heading_2"`
	ContentToggle *struct {
		RichText []Content   `json:"rich_text"`
		Color    types.Color `json:"color"`
	} `json:"toggle"`
	*ContentMention
	ChildPage *struct {
		Title string `json:"title"`
	} `json:"child_page"`
}

func (c *Content) ToDocs() string {
	var ret string

	switch c.Type {
	case ContentTypeText:
		ret += c.Text.Content
	case ContentTypeParagraph:
		for _, content := range c.Paragraph.RichText {
			ret += content.ToDocs()
		}
	case ContentTypeBulletedListItem:
		ret += "- "
		for _, content := range c.BulletedListItem.RichText {
			ret += content.ToDocs()
		}
	case ContentTypeHeading1:
		ret += "# "
		for _, content := range c.ContentHeading1.RichText {
			ret += content.ToDocs()
		}
	case ContentTypeHeading2:
		ret += "## "
		for _, content := range c.ContentHeading2.RichText {
			ret += content.ToDocs()
		}
	case ContentTypeToggle:
		ret += "(미안하다토글아직안만들었다)"
		for _, content := range c.ContentToggle.RichText {
			ret += content.ToDocs()
		}
	case ContentTypeMention:
		ret += string(c.ContentMention.Mention.LinkMention.Href)
	case ContentTypeChildPage:
		ret += c.ChildPage.Title
	}

	return ret
}

type ContentText struct {
	Text struct {
		Content string `json:"content"`
		Link    string `json:"link"`
	} `json:"text"`
	TextProperties
}

type MentionType string

const (
	MentionTypeLinkMention MentionType = "link_mention"
)

type ContentMention struct {
	Mention struct {
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
	} `json:"annotations"`
	PlainText string `json:"plain_text"`
	Href      string `json:"href"` // 이거 타입 뭘까
}
