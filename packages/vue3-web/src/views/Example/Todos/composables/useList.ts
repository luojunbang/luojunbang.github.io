import api from '@/api'

import { onMounted, reactive, Ref, ref, watch } from 'vue'
import { Todo, STATUS, TYPE } from './todo'

const cached_list = () =>
  new Array(5).fill(0).map(_ => ({
    id: Math.random().toString(16).slice(2),
    type: Math.random() > 0.5 ? TYPE.GREEN : TYPE.RED,
    status: Math.random() > 0.5 ? STATUS.SUCCESS : STATUS.FAIL,
    label: Math.random().toString(16).slice(2),
  }))

export function useModify(list: Ref<Todo[]>): {
  todoAdd: { label: string; type: TYPE }
  deleteItem: (item: Todo) => void
  addItem: () => void
} {
  const todoAdd = reactive<{ label: string; type: TYPE }>({
    type: TYPE.DEFAULT,
    label: '',
  })
  const addItem = () => {
    const { label, type } = todoAdd
    if (label === '' || type === '') {
      alert('label is Empty')
      return
    }
    list.value.push({
      id: Math.random().toString(16).slice(2),
      label: label,
      type: todoAdd.type,
      status: STATUS.FAIL,
    })
    todoAdd.label = ''
    todoAdd.type = TYPE.DEFAULT
  }
  const deleteItem = (item: Todo) => {
    const { id } = item
    list.value.splice(
      list.value.findIndex(i => i.id === id),
      1,
    )
  }
  return { todoAdd, addItem, deleteItem }
}

export function useList(userId: Ref<string>): {
  addText: Ref<string>
  addType: Ref<TYPE>
  list: Ref<Todo[]>
  getList: () => void
} {
  const addText = ref<string>('')
  const addType = ref<TYPE>(TYPE.GREEN)
  const list = ref<Todo[]>([])
  const getList = async () => {
    list.value = await api.getList(userId.value).then(_ => cached_list())
  }

  onMounted(() => getList())
  watch(userId, getList)

  return {
    addText,
    addType,
    list,
    getList,
  }
}
