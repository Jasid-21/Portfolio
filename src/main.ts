import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
