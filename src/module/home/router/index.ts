const HomeRouter = {
  path: "/",
  name: "home",
  component: () => import("../HomeView.vue"),
};
export default HomeRouter;
