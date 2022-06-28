<template>
  <div id="vdom" class="mg"></div>
</template>

<script>
import { fmtTime } from 'lo-utils'
export default {
  mounted() {
    const domArray = new Array(10).fill(0).map((_, i) => ({ value: i.toString(), time: fmtTime(Date.now(), '') }))
    console.log('mounted')
    const append = val => {
      const div = document.createElement('div')
      div.innerHTML = val
        .filter(i => i.time)
        .map(i => `<span key="${i.value}" time="${i.time}">${i.value}:${i.time}</span>`)
        .join('')
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
            newCh[newStartIdx].time = fmtTime(Date.now(), '')
          }
          newStartIdx++
        }
        append(newCh.slice(0, newStartIdx))
      }
    }
    domArray.splice(4, 2, { value: '11' }, { value: '12' })
    updateChildren(domArray)

    //
  },
}
</script>
<style lang="scss">
#vdom > div {
  height: 50px;
}
span {
  display: inline-block;
  min-width: 100px;
  padding: 5px 20px;
  background-color: #efefef;
  text-align: center;
  margin: 0 5px;
  border: 1px solid black;
}
</style>
