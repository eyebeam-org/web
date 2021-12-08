<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/projects/${page.params.slug}.json`);
		console.log('ASFASDF', res);
		if (res.ok) {
			const project = await res.json();
			return {
				props: { project }
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
	//  Single project
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { urlFor } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import get from 'lodash/get.js';
	import { parseToc } from '$lib/global.js';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import Blocks from '$lib/blocks/blocks.svelte';
	import SeeAlso from '$lib/see-also/see-also.svelte';

	// __ PROPS
	export let project;

	let toc = parseToc(get(project, 'content.content'));
	toc.push({ title: 'People', link: '#people' });

	// __ Set currentPage
	currentPage.set({ slug: get(project, 'slug.current', ''), title: project.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar {toc} title={project.title} />

<div class="main-content">
	<div class="inner">
		<div>
			<!-- TITLE -->
			<h1>{project.title}</h1>

			<!-- MAIN IMAGE -->
			{#if project.mainImage}
				<figure class="image-container">
					<img
						class="main-image"
						alt={project.title}
						src={urlFor(project.mainImage).quality(90).saturation(-100).width(400).url()}
					/>
					{#if has(project, 'mainImage.caption.content')}
						<figcaption>
							<Blocks blocks={project.mainImage.caption.content} />
						</figcaption>
					{/if}
				</figure>
			{/if}

			<!-- MAIN TEXT -->
			{#if has(project, 'content.content')}
				<div class="block-text">
					<Blocks blocks={project.content.content} />
				</div>
			{/if}
		</div>

		<!-- PEOPLE -->
		{#if project.people && project.people.length > 0}
			<div class="people" id="people">
				<h2>People</h2>
				<div class="people-inner">
					{#each project.people as person}
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
		{#if project.internalLinks || project.externalLinks}
			<SeeAlso externalLinks={project.externalLinks} internalLinks={project.internalLinks} />
		{/if}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={project._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: $two-third;

		.main-image {
			width: 300px;
		}

		.inner {
			border: $border-style;
			min-height: 100vh;
			display: inline-block;
			min-width: 100%;

			h1 {
				padding: $small-margin;
			}

			.body-content {
				padding: $small-margin;
			}
		}
	}

	.people {
		width: 100%;
		padding: $small-margin;

		h2 {
			margin-bottom: $small-margin;
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
					min-height: 200px;
					width: 100%;
					line-height: 0;

					img {
						width: 100%;
					}
				}
			}
		}
	}

	.image-container {
		max-width: 50%;
		max-height: 100%;
		float: right;
		margin-right: $small-margin;
		img {
			border: $border-style;
			max-height: 100%;
			max-width: 100%;
		}
	}
</style>
