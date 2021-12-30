<template>
  <div class="container-item">
    <div>
      <input
        type="checkbox"
        @change="$emit('checked', $event.target.checked)"
        :checked="selected"
      />
      <div>Item {{ number[1] }}</div>
    </div>
    <div class="metrics">
      <input type="text" v-model="amount" />
      <input type="color" v-model="color" />
    </div>
  </div>
</template>

<script>
import { randomColor, randomInt } from "../../functions/random";
import { computed } from "vue";
export default {
  props: {
    number: {
      type: Array,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      color: randomColor(),
      amount: randomInt(),
    };
  },

  methods: {
    decreaseAmount() {
      this.amount -= 1;
      return this.amount;
    },
  },

  computed: {
    getColor() {
      return this.color;
    },
    getAmount() {
      return this.amount;
    },
  },

  watch: {
    amount() {
      this.amount = this.amount.replace(/\D/g, "");
    },
  },

  provide() {
    return {
      color: computed(() => {
        return this.color;
      }),
      // getColor: this.getColor(),
      // getAmount: () => this.getAmount(),
      // decreaseAmount: () => this.decreaseAmount(),
    };
  },
};
</script>

<style lang="scss" scoped>
.container-item {
  margin: 7px 0;
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
  }
  & .metrics {
    display: flex;

    & input[type="text"] {
      border: none;
      outline: none;
      padding: 0 5px;
      border-radius: 5px;
      width: 50px;
      text-align: center;
      &:hover,
      &:focus {
        border: 1px solid #ccc;
      }
      &:hover {
        background: rgb(250, 250, 250);
      }
    }

    & input[type="color"] {
      padding: 0;
      border: none;
      width: 24px;
      height: 24px;
      background: none;
      margin-left: 5px;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }
    }
  }
}
</style>
