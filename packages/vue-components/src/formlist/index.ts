import Formlist from './formlist.vue'

Formlist.install = app => {
  app.component('Formlist', Formlist)
}

export const LoFormList = Formlist

export default LoFormList


export * from './formlist'