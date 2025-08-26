import { defineStore } from 'pinia';

export const useCartOpenStore = defineStore('cartOpen', {
  state: () => ({
    isCartOpen: false,
  }),
  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    openCart() {
      this.isCartOpen = true;
    },
    closeCart() {
      this.isCartOpen = false;
    },
  },
});
