<script setup>
import './categories.scss';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
</script>

<template>
  <section class="categories-sec">
    <div class="cont">
      <div class="categories-sec__wrap">
        <h2 class="categories-sec__title large-title-3" data-view="fade-l">Популярні категорії</h2>
        <div class="categories-sec__container">
          <div class="categories-sec__list">
            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-1.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-1.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Хліб</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-2.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-2.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Кондитерські вироби</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-3.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-3.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Молочна продукція та сири</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-4.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-4.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">М'ясо та риба</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-5.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-5.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Бакалія</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-6.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-6.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Крупи / макарони</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-7.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-7.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Напівфабрикати</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-8.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-8.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Сніданки</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-9.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-9.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Сухофрукти Снеки</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-10.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-10.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Кава та Чай</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-11.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-11.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Солодощі</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>

            <div class="categories-sec__item aura-container">
              <div class="cursor-aura">
                <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
              </div>
              <div class="categories-sec__item-image">
                <picture>
                  <source srcset="/images/categories-img-12.jpg?as=webp" type="image/webp" />
                  <img loading="lazy" src="/images/categories-img-12.jpg" alt="Image" />
                </picture>
              </div>
              <div class="categories-sec__item-content">
                <h3 class="categories-sec__item-title title-3">Напої</h3>
                <div class="categories-sec__item-icon">
                  <i class="icon-line-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>
          <ButtonsWrapper :additional-class="'categories-sec__buttons'">
            <BaseButton variant="second" href="#"> Більше категорій </BaseButton>
          </ButtonsWrapper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
