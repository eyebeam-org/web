<script>
	// # # # # # # # # # # # # #
	//
	// Phone Footer
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { loadData } from '$lib/sanity.js';
	import Logo from '$lib/graphics/logo.svelte';

	// __ CONSTANTS
	import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '$lib/global.js';

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
		<div class="line tagline">{contact.tagline}<span class="black-box" /></div>
	</footer>
{/await}

<style lang="scss">
	@import '../../../variables.scss';

	footer {
		margin-top: $LARGE;
		margin-bottom: $LARGE;
		width: 100%;
		margin-right: $NORMAL;
		margin-left: $NORMAL;
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

		.black-box {
			height: 20px;
			width: 20px;
			background: black;
			display: inline-block;
		}

		display: none;
		@include screen-size('small') {
			display: block;
		}
	}
</style>
