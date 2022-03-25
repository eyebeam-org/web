<script context="module">
	export const load = async ({ params, fetch, session, stuff }) => {
		const res = await fetch(`/notes/${params.slug}.json`);
		if (res.ok) {
			const note = await res.json();
			return {
				props: { note }
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
	//  Single note
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let note;
	let toc = parseToc(get(note, 'content.content'));

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(note.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata post={note} />
<!-- MAIN CONTENT -->
<MainContent page={note} />
