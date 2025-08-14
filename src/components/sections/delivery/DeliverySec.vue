<script setup>
import './delivery.scss'
</script>

<template>
  <section class="delivery-sec">
    <div class="cont">
      <div class="delivery-sec__wrap">
        <div class="delivery-sec__content">
          <h1 class="large-title-3 delivery-sec__title">Умови доставки</h1>
          <div class="delivery-sec__subtitle">
            <i class="icon-date-time"></i>
            <span>Графік роботи</span>
          </div>
          <div class="content-element title-5 delivery-sec__info">
            <p>Доставка працює з пн-пт 08:00 до 22:00</p>
          </div>
          <div class="delivery-sec__subtitle">
            <i class="icon-date-time"></i>
            <span>Умови доставки</span>
          </div>
          <div class="delivery-sec__slider delivery-swiper-wr">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide delivery-sec__item">
                  <div class="delivery-sec__item-title">Брюховичі</div>
                  <div class="delivery-sec__item-content">
                    <div class="content-element body-text-17 delivery-sec__item-text">
                      <p>
                        Доставка працює<br />
                        від суми замовлення
                      </p>
                    </div>
                    <div class="delivery-sec__item-sum body-text-18">800 грн</div>
                  </div>
                </div>

                <div class="swiper-slide delivery-sec__item">
                  <div class="delivery-sec__item-title">
                    Бірки, Ясниська, Рокитне, Воля-Гомулецька
                  </div>
                  <div class="delivery-sec__item-content">
                    <div class="content-element body-text-17 delivery-sec__item-text">
                      <p>
                        Доставка працює<br />
                        від суми замовлення
                      </p>
                    </div>
                    <div class="delivery-sec__item-sum body-text-18">1 000 грн</div>
                  </div>
                </div>

                <div class="swiper-slide delivery-sec__item">
                  <div class="delivery-sec__item-title">Район Чорновола</div>
                  <div class="delivery-sec__item-content">
                    <div class="content-element body-text-17 delivery-sec__item-text">
                      <p>
                        Доставка працює<br />
                        від суми замовлення
                      </p>
                    </div>
                    <div class="delivery-sec__item-sum body-text-18">1 500 грн</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-buttons">
              <div class="swiper-scrollbar swiper-scrollbar-second"></div>
              <div class="swiper-button-prev swiper-button swiper-button-second"></div>
              <div class="swiper-button-next swiper-button swiper-button-second"></div>
            </div>
          </div>
        </div>
        <div class="delivery-sec__map-container">
          <div class="image-aspect-ratio delivery-sec__map-image">
            <picture>
              <source srcset="/images/map-lviv.jpg?as=webp" type="image/webp" />
              <img loading="lazy" src="/images/map-lviv.jpg" alt="Image" />
            </picture>
          </div>
          <div class="delivery-sec__map-markers">
            <div style="--top: 0.52%; --left: 12.59%" class="delivery-sec__map-marker"></div>
            <div style="--top: 11.71%; --left: 12.59%" class="delivery-sec__map-marker"></div>
            <div style="--top: 18.36%; --left: 13.11%" class="delivery-sec__map-marker"></div>
            <div style="--top: 16.61%; --left: 20.98%" class="delivery-sec__map-marker"></div>
            <div style="--top: 36.89%; --left: 4.72%" class="delivery-sec__map-marker"></div>
            <div style="--top: 48.78%; --left: 47.55%" class="delivery-sec__map-marker"></div>
            <div style="--top: 60.49%; --left: 36.89%" class="delivery-sec__map-marker"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
