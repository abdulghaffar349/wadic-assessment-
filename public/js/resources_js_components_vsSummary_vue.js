(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_vsSummary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "vsSummary",
  props: ['vsData'],
  components: {
    "vue-select": function vueSelect() {
      return __webpack_require__.e(/*! import() */ "node_modules_vue-select_dist_vue-select_js").then(__webpack_require__.t.bind(__webpack_require__, /*! vue-select */ "./node_modules/vue-select/dist/vue-select.js", 23));
    }
  },
  data: function data() {
    return {
      currency: {
        id: 1,
        name: 'Australian Dollar',
        code: 'AUD',
        rate: 1.31
      },
      currencies: [{
        id: 1,
        name: 'Australian Dollar',
        code: 'AUD',
        rate: 1.31
      }, {
        id: 2,
        name: 'Singapore Dollar',
        code: 'SGD',
        rate: 1.34
      }],
      ramPrice: 18.70,
      //price of ram per 1GB in USD
      cpuPrice: 7.25,
      //price per 1GHz in USD
      trafficPrice: 0.021 //price per 1gb traffic in USD

    };
  },
  computed: {
    prices: function prices() {
      var vsData = this.vsData;
      var SELF = this;
      return {
        cpu: SELF.parsePrice(vsData['cpu'] * SELF.cpuPrice * SELF.currency.rate),
        ram: SELF.parsePrice(vsData['ram'] * SELF.ramPrice * SELF.currency.rate),
        os: SELF.parsePrice(vsData['os']['price'] * SELF.currency.rate),
        storage: SELF.parsePrice(vsData['storage']['storageCapacity'] * vsData['storage']['tier']['price'] * SELF.currency.rate),
        //price of 1 gb
        traffic: SELF.parsePrice(vsData['traffic'] * SELF.trafficPrice * SELF.currency.rate),
        zone: SELF.parsePrice(vsData['zone']['price'] * SELF.currency.rate)
      };
    },
    totalPrice: function totalPrice() {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sum)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.values)(this.prices)).toFixed(2);
    }
  },
  methods: {
    parsePrice: function parsePrice(value) {
      value = value.toFixed(2);
      return parseFloat(value);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/vsSummary.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/vsSummary.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true& */ "./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true&");
/* harmony import */ var _vsSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vsSummary.vue?vue&type=script&lang=js& */ "./resources/js/components/vsSummary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _vsSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f9dcfee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vsSummary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/vsSummary.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/vsSummary.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vsSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vsSummary_vue_vue_type_template_id_7f9dcfee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/vsSummary.vue?vue&type=template&id=7f9dcfee&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("vue-select", {
            attrs: { clearable: false, options: _vm.currencies, label: "name" },
            model: {
              value: _vm.currency,
              callback: function($$v) {
                _vm.currency = $$v
              },
              expression: "currency"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Compute")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s(_vm.vsData.cpu + " GHz Processor"))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["cpu"]))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s(_vm.vsData.ram + " GB RAM"))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["ram"]))
        ])
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Storage")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(
            _vm._s(
              _vm.vsData["storage"]["storageCapacity"] +
                " GB " +
                _vm.vsData["storage"]["tier"]["code"]
            ) + "\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["storage"]))
        ])
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [
        _vm._v("Operating System")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s("" + _vm.vsData["os"]["name"]))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["os"]))
        ])
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Network")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(_vm._s(_vm.vsData["traffic"] + " GB Traffic"))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["traffic"]))
        ])
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Location")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-8" }, [
          _vm._v(
            _vm._s(
              _vm.vsData["zone"]["code"] + " - " + _vm.vsData["zone"]["city"]
            )
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _vm._v("$" + _vm._s(_vm.prices["zone"]))
        ])
      ]),
      _vm._v(" "),
      _c("b", { staticClass: "text-success row" }, [_vm._v("Machine Name")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("b", [
        _vm._v(_vm._s(_vm.currency.code + " $" + _vm.totalPrice + " / month"))
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [_vm._v("Auto Generated")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);