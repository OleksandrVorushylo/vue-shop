<script setup>
import BasePagination from '@/components/base/pagination/BasePagination.vue';
import SearchResult from '@/components/sections/search/SearchResult.vue';
import SearchCategoriesList from '@/components/sections/search/SearchCategoriesList.vue';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import { useProductsStore } from '@/stores/products.store.js';
import { computed, onMounted, ref } from 'vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';

const store = useProductsStore();

const searchInput = ref(null);
const clearSearchBtn = ref(null);

const clearSearchValue = () => {
  store.filters.searchQuery = '';
};

const isClearButtonVisible = computed(() => store.filters.searchQuery.trim() !== '');

onMounted(async () => {
  await store.fetchProducts();
});
</script>

<template>
  <div id="content-sticky" class="search-sec__container">
    <aside id="sidebar" class="search-sec__sidebar sidebar">
      <div class="following-sidebar-inner search-sec__sidebar-inner">
        <div class="search-sec__categories">
          <div class="title-3 search-sec__categories-title">Категорії товарів</div>
          <SearchCategoriesList></SearchCategoriesList>
        </div>
      </div>
    </aside>
    <div class="search-sec__result">
      <div class="search-sec__result-content">
        <h1 class="large-title-3 search-sec__title">Пошук товарів</h1>
        <form class="search-sec__form">
          <div class="search-sec__search-input">
            <div class="search-sec__search-icon">
              <i class="icon-search-second"></i>
            </div>

            <BaseInput
              ref="searchInput"
              variant="search"
              id="search-products"
              label="Пошук продуктів"
              placeholder="Що будемо шукати?"
              :focused="false"
              v-model="store.filters.searchQuery"
            ></BaseInput>

            <div
              class="search-sec__search-clear"
              ref="clearSearchBtn"
              @click="clearSearchValue"
              :class="{ hidden: !isClearButtonVisible }"
            >
              <i class="icon-clear"></i>
            </div>
          </div>

          <div class="meta-select">
            <label class="sr-only" for="city">Сортувати за...</label>
            <select v-model="store.filters.sortBy" class="choices-select" id="city">
              <option value="">Сортувати за...</option>
              <option value="name">За назвою</option>
              <option value="cheaper-price">За ціною (дешевше)</option>
              <option value="expensive-price">За ціною (дорожче)</option>
            </select>
          </div>
        </form>
      </div>
      <SearchResult></SearchResult>
      <BasePagination
        :total-pages="3"
        :current-page="1"
        additionalClass="search-sec__result-pagination"
      ></BasePagination>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
