import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/index.vue";
import AboutView from "../views/AboutView/index.vue"
import ConferensView from "../views/ConferensView/index.vue"
import ProfileView from "../views/ProfileView/index.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/conferens",
    name: "conferens",
    component: ConferensView,
  },
  {
    path:"/profile",
    name: "profile",
    component: ProfileView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
