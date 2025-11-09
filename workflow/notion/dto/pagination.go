package dto

import (
	"fmt"
	"net/url"
)

type PaginationReq struct {
	StartCursor string `json:"start_cursor,omitempty"`
	PageSize    int    `json:"page_size,omitempty"`
}

func (p *PaginationReq) ApplyQueryString(u *url.URL) {
	q := u.Query()
	if p.StartCursor != "" {
		q.Set("start_cursor", p.StartCursor)
	}
	if p.PageSize != 0 {
		q.Set("page_size", fmt.Sprintf("%d", p.PageSize))
	}
	u.RawQuery = q.Encode()
}

type PaginationResp struct {
	NextCursor string `json:"next_cursor"`
	HasMore    bool   `json:"has_more"`
}
