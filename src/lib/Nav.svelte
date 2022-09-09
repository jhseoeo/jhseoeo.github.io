<script>
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import GHCorner from '$lib/GithubCorner.svelte'
	import GoChevronLeft from 'svelte-icons/go/GoChevronLeft.svelte'
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'

	let opened = false;

</script>
<style>
	.topbar {
		grid-column: 1 / 4;
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		background-color: #f1f2f3;
		border-bottom: 1px solid #CCC;
		z-index: 999;
	}
	
	.title {		
		font-size: 2em;
		font-family: 'Jua', sans-serif;
		color: #000;
	}

	.title:hover {
		color: #666;
	}
	
	.menu {
		position: absolute;
		width: 32px;
		height: 32px;
		left: 0.5em;
		margin: 0.2em;
		border: #CCC solid 1px;
		border-radius: 0.7em;
		cursor: pointer;
	}

	.menu:active {
		background-color: #DDD;
	}

	.ghcorner {
		position: absolute;
		top: 0;
		right: 0;
		transform: scale(0.8);
	}

	.sidebar {
		grid-row: 2;
		justify-self: start;
		position: sticky;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background-color: #eaeaea;
		border-right: #CCC 1px solid;
		width: 55%;
		height: calc(100vh - 51px);
		top: 51px;
		z-index: 999;
	}

	.close {
		position: absolute;
		right: 0;
		width: 3em;
		height: 3em;
		color: #999;
		cursor: pointer;
	}

	.close:active {
		color: #BBB;
		background-color: #777;
	}

	.wrapper {
		margin: auto auto;
		transform: translateY(-2em);
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Overpass', sans-serif;
	}
	
	.logo {
		border-radius: 99em;
	}

	.name {
		font-family: "Lucida Handwriting", cursive;
		color: #000;
		font-size: 1.8em;
		margin: 0.5em;
		margin-bottom: 1em;
	}

	
	ul {
		margin-left: 0.5em;
	}
	
	li {
		color: #333;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	li:hover {
		color: #777;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link {
		width: fit-content;
		color: #333;
		position: relative;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link:hover {
		color: #777;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link:after{
		content: '';
		position: absolute;
		width: 0; 
		height: 2px;
		display: block;
		margin-top: 0px;
		right: 0;
		background: #777;
		transition: width .2s ease;
		-webkit-transition: width .2s ease;
	}
	
	.link:hover:after{
		width: 100%;
		left: 0;
		background: #777;
	}

</style>

<nav class="topbar">
	<div class="menu" on:click={() => {opened = true;}}>
		<IoIosMenu/>
	</div>
	<div><a class="title" href="{base}/">집밥서선생</a></div>
	<div class="ghcorner">
		<GHCorner/>
	</div>
</nav>

{#if opened}
	<aside class="sidebar" transition:fly={{ x: -300, duration: 500, opacity: 1}}>
		<div class="close" on:click={() => {opened = false;}}>
			<GoChevronLeft/>
		</div>
		<div class="wrapper">
			<div class="profile">
				<img class="logo" src="/face.png" alt="logo">
				<span class="name">JHSeo</span>
			</div>
			<ul>
				<li><a href="{base}/"><h3 class="link">HOME</h3></a></li>
				<li><a href="{base}/posts"><h3 class="link">POSTS</h3></a></li>
				<li><a href="{base}/archive"><h3 class="link">ARCHIVE</h3></a></li>
				<li><a href="{base}/about"><h3 class="link">ABOUT</h3></a></li>
			</ul>
		</div>
	</aside>
{/if}