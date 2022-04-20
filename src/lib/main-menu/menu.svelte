<script>

	import SearchIcon from '$lib/graphics/search.svelte';

	import Search from '$lib/search/search.svelte'

	let searchActive = false;
	const toggleSearch = () => {
		searchActive = !searchActive;
	};

</script>
<div class="menu-content">
<div class="section">
<a class="menu-button" href="/programs">Programs</a>
<a class="menu-button" href="/events">Events</a>
<a class="menu-button" href="/projects">Projects</a>
<a class="menu-button" href="/press">Press</a>
<a class="menu-button" href="/notes">Notes</a>
<a class="menu-button" href="/journal">Journal</a>
<a class="menu-button" href="/people">People</a>
<a class="menu-button" href="/about">About</a>
<a class="menu-button" href="/everything">Everything</a>
<a class="menu-button" on:click={toggleSearch}><span class="icon"><SearchIcon /></span> <span class="search-text">Search</span></a>
</div>
</div>

{#if searchActive}
	<Search on:close={toggleSearch} />
{/if}


<style lang="scss">
	@import '../../variables.scss';
		.menu-content {
			width: 100%;
			padding-top: $NORMAL;
			text-align: center;

			.section {
				margin: 0 auto;
				padding-top: $NORMAL;

				.section-header {
					margin-bottom: $SMALL;
				}
			.menu-button {
				text-decoration: none;
				padding: $button-padding;
				display: inline-block;
				border: 1px solid var(--special-text-color);
				cursor: pointer;

				&:first-child {
					border-left: 1px solid var(--special-text-color);
				}

				&.active {
					background: var(--special-text-color);
					color: $white;
				}

				&:hover {
					background: var(--special-text-color);
					color: $white;
				}

			}
					&.theme {
						width: 20%;
					}
					&.text {
						width: 30%;
					}
					&.city {
						width: 50%;
					}
				}
			}
</style>
