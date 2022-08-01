import { createRouter, createWebHistory } from "vue-router";
import { AboutPage, PageTest, HomePage, RegistrationPage } from "@/pages";

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/test', component: PageTest },
  { path: '/registration', component: RegistrationPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
