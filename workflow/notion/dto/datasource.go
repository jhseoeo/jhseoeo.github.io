package dto

import (
	"encoding/json"

	"github.com/jhseoeo/notion-blog/workflow/notion/model"
)

type QueryDataSourceRequest struct {
	PaginationReq
}

type QueryDataSourceResponse struct {
	Object string        `json:"object"`
	Pages  []*model.Page `json:"-"`
	PaginationResp
}

func (q *QueryDataSourceResponse) UnmarshalJSON(data []byte) error {
	type alias QueryDataSourceResponse
	var aux struct {
		alias
		Results []json.RawMessage `json:"results"`
	}
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}
	*q = QueryDataSourceResponse(aux.alias)

	// 각 elem을 Page로 변환
	for _, elem := range aux.Results {
		var header struct {
			ObjectType string `json:"object"`
		}
		if err := json.Unmarshal(elem, &header); err != nil {
			return err
		}

		// 일단 page가 아닌 타입이 있으면 넘어가자
		if header.ObjectType != "page" {
			continue
		}

		var page model.Page
		if err := json.Unmarshal(elem, &page); err != nil {
			return err
		}
		q.Pages = append(q.Pages, &page)
	}

	return nil
}
