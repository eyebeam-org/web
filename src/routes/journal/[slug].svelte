<script>
	// # # # # # # # # # # # # #
	//
	//  Single journal page
	//
	// # # # # # # # # # # # # #
	import { renderBlockText, urlFor } from '$lib/sanity.js';

	// __ COMPONENTS
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let page;
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- TITLE -->
<h1>{page.title}</h1>

<!-- MAIN IMAGE -->
<img alt={page.title} src={urlFor(page.mainImage).quality(90).saturation(-100).width(400).url()} />

<!-- MAIN TEXT -->
<div>{@html renderBlockText(page.content.content)}</div>

<!-- PEOPLE -->
<h2>People</h2>
<ul>
	{#each page.people as person}
		<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.title}</a></li>
	{/each}
</ul>

<!-- LAST UPDATED -->
<div>Last Updated: {page._updatedAt}</div>
