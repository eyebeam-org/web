<script>
	// # # # # # # # # # # # # #
	//
	// Loading...
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	// __ GRAPHICS
	import AnimatedBeam from '$lib/graphics/animated-beam.svelte';
	import Logo from '$lib/graphics/logo.svelte';
</script>

<div class="loading" out:fade={{ duration: 300, easing: quadOut }}>
	<!-- LOGO -->
	<div class="logo">
		<div class="beams">
			<AnimatedBeam />
		</div>
		<div class="wordmark">
			<Logo />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		opacity: 1;

		.logo {
			.beams {
				margin-bottom: $SMALL;
				width: 260px;
			}

			.wordmark {
				margin-bottom: $SMALL;
				width: 260px;

				svg {
					width: 100%;
				}
			}
		}
	}
</style>
