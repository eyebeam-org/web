
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
	import has from 'lodash/has.js'

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
<Sidebar toc={programs} title='Programs'/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>
		<div class="tile introduction">
			<h1>Programs</h1>
		</div>
		<!-- LIST PROGRAMS -->
		{#each programs as program}
			<a class="tile nav-tile" href={'/programs/' + program.slug.current} sveltekit:prefetch>
				<h2>{program.title}</h2>
				{#if has(programs, 'introduction.content')}
					<div class="introduction-text">{@html renderBlockText(program.introduction.content)}</div>
				{/if}
			</a>
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar/>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.tile {
		padding: 15px;
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
		min-height: 300px;

		p {
			font-style: italic;
			font-size: $font-size-normal;
		}
	}

	.nav-tile {
		width: 50%;
		min-height: 300px;
		border-bottom: $border-style;
		border-right: $border-style;
		display: block;
		float: left;
		text-decoration: none;
		cursor: pointer;

		&:nth-child(odd) {
			border-right: none;
		}

		&:hover {
			background: $grey;
		}
	}
</style>
