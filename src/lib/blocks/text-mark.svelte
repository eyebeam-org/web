<script>
	// # # # # # # # # # # # # #
	//
	//  TEXT MARK
	//
	// # # # # # # # # # # # # #
	import get from 'lodash/get.js';
	import { renderNewLines } from '$lib/global.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// *** PROPS
	export let defs = {};
	export let c = {};

	// console.log('c', c);
	// console.log('defs', defs);

	let currentDefinition = c.marks && c.marks[0] ? defs.find((m) => m._key === c.marks[0]) : null;
	// console.log('currentDefinition', currentDefinition);
</script>

{#if !c.marks || c.marks.length === 0}
	<!-- Normal -->
	{@html renderNewLines(c.text)}
{:else if c.marks.includes('em')}
	<!-- Italic -->
	<em>{@html renderNewLines(c.text)}</em>
{:else if c.marks.includes('strong')}
	<!-- Bold -->
	<strong>{@html renderNewLines(c.text)}</strong>
{:else if currentDefinition._type === 'link' && currentDefinition.href}
	{#if currentDefinition.href.includes('https://eyebeam.org')}
		<!-- Internal Link -->
		<a href={currentDefinition.href}>{@html renderNewLines(c.text)}</a>
	{:else}
		<!-- External Link -->
		<a href={currentDefinition.href} target="_blank">
			{@html renderNewLines(c.text)}
			<ExternalLink />
		</a>
	{/if}
{:else if currentDefinition._type === 'person'}
	<!-- Person Link -->
	<PersonLink overrideText={c.text} personId={get(currentDefinition, 'link._ref', false)} />
{/if}
