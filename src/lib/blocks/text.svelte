<script>
	// # # # # # # # # # # # # #
	//
	//  TEXT RENDERER
	//
	// # # # # # # # # # # # # #
	import slugify from 'slugify';

	// __ COMPONENTS
	import TextMark from '$lib/blocks/text-mark.svelte';

	// *** PROPS
	export let b = {};

	let slug = slugify(b.children[0].text, {
		lower: true
	});
</script>

{#if b.children && b.children.length > 0}
	{#if b.style == 'h2'}
		<h2 id={slug}>
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
				<TextMark {c} defs={b.markDefs} />
			{/each}
		</p>
	{/if}
{/if}
