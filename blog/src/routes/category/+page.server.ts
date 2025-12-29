import type { uniqueCategory } from '$lib/types/uniqueCatrgory';
import type { PageServerLoadEvent } from './$types';
import { apiEndpoints } from '$lib/utils/api';

export const load = async ({ url, fetch }: PageServerLoadEvent) => {
	const res = await fetch(apiEndpoints.postsAllJson(url.origin));

	if (!res.ok) {
		console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
		return {
			uniqueCategories: []
		};
	}

	let posts: Post[] = await res.json();

	if (!Array.isArray(posts)) {
		console.error('Expected posts to be an array, got:', typeof posts);
		return {
			uniqueCategories: []
		};
	}

	let uniqueCategories: Record<string, uniqueCategory> = {};

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				const item = uniqueCategories[category];
				if (item === undefined) return;
				uniqueCategories[category] = {
					title: item.title,
					count: item.count + 1
				};
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	const sortedUniqueCategories = Array.from(Object.values(uniqueCategories)).sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
