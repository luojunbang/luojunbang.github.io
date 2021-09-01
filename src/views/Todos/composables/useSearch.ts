import { computed, Ref, ref } from 'vue'

import { Todo } from './todo'

interface searchRet {
  queryText: Ref<string>
  listMatchQueryText: Ref<Todo[]>
}

export default function useSearch(list: Ref<Array<Todo>>): searchRet {
  const queryText = ref('')
  const listMatchQueryText = computed(() => {
    return list.value.filter((todo: { label: string }) => todo.label.includes(queryText.value))
  })
  return {
    queryText,
    listMatchQueryText
  }
}
