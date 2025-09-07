<script setup>
import SearchSec from '@/components/sections/search/SearchSec.vue';
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  products: Array,
  categories: Array,
});

const appEl = document.querySelector('#app');
const route = useRoute();

const initialCategory = route.query.category || null;

onMounted(() => {
  if (appEl) appEl.classList.add('is-visible');
});

onUnmounted(() => {
  if (appEl) appEl.classList.remove('is-visible');
});
</script>

<template>
  <div class="sections-container">
    <SearchSec
      :products="products"
      :categories="categories"
      :initialCategory="initialCategory"
    ></SearchSec>
  </div>
</template>

<style scoped></style>
