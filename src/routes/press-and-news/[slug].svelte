<script>
	// # # # # # # # # # # # # #
	//
	//  Single Press & News Page
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let page;

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<MainContent {page} />
