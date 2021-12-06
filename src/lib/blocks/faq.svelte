<script>
	// # # # # # # # # # # # # #
	//
	//  FAQ
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import QA from '$lib/qa/qa.svelte';

	// *** PROPS
	export let b = {};
	console.log('faq', b);
</script>

<div class="faq">
	<h2>{b.title}</h2>
	<div class="faq-inner">
		{#each b.questionAnswer as item}
			<QA {item} />
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.faq {
		display: inline-block;
		width: 100%;
		padding: 15px;
		margin-bottom: 40px;

		.faq-inner {
			margin-top: 1em;
		}
	}
</style>
