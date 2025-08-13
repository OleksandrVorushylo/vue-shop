<script setup>
import './cart.scss'
import BaseButton from '@/components/base/buttons/button/BaseButton.vue'
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.min.css'

import { useScrollLockStore } from '@/stores/scrollLock.store.js'
import { useMenuOpenStore } from '@/stores/menuState.store.js'
import { vAdjustScrollbarWidth, vMarkScrollable } from '@fluejs/noscroll/vue'

const scrollLockStore = useScrollLockStore()
const menuOpenStore = useMenuOpenStore()

import { ref, onMounted, computed } from 'vue'
import ProductCard from '@/components/ui/product-card/ProductCard.vue'
import CartItem from '@/components/cart/CartItem.vue'

const cartComponent = ref(null)
const cartOpenBtn = ref(null)
const cartCloseBg = ref(null)
const cartCloseMobBtn = ref(null)
const cart = ref(null)

const cartTitle = ref(null)
const cartOpenBtnText = ref('Розкрити')
const cartList = ref(null)
const cartVisibleBottom = ref(null)
const cartResult = ref(null)
let scrollList = null
let openDelay = 500

const isCartOpen = ref(false)

function openCartFunc() {
  isCartOpen.value = !isCartOpen.value

  if (isCartOpen.value) {
    cartComponent.value.classList.add('is-open')
    cartComponent.value.style.zIndex = 1000
    scrollListCalc()
    cartOpenBtnText.value = 'Згорнути'
    console.log('menuOpenStore', menuOpenStore.isMenuOpen)

    if (menuOpenStore.isMenuOpen !== true) {
      scrollLockStore.lockScroll()
    }
  } else {
    cartComponent.value.classList.remove('is-open')
    setTimeout(() => {
      cartComponent.value.style.zIndex = 800
    }, openDelay)
    scrollListCalc()
    cartOpenBtnText.value = 'Розкрити'
    scrollLockStore.unlockScroll()
    if (cartList.value) {
      cartList.value.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const scrollListCalc = () => {
  if (!cartList.value || !cartTitle.value || !cartComponent.value) return

  const isOpen = cartComponent.value.classList.contains('is-open')
  const offset = isOpen
    ? cartTitle.value.clientHeight + cartResult.value.clientHeight + cartOpenBtn.value.clientHeight
    : cartTitle.value.clientHeight +
      cartVisibleBottom.value.clientHeight +
      cartOpenBtn.value.clientHeight

  cartList.value.style.maxHeight = `calc(100% - ${offset}px)`
}

function enableScrollListFunc() {
  if (cartList.value) {
    scrollList = new SimpleBar(cartList.value)
  }
}

function disableScrollListFunc() {
  if (scrollList) {
    scrollList.unMount()
    scrollList = null
  }
}

window.addEventListener('resize', scrollListCalc)

onMounted(() => {
  scrollListCalc()
  enableScrollListFunc()
})
</script>

<template>
  <div class="cart-container-page-container">
    <div ref="cartComponent" class="cart-container">
      <div ref="cartCloseBg" class="cart-close-wrapper" @click="openCartFunc"></div>
      <div ref="cart" class="cart">
        <button @click="openCartFunc" ref="cartCloseMobBtn" class="close-btn cart__close">
          <i class="icon-close"></i>
        </button>
        <div ref="cartTitle" class="cart__title">
          <div class="cart__title-counter">
            <div class="cart__title-icon">
              <i class="icon-cart-second"></i>
            </div>
            <div class="cart__title-count">(12)</div>
          </div>
          <div class="cart__title-text">Кошик</div>
          <div class="cart__title-open">
            <div class="cart__title-text">Кошик</div>
            <div class="cart__title-count">(12)</div>
          </div>
        </div>
        <div v-mark-scrollable ref="cartList" class="cart__list">
          <div class="cart__list-container">
            <div class="cart__prev-list">
              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-1.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-1.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  400,40
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-2.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-2.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  1 200
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-3.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-3.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  400
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-4.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-4.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  1 200
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-5.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-5.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  199,38
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-6.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-6.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  1 200
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-7.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-7.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  400
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>

              <a href="#" class="cart__prev-item">
                <div class="cart__prev-item-image">
                  <picture>
                    <source srcset="/images/prev-cart-img-8.png?as=webp" type="image/webp" />
                    <img loading="lazy" src="/images/prev-cart-img-8.png" alt="Image" />
                  </picture>
                </div>
                <div class="cart__prev-item-sum">
                  1 200
                  <span class="cart__prev-item-unit">₴</span>
                </div>
              </a>
            </div>

            <CartItem
              :image-url="'/images/product-card-1.jpg'"
              :image-webp="'/images/product-card-1.jpg'"
              :title="'ELEON Екстра Вірджин оливкова олія Класична'"
              :info="'6×1 літр'"
              :price="14.5"
            ></CartItem>
          </div>
        </div>
        <div ref="cartOpenBtn" class="cart__open-btn" @click="openCartFunc">
          <div class="cart__open-btn-icon"><i class="icon-arrow-prev"></i></div>
          <div class="cart__open-btn-text">{{ cartOpenBtnText }}</div>
        </div>
        <div ref="cartVisibleBottom" class="cart__visible-bottom">
          <div class="cart__first-result">
            <p class="cart__first-result-text">Сума</p>
            <div ref="cartResult" class="cart__result-sum">
              1 200,38<span class="cart__result-sum-unit">₴</span>
            </div>
            <BaseButton additional-class="cart__first-result-btn">Оплатити</BaseButton>
          </div>
        </div>
        <div class="cart__result">
          <div class="cart__result-container">
            <div class="cart__result-content">
              <div class="cart__result-sum">
                <span class="cart__result-sum-text">Сума</span>
                1 200,38<span class="cart__result-sum-unit">₴</span>
              </div>
              <BaseButton additional-class="orange-type cart__result-btn"
                >Оплатити замовлення
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
