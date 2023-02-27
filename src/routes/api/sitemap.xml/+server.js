import { siteURL, siteLink } from '$lib/config';

export const prerender = true;

export const GET = async () => {
	const data = await Promise.all(
		Object.entries(import.meta.glob('/src/posts/**/*.md')).map(async ([path, page]) => {
			const { metadata } = await page();
			const slug = path.replace('/src/posts/', '').replace('.md', '');
			return { ...metadata, slug };
		})
	).then((posts) => {
		return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	});

	const body = render(data);
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	};
	return new Response(body, {
		status: 200,
		headers
	});
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>${siteLink}</loc>
    <lastmod>2023-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
</url>
${posts.map(
	(post) => `<url>
    <loc>https://${siteURL}/posts/post/${post.slug}</loc>
    <lastmod>${post.date.slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
</url>`
)}
</urlset>`;
