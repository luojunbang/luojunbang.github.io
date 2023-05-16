<template>
  <div>Object.defineProperty</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { Observe as ObserveV2 } from './observe_v2'
import { observe as ObserveV3 } from './observe_v3'

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
  ;[personV2, ObserveV3(personV3)].forEach(target => {
    console.log('-------------')
    target.name
    target.name += '__Changed'
    console.log('-------------')
    target.info
    target.info.age = { old: '99', new: '100' }
    target.info.age.old++
    console.log('-------------push')
    target.assets.push('1')
    console.log('-------------unshift')
    target.assets.unshift('0')
    console.log('-------------get')
    target.assets
    console.log('-------------pop')
    target.assets.pop()
    console.log('-------------')
    target.location
    target.location = ['gz', 'sz']
    target.location[0] = 1
  })
})
</script>
