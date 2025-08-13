<script setup></script>

<template>
  <div id="content-sticky" class="search-sec__container">
    <aside id="sidebar" class="search-sec__sidebar sidebar">
      <div class="following-sidebar-inner search-sec__sidebar-inner">
        <div class="search-sec__categories">
          <div class="title-3 search-sec__categories-title">Категорії товарів</div>
          <div class="search-sec__categories-list">
            <label class="search-sec__category">
              <input type="checkbox" checked name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Вироби із хліба</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Кондитерські вироби</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Молочна продукція</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">М'ясо та риба</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Крупи та макарони</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text"> Напівфабрикати</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Сніданки</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Сухофрукти та снеки</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Кава та чай</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Солодощі</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Напої</span>
              </div>
            </label>

            <label class="search-sec__category">
              <input type="checkbox" name="categories_list" />
              <div class="btn btn-second">
                <span class="btn__shadow"></span>
                <span class="btn__edge"></span>
                <span class="btn__text">Алкогольні напої</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </aside>
    <div class="search-sec__result">
      <div class="search-sec__result-content">
        <h1 class="large-title-3 search-sec__title">Пошук товарів</h1>
        <form class="search-sec__form">
          <div class="search-sec__search-input">
            <div class="search-sec__search-icon">
              <i class="icon-search-second"></i>
            </div>
            <div class="meta-input not-focused">
              <input id="full-name" type="text" inputmode="text" placeholder="Що будемо шукати?" />
              <label class="sr-only" for="full-name">Що будемо шукати?</label>
              <span class="input-info"></span>
            </div>
            <div class="search-sec__search-clear">
              <i class="icon-clear"></i>
            </div>
          </div>

          <div class="meta-select">
            <label class="sr-only" for="city">Сортувати за...</label>
            <select class="choices-select" id="city" data-choices>
              <option value="">Сортувати за...</option>
              <option value="Lorem-1">Львів</option>
              <option value="Lorem-2">Львів</option>
              <option value="Lorem-3">Львів</option>
              <option value="Lorem-4">Львів</option>
            </select>
          </div>
        </form>
      </div>
      <div class="search-sec__result-grid">
        <div class="product-card">
          <a href="#" class="product-card__link"></a>
          <div class="product-card__image-container">
            <div class="image-aspect-ratio product-card__image">
              <picture>
                <source srcset="./assets/images/product-card-1.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-1.jpg" alt="Image" />
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
                    onclick="decreaseInputNumber('product-result-counter-1'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-1"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-1'); return false;"
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
                <source srcset="./assets/images/product-card-2.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-2.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Грецькі оливки Каламата, без кісточок в розсолі
            </h3>
            <div class="content-element product-card__text">
              <p>0.2кг</p>
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
                    onclick="decreaseInputNumber('product-result-counter-2'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-2"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-2'); return false;"
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
                <source srcset="./assets/images/product-card-3.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-3.jpg" alt="Image" />
              </picture>
            </div>

            <div class="product-card__banner"><i class="icon-star"></i> Кращий вибір</div>

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
                    onclick="decreaseInputNumber('product-result-counter-3'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-3"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-3'); return false;"
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
                <source srcset="./assets/images/product-card-3.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-3.jpg" alt="Image" />
              </picture>
            </div>

            <div class="product-card__banner"><i class="icon-star"></i> Кращий вибір</div>

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
                    onclick="decreaseInputNumber('product-result-counter-30'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-30"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-30'); return false;"
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
                <source srcset="./assets/images/product-card-4.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-4.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Сік лимона зі 100% грецьких лимонів
            </h3>
            <div class="content-element product-card__text">
              <p>Fruitpak, 200мл</p>
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
                    onclick="decreaseInputNumber('product-result-counter-4'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-4"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-4'); return false;"
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
                <source srcset="./assets/images/product-card-2.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-2.jpg" alt="Image" />
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
                    onclick="decreaseInputNumber('product-result-counter-5'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-5"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-5'); return false;"
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
                <source srcset="./assets/images/product-card-4.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-4.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Сік лимона зі 100% грецьких лимонів
            </h3>
            <div class="content-element product-card__text">
              <p>Fruitpak, 200мл</p>
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
                    onclick="decreaseInputNumber('product-result-counter-6'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-6"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-6'); return false;"
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
                <source srcset="./assets/images/product-card-3.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-3.jpg" alt="Image" />
              </picture>
            </div>

            <div class="product-card__banner"><i class="icon-star"></i> Кращий вибір</div>

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
                    onclick="decreaseInputNumber('product-result-counter-7'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-7"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-7'); return false;"
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
                <source srcset="./assets/images/product-card-4.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-4.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Сік лимона зі 100% грецьких лимонів
            </h3>
            <div class="content-element product-card__text">
              <p>Fruitpak, 200мл</p>
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
                    onclick="decreaseInputNumber('product-result-counter-8'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-8"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-8'); return false;"
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
                <source srcset="./assets/images/product-card-3.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-3.jpg" alt="Image" />
              </picture>
            </div>

            <div class="product-card__banner"><i class="icon-star"></i> Кращий вибір</div>

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
                    onclick="decreaseInputNumber('product-result-counter-9'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-9"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-9'); return false;"
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
                <source srcset="./assets/images/product-card-4.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-4.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Сік лимона зі 100% грецьких лимонів
            </h3>
            <div class="content-element product-card__text">
              <p>Fruitpak, 200мл</p>
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
                    onclick="decreaseInputNumber('product-result-counter-10'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-10"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-10'); return false;"
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
                <source srcset="./assets/images/product-card-4.jpg?as=webp" type="image/webp" />
                <img src="./assets/images/product-card-4.jpg" alt="Image" />
              </picture>
            </div>

            <div class="btn-icon product-card__favorite">
              <i class="icon-heart"></i>
            </div>
          </div>
          <div class="product-card__content">
            <h3 class="title-4 product-card__title line-clamp-3">
              Сік лимона зі 100% грецьких лимонів
            </h3>
            <div class="content-element product-card__text">
              <p>Fruitpak, 200мл</p>
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
                    onclick="decreaseInputNumber('product-result-counter-11'); return false;"
                  >
                    <i class="icon-minus"></i>
                  </button>
                  <input
                    class="checkout-input"
                    min="1"
                    step="1"
                    id="product-result-counter-11"
                    type="number"
                    value="1"
                  />
                  <button
                    class="counter-btn counter-btn-plus"
                    onclick="increaseInputNumber('product-result-counter-11'); return false;"
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
      <ul class="pagination search-sec__result-pagination">
        <li class="pagination-btn pagination-prev pagination-btn-disabled">
          <i class="icon-arrow-chevron-prev"></i>
        </li>

        <li class="pagination-num active"><span>1</span></li>
        <li class="pagination-num"><span>2</span></li>
        <li class="pagination-num"><span>3</span></li>
        <li class="pagination-num pointer-events-none">...</li>
        <li class="pagination-num"><span>49</span></li>

        <li class="pagination-btn pagination-next">
          <i class="icon-arrow-chevron-next"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
