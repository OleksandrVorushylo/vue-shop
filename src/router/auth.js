import AuthView from '@/views/Auth/AuthView.vue';
import AuthConfirmView from '@/views/Auth/AuthConfirmView.vue';
import AuthForgotView from '@/views/Auth/AuthForgotView.vue';
import AuthForgotSuccessView from '@/views/Auth/AuthForgotSuccessView.vue';
import AuthResetPasswordView from '@/views/Auth/AuthResetPasswordView.vue';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: { title: 'Авторизація || Реєстрація', layout: 'auth', guestOnly: true },
  },
  {
    path: '/auth-confirm',
    name: 'auth-confirm',
    component: AuthConfirmView,
    meta: { title: 'Лист відправлено' },
  },
  {
    path: '/auth-forgot',
    name: 'auth-forgot',
    component: AuthForgotView,
    meta: { title: 'Відновлення пароля' },
  },
  {
    path: '/auth-forgot-success',
    name: 'auth-forgot-success',
    component: AuthForgotSuccessView,
    meta: { title: 'Лист відправлено' },
  },
  {
    path: '/auth-reset-password',
    name: 'auth-reset-password',
    component: AuthResetPasswordView,
    meta: { title: 'Зміна пароля' },
  },
];
