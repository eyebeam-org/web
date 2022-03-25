<script>
	// # # # # # # # # # # # # #
	//
	//  Single Person Page
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import { postTypeToName, postTypeToCategory, roleToRoleName } from '$lib/global.js';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// __ COMPONENTS
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let page;

	let toc = [];

	if (page.website) {
		toc.push({
			title: 'Website',
			link: '#website'
		});
	}

	if (has(page, 'bio.content')) {
		toc.push({
			title: 'Bio',
			link: '#bio'
		});
	}

	if (page.connectedPosts.length > 0) {
		toc.push({
			title: 'At Eyebeam',
			link: '#at-eyebeam'
		});
	}

	// Set sidebar content
	import { sidebarTitle, sidebarToC } from '$lib/stores.js';
	$: sidebarTitle.set(page.title);
	$: sidebarToC.set(toc);
</script>

<!-- METADATA -->
<Metadata {page} />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="header">
			<div class="column left" class:full={!page.mainImage}>
				<!-- NAME -->
				<h1>{page.title}</h1>
				<!-- BADGES -->
				<div class="badges">
					{#if page.role}
						<a href={'/people#' + page.role} class="badge">{roleToRoleName[page.role]}</a>
					{/if}
					{#if page.groupTags}
						{#each page.groupTags as tag}
							<a href="/people" class="badge">{tag.label}</a>
						{/each}
					{/if}
				</div>

				<!-- QUOTE -->
				{#if page.quote}
					<div class="quote">{page.quote}</div>
				{/if}
			</div>

			<!-- MAIN IMAGE -->
			{#if page.mainImage}
				<div class="column right">
					<figure class="image-container">
						<img
							class="main-image"
							alt={page.title}
							src={urlFor(page.mainImage).quality(90).saturation(-100).width(400).url()}
						/>
						{#if has(page, 'mainImage.caption.content')}
							<figcaption>
								<Blocks blocks={page.mainImage.caption.content} />
							</figcaption>
						{/if}
					</figure>
				</div>
			{/if}
		</div>

		<div class="block-text info">
			<!-- WEBSITE -->
			{#if page.website}
				<div class="website" id="website">
					<h3>Website</h3>
					<p><a href={page.website} target="_blank">{page.website} <ExternalLink /></a></p>
				</div>
			{/if}

			<!-- BIO -->
			{#if has(page, 'bio.content')}
				<div class="bio" id="bio">
					<h3>Bio</h3>
					<Blocks blocks={page.bio.content} />
				</div>
			{/if}
		</div>

		<!-- AT EYEBEAM -->
		{#if page.connectedPosts.length > 0}
			<div class="at-eyebeam" id="at-eyebeam">
				<h2>At Eyebeam</h2>
				{#each page.connectedPosts as post}
					<a
						class="connected-post"
						href={'/' + postTypeToCategory[post._type] + '/' + post.slug.current}
						sveltekit:prefetch
					>
						<div class="image">
							{#if post.mainImage}
								<img
									alt={post.title}
									src={urlFor(post.mainImage).quality(90).saturation(-100).width(400).url()}
								/>
							{:else}
								<div class="big-title">{post.title}</div>
							{/if}
						</div>
						<div class="text">
							<span class="type">{postTypeToName[post._type]}</span>
							<span class="title">{post.title}</span>
						</div>
					</a>
				{/each}
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

		.inner {
			border: 1px solid var(--foreground-color);
			min-height: 100vh;
			display: inline-block;
			min-width: 100%;

			@include screen-size('small') {
				border: unset;
				min-height: unset;
			}

			.header {
				border-bottom: 1px solid var(--foreground-color);
				padding-left: 15px;
				padding-right: 15px;
				width: 100%;
				height: $HEADER_HEIGHT;
				display: flex;
				justify-content: space-between;

				@include screen-size('small') {
					flex-wrap: wrap;
					height: auto;
					padding-left: 0;
					padding-right: 0;
				}

				.column {
					max-width: 50%;
					&.left {
						padding-right: 15px;
					}

					&.full {
						max-width: 100%;
					}

					@include screen-size('small') {
						max-width: unset;
						width: 100%;
					}
				}
			}

			.body-content {
				padding: 15px;
			}
		}

		.main-image {
			width: 300px;
		}
	}

	.quote {
		font-style: italic;
		font-size: $font-size-body;
	}

	.connected-post {
		margin-bottom: 20px;
		display: block;
		text-decoration: none;
		width: calc(50% - 10px);
		float: left;
		overflow: hidden;
		font-size: $font-size-small;

		@include screen-size('small') {
			width: 100%;
			margin-bottom: $large-margin;
		}

		&:nth-child(even) {
			margin-right: 20px;
		}

		.text {
			margin-top: 5px;

			.type {
				font-size: $font-size-extra-small;
				letter-spacing: 0.5px;
				text-transform: uppercase;
				margin-right: 20px;
			}
		}

		.image {
			border: 1px solid var(--foreground-color);
			max-height: 400px;
			width: 100%;
			line-height: 0;
			overflow: hidden;

			img {
				min-height: 200px;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.big-title {
				font-size: $font-size-h2;
				width: 100%;
				padding: $small-margin;
				min-height: 200px;
				line-height: 1.2em;
			}

			&:hover {
				background: $grey;
			}
		}
	}

	.at-eyebeam {
		padding: $small-margin;
		border-top: 1px solid var(--foreground-color);
		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		h2 {
			margin-bottom: $small-margin;
		}
	}

	.image-container {
		img {
			display: block;
			border: 1px solid var(--foreground-color);
		}

		figcaption {
			display: block;
			margin-top: 10px;
		}
	}

	.badges {
		margin-top: $small-margin;
		margin-bottom: $small-margin;

		.badge {
			text-decoration: none;
			padding: $button-padding;
			background: var(--foreground-color);
			color: var(--background-color);
			text-transform: capitalize;
			font-size: $font-size-extra-small;
			display: inline-block;
		}
	}

	.info {
		padding: $small-margin;

		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		.website {
			margin-bottom: $vertical-space;
		}
	}
</style>
