import fetchPosts from '$lib/assets/js/fetchPosts';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';

export const load = async ({ params }: PageServerLoadEvent) => {
	const category = params.category;
	const options = { category, limit: -1 };
	const { posts } = await fetchPosts(options);

	return {
		posts,
		category,
		page: 1,
		total: posts.length
	};
};

// export const load = ({ params }: PageServerLoadEvent) => {
// 	throw redirect(301, `/category/${params.category}/page/1`);
// };
