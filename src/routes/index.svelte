<script lang="ts">
    import BucketsList from "$lib/components/BucketsList.svelte";
    import HashTable from "$lib/components/HashTable.svelte";
    import Operations from "$lib/components/Operations.svelte";
    import RealFile from "$lib/components/RealFile.svelte";
  import Stadistics from "$lib/components/Stadistics.svelte";
    import Toolbar from "$lib/components/Toolbar.svelte";
    import { data, table, operations } from "$lib/dummy_data.svelte";
  
  </script>
  
  
  <svelte:head>
    <title>Hashing Dinamico</title>
  </svelte:head>
  
  <Toolbar></Toolbar>
  <main>
    <section>
      <Operations operations={operations} currentBucket={data[0]}></Operations>
    </section>
    <section style:display='flex'>
      <HashTable {table}></HashTable>
      <BucketsList buckets={data}></BucketsList>
    </section>
    <section class='space-around'>
      <Stadistics></Stadistics>
      <RealFile buckets={data}></RealFile>
    </section>
  </main>
  
  
  <style>
    :global(*) {
      box-sizing: border-box;
      font-family: Consolas;
      margin: 0;
    }
  
    :global(body>div) {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: hsla(0, 0%, 95%, 100%);
    }
  
    main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
    }
  
    @media (min-width:1366px) {
      main {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        height: 100%;
      }
    }
  
    section {
      /* background-color: hsla(0, 0%, 0%, 10%); */
    }
  
    .space-around {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  </style>