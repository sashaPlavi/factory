<template>
  <div>
    <h1>Statistic page</h1>
    <div class="fields">
      <div v-for="field in allFields" :key="field.id" class="field">
        <h1>{{ field.name }}</h1>
        <p>{{ field.valueHistory }}</p>
        <div id="app">
          <canvas id="planet-chart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import Chart from "chart.js";

export default {
  name: "Statistic",
  methods: { ...mapActions(["stopRandomize"]) },
  computed: mapGetters(["allFields"]),

  created: function() {
    this.stopRandomize();
  }
};
</script>

<style scped>
.fields {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.field {
  border: 1px solid #ccc;
  background: chartreuse;
  padding: 1rem;
  text-align: center;
  position: relative;
  cursor: pointer;
}
body {
  text-align: center;
}
</style>
