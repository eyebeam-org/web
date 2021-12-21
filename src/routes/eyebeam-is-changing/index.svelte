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
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import MainContent from '$lib/main-content/main-content.svelte';

	// __ PROPS
	export let eyebeamIsChanging;
</script>

<svelte:head>
	<title>{eyebeamIsChanging.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={eyebeamIsChanging.title} />
<!-- MAIN CONTENT -->
<MainContent page={eyebeamIsChanging} />
