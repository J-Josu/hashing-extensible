<script lang="ts">
  import type { BucketListType } from "../types.type";

  import Bucket from "./Bucket.svelte";

  export let buckets : BucketListType;

</script>

<div class='container'>
  <h3>ArchivoFisico</h3>
  <div class='content'>
    <h3>NRR</h3><h3>Balde</h3>
    {#each buckets as bucket, i}
      <span>{i}</span><Bucket {bucket}></Bucket>
    {/each}
  </div>
</div>

<style>
  .container {
    border: 1px solid black;
  }

  .container > h3 {
    margin-left: 1rem;
  }

  .content {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-rows: auto;

    border-top: 1px solid black;
  }
  span {
    border-top: 1px solid gray;
  }
</style>