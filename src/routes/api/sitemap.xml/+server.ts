import fetchPosts from '$lib/assets/js/fetchPosts';
import { siteURL, siteLink } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({}) => {
	const data = await fetchPosts({ limit: -1 });
	const body = renderSitemap(data.posts);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	};

	return new Response(body, {
		status: 200,
		headers
	});
};

function renderSitemap(posts: Post[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
		<url>
			<loc>${siteLink}</loc>
			<lastmod>2023-01-01</lastmod>
			<changefreq>weekly</changefreq>
			<priority>1.0</priority>
		</url>
		${posts
			.filter((post) => post.indexed)
			.map(
				(post) => `<url>
					<loc>https://${siteURL}/posts/post/${post.slug}</loc>
					<lastmod>${post.date.slice(0, 10)}</lastmod>
					<changefreq>weekly</changefreq>
					<priority>0.9</priority>
				</url>`
			)}
	</urlset>
	`;
}
