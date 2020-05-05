<template>
  <div>
    <h1>fields</h1>

    <div class="fields">
      <div v-for="field in allFields" :key="field.id" class="field">
        <h1>{{ field.name }}</h1>
        <div class="display">
          <p>{{ field.value }}</p>
          <div v-if="field.sign === '+'">
            <p>&uarr;</p>
          </div>
          <div style="color:red;" v-else>
            <p>&darr;</p>
          </div>

          <br />
        </div>
        <button @click="togleRandomize(field.id)">disable/enable</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//console.log(mapGetter);

export default {
  name: "Fields",
  methods: { ...mapActions(["randomize", "togleRandomize"]) },
  computed: mapGetters(["allFields"]),
  created: function() {
    this.randomize();
  }
};
</script>

<style scoped>
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

h1 {
  text-align: center;
}
.display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.5rem;
}
</style>
