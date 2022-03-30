<script>
	// # # # # # # # # # # # # #
	//
	//  ERROR PAGE
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { fade } from 'svelte/transition';
	import get from 'lodash/get.js';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Search from '$lib/search/search.svelte';

	// __ STORES
	import { page as pageStore } from '$app/stores';

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};
</script>

<div class="main-content" in:fade>
	<div class="article">
		<h1>{get($pageStore, 'error.name', '')}</h1>
		<div class="description">{get($pageStore, 'error.message', '')}</div>
		<div class="help">
			Try returning to the <a href="/" sveltekit:prefetch>homepage</a> or
			<span class="search-link" on:click={toggleSearch}>searching</span>
		</div>
	</div>
	<BottomBar />
</div>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../variables.scss';

	.main-content {
		width: $two-third;
		margin-bottom: $HUGE;

		@include screen-size('small') {
			width: 100%;
			margin-bottom: 0;
		}
	}

	.article {
		border: 1px solid var(--foreground-color);
		min-height: 100vh;
		display: inline-block;
		width: 100%;
		padding-bottom: $NORMAL;

		@include screen-size('small') {
			border: unset;
		}

		h1 {
			@include text-margins();
			margin-right: $NORMAL;
			margin-top: $NORMAL;
			line-height: 1.1em;

			@include screen-size('small') {
				margin-left: 0;
				margin-right: 0;
			}
		}

		.description {
			font-size: $font-size-medium;
			@include text-margins();
			margin-bottom: $NORMAL;

			@include screen-size('small') {
				margin-left: 0;
				margin-right: 0;
			}
		}

		.help {
			font-size: $font-size-body;
			@include text-margins();
			margin-bottom: $NORMAL;

			@include screen-size('small') {
				margin-left: 0;
				margin-right: 0;
			}

			.search-link {
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}
</style>
