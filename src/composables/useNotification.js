import { currentNotification } from '@/stores/notification.store.js';

export function useNotification() {
  function showNotification({
    text = '',
    title = '',
    duration = 3000,
    mainBgColor,
    secondBgColor,
  }) {
    currentNotification.value = {
      id:
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : String(Date.now()),
      text,
      title,
      duration,
      mainBgColor,
      secondBgColor,
    };
  }

  const successNotification = (msg, title = 'Успішно', duration = 3000) => {
    showNotification({
      text: msg,
      title,
      duration,
      mainBgColor: 'var(--cl-green-400)',
      secondBgColor: 'var(--cl-green-50)',
    });
  };

  const errorNotification = (msg, title = 'Помилка', duration = 3000) => {
    showNotification({
      text: msg,
      title,
      duration,
      mainBgColor: 'var(--cl-red-400)',
      secondBgColor: 'var(--cl-red-50)',
    });
  };

  const infoNotification = (msg, title = 'Повідомлення', duration = 3000) => {
    showNotification({
      text: msg,
      title,
      duration,
      mainBgColor: 'var(--cl-blue-400)',
      secondBgColor: 'var(--cl-blue-50)',
    });
  };

  return { showNotification, successNotification, errorNotification, infoNotification };
}
