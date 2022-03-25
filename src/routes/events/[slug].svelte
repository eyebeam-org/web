<script>
	// # # # # # # # # # # # # #
	//
	//  Single event
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let event;

	let toc = parseToc(get(event, 'content.content'));
	toc.push({ title: 'People', link: '#people' });

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(event.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={event} />
<!-- MAIN CONTENT -->
<MainContent page={event} />
