export default function loadRawPostsRecords() {
	return import.meta.glob<RawPost>('/src/posts/**/*.md');
}
