<template>
  <div id="vdom" class="mg"></div>
</template>

<script>
import { generatorDate } from 'lo-utils'
export default {
  mounted() {
    const domArray = new Array(10).fill(0).map((_, i) => ({ value: i.toString(), time: generatorDate(Date.now(), 's') }))
    console.log('mounted')
    const append = val => {
      const div = document.createElement('div')
      div.innerHTML = val.map(i => `<span key="${i.value}" time="${i.time}">${i.time ? `${i.value}:${i.time}` : '-'}</span>`).join('')
      document.getElementById('vdom').append(div)
    }
    append(domArray)
    function patchNode(oldNode, newNode) {
      return oldNode.key === newNode.value
    }
    function updateChildren(newCh) {
      const oldCh = [...document.querySelector('div#vdom > div:last-child').children].map(i => ({ value: i.innerText.split(':')[0], key: i.getAttribute('key'), time: i.getAttribute('time') }))
      console.log('oldCh:', oldCh)
      let oldStartIdx = 0,
        newStartIdx = 0,
        oldEndIdx = oldCh.length - 1,
        newEndIdx = newCh.length - 1
      let oldToMap
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        console.log('oldStartIdx:', oldStartIdx, 'oldEndIdx:', oldEndIdx, 'newStartIdx:', newStartIdx, 'newEndIdx:', newEndIdx)
        if (patchNode(oldCh[oldStartIdx], newCh[newStartIdx])) {
          console.log(1)
          newCh[newStartIdx++].time = oldCh[oldStartIdx++].time
        } else if (patchNode(oldCh[oldEndIdx], newCh[newEndIdx])) {
          console.log(2)
          newCh[newEndIdx--].time = oldCh[oldEndIdx--].time
        } else if (patchNode(oldCh[oldStartIdx], newCh[newEndIdx])) {
          console.log(3)
          newCh[newEndIdx--].time = oldCh[oldStartIdx++].time
        } else if (patchNode(oldCh[oldEndIdx], newCh[newStartIdx])) {
          console.log(4)
          newCh[newStartIdx++].time = oldCh[oldEndIdx--].time
        } else {
          if (!oldToMap)
            oldToMap = oldCh.slice(oldStartIdx, oldEndIdx + 1).reduce((rs, item) => {
              rs[item.key] = item
              return rs
            }, {})
          if (oldToMap[newCh[newStartIdx].key]) {
            console.log('1234')
            newCh[newStartIdx].time = oldToMap[newCh[newStartIdx].key].time
          } else {
            console.log('234')
            newCh[newStartIdx].time = generatorDate(Date.now(), 's')
          }
          newStartIdx++
        }
        console.log(newCh.map(i => i.value))
        append(newCh)
      }
      if (oldStartIdx > oldEndIdx) {
        for (let i = newStartIdx; i <= newEndIdx; i++) {
          newCh[i].time = generatorDate(Date.now(), 's')
          append(newCh)
        }
      } else if (newStartIdx < newEndIdx) {
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          newCh[i].time = ''
          append(newCh)
        }
      }
    }
    setTimeout(() => {
      domArray.splice(4, 2, { value: '11' }, { value: '12' })
      updateChildren(domArray.map(i => ({ value: i.value })))
    }, 1000)
    setTimeout(() => {
      domArray.splice(0, 0, { value: '13' }, { value: '14' }, { value: '15' }, { value: '18' })
      updateChildren(domArray.map(i => ({ value: i.value })))
    }, 2000)
    setTimeout(() => {
      domArray.splice(5, 10)
      domArray.splice(1, 2, { value: '19' }, { value: '46' }, { value: '65' }, { value: '78' })
      updateChildren(domArray.map(i => ({ value: i.value })))
    }, 3000)
    setTimeout(() => {
      domArray.unshift(domArray.pop())
      domArray.splice(1, 2, { value: '99' })
      updateChildren(domArray.map(i => ({ value: i.value })))
    }, 4000)
    //
    const a = 'a,b,c,d,e,f,g,h,i'
    const b = 'a,b,n,f,c,d,i,e,h,i'
  },
}
</script>
<style lang="scss">
#vdom > div {
  height: 50px;
}
#vdom > span {
  display: inline-block;
  width: 60px;
  padding: 5px 10px;
  background-color: #efefef;
  text-align: center;
  margin: 0 5px;
  border: 1px solid black;
}
</style>
