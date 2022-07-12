<script context="module">
	export const prerender = false;
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  Single Person Page
	//
	// # # # # # # # # # # # # #

	export const prerender = false;
	// __ IMPORTS
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Metadata from '$lib/metadata/metadata.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';

	// __ PROPS
	export let page;

	let toc = [];

	if (page.website) {
		toc.push({
			title: 'Website',
			link: '#website'
		});
	}

	if (has(page, 'bio.content')) {
		toc.push({
			title: 'Bio',
			link: '#bio'
		});
	}

	if (page.connectedPosts.length > 0) {
		toc.push({
			title: 'At Eyebeam',
			link: '#at-eyebeam'
		});
	}

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<MainContent {page} />
