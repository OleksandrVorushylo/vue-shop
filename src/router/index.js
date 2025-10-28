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
import { useAuthStore } from '@/stores/auth.store.js';
import { watch } from 'vue';

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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore._authInitialized) {
    authStore.initAuth();
  }

  if (!authStore.isReady) {
    const unwatch = authStore.$subscribe((_, state) => {
      if (state.isReady) {
        unwatch();
        handleAuthGuard(to, next, authStore);
      }
    });
  } else {
    handleAuthGuard(to, next, authStore);
  }
});

function handleAuthGuard(to, next, authStore) {
  const isLoggedIn = authStore.isAuthenticated;

  if (to.meta.requiresAuth && !isLoggedIn) {
    return next({ path: '/auth' });
  }

  if (to.meta.guestOnly && isLoggedIn) {
    return next({ path: '/profile' });
  }

  next();
}

export default router;
