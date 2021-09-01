<template>
  <div>
    <h3>用户ID:{{ userId }}</h3>
    <div class="mg-tb"><input type="text" v-model="addText" /><button @click="addItem">Add Task</button></div>
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
    <ul class="w-70 mg0auto mg-t">
      <li v-for="(item, index) in list" :key="item.id" class="pd-tb-xs text-left flex-row-nowrap">
        <span class="text-light color-primary">{{ index + 1 }}.</span>
        <span class="text-bold color-title">{{ item.label }}</span>
        <span class="color-text">{{ item.status }}</span>
        <span class="text-light" :style="{ color: item.type }">{{ item.type }}</span>
        <button class="mg-l" @click="deleteItem(item)">DELETE</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import useList from './composables/useList'
import useFilter from './composables/useFilter'
import { TYPE, STATUS } from './composables/todo'

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
    const { listFilter, updateFilter, listMatchFilter } = useFilter(list)
    return { list: listMatchFilter, getList, listFilter, updateFilter, addItem, addText, deleteItem, typeList: TYPE, statusList: STATUS }
  }
})
</script>

<style lang="scss" scoped>
li {
  span {
    @extend .mg-r;
  }
}
</style>
