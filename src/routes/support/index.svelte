<script context="module">
	export const router = false;
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  What is Eyebeam?
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	export const router = false;
	import { renderBlockText } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import keyBy from 'lodash/keyBy.js';
	import truncate from 'lodash/truncate.js';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ COMPONENTS
	import SupportBlock from './supportBlock.svelte'
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';
	import EmbedContent from '$lib/embed-content/embed-content.svelte';

	// __ PROPS
	export let about;

	//STORES

	console.log('about', about);

	// Rearrange about posts as a an array of keyed objects
	const aboutMap = keyBy(about, '_id');

	// The order that we want the the posts to be listed, according to the design
	//FIXME this is a dumb brittle setup to deal with external widgets
	const ORDER = [
						[
						'volunteer',
				'supporters'],
				['contact' ]
	];

	const toc = [
	];

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('Join Us');
	$: sidebarToC.set(toc);

</script>

<!-- METADATA -->

<!-- MAIN CONTENT -->
<div class="main-content" tabindex=0>
	<div class="inner">
		<div class="row">
				<div class="tile header-photo">
					<img src="eyebeambox.gif" alt="A gif of a black box with the word 'Eyebeam' on each face, slowly rotating" />
				</div>
				<SupportBlock section={'donate'} aboutMap={aboutMap} />
		</div>

		{#each ORDER as section, i}
			<div class="row">
				<SupportBlock section={section[0]} aboutMap={aboutMap} />
				{#if section.length > 1}
					<SupportBlock section={section[1]} aboutMap={aboutMap}/>
				{/if}
			</div>
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	h2 {
		font-family: $ALT_FONT;
		font-size: $font-size-menu;
		text-transform: uppercase;
		padding-left: 0;
	}

	.row {
display: flex;
flex-flow: row wrap;
}

	.tile {
		padding: $NORMAL;
		overflow: hidden;
		width: 50%;
		display: block;
		float: left;
		@include screen-size('small') {
			width: 100%;
			border: 1px solid var(--foreground-color);
			border-top: none;
			&:first-child {
				border-top: 1px solid var(--foreground-color);
			}

		}
	}

	.main-content {
		float: left;
		width: 100%;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			width: 100%;
			border: 1px solid var(--foreground-color);
			min-height: 100vh;
			display: inline-block;

			@include screen-size('small') {
				border: unset;
			}
		}
	}
	.description {
		font-size: $font-size-body;
	}

	.introduction {
		border-bottom: 1px solid var(--foreground-color);
		min-height: $HEADER_HEIGHT;
		max-height: $HEADER_HEIGHT;
		overflow: scroll;
		padding: $NORMAL;


		p {
			font-style: italic;
			font-size: $font-size-medium;

			@include screen-size('small') {
				font-size: $font-size-small;
			}
		}
	}
	.header-photo {
		overflow: none;
		padding: 0;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		height: $HEADER_HEIGHT;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.nav-tile {
		width: 50%;
		min-height: $HEADER_HEIGHT;
		display: flex;
		flex-flow: column nowrap;

		border-bottom: 1px solid var(--foreground-color);
		&:nth-child(odd) {
			border-right: 1px solid var(--foreground-color);
		}
		display: block;
		float: left;
		text-decoration: none;
		padding-right: $LARGE;
		a {
			text-decoration: none;
		}


		&:hover {
//		background: $grey;
//			color: var(--hover-text-color);
		}

		&:active {
//			background: var(--foreground-color);
//			color: $white;
		}

		&.our-history,
		&.artists,
		&.get-involved,
		&.media-kit {
			border-right: none;
			@include screen-size('small') {
				border-right: 1px solid var(--foreground-color);
			}
		}

		@include screen-size('small') {
			width: 100%;
			border-left: 1px solid var(--foreground-color);
			border-right: 1px solid var(--foreground-color);
			border-bottom: 1px solid var(--foreground-color);
			min-height: 33vh;

			&:nth-child(odd) {
				border-right: 1px solid var(--foreground-color);
			}

			&:last-child {
				border-bottom: 1px solid var(--foreground-color);
			}

			&:first-of-type {
				border-top: 1px solid var(--foreground-color);
			}
		}
		&.crypto-widget {
			div {
				width: 100%;
			}
		}
	}

	.full-tile {
		width: 100%;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		display: block;
		float: left;
		text-decoration: none;

		@include screen-size('small') {
			min-height: unset;
			border-left: 1px solid var(--foreground-color);
			border-right: 1px solid var(--foreground-color);
		}

		&.contact {
			border-bottom: none;
			min-height: unset;
			height: $HEADER_HEIGHT / 2;
			position: relative;

			@include screen-size('small') {
				border-bottom: 1px solid var(--foreground-color);
			}

			.bottom-container {
				position: absolute;
				bottom: 15px;
				left: 15px;
				width: 100%;

				.column {
					width: 25%;
					float: left;

					@include screen-size('small') {
						width: calc(100% - 40px);
					}
				}
			}
		}
	}

	.press-and-news {
		position: relative;
		padding-left: 0;
		padding-right: 0;

		h2 {
			margin-right: $SMALL;
			margin-left: $SMALL;

			a {
				text-decoration: none;
			}
		}

		.press-and-news-listing {
			width: 100%;
			display: flex;
			margin-top: $NORMAL;
			padding-bottom: $NORMAL;

			@include screen-size('small') {
				flex-wrap: wrap;
				margin-top: 0;
			}
		}

		.see-all {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 50px;
			width: 100%;
			border-top: 1px solid var(--foreground-color);
			text-align: center;
			line-height: 50px;
			text-decoration: none;

			&:hover {
				background: $grey;
				color: var(--hover-text-color);
			}
		}
	}
</style>
