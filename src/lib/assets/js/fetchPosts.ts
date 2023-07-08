import { postsPerPage } from '$lib/config';
import loadRawPostsRecords from './loadPosts';

export default async function fetchPosts({
	offset = 0,
	limit = postsPerPage,
	category = ''
} = {}): Promise<PostData> {
	const posts = await loadRawPostsRecords();

	let sortedPosts = posts
		.filter((post) => post.exposed)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth,
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories,
		indexed: post.indexed,
		exposed: post.exposed
	}));

	return {
		posts: sortedPosts
	};
}
