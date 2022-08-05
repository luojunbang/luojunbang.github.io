import loForm from './LoForm.vue'

loForm.install = app => {
  app.component('LoForm', loForm)
}

export default loForm

export const LoForm = loForm

export * from './LoForm'