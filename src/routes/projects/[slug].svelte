<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/projects/${page.params.slug}.json`);
		if (res.ok) {
			const project = await res.json();
			return {
				props: { project }
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
	//  Single project
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
	export let project;

	let toc = parseToc(get(project, 'content.content'));
	toc.push({ title: 'People', link: '#people' });

	// __ Set currentPage
	currentPage.set({ slug: get(project, 'slug.current', ''), title: project.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar {toc} title={project.title} />
<!-- MAIN CONTENT -->
<MainContent page={project} />
