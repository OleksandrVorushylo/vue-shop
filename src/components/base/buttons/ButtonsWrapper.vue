<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'buttons',
  },
  additionalClass: {
    type: [String, Array],
    default: '',
  },
})

const wrapperClasses = computed(() => [`${props.variant}-wrapper`, props.additionalClass])
</script>

<template>
  <div :class="wrapperClasses">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.buttons-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
}

.socials-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
</style>
