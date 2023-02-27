<script>
	import PostsList from '$lib/components/PostsList.svelte';
	export let data;
</script>

<svelte:head>
	<title>JHSeo Blog</title>
	<meta data-key="description" name="description" content="JHSeo Blog" />
</svelte:head>

<h1>JHSeo Blog</h1>

환영합니다! JHSeo의 블로그입니다.

<h2>Recent Posts</h2>
<hr />
<PostsList posts={data.posts.slice(0, 3)} />
<a href="/posts">...{data.total - 3} more posts</a>

<br /><br />

<h2>About Blog</h2>
<hr />
이 블로그의 소스코드를 확인하려면
<a href="https://github.com/junhyuk0801/junhyuk0801.github.io">
	https://github.com/junhyuk0801/junhyuk0801.github.io
</a>
