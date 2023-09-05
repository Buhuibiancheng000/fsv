<template>
  <div id="page-wrap">
    <ProductsList
      :cartItems="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import ProductsList from "@/components/ProductsList.vue";
export default {
  name: "CartPage",
  components: { ProductsList },
  data() {
    return {
      cartItems: [],
    };
  },
  async created() {
    const result = await axios.get(
      "http://localhost:8000/api/users/12345/cart"
    );
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
  methods: {
    async removeFromCart(productId) {
      const result = await axios.delete(
        `http://localhost:8000/api/users/12345/cart/${productId}`
      );
      this.cartItems = result.data;
    },
  },
};
</script>

<style scoped></style>
