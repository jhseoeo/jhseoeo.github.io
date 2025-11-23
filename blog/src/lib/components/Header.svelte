<script lang="ts">
	import MainNav from './MainNav.svelte';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		if (main) main.focus();
	};
</script>

<header>
	<a onclick={(e) => { e.preventDefault(); focusMain(); }} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<MainNav />
	<HamburgerMenuButton />

	<a href="/" class="site-title">
		{siteTitle}
	</a>

	<DarkModeToggle />
</header>
