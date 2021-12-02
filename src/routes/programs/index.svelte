<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/programs.json');
		if (res.ok) {
			const programs = await res.json();
			return {
				props: { programs }
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
	//  Programs
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import { longFormatDate } from '$lib/global';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let programs;
</script>

<svelte:head>
	<title>Programs</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar toc={programs} title="Programs" />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="tile introduction">
			<!-- TITLE -->
			<h1>Programs</h1>
			<!-- INTRODUCTION -->
			<!-- {#if has(aboutMap['what-is-eyebeam'], 'introduction.content')} -->
			<div class="description">
				<p>
					Programs are the primary way Eyebeam enacts it’s mission. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Curabitur tempor nulla nulla, sit amet efficitur justo
					vestibulum nec. Donec eget condimentum tortor
				</p>
				<!-- {@html renderBlockText(aboutMap['what-is-eyebeam'].introduction.content)} -->
			</div>
			<!-- {/if} -->
		</div>
		<!-- LIST PROGRAMS -->
		{#each programs as program}
			<a class="tile nav-tile" href={'/programs/' + program.slug.current} sveltekit:prefetch>
				<!-- TITLE -->
				<h2>{program.title}</h2>
				<!-- DESCRIPTION -->
				{#if has(program, 'introduction.content')}
					<div class="introduction-text">{@html renderBlockText(program.introduction.content)}</div>
				{/if}

				{#if program.applicationsOpen}
					<div class="application-container">
						<div class="circle" />
						<span class="applications-open">Applications open</span>
						<div class="date">
							Due by {longFormatDate(program.applicationEndDate)}
						</div>
					</div>
				{/if}
			</a>
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
			min-height: 100vh;
			border: $border-style;
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

		&:nth-child(odd) {
			border-right: none;
		}

		&:nth-last-child(1) {
			border-bottom: none;
		}

		&:hover {
			background: $grey;
		}

		&:active {
			background: $black;
			color: $white;
		}
	}

	.application-container {
		display: flex;
		align-items: center;
		background: $grey;
		padding: $extra-small-margin;

		.circle {
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background: $black;
			margin-top: 10px;
		}

		.applications-open {
			margin-left: 10px;
			font-size: $font-size-extra-small;
		}
	}
</style>
