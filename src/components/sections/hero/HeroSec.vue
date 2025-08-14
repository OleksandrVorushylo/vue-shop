<script setup>
import './hero.scss';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
</script>

<template>
  <section class="hero-sec">
    <div class="cont">
      <div class="hero-sec__wrap">
        <div class="hero-sec__content">
          <h1 class="hero-sec__title large-title-1">
            У нас працює<br />
            доставка
          </h1>
          <div class="content-element body-text-18 hero-sec__text">
            <p>
              Не потрібно шукати улюблені продукти<br />
              по всіх магазинах, бо вони зібрані в одному місці
            </p>
          </div>
          <ButtonsWrapper :additional-class="'hero-sec__buttons'">
            <BaseButton to="/products"> Дивитися всі товари </BaseButton>
          </ButtonsWrapper>
        </div>
        <div class="hero-sec__image object-contain object-bottom">
          <img src="/images/home-hero-image.svg" alt="Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
