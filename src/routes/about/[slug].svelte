<script context="module">
	export const load = async ({ page, fetch, session, stuff }) => {
		const res = await fetch(`/about/${page.params.slug}.json`);
		if (res.ok) {
			const aboutPage = await res.json();
			return {
				props: { aboutPage }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	import { renderBlockText, urlFor } from "$lib/sanity.js"

    // *** PROPS
	export let aboutPage;
    
    console.log(aboutPage)
</script>


<svelte:head>
	<title>{aboutPage.title}</title>
</svelte:head>

<!-- TITLE -->
<h1>{aboutPage.title}</h1>

<!-- MAIN IMAGE -->
<img
	alt={aboutPage.title}
	src={urlFor(aboutPage.mainImage)
	.quality(90)
	.width(200)
	.url()}/>

<!-- MAIN TEXT -->
<div>{@html renderBlockText(aboutPage.content.content)}</div>