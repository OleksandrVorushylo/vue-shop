<script setup>
import './products.scss';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '../../plugins/swiper/swiper.scss';

import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import ProductCard from '@/components/ui/product-card/ProductCard.vue';
import { computed, onMounted, ref } from 'vue';
import { useProductsStore } from '@/stores/products.store.js';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import { useCartStore } from '@/stores/cart.store.js';

const store = useProductsStore();

const cartStore = useCartStore();

const scrollbarSwiperEl = ref(null);
const prevSwiperEl = ref(null);
const nextSwiperEl = ref(null);
const swiperRef = ref(null);

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
    pauseOnMouseEnter: window.innerWidth > 1024,
  },
  breakpoints: {
    551: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

const convertToBoolean = (value) => value === 'true';

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

const isInCart = (productId) =>
  cartStore.items.some((item) => String(item.id) === String(productId));

const addToCart = (product) => {
  cartStore.addToCart(product);
};

function handleFavorite(product) {
  store.toggleFavorite(product.id);
}

const recommendedProducts = computed(() =>
  store.filteredProducts.filter((item) => item.isRecommended === true),
);

onMounted(async () => {
  await store.fetchProducts();
  await store.fetchFavorites();
});

onMounted(() => {
  swiperOptions.value.navigation.nextEl = nextSwiperEl.value;
  swiperOptions.value.navigation.prevEl = prevSwiperEl.value;
  swiperOptions.value.scrollbar.el = scrollbarSwiperEl.value;
});
</script>

<template>
  <section class="products-sec">
    <div class="cont">
      <div class="products-sec__wrap">
        <div class="large-title-3 products-sec__title">Що ми пропонуємо</div>
        <ButtonsWrapper additionalClass="products-sec__buttons">
          <BaseButton to="/products">Дивитися всі товари</BaseButton>
        </ButtonsWrapper>
        <div class="products-swiper-wr products-sec__slider">
          <Swiper ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide v-for="item in recommendedProducts" :key="item.id">
              <ProductCard
                :slug="item.slug"
                :productId="item.id"
                :image-url="item.photoUrl"
                :image-webp="item.photoWebp"
                :title="item.name"
                :info="item.description"
                :price="Number(item.price)"
                :sale="item.onSale"
                :newPrice="Number(item.newPrice)"
                :is-favorite="item.isFavorite"
                :on-click-favorite="() => handleFavorite(item)"
                :on-click-add="() => addToCart(item)"
                :is-added="cartStore.cartIds.includes(String(item.id))"
                :counter-value="cartStore.getQuantityById(String(item.id))"
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
