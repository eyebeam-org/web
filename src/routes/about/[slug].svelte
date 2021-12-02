<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/about/${page.params.slug}.json`);
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
	//  Single about page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let page;
	console.log(page.introduction.content);

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

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="block-text">
		<div class="header">
			<!-- TITLE -->
			<h1>{page.title}</h1>

			<!-- MAIN IMAGE -->
			{#if page.mainImage}
				<figure class="image-container">
					<img
						class="main-image"
						alt={page.title}
						src={urlFor(page.mainImage).quality(90).saturation(-100).width(400).url()}
					/>
					{#if has(page, 'mainImage.caption.content')}
						<figcaption>
							<Blocks blocks={page.mainImage.caption.content} />
						</figcaption>
					{/if}
				</figure>
			{/if}
		</div>

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
		width: 50%;
		width: $two-third;

		.block-text {
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			// padding-top: $small-margin;
			padding-bottom: $small-margin;

			.header {
				display: flex;
				width: 100%;
				justify-content: space-between;
				height: $HEADER_HEIGHT;

				h1 {
					margin-left: $small-margin;
					margin-right: $small-margin;
					margin-bottom: 160px;
				}

				.image-container {
					max-width: 50%;
					max-height: 100%;
					margin-right: $small-margin;
					img {
						border: $border-style;
						max-height: 100%;
						max-width: 100%;
					}
				}
			}
		}
	}
</style>
