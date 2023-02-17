import Pagination from './pagination.vue'
import '../../style/index.scss'
// Swiper.install = app => {
//   app.component('LoSwiper', Swiper)
// }

export * from './pagination'

export const LoPagination = Pagination

export default LoPagination

export type LoPaginationInstance = InstanceType<typeof Pagination>
