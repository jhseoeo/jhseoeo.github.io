import fetchPosts from '$lib/assets/js/fetchPosts';
import { json, error } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({}: RequestEvent) => {
	try {
		const options = {
			limit: -1
		};

		const { posts } = await fetchPosts(options);
		return json(posts);
	} catch (err) {
		console.error('Error fetching posts:', err);
		return error(500, {
			message: err instanceof Error ? err.message : 'Failed to fetch posts'
		});
	}
};
