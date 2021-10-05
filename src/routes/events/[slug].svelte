<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/events/${page.params.slug}.json`);
		if (res.ok) {
			const event = await res.json();
			return {
				props: { event }
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
	export let event;

    console.log(event)
</script>


<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<!-- TITLE -->
<h1>{event.title}</h1>

<!-- MAIN IMAGE -->
<img
	alt={event.title}
	src={urlFor(event.mainImage)
	.quality(90)
	.width(200)
	.url()}/>

<!-- LOCATION -->
{#if event.location && event.location.content}
    <div class='location'>Location: {@html renderBlockText(event.location.content)}</div>
{/if}

<!-- MAIN TEXT -->
<div>{@html renderBlockText(event.content.content)}</div>

<!-- PEOPLE -->
<h2>People</h2>
<ul>
	{#each event.people as person}
		<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
	{/each}
</ul>