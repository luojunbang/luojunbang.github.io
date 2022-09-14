"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[686],{

/***/ 7616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Image)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/Image/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */

const _hoisted_1 = {
    class: "w-60 mg0auto",
    style: { "width": "3000px" }
};
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "w-100 mg-tb-lg" };
const _hoisted_4 = ["src"];

/* harmony default export */ const Imagevue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'index',
    setup(__props) {
        const urls = (0,external_Vue_.reactive)([
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
            'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
        ]);
        const imgEl = (0,external_Vue_.ref)();
        // console.log(imgEl.value)
        const imgSrc = (0,external_Vue_.ref)('');
        function debounce(fn, wait = 300) {
            let args, result, ctx, timer, lastEmitTime;
            const handler = () => {
                const last = Date.now() - lastEmitTime;
                if (last > 0 && last < wait) {
                    timer = setTimeout(handler, wait - last);
                }
                else {
                    timer = null;
                    result = fn.apply(ctx, args);
                }
            };
            return () => {
                lastEmitTime = Date.now();
                args = arguments;
                if (!timer)
                    timer = setTimeout(handler, wait);
                return result;
            };
        }
        (0,external_Vue_.onMounted)(() => {
            var _a;
            imgEl.value && isInContainer(imgEl.value);
            (_a = document.querySelector('.scroll-container')) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', debounce(function (e) {
                if (imgEl.value && isInContainer(imgEl.value, document.querySelector('.scroll-container'))) {
                    if (!imgSrc.value)
                        imgSrc.value = 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png';
                }
            }));
        });
        function isInContainer(el, container) {
            let containerRect;
            const elRect = el.getBoundingClientRect();
            if (!container) {
                containerRect = {
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight,
                    left: 0,
                };
            }
            else {
                containerRect = container.getBoundingClientRect();
            }
            console.log(containerRect, elRect);
            if (elRect.top <= containerRect.bottom && elRect.bottom >= containerRect.top && elRect.left <= containerRect.right && elRect.right >= containerRect.left) {
                return true;
            }
            else {
                return false;
            }
        }
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", _hoisted_1, [
                ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(urls, (item) => {
                    return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
                        key: item,
                        class: "w-100 mg-tb-lg"
                    }, [
                        (0,external_Vue_.createElementVNode)("img", {
                            src: item,
                            alt: "",
                            class: "",
                            width: "20",
                            style: { "margin-top": "200px", "max-height": "500px" }
                        }, null, 8, _hoisted_2)
                    ]));
                }), 128)),
                (0,external_Vue_.createElementVNode)("div", _hoisted_3, [
                    (0,external_Vue_.createElementVNode)("img", {
                        ref_key: "imgEl",
                        ref: imgEl,
                        src: imgSrc.value,
                        alt: "",
                        class: "",
                        style: { "margin-top": "200px", "max-height": "500px" }
                    }, null, 8, _hoisted_4)
                ])
            ]));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Example/Image/index.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ./src/views/Example/Image/index.vue
/* unplugin-vue-components disabled */


const __exports__ = Imagevue_type_script_lang_ts_setup_true;

/* harmony default export */ const Image = (__exports__);

/***/ })

}]);