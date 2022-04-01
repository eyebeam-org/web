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

	// __ CONSTANTS
	import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '$lib/global.js';

	// __ PROPS
	export let programs;
	export let events;
	export let stickers;

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};
	$: programs, console.log('programs: ', programs)
	$: events, console.log('events: ', events)
</script>

<!-- METADATA -->
<Metadata />

<div class="homepage-menu">
	<div class="section one">
		<div class="column one">
			<div class="tile open-eyebeam">
				{#if get(stickers, 'stickerLeft.enabled', false)}
					<Sticker sticker={stickers.stickerLeft} />
				{:else}
					<OpenEyebeam />
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
				{#each programs.slice(0,4) as program}
					<a
						href={'/programs/' + get(program, 'slug.current', '')}
						class="sub-tile"
						sveltekit:prefetch
					>
						<div class="title">{program.title}</div>
						{#if program.applicationsOpen}
							<div class="application-container">
								<div class="circle" />
								<span class="subtitle applications-open">Applications open</span>
							</div>
						{/if}
					</a>
				{/each}
					<a
						href='/programs/'
						class="sub-tile"
						sveltekit:prefetch
					>
						<div class="title">MORE</div>
</a>

			</div>
				<a
	href='/journal'
							class="tile eyebeam-internal"
							sveltekit:prefetch
						>

<div class="title">Journal</div>
							<span class="subtitle">Updates from Eyebeam staff & artists</span>
						</a>
			<a href="/people" class="tile eyebeam-internal people" sveltekit:prefetch>People</a>
						<a
	href='/notes'
							class="tile eyebeam-internal"
							sveltekit:prefetch
						>

<div class="title">Posts</div>
							<span class="subtitle">Artist profiles, interviews, & more</span>
					</a>

			<a href="/about" class="tile eyebeam-internal" sveltekit:prefetch>What is eyebeam?</a>

		</div>
<div class="tile search" on:click={toggleSearch}><div class="icon"><SearchIcon /></div> <span class="search-text">Search this website</span></div>
	</div>
	<div class="column three">
		{#if get(stickers, 'stickerRight.enabled', false)}
			{#if get(stickers, 'stickerRight.fullWidth', false) == false}
				<div class="tile half-sticker">
					<Sticker sticker={stickers.stickerRight} small={true} />
				</div>
				<a href="/about/support-eyebeam" class="tile support" sveltekit:prefetch>Support Eyebeam</a>
			{:else}
				<div class="tile full-sticker">
					<Sticker sticker={stickers.stickerRight} small={true} />
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
			<div class="sub-tile header">UPCOMING & RECENT</div>
			{#each events.slice(0, 7) as event}
				<a
					href={'/events/' + get(event, 'slug.current', '')}
					class="sub-tile event"
					sveltekit:prefetch
				>
					{#if event.startDate}
						<div class="time">{distanceToDate(event.startDate)}</div>
						{:else if event._updatedAt }
						<div class="time">{distanceToDate(event._updatedAt)}</div>
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
			max-height: unset;
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
		align-items: flex-start;
		justify-content: flex-start;
		height: 100px;
		width: 100%;
		float: left;
		border-top: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		.search-text {
			margin-left: $TINY;
		}
	
		&:hover {
			background: $grey;
			cursor: pointer;
			color: var(--hover-text-color);
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
			margin-bottom: $SMALL;
		}
		.statement {
			width: 100%;
		}
	}

	.programs {

		align-items: flex-start;
		align-content: flex-start;
		height: $two-third;
		width: 100%;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		padding: 0 !important;

		@include screen-size('small') {
			border-right: unset;
			padding-top: $NORMAL;
		}
		.sub-tile {
			min-height: $one-third;
		}
	}

	.eyebeam-internal {
		height: $one-sixth;
		width: 50%;
		float: left;
		border-right: 1px solid var(--foreground-color);

		@include screen-size('small') {
			height: 170px;
		}
	}

	.people {
		@include screen-size('small') {
			border-right: unset;
		}
	}

	.social {
		align-items: flex-start;
		flex-wrap: nowrap;
		flex-direction: column;
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
			width:100%;
			margin-top: $TINY;
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
			margin-top: $TINY;
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
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		flex-flow: column wrap;
		height: 60%;
		width: 100%;
		float: left;
		padding: 0 !important;
	}

	.tile {
		display: flex;
		flex-wrap: wrap;
		padding: $SMALL;
		overflow: hidden;
		user-select: none;

		@include screen-size('small') {
			font-size: $font-size-body;
		}
	}
	.header {
			font-size: $font-size-extra-small;
			float: left;
			width: 50%;
			height: $font-size-extra-small;
			padding: $SMALL;
			@include screen-size('small') {
				padding-top: $NORMAL;
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
			color: var(--hover-text-color);
		}

		&:active {
			background: var(--foreground-color);
			color: var(--background-color);
		}
	}

	.subtitle {
		width:100%;
		font-size: $font-size-extra-small;
	}


	.sub-tile {
		width: 50%;
		padding: $SMALL;
		max-height: 50%;
		overflow: hidden;

		@include screen-size('small') {
			width: 100%;
			padding-top: $TINY;
			padding-bottom: $TINY;
			font-size: $font-size-small;
		}

		&:last-child {
			@include screen-size('small') {
				padding-bottom: $NORMAL;
			}
		}


		&.event {
			min-height: $one-fourth;
			max-height: 50%;
		}

		.time {
			margin-bottom: $TINY;
			font-size: $font-size-extra-small;
		}

		.title {
			margin-bottom: $TINY;
		}



		.application-container {
			display: flex;
			align-items: center;

			@include screen-size('small') {
				display: none;
			}

			.circle {
				width: 15px;
				height: 15px;
				border-radius: 50%;
				background: $grey;
				margin-top: $TINY;
			}
			.applications-open {
				margin-left: $TINY;
				opacity: 0;
				color: var(--foreground-color);
			}
		}

		&:hover {
			.circle {
				background: var(--hover-text-color);
			}
			.applications-open {
				opacity: 1;
				color: var(--hover-text-color);
			}
		}
	}
</style>
