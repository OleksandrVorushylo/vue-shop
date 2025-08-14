<script setup>
import './button.scss';
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

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
  additionalClass: {
    type: String,
    default: '',
  },
  href: String,
  to: String,
});

const btn = ref(null);

const classes = computed(() => [
  'btn',
  props.variant ? `btn-${props.variant}` : '',
  props.size === 'small' ? 'btn-small' : '',
  props.additionalClass,
]);
</script>

<template>
  <RouterLink v-if="to" ref="btn" :to="to" :class="classes">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </RouterLink>

  <a v-else-if="href" ref="btn" :href="href" :class="classes">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </a>

  <button v-else ref="btn" :type="type" :class="classes">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </button>
</template>
