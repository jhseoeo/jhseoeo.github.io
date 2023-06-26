interface RawPost {
	metadata: PostMetadata;
}

interface PostMetadata {
	title: string;
	excerpt: string;
	coverImage: string;
	coverWidth: number;
	coverHeight: number;
	date: string;
	categories: string[];
	indexed: boolean;
}

interface Post extends PostMetadata {
	slug: string;
}

interface PostData {
	posts: Post[];
}
