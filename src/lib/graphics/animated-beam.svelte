<script>
	// # # # # # # # # # # # # #
	//
	//  ANIMATED BEAM
	//
	// # # # # # # # # # # # # #

	let counter = 1;

	setTimeout(() => {
		setInterval(() => {
			counter++;
		}, 75);
	}, 250);
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.98 67.2">
	<line class="l-1" class:shown={counter > 1} y1="66.95" x2="53.24" y2="66.95" />
	<path class="l-2" class:shown={counter > 2} d="M.82,55.05,53.28,63.8Z" />
	<path class="l-3" class:shown={counter > 3} d="M3.8,43.85l50,17.25Z" />
	<path class="l-4" class:shown={counter > 4} d="M8.93,33.26,55.05,58.44Z" />
	<path class="l-5" class:shown={counter > 5} d="M16.05,24,56.86,56.4Z" />
	<path class="l-6" class:shown={counter > 6} d="M24.12,16,58.33,54.56Z" />
	<path class="l-7" class:shown={counter > 7} d="M34.3,9.1,60.92,52.76Z" />
	<path class="l-8" class:shown={counter > 8} d="M45.65,4.12l18.2,47.33Z" />
	<path class="l-9" class:shown={counter > 9} d="M57.12,1,66.4,50.64Z" />
	<line class="l-10" class:shown={counter > 10} x1="69.63" y1="50.35" x2="69.63" />
	<path class="l-11" class:shown={counter > 11} d="M82.84,1,73.6,50.64Z" />
	<path class="l-12" class:shown={counter > 12} d="M94.35,4.12,76.15,51.45Z" />
	<path class="l-13" class:shown={counter > 13} d="M105.7,9.1,79.08,52.76Z" />
	<path class="l-14" class:shown={counter > 14} d="M115.84,16,81.63,54.56Z" />
	<path class="l-15" class:shown={counter > 15} d="M124,24,83.14,56.4Z" />
	<path class="l-16" class:shown={counter > 16} d="M131.07,33.26,85,58.44Z" />
	<path class="l-17" class:shown={counter > 17} d="M136.2,43.85l-50,17.25Z" />
	<path class="l-18" class:shown={counter > 18} d="M139.18,55.05,86.72,63.8Z" />
	<line class="l-19" class:shown={counter > 19} x1="86.74" y1="66.95" x2="139.98" y2="66.95" />
</svg>

<style type="scss">
	@import '../../variables.scss';

	svg {
		height: 90%;
		path,
		line {
			fill: none;
			stroke: var(--foreground-color);
			stroke-width: 0.7px;
			stroke-miterlimit: 10;
			opacity: 0;

			&.shown {
				opacity: 1;
			}
		}
	}
</style>
