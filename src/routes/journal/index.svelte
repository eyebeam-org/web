<script>
	export let journal;
</script>

<h1>JOURNAL</h1>

<ul>
	{#each journal as post}
		<li><a href={'/journal/' + post.slug.current} sveltekit:prefetch>{post.title}</a></li>
	{/each}
</ul>
