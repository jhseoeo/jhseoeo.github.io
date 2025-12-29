export default async function loadRawPostsRecords() {
	const rawPosts = import.meta.glob<RawPost>('/src/posts/**/*.{md,svelte}');
	const posts = await Promise.all(
		Object.entries(rawPosts).map(async ([path, resolver]) => {
			try {
				const { metadata } = await resolver();
				const slug = path.replace('/src/posts/', '').replace(/\.(md|svelte)$/, '');
				return { ...metadata, slug };
			} catch (err) {
				console.error(`Error loading post from ${path}:`, err);
				throw new Error(`Failed to load post from ${path}: ${err instanceof Error ? err.message : String(err)}`);
			}
		})
	);

	return posts.filter((post) => post.exposed);
}
