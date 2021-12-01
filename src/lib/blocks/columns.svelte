<script>
	// # # # # # # # # # # # # #
	//
	//  TWO-COLUMNS RENDERER
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';

	// __ BLOCKS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let b = {};
</script>

<div class="columns">
	{#if b.title}
		<h2>{b.title}</h2>
	{/if}
	{#if has(b, 'columnContent.content')}
		<div class="inner">
			<Blocks blocks={b.columnContent.content} />
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.columns {
		.inner {
			width: 100%;
			column-count: 2;
			column-fill: balance;
			column-width: 50%;
		}
	}
</style>
