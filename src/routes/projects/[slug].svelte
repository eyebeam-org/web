<script context="module">
	export const load = async ({ params, fetch, session, stuff }) => {
		const res = await fetch(`/projects/${params.slug}.json`);
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
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let project;

	let toc = parseToc(get(project, 'content.content'));
	toc.push({ title: 'People', link: '#people' });
</script>

<!-- METADATA -->
<Metadata post={project} />
<!-- SIDEBAR -->
<Sidebar {toc} title={project.title} />
<!-- MAIN CONTENT -->
<MainContent page={project} />
