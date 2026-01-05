<script lang="ts">
	import MdContentCopy from 'svelte-icons/md/MdContentCopy.svelte';
	import { fade } from 'svelte/transition';

	let opened = false;
	let showCopyBtn = false;
	let showCopiedToast = false;
	let codeBlock: HTMLDivElement;

	const toggleClick = () => {
		opened = !opened;
	};

	function copyText() {
		const text = codeBlock.getElementsByTagName('code')[0].innerText;

		navigator.clipboard
			.writeText(text)
			.then(() => {
				showCopiedToast = true;
				setTimeout(() => {
					showCopiedToast = false;
				}, 2000);
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
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="copyBtn" transition:fade={{ duration: 150 }} on:click={copyText}>
			<MdContentCopy />
		</div>
	{/if}

	{#if showCopiedToast}
		<div class="copiedToast" transition:fade={{ duration: 200 }}>
			✓ Copied to clipboard
		</div>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	{#if opened}
		<div class="btn closeBtn" on:click={toggleClick}>Hide⯅</div>
	{:else}
		<div class="btn openBtn" on:click={toggleClick}>Show⯆</div>
	{/if}
</div>

<style lang="scss">
	.codeBlockWrapper {
		position: relative;
		margin: var(--space-lg) 0;
		overflow: hidden;
		transition: all var(--transition-base);

		// Collapsible functionality
		&.closed {
			max-height: 400px;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 120px;
				background: linear-gradient(
					to bottom,
					transparent,
					var(--code-bg)
				);
				pointer-events: none;
			}
		}

		&.opened {
			max-height: none;
		}
	}

	// Copy button styling
	.copyBtn {
		position: absolute;
		top: var(--space-md);
		right: var(--space-md);
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-md);
		cursor: pointer;
		color: var(--code-text);
		transition: all var(--transition-base);
		z-index: 10;
		box-shadow: var(--shadow-md);

		&:hover {
			background: rgba(255, 255, 255, 0.2);
			border-color: var(--accent-light);
			transform: scale(1.05);
			box-shadow: var(--shadow-lg), 0 0 20px rgba(var(--accent-rgb), 0.3);
		}

		&:active {
			transform: scale(0.95);
		}

		:global(svg) {
			width: 18px;
			height: 18px;
			filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
		}
	}

	// Copied toast notification
	.copiedToast {
		position: absolute;
		top: var(--space-md);
		right: calc(var(--space-md) + 50px);
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, var(--success) 0%, #059669 100%);
		color: white;
		border-radius: var(--radius-md);
		font-family: var(--primaryFont);
		font-size: var(--text-sm);
		font-weight: 600;
		box-shadow: var(--shadow-lg), 0 0 20px rgba(16, 185, 129, 0.4);
		z-index: 15;
		white-space: nowrap;
		animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(10px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	// Show/Hide button styling
	.btn {
		position: absolute;
		bottom: var(--space-md);
		left: 50%;
		transform: translateX(-50%);
		padding: 0.5rem 1.5rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-full);
		font-family: var(--primaryFont);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--code-text);
		cursor: pointer;
		transition: all var(--transition-base);
		box-shadow: var(--shadow-md);
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		user-select: none;

		&:hover {
			background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
			border-color: var(--accent-light);
			transform: translateX(-50%) translateY(-2px);
			box-shadow: var(--shadow-lg), 0 0 20px rgba(var(--accent-rgb), 0.4);
			color: white;
		}

		&:active {
			transform: translateX(-50%) translateY(0);
		}
	}

	.openBtn {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			box-shadow: var(--shadow-md), 0 0 0 0 rgba(var(--accent-rgb), 0.4);
		}
		50% {
			box-shadow: var(--shadow-md), 0 0 0 8px rgba(var(--accent-rgb), 0);
		}
	}

	// Adjust spacing when buttons are present
	.codeBlockWrapper :global(pre) {
		margin: 0;
	}

	// Add padding to bottom when show/hide button exists
	.codeBlockWrapper.closed :global(pre),
	.codeBlockWrapper.opened :global(pre) {
		padding-bottom: calc(var(--space-lg) + 3rem);
	}
</style>
