<script>
	// # # # # # # # # # # # # #
	//
	//  STATEMENTS

	//
	// # # # # # # # # # # # # #
	// __ IMPORTS
	import { onMount } from 'svelte';
	import { loadData, renderBlockText } from '$lib/sanity.js';
	import sample from 'lodash/sample.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ VARIABLES
	let activeStatement = false;
	let statements = [];
	let clickCounter = 0;

	const newStatement = () => {
		clickCounter++;
		while (true) {
			let tempStatement = sample(statements);
			if (tempStatement._id !== activeStatement._id) {
				activeStatement = tempStatement;
				break;
			}
		}
	};

	onMount(async () => {
		statements = await loadData("*[_type == 'statement']{..., person->{...}}");
		newStatement();
	});
</script>

<div class="statement">
	{#if activeStatement}
		<div class="text">{@html renderBlockText(activeStatement.content.content)}</div>
		{#if activeStatement.person}
			<div class="person"><PersonLink person={activeStatement.person} /></div>
		{/if}
	{/if}
	<div class="button-container">
		<div class="more" on:click={newStatement} />
		{#if clickCounter > 3}
			<a class="see-all" href="/statements">See all</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.statement {
		width: 100%;
		font-size: $font-size-small;
		width: 100%;

		.text {
			font-style: italic;
		}

		.button-container {
			margin-top: $TINY;
		}

		.more {
			width: 18px;
			height: 18px;
			background: $grey;
			cursor: pointer;
			float: left;
			&:hover {
				background: var(--foreground-color);
			}
		}

		.see-all {
			float: left;
			margin-left: $SMALL;
		}
	}

	:global(.text p) {
		margin: 0;
	}
</style>
