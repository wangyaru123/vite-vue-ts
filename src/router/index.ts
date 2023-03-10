import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about/index.vue"),
  },
];
const router = createRouter({
  history,
  routes
})
export default router

