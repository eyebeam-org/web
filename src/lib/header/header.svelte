<script>
    import { getStores, navigating, page, session } from '$app/stores';
    $: console.log('navigating', $navigating)
    $: console.log($page)
</script>

<h1>eyebeam.org</h1>
<nav>
    <p><a href="people" class:active={$page.path === '/people'}>People</a></p>
    <p><a href="about" class:active={$page.path === '/about'}>About</a></p>
    <p><a href="programs" class:active={$page.path === '/programs'}>Programs</a></p>
    <p><a href="notes" class:active={$page.path === '/notes'}>Notes</a></p>
    <p><a href="events" class:active={$page.path === '/events'}>Events</a></p>
    <p><a href="blog" class:active={$page.path === '/blog'}>Blog</a></p>
</nav>

<style>

    .active {
        font-weight: bold;
    }
</style>
