<template>
  <div id="app">
    <NavbarMenu />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: auto;
}
</style>

<script>
import NavbarMenu from "./components/NavbarMenu.vue";
import { mapState } from "vuex";
export default {
  components: {
    NavbarMenu,
  },
  computed: mapState(["users"]),
  watch: {
    users(val) {
      window.localStorage.setItem("users", JSON.stringify(val));
    },
  },
};
</script>
