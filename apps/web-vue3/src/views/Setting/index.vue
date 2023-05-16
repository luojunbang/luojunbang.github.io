<template>
  <div class="p-lg">
    <div>setting</div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="my-lg">
      <el-date-picker type="datetimerange" v-model="CurrDateTime" />
    </div>
    <div class="my-lg">
      <el-time-picker v-model="CurrDate" />
    </div>
    <div class="my-lg">
      <el-select v-model="CurrCity">
        <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div v-for="item in list" :key="item.label">
      <div>Label:<el-input v-model="item.label" /></div>
      <div>Icon:<el-input v-model="item.icon" /></div>
      <div v-show="item.href">Href:<el-input v-model="item.href" /></div>
      <template v-if="item.versions && item.versions.length > 0">
        <div v-for="ver in item.versions" :key="ver.href">
          <div>Label:<el-input v-model="item.label" /></div>
          <div>Href:<el-input v-model="item.href" /></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElInput, ElSelect, ElOption, ElDatePicker, ElTimePicker, ElCarousel, ElCarouselItem } from 'element-plus'
import { FRIENDILY_LINK, storage } from '@/common'
import { ref } from 'vue'
const list = ref(storage.get(FRIENDILY_LINK))
const CurrCity = ref('')
const CurrDateTime = ref('')
const CurrDate = ref('')
const cityList = ref([
  {
    label: 'Guangzhou',
    value: '113.459749,23.106402',
  },
  {
    label: 'GuangXi',
    value: '112.459749,23.106402',
  },
])
</script>
