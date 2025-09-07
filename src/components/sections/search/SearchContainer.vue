<script setup>
import BasePagination from '@/components/base/pagination/BasePagination.vue';
import SearchResult from '@/components/sections/search/SearchResult.vue';
import SearchCategoriesList from '@/components/sections/search/SearchCategoriesList.vue';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import { useProductsStore } from '@/stores/products.store.js';
import { computed, onMounted, ref, watch } from 'vue';
import BaseSelect from '@/components/base/fields/select/BaseSelect.vue';
import FollowingSidebar from '@/components/base/following-sidebar/FollowingSidebar.vue';

const store = useProductsStore();
const currentPage = ref(1);
const itemsPerPage = 12;

const searchInput = ref(null);
const clearSearchBtn = ref(null);

const sortOptions = [
  { value: 'name', label: 'За назвою' },
  { value: 'cheaper-price', label: 'За ціною (дешевше)' },
  { value: 'expensive-price', label: 'За ціною (дорожче)' },
];

const clearSearchValue = () => {
  store.filters.searchQuery = '';
  currentPage.value = 1;
};

const isClearButtonVisible = computed(() => store.filters.searchQuery.trim() !== '');

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return store.filteredProducts.slice(start, end);
});

const totalPages = computed(() => Math.ceil(store.filteredProducts.length / itemsPerPage));

onMounted(async () => {
  await store.fetchProducts();
});

watch(
  () => store.filters.searchQuery,
  () => {
    currentPage.value = 1;
  },
);
</script>

<template>
  <FollowingSidebar
    container-class="search-sec__container"
    sidebar-class="search-sec__sidebar"
    sidebar-inner-class="search-sec__sidebar-inner"
    content-class="search-sec__result"
    :gap-top="5"
  >
    <template #sidebar>
      <div class="search-sec__categories">
        <div class="title-3 search-sec__categories-title">Категорії товарів</div>
        <SearchCategoriesList></SearchCategoriesList>
      </div>
    </template>

    <template #content>
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

          <BaseSelect
            select-id="sort-select"
            :is-label-for-select="false"
            v-model="store.filters.sortBy"
            :options="sortOptions"
            placeholder="Сортувати за..."
            label="label"
            track-by="value"
            additional-class="search-sec__search-sort"
          ></BaseSelect>
        </form>
      </div>

      <SearchResult :products="paginatedProducts"></SearchResult>

      <BasePagination
        v-if="store.filteredProducts.length > itemsPerPage"
        :total-pages="totalPages"
        v-model:currentPage="currentPage"
        additionalClass="search-sec__result-pagination"
      ></BasePagination>
    </template>
  </FollowingSidebar>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
