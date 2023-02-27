<script>
	export let color = 'yellow';

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
