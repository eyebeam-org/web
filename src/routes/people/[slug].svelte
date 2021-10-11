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
	import { loadData, renderBlockText, urlFor } from "$lib/sanity.js"
	import has from 'lodash/has.js'
	import { onMount } from 'svelte';

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let person;

	const connectedPosts = loadData("*[people[]._ref == $personId]", {personId: person._id})

	const translatePostType = t => {
        switch(t) {
            case 'program':
                return 'programs'
            case 'person':
                return 'people'
            case 'blogPost': 
                return 'blog'
            case 'event': 
                return 'events'
            default:
                return t
        }
    }

	// onMount(async () => {
	// 	console.log('person._id', person._id)
	// 	connectedPosts = await loadData("*[people[]._ref == $personId]", {personId: person._id})
	// 	// connectedPosts = await loadData("*[_type == 'blogPost']")
    //     console.log('connectedPosts', connectedPosts)
    // })
</script>


<svelte:head>
	<title>{person.title}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={person.title}/>

<div class="main-content">
	<div class="inner">
		<div class='header'>

			<div class='column left'>
				<!-- NAME -->
				<h1>{person.title}</h1>
				<!-- ROLES -->
				<!-- QUOTE -->
				{#if person.quote}
					<div class='quote'>{person.quote}</div>
				{/if}
			</div>

			<!-- MAIN IMAGE -->
			{#if person.mainImage}
				<div class='column right'>
					<img
						class='main-image'
						alt={person.title}
						src={urlFor(person.mainImage)
						.quality(90)
						.saturation(-100)
						.width(400)
						.url()}/>
				</div>
			{/if}
		</div>

		<!-- WEBSITE -->
		{#if person.website}
			<div class='body-content website'>
				<h3>Website</h3>
				<a href={person.website} target=_blank>{person.website}</a>
			</div>
		{/if}

		<!-- BIO -->
		{#if has(person, 'bio.content')}
			<div class='body-content bio'>
				<h3>Bio</h3>
				{@html renderBlockText(person.bio.content)}
			</div>
		{/if}

		<!-- AT EYEBEAM -->
		{#await connectedPosts then connectedPosts}
			{#if connectedPosts.length > 0}
				<div class='body-content at-eyebeam'>
					<h3>At Eyebeam</h3>
					{#each connectedPosts as post}
						<a href={'/' + translatePostType(post._type) +  '/' + post.slug.current} sveltekit:prefetch class='connected-post'>
							<div class='type'>{post._type}</div>
							<div class='title'>{post.title}</div>
						</a>
					{/each}
				</div>
			{/if}
		{/await}
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar updatedAt={person._updatedAt}/>
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

			.header {
				border-bottom: $border-style;
				padding: 15px;
				display: inline-block;
				width: 100%;

				.column {
					&.left {
						padding-right: 15px;
						float: left;
					}
					&.right {
						float: right
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

	img {
		float: right;
	}

	.quote {
		font-style: italic;
	}

	.connected-post {
		margin-bottom: 20px;
		display: block;
		text-decoration: none;

		.type {
			font-size: $font-size-normal;
			text-transform: uppercase;
		}

		.title {
			font-size: $font-size-h2;
		}
	}

</style>

