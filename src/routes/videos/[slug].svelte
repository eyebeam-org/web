<script>
	// # # # # # # # # # # # # #
	//
	//  Single video
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import has from 'lodash/has.js';
	import { urlFor } from '$lib/sanity.js';
	import getVideoId from 'get-video-id';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ GRAPHICS
	import PlayArrow from '$lib/graphics/play-arrow.svelte';

	// __ PROPS
	export let page;

	let videoActive = false;

	const toggleVideo = () => {
		videoActive = !videoActive;
	};

	const toc = [
		{
			link: '#about',
			title: 'About'
		},
		{
			link: '#transcript',
			title: 'Transcript'
		},
		{
			link: '#people',
			title: 'People'
		}
	];

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {page} />
<!-- MAIN CONTENT  -->
<div class="main-content">
	<div class="article">
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

		<!-- MAIN TEXT -->
		{#if has(page, 'content.content')}
			<div class="block-text" id="about">
				<h2>About</h2>
				<Blocks blocks={page.content.content} />
			</div>
		{/if}

		<!-- TRANSCRIPT -->
		{#if page.transcript && page.transcript.asset && page.transcript.asset._ref}
			<div class="transcript" id="transcript">
				<h2>Transcript</h2>
				<a href={page.transcriptUrl} target="_blank" class="transcript-button">
					Download transcript as .PDF
				</a>
			</div>
		{/if}

		<!-- PEOPLE -->
		{#if page.people && Array.isArray(page.people)}
			<div class="people" id="people">
				<h2>People</h2>
				<div class="people-inner">
					{#each page.people as person}
						<a class="people-link" href={'/people/' + person.slug.current} sveltekit:prefetch>
							<div class="image">
								{#if person.mainImage}
									<img
										alt={person.title}
										src={urlFor(person.mainImage).quality(90).saturation(-100).width(400).url()}
									/>
								{/if}
							</div>
							<div class="text">
								<span class="title">{person.title}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<!-- SEE ALSO -->
		{#if page.internalLinks || page.externalLinks}
			<SeeAlso externalLinks={page.externalLinks} internalLinks={page.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={page._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		@include screen-size('small') {
			width: 100%;
		}

		.article {
			border: 1px solid var(--foreground-color);
			min-height: 100vh;
		}

		.main-image {
			width: 300px;
		}
	}

	img {
		float: right;
	}

	.video-block {
		text-decoration: none;
		width: 100%;
		position: relative;
		display: block;
		margin-bottom: $small-margin;
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

	.transcript {
		margin-bottom: $small-margin;

		.transcript-button {
			padding: $extra-small-margin;
			background: $grey;
			display: inline-block;
			margin-left: $small-margin;
			cursor: pointer;
			text-decoration: none;
		}
	}

	.people {
		width: 100%;
		padding: $small-margin;

		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		h2 {
			margin-bottom: $small-margin;
			padding-left: 0;
			padding-right: 0;
			margin-left: 0;
		}

		.people-inner {
			display: inline-block;
			width: 100%;

			.people-link {
				margin-bottom: 20px;
				display: block;
				text-decoration: none;
				width: calc(50% - 8px);
				overflow: hidden;
				float: left;

				@include screen-size('small') {
					width: 100%;
				}

				&:nth-child(odd) {
					margin-right: 15px;
				}

				.title {
					font-size: $font-size-body;
					background: $grey;
					margin-top: 10px;
					display: inline-block;
					color: $black;
				}

				.image {
					border: 1px solid var(--foreground-color);
					width: 100%;
					line-height: 0;

					img {
						width: 100%;
						min-height: 200px;
					}
				}
			}
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
