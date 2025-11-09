package notion

import "fmt"

const (
	origin = "https://api.notion.com"

	queryDataSourcePath       = "/v1/data_sources/%s/query"
	retrieveBlockPath         = "/v1/blocks/%s"
	retrieveBlockChildrenPath = "/v1/blocks/%s/children"
)

func queryDataSourceURL(dataSourceID string) string {
	return origin + fmt.Sprintf(queryDataSourcePath, dataSourceID)
}

func retrieveBlockURL(blockID string) string {
	return origin + fmt.Sprintf(retrieveBlockPath, blockID)
}

func retrieveBlockChildrenURL(blockID string) string {
	return origin + fmt.Sprintf(retrieveBlockChildrenPath, blockID)
}
