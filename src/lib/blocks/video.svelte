<script>
	// # # # # # # # # # # # # #
	//
	//  VIDEO
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { loadData, urlFor } from '$lib/sanity.js';
	import get from 'lodash/get.js';

	// __ GRAPHICS
	import PlayArrow from '$lib/graphics/play-arrow.svelte';

	// *** PROPS
	export let b = {};

	const videoPost = loadData('*[_id == $id][0]', { id: b.videoPost._ref });
</script>

{#await videoPost then videoPost}
	<a href={'/videos/' + get(videoPost, 'slug.current')} class="video-block">
		<div class="embed">
			{#if videoPost.mainImage}
				<img
					alt={videoPost.title}
					src={urlFor(videoPost.mainImage).quality(90).saturation(-100).width(400).url()}
				/>
			{/if}
			<div class="icon">
				<PlayArrow />
			</div>
			<div class="title">
				{videoPost.title}
				{#if videoPost.runtime}({videoPost.runtime}){/if}
			</div>
		</div>
	</a>
{/await}

<style lang="scss">
	@import '../../variables.scss';

	.video-block {
		text-decoration: none;
		width: 100%;
		position: relative;
		display: block;
		margin-bottom: $small-margin;

		img {
			display: block;
			width: 100%;
			height: auto;
			height: 100%;
			object-fit: cover;
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
		}
	}
</style>
