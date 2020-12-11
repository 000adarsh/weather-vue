import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/404.vue";
import Product from "@/pages/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      // console.log("Before enter home");
      next();
    }
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/:id",
    name: "Product",
    component: Product
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  // console.log("apple");
  // console.log(to, from, next);
  next();
});

export default router;
