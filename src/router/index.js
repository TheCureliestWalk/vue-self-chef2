import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/Account.vue"),
    },
    {
      path: "/management",
      name: "management",
      component: () => import("../views/Management.vue"),
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../views/food/New.vue"),
    },
    {
      path: "/save",
      name: "save",
      component: () => import("../views/Save.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/food/Edit.vue"),
    },
  ],
});

export default router;
