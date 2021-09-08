import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lo-utils/style/index.scss'

import ContentBox from '@/components/ContentBox.vue'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.component('content-box', ContentBox)
