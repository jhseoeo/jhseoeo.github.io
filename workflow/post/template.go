package post

type templateParams struct {
	Title        string
	Date         string
	Categories   []string
	CategoriesJS string // JSON array format for JS
	CoverImage   string
	Excerpt      string
	Imports      []string
	Content      string
}

const postTmpl = `---
title: '{{ .Title }}'
date: '{{ .Date }}'
categories: {{ range .Categories }}
  - '{{ . }}'{{ end }}
coverImage: '{{ .CoverImage }}'
coverWidth: 16
coverHeight: 9
excerpt: '{{ .Excerpt }}'
indexed: false
exposed: true
---
{{ range .Imports }}
{{ . }}{{ end }}

{{ .Content }}
`

const svelteTmpl = `<script context="module" lang="ts">
  export const metadata = {
    title: '{{ .Title }}',
    date: '{{ .Date }}',
    categories: {{ .CategoriesJS }},
    coverImage: '{{ .CoverImage }}',
    coverWidth: 16,
    coverHeight: 9,
    excerpt: '{{ .Excerpt }}',
    indexed: false,
    exposed: true
  };
</script>

{{ .Content }}
`
