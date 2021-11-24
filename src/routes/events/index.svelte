<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/events.json');
		if (res.ok) {
			const events = await res.json();
			return {
				props: { events }
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
	//  Events
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let events;
</script>

<svelte:head>
	<title>Events</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar toc={events} title="People" />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<h1>Events</h1>

		<!-- LIST -->
		<ul>
			{#each events as event}
				<li><a href={'/events/' + event.slug.current} sveltekit:prefetch>{event.title}</a></li>
			{/each}
		</ul>
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
