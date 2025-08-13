<script setup>
import { onMounted, ref } from 'vue'
import SiteHeader from './layout/header/SiteHeader.vue'
import SiteFooter from '@/layout/footer/SiteFooter.vue'
import SiteCart from '@/components/cart/SiteCart.vue'
import axios from 'axios'

const products = ref([])

onMounted(async () => {
  /*fetch('/api/data/products')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch(console.error)*/

  try {
    const { data } = await axios.get('/api/data/products')
    products.value = data
    console.log(data)
  } catch (err) {
    console.log(err)
  }

  /*axios.get('/api/data/products').then((res) => res.data)*/
})
</script>

<template>
  <SiteHeader></SiteHeader>
  <main class="main" id="content">
    <!--    <HomeView :products="products"></HomeView>-->
    <router-view :products="products"></router-view>
    <SiteCart></SiteCart>
  </main>
  <SiteFooter></SiteFooter>
</template>

<style scoped></style>
