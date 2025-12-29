<!-- Renders posts listed by category -->
<script lang="ts">
	import PaginatedPostsView from '$lib/components/PaginatedPostsView.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
	const { page, category, totalPosts, posts } = data;
</script>

<svelte:head>
	<title>Blog category {category} - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<PaginatedPostsView
	{page}
	{totalPosts}
	{posts}
	{category}
	paginationPath="/category/{category}/page"
/>
