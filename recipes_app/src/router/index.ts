import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import RecipeDetailPage from "../pages/RecipeDetailPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/recipes/:id", component: RecipeDetailPage, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
