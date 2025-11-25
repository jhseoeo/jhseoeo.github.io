package model

type Block struct {
	ID          string   `json:"id"`
	Object      string   `json:"object"`
	HasChildren bool     `json:"has_children"`
	Children    []*Block `json:"-"`
	Content
}

func (b *Block) ToDocs(depth int) string {
	var ret string
	ret += b.Content.ToDocs(depth)
	for _, child := range b.Children {
		ret += child.ToDocs(depth + 1)
	}
	return ret
}
