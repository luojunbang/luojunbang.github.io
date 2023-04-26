<template>
  <div>Object.defineProperty</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { Observe as ObserveV2 } from './observe_v2'

const personV2: Record<string, any> = {
  name: 'personV2',
  info: {
    age: 'personV2_age',
  },
  assets: [],
  location: 'gz',
}

const personV3: Record<string, any> = {
  name: 'personV3',
  info: {
    age: 'personV3_age',
  },
  assets: [],
  location: 'gz',
}
const log = (type: string, ...args: any[]) => {
  console.log(`${type}`, ...args)
}

onMounted(() => {
  new ObserveV2(personV2)
  personV2.name
  personV2.name += '__Changed'
  personV2.info
  personV2.info.age = { old: '99', new: '100' }
  personV2.info.age.old
  personV2.assets.push('1')
  personV2.assets.unshift('0')
  personV2.assets
  personV2.assets.pop()
  personV2.assets
  personV2.location
  personV2.location = ['gz', 'sz']
  personV2.location
})
</script>
