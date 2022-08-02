<script lang="ts">
    import type { HashTableType } from "../types.type"
    
    import TableElement from "./TableElement.svelte";
    
    export let table : HashTableType;
</script>

<div class='container'>
    <span>{table.order}</span>
    <div class='table'>
        {#each table.elements as element}
            <TableElement hash={element.hash} dir={element.dir}></TableElement>
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    span {
        border: 1px solid black;
        width: fit-content;
        padding: 0.25rem 0.5rem;
    }

    .table {
        border: 1px solid black;
    }
</style>