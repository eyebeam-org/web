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
	import { longFormatDate } from '$lib/global.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ PROPS
	export let everything;

	const FILTERS = [
		{
			label: 'Everything',
			value: 'everything'
		},
		{
			label: 'Programs',
			value: 'program'
		},
		{
			label: 'Events',
			value: 'event'
		},
		{
			label: 'Notes',
			value: 'note'
		},
		{
			label: 'Projects',
			value: 'project'
		},
		{
			label: 'Videos',
			value: 'videoPost'
		},
		{
			label: 'Press',
			value: 'press'
		},
		{
			label: 'News',
			value: 'news'
		}
	];
	let activeFilter = 'everything';
	let filteredPosts = [];

	$: {
		if (activeFilter === 'everything') {
			filteredPosts = everything.posts;
		} else {
			filteredPosts = everything.posts.filter((p) => p._type === activeFilter);
		}
	}
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
						class:active={activeFilter == filter.value}
						on:click={() => {
							activeFilter = filter.value;
						}}
					>
						{filter.label}
					</div>
				{/each}
			</div>
		</div>
		{#each filteredPosts as post}
			<a
				href={'/' + postTypeToCategory[post._type] + '/' + get(post, 'slug.current')}
				class="single-post"
			>
				<div class="top">
					<!-- TYPE -->
					<div class="type">{postTypeToName[post._type]}</div>
					<!-- DATE -->
					<div class="date">{longFormatDate(post._createdAt)}</div>
				</div>
				<!-- TITLE -->
				<div class="title">{post.title}</div>
				<!-- PEOPLE -->
				{#if post.people && post.people.length > 0}
					<div class="people">
						Including
						{#each post.people as person}
							<PersonLink {person} />
						{/each}
					</div>
				{/if}
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
					display: inline-block;
					margin-bottom: 10px;

					.filter {
						padding: $button-padding;
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

				&:last-child {
					border-bottom: unset;
				}

				&:hover {
					background: $grey;
					cursor: pointer;
				}

				.top {
					width: 100%;
					display: flex;
					justify-content: space-between;

					.type {
						font-size: $font-size-extra-small;
						text-transform: uppercase;
						letter-spacing: 0.5px;
					}

					.date {
						float: right;
						margin-top: 5px;
					}
				}

				.title {
					margin-bottom: 5px;
				}

				.people {
					font-style: italic;
				}
			}
		}
	}
</style>
