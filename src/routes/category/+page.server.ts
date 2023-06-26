import type { uniqueCategory } from '$lib/types/uniqueCatrgory';
import type { PageServerLoadEvent } from './$types';

export const load = async ({ url, fetch }: PageServerLoadEvent) => {
	const res = await fetch(`${url.origin}/api/posts_all.json`);
	let posts: Post[] = await res.json();

	let uniqueCategories: Map<string, uniqueCategory> = new Map();

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				let item = uniqueCategories.get(category);
				if (item === undefined) return;
				item.count += 1;
				uniqueCategories.set(category, item);
			} else {
				uniqueCategories.set(category, {
					title: category,
					count: 1
				});
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title - b.title);

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
