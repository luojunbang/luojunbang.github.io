"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[213],{

/***/ 1477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Vdom)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Vdom/Vdom.vue?vue&type=template&id=e2a99dac
/* unplugin-vue-components disabled */

const _hoisted_1 = {
  id: "vdom",
  class: "mg"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", _hoisted_1))
}
;// CONCATENATED MODULE: ./src/views/Example/Vdom/Vdom.vue?vue&type=template&id=e2a99dac
/* unplugin-vue-components disabled */
// EXTERNAL MODULE: ../../node_modules/.pnpm/lo-utils@1.2.21/node_modules/lo-utils/dist/lo-utils.esm.js
var lo_utils_esm = __webpack_require__(2672);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Vdom/Vdom.vue?vue&type=script&lang=js
/* unplugin-vue-components disabled */

/* harmony default export */ const Vdomvue_type_script_lang_js = ({
  mounted() {
    function getSequence(arr) {
      const p = arr.slice()
      const result = [0]
      let i, j, u, v, c
      const len = arr.length
      for (i = 0; i < len; i++) {
        const arrI = arr[i]
        if (arrI !== 0) {
          j = result[result.length - 1]
          if (arr[j] < arrI) {
            p[i] = j
            result.push(i)
            continue
          }
          u = 0
          v = result.length - 1
          while (u < v) {
            c = (u + v) >> 1
            if (arr[result[c]] < arrI) {
              u = c + 1
            } else {
              v = c
            }
          }
          if (arrI < arr[result[u]]) {
            if (u > 0) {
              p[i] = result[u - 1]
            }
            result[u] = i
          }
        }
      }
      u = result.length
      v = result[u - 1]
      while (u-- > 0) {
        result[u] = v
        v = p[v]
      }
      return result
    }
    const domArray = new Array(10).fill(0).map((_, i) => ({ value: i.toString(), time: (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's') }))
    console.log('mounted')
    const append = val => {
      const div = document.createElement('div')
      div.innerHTML = val.map(i => `<span key="${i.value}" time="${i.time}">${i.time ? `${i.value}:${i.time}` : '-'}</span>`).join('')
      document.getElementById('vdom').append(div)
    }
    // append(domArray)
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
            newCh[newStartIdx].time = (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's')
          }
          newStartIdx++
        }
        console.log(newCh.map(i => i.value))
        append(newCh)
      }
      if (oldStartIdx > oldEndIdx) {
        for (let i = newStartIdx; i <= newEndIdx; i++) {
          newCh[i].time = (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's')
          append(newCh)
        }
      } else if (newStartIdx < newEndIdx) {
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          newCh[i].time = ''
          append(newCh)
        }
      }
    }
    // setTimeout(() => {
    //   domArray.splice(4, 2, { value: '11' }, { value: '12' })
    //   updateChildren(domArray.map(i => ({ value: i.value })))
    // }, 1000)
    // setTimeout(() => {
    //   domArray.splice(0, 0, { value: '13' }, { value: '14' }, { value: '15' }, { value: '18' })
    //   updateChildren(domArray.map(i => ({ value: i.value })))
    // }, 2000)
    // setTimeout(() => {
    //   domArray.splice(5, 10)
    //   domArray.splice(1, 2, { value: '19' }, { value: '46' }, { value: '65' }, { value: '78' })
    //   updateChildren(domArray.map(i => ({ value: i.value })))
    // }, 3000)
    // setTimeout(() => {
    //   domArray.unshift(domArray.pop())
    //   domArray.splice(1, 2, { value: '99' })
    //   updateChildren(domArray.map(i => ({ value: i.value })))
    // }, 4000)
    //
    function updateChildren_v3(newCh) {
      const oldCh = [...document.querySelector('div#vdom > div:last-child').children].map(i => ({ value: i.innerText.split(':')[0], key: i.getAttribute('key'), time: i.getAttribute('time') }))
      console.log('oldCh:', oldCh)
      let idx = 0,
        e1 = oldCh.length - 1,
        e2 = newCh.length - 1
      const l1 = e1
      const l2 = e2
      while (idx <= e1 && idx <= e2) {
        if (patchNode(oldCh[idx], newCh[idx])) {
          newCh[idx].time = oldCh[idx].time
          idx++
        } else {
          break
        }
        append(newCh)
      }
      while (idx <= e1 && idx <= e2) {
        if (patchNode(oldCh[e1], newCh[e2])) {
          newCh[e2].time = oldCh[e1].time
          e1--
          e2--
        } else {
          break
        }
        append(newCh)
      }
      if (idx > e2) {
        if (idx <= e1) {
          console.log('unmout:', idx, e1)
        }
      } else if (idx > e1) {
        while (idx <= e2) {
          newCh[idx].time = (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's')
          idx++
          append(newCh)
        }
      } else {
        console.log(idx, e2, e1)
        let i

        const s1 = idx
        const s2 = idx
        const newKeyToIdx = new Map()
        for (i = s2; i < e2; i++) {
          newKeyToIdx.set(newCh[i].value, i)
        }

        let patched = 0
        let toBePatched = e2 - idx + 1
        let moved = false
        let maxNewIndexSoFar = 0
        const newIdxToOldIdx = new Array(toBePatched).fill(0)
        console.log(toBePatched, newKeyToIdx, newIdxToOldIdx)
        // a b (c d) e
        // a b (d c f) e
        //      2 3 4
        //    0 0 0 0
        //
        for (i = s1; i <= e1; i++) {
          if (patched > toBePatched) {
            console.log('unmount', i)
            continue
          } else {
            let newIdx = newKeyToIdx.get(oldCh[i].value)
            if (newIdx == undefined) {
              console.log('unmount', i)
            } else {
              if (newIdx >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIdx
              } else {
                moved = true
              }
              newIdxToOldIdx[newIdx - s2] = i + 1
              if (patchNode(newCh[newIdx], oldCh[i])) {
                newCh[newIdx].time = oldCh[i].time
              }
              patched++
            }
          }
          append(newCh)
        }
        console.log(oldCh.map(i => i.value))
        console.log(newCh.map(i => i.value))
        console.log(newIdxToOldIdx)
        const longestMap = getSequence(newIdxToOldIdx)
        console.log(longestMap)
        longestMap.forEach(index => {
          if (newIdxToOldIdx[index] == 0) return
          const oldIdx = newIdxToOldIdx[index] - 1
          const newIdx = newKeyToIdx.get(oldCh[oldIdx].value)
          console.log('newIdx:', newIdx)
          newCh[newIdx].time = oldCh[oldIdx].time
        })
        append(newCh)
        let j = longestMap.length - 1
        for (i = toBePatched - 1; i >= 0; i--) {
          if (newIdxToOldIdx[i] === 0) {
            newCh[i + s2].time = (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's')
          } else if (moved) {
            if (longestMap[j] !== i || j < 0) {
              newCh[i + s2].time = oldCh[newIdxToOldIdx[i] - 1].time
            } else {
              j--
            }
          }
          append(newCh)
        }
      }
    }
    const a = 'a,b,c,d,e,f,g'.split(',').map(i => ({ value: i.toUpperCase(), time: (0,lo_utils_esm/* generatorDate */.jP)(Date.now(), 's') }))
    append(a)
    setTimeout(() => {
      //remove d e
      const b = 'a,z,e,c,b,d,y,f,g'.split(',').map(i => ({ value: i.toUpperCase() }))
      updateChildren_v3(b)
    }, 3000)
    setTimeout(() => {
      // const b = 'a,b,c,f,x,y,z,g,h,i'.split(',').map(i => ({ value: i.toUpperCase() }))
      // updateChildren_v3(b)
    }, 2000)
    setTimeout(() => {
      // const b = 'a,b,c,d,x,f,g,h,i'.split(',').map(i => ({ value: i.toUpperCase() }))
      // const b = 'a,b,n,f,c,d,x,y,h,i'.split(',').map(i => ({ value: i.toUpperCase() }))
      // updateChildren_v3(b)
    }, 1000)
  },
});

;// CONCATENATED MODULE: ./src/views/Example/Vdom/Vdom.vue?vue&type=script&lang=js
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.0.1_qjv4cptcpse3y5hrjkrbb7drda/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/.pnpm/sass-loader@13.0.2_sass@1.54.4+webpack@5.74.0/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Vdom/Vdom.vue?vue&type=style&index=0&id=e2a99dac&lang=scss
/* unplugin-vue-components disabled */// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Example/Vdom/Vdom.vue?vue&type=style&index=0&id=e2a99dac&lang=scss
/* unplugin-vue-components disabled */
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(9956);
;// CONCATENATED MODULE: ./src/views/Example/Vdom/Vdom.vue
/* unplugin-vue-components disabled */



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Vdomvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Vdom = (__exports__);

/***/ })

}]);