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
		ret += fmt.Sprintf("%s%s\n", indent, c.Text.Content)
	case ContentTypeParagraph:
		ret += indent
		for _, content := range c.Paragraph.RichText {
			ret += fmt.Sprintf("%s%s", indent, content.ToDocs(depth))
		}
		ret += "\n"
	case ContentTypeBulletedListItem:
		ret += fmt.Sprintf("%s- ", indent)
		for _, content := range c.BulletedListItem.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeNumberedListItem:
		// 뭔가 방법이 필요한 데 일단 1로 뭉뚱그리자
		ret += fmt.Sprintf("%s1. ", indent)
		for _, content := range c.NumberedListItem.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeHeading1:
		ret += fmt.Sprintf("%s# ", indent)
		for _, content := range c.ContentHeading1.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeHeading2:
		ret += fmt.Sprintf("%s## ", indent)
		for _, content := range c.ContentHeading2.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeHeading3:
		ret += fmt.Sprintf("%s### ", indent)
		for _, content := range c.ContentHeading3.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeToggle:
		ret += fmt.Sprintf("%s(미안하다토글아직안만들었다)", indent)
		for _, content := range c.ContentToggle.RichText {
			ret += content.ToDocs(depth)
		}
		ret += "\n"
	case ContentTypeMention:
		ret += fmt.Sprintf("%s%s\n", indent, c.ContentMention.ToDocs(depth))
	case ContentTypeChildPage:
		ret += fmt.Sprintf("%s%s\n", indent, c.ChildPage.Title)
	case ContentTypeImage: // TODO: 이미지는 나중에 배치로 다운받기
		caption := ""
		if len(c.Image.Caption) > 0 {
			caption = c.Image.Caption[0].ToDocs(depth)
		}
		ret += fmt.Sprintf("%s![%s](%s)\n", indent, caption, c.Image.File.URL)
	case ContentTypeCode:
		ret += fmt.Sprintf("%s```%s\n", indent, c.Code.Language)
		for _, content := range c.Code.RichText {
			ret += content.ToDocs(depth)
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
