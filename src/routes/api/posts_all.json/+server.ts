import fetchPosts from '$lib/assets/js/fetchPosts';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({}: RequestEvent) => {
	const options = {
		limit: -1
	};

	const { posts } = await fetchPosts(options);
	return json(posts);
};
