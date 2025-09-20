<script setup>
import './contact.scss';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
</script>

<template>
  <section class="contact-sec">
    <div class="cont">
      <div class="contact-sec__wrap">
        <div class="contact-sec__content">
          <h1 class="large-title-3 contact-sec__title">Контакти</h1>
          <div class="contact-sec__item">
            <div class="contact-sec__subtitle">
              <i class="icon-date-time"></i>
              <span>Зв’яжіться з нами:</span>
            </div>
            <ButtonsWrapper additional-class="contact-section__links">
              <BaseButton
                href="tel:+38 097 000 0000"
                size="small"
                variant="second"
                additional-class="btn-small-link"
                ><i class="icon-phone"></i>+38 097 000 0000</BaseButton
              >
              <BaseButton
                href="mailto:info@vueshop.com"
                size="small"
                variant="second"
                additional-class="btn-small-link"
                ><i class="icon-phone"></i>info@vueshop.com</BaseButton
              >
            </ButtonsWrapper>
          </div>
          <div class="contact-sec__item">
            <div class="contact-sec__subtitle">
              <i class="icon-date-time"></i>
              <span>Графік роботи</span>
            </div>
            <div class="content-element title-5 contact-sec__info">
              <p>Працюємо пн-пт з 08:00 до 22:00</p>
            </div>
          </div>
          <div class="contact-sec__item">
            <div class="contact-sec__subtitle">
              <i class="icon-address"></i>
              <span>Адреса</span>
            </div>
            <div class="content-element title-5 contact-sec__info">
              <p>місто Чернігів, вулиця Незалежності, 23</p>
            </div>
          </div>
        </div>

        <div class="contact-sec__map-container">
          <div class="contact-sec__map">
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
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
