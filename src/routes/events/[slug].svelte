<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/events/${page.params.slug}.json`);
		if (res.ok) {
			const event = await res.json();
			return {
				props: { event }
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
	//  Single event
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let event;

	let toc = parseToc(get(event, 'content.content'));
	toc.push({ title: 'People', link: '#people' });

	// __ Set currentPage
	currentPage.set({ slug: get(event, 'slug.current', ''), title: event.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={event.title} {toc} />

<div class="main-content">
	<div class="inner">
		<div>
			<!-- TITLE -->
			<h1>{event.title}</h1>

			<!-- MAIN IMAGE -->
			{#if event.mainImage}
				<figure class="image-container">
					<img
						class="main-image"
						alt={event.title}
						src={urlFor(event.mainImage).quality(90).saturation(-100).width(400).url()}
					/>
					{#if has(event, 'mainImage.caption.content')}
						<figcaption>
							<Blocks blocks={event.mainImage.caption.content} />
						</figcaption>
					{/if}
				</figure>
			{/if}

			<!-- MAIN TEXT -->
			{#if has(event, 'content.content')}
				<div class="block-text">
					<Blocks blocks={event.content.content} />
				</div>
			{/if}
		</div>

		<!-- PEOPLE -->
		<div class="people" id="people">
			<h2>People</h2>
			<div class="people-inner">
				{#each event.people as person}
					<a class="people-link" href={'/people/' + person.slug.current} sveltekit:prefetch>
						<div class="image">
							{#if person.mainImage}
								<img
									alt={person.title}
									src={urlFor(person.mainImage).quality(90).saturation(-100).width(400).url()}
								/>
							{/if}
						</div>
						<div class="text">
							<span class="title">{person.title}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- SEE ALSO -->
		{#if event.internalLinks || event.externalLinks}
			<SeeAlso externalLinks={event.externalLinks} internalLinks={event.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={event._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		.main-image {
			width: 300px;
		}

		.inner {
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			min-width: 100%;

			h1 {
				padding: $small-margin;
			}

			.body-content {
				padding: $small-margin;
			}
		}
	}

	.people {
		width: 100%;
		padding: $small-margin;

		h2 {
			margin-bottom: $small-margin;
		}

		.people-inner {
			display: inline-block;
			width: 100%;

			.people-link {
				margin-bottom: 20px;
				display: block;
				text-decoration: none;
				width: calc(50% - 8px);
				overflow: hidden;
				float: left;

				&:nth-child(odd) {
					margin-right: 15px;
				}

				.title {
					font-size: $font-size-body;
					background: $grey;
					margin-top: 10px;
					display: inline-block;
				}

				.image {
					border: $border-style;
					min-height: 200px;
					width: 100%;
					line-height: 0;

					img {
						width: 100%;
					}
				}
			}
		}
	}

	.image-container {
		max-width: 50%;
		max-height: 100%;
		float: right;
		margin-right: $small-margin;
		img {
			border: $border-style;
			max-height: 100%;
			max-width: 100%;
		}
	}
</style>
