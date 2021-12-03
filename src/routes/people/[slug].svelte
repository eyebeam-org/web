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
	import { loadData, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ PROPS
	export let person;

	// *[$id in people[]._ref]
	const connectedPosts = loadData(
		'*[$personId in people[]._ref || $personId in advisors[]._ref || $personId in fellows[]._ref]',
		{ personId: person._id }
	);

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
				<!-- BADGES -->
				{#if person.role}
					<div class="badges">
						<div class="badge">{person.role}</div>
					</div>
				{/if}
				<!-- QUOTE -->
				{#if person.quote}
					<div class="quote">{person.quote}</div>
				{/if}
			</div>

			<!-- MAIN IMAGE -->
			{#if person.mainImage}
				<div class="column right">
					<figure class="image-container">
						<img
							class="main-image"
							alt={person.title}
							src={urlFor(person.mainImage).quality(90).saturation(-100).width(400).url()}
						/>
						{#if has(person, 'mainImage.caption.content')}
							<figcaption>
								<Blocks blocks={person.mainImage.caption.content} />
							</figcaption>
						{/if}
					</figure>
				</div>
			{/if}
		</div>

		<div class="block-text info">
			<!-- WEBSITE -->
			{#if person.website}
				<div class="website" id="website">
					<h3>Website</h3>
					<p><a href={person.website} target="_blank">{person.website} <ExternalLink /></a></p>
				</div>
			{/if}

			<!-- BIO -->
			{#if has(person, 'bio.content')}
				<div class="bio" id="bio">
					<h3>Bio</h3>
					<Blocks blocks={person.bio.content} />
				</div>
			{/if}
		</div>

		<!-- AT EYEBEAM -->
		{#await connectedPosts then connectedPosts}
			{#if connectedPosts.length > 0}
				<div class="at-eyebeam" id="at-eyebeam">
					<h2>At Eyebeam</h2>
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
								{:else}
									<div class="big-title">{post.title}</div>
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
				padding-left: 15px;
				padding-right: 15px;
				width: 100%;
				height: $HEADER_HEIGHT;
				display: flex;
				justify-content: space-between;

				.column {
					max-width: 50%;
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

	.quote {
		font-style: italic;
		font-size: $font-size-body;
	}

	.connected-post {
		margin-bottom: 20px;
		display: block;
		text-decoration: none;
		width: calc(50% - 10px);
		float: left;
		overflow: hidden;
		font-size: $font-size-small;

		&:nth-child(even) {
			margin-right: 20px;
		}

		.text {
			margin-top: 5px;

			.type {
				font-size: $font-size-extra-small;
				letter-spacing: 0.5px;
				text-transform: uppercase;
				margin-right: 20px;
			}

			.title {
			}
		}

		.image {
			border: $border-style;
			min-height: 200px;
			max-height: 300px;
			width: 100%;
			line-height: 0;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.big-title {
				font-size: $font-size-h2;
				width: 100%;
				padding: 40px $small-margin;
				min-height: 200px;
			}
		}
	}

	.at-eyebeam {
		padding: $small-margin;
		border-top: $border-style;
		h2 {
			margin-bottom: $small-margin;
		}
	}

	.image-container {
		img {
			display: block;
			border: $border-style;
		}

		figcaption {
			display: block;

			margin-top: 10px;
		}
	}

	.badges {
		margin-top: $small-margin;
		margin-bottom: $small-margin;
		.badge {
			padding: 8px 12px;
			background: $black;
			color: $white;
			text-transform: capitalize;
			font-size: $font-size-extra-small;
			display: inline-block;
		}
	}

	.info {
		padding-top: $small-margin;

		.website {
			margin-bottom: $vertical-space;
		}
	}
</style>
