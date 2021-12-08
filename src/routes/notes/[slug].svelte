<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/notes/${page.params.slug}.json`);
		if (res.ok) {
			const note = await res.json();
			return {
				props: { note }
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
	//  Single note
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { renderBlockText, urlFor } from '$lib/sanity.js';
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
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let note;

	// __ Set currentPage
	currentPage.set({ slug: get(note, 'slug.current', ''), title: note.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{note.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={note.title} />

<div class="main-content">
	<div class="inner">
		<div class="header">
			<!-- TITLE -->
			<h1>{note.title}</h1>
			<!-- DATE -->
			<div class="date">
				{longFormatDate(note._createdAt)}
			</div>
			<!-- AUTHOR(S) -->
			{#if note.people && note.people.length > 0}
				<div class="authors">
					by {#each note.people as person}
						<PersonLink {person} />
					{/each}
				</div>
			{/if}
			<!-- INTRODUCTION -->
			{#if has(note, 'introduction.content')}
				<div class="introduction">
					<Blocks blocks={note.introduction.content} />
				</div>
			{/if}
		</div>

		<!-- MAIN TEXT -->
		{#if has(note, 'content.content')}
			<div class="block-text">
				<Blocks blocks={note.content.content} />
			</div>
		{/if}

		<!-- SEE ALSO -->
		{#if note.internalLinks || note.externalLinks}
			<SeeAlso externalLinks={note.externalLinks} internalLinks={note.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={note._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.header {
			height: $HEADER_HEIGHT;
			border-bottom: $border-style;
			padding: 15px;
			font-size: $font-size-body;

			h1 {
				margin-bottom: $small-margin;
			}

			.date {
				margin-bottom: $small-margin;
			}

			.authors {
				margin-bottom: $small-margin;
			}
		}

		.inner {
			border: $border-style;
			min-height: 100vh;
		}

		.main-image {
			width: 300px;
		}
	}

	img {
		float: right;
	}
</style>
