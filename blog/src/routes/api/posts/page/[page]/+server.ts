import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({ params }: RequestEvent) => {
	const page = parseInt(params.page) || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
};
