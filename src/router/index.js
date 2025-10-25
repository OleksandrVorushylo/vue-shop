import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from './auth';
import profileRoutes from './profile';

import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import DeliveryView from '@/views/DeliveryView.vue';
import OnSaleView from '@/views/OnSaleView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import ContactView from '@/views/ContactView.vue';
import OrderView from '@/views/OrderView.vue';
import ProductView from '@/views/ProductView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const publicRoutes = [
  { path: '/', name: 'Головна', component: HomeView },
  { path: '/products', name: 'Продукція', component: ProductsView },
  { path: '/product/:slug', name: 'Товар', component: ProductView },
  { path: '/delivery', name: 'Доставка', component: DeliveryView },
  { path: '/on-sale', name: 'Акції', component: OnSaleView },
  { path: '/favorites', name: 'Вибрані', component: FavoritesView },
  { path: '/contacts', name: 'Контакти', component: ContactView },
  { path: '/order', name: 'Оформлення замовлення', component: OrderView },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const routes = [...publicRoutes, ...authRoutes, ...profileRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
