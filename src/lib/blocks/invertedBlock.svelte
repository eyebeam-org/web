<script>
	// # # # # # # # # # # # # #
	//
	//  INVERTED BLOCK
	//
	// # # # # # # # # # # # # #

	// __ BLOCKS
	import Text from '$lib/blocks/text.svelte';

	// *** PROPS
	export let b = {};
</script>

<div class="inverted-block">
	<Text {b} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.inverted-block {
		width: 100%;
		background: $black;
		padding: 40px;
		color: $white;
	}
</style>
