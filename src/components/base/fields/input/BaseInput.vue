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

const baseClasses = computed(() => [
  props.focused ? 'focused-start' : 'not-focused',
  props.additionalClass,
]);

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
      <div class="password-input__btn">
        <div class="svg-icon">
          <svg
            width="24"
            height="24"
            viewbox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25ZM12 15.75C11.2583 15.75 10.5333 15.5301 9.91661 15.118C9.29993 14.706 8.81928 14.1203 8.53545 13.4351C8.25162 12.7498 8.17736 11.9958 8.32205 11.2684C8.46675 10.541 8.8239 9.8728 9.34835 9.34835C9.8728 8.8239 10.541 8.46675 11.2684 8.32205C11.9958 8.17736 12.7498 8.25162 13.4351 8.53545C14.1203 8.81928 14.706 9.29993 15.118 9.91661C15.5301 10.5333 15.75 11.2583 15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75Z"
              fill="black"
            ></path>
            <path
              d="M23.1853 11.6963C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6963C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6963ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.148C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div class="icon-not-show svg-icon">
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6059_16441)">
              <path
                opacity="0.2"
                d="M12.2422 2.25488C4.74778 2.25488 1.75 8.9999 1.75 8.9999C1.75 8.9999 4.74778 15.7449 12.2422 15.7449C19.7367 15.7449 22.7345 8.9999 22.7345 8.9999C22.7345 8.9999 19.7367 2.25488 12.2422 2.25488ZM12.2422 12.7471C11.5011 12.7471 10.7766 12.5274 10.1604 12.1156C9.54416 11.7039 9.06387 11.1186 8.78025 10.4339C8.49663 9.74918 8.42243 8.99574 8.56701 8.26885C8.7116 7.54196 9.06849 6.87426 9.59255 6.3502C10.1166 5.82615 10.7843 5.46926 11.5112 5.32467C12.2381 5.18008 12.9915 5.25429 13.6762 5.53791C14.361 5.82153 14.9462 6.30182 15.3579 6.91805C15.7697 7.53428 15.9895 8.25876 15.9895 8.9999C15.9895 9.99372 15.5947 10.9468 14.8919 11.6496C14.1892 12.3523 13.2361 12.7471 12.2422 12.7471Z"
                fill="#54545F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.65579 5.09706C5.44242 3.31044 8.246 1.50488 12.2427 1.50488C16.2393 1.50488 19.0429 3.31044 20.8295 5.09706C21.7207 5.9882 22.3633 6.87805 22.7841 7.54638C22.9948 7.88112 23.151 8.162 23.2558 8.36207C23.3083 8.46215 23.3479 8.54217 23.3752 8.59878C23.3888 8.6271 23.3993 8.64957 23.4068 8.66579L23.4158 8.68538L23.4186 8.69157L23.4196 8.69374C23.4197 8.6941 23.4203 8.69529 22.7349 8.9999C23.4203 9.3045 23.4201 9.30484 23.42 9.3052L23.4186 9.30823L23.4158 9.31441L23.4068 9.334C23.3993 9.35022 23.3888 9.3727 23.3752 9.40101C23.3479 9.45762 23.3083 9.53764 23.2558 9.63773C23.151 9.83779 22.9948 10.1187 22.7841 10.4534C22.3633 11.1217 21.7207 12.0116 20.8295 12.9027C19.0429 14.6894 16.2393 16.4949 12.2427 16.4949C8.246 16.4949 5.44242 14.6894 3.65579 12.9027C2.76465 12.0116 2.12205 11.1217 1.70126 10.4534C1.49049 10.1187 1.3343 9.83779 1.2295 9.63773C1.17708 9.53764 1.13743 9.45762 1.11017 9.40101C1.09654 9.3727 1.086 9.35022 1.0785 9.334L1.06952 9.31441L1.06673 9.30823L1.06576 9.30605C1.0656 9.30569 1.06507 9.3045 1.75043 8.9999C1.06507 8.69529 1.06522 8.69495 1.06538 8.69459L1.06673 8.69157L1.06952 8.68538L1.0785 8.66579C1.086 8.64957 1.09654 8.6271 1.11017 8.59878C1.13743 8.54217 1.17708 8.46215 1.2295 8.36207C1.3343 8.162 1.49049 7.88112 1.70126 7.54638C2.12205 6.87805 2.76465 5.9882 3.65579 5.09706ZM1.75043 8.9999L1.06538 8.69459L0.929688 8.9999L1.06507 9.3045L1.75043 8.9999ZM2.58902 8.9999C2.67718 9.16501 2.80374 9.38917 2.9706 9.65419C3.34609 10.2506 3.92135 11.047 4.71645 11.8421C6.30234 13.428 8.74487 14.9949 12.2427 14.9949C15.7405 14.9949 18.183 13.428 19.7689 11.8421C20.564 11.047 21.1392 10.2506 21.5147 9.65419C21.6816 9.38917 21.8082 9.16501 21.8963 8.9999C21.8082 8.83478 21.6816 8.61062 21.5147 8.3456C21.1392 7.74923 20.564 6.95283 19.7689 6.15772C18.183 4.57184 15.7405 3.00488 12.2427 3.00488C8.74487 3.00488 6.30234 4.57184 4.71645 6.15772C3.92135 6.95283 3.34609 7.74923 2.9706 8.3456C2.80374 8.61062 2.67718 8.83478 2.58902 8.9999ZM22.7349 8.9999L23.42 9.3052L23.5556 8.9999L23.4203 8.69529L22.7349 8.9999ZM13.3897 6.23082C12.842 6.00396 12.2393 5.94461 11.6579 6.06026C11.0765 6.17591 10.5425 6.46136 10.1233 6.88053C9.70414 7.2997 9.41868 7.83376 9.30303 8.41517C9.18738 8.99657 9.24674 9.59921 9.47359 10.1469C9.70044 10.6946 10.0846 11.1627 10.5775 11.492C11.0704 11.8213 11.6499 11.9971 12.2427 11.9971C13.0376 11.9971 13.7999 11.6813 14.362 11.1193C14.9241 10.5572 15.2399 9.79481 15.2399 8.9999C15.2399 8.4071 15.0641 7.82762 14.7348 7.33472C14.4054 6.84183 13.9373 6.45767 13.3897 6.23082ZM11.3653 4.58908C12.2377 4.41555 13.1419 4.50461 13.9637 4.845C14.7854 5.18538 15.4878 5.7618 15.982 6.50137C16.4761 7.24093 16.7399 8.11043 16.7399 8.9999C16.7399 10.1926 16.2661 11.3365 15.4227 12.1799C14.5793 13.0233 13.4354 13.4971 12.2427 13.4971C11.3532 13.4971 10.4837 13.2334 9.74414 12.7392C9.00458 12.245 8.42815 11.5427 8.08777 10.7209C7.74738 9.89915 7.65832 8.99491 7.83185 8.12253C8.00538 7.25015 8.4337 6.44882 9.06265 5.81987C9.69159 5.19093 10.4929 4.76261 11.3653 4.58908Z"
                fill="#54545F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25027 0.192312C4.5572 -0.0858402 5.0315 -0.062514 5.30965 0.244413C16.9209 13.0568 20.468 16.9015 20.7842 17.2177C21.0771 17.5106 21.0771 17.9855 20.7842 18.2784C20.4913 18.5713 20.0165 18.5713 19.7236 18.2784C19.3731 17.9279 15.7869 14.0393 4.19817 1.25169C3.92002 0.944765 3.94335 0.470464 4.25027 0.192312Z"
                fill="#54545F"
              />
            </g>
            <defs>
              <clipPath id="clip0_6059_16441">
                <rect width="24" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
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

<style scoped></style>
