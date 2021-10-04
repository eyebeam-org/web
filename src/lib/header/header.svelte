<script>
    import { navigating, page } from '$app/stores';
    // $: console.log($page)
</script>

<h1>eyebeam.org</h1>
<nav>
    <p><a href="/people" sveltekit:prefetch class:active={$page.path === '/people'}>People</a></p>
    <p><a href="/about" sveltekit:prefetch class:active={$page.path === '/about'}>About</a></p>
    <p><a href="/programs" sveltekit:prefetch class:active={$page.path === '/programs'}>Programs</a></p>
    <p><a href="/notes" sveltekit:prefetch class:active={$page.path === '/notes'}>Notes</a></p>
    <p><a href="/events" sveltekit:prefetch class:active={$page.path === '/events'}>Events</a></p>
    <p><a href="/blog" sveltekit:prefetch class:active={$page.path === '/blog'}>Blog</a></p>
</nav>

<style>

    .active {
        font-weight: bold;
    }
</style>
