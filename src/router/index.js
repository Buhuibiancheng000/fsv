import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "../views/CartPage";
import ProductDetailPage from "../views/ProductDetailPage";
import ProductPage from "../views/ProductsPage";
import NotFoundPage from "../views/NotFind";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductPage,
  },
  {
    path: "/products/:id",
    name: "productDetail",
    component: ProductDetailPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
