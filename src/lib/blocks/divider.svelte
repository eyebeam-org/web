<script>
	// # # # # # # # # # # # # #
	//
	//  DIVIDER BLOCK
	//
	// # # # # # # # # # # # # #

	// *** PROPS
	export let b = {};
</script>

<div class="divider" />

<style lang="scss">
	@import '../../variables.scss';

	.divider {
		margin-top: $NORMAL;
		margin-bottom: $NORMAL;
		height: 1px;
		border-top: 1px solid var(--foreground-color);
		display: block;
		width: 100%;
min-width: 100%;
	}
</style>
