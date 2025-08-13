<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue'
import { ref } from 'vue'
import BaseCounter from '@/components/base/counter/BaseCounter.vue'

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
  isFavorite: {
    type: Boolean,
    default: false,
  },
  isAdded: {
    type: Boolean,
    default: false,
  },
  onClickAdd: {
    type: Function,
  },
  onClickFavorite: {
    type: Function,
  },
})

const productCount = ref(props.count)
</script>

<template>
  <div class="cart__item">
    <a href="#" class="cart__item-link"></a>
    <div class="cart__item-image">
      <picture>
        <source :srcset="imageWebp" type="image/webp" />
        <img :src="imageUrl" loading="lazy" alt="Image" />
      </picture>
    </div>

    <div class="cart__item-visible-price">
      {{ price.toFixed(2).replace('.', ',')
      }}<span class="cart__item-visible-price-unit">{{ unitPrice }}</span>
    </div>

    <div class="cart__item-container">
      <div class="cart__item-content">
        <div class="cart__item-title">
          {{ title }}
        </div>
        <div class="cart__item-text">{{ info }}</div>
      </div>

      <div class="cart__item-result">
        <div class="cart__item-info">
          <!--          <div class="cart__item-old-price">$999.00</div>-->
          <div class="cart__item-price">
            <div class="cart__item-count">{{ productCount }} x</div>
            {{ price.toFixed(2).replace('.', ',') }}
            <span class="cart__item-unit"> {{ unitPrice }} </span>
          </div>
        </div>

        <BaseCounter
          id="product-1"
          variant="second"
          additionalClass="cart__item-counter"
          v-model:value="productCount"
        ></BaseCounter>
      </div>
    </div>

    <button class="close-btn cart__item-close">
      <i class="icon-close"></i>
    </button>
  </div>
</template>

<style scoped></style>
