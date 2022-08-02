<script lang="ts">
    export let hash:string;
    export let dir:number;
</script>

<div>
    <span>{hash}</span>
    <span>{dir}</span>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        border: 1px solid gray;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem;
    }
    span {
        border: 1px solid lightgray;
        padding: 0.5rem;
    }
</style>