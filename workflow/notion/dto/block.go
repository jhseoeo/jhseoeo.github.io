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
	var aux struct {
		alias
		Results []json.RawMessage `json:"results"`
	}
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}
	*r = RetrieveBlockChildrenResponse(aux.alias)

	// 각 elem을 Block으로 변환
	for _, elem := range aux.Results {
		var header struct {
			ObjectType string `json:"object"`
		}
		if err := json.Unmarshal(elem, &header); err != nil {
			return err
		}

		// 일단 block가 아닌 타입이 있으면 넘어가자
		if header.ObjectType != "block" {
			continue
		}

		var block model.Block
		if err := json.Unmarshal(elem, &block); err != nil {
			return err
		}
		r.Blocks = append(r.Blocks, &block)
	}

	return nil
}
