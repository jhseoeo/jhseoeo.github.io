package post

type templateParams struct {
	Title      string
	Date       string
	Categories []string
	CoverImage string
	Excerpt    string
	Imports    []string
	Content    string
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
