export default async function loadRawPostsRecords() {
	const rawPosts = import.meta.glob<RawPost>('/src/posts/**/*.md');
	const posts = await Promise.all(
		Object.entries(rawPosts).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.replace('/src/posts/', '').replace('.md', '');
			return { ...metadata, slug };
		})
	);

	return posts.filter((post) => post.exposed);
}
