<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/notes.json');
		if (res.ok) {
			const notes = await res.json();
			return {
				props: { notes }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let notes;
    console.log(notes)
</script>

<svelte:head>
	<title>NOTES</title>
</svelte:head>

<h1>NOTES</h1>

<ul>
	{#each notes as note}
		<li><a href={'/notes/' + note.slug.current} sveltekit:prefetch>{note.title}</a></li>
	{/each}
</ul>