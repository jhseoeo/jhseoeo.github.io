/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'YOUR BLOG TITLE';
export const siteDescription = 'YOUR BLOG DESCRIPTION';
export const siteURL = 'YOURNAME.github.io';
export const siteLink = 'https://YOURNAME.github.io';
export const siteAuthor = 'YOUR NAME';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 15;

// Cache duration in seconds for RSS and sitemap
export const cacheMaxAge = 600;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Posts',
		route: '/posts'
	},
	{
		title: 'Categories',
		route: '/category'
	},
	{
		title: 'About',
		route: '/about'
	},
	{
		title: 'RSS',
		route: '/api/rss.xml'
	},
	{
		title: 'Home',
		route: '/#'
	}
];

export const giscusConfig = {
	activate: true,
	repo: 'YOUR_REPO',
	repoId: 'YOUR_REPO_ID',
	category: 'YOUR_CATEGORY',
	categoryId: 'YOUR_CATEGORY_ID',
	mapping: 'url',
	lang: 'ko'
};
