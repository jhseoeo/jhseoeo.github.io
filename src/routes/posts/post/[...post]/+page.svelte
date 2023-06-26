<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	import Giscus from '@giscus/svelte';
	import { colorTheme } from '$lib/assets/js/store';
	import { giscusConfig } from '$lib/config';

	export let data;

	const { title, excerpt, date, coverImage, coverWidth, coverHeight, categories } = data.meta;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>

	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date.slice(0, 10)}
	</div>

	{@html data.PostContent}

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

{#if giscusConfig.activate}
	<Giscus
		repo={giscusConfig.repo}
		repoId={giscusConfig.repoId}
		category={giscusConfig.category}
		categoryId={giscusConfig.categoryId}
		mapping={giscusConfig.mapping}
		strict="0"
		reactionsEnabled="1"
		emitMetadata="0"
		inputPosition="bottom"
		theme={$colorTheme}
		lang={giscusConfig.lang}
	/>
{/if}
