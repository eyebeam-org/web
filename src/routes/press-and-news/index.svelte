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
	import MediaQuery from 'svelte-media-query';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PressAndNewsItem from '$lib/press-and-news-item/press-and-news-item.svelte';

	// __ PROPS
	export let posts;

	console.log('posts', posts);
</script>

<svelte:head>
	<title>Press & News</title>
</svelte:head>

<!-- SIDEBAR -->
<MediaQuery query="(min-width: 900px)" let:matches>
	{#if matches}
		<Sidebar title="Press & News" />
	{/if}
</MediaQuery>

<div class="main-content">
	<div class="inner">
		<h1>Press & News</h1>

		<div class="press-and-news-listing">
			{#each posts as post}
				<PressAndNewsItem {post} />
			{/each}
		</div>
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

	.see-all {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50px;
		width: 100%;
		border-top: $border-style;
		text-align: center;
		line-height: 50px;
		text-decoration: none;

		&:hover {
			background: $grey;
		}
	}
</style>
