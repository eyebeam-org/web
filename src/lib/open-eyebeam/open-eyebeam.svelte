<script>
	// # # # # # # # # # # # # #
	//
	// OPEN EYEBEAM
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import TriangleRight from '$lib/graphics/triangle-right.svelte';
</script>

<div class="link"><span class="arrow"><TriangleRight /></span> open.eyebeam.org</div>

<style lang="scss">
	@import '../../variables.scss';

	.link {
		position: absolute;
		bottom: $small-margin;
		left: $extra-small-margin;
		font-size: $font-size-extra-small;

		.arrow {
			margin-right: 6px;
			position: relative;
			top: 2px;
		}
	}
</style>
