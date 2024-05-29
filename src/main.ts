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
import Image from 'primevue/image'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import InlineMessage from 'primevue/inlinemessage'


const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)


app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Badge', Badge)
app.component('Tag', Tag)
app.component('DataView', DataView)
app.component('Card', Card)
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('Image', Image)
app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Navigation', Navigation)
app.component('Toast', Toast)
app.component('InlineMessage', InlineMessage)

app.mount('#app')
