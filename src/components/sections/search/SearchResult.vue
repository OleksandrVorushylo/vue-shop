<script setup>
import ProductCard from '@/components/ui/product-card/ProductCard.vue';
import { useProductsStore } from '@/stores/products.store.js';
import { computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart.store.js';

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});

const store = useProductsStore();
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

function handleFavorite(product) {
  store.toggleFavorite(product.id);
}

const isInCart = (productId) =>
  cartStore.items.some((item) => String(item.id) === String(productId));

onMounted(async () => {
  await store.fetchProducts();
  await store.fetchFavorites();
});
</script>

<template>
  <div class="search-sec__result-grid">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :productId="item.id"
      :slug="item.slug"
      :image-url="item.photoUrl"
      :image-webp="item.photoWebp"
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
    />
    <div v-if="products.length === 0" class="flex items-center justify-center col-span-full">
      <h3 class="title-3">Немає результатів</h3>
    </div>
  </div>
</template>

<style scoped></style>
