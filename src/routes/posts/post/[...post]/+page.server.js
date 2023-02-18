import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const [mainCategory, subCategory, postName] = params.post.split('/');
		const post = await import(`../../../../posts/${mainCategory}/${subCategory}/${postName}.md`);
		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		throw error(404, err);
	}
};
