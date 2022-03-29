<script>
	// # # # # # # # # # # # # #
	//
	//  Person List
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';

	// __ COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';

	// *** PROPS
	export let b = {};
</script>

<div class="person-list">
	<p>
		{#each b.persons as person}
			<div>
				<PersonLink personId={get(person, 'personLink._ref', false)} />{#if person.role}– {person.role}{/if}
			</div>
		{/each}
	</p>
</div>
