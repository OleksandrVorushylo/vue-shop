<script setup>
import './button.scss'
import { ref, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: '', // second, third, small
  },
  decor: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'button',
  },
  additionalClass: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '#',
  },
})

const btn = ref(null)

const classes = computed(() => [
  'btn',
  props.variant ? `btn-${props.variant}` : '',
  props.size === 'small' ? 'btn-small' : '',
  props.additionalClass,
])
</script>

<template>
  <button v-if="tag === 'button'" ref="btn" :type="type" :class="classes">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </button>

  <a v-else-if="tag === 'a'" ref="btn" :href="href" :class="classes">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </a>
</template>
