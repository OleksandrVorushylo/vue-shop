<script setup>
import './cart.scss';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { useCartStore } from '@/stores/cart.store.js';
import { useScrollLockStore } from '@/stores/scrollLock.store.js';
import { useMenuOpenStore } from '@/stores/menuState.store.js';
import { useCartOpenStore } from '@/stores/cartState.store.js';
import { vAdjustScrollbarWidth, vMarkScrollable } from '@fluejs/noscroll/vue';

const cartStore = useCartStore();

const scrollLockStore = useScrollLockStore();
const menuOpenStore = useMenuOpenStore();
const cartOpenStore = useCartOpenStore();

import { ref, onMounted, watch, computed } from 'vue';
import CartItem from '@/components/cart/CartItem.vue';
import ProductCard from '@/components/ui/product-card/ProductCard.vue';

const cartComponent = ref(null);
const cartOpenBtn = ref(null);
const cartCloseBg = ref(null);
const cartCloseMobBtn = ref(null);
const cartOpenListBtn = ref(null);
const cart = ref(null);

const cartTitle = ref(null);
const cartOpenBtnText = ref('Розкрити');

const cartList = ref(null);
const cartListContainer = ref(null);
const cartVisibleBottom = ref(null);
const cartResult = ref(null);
let scrollList = null;
let openDelay = 500;

// const isCartOpen = ref(false);

function toggleCartFunc() {
  cartOpenStore.toggleCart();
}

const scrollListCalc = () => {
  if (!cartList.value || !cartTitle.value || !cartComponent.value) return;

  const isOpen = cartOpenStore.isCartOpen;

  const offset = isOpen
    ? cartTitle.value.clientHeight + cartResult.value.clientHeight + cartOpenBtn.value.clientHeight
    : cartTitle.value.clientHeight +
      cartVisibleBottom.value.clientHeight +
      cartOpenBtn.value.clientHeight;

  cartList.value.style.maxHeight = `calc(100% - ${offset}px)`;
  cartListContainer.value.style.minHeight = `${cartList.value.clientHeight}px`;
};

function enableScrollListFunc() {
  if (cartList.value) {
    scrollList = new SimpleBar(cartList.value);
  }
}

function disableScrollListFunc() {
  if (scrollList) {
    scrollList.unMount();
    scrollList = null;
  }
}

window.addEventListener('resize', scrollListCalc);

const totalPrice = computed(() => cartStore.totalPrice);
const totalQuantity = computed(() => cartStore.totalQuantity);

onMounted(() => {
  scrollListCalc();
  enableScrollListFunc();
});

onMounted(() => {
  watch(
    () => cartOpenStore.isCartOpen,
    (isOpen) => {
      if (cartComponent.value !== null) {
        console.log('Cart state changed:', isOpen);
        if (isOpen) {
          cartComponent.value.classList.add('is-open');
          cartComponent.value.style.zIndex = 1000;
          scrollListCalc();
          cartOpenBtnText.value = 'Згорнути';

          if (!menuOpenStore.isMenuOpen) {
            scrollLockStore.lockScroll();
          }

          if (cartOpenListBtn.value) {
            cartOpenListBtn.value.classList.add('hidden');
          }
        } else {
          cartComponent.value.classList.remove('is-open');
          setTimeout(() => {
            cartComponent.value.style.zIndex = 800;
          }, openDelay);
          scrollListCalc();
          cartOpenBtnText.value = 'Розкрити';
          scrollLockStore.unlockScroll();

          if (cartList.value) {
            cartList.value.scrollTo({ top: 0, behavior: 'smooth' });
          }
          if (cartOpenListBtn.value) {
            cartOpenListBtn.value.classList.remove('hidden');
          }
        }
      }
    },
    { immediate: true },
  );
});
</script>

<template>
  <div class="cart-container-page-container">
    <div ref="cartComponent" class="cart-container">
      <div ref="cartCloseBg" class="cart-close-wrapper" @click="toggleCartFunc"></div>
      <div ref="cart" class="cart">
        <button @click="toggleCartFunc" ref="cartCloseMobBtn" class="close-btn cart__close">
          <i class="icon-close"></i>
        </button>
        <div ref="cartTitle" class="cart__title">
          <div class="cart__title-counter">
            <div class="cart__title-icon">
              <i class="icon-cart-second"></i>
            </div>
            <div class="cart__title-count">({{ totalQuantity }})</div>
          </div>
          <div class="cart__title-text">Кошик</div>
          <div class="cart__title-open">
            <div class="cart__title-text">Кошик</div>
            <div class="cart__title-count">({{ totalQuantity }})</div>
          </div>
        </div>
        <div v-mark-scrollable ref="cartList" class="cart__list">
          <div ref="cartOpenListBtn" @click="toggleCartFunc" class="cart__list-open-btn"></div>
          <div ref="cartListContainer" class="cart__list-container">
            <div class="cart__prev-list">
              <div v-if="cartStore.items.length > 0" class="cart__prev-list-wrap">
                <div v-for="item in cartStore.items" :key="item.id" class="cart__prev-item">
                  <div class="cart__prev-item-image">
                    <picture>
                      <source :srcset="item.photoWepb" type="image/webp" />
                      <img loading="lazy" :src="item.photoUrl" alt="Image" />
                    </picture>
                  </div>
                  <div class="cart__prev-item-sum">
                    {{ item.newPrice ? item.newPrice : item.price }}
                    <span class="cart__prev-item-unit">₴</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full" v-if="cartStore.items.length > 0">
              <CartItem
                v-for="item in cartStore.items"
                :key="item.id"
                :item="item"
                :productId="item.id"
                :image-url="item.photoUrl"
                :image-webp="item.photoWepb"
                :title="item.name"
                :info="item.description"
                :price="Number(item.price)"
                :sale="item.onSale"
                :newPrice="Number(item.newPrice)"
                :counter-value="cartStore.getQuantityById(String(item.id))"
              ></CartItem>
            </div>

            <!--            <div class="w-full" v-else>
              <p>Ваша корзина пуста.</p>
            </div>-->
          </div>
        </div>
        <div ref="cartOpenBtn" class="cart__open-btn" @click="toggleCartFunc">
          <div class="cart__open-btn-icon"><i class="icon-arrow-prev"></i></div>
          <div class="cart__open-btn-text">{{ cartOpenBtnText }}</div>
        </div>
        <div ref="cartVisibleBottom" class="cart__visible-bottom">
          <div class="cart__first-result">
            <p class="cart__first-result-text">Сума</p>
            <div class="cart__result-sum">
              {{ totalPrice }} <span class="cart__result-sum-unit">₴</span>
            </div>
            <BaseButton to="/order" additional-class="cart__first-result-btn">Оплатити</BaseButton>
          </div>
        </div>
        <div ref="cartResult" class="cart__result">
          <div class="cart__result-container">
            <div class="cart__result-content">
              <div class="cart__result-sum">
                <span class="cart__result-sum-text">Сума</span>
                {{ totalPrice }} <span class="cart__result-sum-unit">₴</span>
              </div>
              <BaseButton
                @click="cartStore.createOrder()"
                to="/order"
                additional-class="orange-type cart__result-btn"
                >Оплатити замовлення
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
