<script>
	export let inverted = false;
</script>

<svg
	class:inverted
	width="9"
	height="8"
	viewBox="0 0 9 8"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M4.78393 7.78516L0.640486 0.608508L8.92737 0.608508L4.78393 7.78516Z" />
</svg>

<style type="scss">
	@import '../../variables.scss';

	svg {
		path {
			fill: var(--background-color);
		}

		&.inverted {
			path {
				fill: var(--foreground-color);
			}
		}
	}
</style>
