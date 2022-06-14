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
<h1 class="accessibility-title">Eyebeam Home</h1>
<div class="homepage-menu">
	<section role="menu">
	<div class="column one">
		<Menu />
	</div>
	<section role="content" class="homepage-content">
		<div class="column two">
			<div class="tile open-eyebeam">
				{#if get(stickers, 'stickerLeft.enabled', false)}
					<Sticker sticker={stickers.stickerLeft} />
				{:else}
					<OpenEyebeam />
				{/if}
			</div>
<div class="header-container"><h2><a class="sub-tile header" href="/people">FEATURED ARTISTS</a></h2></div>
				<div class="featured-artists">
				<ul>
				{#each artists as artist}
					<div class="tile">
<li>
<a
						href={'/people/' + artist.slug.current }
						sveltekit:prefetch
						class="featured-artist"
>  <img class="featured-artist-image"alt ="" src={urlFor(artist.image.url).saturation(-100)}/><div class="featured-artist-name"><h3>{artist.firstName} {artist.lastName}</h3></div>
	</a>

					</li>
					</div>
				{/each}
</ul>
	</div>
	</div>
	<div class="column three">
<div class="header-container"><h2><a class="sub-tile header" href="/events">UPCOMING & RECENT</a></h2></div>
		{#if get(stickers, 'stickerRight.enabled', false)}
			{#if get(stickers, 'stickerRight.fullWidth', false) == false}
					<Sticker sticker={stickers.stickerRight} small={true} />
			{:else}
					<Sticker sticker={stickers.stickerRight} small={false} />
			{/if}
		{/if}

		<div class:no-sticker={get(stickers, 'stickerRight.enabled', false) == false} class:has-sticker={get(stickers, 'stickerRight.enabled', false) && get(stickers, 'stickerRight.fullWidth', false) == false} class="tile events"  >
	{#if get(stickers, 'stickerRight.enabled', false)}
	<div class="event socials middle">
			<ul>
	<li>		<a href="/newsletter" class="tile social newsletter" sveltekit:prefetch>
	<div class="icon"><Newsletter /></div>
			</a>
	</li>
	<li>
			<a href={INSTAGRAM_URL} target="_blank" class="tile social instagram"
				><div class="icon"><Instagram /></div>
			</a>
	</li>
	<li>
			<a href={TWITTER_URL} target="_blank" class="tile social twitter"
				><div class="icon"><Twitter /></div>
			</a>
	</li>
	<li>
			<a href={YOUTUBE_URL} target="_blank" class="tile social youtube"
				>
				<div class="icon"><Youtube /></div>
			</a>
		</li>
	</ul>
	</div>
{/if}

{#each newPosts.slice(0, 4) as post}
				<a
					href={'/' + post.route + '/' + get(post, 'slug.current', '')}
					class="sub-tile event"
					sveltekit:prefetch
				>
					{#if post.mainImage != undefined && post.mainImage.asset != undefined}
					{#if get(stickers, 'stickerRight.enabled', false) == false}
						<div class="post-image">
							<img src={urlFor(post.mainImage.asset).width(1000).url()} alt={post.mainImage.alt} />
						</div>
					{/if}
					{/if}
					<div class="post-content">
						{#if post.startDate}
						<div class="time">{distanceToDate(post.startDate)}</div>
						{:else if post._updatedAt }
						<div class="time">{distanceToDate(post._updatedAt)}</div>
					{/if}
<div class="title"><h3>{truncate(post.title, { length: 72 })}</h3></div>
					{#if post.people && post.people.length > 0}
						<div class="event-people">
						{#if post.people.length <= 1}
<PersonLinkList people={post.people} tiny={get(stickers, 'stickerRight.enabled', false)} />
						{:else}
<PersonLinkList people={post.people.slice(0, 1)} tiny={ get(stickers, 'stickerRight.enabled', false) } /> 
						{/if}
							</div>
					{/if}
					</div>
				</a>
			{/each}
		</div>

{#if !get(stickers, 'stickerRight.enabled', false)}
<div class="socials bottom">
		<ul>
<li>		<a href="/newsletter" class="tile social newsletter" sveltekit:prefetch>
<div class="icon"><Newsletter /></div>
		</a>
</li>
<li>
		<a href={INSTAGRAM_URL} target="_blank" class="tile social instagram"
			>			<div class="icon"><Instagram /></div>
		</a>
</li>
<li>
		<a href={TWITTER_URL} target="_blank" class="tile social twitter"
			>			<div class="icon"><Twitter /></div>
		</a>
</li>
<li>
		<a href={YOUTUBE_URL} target="_blank" class="tile social youtube"
			>
			<div class="icon"><Youtube /></div>
		</a>
	</li>
</ul>
</div>
{/if}

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
	$phi: 1.61803398874898482;
	section {
		all: unset;
}
	.homepage-content {
		display: flex;
		width: $five-sixths;
		height: 100%;

		@include screen-size('small') {
			width: 100%;
		}
}
	.accessibility-title {
		position: absolute;
		left: 100000000000000000000000000000px;
		width: 1px;
		width: 0px;
		overflow:hidden;
	}
	h2, h3, h4 {
		all:unset;
	}
	ul, li {
		all: unset;
		padding: 0;
		display: inline;
		max-height: 100%;
	}
	ul:before, li:before {
		padding: 0;
		all: unset;
		list-style: none;
		content: none;
	}

	.homepage-menu {
		border: 1px solid var(--foreground-color);
		width: 100%;
		height: calc(100vh - 130px);
		margin-bottom: 50px;
		margin-left: auto;
		margin-right: auto;

		min-height: 520px;

		max-width: 100%;

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
			width: $one-sixth;
			height: 100%;
			@include screen-size('medium') {
				width: $one-fourth;
			}

			@include screen-size('small') {
				display: none;
			}


		}


		&.two {
			width: 100%/$phi;
			// background: red;
			height: 100%;
			display: flex;
			flex-flow: column wrap;

			@include screen-size('medium') {
				width: $one-half;
			}

			@include screen-size('small') {
				width: 100%;
				height: auto;
			}

		}

		&.three {
			// background: blue;
			display: flex;
			flex-flow: column wrap;
			width: (100%/$phi)/$phi;
			height: 100%;
			border-right: none;
			@include screen-size('medium') {
				width: $one-fourth;
			}
			@include screen-size('small') {
				width: 100%;
				height: $one-third;
			}
			


		}
	}
	.socials {
		width: 50%;
		//	height: $one-sixth;
		border-right: 1px solid var(--foreground-color);
		&.bottom {
			border-top: 1px solid var(--foreground-color);
		}
		&.middle {
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
		width: 50%;
		height: 50%;
		padding: 10px !important;
		float: left;
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		@include screen-size('small') {
			width: 50%;
			height: 85px;
		}
		@include screen-size('medium') {
			font-size: 0px;
		}


		&.youtube {
				border-right: none;
		}

		&.instagram {
				border-right: none;
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
		flex-flow: row wrap;
		max-width: 100%;
		flex: 1;
		height: calc((100%/12)*4);
		&.has-sticker {
			flex-flow: row wrap;
			.event {
					width: 50%;
					max-width:50%;
					height: 50%;
					max-height: 100%;
					.post-image {
						display: none;
					}
										&:nth-child(odd) {
											border-right: 1px solid var(--foreground-color);
										}
					//					&:nth-child(1) {
					//						border-bottom: 1px solid var(--foreground-color);
					//					}
										&:nth-child(2) {
											border-bottom: 1px solid var(--foreground-color);
										}

					.title {
						font-size: $font-size-small;
					}
			}
		}
		&.no-sticker {
			height: calc((100% - (100%/12)) - (100%/6));
		}
	}

	.featured-artists {
height: calc(50% - (100%/6) - (100%/12));
		font-family: $ALT_FONT;
		font-size: $font-size-medium; 
		.tile {
			height:100%;
			width: 50%;
			border-right:1px solid var(--special-text-color);
			&:last-child {
			border-right: none;
			}

		}
		.featured-artist {
			padding: $SMALL $NORMAL;
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-flow: row nowrap;
			text-align: center;
		}
		.featured-artist-name {
			font-size: $font-size-body;
			padding: $TINY;
			width: 100%;
		}
		.quote {
			width: $two-fifths;
			font-size: $font-size-body;
			font-family: $SERIF_STACK;
			@include screen-size('medium') {
				font-size: $font-size-extra-small;
				padding: $TINY;
			}

		}
		ul {
			display: flex;
			height: 100%;
				flex-flow: row wnorap;
			}
		.featured-artist-image {
			max-width: 40%;
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
		height: calc(50% + (100%/12) * 2);
		background: $grey;
		width: 100%;
		border-bottom: 1px solid var(--foreground-color);
		float: left;
		position: relative;
		padding: 0;
	}

	.half-sticker {
		padding: 0;
		height: 50%;
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

	.header-container {
			height: calc(100%/12);
			h2 {
				display: flex;
				width: 100%;
				height: 100%;
			}
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
			font-family: $ALT_FONT;
			font-size: $font-size-medium;
			@include screen-size('medium') {
				font-size: $font-size-journal
			}
			flex: 1;
			display: flex;
			align-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			max-height: 100%;
			border-bottom: 1px solid var(--foreground-color);
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
					object-fit: cover;
				}
			}
			.post-content {
				padding: 0 $SMALL;
				display: flex;
				max-height: 100%;
				flex-flow: column nowrap;
				overflow: hidden;
				@include screen-size('medium') {
					max-height: 98%;
					&:after {
//						content: "..."
					}
				}

			}
			.and-more {
				font-size: $font-size-extra-small;
				@include screen-size('medium') {
					display: none;
				}
			}

		}

		.time {
			margin-bottom: $TINY;
			font-size: $font-size-extra-small;
			@include screen-size('medium') {
				display: none;
			}

		}

		.title {
			margin-bottom: $TINY;
			font-size: $font-size-body;
			width: 100%;
			overflow: hidden;
			@include screen-size('medium') {
				font-size: $font-size-small;
			}


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
