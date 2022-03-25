<script>
	// # # # # # # # # # # # # #
	//
	//  DONATION WIDGET
	//
	// # # # # # # # # # # # # #

	// This component brutally re-styles the give lively donation widget
	// through extreme use of !important
</script>

<svelte:head>
	<script
		src="https://secure.givelively.org/widgets/simple_donation/the-eyebeam-atelier-inc/donate-to-eyebeam.js?show_suggested_amount_buttons=false&show_in_honor_of=false&address_required=false&has_required_custom_question=false"></script>
</svelte:head>

<div class="donation-widget">
	<div id="give-lively-widget" class="gl-simple-donation-widget" />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.donation-widget {
		margin-top: $small-margin;
		height: 600px;
		width: 100%;

		@include screen-size('small') {
			border-right: $border-style;
			border-left: $border-style;
		}
	}

	:global(.donation-widget .gl-widget__frequency-selection-container) {
		height: 200px;
		border-top: $border-style;
		// background: yellow;
	}

	:global(.donation-widget .gl-widget__input-group) {
		height: 200px;
		// background: green;
		font-size: $font-size-h2 !important;
		color: var(--foreground-color) !important;
		padding-top: 75px !important;
		border: unset !important;
		border-radius: 0 !important;
		border-top: $border-style !important;
	}

	:global(.donation-widget .gl-widget__donation-input-field) {
		font-size: $font-size-h2 !important;
		font-family: $SERIF_STACK !important;
		color: var(--foreground-color) !important;
		outline: none !important;
		text-align: center;
		border-radius: 0 !important;
		width: 50% !important;
		border-bottom: 1px solid $grey !important;
		background: transparent !important;
	}

	:global(.donation-widget .gl-widget__btn--outline-primary) {
		background: transparent !important;
		margin-bottom: 0 !important;
		padding: 0 !important;
	}

	:global(.donation-widget .gl-widget__currency) {
		top: 75px !important;
		color: var(--foreground-color) !important;
		font-family: $SERIF_STACK !important;
		background: transparent !important;
	}

	:global(.donation-widget .gl-widget__payment) {
		border-top: $border-style;
		height: 200px;
		margin-top: 0 !important;
		// background: blue;
	}

	:global(.donation-widget .gl-widget__frequency-buttons) {
		height: 100% !important;
		text-transform: uppercase;
		font-family: $SERIF_STACK !important;
		font-size: $font-size-extra-small !important;
	}

	:global(.donation-widget .gl-widget__donation-submit-button) {
		height: 100% !important;
		font-size: $font-size-h2 !important;
		font-family: $SERIF_STACK !important;
		background: transparent !important;
		text-transform: capitalize;
		color: var(--foreground-color) !important;
		transition: unset !important;

		&:hover {
			color: var(--foreground-color) !important;
			background: $grey !important;
		}
	}

	:global(.donation-widget .gl-widget__btn) {
		margin-left: 0 !important;
		margin-right: 0 !important;
		border-radius: 0 !important;
		border: 0 !important;
		color: black !important;

		&:first-child {
			border-right: $border-style !important;
		}
	}

	:global(.donation-widget .gl-widget__btn--outline-primary) {
		&:focus {
			background-color: $grey !important;
			color: black !important;
		}

		&:hover {
			background-color: $grey !important;
			color: black !important;
		}
	}

	:global(.donation-widget .gl-widget--selected-btn) {
		background-color: $grey !important;
		color: black !important;
	}

	:global(.donation-widget .gl-widget__btn--outline-primary:hover:not(.gl-widget--selected-btn)) {
		background: transparent !important;
		color: var(--foreground-color) !important;
	}
</style>
