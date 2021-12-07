<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/blog/${page.params.slug}.json`);
		if (res.ok) {
			const post = await res.json();
			return {
				props: { post }
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
	//  Single blog page
	//
	// # # # # # # # # # # # # #

	import { renderBlockText, urlFor } from '$lib/sanity.js';

	// *** PROPS
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

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
