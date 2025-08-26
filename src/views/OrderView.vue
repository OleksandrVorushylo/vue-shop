<script setup>
import OrderSec from '@/components/sections/order/OrderSec.vue';
import { onMounted, onUnmounted } from 'vue';
import { useCartOpenStore } from '@/stores/cartState.store.js';

const cartOpenStore = useCartOpenStore();
const appEl = document.querySelector('#app');

onMounted(() => {
  cartOpenStore.closeCart();
  if (appEl) {
    appEl.classList.add('full-container-type');
  }
});

onUnmounted(() => {
  if (appEl) {
    appEl.classList.remove('full-container-type');
  }
});
</script>

<template>
  <OrderSec></OrderSec>
</template>

<style scoped></style>
