import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    createUser({ users }, payload) {
      users.push(payload);
    },
    updateUser(store, payload) {
      store.users = store.users.map((user) =>
        user.id === payload.id ? payload : user
      );
    },
    deleteUser(store, payload) {
      store.users = store.users.filter((user) => user.id !== payload);
    },
  },
  actions: {
    createUser(context, payload) {
      context.commit("createUser", payload);
    },
    updateUser(context, payload) {
      context.commit("updateUser", payload);
    },
    deleteUser(context, payload) {
      context.commit("deleteUser", payload);
    },
  },
  modules: {},
  state: {
    users: JSON.parse(window.localStorage.getItem("users")) || [],
  },
});
