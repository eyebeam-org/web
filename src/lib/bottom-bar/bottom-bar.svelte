<script>
	// # # # # # # # # # # # # #
	//
	//  Last updated
	//
	// # # # # # # # # # # # # #
	
	// __ IMPORTS
	import { format, parseISO } from "date-fns"

	// __ GRAPHICS
	import HalfBeam from '$lib/graphics/half-beam.svelte';
    import ArrowUp from '$lib/graphics/arrow-up.svelte';

	// __ PROPS
	export let updatedAt  = '';

	const formattedDate = date => {
		console.log('date', date)
  		try {
			if(date) {
				return format(parseISO(date), "dd.MM.yyyy")
			}
		} catch (err) {
			console.dir(err)
		}
	}

	const backToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
</script>


<div class='bottom-bar'>
    <div class='last-updated'><span class='icon'><HalfBeam /></span> Last updated: {formattedDate(updatedAt)}</div>
    <div class='back-to-top' on:click={backToTop}>Back to top <span class='icon'><ArrowUp /></span></div>
</div>

<style lang="scss">
	@import '../../variables.scss';


	.bottom-bar {
		border-left: $border-style;
		border-right: $border-style;
		border-bottom: $border-style;
        width: 100%;
		display: inline-block;
		padding: 15px;

        .last-updated {
            float: left;
			.icon {
				margin-right: 5px;
			}
        }

        .back-to-top {
            float: right;
			cursor: pointer;

			.icon {
				margin-left: 5px;
			}
        }
	}

</style>
