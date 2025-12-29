package dto

import "encoding/json"

// unmarshalResults is a generic helper for unmarshaling paginated results with object type filtering
func unmarshalResults[T any](
	data []byte,
	expectedObjectType string,
	unmarshalResult func([]byte) (T, error),
) ([]T, error) {
	var aux struct {
		Results []json.RawMessage `json:"results"`
	}

	if err := json.Unmarshal(data, &aux); err != nil {
		return nil, err
	}

	var results []T
	for _, elem := range aux.Results {
		// Check object type
		var header struct {
			ObjectType string `json:"object"`
		}
		if err := json.Unmarshal(elem, &header); err != nil {
			return nil, err
		}

		// Skip if not expected type
		if header.ObjectType != expectedObjectType {
			continue
		}

		// Unmarshal to target type
		item, err := unmarshalResult(elem)
		if err != nil {
			return nil, err
		}
		results = append(results, item)
	}

	return results, nil
}
