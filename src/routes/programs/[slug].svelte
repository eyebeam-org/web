<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/programs/${page.params.slug}.json`);
		if (res.ok) {
			const program = await res.json();
			return {
				props: { program }
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
	//  Single program
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { onDestroy } from 'svelte';
	import { renderBlockText, urlFor } from '$lib/sanity.js';
	import get from 'lodash/get.js';
	import has from 'lodash/has.js';
	import { longFormatDate } from '$lib/global';

	// __ STORES
	import { currentPage } from '$lib/stores.js';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';
	import PersonLink from "$lib/person-link/person-link.svelte"

	// __ PROPS
	export let program;
	console.log('program', program)

	// __ Set currentPage
	currentPage.set({ slug: get(program, 'slug.current', ''), title: program.title });

	onDestroy(() => {
		currentPage.set(null);
	});
</script>

<svelte:head>
	<title>{program.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar />

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class="inner">

		<!-- HEADER -->
		<div class='header'>
			<!-- TITLE -->
			<h1>{program.title}</h1>
			<!-- INTRODUCTION -->
			{#if has(program, 'introduction.content', [])}
				<div>{@html renderBlockText(program.introduction.content)}</div>
			{/if}
		</div>

		<!-- APPLICATION BANNER -->
		{#if program.applicationsOpen}
			<div class='application-banner'>
				<div class='column first'>
					<!-- HEADER -->
					<div class='top'>
						<div class='col first'>
							<div class='circle'/>
						</div>
						<div class='col second'>
							<div class='headline'>APPLICATIONS ARE OPEN</div>
							{#if program.applicationEndDate}
								<div class='date'>
									Due by {longFormatDate(program.applicationEndDate)}
								</div>
							{/if}
						</div>
					</div>

					<!-- TEXT -->
					{#if has(program, 'applicationText.content', [])}
						<div class='text'>
							{@html renderBlockText(program.applicationText.content)}
						</div>
					{/if}
				</div>

				<div class='column second'>
					<!-- BUTTON -->
					<div class='apply-now'>Apply Now</div>	
				</div>

			</div>
		{/if}

		<!-- MAIN IMAGE -->
		{#if program.mainImage}
			<div class='image-container'>
				<!-- IMAGE -->
				<img
					alt={program.title}
					src={urlFor(program.mainImage).quality(90).saturation(-100).width(900).url()}
				/>
				<!-- CAPTION -->
				{#if has(program, 'mainImage.caption.content')}
					<figcaption>{@html renderBlockText(program.mainImage.caption.content)}</figcaption>
				{/if}
			</div>
		{/if}

		<!-- MAIN TEXT -->
		{#if has(program, 'content.content', [])}
			<div class='main-text'>
				{@html renderBlockText(program.content.content)}
			</div>
		{/if}

		<!-- STORIES -->
		<div class='stories'>
			<h3>Stories</h3>
		</div>

		<!-- FAQ -->
		{#if program.faq && Array.isArray(program.faq)}
			<div class='faq'>
				<h3>FAQ</h3>
				<div class='faq-inner'>
					{#each program.faq as item}
						<div class='faq-item'>
							<div class='question'>{item.question}</div>
							{#if has(item, 'answer.content', [])}
								<div class='answer'>
									{@html renderBlockText(item.answer.content)}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- SUPPORT -->
		{#if has(program, 'supportText.content', [])}
			<div class='support'>
				<h3>Support</h3>
				{@html renderBlockText(program.supportText.content)}
			</div>
		{/if}

		<!-- CURRENT FELLOWS -->
		{#if program.fellows && Array.isArray(program.fellows)}
			<div class='fellows'>
				<h3>Current Fellows</h3>
				<ul>
					{#each program.fellows as person}
						<li><PersonLink {person}/></li>
					{/each}
				</ul>
			</div>
		{/if}


		<!-- PAST FELLOWS -->
		<!-- <div class='fellows'>
			<h3>Past Fellows</h3>
			<ul>
				{#each program.pastFellows as fellowObject}
					<li><PersonLink person={fellowObject.person}/> ({fellowObject.year})</li>
				{/each}
			</ul>
		</div> -->

		<!-- ADVISORS -->
		{#if program.advisors && Array.isArray(program.advisors)}
			<div class='fellows'>
				<h3>Advisors</h3>
				<ul>
					{#each program.advisors as person}
						<li><PersonLink {person}/></li>
					{/each}
				</ul>
			</div>
		{/if}
	
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={program._updatedAt} />
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			border: $border-style;
			min-height: 100vh;
		}

		.main-image {
			width: 300px;
		}
	}

	.application-banner {
		width: 100%;
		background: $black;
		height: 160px;
		padding: 15px;
		color: $white;
		display: flex;

		.column {
			height: 100%;

			&.first {
				width: 80%; 
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			&.second {
				width: 20%; 
			}
		}

		.top {
			display: flex;
			font-size: $font-size-small;

			.col {
				&.second {
					margin-left: 10px;
				}
			}
		}

		.circle {
			width: 15px;
			height: 15px;
			background: $white;
			border-radius: 50%;
			float: left;
		}

		.date {
			font-style: italic;
		}

		.text {
			padding-right: 40px;
		}

		.apply-now {
			border: $border-style-inverted;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			user-select: none;

			&:hover {
				background: $white;
				color: $black;
			}
		}
	}

	.header {
		border-bottom: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.image-container {
		display: inline-block;
		width: 100%;
		min-height: 400px;

		img {
			width: 100%;
		}

		figcaption {
			margin: 15px;
		}
	}

	.main-text {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.stories {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.faq {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.support {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}

	.fellows {
		border-top: $border-style;
		display: inline-block;
		width: 100%;
		padding: 15px;
		min-height: 300px;
	}
	
	ul {
		padding: 0;
		li {
			list-style: none;
			margin-bottom: 5px;
		}
	}

	.faq-inner {
		margin-top: 1em;
		.faq-item {
			.question {
				font-weight: bold;
			}
		}
	}

</style>
