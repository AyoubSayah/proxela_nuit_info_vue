import HomeRouter from "@/module/home/router";
import ArticleRouter from "@/module/articles/router";
import LayoutVue from "../Layout.vue";
import AboutUsRouter from "@/module/about-us/router";
import ContactUsRouter from "@/module/contact -us/router/router";

const LayoutRouter = {
  path: "/",
  name: "home",
  component: LayoutVue,
  children: [HomeRouter, ArticleRouter,AboutUsRouter,ContactUsRouter],
};
export default LayoutRouter;
