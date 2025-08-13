<script setup></script>

<template>
  <button class="btn sticky-button categories-popup-toggle">
    <span class="btn__shadow"></span>
    <span class="btn__edge"></span>
    <span class="btn__text">Категорії</span>
  </button>

  <div class="categories-popup-close-bg"></div>
  <div class="categories-popup">
    <div class="categories-popup__top">
      <h3 class="categories-popup__title">Категорії товарів</h3>
    </div>
    <div class="categories-popup__list" data-simplebar>
      <ul>
        <li>
          <label class="categories-popup__category">
            <input checked type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Вироби із хліба</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Кондитерські вироби</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Молочна продукція</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">М'ясо та риба</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Напівфабрикати</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Сніданки</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Сухофрукти та снеки</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Кава та чай</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Солодощі</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Напої</span>
            </div>
          </label>
        </li>

        <li>
          <label class="categories-popup__category">
            <input type="checkbox" name="categories_list" />

            <div class="btn btn-second">
              <span class="btn__shadow"></span>
              <span class="btn__edge"></span>
              <span class="btn__text">Алкогольні напої</span>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="categories-popup__buttons">
      <button class="btn categories-popup-close">
        <span class="btn__shadow"></span>
        <span class="btn__edge"></span>
        <span class="btn__text">Закрити фільтри <i class="icon-close ml-[10px]"></i></span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
