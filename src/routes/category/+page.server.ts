import type { uniqueCategory } from '$lib/types/uniqueCatrgory';
import type { PageServerLoadEvent } from './$types';

export const load = async ({ url, fetch }: PageServerLoadEvent) => {
	const res = await fetch(`${url.origin}/api/posts_all.json`);
	let posts: Post[] = await res.json();

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
