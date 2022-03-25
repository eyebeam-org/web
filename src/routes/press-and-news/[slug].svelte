<script>
	// # # # # # # # # # # # # #
	//
	//  Single Press & News post
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let post;

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(post.title);
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata {post} />
<!-- MAIN CONTENT -->
<MainContent page={post} />
