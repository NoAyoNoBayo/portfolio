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
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Badge from 'primevue/badge'
import Tag from 'primevue/tag'
import DataView from 'primevue/dataview'
import Card from 'primevue/card'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Badge', Badge)
app.component('Tag', Tag)
app.component('DataView', DataView)
app.component('Card', Card)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)

app.mount('#app')
