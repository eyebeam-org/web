<script>
	// # # # # # # # # # # # # #
	//
	// Search
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { loadData } from '$lib/sanity.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';
	import get from 'lodash/get.js';

	// __ GRAPHICS
	import X from '$lib/graphics/x.svelte';

	const dispatch = createEventDispatcher();

	let inputEl = {};
	let searchResults = [];
	let searchTerm = '';
	// $: console.log(searchTerm);

	const close = () => {
		dispatch('close');
	};

	const submitSearch = async () => {
		searchResults = await loadData(
			'*[!(_type in ["statement"]) && [title, name, pt::text(content.content), pt::text(introduction.content)] match $searchTerm]{...}',
			{ searchTerm: searchTerm }
		);
		console.log(searchResults);
	};

	onMount(async () => {
		inputEl.focus();
	});
</script>

<div class="search-overlay" in:fade={{ duration: 300, easing: quadOut }}>
	<!-- CLOSE -->
	<div class="close" on:click={close}>
		<div class="text">Close</div>
		<X />
	</div>
	<!-- INPUT -->
	<div class="input-container">
		<div>What are you looking for?</div>
		<input
			type="text"
			bind:this={inputEl}
			bind:value={searchTerm}
			on:keyup={(e) => {
				if (e.code === 'Enter' || e.keyCode === 13) {
					submitSearch();
				}
			}}
		/>
	</div>
	<!-- RESULTS -->
	<div class="result-container">
		{#each searchResults as result}
			<a
				href={'/' + postTypeToCategory[result._type] + '/' + get(result, 'slug.current', '')}
				sveltekit:prefetch
				class="result"
			>
				<div class="type">{postTypeToName[result._type]}</div>
				<div class="title">{result.title}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.search-overlay {
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: $transparent-grey;
		font-size: $font-size-h2;
		padding-left: 60px;
		padding-right: 60px;
		overflow-y: auto;
		color: $black;

		@include screen-size('small') {
			padding-left: $small-margin;
			padding-right: $small-margin;
			font-size: $font-size-medium;
		}

		.close {
			position: absolute;
			top: 100px;
			right: 45px;
			cursor: pointer;
			padding: 15px;
			font-size: $font-size-small;
			display: flex;
			justify-content: center;
			align-items: center;

			.text {
				margin-right: 15px;
			}

			@include screen-size('small') {
				top: 20px;
				right: 20px;
			}
		}

		.input-container {
			margin-top: 110px;

			@include screen-size('small') {
				margin-top: 80px;
			}

			input {
				margin-top: 20px;
				width: 100%;
				background: transparent;
				outline: none;
				border: 1px solid $black;
				font-size: $font-size-h2;
				padding: 10px;
				padding-bottom: 15px;
				font-family: $SERIF_STACK;
				height: 100px;

				@include screen-size('small') {
					font-size: $font-size-medium;
					height: 80px;
				}
			}
		}

		.result-container {
			margin-top: 30px;
			.result {
				margin-bottom: 20px;
				display: block;
				text-decoration: none;
				color: $black;

				.type {
					font-size: $font-size-body;
					text-transform: uppercase;
				}

				.title {
					font-size: $font-size-h2;
				}
			}
		}
	}
</style>
