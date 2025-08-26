<script setup>
import './checkbox-radio.scss';
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  value: {
    type: String,
  },
});
</script>

<template>
  <label class="project-checkbox">
    <input :checked="checked" type="radio" :name="name" :value="value" />
    <span class="project-checkbox__box">
      <span class="circle-clip"></span>
    </span>
    <span class="project-checkbox__text"> <slot></slot> </span>
  </label>
</template>

<style scoped></style>
