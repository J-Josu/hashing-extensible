<script lang="ts">
    import type { BucketType } from "../types.type";
    import Record from "./Record.svelte";

    export let bucket: BucketType;
</script>

<div>
    {#each bucket.records as record}
        <Record {record}></Record>
    {/each}
</div>

<style>
    div {
        display: flex;
        font-family: consolas;
        border: 1px solid grey;
        width: fit-content;
    }
</style>