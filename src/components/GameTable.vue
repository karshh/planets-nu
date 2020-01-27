<template>
  <div id="table">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Short Description</th>
          <th>Date Created</th>
          <th>Created By</th>
          <th>Host Days</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.id" @click="clickOnGame(game)">
          <td>{{ game.name }}</td>
          <td>{{ game.shortdescription }}</td>
          <td>{{ game.datecreated }}</td>
          <td>{{ game.createdby }}</td>
          <td>{{ game.hostdays }}</td>
          <td>
            <font-awesome-icon v-if="game.haspassword" icon="check" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Game } from '../store/modules/Games';

const GAME_INFO_URL = (id: number) => `https://api.planets.nu/game/loadinfo?gameid=${id}`

export default {
  name: "GameTable",
  props: ["games"],
  methods: {
    clickOnGame(game: Game) {
      window.location.href = GAME_INFO_URL(game.id);
    }
  }
};
</script>

<style>
</style>