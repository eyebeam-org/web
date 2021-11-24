<script>
	// # # # # # # # # # # # # #
	//
	//  Main layout
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import Loading from '$lib/loading/loading.svelte';

	// __ STORES
	import { page } from '$app/stores';
	import { loaded, trayOpen } from '$lib/stores.js';

	setTimeout(() => {
		loaded.set(true);
	}, 1000);
</script>

<!-- LOADING -->
{#if !$loaded}
	<Loading />
{/if}

<!-- HEADER -->
<Header />

<!-- MAIN -->
<main class:open={$trayOpen}>
	<slot />
</main>

<!-- FOOTER -->
{#if $page.path !== '/'}
	<Footer />
{/if}

<style lang="scss" global>
	@import '../variables.scss';

	body,
	html {
		background: $white;
		color: $black;
		font-family: $SERIF_STACK;
		font-size: $font-size-normal;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	a {
		color: $black;
	}

	* {
		box-sizing: border-box;
	}

	main {
		padding-top: 80px;
		margin-left: 60px;
		margin-right: 60px;
		transition: transform 0.3s ease-out;

		&.open {
			transform: translateY(170px);
		}
	}

	p {
		font-size: $font-size-normal;
	}

	h1 {
		font-size: $font-size-h1;
		font-weight: normal;
		margin: 0;
		line-height: 1.1em;
	}

	h2 {
		font-size: $font-size-h2;
		font-weight: normal;
		margin: 0;
		line-height: 1.1em;
	}

	h3 {
		font-size: $font-size-h3;
		font-weight: bold;
		margin: 0;
		line-height: 1.1em;
	}

	figure {
		margin-right: 0;
		margin-left: 0;
		margin-top: 1em;

		img {
			max-width: 100%;
		}
	}

	figcaption {
		font-style: italic;
	}
</style>
