<script>
	import Header from '$lib/header/header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import "../variables.scss";

    body {
        background: $white;
		color: $black;
		font-family: $SERIF_STACK;
    }

	a {
		color: $black;
	}
</style>
