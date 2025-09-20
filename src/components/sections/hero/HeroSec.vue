<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import '../../plugins/swiper/swiper.scss';

import './hero.scss';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';

import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import { nextTick, onMounted, ref } from 'vue';

const swiperRef = ref(null);

const swiperOptions = ref({
  modules: [Autoplay, Navigation, EffectCreative],
  observer: true,
  observeParents: true,
  grabCursor: true,
  effect: 'creative',
  allowTouchMove: true,
  spaceBetween: 0,
  slidesPerView: 1,
  threshold: 5,
  loop: true,
  loopAdditionalSlides: 2,
  watchSlidesProgress: true,
  speed: 800,
  creativeEffect: {
    perspective: true,
    limitProgress: 3,
    shadowPerProgress: true,
    progressMultiplier: 1,
    prev: {
      shadow: true,
      translate: [-80, 0, -400],
      rotate: [0, 0, -12],
      scale: 0.85,
      opacity: 0.8,
    },
    next: {
      shadow: true,
      translate: [80, 0, -300],
      rotate: [0, 0, 12],
      scale: 0.9,
      opacity: 0.9,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: window.innerWidth > 1024,
    reverseDirection: false,
  },
  resistance: true,
  resistanceRatio: 0.85,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
});

onMounted(() => {
  nextTick(() => {
    if (swiperRef.value?.swiper) {
      const swiper = swiperRef.value.swiper;

      swiper.on('autoplayTimeLeft', (s, time, progress) => {});
    }
  });
});
</script>

<template>
  <section class="hero-sec">
    <div class="cont">
      <div class="hero-sec__wrap">
        <div class="hero-sec__content">
          <h1 class="hero-sec__title large-title-1">
            Створюємо затишок<br />
            у вашій чашці
          </h1>
          <div class="content-element body-text-18 hero-sec__text">
            <p>
              Вибирайте свій улюблений чай або каву<br />
              та стильні аксесуари для дому — все в одному місці
            </p>
          </div>
          <ButtonsWrapper :additional-class="'hero-sec__buttons'">
            <BaseButton to="/products"> Дивитися всі товари </BaseButton>
          </ButtonsWrapper>
        </div>
        <!--<div class="hero-sec__image object-contain object-bottom">
          <img src="/images/home-hero-image.svg" alt="Image" />
        </div>-->

        <div class="hero-sec-slider-wr hero-sec__slider">
          <Swiper ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-coffee.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-coffee.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-tea.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-tea.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-coffee-2.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-coffee-2.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-tea-2.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-tea-2.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-coffee.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-coffee.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-tea.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-tea.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-coffee-2.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-coffee-2.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
            <SwiperSlide class="hero-sec__slider-item">
              <div class="hero-sec__slider-item-image">
                <picture>
                  <source srcset="/images/home-hero-tea-2.webp" type="image/webp" />
                  <img loading="lazy" src="/images/home-hero-tea-2.jpg" alt="Image" />
                </picture>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
