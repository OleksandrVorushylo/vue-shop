import { defineStore } from 'pinia';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNotification } from '@/composables/useNotification.js';

const { successNotification, errorNotification } = useNotification();

export const useOrdersStore = defineStore('orders', {
  actions: {
    async sendOrder(orderData) {
      try {
        const docRef = await addDoc(collection(db, 'orders'), orderData);
        successNotification('Замовлення успішно відправлено');
        return docRef.id;
      } catch (err) {
        console.error('Помилка при створенні замовлення:', err);
        errorNotification('Сталася помилка при оформленні');
        throw err;
      }
    },
  },
});
