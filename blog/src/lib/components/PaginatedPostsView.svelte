<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage } from '$lib/config';
	import type { Post } from '$lib/types';

	interface Props {
		page: number;
		totalPosts: number;
		posts: Post[];
		title?: string;
		category?: string;
		paginationPath?: string;
	}

	let { page, totalPosts, posts, title, category, paginationPath }: Props = $props();

	let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts));

	let defaultTitle = $derived(() => {
		if (category) {
			return `Category: ${category}`;
		}
		return `Posts ${lowerBound}–${upperBound} of ${totalPosts}`;
	});
</script>

{#if posts && posts.length}
	<h1>
		{#if title}
			{title}
		{:else if category}
			{defaultTitle()}
			<br />
			<small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
		{:else}
			Posts {lowerBound}–{upperBound} of {totalPosts}
		{/if}
	</h1>
	<Pagination currentPage={page} {totalPosts} path={paginationPath} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} path={paginationPath} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/posts">Back to blog</a>
{/if}
