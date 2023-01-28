/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = '집밥서선생';
export const siteDescription = '개발블로그';
export const siteURL = 'junhyuk0801.github.io';
export const siteLink = 'https://junhyuk0801.github.io';
export const siteAuthor = 'JHSeo';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 15;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Posts',
		route: '/posts'
	},
	{
		title: 'Categories',
		route: '/posts/category'
	},
	{
		title: 'About',
		route: '/about'
	}
];
