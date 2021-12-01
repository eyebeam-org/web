<script>
	// # # # # # # # # # # # # #
	//
	//  IMAGE RENDERER
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ BLOCKS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let b = {};
</script>

<figure
	class:left={b.layout == 'left'}
	class:right={b.layout == 'right'}
	class:full={b.fullWidth}
	class:cover={b.coverAndCrop}
>
	<img
		src={urlFor(b.asset).quality(90).saturation(-100).width(400).url()}
		alt={b.alt ? b.alt : ''}
	/>
	{#if has(b, 'caption.content')}
		<figcaption>
			<Blocks blocks={b.caption.content} />
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	@import '../../variables.scss';

	figure {
		margin-left: 20px;
		margin-right: 20px;
		float: left;
		border: $border-style;

		&.left {
			float: left;
		}

		&.right {
			float: right;
		}

		&.full {
			float: unset;

			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		}

		&.cover {
			height: 400px;
			float: unset;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
