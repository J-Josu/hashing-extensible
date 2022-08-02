<script lang="ts">
    import type { RecordType } from "../types.type"
    
    export let record: RecordType
</script>

<div>
    <h3>{record.key}</h3>
    {#each record.fields as field}
        <p>{field.key} : {field.value}</p>
    {/each}
</div>


<style>
    div {
        border: 1px solid lightgray;
        padding: 1rem;
    }
    h3 {
        margin: 0;
    }
    p {
        margin: 0;
    }
</style>