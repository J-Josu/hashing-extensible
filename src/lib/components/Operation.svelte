<script lang="ts">
  export let type :string;
  export let details : string[];
</script>

<div>
  <span>{type} : {details}</span>
</div>

<style>
  div {
    background-color: aquamarine;
  }
</style>