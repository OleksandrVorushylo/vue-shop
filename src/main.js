import 'normalize.css';
import '@/styles/main.scss';
import '@/styles/tailwind.pcss';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import DeliveryView from '@/views/DeliveryView.vue';
import OnSaleView from '@/views/OnSaleView.vue';
import ContactView from '@/views/ContactView.vue';
import OrderView from '@/views/OrderView.vue';

const pinia = createPinia();

const app = createApp(App);

const routes = [
  { path: '/', name: 'Головна', component: HomeView },
  { path: '/products', name: 'Продукція', component: ProductsView },
  { path: '/delivery', name: 'Доставка', component: DeliveryView },
  { path: '/on-sale', name: 'Акції', component: OnSaleView },
  { path: '/contacts', name: 'Контакти', component: ContactView },
  { path: '/order', name: 'Оформлення замовлення', component: OrderView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(pinia);
app.mount('#app');
