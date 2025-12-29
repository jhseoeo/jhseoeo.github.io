package dto

import (
	"encoding/json"

	"github.com/jhseoeo/notion-blog/workflow/model"
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
	var aux alias
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}
	*q = QueryDataSourceResponse(aux)

	// Unmarshal pages using helper
	pages, err := unmarshalResults(data, "page", func(elem []byte) (*model.Page, error) {
		var page model.Page
		if err := json.Unmarshal(elem, &page); err != nil {
			return nil, err
		}
		return &page, nil
	})
	if err != nil {
		return err
	}
	q.Pages = pages

	return nil
}
