<script>

	import SearchIcon from '$lib/graphics/large-search.svelte';
	import HeaderBeam from '$lib/graphics/header-beam.svelte';

	import Search from '$lib/search/search.svelte'

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};

</script>
<nav class="menu-content" aria-label="primary" role="navigation">
<div class="section">
<a class="menu-button" href="/about">About</a>
<a class="menu-button" href="/people">Artists</a>
<a class="menu-button" href="/everything">Archive</a>
<a class="menu-button" href="/programs">Programs</a>
<!-- <a class="menu-button" target="_blank" href="https://fold.eyebeam.org/enter">Membership</a> !-->
<a class="menu-button" href="/support">Support</a>
<a class="menu-button" href="#search" on:click={toggleSearch}><span class="search-text">Search</span> <span class="icon"><SearchIcon /></span></a>
</div>
</nav>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}


<style lang="scss">
	@import '../../variables.scss';

		.menu-content {
			width: 100%;
			height: 100%;
			background-color: $white;
			text-align: center;
			font-family: $ALT_FONT;
			.section {
				margin: 0 auto;
				display: flex;
				width: 100%;
				height: 100%;
				flex-flow: column nowrap;
				.section-header {
					margin-bottom: $SMALL;
				}
			.menu-button {
				font-size: $font-size-menu;
				@include screen-size('medium') {
					font-size: $font-size-journal;
				}
				text-transform: uppercase;
				flex-grow: 1;
				display: flex;
				margin: auto;
				align-items: center;
				justify-content: flex-start;
				text-decoration: none;
				text-align: center;
				padding: $SMALL;
				border-bottom: 1px solid var(--special-text-color);
				height: $one-sixth;
				cursor: pointer;
				width: 100%;


				&.active {
					background: var(--special-text-color);
					color: $white;
				}

				&:hover {
					background: var(--special-text-color);
					color: $white;
				}
				.icon {
					margin: $TINY 0 0 $SMALL;
					@include screen-size('medium') {
						display: none;
					}
				}
				&:last-child {
					border-bottom: none;
				}
			}
				}
			}
</style>
