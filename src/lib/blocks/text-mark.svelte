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


	import ProcessTextMark from '$lib/blocks/process-text-mark.svelte';

	// *** PROPS
	export let defs = {};
	export let c = {};

	let currentDefinition = c.marks && c.marks[0] ? defs.find((m) => c.marks.includes(m._key )) : null;
	console.log('current definition: ', currentDefinition)
</script>
{#if !currentDefinition}
<ProcessTextMark {c} defs={defs} />
{:else if currentDefinition._type === 'link' && currentDefinition.href}
	{#if currentDefinition.href.includes('https://eyebeam.org')}
		<!-- Internal Link -->
			<a href={currentDefinition.href}><ProcessTextMark {c} defs={defs} /></a>
		{:else}
		<!-- External Link -->
		<a href={currentDefinition.href} target="_blank">
			<ProcessTextMark {c} defs={defs} />			<ExternalLink />
		</a>
	{/if}
{:else if currentDefinition._type === 'person'}
	<!-- Person Link -->
	<PersonLink overrideText={c.text} personId={get(currentDefinition, 'link._ref', false)} />
{/if}
