<template>
  <div class="product-container">
    <img :src="fullInmageUrl" class="product-image" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <h3>${{ product.price }}</h3>
    </div>
    <button
      class="remove-button"
      v-on:click="$emit('remove-from-cart', product.id)"
    >
      Remove from Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductsListItem",
  props: ["product"],
  computed: {
    fullInmageUrl() {
      return `http://localhost:8000${this.product.imageUrl}`;
    },
  },
};
</script>

<style scoped>
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
