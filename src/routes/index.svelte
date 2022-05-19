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
	import { urlFor } from '$lib/sanity.js';

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
	import Menu from '$lib/main-menu/menu.svelte'
	import OpenEyebeam from '$lib/open-eyebeam/open-eyebeam.svelte';
	import Search from '$lib/search/search.svelte';
	import PersonLinkList from '$lib/person-link-list/person-link-list.svelte';
	import Sticker from '$lib/sticker/sticker.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ CONSTANTS
	import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '$lib/global.js';

	// __ PROPS
	export let programs;
	export let newPosts;
	export let stickers;
	export let featuredArtists;
	let artists;

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};

	//FIXME: surely there is a less stupid way to do this
	//CANNOT delete this rn
	$: featuredArtists, artists = [featuredArtists[0].featuredArtist1, featuredArtists[0].featuredArtist2]
	$: artists, console.log('artists: ', artists)
</script>

<!-- METADATA -->
<Metadata />

<div class="homepage-menu">
	<section>
		<div class="column one">
			<Menu />
		</div>
		<div class="column two">
			<div class="tile open-eyebeam">
				{#if get(stickers, 'stickerLeft.enabled', false)}
					<Sticker sticker={stickers.stickerLeft} />
				{:else}
					<OpenEyebeam />
				{/if}
			</div>
				<a class="sub-tile header" href="/people">FEATURED ARTISTS</a>
				<div class="featured-artists">
				{#each artists as artist}
					<div class="tile">
					<a
						href={'/people/' + artist.slug.current }
						sveltekit:prefetch
						class="featured-artist"
> <img class="featured-artist-image"alt ="" src={artist.image.url}/>{artist.firstName} {artist.lastName}
					<div class="quote">
							"{artist.quote}"
					</div>
	</a>

					</div>
				{/each}
</div>
	</div>
	<div class="column three">
<a class="sub-tile header" href="/events">UPCOMING & RECENT</a>
		{#if get(stickers, 'stickerRight.enabled', false)}
			{#if get(stickers, 'stickerRight.fullWidth', false) == false}
					<Sticker sticker={stickers.stickerRight} small={true} />
			{:else}
					<Sticker sticker={stickers.stickerRight} small={false} />
			{/if}
		{/if}
		<div class:no-sticker={get(stickers, 'stickerRight.enabled', false) == false} class:has-sticker={get(stickers, 'stickerRight.enabled', false) && get(stickers, 'stickerRight.fullWidth', false) == false} class="tile events"  >
{#each newPosts.slice(0, 4) as post}
				<a
					href={'/' + post.route + '/' + get(post, 'slug.current', '')}
					class="sub-tile event"
					sveltekit:prefetch
				>
					{#if post.mainImage != undefined && post.mainImage.asset != undefined}
					<div class="post-image">
						<img src={urlFor(post.mainImage.asset).width(1000).url()} />
					</div>
					{/if}
					<div class="post-content">
						{#if post.startDate}
						<div class="time">{distanceToDate(post.startDate)}</div>
						{:else if post._updatedAt }
						<div class="time">{distanceToDate(post._updatedAt)}</div>
					{/if}
					<div class="title">{truncate(post.title, { length: 72 })}</div>
					{#if post.people && post.people.length > 0}
						<div class="event-people">
						{#if post.people.length <= 1}
							<PersonLinkList people={post.people} />
						{:else}
							<PersonLinkList people={post.people.slice(0, 1)} /> & {post.people.length - 1} more
						{/if}
							</div>
					{/if}
					</div>
				</a>
			{/each}
		</div>
<div class="socials">
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
</div>

	</div>
</section>
</div>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../variables.scss';

	$one-third: calc(100% / 3);
	$two-third: calc((100% / 3) * 2);
	section {
		all: unset;
}

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
			max-width: 100%;
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
		max-width: 100%;
		
		border-right:1px solid var(--special-text-color);
		max-width: 100%;

		@include screen-size('small') {
			border-right: none;
		}
		&.one {
			width: calc((100%/12)*2);
			height: 100%;

			@include screen-size('small') {
				display: none;
			}
		}


		&.two {
			width: calc((100%/12)*6);
			// background: red;
			height: 100%;

			@include screen-size('small') {
				width: 100%;
				height: auto;
			}
		}

		&.three {
			// background: blue;
			width: calc((100%/12)*4);
			height: 100%;
			border-right: none;

			@include screen-size('small') {
				width: 100%;
				height: $one-third;
			}
		}
	}
	.socials {
		height: $one-sixth;
		width: 100%;
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
		float: left;

		.logo {
			width: 220px;
			margin-bottom: $SMALL;
		}
	}

	.programs {

		align-items: flex-start;
		align-content: flex-start;
		height: $two-third;
		width: 100%;
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		padding: 0 !important;

		@include screen-size('small') {
			border-right: unset;
			padding-top: $NORMAL;
		}
		.sub-tile {
			max-height: 40%;
			min-height: $two-sevenths;
			padding: $TINY $SMALL;
		}
	}

	.eyebeam-internal {
		height: $one-sixth;
		width: 50%;
		float: left;

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
		font-family: $ALT_FONT;
		justify-content: center;
		text-align: center;
		flex-wrap: nowrap;
		flex-direction: column;
		width: 25%;
		height: 100%;
		padding: 10px !important;
		float: left;
		border-top: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);

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
			text-align: center;
			margin: $TINY auto;
		}
	}

	.change {
		height: calc(40% - 100px);
		align-items: start;
		align-content: start;
		width: 50%;
		float: left;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);

		.half-beam {
			width: 100%;
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
		width: 100%;
		float: left;
		&.has-sticker {
			height: calc(((100%/6)*2) - (100%/12));
			flex-flow: row wrap;
			.event {
					width: 50%;
					max-width:50%;
					height: 100%;
					max-height: 100%;
					.post-image {
						display: none;
					}
			}
		}
		&.no-sticker {
			height: calc((100% - (100%/12)) - (100%/6));
		}
	}

	.featured-artists {
		height: calc(50% - (100%/6));
		flex-flow: row wrap;
		font-family: $ALT_FONT;
		font-size: $font-size-h2; 
		.tile {
			height:50%;
		}
		.featured-artist, .quote {
			padding: $SMALL $NORMAL;
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-flow: row nowrap;
			text-align: center;
		}
		.quote {
			width: $two-fifths;
			font-size: $font-size-small;
		}
		.featured-artist-image {
			height: 100%;
			max-width: 25%;
		}
		@include screen-size('small') {
			border-bottom: 1px solid var(--foreground-color);
			.featured-artist {
				width: 100%;
				justify-content: flex-start;
				font-size: $font-size-medium;
			}
			.featured-artist-image {
				margin-right: $NORMAL;
			}
				.quote {
					display: none;
				}

		}

	}
	button, input[type="submit"], input[type="reset"] {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.tile {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		user-select: none;

		@include screen-size('small') {
			font-size: $font-size-body;
		}
	}
	


	.open-eyebeam {
		height: calc(50% + (100%/12));
		background: $grey;
		width: 100%;
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		position: relative;
		padding: 0;
	}

	.half-sticker {
		padding: 0;
		height: $three-eighths;
		width: 50%;
		float: left;
		border-bottom: 1px solid var(--foreground-color);
		@include screen-size('small') {
			height: 170px;
		}
	}

	.full-sticker {
		padding: 0;
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

		&.header {
			display: block;
			font-family: $ALT_FONT;
			font-size: $font-size-medium;
			font-weight: 600;
			display: flex;
			align-content: center;
			align-items: center;
			min-height: auto;
			width: 100%;
			border-bottom: 1px solid var(--foreground-color);
			height: calc(100%/12);
			padding: $SMALL;
		}



		&.event {
			width:100%;
			padding: $TINY $NORMAL;
			min-height: calc(100% /5);
			max-height: 25%;
			height:25%;
			display: flex;
			align-content: center;
			align-items: center;
			.post-image {
				height: 80%;
				width: 30%;
				flex: none;
				display: flex;
				overflow: hidden;
				img {
					max-width: 100%;
					width: 100%;
					align-items: center;
					//					object-fit: cover;
				}
			}
			.post-content {
				padding: 0 $SMALL;
				display: flex;
				flex-flow: column nowrap;
			}
		}

		.time {
			margin-bottom: $TINY;
			font-size: $font-size-extra-small;
		}

		.title {
			margin-bottom: $TINY;
			width: 100%;
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
