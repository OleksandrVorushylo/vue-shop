<script setup>
import './categories.scss';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import CategoriesItem from '@/components/sections/categories/CategoriesItem.vue';
import { computed } from 'vue';

const props = defineProps({
  categories: {},
});

const limitedCategories = computed(() => {
  return props.categories.slice(0, 12);
});
</script>

<template>
  <section class="categories-sec">
    <div class="cont">
      <div class="categories-sec__wrap">
        <h2 class="categories-sec__title large-title-3" data-view="fade-l">Популярні категорії</h2>
        <div class="categories-sec__container">
          <div class="categories-sec__list">
            <CategoriesItem
              v-for="item in limitedCategories"
              :key="item.id"
              :title="item.name"
              imageUrl="/images/categories-img-10.jpg"
              imageWebp="/images/categories-img-10.webp"
            ></CategoriesItem>
          </div>
          <ButtonsWrapper additionalClass="categories-sec__buttons">
            <BaseButton variant="second" to="/products"> Більше категорій </BaseButton>
          </ButtonsWrapper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
