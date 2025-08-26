import { defineStore } from 'pinia';
import axios from 'axios';

const APP_ID = import.meta.env.VITE_BACKENDLESS_APP_ID;
const REST_KEY = import.meta.env.VITE_BACKENDLESS_REST_KEY;

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
          const cats = Array.isArray(p.categories)
            ? p.categories
            : p.categories
              ? p.categories.split(',').map((c) => c.trim())
              : [];
          return cats.some((c) => selected.includes(c));
        });
      }

      // Сортировка
      switch (state.filters.sortBy) {
        case 'name':
          temp.sort((a, b) => a.name.localeCompare(b.name));
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
  },
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios.get('/api/data/products');
        this.products = data.map((obj) => ({
          ...obj,
          isFavorite: false,
          isAdded: false,
        }));

        console.log(this.products);

        const allCategories = data.flatMap((item) =>
          item.categories
            ? Array.isArray(item.categories)
              ? item.categories
              : item.categories.split(',').map((c) => c.trim())
            : [],
        );
        this.categories = [...new Set(allCategories)].map((c, i) => ({
          id: i + 1,
          name: c,
        }));
      } catch (err) {
        console.error(err);
      }
    },

    async fetchFavorites() {
      try {
        const { data: favorites } = await axios.get(`/api/data/favorites`);
        this.products = this.products.map((product) => {
          const fav = favorites.find((f) => f.parentId === product.id);
          return {
            ...product,
            isFavorite: !!fav,
            favoriteObjectId: fav?.objectId || null,
          };
        });
      } catch (err) {
        console.error(err);
      }
    },

    async addFavorite(productId) {
      try {
        const { data } = await axios.post(
          '/api/data/favorites',
          { parentId: String(productId) },
          {
            headers: {
              'Content-Type': 'application/json',
              'application-id': APP_ID,
              'secret-key': REST_KEY,
            },
          },
        );

        this.products = this.products.map((p) =>
          p.id === productId ? { ...p, isFavorite: true, favoriteObjectId: data.objectId } : p,
        );
      } catch (err) {
        console.error(err.response?.data || err);
      }
    },

    async removeFavorite(productId) {
      try {
        const favRecord = this.products.find((p) => p.id === productId)?.favoriteObjectId;
        if (favRecord) {
          await axios.delete(`/api/data/favorites/${favRecord}`);
          this.products = this.products.map((product) => {
            if (product.id === productId) {
              return {
                ...product,
                isFavorite: false,
                favoriteObjectId: null,
              };
            }
            return product;
          });
        }
      } catch (err) {
        console.error(err);
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
