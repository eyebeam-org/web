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
<iframe src={import.meta.env.VITE_OPEN_EYEBEAM_EMBED_URL} title="Open Eyebeam" aria-label="A live view of Eyebeam's new digital artist studio, Open Eyebeam. This area changes randomly on each page load, but shows a randomized area in The Field of Open Eyebeam, which will show doors to artists' studios."/>
<a target="_blank" href="https://open.eyebeam.org">
	<div class="link"><span class="arrow"><TriangleRight /></span> open.eyebeam.org</div>
</a>
</div>
<div class="about">
Come see what our fellows are up to in our new digital studio space.
	<div class="open-eyebeam-link">
<a target="_blank" href="https://open.eyebeam.org">OPEN EYEBEAM <ArrowRight /></a>
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

			font-family: $SERIF_STACK;
			font-size: $font-size-body;
			padding: $SMALL;
			.open-eyebeam-link {
				font-family: $ALT_FONT;
				font-size: $font-size-menu;
				@include screen-size('medium') {
					font-size: $font-size-journal;
				}


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
			height: 65vh;
			.link {
				display: none;
			}
			iframe {
				width: 100%;
				height: 100%;
			}
			.frame-container {
//				display: none;
				border-right: none;
				width: 100%;
				height: 40vh;
			}
			.about {
				width: 100%;
				height: 25vh;
				justify-content: flex-start;
				align-items: flex-start;
			.open-eyebeam-link {
				font-size: $font-size-h2;
				padding-bottom: $SMALL;
				max-width: 60%;
				order: -1;
			}

			}
		}

	}
</style>
