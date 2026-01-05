/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

import type { Mapping } from '@giscus/svelte';

export const siteTitle = '집밥서선생';
export const siteDescription = '개발등 이것저것 하는 블로그';
export const siteURL = 'jhseoeo.github.io';
export const siteLink = 'https://jhseoeo.github.io';
export const siteAuthor = 'JHSeo';

// Controls how many posts are shown per page on thㅊe main blog index pages
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
	mapping: 'url' as Mapping,
	lang: 'ko'
};
