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
		url = sticker.externalLink;
	} else if (has(sticker, 'internalLink.slug.current')) {
		url = 'ccccc';
	}
</script>

<a href={url} class="big-sticker" class:small class:inverted={sticker.inverted}>
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
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: block;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.text {
			padding: $extra-small-margin;
			font-size: $font-size-h1;
			color: $black;
			line-height: 1.1em;
		}

		&.inverted {
			background: $black;
			.text {
				color: $white;
			}
		}

		&.small {
			.text {
				font-size: $font-size-h2;
			}
		}
	}
</style>
