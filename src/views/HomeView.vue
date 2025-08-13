<script setup>
import HeroSec from '@/components/sections/hero/HeroSec.vue'
import ShippingSec from '@/components/sections/shipping/ShippingSec.vue'
import CategoriesSec from '@/components/sections/categories/CategoriesSec.vue'
import ProductsSec from '@/components/sections/products/ProductsSec.vue'

const props = defineProps({
  products: {
    type: Array,
  },
})
</script>

<template>
  <div class="sections-container">
    <HeroSec></HeroSec>
    <ShippingSec></ShippingSec>
    <CategoriesSec></CategoriesSec>
    <ProductsSec :products="products"></ProductsSec>
  </div>
</template>

<style scoped></style>
