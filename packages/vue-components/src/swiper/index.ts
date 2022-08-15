import Swiper from './swiper.vue'
// import 'element-plus/dist/index.css'

Swiper.install = app => {
  app.component('LoSwiper', Swiper)
}

export const LoSwiper = Swiper

export default LoSwiper
