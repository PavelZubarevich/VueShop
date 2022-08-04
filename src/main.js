import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';
import BadgeDirective from 'primevue/badgedirective';

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(store)
  .component('InputText', InputText)
  .component('Password', Password)
  .component('Button', Button)
  .component('Message', Message)
  .directive('badge', BadgeDirective)
  .mount('#app')
