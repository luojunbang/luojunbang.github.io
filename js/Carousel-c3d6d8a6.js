"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[361],{

/***/ 6549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lo-utils@1.2.21/node_modules/lo-utils/dist/lo-utils.esm.js
var lo_utils_esm = __webpack_require__(2672);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Carousel/components/Swiper.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */

const _withScopeId = n => ((0,external_Vue_.pushScopeId)("data-v-f75d2ff0"), n = n(), (0,external_Vue_.popScopeId)(), n);
const _hoisted_1 = { id: "nextIndex" };
const _hoisted_2 = {
    id: "ready",
    style: { "width": "0", "height": "0", "display": "none" }
};
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,external_Vue_.createElementVNode)("br", null, null, -1));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,external_Vue_.createElementVNode)("br", null, null, -1));


/* harmony default export */ const Swipervue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'Swiper',
    setup(__props) {
        (0,external_Vue_.useCssVars)(_ctx => ({
            "bbd8d8d4": ((0,external_Vue_.unref)(cpWait))
        }));
        const swiperList = (0,external_Vue_.reactive)(new Array(11).fill(0).map((i, idx) => ({ id: (0,lo_utils_esm.r)(2) })));
        const calc = i => (i + swiperList.length) % swiperList.length;
        const ins = (0,external_Vue_.getCurrentInstance)();
        const root = (0,external_Vue_.shallowRef)();
        const nextIndex = (0,external_Vue_.ref)(-1);
        const activeIndex = (0,external_Vue_.ref)(0);
        const lastIndex = (0,external_Vue_.ref)(-1);
        const diretion = (0,external_Vue_.ref)('');
        const nextStyle = (0,external_Vue_.reactive)({
            transform: '',
        });
        const activeList = (0,external_Vue_.computed)(() => {
            if (diretion.value == 'prev') {
                return [activeIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => lastIndex.value + idx)].map(calc);
            }
            else
                return [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc);
        });
        function next() {
            diretion.value = 'next';
            nextIndex.value = calc(activeIndex.value + IN_SHOW_COUNT);
            ready.value = false;
            animating.value = false;
            nextStyle.transform = `translateX(${100 * 2}%)`;
            setTimeout(() => {
                // console.log('ready:', ready.value, document.getElementById('ready')?.innerText)
                ready.value = true;
                lastIndex.value = activeIndex.value;
                activeIndex.value = calc(activeIndex.value + 1);
            }, 20);
        }
        async function prev() {
            diretion.value = 'prev';
            nextIndex.value = calc(activeIndex.value - 1);
            ready.value = false;
            nextStyle.transform = `translateX(${100 * -1}%)`;
            await (0,external_Vue_.nextTick)();
            root.value && getComputedStyle(root.value).width; // force brower render css quene
            ready.value = true;
            lastIndex.value = activeIndex.value;
            activeIndex.value = calc(activeIndex.value - 1);
        }
        const ready = (0,external_Vue_.ref)(true);
        const animating = (0,external_Vue_.ref)(false);
        const cpAnimating = (0,external_Vue_.computed)(() => {
            return index => {
                return ready.value;
            };
        });
        const cpStyle = (0,external_Vue_.computed)(() => {
            // console.log('activeIndex:', activeIndex.value)
            // console.log('lastIndex:', lastIndex.value)
            // console.log('diretion:', diretion.value)
            // console.log('diretion:', ready.value)
            return index => {
                if (!ready.value && index == nextIndex.value) {
                    // console.log('nextIndex computedindex:', index)
                    if (diretion.value == 'prev')
                        return { transform: `translateX(${100 * -1}%)` };
                    else if (diretion.value == 'next')
                        return { transform: `translateX(${100 * IN_SHOW_COUNT + 1}%)` };
                }
                const ans = {};
                let list = [];
                let base = 0;
                if (ready.value && diretion.value == 'prev') {
                    // base = -1
                    // activeIndex.value - 1,
                    list = [activeIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => lastIndex.value + idx)].map(calc);
                }
                else if (ready.value && diretion.value == 'next') {
                    base = -1;
                    list = [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc);
                }
                else
                    list = [...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc);
                if (list.indexOf(index) != -1) {
                    // console.log('list computedindex:', index)
                    ans.transform = `translateX(${100 * (list.indexOf(index) + base)}%)`;
                }
                else {
                    ans.transform = `translateX(${100 * IN_SHOW_COUNT + 1}%)`;
                    ans.display = [lastIndex.value, ...new Array(IN_SHOW_COUNT).fill(0).map((i, idx) => activeIndex.value + idx)].map(calc).includes(index) ? 'block' : 'none';
                }
                return ans;
            };
        });
        const wait = (0,external_Vue_.ref)(0.1);
        const cpWait = (0,external_Vue_.computed)(() => {
            return wait.value + 's';
        });
        let timer;
        const handleMove = () => {
            timer = setInterval(() => {
                prev();
            }, wait.value * 1000);
        };
        (0,external_Vue_.onMounted)(() => {
            // handleMove()
        });
        const IN_SHOW_COUNT = 10; // Count
        const SAFE_COUNT = 1;
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, [
                (0,external_Vue_.createElementVNode)("div", null, "activeIndex:" + (0,external_Vue_.toDisplayString)(activeIndex.value), 1),
                (0,external_Vue_.createElementVNode)("div", _hoisted_1, "nextIndex:" + (0,external_Vue_.toDisplayString)(nextIndex.value), 1),
                (0,external_Vue_.createElementVNode)("div", null, "lastIndex:" + (0,external_Vue_.toDisplayString)(lastIndex.value), 1),
                (0,external_Vue_.createElementVNode)("div", null, "diretion:" + (0,external_Vue_.toDisplayString)(diretion.value), 1),
                (0,external_Vue_.createElementVNode)("div", _hoisted_2, "ready:" + (0,external_Vue_.toDisplayString)(ready.value), 1),
                (0,external_Vue_.createElementVNode)("div", {
                    ref_key: "root",
                    ref: root,
                    class: "swiper-container"
                }, [
                    ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(swiperList, (item, index) => {
                        return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
                            class: (0,external_Vue_.normalizeClass)(["swiper-item text-center pd-t-lg", { animating: ready.value && (0,external_Vue_.unref)(activeList).includes(index) }]),
                            style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(cpStyle)(index)),
                            key: index
                        }, [
                            (0,external_Vue_.createElementVNode)("div", null, [
                                (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(index), 1),
                                _hoisted_3,
                                (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(item.id), 1),
                                _hoisted_4,
                                (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(ready.value ? 'T' : 'F'), 1)
                            ])
                        ], 6));
                    }), 128))
                ], 512),
                (0,external_Vue_.createElementVNode)("div", { class: "text-center" }, [
                    (0,external_Vue_.createElementVNode)("button", { onClick: prev }, "Prev"),
                    (0,external_Vue_.createElementVNode)("button", { onClick: next }, "Next")
                ])
            ], 64));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Carousel/components/Swiper.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.0.1_qjv4cptcpse3y5hrjkrbb7drda/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/.pnpm/sass-loader@13.0.2_sass@1.54.4+webpack@5.74.0/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Carousel/components/Swiper.vue?vue&type=style&index=0&id=8c695736&lang=scss&scoped=true
