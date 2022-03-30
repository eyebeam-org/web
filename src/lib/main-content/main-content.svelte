<script>
	// # # # # # # # # # # # # #
	//
	//  MAIN CONTENT
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { dateTimeFormat, longFormatDate, roleToRoleName } from '$lib/global';
	import { fade } from 'svelte/transition';

	// __ COMPONENTS
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from '$lib/person-link/person-link.svelte';
	import VideoPlayer from '$lib/video-player/video-player.svelte';
	import AtEyebeam from '$lib/at-eyebeam/at-eyebeam.svelte';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// *** PROPS
	export let page;

	const BOXED_TYPES = ['program', 'note', 'person'];
	let boxed = BOXED_TYPES.includes(page._type) ? true : false;

	const INTRO_TYPES = ['program', 'note'];
	let showIntroduction = INTRO_TYPES.includes(page._type) ? true : false;

	const TIGHT_TYPES = ['artists', 'event', 'eyebeamIsChanging', 'news', 'press'];
	let tight = TIGHT_TYPES.includes(page._type) ? true : false;

	const PEOPLE_TYPES = ['event', 'videoPost'];
	let showPeople = PEOPLE_TYPES.includes(page._type) ? true : false;
</script>

<div class="main-content" in:fade>
	<div class="article">
		{#if page._type == 'videoPost'}
			<VideoPlayer {page} />
		{:else}
			<div class="header" class:boxed class:tight>
				<div>
					<!-- TITLE -->
					<h1>{page.title}</h1>

					<!-- BADGES -->
					{#if page._type == 'person'}
						<div class="badges">
							{#if page.role}
								<a href={'/people?filter=' + page.role} class="badge">{roleToRoleName[page.role]}</a
								>
							{/if}
							{#if page.groupTags}
								{#each page.groupTags as tag}
									<a href="/people" class="badge">{tag.label}</a>
								{/each}
							{/if}
						</div>
					{/if}

					<!-- QUOTE -->
					{#if page.quote}
						<div class="quote">{page.quote}</div>
					{/if}

					{#if page._type == 'note'}
						<!-- DATE -->
						<div class="date">
							{dateTimeFormat(page._createdAt)}
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
				</div>

				<!-- MAIN IMAGE -->
				{#if !showIntroduction && has(page, 'mainImage.asset')}
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
		{/if}

		<!-- EVENT INFO -->
		{#if page._type === 'event'}
			<div class="event-info">
				{#if page.startDate}
					<div class="dates">
						<h3>Dates</h3>
						{longFormatDate(page.startDate)}
					</div>
				{/if}
				{#if has(page, 'location.content')}
					<div class="location">
						<h3>Location</h3>
						<Blocks blocks={page.location.content} />
					</div>
				{/if}
			</div>
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

		<!-- MAIN TEXT -->
		{#if has(page, 'content.content')}
			<Blocks blocks={page.content.content} />
		{/if}

		<!-- VIDEO POST: TRANSCRIPT -->
		{#if page.transcript && page.transcript.asset && page.transcript.asset._ref}
			<div class="transcript" id="transcript">
				<h2>Transcript</h2>
				<a href={page.transcriptUrl} target="_blank" class="transcript-button">
					Download transcript as .PDF
				</a>
			</div>
		{/if}

		<!-- PEOPLE -->
		{#if showPeople && get(page, 'people', []).length > 0}
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

		<!-- AT EYEBEAM -->
		{#if get(page, 'connectedPosts', []).length > 0}
			<AtEyebeam posts={page.connectedPosts} />
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
		width: $two-third;
		margin-bottom: $HUGE;

		@include screen-size('small') {
			width: 100%;
			margin-bottom: 0;
		}
	}

	.article {
		border: 1px solid var(--foreground-color);
		min-height: 100vh;
		display: inline-block;
		width: 100%;
		padding-bottom: $NORMAL;

		@include screen-size('small') {
			border: unset;
		}

		.header {
			display: flex;
			justify-content: space-between;
			width: 100%;

			@include screen-size('small') {
				display: block;
				margin-bottom: $NORMAL;
			}

			h1 {
				@include text-margins();
				margin-right: $NORMAL;
				margin-top: $NORMAL;
				margin-bottom: $HUGE;
				line-height: 1.1em;

				@include screen-size('small') {
					margin-left: 0;
					margin-bottom: 0;
					margin-bottom: $NORMAL;
				}
			}

			.quote {
				margin: $NORMAL;
			}

			.badges {
				margin-top: $NORMAL;
				margin-bottom: $NORMAL;
				margin-left: $NORMAL;

				@include screen-size('small') {
					margin-left: 0;
				}

				.badge {
					text-decoration: none;
					padding: $button-padding;
					background: var(--foreground-color);
					color: var(--background-color);
					text-transform: capitalize;
					font-size: $font-size-extra-small;
					display: inline-block;
					margin-bottom: 5px;
				}
			}

			.date {
				@include text-margins();
				margin-bottom: $NORMAL;
				@include screen-size('small') {
					margin-left: 0;
					margin-right: 0;
				}
			}

			.authors {
				@include text-margins();
				margin-bottom: $NORMAL;
				@include screen-size('small') {
					margin-left: 0;
					margin-right: 0;
				}
			}

			.image-container {
				max-width: 35%;
				min-width: 35%;
				width: 35%;
				max-height: 100%;
				margin-right: $NORMAL;

				img {
					border: 1px solid var(--foreground-color);
					max-height: 100%;
					max-width: 100%;
				}

				@include screen-size('small') {
					width: 100%;
					margin-right: 0;
					margin: 0;
					max-width: unset;
					min-width: unset;
				}
			}

			&.boxed {
				display: flex;
				height: $HEADER_HEIGHT;
				border-bottom: 1px solid var(--foreground-color);

				@include screen-size('small') {
					height: auto;
					padding-bottom: $LARGE;
				}

				h1 {
					margin-bottom: $NORMAL;
				}
			}

			&.tight {
				h1 {
					margin-bottom: $LARGE;
					@include screen-size('small') {
						margin-bottom: $NORMAL;
					}
				}
			}
		}
	}

	.transcript {
		margin-bottom: $NORMAL;

		.transcript-button {
			padding: $SMALL;
			background: $grey;
			display: inline-block;
			margin-left: $NORMAL;
			cursor: pointer;
			text-decoration: none;

			@include screen-size('small') {
				margin-left: 0;
			}
		}
	}

	.bio {
		margin-top: $NORMAL;
	}

	.website {
		margin-top: $NORMAL;
	}

	.people {
		width: 100%;
		padding: $NORMAL;

		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		h2 {
			margin-bottom: $NORMAL;
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
					color: var(--special-text-color);
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

		@include screen-size('small') {
			margin-left: 0;
		}
	}

	.including {
		margin-top: $NORMAL;
		margin-bottom: $NORMAL;
	}

	.button {
		padding: $NORMAL;
		background: $grey;
		display: inline-block;
		font-size: $font-size-small;
		margin-left: $NORMAL;
		margin-top: $NORMAL;
		text-decoration: none;
		color: var(--special-text-color);

		@include screen-size('small') {
			margin-left: 0;
		}
	}

	.event-info {
		padding: $SMALL;
		border: 1px solid var(--foreground-color);
		font-size: $font-size-small;
		display: inline-block;
		margin-left: $NORMAL;
		min-width: 300px;
		width: 40%;

		@include screen-size('small') {
			margin-left: 0;
			margin-right: 0;
		}

		.dates {
			margin-bottom: $NORMAL;
		}
	}

	:global(.event-info p) {
		margin: 0;
	}

	:global(.event-info h3) {
		margin: 0;
	}
</style>
