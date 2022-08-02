<script lang="ts">
  import StadisticsGroup from "./StadisticsGroup.svelte";
</script>

<div>
  <h3>Estadisticas</h3>
  <ul>
    <StadisticsGroup type='Generales'>
      <li>Total operaciones: 9</li>
      <li>Total baldes: 9</li>
      <li>Total registros: 9</li>
    </StadisticsGroup>
    <StadisticsGroup type='Operacion alta'>
      <li>Totales: 9</li>
      <li>Tiempo minimo: 9</li>
      <li>Tiempo medio: 9</li>
      <li>Tiempo maximo: 9</li>
    </StadisticsGroup>
    <StadisticsGroup type='Operacion baja'>
      <li>Totales: 9</li>
      <li>Tiempo minimo: 9</li>
      <li>Tiempo medio: 9</li>
      <li>Tiempo maximo: 9</li>
    </StadisticsGroup>
    <StadisticsGroup type='Operacion busqueda'>
      <li>Totales: 9</li>
      <li>Tiempo minimo: 9</li>
      <li>Tiempo medio: 9</li>
      <li>Tiempo maximo: 9</li>
    </StadisticsGroup>
  </ul>
</div>

<style>
  div {
    padding: 1rem;
    border: 1px solid black;
  }

  h3 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
</style>