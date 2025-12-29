import fetchPosts from '$lib/assets/js/fetchPosts';
import { siteURL, siteLink, cacheMaxAge } from '$lib/config';
import { getToday, formatDate } from '$lib/utils/date';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({}: RequestEvent) => {
	const data = await fetchPosts({ limit: -1 });
	const body = renderSitemap(data.posts);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${cacheMaxAge}`,
		'Content-Type': 'application/xml'
	};

	return new Response(body, {
		status: 200,
		headers
	});
};

function renderSitemap(posts: Post[]) {
	const today = getToday();
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>${siteLink}</loc>
			<lastmod>${today}</lastmod>
			<changefreq>weekly</changefreq>
			<priority>0.3</priority>
		</url>
		${posts
			.filter((post) => post.indexed)
			.map(
				(post) => `<url>
			<loc>https://${siteURL}/posts/post/${post.slug}</loc>
			<lastmod>${formatDate(post.date)}</lastmod>
			<changefreq>weekly</changefreq>
		</url>`
			)}
	</urlset>
	`;
}
