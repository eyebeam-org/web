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
{@html c.text.replace(/<\/strong>/g, "</strong><br/>").replace(/<\/b>/g, "</b><br/>").replace(/<strong>/g, "<br/><strong>").replace(/<b>/g, "<br/><b>").replace(/<\/span>/g, "</span><br/>")}
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
