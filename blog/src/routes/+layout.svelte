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
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/

	if (browser) {
		const isUserColorTheme = localStorage.getItem('color-theme');
		const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';

		if (isUserColorTheme ?? isOsColorTheme === 'dark') {
			localStorage.setItem('color-theme', 'dark');
			document.documentElement.setAttribute('color-theme', 'dark');
			colorTheme.set('dark');
		} else {
			localStorage.setItem('color-theme', 'light');
			document.documentElement.setAttribute('color-theme', 'light');
			colorTheme.set('light');
		}
	}

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
	<Header />
	<main id="main" tabindex="-1">
		{#key data.path}
			<div class="content" in:fade={transitionIn} out:fade={transitionOut}>
				<slot />
			</div>
		{/key}
		<Footer />
	</main>
</div>
