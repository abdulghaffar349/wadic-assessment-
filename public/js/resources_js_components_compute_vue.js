(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_compute_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "compute",
  data: function data() {
    return {
      cpu: 0.4,
      ram: 0.25
    };
  },
  watch: {
    cpu: function cpu(nv) {
      this.$emit('onCpuChanged', nv);
    },
    ram: function ram(nv) {
      this.$emit('onRamChanged', nv);
    }
  },
  mounted: function mounted() {
    this.$emit('onCpuChanged', this.cpu);
    this.$emit('onRamChanged', this.ram);
  }
});

/***/ }),

/***/ "./resources/js/components/compute.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/compute.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute.vue?vue&type=template&id=fe33d388&scoped=true& */ "./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true&");
/* harmony import */ var _compute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute.vue?vue&type=script&lang=js& */ "./resources/js/components/compute.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _compute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fe33d388",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/compute.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/compute.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/compute.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./compute.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_compute_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_compute_vue_vue_type_template_id_fe33d388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./compute.vue?vue&type=template&id=fe33d388&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/compute.vue?vue&type=template&id=fe33d388&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-6 mb-2" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Compute")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-4" }, [_vm._v("Processor")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-8 input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cpu,
                  expression: "cpu"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", min: "0.4", step: "0.4", max: "12.8" },
              domProps: { value: _vm.cpu },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cpu = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "input-group-text" }, [_vm._v("GHz")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2" }, [
          _c("div", { staticClass: "col-4" }, [_vm._v("RAM")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-8 input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ram,
                  expression: "ram"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", min: "0.25", step: "0.25", max: "32" },
              domProps: { value: _vm.ram },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.ram = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "input-group-text" }, [_vm._v("GB")])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);