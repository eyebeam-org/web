<script>
	// # # # # # # # # # # # # #
	//
	//  Block Renderer
	//
	// # # # # # # # # # # # # #

	// This component parses rich text edited in the sanity CMS
	// and pass it on to appropriate sub-components to be rendered.
	// ==> https://github.com/portabletext/portabletext

	// __ BLOCKS
	import Text from '$lib/blocks/text.svelte';
	import HTML from '$lib/blocks/html.svelte';
	import Image from '$lib/blocks/image.svelte';
	import InvertedBlock from '$lib/blocks/invertedBlock.svelte';
	import LogoBlock from '$lib/blocks/logoBlock.svelte';
	import Embed from '$lib/blocks/embed.svelte';
	import Divider from '$lib/blocks/divider.svelte';
	import Columns from '$lib/blocks/columns.svelte';
	import DonationWidget from '$lib/blocks/donationWidget.svelte';
	import ApplicationButton from '$lib/blocks/applicationButton.svelte';
	import Faq from '$lib/blocks/faq.svelte';
	import Video from '$lib/blocks/video.svelte';
	import PersonList from '$lib/blocks/personList.svelte';

	// *** PROPS
	export let blocks = [];
</script>

{#each blocks as b}
	{#if b._type == 'block'}
		{#if b.style == 'logoBlock'}
			<LogoBlock {b} />
		{:else if b.style == 'invertedBlock'}
			<InvertedBlock {b} />
		{:else if b.style == 'html'}
			<HTML {b} />
		{:else}
			<Text {b} />
		{/if}
	{/if}
	{#if b._type == 'image'}
		<Image {b} />
	{/if}
	{#if b._type == 'embedBlock'}
		<Embed {b} />
	{/if}
	{#if b._type == 'dividerBlock'}
		<Divider {b} />
	{/if}
	{#if b._type == 'columnsBlock'}
		<Columns {b} />
	{/if}
	{#if b._type == 'donationWidget'}
		<DonationWidget {b} />
	{/if}
	{#if b._type == 'applicationButton'}
		<ApplicationButton {b} />
	{/if}
	{#if b._type == 'faq'}
		<Faq {b} />
	{/if}
	{#if b._type == 'videoBlock'}
		<Video {b} />
	{/if}
	{#if b._type == 'personList'}
		<PersonList {b} />
	{/if}
{/each}
