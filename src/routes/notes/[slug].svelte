<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/notes/${page.params.slug}.json`);
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
	import { onDestroy } from 'svelte';
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';

	// __ PROPS
	export let note;
	let toc = parseToc(get(note, 'content.content'));

	// __ Set currentPage
	currentPage.set({ slug: get(note, 'slug.current', ''), title: note.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{note.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={note.title} {toc} />
<!-- MAIN CONTENT -->
<MainContent page={note} />
