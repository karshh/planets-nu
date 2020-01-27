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
      <tbody >
        <tr v-for="game in games" :key="game.id" >
          <td>{{ game.name }}</td>
          <td>{{ game.shortdescription }}</td>
          <td>{{ game.datecreated }}</td>
          <td>{{ game.createdby }}</td>
          <td>{{ game.hostdays }}</td>
          <td>{{ game.haspassword }}</td>
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
      /* eslint-disable no-console */
      console.log(game);
      /* eslint-enable no-console */
    }
  }
};
</script>

<style>
</style>