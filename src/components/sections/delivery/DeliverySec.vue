<script setup>
import './delivery.scss';
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
          <div class="delivery-sec__list">
            <div class="delivery-sec__item">
              <div class="delivery-sec__item-title">Масани (мікрорайон)</div>
              <div class="delivery-sec__item-content">
                <div class="content-element body-text-16 delivery-sec__item-text">
                  <p>
                    Доставка по мікрорайону Масани — безкоштовна<br />
                    при замовленні від <span class="whitespace-nowrap">300 грн</span>
                  </p>
                </div>
                <div class="delivery-sec__item-sum body-text-18">300 грн</div>
              </div>
            </div>

            <div class="delivery-sec__item">
              <div class="delivery-sec__item-title">Центр та інші райони міста</div>
              <div class="delivery-sec__item-content">
                <div class="content-element body-text-16 delivery-sec__item-text">
                  <p>
                    Безкоштовна доставка по місту<br />
                    від <span class="whitespace-nowrap">1 000 грн</span>
                  </p>
                </div>
                <div class="delivery-sec__item-sum body-text-18">1 000 грн</div>
              </div>
            </div>

            <div class="delivery-sec__item">
              <div class="delivery-sec__item-title">Інші райони міста</div>
              <div class="delivery-sec__item-content">
                <div class="content-element body-text-16 delivery-sec__item-text">
                  <p>
                    Доставка по місту від <span class="whitespace-nowrap">1 000 грн</span> —
                    безкоштовно.<br />
                    Якщо сума менша — платна доставка <span class="whitespace-nowrap">100 грн</span>
                  </p>
                </div>
                <div class="delivery-sec__item-sum body-text-18">100 грн</div>
              </div>
            </div>

            <div class="delivery-sec__item">
              <div class="delivery-sec__item-title">За містом / передмістя</div>
              <div class="delivery-sec__item-content">
                <div class="content-element body-text-16 delivery-sec__item-text">
                  <p>
                    Доставка за межі Чернігова<br />
                    від <span class="whitespace-nowrap">1 500 грн</span> або за домовленістю
                  </p>
                </div>
                <div class="delivery-sec__item-sum body-text-18">1 500 грн</div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery-sec__map-container">
          <div class="delivery-sec__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2482.6925830241794!2d31.2369094!3d51.5188557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5464a3afc9bcf%3A0xfc5fd9b4fc9d9d4c!2z0LLRg9C70LjRhtGPINCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwgMjMsINCn0LXRgNC90ZbQs9GW0LIsINCn0LXRgNC90ZbQs9GW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTQwMDA!5e0!3m2!1suk!2sua!4v1758373251976!5m2!1suk!2sua"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <!--          <div class="image-aspect-ratio delivery-sec__map-image">
            <picture>
              <source srcset="/images/map-lviv.jpg?as=webp" type="image/webp" />
              <img loading="lazy" src="/images/map-lviv.jpg" alt="Image" />
            </picture>
          </div>
          <div class="delivery-sec__map-markers">
            <div style="&#45;&#45;top: 0.52%; &#45;&#45;left: 12.59%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 11.71%; &#45;&#45;left: 12.59%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 18.36%; &#45;&#45;left: 13.11%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 16.61%; &#45;&#45;left: 20.98%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 36.89%; &#45;&#45;left: 4.72%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 48.78%; &#45;&#45;left: 47.55%" class="delivery-sec__map-marker"></div>
            <div style="&#45;&#45;top: 60.49%; &#45;&#45;left: 36.89%" class="delivery-sec__map-marker"></div>
          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
