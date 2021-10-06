<script>
    // # # # # # # # # # # # # #
    //
    //  EYEBEAM.ORG
    //
    // # # # # # # # # # # # # #
    // __ GRAPHICS
    import Logo from '$lib/graphics/logo.svelte';
    import Newsletter from '$lib/graphics/newsletter.svelte';
    import Twitter from '$lib/graphics/twitter.svelte';
    import Instagram from '$lib/graphics/instagram.svelte';
    import Youtube from '$lib/graphics/youtube.svelte';
    import Search from '$lib/graphics/search.svelte';

    import { onMount } from "svelte"
    import { loadData, renderBlockText } from "$lib/sanity.js"
    import sample from "lodash/sample"

    let activeStatement = false
    let statements = []

    const newStatement = () => {
        while(true) {
            let tempStatement = sample(statements)
            if(tempStatement._id !== activeStatement._id) {
                activeStatement = tempStatement
                break
            }
        }
    }

   onMount(async () => {
	    statements = await loadData("*[_type == 'statement']{..., person->{...}}")
        newStatement()
    })
    
</script>

<svelte:head>
	<title>eyebeam.org</title>
</svelte:head>

<div class='homepage-menu'>
    <div class='section one'>
        <div class='column one'>
            <a href='https://open-eyebeam.netlify.app' class='tile open-eyebeam'></a>
            <div class='tile logo-and-statement'>
                <div class='logo'><Logo/></div>
                    <div class='statement'>
                        {#if activeStatement}
                            <div class='text'>{@html renderBlockText(activeStatement.content.content)}</div>
                            {#if activeStatement.person}
                                <div class='person'>– <a href={'/people/' + activeStatement.person.slug.current} sveltekit:prefetch>{activeStatement.person.name}</a></div>
                            {/if}
                        {/if}
                        <div class='more' on:click={newStatement}/>
                    </div>
            </div>
        </div>
        <div class='column two'>
            <a href='/programs' class='tile programs'>PROGRAMS</a>
            <a href='/about' class='tile about'>What is eyebeam?</a>
            <a href='/people' class='tile people'>People</a>
        </div>
        <div class='tile search'><Search/> Search this website</div>
    </div>
    <div class='column three'>
        <div class='tile change'>Eyebeam is changing...</div>
        <div class='tile support'>Support Eyebeam</div>
        <div class='tile social newsletter'>Newsletter<div class='icon'><Newsletter/></div></div>
        <div class='tile social instagram'>Instagram<div class='icon'><Instagram/></div></div>
        <div class='tile social twitter'>Twitter<div class='icon'><Twitter/></div></div>
        <div class='tile social youtube'>Youtube<div class='icon'><Youtube/></div></div>
        <a href='/events' class='tile events'>UPCOMING AND RECENT</a>
    </div>
</div>

<style lang="scss">
	@import "../variables.scss";

    $one-third: calc(100% / 3);
    $two-third: calc((100% / 3) * 2); 

    .homepage-menu {
        border: $border-style;
        width: 100%;
        height: 600px;
        font-size: $font-size-normal;
    }

    .section {
        float: left;
        height: 100%;
        width: $two-third;
    }

    .column {
        float: left;
        &.one {
            width: 50%;
            // background: yellow;
            height: calc(100% - 100px);
        }

        &.two {
            width: 50%;
            // background: red;
            height: calc(100% - 100px);
        }

        &.three {
            width: $one-third;
            // background: blue;
            height: 100%;
        }
    }

    .search {
        height: 100px;
        width: 100%;
        // background: pink;
        float: left;
        border-top: $border-style;
        border-right: $border-style;
    }

    .open-eyebeam {
        height: $two-third;
        background: $grey;
        width: 100%;
        border-right: $border-style;
        border-bottom: $border-style;
        float: left;
    }

    .logo-and-statement {
        height: $one-third;
        // background: purple;
        width: 100%;
        border-right: $border-style;
        float: left;

        .statement {
            .text {
                margin-top: 10px;
            }

            .more {
                margin-top: 10px;
                width: 20px;
                height: 20px;
                background: $grey;
                cursor: pointer;
                &:hover {
                    background: $black;
                }
            }
        }
    }

    .programs {
        height: $two-third;
        // background: cadetblue;
        width: 100%;
        border-right: $border-style;
        border-bottom: $border-style;
        float: left;
    }

    .about {
        height: $one-third;
        width: 50%;
        float: left;
        // background: orange;
        border-right: $border-style;
    }

    .people {
        height: $one-third;
        width: 50%;
        float: left;
        border-right: $border-style;
        // background: magenta;
    }

    .social {
        width: 25%;
        height: 100px;
        // background: salmon;
        float: left;
        border-right: $border-style;
        border-bottom: $border-style;

        &.youtube {
            border-right: none;
        }

        .icon {
            margin-top: 5px;
        }
    }

    .change {
        height: calc(50% - 100px);
        width: 50%;
        // background: olive;
        float: left;
        border-right: $border-style;
        border-bottom: $border-style;
    }

    .support {
        height: calc(50% - 100px);
        width: 50%;
        // background: aqua;
        float: left;
        border-bottom: $border-style;
    }

    .events {
        height: 50%;
        width: 100%;
        // background: green;
        float: left;
    }

.tile {
    padding: 15px;
    overflow: hidden;
}

a {
    text-decoration: none;
    &:hover {
        background: $grey;
    }
}

:global(.text p) {
    margin: 0;
}
</style>