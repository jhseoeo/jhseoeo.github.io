<script context="module">
	import { base } from '$app/paths';

	export async function load({ fetch }) {
		const posts = await fetch(`${base}/index_json`)
			.then((r) => r.json());
		
		return {
			props: posts
		}
	}
</script>
<script>
	export let posts;
</script>

<svelte:head>
<title>Home</title>
</svelte:head>

<div class="wrapper">
	<h1>Recent Posts</h1>
	<p class="info">{posts.length} posts</p>
	{#each posts as post}
		<div class="post">
			<a href={`${base}/posts/${post.category}/${post.slug}`}>
				<h2 class="title">[{post.category}] {post.metadata.title}</h2>
			</a>
			<p class="date">{post.metadata.date}</p>
			<p class="content">{post.metadata.excerpt}</p>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: 2em;
		color: #38F;
		background-color: #E5E5E5;
		padding: 0.2em;
		padding-left: 0.4em;
		border-radius: 0.2em;
		margin-bottom: 0;
	}

	.info {
		align-self: end;
	}

	.post {
		margin-top: 10px;
	}

	h2.title {
		display: inline;
		margin-bottom: 0;
	}

	h2.title:hover {
		color: #40b3ff;
	}

	p {
		color: #555;
		margin: 0;
	}

	.date {
		font-size: 0.8em;
	}

	.content {
		font-size: 1em;
	}
</style>
