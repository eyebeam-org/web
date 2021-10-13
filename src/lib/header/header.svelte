<script>
	// # # # # # # # # # # # # #
	//
	// Header
	//
	// # # # # # # # # # # # # #
	// __ IMPORT
	import Clock from '$lib/clock/clock.svelte';
	import { currentCategory, currentPage } from '$lib/stores.js';
</script>

<nav class="menubar">
	<!-- BREADCRUMBS -->
	<div class="breadcrumbs">
		<span class="arrow-down">▼</span>
		<a href="/">eyebeam.org</a>
		<!-- CATEGORY -->
		{#if $currentCategory}
			<span class="divider">/</span>
			<a href={'/' + $currentCategory.slug}>{$currentCategory.name}</a>
			<!-- PAGE -->
			{#if $currentPage}
				<span class="divider">/</span>
				<span>{$currentPage.title}</span>
			{/if}
		{/if}
	</div>
	<!-- CLOCK -->
	<div class="clock">
		<Clock />
	</div>
</nav>

<style lang="scss">
	@import '../../variables.scss';

	.menubar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 30px;
		background: $black;
		color: $white;
		font-size: $font-size-normal;
		line-height: 30px;
		padding-left: 15px;
		padding-right: 15px;

		.breadcrumbs {
			float: left;
		}

		.arrow-down {
			font-size: $font-size-small;
			margin-right: 5px;
		}

		.divider {
			margin-right: 5px;
			margin-left: 5px;
		}

		a {
			color: $white;
		}

		.clock {
			float: right;
		}
	}
</style>
