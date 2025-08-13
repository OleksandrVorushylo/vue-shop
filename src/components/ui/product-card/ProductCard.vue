<script setup>
import './product-card.scss'

import { ref, onMounted } from 'vue'
import BaseButton from '@/components/base/buttons/button/BaseButton.vue'
import IconBtn from '@/components/base/buttons/icon-button/IconBtn.vue'
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
  newPrice: {
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

const card = ref(null)
const counterBlock = ref(null)
const favoriteBtn = ref(null)
const favoriteBtnIcon = ref(null)
const productCount = ref(0)
</script>

<template>
  <div ref="card" class="product-card" :class="isAdded ? 'is-open-counter' : ''">
    <a href="#" class="product-card__link"></a>
    <div class="product-card__image-container">
      <div class="image-aspect-ratio product-card__image">
        <picture>
          <source :srcset="imageWebp" type="image/webp" />
          <img :src="imageUrl" alt="Image" />
        </picture>
      </div>

      <div v-if="sale" class="product-card__banner"><i class="icon-percent"></i> Акція</div>

      <IconBtn
        additional-class="product-card__favorite"
        ref="favoriteBtn"
        :class="isFavorite ? 'active' : ''"
        @click="onClickFavorite"
      >
        <i ref="favoriteBtnIcon" :class="isFavorite ? 'icon-heart-fill' : 'icon-heart'"></i>
      </IconBtn>
    </div>
    <div class="product-card__content">
      <h3 class="title-4 product-card__title line-clamp-3">
        {{ title }}
      </h3>
      <div class="content-element product-card__text">
        {{ info }}
      </div>
      <div class="product-card__bottom">
        <div class="product-card__info">
          <div class="product-card__info-wr" :class="sale ? 'if-sale' : ''">
            <div class="product-card__info-price">{{ price.toFixed(2).replace('.', ',') }}</div>
            <div class="product-card__info-unit">{{ unitPrice }}</div>
          </div>

          <div v-if="sale" class="product-card__info-wr">
            <div class="product-card__info-price">{{ newPrice.toFixed(2).replace('.', ',') }}</div>
            <div class="product-card__info-unit">{{ unitPrice }}</div>
          </div>
        </div>
        <div ref="counterBlock" class="product-card__btn-counter" :class="isAdded ? 'active' : ''">
          <BaseCounter
            id="product-swiper-counter-1"
            additionalClass="product-card__counter"
            v-model:value="productCount"
          ></BaseCounter>
          <BaseButton
            variant="second"
            size="small"
            additionalClass="btn-small-cart"
            @click="onClickAdd"
          >
            В кошик <i class="icon-cart"></i>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
