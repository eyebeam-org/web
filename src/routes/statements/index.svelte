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
    import { renderBlockText } from "$lib/sanity.js"
	import { format, parseISO } from "date-fns"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from "$lib/person-link/person-link.svelte"

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';

	// __ PROPS
	export let statements;

	const formattedDate = date => {
		console.log('date', date)
  		try {
			if(date) {
				return format(parseISO(date), "d MMMM, yyyy")
			}
		} catch (err) {
			console.dir(err)
		}
	}

</script>

<svelte:head>
	<title>Statements</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>
		<div class='header'>
			<BigBeam/>
		</div>
		{#each statements as statement}
			<div class='single-statement'>
				<!-- TEXT -->
				<div class='text'>{@html renderBlockText(statement.content.content)}</div>
				<!-- DATE -->
				{#if statement.date}
					<div class='date'>{formattedDate(statement.date)}</div>
				{/if}
				<!-- PERSON -->
				<!-- {#if statement.person}
					<div class='person'><PersonLink person={statement.person}/></div>
				{/if} -->
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
				height: 300px;
				border-bottom: $border-style;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.single-statement {
				padding: 15px;

				.text {
					font-size: $font-size-h2;
				}

				.date {
					margin-top: 5px;
				}
			}
		}
	}

	:global(.single-statement .text p) {
		font-size: $font-size-h2;
	}
</style>

