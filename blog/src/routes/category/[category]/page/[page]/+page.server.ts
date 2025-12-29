import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';
import type { PageServerLoadEvent } from './$types';
import { apiEndpoints } from '$lib/utils/api';

export const load = async ({ url, params, fetch }: PageServerLoadEvent) => {
	const page = parseInt(params.page) || 1;
	const category = encodeURI(params.category);

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		throw redirect(301, `/category/${category}`);
	}

	let offset = (page - 1) * postsPerPage;

	const totalPostsRes = await fetch(apiEndpoints.postsCount(url.origin));
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset, category });

	return {
		posts,
		page,
		category,
		totalPosts: total
	};
};
