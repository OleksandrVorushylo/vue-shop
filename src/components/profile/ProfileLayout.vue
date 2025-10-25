<script setup>
import './profile.scss';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';
</script>

<template>
  <section class="profile">
    <div class="cont">
      <div class="profile__wrap">
        <ProfileSidebar></ProfileSidebar>
        <div class="profile__container">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
