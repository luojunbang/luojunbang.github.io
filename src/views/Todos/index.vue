<template>
  <div>
    <div class="mg-tb border pd-sm">
      类型：<select name="type" v-model="todoAdd.type" class="mg-r">
        <option v-for="item in typeList" :value="item" :key="item">{{ item }}</option>
      </select>
      任务：<input type="text" v-model="todoAdd.label" class="mg-r" />
      <button @click="addItem">Add Task</button>
    </div>
    <div class="border pd-sm">
      搜索：
      <input v-model="listFilter.queryText" />
      类型：
      <select name="type" @change="updateFilter('type', $event.target.value)">
        <option v-for="item in typeList" :value="item" :key="item">{{ item }}</option>
      </select>
      状态：
      <select name="status" @change="updateFilter('status', $event.target.value)">
        <option v-for="item in statusList" :value="item" :key="item">{{ item }}</option>
      </select>
      <ul class="w-50 mg0auto mg-t">
        <li v-for="(item, index) in list" :key="item.id" class="pd-tb-xs text-left flex-row-nowrap">
          <b class="text-light text-bold color-primary">{{ index + 1 }}.</b>
          <span class="color-title">{{ item.label }}</span>
          <span class="color-text">{{ item.status }}</span>
          <span class="text-light" :style="{ color: item.type }">{{ item.type }}</span>
          <button class="mg-l" @click="deleteItem(item)">DELETE</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { useList, useModify } from './composables/useList'
import useFilter from './composables/useFilter'
import { TYPE, STATUS } from './composables/todo'

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    typeList: TYPE,
    statusList: STATUS
  }),
  setup(props) {
    const { userId } = toRefs(props)
    const { list, getList } = useList(userId)
    const { todoAdd, addItem, deleteItem } = useModify(list)
    const { listFilter, updateFilter, listMatchFilter } = useFilter(list)
    return { list: listMatchFilter, getList, listFilter, updateFilter, addItem, todoAdd, deleteItem }
  }
})
</script>

<style lang="scss" scoped>
li {
  span {
    margin-right: 20px;
    min-width: 120px;
  }
}
</style>
