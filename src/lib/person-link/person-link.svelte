<script>
	// # # # # # # # # # # # # #
	//
	//  Person link
	//
	// # # # # # # # # # # # # #

	//  __ IMPORTS
	import { createPopper } from '@popperjs/core';
	import { onMount } from 'svelte';
	import { loadData, urlFor } from '$lib/sanity.js';
	import { roleToRoleName } from '$lib/global.js';
	import get from 'lodash/get.js';

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

	const renderNewLines = (t) => t.replace(/(?:\r\n|\r|\n)/g, '<br>');

	if (personId) {
		loadData('*[_id == "' + personId + '"][0]').then((p) => {
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
	<a href={'/people/' + get(person, 'slug.current')} bind:this={linkEl} sveltekit:prefetch>
		{@html overrideText ? renderNewLines(overrideText) : person.title}
	</a>

	<div class="pop-up" bind:this={popEl}>
		<!-- FIRST COLUMN -->
		<div class="column first">
			<!-- NAME -->
			<div class="name">{person.title}</div>

			<!-- BADGES -->
			<div class="badges">
				{#if person.role}
					<div class="badge">{roleToRoleName[person.role]}</div>
				{/if}
				{#if person.groupTags}
					{#each person.groupTags as tag}
						<div class="badge">{tag.label}</div>
					{/each}
				{/if}
			</div>
		</div>
		<!-- SECOND COLUMN -->
		<div class="column second">
			<!-- IMAGE -->
			{#if person.mainImage}
				<img
					class="image"
					alt={person.title}
					src={urlFor(person.mainImage).quality(90).saturation(-100).width(100).height(100).url()}
				/>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../variables.scss';

	.pop-up {
		display: none;
		background: $white;
		padding: $small-margin;
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

	.column {
		&.first {
			padding-right: 10px;
		}
	}
</style>
