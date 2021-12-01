<script>
	// # # # # # # # # # # # # #
	//
	//  TEXT RENDERER
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';

	// *** PROPS
	export let b = {};
	console.log('text b', b);
</script>

{#if b.style == 'h2'}
	<h2>
		{#each b.children as c}
			{#if !c.marks || c.marks.length === 0}
				{c.text}
			{:else}
				<strong>{c.text}</strong>
			{/if}
		{/each}
	</h2>
{:else if b.style == 'h3'}
	<h3>
		{#each b.children as c}
			{c.text}
		{/each}
	</h3>
{:else}
	<p>
		{#each b.children as c}
			{#if !c.marks || c.marks.length === 0}
				{@html c.text}
			{:else if c.marks.includes('em')}
				<em>{@html c.text}</em>
			{:else if c.marks.includes('strong')}
				<strong>{@html c.text}</strong>
			{:else}
				{#if b.markDefs.find((m) => m._key === c.marks[0])._type === 'link'}
					<a href={b.markDefs.find((m) => m._key === c.marks[0]).href}>{@html c.text}</a>
				{/if}
				{#if b.markDefs.find((m) => m._key === c.marks[0])._type === 'person'}
					<PersonLink
						overrideText={c.text}
						personId={b.markDefs.find((m) => m._key === c.marks[0]).link._ref}
					/>
				{/if}
			{/if}
		{/each}
	</p>
{/if}
