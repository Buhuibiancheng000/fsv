<template>
  <div>
    <h1>Shopping Cart</h1>
    <ProductsListItem
      v-for="product in cartItems"
      :key="product.id"
      :product="product"
      v-on:remove-from-cart="$emit('remove-from-cart', $event)"
    />
    <h3 id="total-price">Total:${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";
export default {
  name: "ProductsList",
  components: { ProductsListItem },
  props: ["cartItems"],
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>
