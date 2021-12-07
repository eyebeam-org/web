<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/videos/${page.params.slug}.json`);
		if (res.ok) {
			const video = await res.json();
			return {
				props: { video }
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
	//  Single video
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
	export let video;

	// __ Set currentPage
	currentPage.set({ slug: get(video, 'slug.current', ''), title: video.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{video.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={video.title} />

<div class="main-content">
	<div class="inner">
		<div class="header">
			<!-- TITLE -->
			<h1>{video.title}</h1>
			<!-- DATE -->
			<div class="date">
				{longFormatDate(video._createdAt)}
			</div>
			<!-- AUTHOR(S) -->
			{#if video.people && video.people.length > 0}
				<div class="authors">
					by {#each video.people as person}
						<PersonLink {person} />
					{/each}
				</div>
			{/if}
		</div>

		<!-- MAIN TEXT -->
		{#if has(video, 'content.content')}
			<div class="block-text">
				<Blocks blocks={video.content.content} />
			</div>
		{/if}

		<SeeAlso />
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={video._updatedAt} />
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
