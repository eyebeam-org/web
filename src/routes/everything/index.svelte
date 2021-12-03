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
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ PROPS
	export let everything;
	console.log(everything);

	const FILTERS = ['Everything', 'Programs', 'Events', 'Projects', 'Press', 'Notes', 'Videos'];
	let activeFilter = 'Everything';
	let filteredPosts = everything.posts;

	$: console.log(activeFilter);
</script>

<svelte:head>
	<title>{everything.page.title}</title>
</svelte:head>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="header">
			<h1>{everything.page.title}</h1>
			<!-- BIO -->
			{#if has(everything, 'page.content.content')}
				<div class="body-content description">
					<Blocks blocks={everything.page.content.content} />
				</div>
			{/if}
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
				<div class="title">{post.title}</div>
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
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 100%;

		.inner {
			border: $border-style;
			min-height: 100vh;

			.header {
				width: 100%;
				display: inline-block;
				border-bottom: $border-style;
				padding: 15px;

				.description {
					width: 800px;
					max-width: 90%;
					margin-left: auto;
					margin-right: auto;
					margin-top: 40px;
					margin-bottom: $small-margin;
				}

				.filters {
					margin-top: 80px;

					.filter {
						padding: 8px 12px;
						border: $border-style;
						margin-right: 5px;
						float: left;
						user-select: none;
						cursor: pointer;
						font-size: $font-size-extra-small;

						&:hover {
							background: $black;
							color: $white;
						}

						&.active {
							background: $black;
							color: $white;
						}
					}
				}
			}

			.single-post {
				padding: 15px;
				border-bottom: $border-style;
				text-decoration: none;
				display: block;

				font-size: $font-size-small;

				.text {
				}

				.date {
					margin-top: 5px;
				}
			}
		}
	}
</style>
