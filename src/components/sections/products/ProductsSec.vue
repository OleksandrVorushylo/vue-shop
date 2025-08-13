<script setup>
import './products.scss'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import '../../plugins/swiper/swiper.scss'

import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import ProductCard from '@/components/ui/product-card/ProductCard.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
  products: {
    type: Array,
  },
})

const scrollbarSwiperEl = ref(null)
const prevSwiperEl = ref(null)
const nextSwiperEl = ref(null)
const swiperRef = ref(null)

const swiperOptions = ref({
  modules: [Navigation, Scrollbar, Autoplay],
  spaceBetween: 12,
  slidesPerView: 1,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  scrollbar: {
    el: null,
    draggable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    551: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
})

const convertToBoolean = (value) => value === 'true'

onMounted(() => {
  swiperOptions.value.navigation.nextEl = nextSwiperEl.value
  swiperOptions.value.navigation.prevEl = prevSwiperEl.value
  swiperOptions.value.scrollbar.el = scrollbarSwiperEl.value

  console.log(props.products)
})
</script>

<template>
  <section class="products-sec">
    <div class="cont">
      <div class="products-sec__wrap">
        <div class="large-title-3 products-sec__title" data-view="fade-l">Що ми пропонуємо</div>
        <div class="buttons products-sec__buttons">
          <a href="#" class="btn">
            <span class="btn__shadow"></span>
            <span class="btn__edge"></span>
            <span class="btn__text">Дивитися всі товари</span>
          </a>
        </div>
        <div class="products-swiper-wr products-sec__slider">
          <Swiper ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide v-for="item in products" :key="item.id">
              <ProductCard
                :image-url="item.photoUrl"
                :image-webp="item.photoWepb"
                :title="item.name"
                :info="item.description"
                :price="Number(item.price)"
                :sale="convertToBoolean(item.onSale)"
                :newPrice="Number(item.newPrice)"
              ></ProductCard>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-buttons">
            <div ref="scrollbarSwiperEl" class="swiper-scrollbar"></div>
            <div ref="prevSwiperEl" class="swiper-button-prev swiper-button"></div>
            <div ref="nextSwiperEl" class="swiper-button-next swiper-button"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
