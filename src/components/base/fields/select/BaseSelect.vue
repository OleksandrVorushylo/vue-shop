<script setup>
import { computed, ref } from 'vue';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.css';
import './select.scss';

const props = defineProps({
  selectId: String,
  isLabelForSelect: {
    type: Boolean,
    default: true,
  },
  labelForSelect: {
    type: String,
    default: 'Виберіть',
  },
  modelValue: {
    type: [Array, Object, String, Number, null],
    default: null,
  },
  options: {
    type: Array,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: 'Вибери варіант...',
  },
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  clearOnSelect: {
    type: Boolean,
    default: true,
  },
  allowEmpty: {
    type: Boolean,
    default: true,
  },
  preventCloseOnClickOutside: {
    type: Boolean,
    default: false,
  },
  additionalClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
const multiselectRef = ref(null);

const isObjectOptions = computed(
  () => props.options.length > 0 && typeof props.options[0] === 'object',
);

const model = computed({
  get: () => {
    if (isObjectOptions.value) {
      return props.options.find((opt) => opt.value === props.modelValue) || null;
    }
    return props.modelValue;
  },
  set: (val) => {
    if (isObjectOptions.value) {
      emit('update:modelValue', val ? val.value : null);
    } else {
      emit('update:modelValue', val);
    }
  },
});

const trackBy = computed(() => (isObjectOptions.value ? 'value' : undefined));
const label = computed(() => (isObjectOptions.value ? 'label' : undefined));

const openSelect = () => {
  if (multiselectRef.value && multiselectRef.value.activate) {
    multiselectRef.value.activate();
  }
};

const onClose = () => {
  if (props.preventCloseOnClickOutside && multiselectRef.value) {
    multiselectRef.value.isOpen = true;
  }
};
</script>

<template>
  <div class="project-select" :class="additionalClass">
    <label v-if="isLabelForSelect && selectId !== ''" :for="selectId" @click.prevent="openSelect">
      {{ labelForSelect }}
    </label>

    <Multiselect
      ref="multiselectRef"
      :id="selectId"
      v-model="model"
      :options="options"
      :multiple="multiple"
      :close-on-select="closeOnSelect"
      :placeholder="placeholder"
      :track-by="trackBy"
      :label="label"
      :searchable="searchable"
      :clear-on-select="clearOnSelect"
      :allow-empty="allowEmpty"
      @close="onClose"
    />
  </div>
</template>
