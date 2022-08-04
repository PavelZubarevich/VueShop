import { createRouter, createWebHistory } from "vue-router";
import { AboutPage, Cart, HomePage, LoginPage, RegistrationPage, PDP } from "@/pages";

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/cart', component: Cart },
  { path: '/login', component: LoginPage },
  { path: '/registration', component: RegistrationPage },
  { path: '/product/:id', component: PDP },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
