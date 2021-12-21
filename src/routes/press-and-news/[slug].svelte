<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/press-and-news/${page.params.slug}.json`);
		if (res.ok) {
			const page = await res.json();
			return {
				props: { page }
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
	//  Single Press & News page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import get from 'lodash/get.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';

	// *** PROPS
	export let page;

	// __ Set currentPage
	currentPage.set({ slug: get(page, 'slug.current', ''), title: page.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={page.title} />
<!-- MAIN CONTENT -->
<MainContent {page} />
