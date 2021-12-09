<script>
	// # # # # # # # # # # # # #
	//
	//  APPLICATION BUTTON
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { longFormatDate } from '$lib/global';
	import has from 'lodash/has.js';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';

	// *** PROPS
	export let b = {};
</script>

{#if b.size == 'large'}
	<!-- BIG -->
	<div class="application-button-large">
		<div class="column first">
			<!-- HEADER -->
			<div class="top">
				<div class="col first">
					<div class="circle" />
				</div>
				<div class="col second">
					<div class="headline">APPLICATIONS ARE OPEN</div>
					{#if b.applicationEndDate}
						<div class="date">
							Due by {longFormatDate(b.applicationEndDate)}
						</div>
					{/if}
				</div>
			</div>

			<!-- TEXT -->
			{#if has(b, 'longText.content')}
				<div class="text">
					<Blocks blocks={b.longText.content} />
				</div>
			{/if}
		</div>

		<div class="column second">
			<!-- BUTTON -->
			<a href={b.url} class="apply-now">{b.shortText}</a>
		</div>
	</div>
{:else}
	<!-- SMALL -->
	<div class="application-button-small">
		<div class="application-button-inner">
			<a href={b.url} class="button">
				{#if b.applicationEndDate}
					<div class="circle" />
				{/if}
				<span class="applications-text">{b.shortText}</span>
			</a>
			{#if b.applicationEndDate}
				<div class="date">
					Applications Due by {longFormatDate(b.applicationEndDate)}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../variables.scss';

	.application-button-small {
		margin-top: 0;
		margin-bottom: 40px;
		display: inline-block;
		width: 100%;

		.application-button-inner {
			margin: $small-margin;
			display: inline-block;

			.button {
				background: $grey;
				padding: $extra-small-margin;
				display: flex;
				align-items: center;
				text-decoration: none;

				.circle {
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: $black;
				}

				.applications-text {
					margin-left: 10px;
					font-size: $font-size-small;
				}

				&:hover {
					background: $black;
					color: $grey;

					.circle {
						background: $grey;
					}
				}
			}

			.date {
				margin-top: 8px;
				font-style: italic;
			}
		}
	}

	.application-button-large {
		width: 100%;
		background: $black;
		height: 220px;
		padding: $small-margin;
		color: $white;
		display: flex;

		.column {
			height: 100%;

			&.first {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			&.second {
				width: 220px;
			}
		}

		.top {
			display: flex;
			font-size: $font-size-small;

			.col {
				&.second {
					margin-left: 10px;
				}
			}
		}

		.circle {
			width: 20px;
			height: 20px;
			background: $white;
			border-radius: 50%;
			float: left;
			margin-top: 2px;
		}

		.headline {
			font-size: $font-size-extra-small;
			letter-spacing: 1px;
		}

		.date {
			font-style: italic;
		}

		.text {
			padding-right: 40px;
			font-size: $font-size-body;
		}

		.apply-now {
			border: $border-style-inverted;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			user-select: none;
			color: $white;
			text-decoration: none;
			font-size: $font-size-body;

			&:hover {
				background: $white;
				color: $black;
			}
		}
	}
</style>
