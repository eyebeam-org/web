<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	export let program;
    
    console.log(program)
</script>


<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- TITLE -->
<h1>{program.title}</h1>

<!-- MAIN IMAGE -->
<img
	alt={program.title}
	src={urlFor(program.mainImage)
	.quality(90)
	.saturation(-100)
	.width(400)
	.url()}/>

<!-- MAIN TEXT -->
{#if program.content && program.content.content && Array.isArray(program.content.content)}
	<div>{@html renderBlockText(program.content.content)}</div>
{/if}


<!-- PEOPLE -->
{#if program.people && Array.isArray(program.people)}
	<h2>People</h2>
	<ul>
		{#each program.people as person}
			<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
		{/each}
	</ul>
{/if}

<!-- LAST UPDATED -->
<div>Last Updated: {program._updatedAt}</div>