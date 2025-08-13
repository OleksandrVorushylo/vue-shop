<script setup>
import SearchContainer from '@/components/sections/search/SearchContainer.vue'
import SearchCategoriesPopup from '@/components/sections/search/SearchCategoriesPopup.vue'
</script>

<template>
  <section class="search-sec">
    <div class="cont">
      <div class="search-sec__wrap">
        <SearchContainer></SearchContainer>
      </div>
      <SearchCategoriesPopup></SearchCategoriesPopup>
    </div>
  </section>
</template>

<style scoped></style>
