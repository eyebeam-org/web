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
			<a href={b.url} target="_blank" class="apply-now">{b.shortText}</a>
		</div>
	</div>
{:else}
	<!-- SMALL -->
	<div class="application-button-small">
		<div class="application-button-inner">
			<a href={b.url} target="_blank" class="button">
				{#if b.applicationEndDate}
					<div class="circle" />
				{/if}
				<div class="applications-text">
					<div class="short-text">
						{b.shortText}
					</div>
					{#if b.applicationEndDate}
						<div class="date">
							Applications Due by {longFormatDate(b.applicationEndDate)}
						</div>
					{/if}
				</div>
			</a>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '../../variables.scss';

	.application-button-small {
		margin-top: 0;
		margin-bottom: $LARGE;
		display: inline-block;
		width: 100%;

		.application-button-inner {
			margin: $NORMAL;
			display: inline-block;

			.button {
				background: $grey;
				padding: $SMALL;
				display: flex;
				align-items: center;
				text-decoration: none;

				.circle {
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: var(--foreground-color);
				}

				.applications-text {
					margin-left: $SMALL;
					font-size: $font-size-small;
				}

				&:hover {
					background: var(--foreground-color);
					color: $grey;

					.circle {
						background: $grey;
					}
				}
			}

			.date {
				font-style: italic;
			}
		}
	}

	.application-button-large {
		width: 100%;
		background: var(--foreground-color);
		color: var(--background-color);
		height: 220px;
		padding: $NORMAL;
		display: flex;

		@include screen-size('small') {
			flex-wrap: wrap;
		}

		.column {
			height: 100%;

			@include screen-size('small') {
				height: auto;
			}

			&.first {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				@include screen-size('small') {
					width: 100%;
				}
			}

			&.second {
				width: 220px;

				@include screen-size('small') {
					width: 100%;
				}
			}
		}

		.top {
			display: flex;
			font-size: $font-size-small;

			.col {
				&.second {
					margin-left: $SMALL;
				}
			}
		}

		.circle {
			width: 20px;
			height: 20px;
			background: var(--background-color);
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
			padding-right: $LARGE;
			font-size: $font-size-body;

			@include screen-size('small') {
				display: none;
			}
		}

		.apply-now {
			border: 1px solid var(--background-color);
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			user-select: none;
			color: var(--background-color);
			text-decoration: none;
			font-size: $font-size-body;

			&:hover {
				background: var(--background-color);
				color: var(--foreground-color);
			}
		}
	}

	:global(.article .application-button-large .text p) {
		margin-bottom: 0;
		margin-left: 0;
		margin-right: 0;
	}
</style>
