<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	//  Single program
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';
	import { parseToc } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let program;

	const toc = parseToc(get(program, 'content.content'));

	// __ Set currentPage
	currentPage.set({ slug: get(program, 'slug.current', ''), title: program.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={program.title} {toc} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<!-- HEADER -->
		<div class="header">
			<!-- TITLE -->
			<h1>{program.title}</h1>
			<!-- INTRODUCTION -->
			{#if has(program, 'introduction.content', [])}
				<div><Blocks blocks={program.introduction.content} /></div>
			{/if}
		</div>

		<!-- MAIN TEXT -->
		{#if has(program, 'content.content', [])}
			<div class="block-text">
				<Blocks blocks={program.content.content} />
			</div>
		{/if}

		<!-- SEE ALSO -->
		{#if program.internalLinks || program.externalLinks}
			<SeeAlso externalLinks={program.externalLinks} internalLinks={program.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={program._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			border: $border-style;
			min-height: 100vh;
		}

		.main-image {
			width: 300px;
		}
	}

	.header {
		border-bottom: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: $HEADER_HEIGHT;
	}

	ul {
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 5px;
		}
	}
</style>
