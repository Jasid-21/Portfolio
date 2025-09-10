import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n/i18n';
import 'social-proof-cdn';

SocialProof.init({
  businessKey: 'bf885e852cc714f64e147d9a5db7f13fb3bd63b4b9980e0df01cf41b89d19b85',
});

// Createion.
const app = createApp(App);

// Use
app.use(router);
app.use(i18n);

// Mount
app.mount('#app');
