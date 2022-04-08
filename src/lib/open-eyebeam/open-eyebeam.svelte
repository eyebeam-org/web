<script>
	// # # # # # # # # # # # # #
	//
	// OPEN EYEBEAM
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import TriangleRight from '$lib/graphics/triangle-right.svelte';
</script>

<div
	class="open-eyebeam"
	on:click={() => {
		window.alert('open eyebeam');
	}}
>
	<iframe src={import.meta.env.VITE_OPEN_EYEBEAM_EMBED_URL} title="Open Eyebeam"/>
	<div class="link"><span class="arrow"><TriangleRight /></span> open.eyebeam.org</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.open-eyebeam {
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: block;
		padding: 0;
		z-index: 100;

		iframe {
			border: none;
			width: 200%;
			height: 200%;
			transform: translate(-15%, -25%)
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
	}
</style>
