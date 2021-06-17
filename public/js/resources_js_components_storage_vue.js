(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_storage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=script&lang=js& ***!
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
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "storage",
  props: ['tiers'],
  components: {
    "vue-select": function vueSelect() {
      return __webpack_require__.e(/*! import() */ "node_modules_vue-select_dist_vue-select_js").then(__webpack_require__.t.bind(__webpack_require__, /*! vue-select */ "./node_modules/vue-select/dist/vue-select.js", 23));
    }
  },
  data: function data() {
    return {
      tier: {
        id: 1,
        name: 'Basic servers',
        code: 'ioSTOR-250',
        price: 0.11
      },
      capacity: 100
    };
  },
  watch: {
    tier: function tier() {
      this.onChanged();
    },
    capacity: function capacity() {
      this.onChanged();
    }
  },
  mounted: function mounted() {
    this.onChanged();
  },
  methods: {
    onChanged: function onChanged() {
      this.$emit('onChanged', {
        tier: this.tier,
        storageCapacity: this.capacity
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/storage.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/storage.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.vue?vue&type=template&id=54c00e80&scoped=true& */ "./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true&");
/* harmony import */ var _storage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.vue?vue&type=script&lang=js& */ "./resources/js/components/storage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _storage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54c00e80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/storage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/storage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/storage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_storage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./storage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_storage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_storage_vue_vue_type_template_id_54c00e80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./storage.vue?vue&type=template&id=54c00e80&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/storage.vue?vue&type=template&id=54c00e80&scoped=true& ***!
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
      _c("div", { staticClass: "card-header" }, [
        _vm._v("\n            Storage\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-4" }, [_vm._v("Tier:")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-8" },
            [
              _c("vue-select", {
                attrs: { clearable: false, options: _vm.tiers, label: "name" },
                model: {
                  value: _vm.tier,
                  callback: function($$v) {
                    _vm.tier = $$v
                  },
                  expression: "tier"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-2" }, [
          _c("div", { staticClass: "col-4" }, [_vm._v("Capacity:")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-8 input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.capacity,
                  expression: "capacity"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number", min: "100", step: "100", max: "10000" },
              domProps: { value: _vm.capacity },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.capacity = $event.target.value
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