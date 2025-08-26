<script setup></script>

<template>
  <div class="sections-container">
    <section class="product-section">
      <div class="cont">
        <div class="product-section__buttons">
          <a class="btn-link reverse-type" href="{LINK:products}">
            <div class="btn-link__icon">
              <i class="icon-arrow-right"></i>
            </div>
            <div class="btn-link__text">Повернутись назад</div>
          </a>
        </div>
        <div class="product-section__wrap">
          <div class="product-section__slider product-swiper-wr">
            <div class="swiper swiper-main">
              <div class="swiper-wrapper">
                <div class="product-section__image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-1.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-1.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-2.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-2.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-3.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-3.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-4.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-4.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__image swiper-slide">
                  <picture>
                    <source srcset="/images/categories-img-11.webp" type="image/webp" />
                    <img loading="lazy" src="/images/categories-img-11.jpg" alt="Image" />
                  </picture>
                </div>
              </div>
            </div>
            <div class="swiper swiper-thumbs">
              <div class="swiper-wrapper">
                <div class="product-section__prev-image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-1.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-1.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__prev-image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-2.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-2.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__prev-image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-3.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-3.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__prev-image swiper-slide">
                  <picture>
                    <source srcset="/images/product-card-4.webp" type="image/webp" />
                    <img loading="lazy" src="/images/product-card-4.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__prev-image swiper-slide">
                  <picture>
                    <source srcset="/images/categories-img-11.webp" type="image/webp" />
                    <img loading="lazy" src="/images/categories-img-11.jpg" alt="Image" />
                  </picture>
                </div>
              </div>
            </div>
            <div class="swiper-buttons">
              <div class="swiper-button swiper-button-prev swiper-button-second"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button swiper-button-next swiper-button-second"></div>
            </div>
          </div>
          <div class="product-section__content">
            <h2 class="product-section__title large-title-3" data-view="fade-l">
              ELEON Екстра Вірджин оливкова олія Класична
            </h2>
            <div class="content-element product-section__review small-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores autem
              beatae blanditiis debitis distinctio eaque inventore laborum laudantium magni nemo
              nobis quaerat, reprehenderit saepe temporibus, tenetur totam ut? Repudiandae.
            </div>

            <div class="content-element product-section__text small-size">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum earum enim illum
              impedit nemo odio tempora vitae. Asperiores aut consequuntur deserunt enim explicabo,
              in nesciunt numquam quidem velit voluptas?
            </div>

            <ul class="product-section__list">
              <li class="content-element product-section__list-item small-size">
                <span>Термін придатності:</span>
                <strong>10</strong>
              </li>
              <li class="content-element product-section__list-item small-size">
                <span>Середня вага однієї скумбрії:</span>
                <strong>100</strong>
              </li>
            </ul>

            <div class="product-section__footer" id="price-box-1">
              <div class="meta-select product-section__select">
                <label for="priceId">Вид продукції <span>*</span></label>
                <select class="choices-select" id="priceId" data-choices>
                  <option value="1">Lorem 1</option>
                  <option value="2">Lorem 2</option>
                  <option value="3">Lorem 3</option>
                </select>
              </div>
              <div class="product-card product-section__card">
                <div class="product-card__bottom">
                  <div class="product-card__info">
                    <div class="product-card__info-price" id="product_price">200</div>
                    <div class="product-card__info-unit">₴</div>
                    <div class="product-card__info-slash">/</div>
                    <div class="product-card__info-quantity">1 шт.</div>
                  </div>
                  <div class="product-card__detail-buttons">
                    <div class="btn-icon orange-type product-card__favorite">
                      <i class="icon-heart-fill"></i>
                    </div>
                    <div class="counter-parent-toggle product-card__btn-counter">
                      <button class="btn">
                        <span class="btn__shadow"></span>
                        <span class="btn__edge"></span>
                        <span class="btn__text">Додати в кошик <i class="icon-cart"></i></span>
                      </button>
                      <div class="counter product-card__counter">
                        <button
                          class="counter-btn counter-btn-minus"
                          onclick="decreaseInputNumber('product-swiper-counter-1'); return false;"
                        >
                          <i class="icon-minus"></i>
                        </button>
                        <input
                          class="checkout-input"
                          min="0"
                          step="1"
                          id="product-swiper-counter-1"
                          type="number"
                          value="0"
                        />
                        <button
                          class="counter-btn counter-btn-plus"
                          onclick="increaseInputNumber('product-swiper-counter-1'); return false;"
                        >
                          <i class="icon-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-view-sec">
      <div class="cont">
        <div class="product-view-sec__wrap">
          <div class="product-view-sec__content">
            <div class="product-view-sec__tabs-wr">
              <div class="product-view-swiper-wr product-view-sec__tabs">
                <div class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide product-view-sec__tab-item is-active">Опис товару</div>
                    <div class="swiper-slide product-view-sec__tab-item">Характеристики</div>
                    <div class="swiper-slide product-view-sec__tab-item">Відгуки про товар</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-view-sec__tabs-container">
              <div class="product-view-sec__tab-item-content is-active">
                <div class="content-element product-view-sec__tab-item-text">
                  <h3>Олія конопляна, холодного віджиму EXTRA VIRGIN</h3>
                  <p>
                    Конопляна олія холодного віджиму є дуже корисним продуктом, який має безліч
                    переваг для здоров'я, зокрема і для процесу схуднення.
                  </p>
                  <h3>Як використовувати конопляну олію?</h3>
                  <ul>
                    <li>Додавайте її в салати, смузі або йогурти.</li>
                    <li>Використовуйте як заправку для страв або в приготуванні соусів.</li>
                  </ul>
                  <p>
                    Конопляна олія холодного віджиму – це не лише смачний, але й корисний продукт,
                    який може допомогти у досягненні ваших цілей щодо схуднення!
                  </p>
                </div>
                <div class="buttons product-view-sec__tab-item-buttons">
                  <a href="{LINK:delivery}" class="btn btn-second">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">Доставка</span>
                  </a>
                </div>
              </div>

              <div class="product-view-sec__tab-item-content">
                <div class="content-element product-view-sec__tab-item-text">
                  <h3>Ось кілька ключових моментів про гірчичну олію:</h3>
                  <p>
                    <strong> 1. Висока температура димлення </strong>
                  </p>
                  <p>
                    Гірчична олія має високу температуру димлення (близько 270 °C), що дозволяє
                    використовувати її для смаження, випікання та інших методів термічної обробки
                    без ризику утворення шкідливих сполук.
                  </p>
                  <p>
                    <strong> 2. Багатство корисних речовин </strong>
                  </p>
                  <p>
                    Олія містить ненасичені жири, антиоксиданти, вітаміни (особливо вітамін Е) та
                    мінерали, які сприяють загальному зміцненню організму.
                  </p>
                  <p>
                    <strong> 3. Позитивний вплив на серцево-судинну систему </strong>
                  </p>
                  <p>
                    Регулярне вживання гірчичного масла може допомогти знизити рівень шкідливого
                    холестерину та поліпшити здоров'я серця.
                  </p>
                  <p>
                    <strong> 4. Антибактеріальні властивості </strong>
                  </p>
                  <p>
                    Гірчична олія має природні антибактеріальні властивості, які допомагають
                    боротися з інфекціями.
                  </p>
                  <p>
                    <strong> 5. Поліпшення травлення </strong>
                  </p>
                  <p>
                    Завдяки своїм природним компонентам вона може стимулювати апетит і поліпшувати
                    процеси травлення.
                  </p>
                  <p>
                    <strong> 6. Використання в косметиці </strong>
                  </p>
                  <p>
                    Гірчична олія також може бути корисною в косметичних процедурах, допомагаючи
                    зволожувати і кондиціонувати шкіру.
                  </p>
                </div>
              </div>

              <div class="product-view-sec__tab-item-content">
                <div class="content-element product-view-sec__tab-item-testimonials">
                  <div class="product-view-sec__tab-item-testimonial">
                    <div class="content-element product-view-sec__tab-item-text">
                      <p>
                        Конопляна олія EXTRA VIRGIN — це просто супер! Додаю її в салати та смузі —
                        смак виходить ніжний і приємний. Особливо круто, що вона корисна для
                        здоров'я і може допомогти зі схудненням. Легко використовувати щодня, і
                        відчувається, що робиш щось хороше для свого організму. Рекомендую всім
                        спробувати!
                      </p>
                    </div>
                    <div class="product-view-sec__tab-item-footer">
                      <div class="product-view-sec__tab-item-author-img">
                        <picture>
                          <source srcset="/images/profile-image.webp" type="image/webp" />
                          <img loading="lazy" src="/images/profile-image.jpg" alt="Image" />
                        </picture>
                      </div>

                      <div class="product-view-sec__tab-item-author-name">Гаррі Поттер</div>
                    </div>
                  </div>

                  <div class="product-view-sec__tab-item-testimonial">
                    <div class="content-element product-view-sec__tab-item-text">
                      <blockquote>
                        <p>
                          Конопляна олія EXTRA VIRGIN — це просто супер! Додаю її в салати та смузі
                          — смак виходить ніжний і приємний. Особливо круто, що вона корисна для
                          здоров'я і може допомогти зі схудненням. Легко використовувати щодня, і
                          відчувається, що робиш щось хороше для свого організму. Рекомендую всім
                          спробувати!
                        </p>
                      </blockquote>
                    </div>
                    <div class="product-view-sec__tab-item-footer">
                      <div class="product-view-sec__tab-item-author-img">
                        <picture>
                          <source srcset="/images/profile-image.webp" type="image/webp" />
                          <img loading="lazy" src="/images/profile-image.jpg" alt="Image" />
                        </picture>
                      </div>

                      <div class="product-view-sec__tab-item-author-name">Драко Малфой</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
