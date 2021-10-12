<script>
    // # # # # # # # # # # # # #
	//
	// Footer
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { loadData } from "$lib/sanity.js"

	// __ GRAPHICS
    import Newsletter from '$lib/graphics/newsletter.svelte';
    import Twitter from '$lib/graphics/twitter.svelte';
    import Instagram from '$lib/graphics/instagram.svelte';
    import Youtube from '$lib/graphics/youtube.svelte';

	// __ CONSTANTS
	const INSTAGRAM_URL = 'https://www.instagram.com/eyebeamnyc/'
    const TWITTER_URL = 'https://twitter.com/eyebeamnyc'
    const YOUTUBE_URL = 'https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg'

	// __ VARIABLES
	const contact = loadData("*[_id == 'contact'][0]")

</script>

{#await contact then contact}
	<footer>
		<div class='line first'>Eyebeam centers artists in the invention and design of our shared future.</div>
		<div class='line second'>
			<!-- ADDRESS -->
			<span class='address'>{contact.address}</span>
			<!-- PHONE -->
			<span class='phone-number'>
				<a href={'tel:' + contact.phoneNumber} target=_blank>{contact.phoneNumber}</a>
			</span>
			<!-- EMAIL -->
			<span class='email'>
				<a href={'mailto:' + contact.email} target=_blank>{contact.email}</a>
			</span> 
			<!-- SOCIAL -->
			<span class='social'>
				<span class='social-link'><Newsletter/></span>
				<a href={INSTAGRAM_URL} target=_blank class='social-link'><Instagram/></a>
				<a href={TWITTER_URL} target=_blank class='social-link'><Twitter/></a>
				<a href={YOUTUBE_URL} target=_blank class='social-link'><Youtube/></a>
			</span>
		</div>
	</footer>
{/await}

<style lang="scss">
	@import "../../variables.scss";

    footer {
        margin-left: 60px;
		margin-right: 60px;
		margin-top: 50px;
		margin-bottom: 40px;
		float: left;
		width: 100%;

		.line {
			&.first {
				margin-bottom: 10px;
			}

			&.second {
				span {
					float: left;
					margin-right: 20px;
					
					&.social {
						margin-right: 0;
						position: relative;
						top: 3px;
					}
				}

			}
		}

		.social-link {
			float: left;
			margin-right: 10px !important;
		}
    }
</style>
