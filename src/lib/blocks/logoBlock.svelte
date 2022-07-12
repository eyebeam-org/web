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

	console.log('b: ', b)
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
		margin-left: $NORMAL;
		margin-right: $NORMAL;
		margin-bottom: $NORMAL;
		margin-top: $NORMAL;
		border-bottom: 1px solid var(--foreground-color);
		font-size: $font-size-body;

		@include screen-size('small') {
			margin-left: 0;
			margin-right: 0;
			padding: 0 $SMALL;
		}

		.top-row {
			display: flex;

			.beam {
				width: 160px;
				position: relative;
				top: 0;
				left: 1px;
				padding: 0;
				line-height: 0;
				display: inline-block;
			}

			.line {
				border-bottom: 1px solid var(--foreground-color);
				width: 100%;
			}
		}

		.logoblock-text {
			padding-top: $NORMAL;
			padding-bottom: $NORMAL;
		}
	}

	:global(.article .logoblock-text p) {
		padding-left: 0;
		padding-right: 0;
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
