<template>
  <div>
    <ListFilter />
    <ListSortBy />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import List from './List.vue'
import ListFilter from './listFilter.vue'
import ListSortBy from './listSortBy.vue'

export default defineComponent({
  components: { List, ListFilter, ListSortBy },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { userId } = toRefs(props)
    console.log(userId)
    // const List =
    // onMounted()
  },
})
</script>
