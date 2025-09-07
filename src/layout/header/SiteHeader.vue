<script setup>
import './header.scss';
import SimpleBar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import IconBtn from '@/components/base/buttons/icon-button/IconBtn.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import { useCartOpenStore } from '@/stores/cartState.store.js';
const cartOpenStore = useCartOpenStore();

function toggleCartFunc() {
  cartOpenStore.toggleCart();
}

const headerRef = ref(null);
const headerMobileRef = ref(null);
const topHeaderRef = ref(null);
const headerCloseWrapperRef = ref(null);
const menuToggleRef = ref(null);
const menuToggleMobRef = ref(null);
const menuCloseMobRef = ref(null);
const languageDropdownRef = ref(null);

const scrolled = ref(false);
const openMenu = ref(false);
const activeDropdownIndex = ref(null);
const mobileMenuStartPoint = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--mobile-menu-start-point'),
);

const isMobileMenuEnable = ref(window.outerWidth <= mobileMenuStartPoint);

function onScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrolled.value = scrollTop > 50;
}

function toggleMenu() {
  openMenu.value = !openMenu.value;
  updatePositionMobileNav();
}

function updatePositionMobileNav() {
  if (!headerRef.value) return;
  const topNavValue = `${headerRef.value.clientHeight}px`;
  document.documentElement.style.setProperty('--top-nav', topNavValue);
}

function updateMenu() {
  isMobileMenuEnable.value = window.outerWidth <= mobileMenuStartPoint;

  if (!isMobileMenuEnable.value) {
    openMenu.value = false;
  }

  updatePositionMobileNav();
}

function toggleDropdown(index) {
  activeDropdownIndex.value = activeDropdownIndex.value === index ? null : index;
}

function toggleLanguageDropdown() {
  if (window.innerWidth <= 1024 && languageDropdownRef.value) {
    languageDropdownRef.value.classList.toggle('active');
  }
}

function onDocumentClick(e) {
  if (
    window.innerWidth <= 1024 &&
    languageDropdownRef.value &&
    !languageDropdownRef.value.contains(e.target)
  ) {
    languageDropdownRef.value.classList.remove('active');
  }
}

let prevScrollPos = window.pageYOffset;
function stickyScrollHandler() {
  if (!headerRef.value || !headerMobileRef.value) return;

  const currentScrollPos = window.pageYOffset;
  const headerHeight = headerRef.value.offsetHeight;
  const headerMobileHeight = headerMobileRef.value.offsetHeight + 16;

  const stickyBtn = document.querySelector('.sticky-button');

  if (window.scrollY > 0) {
    if (prevScrollPos > currentScrollPos) {
      headerRef.value.style.top = '0';
      headerMobileRef.value.style.bottom = '0';
      scrolled.value = true;
      if (stickyBtn) {
        stickyBtn.style.transitionDelay = '0s';
        stickyBtn.style.transform = 'translateY(0)';
      }
    } else {
      headerRef.value.style.top = `-${headerHeight + 3}px`;
      headerMobileRef.value.style.bottom = `-${headerMobileHeight + 3}px`;
      if (stickyBtn) {
        stickyBtn.style.transform = `translateY(${stickyBtn.clientHeight}px)`;
        stickyBtn.style.transitionDelay = '0.2s';
      }
    }
  }

  if (window.scrollY === 0) {
    scrolled.value = false;
    headerRef.value.style.top = '0';
    headerMobileRef.value.style.bottom = '0';
    if (stickyBtn) {
      stickyBtn.style.transitionDelay = '0s';
      stickyBtn.style.transform = 'translateY(0)';
    }
  }

  prevScrollPos = currentScrollPos;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('scroll', stickyScrollHandler);
  window.addEventListener('resize', updateMenu);
  window.addEventListener('orientationchange', updateMenu);
  document.addEventListener('click', onDocumentClick);

  updatePositionMobileNav();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('scroll', stickyScrollHandler);
  window.removeEventListener('resize', updateMenu);
  window.removeEventListener('orientationchange', updateMenu);
  document.removeEventListener('click', onDocumentClick);
});
</script>

