<script>
	// # # # # # # # # # # # # #
	//
	//  SEE ALSO
	//
	// # # # # # # # # # # # # #

	// __ BLOCKS
	// import Text from '$lib/blocks/text.svelte';

	// *** PROPS
	export let links = [];
</script>

<div class="see-also">
	<div class="header">See also:</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.see-also {
		width: 100%;
		background: $grey;
		padding: $small-margin;
		font-size: $font-size-body;
		border-top: $border-style;
	}
</style>
