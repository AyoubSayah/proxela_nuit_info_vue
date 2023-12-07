const ShopRouter = {
  path: "/shop/:gender",
  name: "Shop",
  component: () => import("../Shop.vue"),
};
export default ShopRouter;
