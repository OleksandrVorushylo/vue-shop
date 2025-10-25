import AuthView from '@/views/Auth/AuthView.vue';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: { layout: 'auth', guestOnly: true },
  },
];
