import { error } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const [mainCategory, subCategory, postName] = params.post.split('/');

		// const post = await import(`../../../../posts/${mainCategory}/${subCategory}/${postName}.md`);
		const result = {
			params
			// meta: { ...post.metadata, slug: params.post }
		};
		// console.log(result);
		return result;
	} catch (err) {
		throw error(404, err as Error);
	}
};
