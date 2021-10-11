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
	import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

    // __ PROPS
	export let event;
</script>


<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar location={event.location} title={event.title}/>

<div class="main-content">
	<div class="inner">
		<!-- MAIN IMAGE -->
		<img
			alt={event.title}
			src={urlFor(event.mainImage)
			.quality(90)
			.saturation(-100)
			.width(400)
			.url()}/>

		<!-- TITLE -->
		<h1>{event.title}</h1>

		<!-- MAIN TEXT -->
		<div>{@html renderBlockText(event.content.content)}</div>

		<!-- PEOPLE -->
		<h2>People</h2>
		<ul>
			{#each event.people as person}
				<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.title}</a></li>
			{/each}
		</ul>

	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={event._updatedAt}/>
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
