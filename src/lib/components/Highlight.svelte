<script lang="ts">
	type Color = 'yellow' | 'red' | 'green' | 'blue';
	export let color: Color = 'yellow';

	const colorMap = {
		yellow: 'var(--highlightYellow)',
		red: 'var(--highlightRed)',
		green: 'var(--highlightGreen)',
		blue: 'var(--highlightBlue)'
	};
</script>

<span style={`background-color: ${colorMap[color]}`}>
	<slot />
</span>
