<script>
	// # # # # # # # # # # # # #
	//
	//  Sidebar
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';

	// __ GRAPHICS
	import Logo from '$lib/graphics/logo.svelte';

	// __ COMPONENTS
	import Statements from '$lib/statements/statements.svelte';
	import OpenEyebeam from '$lib/open-eyebeam/open-eyebeam.svelte';

	// __ STORES
	import { page } from '$app/stores';

	// __ PROPS
	export let toc = [];
	export let title = '';
	export let location = '';
	export let date = false;
</script>

<!-- SIDEBAR -->
<div class="sidebar">
	<!-- OPEN EYEBEAM -->
	<a href="https://open-eyebeam.netlify.app" class="tile open-eyebeam">
		<OpenEyebeam />
	</a>
	<!-- LOGO -->
	<div class="tile logo" class:bordered={toc.length > 0 || location || date}>
		<a href="/" class="wordmark"><Logo /></a>
		<Statements />
	</div>
	<!-- EVENT -->
	{#if location || date}
		<div class="tile event">
			<p>{title}</p>
			<!-- LOCATION -->
			{#if location && location.content}
				<div class="location">
					<strong>Location:</strong>{@html renderBlockText(location.content)}
				</div>
			{/if}
		</div>
	{/if}
	<!-- TOC -->
	{#if toc.length > 0}
		<div class="tile toc">
			<p>{title}</p>
			<ul>
				{#each toc as item}
					<li>
						<a href={item.link} sveltekit:prefetch>{item.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.tile {
		padding: 15px;
		overflow: hidden;
	}

	.sidebar {
		float: left;
		width: 50%;
		width: $one-third;
		border: $border-style;
		border-right: none;

		.open-eyebeam {
			height: 300px;
			background: $grey;
			width: 100%;
			border-bottom: $border-style;
			float: left;
			position: relative;
		}

		.logo {
			min-height: 160px;
			width: 100%;
			float: left;

			a {
				display: block;
			}

			&.bordered {
				border-bottom: $border-style;
			}

			.wordmark {
				width: 200px;
			}
		}

		.toc {
			a {
				text-decoration: none;
			}
		}
	}
</style>
