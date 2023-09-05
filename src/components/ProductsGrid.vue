<template>
  <div class="grid-wrap">
    <ProductesGridItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductesGridItem from "./ProductesGridItem.vue";
export default {
  name: "ProductsGrid",
  components: { ProductesGridItem },
  props: ["products"],
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
