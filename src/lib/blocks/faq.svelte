<script>
	// # # # # # # # # # # # # #
	//
	//  FAQ
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import slugify from 'slugify';

	// __ COMPONENTS
	import QA from '$lib/blocks/questionAnswerItem.svelte';

	// *** PROPS
	export let b = {};

	let slug = slugify(b.title, {
		lower: true
	});
</script>

<div class="faq">
	<h2 id={slug}>
		{b.title}
	</h2>
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
		padding: $NORMAL;
		margin-bottom: $LARGE;

		h2 {
			margin-left: 0;
			margin-right: 0;
		}

		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		.faq-inner {
			margin-top: $NORMAL;
		}
	}
</style>
