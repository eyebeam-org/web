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
	//  What is Eyebeam?
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import Logo from '$lib/graphics/logo.svelte';

	import { renderBlockText, urlFor } from '$lib/sanity.js';

    // *** PROPS
	export let aboutPage;
    
    console.log(aboutPage)
</script>


<svelte:head>
	<title>{aboutPage.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<div class="sidebar">
	<!-- OPEN EYEBEAM -->
	<a href="https://open-eyebeam.netlify.app" class="tile open-eyebeam" />
	<!-- LOGO -->
	<div class="tile logo">
		<div><Logo /></div>
	</div>
</div>


<div class="main-content">
<!-- TITLE -->
<h1>{aboutPage.title}</h1>

<!-- MAIN IMAGE -->
<img
	alt={aboutPage.title}
	src={urlFor(aboutPage.mainImage)
	.quality(90)
	.saturation(-100)
	.width(400)
	.url()}/>

<!-- MAIN TEXT -->
<div>{@html renderBlockText(aboutPage.content.content)}</div>

<!-- LAST UPDATED -->
<div>Last Updated: {aboutPage._updatedAt}</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	$one-third: calc(100% / 3);
	$two-third: calc((100% / 3) * 2);

	.tile {
		padding: 15px;
		overflow: hidden;
	}

	.sidebar {
		float: left;
		width: 50%;
		width: $one-third;
		border: $border-style;
		border-right: none;

		.open-eyebeam {
			height: 300px;
			background: $grey;
			width: 100%;
			border-bottom: $border-style;
			float: left;
		}

		.logo {
			height: $one-third;
			width: 100%;
			float: left;
		}
	}

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;
		border: $border-style;
		min-height: 100vh;
		padding: 15px;
	}

	img {
		float: right;
	}

</style>
