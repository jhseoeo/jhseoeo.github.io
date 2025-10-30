---
title: 'Highlighting text using mdsvex'
date: '2021-12-01'
categories:
  - 'sveltekit'
  - 'markdown'
  - 'svelte'
coverImage: '/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg'
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
indexed: false
exposed: true
---

<script>
	import Highlight from '$lib/components/Highlight.svelte';
</script>

This is plain text<br>
<Highlight>This is highlighted text</Highlight><br>
<Highlight color="yellow">This is yellow-highlighted text</Highlight><br>
<Highlight color="red">This is red-highlighted text</Highlight><br>
<Highlight color="green">This is green-highlighted text</Highlight><br>
<Highlight color="blue">This is blue-highlighted text</Highlight><br>
