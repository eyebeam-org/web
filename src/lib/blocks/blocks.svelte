<script>
	// # # # # # # # # # # # # #
	//
	//  BLOCK RENDERER
	//
	// # # # # # # # # # # # # #

	// __ BLOCKS
	import Text from '$lib/blocks/text.svelte';
	import Image from '$lib/blocks/image.svelte';
	import InvertedBlock from '$lib/blocks/invertedBlock.svelte';
	import LogoBlock from '$lib/blocks/logoBlock.svelte';
	import Embed from '$lib/blocks/embed.svelte';
	import Divider from '$lib/blocks/divider.svelte';
	import Columns from '$lib/blocks/columns.svelte';
	import DonationWidget from '$lib/blocks/donationWidget.svelte';

	// *** PROPS
	export let blocks = [];
	console.log('blocks', blocks);
</script>

{#each blocks as b}
	{#if b._type == 'block'}
		{#if b.style == 'logoBlock'}
			<LogoBlock {b} />
		{:else if b.style == 'invertedBlock'}
			<InvertedBlock {b} />
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
{/each}
