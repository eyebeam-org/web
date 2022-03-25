<script>
	// # # # # # # # # # # # # #
	//
	//  Single journal post
	//
	// # # # # # # # # # # # # #
	import { renderBlockText, urlFor } from '$lib/sanity.js';

	// __ COMPONENTS
	import Metadata from '$lib/metadata/metadata.svelte';

	// *** PROPS
	export let post;
</script>

<!-- METADATA -->
<Metadata {post} />

<!-- TITLE -->
<h1>{post.title}</h1>

<!-- MAIN IMAGE -->
<img alt={post.title} src={urlFor(post.mainImage).quality(90).saturation(-100).width(400).url()} />

<!-- MAIN TEXT -->
<div>{@html renderBlockText(post.content.content)}</div>

<!-- PEOPLE -->
<h2>People</h2>
<ul>
	{#each post.people as person}
		<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.title}</a></li>
	{/each}
</ul>

<!-- LAST UPDATED -->
<div>Last Updated: {post._updatedAt}</div>
