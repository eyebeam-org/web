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
	import groupBy from 'lodash/groupBy'

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from "$lib/person-link/person-link.svelte"

	// __ PROPS
	export let people;

	// __ VAVRIABLES
	const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let groupedPeople = groupBy(people, p => p.lastName.charAt(0));
	console.log(groupedPeople)
</script>

<svelte:head>
	<title>People</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title='People'/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>
		<div class='header'>
			<h1>People</h1>
			<div class='filters'>
				<div class='filter alphabetical'>A-Z</div>
				<div class='filter chronological'>Year</div>
			</div>
		</div>

		{#each ALPHABET as alpha}
			<div class='sub-section'>
				<h2>{alpha}</h2>
				<!-- LIST -->
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

		.inner {
			border: $border-style;
			min-height: 100vh;

			.header {
				border-bottom: $border-style;
				padding: 15px;

				.filters {
					margin-top: 15px;
					display: inline-block;

					.filter {
						float: left;
						padding: 5px;
						background: $grey;
						margin-right: 5px;
					}
				}
			}

			.sub-section {
				border-bottom: $border-style;
				padding: 15px;

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
			margin-bottom: 5px;
		}
	}
</style>

