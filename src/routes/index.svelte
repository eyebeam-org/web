<script>
	// # # # # # # # # # # # # #
	//
	//  EYEBEAM.ORG
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { loadData } from '$lib/sanity.js';
	import { distanceToDate } from '$lib/global.js';

	// __ GRAPHICS
	import Logo from '$lib/graphics/logo.svelte';
	import Newsletter from '$lib/graphics/newsletter.svelte';
	import Twitter from '$lib/graphics/twitter.svelte';
	import Instagram from '$lib/graphics/instagram.svelte';
	import Youtube from '$lib/graphics/youtube.svelte';
	import SearchIcon from '$lib/graphics/search.svelte';
	import HalfBeam from '$lib/graphics/half-beam.svelte';

	// __ COMPONENTS
	import Statements from '$lib/statements/statements.svelte';
	import OpenEyebeam from '$lib/open-eyebeam/open-eyebeam.svelte';
	import Search from '$lib/search/search.svelte';

	let searchActive = false;
	const INSTAGRAM_URL = 'https://www.instagram.com/eyebeamnyc/';
	const TWITTER_URL = 'https://twitter.com/eyebeamnyc';
	const YOUTUBE_URL = 'https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg';

	const programs = loadData('*[_type == "program"]');
	const events = loadData('*[_type == "event"]{..., people[]->{...}}');

	const toggleSearch = () => {
		searchActive = !searchActive;
	};
</script>

<svelte:head>
	<title>eyebeam.org</title>
</svelte:head>

<div class="homepage-menu">
	<div class="section one">
		<div class="column one">
			<a href="https://open-eyebeam.netlify.app" class="tile open-eyebeam">
				<OpenEyebeam />
			</a>
			<div class="tile logo-and-statement">
				<div class="logo"><Logo /></div>
				<Statements />
			</div>
		</div>
		<div class="column two">
			<div class="tile programs">
				<a href="/programs" class="sub-tile header" sveltekit:prefetch>PROGRAMS</a>
				{#await programs then programs}
					{#each programs as program}
						<a
							href={'/programs/' + get(program, 'slug.current', '')}
							class="sub-tile"
							sveltekit:prefetch
						>
							<div class="title">{program.title}</div>
							{#if program.applicationsOpen}
								<div class="circle" />
							{/if}
						</a>
					{/each}
				{/await}
			</div>
			<a href="/about" class="tile about" sveltekit:prefetch>What is eyebeam?</a>
			<a href="/people" class="tile people" sveltekit:prefetch>People</a>
		</div>
		<div class="tile search" on:click={toggleSearch}><SearchIcon /> Search this website</div>
	</div>
	<div class="column three">
		<a href="/eyebeam-is-changing" class="tile change" sveltekit:prefetch>
			Eyebeam is changing...
			<div class="half-beam"><HalfBeam /></div>
		</a>
		<a href="/support" class="tile support" sveltekit:prefetch>Support Eyebeam</a>
		<a href="/newsletter" class="tile social newsletter" sveltekit:prefetch>
			Newsletter
			<div class="icon"><Newsletter /></div>
		</a>
		<a href={INSTAGRAM_URL} target="_blank" class="tile social instagram"
			>Instagram
			<div class="icon"><Instagram /></div></a
		>
		<a href={TWITTER_URL} target="_blank" class="tile social twitter"
			>Twitter
			<div class="icon"><Twitter /></div></a
		>
		<a href={YOUTUBE_URL} target="_blank" class="tile social youtube"
			>Youtube
			<div class="icon"><Youtube /></div></a
		>
		<div class="tile events">
			<div class="sub-tile header" sveltekit:prefetch>UPCOMING & RECENT</div>
			{#await events then events}
				{#each events as event}
					<a href={'/events/' + get(event, 'slug.current', '')} class="sub-tile" sveltekit:prefetch>
						{#if event.startDate}
							<div class="time">{distanceToDate(event.startDate)}</div>
						{/if}
						<div class="title">{event.title}</div>
					</a>
				{/each}
			{/await}
		</div>
	</div>
</div>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../variables.scss';

	$one-third: calc(100% / 3);
	$two-third: calc((100% / 3) * 2);

	.homepage-menu {
		border: $border-style;
		width: 100%;
		height: 600px;
		height: calc(100vh - 130px);
		margin-bottom: 50px;
	}

	.section {
		float: left;
		height: 100%;
		width: $two-third;
	}

	.column {
		float: left;
		&.one {
			width: 50%;
			// background: yellow;
			height: calc(100% - 100px);
		}

		&.two {
			width: 50%;
			// background: red;
			height: calc(100% - 100px);
		}

		&.three {
			width: $one-third;
			// background: blue;
			height: 100%;
		}
	}

	.search {
		height: 100px;
		width: 100%;
		// background: pink;
		float: left;
		border-top: $border-style;
		border-right: $border-style;

		&:hover {
			background: $grey;
			cursor: pointer;
		}
	}

	.open-eyebeam {
		height: $two-third;
		background: $grey;
		width: 100%;
		border-right: $border-style;
		border-bottom: $border-style;
		float: left;
		position: relative;
	}

	.logo-and-statement {
		height: $one-third;
		// background: purple;
		width: 100%;
		border-right: $border-style;
		float: left;

		.logo {
			width: 220px;
			margin-bottom: $small-margin;
		}
	}

	.programs {
		height: $two-third;
		width: 100%;
		border-right: $border-style;
		border-bottom: $border-style;
		float: left;
		padding: 0 !important;
	}

	.about {
		height: $one-third;
		width: 50%;
		float: left;
		// background: orange;
		border-right: $border-style;
	}

	.people {
		height: $one-third;
		width: 50%;
		float: left;
		border-right: $border-style;
		// background: magenta;
	}

	.social {
		width: 25%;
		height: 100px;
		// background: salmon;
		float: left;
		border-right: $border-style;
		border-bottom: $border-style;

		&.youtube {
			border-right: none;
		}

		.icon {
			margin-top: 5px;
			margin-left: 1px;
		}
	}

	.change {
		height: calc(40% - 100px);
		width: 50%;
		// background: olive;
		float: left;
		border-right: $border-style;
		border-bottom: $border-style;

		.half-beam {
			margin-top: 10px;
		}
	}

	.support {
		height: calc(40% - 100px);
		width: 50%;
		// background: aqua;
		float: left;
		border-bottom: $border-style;
	}

	.events {
		height: 60%;
		width: 100%;
		// background: green;
		float: left;
		padding: 0 !important;
	}

	.tile {
		padding: $extra-small-margin;
		overflow: hidden;
		user-select: none;
	}

	a {
		text-decoration: none;

		&:hover {
			background: $grey;
		}

		&:active {
			background: $black;
			color: $white;
		}
	}

	.sub-tile {
		float: left;
		width: 50%;
		height: $one-third;
		padding: $extra-small-margin;
		overflow: hidden;

		&.header {
			// font-variant: small-caps;
			font-size: $font-size-extra-small;
			letter-spacing: 0.5px;
		}

		.time {
			margin-bottom: 5px;
			font-size: $font-size-extra-small;
		}

		.title {
			// font-weight: bold;
		}

		.circle {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background: $grey;
			margin-top: 5px;
		}

		&:hover {
			.circle {
				background: $black;
			}
		}
	}
</style>
