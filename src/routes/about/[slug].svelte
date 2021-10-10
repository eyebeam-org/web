<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/about/${page.params.slug}.json`);
		if (res.ok) {
			const aboutPage = await res.json();
			return {
				props: { aboutPage }
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
	//  Single about page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from '$lib/sanity.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

    // *** PROPS
	export let aboutPage;

	console.log(aboutPage)
</script>


<svelte:head>
	<title>{aboutPage.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<!-- TITLE -->
		<h1>{aboutPage.title}</h1>

		<!-- MAIN IMAGE -->
		<img
			class='main-image'
			alt={aboutPage.title}
			src={urlFor(aboutPage.mainImage)
			.quality(90)
			.saturation(-100)
			.width(400)
			.url()}/>

		<!-- MAIN TEXT -->
		<div>{@html renderBlockText(aboutPage.content.content)}</div>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={aboutPage._updatedAt}/>
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
