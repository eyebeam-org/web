<script>
	// # # # # # # # # # # # # #
	//
	// OPEN EYEBEAM
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import TriangleRight from '$lib/graphics/triangle-right.svelte';
	import ArrowRight from '$lib/graphics/arrow-right.svelte';
	//FIXME: literally just flipping the arrow right now because i don't know how these were generated
</script>

<div
	class="open-eyebeam"
>
<div class="frame-container">
<iframe src={import.meta.env.VITE_OPEN_EYEBEAM_EMBED_URL} title="Open Eyebeam"/>
<a target="_blank" href="https://open-eyebeam.netlify.app">
	<div class="link"><span class="arrow"><TriangleRight /></span> open.eyebeam.org</div>
</a>
</div>
<div class="about">
Come see what our fellows are up to in our new digital studio space.
	<div class="open-eyebeam-link">
<a target="_blank" href="https://open-eyebeam.netlify.app">OPEN EYEBEAM <ArrowRight /></a>
	</div>
</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.open-eyebeam {
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: flex;
		padding: 0;
		z-index: 100;
		.frame-container {
			width: $two-third;
			overflow: hidden;
			border-right: $border-style;
		}

		iframe {
			border: none;
			width: 150%;
			height: 150%;
			transform: translate(-15%, -25%)
		}
		.about {
			padding: $SMALL $TINY;
			width: $one-third;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			background-color: $white;
			//			text-transform: uppercase;

			font-family: $ALT_FONT;
			font-size: $font-size-medium;
			padding: $SMALL;
			.open-eyebeam-link {
				font-family: $ALT_FONT;
				font-size: $font-size-h2;
				a {
					text-decoration: none;
				}
			}
			
		}

		.link {
			position: absolute;
			bottom: $NORMAL;
			left: $SMALL;
			font-size: $font-size-extra-small;
			color: var(--special-text-color);

			.arrow {
				margin-right: $TINY;
				position: relative;
				top: 2px;
			}
		}
		@include screen-size('small') {
			flex-wrap: wrap;
			.link {
				display: none;
			}
			.frame-container {
//				display: none;
				width: 100%;
				
			}
			.about {
				width: 100%;
			}
		}

	}
</style>
