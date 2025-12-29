<!-- Renders posts listed by category -->
<script lang="ts">
	import PaginatedPostsView from '$lib/components/PaginatedPostsView.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
	const { page, totalPosts, posts } = data;
</script>

<svelte:head>
	<title>Blog category - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<PaginatedPostsView {page} {totalPosts} {posts} />
