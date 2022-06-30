<script context="module">
	export const prerender = false
</script>

<script>
	//FIXME: this needs to live in lib somewhere
	// # # # # # # # # # # # # #
	//
	//  What is Eyebeam?
	//
	// # # # # # # # # # # # # #

	// __ IMPORTS
	import { renderBlockText } from '$lib/sanity.js';
	import has from 'lodash/has.js';
	import keyBy from 'lodash/keyBy.js';
	import truncate from 'lodash/truncate.js';
	import Blocks from '$lib/blocks/blocks.svelte';

	// __ COMPONENTS
	import Metadata from '$lib/metadata/metadata.svelte';
	import EmbedContent from '$lib/embed-content/embed-content.svelte';

	// __ PROPS
	export let section, aboutMap;

	//STORES
	import { goto } from '$app/navigation';




	//FIXME: this is currently duplicated here and in sidebar (as handleToC), should be in lib
	const handlePseudoLink = (link) => {
		if (link[0] == '#') {
			const targetElement = document.querySelector(link);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			goto(link);
		}
	};
	$: aboutMap, console.log('aboutMap: ', aboutMap)

</script>

		{#if section == 'contact'}
				<!-- CONTACT SECTION -->
				<div class="tile full-tile contact">
					<h2>Contact</h2>
					<div class="bottom-container">
						<div class="column">{aboutMap['contact'].address}</div>
						<div class="column">
							{aboutMap['contact'].phoneNumber}<br />
							<a href={'mailto:' + aboutMap['contact'].email}>
								{aboutMap['contact'].email}
							</a>
						</div>
					</div>
				</div>
			{:else if section =='donate'}
				<!-- STANDARD SECTIONS -->
				
				<div id='donate'
					class="tile introduction {section}"
					sveltekit:prefetch
				>
			<h1> {aboutMap[section].title}</h1>
					{#if has(aboutMap[section], 'introduction.content')}
						<div class="description">
							{@html renderBlockText(aboutMap[section].introduction.content)}
						</div>
					{/if}
				</div>
			{#each aboutMap[section].content as content}
						{#if content.content[0].children[0].text == 'THE FOLD'} 
							<div class="tile nav-tile has-link"
							>
							
<a href="https://fold.eyebeam.org/enter" target="_blank">
							<Blocks blocks={content.content} />
					</a>
					</div>
					{:else }
						<div class="tile nav-tile">
							<Blocks blocks={content.content} />
					</div>
{/if}
				{/each}
						<div class="tile nav-tile crypto-widget">
					<h2>Donate Crypto </h2>
<p>
Your cryptocurrency donation is tax-deductible and will support our mission by helping us support artists and bringing their ideas to actionable projects. </p>

<script id="tgb-widget-script"> !function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); </script>
</div>

			{:else}
				<!-- STANDARD SECTIONS -->
				<div 
					class="tile nav-tile has-link {section}"
on:click={()=> {handlePseudoLink('/support/' + aboutMap[section]._id);}}
					sveltekit:prefetch
				>
<a href={'support/' + aboutMap[section]._id}><h2> {aboutMap[section].title}</h2></a>
						{#if has(aboutMap[section], 'introduction.content')}
						<div class="description">
							{@html renderBlockText(aboutMap[section].introduction.content)}
						</div>
						<div class="content" >
							{#if section == 'donate'}
<script id="tgb-widget-script"> !function(t,e,i,n,o,c,d,s){t.tgbWidgetOptions={id:o,domain:n},(d=e.createElement(i)).src=[n,"widget/script.js"].join(""),d.async=1,(s=e.getElementById(c)).parentNode.insertBefore(d,s)}(window,document,"script","https://tgbwidget.com/","133952075","tgb-widget-script"); </script>
							{/if}
						</div>
					{/if}
				</div>
			{/if}


<style lang="scss">
	@import '../../variables.scss';

	h2 {
		font-family: $ALT_FONT;
		font-size: $font-size-menu;
		text-transform: uppercase;
		padding-left: 0;
	}

	.tile {
		padding: $NORMAL;
		overflow: hidden;
		width: 50%;
		display: block;
		float: left;
		@include screen-size('small') {
			width: 100%;
			border: 1px solid var(--foreground-color);
			border-top: none;
			&:first-child {
				border-top: 1px solid var(--foreground-color);
			}

		}
	}

	.main-content {
		float: left;
		width: 100%;

		@include screen-size('small') {
			width: 100%;
		}

		.inner {
			width: 100%;
			border: 1px solid var(--foreground-color);
			min-height: 100vh;
			display: inline-block;

			@include screen-size('small') {
				border: unset;
			}
		}
	}
	.description {
		font-size: $font-size-body;
	}

	.introduction {
		border-bottom: 1px solid var(--foreground-color);
		min-height: $HEADER_HEIGHT;
		max-height: $HEADER_HEIGHT;
		overflow: scroll;
		padding: $NORMAL;


		p {
			font-style: italic;
			font-size: $font-size-medium;

			@include screen-size('small') {
				font-size: $font-size-small;
			}
		}
	}
	.header-photo {
		overflow: none;
		padding: 0;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		border-right: 1px solid var(--foreground-color);
		height: $HEADER_HEIGHT;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.nav-tile {
		width: 50%;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		&:nth-child(odd) {
			border-right: 1px solid var(--foreground-color);
			@include screen-size('small') {
			border-right: none;
		}
		}
		font-size: $font-size-body;
		display: block;
		float: left;
		text-decoration: none;
		padding-right: $LARGE;
		a {
			text-decoration: none;
		}


		&.has-link {
		&:hover {
			background: $grey;
			color: var(--hover-text-color);
			cursor: pointer;
		}
		}

		&:active {
//			background: var(--foreground-color);
//			color: $white;
		}

		&.our-history,
		&.artists,
		&.get-involved,
		&.media-kit {
			border-right: none;
			@include screen-size('small') {
				border-right: 1px solid var(--foreground-color);
			}
		}

		@include screen-size('small') {
			width: 100%;
			border-left: 1px solid var(--foreground-color);
			border-right: 1px solid var(--foreground-color);
			border-bottom: 1px solid var(--foreground-color);
			min-height: 33vh;

			&:nth-child(odd) {
				border-right: 1px solid var(--foreground-color);
			}

			&:last-child {
				border-bottom: none;
				
			}

			&:first-of-type {
				border-top: 1px solid var(--foreground-color);
			}
		}
		&.crypto-widget {
			div {
				width: 100%;
			}
		}
	}

	.full-tile {
		width: 100%;
		min-height: $HEADER_HEIGHT;
		border-bottom: 1px solid var(--foreground-color);
		display: block;
		float: left;
		text-decoration: none;

		@include screen-size('small') {
			min-height: unset;
			border-left: 1px solid var(--foreground-color);
			border-right: 1px solid var(--foreground-color);
		}

		&.contact {
			border-bottom: none;
			min-height: unset;
			height: $HEADER_HEIGHT / 2;
			position: relative;

			@include screen-size('small') {
				border-bottom: 1px solid var(--foreground-color);
			}

			.bottom-container {
				position: absolute;
				bottom: 15px;
				left: 15px;
				width: 100%;

				.column {
					width: 25%;
					float: left;

					@include screen-size('small') {
						width: calc(100% - 40px);
					}
				}
			}
		}
	}

	.press-and-news {
		position: relative;
		padding-left: 0;
		padding-right: 0;

		h2 {
			margin-right: $SMALL;
			margin-left: $SMALL;

			a {
				text-decoration: none;
			}
		}

		.press-and-news-listing {
			width: 100%;
			display: flex;
			margin-top: $NORMAL;
			padding-bottom: $NORMAL;

			@include screen-size('small') {
				flex-wrap: wrap;
				margin-top: 0;
			}
		}

		.see-all {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 50px;
			width: 100%;
			border-top: 1px solid var(--foreground-color);
			text-align: center;
			line-height: 50px;
			text-decoration: none;

			&:hover {
				background: $grey;
				color: var(--hover-text-color);
			}
		}
	}
</style>
