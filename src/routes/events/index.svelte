<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/events.json');
		if (res.ok) {
			const events = await res.json();
			return {
				props: { events }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let events;
    console.log(events)
</script>

<svelte:head>
	<title>EVENTS</title>
</svelte:head>

<h1>EVENTS</h1>

<ul>
	{#each events as event}
		<li>{event.title}</li>
	{/each}
</ul>