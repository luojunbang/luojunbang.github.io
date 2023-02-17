import Swiper from './swiper.vue'

// Swiper.install = app => {
//   app.component('LoSwiper', Swiper)
// }

export * from './swiper'

export const LoSwiper = Swiper

export default LoSwiper

export type LoSwiperInstance = InstanceType<typeof Swiper>
