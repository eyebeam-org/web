<script>
	// # # # # # # # # # # # # #
	//
	//  Person link
	//
	// # # # # # # # # # # # # #

	//  __ IMPORTS
	import { createPopper } from '@popperjs/core';
	import { onMount } from 'svelte';
	import { loadData, renderBlockText, urlFor } from '$lib/sanity.js';

	// __ PROPS
	export let person = false;
	export let overrideText = false;
	export let personId = false;

	// __ VARIABLES
	let linkEl = {};
	let popEl = {};

	const initPopper = () => {
		createPopper(linkEl, popEl, {
			placement: 'bottom'
		});
	};

	if (personId) {
		loadData('*[_id == "' + personId + '"][0]').then((p) => {
			console.log(p);
			person = p;
			setTimeout(initPopper, 1000);
		});
	}

	onMount(async () => {
		if (person) {
			initPopper();
		}
	});
</script>

{#if person}
	<a href={'/people/' + person.slug.current} bind:this={linkEl} sveltekit:prefetch>
		{overrideText ? overrideText : person.title}
	</a>

	<div class="pop-up" bind:this={popEl}>
		<!-- NAME -->
		<div class="name">{person.title}</div>
		<!-- IMAGE -->
		{#if person.mainImage}
			<img
				class="image"
				alt={person.title}
				src={urlFor(person.mainImage).quality(90).saturation(-100).width(60).height(60).url()}
			/>
		{/if}
	</div>
{/if}

<style lang="scss">
	@import '../../variables.scss';

	.pop-up {
		display: none;
		background: $white;
		padding: 15px;
		border: $border-style;
		z-index: 1000;

		.name {
			font-weight: bold;
			margin-right: 10px;
		}
	}

	a {
		color: $black;
		background: $grey;
		text-decoration: none;

		&:hover {
			& + .pop-up {
				display: flex;
			}
		}
	}
</style>
