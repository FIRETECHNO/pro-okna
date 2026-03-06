import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createHead } from '@vueuse/head'
import './assets/styles/main.css'
import 'vuetify/styles'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(head)
app.mount('#app')
