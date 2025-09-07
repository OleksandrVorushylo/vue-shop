<script setup>
import './search.scss';
import SearchContainer from '@/components/sections/search/SearchContainer.vue';
import SearchCategoriesPopupWrapper from '@/components/sections/search/SearchCategoriesPopupWrapper.vue';
import { onMounted, provide, ref } from 'vue';

const props = defineProps({
  initialCategory: {
    type: [String, Number],
    default: null,
  },
});

const categoriesPopupOpenState = ref(false);
const openCategoriesPopup = () => {
  categoriesPopupOpenState.value = true;
};
const closeCategoriesPopup = () => {
  categoriesPopupOpenState.value = false;
};

const selectedCategory = ref(props.initialCategory);

provide('categoriesPopupActions', {
  openCategoriesPopup,
  closeCategoriesPopup,
  categoriesPopupOpenState,
});

provide('initialCategory', selectedCategory);

const searchSection = ref(null);
</script>

<template>
  <section ref="searchSection" class="search-sec">
    <div class="cont">
      <div class="search-sec__wrap">
        <SearchContainer :initialCategory="initialCategory"></SearchContainer>
      </div>
      <SearchCategoriesPopupWrapper :search-section="searchSection"></SearchCategoriesPopupWrapper>
    </div>
  </section>
</template>

<style scoped></style>
