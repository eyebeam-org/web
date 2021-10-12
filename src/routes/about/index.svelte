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

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let about;
</script>

<svelte:head>
	<title>What is Eyebeam?</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar toc={about} title='What is Eyebeam?'/>

<div class="main-content">
	<div class='inner'>
		<div class="tile introduction">
			<h1>What is Eyebeam?</h1>
			<p>Eyebeam invests artists with resources, new skills, strategies, networks and community. Eyebeam works in a distributed format to unlock artist-led inventions around issues that confront us in 21st century life, such as: power, self-governance, technology, and democracy.</p>
		</div>

		{#each about as page}
			<a class="tile nav-tile" href={'/about/' + page.slug.current} sveltekit:prefetch>
				<h2>{page.title}</h2>
				<div class="introduction-text">{@html renderBlockText(page.introduction.content)}</div>
			</a>
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar/>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.tile {
		padding: 15px;
		overflow: hidden;
	}

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			width: 100%;
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
		}
	}

	.introduction {
		border-bottom: $border-style;
		min-height: 300px;

		p {
			font-style: italic;
			font-size: $font-size-normal;
		}
	}

	.nav-tile {
		width: 50%;
		min-height: 300px;
		border-bottom: $border-style;
		border-right: $border-style;
		display: block;
		float: left;
		text-decoration: none;
		cursor: pointer;

		&:nth-child(odd) {
			border-right: none;
		}

		&:hover {
			background: $grey;
		}
	}
</style>
