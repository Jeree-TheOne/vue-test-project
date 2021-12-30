<template>
  <div class="container-nav">
    <DisplayElement v-for="index in 4" :key="index" :number="index++" />
  </div>
</template>

<script>
import DisplayElement from "./Element.vue";
export default {
  components: {
    DisplayElement,
  },
};
</script>

<style lang="scss" scoped>
.container-nav {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px dashed #777;
}
</style>
