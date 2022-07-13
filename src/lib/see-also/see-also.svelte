<script>
	// # # # # # # # # # # # # #
	//
	//  SEE ALSO
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';
	import get from 'lodash/get.js';

	// __ GRAPHICS
	import ExternalLink from '$lib/graphics/external-link.svelte';

	// *** PROPS
	export let externalLinks = [];
	export let internalLinks = [];

	console.log('externallinks', externalLinks);
	console.log('internlalinks', internalLinks);
</script>

<div class="see-also">
<div class="header">Read more:</div>
	<ul>
		<!-- INTERNAL LINKS -->
		{#if internalLinks}
			{#each internalLinks as link}
				<li>
					<a
						href={'/' + postTypeToCategory[link._type] + '/' + get(link, 'slug.current', '')}
						sveltekit:prefetch>{link.title}</a
					>
				</li>
			{/each}
		{/if}
		<!-- EXTERNAL LINKS -->
		{#if externalLinks}
			{#each externalLinks as link}
				<li>
					<a href={link.linkUrl} target="_blank">{link.linkText} <ExternalLink /></a>
				</li>
			{/each}
		{/if}
	</ul>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.see-also {
		width: 100%;
		background: $grey;
		padding: $NORMAL;
		font-size: $font-size-body;
		border-top: 1px solid var(--foreground-color);
	}

	ul {
		li {
			a {
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
