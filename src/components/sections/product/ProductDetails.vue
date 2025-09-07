<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import '../../plugins/swiper/swiper.scss';

import { ref } from 'vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';

const props = defineProps({
  productType: {
    type: String,
  },
  detailedDescription: {
    type: String,
  },
  reviews: {
    type: Array,
  },
});

const activeTab = ref(0);
const swiperRef = ref(null);

const swiperOptions = ref({
  observer: true, //needs to calculate swiper size
  observeParents: true, //needs to calculate swiper size
  spaceBetween: 0,
  slidesPerView: 'auto',
  threshold: 10,
  slideToClickedSlide: window.innerWidth <= 1024,
});

const productViewTabsArr = document.querySelectorAll('.product-section__view-tab-item');

const productViewItemsArr = document.querySelectorAll('.product-section__view-tab-item-content');

if (productViewTabsArr.length > 0 && productViewItemsArr.length > 0) {
  productViewTabsArr.forEach((productViewTab, idx) => {
    productViewTab.addEventListener('click', () => {
      productViewTabsArr.forEach((tab, i) => {
        tab.classList.remove('is-active');
        productViewItemsArr[i]?.classList.remove('is-active');
      });
      productViewTab.classList.add('is-active');
      productViewItemsArr[idx]?.classList.add('is-active');
    });
  });
} else if (productViewTabsArr.length > 0) {
  productViewTabsArr.forEach((productViewTab) => {
    productViewTab.addEventListener('click', () => {
      productViewTabsArr.forEach((t) => t.classList.remove('is-active'));
      productViewTab.classList.add('is-active');
    });
  });
}
</script>

