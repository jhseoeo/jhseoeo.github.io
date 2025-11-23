import { error } from '@sveltejs/kit';
import type { PageLoadEvent } from './$types';

const posts = import.meta.glob('../../../../posts/**/*.md', { eager: false });

export const load = async ({ params }: PageLoadEvent) => {
	const path = `../../../../posts/${params.post}.md`;

	if (!posts[path]) {
		console.error('Post not found:', path);
		console.log('Available posts:', Object.keys(posts));
		throw error(404, `Post not found: ${params.post}`);
	}

	try {
		const post = await posts[path]() as { default: any; metadata: any };
		return {
			component: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		console.error('Failed to load post:', params.post, err);
		throw error(500, `Failed to load post: ${params.post}`);
	}
};
