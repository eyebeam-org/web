<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/notes.json');
		if (res.ok) {
			const notes = await res.json();
			return {
				props: { notes }
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
	//  Notes
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let notes;
</script>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar toc={notes} title="Notes" />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<h1>Notes</h1>

		<!-- LIST -->
		<ul>
			{#each notes as note}
				<li><a href={'/notes/' + note.slug.current} sveltekit:prefetch>{note.title}</a></li>
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
