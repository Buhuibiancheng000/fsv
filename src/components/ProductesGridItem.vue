<template>
  <div class="product-item">
    <img :src="fullInmageUrl" />
    <h3>{{ product.name }}</h3>
    <p class="product-price">${{ product.price }}</p>
    <router-link :to="'products/' + product.id">
      <button>查看详情</button>
    </router-link>
  </div>
</template>

<script scoped>
export default {
  name: "ProductGridItem",
  props: ["product"],
  computed: {
    fullInmageUrl() {
      return `http://localhost:8000${this.product.imageUrl}`;
    },
  },
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
