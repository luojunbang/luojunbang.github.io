<template>
  <div>
    <h3>用户ID:{{ userId }}</h3>
    <div><input type="text" v-model="addText" /><button @click="addItem">Add</button></div>
    <input v-model="queryText" />
    <select name="type" @change="updateFilter('type', $event.target.value)">
      <option value="">Select</option>
      <option value="RED">RED</option>
      <option value="GREEN">GREEN</option>
    </select>
    <select name="status" @change="updateFilter('status', $event.target.value)">
      <option value="">Select</option>
      <option value="s">成功</option>
      <option :value="'f'">失败</option>
    </select>
    <ul class="w-50 mg0auto mg-t">
      <li v-for="(item, index) in list" :key="item.id" class="text-left flex-row-nowrap justify-around">
        <span class="font-light">{{ index + 1 }}.</span>
        <span class="font-bold">{{ item.label }}</span>
        <span class="color-text">{{ item.status }}</span>
        <span class="color-title color-subtext">{{ item.type }}</span>
        <button class="mg-l" @click="deleteItem(item)">DELETE</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import useList from './composables/useList'
import useSearch from './composables/useSearch'
import useFilter from './composables/useFilter'

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { userId } = toRefs(props)
    const { list, getList, addItem, addText, deleteItem } = useList(userId)
    const { queryText, listMatchQueryText } = useSearch(list)
    const { listFilter, updateFilter, listMatchFilter } = useFilter(listMatchQueryText)
    return { list: listMatchFilter, getList, queryText, listFilter, updateFilter, addItem, addText, deleteItem }
  }
})
</script>
