<script>
	// # # # # # # # # # # # # #
	//
	// Phone Header
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import { fade } from 'svelte/transition';

	// __ COMPONENTS
	import Search from '$lib/search/search.svelte';

	// __ STORES
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '$lib/global.js';

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';
	import SearchIcon from '$lib/graphics/search.svelte';
	import Logo from '$lib/graphics/logo.svelte';
	import X from '$lib/graphics/menu-x.svelte';
	import Hamburger from '$lib/graphics/hamburger.svelte';

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};

	let menuOpen = false;
	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const MENU_ITEMS = [
		{ label: 'Home', value: '/' },
		{ label: 'About / What is Eyebeam?', value: '/about' },
		{ label: 'Programs', value: '/programs' },
		{ label: 'Upcoming & Recent', value: '/' },
		{ label: 'People', value: '/people' },
		{ label: 'Support Eyebeam', value: '/about/support-eyebeam' },
		{ label: 'Newsletter', value: '/newsletter' },
		{ label: 'Instagram', value: INSTAGRAM_URL },
		{ label: 'Twitter', value: TWITTER_URL },
		{ label: 'YouTube', value: YOUTUBE_URL }
	];
</script>

<nav class="menubar">
	<div class="search-bar" on:click={toggleSearch}>
		<span class="icon"><SearchIcon white={true} /></span>Search this site
	</div>
	{#if $page.url.pathname == '/'}
		<a href="/" class="logo"><BigBeam /></a>
		<a href="/" class="wordmark"><Logo /></a>
	{/if}
	{#if $page.url.pathname !== '/'}
		<div class="wordmark" on:click={toggleMenu}><Logo /></div>
		<div class="menu-toggle" on:click={toggleMenu}>
			<span class="menu-toggle-header">Click to {menuOpen ? 'hide' : 'show'} menu</span>
			<span class="icon">
				{#if menuOpen}
					<X />
				{:else}
					<Hamburger />
				{/if}
			</span>
		</div>
		{#if menuOpen}
			<div class="menu">
				{#each MENU_ITEMS as item, index}
					<div
						in:fade={{ delay: index * 30, duration: 100 }}
						class="menu-item"
						on:click={() => {
							menuOpen = false;
							goto(item.value);
						}}
					>
						{item.label}
					</div>
				{/each}
			</div>
			<div class="logo" in:fade={{ delay: 300, duration: 400 }}><BigBeam flipped={true} /></div>
		{/if}
	{/if}
</nav>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../../../variables.scss';

	$HEADER_HEIGHT: 30px;

	.menubar {
		cursor: pointer;
		margin-bottom: $NORMAL;

		.search-bar {
			background: var(--foreground-color);
			padding-top: 8px;
			padding-bottom: 8px;
			text-align: center;
			color: $white;

			.icon {
				margin-right: $TINY;
			}
		}

		.logo {
			margin: $NORMAL;
			display: block;
		}

		.wordmark {
			margin: $NORMAL;
			display: block;
		}

		.menu-toggle {
			border-bottom: 1px solid var(--foreground-color);
			border-top: 1px solid var(--foreground-color);
			margin: $NORMAL;
			font-size: $font-size-medium;
			display: flex;
			justify-content: space-between;
			padding-top: 8px;
			padding-bottom: 8px;
			margin-bottom: 0;
		}

		.menu {
			border-bottom: 1px solid var(--foreground-color);
			margin: $NORMAL;
			margin-top: 0;
			font-size: $font-size-medium;
			padding-bottom: 8px;
			padding-top: 8px;

			.menu-item {
				display: block;
				text-decoration: none;

				&:hover,
				&:active {
					background: $grey;
				}
			}
		}

		display: none;
		@include screen-size('small') {
			display: block;
		}
	}
</style>
