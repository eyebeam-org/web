<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/about.json');
		if (res.ok) {
			const about = await res.json();
			return {
				props: { about }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let about;
    console.log(about)
</script>

<svelte:head>
	<title>ABOUT</title>
</svelte:head>

<h1>ABOUT</h1>

<ul>
	{#each about as page}
		<li><a href={'/about/' + page.slug.current} sveltekit:prefetch>{page.title}</a></li>
	{/each}
</ul>