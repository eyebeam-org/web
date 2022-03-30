<script>
	// # # # # # # # # # # # # #
	//
	// Journal Listing
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import get from 'lodash/get.js';
	import { longFormatDate } from '$lib/global';
	import { fade } from 'svelte/transition';

	// __ GRAPHICS
	import BigBeam from '$lib/graphics/big-beam.svelte';
	import Logo from '$lib/graphics/logo.svelte';

	// __ COMPONENTS
	import PersonLinkList from '$lib/person-link-list/person-link-list.svelte';

	// __ PROPS
	export let journal;
</script>

<div class="journal" in:fade>
	<div class="header">
		<div class="inner">
			<BigBeam />
			<Logo />
			<div class="tagline">Eyebeam's Journal<br />Since 2022</div>
		</div>
	</div>

	<div class="listing">
		{#each journal as post}
			<a class="item" href={'/journal/' + get(post, 'slug.current', '')} sveltekit:prefetch>
				<div class="title">
					{post.title}
				</div>
				<div class="authors">
					<i>by</i>
					<PersonLinkList people={post.people} />
				</div>
				<div class="date">
					{longFormatDate(post._updatedAt)}
				</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.journal {
		width: 880px;
		margin-left: auto;
		margin-right: auto;
		background: var(--background-color);
		border: 1px solid var(--foreground-color);

		@include screen-size('small') {
			width: calc(100vw - 30px);
			margin-top: $LARGE;
		}

		.header {
			border-bottom: 1px solid var(--foreground-color);
			height: 340px;
			display: flex;
			align-items: center;
			justify-content: center;

			.inner {
				width: 340px;
				text-align: center;

				@include screen-size('small') {
					width: 80%;
				}

				.tagline {
					margin-top: $SMALL;
				}
			}
		}

		.listing {
			.item {
				display: block;
				height: 340px;
				width: 100%;
				position: relative;

				&:hover {
					background: $grey;
					color: var(--hover-text-color);
				}

				.title {
					position: absolute;
					top: $NORMAL;
					left: $NORMAL;
				}

				.authors {
					position: absolute;
					top: $NORMAL;
					right: $NORMAL;

					@include screen-size('small') {
						top: 120px;
						right: unset;
						left: $NORMAL;
					}
				}

				.date {
					position: absolute;
					bottom: $NORMAL;
					left: $NORMAL;
				}
			}
		}
	}
</style>
