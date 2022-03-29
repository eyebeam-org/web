<script>
	// # # # # # # # # # # # # #
	//
	//  Main layout
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import { onMount } from 'svelte';
	import sample from 'lodash/sample.js';
	import Menubar from '$lib/menubar/menubar.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import PhoneMenubar from '$lib/phone/menubar/menubar.svelte';
	import PhoneFooter from '$lib/phone/footer/footer.svelte';
	import Loading from '$lib/loading/loading.svelte';
	import Sidebar from '$lib/sidebar/sidebar.svelte';

	// __ STORES
	import { page, navigating } from '$app/stores';
	import { trayOpen, inversion, theme } from '$lib/stores.js';

	let root = {};
	let ready = false;

	const BLACK = 'rgb(34, 31, 32)';
	const WHITE = 'rgb(245, 244, 238)';

	const RED = 'rgb(255, 0, 0)';
	const GREEN = 'rgb(0, 255, 0)';
	const BLUE = 'rgb(0, 0, 255)';
	const RGB = [RED, GREEN, BLUE];

	const MAIN_FONT = "'Literata', serif";
	const ALT_FONT = "'Eyebeam Sans', sans-serif";

	$: if (root.style) {
		if ($inversion) {
			console.log('DARKMODE');
			root.style.setProperty('--background-color', BLACK);
			root.style.setProperty('--foreground-color', WHITE);
		} else {
			console.log('LIGHT MODE');
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', BLACK);
		}
	}

	$: if (root.style) {
		if ($theme == 'rgb') {
			console.log('RGB');
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', sample(RGB));
			root.style.setProperty('--font-stack', ALT_FONT);
			inversion.set(false);
		}
		if ($theme == 'ink') {
			console.log('INK');
			root.style.setProperty('--font-stack', MAIN_FONT);
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', BLACK);
		}
	}

	onMount(async () => {
		root = document.documentElement;
	});

	setTimeout(() => {
		ready = true;
	}, 2000);
</script>

<!-- HEADER -->
<Menubar {ready} />

<!-- PHONE HEADER -->
<PhoneMenubar />

{#if !ready}
	<!-- LOADING -->
	<Loading />
{:else}
	<!-- MAIN -->
	<main id="main" class:open={$trayOpen} class:inversion={$inversion}>
		{#if $page.url.pathname == '/'}
			{#if $navigating == null}
				<slot />
			{:else}
				<div class="navigating" />
			{/if}
		{:else}
			<Sidebar fullBorders={$navigating !== null} />
			{#if $navigating == null}
				<slot />
			{:else}
				<div class="navigating" />
			{/if}
		{/if}
	</main>
{/if}

<!-- FOOTER -->
{#if $navigating == null}
	{#if $page.url.pathname !== '/'}
		<Footer />
	{/if}
	<!-- PHONE FOOTER -->
	<PhoneFooter />
{/if}

<style lang="scss" global>
	@import '../variables.scss';

	:root {
		--background-color: rgb(245, 244, 238);
		--foreground-color: rgb(34, 31, 32);
		--font-stack: 'Literata', serif;
	}

	body,
	html {
		background: var(--background-color);
		color: var(--foreground-color);
		font-family: var(--font-stack);
		font-size: $font-size-small;
		margin: 0;
		padding: 0;
	}

	a {
		color: var(--foreground-color);
	}

	* {
		box-sizing: border-box;
		transition: color 0.3s $transition, background-color 0.3s $transition;
		-webkit-tap-highlight-color: transparent;

		&::selection {
			background: $transparent-grey;
		}
		&::-moz-selection {
			background: $transparent-grey;
		}
	}

	main {
		padding-top: 80px;
		margin-left: 60px;
		margin-right: 60px;
		transition: transform 0.5s $transition;
		position: relative;
		opacity: 1;
		display: flex;
		align-items: flex-start;

		&.open {
			transform: translateY(240px);
		}

		@include screen-size('small') {
			margin-left: 15px;
			margin-right: 15px;
			padding-top: 0;
			display: inline-block;
			width: calc(100vw - 30px);
		}
	}

	h1 {
		font-size: $font-size-h1;
		font-weight: normal;
		margin: 0;
		line-height: 1.2em;

		@include screen-size('small') {
			font-size: $font-size-h2;
		}
	}

	h2 {
		font-size: $font-size-h2;
		font-weight: normal;
		margin: 0;
		line-height: 1.2em;
	}

	h3 {
		font-size: $font-size-body;
		font-weight: bold;
		margin: 0;
		line-height: 1.2em;
	}

	figure {
		margin-right: 0;
		margin-left: 0;
		margin-top: 1em;

		img {
			max-width: 100%;
		}
	}

	.article {
		p,
		h2,
		h3 {
			@include text-margins;
			margin-bottom: $vertical-space;

			@include screen-size('small') {
				padding-right: 0;
				padding-left: 0;
				@include phone-margins;
			}
		}

		p {
			font-size: $font-size-body;
		}
	}

	figcaption {
		font-style: italic;

		p {
			padding-left: 0 !important;
			padding-right: 0 !important;
			padding-top: 0 !important;
			margin-top: 0 !important;
		}
	}

	ul {
		list-style: none;
		margin-left: 10px;
		padding-left: 0;
		margin-left: 0;

		li {
			padding-left: 1em;
			text-indent: -1em;
			&:before {
				content: '•';
				padding-right: 5px;
				position: relative;
				top: -1px;
			}
		}
	}
</style>
