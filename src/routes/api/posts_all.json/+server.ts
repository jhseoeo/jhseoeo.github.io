import fetchPosts from '$lib/assets/js/fetchPosts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({}) => {
	const options = {
		limit: -1
	};

	const { posts } = await fetchPosts(options);
	return json(posts);
};
