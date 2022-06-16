<script>
	// # # # # # # # # # # # # #
	//
	//  Person Link List
	//
	// # # # # # # # # # # # # #

	// *** COMPONENTS
	import PersonLink from '$lib/person-link/person-link.svelte';

	// *** PROPS
	export let people = [];
	export let tiny = false;
</script>

{#each people as person, index}
	<PersonLink {person} tiny={tiny} />{#if index == people.length - 2}&{/if}
{/each}

<style lang="scss">
	@import '../../variables.scss';
</style>
