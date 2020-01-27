<template>
    <div id="table">
        <div v-for="game in games" :key="game.id"><p>{{ game.name }}</p></div>
    </div>
</template>

<script>
export default {
    name: "GameTable",
    props: ["games"]
}
</script>

<style>

</style>