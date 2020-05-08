<template>
  <div>
    <h1>Statistic page</h1>
    <div class="fields">
      <div v-for="field in allFields" :key="field.id" class="field">
        <Chart
          :name="field.name"
          :data="field.valueHistory"
          :sesion="field.sesion"
          :id="field.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Chart from "./Chart";

export default {
  name: "testStatistic",
  components: { Chart },
  methods: {
    ...mapActions(["stopRandomize"]),
  },
  computed: mapGetters(["allFields"]),

  created: function() {
    this.stopRandomize();
  },
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
