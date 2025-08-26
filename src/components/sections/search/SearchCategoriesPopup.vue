<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import { inject, ref } from 'vue';
import SearchCategoriesList from '@/components/sections/search/SearchCategoriesList.vue';
import SimpleBar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';

const { closeCategoriesPopup } = inject('categoriesPopupActions');
</script>

<template>
  <div class="categories-popup__top">
    <h3 class="categories-popup__title">Категорії товарів</h3>
  </div>
  <SimpleBar class="categories-popup__scroll">
    <SearchCategoriesList
      class-name-list="categories-popup__list"
      class-name-category="categories-popup__category"
    ></SearchCategoriesList>
  </SimpleBar>
  <div class="categories-popup__buttons">
    <BaseButton additionalClass="categories-popup-close" @click="closeCategoriesPopup">
      Закрити фільтри <i class="icon-close ml-[10px]"></i>
    </BaseButton>
  </div>
</template>

<style scoped></style>
