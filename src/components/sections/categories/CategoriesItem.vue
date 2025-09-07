<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  id: { type: [String, Number], required: true },
  title: { type: String, required: true },
  imageUrl: { type: String },
  imageWebp: { type: String },
  to: { type: String, default: '/products' },
});

const auraContainer = ref(null);
const auraCursor = ref(null);

let onMove, onLeave;

onMounted(() => {
  if (!auraContainer.value || window.innerWidth <= 551) return;

  auraCursor.value = auraContainer.value.querySelector('.cursor-aura');
  if (!auraCursor.value || window.innerWidth <= 1025) return;

  const cursorEl = auraCursor.value;
  const containerEl = auraContainer.value;

  const auraCursorWidth = cursorEl.offsetWidth;
  const auraCursorHeight = cursorEl.offsetHeight;

  const initLeft = parseFloat(getComputedStyle(cursorEl).left);
  const initTop = parseFloat(getComputedStyle(cursorEl).top);

  onMove = (e) => {
    cursorEl.classList.add('is-init', 'active');
    const rect = containerEl.getBoundingClientRect();
    let x = e.clientX - rect.left - auraCursorWidth / 1.85;
    let y = e.clientY - rect.top - auraCursorHeight / 1.95;

    const currentLeft = parseFloat(getComputedStyle(cursorEl).left);
    const currentTop = parseFloat(getComputedStyle(cursorEl).top);

    x -= currentLeft;
    y -= currentTop;

    requestAnimationFrame(() => {
      cursorEl.style.left = `${initLeft}px`;
      cursorEl.style.top = `${initTop}px`;
      cursorEl.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  onLeave = (event) => {
    const nextElement = document.elementFromPoint(event.clientX, event.clientY);
    const header = document.querySelector('header');
    if (header && header.contains(nextElement)) return;

    cursorEl.classList.remove('active');
    cursorEl.style.left = `${initLeft}px`;
    cursorEl.style.top = `${initTop}px`;
    cursorEl.style.transform = `translate(-50%, -50%)`;
  };

  containerEl.addEventListener('mousemove', onMove);
  containerEl.addEventListener('mouseleave', onLeave);
});

onBeforeUnmount(() => {
  if (auraContainer.value) {
    auraContainer.value.removeEventListener('mousemove', onMove);
    auraContainer.value.removeEventListener('mouseleave', onLeave);
  }
});
</script>

<template>
  <RouterLink :to="{ path: to, query: { category: title } }" class="categories-sec__item">
    <div ref="auraContainer" class="aura-container">
      <div class="cursor-aura">
        <img loading="lazy" src="/images/categories-aura.svg" alt="Decor" />
      </div>
      <div class="categories-sec__item-image">
        <picture>
          <source :srcset="imageWebp" type="image/webp" />
          <img loading="lazy" :src="imageUrl" alt="Image" />
        </picture>
      </div>
      <div class="categories-sec__item-content">
        <h3 class="categories-sec__item-title title-3">{{ title }}</h3>
        <div class="categories-sec__item-icon">
          <i class="icon-line-arrow-down"></i>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
