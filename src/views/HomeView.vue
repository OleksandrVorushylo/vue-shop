<script setup>
import HeroSec from '@/components/sections/hero/HeroSec.vue';
import ShippingSec from '@/components/sections/shipping/ShippingSec.vue';
import CategoriesSec from '@/components/sections/categories/CategoriesSec.vue';
import ProductsSec from '@/components/sections/products/ProductsSec.vue';
import { useProductsStore } from '@/stores/products.store.js';
import { computed, onMounted } from 'vue';

const store = useProductsStore();

const categories = computed(() => store.categories);
</script>

<template>
  <div class="sections-container">
    <HeroSec></HeroSec>
    <ShippingSec></ShippingSec>
    <CategoriesSec :categories="categories"></CategoriesSec>
    <ProductsSec></ProductsSec>
  </div>
</template>

<style scoped></style>
