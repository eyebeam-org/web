<script>
	import { navigating, page } from '$app/stores';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';

	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

{#if $page.path !== '/'}
	<Footer />
{/if}

<style lang="scss" global>
	@import "../variables.scss";

    body, html {
        background: $white;
		color: $black;
		font-family: $SERIF_STACK;
		font-size: $font-size-normal;
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
	}

	p {
		font-size: $font-size-normal;
	}

	h1 {
		font-size: $font-size-h1;
		font-weight: normal;
		margin: 0;
	}

	h2 {
		font-size: $font-size-h2;
		font-weight: normal;
		margin: 0;
	}

	h3 {
		font-size: $font-size-h3;
		font-weight: normal;
		margin: 0;
	}
</style>
