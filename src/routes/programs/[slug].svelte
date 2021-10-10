<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	//  Single program
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

    // __ PROPS
	export let program;
</script>


<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">

		<!-- MAIN IMAGE -->
		<img
			alt={program.title}
			src={urlFor(program.mainImage)
			.quality(90)
			.saturation(-100)
			.width(400)
			.url()}/>

		<!-- TITLE -->
		<h1>{program.title}</h1>

		<!-- MAIN TEXT -->
		{#if program.content && program.content.content && Array.isArray(program.content.content)}
			<div>{@html renderBlockText(program.content.content)}</div>
		{/if}


		<!-- PEOPLE -->
		{#if program.people && Array.isArray(program.people)}
			<h2>People</h2>
			<ul>
				{#each program.people as person}
					<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
				{/each}
			</ul>
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={program._updatedAt}/>
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
