<script>
	// # # # # # # # # # # # # #
	//
	// Footer
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
	import SearchIcon from '$lib/graphics/search.svelte';

	// __ CONSTANTS
	import { INSTAGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '$lib/global.js';

	// __ COMPONENTS
	import Search from '$lib/search/search.svelte';

	// __ VARIABLES
	const contact = loadData("*[_id == 'contact'][0]");
	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};

</script>

{#await contact then contact}
	<footer>

		<!-- LOGO -->

		<div class="line logo">
			<div class="beams">
				<BigBeam />
			</div>
			<div class="wordmark">
				<Logo />
			</div>
		</div>
		<!-- TAGLINE -->
		<div class="line tagline">{contact.tagline}</div>
		<!-- SEARCH -->
<div class="tile search" on:click={toggleSearch}><div class="icon"><SearchIcon /></div> <span class="search-text">Search this website</span></div>

		<!-- PHONE -->
		<div class="line phone-number">
			<a href={'tel:' + contact.phoneNumber} target="_blank">{contact.phoneNumber}</a>
		</div>
		<!-- EMAIL -->
		<div class="line email">
			<a href={'mailto:' + contact.email} target="_blank">{contact.email}</a>
		</div>
		<!-- ADDRESS -->
		<div class="line address">{contact.address}</div>
		<!-- SOCIAL -->
		<div class="line social">
			<span class="social-link"><Newsletter /></span>
			<a href={INSTAGRAM_URL} target="_blank" class="social-link"><Instagram /></a>
			<a href={TWITTER_URL} target="_blank" class="social-link"><Twitter /></a>
			<a href={YOUTUBE_URL} target="_blank" class="social-link"><Youtube /></a>
		</div>
	</footer>
{/await}
{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}

<style lang="scss">
	@import '../../variables.scss';

	.search {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		height: 50px;
		width: 50%;
		margin: 0 auto $LARGE;
		border: 1px solid var(--foreground-color);
		padding: $SMALL;
		overflow: hidden;
		user-select: none;

		@include screen-size('small') {
			font-size: $font-size-body;
		}

		.search-text {
			margin-left: $TINY;
		}
	
		&:hover {
			background: $grey;
			cursor: pointer;
			color: var(--hover-text-color);
		}

		&:active {
			background: var(--foreground-color);
		}

		@include screen-size('small') {
			// border-right: unset;
			// border-bottom: 1px solid var(--foreground-color);
			display: none;
		}
	}

	footer {
		margin-top: $NORMAL;
		margin-bottom: $LARGE;
		float: left;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		@include screen-size('small') {
			display: none;
		}

		.line {
			margin-bottom: $TINY;

			a {
				text-decoration: none;
			}

			.beams {
				margin-bottom: $TINY;
				width: 340px;
			}

			.wordmark {
				margin-bottom: $TINY;
				width: 340px;

				svg {
					width: 100%;
				}
			}

			&.tagline {
				margin-bottom: $NORMAL;
			}

			&.address {
				margin-bottom: $TINY;
			}
		}

		.social-link {
			float: left;
			margin-right: 10px !important;
		}
	}
</style>
