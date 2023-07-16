<script lang="ts">
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import { fade } from 'svelte/transition';

	let opened = false;
	let showCopyBtn = false;
	let codeBlock: HTMLDivElement;

	const toggleClick = () => {
		opened = !opened;
	};
	function copyText() {
		const text = codeBlock.getElementsByTagName('code')[0].innerText;

		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert('텍스트가 복사되었습니다!');
			})
			.catch((error) => {
				console.error('텍스트 복사 실패:', error);
			});
	}

	const onMouseEnter = () => {
		showCopyBtn = true;
	};

	const onMouseLeave = () => {
		showCopyBtn = false;
	};
</script>

<div
	class={`codeBlockWrapper ${opened ? 'opened' : 'closed'}`}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
>
	<div bind:this={codeBlock}>
		<slot />
	</div>

	{#if showCopyBtn}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="copyBtn" transition:fade={{ duration: 150 }} on:click={copyText}>
			<MdContentCopy />
		</div>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#if opened}
		<div class="btn closeBtn" on:click={toggleClick}>Hide⯅</div>
	{:else}
		<div class="btn openBtn" on:click={toggleClick}>Show⯆</div>
	{/if}
</div>

<style>
</style>
