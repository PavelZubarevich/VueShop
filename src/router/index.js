import { createRouter, createWebHistory } from "vue-router";
import { AboutPage, PageTest, HomePage } from "@/pages";

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/test', component: PageTest },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
