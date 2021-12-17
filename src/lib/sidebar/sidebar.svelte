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
	<div class="tile logo" class:bordered={title || toc.length > 0 || location || date}>
		<a href="/" class="wordmark"><Logo /></a>
		{#if $page.path !== '/statements'}
			<Statements />
		{/if}
	</div>
	<!-- TOC -->
	{#if title || toc.length > 0}
		<div class="tile toc">
			<p>{title}</p>
			{#if toc.length > 0}
				<ul>
					{#each toc as item}
						<li>
							<a href={item.link} sveltekit:prefetch>{item.title}</a>
						</li>
					{/each}
				</ul>
			{/if}
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
		font-size: $font-size-small;

		@include screen-size('small') {
			display: none;
		}

		.open-eyebeam {
			height: $HEADER_HEIGHT;
			background: $grey;
			width: 100%;
			border-bottom: $border-style;
			float: left;
			position: relative;
		}

		.logo {
			height: 220px;
			width: 100%;
			float: left;

			a {
				display: block;
			}

			&.bordered {
				border-bottom: $border-style;
			}

			.wordmark {
				width: $LOGO_WIDTH;
				margin-bottom: $extra-small-margin;
			}
		}

		.toc {
			padding-top: 0;

			a {
				text-decoration: none;
			}
		}
	}
</style>
