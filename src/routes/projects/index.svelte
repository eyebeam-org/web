<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/projects.json');
		if (res.ok) {
			const projects = await res.json();
			return {
				props: { projects }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	// # # # # # # # # # # # # #
	//
	//  projects
	//
	// # # # # # # # # # # # # #

	// __ COMPONENTS
	import Sidebar from '$lib/sidebar/sidebar.svelte';
	import BottomBar from '$lib/bottom-bar/bottom-bar.svelte';

	// __ PROPS
	export let projects;
</script>

<svelte:head>
	<title>projects</title>
</svelte:head>

<!-- SIDEBAR -->
<Sidebar toc={projects} title='People'/>

<!-- MAIN CONTENT -->
<div class="main-content">
	<div class='inner'>

		<h1>Projects</h1>

		<!-- LIST -->
		<ul>
			{#each projects as project}
				<li><a href={'/projects/' + project.slug.current} sveltekit:prefetch>{project.title}</a></li>
			{/each}
		</ul>
	</div>

	<!-- BOTTOM BAR -->
	<BottomBar/>
</div>

<style lang="scss">
	@import '../../variables.scss';

	.main-content {
		float: left;
		width: 50%;
		width: $two-third;

		.inner {
			padding: 15px;
			border: $border-style;
			min-height: 100vh;
		}
	}

	ul {
		padding: 0;
		li {
			list-style: none;
		}
	}
</style>

