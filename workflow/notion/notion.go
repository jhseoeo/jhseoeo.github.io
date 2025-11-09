package notion

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"

	"github.com/jhseoeo/notion-blog/workflow/notion/dto"
	"github.com/jhseoeo/notion-blog/workflow/notion/model"
)

type NotionClient struct {
	secret string
}

func NewNotionClient(secret string) *NotionClient {
	c := &NotionClient{
		secret: secret,
	}
	return c
}

func (c *NotionClient) authorizeRequest(req *http.Request) {
	req.Header.Set("Authorization", "Bearer "+c.secret)
	req.Header.Set("Notion-Version", "2025-09-03")
	req.Header.Set("Content-Type", "application/json")
}

func (c *NotionClient) GetPages(dataSourceID string) ([]*model.Page, error) {
	var (
		cursor string
		ret    []*model.Page
	)
	for {
		reqPayload := dto.QueryDataSourceRequest{
			PaginationReq: dto.PaginationReq{
				PageSize:    100,
				StartCursor: cursor,
			},
		}
		reqBody, err := json.Marshal(reqPayload)
		if err != nil {
			return nil, err
		}

		req, err := http.NewRequest(http.MethodPost, queryDataSourceURL(dataSourceID), bytes.NewReader(reqBody))
		if err != nil {
			return nil, err
		}
		c.authorizeRequest(req)

		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()

		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, err
		}

		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("failed to query data source: %d %s", resp.StatusCode, string(respBody))
		}

		var result dto.QueryDataSourceResponse
		if err := json.Unmarshal(respBody, &result); err != nil {
			return nil, err
		}

		ret = append(ret, result.Pages...)
		if !result.HasMore {
			break
		}
		cursor = result.NextCursor
	}

	return ret, nil
}

func (c *NotionClient) RetrieveBlockChildren(blockID string) ([]*model.Block, error) {
	var (
		cursor string
		ret    []*model.Block
	)
	for {
		u, err := url.Parse(retrieveBlockChildrenURL(blockID))
		if err != nil {
			return nil, err
		}
		paginationReq := dto.PaginationReq{
			PageSize:    100,
			StartCursor: cursor,
		}
		paginationReq.ApplyQueryString(u)

		req, err := http.NewRequest(http.MethodGet, u.String(), nil)
		if err != nil {
			return nil, err
		}
		c.authorizeRequest(req)

		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()

		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, err
		}
		fmt.Println(string(respBody))

		if resp.StatusCode != http.StatusOK {
			return nil, fmt.Errorf("failed to retrieve block: %d %s", resp.StatusCode, string(respBody))
		}

		var result dto.RetrieveBlockChildrenResponse
		if err := json.Unmarshal(respBody, &result); err != nil {
			return nil, err
		}
		ret = append(ret, result.Blocks...)
		if !result.HasMore {
			break
		}
		cursor = result.NextCursor
	}
	return ret, nil
}
