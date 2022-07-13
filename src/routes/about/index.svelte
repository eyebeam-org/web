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
	import { renderBlockText } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import keyBy from 'lodash/keyBy.js';
	import truncate from 'lodash/truncate.js';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PressAndNewsItem from '$lib/press-and-news-item/press-and-news-item.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';
	import ArrowLink from '$lib/graphics/arrow-link.svelte'

	// __ PROPS
	export let about;
	export let pressAndNews;

	//STORES
	import { goto } from '$app/navigation';

	console.log('about', about);
	console.log('pressAndNews', pressAndNews);

	// Rearrange about posts as a an array of keyed objects
	const aboutMap = keyBy(about, '_id');

	// The order that we want the the posts to be listed, according to the design
	const ORDER = [
		'our-mission-and-values',
		'our-history',
		'staff-and-board',
		'artists',
		'get-involved',
		'press-and-news',
		'our-operating-documents',
		'media-kit',
		'contact'
	];

	const toc = [
		{
			link: '/about/what-is-eyebeam',
			title: 'What Is Eyebeam'
		},
		{
			link: '/about/our-mission-and-values',
			title: 'Our Mission and Values'
		},
		{
			link: '/about/our-history',
			title: 'Our History'
		},
		{
			link: '/about/staff-and-board',
			title: 'Staff & Board'
		},
		{
			link: '/people',
			title: 'Artists'
		},
		{
			link: '/about/support-eyebeam',
			title: 'Support'
		},
		{
			link: '/about/get-involved',
			title: 'Get involved'
		},
		{
			link: '/press-and-news',
			title: 'Press & News'
		},
		{
			link: '/about/our-operating-documents',
			title: 'Our Operating Documents'
		},
		{
			link: '/about/media-kit',
			title: 'Media Kit'
		},
		{
			link: '/about/contact',
			title: 'Contact'
		}
	];

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(aboutMap['what-is-eyebeam'].title);
	$: sidebarToC.set(toc);
	//FIXME: this is currently duplicated here and in sidebar (as handleToC), should be in lib
	const handlePseudoLink = (link) => {
		if (link[0] == '#') {
			const targetElement = document.querySelector(link);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			goto(link);
		}
	};

</script>

<!-- METADATA -->
<Metadata page={aboutMap['what-is-eyebeam']} />

<!-- MAIN CONTENT -->
<div class="main-content" tabindex=0>
	<div class="inner">
		<div class="tile header-photo">
			<img src="eyebeambox.gif" alt="A gif of a black box with the word 'Eyebeam' on each face, slowly rotating" />
		</div>
<div class="tile nav-tile introduction" on:click={() => {handlePseudoLink('/about/' + aboutMap['what-is-eyebeam']._id)}}>
			<!-- TITLE -->
<h1><a href={'/about/' + aboutMap['what-is-eyebeam']._id}>{aboutMap['what-is-eyebeam'].title}</a></h1>
			<!-- INTRODUCTION -->
					{#if has(aboutMap['what-is-eyebeam'], 'introduction.content')}
						<div class="description">
							{@html truncate(renderBlockText(aboutMap['what-is-eyebeam'].introduction.content), {
								length: 500
							})}
						</div>
						<ArrowLink link={'/about/' + aboutMap['what-is-eyebeam']._id} />
				{/if}
		</div>

		{#each ORDER as section}
			{#if section == 'press-and-news'}
				<!-- PRESS & NEWS SECTION -->
				<div class="tile full-tile press-and-news">
					<h2>
						<a href="/press-and-news" sveltekit:prefetch>{aboutMap['press-and-news'].title}</a>
					</h2>
					<div class="press-and-news-listing">
						{#each pressAndNews as post}
							<PressAndNewsItem {post} />
						{/each}
					</div>
					<a href="/press-and-news" class="see-all" sveltekit:prefetch>See all Press & News</a>
				</div>
		{:else if section == 'contact'}
				<!-- CONTACT SECTION -->
				<div class="tile full-tile contact">
					<h2>Contact</h2>
					<div class="bottom-container">
						<div class="column">{aboutMap['contact'].address}</div>
						<div class="column">
							{aboutMap['contact'].phoneNumber}<br />
							<a href={'mailto:' + aboutMap['contact'].email}>
								{aboutMap['contact'].email}
							</a>
						</div>
					</div>
				</div>
			{:else}
				<!-- STANDARD SECTIONS -->
				<div
					class="tile nav-tile {section}"
on:click={()=> {handlePseudoLink(section == 'artists' ? '/people' : '/about/' + aboutMap[section]._id);}}
					sveltekit:prefetch
				>
<h2> <a href={ section == 'artists' ? '/people' : '/about/' + aboutMap[section]._id}>{aboutMap[section].title}</a></h2>
					{#if has(aboutMap[section], 'introduction.content')}
						<div class="description">
							{@html truncate(renderBlockText(aboutMap[section].introduction.content), {
								length: 600
							})}
						</div>
<ArrowLink link={'/about/' + aboutMap[section]._id} />
					{/if}
				</div>
			{/if}
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';
	h1 a {
		text-decoration: none;
	}

	h2 {
		font-family: $ALT_FONT;
		font-size: $font-size-menu;
		text-transform: uppercase;
		padding-right: $LARGE;
	}
	.tile {
		padding: $SMALL;
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
	.description {
		font-size: $font-size-body;
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

	.introduction {
		border-bottom: 1px solid var(--foreground-color);
		min-height: $HEADER_HEIGHT;
		max-height: $HEADER_HEIGHT;
		overflow: scroll;
		padding-right: $LARGE;

	
		p {
			font-style: italic;
			font-size: $font-size-medium;

			@include screen-size('small') {
				font-size: $font-size-small;
			}
		}
	}
	.header-photo {
		overflow: hidden;
		padding: 0;
		max-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		height: $HEADER_HEIGHT;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}


	.nav-tile {
		width: 50%;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		display: flex;
		flex-flow: column nowrap;
		float: left;
		text-decoration: none;
		cursor: pointer;
		padding-right: $LARGE;
		a {
			text-decoration: none;
		}
		button {
			background: $grey;
			display: block;
			text-align: center;
			margin: $SMALL auto;
		}

		&:hover {
			background: $grey;
			color: var(--hover-text-color);
		}

		&:active {
			background: var(--foreground-color);
			color: $white;
		}

		&.our-history,
		&.artists,
		&.the-fold,
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
			overflow: hidden;
			position: relative;

			@include screen-size('small') {
				flex-wrap: wrap;
				margin-top: 0;
				padding-bottom: $LARGE;
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
