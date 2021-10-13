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
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let event;

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
<Sidebar location={event.location} title={event.title} />

<div class="main-content">
	<div class="inner">
		<!-- MAIN IMAGE -->
		{#if event.mainImage}
			<img
				alt={event.title}
				src={urlFor(event.mainImage).quality(90).saturation(-100).width(400).url()}
			/>
		{/if}

		<!-- TITLE -->
		<h1>{event.title}</h1>

		<!-- MAIN TEXT -->
		{#if has(event, 'content.content')}
			<div class="body-content">
				{@html renderBlockText(event.content.content)}
			</div>
		{/if}

		<!-- PEOPLE -->
		<div class="body-content people">
			<h3>People</h3>
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

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={event._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			border: $border-style;
			padding: 15px;
			min-height: 100vh;
			display: inline-block;
			min-width: 100%;

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

	.people {
		h3 {
			margin-bottom: 20px;
		}
	}

	.people-link {
		margin-bottom: 20px;
		display: block;
		text-decoration: none;
		width: calc(50% - 8px);
		float: left;
		overflow: hidden;

		&:nth-child(even) {
			margin-right: 15px;
		}

		.title {
			font-size: $font-size-normal;
		}

		.image {
			border: $border-style;
			min-height: 200px;
			display: inline-block;
			width: 100%;

			img {
				max-width: 100%;
			}
		}
	}
</style>
