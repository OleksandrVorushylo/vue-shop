<script setup>
import './pagination.scss';
import { ref, computed } from 'vue';

const props = defineProps({
  additionalClass: {
    type: String,
    default: '',
  },
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
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
  const range = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
  } else {
    if (current <= 3) {
      range.push(1, 2, 3, 4, '...');
    } else if (current >= total - 2) {
      range.push('...', total - 3, total - 2, total - 1, total);
    } else {
      range.push('...', current - 1, current, current + 1, '...');
    }
  }

  return range;
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
      v-for="page in visiblePages"
      :key="page"
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
