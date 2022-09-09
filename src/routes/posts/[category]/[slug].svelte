<script context="module">
  import { base } from "$app/paths";
  import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";

  export async function load({ params, fetch }) {
    const { slug, category } = params;
    const post = await fetch(`${base}/posts/${category}/${slug}_json`).then(
      (r) => r.json()
    );
    return {
      props: { post },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  export let post;
  let Giscus;

  let date = post.metadata.date.toUpperCase();
  onMount(async () => {
    const module = await import("@giscus/svelte");
    Giscus = module.Giscus;
  });
</script>

<span>
  <h1 class="title">{post.metadata.title}</h1>
  <a class="backto" href={`${base}/posts/${post.category}`}>
    {post.category}
    <div class="ico">
      <FaAngleRight />
    </div>
  </a>
</span>

<p class="info"><a href="https://github.com/junhyuk0801">JHSeo</a> {date}</p>

<div class="postContents">
  {@html post.content}
</div>

<svelte:component
  this={Giscus}
  src="https://giscus.app/client.js"
  repo="junhyuk0801/junhyuk0801.github.io"
  repoId="R_kgDOG33c6Q"
  category="General"
  categoryId="DIC_kwDOG33c6c4CBQGc"
  mapping="pathname"
  reactionsEnabled="1"
  emitMetadata="0"
  theme="light"
  lang="ko"
/>

<style>
  h1.title {
    margin-bottom: 0;
    display: inline;
  }

  span {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .ico {
    width: 20px;
    height: 20px;
    margin-left: 0.2em;
  }

  .backto {
    display: flex;
    align-items: center;
    color: #888;
    font-family: "Noto Sans KR", sans-serif;
  }
</style>
