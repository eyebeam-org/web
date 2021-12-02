<script>
	// # # # # # # # # # # # # #
	//
	// Header
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import Clock from '$lib/clock/clock.svelte';

	// __ GRAPHICS
	import FullBeam from '$lib/graphics/full-beam.svelte';

	// __ STORES
	import { currentCategory, currentPage, loaded, trayOpen } from '$lib/stores.js';

	const toggleTray = () => {
		trayOpen.set(!$trayOpen);
	};
</script>

<header class:open={$trayOpen}>
	<!-- {#if $trayOpen} -->
	<div class="settings">
		<div class="settings-bar" on:click={toggleTray}>
			<!-- <div class="tray-toggle" on:click={toggleTray}> -->
			<!-- <FullBeam /> -->
			<!-- </div> -->
			Settings
		</div>
		<div class="settings-content">
			<div class="section mode">
				<div class="section-header">MODE</div>
				<div class="section-header">INVERSION</div>
			</div>
			<div class="section text">TEXT</div>
			<div class="section city">CITY</div>
		</div>
	</div>
	<!-- {/if} -->
	<nav class="menubar">
		<div class="inner-text" class:loaded={$loaded}>
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

	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		height: 200px;
		transition: transform 0.3s ease-out;
		transform: translateY(-170px);
		font-size: $font-size-small;

		&.open {
			transform: translateY(0);
		}

		.menubar {
			width: 100%;
			height: 30px;
			background: $black;
			color: $white;
			line-height: 30px;
			padding-left: 15px;
			padding-right: 15px;
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
			}

			.clock {
				float: right;
			}

			.tray-toggle {
				float: right;
				// background: red;
				width: 12px;
				height: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 8px;
				cursor: pointer;
			}
		}

		.settings {
			height: 170px;
			background: $grey;

			.settings-bar {
				height: 30px;
				line-height: 30px;
				padding-left: 15px;
				padding-right: 15px;
				cursor: pointer;
				border-bottom: $border-style;

				.tray-toggle {
					width: 12px;
					height: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 8px;
					cursor: pointer;
				}
			}

			.settings-content {
				display: flex;
				padding-left: 15px;
				padding-right: 15px;

				.section {
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
</style>
