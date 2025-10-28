<script setup>
import './input.scss';
import { computed, nextTick, onMounted, ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  variant: {
    type: String,
    default: '',
  },
  focused: {
    type: Boolean,
    default: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Введіть тут',
  },
  error: {
    type: String,
  },
  inputmode: {
    type: String,
    default: '',
  },
  additionalClass: {
    type: String,
    default: '',
  },
  clearValue: {
    type: Function,
  },
});

const resolvedInputMode = computed(() => {
  if (props.inputmode) return props.inputmode;

  switch (props.type) {
    case 'number':
      return 'decimal';
    case 'email':
      return 'email';
    case 'url':
      return 'url';
    case 'tel':
      return 'tel';
    case 'text':
    default:
      return 'text';
  }
});

const fieldWrapper = ref(null);
const inputElement = ref(null);
const isFocused = ref(false);
const isPasswordVisible = ref(false);

const baseClasses = computed(() => [
  props.focused ? 'focused-start' : 'not-focused',
  props.additionalClass,
]);

const inputType = computed(() => {
  if (props.variant === 'password') {
    return isPasswordVisible.value ? 'text' : 'password';
  }
  return props.type;
});

const addFocusedClass = () => {
  if (fieldWrapper.value) {
    fieldWrapper.value.classList.add('focused');
  }
  isFocused.value = true;
};

const removeFocusedClass = () => {
  if (fieldWrapper.value) {
    fieldWrapper.value.classList.remove('focused');
  }
  isFocused.value = false;
};

const onFocus = () => {
  addFocusedClass();
};

const onBlur = () => {
  const currentValue = inputElement.value?.value || props.modelValue || '';
  if (!currentValue.trim()) {
    removeFocusedClass();
  }
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

onMounted(async () => {
  await nextTick();

  if (props.modelValue && props.modelValue.trim() !== '') {
    addFocusedClass();
  }

  const inputEl = inputElement.value;
  if (inputEl && inputEl.getAttribute('value')) {
    addFocusedClass();
  }
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal && newVal.trim() !== '') {
      addFocusedClass();
    } else if (!isFocused.value) {
      removeFocusedClass();
    }
  },
);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div
    ref="fieldWrapper"
    v-if="variant === 'password'"
    class="meta-input password-input"
    :class="baseClasses"
  >
    <div class="password-input__container">
      <button type="button" class="password-input__btn" @click="togglePasswordVisibility">
        <i v-if="!isPasswordVisible" class="icon-eye-outline"></i>
        <i v-if="isPasswordVisible" class="icon-eye-off-outline"></i>
      </button>
      <input
        ref="inputElement"
        :id="id"
        :name="name"
        :type="inputType"
        :inputmode="resolvedInputMode"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <label :for="id"> {{ label }} </label>
    <span class="input-info"></span>
    <p v-if="error" class="meta-input__error">{{ error }}</p>
  </div>

  <div ref="fieldWrapper" v-else-if="variant === 'search'" class="meta-input" :class="baseClasses">
    <input
      ref="inputElement"
      :id="id"
      :name="name"
      :type="type"
      :inputmode="resolvedInputMode"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label class="sr-only" :for="id"> {{ label }} </label>
    <span class="input-info"></span>
    <p v-if="error" class="meta-input__error">{{ error }}</p>
  </div>

  <div ref="fieldWrapper" v-else class="meta-input" :class="baseClasses">
    <input
      ref="inputElement"
      :id="id"
      :name="name"
      :type="type"
      :inputmode="resolvedInputMode"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <label :for="id"> {{ label }} </label>
    <span class="input-info"></span>
    <p v-if="error" class="meta-input__error">{{ error }}</p>
  </div>
</template>
