// IMPORTANT: update all these property values in src/lib/config.js
import fetchPosts from '$lib/assets/js/fetchPosts';
import { siteTitle, siteDescription, siteURL, siteLink, cacheMaxAge } from '$lib/config';
import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({}: RequestEvent) => {
	const data = await fetchPosts({ limit: -1 });
	const body = renderRSS(data.posts);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${cacheMaxAge}`,
		'Content-Type': 'application/xml'
	};
	return new Response(body, {
		status: 200,
		headers
	});
};

function renderRSS(posts: Post[]) {
	return `<?xml version="1.0" encoding="UTF-8" ?>
		<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
			<channel>
				<title>${siteTitle}</title>
				<description>${siteDescription}</description>
				<link>${siteLink}</link>
				<atom:link href="https://${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) =>
							`<item>
						<guid isPermaLink="true">https://${siteURL}/posts/post/${post.slug}</guid>
						<title>${post.title}</title>
						<link>https://${siteURL}/posts/post/${post.slug}</link>
						<description>${post.excerpt}</description>
						<pubDate>${new Date(post.date).toUTCString()}</pubDate>
					</item>`
					)
					.join('')}
			</channel>
		</rss>
	`;
}
