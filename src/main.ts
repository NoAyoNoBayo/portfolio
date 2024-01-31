import './assets/main.css'
import 'primevue/resources/themes/soho-dark/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Menubar', Menubar)

app.mount('#app')
