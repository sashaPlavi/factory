<template>
  <Div>
    <canvas :id="id"></canvas>
  </Div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  props: ["sesion", "name", "data", "id"],
  methods: {
    createChart(chartId, sesion, name, data) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: "line",
        data: {
          labels: sesion,
          datasets: [{ label: name, data: data }]
        }
      });
    }
  },
  mounted() {
    this.createChart(this.id, this.sesion, this.name, this.data);
  }
};
</script>

<style></style>
