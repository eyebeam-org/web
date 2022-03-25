<script>
	// # # # # # # # # # # # # #
	//
	//  People
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import groupBy from 'lodash/groupBy.js';
	import { getCurrentYear } from '$lib/global.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ GRAPHICS
	import ArrowDown from '$lib/graphics/arrow-down.svelte';

	console.log('$page', $page);
	// console.log('xxx', $page.query.getAll());

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
	const FILTER_OPTIONS = [
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
	let YEAR_LIST = [];

	for (let i = START_YEAR; i <= CURRENT_YEAR; i++) {
		YEAR_LIST.push(i);
	}
	console.log(YEAR_LIST);

	let filteredPeople = [];
	let groupedPeopleAlpha = {};
	let groupedPeopleChrono = {};

	console.log(getCurrentYear());

	let activeFilter = 'everyone';
	let order = 'alphabetical';

	const scrollToSection = (alpha) => {
		const el = document.querySelector('#' + alpha);
		el.scrollIntoView({ behavior: 'smooth' });
		history.replaceState(null, null, '#' + alpha);
	};

	$: {
		if (activeFilter === 'everyone') {
			filteredPeople = people;
		} else {
			filteredPeople = people.filter((p) => p.role === activeFilter);
		}
		groupedPeopleAlpha = groupBy(filteredPeople, (p) => p.lastName.charAt(0));
		groupedPeopleChrono = groupBy(filteredPeople, (p) => p.firstEngagement);
	}

	onMount(async () => {
		console.log('location.hash', location.hash);
		if (location.hash) {
			const strippedHash = location.hash.substring(1);
			switch (strippedHash) {
				case 'artists':
					activeFilter = 'artist';
					break;
				case 'staff':
					activeFilter = 'staff';
					break;
				case 'board':
					activeFilter = 'board';
					break;
				case 'advisory-committee':
					activeFilter = 'advisoryCommittee';
					break;
				default:
					activeFilter = 'everyone';
			}
		}
	});

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('');
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata post={{ title: 'People' }} />
<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		{#if order == 'alphabetical'}
			<!-- ALPHABETICAL NAVIGATION -->
			<div class="alphabetical-navigation">
				{#each ALPHABET as alpha}
					<div
						class="item"
						on:click={() => {
							scrollToSection(alpha);
						}}
					>
						{alpha}
					</div>
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
		<div class="header">
			<h1>People</h1>
			<!-- ORDER -->
			<div class="order">
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
			</div>
			<!-- FILTER -->
			<div class="filter">
				<div class="filter-header">Show</div>
				<div class="filter-options">
					{#each FILTER_OPTIONS as option}
						<div
							class="filter-option"
							class:active={activeFilter === option.value}
							on:click={() => {
								activeFilter = option.value;
							}}
						>
							{option.label}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- LIST -->
		{#if order == 'alphabetical'}
			{#each ALPHABET as alpha}
				<div class="sub-section" id={alpha}>
					<h2 class="supersized">{alpha}</h2>
					{#if groupedPeopleAlpha[alpha]}
						<ul>
							{#each groupedPeopleAlpha[alpha] as person}
								<li><PersonLink {person} /></li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		{/if}
		{#if order == 'chronological'}
			{#each YEAR_LIST as year}
				<div class="sub-section" id={'year' + year}>
					<h2 class="supersized">{year}</h2>
					{#if groupedPeopleChrono[year]}
						<ul>
							{#each groupedPeopleChrono[year] as person}
								<li><PersonLink {person} /></li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.alphabetical-navigation {
			background: var(--background-color);
			color: var(--foreground-color);
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 80px;
			right: 0;
			width: 40px;
			user-select: none;
			// border: 1px solid var(--foreground-color);

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
				border-right: 1px solid var(--foreground-color);
				border-left: 1px solid var(--foreground-color);
				text-decoration: none;
				cursor: pointer;

				&:first-child {
					border-top: 1px solid var(--foreground-color);
				}

				&:hover {
					background: $grey;
					color: $black;
				}
			}
		}

		.inner {
			border: 1px solid var(--foreground-color);
			min-height: 100vh;

			.header {
				border-bottom: 1px solid var(--foreground-color);
				padding-left: 15px;
				padding-right: 15px;
				padding-bottom: 40px;

				.order {
					margin-top: 15px;
					width: 100%;

					.order-header {
						font-style: italic;
						font-size: $font-size-extra-small;
						margin-bottom: 5px;
					}

					.order-options {
						display: flex;

						.order-option {
							padding: $button-padding;
							margin-right: 8px;
							border: 1px solid var(--foreground-color);
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							background: $grey;
							color: $black;

							.icon {
								margin-left: 8px;
							}

							&.active {
								background: $white;
							}

							&:hover {
								background: $white;
							}
						}
					}
				}

				.filter {
					margin-top: 15px;
					width: 100%;

					.filter-header {
						font-style: italic;
						font-size: $font-size-extra-small;
						margin-bottom: 5px;
					}

					.filter-options {
						display: flex;

						@include screen-size('small') {
							flex-wrap: wrap;
						}

						.filter-option {
							padding: $button-padding;
							margin-right: 8px;
							border: 1px solid var(--foreground-color);
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							background: $grey;
							margin-bottom: 8px;
							color: $black;

							&.active {
								background: $white;
							}

							&:hover {
								background: $white;
							}
						}
					}
				}
			}

			.sub-section {
				border-bottom: 1px solid var(--foreground-color);
				padding: 15px;

				&:last-child {
					border-bottom: none;
				}

				// &:target {
				// 	background: red;
				// }
			}
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 5px;
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
