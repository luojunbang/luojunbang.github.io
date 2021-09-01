import { computed, reactive, Ref, ref } from 'vue'

import { Todo, TYPE, STATUS } from './todo'

interface filter {
  type: TYPE
  status: STATUS
}

export default function useFilter(list: Ref<Array<Todo>>): {
  listMatchFilter: Ref<Todo[]>
  updateFilter: (key: keyof filter, value: filter[keyof filter]) => void
  listFilter: filter
} {
  const listFilter = reactive<filter>({ type: TYPE.DEFAULT, status: STATUS.DEFAULT })
  const updateFilter = <K extends keyof filter>(key: K, value: filter[K]) => {
    listFilter[key] = value
  }
  const listMatchFilter = computed(() => {
    const { type, status } = listFilter
    return list.value.filter((todo: { type: string; status: string }) => {
      let res = true
      if (type) res = res && todo.type === type
      if (status) res = res && todo.status === status
      return res
    })
  })
  return {
    listFilter,
    updateFilter,
    listMatchFilter
  }
}
