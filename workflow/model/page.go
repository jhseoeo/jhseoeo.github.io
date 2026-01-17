package model

import (
	"encoding/json"
	"fmt"

	"github.com/jhseoeo/notion-blog/workflow/types"
)

type Page struct {
	ID             string     `json:"id"`
	CreatedTime    string     `json:"created_time"`
	LastEditedTime string     `json:"last_edited_time"`
	Exportable     bool       `json:"exportable"`
	Title          string     `json:"title"`
	SubTitle       string     `json:"subTitle"`
	Date           string     `json:"date"`
	Tags           []Tag      `json:"tags"`
	Properties     Properties `json:"properties"`
}

type Tag struct {
	Name  string      `json:"name"`
	Color types.Color `json:"color"`
}

func (p *Page) UnmarshalJSON(data []byte) error {
	// 기본 필드를 채우고 properties는 별도 처리할 수 있게 함
	type alias Page
	if err := json.Unmarshal(data, (*alias)(p)); err != nil {
		return err
	}

	{ // Exportable 처리
		prop, err := p.Properties.Find("Done", PropertyTypeCheckbox)
		if err != nil {
			return err
		}
		p.Exportable = prop.Checkbox
	}
	{ // 제목 처리
		prop, err := p.Properties.Find("Title", PropertyTypeTitle)
		if err != nil {
			return err
		}
		if content, err := prop.Title.Find(ContentTypeText); err == nil {
			p.Title = content.Text.Content
		}
	}
	{ // 부제 처리
		prop, err := p.Properties.Find("SubTitle", PropertyTypeRichText)
		if err != nil {
			return err
		}
		if len(prop.RichText) > 0 {
			p.SubTitle = prop.RichText[0].Text.Content
		}
	}
	{ // 태그 처리
		prop, err := p.Properties.Find("Tags", PropertyTypeMultiSelect)
		if err != nil {
			return err
		}
		for _, tag := range prop.MultiSelect {
			p.Tags = append(p.Tags, Tag{
				Name:  tag.Name,
				Color: tag.Color,
			})
		}
	}
	{ // Date 처리
		prop, err := p.Properties.Find("Date", PropertyTypeDate)
		if err != nil {
			return err
		}
		if prop.Date != nil {
			p.Date = prop.Date.Start
		}
	}

	return nil
}

type PropertyType string

const (
	PropertyTypeCheckbox    PropertyType = "checkbox"
	PropertyTypeTitle       PropertyType = "title"
	PropertyTypeRichText    PropertyType = "rich_text"
	PropertyTypeMultiSelect PropertyType = "multi_select"
	PropertyTypeDate        PropertyType = "date"
)

type Properties map[string]*Property

func (p Properties) Find(name string, t PropertyType) (*Property, error) {
	prop, ok := p[name]
	if !ok {
		return nil, fmt.Errorf("notion: no property '%s' found", name)
	}
	if prop.Type != t {
		return nil, fmt.Errorf("notion: property '%s' is not %s", name, t)
	}
	return prop, nil
}

type Property struct {
	Id   string       `json:"id"`
	Type PropertyType `json:"type"`

	Checkbox    bool      `json:"checkbox,omitempty"`
	Title       Contents  `json:"title,omitempty"`
	RichText    Contents  `json:"rich_text,omitempty"`
	Date        *DateValue `json:"date,omitempty"`
	MultiSelect []struct {
		Id    string      `json:"id"`
		Name  string      `json:"name"`
		Color types.Color `json:"color"`
	} `json:"multi_select,omitempty"`
}

type DateValue struct {
	Start    string  `json:"start"`
	End      *string `json:"end,omitempty"`
	TimeZone *string `json:"time_zone,omitempty"`
}
