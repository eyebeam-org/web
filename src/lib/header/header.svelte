<script>
    // # # # # # # # # # # # # #
	//
	// Header
	//
	// # # # # # # # # # # # # #
    // __ IMPORT
    import { page } from '$app/stores';
    import Clock from '$lib/clock/clock.svelte';

    let pathArray = []

    $: {
        console.log('Page change', $page)
        pathArray = $page.path.split('/').filter(p => p)
    }

</script>

<nav class='menubar'>
    <!-- BREADCRUMBS -->
    <div class='breadcrumbs'>
        <span class='arrow-down'>▼</span>
        <a href='/'>eyebeam.org</a>
        {#each pathArray as path, index}
            <span class='divider'>/</span>
            {#if index + 1 == pathArray.length}
                <span>{path}</span>
            {:else}
                <a href={'/' + path}>{path}</a>
            {/if}
        {/each}
    </div>
    <!-- CLOCK -->
    <div class='clock'>
        <Clock/>
    </div>
</nav>

<style lang="scss">
	@import "../../variables.scss";

    .menubar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background: $black;
        color: $white;
        font-size: $font-size-normal;
        line-height: 30px;
        padding-left: 15px;
        padding-right: 15px;

        .breadcrumbs {
            float: left;
        }

        .arrow-down {
            font-size: $font-size-small;
            margin-right: 5px;
        }

        .divider {
            margin-right: 5px;
            margin-left: 5px;
        }

        a {
            color: $white;
        }

        .clock {
            float: right;
        }
    }
</style>
