<script>
	// # # # # # # # # # # # # #
	//
	// Phone Footer
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { loadData } from '$lib/sanity.js';

	// __ GRAPHICS
	import Newsletter from '$lib/graphics/newsletter.svelte';
	import Twitter from '$lib/graphics/twitter.svelte';
	import Instagram from '$lib/graphics/instagram.svelte';
	import Youtube from '$lib/graphics/youtube.svelte';
	import BigBeam from '$lib/graphics/big-beam.svelte';
	import Logo from '$lib/graphics/logo.svelte';

	// __ CONSTANTS
	const INSTAGRAM_URL = 'https://www.instagram.com/eyebeamnyc/';
	const TWITTER_URL = 'https://twitter.com/eyebeamnyc';
	const YOUTUBE_URL = 'https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg';

	// __ VARIABLES
	const contact = loadData("*[_id == 'contact'][0]");
</script>

{#await contact then contact}
	<footer>
		<!-- LOGO -->
		<div class="wordmark">
			<Logo />
		</div>
		<!-- TAGLINE -->
		<div class="line tagline">{contact.tagline}</div>
	</footer>
{/await}

<style lang="scss">
	@import '../../../variables.scss';

	footer {
		margin-top: 120px;
		margin-bottom: 40px;
		width: 100%;
		margin-right: $small-margin;
		margin-left: $small-margin;
		overflow: hidden;
		width: calc(100vw - 40px);

		.wordmark {
			width: 180px;
		}

		.tagline {
			font-size: $font-size-h2;
			font-style: italic;
			line-height: 1.1em;
			width: 100%;
		}

		display: none;
		@include screen-size('small') {
			display: block;
		}
	}
</style>
