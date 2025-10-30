<script>
	import { browser } from '$app/environment';
	import { colorTheme } from '$lib/assets/js/store';

	const toggleDarkMode = () => {
		if (browser) {
			let theme = localStorage.getItem('color-theme');
			if (theme === 'light') {
				document.documentElement.setAttribute('color-theme', 'dark');
				localStorage.setItem('color-theme', 'dark');
				colorTheme.set('dark');
			} else {
				document.documentElement.setAttribute('color-theme', 'light');
				localStorage.setItem('color-theme', 'light');
				colorTheme.set('light');
			}
		}
	};
</script>

<button class="toggle-theme" onclick={toggleDarkMode}>
	{#if $colorTheme === 'dark'}
		☀️
	{:else}
		🌙
	{/if}
</button>
