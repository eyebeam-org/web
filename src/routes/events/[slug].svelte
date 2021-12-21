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
	import { onDestroy } from 'svelte';
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';

	// __ PROPS
	export let event;

	let toc = parseToc(get(event, 'content.content'));
	toc.push({ title: 'People', link: '#people' });

	// __ Set currentPage
	currentPage.set({ slug: get(event, 'slug.current', ''), title: event.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={event.title} {toc} />
<!-- MAIN CONTENT -->
<MainContent page={event} />
