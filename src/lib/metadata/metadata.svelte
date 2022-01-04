<script>
	// # # # # # # # # # # # # #
	//
	//  Metadata
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import truncate from 'lodash/truncate.js';
	import { toPlainText, urlFor } from '$lib/sanity';

	// __ STORES
	import { currentPage } from '$lib/stores.js';
	import { page } from '$app/stores';

	// *** PROPS
	export let post = {};
	export let isSingle = false;

	const BASE_URL = 'https://eyebeam.org';
	const DEFAULT_DESCRIPTION = 'Eyebeam is lorem ipsum...';
	const DEFAULT_IMAGE = 'https://eyebeam.netlify.com/img/eyebeam-logo.png';

	const title = post.title ? post.title : 'eyebeam.org';

	let description = '';
	if (has(post, 'content.content')) {
		description = truncate(toPlainText(post.content.content), { length: 160 });
	} else if (has(post, 'introduction.content')) {
		description = truncate(toPlainText(post.introduction.content), { length: 160 });
	} else {
		description = DEFAULT_DESCRIPTION;
	}

	const url = BASE_URL + $page.path;

	const image = has(post, 'mainImage.asset') ? urlFor(post.mainImage) : DEFAULT_IMAGE;

	if (isSingle) {
		currentPage.set({ slug: get(post, 'slug.current', ''), title: post.title });
	}
	onDestroy(() => {
		if (isSingle) {
			currentPage.set(null);
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="image" content={image} />
	<meta property="og:image" content={image} />
	<meta property="twitter:image" content={image} />
	<meta property="og:site_name" content="Platform Labor" />
</svelte:head>
