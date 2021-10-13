<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/people/${page.params.slug}.json`);
		if (res.ok) {
			const person = await res.json();
			return {
				props: { person }
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
	//  Person
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { loadData, renderBlockText, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let person;

	// *[$id in people[]._ref]
	const connectedPosts = loadData('*[$personId in people[]._ref]', { personId: person._id });

	// __ Set currentPage
	currentPage.set({ slug: get(person, 'slug.current', ''), title: person.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{person.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={person.title} />

<div class="main-content">
	<div class="inner">
		<div class="header">
			<div class="column left">
				<!-- NAME -->
				<h1>{person.title}</h1>
				<!-- ROLES -->
				<!-- QUOTE -->
				{#if person.quote}
					<div class="quote">{person.quote}</div>
				{/if}
			</div>

			<!-- MAIN IMAGE -->
			{#if person.mainImage}
				<div class="column right">
					<img
						class="main-image"
						alt={person.title}
						src={urlFor(person.mainImage).quality(90).saturation(-100).width(400).url()}
					/>
				</div>
			{/if}
		</div>

		<!-- WEBSITE -->
		{#if person.website}
			<div class="body-content website">
				<h3>Website</h3>
				<a href={person.website} target="_blank">{person.website}</a>
			</div>
		{/if}

		<!-- BIO -->
		{#if has(person, 'bio.content')}
			<div class="body-content bio">
				<h3>Bio</h3>
				{@html renderBlockText(person.bio.content)}
			</div>
		{/if}

		<!-- AT EYEBEAM -->
		{#await connectedPosts then connectedPosts}
			{#if connectedPosts.length > 0}
				<div class="body-content at-eyebeam">
					<h3>At Eyebeam</h3>
					{#each connectedPosts as post}
						<a
							class="connected-post"
							href={'/' + postTypeToCategory[post._type] + '/' + post.slug.current}
							sveltekit:prefetch
						>
							<div class="image">
								{#if post.mainImage}
									<img
										alt={post.title}
										src={urlFor(post.mainImage).quality(90).saturation(-100).width(400).url()}
									/>
								{/if}
							</div>
							<div class="text">
								<span class="type">{postTypeToName[post._type]}</span>
								<span class="title">{post.title}</span>
							</div>
						</a>
					{/each}
				</div>
			{/if}
		{/await}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={person._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			min-width: 100%;

			.header {
				border-bottom: $border-style;
				padding: 15px;
				display: inline-block;
				width: 100%;

				.column {
					&.left {
						padding-right: 15px;
						float: left;
					}
					&.right {
						float: right;
					}
				}
			}

			.body-content {
				padding: 15px;
			}
		}

		.main-image {
			width: 300px;
		}
	}

	img {
		float: right;
	}

	.quote {
		font-style: italic;
	}

	.connected-post {
		margin-bottom: 20px;
		display: block;
		text-decoration: none;
		width: calc(50% - 8px);
		float: left;
		overflow: hidden;

		&:nth-child(even) {
			margin-right: 15px;
		}

		.type {
			font-size: $font-size-normal;
			text-transform: uppercase;
			margin-right: 20px;
			font-weight: bold;
		}

		.title {
			font-size: $font-size-normal;
		}

		.image {
			border: $border-style;
			min-height: 200px;
			// margin-bottom: 10px;
			display: inline-block;
			width: 100%;

			img {
				max-width: 100%;
			}
		}
	}

	.at-eyebeam {
		h3 {
			margin-bottom: 20px;
		}
	}
</style>
