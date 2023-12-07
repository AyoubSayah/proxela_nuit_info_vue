import LayoutRouter from "@/layout/router";
import HomeRouter from "@/module/home/router";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [LayoutRouter],
});

export default router;
