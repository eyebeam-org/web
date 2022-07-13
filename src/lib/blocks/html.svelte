<script>
	// # # # # # # # # # # # # #
	//
	//  RAW HTML
	//
	// # # # # # # # # # # # # #


	// *** PROPS
	export let b = {};
	//FIXME: monkeypatch for old wordpress imports
</script>

{#if b.children && b.children.length > 0}
	<div class="html-content">
		{#each b.children as c}
			{#if c.text != ""}
{@html c.text.replace(/<\/strong>/g, "</strong><br/><br/>").replace(/<strong>/g, "<br/><br/><strong>") }
			{/if}
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
