<script>
	// # # # # # # # # # # # # #
	//
	//  TWO-COLUMNS RENDERER
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';
	import slugify from 'slugify';

	// __ BLOCKS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let b = {};
	$: b, console.log('columnn block:', b)

	const slug = slugify(b.title ? b.title : '', {
		lower: true
	});
</script>

<div class="columns">
	{#if b.title}
		<h2 id={slug}>
			{b.title}
		</h2>
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
		h2 {
			padding-top: $NORMAL;
			padding-bottom: $NORMAL;
		}
		.inner {
			width: 100%;
			column-count: 2;
			column-fill: balance;
			column-width: 50%;
		}
	}

	:global(.columns .inner p) {
		@include screen-size('small') {
			font-size: $font-size-small;
		}
	}
</style>
