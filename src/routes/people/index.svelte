<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/people.json');
		if (res.ok) {
			const people = await res.json();
			return {
				props: { people }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let people;
    console.log(people)
</script>


<svelte:head>
	<title>PEOPLE</title>
</svelte:head>

<h1>PEOPLE</h1>

<ul>
	{#each people as person}
		<li><a href={'/people/' + person.slug.current} sveltekit:prefetch>{person.name}</a></li>
	{/each}
</ul>