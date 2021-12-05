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
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PressAndNewsItem from '$lib/press-and-news-item/press-and-news-item.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let posts;

	console.log('posts', posts);
</script>

<svelte:head>
	<title>Press & News</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title="Press & News" />

<div class="main-content">
	<div class="inner">
		<h1>Press & News</h1>

		{#if has(posts, 'page.content.content')}
			<Blocks blocks={posts.page.content.content} />
		{/if}

		<div class="section">
			<h2>News</h2>
			<div class="press-and-news-listing">
				{#each posts.news as post}
					<PressAndNewsItem {post} />
				{/each}
			</div>
			<div class="load-more">Load more</div>
		</div>

		<div class="section">
			<h2>Press releases</h2>
			<div class="press-and-news-listing">
				{#each posts.press as post}
					<PressAndNewsItem {post} />
				{/each}
			</div>
			<div class="load-more">Load more</div>
		</div>

		<div class="section">
			<h2>Press contact</h2>
			{#if has(posts, 'page.pressContact.content')}
				<Blocks blocks={posts.page.pressContact.content} />
			{/if}
		</div>

		<SeeAlso />
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
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			padding: $small-margin;
		}
	}

	.press-and-news-listing {
		width: 100%;
		display: flex;
		margin-top: 45px;
	}

	.load-more {
		height: 50px;
		width: 100%;
		border-top: $border-style;
		border-bottom: $border-style;
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

	.section {
		margin-top: 40px;
	}
</style>
