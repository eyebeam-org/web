<script>
	// # # # # # # # # # # # # #
	//
	// Big sticker
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';
	import { urlFor } from '$lib/sanity.js';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let sticker = {};
	export let small = false;
	console.log('sticker', sticker);

	let url = '';

	if (sticker.externalLink) {
		url = sticker.externalLink;false
	} else if (has(sticker, 'internalLink.slug.current')) {
		// TODO
		url = 'ccccc';
	}
</script>

<a href={url} class="tile big-sticker" class:small class:inverted={sticker.inverted}>
	{#if has(sticker, 'image.asset')}
		<img alt="Eyebeam" src={urlFor(sticker.image).quality(90).width(800).url()} />
	{:else}
		<div class="text">
			{#if has(sticker, 'text.content')}
				<Blocks blocks={sticker.text.content} />
			{/if}
		</div>
	{/if}
</a>

<style lang="scss">
	@import '../../variables.scss';

	.big-sticker {
		text-decoration: none;
		width: 100%;
		height: 50%;
		display: block;
		border-bottom: 1px solid var(--foreground-color);
		img {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			object-fit: cover;
		}

		.text {
			padding: $SMALL;
			font-size: $font-size-h1;
			color: var(--foreground-color);
			line-height: 1.1em;
		}

		&.inverted {
			background: var(--foreground-color);
			.text {
				color: var(--background-color);
				}
		}

		&.small {
			.text {
				font-size: $font-size-h2;
			}
		}

		@include screen-size('small') {
			max-height: 40vh;
			.big-sticker {
				overflow: none;
			}
		}
	}
</style>
