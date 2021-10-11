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
    import SearchIcon from '$lib/graphics/search.svelte';
    import HalfBeam from '$lib/graphics/half-beam.svelte';

    // __ COMPONENTS
    import Statements from '$lib/statements/statements.svelte';
    import OpenEyebeam from '$lib/open-eyebeam/open-eyebeam.svelte';
    import Search from '$lib/search/search.svelte';

    let searchActive = false

    const toggleSearch = () => {
        searchActive = !searchActive
    } 
</script>

<svelte:head>
	<title>eyebeam.org</title>
</svelte:head>

<div class='homepage-menu'>
    <div class='section one'>
        <div class='column one'>
            <a href='https://open-eyebeam.netlify.app' class='tile open-eyebeam'>
                <OpenEyebeam/>
            </a>
            <div class='tile logo-and-statement'>
                <div class='logo'><Logo/></div>
                <Statements/>
            </div>
        </div>
        <div class='column two'>
            <div class='tile programs'>
                <a href='/programs' class='sub-tile header'>PROGRAMS</a>
                <a href='/programs' class='sub-tile'>Test</a>
                <a href='/programs' class='sub-tile'>Test</a>
                <a href='/programs' class='sub-tile'>Test</a>
                <a href='/programs' class='sub-tile'>Test</a>
                <a href='/programs' class='sub-tile'>Test</a>
            </div>
            <a href='/about' class='tile about'>What is eyebeam?</a>
            <a href='/people' class='tile people'>People</a>
        </div>
        <div class='tile search' on:click={toggleSearch}><SearchIcon/> Search this website</div>
    </div>
    <div class='column three'>
        <div class='tile change'>Eyebeam is changing...<div><HalfBeam/></div></div>
        <div class='tile support'>Support Eyebeam</div>
        <div class='tile social newsletter'>Newsletter<div class='icon'><Newsletter/></div></div>
        <div class='tile social instagram'>Instagram<div class='icon'><Instagram/></div></div>
        <div class='tile social twitter'>Twitter<div class='icon'><Twitter/></div></div>
        <div class='tile social youtube'>Youtube<div class='icon'><Youtube/></div></div>
        <div class='tile events'>
            <a href='/events' class='sub-tile header'>UPCOMING AND RECENT</a>
            <a href='/events' class='sub-tile'>Test</a>
            <a href='/events' class='sub-tile'>Test</a>
            <a href='/events' class='sub-tile'>Test</a>
            <a href='/events' class='sub-tile'>Test</a>
            <a href='/events' class='sub-tile'>Test</a>
        </div>
    </div>
</div>

{#if searchActive}
    <Search on:close={toggleSearch}/>
{/if}

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

        &:hover {
            background: $grey;
            cursor: pointer;
        }
    }

    .open-eyebeam {
        height: $two-third;
        background: $grey;
        width: 100%;
        border-right: $border-style;
        border-bottom: $border-style;
        float: left;
        position: relative;
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
        width: 100%;
        border-right: $border-style;
        border-bottom: $border-style;
        float: left;
        padding: 0 !important;

        .sub-tile {
            float: left;
            width: 50%;
            height: $one-third;
            padding: 10px;
        }
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
            margin-left: 1px;
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
        padding: 0 !important;

        .sub-tile {
            float: left;
            width: 50%;
            height: $one-third;
            padding: 10px;
        }
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
</style>