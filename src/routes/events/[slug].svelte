<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/events/${page.params.slug}.json`);
		if (res.ok) {
			const event = await res.json();
			return {
				props: { event }
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
	//  Single event
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
	export let event;

	let toc = parseToc(get(event, 'content.content'));
	toc.push({ title: 'People', link: '#people' });
</script>

<!-- METADATA -->
<Metadata post={event} />
<!-- SIDEBAR -->
<Sidebar title={event.title} {toc} />
<!-- MAIN CONTENT -->
<MainContent page={event} />
