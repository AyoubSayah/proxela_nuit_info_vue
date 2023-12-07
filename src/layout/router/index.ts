import CartRouter from "@/module/cart/router";
import HomeRouter from "@/module/home/router";
import ShopRouter from "@/module/Shop/router";
import LayoutVue from "../Layout.vue";

const LayoutRouter = {
  path: "/",
  name: "home",
  component: LayoutVue,
  children: [HomeRouter, ShopRouter, CartRouter],
};
export default LayoutRouter;
