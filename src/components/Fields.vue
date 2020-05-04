<template>
  <div>
    <h1>fields</h1>
    <div class="fields">
      <div v-for="field in allFields" :key="field.id" class="field">
        <h1>{{field.name}}</h1>
        <p>{{field.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//console.log(mapGetter);

export default {
  name: "Fields",
  computed: mapGetters(["allFields"])
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
</style>