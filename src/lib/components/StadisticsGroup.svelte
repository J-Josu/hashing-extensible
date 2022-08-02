<script lang="ts">
  export let type:string;

</script>

<div>
  <h4>{type}</h4>
  <div class="content">
    <slot/>
  </div>
</div>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>