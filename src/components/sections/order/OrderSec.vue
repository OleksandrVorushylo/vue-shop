<script setup>
import './order.scss';
import OrderCart from '@/components/order-cart/OrderCart.vue';
import { useScrollLockStore } from '@/stores/scrollLock.store.js';
import { useCartStore } from '@/stores/cart.store.js';
import { useOrdersStore } from '@/stores/orders.store.js';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseRadio from '@/components/base/fields/checkbox-radio/BaseRadio.vue';
import axios from 'axios';
import OrderForm from '@/components/sections/order/OrderForm.vue';
import { computed, ref, provide } from 'vue';

const scrollLockStore = useScrollLockStore();
scrollLockStore.unlockScroll();

const formRef = ref(null);

provide('formControl', {
  submitForm: () => {
    return formRef.value?.submitForm();
  },
  pending: computed(() => formRef.value?.pending ?? false),
  hasErrors: computed(() => formRef.value?.hasErrors ?? true),
  formProgress: computed(() => formRef.value?.formProgress ?? 0),
  paymentType: computed(() => formRef.value?.paymentType ?? 'online'),
  setPaymentType: (value) => {
    return formRef.value?.setPaymentType(value);
  },
});

const cartStore = useCartStore();
const ordersStore = useOrdersStore();

const handleSubmit = async (payload) => {
  console.log('Получены данные из формы:', payload);

  const order = cartStore.createOrder(payload);

  if (!order) {
    console.warn('Корзина пуста');
    return;
  }

  try {
    const orderId = await ordersStore.sendOrder(order);
    console.log('Заказ отправлен с id:', orderId);
  } catch (err) {
    console.error('Ошибка при отправке заказа:', err);
  }
};
</script>

<template>
  <section class="order">
    <div class="cont">
      <div class="order__wrap">
        <div class="order__container">
          <h1 class="large-title-4 order__title">Оформлення замовлення</h1>
          <OrderForm ref="formRef" @submit="handleSubmit"></OrderForm>
        </div>
        <div class="order__container">
          <OrderCart></OrderCart>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
