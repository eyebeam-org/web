<script>
	// # # # # # # # # # # # # #
	//
	//  Newsletter
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let page;

	let emailAddress = '';
	const subscribe = () => {
		console.log(emailAddress);
	};

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('');
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<!-- TITLE -->
		<h1>{page.title}</h1>

		<!-- MAIN TEXT -->
		{#if has(page, 'content.content')}
			<div class="body-content">
				<Blocks blocks={page.content.content} />
			</div>
		{/if}

		<!-- <form
			action="https://eyebeam.us4.list-manage.com/subscribe?u=c72c271895f3f76b36105229c"
			method="get"
			id="subscribe"
			class=""
		>
			<p>Enter your e-mail to stay up to date on all of our programs</p>
			<div class="response-loading">Please wait...</div>
			<div class="response-success">Thanks for subscribing!</div>
			<div class="response-error">That didn’t work for some reason.</div>
			<input type="hidden" name="u" value="c72c271895f3f76b36105229c" />
			<input type="hidden" name="id" value="bb4e74c232" />
			<label for="MERGE1"><input type="text" name="MERGE1" placeholder="First Name" /></label>
			<label for="MERGE2"><input type="text" name="MERGE2" placeholder="Last Name" /></label>
			<label for="MERGE0"><input type="email" name="MERGE0" placeholder="Email" /></label>
			<input type="submit" value="Subscribe" />
		</form> -->

		<!-- FORM -->
		<form
			action="https://eyebeam.us4.list-manage.com/subscribe?u=c72c271895f3f76b36105229c"
			method="get"
			id="subscribe"
			class=""
		>
			<input type="hidden" name="u" value="c72c271895f3f76b36105229c" />
			<input type="hidden" name="id" value="bb4e74c232" />
			<label for="email">Your email</label>
			<input type="email" name="MERGE0" class="email" bind:value={emailAddress} />
			<input type="submit" class="subscribe" value="SUBSCRIBE" on:click={subscribe} />
		</form>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={page._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			padding: $SMALL;
			border: 1px solid var(--foreground-color);
			min-height: $SIDEBAR_HEIGHT;
			padding-top: 0;

			h1 {
				margin-bottom: $HUGE;
			}

			@include screen-size('small') {
				border: unset;
				padding: 0;

				h1 {
					margin-bottom: $LARGE;
				}
			}
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}

	.body-content {
		margin-bottom: $EXTRA_LARGE;

		@include screen-size('small') {
			margin-bottom: $LARGE;
		}
	}

	form {
		width: 100%;

		@include screen-size('small') {
			width: 100%;
			margin-right: 0;
			margin-left: 0;
		}

		label {
			width: 100%;
			margin-bottom: $SMALL;
			display: block;
			font-size: $font-size-extra-small;
		}

		input {
			margin-bottom: $NORMAL;
			width: 100%;
			height: 70px;
			font-family: inherit;

			&.email {
				border: 1px solid var(--foreground-color);
				border-radius: 0;
				background: $white;
				padding-left: $NORMAL;
			}

			&.subscribe {
				border: 0;
				background: var(--foreground-color);
				color: var(--background-color);
				cursor: pointer;
				font-size: $font-size-extra-small;
				letter-spacing: 1px;
			}
		}
	}
</style>
