<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/products.store.js';
import { useCartStore } from '@/stores/cart.store.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useNotification } from '@/composables/useNotification.js';
import './product.scss';
import ProductBack from '@/components/sections/product/ProductBack.vue';
import ProductMedia from '@/components/sections/product/ProductMedia.vue';
import ProductDetails from '@/components/sections/product/ProductDetails.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import BaseCounter from '@/components/base/counter/BaseCounter.vue';
import IconBtn from '@/components/base/buttons/icon-button/IconBtn.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';

const { successNotification, errorNotification } = useNotification();
const route = useRoute();
const productsStore = useProductsStore();
const cartStore = useCartStore();

const slug = computed(() => route.params.slug);
const product = computed(() => productsStore.getProductBySlug(slug.value) || null);

const currentImage = ref({
  url: product.value?.photoUrl,
  webp: product.value?.photoWebp,
});

const counterBlock = ref(null);
const favoriteBtn = ref(null);
const favoriteBtnIcon = ref(null);

const setCurrentImage = (image) => {
  currentImage.value = image;
};

const characteristicTitles = {
  origin: 'Походження',
  type: 'Тип',
  teaType: 'Тип',
  beanType: 'Тип зерен',
  flavorNotes: 'Смак',
  roastLevel: 'Рівень обсмаження',
  weight: 'Вага',
  certification: 'Сертифікація',
  processing: 'Промивка',
  contents: 'Вміст',
  quantity: 'Кількість в наборі',
  caffeine: 'Вміст кофеїну',
  preparation: 'Застосування',
  brewingTime: 'Час заварювання',
  brewingTemp: 'Температура заварювання',
  capacity: "Об'єм",
  material: 'Матеріал',
  power: 'Живлення',
  recommendedUse: 'Рекомендація до застосування',
};

const productCharacteristics = computed(() => {
  const characteristics = product.value?.characteristics || {};
  return Object.entries(characteristics)
    .filter(([_, value]) => value)
    .map(([key, value]) => ({
      title: characteristicTitles[key] || 'Характеристика',
      value,
    }));
});

const productCount = computed(() => {
  if (!product.value?.id) return 0;
  return cartStore.getQuantityById(String(product.value.id));
});

function handleFavorite(product) {
  productsStore.toggleFavorite(product.id);
}

const addToCart = (product) => {
  cartStore.addToCart(product);
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

watch(
  product,
  (newProduct) => {
    if (newProduct) {
      currentImage.value = {
        url: newProduct.photoUrl || null,
        webp: newProduct.photoWebp || null,
      };
      // prefer title, fallback to name
      const title = newProduct.title || newProduct.name || 'Товар';
      document.title = `${title} | Назва`;
    } else {
      currentImage.value = null;
      // можно вернуть дефолтный title если надо
      // document.title = 'Название магазина';
    }
  },
  { immediate: true },
);

onMounted(async () => {
  if (!productsStore.products.length) {
    try {
      await productsStore.fetchProducts();
      await productsStore.fetchFavorites();
    } catch (err) {
      console.error('Помилка завантаження продуктів', err);
      errorNotification('Не вдалося завантажити товари');
    }
  }
});
</script>

<template>
  <section v-if="product" class="product-section">
    <div class="cont">
      <ProductBack></ProductBack>
      <div class="product-section__wrap">
        <ProductMedia
          :sale="product.onSale"
          :image-url="product.photoUrl"
          :image-webp="product.photoWebp"
          :images-gallery="product.images"
        ></ProductMedia>
        <div class="product-section__content">
          <h2 class="product-section__title large-title-3" data-view="fade-l">
            {{ product.name }}
          </h2>
          <!--<div class="content-element product-section__review small-size">
            {{ product.description }}
          </div>-->

          <div class="content-element product-section__text small-size">
            {{ product.description }}
          </div>

          <ul class="product-section__list">
            <li
              v-for="(char, index) in productCharacteristics"
              :key="index"
              class="content-element product-section__list-item small-size"
            >
              <span>{{ char.title }}:</span>
              <strong>{{ char.value }}</strong>
            </li>
          </ul>

          <div class="product-section__actions">
            <div class="product-section__price-wr">
              <div v-if="product.onSale" class="product-section__price-old">
                {{ product.price.toFixed(2).replace('.', ',') }}
              </div>
              <div class="product-section__price-info">
                <div class="product-section__price">
                  {{
                    !product.onSale
                      ? product.price.toFixed(2).replace('.', ',')
                      : product.newPrice.toFixed(2).replace('.', ',')
                  }}
                </div>
                <div class="product-section__price-unit">₴</div>
                <div class="product-section__price-slash">/</div>
                <div class="product-section__price-quantity">1 шт.</div>
              </div>
            </div>

            <div class="product-section__detail-buttons">
              <ButtonsWrapper additional-class="product-section__detail-top-buttons">
                <IconBtn
                  additional-class="orange-type product-section__favorite"
                  ref="favoriteBtn"
                  :class="product.isFavorite ? 'active' : ''"
                  @click="handleFavorite(product)"
                >
                  <i
                    ref="favoriteBtnIcon"
                    :class="product.isFavorite ? 'icon-heart-fill' : 'icon-heart'"
                  ></i>
                </IconBtn>
              </ButtonsWrapper>
              <div
                ref="counterBlock"
                class="counter-parent-toggle product-section__btn-counter"
                :class="productCount > 0 ? 'active' : ''"
              >
                <BaseButton @click="addToCart(product)">
                  Додати в кошик <i class="icon-cart"></i>
                </BaseButton>
                <BaseCounter
                  :id="`product-swiper-counter-${product.id}`"
                  size="big"
                  additionalClass="product-section__counter"
                  :productId="product.id"
                  v-model:value="productCount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails
        :product-type="product.productType"
        :reviews="product.reviews"
        :detailed-description="product.detailedDescription"
      ></ProductDetails>
    </div>
  </section>
</template>

<style scoped></style>
