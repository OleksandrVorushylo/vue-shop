<script setup>
import './order-cart.scss';
import { useCartStore } from '@/stores/cart.store.js';
import CartItem from '@/components/cart/CartItem.vue';
import { computed, inject } from 'vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseRadio from '@/components/base/fields/checkbox-radio/BaseRadio.vue';

const cartStore = useCartStore();

const totalPrice = computed(() => cartStore.totalPrice);
const totalQuantity = computed(() => cartStore.totalQuantity);
const deliveryPrice = 150;

const formControl = inject('formControl', {
  submitForm: () => {
    console.log('No form control found!');
  },
  pending: computed(() => false),
  hasErrors: computed(() => true),
  formProgress: computed(() => 0),
  setPaymentType: (value) => {
    console.log('No setPaymentType method found!', value);
  },
  paymentType: computed(() => 'online'),
});

const handlePaymentTypeChange = (value) => {
  console.log('Payment type changed to:', value);
  formControl.setPaymentType(value);
};
</script>

<template>
  <div class="order-cart order__cart">
    <div class="order__cart-top">
      <div class="order__cart-title">
        <div class="title-3 order__cart-title-text">Кошик</div>
        <div class="title-3 order__cart-title-count">({{ totalQuantity }})</div>
      </div>
    </div>
    <div class="order-cart__list order__cart-list">
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
          :is-order-cart-item="true"
        ></CartItem>
      </div>
    </div>

    <div class="order__cart-info">
      <div class="title-4 order__cart-info-title">Ціна доставки</div>
      <div class="title-4 order__cart-info-text">
        Доставка: <strong>{{ deliveryPrice }}₴</strong>
      </div>
    </div>

    <div class="order__cart-info">
      <div class="title-4 order__cart-info-title">Спосіб оплати</div>
      <div class="order__cart-info-checkboxes">
        <BaseRadio
          :model-value="formControl.paymentType.value"
          :checked="formControl.paymentType.value === 'online'"
          name="pay-type"
          value="online"
          @update:modelValue="handlePaymentTypeChange"
        >
          На сайті
        </BaseRadio>
        <BaseRadio
          :model-value="formControl.paymentType.value"
          :checked="formControl.paymentType.value === 'on-delivery'"
          name="pay-type"
          value="on-delivery"
          @update:modelValue="handlePaymentTypeChange"
        >
          При отриманні
        </BaseRadio>
      </div>
    </div>

    <div class="order__cart-sum">
      <div class="order__cart-sum-content">
        <div class="title-3 order__cart-sum-title">Сума</div>
        <div class="large-title-3 order__cart-sum-price">
          {{ (totalPrice + (totalQuantity > 0 ? deliveryPrice : 0)).toFixed(2).replace('.', ',') }}
          <span class="order__cart-sum-unit">₴</span>
        </div>
      </div>
      <ButtonsWrapper additional-class="order__cart-sum-buttons">
        <BaseButton
          :disabled="formControl.pending.value"
          :class="{ 'is-loading': formControl.pending.value }"
          @click="formControl.submitForm"
        >
          Оплатити замовлення
        </BaseButton>
      </ButtonsWrapper>
    </div>
  </div>
</template>

<style scoped></style>
