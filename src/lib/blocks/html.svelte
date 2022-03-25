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
	<div>
		{#each b.children as c}
			{@html c.text}
		{/each}
	</div>
{/if}
