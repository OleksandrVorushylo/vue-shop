import ProfileOrders from '@/components/profile/ProfileOrders.vue';
import ProfilePersonal from '@/components/profile/ProfilePersonal.vue';
import ProfileFavorites from '@/components/profile/ProfileFavorites.vue';
import ProfileLayout from '@/components/profile/ProfileLayout.vue';

export default [
  {
    path: '/profile',
    component: ProfileLayout,
    children: [
      {
        path: '',
        redirect: 'orders',
      },
      {
        path: 'orders',
        name: 'profile.orders',
        component: ProfileOrders,
      },
      {
        path: 'personal',
        name: 'profile.personal',
        component: ProfilePersonal,
      },
      {
        path: 'favorites',
        name: 'profile.favorites',
        component: ProfileFavorites,
      },
    ],
  },
];
