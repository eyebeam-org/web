<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/people/${page.params.slug}.json`);
		if (res.ok) {
			const person = await res.json();
			return {
				props: { person }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  Person
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { loadData, urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import { postTypeToName, postTypeToCategory, roleToRoleName } from '$lib/global.js';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import Metadata from '$lib/metadata/metadata.svelte';

	// __ PROPS
	export let person;

	// *[$id in people[]._ref]
	const connectedPosts = loadData(
		'*[$personId in people[]._ref || $personId in advisors[]._ref || $personId in fellows[]._ref]',
		{ personId: person._id }
	);
</script>

<!-- METADATA -->
<Metadata post={person} />
<!-- SIDEBAR -->
<Sidebar title={person.title} />
<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">
		<div class="header">
			<div class="column left">
				<!-- NAME -->
				<h1>{person.title}</h1>
				<!-- BADGES -->
				<div class="badges">
					{#if person.role}
						<a href={'/people#' + person.role} class="badge">{roleToRoleName[person.role]}</a>
					{/if}
					{#if person.groupTags}
						{#each person.groupTags as tag}
							<a href="/people" class="badge">{tag.label}</a>
						{/each}
					{/if}
				</div>

				<!-- QUOTE -->
				{#if person.quote}
					<div class="quote">{person.quote}</div>
				{/if}
			</div>

			<!-- MAIN IMAGE -->
			{#if person.mainImage}
				<div class="column right">
					<figure class="image-container">
						<img
							class="main-image"
							alt={person.title}
							src={urlFor(person.mainImage).quality(90).saturation(-100).width(400).url()}
						/>
						{#if has(person, 'mainImage.caption.content')}
							<figcaption>
								<Blocks blocks={person.mainImage.caption.content} />
							</figcaption>
						{/if}
					</figure>
				</div>
			{/if}
		</div>

		<div class="block-text info">
			<!-- WEBSITE -->
			{#if person.website}
				<div class="website" id="website">
					<h3>Website</h3>
					<p><a href={person.website} target="_blank">{person.website} <ExternalLink /></a></p>
				</div>
			{/if}

			<!-- BIO -->
			{#if has(person, 'bio.content')}
				<div class="bio" id="bio">
					<h3>Bio</h3>
					<Blocks blocks={person.bio.content} />
				</div>
			{/if}
		</div>

		<!-- AT EYEBEAM -->
		{#await connectedPosts then connectedPosts}
			{#if connectedPosts.length > 0}
				<div class="at-eyebeam" id="at-eyebeam">
					<h2>At Eyebeam</h2>
					{#each connectedPosts as post}
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
		{/await}

		<!-- SEE ALSO -->
		{#if person.internalLinks || person.externalLinks}
			<SeeAlso externalLinks={person.externalLinks} internalLinks={person.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={person._updatedAt} />
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

			.title {
			}
		}

		.image {
			border: 1px solid var(--foreground-color);
			max-height: 300px;
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
