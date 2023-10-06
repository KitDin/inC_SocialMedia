import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

export default new Router({
  routes,
});
