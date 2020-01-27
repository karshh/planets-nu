<template>
  <div id="app">
    <font-awesome-icon v-if="loading" icon="spinner" />
    <GameTable  v-else :games="Games" />
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
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.fetchGames()
    .finally(() => this.loading = false);
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
