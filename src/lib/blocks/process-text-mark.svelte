<script>
	// # # # # # # # # # # # # #
	//
	//  TEXT MARK
	//
	// # # # # # # # # # # # # #

	import get from 'lodash/get.js';
	import { renderNewLines } from '$lib/global.js';


	// *** PROPS
	export let defs = {};
	export let c = {};

	let currentDefinition = c.marks && c.marks[0] ? defs.find((m) => m._key === c.marks[0]) : null;
	$: c, console.log('c: ', c)
	console.log('defs:', defs)
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
{:else }
	{@html renderNewLines(c.text)}
{/if}
