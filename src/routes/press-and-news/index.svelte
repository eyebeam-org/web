<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/press-and-news.json');
		if (res.ok) {
			const posts = await res.json();
			return {
				props: { posts }
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
	//  Press & News
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PressAndNewsItem from '$lib/press-and-news-item/press-and-news-item.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let posts;

	const toc = [
		{
			title: 'News',
			link: '#news'
		},
		{
			title: 'Press Releases',
			link: '#press-releases'
		},
		{
			title: 'Press Contact',
			link: '#press-contact'
		}
	];

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('Press & News');
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={{ title: 'Press & News' }} />
<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<h1>Press & News</h1>

		{#if has(posts, 'page.content.content')}
			<div class="text-content">
				<Blocks blocks={posts.page.content.content} />
			</div>
		{/if}

		<div class="section" id="news">
			<h2>News</h2>
			<div class="press-and-news-listing">
				{#each posts.news as post}
					<PressAndNewsItem {post} />
				{/each}
			</div>
			<!-- <div class="load-more">Load more</div> -->
			<div class="bottom-divider" />
		</div>

		<div class="section" id="press-releases">
			<h2>Press releases</h2>
			<div class="press-and-news-listing">
				{#each posts.press as post}
					<PressAndNewsItem {post} />
				{/each}
			</div>
			<!-- <div class="load-more">Load more</div> -->
			<div class="bottom-divider" />
		</div>

		<div class="section" id="press-contact">
			<h2>Press contact</h2>
			{#if has(posts, 'page.pressContact.content')}
				<div class="text-content">
					<Blocks blocks={posts.page.pressContact.content} />
				</div>
			{/if}
		</div>

		<!-- SEE ALSO -->
		{#if (posts.page.internalLinks && posts.page.internalLinks.length > 0) || (posts.page.externalLinks && posts.page.externalLinks.length > 0)}
			<SeeAlso externalLinks={posts.page.externalLinks} internalLinks={posts.page.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			width: 100%;
			border: 1px solid var(--foreground-color);
			min-height: 100vh;
			display: inline-block;

			h1 {
				padding: $small-margin;
			}
		}
	}

	.press-and-news-listing {
		width: 100%;
		display: flex;
		margin-top: 20px;
		flex-wrap: wrap;
	}

	.load-more {
		height: 50px;
		width: 100%;
		border-top: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		text-align: center;
		line-height: 50px;
		text-decoration: none;
		margin-top: 40px;
		user-select: one;
		cursor: pointer;

		&:hover {
			background: $grey;
		}
	}

	.bottom-divider {
		width: 100%;
		border-bottom: 1px solid var(--foreground-color);
		margin-top: 40px;
	}

	.section {
		margin-top: 40px;

		h2 {
			padding-left: $small-margin;
			padding-right: $small-margin;
		}
	}
</style>
