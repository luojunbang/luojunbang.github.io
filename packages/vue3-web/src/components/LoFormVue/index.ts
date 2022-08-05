import LoForm from './LoForm.vue'

LoForm.install = app => {
  app.component('LoForm', LoForm)
}

export default LoForm

export * from './LoForm'