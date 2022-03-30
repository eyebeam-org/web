<script>
	// # # # # # # # # # # # # #
	//
	//  Single Journal Page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';
	import { fade } from 'svelte/transition';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';
	import PersonLinkList from '$lib/person-link-list/person-link-list.svelte';

	// __ PROPS
	export let page;
</script>

<!-- METADATA -->
<Metadata {page} />

<div class="journal" in:fade>
	<div class="header">
		<!-- TITLE -->
		<h1>{page.title}</h1>
		{#if page.subtitle}
			<div class="subtitle">
				{page.subtitle}
			</div>
		{/if}
		<div class="authors">
			<PersonLinkList people={page.people} />
		</div>
	</div>

	<div class="content">
		{#if has(page, 'content.content')}
			<Blocks blocks={page.content.content} />
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.journal {
		width: 880px;
		margin-left: auto;
		margin-right: auto;
		background: var(--background-color);
		border: 1px solid var(--foreground-color);

		@include screen-size('small') {
			width: 100%;
			margin-top: $LARGE;
		}

		.header {
			border-bottom: 1px solid var(--foreground-color);
			height: 340px;
			padding: $LARGE;

			@include screen-size('small') {
				padding: $NORMAL;
				height: auto;
			}

			h1 {
				font-size: $font-size-h2;
			}

			.subtitle {
				margin-top: $SMALL;
			}

			.authors {
				margin-top: $SMALL;
			}
		}

		.content {
			padding: $LARGE;
			font-size: $font-size-journal;

			@include screen-size('small') {
				padding: $NORMAL;
				font-size: $font-size-body;
			}
		}
	}
</style>
