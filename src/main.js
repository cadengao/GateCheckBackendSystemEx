import './assets/main.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  

const app = createApp(App)
app.use(router)
app.mount('#app')

