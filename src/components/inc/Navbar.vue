<template>
  <div class="navbar">
    <router-link to="/">Fields</router-link>
    <router-link to="/statistic">Statistic</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  display: flex;
  font-style: normal;

  padding: 0.5rem;
  background: #5b6b7c;
  align-items: flex-end;
}
.navbar a {
  margin: 0 0.5rem;
  padding: 0.2rem 1rem;
  border: 1px solid #5b6b7c;
  background: #5b6b7c;
  color: #f4f4f4;
  text-decoration: none;
  border-bottom: 2px solid #5b6b7c;
}
.navbar a:hover {
  border-bottom: 2px solid #f4f4f4;
}
</style>
