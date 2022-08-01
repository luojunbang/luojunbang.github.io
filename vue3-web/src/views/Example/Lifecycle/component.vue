<script lang="ts">
import { defineComponent, ref, h, defineEmits } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const a = ref('lo')
    setTimeout(() => {
      a.value = 'a'
    }, 8000)
    const handleEmit = () => {
      emit('change', 123)
    }
    return { a, handleEmit }
  },
  ...['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'].reduce((rs, item) => {
    rs[item] = () => console.log('child ', item)
    return rs
  }, {}),
  render() {
    const { a, name, handleEmit } = this
    return h('div', { onClick: handleEmit }, 'hello ' + a + '  ' + name)
  },
})
</script>
