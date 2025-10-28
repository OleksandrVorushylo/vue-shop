<script setup>
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.js';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const tabs = [
  { name: 'Історія замовлень', path: 'orders', iconClass: 'icon-profile-history' },
  { name: 'Збережені товари', path: 'favorites', iconClass: 'icon-profile-favorites' },
  { name: 'Редагування даних', path: 'personal', iconClass: 'icon-profile-personal' },
];

const goTo = (path) => {
  router.push({ path: `/profile/${path}` });
};

const handleLogout = async () => {
  try {
    await authStore.logout();
    await router.push('/auth');
  } catch (err) {
    console.error('logout error', err);
  }
};
</script>

<template>
  <aside class="profile__aside">
    <div class="profile__aside-subtitle subtitle-1">Вітаємо!</div>
    <div class="title-5 profile__aside-title">
      {{ authStore.profile?.fullName }}
    </div>
    <ul class="profile__aside-list">
      <li
        v-for="tab in tabs"
        :key="tab.path"
        :class="{ active: route.path.endsWith(tab.path) }"
        @click="goTo(tab.path)"
        class="profile__aside-link"
      >
        <div class="profile__aside-link-icon">
          <i :class="tab.iconClass"></i>
        </div>
        <div class="profile__aside-link-text subtitle-2">
          {{ tab.name }}
        </div>
      </li>
    </ul>
    <ButtonsWrapper additional-class="profile__aside-buttons">
      <BaseButton
        variant="second"
        additional-class="flex items-center justify-center"
        @click="handleLogout"
      >
        <i class="icon-exit mr-[8px]"></i>
        Вийти з акаунту
      </BaseButton>
    </ButtonsWrapper>
  </aside>
</template>

<style scoped></style>
