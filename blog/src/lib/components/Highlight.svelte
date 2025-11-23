<script lang="ts">
	import type { Snippet } from 'svelte';

	let { color = 'yellow', children }: { color?: string; children?: Snippet } = $props();

	const colorMap = {
		yellow: 'var(--highlightYellow)',
		red: 'var(--highlightRed)',
		green: 'var(--highlightGreen)',
		blue: 'var(--highlightBlue)'
	};
</script>

<span style={`background-color: ${colorMap[color]}`}>
	{@render children?.()}
</span>
