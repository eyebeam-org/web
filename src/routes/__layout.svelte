<script>
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';

	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<!-- <Footer /> -->

<style lang="scss" global>
	@import "../variables.scss";

    body, html {
        background: $white;
		color: $black;
		font-family: $SERIF_STACK;
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
</style>
