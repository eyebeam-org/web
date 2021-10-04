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
	<title>PERSON</title>
</svelte:head>

<h1>PERSON: {person.name}</h1>
<img
	alt={person.name}
	src={urlFor(person.mainImage)
	.quality(90)
	.width(200)
	.url()}/>
<div>{@html renderBlockText(person.bio.content)}</div>