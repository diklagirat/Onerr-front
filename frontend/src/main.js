import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import './styles/style.scss'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueperSlides)
app.use(VueperSlide)

app.mount('#app')
