<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/support.json');
		if (res.ok) {
			const supportPage = await res.json();
			return {
				props: { supportPage }
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
	//  Support
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let supportPage;
</script>

<svelte:head>
	<title>{supportPage.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={supportPage.title} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<!-- TITLE -->
		<h1>{supportPage.title}</h1>

		<!-- MAIN TEXT -->
		{#if has(supportPage, 'content.content')}
			<div class="body-content">
				{@html renderBlockText(supportPage.content.content)}
			</div>
		{/if}

		<!-- SEE ALSO -->
		{#if supportPage.internalLinks || supportPage.externalLinks}
			<SeeAlso
				externalLinks={supportPage.externalLinks}
				internalLinks={supportPage.internalLinks}
			/>
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={supportPage._updatedAt} />
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
</style>
