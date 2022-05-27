<script>
	// # # # # # # # # # # # # #
	//
	// Menubar
	//
	// # # # # # # # # # # # # #

	// __ IMPORT
	import { loadData } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import Cookies from 'js-cookie';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';
	import Clock from '$lib/clock/clock.svelte';

	// __ GRAPHICS
	import FullBeam from '$lib/graphics/full-beam.svelte';
	import ArrowDown from '$lib/graphics/arrow-down.svelte';

	// __ STORES
	import {
		currentCategory,
		currentPage,
		trayOpen,
		activeCity,
		theme,
		inversion
	} from '$lib/stores.js';

	export let ready = false;

	const cities = loadData('*[_id == "cities"][0]');

	cities.then((c) => {
		if (c.cities && c.cities[0]) {
			let cityCookie = Cookies.get('eyebeam-city');
			if (cityCookie && c.cities.find((city) => city._key === cityCookie)) {
				activeCity.set(c.cities.find((city) => city._key === cityCookie));
			} else {
				activeCity.set(c.cities[0]);
			}
		}
	});

	let tray;
	const toggleTray = () => {
		trayOpen.set(!$trayOpen);
		trayOpen ? tray.setAttribute("aria-expanded", true) : tray.setAttribute("aria-expanded", false)
	};
</script>

<div aria-label="Accessibility Settings" role="Settings" class="menubar" class:open={$trayOpen} aria-expanded=false bind:this={tray}>
	<div class="settings">
		<!-- SETTINGS BAR -->
		<div class="settings-bar" on:click={toggleTray}>
			<div class="tray-toggle" on:click={toggleTray} aria-label="Toggle accessibility settings">
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
									Cookies.set('eyebeam-inversion', $inversion, { expires: 1 });
								}}
							/>
						</div>
					{/if}
				</div>
			</div>
			<!-- TEXT 
			CURRENTLY NOT IN USE
			<div class="section text">
				<div class="section-header">Text</div>
			</div>
			-->
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
									Cookies.set('eyebeam-city', city._key, { expires: 1 });
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
	<div class="small-bar">
		<div class="inner-text" class:ready>
			<!-- BREADCRUMBS -->
			<div class="breadcrumbs">
				<span class="arrow-down"><ArrowDown /></span>
				<a href="/" sveltekit:prefetch class="site-title">eyebeam.org</a>
				<!-- CATEGORY -->
				{#if $currentCategory}
					<span class="divider">/</span>
					<a href={'/' + $currentCategory.slug} class="crumb">{$currentCategory.name}</a>
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
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	$HEADER_HEIGHT: 30px;

	.menubar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		transition: transform 0.5s $transition;
		transform: translateY(-240px);
		font-size: $font-size-extra-small;

		@include screen-size('small') {
			display: none;
		}

		&.open {
			transform: translateY(0);
		}

		.small-bar {
			width: 100%;
			height: $HEADER_HEIGHT;
			background: var(--foreground-color);
			color: var(--background-color);
			line-height: $HEADER_HEIGHT;
			padding-left: $SMALL;
			padding-right: $SMALL;
			overflow: hidden;

			.inner-text {
				opacity: 0;
				transition: opacity 0.5s $transition;

				&.ready {
					opacity: 1;
				}
			}

			.breadcrumbs {
				float: left;

				a {
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}

			.arrow-down {
				margin-right: $TINY;
			}

			.divider {
				margin-right: $TINY;
				margin-left: $TINY;
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
				margin-left: $TINY;
				cursor: pointer;
			}
		}

		.settings {
			height: 240px;
			background: $grey;
			color: var(--special-text-color);
			overflow: hidden;

			.settings-bar {
				height: $HEADER_HEIGHT;
				line-height: $HEADER_HEIGHT;
				padding-left: $TINY;
				padding-right: 10px;
				cursor: pointer;
				border-bottom: 1px solid var(--special-text-color);
				color: var(--special-text-color);
				width: 100%;

				.tray-toggle {
					width: 18px;
					height: $HEADER_HEIGHT;
					display: flex;
					margin-right: $TINY;
					margin-left: $TINY;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					float: left;
				}
			}

			.settings-content {
				display: flex;
				padding-left: $SMALL;
				padding-right: $SMALL;

				.section {
					padding-top: $NORMAL;

					.section-header {
						margin-bottom: $SMALL;
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
		border-top: 1px solid var(--special-text-color);
		border-right: 1px solid var(--special-text-color);
		border-bottom: 1px solid var(--special-text-color);
		user-select: none;
		cursor: pointer;

		&:first-child {
			border-left: 1px solid var(--special-text-color);
		}

		&.active {
			background: var(--special-text-color);
			color: $white;
		}

		&:hover {
			background: var(--special-text-color);
			color: $white;
		}
	}

	.theme-switches {
		margin-bottom: $NORMAL;
	}

	.theme-button {
		padding: $button-padding;
		display: inline-block;
		border-top: 1px solid var(--special-text-color);
		border-right: 1px solid var(--special-text-color);
		border-bottom: 1px solid var(--special-text-color);
		user-select: none;
		cursor: pointer;

		&:first-child {
			border-left: 1px solid var(--special-text-color);
		}

		&:last-child {
			margin-left: -3px;
		}

		&.active {
			background: var(--special-text-color);
			color: $white;
		}

		&:hover {
			background: var(--special-text-color);
			color: $white;
		}
	}

	.inversion-button {
		width: 35px;
		height: 35px;
		border: 1px solid var(--special-text-color);
		display: inline-block;
		border-radius: 50%;
		user-select: none;
		cursor: pointer;
		background: transparent;

		&:hover {
			background: var(--special-text-color);
		}

		&.active {
			background: var(--special-text-color);
		}
	}
</style>
