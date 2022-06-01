<script>
	// # # # # # # # # # # # # #
	//
	//  Bottom Bar
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { dotFormatDate } from '$lib/global.js';

	// __ GRAPHICS
	import HalfBeam from '$lib/graphics/half-beam.svelte';
	import ArrowUp from '$lib/graphics/arrow-up.svelte';

	// __ PROPS
	export let updatedAt = false;
	let scrollTop

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.tabIndex = 0;
		document.getElementsByClassName('main-content')[0].focus()
	};
</script>

<div class="bottom-bar">
	{#if updatedAt}
		<div class="last-updated">
			<span class="icon"><HalfBeam /></span> Last updated: {dotFormatDate(updatedAt)}
		</div>
	{/if}
	<a href="#" class="back-to-top" on:click={backToTop}>
		Back to top <span class="icon"><ArrowUp /></span>
	</a>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.bottom-bar {
		border-left: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		border-bottom: 1px solid var(--foreground-color);
		width: 100%;
		display: inline-block;
		padding: $SMALL;
		height: 50px;

		@include screen-size('small') {
			display: none;
		}

		.last-updated {
			float: left;
			.icon {
				margin-right: $TINY;
			}
		}

		.back-to-top {
			float: right;
			cursor: pointer;

			.icon {
				margin-left: $TINY;
			}
		}
	}
</style>
