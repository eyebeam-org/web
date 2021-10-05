
<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/programs.json');
		if (res.ok) {
			const programs = await res.json();
			return {
				props: { programs }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let programs;
    console.log(programs)
</script>

<svelte:head>
	<title>PROGRAMS</title>
</svelte:head>

<h1>PROGRAMS</h1>

<ul>
	{#each programs as program}
		<li><a href={'/programs/' + program.slug.current} sveltekit:prefetch>{program.title}</a></li>
	{/each}
</ul>