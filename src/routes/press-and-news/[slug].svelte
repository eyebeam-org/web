<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/press-and-news/${page.params.slug}.json`);
		if (res.ok) {
			const page = await res.json();
			return {
				props: { page }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  Single Press & News page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';
	import { longFormatDate } from '$lib/global';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// *** PROPS
	export let page;
	console.log(page);

	// __ Set currentPage
	currentPage.set({ slug: get(page, 'slug.current', ''), title: page.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<!-- SIDEBAR -->

<Sidebar title={page.title} />

<!-- SIDEBAR -->

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="block-text">
		<!-- <div class="header"> -->
		<!-- TITLE -->
		<h1>{page.title}</h1>
		<!-- SOURCE -->
		{#if page.source}
			<div class="published-by">Published by {page.source}</div>
		{/if}
		<!-- DATE -->
		<div class="date">{longFormatDate(page._createdAt)}</div>
		<!-- AUTHOR -->
		{#if page.author}
			<div class="author">Author</div>
		{/if}
		<!-- PEOPLE -->
		{#if page.people && page.people.length > 0}
			<div class="including">
				Including:
				{#each page.people as person}
					<PersonLink {person} />
				{/each}
			</div>
		{/if}
		<!-- PDF DOWNLOAD -->
		{#if page.pdfFile}
			<a href="" class="button download-pdf">Download as PDF</a>
		{/if}
		<!-- ORIGINAL LINK -->
		{#if page.externalLink}
			<a href={page.externalLink} class="button read-original" target="_blank"
				>Read original article on {page.source} <ExternalLink /></a
			>
		{/if}
		<!-- MAIN TEXT -->
		{#if has(page, 'content.content')}
			<Blocks blocks={page.content.content} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={page._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.block-text {
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			// padding-top: $small-margin;
			padding-bottom: $small-margin;
			width: 100%;

			h1 {
				padding: $small-margin;
			}
		}
	}

	.published-by,
	.date,
	.author,
	.including {
		font-style: italic;
		margin-left: $small-margin;
		font-size: $font-size-body;
	}

	.including {
		margin-top: $small-margin;
		margin-bottom: $small-margin;
	}

	.button {
		padding: $small-margin;
		background: $grey;
		display: inline-block;
		font-size: $font-size-small;
		margin-left: $small-margin;
		text-decoration: none;

		&:hover {
			background: $black;
			color: $white;
		}
	}
</style>
