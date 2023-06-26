import loadRawPostsRecords from '$lib/assets/js/loadPosts';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = ({}: RequestEvent) => {
	const posts = loadRawPostsRecords();

	return json(Object.keys(posts).length);
};
