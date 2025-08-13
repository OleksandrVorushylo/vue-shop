<script setup>
import './icon-btn.scss'
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'icon', // social
  },
  additionalClass: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '#',
  },
  size: {
    type: String,
    default: '',
  },
})

const btnClass = computed(() => [
  props.variant ? `${props.variant}-btn` : '',
  props.size === 'big' ? 'big-size' : '',
  props.additionalClass,
])
</script>

<template>
  <button :type="type" v-if="tag === 'button'" :class="btnClass">
    <slot></slot>
  </button>

  <a v-else-if="tag === 'a'" :href="href" :class="btnClass">
    <slot></slot>
  </a>
</template>
