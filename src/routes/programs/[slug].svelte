<script context="module">
	export const router = false;
	</script>
<script>
	// # # # # # # # # # # # # #
	//
	//  Single Program Page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let page;

	const toc = parseToc(get(page, 'content.content'));

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<MainContent {page} />
