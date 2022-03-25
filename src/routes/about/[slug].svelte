<script context="module">
	export const load = async ({ params, fetch, session, stuff }) => {
		const res = await fetch(`/about/${params.slug}.json`);
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
	//  Single about page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let page;

	const toc = parseToc(get(page, 'content.content'));

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={page} />
<!-- MAIN CONTENT -->
<MainContent {page} />
