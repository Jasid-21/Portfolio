import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faVuejs,
  faAngular,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faGolang,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { i18n } from './i18n/i18n';

library.add(faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars, faHandPointer);
library.add(faVuejs, faAngular, faNodeJs, faPython, faJava, faPhp, faGolang, faHtml5);

// Createion.
const app = createApp(App);
app.component('fai', FontAwesomeIcon);

// Use
app.use(router);
app.use(i18n);

// Mount
app.mount('#app');
