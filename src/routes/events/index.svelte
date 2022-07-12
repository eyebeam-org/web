<script context="module">
	//export const prerender = false;
	export async function load() {
		return {
			status: 302,
			redirect: '/everything?filter=event'
		};
	}
</script>
