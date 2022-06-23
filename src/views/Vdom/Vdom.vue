<template>
  <div id="vdom" class="mg"></div>
</template>

<script>
import { fmtTime } from 'lo-utils'
export default {
  mounted() {
    const domArray = new Array(10).fill(0).map((_, i) => i)
    console.log('mounted')
    const append = val => {
      const div = document.createElement('div')
      div.innerHTML = val.map(i => `<span key="${i}" time="${fmtTime(Date.now(), '')}">${i}</span>`).join('')
      document.getElementById('vdom').append(div)
    }
    let old = domArray.map(i => i)
    append(domArray)
    function patchNoe(oldNode, newNode) {
      console.log(oldNode, newNode)
    }
    function updateChildren(oldCh, newCh) {
      console.log(oldCh, newCh)
      old = newCh.map(i => i)
      append(newCh)
    }
    domArray.splice(4, 2, 11, 12)
    updateChildren(old, domArray)

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
