import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Login from "@/components/Login";

Vue.use(Router);

const routes = [
  { path: "/home", name: "Home", component: HelloWorld },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { path: "/login", component: Login }
];

export default new Router({
  routes
});
