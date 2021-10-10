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

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let people;
</script>


<svelte:head>
	<title>People</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title='People'/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>

		<h1>People</h1>

		<!-- LIST -->
		<ul>
			{#each people as person}
				<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
			{/each}
		</ul>
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
			padding: 15px;
			border: $border-style;
			min-height: 100vh;
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}
</style>

