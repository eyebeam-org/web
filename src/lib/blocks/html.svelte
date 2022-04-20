<script>
	// # # # # # # # # # # # # #
	//
	//  RAW HTML
	//
	// # # # # # # # # # # # # #


	// *** PROPS
	export let b = {};
</script>

{#if b.children && b.children.length > 0}
	<div class="html-content">
		{#each b.children as c}
			{@html c.text}
		{/each}
	</div>
{/if}


<style lang="scss">
	@import '../../variables.scss';
	.html-content {
		padding: $SMALL;
		.text {
			margin: $SMALL;
		}
	}
</style>
