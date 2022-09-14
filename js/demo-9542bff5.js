"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[577],{

/***/ 7089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demo)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lo-utils@1.2.21/node_modules/lo-utils/dist/lo-utils.esm.js
var lo_utils_esm = __webpack_require__(2672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/icon/index.mjs + 2 modules
var icon = __webpack_require__(8016);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@element-plus+icons-vue@2.0.6_vue@3.2.37/node_modules/@element-plus/icons-vue/dist/index.js
var dist = __webpack_require__(5823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var runtime = __webpack_require__(2242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-common-props/index.mjs + 2 modules
var use_common_props = __webpack_require__(8453);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/icon.mjs




const iconPropType = (0,runtime/* definePropType */.Cq)([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: dist/* Close */.x8P
};
const TypeComponents = {
  Close: dist/* Close */.x8P,
  SuccessFilled: dist/* SuccessFilled */.c5o,
  InfoFilled: dist/* InfoFilled */.cEj,
  WarningFilled: dist/* WarningFilled */.Rrw,
  CircleCloseFilled: dist/* CircleCloseFilled */.Tw$
};
const TypeComponentsMap = {
  success: dist/* SuccessFilled */.c5o,
  warning: dist/* WarningFilled */.Rrw,
  error: dist/* CircleCloseFilled */.Tw$,
  info: dist/* InfoFilled */.cEj
};
const ValidateComponentsMap = {
  validating: dist/* Loading */.gbz,
  success: dist/* CircleCheck */.yGk,
  error: dist/* CircleClose */.K41
};


//# sourceMappingURL=icon.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/src/button.mjs







const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = (0,runtime/* buildProps */.o8)({
  size: use_common_props/* useSizeProp */.Pp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => dist/* Loading */.gbz
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};


//# sourceMappingURL=button.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/index.js + 4 modules
var dist_module = __webpack_require__(5122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-namespace/index.mjs
var use_namespace = __webpack_require__(1201);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-custom.mjs






function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = (0,use_common_props/* useDisabled */.B4)();
  const ns = (0,use_namespace/* useNamespace */.s)("button");
  return (0,external_Vue_.computed)(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new dist_module/* TinyColor */.C(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}


//# sourceMappingURL=button-custom.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var plugin_vue_export_helper = __webpack_require__(7700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/error.mjs
var error = __webpack_require__(9361);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-deprecated/index.mjs




const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  (0,external_Vue_.watch)(() => (0,external_Vue_.unref)(condition), (val) => {
    if (val) {
      (0,error/* debugWarn */.N)(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
    }
  }, {
    immediate: true
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/tokens/button.mjs
const buttonGroupContextKey = Symbol("buttonGroupContextKey");


//# sourceMappingURL=button.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-global-config/index.mjs + 1 modules
var use_global_config = __webpack_require__(861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-form-item/index.mjs
var use_form_item = __webpack_require__(9234);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/src/button2.mjs














const _hoisted_1 = ["aria-disabled", "disabled", "autofocus", "type"];
const __default__ = {
  name: "ElButton"
};
const _sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...__default__,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = (0,external_Vue_.useSlots)();
    useDeprecated({
      from: "type.text",
      replacement: "type.link",
      version: "3.0.0",
      scope: "props",
      ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, (0,external_Vue_.computed)(() => props.type === "text"));
    const buttonGroupContext = (0,external_Vue_.inject)(buttonGroupContextKey, void 0);
    const globalConfig = (0,use_global_config/* useGlobalConfig */.W)("button");
    const ns = (0,use_namespace/* useNamespace */.s)("button");
    const { form } = (0,use_form_item/* useFormItem */.A)();
    const _size = (0,use_common_props/* useSize */.tH)((0,external_Vue_.computed)(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = (0,use_common_props/* useDisabled */.B4)();
    const _ref = (0,external_Vue_.ref)();
    const _type = (0,external_Vue_.computed)(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = (0,external_Vue_.computed)(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = (0,external_Vue_.computed)(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === external_Vue_.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
        ref_key: "_ref",
        ref: _ref,
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b(),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(_type)),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(_size)),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(_disabled)),
          (0,external_Vue_.unref)(ns).is("loading", _ctx.loading),
          (0,external_Vue_.unref)(ns).is("plain", _ctx.plain),
          (0,external_Vue_.unref)(ns).is("round", _ctx.round),
          (0,external_Vue_.unref)(ns).is("circle", _ctx.circle),
          (0,external_Vue_.unref)(ns).is("text", _ctx.text),
          (0,external_Vue_.unref)(ns).is("link", _ctx.link),
          (0,external_Vue_.unref)(ns).is("has-bg", _ctx.bg)
        ]),
        "aria-disabled": (0,external_Vue_.unref)(_disabled) || _ctx.loading,
        disabled: (0,external_Vue_.unref)(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
          _ctx.$slots.loading ? (0,external_Vue_.renderSlot)(_ctx.$slots, "loading", { key: 0 }) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(icon/* ElIcon */.gn), {
            key: 1,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).is("loading"))
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : _ctx.icon || _ctx.$slots.icon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(icon/* ElIcon */.gn), { key: 1 }, {
          default: (0,external_Vue_.withCtx)(() => [
            _ctx.icon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.icon), { key: 0 })) : (0,external_Vue_.renderSlot)(_ctx.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : (0,external_Vue_.createCommentVNode)("v-if", true),
        _ctx.$slots.default ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 2,
          class: (0,external_Vue_.normalizeClass)({ [(0,external_Vue_.unref)(ns).em("text", "expand")]: (0,external_Vue_.unref)(shouldAddSpace) })
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var Button = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);


//# sourceMappingURL=button2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-group.mjs


const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};


//# sourceMappingURL=button-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-group2.mjs








const button_group2_default_ = {
  name: "ElButtonGroup"
};
const button_group2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...button_group2_default_,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    (0,external_Vue_.provide)(buttonGroupContextKey, (0,external_Vue_.reactive)({
      size: (0,external_Vue_.toRef)(props, "size"),
      type: (0,external_Vue_.toRef)(props, "type")
    }));
    const ns = (0,use_namespace/* useNamespace */.s)("button");
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)(`${(0,external_Vue_.unref)(ns).b("group")}`)
      }, [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(button_group2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);


//# sourceMappingURL=button-group2.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/install.mjs
var install = __webpack_require__(5576);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/button/index.mjs






const ElButton = (0,install/* withInstall */.nz)(Button, {
  ButtonGroup: ButtonGroup
});
const ElButtonGroup = (0,install/* withNoopInstall */.dp)(ButtonGroup);


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../vue-components/dist/index.js + 317 modules
var vue_components_dist = __webpack_require__(6154);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/ts-loader@9.3.1_xnp4kzegbjokq62cajex2ovgkm/node_modules/ts-loader/index.js??clonedRuleSet-5.use[0]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/demo/demo.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */

const _withScopeId = n => (_pushScopeId("data-v-1b94a4c1"), n = n(), _popScopeId(), n);
const demovue_type_script_lang_ts_setup_true_hoisted_1 = /*#__PURE__*/ (0,external_Vue_.createTextVNode)("Button");





(0,external_Vue_.defineComponent)({
    name: 'demo',
});
/* harmony default export */ const demovue_type_script_lang_ts_setup_true = (/*#__PURE__*/(0,external_Vue_.defineComponent)({
    __name: 'demo',
    setup(__props) {
        const color = (0,external_Vue_.ref)('blue');
        const bgc = (0,external_Vue_.computed)(() => {
            return {
                background: '#fff',
            };
        });
        (0,lo_utils_esm.t)(2).then(res => {
            console.log(color.value);
        });
        return (_ctx, _cache) => {
            return ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(vue_components_dist/* LoSwiper */.Zt), { direction: "horizon" }),
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElButton), { icon: "123" }, {
                    default: (0,external_Vue_.withCtx)(() => [
                        demovue_type_script_lang_ts_setup_true_hoisted_1
                    ]),
                    _: 1
                })
            ], 64));
        };
    }
}));

;// CONCATENATED MODULE: ./src/views/Example/demo/demo.vue?vue&type=script&lang=ts&setup=true
/* unplugin-vue-components disabled */ 
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.0.1_qjv4cptcpse3y5hrjkrbb7drda/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/demo/demo.vue?vue&type=style&index=0&id=62699e4c&lang=css
/* unplugin-vue-components disabled */// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Example/demo/demo.vue?vue&type=style&index=0&id=62699e4c&lang=css
/* unplugin-vue-components disabled */
;// CONCATENATED MODULE: ../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-auto-import!../../node_modules/.pnpm/unplugin@0.9.2/node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../node_modules/.pnpm/mini-css-extract-plugin@2.6.1_webpack@5.74.0/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-2.use[1]!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@7.0.1_qjv4cptcpse3y5hrjkrbb7drda/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../node_modules/.pnpm/sass-loader@13.0.2_sass@1.54.4+webpack@5.74.0/node_modules/sass-loader/dist/cjs.js!../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!../../node_modules/.pnpm/loclass-style-loader@0.0.4/node_modules/loclass-style-loader/dist/index.js!./src/views/Example/demo/demo.vue?vue&type=style&index=1&id=62699e4c&lang=scss&scoped=true
/* unplugin-vue-components disabled */// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Example/demo/demo.vue?vue&type=style&index=1&id=62699e4c&lang=scss&scoped=true
/* unplugin-vue-components disabled */
// EXTERNAL MODULE: ../../node_modules/.pnpm/vue-loader@17.0.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(9956);
;// CONCATENATED MODULE: ./src/views/Example/demo/demo.vue
/* unplugin-vue-components disabled */


;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(demovue_type_script_lang_ts_setup_true, [['__scopeId',"data-v-62699e4c"]])

/* harmony default export */ const demo = (__exports__);

/***/ })

}]);