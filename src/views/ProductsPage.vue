<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid.vue";

export default {
  name: "ProductsPage",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const result = await axios.get("http://127.0.0.1:8000/api/products");
    const products = result.data;
    this.products = products;
  },
  components: { ProductsGrid },
};
</script>

<style></style>
