<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/eyebeam-is-changing.json');
		if (res.ok) {
			const eyebeamIsChanging = await res.json();
			return {
				props: { eyebeamIsChanging }
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
	//  Eyebeam is changing
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let eyebeamIsChanging;

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(eyebeamIsChanging.title);
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata post={eyebeamIsChanging} />
<!-- MAIN CONTENT -->
<MainContent page={eyebeamIsChanging} />
