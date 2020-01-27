<template>
  <div id="table">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Short Description</th>
          <th scope="col">Date Created</th>
          <th scope="col">Created By</th>
          <th scope="col">Host Days</th>
          <th scope="col">Password</th>
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

<script>
export default {
  name: "GameTable",
  props: ["games"],
  methods: {
    clickOnGame(game) {
      window.location.href = `https://api.planets.nu/game/loadinfo?gameid=${game.id}`;
    }
  }
};
</script>

<style>
</style>