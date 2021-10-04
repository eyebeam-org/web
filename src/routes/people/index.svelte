<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/people.json');
		if (res.ok) {
			const people = await res.json();
			console.log('people', people)
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
		<li>{person.name}</li>
	{/each}
</ul>