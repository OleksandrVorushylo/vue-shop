import { defineStore } from 'pinia';
import { db } from '@/firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { useNotification } from '@/composables/useNotification.js';
import { useCartStore } from '@/stores/cart.store.js';
const { successNotification, errorNotification, infoNotification } = useNotification();

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    categories: [],
    filters: {
      sortBy: 'name',
      searchQuery: '',
      selectedCategories: ['all'],
    },
    favorites: [],
  }),
  getters: {
    filteredProducts(state) {
      let temp = [...state.products];

      if (state.filters.searchQuery?.trim()) {
        const q = state.filters.searchQuery.toLowerCase();
        temp = temp.filter((p) => p.name.toLowerCase().includes(q));
      }

      const selected = state.filters.selectedCategories;

      if (!selected.includes('all') && selected.length > 0) {
        temp = temp.filter((p) => {
          const cats = Array.isArray(p.categories) ? p.categories : [];
          return cats.some((c) => selected.includes(c));
        });
      }

      switch (state.filters.sortBy) {
        case 'name':
          temp.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          break;
        case 'cheaper-price':
          temp.sort((a, b) => a.price - b.price);
          break;
        case 'expensive-price':
          temp.sort((a, b) => b.price - a.price);
          break;
      }

      return temp;
    },

    productsWithCartStatus(state) {
      const cartStore = useCartStore();

      return state.products.map((product) => ({
        ...product,
        isAddedToCart: cartStore.isInCart(product.id),
      }));
    },
  },
  actions: {
    async fetchProducts() {
      try {
        const snapshot = await getDocs(collection(db, 'products'));
        this.products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isFavorite: false,
          favoriteObjectId: null,
          isAdded: false,
        }));

        const allCategories = this.products.flatMap((item) =>
          Array.isArray(item.categories) ? item.categories : [],
        );

        const counts = allCategories.reduce((acc, c) => {
          acc[c] = (acc[c] || 0) + 1;
          return acc;
        }, {});

        this.categories = [...new Set(allCategories)]
          .sort((a, b) => counts[b] - counts[a])
          .map((c, i) => ({
            id: i + 1,
            name: c,
          }));

        console.log(this.products);
      } catch (err) {
        console.error(err);
        errorNotification('Виникла помилка');
      }
    },

    async fetchFavorites() {
      try {
        const snapshot = await getDocs(collection(db, 'favorites'));
        const favorites = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.products = this.products.map((product) => {
          const fav = favorites.find((f) => f.parentId === product.id);
          return {
            ...product,
            isFavorite: !!fav,
            favoriteObjectId: fav?.id || null,
          };
        });
      } catch (err) {
        console.error(err);
      }
    },

    async addFavorite(productId) {
      try {
        const docRef = await addDoc(collection(db, 'favorites'), {
          parentId: String(productId),
        });

        this.products = this.products.map((p) =>
          p.id === productId ? { ...p, isFavorite: true, favoriteObjectId: docRef.id } : p,
        );

        successNotification('Товар доданий до обраного');
      } catch (err) {
        console.error(err);
        errorNotification('Виникла помилка');
      }
    },

    async removeFavorite(productId) {
      try {
        const favoriteId = this.products.find((p) => p.id === productId)?.favoriteObjectId;
        if (favoriteId) {
          await deleteDoc(doc(db, 'favorites', favoriteId));
          this.products = this.products.map((product) =>
            product.id === productId
              ? { ...product, isFavorite: false, favoriteObjectId: null }
              : product,
          );
          successNotification('Товар видалений з обраного');
        }
      } catch (err) {
        console.error(err);
        errorNotification('Виникла помилка');
      }
    },

    toggleFavorite(productId) {
      const product = this.products.find((p) => p.id === productId);
      if (!product) return;

      if (product.isFavorite) {
        this.removeFavorite(productId);
      } else {
        this.addFavorite(productId);
      }
    },

    setSearchCategory(query) {
      this.filters.selectedCategories = query;
    },
    setSearchQuery(query) {
      this.filters.searchQuery = query;
    },
    setSortBy(value) {
      this.filters.sortBy = value;
    },
  },
});
