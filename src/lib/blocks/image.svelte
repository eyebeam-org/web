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
		margin-left: $NORMAL;
		margin-right: $NORMAL;
		float: left;
		border: 1px solid var(--foreground-color);
		display: flex;
		float: left;
		max-width: 50%;

		@include screen-size('small') {
			margin-left: 0;
		}

		&.right {
			float: right;
			max-width: 50%;

			@include screen-size('small') {
				margin-left: $NORMAL;
			}
		}

		&.full {
			float: unset;
			margin-left: 0;
			margin-right: 0;
			margin-top: 0;
			border: unset;
			max-width: unset;
			width: 100%;

			img {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			figcaption {
				padding: $NORMAL;
				border-top: 1px solid var(--foreground-color);
				border-bottom: 1px solid var(--foreground-color);

				p {
					margin: 0;
					padding: 0;
				}
			}
		}

		&.cover {
//			float: unset;

			img {
				width: 100%;
				max-height: 500px;
				object-fit: cover;
				object-position: center;

				@include screen-size('small') {
					height: 300px;
				}
			}

			figcaption {
				padding: $NORMAL;
				border-top: 1px solid var(--foreground-color);
				border-bottom: 1px solid var(--foreground-color);

				@include screen-size('small') {
					padding-left: 0;
					padding-right: 0;
				}

				p {
					margin: 0;
					padding: 0;
				}
			}
		}
	}

	:global(.article figcaption p) {
		margin-bottom: 0;
		margin-left: 0;
		margin-right: 0;
		font-size: $font-size-small !important;
	}
</style>
