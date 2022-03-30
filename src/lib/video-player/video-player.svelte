<script>
	// # # # # # # # # # # # # #
	//
	//  Video Player
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import getVideoId from 'get-video-id';

	// __ GRAPHICS
	import PlayArrow from '$lib/graphics/play-arrow.svelte';

	// __ PROPS
	export let page;

	let videoActive = false;

	const toggleVideo = () => {
		videoActive = !videoActive;
	};
</script>

<!-- VIDEO -->
<div class="video-block" on:click={toggleVideo}>
	<div class="embed">
		{#if videoActive}
			<div class="inner">
				{#if page.url.includes('youtube')}
					<iframe
						width="720"
						height="480"
						src="https://www.youtube.com/embed/{getVideoId(page.url).id}?autoplay=1"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				{/if}
				{#if page.url.includes('vimeo')}
					<iframe
						width="720"
						height="480"
						src="https://player.vimeo.com/video/{getVideoId(page.url).id}?autoplay=1"
						frameborder="0"
						color="#ffffff"
						allow="autoplay; fullscreen"
						allowfullscreen
					/>
				{/if}
			</div>
		{:else}
			<!-- MAIN IMAGE -->
			{#if page.mainImage}
				<img
					alt={page.title}
					src={urlFor(page.mainImage).quality(90).saturation(-100).width(400).url()}
				/>
			{/if}
			<div class="icon">
				<PlayArrow />
			</div>
			<div class="title">
				{page.title}
				{#if page.runtime}({page.runtime}){/if}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.video-block {
		text-decoration: none;
		width: 100%;
		position: relative;
		display: block;
		margin-bottom: $NORMAL;
		cursor: pointer;
		background: var(--foreground-color);

		img {
			display: block;
			width: 100%;
			height: 100%;
		}

		.title {
			display: block;
			position: absolute;
			top: 10px;
			left: 90px;
			z-index: 10;
			color: $white;
			font-size: $font-size-h2;
			line-height: 1.2em;

			@include screen-size('small') {
				font-size: $font-size-body;
			}
		}

		.icon {
			position: absolute;
			top: 10px;
			left: 10px;
			z-index: 100;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			background: $white;
			color: $white;
			line-height: 1.2em;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 7px;
		}
	}

	.embed {
		color: $white;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		.inner {
			width: 100%;
			position: relative;
			padding-bottom: 56.25%;
			height: 0;
			overflow: hidden;
			max-width: 100%;

			iframe {
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
