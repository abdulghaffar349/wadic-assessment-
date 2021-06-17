(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_summary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "summary",
  props: ['vsData'],
  data: function data() {
    return {
      currency: 'AUD',
      currencies: [{
        label: 'Australian Dollar',
        value: 'AUD'
      }, {
        label: 'Singapore Dollar',
        value: 'SGD'
      }],
      ramPrice: 24.5,
      //price of ram per 1GB
      cpuPrice: 9.5,
      //price per 1GHz
      trafficPrice: 0.028 //price per 1gb traffic

    };
  },
  computed: {
    prices: function prices() {
      var vsData = this.vsData;
      return {
        cpu: this.parsePrice(vsData['cpu'] * this.cpuPrice),
        ram: this.parsePrice(vsData['ram'] * this.ramPrice),
        os: this.parsePrice(vsData['os']['price']),
        storage: this.parsePrice(vsData['storage']['storageCapacity'] * vsData['storage']['tier']['price']),
        //price of 1 gb
        traffic: this.parsePrice(vsData['traffic'] * this.trafficPrice),
        zone: this.parsePrice(vsData['zone'])
      };
    }
  },
  methods: {
    parsePrice: function parsePrice(value) {
      value = value.toFixed(2);
      value = parseFloat(value);
      return this.currency === 'SGD' ? value * 1.02 : value; // 1 AUD = 1.02 SGD
    }
  }
});

/***/ }),

/***/ "./resources/js/components/summary.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/summary.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary.vue?vue&type=template&id=2cf9e62b&scoped=true& */ "./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true&");
/* harmony import */ var _summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary.vue?vue&type=script&lang=js& */ "./resources/js/components/summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2cf9e62b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/summary.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/summary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_summary_vue_vue_type_template_id_2cf9e62b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./summary.vue?vue&type=template&id=2cf9e62b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/summary.vue?vue&type=template&id=2cf9e62b&scoped=true& ***!
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _vm._v("\n        Summary\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("b", { staticClass: "text-success row" }, [_vm._v("Compute")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s(_vm.vsData.cpu + " GHz Processor"))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" })
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Storage")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s(_vm.vsData.cpu + " GHz Processor"))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);