<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import Fields from "./components/Fields.vue";
import Navbar from "./components/inc/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
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
