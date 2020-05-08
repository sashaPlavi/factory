<template>
  <div>
    <h1>Statistic page</h1>
    <div class="fields">
      <div v-for="field in allFields" :key="field.id" class="field">
        <h1>{{ field.name }}</h1>
        <p>{{ field.valueHistory }}</p>

        <canvas v-bind:id="field.name"></canvas>
        {{createChart(field.name, field.valueHistory )}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Chart from "chart.js";

export default {
  name: "testStatistic",
  methods: {
    ...mapActions(["stopRandomize"]),
    createChart(chartname, chartData) {
      const ctx = document.getElementById(chartname).getContext("2d");
      console.log(ctx);

      let ciklus = [];
      for (let index = 0; index < chartData.length; index++) {
        ciklus.push(index.toString());
      }
      //getElementById(chartname);
      console.log(document.getElementById(chartname));

      console.log(ciklus);
      console.log(chartname);
      var parsedobj = JSON.parse(JSON.stringify(chartData));
      console.log(parsedobj);

      new Chart(ctx, {
        type: "line",
        data: {
          labels: ciklus,
          datasets: [
            {
              label: chartname,
              data: parsedobj
            }
          ]
        },
        options: {}
      });
    }
  },
  computed: mapGetters(["allFields"]),

  created: function() {
    this.stopRandomize();
  }
};
</script>

<style scped>
.field {
  border: 1px solid #ccc;
  background: chartreuse;
  padding: 1rem;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin: 1rem;
}
body {
  text-align: center;
}
</style>
