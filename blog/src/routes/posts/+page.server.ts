import type { PageServerLoadEvent } from './$types';
import { apiEndpoints } from '$lib/utils/api';

export const load = async ({ url, fetch }: PageServerLoadEvent) => {
	const postRes = await fetch(apiEndpoints.postsJson(url.origin));
	const posts = await postRes.json();

	const totalRes = await fetch(apiEndpoints.postsCount(url.origin));
	const total = await totalRes.json();

	return { posts, total };
};
