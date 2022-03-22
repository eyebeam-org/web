<script>
	// # # # # # # # # # # # # #
	//
	// Header
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import Clock from '$lib/clock/clock.svelte';
	import { loadData } from '$lib/sanity.js';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ GRAPHICS
	import FullBeam from '$lib/graphics/full-beam.svelte';
	import ArrowDown from '$lib/graphics/arrow-down.svelte';

	// __ STORES
	import {
		currentCategory,
		currentPage,
		loaded,
		trayOpen,
		activeCity,
		theme,
		inversion
	} from '$lib/stores.js';

	const cities = loadData('*[_id == "cities"][0]');

	cities.then((c) => {
		if (c.cities && c.cities[0]) {
			activeCity.set(c.cities[0]);
		}
	});

	const toggleTray = () => {
		trayOpen.set(!$trayOpen);
	};
</script>

<header class:open={$trayOpen}>
	<div class="settings">
		<!-- SETTINGS BAR -->
		<div class="settings-bar" on:click={toggleTray}>
			<div class="tray-toggle" on:click={toggleTray}>
				<FullBeam black={true} />
			</div>
			Settings
		</div>
		<!-- SETTINGS CONTENT -->
		<div class="settings-content">
			<!-- THEME & INVERSION -->
			<div class="section theme">
				<div class="inner-section column">
					<div class="section-header">Theme</div>
					<div class="theme-switches">
						<div
							class="theme-button"
							class:active={$theme === 'ink'}
							on:click={() => {
								theme.set('ink');
							}}
						>
							E-ink
						</div>
						<div
							class="theme-button"
							class:active={$theme === 'rgb'}
							on:click={() => {
								theme.set('rgb');
							}}
						>
							RGB
						</div>
					</div>
					{#if $theme === 'ink'}
						<div class="section-header">Inversion</div>
						<div class="inversion-switches">
							<div
								class="inversion-button"
								class:active={$inversion}
								on:click={() => {
									inversion.set(!$inversion);
								}}
							/>
						</div>
					{/if}
				</div>
			</div>
			<!-- TEXT -->
			<div class="section text">
				<div class="section-header">Text</div>
			</div>
			<!-- CITY -->
			<div class="section city">
				<div class="section-header">City</div>
				{#await cities then cities}
					<div class="city-switches">
						{#each cities.cities as city}
							<div
								class="city-button"
								class:active={$activeCity._key === city._key}
								on:click={() => {
									activeCity.set(city);
								}}
							>
								{city.name}
							</div>
						{/each}
					</div>
					<div class="city-text">
						{#if has(cities, 'content.content', [])}
							<div><Blocks blocks={cities.content.content} /></div>
						{/if}
					</div>
				{/await}
			</div>
		</div>
	</div>
	<nav class="menubar">
		<div class="inner-text" class:loaded={$loaded}>
			<!-- BREADCRUMBS -->
			<div class="breadcrumbs">
				<span class="arrow-down"><ArrowDown /></span>
				<a href="/" sveltekit:prefetch>eyebeam.org</a>
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
		transition: transform 0.5s $transition;
		transform: translateY(-240px);
		font-size: $font-size-extra-small;

		@include screen-size('small') {
			display: none;
		}

		&.open {
			transform: translateY(0);
		}

		.menubar {
			width: 100%;
			height: $HEADER_HEIGHT;
			background: var(--foreground-color);
			color: var(--background-color);
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
				color: var(--background-color);
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
			color: $black;
			overflow: hidden;

			.settings-bar {
				height: $HEADER_HEIGHT;
				line-height: $HEADER_HEIGHT;
				padding-left: 5px;
				padding-right: 10px;
				cursor: pointer;
				border-bottom: 1px solid $black;
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
						margin-bottom: 10px;
					}

					&.theme {
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
		border-top: 1px solid $black;
		border-right: 1px solid $black;
		border-bottom: 1px solid $black;
		user-select: none;
		cursor: pointer;

		&:first-child {
			border-left: 1px solid $black;
		}

		&.active {
			background: $black;
			color: $white;
		}

		&:hover {
			background: $black;
			color: $white;
		}
	}

	.theme-switches {
		margin-bottom: $small-margin;
	}

	.theme-button {
		padding: $button-padding;
		display: inline-block;
		border-top: 1px solid $black;
		border-right: 1px solid $black;
		border-bottom: 1px solid $black;
		user-select: none;
		cursor: pointer;

		&:first-child {
			border-left: 1px solid $black;
		}

		&:last-child {
			margin-left: -3px;
		}

		&.active {
			background: $black;
			color: $white;
		}

		&:hover {
			background: $black;
			color: $white;
		}
	}

	.inversion-button {
		width: 35px;
		height: 35px;
		border: 1px solid $black;
		display: inline-block;
		border-radius: 50%;
		user-select: none;
		cursor: pointer;
		background: transparent;

		&:hover {
			background: $black;
		}

		&.active {
			background: $black;
		}
	}
</style>
