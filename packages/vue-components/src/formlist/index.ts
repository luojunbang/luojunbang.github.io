import Formlist from './formlist.vue'
// import 'element-plus/dist/index.css'

Formlist.install = app => {
  app.component('LoFormList', Formlist)
}

export const LoFormList = Formlist

export default LoFormList

export * from './formlist'
