<script>
	// # # # # # # # # # # # # #
	//
	//  LOGO BLOCK
	//
	// # # # # # # # # # # # # #
	// __ BLOCKS
	import Text from '$lib/blocks/text.svelte';

	// __ GRAPHICS
	import BlockBeam from '$lib/graphics/block-beam.svelte';

	// *** PROPS
	export let b = {};
</script>

<div class="logo-block">
	<div class="top-row">
		<div class="beam">
			<BlockBeam />
		</div>
		<div class="line" />
	</div>
	<div class="logoblock-text">
		<Text {b} />
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.logo-block {
		margin-left: $small-margin;
		margin-right: $small-margin;
		width: calc(100% - 40px);
		// padding: 15px;
		border-bottom: $border-style;

		.top-row {
			display: flex;

			.beam {
				width: 160px;
				position: relative;
				top: 7px;
			}

			.line {
				border-bottom: $border-style;
				width: 100%;
			}
		}

		.logoblock-text {
			padding-top: 40px;
			padding-bottom: 40px;
		}
	}

	:global(.logoblock-text p) {
		padding-left: 0;
		padding-right: 0;
	}
</style>
