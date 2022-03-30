<script>
	// # # # # # # # # # # # # #
	//
	//  PRESS & NEWS ITEM
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { shortFormatDate } from '$lib/global';

	// ___ PROPS
	export let post = {};
</script>

<a
	href={'/press-and-news/' + post.slug.current}
	class="press-and-news-item {post._type}"
	sveltekit:prefetch
>
	<div class="date">{shortFormatDate(post._createdAt)}</div>
	<div class="title">{post.title}</div>
	{#if post.source}
		<div class="source">{post.source}</div>
	{/if}
</a>

<style lang="scss">
	@import '../../variables.scss';

	.press-and-news-item {
		width: 25%;
		text-decoration: none;
		padding: $NORMAL;

		@include screen-size('small') {
			width: 50%;
		}

		.date {
			font-size: $font-size-extra-small;
			margin-bottom: $TINY;
		}

		.title {
			font-size: $font-size-small;
		}

		.source {
			font-size: $font-size-extra-small;
			letter-spacing: 1px;
			margin-top: $NORMAL;
			text-transform: uppercase;
		}

		&:hover {
			background: $grey;
			color: var(--hover-text-color);
		}
	}
</style>
