<script>
	// # # # # # # # # # # # # #
	//
	//  Person Link
	//
	// # # # # # # # # # # # # #

	//  __ IMPORTS
	import { createPopper } from '@popperjs/core';
	import { onMount } from 'svelte';
	import { loadData, urlFor } from '$lib/sanity.js';
	import { roleToRoleName, renderNewLines } from '$lib/global.js';
	import get from 'lodash/get.js';

	// __ PROPS
	export let person = false;
	export let overrideText = false;
	export let personId = false;

	// __ VARIABLES
	let linkEl = {};
	let popEl = {};
	let popper = {};
	let isDesktop = {};

	const initPopper = () => {
		popper = createPopper(linkEl, popEl, {
			placement: 'bottom-start',
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [10, 5]
					}
				},
				{ name: 'eventListeners', enabled: false }
			]
		});
	};

	const show = () => {
		if (isDesktop.matches) {
			popEl.classList.add('show');
			popEl.setAttribute('aria-expanded', true)
			// Enable the event listeners
			popper.setOptions((options) => ({
				...options,
				modifiers: [...options.modifiers, { name: 'eventListeners', enabled: true }]
			}));
			// We need to tell Popper to update the tooltip position
			// after we show the tooltip, otherwise it will be incorrect
			popper.update();
		}
	};

	const hide = () => {
		if (isDesktop.matches) {
			console.log('hide');
			popEl.setAttribute('aria-expanded', false)
			popEl.classList.remove('show');
			// Disable the event listeners
			popper.setOptions((options) => ({
				...options,
				modifiers: [...options.modifiers, { name: 'eventListeners', enabled: false }]
			}));
		}
	};

	if (personId) {
		loadData('*[_id == "' + personId + '"][0]').then((p) => {
			person = p;
			setTimeout(initPopper, 1000);
		});
	}

	onMount(async () => {
		isDesktop = window.matchMedia('(min-width: 700px)');
		if (person && isDesktop.matches) {
			initPopper();
		}
	});
</script>

{#if person}
	<a
		href={'/people/' + get(person, 'slug.current')}
		bind:this={linkEl}
		sveltekit:prefetch
		on:mouseenter={show}
		on:mouseleave={hide}
		class="person-link"
	>
		{#if person.title.length < 20}
		{@html overrideText ? renderNewLines(overrideText) : person.title}
		{:else}
		{@html overrideText ? renderNewLines(overrideText) : person.title.slice(0, 20) + '...'}
		{/if}
	</a>

	<div class="pop-up" bind:this={popEl} aria-expanded=false>
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
		background: var(--background-color);
		padding: $NORMAL;
		border: 1px solid var(--foreground-color);
		z-index: 1000;
		color: var(--foreground-color);
		position: relative;
		display: none;
		max-width: 360px;

		.show {
			display: block;
		}

		.name {
			font-weight: bold;
			margin-right: $SMALL;
		}
	}

	:global(.pop-up.show) {
		display: flex !important;
	}

	a {
		color: var(--special-text-color);
		background: $grey;
		text-decoration: none;
		margin-bottom: $TINY;
		display: inline-block;
	}
	.person-link {
		font-size: $font-size-small;
		font-weight: 200;
		@include screen-size('medium') {
			font-size: $font-size-extra-small;
		}
	}

	.column {
		&.first {
			padding-right: $NORMAL;
		}
	}
</style>
