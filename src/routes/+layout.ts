import { error } from '@sveltejs/kit';
import type { LayoutLoad, LayoutLoadEvent } from './$types';

// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(500, err as Error);
	}
};
