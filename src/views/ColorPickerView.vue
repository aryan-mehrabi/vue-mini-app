<template>
  <div>
    <FormTextInput v-model="inputVal" label="pick a color" />
    <h4>current color</h4>
    <p :style="'background-color:' + currentColor">{{ currentColor }}</p>
    <h4>old color</h4>
    <p :style="'background-color:' + oldColor">{{ oldColor }}</p>
  </div>
</template>

<script>
import FormTextInput from "../components/FormTextInput.vue";
export default {
  name: "ColorPickerView",
  data() {
    return {
      inputVal: "",
      oldColor: "",
      currentColor: "black",
      colors: [
        "black",
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "brown",
        "white",
      ],
    };
  },
  components: { FormTextInput },
  watch: {
    currentColor(newVal, oldVal) {
      this.oldColor = oldVal;
    },
    inputVal(newVal) {
      if (this.colors.includes(newVal)) this.currentColor = newVal;
    },
  },
};
</script>
