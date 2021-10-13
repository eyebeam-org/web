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
	import groupBy from 'lodash/groupBy.js'

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from "$lib/person-link/person-link.svelte"

	// __ PROPS
	export let people;

	// __ VARIABLES
	const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let groupedPeople = groupBy(people, p => p.lastName.charAt(0));
	console.log(groupedPeople)

	const scrollToSection = alpha => {
		const el = document.querySelector("#" + alpha);
		el.scrollIntoView({ behavior: 'smooth'});
		history.replaceState(null, null, '#' + alpha);
	}

</script>

<svelte:head>
	<title>People</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title='People'/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>

		<!-- ALPHABETICAL NAVIGATION -->
		<div class='alphabetical-navigation'>
			{#each ALPHABET as alpha}
				<div class='item' on:click={() => { scrollToSection(alpha) }}>{alpha}</div>
			{/each}
		</div>

		<!-- HEADER -->
		<div class='header'>
			<h1>People</h1>
			<div class='filters'>
				<div class='filter alphabetical active'>A-Z</div>
				<div class='filter chronological'>Year</div>
			</div>
		</div>
		
		<!-- LIST -->
		{#each ALPHABET as alpha}
			<div class='sub-section' id={alpha}>
				<h2>{alpha}</h2>
				{#if groupedPeople[alpha]}
					<ul>
						{#each groupedPeople[alpha] as person}
							<li><PersonLink {person}/></li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}


	</div>

	<!-- BOTTOM BAR -->
	<BottomBar/>
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
			width: 50px;
			user-select: none;
			// border: $border-style;

			.item {
				height: 50px;
				line-height: 50px;
				text-align: center;
				display: block;
				width: 50px;
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
				padding: 15px;
				padding-bottom: 40px;

				.filters {
					margin-top: 15px;
					display: inline-block;

					.filter {
						float: left;
						padding: 5px;
						margin-right: 5px;
						border: $border-style;

						&.active {
							background: $grey;
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
		}
	}
</style>

