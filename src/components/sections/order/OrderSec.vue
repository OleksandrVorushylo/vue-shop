<script setup>
import './order.scss';
import OrderCart from '@/components/order-cart/OrderCart.vue';
</script>

<template>
  <section class="order">
    <div class="cont">
      <div class="order__wrap">
        <div class="order__container">
          <h1 class="large-title-4 order__title">Оформлення замовлення</h1>
          <form class="order__form">
            <div class="order__form-grid">
              <div class="title-4 order__form-title">Персональні дані</div>
              <div class="meta-input focused-start col-span-full">
                <input id="full-name" type="text" inputmode="text" placeholder="" />
                <label for="full-name">Ваше прізвище та ім’я <span>*</span></label>
                <span class="input-info"></span>
              </div>

              <div class="meta-input focused-start">
                <input id="email" type="email" inputmode="email" placeholder="" />
                <label for="email">Адреса електронної пошти <span>*</span></label>
                <span class="input-info"></span>
              </div>

              <div class="meta-input focused-start">
                <input id="phone" type="tel" inputmode="tel" placeholder="" />
                <label for="phone">Ваш номер телефону <span>*</span></label>
                <span class="input-info"></span>
              </div>

              <div class="title-4 order__form-title">Адреса доставки</div>

              <div class="meta-select product-section__select col-span-full">
                <label for="city">Місто <span>*</span></label>
                <select class="choices-select" id="city" data-choices>
                  <option value="Lorem-1">Львів</option>
                  <option value="Lorem-2">Львів</option>
                  <option value="Lorem-3">Львів</option>
                  <option value="Lorem-4">Львів</option>
                </select>
              </div>

              <div class="order__form-grid-second col-span-full">
                <div class="meta-input focused-start col-span-2">
                  <input id="address" type="text" inputmode="text" />
                  <label for="address">Вулиця</label>
                  <span class="input-info"></span>
                </div>

                <div class="meta-input focused-start">
                  <input id="address-2" type="text" inputmode="text" />
                  <label for="address-2">Будинок <span>*</span></label>
                  <span class="input-info"></span>
                </div>

                <div class="meta-input focused-start">
                  <input id="address-3" type="text" inputmode="text" />
                  <label for="address-3">Під’їзд</label>
                  <span class="input-info"></span>
                </div>

                <div class="meta-input focused-start">
                  <input id="address-4" type="text" inputmode="text" />
                  <label for="address-4">Поверх</label>
                  <span class="input-info"></span>
                </div>

                <div class="meta-input focused-start">
                  <input id="address-5" type="text" inputmode="text" />
                  <label for="address-5">Квартира</label>
                  <span class="input-info"></span>
                </div>
              </div>
              <div class="title-4 order__form-title">Як контактувати?</div>
              <div class="order__form-checkboxes col-span-full">
                <label class="meta-checkbox">
                  <input checked type="radio" name="contact-type" value="" />
                  <span class="meta-checkbox__box">
                    <span class="circle-clip"></span>
                  </span>
                  <span class="meta-checkbox__text"> Зателефонувати </span>
                </label>
                <label class="meta-checkbox">
                  <input type="radio" name="contact-type" value="" />
                  <span class="meta-checkbox__box">
                    <span class="circle-clip"></span>
                  </span>
                  <span class="meta-checkbox__text"> viber </span>
                </label>
                <label class="meta-checkbox">
                  <input type="radio" name="contact-type" value="" />
                  <span class="meta-checkbox__box">
                    <span class="circle-clip"></span>
                  </span>
                  <span class="meta-checkbox__text"> telegram </span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div class="order__container">
          <OrderCart></OrderCart>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
