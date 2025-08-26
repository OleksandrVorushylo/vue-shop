<script setup>
import SearchSec from '@/components/sections/search/SearchSec.vue';

const props = defineProps({
  products: {
    type: Array,
  },
  categories: {
    type: Array,
  },
});
</script>

<template>
  <div class="sections-container">
    <SearchSec :products="products" :categories="categories"></SearchSec>
  </div>
</template>

<style scoped></style>
