import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import store from './store'

import './styles/style.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
