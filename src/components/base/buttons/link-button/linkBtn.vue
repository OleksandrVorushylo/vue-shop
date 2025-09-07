<script setup>
import './link-btn.scss';
import { RouterLink } from 'vue-router';
import { ref, computed, useAttrs } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: '', // reverse
  },
  icon: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: String,
    default: '',
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
  'link-btn',
  props.variant ? `${props.variant}-type` : '',
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
  <RouterLink v-if="to" ref="link-btn" :to="to" :class="cssClasses" v-bind="nonClassAttrs">
    <div v-if="icon" class="link-btn__icon">
      <i :class="iconClass"></i>
    </div>
    <div class="link-btn__text"><slot></slot></div>
  </RouterLink>

  <a v-else-if="href" ref="btn" :href="href" :class="cssClasses" v-bind="nonClassAttrs">
    <div v-if="icon" class="link-btn__icon">
      <i :class="iconClass"></i>
    </div>
    <div class="link-btn__text"><slot></slot></div>
  </a>

  <div v-else-if="tag === 'div'" ref="btn" :class="cssClasses" v-bind="nonClassAttrs">
    <div v-if="icon" class="link-btn__icon">
      <i :class="iconClass"></i>
    </div>
    <div class="link-btn__text"><slot></slot></div>
  </div>

  <button
    v-else
    ref="btn"
    :type="type"
    :class="cssClasses"
    :disabled="disabled"
    v-bind="nonClassAttrs"
  >
    <div v-if="icon" class="link-btn__icon">
      <i :class="iconClass"></i>
    </div>
    <div class="link-btn__text"><slot></slot></div>
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
