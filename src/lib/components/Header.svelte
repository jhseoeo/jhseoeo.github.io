<script>
	import MainNav from './MainNav.svelte';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};
</script>

<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<MainNav />
	<HamburgerMenuButton />

	<a href="/" class="site-title">
		{siteTitle}
	</a>

	<DarkModeToggle />
</header>
