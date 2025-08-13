<script setup>
import './shipping.scss'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import '../../plugins/swiper/swiper.scss'

import { Navigation, Scrollbar, Autoplay } from 'swiper/modules'
import { onMounted, ref } from 'vue'

const scrollbarSwiperEl = ref(null)
const prevSwiperEl = ref(null)
const nextSwiperEl = ref(null)
const swiperRef = ref(null)

const swiperOptions = ref({
  modules: [Autoplay, Navigation, Scrollbar],
  observer: true, //needs to calculate swiper size
  observeParents: true, //needs to calculate swiper size
  spaceBetween: 20,
  slidesPerView: 1,
  threshold: 10,
  scrollbar: {
    el: null,
    draggable: true,
    snapOnRelease: true,
  },
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  breakpoints: {
    552: {
      spaceBetween: 16,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: window.innerWidth >= 640,
  },
})

onMounted(() => {
  swiperOptions.value.navigation.nextEl = nextSwiperEl.value
  swiperOptions.value.navigation.prevEl = prevSwiperEl.value
  swiperOptions.value.scrollbar.el = scrollbarSwiperEl.value
})
</script>

<template>
  <section class="shipping-sec">
    <div class="cont">
      <div class="shipping-sec__wrap">
        <div class="shipping-sec__slider shipping-swiper-wr">
          <Swiper ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide class="shipping-sec__item">
              <div class="shipping-sec__item-title">Брюховичі</div>
              <div class="shipping-sec__item-content">
                <div class="content-element body-text-16 shipping-sec__item-text">
                  <p>
                    Доставка працює<br />
                    від суми замовлення
                  </p>
                </div>
                <div class="shipping-sec__item-sum body-text-18">800 грн</div>
              </div>
            </SwiperSlide>

            <SwiperSlide class="shipping-sec__item">
              <div class="shipping-sec__item-title">Бірки, Ясниська, Рокитне, Воля-Гомулецька</div>
              <div class="shipping-sec__item-content">
                <div class="content-element body-text-16 shipping-sec__item-text">
                  <p>
                    Доставка працює<br />
                    від суми замовлення
                  </p>
                </div>
                <div class="shipping-sec__item-sum body-text-18">1 000 грн</div>
              </div>
            </SwiperSlide>

            <SwiperSlide class="shipping-sec__item">
              <div class="shipping-sec__item-title">Район Чорновола</div>
              <div class="shipping-sec__item-content">
                <div class="content-element body-text-16 shipping-sec__item-text">
                  <p>
                    Доставка працює<br />
                    від суми замовлення
                  </p>
                </div>
                <div class="shipping-sec__item-sum body-text-18">1 500 грн</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-buttons">
            <div ref="scrollbarSwiperEl" class="swiper-scrollbar swiper-scrollbar-second"></div>
            <div
              ref="prevSwiperEl"
              class="swiper-button-prev swiper-button swiper-button-second"
            ></div>
            <div
              ref="nextSwiperEl"
              class="swiper-button-next swiper-button swiper-button-second"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
