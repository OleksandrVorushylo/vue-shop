<script setup>
import ContactSec from '@/components/sections/contact/ContactSec.vue';

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
  <ContactSec></ContactSec>
</template>

<style scoped></style>
