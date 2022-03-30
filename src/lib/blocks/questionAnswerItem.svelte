<script>
	// # # # # # # # # # # # # #
	//
	//  FAQ
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';
	import { fade } from 'svelte/transition';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ GRAPHICS
	import ArrowDown from '$lib/graphics/arrow-down.svelte';
	import ArrowLeft from '$lib/graphics/arrow-left.svelte';

	// *** PROPS
	export let item = {};

	// *** VARIABLES
	let open = false;

	const toggleOpen = () => {
		open = !open;
	};
</script>

<div class="qa">
	<div class="question" on:click={toggleOpen}>
		<div class="text">{item.question}</div>
		<div class="icon">
			{#if open}
				<ArrowDown inverted={true} />
			{:else}
				<ArrowLeft />
			{/if}
		</div>
	</div>
	{#if open}
		<div class="answer" in:fade>
			{#if has(item, 'answer.content', [])}
				<Blocks blocks={item.answer.content} />
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.qa {
		width: 100%;
		display: inline-block;

		.question {
			width: 100%;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid var(--foreground-color);
			cursor: pointer;

			.text {
				font-style: italic;
				user-select: none;
				padding-top: 10px;
				padding-bottom: 10px;
				font-size: $font-size-small;
			}

			.icon {
				position: relative;
				top: 6px;
			}
		}

		.answer {
			border-bottom: 1px solid var(--foreground-color);
		}
	}

	// :global(.article .answer p) {
	// 	margin-left: 0;
	// 	margin-right: 0;
	// }
</style>
