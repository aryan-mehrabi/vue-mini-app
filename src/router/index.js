import Vue from "vue";
import VueRouter from "vue-router";
import ColorsView from "../views/ColorsView.vue";
import FormView from "../views/FormView.vue";
import UsersView from "../views/UsersView.vue";
import ColorPickerView from "../views/ColorPickerView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/colors",
    name: "colors",
    component: ColorsView,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/colorpicker",
    name: "colorpicker",
    component: ColorPickerView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
