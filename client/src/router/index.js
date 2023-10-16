import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage";
import Register from "@/views/Register";
import Login from "@/views/Login";
import MessagesPage from "@/views/MessagesPage";

Vue.use(Router);

const routes = [
  {
    path: "/home/:id",
    name: "Home",
    component: HomePage
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { path: "/", name: "Login", component: Login },
  { path: "/messages/:id", name: "Messages", component: MessagesPage }
];

export default new Router({
  routes
});
