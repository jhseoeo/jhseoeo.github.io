import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const { params } = data;
	const [mainCategory, subCategory, postName] = params.post.split('/');

	const post = await import(`../../../../posts/${mainCategory}/${subCategory}/${postName}.md`);

	return {
		meta: { ...post.metadata, slug: params.post },
		PostContent: post.default
	};
};