<template>
  <div v-if="detailedDescription || reviews?.length" class="product-section__view-wrap">
    <div class="product-section__view-content">
      <div class="product-section__view-tabs-wr">
        <div class="product-view-swiper-wr product-section__view-tabs">
          <Swiper ref="swiperRef" v-bind="swiperOptions">
            <SwiperSlide
              v-if="detailedDescription"
              class="product-section__view-tab-item"
              :class="{ 'is-active': activeTab === 0 }"
              @click="activeTab = 0"
            >
              Опис товару
            </SwiperSlide>
            <SwiperSlide
              v-if="productType === 'coffee' || productType === 'tea'"
              class="product-section__view-tab-item"
              :class="{ 'is-active': activeTab === 1 }"
              @click="activeTab = 1"
            >
              Характеристики
            </SwiperSlide>
            <SwiperSlide
              v-if="reviews?.length"
              class="product-section__view-tab-item"
              :class="{ 'is-active': activeTab === (true ? 2 : 1) }"
              @click="activeTab = true ? 2 : 1"
            >
              Відгуки про товар
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="product-section__view-tabs-container">
        <div
          v-if="detailedDescription"
          class="product-section__view-tab-item-content"
          :class="{ 'is-active': activeTab === 0 }"
        >
          <div
            class="content-element product-section__view-tab-item-text"
            v-html="detailedDescription"
          ></div>
          <ButtonsWrapper additional-class="product-section__view-tab-item-buttons">
            <BaseButton to="/delivery" variant="second">Інформація про доставку</BaseButton>
          </ButtonsWrapper>
        </div>

        <div
          v-if="productType === 'coffee' || productType === 'tea'"
          class="product-section__view-tab-item-content"
          :class="{ 'is-active': activeTab === 1 }"
        >
          <div
            v-if="productType === 'coffee'"
            class="content-element product-section__view-tab-item-text"
          >
            <h3>Ось кілька ключових моментів про каву:</h3>
            <p>
              <strong> 1. Походження </strong>
            </p>
            <p>
              Справжня кава вирощується в тропічних регіонах по всьому світу: Африка, Латинська
              Америка, Азія. Місце вирощування впливає на її аромат, смакові ноти та кислотність.
            </p>
            <p>
              <strong> 2. Тип зерен </strong>
            </p>
            <p>
              Кава ділиться на декілька типів зерен, серед яких найпопулярнішими є арабіка і
              робуста. Арабіка має м'який, вишуканий смак, у той час як робуста відома більш
              насиченим, терпким відтінком.
            </p>
            <p>
              <strong> 3. Обжарка </strong>
            </p>
            <p>
              Рівень обжарки зерен визначає глибину смаку кави. Світла обжарка підкреслює
              кислотність і фруктові ноти, тоді як темна додає насиченості, тіла та гіркоти.
            </p>
            <p>
              <strong> 4. Позитивний вплив на організм </strong>
            </p>
            <p>
              Завдяки вмісту антиоксидантів, кофеїн позитивно впливає на концентрацію уваги,
              підвищує енергію і може покращити метаболізм.
            </p>
            <p>
              <strong> 5. Методи приготування </strong>
            </p>
            <p>
              Існує багато методів приготування кави, серед них — еспресо, френч-прес, аеро-прес,
              кемекс і капсульні системи. Кожен метод розкриває різні смакові відтінки.
            </p>
            <p>
              <strong> 6. Використання в кулінарії </strong>
            </p>
            <p>
              Крім традиційного приготування, кава використовується як інгредієнт у випічці,
              десертах (тірамісу), глазурі та навіть у маринадах для м'яса.
            </p>
          </div>

          <div
            v-if="productType === 'tea'"
            class="content-element product-section__view-tab-item-text"
          >
            <h3>Ось кілька ключових моментів про чай:</h3>
            <p>
              <strong> 1. Походження </strong>
            </p>
            <p>
              Чай вирощується в багатьох регіонах світу, зокрема в Китаї, Індії, Японії, Шрі-Ланці
              та інших країнах. Кожен регіон надає чаю унікальний аромат і смакові особливості.
            </p>
            <p>
              <strong> 2. Типи чаю </strong>
            </p>
            <p>
              Існує багато видів чаю: зелений, чорний, білий, улун, пуер і трав'яні чаї. Кожен вид
              має свої властивості та спосіб обробки.
            </p>
            <p>
              <strong> 3. Спосіб обробки </strong>
            </p>
            <p>
              Різниця між видами чаю полягає в способах ферментації та обробки. Наприклад, зелений
              чай зазвичай не ферментується, тоді як чорний повністю ферментується, що надає йому
              більш насиченого смаку.
            </p>
            <p>
              <strong> 4. Користь для здоров’я </strong>
            </p>
            <p>
              Чай багатий на антиоксиданти та мінерали. Різні види чаю сприяють зміцненню імунної
              системи, покращенню травлення та зниженню стресу.
            </p>
            <p>
              <strong> 5. Методи приготування </strong>
            </p>
            <p>
              Заварювання чаю — це мистецтво. Температура води та час заварювання можуть варіюватися
              залежно від виду чаю. Наприклад, зелений чай краще заварювати при температурі 70-80
              °C, а чорний — при 90-100 °C.
            </p>
            <p>
              <strong> 6. Використання в кулінарії </strong>
            </p>
            <p>
              Чай використовується не лише як напій, а й як інгредієнт у кулінарії. Його додають у
              десерти, соуси та навіть коктейлі.
            </p>
          </div>
        </div>

        <div
          v-if="reviews?.length"
          class="product-section__view-tab-item-content"
          :class="{ 'is-active': activeTab === (true ? 2 : 1) }"
        >
          <div class="content-element product-section__view-tab-item-testimonials">
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="product-section__view-tab-item-testimonial"
            >
              <div class="content-element product-section__view-tab-item-text">
                <p>
                  <strong>{{ review.rating }}/5</strong>
                </p>
                <p>
                  {{ review.text }}
                </p>
              </div>
              <div class="product-section__view-tab-item-footer">
                <div class="product-section__view-tab-item-author-img">
                  <picture>
                    <source srcset="/images/profile-image.webp" type="image/webp" />
                    <img loading="lazy" src="/images/profile-image.jpg" alt="Image" />
                  </picture>
                </div>

                <div class="product-section__view-tab-item-author-name">
                  {{ review.user }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
