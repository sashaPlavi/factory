<template>
  <div id="app">
    <div class="container">
      <Fields />
    </div>
  </div>
</template>

<script>
import Fields from "./components/Fields.vue";

export default {
  name: "App",
  components: {
    Fields
  }
};
</script>

<style>
.body {
  line-height: 1.6;
  background: #f4f4f4;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