<template>
  <header
    class="header fixed"
    :class="{
      scrolled,
      'open-menu': openMenu,
    }"
    ref="headerRef"
  >
    <div class="top-header !hidden" :class="{ scrolled, 'open-menu': openMenu }" ref="topHeaderRef">
      <div class="top-header__bg" style="--th-value: 928; --th-max-value: 1600"></div>
      <div class="cont">
        <div class="top-header__wrap">
          <div class="top-header__text">
            <p>
              Для безкоштовної доставки<br />
              по м. Львів дозамовте на -
              <span>200 грн</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="cont">
      <div class="header__wrap">
        <RouterLink to="/" class="logo">
          <img src="/images/logo-coffee-tea.svg" alt="Logo" />
        </RouterLink>

        <nav class="header__navbar navbar-nav nav-slide-left" :class="{ active: openMenu }">
          <div class="header__navbar-mob-content">
            <div class="header__navbar-mob-title">Меню</div>
            <div class="header__navbar-mob-close menu-close-mob" @click="toggleMenu">
              <i class="icon-close"></i>
            </div>
          </div>
          <SimpleBar class="menu">
            <div
              class="menu__item menu-dropdown"
              v-for="(item, index) in [
                {
                  title: 'Продукція',
                  submenu: [
                    { name: 'Lorem Ipsum 1', link: '/products/1' },
                    { name: 'Lorem Ipsum 2', link: '/products/2' },
                  ],
                  link: '/products',
                },
                { title: 'Доставка', link: '/delivery' },
                { title: 'Акція тижня', link: '/on-sale' },
                { title: 'Контакти', link: '/contacts' },
              ]"
              :key="index"
            >
              <RouterLink
                :to="item.link || '#'"
                class="menu__link hover-link"
                @click.prevent="item.submenu ? toggleDropdown(index) : null"
                :class="{ 'is-opened': activeDropdownIndex === index }"
              >
                {{ item.title }}
              </RouterLink>

              <div
                v-if="item.submenu"
                class="menu-dropdown__arrow"
                :class="{ active: activeDropdownIndex === index }"
                @click="toggleDropdown(index)"
              >
                <i class="icon-arrow-chevron"></i>
              </div>

              <ul
                v-if="item.submenu"
                class="menu-dropdown__list"
                :class="{ active: activeDropdownIndex === index }"
              >
                <li v-for="(subitem, i) in item.submenu" :key="i">
                  <RouterLink :to="subitem.link" class="menu__link hover-link"
                    >{{ subitem.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </SimpleBar>

          <!--          <ButtonsWrapper additional-class="header__buttons">
            <BaseButton tag="a" variant="second" :decor="false" aria-label="link">
              Забронювати дзвінок
            </BaseButton>
          </ButtonsWrapper>-->
        </nav>

        <div class="header__additional">
          <IconBtn size="small" additional-class="cart-open-mob hidden" @click="toggleCartFunc">
            <i class="icon-cart-second"></i>
          </IconBtn>

          <a href="#" class="header__profile">
            <span class="header__profile-image">
              <picture>
                <source srcset="/images/profile-image.jpg" type="image/webp" />
                <img src="/images/profile-image.webp" alt="Profile Image" />
              </picture>
            </span>
          </a>
        </div>

        <div class="burger menu-toggle" ref="menuToggleRef" @click="toggleMenu">
          <svg class="burger-icon" viewbox="0 0 100 100">
            <path
              class="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            ></path>
            <path class="line middle" d="m 70,50 h -40"></path>
            <path
              class="bottom line"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="header-mobile" :class="{ scrolled, 'open-menu': openMenu }" ref="headerMobileRef">
      <div class="header-mobile__wrap">
        <div class="header-mobile__links">
          <button
            class="header-mobile__link menu-toggle-mob"
            ref="menuToggleMobRef"
            @click="toggleMenu"
          >
            <span class="header-mobile__link-icon">
              <i class="icon-burger"></i>
            </span>
            <span class="header-mobile__link-text">Меню</span>
          </button>
          <a href="#" class="header-mobile__link">
            <div class="header-mobile__link-icon">
              <i class="icon-search-second"></i>
            </div>
            <div class="header-mobile__link-text">Пошук</div>
          </a>
        </div>
        <RouterLink to="/" class="header-mobile__logo">
          <img src="/images/logo-coffee-tea.svg" alt="Logo" />
        </RouterLink>
        <div class="header-mobile__links">
          <a href="#" class="header-mobile__link">
            <div class="header-mobile__link-icon">
              <i class="icon-profile"></i>
            </div>
            <div class="header-mobile__link-text">Профіль</div>
          </a>

          <button class="header-mobile__link cart-open-mob-second" @click="toggleCartFunc">
            <span class="header-mobile__link-icon">
              <i class="icon-cart-second"></i>
              <span class="header-mobile__link-count">10</span>
            </span>
            <span class="header-mobile__link-text">Кошик</span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="header-close-wrapper"
      ref="headerCloseWrapperRef"
      :class="{ active: openMenu }"
      @click="toggleMenu"
    ></div>
  </header>
</template>
