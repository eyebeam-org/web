<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/notes/${page.params.slug}.json`);
		if (res.ok) {
			const note = await res.json();
			return {
				props: { note }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	import { renderBlockText, urlFor } from "$lib/sanity.js"

    // *** PROPS
	export let note;
    
    console.log(note)
</script>


<svelte:head>
	<title>{note.title}</title>
</svelte:head>

<!-- TITLE -->
<h1>{note.title}</h1>

<!-- MAIN IMAGE -->
<img
	alt={note.title}
	src={urlFor(note.mainImage)
	.quality(90)
	.width(200)
	.url()}/>

<!-- MAIN TEXT -->
<div>{@html renderBlockText(note.content.content)}</div>

<!-- PEOPLE -->
<h2>People</h2>
<ul>
	{#each note.people as person}
		<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
	{/each}
</ul>