<script lang="ts">
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import type { Snippet } from 'svelte';

	let { href, children }: { href: string; children?: Snippet } = $props();

	let isCurrentPage = $derived($currentPage.startsWith(href));

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		{@render children?.()}
	</a>
</li>
