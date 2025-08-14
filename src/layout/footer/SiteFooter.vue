<script setup>
import './footer.scss';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import IconBtn from '@/components/base/buttons/icon-button/IconBtn.vue';
</script>

<template>
  <footer class="footer">
    <div class="cont">
      <div class="footer__wrap">
        <div class="footer__top-container">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              <picture>
                <source srcset="/images/logo-footer.png?as=webp" type="image/webp" />
                <img loading="lazy" src="/images/logo-footer.png" alt="Logo" />
              </picture>
            </a>
            <div class="content-element body-text-18 footer__content-text">
              <p>Ми відбираємо найкращі плоди, щоб подарувати вам справжнє задоволення.</p>
            </div>
            <div class="footer__socials">
              <ButtonsWrapper variant="socials" additional-class="footer__socials-links">
                <IconBtn variant="social" href="#" target="_blank">
                  <i class="icon-instagram"></i>
                </IconBtn>
                <IconBtn variant="social" href="#" target="_blank">
                  <i class="icon-facebook"></i>
                </IconBtn>
                <IconBtn variant="social" href="#" target="_blank">
                  <i class="icon-telegram"></i>
                </IconBtn>
              </ButtonsWrapper>
            </div>
          </div>
          <div class="footer__info">
            <div class="footer__nav">
              <h3 class="footer__nav-title">Мапа сайту</h3>
              <div class="footer__nav-list">
                <div class="footer__nav-link"><a href="#">Продукція</a></div>
                <div class="footer__nav-link"><a href="#">Доставка</a></div>
                <div class="footer__nav-link"><a href="#">Акція тижня</a></div>
                <div class="footer__nav-link">
                  <a href="#">Контакти</a>
                </div>
              </div>
            </div>

            <div class="footer__contacts">
              <h3 class="footer__contacts-title">Контакти та графік</h3>
              <div class="footer__contacts-container">
                <div class="footer__contacts-list">
                  <a href="tel:+380970000000" class="footer__contact-link">
                    <span class="icon-svg footer__contact-icon">
                      <i class="icon-phone"></i>
                    </span>
                    <span class="footer__contact-text">+38 097 000 0000</span>
                  </a>

                  <a href="mailto:info@olivkamarket.com" class="footer__contact-link">
                    <span class="icon-svg footer__contact-icon">
                      <i class="icon-mail"></i>
                    </span>
                    <span class="footer__contact-text">info@olivkamarket.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="footer__contacts">
              <h3 class="footer__contacts-title">Графік та локація</h3>
              <div class="footer__contacts-container">
                <div class="footer__contacts-list">
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/wHczjTnybqBJgxKd8"
                    class="footer__contact-link"
                  >
                    <span class="icon-svg footer__contact-icon">
                      <i class="icon-location"></i>
                    </span>
                    <span class="footer__contact-text">Брюховичі вул. Сухомлинського 1</span>
                  </a>

                  <div class="footer__contact-link !pointer-events-none">
                    <span class="icon-svg footer__contact-icon">
                      <i class="icon-date-time"></i>
                    </span>
                    <span class="footer__contact-text">Працюємо з пн-пт 08:00 до 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom-container">
          <div class="footer__bottom-info">
            <div class="footer__bottom-info-text">
              <p>
                © 2025. Магазин "Оливка".<br class="sm:!hidden" />
                Всі права застережено
              </p>
            </div>
            <a href="#" class="footer__bottom-info-link">Політика конфіденційності</a>
            <a href="#" class="footer__bottom-info-link">Оферта</a>
          </div>
          <div class="footer__bottom-info-image">
            <img src="/images/master-card-visa.svg" alt="Payment Image" />
          </div>
          <a target="_blank" href="https://metamorfosi.agency/" class="footer__bottom-dev">
            <img src="/images/metamorfosi.svg" alt="Logo" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
