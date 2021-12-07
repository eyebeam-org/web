<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/people.json');
		if (res.ok) {
			const people = await res.json();
			return {
				props: { people }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  People
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import groupBy from 'lodash/groupBy.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ GRAPHICS
	import ArrowDown from '$lib/graphics/arrow-down.svelte';

	// __ PROPS
	export let people;

	// __ VARIABLES
	const START_YEAR = 1997;
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
	const groupedPeople = groupBy(people, (p) => p.lastName.charAt(0));

	const scrollToSection = (alpha) => {
		const el = document.querySelector('#' + alpha);
		el.scrollIntoView({ behavior: 'smooth' });
		history.replaceState(null, null, '#' + alpha);
	};
</script>

<svelte:head>
	<title>People</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
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

		<!-- HEADER -->
		<div class="header">
			<h1>People</h1>
			<!-- ORDER -->
			<div class="order">
				<div class="order-header">Order by</div>
				<div class="order-options">
					<div class="order-option alphabetical active">
						A-Z <span class="icon"><ArrowDown /></span>
					</div>
					<div class="order-option chronological">Year <span class="icon"><ArrowDown /></span></div>
				</div>
			</div>
			<!-- FILTER -->
			<div class="filter">
				<div class="filter-header">Show</div>
				<div class="filter-options">
					<div class="filter-option active">Everyone</div>
					<div class="filter-option">Artist</div>
					<div class="filter-option">Staff</div>
					<div class="filter-option">Board</div>
					<div class="filter-option">Advisory Committee</div>
				</div>
			</div>
		</div>

		<!-- LIST -->
		{#each ALPHABET as alpha}
			<div class="sub-section" id={alpha}>
				<h2 class="supersized">{alpha}</h2>
				{#if groupedPeople[alpha]}
					<ul>
						{#each groupedPeople[alpha] as person}
							<li><PersonLink {person} /></li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.alphabetical-navigation {
			background: $white;
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 80px;
			right: 60px;
			width: 40px;
			user-select: none;
			// border: $border-style;

			.item {
				height: 40px;
				line-height: 40px;
				text-align: center;
				display: block;
				width: 40px;
				border-bottom: $border-style;
				border-right: $border-style;
				border-left: $border-style;
				text-decoration: none;
				cursor: pointer;

				&:first-child {
					border-top: $border-style;
				}

				&:hover {
					background: $grey;
				}
			}
		}

		.inner {
			border: $border-style;
			min-height: 100vh;

			.header {
				border-bottom: $border-style;
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
							border: $border-style;
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							background: $grey;

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

						.filter-option {
							padding: $button-padding;
							margin-right: 8px;
							border: $border-style;
							user-select: none;
							cursor: pointer;
							font-size: $font-size-extra-small;
							background: $grey;

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
				border-bottom: $border-style;
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
		}
	}

	.supersized {
		font-size: $font-size-h1;
	}
</style>
