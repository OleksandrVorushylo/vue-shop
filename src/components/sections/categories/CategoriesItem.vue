<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  imageWebp: {
    type: String,
  },
  to: {
    type: String,
    default: '/products',
  },
});
</script>

<template>
  <RouterLink :to="to" class="categories-sec__item aura-container">
    <div class="cursor-aura">
      <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
    </div>
    <div class="categories-sec__item-image">
      <picture>
        <source :srcset="imageWebp" type="image/webp" />
        <img loading="lazy" :src="imageUrl" alt="Image" />
      </picture>
    </div>
    <div class="categories-sec__item-content">
      <h3 class="categories-sec__item-title title-3">{{ title }}</h3>
      <div class="categories-sec__item-icon">
        <i class="icon-line-arrow-down"></i>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
