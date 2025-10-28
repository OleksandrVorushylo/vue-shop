<script setup>
import SiteHeader from './layout/header/SiteHeader.vue';
import SiteFooter from '@/layout/footer/SiteFooter.vue';
import SiteCart from '@/components/cart/SiteCart.vue';
import BaseNotification from '@/components/base/notification/BaseNotification.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';
import BaseLoader from '@/components/base/loader/BaseLoader.vue';

const route = useRoute();

const hideSiteCart = computed(() => {
  return route.path === '/order'; // Или список страниц: ['OrderPage', 'CheckoutPage'].includes(route.name)
});
</script>

<template>
  <BaseLoader></BaseLoader>
  <SiteHeader></SiteHeader>
  <main class="main" id="content">
    <router-view></router-view>
    <SiteCart v-show="!hideSiteCart"></SiteCart>
    <BaseNotification />
  </main>
  <SiteFooter></SiteFooter>
</template>

<style scoped></style>
