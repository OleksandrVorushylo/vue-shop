<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import { ref, onMounted, watch, computed, inject } from 'vue';

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  classNameList: {
    type: String,
    default: 'search-sec__categories-list',
  },
  classNameCategory: {
    type: String,
    default: 'search-sec__category',
  },
});

const injectedCategory = inject('initialCategory', ref(null));

import { useProductsStore } from '@/stores/products.store.js';

const store = useProductsStore();

const allCheckbox = ref(null);

onMounted(() => {
  store.fetchProducts();
  if (injectedCategory.value) {
    store.filters.selectedCategories = [injectedCategory.value];
  } else if (!store.filters.selectedCategories.length) {
    store.filters.selectedCategories = ['all'];
  }
});

watch(injectedCategory, (newVal) => {
  if (newVal) {
    store.filters.selectedCategories = [newVal];
  } else {
    store.filters.selectedCategories = ['all'];
  }
});

function toggleCategory(value) {
  const selected = store.filters.selectedCategories;

  console.log(allCheckbox);

  if (value === 'all') {
    store.filters.selectedCategories = ['all'];
    allCheckbox.value.checked = true;
    return;
  }

  const idxAll = selected.indexOf('all');
  if (idxAll !== -1) selected.splice(idxAll, 1);

  const idx = selected.indexOf(value);
  if (idx === -1) {
    selected.push(value);
  } else {
    selected.splice(idx, 1);
  }

  if (selected.length === 0) selected.push('all');
}
</script>

<template>
  <div :class="classNameList">
    <label :class="classNameCategory">
      <input
        ref="allCheckbox"
        type="checkbox"
        value="all"
        :checked="store.filters.selectedCategories.includes('all')"
        @change="toggleCategory('all')"
      />
      <BaseButton variant="second" tag="div"> Всі </BaseButton>
    </label>
    <label v-for="item in store.categories" :key="item.id" :class="classNameCategory">
      <input
        type="checkbox"
        :value="item.name"
        :checked="store.filters.selectedCategories.includes(item.name)"
        @change="toggleCategory(item.name)"
      />
      <BaseButton variant="second" tag="div">
        {{ item.name }}
      </BaseButton>
    </label>
  </div>
</template>

<style scoped></style>
