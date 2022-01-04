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
	import get from 'lodash/get.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let page;
</script>

<!-- METADATA -->
<Metadata post={page} />
<!-- SIDEBAR -->
<Sidebar title={page.title} />
<!-- MAIN CONTENT -->
<MainContent {page} />
