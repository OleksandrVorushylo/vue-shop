<script setup>
import './on-sale.scss';
import ProductCard from '@/components/ui/product-card/ProductCard.vue';
import { computed, onMounted, ref } from 'vue';
import { useProductsStore } from '@/stores/products.store.js';

const store = useProductsStore();

function handleFavorite(product) {
  store.toggleFavorite(product.id);
}

const salesProducts = computed(() => store.filteredProducts.filter((item) => item.onSale === true));

onMounted(async () => {
  await store.fetchProducts();
  await store.fetchFavorites();
});
</script>

<template>
  <section class="on-sale-sec">
    <div class="cont">
      <div class="on-sale-sec__wrap">
        <h1 class="on-sale-sec__subtitle">Знижки</h1>
        <h2 class="large-title-2 on-sale-sec__title">Акція тижня</h2>
        <div class="content-element body-text-18 on-sale-sec__text">
          <p>
            Не потрібно шукати улюблені продукти<br />
            по всіх магазинах, бо вони зібрані в одному місці
          </p>
        </div>
        <div class="on-sale-sec__container">
          <ProductCard
            v-for="item in salesProducts"
            :key="item.id"
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
          ></ProductCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
