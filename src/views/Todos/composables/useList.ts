import api from '@/api'

import { onMounted, Ref, ref, watch } from 'vue'
import { Todo, STATUS, TYPE } from './todo'

export default function useList(userId: Ref<string>): {
  addText: Ref<string>
  list: Ref<Todo[]>
  deleteItem: (item: Todo) => void
  addItem: () => void
  getList: () => void
} {
  const addText = ref<string>('')
  const list = ref<Todo[]>([])
  const getList = async () => {
    list.value = await api.getList(userId.value).then(() =>
      new Array(5).fill(0).map(_ => ({
        id: Math.random().toString(16).slice(2),
        type: Math.random() > 0.5 ? TYPE.GREEN : TYPE.RED,
        status: Math.random() > 0.5 ? STATUS.SUCCESS : STATUS.FAIL,
        label: Math.random().toString(16).slice(2)
      }))
    )
  }
  const addItem = () => {
    console.log('add')
    const item: Todo = {
      id: Math.random().toString(16).slice(2),
      label: addText.value,
      type: TYPE.GREEN,
      status: STATUS.SUCCESS
    }
    console.log(item)
    list.value.push(item)
  }
  const deleteItem = (item: Todo) => {
    const { id } = item
    list.value.splice(
      list.value.findIndex(i => i.id === id),
      1
    )
  }
  onMounted(() => getList())
  watch(userId, getList)

  return {
    addText,
    list,
    addItem,
    deleteItem,
    getList
  }
}
