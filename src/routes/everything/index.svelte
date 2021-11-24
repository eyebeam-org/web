<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/everything.json');
		if (res.ok) {
			const everything = await res.json();
			return {
				props: { everything }
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
	//  Everything
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';
	import { longFormatDate } from '$lib/global.js';
	import { postTypeToName } from '$lib/global.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ PROPS
	export let everything;

	const FILTERS = [
		'Everything',
		'Programs',
		'Events',
		'Projects',
		'Press',
		'Notes',
		'Videos',
		'Goals'
	];
	let activeFilter = 'Everything';
	let filteredPosts = everything;

	$: console.log(activeFilter);
</script>

<svelte:head>
	<title>Everything</title>
</svelte:head>

<!-- SIDEBAR -->
<!-- <Sidebar /> -->

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="header">
			<h1>Explore everything on our website right now</h1>
			<div class="filters">
				{#each FILTERS as filter}
					<div
						class="filter"
						class:active={activeFilter == filter}
						on:click={() => {
							activeFilter = filter;
						}}
					>
						{filter}
					</div>
				{/each}
			</div>
		</div>
		{#each filteredPosts as post}
			<a href="" class="single-post">
				<div class="type">{postTypeToName[post._type]}</div>
				<!-- TEXT -->
				<h2>{post.title}</h2>
				<!-- <div class='text'>{@html renderBlockText(post.content.content)}</div> -->
				<!-- DATE -->
				<!-- {#if post.date}
					<div class='date'>{longFormatDate(post.date)}</div>
				{/if} -->
				<!-- PERSON -->
				<!-- {#if post.person}
					<div class='person'><PersonLink person={post.person}/></div>
				{/if} -->
			</a>
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		// width: 50%;
		// width: $two-third;
		width: 100%;

		.inner {
			border: $border-style;
			min-height: 100vh;

			.header {
				height: 300px;
				border-bottom: $border-style;
				padding: 15px;
			}

			.single-post {
				padding: 15px;
				border-bottom: $border-style;
				text-decoration: none;
				display: block;

				.text {
					font-size: $font-size-h2;
				}

				.date {
					margin-top: 5px;
				}
			}
		}
	}

	:global(.single-post .text p) {
		font-size: $font-size-h2;
	}

	.filters {
		margin-top: 20px;
	}

	.filter {
		padding: 5px;
		border: $border-style;
		margin-right: 5px;
		float: left;
		user-select: none;
		cursor: pointer;

		&:hover {
			background: $grey;
		}

		&.active {
			background: $grey;
		}
	}
</style>
