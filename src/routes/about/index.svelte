<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/about.json');
		if (res.ok) {
			const about = await res.json();
			return {
				props: { about }
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

	import { renderBlockText } from '$lib/sanity.js';

	// *** PROPS
	export let about;
	console.log(about);
</script>

<svelte:head>
	<title>ABOUT</title>
</svelte:head>

<!-- SIDEBAR -->
<div class="sidebar">
	<!-- OPEN EYEBEAM -->
	<a href="https://open-eyebeam.netlify.app" class="tile open-eyebeam" />
	<!-- LOGO -->
	<div class="tile logo">
		<div><Logo /></div>
	</div>
	<!-- TOC -->
	<div class="tile toc">
		<ul>
			{#each about as page}
				<li><a href={'/about/' + page.slug.current} sveltekit:prefetch>{page.title}</a></li>
			{/each}
		</ul>
	</div>
</div>

<div class="main-content">
	<div class="tile introduction">
		<h1>What is Eyebeam?</h1>
	</div>

	{#each about as page}
		<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
			<h2>{page.title}</h2>
			<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
		</a>
	{/each}

	{#each about as page}
		<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
			<h2>{page.title}</h2>
			<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
		</a>
	{/each}

	{#each about as page}
		<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
			<h2>{page.title}</h2>
			<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
		</a>
	{/each}

	{#each about as page}
		<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
			<h2>{page.title}</h2>
			<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
		</a>
	{/each}

	{#each about as page}
		<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
			<h2>{page.title}</h2>
			<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
		</a>
	{/each}
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
			border-bottom: $border-style;
			float: left;
		}

		.toc {
		}
	}

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;
		border: $border-style;
		min-height: 100vh;
	}

	.introduction {
		border-bottom: $border-style;
	}

	.nav-tile {
		width: 50%;
		height: 300px;
		border-bottom: $border-style;
		border-right: $border-style;
		display: block;
		float: left;

		&:nth-child(odd) {
			border-right: none;
		}
	}
</style>
