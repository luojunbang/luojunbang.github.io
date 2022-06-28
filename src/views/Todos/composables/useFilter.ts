import { computed, reactive, Ref } from 'vue'

import { Todo, TYPE, STATUS, Filter } from './todo'

export default function useFilter(list: Ref<Array<Todo>>): {
  listMatchFilter: Ref<Todo[]>
  updateFilter: (key: keyof Filter, value: Filter[keyof Filter]) => void
  listFilter: Filter
} {
  const listFilter = reactive<Filter>({ queryText: '', type: TYPE.DEFAULT, status: STATUS.DEFAULT })
  const updateFilter = <K extends keyof Filter>(key: K, value: Filter[K]) => {
    listFilter[key] = value
  }
  const listMatchFilter = computed(() => {
    const { type, status, queryText } = listFilter
    return list.value.filter((todo: { label: string; type: TYPE; status: STATUS }) => {
      let res = true
      if (queryText) res = res && todo.label.includes(queryText)
      if (type) res = res && todo.type === type
      if (status) res = res && todo.status === status
      return res
    })
  })
  return {
    listFilter,
    updateFilter,
    listMatchFilter,
  }
}
