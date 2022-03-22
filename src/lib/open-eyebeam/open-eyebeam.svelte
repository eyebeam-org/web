<script>
	// # # # # # # # # # # # # #
	//
	// OPEN EYEBEAM
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import TriangleRight from '$lib/graphics/triangle-right.svelte';
	// __ IMPORTS
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';
	import { urlFor } from '$lib/sanity.js';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let openEyebeam = {};
	export let small = false;

	let url = '';

	if (openEyebeam.externalLink) {
		url = openEyebeam.externalLink;
	} else if (has(openEyebeam, 'internalLink.slug.current')) {
		url = 'ccccc';
	}

</script>

<a href={ openEyebeam.externalLink} class="open-eyebeam">
	{#if has(openEyebeam, 'image.asset')}
		<img class="open-eyebeam-image" alt={openEyebeam.image.alt} src={urlFor(openEyebeam.image).quality(90).url()} />
		{#if has(openEyebeam, 'image.caption') }
<div class="link"><span class="arrow"><TriangleRight /> </span> <Blocks blocks={openEyebeam.image.caption.content} />

</div>
		{/if}
		<div class="text">
			{#if has(openEyebeam, 'text.content')}
				<Blocks blocks={openEyebeam.text.content} />
			{/if}
		</div>
	{/if}

</a>

<style lang="scss">
	@import '../../variables.scss';

	.open-eyebeam {
		padding: $extra-small-margin;
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: block;
		.open-eyebeam-image {
			max-width: 100%;
		}

		.link {
			position: absolute;
			bottom: $small-margin;
			left: $extra-small-margin;
			font-size: $font-size-extra-small;
			color: $black;
			.arrow {
				margin-right: 6px;
				position: relative;
				top: 2px;

			}
		}
	}
</style>
