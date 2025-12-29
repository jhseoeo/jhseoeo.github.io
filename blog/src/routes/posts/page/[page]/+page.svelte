<script lang="ts">
	import PaginatedPostsView from '$lib/components/PaginatedPostsView.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
	const { page, totalPosts, posts } = data;
</script>

<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<PaginatedPostsView {page} {totalPosts} {posts} />
