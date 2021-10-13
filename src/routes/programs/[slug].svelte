<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	//  Single program
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from "$lib/person-link/person-link.svelte"

	// __ PROPS
	export let program;
	console.log('program', program)

	// __ Set currentPage
	currentPage.set({ slug: get(program, 'slug.current', ''), title: program.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">

		<!-- HEADER -->
		<div class='header'>
			<!-- TITLE -->
			<h1>{program.title}</h1>
			<!-- INTRODUCTION -->
			{#if has(program, 'introduction.content', [])}
				<div>{@html renderBlockText(program.introduction.content)}</div>
			{/if}
		</div>

		<!-- APPLICATION BANNER -->
		{#if program.applicationsOpen}
			<div class='application-banner'>
				Apply now
			</div>
		{/if}

		<!-- MAIN IMAGE -->
		{#if program.mainImage}
			<div class='image-container'>
				<img
					alt={program.title}
					src={urlFor(program.mainImage).quality(90).saturation(-100).width(900).url()}
				/>
			</div>
		{/if}

		<!-- MAIN TEXT -->
		{#if has(program, 'content.content', [])}
			<div class='main-text'>
				{@html renderBlockText(program.content.content)}
			</div>
		{/if}

		<!-- STORIES -->
		<div class='stories'>
			<h3>Stories</h3>
		</div>

		<!-- FAQ -->
		<div class='faq'>
			<h3>FAQ</h3>
		</div>

		<!-- SUPPORT -->
		<div class='support'>
			<h3>Support</h3>
		</div>

		<!-- CURRENT FELLOWS -->
		<div class='fellows'>
			<h3>Current Fellows</h3>
			<ul>
				{#each program.people as person}
					<li><PersonLink {person}/></li>
				{/each}
			</ul>
		</div>

		<!-- PAST FELLOWS -->
		<div class='fellows'>
			<h3>Past Fellows</h3>
		</div>

		<!-- ADVISORS -->
		<div class='fellows'>
			<h3>Advisors</h3>
		</div>
	
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={program._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			border: $border-style;
			min-height: 100vh;
		}

		.main-image {
			width: 300px;
		}
	}

	img {
		float: right;
	}

	.application-banner {
		width: 100%;
		background: $black;
		min-height: 160px;
		padding: 15px;
		color: $white;
	}

	.header {
		border-bottom: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.image-container {
		display: inline-block;
		width: 100%;
		min-height: 400px;
		padding-bottom: 20px;

		img {
			width: 100%;
		}
	}

	.main-text {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.stories {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.faq {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.support {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.fellows {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}
	
	ul {
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 5px;
		}
	}
</style>
