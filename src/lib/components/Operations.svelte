<script lang="ts">
  import Bucket from "./Bucket.svelte";

  export let operations : {type:string;details:string[]}[]
  export let currentBucket;
</script>


<div class="container">
  <div>
    <h3>Operations</h3>
    <ul>
      {#each operations as operation}
        <li>{operation.type} : {operation.details}</li>
      {/each}
    </ul>
  </div>
  <div>
    <h3>Balde en memoria</h3>
    <Bucket bucket={currentBucket}></Bucket>
  </div>
</div>


<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .container {
    gap: 4rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>