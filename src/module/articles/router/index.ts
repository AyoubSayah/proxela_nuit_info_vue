const ArticleRouter = {
  path: "/articles",
  name: "Article",
  component: () => import("../Article.vue"),
};
export default ArticleRouter;
