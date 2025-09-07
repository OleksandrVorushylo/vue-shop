import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  getters: {
    totalQuantity(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    totalPrice(state) {
      return state.items.reduce(
        (sum, item) =>
          sum +
          item.quantity * (item.newPrice && item.newPrice !== '' ? item.newPrice : item.price),
        0,
      );
    },

    cartIds: (state) => state.items.map((item) => item.id),

    isInCart: (state) => (productId) =>
      state.items.some((item) => String(item.id) === String(productId)),

    getQuantityById: (state) => (productId) => {
      const item = state.items.find((item) => item.id === String(productId));
      return item ? item.quantity : 0;
    },
  },
  actions: {
    persist() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    addToCart(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          ...product,
          id: String(product.id),
          quantity: 1,
        });
      }
      this.persist();
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== String(productId));
      this.persist();
    },

    decreaseQuantity(productId) {
      const existingItem = this.items.find((item) => item.id === String(productId));

      if (existingItem) {
        console.log('decreaseQuantity → найден товар:', existingItem);

        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          this.removeFromCart(productId);
        }
      }
      this.persist();
    },

    setQuantity(productId, quantity, productData = null) {
      const existingItem = this.items.find((item) => String(item.id) === String(productId));

      if (existingItem) {
        if (quantity <= 0) {
          this.removeFromCart(productId);
        } else {
          existingItem.quantity = quantity;
        }
      } else if (quantity > 0 && productData) {
        this.items.push({
          ...productData,
          id: String(productId),
          quantity,
        });
      }
      this.persist();
    },

    clearCart() {
      this.items = [];
      this.persist();
    },

    createOrder(formData) {
      if (this.items.length === 0) return null;

      const orderItems = this.items.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        newPrice: item.newPrice || null,
        totalPrice:
          item.quantity * (item.newPrice && item.newPrice !== '' ? item.newPrice : item.price),
      }));

      const order = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        items: orderItems,
        totalQuantity: this.totalQuantity,
        totalPrice: this.totalPrice,
        customer: formData,
      };

      this.clearCart();
      return order;
    },
  },
});
