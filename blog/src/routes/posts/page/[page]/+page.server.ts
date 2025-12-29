import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { apiEndpoints } from '$lib/utils/api';

export const load = async ({ url, params, fetch }: PageServerLoadEvent) => {
	const page = parseInt(params.page) || 1;

	// Keeps from duplicationg the blog index route as page 1
	if (page <= 1) {
		throw redirect(301, '/posts');
	}

	let offset = (page - 1) * postsPerPage;

	const totalPostsRes = await fetch(apiEndpoints.postsCount(url.origin));
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset });

	return {
		posts,
		page,
		totalPosts: total
	};
};
