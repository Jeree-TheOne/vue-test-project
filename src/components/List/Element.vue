<template>
  <div class="container-el">
    <div class="container-el-header">
      <button
        @click="showElements = !showElements"
        :class="{
          rotate: showElements,
        }"
      >
        <img src="../../../public/arrow.svg" width="16" height="16" alt="" />
      </button>
      <input
        type="checkbox"
        :checked="stateOfCheckbox"
        :indeterminate="isCheckboxIndeterminate"
        @change="selectAll"
      />
      <div>List {{ number }}</div>
    </div>
    <div class="items-container" v-show="showElements">
      <ListItem
        v-for="index in numberOfItems"
        :key="index"
        :number="[number, index]"
        :selected="selected"
        @checked="this.check"
        @colorChange="this.colorChange"
        @amountChange="this.amountChange"
      />
    </div>
  </div>
</template>

<script>
import ListItem from "./Item.vue";
export default {
  components: {
    ListItem,
  },

  props: {
    number: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      showElements: false,
      numberOfItems: 4,
      numberOfCheckedItems: 0,
      selected: false,
    };
  },
  methods: {
    check(checked) {
      checked ? this.numberOfCheckedItems++ : this.numberOfCheckedItems--;
    },
    selectAll(ev) {
      this.selected = ev.target.checked;
    },
  },

  computed: {
    stateOfCheckbox() {
      if (this.numberOfCheckedItems == this.numberOfItems) return true;
      else return false;
    },

    isCheckboxIndeterminate() {
      if (
        this.numberOfCheckedItems != 0 &&
        this.numberOfCheckedItems != this.numberOfItems
      )
        return true;
      return false;
    },

    getNumberOfItems() {
      return this.numberOfCheckedItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-el {
  margin: 20px 10px;
  width: 100%;
  & .items-container {
    margin-left: 30px;
  }

  &-header {
    display: flex;

    & button {
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      transform: rotate(-90deg);
      &.rotate {
        transform: rotate(0);
      }
    }
  }
}
</style>
