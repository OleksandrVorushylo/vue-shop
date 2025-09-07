<script setup>
import { useRouter } from 'vue-router';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import LinkBtn from '@/components/base/buttons/link-button/linkBtn.vue';

const router = useRouter();

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/products');
  }
}
</script>

<template>
  <ButtonsWrapper additional-class="product-section__buttons">
    <LinkBtn @click="goBack" :icon="true" icon-class="icon-arrow-right" variant="reverse"
      >Повернутись назад</LinkBtn
    >
  </ButtonsWrapper>
</template>

<style scoped></style>
