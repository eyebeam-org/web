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
	import get from 'lodash/get.js';
	import truncate from 'lodash/truncate.js';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let programs;

	const toc = programs.map((p) => {
		return { title: p.title, link: '/programs/' + get(p, 'slug.current', '') };
	});

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('Programs');
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={{ title: 'Programs' }} />
<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="tile introduction">
			<!-- TITLE -->
			<h1>Programs</h1>
			<!-- INTRODUCTION -->
			<div class="description">
				<p>
					Programs are the primary way Eyebeam enacts it’s mission. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Curabitur tempor nulla nulla, sit amet efficitur justo
					vestibulum nec. Donec eget condimentum tortor
				</p>
			</div>
		</div>
		<!-- LIST PROGRAMS -->
		{#each programs as program}
			<a class="tile nav-tile" href={'/programs/' + program.slug.current} sveltekit:prefetch>
				<!-- TITLE -->
				<h2>{program.title}</h2>
				<!-- DESCRIPTION -->
				{#if has(program, 'introduction.content')}
					<div class="introduction-text">
						{@html truncate(renderBlockText(program.introduction.content), {
							length: 600
						})}
					</div>
				{/if}

				{#if program.applicationsOpen}
					<div class="application-container">
						<div class="circle" />
						<div class="text">
							<div class="applications-open">Applications open</div>
							<div class="date">
								Due by {longFormatDate(program.applicationEndDate)}
							</div>
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
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			width: 100%;
			min-height: 100vh;
			border: 1px solid var(--foreground-color);
			display: inline-block;

			@include screen-size('small') {
				border: unset;
			}
		}
	}

	.introduction {
		border-bottom: 1px solid var(--foreground-color);
		min-height: $HEADER_HEIGHT;
		padding-top: 0;
		padding-right: $large-margin;

		@include screen-size('small') {
			border-bottom: unset;
			min-height: unset;
			padding: unset;
		}

		p {
			font-style: italic;
			font-size: $font-size-medium;

			@include screen-size('small') {
				font-size: $font-size-small;
			}
		}
	}

	.nav-tile {
		width: 50%;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
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
			background: var(--foreground-color);
			color: $white;
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

			&:nth-last-child(1) {
				border-bottom: 1px solid var(--foreground-color);
			}

			&:first-of-type {
				border-top: 1px solid var(--foreground-color);
			}
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
			background: var(--foreground-color);
		}

		.text {
			margin-left: 10px;

			.applications-open {
				font-size: $font-size-extra-small;
			}
		}
	}
</style>
