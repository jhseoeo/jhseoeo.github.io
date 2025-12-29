<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script lang="ts">
	import { browser } from '$app/environment';
	import '$lib/assets/scss/global.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen, colorTheme } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: any; children: Snippet } = $props();

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$effect(() => {
		currentPage.set(data.path);
	});

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	if (browser) {
		import('$lib/utils/theme').then(({ initializeTheme }) => {
			initializeTheme((theme) => colorTheme.set(theme));
		});
	}

	onMount(() => {
		navItems.forEach((item) => {
			preloadCode(item.route);
		});
	});
</script>

<!--
	The below markup is used on every page in the site. {@render children()} is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
	<Header />
	<main id="main" tabindex="-1">
		{#key data.path}
			<div class="content" in:fade={transitionIn} out:fade={transitionOut}>
				{@render children()}
			</div>
		{/key}
		<Footer />
	</main>
</div>
