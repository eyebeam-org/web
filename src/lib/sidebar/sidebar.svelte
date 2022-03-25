<script>
	// # # # # # # # # # # # # #
	//
	//  Sidebar
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
	import Logo from '$lib/graphics/logo.svelte';

	// __ COMPONENTS
	import Statements from '$lib/statements/statements.svelte';
	import OpenEyebeam from '$lib/open-eyebeam/open-eyebeam.svelte';

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	import { goto } from '$app/navigation';

	let hasContent = false;
	$: hasContent = $sidebarToC.length > 0;

	const handleToC = (link) => {
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

<!-- SIDEBAR -->
<div class="sidebar">
	<!-- OPEN EYEBEAM -->
	<a href={import.meta.env.VITE_OPEN_EYEBEAM_PUBLIC_URL} class="tile open-eyebeam">
		<OpenEyebeam />
	</a>
	<!-- LOGO -->
	<div class="tile logo" class:bordered={hasContent}>
		<a href="/" class="wordmark"><Logo /></a>
		<Statements />
	</div>
	<!-- TOC -->
	{#if hasContent}
		<div class="tile toc">
			<p>{$sidebarTitle}</p>
			{#if $sidebarToC.length > 0}
				<ul>
					{#each $sidebarToC as item}
						<li>
							<span
								class="pseudo-link"
								on:click={() => {
									handleToC(item.link);
								}}>{item.title}</span
							>
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
		border: 1px solid var(--foreground-color);
		border-right: none;
		font-size: $font-size-small;

		@include screen-size('small') {
			display: none;
		}

		.open-eyebeam {
			height: $HEADER_HEIGHT;
			background: $grey;
			width: 100%;
			border-bottom: 1px solid var(--foreground-color);
			float: left;
			position: relative;
			padding: 0;
		}

		.logo {
			height: 220px;
			width: 100%;
			float: left;

			a {
				display: block;
			}

			&.bordered {
				border-bottom: 1px solid var(--foreground-color);
			}

			.wordmark {
				width: $LOGO_WIDTH;
				margin-bottom: $extra-small-margin;
			}
		}

		.toc {
			padding-top: 0;

			.pseudo-link {
				text-decoration: none;
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
