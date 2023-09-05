<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="fullInmageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average Rating:{{ product.averageRating }}</p>
      <button
        @click="addToCart"
        id="add-to-cart"
        v-if="!ifAlreadyIn && !showSuccessMsg"
      >
        Add to Cart
      </button>
      <button
        id="add-to-cart"
        v-if="!ifAlreadyIn && showSuccessMsg"
        class="green-button"
      >
        Successfully added items to cart !
      </button>
      <button id="add-to-cart" v-if="ifAlreadyIn" class="grey-button">
        The item is already in the cart !
      </button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else>404: NotFoundPage</NotFoundPage>
</template>

<script>
import NotFoundPage from "./NotFind.vue";
import axios from "axios";
export default {
  name: "ProductDetailPage",
  components: { NotFoundPage },
  data() {
    return {
      product: {},
      cartItems: [],
      showSuccessMsg: false,
    };
  },
  async created() {
    const { data: product } = await axios.get(
      `http://localhost:8000/api/products/${this.$route.params.id}`
    );
    this.product = product;
    const { data: cartItems } = await axios.get(
      `http://localhost:8000/api/users/12345/cart`
    );
    this.cartItems = cartItems;
  },
  computed: {
    fullInmageUrl() {
      return `http://localhost:8000${this.product.imageUrl}`;
    },
    ifAlreadyIn() {
      return this.cartItems.some((item) => item.id === this.product.id);
    },
  },
  methods: {
    async addToCart() {
      await axios.post("http://localhost:8000/api/users/12345/cart", {
        productId: this.$route.params.id,
      });
      this.showSuccessMsg = true;
      setTimeout(() => {
        this.$router.push("/products");
      }, 1000);
    },
  },
};
</script>

<style scoped>
.green-button {
  background-color: aquamarine;
}

.grey-button {
  background-color: grey;
}

#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
