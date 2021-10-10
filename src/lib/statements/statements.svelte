<script>
    // # # # # # # # # # # # # #
    //
    //  STATEMENTS

    //
    // # # # # # # # # # # # # #
    import { onMount } from "svelte"
    import { loadData, renderBlockText } from "$lib/sanity.js"
    import sample from "lodash/sample.js"

    let activeStatement = false
    let statements = []

    const newStatement = () => {
        while(true) {
            let tempStatement = sample(statements)
            if(tempStatement._id !== activeStatement._id) {
                activeStatement = tempStatement
                break
            }
        }
    }

   onMount(async () => {
	    statements = await loadData("*[_type == 'statement']{..., person->{...}}")
        newStatement()
    })
    
</script>


<div class='statement'>
    {#if activeStatement}
        <div class='text'>{@html renderBlockText(activeStatement.content.content)}</div>
        {#if activeStatement.person}
            <div class='person'>– <a href={'/people/' + activeStatement.person.slug.current} sveltekit:prefetch>{activeStatement.person.name}</a></div>
        {/if}
    {/if}
    <div class='more' on:click={newStatement}/>
</div>

<style lang="scss">
    @import "../../variables.scss";


    .statement {
        .text {
            margin-top: 10px;
        }

        .more {
            margin-top: 10px;
            width: 20px;
            height: 20px;
            background: $grey;
            cursor: pointer;
            &:hover {
                background: $black;
            }
        }
    }

    :global(.text p) {
        margin: 0;
    }

</style>