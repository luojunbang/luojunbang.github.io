"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[163],{

/***/ 9884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Lifecycle)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Lifecycle/component.vue?vue&type=script&lang=ts
/* unplugin-vue-components disabled */
const lifeCycle = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];
/* harmony default export */ const componentvue_type_script_lang_ts = ((0,external_Vue_.defineComponent)({
    props: {
        name: {
            type: String,
            default: '',
        },
    },
    emits: ['change'],
    setup(props, { emit }) {
        const a = (0,external_Vue_.ref)('lo');
        setTimeout(() => {
            a.value = 'a';
        }, 8000);
        const handleEmit = () => {
            emit('change', 123);
        };
        return { a, handleEmit };
    },
    ...lifeCycle.reduce((rs, item) => {
        rs[item] = () => console.log('child ', item);
        return rs;
    }, {}),
    render() {
        const { a, name, handleEmit } = this;
        return (0,external_Vue_.h)('div', { onClick: handleEmit }, 'hello ' + a + '  ' + name);
    },
}));

;// CONCATENATED MODULE: ./src/views/Example/Lifecycle/component.vue?vue&type=script&lang=ts
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ./src/views/Example/Lifecycle/component.vue
/* unplugin-vue-components disabled */


const __exports__ = componentvue_type_script_lang_ts;

/* harmony default export */ const component = (__exports__);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Lifecycle/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */



/* harmony default export */ const Lifecyclevue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'index',
    setup(__props) {
        const lifeList = ['onBeforeMount', 'onMounted', 'onBeforeUpdate', 'onUpdated', 'onBeforeUnmount', 'onUnmounted'];
        [external_Vue_.onBeforeMount, external_Vue_.onMounted, external_Vue_.onBeforeUpdate, external_Vue_.onUpdated, external_Vue_.onBeforeUnmount, external_Vue_.onUnmounted].forEach((item, idx) => {
            item(() => {
                ;
                [console.log('parent:', lifeList[idx])];
            });
        }, {});
        const change = () => {
            console.log('onChange----');
            name.value = 'change ParentName';
        };
        const name = (0,external_Vue_.ref)('myName');
        const parentname = (0,external_Vue_.ref)('123');
        setTimeout(() => {
            parentname.value = 'ParentName';
        }, 3000);
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, [
                (0,external_Vue_.createElementVNode)("div", null, (0,external_Vue_.toDisplayString)(parentname.value), 1),
                (0,external_Vue_.createVNode)(component, {
                    name: name.value,
                    onChange: change
                }, null, 8, ["name"])
            ], 64));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Example/Lifecycle/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ./src/views/Example/Lifecycle/index.vue
/* unplugin-vue-components disabled */


const Lifecycle_exports_ = Lifecyclevue_type_script_lang_ts_setup_true;

/* harmony default export */ const Lifecycle = (Lifecycle_exports_);

/***/ })

}]);