import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/HomePage";
import Register from "@/views/Register";
import Login from "@/views/Login";
import MessagesPage from "@/views/MessagesPage";
import SearchPage from "@/views/SearchPage";

Vue.use(Router);

const routes = [
  { path: "/home", name: "Home", component: HomePage },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { path: "/", name: "Login", component: Login },
  { path: "/messages", name: "MessagesPage", component: MessagesPage },
  { path: "/search", name: "SearchPage", component: SearchPage }
];

export default new Router({
  routes
});
