<script setup>
import './button.scss';
import { RouterLink } from 'vue-router';
import { ref, computed, useAttrs } from 'vue';

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
  tag: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const attrs = useAttrs();
const btn = ref(null);

const classes = computed(() => [
  'btn',
  props.variant ? `btn-${props.variant}` : '',
  props.size === 'small' ? 'btn-small' : '',
  props.additionalClass,
]);

const cssClasses = computed(() => {
  const attrClass = attrs.class || '';
  return [...classes.value, attrClass].filter(Boolean);
});

const nonClassAttrs = computed(() => {
  const { class: _, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <RouterLink v-if="to" ref="btn" :to="to" :class="cssClasses" v-bind="nonClassAttrs">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </RouterLink>

  <a v-else-if="href" ref="btn" :href="href" :class="cssClasses" v-bind="nonClassAttrs">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </a>

  <div v-else-if="tag === 'div'" ref="btn" :class="cssClasses" v-bind="nonClassAttrs">
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </div>

  <button
    v-else
    ref="btn"
    :type="type"
    :class="cssClasses"
    :disabled="disabled"
    v-bind="nonClassAttrs"
  >
    <span v-if="decor" class="btn__shadow"></span>
    <span v-if="decor" class="btn__edge"></span>
    <span class="btn__text"><slot /></span>
  </button>
</template>

<style scoped>
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

.btn.is-loading {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
