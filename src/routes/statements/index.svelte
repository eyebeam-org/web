<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/statements.json');
		if (res.ok) {
			const statements = await res.json();
			return {
				props: { statements }
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
	//  All statements
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';
	import { longFormatDate } from '$lib/global.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';

	// __ PROPS
	export let statements;
</script>

<svelte:head>
	<title>Statements</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="header">
			<BigBeam />
		</div>
		{#each statements as statement}
			<div class="single-statement">
				<!-- TEXT -->
				<div class="text">{@html renderBlockText(statement.content.content)}</div>
				<!-- PERSON -->
				{#if statement.person}
					<div class="person"><PersonLink person={statement.person} /></div>
				{/if}
				<!-- DATE -->
				{#if statement.date}
					<div class="date">{longFormatDate(statement.date)}</div>
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

		.inner {
			border: $border-style;
			min-height: 100vh;

			.header {
				height: $HEADER_HEIGHT;
				border-bottom: $border-style;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.single-statement {
				padding: 15px;
				margin-bottom: $small-margin;

				.text {
					font-size: $font-size-h2;
					line-height: 1.2em;
				}

				.person {
					font-size: $font-size-body;
					margin-top: 10px;
				}

				.date {
					font-size: $font-size-body;
					margin-top: 10px;
				}
			}
		}
	}

	:global(.single-statement .text p) {
		font-size: $font-size-h2;
	}
</style>
