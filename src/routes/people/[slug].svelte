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
	import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let person;
</script>


<svelte:head>
	<title>{person.name}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<div class="main-content">
	<div class="inner">

		<!-- NAME -->
		<h1>{person.name}</h1>

		<!-- MAIN IMAGE -->
		<img
			class='main-image'
			alt={person.name}
			src={urlFor(person.mainImage)
			.quality(90)
			.saturation(-100)
			.width(400)
			.url()}/>

		<!-- BIO -->
		<div>{@html renderBlockText(person.bio.content)}</div>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={person._updatedAt}/>
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

