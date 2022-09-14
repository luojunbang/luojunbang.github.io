"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[255],{

/***/ 5215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ G6)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: external "G6"
var external_G6_ = __webpack_require__(2125);
var external_G6_default = /*#__PURE__*/__webpack_require__.n(external_G6_);
;// CONCATENATED MODULE: ./src/views/Example/Charts/G6/components.ts


const data = {
    // 点集
    nodes: [
        {
            id: 'node1',
            x: 100,
            y: 200, // Number，可选，节点位置的 y 值
        },
        {
            id: 'node2',
            x: 300,
            y: 200, // Number，可选，节点位置的 y 值
        },
    ],
    // 边集
    edges: [
        {
            source: 'node1',
            target: 'node2', // String，必须，目标点 id
        },
    ],
};
/* harmony default export */ const components = ((0,external_Vue_.defineComponent)({
    setup() {
        const root = (0,external_Vue_.ref)();
        (0,external_Vue_.onMounted)(() => {
            console.log(root.value);
            setTimeout(() => {
                name.value = 'luojunbang';
            }, 3000);
            render(root.value);
        });
        function render(el) {
            const graph = new (external_G6_default()).Graph({
                container: el,
                width: 800,
                height: 500, // Number，必须，图的高度
            });
            graph.data(data); // 读取 Step 2 中的数据源到图上
            graph.render(); // 渲染图
        }
        const name = (0,external_Vue_.ref)('lo');
        return { root, name };
    },
    render() {
        const { name } = this;
        return (0,external_Vue_.h)('div', { style: { width: '400px', height: '400px' }, ref: 'root' }, '');
    },
}));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Charts/G6/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */

const _hoisted_1 = /*#__PURE__*/ (0,external_Vue_.createElementVNode)("div", null, "g6", -1);

/* harmony default export */ const G6vue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'index',
    setup(__props) {
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, [
                _hoisted_1,
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(components))
            ], 64));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Example/Charts/G6/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ./src/views/Example/Charts/G6/index.vue
/* unplugin-vue-components disabled */


const __exports__ = G6vue_type_script_lang_ts_setup_true;

/* harmony default export */ const G6 = (__exports__);

/***/ })

}]);