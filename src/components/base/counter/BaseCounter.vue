<script setup>
import './counter.scss';
import { computed, ref, watch } from 'vue';
import { useCartStore } from '@/stores/cart.store.js';

const cartStore = useCartStore();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
  },
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 999,
  },
  stepValue: {
    type: Number,
    default: 1,
  },
  additionalClass: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: '', // second
  },
  productId: {
    type: String,
  },
});

const emit = defineEmits(['update:value']);

const count = ref(props.value);
const counterBtnPlus = ref(null);
const counterBtnMinus = ref(null);
const counterInput = ref(null);

const increment = () => {
  if (count.value + props.stepValue <= props.maxValue) {
    count.value += props.stepValue;
    emit('update:value', count.value);
    if (props.productId.value !== '') {
      console.log(props.productId);
      cartStore.addToCart({ id: props.productId });
    }
  }
};

const decrement = () => {
  if (count.value - props.stepValue >= props.minValue) {
    count.value -= props.stepValue;
    emit('update:value', count.value);
    if (props.productId.value !== '') {
      console.log(props.productId);
      cartStore.decreaseQuantity(props.productId);
    }
  }
};

const updateValue = (event) => {
  let newValue = Number(event.target.value);
  if (newValue < props.minValue) newValue = props.minValue;
  if (newValue > props.maxValue) newValue = props.maxValue;
  count.value = newValue;
  emit('update:value', count.value);
};

watch(
  () => props.value,
  (newVal) => {
    count.value = newVal;
  },
);

const counterClass = computed(() => [
  props.variant === 'second' ? 'counter-second' : '',
  props.additionalClass,
]);
</script>

<template>
  <div class="counter" :class="counterClass">
    <button ref="counterBtnMinus" class="counter-btn counter-btn-minus" @click="decrement">
      <i class="icon-minus"></i>
    </button>
    <input
      ref="counterInput"
      class="checkout-input"
      :min="minValue"
      :step="stepValue"
      :id="id"
      type="number"
      :value="count"
      @input="updateValue"
    />
    <button ref="counterBtnPlus" class="counter-btn counter-btn-plus" @click="increment">
      <i class="icon-plus"></i>
    </button>
  </div>
</template>

<style scoped></style>
