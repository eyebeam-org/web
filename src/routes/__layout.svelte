<script>
	// # # # # # # # # # # # # #
	//
	//  Main layout
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import { onMount } from 'svelte';
	import sample from 'lodash/sample.js';
	import Cookies from 'js-cookie';

	// __ COMPONENTS
	import Menubar from '$lib/menubar/menubar.svelte';
	import Menu from '$lib/main-menu/menu.svelte';
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
	const GREEN = 'rgb(0, 160, 0)';
	const BLUE = 'rgb(0, 0, 255)';
	const RGB = [RED, GREEN, BLUE];

	const MAIN_FONT = "'Literata', serif";
	const ALT_FONT = "'Eyebeam Sans', sans-serif";

	$: if (root.style) {
		if ($inversion) {
			console.log('DARKMODE');
			root.style.setProperty('--background-color', BLACK);
			root.style.setProperty('--foreground-color', WHITE);
			root.style.setProperty('--hover-text-color', BLACK);
			root.style.setProperty('--special-text-color', BLACK);
			root.style.setProperty('--journal-background-color', BLACK);
		} else {
			console.log('LIGHT MODE');
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', BLACK);
			root.style.setProperty('--hover-text-color', BLACK);
			root.style.setProperty('--special-text-color', BLACK);
			root.style.setProperty('--journal-background-color', BLACK);
		}
	}

	$: if (root.style) {
		if ($theme == 'rgb') {
			console.log('RGB');
			let randomColor = sample(RGB);
			root.style.setProperty('--font-stack', ALT_FONT);
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', randomColor);
			root.style.setProperty('--hover-text-color', randomColor);
			root.style.setProperty('--special-text-color', randomColor);
			root.style.setProperty('--journal-background-color', randomColor);
			inversion.set(false);
		}
		if ($theme == 'ink') {
			console.log('INK');
			root.style.setProperty('--font-stack', MAIN_FONT);
			root.style.setProperty('--background-color', WHITE);
			root.style.setProperty('--foreground-color', BLACK);
			root.style.setProperty('--hover-text-color', BLACK);
			root.style.setProperty('--special-text-color', BLACK);
			root.style.setProperty('--journal-background-color', BLACK);
		}
	}

	let isJournal = false;
	$: if ($page.url.pathname.includes('/journal')) {
		isJournal = true;
	} else {
		isJournal = false;
	}

	onMount(async () => {
		root = document.documentElement;

		setTimeout(() => {
			ready = true;
			let inversionCookie = Cookies.get('eyebeam-inversion');
			console.log('inversionCookie', inversionCookie);
			if (inversionCookie == 'true') {
				inversion.set(true);
			}
		}, 2000);
	});
</script>

<!-- HEADER -->
<Menubar {ready} />

<!-- PHONE HEADER -->

<PhoneMenubar />

<Menu />

{#if !ready}
	<!-- LOADING -->
	<Loading />
{:else}
	<!-- MAIN -->
	<main id="main" class:open={$trayOpen} class:journal={isJournal} class:inversion={$inversion}>

		<!-- Don't render the sidebar for landing and journal -->
		{#if $page.url.pathname == '/' || isJournal}
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
	{#if $page.url.pathname !== '/' && !isJournal}
		<Footer />
	{/if}
	<!-- PHONE FOOTER -->
	{#if !isJournal}
		<PhoneFooter />
	{/if}
{/if}

<style lang="scss" global>
	@import '../variables.scss';

	:root {
		--background-color: rgb(245, 244, 238);
		--foreground-color: rgb(34, 31, 32);
		--hover-text-color: rgb(34, 31, 32);
		--special-text-color: rgb(34, 31, 32);
		--journal-background-color: rgb(34, 31, 32);
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
		padding-top: 40px;
		padding-left: 60px;
		padding-right: 60px;
		transition: transform 0.5s $transition;
		position: relative;
		opacity: 1;
		display: flex;
		align-items: flex-start;

		&.open {
			transform: translateY(240px);
		}

		@include screen-size('small') {
			padding-left: 15px;
			padding-right: 15px;
			padding-top: 0;
			display: inline-block;
		}

		&.journal {
			background: var(--journal-background-color);
			padding-bottom: $HUGE;
			min-height: 100vh;
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
		margin-top: $NORMAL;

		img {
			max-width: 100%;
		}
	}

	.article {
		p,
		h2,
		h3 {
			@include text-margins;
			margin-bottom: $NORMAL;

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
		margin-left: $SMALL;
		padding-left: 0;
		margin-left: 0;

		li {
			padding-left: 1em;
			text-indent: -1em;
			&:before {
				content: '•';
				padding-right: $TINY;
				position: relative;
				top: -1px;
			}
		}
	}
.nodisplay {
		display: none;
}
</style>
