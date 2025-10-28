<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
const visible = computed(() => authStore.globalLoading);
</script>

<template>
  <div v-if="visible" class="loader-overlay">
    <div class="loader">Завантаження...</div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader {
  font-size: 18px;
  color: #333;
}
</style>
