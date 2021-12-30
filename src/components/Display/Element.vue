<template>
  <div class="container-el">
    <div>List {{ number }}</div>
    <DisplayItem v-for="index in 4" :key="index" />
  </div>
</template>

<script>
import DisplayItem from "./Item.vue";
export default {
  components: {
    DisplayItem,
  },
};
</script>

<style lang="scss" scoped>
.container-el {
  margin: 20px 10px;
  width: 100%;
}
</style>
