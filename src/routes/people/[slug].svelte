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
	import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let person;
</script>


<svelte:head>
	<title>{person.name}</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar title={person.name}/>

<div class="main-content">
	<div class="inner">
		<div class='header'>

			<div class='column left'>
				<!-- NAME -->
				<h1>{person.name}</h1>
				<!-- ROLES -->
				<!-- QUOTE -->
				{#if person.quote}
					<div class='quote'>{person.quote}</div>
				{/if}
			</div>

			{#if person.mainImage}
				<div class='column right'>
					<!-- MAIN IMAGE -->
					<img
						class='main-image'
						alt={person.name}
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
		<div class='body-content bio'>
			<h3>Bio</h3>
			{@html renderBlockText(person.bio.content)}
		</div>

		<!-- AT EYEBEAM -->
		<div class='body-content website'>
			<h3>At Eyebeam</h3>
		</div>
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

</style>

