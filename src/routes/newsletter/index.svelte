<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/newsletter.json');
		if (res.ok) {
			const newsletterPage = await res.json();
			return {
				props: { newsletterPage }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  Newsletter
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let newsletterPage;
	console.log(newsletterPage);

	let emailAddress = '';
	const subscribe = () => {
		console.log(emailAddress);
		window.alert('todo: subscribe');
	};
</script>

<svelte:head>
	<title>{newsletterPage.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<!-- TITLE -->
		<h1>{newsletterPage.title}</h1>

		<!-- MAIN TEXT -->
		{#if has(newsletterPage, 'content.content')}
			<div class="body-content">
				{@html renderBlockText(newsletterPage.content.content)}
			</div>
		{/if}

		<!-- FORM -->
		<form>
			<label for="email">Your email</label>
			<input type="email" class="email" bind:value={emailAddress} />
			<input type="submit" class="subscribe" value="SUBSCRIBE" on:click={subscribe} />
		</form>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={newsletterPage._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			padding: 15px;
			border: $border-style;
			min-height: 100vh;
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}

	.body-content {
		margin-bottom: 40px;
	}

	form {
		width: 100%;

		label {
			width: 100%;
			margin-bottom: 10px;
			display: block;
		}

		input {
			margin-bottom: 20px;
			width: 100%;
			height: 60px;
			font-family: inherit;

			&.email {
				border: $border-style;
				border-radius: 0;
			}

			&.subscribe {
				border: 0;
				background: $black;
				color: $white;
				cursor: pointer;
			}
		}
	}
</style>
