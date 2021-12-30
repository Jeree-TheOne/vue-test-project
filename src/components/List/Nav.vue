<template>
  <div class="container-nav">
    <ListElement v-for="index in 4" :key="index" :number="index++" />
  </div>
</template>

<script>
import ListElement from "./Element.vue";
export default {
  components: {
    ListElement,
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
