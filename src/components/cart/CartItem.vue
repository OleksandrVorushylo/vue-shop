<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import { computed, ref } from 'vue';
import BaseCounter from '@/components/base/counter/BaseCounter.vue';

import { useCartStore } from '@/stores/cart.store.js';

const cartStore = useCartStore();

const props = defineProps({
  imageUrl: {
    type: String,
  },
  imageWebp: {
    type: String,
  },
  title: {
    type: String,
    default: '',
  },
  info: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  newPrice: {
    type: Number,
    default: 0,
  },
  unitPrice: {
    type: String,
    default: '₴',
  },
  count: {
    type: Number,
    default: 0,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  productId: {
    type: String,
  },
  counterValue: {
    type: Number,
  },
  isOrderCartItem: {
    type: Boolean,
    default: false,
  },
});

const productCount = ref(props.count);

const withOrderPrefix = (baseClass) => {
  return props.isOrderCartItem ? `order-${baseClass}` : baseClass;
};
</script>

<template>
  <div :class="withOrderPrefix('cart__item')">
    <a href="#" :class="withOrderPrefix('cart__item-link')"></a>
    <div :class="withOrderPrefix('cart__item-image')">
      <picture>
        <source :srcset="imageWebp" type="image/webp" />
        <img :src="imageUrl" loading="lazy" alt="Image" />
      </picture>
    </div>

    <div v-if="!isOrderCartItem" :class="withOrderPrefix('cart__item-visible-price')">
      {{ price.toFixed(2).replace('.', ',')
      }}<span :class="withOrderPrefix('cart__item-visible-price-unit')">{{ unitPrice }}</span>
    </div>

    <div :class="withOrderPrefix('cart__item-container')">
      <div :class="withOrderPrefix('cart__item-content')">
        <div :class="withOrderPrefix('cart__item-title')">
          {{ title }}
        </div>
        <div :class="withOrderPrefix('cart__item-text')">{{ info }}</div>
      </div>

      <div :class="withOrderPrefix('cart__item-result')">
        <div v-if="sale" :class="withOrderPrefix('cart__item-info')">
          <div v-if="sale" :class="withOrderPrefix('cart__item-old-price')">
            {{ price.toFixed(2).replace('.', ',') }}
          </div>
          <div :class="withOrderPrefix('cart__item-price')">
            <div :class="withOrderPrefix('cart__item-count')">{{ counterValue }} x</div>
            {{ newPrice.toFixed(2).replace('.', ',') }}
            <span :class="withOrderPrefix('cart__item-unit')"> {{ unitPrice }} </span>
          </div>
        </div>

        <div v-else :class="withOrderPrefix('cart__item-info')">
          <div :class="withOrderPrefix('cart__item-price')">
            <div :class="withOrderPrefix('cart__item-count')">{{ counterValue }} x</div>
            {{ price.toFixed(2).replace('.', ',') }}
            <span :class="withOrderPrefix('cart__item-unit')"> {{ unitPrice }} </span>
          </div>
        </div>

        <BaseCounter
          id="product-1"
          variant="second"
          :additional-class="isOrderCartItem ? 'order-cart__item-counter' : 'cart__item-counter'"
          :productId="productId"
          :value="counterValue"
          v-model:value="productCount"
        ></BaseCounter>
      </div>
    </div>

    <button
      @click="cartStore.removeFromCart(productId)"
      :class="withOrderPrefix('cart__item-close')"
    >
      <i class="icon-close"></i>
    </button>
  </div>
</template>

<style scoped></style>
