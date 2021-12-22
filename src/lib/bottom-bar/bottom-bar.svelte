<script>
	// # # # # # # # # # # # # #
	//
	//  Bottom bar
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { dotFormatDate } from '$lib/global.js';

	// __ GRAPHICS
	import HalfBeam from '$lib/graphics/half-beam.svelte';
	import ArrowUp from '$lib/graphics/arrow-up.svelte';

	// __ PROPS
	export let updatedAt = false;

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="bottom-bar">
	{#if updatedAt}
		<div class="last-updated">
			<span class="icon"><HalfBeam /></span> Last updated: {dotFormatDate(updatedAt)}
		</div>
	{/if}
	<div class="back-to-top" on:click={backToTop}>
		Back to top <span class="icon"><ArrowUp /></span>
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.bottom-bar {
		border-left: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		width: 100%;
		display: inline-block;
		padding: 15px;
		height: 50px;

		@include screen-size('small') {
			display: none;
		}

		.last-updated {
			float: left;
			.icon {
				margin-right: 10px;
			}
		}

		.back-to-top {
			float: right;
			cursor: pointer;

			.icon {
				margin-left: 5px;
			}
		}
	}
</style>
