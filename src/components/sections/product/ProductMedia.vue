<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';

import '../../plugins/swiper/swiper.scss';
import { computed, onMounted, ref } from 'vue';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

const props = defineProps({
  sale: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
  },
  imageWebp: {
    type: String,
  },
  imagesGallery: {
    type: Array,
    default: [],
  },
});

const paginationSwiperEl = ref(null);
const prevSwiperEl = ref(null);
const nextSwiperEl = ref(null);
const swiperMainRef = ref(null);
const swiperThumbsRef = ref(null);

const swiperMainOptions = ref({
  modules: [Navigation, Pagination, Autoplay, Thumbs],
  spaceBetween: 8,
  slidesPerView: 1,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  pagination: {
    el: null,
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: window.innerWidth > 1024,
  },
  thumbs: {
    swiper: null,
  },
});

const swiperThumbsOptions = ref({
  observer: true,
  observeParents: true,
  spaceBetween: 8,
  slidesPerView: 4,
  threshold: 10,
  freeMode: true,
  watchSlidesProgress: true,
});

onMounted(() => {
  swiperMainOptions.value.navigation.nextEl = nextSwiperEl.value;
  swiperMainOptions.value.navigation.prevEl = prevSwiperEl.value;
  swiperMainOptions.value.pagination.el = paginationSwiperEl.value;
});
</script>

<template>
  <div class="product-section__slider product-swiper-wr">
    <Swiper class="swiper-main" ref="swiperMainRef" v-bind="swiperMainOptions">
      <div v-if="sale" class="product-section__slider-banner">
        <i class="icon-percent"></i> Акція
      </div>
      <SwiperSlide class="product-section__image" v-if="imageUrl">
        <picture>
          <source :srcset="imageWebp" type="image/webp" />
          <img loading="lazy" :src="imageUrl" alt="" />
        </picture>
      </SwiperSlide>

      <SwiperSlide
        v-for="(image, idx) in imagesGallery || []"
        :key="idx"
        class="product-section__image"
      >
        <picture>
          <source :srcset="image.webp" type="image/webp" />
          <img loading="lazy" :src="image.url" :alt="image.alt || ''" />
        </picture>
      </SwiperSlide>
    </Swiper>
    <Swiper
      v-if="imagesGallery.length > 0"
      @swiper="(swiper) => (swiperMainOptions.thumbs.swiper = swiper)"
      class="swiper-thumbs"
      ref="swiperThumbsRef"
      v-bind="swiperThumbsOptions"
    >
      <SwiperSlide v-if="imageUrl" class="product-section__prev-image">
        <picture>
          <source :srcset="imageWebp" type="image/webp" />
          <img loading="lazy" :src="imageUrl" alt="Главное фото превью" />
        </picture>
      </SwiperSlide>

      <SwiperSlide
        v-for="(image, idx) in imagesGallery || []"
        :key="'thumb-' + idx"
        class="product-section__prev-image"
      >
        <picture>
          <source :srcset="image.webp" type="image/webp" />
          <img loading="lazy" :src="image.url" :alt="image.alt || ''" />
        </picture>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-buttons" :class="imagesGallery.length < 1 ? '!hidden' : ''">
      <div ref="prevSwiperEl" class="swiper-button swiper-button-prev swiper-button-second"></div>
      <div ref="paginationSwiperEl" class="swiper-pagination"></div>
      <div ref="nextSwiperEl" class="swiper-button swiper-button-next swiper-button-second"></div>
    </div>
  </div>
</template>

<style scoped></style>
