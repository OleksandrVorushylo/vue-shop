<script setup>
import DeliverySec from '@/components/sections/delivery/DeliverySec.vue';
import { onMounted, onUnmounted } from 'vue';

const appEl = document.querySelector('#app');

onMounted(() => {
  if (appEl) appEl.classList.add('is-visible');
});

onUnmounted(() => {
  if (appEl) appEl.classList.remove('is-visible');
});
</script>

<template>
  <DeliverySec></DeliverySec>
</template>

<style scoped></style>
