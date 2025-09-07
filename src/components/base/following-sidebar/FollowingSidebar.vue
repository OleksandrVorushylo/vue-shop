<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import FloatSidebar from 'float-sidebar';

const props = defineProps({
  containerClass: String,
  sidebarClass: String,
  sidebarInnerClass: String,
  contentClass: String,
  gapTop: { type: Number, default: 10 },
  gapBottom: { type: Number, default: 10 },
});

const sidebarEl = ref(null);
const sidebarInnerEl = ref(null);
const sidebarBufferEl = ref(null);
const contentEl = ref(null);

let floatSidebar;
let ro;
let resizeHandler;

function syncBuffer() {
  if (!sidebarInnerEl.value || !sidebarBufferEl.value) return;
  const innerH = sidebarInnerEl.value.offsetHeight || 0;
  sidebarBufferEl.value.style.height = `${innerH}px`;
  floatSidebar?.forceUpdate();
}

onMounted(() => {
  const headerEl = document.querySelector('header');
  const headerHeight = headerEl ? headerEl.clientHeight : 0;

  floatSidebar = FloatSidebar({
    sidebar: sidebarEl.value,
    relative: contentEl.value,
    topSpacing: props.gapTop + headerHeight,
    bottomSpacing: props.gapBottom,
  });

  ro = new ResizeObserver(syncBuffer);
  if (sidebarInnerEl.value) ro.observe(sidebarInnerEl.value);

  resizeHandler = () => syncBuffer();
  window.addEventListener('resize', resizeHandler, { passive: true });

  syncBuffer();
});

onBeforeUnmount(() => {
  floatSidebar?.destroy();
  ro?.disconnect();
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <div class="following-container" :class="containerClass">
    <aside class="following-sidebar" ref="sidebarEl" :class="sidebarClass">
      <div class="following-sidebar__inner" ref="sidebarInnerEl" :class="sidebarInnerClass">
        <slot name="sidebar"></slot>
      </div>
      <div class="following-sidebar__buffer" ref="sidebarBufferEl"></div>
    </aside>

    <div class="following-content" ref="contentEl" :class="contentClass">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.following-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.following-sidebar {
  height: auto !important;
  flex: 1;
  max-width: 21.21%;
  position: relative;
}

.following-sidebar__buffer {
  width: 100%;
  height: 0;
}
</style>
