<script context="module">
    import { base } from '$app/paths';
    
    export async function load({ fetch, params }) {
        const {category} = params;
        const posts = await fetch(`${base}/posts/${category}_json`)
            .then((r) => r.json());

        return {
            props: {posts, category}
        }
    }
</script>
<script>
    export let posts, category;
    posts = posts.posts;
</script>
    
<div class="wrapper">
    <h1>{category}</h1>
    <p class="info">{posts.length} posts</p>
    {#each posts as post}
        <div class="post">
            <a href={`${base}/posts/${post.category}/${post.slug}`}>
                <h2 class="title">{post.metadata.title}</h2>
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
