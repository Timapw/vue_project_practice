import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/reset.css'
import './assets/styles/style.scss'
import './assets/styles/_base.scss'

createApp(App).use(store).use(router).mount('#app')
