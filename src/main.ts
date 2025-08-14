import { createApp } from 'vue';
import { createPinia } from 'pinia';
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
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars, faHandPointer } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faToolbox, faPhone, faCode, faScrewdriverWrench, faBars, faHandPointer);
library.add(faVuejs, faAngular, faNodeJs, faPython, faJava, faPhp, faGolang);

const app = createApp(App);
app.component('fai', FontAwesomeIcon);
app.use(router);
app.mount('#app');
