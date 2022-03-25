<script>
	// # # # # # # # # # # # # #
	//
	//  Single program
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let program;

	const toc = parseToc(get(program, 'content.content'));

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(program.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={program} />

<!-- MAIN CONTENT -->
<MainContent page={program} />
