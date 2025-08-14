<script setup>
import './icon-btn.scss';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'icon', // social
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

const btnClass = computed(() => [
  props.variant ? `${props.variant}-btn` : '',
  props.size === 'big' ? 'big-size' : '',
  props.additionalClass,
]);
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="btnClass">
    <slot />
  </RouterLink>

  <a v-else-if="href" :href="href" :class="btnClass">
    <slot />
  </a>

  <button v-else :type="type" :class="btnClass">
    <slot />
  </button>
</template>
