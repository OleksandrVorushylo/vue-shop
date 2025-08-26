<script setup>
import './notification.scss';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { currentNotification } from '@/stores/notification.store.js';

const notification = currentNotification;

const progress = ref(0);
let startTime = 0;
let elapsedTime = 0;
let isPaused = false;
let rafId = 0;

function tick(now) {
  if (!notification.value) return;

  if (!isPaused) {
    const duration = Number(notification.value.duration) || 3000;
    elapsedTime = (now ?? performance.now()) - startTime;
    progress.value = Math.min((elapsedTime / duration) * 100, 100);

    if (elapsedTime >= duration) {
      close();
      return;
    }
  }
  rafId = requestAnimationFrame(tick);
}

function startTimer() {
  cancelAnimationFrame(rafId);
  isPaused = false;
  elapsedTime = 0;
  progress.value = 0;
  startTime = performance.now();
  rafId = requestAnimationFrame(tick);
}

function pause() {
  isPaused = true;
}

function resume() {
  if (isPaused) {
    startTime = performance.now() - elapsedTime;
    isPaused = false;
  }
}

function close() {
  cancelAnimationFrame(rafId);
  notification.value = null;
  progress.value = 0;
  elapsedTime = 0;
}

watch(
  notification,
  (val) => {
    if (val) startTimer();
    else {
      cancelAnimationFrame(rafId);
      progress.value = 0;
      elapsedTime = 0;
      isPaused = false;
    }
  },
  { immediate: true },
);

onUnmounted(() => cancelAnimationFrame(rafId));
</script>

<template>
  <transition name="fade">
    <div
      v-if="notification"
      class="project-notification"
      :key="notification.id"
      :style="{
        '--project-notification-main-bg-cl': notification.mainBgColor,
        '--project-notification-second-bg-cl': notification.secondBgColor,
      }"
      @mouseenter="pause"
      @mouseleave="resume"
    >
      <div class="project-notification__close" @click="close">
        <i class="icon-close"></i>
      </div>
      <div class="project-notification__wrap">
        <div class="project-notification__title">{{ notification.title }}</div>
        <div class="project-notification__text">{{ notification.text }}</div>
        <div class="project-notification__progress-wr">
          <div class="project-notification__progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
