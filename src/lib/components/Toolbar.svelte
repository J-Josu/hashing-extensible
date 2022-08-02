<script lang="ts">
  import ToolBarItem from "./ToolBarItem.svelte";

</script>


<div>
  <ToolBarItem>Alta</ToolBarItem>
  <ToolBarItem>Baja</ToolBarItem>
  <ToolBarItem>Busqueda</ToolBarItem>
  <ToolBarItem>Localizar</ToolBarItem>
  <ToolBarItem>Reproduccion</ToolBarItem>
  <ToolBarItem>Secuencia</ToolBarItem>
  <ToolBarItem>Configurar</ToolBarItem>
</div>

<style>
  div {
    display: flex;
    justify-content: space-around;
    height: fit-content;
    margin-block: 1rem;
  }
</style>