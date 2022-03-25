<script>
	// # # # # # # # # # # # # #
	//
	//  Single Video Page
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let page;

	const toc = [
		{
			link: '#transcript',
			title: 'Transcript'
		},
		{
			link: '#people',
			title: 'People'
		}
	];

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT  -->
<MainContent {page} />
