<script>
	// # # # # # # # # # # # # #
	//
	// Phone Header
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import Clock from '$lib/clock/clock.svelte';
	import { loadData } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Search from '$lib/search/search.svelte';

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';
	import SearchIcon from '$lib/graphics/search.svelte';
	import Logo from '$lib/graphics/logo.svelte';

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};
</script>

<header>
	<div class="search-bar" on:click={toggleSearch}>
		<span class="icon"><SearchIcon white={true} /></span>Search this site
	</div>
	<a href="/" class="logo"><BigBeam /></a>
	<a href="/" class="wordmark"><Logo /></a>
</header>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../../../variables.scss';

	$HEADER_HEIGHT: 30px;

	header {
		cursor: pointer;

		.search-bar {
			background: $black;
			padding-top: 8px;
			padding-bottom: 8px;
			text-align: center;
			color: $white;

			.icon {
				margin-right: 10px;
			}
		}

		.logo {
			margin: $small-margin;
			display: block;
		}

		.wordmark {
			margin: $small-margin;
			display: block;
		}

		display: none;
		@include screen-size('small') {
			display: block;
		}
	}
</style>
