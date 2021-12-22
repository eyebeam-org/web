<script>
	// # # # # # # # # # # # # #
	//
	// OPEN EYEBEAM
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import TriangleRight from '$lib/graphics/triangle-right.svelte';
</script>

<a href="https://open-eyebeam.netlify.app" class="open-eyebeam">
	<div class="link"><span class="arrow"><TriangleRight /></span> open.eyebeam.org</div>
</a>

<style lang="scss">
	@import '../../variables.scss';

	.open-eyebeam {
		padding: $extra-small-margin;
		width: 100%;
		height: 100%;
		text-decoration: none;
		display: block;

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
