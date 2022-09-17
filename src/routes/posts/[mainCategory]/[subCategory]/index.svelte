<script context="module">
  import { base } from "$app/paths";
  import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";

  export async function load({ fetch, params }) {
    const { mainCategory, subCategory } = params;
    const posts = await fetch(
      `${base}/posts/${mainCategory}/${subCategory}/posts_json`
    ).then((r) => r.json());

    return {
      props: { posts, mainCategory, subCategory },
    };
  }
</script>

<script>
  export let posts, mainCategory, subCategory;
  posts = posts.posts;
</script>

<div class="wrapper">
  <h1>[{mainCategory}] {subCategory}</h1>
  <p class="info">{posts.length} posts</p>
  <div>
  <a class="backto" href={`${base}/posts/${mainCategory}`}>
    {mainCategory}
    <div class="ico">
      <FaAngleRight />
    </div>
  </a>
  {#each posts as post}
    <div class="post">
      <a
        href={`${base}/posts/${post.mainCategory}/${post.subCategory}/${post.slug}`}
      >
        <h2 class="title">{post.metadata.title}</h2>
      </a>
      <p class="date">{post.metadata.date}</p>
      <p class="content">{post.metadata.excerpt}</p>
    </div>
  {/each}
</div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2em;
    color: #38f;
    background-color: #e5e5e5;
    padding: 0.2em;
    padding-left: 0.4em;
    border-radius: 0.2em;
    margin-bottom: 0;
  }

  .info {
    align-self: end;
    margin-bottom: 20px;
  }

  .ico {
    width: 20px;
    height: 20px;
    margin-left: 0.2em;
  }

  .backto {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    color: #888;
    font-family: "Noto Sans KR", sans-serif;
  }

  .post {
    margin-bottom: 10px;
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
