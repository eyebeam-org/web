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
<style>
		.html-content img {
			display: block;
			margin: 12px auto;
		}

</style>

	<div class="html-content">
		{#each b.children as c}
			{#if c.text != ""}
{@html c.text.replace(/<\/strong>/g, "</strong><br/><br/>").replace(/<strong>/g, "<br/><br/><strong>").replace('<a href="/', '<a href="https://old.eyebeam.org/"').replace(/style=".*?"/, "").replace(/width=".*?"/, "").replace(/height=".*?"/, "").replace('alt=" ">', 'alt=""><br/>') }
			{/if}
		{/each}
	</div>
{/if}


<style lang="scss">
	@import '../../variables.scss';
	.html-content {
		padding: $NORMAL;
		.text {
			margin: $NORMAL;
		}
	}
</style>