/* unplugin-vue-components disabled */// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Carousel/components/Swiper.vue?vue&type=style&index=0&id=8c695736&lang=scss&scoped=true
/* unplugin-vue-components disabled */
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(9956);
;// CONCATENATED MODULE: ./src/views/Carousel/components/Swiper.vue
/* unplugin-vue-components disabled */


;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Swipervue_type_script_lang_ts_setup_true, [['__scopeId',"data-v-8c695736"]])

/* harmony default export */ const Swiper = (__exports__);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Carousel/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */

const Carouselvue_type_script_lang_ts_setup_true_withScopeId = n => (_pushScopeId("data-v-9f133640"), n = n(), _popScopeId(), n);
const Carouselvue_type_script_lang_ts_setup_true_hoisted_1 = { class: "pd-t" };
const Carouselvue_type_script_lang_ts_setup_true_hoisted_2 = { class: "carousel" };



/* harmony default export */ const Carouselvue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'index',
    setup(__props) {
        const list = (0,external_Vue_.reactive)(new Array(20).fill(0).map((i, idx) => ({ id: (0,lo_utils_esm.r)() })));
        const reset = (0,external_Vue_.ref)(false);
        const real = (0,external_Vue_.ref)(false);
        const ball = (0,external_Vue_.ref)();
        const style = (0,external_Vue_.reactive)({ left: '0px', top: '0px' });
        console.log(ball);
        (0,external_Vue_.onMounted)(() => {
            var _a;
            (_a = ball.value) === null || _a === void 0 ? void 0 : _a.addEventListener('transitionend', () => { });
        });
        async function start() {
            style.left = '100px';
            style.top = '0px';
            reset.value = false;
            await (0,external_Vue_.nextTick)();
            reset.value = true;
            real.value = true;
            style.top = '100px';
        }
        (0,external_Vue_.watchPostEffect)(() => {
            console.log('reset watchPostEffect:', reset.value);
        });
        (0,external_Vue_.watchSyncEffect)(() => {
            console.log('reset watchSyncEffect:', reset.value);
        });
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", Carouselvue_type_script_lang_ts_setup_true_hoisted_1, [
                (0,external_Vue_.createElementVNode)("div", Carouselvue_type_script_lang_ts_setup_true_hoisted_2, [
                    (0,external_Vue_.createVNode)(Swiper)
                ])
            ]));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Carousel/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.0.1_qjv4cptcpse3y5hrjkrbb7drda/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/.pnpm/sass-loader@13.0.2_sass@1.54.4+webpack@5.74.0/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Carousel/index.vue?vue&type=style&index=0&id=8a6eb2e6&lang=scss&scoped=true
/* unplugin-vue-components disabled */// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Carousel/index.vue?vue&type=style&index=0&id=8a6eb2e6&lang=scss&scoped=true
/* unplugin-vue-components disabled */
;// CONCATENATED MODULE: ./src/views/Carousel/index.vue
/* unplugin-vue-components disabled */


;


const Carousel_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Carouselvue_type_script_lang_ts_setup_true, [['__scopeId',"data-v-8a6eb2e6"]])

/* harmony default export */ const Carousel = (Carousel_exports_);

/***/ })

}]);