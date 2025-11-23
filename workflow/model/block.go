package model

type Block struct {
	ID          string `json:"id"`
	Object      string `json:"object"`
	HasChildren bool   `json:"has_children"`
	Content
}
