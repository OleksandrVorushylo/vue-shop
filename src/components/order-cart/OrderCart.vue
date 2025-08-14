<script setup>
import './order-cart.scss';
</script>

<template>
  <div class="order-cart order__cart">
    <div class="order__cart-top">
      <div class="order__cart-title">
        <div class="title-3 order__cart-title-text">Кошик</div>
        <div class="title-3 order__cart-title-count">(12)</div>
      </div>
    </div>
    <div class="order-cart__list order__cart-list">
      <div class="order-cart__item">
        <a href="#" class="order-cart__item-link"></a>
        <div class="order-cart__item-image">
          <picture>
            <source srcset="/images/cart-img-1.jpg?as=webp&width=300" type="image/webp" />
            <img src="/images/cart-img-1.jpg?width=300" loading="lazy" alt="Image" />
          </picture>
        </div>

        <div class="order-cart__item-container">
          <div class="order-cart__item-content">
            <div class="order-cart__item-title">
              ELEON Екстра<br />
              Вірджин оливкова<br />
              олія Класична
            </div>
            <div class="order-cart__item-text">6×1 літр</div>
          </div>

          <div class="order-cart__item-result">
            <div class="order-cart__item-info">
              <div class="order-cart__item-old-price">$999.00</div>
              <div class="order-cart__item-price">
                <div class="order-cart__item-count">3 x</div>
                14,50
                <span class="order-cart__item-unit">₴</span>
              </div>
            </div>

            <div class="counter counter-second order-cart__item-counter">
              <button
                class="counter-btn counter-btn-minus"
                onclick="decreaseInputNumber('product-1'); return false;"
              >
                <i class="icon-minus"></i>
              </button>
              <input
                class="checkout-input"
                min="1"
                step="1"
                id="product-1"
                type="number"
                value="2"
              />
              <button
                class="counter-btn counter-btn-plus"
                onclick="increaseInputNumber('product-1'); return false;"
              >
                <i class="icon-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <button class="close-btn order-cart__item-close">
          <i class="icon-close"></i>
        </button>
      </div>

      <div class="order-cart__item">
        <a href="#" class="order-cart__item-link"></a>
        <div class="order-cart__item-image">
          <picture>
            <source srcset="/images/cart-img-2.jpg?as=webp&width=300" type="image/webp" />
            <img src="/images/cart-img-2.jpg?width=300" loading="lazy" alt="Image" />
          </picture>
        </div>

        <div class="order-cart__item-container">
          <div class="order-cart__item-content">
            <div class="order-cart__item-title">
              Грецькі оливки<br />
              Каламата, без кісточок<br />
              в розсолі
            </div>
            <div class="order-cart__item-text">0.2кг</div>
          </div>

          <div class="order-cart__item-result">
            <div class="order-cart__item-info">
              <div class="order-cart__item-price">
                <div class="order-cart__item-count">10 x</div>
                1 200,50
                <span class="order-cart__item-unit">₴</span>
              </div>
            </div>

            <div class="counter counter-second order-cart__item-counter">
              <button
                class="counter-btn counter-btn-minus"
                onclick="decreaseInputNumber('product-2'); return false;"
              >
                <i class="icon-minus"></i>
              </button>
              <input
                class="checkout-input"
                min="1"
                step="1"
                id="product-2"
                type="number"
                value="2"
              />
              <button
                class="counter-btn counter-btn-plus"
                onclick="increaseInputNumber('product-2'); return false;"
              >
                <i class="icon-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <button class="close-btn order-cart__item-close">
          <i class="icon-close"></i>
        </button>
      </div>

      <div class="order-cart__item">
        <a href="#" class="order-cart__item-link"></a>
        <div class="order-cart__item-image">
          <picture>
            <source srcset="/images/cart-img-3.jpg?as=webp&width=300" type="image/webp" />
            <img src="/images/cart-img-3.jpg?width=300" loading="lazy" alt="Image" />
          </picture>
        </div>

        <div class="order-cart__item-container">
          <div class="order-cart__item-content">
            <div class="order-cart__item-title">
              Зелені оливки Халкідікі,<br />
              без кісточок,<br />
              в розсолі в пет-пакеті
            </div>
            <div class="order-cart__item-text">0.45кг, 071 -90 Atlas</div>
          </div>

          <div class="order-cart__item-result">
            <div class="order-cart__item-info">
              <div class="order-cart__item-old-price">$999.00</div>
              <div class="order-cart__item-price">
                <div class="order-cart__item-count">1 x</div>
                199,38
                <span class="order-cart__item-unit">₴</span>
              </div>
            </div>

            <div class="counter counter-second order-cart__item-counter">
              <button
                class="counter-btn counter-btn-minus"
                onclick="decreaseInputNumber('product-3'); return false;"
              >
                <i class="icon-minus"></i>
              </button>
              <input
                class="checkout-input"
                min="1"
                step="1"
                id="product-3"
                type="number"
                value="2"
              />
              <button
                class="counter-btn counter-btn-plus"
                onclick="increaseInputNumber('product-3'); return false;"
              >
                <i class="icon-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <button class="close-btn order-cart__item-close">
          <i class="icon-close"></i>
        </button>
      </div>

      <div class="order-cart__item">
        <a href="#" class="order-cart__item-link"></a>
        <div class="order-cart__item-image">
          <picture>
            <source srcset="/images/cart-img-1.jpg?as=webp&width=300" type="image/webp" />
            <img src="/images/cart-img-1.jpg?width=300" loading="lazy" alt="Image" />
          </picture>
        </div>

        <div class="order-cart__item-container">
          <div class="order-cart__item-content">
            <div class="order-cart__item-title">
              ELEON Екстра<br />
              Вірджин оливкова<br />
              олія Класична
            </div>
            <div class="order-cart__item-text">6×1 літр</div>
          </div>

          <div class="order-cart__item-result">
            <div class="order-cart__item-info">
              <div class="order-cart__item-old-price">$999.00</div>
              <div class="order-cart__item-price">
                <div class="order-cart__item-count">3 x</div>
                14,50
                <span class="order-cart__item-unit">₴</span>
              </div>
            </div>

            <div class="counter counter-second order-cart__item-counter">
              <button
                class="counter-btn counter-btn-minus"
                onclick="decreaseInputNumber('product-4'); return false;"
              >
                <i class="icon-minus"></i>
              </button>
              <input
                class="checkout-input"
                min="1"
                step="1"
                id="product-4"
                type="number"
                value="2"
              />
              <button
                class="counter-btn counter-btn-plus"
                onclick="increaseInputNumber('product-4'); return false;"
              >
                <i class="icon-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <button class="close-btn order-cart__item-close">
          <i class="icon-close"></i>
        </button>
      </div>
    </div>
    <div class="order__cart-info">
      <div class="title-4 order__cart-info-title">Ціна доставки</div>
      <div class="title-4 order__cart-info-text">Доставка: <strong>150₴</strong></div>
    </div>

    <div class="order__cart-info">
      <div class="title-4 order__cart-info-title">Спосіб оплати</div>
      <div class="order__cart-info-checkboxes">
        <label class="meta-checkbox">
          <input checked type="radio" name="pay-type" value="" />
          <span class="meta-checkbox__box">
            <span class="circle-clip"></span>
          </span>
          <span class="meta-checkbox__text"> При отриманні </span>
        </label>
        <label class="meta-checkbox">
          <input type="radio" name="pay-type" value="" />
          <span class="meta-checkbox__box">
            <span class="circle-clip"></span>
          </span>
          <span class="meta-checkbox__text"> На сайті </span>
        </label>
      </div>
    </div>

    <div class="order__cart-sum">
      <div class="order__cart-sum-content">
        <div class="title-3 order__cart-sum-title">Сума</div>
        <div class="large-title-3 order__cart-sum-price">
          1 200,38<span class="order__cart-sum-unit">₴</span>
        </div>
      </div>
      <div class="buttons order__cart-sum-buttons">
        <button class="btn">
          <span class="btn__shadow"></span>
          <span class="btn__edge"></span>
          <span class="btn__text">Оплатити замовлення</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
