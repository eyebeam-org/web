<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/eyebeam-is-changing.json');
		if (res.ok) {
			const eyebeamIsChanging = await res.json();
			return {
				props: { eyebeamIsChanging }
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
	//  Eyebeam is changing
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ PROPS
	export let eyebeamIsChanging;
</script>

<svelte:head>
	<title>{eyebeamIsChanging.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={eyebeamIsChanging.title} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="block-text">
			<!-- TITLE -->
			<h1>{eyebeamIsChanging.title}</h1>
			<!-- MAIN TEXT -->
			{#if has(eyebeamIsChanging, 'content.content')}
				<div class="body-content">
					<Blocks blocks={eyebeamIsChanging.content.content} />
				</div>
			{/if}
		</div>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={eyebeamIsChanging._updatedAt} />
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

			h1 {
				padding: $small-margin;
			}
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}
</style>
