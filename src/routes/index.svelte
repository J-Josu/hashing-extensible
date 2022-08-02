<script lang="ts">
  import BucketsList from "$lib/components/BucketsList.svelte";
  import HashTable from "$lib/components/HashTable.svelte";
  import Operations from "$lib/components/Operations.svelte";
  import RealFile from "$lib/components/RealFile.svelte";
  import Stadistics from "$lib/components/Stadistics.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import { data, operations, table } from "$lib/database/dummy_data.json";
</script>

<svelte:head>
  <title>Hashing Dinamico</title>
</svelte:head>

<Toolbar />
<section>
  <div>
    <Operations {operations} currentBucket={data[0]} />
  </div>
  <div style:display="flex">
    <HashTable {table} />
    <BucketsList buckets={data} />
  </div>
  <div class="space-around">
    <Stadistics />
    <RealFile buckets={data} />
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }

  @media (min-width: 1366px) {
    section {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      height: 100%;
    }
  }

  .space-around {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
