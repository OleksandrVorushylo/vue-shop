<script setup>
import { ref } from 'vue';
import './auth.scss';
import AuthLogin from '@/components/auth/AuthLogin.vue';
import AuthRegister from '@/components/auth/AuthRegister.vue';

const activeTab = ref('login');

const setTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <section class="authorization">
    <div class="cont">
      <div class="authorization-wrap">
        <div class="authorization-nav">
          <h1 class="authorization__title large-title-4">
            Зареєструватись або увійти до особистого кабінету
          </h1>
        </div>
        <div class="authorization-contents">
          <div class="authorization-tabs">
            <div
              class="authorization-tab"
              :class="{ active: activeTab === 'login' }"
              @click="setTab('login')"
            >
              Увійти
            </div>
            <div
              class="authorization-tab authorization-tab__register"
              :class="{ active: activeTab === 'register' }"
              @click="setTab('register')"
            >
              Зареєструватися
            </div>
          </div>
        </div>
        <div class="authorization-forms">
          <AuthLogin :is-active="activeTab === 'login'" />
          <AuthRegister :is-active="activeTab === 'register'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
