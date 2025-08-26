<script setup>
import './on-sale.scss';
</script>

<template>
  <section class="on-sale-sec">
    <div class="cont">
      <div class="on-sale-sec__wrap">
        <h2 class="large-title-2 on-sale-sec__title">Вибрані</h2>
        <div class="content-element body-text-18 on-sale-sec__text">
          <p>
            Не потрібно шукати улюблені продукти<br />
            по всіх магазинах, бо вони зібрані в одному місці
          </p>
        </div>
        <div class="on-sale-sec__container">
          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-1.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-1.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                ELEON Екстра Вірджин оливкова олія Класична
              </h3>
              <div class="content-element product-card__text">
                <p>6×1 літр</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">14,50</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-1'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-1"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-1'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-2'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-2"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-2'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-3'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-3"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-3'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-4'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-4"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-4'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-5'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-5"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-5'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-6'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-6"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-6'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-7'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-7"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-7'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-8'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-8"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-8'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <a href="#" class="product-card__link"></a>
            <div class="product-card__image-container">
              <div class="image-aspect-ratio product-card__image">
                <picture>
                  <source srcset="/images/product-card-2.jpg?as=webp" type="image/webp" />
                  <img src="/images/product-card-2.jpg" alt="Image" />
                </picture>
              </div>

              <div class="product-card__banner"><i class="icon-percent"></i> Акція</div>

              <div class="btn-icon product-card__favorite">
                <i class="icon-heart"></i>
              </div>
            </div>
            <div class="product-card__content">
              <h3 class="title-4 product-card__title line-clamp-3">
                Зелені оливки Халкідікі, без кісточок, в розсолі в пет-пакеті
              </h3>
              <div class="content-element product-card__text">
                <p>0.45кг, 071 -90 Atlas</p>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__info">
                  <div class="product-card__info-price">199,38</div>
                  <div class="product-card__info-unit">₴</div>
                </div>
                <div class="product-card__btn-counter">
                  <div class="counter product-card__counter">
                    <button
                      class="counter-btn counter-btn-minus"
                      onclick="decreaseInputNumber('product-sale-counter-9'); return false;"
                    >
                      <i class="icon-minus"></i>
                    </button>
                    <input
                      class="checkout-input"
                      min="1"
                      step="1"
                      id="product-sale-counter-9"
                      type="number"
                      value="1"
                    />
                    <button
                      class="counter-btn counter-btn-plus"
                      onclick="increaseInputNumber('product-sale-counter-9'); return false;"
                    >
                      <i class="icon-plus"></i>
                    </button>
                  </div>
                  <button class="btn btn-second btn-small btn-small-cart">
                    <span class="btn__shadow"></span>
                    <span class="btn__edge"></span>
                    <span class="btn__text">В кошик <i class="icon-cart"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
