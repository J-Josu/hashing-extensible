<script lang="ts">
    import type { BucketListType } from "$lib/types.type";
    import Bucket from "./Bucket.svelte";

    export let buckets: BucketListType;

</script>

<div>
    {#each buckets as bucket}
        <Bucket {bucket}></Bucket>    
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>