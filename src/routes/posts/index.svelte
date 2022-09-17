<script context="module">
    import { base } from '$app/paths';
    
    export async function load({ fetch }) {
        const posts = await fetch(`${base}/posts/posts_json`)
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
	<h1>Categories</h1>
	{#each Object.keys(posts) as mainCategory}
        <div class="category">
            <a class="postname" href={`${base}/posts/${mainCategory}`}>{mainCategory}</a>

            {#each Object.keys(posts[mainCategory]) as subCategory}
            <details>
                <summary>{subCategory}</summary>
                <ul> {#each posts[mainCategory][subCategory] as content}
                    <li>
                        <a href={`${base}/posts/${mainCategory}/${subCategory}/${content.slug}`}>
                            <span>{content.metadata.title}</span>
                            <span class="date"> - {content.metadata.date}</span>
                        </a>
                    </li>
                {/each} </ul>
            </details>
            {/each}
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
		margin-bottom: 0.5em;
	}

    .category {
        margin: 1em;
        font-size : 1.3em;
        padding: 1em;
        border-radius: 1em;
        background-color: #E5E5E5;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .postname {
        font-size: 1.1em;
        font-weight: 600;
    }

    .postname:hover {
	    color: #AAA;
    }
    
    details {
        margin: 0.25em
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
