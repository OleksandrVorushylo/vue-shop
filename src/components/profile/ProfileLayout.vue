<script setup>
import './profile.scss';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';
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
  <section class="profile">
    <div class="cont">
      <div class="profile__wrap">
        <ProfileSidebar></ProfileSidebar>
        <div class="profile__container">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
