package dto

import (
	"encoding/json"

	"github.com/jhseoeo/notion-blog/workflow/model"
)

type RetrieveBlockChildrenResponse struct {
	Object string         `json:"object"`
	Blocks []*model.Block `json:"-"`
	PaginationResp
}

func (r *RetrieveBlockChildrenResponse) UnmarshalJSON(data []byte) error {
	type alias RetrieveBlockChildrenResponse
	var aux alias
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}
	*r = RetrieveBlockChildrenResponse(aux)

	// Unmarshal blocks using helper
	blocks, err := unmarshalResults(data, "block", func(elem []byte) (*model.Block, error) {
		b := new(model.Block)
		if err := json.Unmarshal(elem, b); err != nil {
			return nil, err
		}
		return b, nil
	})
	if err != nil {
		return err
	}
	r.Blocks = blocks

	return nil
}
