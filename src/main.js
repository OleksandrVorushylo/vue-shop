import 'normalize.css'
import '@/styles/main.scss'
import '@/styles/tailwind.pcss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'

const pinia = createPinia()

const app = createApp(App)

const routes = [
  { path: '/', name: 'Головна', component: HomeView },
  { path: '/products', name: 'Продукція', component: ProductsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(pinia)
app.mount('#app')
