<script setup>
import '../../src/components/sections/hero/hero.scss';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
</script>

<template>
  <section class="hero-sec not-found-sec">
    <div class="cont">
      <div class="hero-sec__wrap !justify-center">
        <div class="hero-sec__content !w-full !items-center">
          <h1 class="hero-sec__title large-title-1">Ой халепа</h1>
          <div
            class="content-element body-text-20 hero-sec__text !text-center max-[640px]:max-w-[340px]"
          >
            <p>
              Схоже ми не можемо знайти<br />
              потрібну Вам сторінку
            </p>
          </div>
          <ButtonsWrapper :additional-class="'hero-sec__buttons'">
            <BaseButton to="/"> Повернутись на головну </BaseButton>
          </ButtonsWrapper>
        </div>
        <div class="hero-sec__bg-image">
          <img src="/images/page-not-found-decor.svg" alt="Decor" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
