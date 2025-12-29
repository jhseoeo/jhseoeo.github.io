/**
 * API endpoint URL builder utilities
 */

export const apiEndpoints = {
	/**
	 * Get posts in JSON format
	 */
	postsJson: (origin?: string) => origin ? `${origin}/api/posts.json` : '/api/posts.json',

	/**
	 * Get all posts (without pagination)
	 */
	postsAllJson: (origin?: string) => origin ? `${origin}/api/posts_all.json` : '/api/posts_all.json',

	/**
	 * Get total post count
	 */
	postsCount: (origin?: string) => origin ? `${origin}/api/posts/count` : '/api/posts/count',
} as const;
