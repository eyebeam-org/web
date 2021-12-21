<script>
	// # # # # # # # # # # # # #
	//
	//  MAIN CONTENT
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import { longFormatDate } from '$lib/global';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// *** PROPS
	export let page;
	console.log('MAIN CONTENT', page);
	console.log('page._type', page._type);

	const BOXED_TYPES = ['program', 'note'];
	let boxed = BOXED_TYPES.includes(page._type) ? true : false;

	const INTRO_TYPES = ['program', 'note'];
	let showIntroduction = INTRO_TYPES.includes(page._type) ? true : false;

	const TIGHT_TYPES = ['artists', 'event', 'eyebeamIsChanging', 'news', 'press'];
	let tight = TIGHT_TYPES.includes(page._type) ? true : false;

	const PEOPLE_TYPES = ['event'];
	let showPeople = PEOPLE_TYPES.includes(page._type) ? true : false;
</script>

<div class="main-content">
	<div class="article">
		<div class="header" class:boxed class:tight>
			<!-- TITLE -->
			<h1>{page.title}</h1>

			{#if page._type == 'note'}
				<!-- DATE -->
				<div class="date">
					{longFormatDate(page._createdAt)}
				</div>
				<!-- AUTHOR(S) -->
				{#if page.people && page.people.length > 0}
					<div class="authors">
						by {#each page.people as person}
							<PersonLink {person} />
						{/each}
					</div>
				{/if}
			{/if}

			<!-- INTRODUCTION -->
			{#if showIntroduction && has(page, 'introduction.content', [])}
				<div><Blocks blocks={page.introduction.content} /></div>
			{/if}

			<!-- MAIN IMAGE -->
			{#if !showIntroduction && page.mainImage}
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
			{/if}
		</div>

		<!-- EVENT SPECIFIC -->
		{#if page._type === 'event'}
			<div class="event-info">TODO:EVENT INFO</div>
		{/if}

		<!-- PRESS & NEWS SPECIFIC -->
		{#if page._type === 'press' || page._type === 'news'}
			<!-- SOURCE -->
			{#if page.source}
				<div class="published-by">Published by {page.source}</div>
			{/if}
			<!-- DATE -->
			<div class="date">{longFormatDate(page._createdAt)}</div>
			<!-- AUTHOR -->
			{#if page.author}
				<div class="author">Author</div>
			{/if}
			<!-- PEOPLE -->
			{#if page.people && page.people.length > 0}
				<div class="including">
					Including:
					{#each page.people as person}
						<PersonLink {person} />
					{/each}
				</div>
			{/if}
			<!-- PDF DOWNLOAD -->
			{#if page.pdfFile}
				<a href="" class="button download-pdf">Download as PDF</a>
			{/if}
			<!-- ORIGINAL LINK -->
			{#if page.externalLink}
				<a href={page.externalLink} class="button read-original" target="_blank"
					>Read original article on {page.source} <ExternalLink /></a
				>
			{/if}
		{/if}

		<!-- MAIN TEXT -->
		{#if has(page, 'content.content')}
			<Blocks blocks={page.content.content} />
		{/if}

		<!-- PEOPLE -->
		{#if showPeople && page.people && Array.isArray(page.people)}
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
		margin-bottom: 120px;

		@include screen-size('small') {
			width: 100%;
		}
	}

	.article {
		border: $border-style;
		min-height: 100vh;
		display: inline-block;
		width: 100%;

		@include screen-size('small') {
			border: unset;
		}

		.header {
			display: flex;
			justify-content: space-between;
			width: 100%;

			@include screen-size('small') {
				display: block;
			}

			h1 {
				@include text-margins();
				margin-bottom: 160px;
				line-height: 1.1em;
				@include screen-size('small') {
					margin-left: 0;
				}
			}

			.date {
				@include text-margins();
				margin-bottom: $small-margin;
			}

			.authors {
				@include text-margins();
				margin-bottom: $small-margin;
			}

			.image-container {
				width: 40%;
				max-height: 100%;
				margin-right: $small-margin;
				img {
					border: $border-style;
					max-height: 100%;
					max-width: 100%;
				}

				@include screen-size('small') {
					width: 100%;
				}
			}

			&.boxed {
				display: block;
				height: $HEADER_HEIGHT;
				border-bottom: $border-style;

				@include screen-size('small') {
					height: auto;
					padding-bottom: $large-margin;
				}

				h1 {
					margin-bottom: $small-margin;
				}
			}

			&.tight {
				h1 {
					margin-bottom: 60px;
				}
			}
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
				}

				.image {
					border: $border-style;
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

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}

	.published-by,
	.date,
	.author,
	.including {
		font-style: italic;
		@include text-margins();
		font-size: $font-size-body;
	}

	.including {
		margin-top: $small-margin;
		margin-bottom: $small-margin;
	}

	.button {
		padding: $small-margin;
		background: $grey;
		display: inline-block;
		font-size: $font-size-small;
		margin-left: $small-margin;
		text-decoration: none;

		&:hover {
			background: $black;
			color: $white;
		}
	}
</style>
