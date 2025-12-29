<script lang="ts">
	import { browser } from '$app/environment';
	import { colorTheme } from '$lib/assets/js/store';
	import { toggleTheme, getStoredTheme } from '$lib/utils/theme';

	const toggleDarkMode = () => {
		if (browser) {
			const currentTheme = getStoredTheme() ?? 'light';
			toggleTheme(currentTheme, (theme) => colorTheme.set(theme));
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
