<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/projects/${page.params.slug}.json`);
		if (res.ok) {
			const project = await res.json();
			return {
				props: { project }
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
	//  Single project
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

    // __ PROPS
	export let project;
</script>


<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={project.title}/>

<div class="main-content">
	<div class="inner">
		<!-- MAIN IMAGE -->
		{#if project.mainImage}
			<img
				alt={project.title}
				src={urlFor(project.mainImage)
				.quality(90)
				.saturation(-100)
				.width(400)
				.url()}/>
		{/if}

		<!-- TITLE -->
		<h1>{project.title}</h1>

		<!-- MAIN TEXT -->
		<div>{@html renderBlockText(project.content.content)}</div>

		<!-- PEOPLE -->
		<h2>People</h2>
		<ul>
			{#each project.people as person}
				<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.title}</a></li>
			{/each}
		</ul>

	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={project._updatedAt}/>
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
