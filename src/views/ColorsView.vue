<template>
  <div>
    <div :class="color">im a box</div>
    <button @click="cancelInterval">click me</button>
  </div>
</template>

<style lang="scss">
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
</style>

<script>
const colors = ["red", "green", "blue"];

export default {
  data() {
    return {
      color: "red",
      intervalId: null,
    };
  },
  methods: {
    cancelInterval() {
      clearInterval(this.intervalId);
    },
  },
  created() {
    this.intervalId = setInterval(() => {
      this.color = colors[colors.indexOf(this.color) + 1] || colors[0];
    }, 2000);
  },
};
</script>
