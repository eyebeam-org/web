<script>
	// # # # # # # # # # # # # #
	//
	//  Person link
	//
	// # # # # # # # # # # # # #
    
    //  __ IMPORTS
    import { createPopper } from '@popperjs/core';
    import { onMount } from 'svelte';
    import { renderBlockText, urlFor } from "$lib/sanity.js"

	// __ PROPS
	export let person = {};

    // __ VARIABLES
    let linkEl = {}
    let popEl = {}

    onMount(async () => {
        if(person.name) {
            createPopper(linkEl, popEl, {
                placement: 'bottom',
            });
        }
    })

    $: console.log(person)
</script>

<a href={'/people/' + person.slug.current} bind:this={linkEl} sveltekit:prefetch>{person.name}</a>
<div class='pop-up' bind:this={popEl}>
<img
    class='image'
	alt={person.name}
	src={urlFor(person.mainImage)
	.quality(90)
	.saturation(-100)
	.width(60)
    .height(60)
	.url()}/>

<div>{person.name}</div>
</div>

<style lang="scss">
	@import "../../variables.scss";

    .pop-up {
        display: none;
        background: $grey;
        padding: 15px;
    }

    a {
        color: $black;
        background: $grey;
        text-decoration: none;

        &:hover {
            & + .pop-up {
                display: flex;
            }
        }
    }
</style>
