<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/notes/${page.params.slug}.json`);
		if (res.ok) {
			const note = await res.json();
			return {
				props: { note }
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
	//  Single note
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import get from 'lodash/get.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let note;

	// __ Set currentPage
	currentPage.set({ slug: get(note, 'slug.current', ''), title: note.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{note.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={note.title} />

<div class="main-content">
	<div class="inner">
		<!-- MAIN IMAGE -->
		{#if note.mainImage}
			<img
				alt={note.title}
				src={urlFor(note.mainImage).quality(90).saturation(-100).width(400).url()}
			/>
		{/if}

		<!-- TITLE -->
		<h1>{note.title}</h1>

		<!-- MAIN TEXT -->
		<div>{@html renderBlockText(note.content.content)}</div>

		<!-- PEOPLE -->
		<h2>People</h2>
		<ul>
			{#each note.people as person}
				<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.title}</a></li>
			{/each}
		</ul>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={note._updatedAt} />
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
		}

		.main-image {
			width: 300px;
		}
	}

	img {
		float: right;
	}
</style>
