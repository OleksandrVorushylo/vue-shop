<script setup>
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
</script>

<template>
  <h1 class="profile__title large-title-4">Історія замовлень</h1>
  <div class="profile__orders">
    <div class="profile__orders-nav">
      <div class="profile__orders-nav__col profile__orders-nav__col-1">
        Замовлення
        <span class="profile__orders-nav__col-mob">Замов.</span>
      </div>
      <div class="profile__orders-nav__col profile__orders-nav__col-2">Дата та час</div>
      <div class="profile__orders-nav__col profile__orders-nav__col-3">Сума</div>
      <div class="profile__orders-nav__col profile__orders-nav__col-4">Статус</div>
      <div class="profile__orders-nav__col profile__orders-nav__col-1 profile__orders-nav__col-mob">
        Замов.
      </div>
      <div class="profile__orders-nav__col profile__orders-nav__col-2 profile__orders-nav__col-mob">
        Дата та час / Сума / Статус
      </div>
    </div>

    <div class="profile__orders-content">
      <div class="profile__orders-item active">
        <div class="profile__orders-item__nav">
          <div class="profile__orders-item__nav-col profile__orders-item__nav-id">
            <div class="profile__orders-item__nav-icon">
              <i class="icon-arrow-chevron"></i>
            </div>
            <div class="profile__orders-item__nav-num">#9998</div>
          </div>
          <div class="profile__orders-item__nav-col profile__orders-item__nav-time">
            02.03.2023 <span>/</span> 11:53
          </div>
          <div class="profile__orders-item__nav-amount profile__orders-item__nav-col">
            <div>4 000<span>₴</span></div>
            <div class="profile__orders-item__nav-pay_info">Очікує оплату</div>
          </div>
          <div class="profile__orders-item__nav-mob">
            <div class="profile__orders-item__nav-col profile__orders-item__nav-time">
              02.03.2023 <span>/</span> 11:53
            </div>
            <div class="profile__orders-item__nav-amount profile__orders-item__nav-col">
              <div>4 000<span>₴</span></div>
              <div class="profile__orders-item__nav-pay_info">Очікує оплату</div>
            </div>
          </div>
        </div>
        <div class="profile__orders-item__body">
          <div class="profile__orders-item__position">
            <div class="profile__orders-item__position-num">1</div>
            <a href class="profile__orders-item__position-image">
              <picture>
                <source srcset="/images/product-card-1.webp" type="image/webp" />
                <img src="/images/product-card-1.jpg" loading="lazy" alt="Image" />
              </picture>
            </a>
            <div class="profile__orders-item__position-text">
              <a href class="profile__orders-item__position-name">
                Скумбрія холодного коптіння власного виробництва
              </a>
              <div class="profile__orders-item__position-price">400<span>₴</span></div>
              <div class="profile__orders-item__position-amount">1280г. <span>/</span> 5шт.</div>
            </div>
          </div>
          <div class="profile__orders-item__position">
            <div class="profile__orders-item__position-num">2</div>
            <a href class="profile__orders-item__position-image">
              <picture>
                <source srcset="/images/product-card-2.webp" type="image/webp" />
                <img src="/images/product-card-2.jpg" loading="lazy" alt="Image" />
              </picture>
            </a>
            <div class="profile__orders-item__position-text">
              <a href class="profile__orders-item__position-name">
                Дегустаційний сет <br />
                "Для прикорму"
              </a>
              <div class="profile__orders-item__position-price">1000<span>₴</span></div>
              <div class="profile__orders-item__position-amount">1280г. <span>/</span> 1шт.</div>
            </div>
          </div>
          <div class="profile__orders-item__position">
            <div class="profile__orders-item__position-num">3</div>
            <a href class="profile__orders-item__position-image">
              <picture>
                <source srcset="/images/product-card-3.webp" type="image/webp" />
                <img src="/images/product-card-3.jpg" loading="lazy" alt="Image" />
              </picture>
            </a>
            <div class="profile__orders-item__position-text">
              <a href class="profile__orders-item__position-name">
                Креветки, очищені, без голови, варено морожені
              </a>
              <div class="profile__orders-item__position-price">400<span>₴</span></div>
              <div class="profile__orders-item__position-amount">1280г. <span>/</span> 5шт.</div>
            </div>
          </div>
        </div>
        <div class="profile__orders-item__bottom">
          <div class="profile__orders-item__bottom-summary">
            Підсумок замовлення:
            <div>400 <span>₴</span></div>
          </div>

          <BaseButton
            >Повторити замовлення
            <span class="icon-svg ml-[4px]">
              <svg
                width="22"
                height="20"
                viewbox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.751 10.2499V15.4999C11.751 15.6988 11.672 15.8896 11.5314 16.0303C11.3907 16.1709 11.2 16.2499 11.001 16.2499C10.8021 16.2499 10.6114 16.1709 10.4707 16.0303C10.3301 15.8896 10.251 15.6988 10.251 15.4999V10.2499C10.251 10.051 10.3301 9.86026 10.4707 9.71961C10.6114 9.57895 10.8021 9.49994 11.001 9.49994C11.2 9.49994 11.3907 9.57895 11.5314 9.71961C11.672 9.86026 11.751 10.051 11.751 10.2499ZM21.4879 8.19775L20.1885 17.9487C20.1404 18.3091 19.9629 18.6397 19.6893 18.879C19.4156 19.1184 19.0643 19.2502 18.7007 19.2499H3.30135C2.93777 19.2502 2.58648 19.1184 2.31281 18.879C2.03913 18.6397 1.86171 18.3091 1.81354 17.9487L0.513226 8.19869C0.48489 7.98672 0.502207 7.77114 0.564016 7.56641C0.625825 7.36168 0.730697 7.17253 0.871598 7.01165C1.0125 6.85077 1.18617 6.72188 1.38097 6.63363C1.57576 6.54537 1.78718 6.49979 2.00104 6.49994H5.41073L10.4385 0.755875C10.5089 0.67607 10.5955 0.612154 10.6925 0.568375C10.7894 0.524595 10.8946 0.501953 11.001 0.501953C11.1074 0.501953 11.2126 0.524595 11.3096 0.568375C11.4066 0.612154 11.4932 0.67607 11.5635 0.755875L16.5914 6.49994H20.001C20.2146 6.50007 20.4258 6.54583 20.6203 6.63415C20.8148 6.72247 20.9881 6.85131 21.1288 7.01205C21.2695 7.17279 21.3742 7.36172 21.436 7.56621C21.4978 7.77069 21.5151 7.98601 21.487 8.19775H21.4879ZM7.40385 6.49994H14.5982L11.001 2.389L7.40385 6.49994ZM20.001 7.99994H2.00104L3.30135 17.7499H18.7007L20.001 7.99994ZM15.2048 10.1749L14.6798 15.4249C14.6694 15.5232 14.6786 15.6226 14.7067 15.7173C14.7349 15.8121 14.7815 15.9003 14.8439 15.977C14.9063 16.0537 14.9832 16.1172 15.0702 16.1641C15.1573 16.2109 15.2527 16.2401 15.351 16.2499C15.3763 16.2513 15.4017 16.2513 15.427 16.2499C15.6127 16.2497 15.7918 16.1805 15.9295 16.0558C16.0672 15.9311 16.1537 15.7598 16.1723 15.5749L16.6973 10.3249C16.7172 10.127 16.6576 9.92931 16.5317 9.77529C16.4059 9.62128 16.224 9.52358 16.026 9.50369C15.8281 9.4838 15.6304 9.54334 15.4764 9.66923C15.3224 9.79511 15.2247 9.97702 15.2048 10.1749ZM6.79729 10.1749C6.7774 9.97702 6.6797 9.79511 6.52568 9.66923C6.37167 9.54334 6.17396 9.4838 5.97604 9.50369C5.77812 9.52358 5.59621 9.62128 5.47033 9.77529C5.34444 9.92931 5.2849 10.127 5.30479 10.3249L5.82979 15.5749C5.84844 15.7606 5.93562 15.9326 6.07431 16.0574C6.21299 16.1822 6.39321 16.2509 6.57979 16.2499C6.60508 16.2513 6.63043 16.2513 6.65573 16.2499C6.75373 16.2401 6.84883 16.211 6.9356 16.1644C7.02237 16.1178 7.09911 16.0546 7.16144 15.9783C7.22377 15.9021 7.27047 15.8143 7.29887 15.72C7.32728 15.6257 7.33683 15.5267 7.32698 15.4287L6.79729 10.1749Z"
                  fill="#EBF9FF"
                ></path>
              </svg> </span
          ></BaseButton>
        </div>
      </div>
    </div>

    <ul class="pagination profile__saved-pagination">
      123
    </ul>
  </div>
</template>

<style scoped></style>
