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
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';

	// __ PROPS
	export let statements;

	// __ STORES
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set('');
	$: sidebarToC.set([]);
</script>

<!-- METADATA -->
<Metadata post={{ title: 'Statements' }} />

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
			border: 1px solid var(--foreground-color);
			min-height: 100vh;

			.header {
				height: $HEADER_HEIGHT;
				border-bottom: 1px solid var(--foreground-color);
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
