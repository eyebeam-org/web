<script context="module">
	export const preprocess = true;
	export const router = false;
</script>
<script>
	// # # # # # # # # # # # # #
	//
	//  Everything
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { longFormatDate } from '$lib/global.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ STORES
	import { page as pageStore } from '$app/stores';
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarToC.set([]);


	// __ PROPS
	export let page;
	export let posts;

	const FILTERS = [
		{
			label: 'Everything',
			value: 'everything'
		},
		{
			label: 'Programs',
			value: 'program'
		},
		{
			label: 'Events',
			value: 'event'
		},
		{
			label: 'Notes',
			value: 'note'
		},
		{
			label: 'Projects',
			value: 'project'
		},
		{
			label: 'Videos',
			value: 'videoPost'
		},
		{
			label: 'Press',
			value: 'press'
		},
		{
			label: 'News',
			value: 'news'
		}
	];
	let filteredPosts = [];
	let activeFilter = 'everything'
	//FIXME: url updates don't work with SSR, need better solution
		$: {
			//		let activeFilter = $pageStore.url.searchParams.get('filter')
			//? $pageStore.url.searchParams.get('filter')
			//: 'everything';

		if (activeFilter === 'everything') {
				filteredPosts = posts;
	//			url.searchParams.set.replaceState({}, '', '/everything');
			} else {
				filteredPosts = posts.filter((p) => p._type === activeFilter);
	//			const url = new URL(window.location);
	//			url.searchParams.set('filter', activeFilter);
	//			history.replaceState({},'', url);
			}
		}
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<header class="header">
			<h1>{page.title}</h1>
			<!-- BIO -->
			{#if has(page, 'content.content')}
				<div class="description">
					<Blocks blocks={page.content.content} />
				</div>
			{/if}
			<section class="filters" role="option">
				{#each FILTERS as filter}
					<button
						class="filter"
						class:active={activeFilter == filter.value}
						on:click={() => {
							activeFilter = filter.value;
						}}
						aria-label={ "Filter by: " + filter.value}
						aria-selected={activeFilter == filter.value ? "true" : "false"}
					>
						{filter.label}
					</button>
				{/each}
			</section>

		</header>
		<section>
		{#each filteredPosts as post}
			<a
				href={'/' + postTypeToCategory[post._type] + '/' + get(post, 'slug.current')}
				class="single-post"
			>
				<div class="top">
					<!-- TYPE -->
					<div class="type">{postTypeToName[post._type]}</div>
					<!-- DATE -->
					<div class="date">{longFormatDate(post._createdAt)}</div>
				</div>
				<!-- TITLE -->
				<div class="title">{post.title}</div>
				<!-- PEOPLE -->
				{#if post.people && post.people.length > 0}
					<div class="people">
						Including
						{#each post.people as person}
							<PersonLink {person} />
						{/each}
					</div>
				{/if}
			</a>
		{/each}
		</section>
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';
	button {
		background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	}

	.main-content {
		float: left;
		width: 100%;

		.inner {
			border: 1px solid var(--foreground-color);
			min-height: 662px;

			.header {
				width: 100%;
				display: inline-block;
				border-bottom: 1px solid var(--foreground-color);

				.description {
					margin-left: auto;
					margin-right: auto;
					margin-top: $LARGE;
					margin-bottom: $NORMAL;
				}

				h1 {
					margin-right: $NORMAL;
					margin-left: $NORMAL;
				}

				.filters {
					margin-top: $LARGE;
					display: inline-block;
					margin-bottom: $SMALL;
					margin-right: $NORMAL;
					margin-left: $NORMAL;

					.filter {
						padding: $button-padding;
						border: 1px solid var(--foreground-color);
						margin-right: $TINY;
						float: left;
						user-select: none;
						cursor: pointer;
						font-size: $font-size-extra-small;
						@include screen-size('small') {
							margin-top: 8px;
						}

						&:hover {
							background: var(--foreground-color);
							color: var(--background-color);
						}

						&.active {
							background: var(--foreground-color);
							color: var(--background-color);
						}
					}
				}
			}

			.single-post {
				padding: $SMALL;
				border-bottom: 1px solid var(--foreground-color);
				text-decoration: none;
				display: block;
				font-size: $font-size-small;

				&:last-child {
					border-bottom: unset;
				}

				&:hover {
					background: $grey;
					cursor: pointer;
					color: var(--hover-text-color);
				}

				.top {
					width: 100%;
					display: flex;
					justify-content: space-between;

					.type {
						font-size: $font-size-extra-small;
						text-transform: uppercase;
						letter-spacing: 0.5px;
					}

					.date {
						float: right;
						margin-top: $TINY;
					}
				}

				.title {
					margin-bottom: $TINY;
					font-size: $font-size-pull;
				}

				.people {
					font-style: italic;
				}
			}
		}
	}
</style>
