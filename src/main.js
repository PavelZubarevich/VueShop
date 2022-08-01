import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primeicons/primeicons.css'

createApp(App)
  .use(router)
  .use(PrimeVue)
  .component('InputText', InputText)
  .component('Password', Password)
  .component('Button', Button)
  .component('Message', Message)
  .mount('#app')
