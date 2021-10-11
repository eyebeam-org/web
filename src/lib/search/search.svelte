<script>
    // # # # # # # # # # # # # #
	//
	// Search
	//
	// # # # # # # # # # # # # #

    // __ IMPORTS
    import { fade } from 'svelte/transition'
    import { quadOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { loadData, renderBlockText } from "$lib/sanity.js"

    // __ GRAPHICS
    import X from '$lib/graphics/x.svelte';

    const dispatch = createEventDispatcher();

    let inputEl = {}
    let searchResults = []
    let searchTerm = ''
    $: console.log(searchTerm)

    const close = () => {
        dispatch('close');
    }

    const submitSearch = async () => {
        searchResults = await loadData("*[[title, name, pt::text(content.content), pt::text(introduction.content)] match $searchTerm]{...}", {searchTerm: searchTerm})
        console.log(searchResults)
    }

    const translatePostType = t => {
        switch(t) {
            case 'program':
                return 'programs'
            case 'person':
                return 'people'
            case 'blogPost': 
                return 'blog'
            case 'event': 
                return 'events'
            default:
                return t
        }
    }

    onMount(async () => {
        inputEl.focus()
    })
</script>

<div class='search-overlay' in:fade={{duration: 300, easing: quadOut}}>
    <!-- CLOSE -->
    <div class='close' on:click={close}>
        <div class='text'>Close</div><X/></div>
    <!-- INPUT -->
    <div class='input-container'>
        <div>What are you looking for?</div>
        <input type='text' 
            bind:this={inputEl} 
            bind:value={searchTerm}
            on:keyup={e => {
                if(e.code === 'Enter') {
                    submitSearch()
                }
            }}
            />
    </div>
    <!-- RESULTS -->
    <div class='result-container'>
        {#each searchResults as result}
            <a href={'/' + translatePostType(result._type) +  '/' + result.slug.current} sveltekit:prefetch class='result'>
                <div class='type'>{result._type}</div>
                <div class='title'>{result.title}</div>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
	@import "../../variables.scss";

    .search-overlay {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $transparent-grey;
        font-size: $font-size-h2;
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 30px;

        .close {
            position: absolute;
            top: 45px;
            right: 45px;
            cursor: pointer;
            padding: 15px;
            font-size: $font-size-normal;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
                margin-right: 5px;
            }
        }

        .input-container {
            margin-top: 30px;

            input {
                margin-top: 20px;
                width: 100%;
                background: transparent;
                outline: none;
                border: $border-style;
                font-size: $font-size-h2;
                padding: 10px;
                font-family: $SERIF_STACK;
            }
        }

        .result-container {
            margin-top: 30px;
            .result {
                margin-bottom: 20px;
                display: block;
                text-decoration: none;

                .type {
                    font-size: $font-size-normal;
                    text-transform: uppercase;
                }

                .title {
                    font-size: $font-size-h2;
                }
            }
        }
    }
</style>
