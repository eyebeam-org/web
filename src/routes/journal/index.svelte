<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/blog.json');
		if (res.ok) {
			const blog = await res.json();
			return {
				props: { blog }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let blog;
</script>

<h1>BLOG</h1>

<ul>
	{#each blog as post}
		<li><a href={'/blog/' + post.slug.current} sveltekit:prefetch>{post.title}</a></li>
	{/each}
</ul>
