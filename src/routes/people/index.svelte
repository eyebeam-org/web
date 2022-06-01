<script>
	// # # # # # # # # # # # # #
	//
	//  People
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import groupBy from 'lodash/groupBy.js';
	import { getCurrentYear } from '$lib/global.js';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ GRAPHICS
	import ArrowDown from '$lib/graphics/arrow-down.svelte';

	// __ STORES
	import { page as pageStore } from '$app/stores';

	// __ PROPS
	export let people;

	// __ VARIABLES
	const START_YEAR = 1997;
	const CURRENT_YEAR = getCurrentYear();
	const ALPHABET = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];
	const FILTERS = [
		{
			label: 'Everyone',
			value: 'everyone'
		},
		{
			label: 'Artists',
			value: 'artist'
		},
		{
			label: 'Staff',
			value: 'staff'
		},
		{
			label: 'Board',
			value: 'board'
		},
		{
			label: 'Advisory Committee',
			value: 'advisoryCommittee'
		}
	];

	const scrollToSection = (alpha) => {
		const el = document.querySelector('#' + alpha);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			history.replaceState(null, null, '#' + alpha);
		}
	};

	// Construct year list
	let YEAR_LIST = [];
	for (let i = START_YEAR; i <= CURRENT_YEAR; i++) {
		YEAR_LIST.push(i);
	}

	let filteredPeople = [];
	let groupedPeopleAlpha = {};
	let groupedPeopleChrono = {};

	let activeFilter = $pageStore.url.searchParams.get('filter')
		? $pageStore.url.searchParams.get('filter')
		: 'everyone';
	let order = 'alphabetical';

	$: {
		if (activeFilter === 'everyone') {
			filteredPeople = people;
			history.replaceState({}, '', '/people');
		} else {
			filteredPeople = people.filter((p) => p.role === activeFilter);
			const url = new URL(window.location);
			url.searchParams.set('filter', activeFilter);
			history.replaceState({}, '', url);
		}
	}

	$: {
		groupedPeopleAlpha = groupBy(filteredPeople, (p) => p.lastName.charAt(0));
		groupedPeopleChrono = groupBy(filteredPeople, (p) => p.firstEngagement);
	}

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('');
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata page={{ title: 'People' }} />
<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		{#if order == 'alphabetical'}
			<!-- ALPHABETICAL NAVIGATION -->
			<div class="alphabetical-navigation">
				{#each ALPHABET as alpha}
					<button
						class="item"
						on:click={() => {
							scrollToSection(alpha);
						}}
						aria-label={"Jump to the letter:" + alpha }
					>
						{alpha}
					</button>
				{/each}
			</div>
		{/if}
		{#if order == 'chronological'}
			<!-- CHRONOLOGICAL NAVIGATION -->
			<div class="alphabetical-navigation">
				{#each YEAR_LIST as year}
					<div
						class="item"
						on:click={() => {
							scrollToSection('year' + year);
						}}
					>
						{year}
					</div>
				{/each}
			</div>
		{/if}

		<!-- HEADER -->
		<header class="header">
			<h1>People</h1>
			<!-- ORDER -->
			<nav class="order">
				<div class="order-header">Order by</div>
				<div class="order-options">
					<div
						class="order-option alphabetical"
						class:active={order === 'alphabetical'}
						on:click={() => {
							order = 'alphabetical';
						}}
					>
						A-Z <span class="icon"><ArrowDown /></span>
					</div>
					<div
						class="order-option chronological"
						class:active={order === 'chronological'}
						on:click={() => {
							order = 'chronological';
						}}
					>
						Year <span class="icon"><ArrowDown /></span>
					</div>
				</div>
			</nav>
			<!-- FILTER -->
			<div class="filter" >
				<div class="filter-header">Show</div>
				<div class="filter-options" >
					{#each FILTERS as option}
						<button
							class="filter-option"
							class:active={activeFilter === option.value}
							on:click={() => {
								activeFilter = option.value;
							}}
							aria-label={"Filter by: " + option.value}
aria-selected={activeFilter == option.value ? "true" : "false"}
role="option"
						>
							{option.label}
						</button>
					{/each}
				</div>
			</div>
		</header>

		<!-- LIST -->
		{#if order == 'alphabetical'}
			{#each ALPHABET as alpha}
				<section class="sub-section" id={alpha}>
					<h2 class="supersized">{alpha}</h2>
					{#if groupedPeopleAlpha[alpha]}
						<ul>
							{#each groupedPeopleAlpha[alpha] as person}
								<li><PersonLink {person} /></li>
							{/each}
						</ul>
					{/if}
				</section>
			{/each}
		{/if}
		{#if order == 'chronological'}
			{#each YEAR_LIST as year}
				<section class="sub-section" id={'year' + year}>
					<h2 class="supersized">{year}</h2>
					{#if groupedPeopleChrono[year]}
						<ul>
							{#each groupedPeopleChrono[year] as person}
								<li><PersonLink {person} /></li>
							{/each}
						</ul>
					{/if}
				</section>
			{/each}
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';
	button {
		background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	}

	.main-content {
		float: left;
		width: 100%;

		@include screen-size('small') {
			width: 100%;
		}

		.alphabetical-navigation {
			background: var(--background-color);
			color: var(--foreground-color);
			display: flex;
			flex-direction: column;
			float: right;
			top: 80px;
			right: 100px;
			width: 40px;
			user-select: none;

			@include screen-size('small') {
				display: none;
			}

			.item {
				height: 40px;
				line-height: 40px;
				text-align: center;
				display: block;
				width: 40px;
				border-bottom: 1px solid var(--foreground-color);
				border-left: 1px solid var(--foreground-color);
				text-decoration: none;
				cursor: pointer;


				&:hover {
					background: $grey;
					color: var(--hover-text-color);
				}
			}
		}

		.inner {
			border: 1px solid var(--foreground-color);
			min-height: 100vh;

			.header {
				border-bottom: 1px solid var(--foreground-color);
				padding-left: $SMALL;
				padding-right: $SMALL;
				padding-bottom: $NORMAL;

				.order {
					margin-top: $SMALL;
					width: 100%;

					.order-header {
						font-style: italic;
						font-size: $font-size-extra-small;
						margin-bottom: $TINY;
					}

					.order-options {
						display: flex;

						.order-option {
							padding: $button-padding;
							margin-right: $TINY;
							border: 1px solid var(--foreground-color);
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							color: var(--foreground-color);

							.icon {
								margin-left: $TINY;
							}

							&:hover {
								background: var(--foreground-color);
								color: var(--background-color);
							}

							&.active {
								background: var(--foreground-color);
								color: var(--background-color);
							}
						}
					}
				}

				.filter {
					margin-top: $SMALL;
					width: 100%;

					.filter-header {
						font-style: italic;
						font-size: $font-size-extra-small;
						margin-bottom: $TINY;
					}

					.filter-options {
						display: flex;

						@include screen-size('small') {
							flex-wrap: wrap;
						}

						.filter-option {
							padding: $button-padding;
							margin-right: $TINY;
							border: 1px solid var(--foreground-color);
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							margin-bottom: $TINY;
							color: var(--foreground-color);

							&:hover {
								background: var(--foreground-color);
								color: var(--background-color);
							}

							&.active {
								background: var(--foreground-color);
								color: var(--background-color);
							}
						}
					}
				}
			}

			.sub-section {
				border-bottom: 1px solid var(--foreground-color);
				padding: $SMALL;

				&:last-child {
					border-bottom: none;
				}
			}
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
			margin-bottom: $TINY;
			font-size: $font-size-body;
			padding-left: 0;
			text-indent: 0;
			&:before {
				content: unset;
				padding-right: 0;
				position: static;
				top: unset;
			}
		}
	}

	.supersized {
		font-size: $font-size-h1;
	}
</style>
