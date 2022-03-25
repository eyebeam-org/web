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
	import MainContent from '$lib/main-content/main-content.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let post;
	let toc = parseToc(get(post, 'content.content'));

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(post.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {post} />
<!-- MAIN CONTENT -->
<MainContent page={post} />
