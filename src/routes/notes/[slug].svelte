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
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let note;
	let toc = parseToc(get(note, 'content.content'));
</script>

<!-- METADATA -->
<Metadata post={note} />
<!-- SIDEBAR -->
<Sidebar title={note.title} {toc} />
<!-- MAIN CONTENT -->
<MainContent page={note} />
