<script>
    // # # # # # # # # # # # # #
	//
	// Search
	//
	// # # # # # # # # # # # # #

    // __ IMPORTS
    import { fade } from 'svelte/transition'
    import { quadOut } from 'svelte/easing';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let searchTerm = ''
    $: console.log(searchTerm)

    const close = () => {
        dispatch('close');
    }
</script>

<div class='search-overlay' in:fade={{duration: 300, easing: quadOut}}>
    <div class='close' on:click={close}>CLOSE</div>
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

        .close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: red;
            cursor: pointer;
            padding: 15px;
        }
    }
</style>
