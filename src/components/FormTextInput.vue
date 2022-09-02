<template>
  <div>
    <label>{{ label }}</label>
    <br />
    <input
      :value="initValue"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "FormInputText",
  props: {
    label: {
      type: String,
      default: "",
    },
    initValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: none;
  background-color: aliceblue;
  padding: 5px 3px;
}
</style>
