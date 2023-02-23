import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// import 'tailwindcss/tailwind.css'
import '@/common/style/common.scss'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import 'lo-utils/style/index.scss'

// import ContentBox from '@/components/ContentBox.vue'
// import Icon from '@/components/Icon/index.vue'

// const observer = new PerformanceObserver(function (list, obj) {
//   const entries = list.getEntries()
//   for (let i = 0; i < entries.length; i++) {
//     console.log('entries:', entries[i])
//     // Process "mark" and "frame" events
//   }
// })
// observer.observe({ entryTypes: ['first-input'] })
// window.addEventListener(
//   'error',
//   function (e) {
//     console.log(e.target, e.message, e)
//   },
//   true,
// )

const app = createApp(App)
app
  .use(createPinia())
  // .use(ElementPlus)
  .use(router)
  .mount('#app')
// app.component('content-box', ContentBox)
// app.component('icon', Icon)
