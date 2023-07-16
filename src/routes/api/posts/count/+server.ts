import loadRawPostsRecords from '$lib/assets/js/loadPosts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({}) => {
	const posts = await loadRawPostsRecords();

	return json(Object.keys(posts).length);
};
