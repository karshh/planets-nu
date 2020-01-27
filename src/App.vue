<template>
  <div id="app">
    <GameTable :games="Games" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GameTable from './components/GameTable.vue';
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: 'app',
  components: {
    GameTable
  },
  methods: {
    ...mapActions(["fetchGames"])
  },
  computed: {
    ...mapGetters(["Games"])
  },
  mounted() {
    this.fetchGames();
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
