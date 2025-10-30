import { redirect, type LoadEvent } from '@sveltejs/kit';

export const load = ({}: LoadEvent) => {
	throw redirect(301, '/posts');
};
