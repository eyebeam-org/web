<script>
	// # # # # # # # # # # # # #
	//
	//  At Eyebeam
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { urlFor } from '$lib/sanity.js';
	import { postTypeToName, postTypeToCategory } from '$lib/global.js';

	// __ PROPS
	export let posts = [];
</script>

<!-- AT EYEBEAM -->
<div class="at-eyebeam" id="at-eyebeam">
	<h2>At Eyebeam</h2>
	{#each posts as post}
		<a
			class="connected-post"
			href={'/' + postTypeToCategory[post._type] + '/' + post.slug.current}
			sveltekit:prefetch
		>
			<div class="image">
				{#if post.mainImage}
					<img
						alt={post.title}
						src={urlFor(post.mainImage).quality(90).saturation(-100).width(400).url()}
					/>
				{:else}
					<div class="big-title">{post.title}</div>
				{/if}
			</div>
			<div class="text">
				<span class="type">{postTypeToName[post._type]}</span>
				<span class="title">{post.title}</span>
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
	@import '../../variables.scss';

	.connected-post {
		margin-bottom: $NORMAL;
		display: block;
		text-decoration: none;
		width: calc(50% - 10px);
		float: left;
		overflow: hidden;
		font-size: $font-size-small;

		@include screen-size('small') {
			width: 100%;
			margin-bottom: $LARGE;
		}

		&:nth-child(even) {
			margin-right: $NORMAL;
		}

		.text {
			margin-top: $TINY;

			.type {
				font-size: $font-size-extra-small;
				letter-spacing: 0.5px;
				text-transform: uppercase;
				margin-right: $NORMAL;
			}
		}

		.image {
			border: 1px solid var(--foreground-color);
			max-height: 400px;
			width: 100%;
			line-height: 0;
			overflow: hidden;

			img {
				min-height: 200px;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.big-title {
				font-size: $font-size-h2;
				width: 100%;
				padding: $SMALL;
				min-height: 200px;
				line-height: 1.2em;
			}

			&:hover {
				background: $grey;
				color: var(--hover-text-color);
			}
		}
	}

	.at-eyebeam {
		padding: $NORMAL;
		border-top: 1px solid var(--foreground-color);
		@include screen-size('small') {
			padding-left: 0;
			padding-right: 0;
		}

		h2 {
			margin-bottom: $NORMAL;
			margin-left: 0;
		}
	}
</style>
