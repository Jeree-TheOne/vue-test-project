<template>
  <div class="container">
    <ListNav />
    <DisplayNav />
  </div>
</template>

<script>
import ListNav from "./components/List/Nav.vue";
import DisplayNav from "./components/Display/Nav.vue";
export default {
  name: "App",
  components: {
    ListNav,
    DisplayNav,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
