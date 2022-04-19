<script>
	// # # # # # # # # # # # # #
	//
	// Search
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { onMount, createEventDispatcher } from 'svelte';
	import { loadData } from '$lib/sanity.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';
	import get from 'lodash/get.js';

	// __ GRAPHICS
	import X from '$lib/graphics/x.svelte';

	// __ STORES
	import { goto } from '$app/navigation';

	const dispatch = createEventDispatcher();

	let inputEl = {};
	let searchResults = [];
	let searchTerm = '';

	const close = () => {
		dispatch('close');
	};

	const submitSearch = async () => {
		console.log('searching')
		searchResults = await loadData(
			'*[_type in ["note", "event", "project", "program", "person", "videoPost", "journalPost", "press", "news"] && [title, name, pt::text(content.content), pt::text(introduction.content)] match $searchTerm]{...}',
			{ searchTerm: searchTerm }
		);
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
		<label for="search" class="nodisplay">Search: </label>
		<input
			type="text"
			name="search"
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
			<div
				on:click={() => {
					goto('/' + postTypeToCategory[result._type] + '/' + get(result, 'slug.current', ''));
					close();
				}}
				class="result"
			>
				<div class="type">
					{postTypeToName[result._type] ? postTypeToName[result._type] : 'Page'}
				</div>
				<div class="title">{result.title}</div>
			</div>
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
		color: var(--special-text-color);

		@include screen-size('small') {
			padding-left: $NORMAL;
			padding-right: $NORMAL;
			font-size: $font-size-medium;
		}

		.close {
			position: absolute;
			top: 100px;
			right: 45px;
			cursor: pointer;
			padding: $SMALL;
			font-size: $font-size-small;
			display: flex;
			justify-content: center;
			align-items: center;

			.text {
				margin-right: $SMALL;

				@include screen-size('small') {
					margin-right: $TINY;
				}
			}

			@include screen-size('small') {
				top: 20px;
				right: 20px;
			}
		}

		.input-container {
			margin-top: $HUGE;

			@include screen-size('small') {
				margin-top: $EXTRA_LARGE;
			}

			input {
				margin-top: $NORMAL;
				width: 100%;
				background: transparent;
				outline: none;
				border: 1px solid var(--special-text-color);
				font-size: $font-size-h2;
				padding: 10px;
				padding-bottom: 15px;
				font-family: $SERIF_STACK;
				height: 100px;

				@include screen-size('small') {
					font-size: $font-size-medium;
					height: 60px;
				}
			}
		}

		.result-container {
			margin-top: $LARGE;
			margin-bottom: $EXTRA_LARGE;

			.result {
				margin-bottom: $NORMAL;
				display: block;
				text-decoration: none;
				color: var(--special-text-color);
				cursor: pointer;

				.type {
					font-size: $font-size-small;
					text-transform: uppercase;

					@include screen-size('small') {
						font-size: $font-size-extra-small;
					}
				}

				.title {
					font-size: $font-size-h2;

					@include screen-size('small') {
						font-size: $font-size-medium;
					}
				}
			}
		}
	}

	:global(.close svg) {
		@include screen-size('small') {
			width: 20px;
			height: 20px;
		}
	}
</style>
