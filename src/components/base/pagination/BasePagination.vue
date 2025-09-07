<script setup>
import './pagination.scss';
import { computed } from 'vue';

const props = defineProps({
  additionalClass: { type: String, default: '' },
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, default: 1 },
});

const emit = defineEmits(['update:currentPage']);

const goToPage = (page) => {
  if (page > 0 && page <= props.totalPages && page !== props.currentPage) {
    emit('update:currentPage', page);
  }
};

const isPrevDisabled = computed(() => props.currentPage === 1);
const isNextDisabled = computed(() => props.currentPage === props.totalPages);

const visiblePages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage;
  const pages = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);

    if (current <= 3) {
      pages.push(2, 3);
      pages.push('...');
    } else if (current >= total - 2) {
      pages.push('...');
      pages.push(total - 2, total - 1);
    } else {
      pages.push('...');
      pages.push(current - 1, current, current + 1);
      pages.push('...');
    }

    pages.push(total);
  }

  return pages;
});
</script>

<template>
  <ul class="pagination search-sec__result-pagination" :class="additionalClass">
    <li
      class="pagination-btn pagination-prev"
      :class="{ 'pagination-btn-disabled': isPrevDisabled }"
      @click="goToPage(props.currentPage - 1)"
    >
      <i class="icon-arrow-chevron-prev"></i>
    </li>

    <li
      v-for="(page, index) in visiblePages"
      :key="page + '-' + index"
      :class="{
        'pagination-num': true,
        active: page === props.currentPage,
        'pointer-events-none': page === '...',
      }"
      @click="typeof page === 'number' && goToPage(page)"
    >
      <span>{{ page }}</span>
    </li>

    <li
      class="pagination-btn pagination-next"
      :class="{ 'pagination-btn-disabled': isNextDisabled }"
      @click="goToPage(props.currentPage + 1)"
    >
      <i class="icon-arrow-chevron-next"></i>
    </li>
  </ul>
</template>

<style scoped></style>
