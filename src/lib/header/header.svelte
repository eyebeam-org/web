<script>
	// # # # # # # # # # # # # #
	//
	// Header
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import Clock from '$lib/clock/clock.svelte';
	import { loadData } from '$lib/sanity.js';

	// __ GRAPHICS
	import FullBeam from '$lib/graphics/full-beam.svelte';
	import TriangleDown from '$lib/graphics/triangle-down.svelte';

	// __ STORES
	import { currentCategory, currentPage, loaded, trayOpen } from '$lib/stores.js';

	const cities = loadData('*[_id == "cities"][0]');

	const toggleTray = () => {
		trayOpen.set(!$trayOpen);
	};
</script>

<header class:open={$trayOpen}>
	<!-- {#if $trayOpen} -->
	<div class="settings">
		<div class="settings-bar" on:click={toggleTray}>
			<div class="tray-toggle" on:click={toggleTray}>
				<FullBeam black={true} />
			</div>
			Settings
		</div>
		<div class="settings-content">
			<div class="section mode">
				<div class="section-header">MODE</div>
				<div class="section-header">INVERSION</div>
			</div>
			<div class="section text">TEXT</div>
			<div class="section city">
				{#await cities then cities}
					{#each cities.cities as city}
						<div class="city-button">{city.name}</div>
					{/each}
				{/await}
			</div>
		</div>
	</div>
	<!-- {/if} -->
	<nav class="menubar">
		<div class="inner-text" class:loaded={$loaded}>
			<!-- BREADCRUMBS -->
			<div class="breadcrumbs">
				<span class="arrow-down"><TriangleDown /></span>
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
			<!-- TRAY TOGGLE-->
			<div class="tray-toggle" on:click={toggleTray}>
				<FullBeam />
			</div>
			<!-- CLOCK -->
			<div class="clock">
				<Clock />
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	@import '../../variables.scss';

	$HEADER_HEIGHT: 30px;

	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		height: 340px;
		transition: transform 0.3s ease-out;
		transform: translateY(-240px);
		font-size: $font-size-extra-small;

		&.open {
			transform: translateY(0);
		}

		.menubar {
			width: 100%;
			height: $HEADER_HEIGHT;
			background: $black;
			color: $white;
			line-height: $HEADER_HEIGHT;
			padding-left: 15px;
			padding-right: 10px;
			overflow: hidden;

			.inner-text {
				opacity: 0;

				&.loaded {
					opacity: 1;
				}
			}

			.breadcrumbs {
				float: left;
			}

			.arrow-down {
				margin-right: 5px;
			}

			.divider {
				margin-right: 5px;
				margin-left: 5px;
			}

			a {
				color: $white;
				text-decoration: none;
			}

			.clock {
				float: right;
			}

			.tray-toggle {
				float: right;
				width: 18px;
				height: $HEADER_HEIGHT;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 12px;
				cursor: pointer;
			}
		}

		.settings {
			height: 240px;
			background: $grey;

			.settings-bar {
				height: $HEADER_HEIGHT;
				line-height: $HEADER_HEIGHT;
				padding-left: 5px;
				padding-right: 10px;
				cursor: pointer;
				border-bottom: $border-style;
				color: $black;
				width: 100%;

				.tray-toggle {
					width: 18px;
					height: $HEADER_HEIGHT;
					display: flex;
					margin-right: 8px;
					justify-content: center;
					align-items: center;
					margin-left: 8px;
					cursor: pointer;
					float: left;
				}
			}

			.settings-content {
				display: flex;
				padding-left: 15px;
				padding-right: 15px;

				.section {
					padding-top: $small-margin;

					.section-header {
					}

					&.mode {
						width: 20%;
					}
					&.text {
						width: 30%;
					}
					&.city {
						width: 50%;
					}
				}
			}
		}
	}

	.city-button {
		padding: $button-padding;
		display: inline-block;
		border-top: $border-style;
		border-right: $border-style;
		border-bottom: $border-style;

		&:first-child {
			border-left: $border-style;
		}
	}
</style>
