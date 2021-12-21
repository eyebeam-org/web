<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	//  Single program
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
	export let program;

	const toc = parseToc(get(program, 'content.content'));

	// __ Set currentPage
	currentPage.set({ slug: get(program, 'slug.current', ''), title: program.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={program.title} {toc} />
<!-- MAIN CONTENT -->
<MainContent page={program} />
