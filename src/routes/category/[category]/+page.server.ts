import fetchPosts from '$lib/assets/js/fetchPosts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
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
