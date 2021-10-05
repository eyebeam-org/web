<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/people/${page.params.slug}.json`);
		if (res.ok) {
			const person = await res.json();
			return {
				props: { person }
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

	export let person;
    console.log(person)
</script>


<svelte:head>
	<title>{person.name}</title>
</svelte:head>

<!-- NAME -->
<h1>{person.name}</h1>

<!-- MAIN IMAGE -->
<img
	alt={person.name}
	src={urlFor(person.mainImage)
	.quality(90)
	.saturation(-100)
	.width(400)
	.url()}/>

<!-- BIO -->
<div>{@html renderBlockText(person.bio.content)}</div>

<!-- LAST UPDATED -->
<div>Last Updated: {person._updatedAt}</div>