import Swiper from './swiper.vue'

Swiper.install = app => {
  app.component('LoSwiper', Swiper)
}

export const LoSwiper = Swiper

export default LoSwiper
