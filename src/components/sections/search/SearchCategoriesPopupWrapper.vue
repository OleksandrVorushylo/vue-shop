<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import SearchCategoriesPopup from '@/components/sections/search/SearchCategoriesPopup.vue';
import { computed, inject, onMounted, ref, nextTick } from 'vue';

const props = defineProps({
  searchSection: Object,
});

const openCategoriesBtn = ref(null);

const { categoriesPopupOpenState, openCategoriesPopup, closeCategoriesPopup } =
  inject('categoriesPopupActions');

const popupClasses = computed(() => (categoriesPopupOpenState.value ? 'is-open' : ''));

onMounted(async () => {
  await nextTick();

  const buttonElement = openCategoriesBtn.value?.$el || openCategoriesBtn.value;

  if (!buttonElement || !buttonElement.closest) {
    console.warn('Кнопка не найдена или не является DOM-элементом.');
    return;
  }

  const parentSec = props.searchSection?.value || buttonElement.closest('section');

  if (!parentSec) {
    return;
  }

  let nextSection = parentSec.nextElementSibling;
  const footer = document.querySelector('footer');

  while (nextSection && nextSection.tagName !== 'SECTION') {
    nextSection = nextSection.nextElementSibling;
  }

  const targetElement = nextSection || footer;

  if (!targetElement) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!buttonElement) return;

        if (entry.isIntersecting) {
          buttonElement.classList.add('is-hidden');
        } else {
          buttonElement.classList.remove('is-hidden');
        }
      });
    },
    { threshold: 0 },
  );

  observer.observe(targetElement);
});
</script>

<template>
  <BaseButton
    ref="openCategoriesBtn"
    additionalClass="sticky-button categories-popup-toggle"
    @click="openCategoriesPopup"
  >
    Категорії
  </BaseButton>

  <div class="categories-popup-close-bg" @click="closeCategoriesPopup"></div>
  <div class="categories-popup" :class="popupClasses">
    <SearchCategoriesPopup></SearchCategoriesPopup>
  </div>
</template>

<style scoped></style>
