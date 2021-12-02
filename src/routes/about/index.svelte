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
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';

	import keyBy from 'lodash/keyBy.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let about;
	console.log('about', about);
	const aboutMap = keyBy(about, '_id');

	console.log('aboutMap', aboutMap);

	const ORDER = [
		'our-mission-and-values',
		'our-history',
		'staff-and-board',
		'artists',
		'support-eyebeam',
		'get-involved',
		'press-and-news',
		'our-operating-documents',
		'media-kit',
		'contact'
	];

	const toc = [
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
			link: '/about/artists',
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
			link: '/about/press-and-news',
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
</script>

<svelte:head>
	<title>{aboutMap['what-is-eyebeam'].title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar {toc} title={aboutMap['what-is-eyebeam'].title} />

<div class="main-content">
	<div class="inner">
		<div class="tile introduction">
			<!-- TITLE -->
			<h1>{aboutMap['what-is-eyebeam'].title}</h1>
			<!-- INTRODUCTION -->
			{#if has(aboutMap['what-is-eyebeam'], 'introduction.content')}
				<div class="description">
					{@html renderBlockText(aboutMap['what-is-eyebeam'].introduction.content)}
				</div>
			{/if}
		</div>

		{#each ORDER as section}
			{#if section == 'press-and-news'}
				<div class="tile full-tile press-and-news">
					<h2>{aboutMap['press-and-news'].title}</h2>
					<a href="/about/press-and-news" class="see-all">See all Press & News</a>
				</div>
			{:else if section == 'contact'}
				<div class="tile full-tile contact">
					<h2>Contact</h2>
					<div class="bottom-container">
						<div class="column">{aboutMap['contact'].address}</div>
						<div class="column">
							{aboutMap['contact'].phoneNumber}<br /><a href={'mailto:' + aboutMap['contact'].email}
								>{aboutMap['contact'].email}</a
							>
						</div>
					</div>
				</div>
			{:else}
				<a
					class="tile nav-tile {section}"
					href={'/about/' + aboutMap[section]._id}
					sveltekit:prefetch
				>
					<h2>{aboutMap[section].title}</h2>
					{#if has(aboutMap[section], 'introduction.content')}
						<div class="description">
							{@html renderBlockText(aboutMap[section].introduction.content)}
						</div>
					{/if}
				</a>
			{/if}
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.tile {
		padding: $extra-small-margin;
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
		min-height: $HEADER_HEIGHT;
		padding-top: 0;
		padding-right: 30px;

		p {
			font-style: italic;
			font-size: $font-size-medium;
		}
	}

	.nav-tile {
		width: 50%;
		min-height: $HEADER_HEIGHT;
		border-bottom: $border-style;
		border-right: $border-style;
		display: block;
		float: left;
		text-decoration: none;
		cursor: pointer;
		padding-right: 40px;

		&:hover {
			background: $grey;
		}

		&:active {
			background: $black;
			color: $white;
		}

		&.our-history,
		&.artists,
		&.get-involved,
		&.media-kit {
			border-right: none;
		}
	}

	.full-tile {
		width: 100%;
		min-height: $HEADER_HEIGHT;
		border-bottom: $border-style;
		display: block;
		float: left;
		text-decoration: none;

		&.contact {
			border-bottom: none;
			min-height: unset;
			height: $HEADER_HEIGHT / 2;
			position: relative;

			.bottom-container {
				position: absolute;
				bottom: 15px;
				left: 15px;
				width: 100%;

				.column {
					width: 25%;
					float: left;
				}
			}
		}
	}

	.press-and-news {
		position: relative;

		.see-all {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 50px;
			width: 100%;
			border-top: $border-style;
			text-align: center;
			line-height: 50px;
			text-decoration: none;

			&:hover {
				background: $grey;
			}
		}
	}
</style>
