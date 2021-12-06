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
		src={urlFor(b.asset).quality(90).saturation(-100).width(1000).url()}
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
			margin-left: 0;
			margin-right: 0;
			margin-top: 0;
			border: unset;

			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			figcaption {
				padding: $small-margin;
				border-top: $border-style;
				border-bottom: $border-style;

				p {
					margin: 0;
					padding: 0;
				}
			}
		}

		&.cover {
			float: unset;

			img {
				width: 100%;
				height: 600px;
				object-fit: cover;
				object-position: center;
			}

			figcaption {
				padding: $small-margin;
				border-top: $border-style;
				border-bottom: $border-style;

				p {
					margin: 0;
					padding: 0;
				}
			}
		}
	}
</style>
