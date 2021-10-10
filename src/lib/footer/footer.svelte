<script>
    // # # # # # # # # # # # # #
	//
	// Footer
	//
	// # # # # # # # # # # # # #

	// __ GRAPHICS
    import Newsletter from '$lib/graphics/newsletter.svelte';
    import Twitter from '$lib/graphics/twitter.svelte';
    import Instagram from '$lib/graphics/instagram.svelte';
    import Youtube from '$lib/graphics/youtube.svelte';

</script>

<footer>
    <div>Eyebeam centers artists in the invention and design of our shared future.</div>
	<div>185 Wythe Ave, Office F1, Brooklyn, NY 11249-3120       +1 347.378.9163       info@eyebeam.org 	<div class='social'>
		<div class='social-link'><Newsletter/></div>
		<div class='social-link'><Instagram/></div>
		<div class='social-link'><Twitter/></div>
		<div class='social-link'><Youtube/></div>
	</div></div>


</footer>

<style lang="scss">
	@import "../../variables.scss";

    footer {
        margin-left: 60px;
		margin-right: 60px;
		margin-top: 40px;
		margin-bottom: 40px;
		float: left;
		width: 100%;

		.social-link {
			float: left;
			margin-right: 5px;
		}
    }
</style>
