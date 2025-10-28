<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import { useAuthStore } from '@/stores/auth.store.js';
import { initConfetti } from '@/utils/confetti';

const authStore = useAuthStore();

const confettiContainer = ref(null);
let cleanupConfetti = null;

const mailLink = computed(() => {
  if (!authStore.currentUser?.email) return 'mailto:';
  const domain = authStore.currentUser.email.split('@')[1]?.toLowerCase();
  const mailProviders = {
    'gmail.com': 'https://mail.google.com/',
    'ukr.net': 'https://mail.ukr.net/',
    'yahoo.com': 'https://mail.yahoo.com/',
    'i.ua': 'https://mail.i.ua/',
    'meta.ua': 'https://mail.meta.ua/',
    'mail.ua': 'https://mail.bigmir.net/',
    'outlook.com': 'https://outlook.live.com/',
    'hotmail.com': 'https://outlook.live.com/',
    'icloud.com': 'https://www.icloud.com/mail',
    'rambler.ru': 'https://mail.rambler.ru/',
    'mail.ru': 'https://e.mail.ru/',
  };
  return mailProviders[domain] || 'mailto:';
});

onMounted(() => {
  if (confettiContainer.value) {
    const confettiColors = ['#ADEDCF', '#09c48d', '#ffd4a8', '#ffa251'];
    cleanupConfetti = initConfetti(confettiContainer.value, confettiColors, 5, 100);
  }
});

onUnmounted(() => {
  if (cleanupConfetti) {
    cleanupConfetti();
  }
});
</script>

<template>
  <section class="authorization">
    <div class="cont">
      <div class="authorization-wrap">
        <div class="authorization-nav">
          <h1 class="authorization__title large-title-4">Перевірте вашу пошту 📧</h1>
        </div>
        <div class="authorization-content">
          <div class="content-element authorization-content__text">
            Ми надіслали вам лист з посиланням для відновлення пароля. Перейдіть за посиланням у
            листі, щоб встановити новий пароль.
            <br />
            <strong>Не бачите лист?</strong> Перевірте папку "Спам" або "Промоакції".
          </div>
          <ButtonsWrapper additional-class="authorization-content__buttons">
            <BaseButton
              v-if="mailLink !== 'mailto:'"
              target="_blank"
              :href="mailLink"
              variant="second"
            >
              Перевірити пошту
            </BaseButton>
            <BaseButton to="/auth">Повернутися до входу</BaseButton>
          </ButtonsWrapper>
          <div ref="confettiContainer" class="authorization-content__successful-decors"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
