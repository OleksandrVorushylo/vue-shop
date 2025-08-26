<script setup>
import ProductCard from '@/components/ui/product-card/ProductCard.vue';
import { useProductsStore } from '@/stores/products.store.js';
import { computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart.store.js';

const store = useProductsStore();
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

/*const totalPrice = computed(() => cartStore.totalPrice);
const totalQuantity = computed(() => cartStore.totalQuantity);*/

function handleFavorite(product) {
  store.toggleFavorite(product.id);
}

onMounted(async () => {
  await store.fetchProducts();
  await store.fetchFavorites();
});

const isInCart = (productId) =>
  computed(() => cartStore.items.some((item) => String(item.id) === String(productId)));

const convertToBoolean = (value) => value === 'true';
</script>

<template>
  <div class="search-sec__result-grid">
    <ProductCard
      v-if="store.filteredProducts.length > 0"
      v-for="item in store.filteredProducts"
      :key="item.id"
      :productId="item.id"
      :image-url="item.photoUrl"
      :image-webp="item.photoWepb"
      :title="item.name"
      :info="item.description"
      :price="Number(item.price)"
      :sale="item.onSale"
      :newPrice="Number(item.newPrice)"
      :is-favorite="item.isFavorite"
      :on-click-favorite="() => handleFavorite(item)"
      :on-click-add="() => addToCart(item)"
      :is-added="cartStore.cartIds.includes(String(item.id))"
      :counter-value="cartStore.getQuantityById(String(item.id))"
    >
    </ProductCard>
    <div v-else class="flex items-center justify-center col-span-full">
      <h3 class="title-3">Немає результатів</h3>
    </div>
  </div>
</template>

<style scoped></style>
