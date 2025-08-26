import 'normalize.css';
import '@/styles/main.scss';
import '@/styles/tailwind.pcss';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
