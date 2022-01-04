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
	import has from 'lodash/has.js';
	import { longFormatDate } from '$lib/global';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let video;
</script>

<!-- METADATA -->
<Metadata post={video} />
<!-- SIDEBAR -->
<Sidebar title={video.title} />
<!-- MAIN CONTENT  -->
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

		<!-- SEE ALSO -->
		{#if video.internalLinks || video.externalLinks}
			<SeeAlso externalLinks={video.externalLinks} internalLinks={video.internalLinks} />
		{/if}
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
			border-bottom: 1px solid var(--foreground-color);
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
			border: 1px solid var(--foreground-color);
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
