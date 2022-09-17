<script context="module">
  import { base } from "$app/paths";
  import FaAngleRight from "svelte-icons/fa/FaAngleRight.svelte";

  export async function load({ params, fetch }) {
    const { mainCategory } = params;
    const posts = await fetch(`${base}/posts/${mainCategory}/posts_json`).then(
      (r) => r.json()
    );

    return {
      props: { posts, mainCategory },
    };
  }
</script>

<script>
  export let posts, mainCategory;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="wrapper">
  <h1>{mainCategory}</h1>
  <a class="backto" href={`${base}/posts`}>
    Posts
    <div class="ico">
      <FaAngleRight />
    </div>
  </a>
  {#each Object.keys(posts.posts) as subCategory}
    <div class="category">
      <a class="postname" href={`${base}/posts/${mainCategory}/${subCategory}`}
        >{subCategory}</a
      >
      <ul>
        {#each posts.posts[subCategory] as content}
          <li>
            <a
              href={`${base}/posts/${mainCategory}/${subCategory}/${content.slug}`}
            >
              <span>{content.metadata.title}</span>
              <span class="date"> - {content.metadata.date}</span>
            </a>
          </li>
        {/each}
      </ul>
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
    color: #38f;
    background-color: #e5e5e5;
    padding: 0.2em;
    padding-left: 0.4em;
    border-radius: 0.2em;
    margin-bottom: 0.5em;
  }

  .category {
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
    background-color: #e5e5e5;
    font-family: "Noto Sans KR", sans-serif;
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
    justify-content: flex-end;
  }

  .postname {
    font-size: 1.1em;
    font-weight: 600;
  }

  .postname:hover {
    color: #aaa;
  }

  ul {
    margin: 0;
    margin-top: 0.5em;
  }

  .date {
    font-size: 0.7em;
  }

  a {
    color: black;
  }

  a:hover {
    color: #40b3ff;
  }
</style>
