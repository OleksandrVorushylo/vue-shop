<script setup>
const props = defineProps({
  title: String,
  price: Number,
  isAdded: Boolean,
})
</script>

<template>
  <div class="cont">
    <div class="product w-1/2">
      <h3 class="title">Товар: {{ title }}</h3>
      <h4 class="price">Цена: {{ price }} грн</h4>
      <h5 class="price">Добавлен: {{ isAdded }} грн</h5>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid darkgreen;
  padding: 10px;
}
</style>
