<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/frontpage.json');
		if (res.ok) {
			const posts = await res.json();
			return {
				props: { posts }
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
	//  EYEBEAM.ORG
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import truncate from 'lodash/truncate.js';
	import get from 'lodash/get.js';
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
	import PersonLinkList from '$lib/person-link-list/person-link-list.svelte';
	import Sticker from '$lib/sticker/sticker.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	const INSTAGRAM_URL = 'https://www.instagram.com/eyebeamnyc/';
	const TWITTER_URL = 'https://twitter.com/eyebeamnyc';
	const YOUTUBE_URL = 'https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg';

	// __ PROPS
	export let posts = {};

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};
</script>

<!-- METADATA -->
<Metadata />

<div class="homepage-menu">
	<div class="section one">
		<div class="column one">
			<div class="tile open-eyebeam">
				{#if get(posts, 'stickers.stickerLeft.enabled', false)}
					<Sticker sticker={posts.stickers.stickerLeft} />
				{:else}
					<OpenEyebeam openEyebeam={posts.openEyebeam.mainImage}/>
				{/if}
			</div>
			<div class="tile logo-and-statement">
				<div class="logo"><Logo /></div>
				<Statements />
			</div>
		</div>
		<div class="column two">
			<div class="tile programs">
				<a href="/programs" class="sub-tile header" sveltekit:prefetch>PROGRAMS</a>
				{#each posts.programs as program}
					<a
						href={'/programs/' + get(program, 'slug.current', '')}
						class="sub-tile"
						sveltekit:prefetch
					>
						<div class="title">{program.title}</div>
						{#if program.applicationsOpen}
							<div class="application-container">
								<div class="circle" />
								<span class="applications-open">Applications open</span>
							</div>
						{/if}
					</a>
				{/each}
			</div>
			<a href="/about" class="tile about" sveltekit:prefetch>What is Eyebeam?</a>
			<a href="/people" class="tile people" sveltekit:prefetch>People</a>
		</div>
		<div class="tile search" on:click={toggleSearch}><SearchIcon /> Search this website</div>
	</div>
	<div class="column three">
		{#if get(posts, 'stickers.stickerRight.enabled', false)}
			{#if get(posts, 'stickers.stickerRight.fullWidth', false) == false}
				<div class="tile half-sticker">
					<Sticker sticker={posts.stickers.stickerRight} small={true} />
				</div>
				<a href="/about/support-eyebeam" class="tile support" sveltekit:prefetch>Support Eyebeam</a>
			{:else}
				<div class="tile full-sticker">
					<Sticker sticker={posts.stickers.stickerRight} small={true} />
				</div>
			{/if}
		{:else}
			<a href="/eyebeam-is-changing" class="tile change" sveltekit:prefetch>
				Eyebeam is changing...
				<div class="half-beam"><HalfBeam /></div>
			</a>
			<a href="/about/support-eyebeam" class="tile support" sveltekit:prefetch>Support Eyebeam</a>
		{/if}
		<a href="/newsletter" class="tile social newsletter" sveltekit:prefetch>
			Newsletter
			<div class="icon"><Newsletter /></div>
		</a>
		<a href={INSTAGRAM_URL} target="_blank" class="tile social instagram"
			>Instagram
			<div class="icon"><Instagram /></div>
		</a>
		<a href={TWITTER_URL} target="_blank" class="tile social twitter"
			>Twitter
			<div class="icon"><Twitter /></div>
		</a>
		<a href={YOUTUBE_URL} target="_blank" class="tile social youtube"
			>Youtube
			<div class="icon"><Youtube /></div>
		</a>
		<div class="tile events">
			<div class="sub-tile header event">UPCOMING & RECENT</div>
			{#each posts.events as event}
				<a
					href={'/events/' + get(event, 'slug.current', '')}
					class="sub-tile event"
					sveltekit:prefetch
				>
					{#if event.startDate}
						<div class="time">{distanceToDate(event.startDate)}</div>
					{/if}
					<div class="title">{truncate(event.title, { length: 48 })}</div>
					{#if event.people && event.people.length > 0}
						<div class="event-people">
							<PersonLinkList people={event.people} />
						</div>
					{/if}
				</a>
			{/each}
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
		border: 1px solid var(--foreground-color);
		width: 100%;
		height: calc(100vh - 130px);
		margin-bottom: 50px;
		margin-left: auto;
		margin-right: auto;

		min-width: 900px;
		min-height: 520px;

		max-width: 1400px;
		max-height: 900px;

		@include screen-size('small') {
			height: auto;
			display: inline-block;
			margin-bottom: unset;
			min-height: unset;
			min-width: unset;
		}
	}

	.section {
		float: left;
		height: 100%;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
			height: auto;
		}
	}

	.column {
		float: left;
		&.one {
			width: 50%;
			height: calc(100% - 100px);

			@include screen-size('small') {
				display: none;
			}
		}

		&.two {
			width: 50%;
			// background: red;
			height: calc(100% - 100px);

			@include screen-size('small') {
				width: 100%;
				height: auto;
			}
		}

		&.three {
			width: $one-third;
			// background: blue;
			height: 100%;

			@include screen-size('small') {
				width: 100%;
				height: auto;
			}
		}
	}

	.search {
		height: 100px;
		width: 100%;
		float: left;
		border-top: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);

		&:hover {
			background: $grey;
			cursor: pointer;
		}

		&:active {
			background: var(--foreground-color);
		}

		@include screen-size('small') {
			// border-right: unset;
			// border-bottom: 1px solid var(--foreground-color);
			display: none;
		}
	}

	.logo-and-statement {
		height: $one-third;
		width: 100%;
		border-right: 1px solid var(--foreground-color);
		float: left;

		.logo {
			width: 220px;
			margin-bottom: $extra-small-margin;
		}
	}

	.programs {
		height: $two-third;
		width: 100%;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		padding: 0 !important;

		@include screen-size('small') {
			border-right: unset;
			padding-top: $small-margin;
		}
	}

	.about {
		height: $one-third;
		width: 50%;
		float: left;
		border-right: 1px solid var(--foreground-color);

		@include screen-size('small') {
			height: 170px;
		}
	}

	.people {
		height: $one-third;
		width: 50%;
		float: left;
		border-right: 1px solid var(--foreground-color);

		@include screen-size('small') {
			height: 170px;
			border-right: unset;
		}
	}

	.social {
		width: 25%;
		height: 100px;
		padding: 10px !important;
		float: left;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);

		@include screen-size('small') {
			width: 50%;
			height: 85px;
		}

		&.youtube {
			border-right: none;
		}

		&.instagram {
			@include screen-size('small') {
				border-right: none;
			}
		}

		.icon {
			margin-top: 5px;
			margin-left: 1px;
		}
	}

	.change {
		height: calc(40% - 100px);
		width: 50%;
		float: left;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);

		.half-beam {
			margin-top: 10px;
		}

		@include screen-size('small') {
			border-top: 1px solid var(--foreground-color);
			height: 170px;
		}
	}

	.support {
		height: calc(40% - 100px);
		width: 50%;
		float: left;
		border-bottom: 1px solid var(--foreground-color);

		@include screen-size('small') {
			border-top: 1px solid var(--foreground-color);
			height: 170px;
		}
	}

	.events {
		height: 60%;
		width: 100%;
		float: left;
		padding: 0 !important;
	}

	.tile {
		padding: $extra-small-margin;
		overflow: hidden;
		user-select: none;

		@include screen-size('small') {
			font-size: $font-size-body;
		}
	}

	.open-eyebeam {
		height: $two-third;
		background: $grey;
		width: 100%;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		position: relative;
		padding: 0;
	}

	.half-sticker {
		padding: 0;
		height: calc(40% - 100px);
		width: 50%;
		float: left;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		@include screen-size('small') {
			height: 170px;
		}
	}

	.full-sticker {
		padding: 0;
		height: calc(40% - 100px);
		width: 100%;
		float: left;
		border-bottom: 1px solid var(--foreground-color);
		@include screen-size('small') {
			height: 170px;
		}
	}

	a {
		text-decoration: none;

		&:hover {
			background: $grey;
		}

		&:active {
			background: var(--foreground-color);
			color: $white;
		}
	}

	.sub-tile {
		float: left;
		width: 50%;
		height: $one-third;
		padding: $extra-small-margin;
		overflow: hidden;

		@include screen-size('small') {
			width: 100%;
			padding-top: 8px;
			padding-bottom: 8px;
			font-size: $font-size-small;
		}

		&:last-child {
			@include screen-size('small') {
				padding-bottom: $small-margin;
			}
		}

		&.header {
			font-size: $font-size-extra-small;
			letter-spacing: 0.5px;
			@include screen-size('small') {
				padding-top: $small-margin;
			}
		}

		&.event {
			height: 50%;
		}

		.time {
			margin-bottom: 5px;
			font-size: $font-size-extra-small;
		}

		.title {
			margin-bottom: 5px;
		}

		.application-container {
			display: flex;
			align-items: center;

			@include screen-size('small') {
				display: none;
			}

			.circle {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background: $grey;
				margin-top: 10px;
			}

			.applications-open {
				margin-left: 10px;
				font-size: $font-size-extra-small;
				opacity: 0;
				position: relative;
				top: 4px;
			}
		}

		&:hover {
			.circle {
				background: var(--foreground-color);
			}
			.applications-open {
				opacity: 1;
			}
		}
	}
</style>
