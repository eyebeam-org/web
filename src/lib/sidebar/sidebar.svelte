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
	import Menu from '$lib/main-menu/menu.svelte';

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	import { goto } from '$app/navigation';

	export let fullBorders = false;

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
<aside class="sidebar" class:full-borders={fullBorders}>
	<div class="tile open-eyebeam">
		<Menu/>
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

</aside>

<style lang="scss">
	@import '../../variables.scss';

	.tile {
		padding: $SMALL;
		overflow: hidden;
	}

	.sidebar {
		width: $two-sevenths;
		min-width: 400px;
		border: 1px solid var(--foreground-color);
		border-right: none;
		font-size: $font-size-small;

		&.full-borders {
			border-right: 1px solid var(--foreground-color);
		}

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
				margin-bottom: $SMALL;
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
