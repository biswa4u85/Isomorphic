module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!**********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/china.svg":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/flag/china.svg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDgwMCA4MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA4MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRDFGMzQ7IiBkPSJNMjQuODA3LDY0Ni4xNlYxNTMuODM4aDc1MC4zODd2NDAxYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2gxdjI3LjgwN2gtMQ0KCQljLTYuNTYzLDAtMTEuOTAzLDUuMzQtMTEuOTAzLDExLjkwMnYzOS43MUgyNC44MDd6IE0yNzMuNDM1LDQzNS4xOGMtNC40OTMsMC04LjcxNywxLjc1LTExLjg5NCw0LjkyOA0KCQljLTMuMTc3LDMuMTc2LTQuOTI2LDcuMzk5LTQuOTI2LDExLjg5M2MwLDQuNDkyLDEuNzUsOC43MTcsNC45MjYsMTEuODk1YzMuMTc3LDMuMTc3LDcuNDAxLDQuOTI3LDExLjg5NCw0LjkyNw0KCQljNC40OTIsMCw4LjcxNi0xLjc1LDExLjg5My00LjkyN2MzLjE3Ny0zLjE3OCw0LjkyNy03LjQwMiw0LjkyNy0xMS44OTVjMC00LjQ5My0xLjc1LTguNzE3LTQuOTI3LTExLjg5Mw0KCQlDMjgyLjE1MSw0MzYuOTMsMjc3LjkyNyw0MzUuMTgsMjczLjQzNSw0MzUuMTh6IE0yMDAuNDIsNDExLjYzNGMxLjkzNiwxLjI2LDQuMTc5LDEuOTI2LDYuNDg5LDEuOTI2DQoJCWMyLjUyOSwwLDQuOTQ5LTAuNzg3LDYuOTk4LTIuMjc1YzMuOTYyLTIuODc3LDUuNzcxLTcuOTg4LDQuNS0xMi43MTlsLTExLjk4MS00NC41ODVsMzUuODk4LTI5LjAyNw0KCQljMy44MDgtMy4wNzgsNS4zNDktOC4yNzYsMy44MzYtMTIuOTM1cy01LjgxNi03Ljk1OC0xMC43MDctOC4yMWwtNDYuMTA1LTIuMzgxbC0xNi41MTEtNDMuMTExDQoJCWMtMS43NTEtNC41NzMtNi4yMTktNy42NDUtMTEuMTE2LTcuNjQ1cy05LjM2NCwzLjA3Mi0xMS4xMTYsNy42NDVsLTE2LjUxMSw0My4xMTFsLTQ2LjEwNCwyLjM4MQ0KCQljLTQuODkxLDAuMjUyLTkuMTkzLDMuNTUyLTEwLjcwNyw4LjIxYy0xLjUxMyw0LjY1OCwwLjAyOSw5Ljg1NSwzLjgzNiwxMi45MzNsMzUuODk5LDI5LjAyN2wtMTEuOTgxLDQ0LjU4NQ0KCQljLTEuMjcxLDQuNzMsMC41MzgsOS44NDEsNC41LDEyLjcxOWMyLjA0NywxLjQ4Nyw0LjQ2NywyLjI3Myw2Ljk5OCwyLjI3M2MyLjMxLDAsNC41NTQtMC42NjUsNi40ODktMS45MjVsMzguNjk5LTI1LjE3Mw0KCQlMMjAwLjQyLDQxMS42MzR6IE0zMTQuMzEzLDM2NC4zNTRjLTcuNTg5LDAtMTQuMjYzLDUuMTI3LTE2LjIzLDEyLjQ2OGMtMS4xNjMsNC4zMzktMC41NjcsOC44NzEsMS42NzgsMTIuNzYNCgkJYzIuMjQ2LDMuODg5LDUuODczLDYuNjcyLDEwLjIxMiw3LjgzNWMxLjQzLDAuMzgzLDIuODk5LDAuNTc4LDQuMzY1LDAuNTc4YzcuNTg5LDAsMTQuMjY0LTUuMTI3LDE2LjIzMS0xMi40NjgNCgkJYzIuMzk5LTguOTU2LTIuOTM1LTE4LjE5NS0xMS44OTEtMjAuNTk2QzMxNy4yNDcsMzY0LjU0OSwzMTUuNzc4LDM2NC4zNTQsMzE0LjMxMywzNjQuMzU0eiBNMzE0LjMzNCwyODIuNTc0DQoJCWMtMS40NjYsMC0yLjkzNCwwLjE5NC00LjM2NCwwLjU3OGMtOC45NTYsMi40MDEtMTQuMjksMTEuNjQtMTEuODksMjAuNTk2YzEuOTY3LDcuMzQsOC42NDIsMTIuNDY3LDE2LjIzMywxMi40NjcNCgkJYzEuNDY1LDAsMi45MzMtMC4xOTQsNC4zNjMtMC41NzdjNC4zMzktMS4xNjIsNy45NjUtMy45NDQsMTAuMjExLTcuODM0czIuODQyLTguNDIyLDEuNjc5LTEyLjc2Mg0KCQlDMzI4LjU5OSwyODcuNzAxLDMyMS45MjQsMjgyLjU3NCwzMTQuMzM0LDI4Mi41NzR6IE0yNzMuNDM1LDIxMS43NTJjLTQuNDkzLDAtOC43MTcsMS43NS0xMS44OTQsNC45MjgNCgkJYy0zLjE3NywzLjE3Ni00LjkyNiw3LjM5OS00LjkyNiwxMS44OTJzMS43NSw4LjcxNyw0LjkyNiwxMS44OTVzNy40MDEsNC45MjcsMTEuODk0LDQuOTI3YzQuNDkyLDAsOC43MTYtMS43NSwxMS44OTMtNC45MjcNCgkJYzMuMTc3LTMuMTc4LDQuOTI3LTcuNDAyLDQuOTI3LTExLjg5NXMtMS43NS04LjcxNi00LjkyNy0xMS44OTJDMjgyLjE1MSwyMTMuNTAyLDI3Ny45MjcsMjExLjc1MiwyNzMuNDM1LDIxMS43NTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VEMUYzNDsiIGQ9Ik03NzQuMTkzLDU1NC44Mzh2LTQwMEgyNS44MDdWNjQ1LjE2aDc0OC4zODd2LTM4LjcxYzAtNy4xMjcsNS43NzUtMTIuOTAyLDEyLjkwMy0xMi45MDJ2LTI1LjgwNw0KCQlDNzc5Ljk2OSw1NjcuNzQxLDc3NC4xOTMsNTYxLjk2Niw3NzQuMTkzLDU1NC44Mzh6IE0yNDIuOTUyLDMyNS43MzFsLTM1LjM5MiwyOC42MThsMTEuODEzLDQzLjk1Nw0KCQljMS4zODcsNS4xNjItMC41NTIsMTAuNjQ2LTQuODc3LDEzLjc4OGMtMi4yNTcsMS42NC00LjkxOCwyLjQ2Ni03LjU4NSwyLjQ2NmMtMi40NDUsMC00Ljg5MS0wLjY5Mi03LjAzNS0yLjA4OGwtMzguMTU0LTI0LjgyDQoJCWwtMzguMTU0LDI0LjgxOGMtNC40OCwyLjkxNS0xMC4yOTUsMi43NjYtMTQuNjItMC4zNzhjLTQuMzI1LTMuMTQyLTYuMjY0LTguNjI2LTQuODc3LTEzLjc4OGwxMS44MTMtNDMuOTU3bC0zNS4zOTUtMjguNjE4DQoJCWMtNC4xNTctMy4zNi01LjgxLTguOTM2LTQuMTU5LTE0LjAyYzEuNjUyLTUuMDg0LDYuMjY4LTguNjI1LDExLjYwNi04LjlsNDUuNDU1LTIuMzQ4bDE2LjI3OS00Mi41MDMNCgkJYzEuOTEyLTQuOTkxLDYuNzA1LTguMjg3LDEyLjA1LTguMjg3YzUuMzQ2LDAsMTAuMTM5LDMuMjk2LDEyLjA1LDguMjg3bDE2LjI3OCw0Mi41MDNsNDUuNDU2LDIuMzQ4DQoJCWM1LjMzOCwwLjI3NSw5Ljk1NSwzLjgxNiwxMS42MDYsOC45QzI0OC43NjIsMzE2Ljc5NSwyNDcuMTA5LDMyMi4zNzIsMjQyLjk1MiwzMjUuNzMxeiBNMjg2LjAzNSw0NjQuNjAyDQoJCWMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwYy02Ljk1OS02Ljk2MS02Ljk1OS0xOC4yNDQsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwDQoJCUMyOTIuOTk1LDQ0Ni4zNTcsMjkyLjk5NSw0NTcuNjQxLDI4Ni4wMzUsNDY0LjYwMnogTTI4Ni4wMzUsMjQxLjE3NGMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwDQoJCWMtNi45NTktNi45Ni02Ljk1OS0xOC4yNDMsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwQzI5Mi45OTUsMjIyLjkzMSwyOTIuOTk1LDIzNC4yMTMsMjg2LjAzNSwyNDEuMTc0eg0KCQkgTTMzMS41MzQsMzg1Ljc4N2MtMi41NDcsOS41MDMtMTIuMzE1LDE1LjE0NS0yMS44MiwxMi41OTdjLTkuNTA2LTIuNTQ4LTE1LjE0Ni0xMi4zMTUtMTIuNTk3LTIxLjgyDQoJCWMyLjU0Ny05LjUwNSwxMi4zMTUtMTUuMTQ1LDIxLjgyLTEyLjU5N0MzMjguNDQyLDM2Ni41MTQsMzM0LjA4LDM3Ni4yODMsMzMxLjUzNCwzODUuNzg3eiBNMzE4LjkzNiwzMTYuNjAzDQoJCWMtOS41MDQsMi41NDYtMTkuMjc0LTMuMDkzLTIxLjgyMS0xMi41OTdzMy4wOTMtMTkuMjcyLDEyLjU5Ny0yMS44MnMxOS4yNzMsMy4wOTUsMjEuODIsMTIuNTk3DQoJCUMzMzQuMDgsMzA0LjI4OCwzMjguNDQsMzE0LjA1OSwzMTguOTM2LDMxNi42MDN6Ii8+DQoJPHBhdGggZD0iTTc3NC4xOTMsNjA2LjQ1djM4LjcxSDI1LjgwN1YxNTQuODM4aDc0OC4zODd2NDAwYzAsNy4xMjgsNS43NzUsMTIuOTAzLDEyLjkwMywxMi45MDNTODAwLDU2MS45NjYsODAwLDU1NC44MzhWMTQxLjkzNQ0KCQljMC03LjEyOC01Ljc3NS0xMi45MDMtMTIuOTAzLTEyLjkwM0gxMi45MDNDNS43NzcsMTI5LjAzMSwwLDEzNC44MDcsMCwxNDEuOTM1djUxNi4xMjljMCw3LjEyOCw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwMw0KCQloNzc0LjE5M2M3LjEyOCwwLDEyLjkwMy01Ljc3NSwxMi45MDMtMTIuOTAzdi01MS42MTNjMC03LjEyNy01Ljc3NS0xMi45MDItMTIuOTAzLTEyLjkwMlM3NzQuMTkzLDU5OS4zMjMsNzc0LjE5Myw2MDYuNDV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGQ9Ik0xNjguMjA4LDM2Mi4yODNjLTEuOTM1LTEuMjYtNC4xNzgtMS45MjUtNi40ODktMS45MjVzLTQuNTU1LDAuNjY2LTYuNDg5LDEuOTI1bC0xOS4xMzgsMTIuNDQ4DQoJCWw1LjkyNC0yMi4wNDhjMS4yMjEtNC41NDItMC4zNTQtOS4zODctNC4wMTEtMTIuMzQ1bC0xNy43NTUtMTQuMzU2bDIyLjgwMi0xLjE3N2M0LjY5OC0wLjI0NCw4LjgyLTMuMjM5LDEwLjUwMi03LjYzMQ0KCQlsOC4xNjctMjEuMzE5bDguMTY3LDIxLjMxN2MxLjY4Myw0LjM5Myw1LjgwNCw3LjM4OSwxMC40OTksNy42MzNsMjIuODAyLDEuMTc3bC0xNy43NTUsMTQuMzU2DQoJCWMtMy42NTcsMi45NTgtNS4yMzEsNy44MDMtNC4wMSwxMi4zNDRsNS45MjQsMjIuMDQ4TDE2OC4yMDgsMzYyLjI4M3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMDAwOyIgZD0iTTE2OC45NTMsMzE3LjUzbC03LjIzMy0xOC44OGwtNy4yMzIsMTguODgxYy0xLjgyNSw0Ljc2Ni02LjI4OCw4LjAwNy0xMS4zODQsOC4yNzJsLTIwLjE5NCwxLjA0Mg0KCQlsMTUuNzI1LDEyLjcxNGMzLjk2NywzLjIwOCw1LjY3Miw4LjQ1NCw0LjM0OCwxMy4zODFsLTUuMjQ3LDE5LjUyN2wxNi45NS0xMS4wMjRjMi4xMzgtMS4zOTIsNC41ODYtMi4wODcsNy4wMzUtMi4wODcNCgkJczQuODk2LDAuNjk1LDcuMDM1LDIuMDg3bDE2Ljk1LDExLjAyNGwtNS4yNDctMTkuNTI3Yy0xLjMyNS00LjkyNywwLjM4LTEwLjE3Myw0LjM0Ny0xMy4zODFsMTUuNzI1LTEyLjcxNGwtMjAuMTk0LTEuMDQyDQoJCUMxNzUuMjQsMzI1LjUzOSwxNzAuNzc4LDMyMi4yOTYsMTY4Ljk1MywzMTcuNTN6Ii8+DQoJPHBhdGggZD0iTTIzNS41MDQsMzAyLjgxMmwtNDUuNDU2LTIuMzQ5TDE3My43NywyNTcuOTZjLTEuOTEyLTQuOTkxLTYuNzA1LTguMjg4LTEyLjA1LTguMjg4cy0xMC4xMzgsMy4yOTYtMTIuMDUsOC4yODgNCgkJbC0xNi4yNzksNDIuNTAzbC00NS40NTUsMi4zNDljLTUuMzM5LDAuMjc1LTkuOTU1LDMuODE2LTExLjYwNiw4LjljLTEuNjUyLDUuMDgzLDAuMDAxLDEwLjY2LDQuMTU4LDE0LjAybDM1LjM5MywyOC42MTgNCgkJbC0xMS44MTMsNDMuOTU3Yy0xLjM4Nyw1LjE2MiwwLjU1MiwxMC42NDYsNC44NzcsMTMuNzg4YzQuMzIzLDMuMTQ0LDEwLjE0LDMuMjkzLDE0LjYyLDAuMzc4bDM4LjE1NC0yNC44MmwzOC4xNTQsMjQuODE4DQoJCWMyLjE0NCwxLjM5Niw0LjU5LDIuMDg4LDcuMDM1LDIuMDg4YzIuNjY3LDAsNS4zMjgtMC44MjQsNy41ODUtMi40NjZjNC4zMjUtMy4xNDIsNi4yNjQtOC42MjYsNC44NzctMTMuNzg4bC0xMS44MTMtNDMuOTU3DQoJCWwzNS4zOTMtMjguNjE4YzQuMTU3LTMuMzYsNS44MS04LjkzNiw0LjE1OC0xNC4wMkMyNDUuNDU5LDMwNi42MjgsMjQwLjg0MywzMDMuMDg3LDIzNS41MDQsMzAyLjgxMnogTTE4NC44MDUsMzM5LjU1OQ0KCQljLTMuOTY3LDMuMjA4LTUuNjcyLDguNDU0LTQuMzQ4LDEzLjM4MWw1LjI0OCwxOS41MjdsLTE2Ljk1LTExLjAyNGMtMi4xMzktMS4zOTItNC41ODctMi4wODctNy4wMzUtMi4wODcNCgkJcy00Ljg5NiwwLjY5NS03LjAzNSwyLjA4N2wtMTYuOTUsMTEuMDI0bDUuMjQ4LTE5LjUyN2MxLjMyNS00LjkyNy0wLjM4LTEwLjE3My00LjM0OC0xMy4zODFsLTE1LjcyNS0xMi43MTRsMjAuMTk0LTEuMDQyDQoJCWM1LjA5Ni0wLjI2Myw5LjU1OS0zLjUwNiwxMS4zODQtOC4yNzJsNy4yMzEtMTguODhsNy4yMzMsMTguODgxYzEuODI1LDQuNzY2LDYuMjg4LDguMDA3LDExLjM4NCw4LjI3MmwyMC4xOTQsMS4wNDINCgkJTDE4NC44MDUsMzM5LjU1OXoiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjI5OS4zOTUiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iMjI4LjU3MiIgcj0iMTcuODIiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjM4MS4xNzYiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iNDUyLjAwMSIgcj0iMTcuODIiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/france.svg":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/flag/france.svg ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3NS0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA0LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc1LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyOCwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI4LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjUsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc1LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NSwxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/italy.svg":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/flag/italy.svg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3Ny0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA2LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc3LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI2LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjMsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc3LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/spain.svg":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/flag/spain.svg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRTAwMCIgZD0iTTY0NC4xNjEsNTMwLjAzMnYtMWMwLTYuNTYzLTUuMzQtMTEuOTAzLTExLjkwMy0xMS45MDNIMjQuODA3VjI4Mi44NzFoNzUwLjM4N3YyMzQuMjU4aC05MS4zMjINCgkJYy02LjU2MywwLTExLjkwMyw1LjM0LTExLjkwMywxMS45MDN2MUg2NDQuMTYxeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkUwMDAiIGQ9Ik02ODMuODcxLDUxNi4xMjloOTAuMzIyVjI4My44NzFIMjUuODA3djIzMi4yNThoNjA2LjQ1MWM3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzaDI1LjgwNw0KCQlDNjcwLjk2OCw1MjEuOTA2LDY3Ni43NDUsNTE2LjEyOSw2ODMuODcxLDUxNi4xMjl6Ii8+DQoJPHJlY3QgeD0iMjQuODA3IiB5PSIxNTMuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzUwLjM4NyIgaGVpZ2h0PSIxMDUuMjI2Ii8+DQoJPHJlY3QgeD0iMjUuODA3IiB5PSIxNTQuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzQ4LjM4NyIgaGVpZ2h0PSIxMDMuMjI2Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTI0LjgwNyw2NDYuMTYxVjU0MC45MzZoNjA3LjQ1MWM2LjU2MywwLDExLjkwMy01LjM0LDExLjkwMy0xMS45MDN2LTFoMjcuODA3djENCgkJYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2g5MS4zMjJ2MTA1LjIyNkgyNC44MDd6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTY4My44NzEsNTQxLjkzNmMtNy4xMjYsMC0xMi45MDMtNS43NzctMTIuOTAzLTEyLjkwM2gtMjUuODA3YzAsNy4xMjYtNS43NzcsMTIuOTAzLTEyLjkwMywxMi45MDNIMjUuODA3DQoJCXYxMDMuMjI2aDc0OC4zODdWNTQxLjkzNkg2ODMuODcxeiIvPg0KCTxwYXRoIGQ9Ik03ODcuMDk3LDEyOS4wMzJIMTIuOTAzQzUuNzc3LDEyOS4wMzIsMCwxMzQuODEsMCwxNDEuOTM2djUxNi4xMjljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM2g3NzQuMTkzDQoJCWM3LjEyNiwwLDEyLjkwMy01Ljc3NywxMi45MDMtMTIuOTAzVjE0MS45MzZDODAwLDEzNC44MSw3OTQuMjIzLDEyOS4wMzIsNzg3LjA5NywxMjkuMDMyeiBNNzc0LjE5MywxNTQuODM5djEwMy4yMjZIMjUuODA3DQoJCVYxNTQuODM5SDc3NC4xOTN6IE0yNS44MDcsNjQ1LjE2MVY1NDEuOTM2aDYwNi40NTFjNy4xMjYsMCwxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3MtNS43NzctMTIuOTAzLTEyLjkwMy0xMi45MDNIMjUuODA3DQoJCVYyODMuODcxaDc0OC4zODd2MjMyLjI1OGgtOTAuMzIyYy03LjEyNiwwLTEyLjkwMyw1Ljc3Ny0xMi45MDMsMTIuOTAzczUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDkwLjMyMnYxMDMuMjI2SDI1LjgwN3oiLz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "../../node_modules/@iso/assets/images/flag/uk.svg":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/flag/uk.svg ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/uk-bc48afcc15d5d9d51255de0b2ee708be.svg";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/1.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/1.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-f812b73300d908dbbff041662071e163.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/10.png":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/10.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/10-93f709cbd5900c33e2c1244301936b48.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/11.png":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/11.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/11-62742201b2404ace61cd1ba94c337309.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/2.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/2.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-9e675418fd781f55734b4cbca5a2720d.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/3.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/3.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-e100e074855b75b5e33ae8baca7d379c.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/4.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/4.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-bd3f7c7cb0994bacffef1cf894db443a.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/5.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/5.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/5-ab2fcb95678e86e3304f52bbbd04b960.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/6.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/6.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/6-e02c5ab6dbacb7cbe3a50eff81451264.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/7.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/7.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/7-352f351b82c8eab01b315b5289f4c135.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/8.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/8.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/8-ea1f3948459bd66e2c4e1ca92c0de2dd.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/posts/9.png":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/posts/9.png ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/9-ac29f02d365c936fe7c761337e09d702.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/profile-bg.jpg":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/profile-bg.jpg ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-bg-f57b6453dff2a83a4cfdf1dd9f93b929.jpg";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/user1.png":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/user1.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user1-56a1f25e5fb02becf99ef7c50fe14233.png";

/***/ }),

/***/ "../../node_modules/@iso/components/ColorChooser.style.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/ColorChooser.style.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");



const ColorChooserDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ColorChooserstyle__ColorChooserDropdown",
  componentId: "yqgxfr-0"
})(["display:flex;flex-flow:row wrap;max-width:160px;.ant-btn{width:20px;height:20px;border:0;outline:0;padding:0;margin:", ";", ";&:last-child{margin:0;}&:nth-child(n + 6){margin-top:15px;}&:nth-child(5n){margin-right:0;margin-left:0;}}"], props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__["borderRadius"])('3px'));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(ColorChooserDropdown));

/***/ }),

/***/ "../../node_modules/@iso/components/ColorChoser.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/ColorChoser.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uielements_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uielements/button */ "../../node_modules/@iso/components/uielements/button.js");
/* harmony import */ var _uielements_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uielements/popover */ "../../node_modules/@iso/components/uielements/popover.js");
/* harmony import */ var _ColorChooser_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorChooser.style */ "../../node_modules/@iso/components/ColorChooser.style.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/ColorChoser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function ({
  colors,
  seectedColor,
  changeColor
}) {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  function hide() {
    setVisibility(false);
  }

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = () => __jsx(_ColorChooser_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "isoColorOptions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, colors.map((color, index) => {
    const onClick = () => {
      hide();
      changeColor(index);
    };

    const style = {
      background: color
    };
    return __jsx(_uielements_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      onClick: onClick,
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  }));

  return __jsx(_uielements_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: content(),
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_uielements_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      backgroundColor: colors[seectedColor]
    },
    className: "isoColorChooser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
});

/***/ }),

/***/ "../../node_modules/@iso/components/EditableComponent.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/EditableComponent.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableComponent; });
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "../../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uielements/input */ "../../node_modules/@iso/components/uielements/input.js");



var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/EditableComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


function EditableComponent(props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    value: props.value,
    editable: false
  });

  function handleChange(event) {
    const value = event.target.value;
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      value
    }));
  }

  function check() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      editable: false
    }));

    if (props.onChange) {
      props.onChange(props.itemKey, state.value);
    }
  }

  function edit() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      editable: true
    }));
  }

  const {
    value,
    editable
  } = state;
  return __jsx("div", {
    className: "isoNoteContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, editable ? __jsx("div", {
    className: "isoNoteEditWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_uielements_input__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    rows: 3,
    value: value,
    onChange: handleChange,
    onPressEnter: check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "check",
    className: "isoNoteEditIcon",
    onClick: check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })) : __jsx("p", {
    className: "isoNoteTextWrapper",
    onClick: edit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, value || ' ', __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "edit",
    className: "isoNoteEditIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/components/Feedback/Popconfirm.js":
/*!*****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Feedback/Popconfirm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popconfirm/style/css */ "../../node_modules/antd/lib/popconfirm/style/css.js");
/* harmony import */ var antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popconfirm */ "antd/lib/popconfirm");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/Notification.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Notification.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification/style/css */ "../../node_modules/antd/lib/notification/style/css.js");
/* harmony import */ var antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/notification */ "antd/lib/notification");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);



const createNotification = (type, message, description) => {
  antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a[type]({
    message,
    description
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createNotification);

/***/ }),

/***/ "../../node_modules/@iso/components/Tables/DeleteCell.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/DeleteCell.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Feedback_Popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Feedback/Popconfirm */ "../../node_modules/@iso/components/Feedback/Popconfirm.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/DeleteCell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  index,
  onDeleteCell
}) {
  return __jsx(_Feedback_Popconfirm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Sure to delete?",
    okText: "DELETE",
    cancelText: "No",
    onConfirm: () => onDeleteCell(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    href: "# ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Delete"));
});

/***/ }),

/***/ "../../node_modules/@iso/components/Tables/EditableCell.js":
/*!*****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/EditableCell.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style/css */ "../../node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uielements/input */ "../../node_modules/@iso/components/uielements/input.js");



var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/EditableCell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    value: props.value,
    editable: false
  });

  const handleChange = event => {
    const value = event.target.value;
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      value
    }));
  };

  const check = () => {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      editable: false
    }));

    if (props.onChange) {
      props.onChange(state.value, props.columnsKey, props.index);
    }
  };

  const edit = () => {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      editable: true
    }));
  };

  const {
    value,
    editable
  } = state;
  return __jsx("div", {
    className: "isoEditData",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, editable ? __jsx("div", {
    className: "isoEditDataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_uielements_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: value,
    onChange: handleChange,
    onPressEnter: check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "check",
    className: "isoEditIcon",
    onClick: check,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : __jsx("p", {
    className: "isoDataWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, value || ' ', __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "edit",
    className: "isoEditIcon",
    onClick: edit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
});

/***/ }),

/***/ "../../node_modules/@iso/components/Tables/FilterDropdown.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/FilterDropdown.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var _uielements_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uielements/button */ "../../node_modules/@iso/components/uielements/button.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/FilterDropdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function ({
  searchText,
  onInputChange,
  onSearch
}) {
  return __jsx("div", {
    className: "isoTableSearchBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_uielements_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "tableFilterInput",
    placeholder: "Search name",
    value: searchText,
    onChange: onInputChange,
    onPressEnter: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_uielements_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "primary",
    onClick: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Search"));
});

/***/ }),

/***/ "../../node_modules/@iso/components/Tables/HelperCells.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/HelperCells.js ***!
  \****************************************************************************************************/
/*! exports provided: DateCell, ImageCell, LinkCell, TextCell, EditableCell, DeleteCell, FilterDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCell", function() { return DateCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCell", function() { return ImageCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCell", function() { return LinkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCell", function() { return TextCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCell */ "../../node_modules/@iso/components/Tables/ImageCell.js");
/* harmony import */ var _DeleteCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteCell */ "../../node_modules/@iso/components/Tables/DeleteCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteCell", function() { return _DeleteCell__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EditableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditableCell */ "../../node_modules/@iso/components/Tables/EditableCell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableCell", function() { return _EditableCell__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterDropdown */ "../../node_modules/@iso/components/Tables/FilterDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDropdown", function() { return _FilterDropdown__WEBPACK_IMPORTED_MODULE_4__["default"]; });

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/HelperCells.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DateCell = data => __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, data.toLocaleString());

const ImageCell = src => __jsx(_ImageCell__WEBPACK_IMPORTED_MODULE_1__["default"], {
  src: src,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
});

const LinkCell = (link, href) => __jsx("a", {
  href: href ? href : '#',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, link);

const TextCell = text => __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, text);



/***/ }),

/***/ "../../node_modules/@iso/components/Tables/ImageCell.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/ImageCell.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Tables/ImageCell.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PendingPool = {};
const ReadyPool = {};
function ImageCell({
  src
}) {
  const [srcState, setSrcState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    loadImage(src);
  }, [loadImage, src]);

  function loadImage(src) {
    if (ReadyPool[src]) {
      setSrcState(src);
      return;
    }

    if (PendingPool[src]) {
      PendingPool[src].push(onLoadImage);
      return;
    }

    PendingPool[src] = [onLoadImage];
    const img = new Image();

    img.onload = () => {
      PendingPool[src].forEach(callback => {
        callback(src);
      });
      delete PendingPool[src];
      img.onload = null;
      src = undefined;
    };

    img.src = srcState;
  }

  function onLoadImage(source) {
    ReadyPool[src] = true;

    if (source === src) {
      setSrcState(source);
    }
  }

  const style = src ? {
    backgroundImage: `url(${src})`,
    width: '70px',
    height: '70px',
    backgroundSize: 'cover'
  } : undefined;
  return __jsx("div", {
    className: "exampleImage",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  });
}

/***/ }),

/***/ "../../node_modules/@iso/components/index.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/index.js ***!
  \***************************************************************************************/
/*! exports provided: notification, ColorChoser, EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "../../node_modules/@iso/components/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ColorChoser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorChoser */ "../../node_modules/@iso/components/ColorChoser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorChoser", function() { return _ColorChoser__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableComponent */ "../../node_modules/@iso/components/EditableComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _EditableComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "../../node_modules/@iso/components/uielements/button.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/button.js ***!
  \***************************************************************************************************/
/*! exports provided: default, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "../../node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/button.style */ "../../node_modules/@iso/components/uielements/styles/button.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const AntButton = Object(_styles_button_style__WEBPACK_IMPORTED_MODULE_2__["Buttons"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a);
const isoButton = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(AntButton);
const AntButtonGroup = Object(_styles_button_style__WEBPACK_IMPORTED_MODULE_2__["ButtonsGroup"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a.Group);
const ButtonGroup = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(AntButtonGroup);
/* harmony default export */ __webpack_exports__["default"] = (isoButton);


/***/ }),

/***/ "../../node_modules/@iso/components/uielements/input.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/input.js ***!
  \**************************************************************************************************/
/*! exports provided: default, InputSearch, InputGroup, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input/style/css */ "../../node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/input.style */ "../../node_modules/@iso/components/uielements/styles/input.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const {
  Search,
  TextArea,
  Group
} = antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a;
const WDStyledInput = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a);
const StyledInput = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDStyledInput);
const WDInputGroup = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputGroupWrapper"])(Group);
const InputGroup = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDInputGroup);
const WDInputSearch = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["InputSearchWrapper"])(Search);
const InputSearch = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDInputSearch);
const WDTextarea = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_2__["TextAreaWrapper"])(TextArea);
const Textarea = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDTextarea);
/* harmony default export */ __webpack_exports__["default"] = (StyledInput);


/***/ }),

/***/ "../../node_modules/@iso/components/uielements/popover.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/popover.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/button.style.js":
/*!****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/styles/button.style.js ***!
  \****************************************************************************************************************/
/*! exports provided: Buttons, ButtonsGroup, RadioButtons, GhostButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsGroup", function() { return ButtonsGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return RadioButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostButtons", function() { return GhostButtons; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");




const Buttons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__Buttons",
  componentId: "sc-15097sb-0"
})(["&.ant-btn{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:14px;border-radius:4px;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:", ";border-color:", ";", ";&:hover{border-color:", ";color:", ";}> .anticon + span,> span + .anticon{margin:", ";}.anticon-right{transform:", ";}.anticon-left{transform:", ";}&.ant-btn-primary{background-color:", ";border-color:", ";&:hover{background-color:", ";border-color:", ";color:#fff;}}&.ant-btn-sm{padding:0 15px;height:28px;font-size:12px;&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline){padding:", ";.anticon{margin:", ";}}}&.ant-btn-lg{padding:0 35px;font-size:14px;height:42px;}&.ant-btn-primary{color:#ffffff;}&.ant-btn-dashed{border-style:dashed;border-color:", ";&:hover{color:", ";border-color:", ";}}&.ant-btn-danger{background-color:", ";border-color:", ";color:#ffffff;&:hover{background-color:", ";border-color:", ";}&.ant-btn-background-ghost{color:", ";background-color:transparent;border-color:", ";&:hover{color:", ";border-color:", ";}}}&.ant-btn-circle,&.ant-btn-circle-outline{width:35px;padding:0;font-size:14px;border-radius:50%;height:35px;&.ant-btn-sm{padding:0;height:28px;width:28px;font-size:12px;}&.ant-btn-lg{padding:0;font-size:14px;height:42px;width:42px;}}&.ant-btn.disabled,&.ant-btn[disabled],&.ant-btn.disabled:hover,&.ant-btn[disabled]:hover,&.ant-btn.disabled:focus,&.ant-btn[disabled]:focus,&.ant-btn.disabled:active,&.ant-btn[disabled]:active,&.ant-btn.disabled.active,&.ant-btn[disabled].active{color:", ";background-color:#f7f7f7;border-color:", ";cursor:not-allowed;}&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) .anticon{margin:", ";}&.isoButton{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:0;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:13px;border-radius:4px;height:35px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:#ffffff;background-color:", ";", ";&:hover{background-color:", ";}&.isoBtnSm{padding:0 15px;height:28px;font-size:12px;}&.isoBtnLg{padding:0 35px;font-size:14px;height:42px;}}}+ .ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '0 0.5em 0 0' : '0 0 0 0.5em', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 24px 0 15px' : '0 15px 0 24px', props => props['data-rtl'] === 'rtl' ? '0 -17px 0 0' : '0 0 0 -17px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('error', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 -14px 0 0' : '0 0 0 -14px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const RadioButtons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__RadioButtons",
  componentId: "sc-15097sb-1"
})([".ant-radio-button-wrapper{height:35px;line-height:33px;color:", ";border:1px solid ", ";border-left:0;background:#fff;padding:0 20px;&:hover,&.ant-radio-button-wrapper-focused{color:", ";}&.ant-radio-button-wrapper-checked{background:#fff;border-color:", ";color:", ";box-shadow:-1px 0 0 0 ", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));

const ButtonsGroup = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__ButtonsGroup",
  componentId: "sc-15097sb-2"
})(["&.ant-btn-group{.ant-btn{margin:0;margin-right:0;display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;border-color:", ";white-space:nowrap;line-height:1.5;padding:0 8px;font-size:14px;border-radius:0;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;", ";&:hover{border-color:", ";}&.ant-btn-dashed{border-style:dashed;&:hover{border-color:", ";}}&.ant-btn-primary{border-color:", ";&:hover{border-color:", ";}}}> .ant-btn:first-child:not(:last-child){border-radius:", ";}> .ant-btn:last-child:not(:first-child){border-radius:", ";}.ant-btn-primary:last-child:not(:first-child),.ant-btn-primary + .ant-btn-primary{border-left-color:", ";border-right-color:", ";}.ant-btn-primary:first-child:not(:last-child){border-left-color:", ";border-right-color:", ";}.ant-btn + .ant-btn,+ .ant-btn{margin-left:", " !important;margin-right:", " !important;}&.ant-btn-group-lg{> .ant-btn{padding:0 35px;font-size:14px;height:42px;}}&.ant-btn-group-sm{> .ant-btn{padding:0 15px;height:28px;font-size:12px;}}}&.ant-btn-group + &.ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const GhostButtons = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "buttonstyle__GhostButtons",
  componentId: "sc-15097sb-3"
})([".ant-btn-background-ghost{background:transparent !important;border-color:#fff;color:#fff;&.ant-btn-primary{color:", ";background-color:transparent;border-color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));



/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/input.style.js":
/*!***************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/styles/input.style.js ***!
  \***************************************************************************************************************/
/*! exports provided: InputWrapper, InputGroupWrapper, InputSearchWrapper, TextAreaWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupWrapper", function() { return InputGroupWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchWrapper", function() { return InputSearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWrapper", function() { return TextAreaWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");




const InputWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputWrapper",
  componentId: "lmpumv-0"
})(["&.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;text-align:", ";font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{text-align:", ";color:", ";}&:-moz-placeholder{text-align:", ";color:", ";}&::-moz-placeholder{text-align:", ";color:", ";}&:-ms-input-placeholder{text-align:", ";color:", ";}}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputGroupWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputGroupWrapper",
  componentId: "lmpumv-1"
})(["&.ant-input-group{margin-bottom:10px;.ant-select-auto-complete{margin-right:", ";}.ant-input{&:first-child{border-radius:", ";}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),> .ant-input:not(:first-child):not(:last-child){padding:0 7px;border-left-width:", ";margin-right:", ";}.ant-input-group-addon{padding:4px 7px;font-size:12px;color:", ";text-align:center;background-color:", ";border:1px solid ", ";", ";&:first-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}&:last-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}.ant-select{.ant-select-selection{background-color:inherit;margin:-1px;border:1px solid transparent;", ";}}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child){border-left:0;border-right:0;}& > .ant-input:not(:first-child):not(:last-child){", ";}.ant-input:first-child:last-child{border-radius:4px;}&.ant-input-group-compact > *{border-right-width:", ";}&.ant-input-group-compact > .ant-select > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker .ant-input,&.ant-input-group-compact > .ant-select-auto-complete .ant-input,&.ant-input-group-compact > .ant-cascader-picker .ant-input,&.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker .ant-time-picker-input{border-right-width:", ";}&.ant-input-group-compact > *:first-child,&.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input{border-radius:", ";border-left-width:1px ", ";}&.ant-input-group-compact > *:last-child,&.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input{border-radius:", ";border-right-width:", ";}.ant-calendar-picker-clear,.ant-calendar-picker-icon{right:", ";left:", ";}}&.ant-input-group-lg{.ant-input,> .ant-input-group-addon{padding:6px 10px;height:35px;}}"], props => props['data-rtl'] === 'rtl' ? '-1px' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])(), ''
/* border-left: 0; */
, props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', ''
/* border-right-width: ${props =>
props['data-rtl'] === 'rtl' ? '1px' : '0'}; */
, props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? '0 ' : '1px', props => props['data-rtl'] === 'rtl' ? 'inherit' : '8px', props => props['data-rtl'] === 'rtl' ? '8px' : 'inherit');

const TextAreaWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__TextAreaWrapper",
  componentId: "lmpumv-2"
})(["&.ant-input{padding:4px 10px;width:100%;height:auto;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputSearchWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputSearchWrapper",
  componentId: "lmpumv-3"
})(["&.ant-input-affix-wrapper{.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.ant-input-suffix{right:", ";left:", ";}.ant-input-ant-input-prefix{right:", ";left:", ";}.ant-input-search-icon{color:", ";&:hover{color:", ";}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'inherit' : '7px', props => props['data-rtl'] === 'rtl' ? '7px' : 'inherit', props => props['data-rtl'] === 'rtl' ? '7px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '7px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));



/***/ }),

/***/ "../../node_modules/@iso/config/firebase.config.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/firebase.config.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiKey: "your_firebase_api_key",
  authDomain: "your_firebase_auth_domain",
  databaseURL: "your_firebase_database_url",
  projectId: "your_firebase_project_id",
  storageBucket: "your_firebase_storage_bucket",
  messagingSenderId: "your_firebase_messaging_sender_id"
});

/***/ }),

/***/ "../../node_modules/@iso/config/jwt.config.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/jwt.config.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enabled: false,
  fetchUrl: "http://localhost:5000/login",
  secretKey: "secretKey"
});

/***/ }),

/***/ "../../node_modules/@iso/config/language.config.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/language.config.js ***!
  \*********************************************************************************************/
/*! exports provided: langDir, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langDir", function() { return langDir; });
const language = 'english';
const langDir = 'ltr';
/* harmony default export */ __webpack_exports__["default"] = (language);

/***/ }),

/***/ "../../node_modules/@iso/config/theme/custom.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/theme/custom.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "../../node_modules/@iso/config/theme/default.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _default__WEBPACK_IMPORTED_MODULE_1__["default"], {
  palette: {
    primary: ['#f00'],
    secondary: ['#0f0']
  }
}));

/***/ }),

/***/ "../../node_modules/@iso/config/theme/default.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/theme/default.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {};
theme.palette = {
  primary: ['#4482FF', // 0: Default
  '#3A78F5', // 1: Darken 4%
  '#3775F2', // 2: Darken 5%
  'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
  '#4C8AFF', // 4: Lighten 3%
  'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
  '#6AA8FF', // 6: Lighten 15%
  '#63A1FF', // 7: Lighten 12%
  '#3F7DFA', // 8: Darken 2%
  '#3369e7', // 9: Algolia color
  '#5896FF', // 10: Lighten 8%
  '#2b69e6', // 11:
  '#236cfe', // 12: darken 10%
  '#4d88ff' // 13: Lighten 5%
  ],
  secondary: ['#2d3446', // 0: DarkBlue
  '#f1f3f6', // 1: LightBluish
  '#788195', // 2: LightBlue
  '#E4E6E9', // 3: LightBluish Darken 5%
  '#364d79', // 4:
  '#202739', // 5: DarkBlue Darken 5%
  '#f5f6f8', // 6: LighterBluish
  '#e9ebf1', // 7: DarkBluish
  '#F6F8FB', // 8: LighterBluish Lighten 2%
  '#E9EBEE', // 9: LighterBluish Darken 3%
  '#1a1a1a' // 10: Sidebar submenu select
  ],
  color: ['#FEAC01', // 0: Orange
  '#42299a', // 1: Purple
  '#F75D81', // 2: Pink
  '#7ED321', // 3: LimeGreen
  '#39435f', // 4: BlueShade
  '#FFCA28', // 5: Yellow
  '#F2BD1B', // 6: Yellow Darken 5%
  '#3b5998', // 7: Facebook
  '#344e86', // 8: Facebook Darken 5%
  '#dd4b39', // 9: Google Plus
  '#d73925', // 10: Google Plus Darken 5%
  '#e14615', // 11: Auth0
  '#ca3f13', // 12: Auth0
  '#e0364c' // 13: themeColor--AlizarinCrimson
  ],
  warning: ['#ffbf00' // 0: Warning
  ],
  success: ['#00b16a' // 0: Success
  ],
  error: ['#f64744', // 0: Error
  '#EC3D3A', // 1: Darken 4%
  '#FF5B58' // 2: Lighten 8%
  ],
  grayscale: ['#bababa', // 0: GreyShade
  '#c1c1c1', // 1: GreyDark
  '#D8D8D8', // 2: Grey
  '#f1f1f1', // 3: GreyAlt
  '#F3F3F3', // 4: GreyLight
  '#fafafa', // 5: DarkWhite
  '#F9F9F9', // 6: DarkerWhite
  '#fcfcfc', // 7: #fff Darken 1%
  '#eeeeee', // 8:
  '#fbfbfb', // 9:
  '#f5f5f5', // 10:
  '#f7f8f9' // 11: today-highlight-bg
  ],
  text: ['#323332', // 0: Heading
  '#595959', // 1: HeadingLight
  '#979797', // 2: Text
  '#797979', // 3: TextDark
  '#6a6c6a' // 4: Heading Lighten 22%
  ],
  border: ['#e9e9e9', // 0: Border
  '#d8d8d8', // 1: BorderDark
  '#ebebeb', // 2: BorderLight
  '#d3d3d3', // 3:
  'rgba(228, 228, 228, 0.65)' // 4:
  ],
  calendar: ['#905', // 0:
  '#690', // 1:
  '#a67f59', // 2:
  '#07a', // 3:
  '#dd4a68', // 4:
  '#e90' // 5:
  ]
};
theme.fonts = {
  primary: 'Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "../../node_modules/@iso/config/theme/theme.config.js":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/theme/theme.config.js ***!
  \************************************************************************************************/
/*! exports provided: themeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeConfig", function() { return themeConfig; });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "../../node_modules/@iso/config/theme/default.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "../../node_modules/@iso/config/theme/custom.js");


const themes = {
  defaultTheme: _default__WEBPACK_IMPORTED_MODULE_0__["default"],
  customTheme: _custom__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const themeConfig = {
  topbar: 'defaultTheme',
  sidebar: 'defaultTheme',
  layout: 'defaultTheme',
  theme: 'defaultTheme'
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/ar_SA.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/ar_SA.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/ar */ "react-intl/locale-data/ar");
/* harmony import */ var react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/ar_SA.json */ "../../node_modules/@iso/config/translation/locales/ar_SA.json");
var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ar_SA.json */ "../../node_modules/@iso/config/translation/locales/ar_SA.json", 1);




const saLang = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_3__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1___default.a,
  locale: 'ar',
  data: react_intl_locale_data_ar__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/en-US.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/en-US.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/en */ "react-intl/locale-data/en");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/en_US.json */ "../../node_modules/@iso/config/translation/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "../../node_modules/@iso/config/translation/locales/en_US.json", 1);



 // import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const EnLang = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_3__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_1___default.a,
  locale: 'en-US',
  data: react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/es_ES.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/es_ES.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/ca_ES */ "antd/lib/locale-provider/ca_ES");
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/es */ "react-intl/locale-data/es");
/* harmony import */ var react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/es_ES.json */ "../../node_modules/@iso/config/translation/locales/es_ES.json");
var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/es_ES.json */ "../../node_modules/@iso/config/translation/locales/es_ES.json", 1);




const saLang = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_3__),
  antd: antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_1___default.a,
  locale: 'es',
  data: react_intl_locale_data_es__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/fr_FR.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/fr_FR.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/fr_FR */ "antd/lib/locale-provider/fr_FR");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/fr */ "react-intl/locale-data/fr");
/* harmony import */ var react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/fr_FR.json */ "../../node_modules/@iso/config/translation/locales/fr_FR.json");
var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/fr_FR.json */ "../../node_modules/@iso/config/translation/locales/fr_FR.json", 1);




const saLang = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_3__),
  antd: antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_1___default.a,
  locale: 'fr-FR',
  data: react_intl_locale_data_fr__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/it_IT.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/it_IT.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/locale-provider/it_IT */ "antd/lib/locale-provider/it_IT");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/it */ "react-intl/locale-data/it");
/* harmony import */ var react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/it_IT.json */ "../../node_modules/@iso/config/translation/locales/it_IT.json");
var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/it_IT.json */ "../../node_modules/@iso/config/translation/locales/it_IT.json", 1);




const saLang = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_3__),
  antd: antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_1___default.a,
  locale: 'it-IT',
  data: react_intl_locale_data_it__WEBPACK_IMPORTED_MODULE_2___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/entries/zh-Hans-CN.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/entries/zh-Hans-CN.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl/locale-data/zh */ "react-intl/locale-data/zh");
/* harmony import */ var react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "../../node_modules/@iso/config/translation/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "../../node_modules/@iso/config/translation/locales/zh-Hans.json", 1);



const ZhLan = {
  messages: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_2__),
  antd: null,
  locale: 'zh-Hans-CN',
  data: react_intl_locale_data_zh__WEBPACK_IMPORTED_MODULE_1___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "../../node_modules/@iso/config/translation/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "../../node_modules/@iso/config/translation/entries/zh-Hans-CN.js");
/* harmony import */ var _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries/ar_SA */ "../../node_modules/@iso/config/translation/entries/ar_SA.js");
/* harmony import */ var _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entries/it_IT */ "../../node_modules/@iso/config/translation/entries/it_IT.js");
/* harmony import */ var _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries/es_ES */ "../../node_modules/@iso/config/translation/entries/es_ES.js");
/* harmony import */ var _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries/fr_FR */ "../../node_modules/@iso/config/translation/entries/fr_FR.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);







const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  sa: _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__["default"],
  it: _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__["default"],
  es: _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__["default"],
  fr: _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__["default"]
};
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.en.data);
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.zh.data);
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.sa.data);
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.it.data);
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.es.data);
Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["addLocaleData"])(AppLocale.fr.data);
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/ar_SA.json":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/ar_SA.json ***!
  \*********************************************************************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, topbar.myprofile, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"المتزلج\",\"sidebar.email\":\"البريد الإلكتروني\",\"sidebar.chat\":\"دردشة\",\"sidebar.ecommerce\":\"التجارة الإلكترونية\",\"sidebar.shop\":\"متجر\",\"sidebar.cart\":\"عربة التسوق\",\"sidebar.checkout\":\"الدفع\",\"sidebar.cards\":\"بطاقات\",\"sidebar.maps\":\"خرائط\",\"sidebar.googleMap\":\"خرائط جوجل\",\"sidebar.leafletMap\":\"خريطة النشرة\",\"sidebar.calendar\":\"التقويم\",\"sidebar.notes\":\"ملاحظات\",\"sidebar.todos\":\"تودوس\",\"sidebar.contacts\":\"جهات الاتصال\",\"sidebar.shuffle\":\"خلط\",\"sidebar.charts\":\"الرسوم البيانية\",\"sidebar.googleCharts\":\"عربات غوغل\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"رد فيس\",\"sidebar.reactChart2\":\"الرد-مخطط-2\",\"sidebar.reactTrend\":\"الرد-تريند\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"إستمارات\",\"sidebar.input\":\"إدخال\",\"sidebar.editor\":\"محرر\",\"sidebar.formsWithValidation\":\"نماذج مع التحقق من الصحة\",\"sidebar.progress\":\"تقدم\",\"sidebar.button\":\"زر\",\"sidebar.tab\":\"التبويب\",\"sidebar.checkbox\":\"مربع\",\"sidebar.radiobox\":\"مربع الراديو\",\"sidebar.transfer\":\"تحويل\",\"sidebar.autocomplete\":\"الإكمال التلقائي\",\"sidebar.boxOptions\":\"خيارات مربع\",\"sidebar.uiElements\":\"عناصر واجهة المستخدم\",\"sidebar.badge\":\"شارة\",\"sidebar.card2\":\"بطاقة\",\"sidebar.corusel\":\"إحتفال صاخب مخمور\",\"sidebar.collapse\":\"انهدام\",\"sidebar.popover\":\"البوب\",\"sidebar.tooltip\":\"تلميح\",\"sidebar.tag\":\"بطاقة\",\"sidebar.timeline\":\"الجدول الزمني\",\"sidebar.dropdown\":\"اسقاط\",\"sidebar.pagination\":\"ترقيم الصفحات\",\"sidebar.rating\":\"تقييم\",\"sidebar.tree\":\"شجرة\",\"sidebar.advancedElements\":\"العناصر المتقدمة\",\"sidebar.reactDates\":\"تواريخ الاستجابة\",\"sidebar.codeMirror\":\"كود مرآة\",\"sidebar.uppy\":\"وبي رافع\",\"sidebar.dropzone\":\"إسقاط المنطقة\",\"sidebar.feedback\":\"ردود الفعل\",\"sidebar.alert\":\"محزر\",\"sidebar.modal\":\"شكلي\",\"sidebar.message\":\"رسالة\",\"sidebar.notification\":\"إعلام\",\"sidebar.popConfirm\":\"تأكيد البوب\",\"sidebar.spin\":\"غزل\",\"sidebar.tables\":\"الجداول\",\"sidebar.antTables\":\"جداول النمل\",\"sidebar.pages\":\"صفحات\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"تسجيل الدخول\",\"sidebar.signUp\":\"سجل\",\"sidebar.forgotPw\":\"نسيت كلمات المرور\",\"sidebar.resetPw\":\"إعادة تعيين كلمات المرور\",\"sidebar.invoice\":\"فاتورة\",\"sidebar.menuLevels\":\"مستويات القائمة\",\"sidebar.item1\":\"البند 1\",\"sidebar.item2\":\"البند 2\",\"sidebar.option1\":\"الخيار 1\",\"sidebar.option2\":\"الخيار 2\",\"sidebar.option3\":\"الخيار 3\",\"sidebar.option4\":\"الخيار 4\",\"sidebar.blankPage\":\"صفحة فارغة\",\"sidebar.githubSearch\":\"جيثب البحث\",\"sidebar.youtubeSearch\":\"بحث يوتيوب\",\"languageSwitcher.label\":\"غير اللغة\",\"themeSwitcher\":\"موضوع الجلاد\",\"themeSwitcher.Sidebar\":\"الشريط الجانبي\",\"themeSwitcher.Topbar\":\"الشريط العلوى\",\"themeSwitcher.Background\":\"خلفية\",\"feedback.alert.basicTitle\":\"العنوان الأساسي\",\"feedback.alert.successText\":\"نص النجاح\",\"feedback.alert.infoText\":\"نص المعلومات\",\"feedback.alert.warningText\":\"نص التحذير\",\"feedback.alert.errorText\":\"نص خطأ\",\"feedback.alert.closableAlertType\":\"نوع التنبيه القابل للإغلاق\",\"feedback.alert.iconAlertType\":\"رمز نوع التنبيه\",\"feedback.alert.iconInfoAlertType\":\"رمز معلومات نوع التنبيه\",\"feedback.alert.successTips\":\"نصائح النجاح\",\"feedback.alert.successTipsDescription\":\"وصف مفصل ونصائح حول الكتابة الناجحة.\",\"feedback.alert.informationTips\":\"ملاحظات إعلامية\",\"feedback.alert.informationDescription\":\"وصف إضافي ومعلومات حول كتابة النصوص.\",\"feedback.alert.warningTips\":\"تحذير\",\"feedback.alert.warningDescription\":\"هذا إشعار تحذير حول كتابة النصوص.\",\"feedback.alert.errorTips\":\"خطأ\",\"feedback.alert.errorDescription\":\"هذه رسالة خطأ حول كتابة النصوص.\",\"feedback.alert.modalTitle\":\"مشروط واحد مع تخصيص تذييل الصفحة\",\"feedback.alert.modalSubTitle\":\"مربع حوار أساسي مشروط.\",\"feedback.alert.successTitle\":\"نجاح\",\"feedback.alert.infoTitle\":\"معلومات\",\"feedback.alert.errorTitle\":\"خطأ\",\"feedback.alert.warningTitle\":\"تحذير\",\"feedback.alert.modalBlockTitle\":\"شكلي\",\"feedback.alert.confirmationModalDialogue\":\"حوار مشروط التأكيد\",\"feedback.alert.simpleModalDialogue\":\"حوار مشروط بسيط\",\"feedback.alert.message\":\"رسالة\",\"feedback.alert.normalMessageTitle\":\"رسالة عادية\",\"feedback.alert.normalMessageSubtitle\":\"الرسائل العادية كتعليقات.\",\"feedback.alert.displayMessage\":\"عرض الرسالة العادية\",\"feedback.alert.displayOtherTypeMessageTitle\":\"أنواع أخرى من الرسائل\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"رسائل النجاح وأنواع الأخطاء والإنذارات.\",\"feedback.alert.customizeDurationTitle\":\"تخصيص المدة\",\"feedback.alert.customizeDurationSubTitle\":\"أوستميز مدة عرض الرسالة من الافتراضي 1.5s إلى 10s.\",\"feedback.alert.customizeDurationButton\":\"تخصيص مدة العرض\",\"feedback.alert.messageLoadingTitle\":\"رسالة التحميل\",\"feedback.alert.messageLoadingSubTitle\":\"عرض مؤشر تحميل عالمي، يتم رفضه في حد ذاته بشكل غير متزامن.\",\"feedback.alert.displayLoadIndicator\":\"عرض مؤشر التحميل\",\"feedback.alert.notification\":\"إعلام\",\"feedback.alert.notificationBasicTitle\":\"الأساسية\",\"feedback.alert.notificationBasicSubTitle\":\"أبسط الاستخدام الذي يغلق مربع الإعلام بعد 4.5S.\",\"feedback.alert.notificationBasicDescription\":\"افتح مربع الإشعارات\",\"feedback.alert.notificationDurationTitle\":\"المدة التي يتم بعدها إغلاق مربع الإشعارات\",\"feedback.alert.notificationDurationSubTitle\":\"يمكن استخدام المدة لتحديد المدة التي يبقى فيها الإشعار مفتوحا. بعد انقضاء المدة الزمنية، يتم إغلاق الإشعار تلقائيا. إذا لم يتم تحديد القيمة الافتراضية هي 4.5 ثانية. إذا قمت بتعيين القيمة إلى 0، لن يتم إغلاق مربع الإشعار تلقائيا تلقائيا.\",\"feedback.alert.notificationwithIconTitle\":\"إعلام مع رمز\",\"feedback.alert.notificationwithIconSubTitle\":\"مربع إعلام مع رمز على الجانب الأيسر.\",\"feedback.alert.notificationwithCustomIconTitle\":\"إعلام مع رمز مخصص\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"الرسائل العادية كتعليقات.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"إعلام مع زر مخصص\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"الرسائل العادية كتعليقات.\",\"feedback.alert.popConfirm\":\"تأكيد البوب\",\"feedback.alert.popConfirm.basicTitle\":\"تأكيد أساسي\",\"feedback.alert.popConfirm.basicSubTitle\":\"المثال الأساسي.\",\"feedback.alert.popConfirm.delete\":\"حذف\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"إعلام مع رمز مخصص\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"الرسائل العادية كتعليقات.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"أعلى\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"اليسار\",\"feedback.alert.popConfirm.LB\":\"رطل\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"حق\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"الأسفل\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"غزل\",\"feedback.alert.spin.basicTitle\":\"حجم تدور\",\"feedback.alert.spin.background\":\"تدور مع الخلفية\",\"feedback.alert.spin.backgroundDescription\":\"تدور مع وصف الخلفية\",\"feedback.alert.spin.loadingState\":\"تحميل الدولة\",\"feedback.alert.spin.alertTitle\":\"عنوان رسالة التنبيه\",\"feedback.alert.spin.alertDescription\":\"مزيد من التفاصيل حول سياق هذا التنبيه.\",\"forms.input.header\":\"إدخال\",\"forms.input.basicTitle\":\"الاستخدام الأساسي\",\"forms.input.basicSubTitle\":\"مثال الاستخدام الأساسي.\",\"forms.input.variationsTitle\":\"ثلاثة أحجام من الإدخال\",\"forms.input.variationsSubtitle\":\"هناك ثلاثة أحجام من مربع الإدخال  كبير (42px  ، الافتراضي (35px   والصغيرة (30px  . ملاحظة  داخل النماذج، يتم استخدام الحجم الكبير فقط.\",\"forms.input.groupTitle\":\"مجموعة الإدخال\",\"forms.input.groupSubTitle\":\"الإدخال. مثال المجموعة ملاحظة  أنت لا تحتاج كول للتحكم في العرض في الوضع المضغوط.\",\"forms.input.autoSizingTitle\":\"يمكنك ضبط مستوى الارتفاع لتتناسب مع المحتوى\",\"forms.input.autoSizingSubTitle\":\"أوتوسيزي دعامة لنوع تكستاريا من المدخلات يجعل ارتفاع لضبط تلقائيا استنادا إلى المحتوى. يمكن توفير كائن خيارات ل أوتوسيزي لتحديد الحد الأدنى والحد الأقصى لعدد الخطوط التي سوف تكستاريا ضبط تلقائيا.\",\"forms.input.prePostTabTitle\":\"علامة التبويب ما قبل    المشاركة\",\"forms.input.prePostTabSubTitle\":\"استخدام بري & أمب؛ نموذج علامات تبويب المشاركات ..\",\"forms.input.textAreaTitle\":\"ناحية النص\",\"forms.input.textAreaSubTitle\":\"بالنسبة لحالات إدخال المستخدم متعدد الخطوط، يمكن استخدام المدخلات التي لها قيمة دعامة قيمة تكستاريا.\",\"forms.input.searchTitle\":\"بحث\",\"forms.input.searchSubTitle\":\"مثال لإنشاء مربع بحث عن طريق تجميع إدخال قياسي باستخدام زر بحث\",\"forms.editor.header\":\"محرر\",\"forms.formsWithValidation.header\":\"نموذج التحقق المخصص\",\"forms.formsWithValidation.failLabel\":\"فشل\",\"forms.formsWithValidation.failHelp\":\"يجب أن يكون مزيج من الأرقام & أمب؛ الحروف الهجائية\",\"forms.formsWithValidation.warningLabel\":\"تحذير\",\"forms.formsWithValidation.ValidatingLabel\":\"التحقق من صحة\",\"forms.formsWithValidation.ValidatingHelp\":\"جار التحقق من صحة المعلومات ...\",\"forms.formsWithValidation.SuccessLabel\":\"نجاح\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"تحذير\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"فشل\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"يجب أن يكون مزيج من الأرقام & أمب؛ الحروف الهجائية\",\"forms.progressBar.header\":\"شريط التقدم\",\"forms.progressBar.standardTitle\":\"شريط التقدم\",\"forms.progressBar.standardSubTitle\":\"شريط تقدم قياسي.\",\"forms.progressBar.circularTitle\":\"شريط التقدم الدائري\",\"forms.progressBar.circularSubTitle\":\"شريط تقدم دائري.\",\"forms.progressBar.miniTitle\":\"ميني حجم شريط التقدم\",\"forms.progressBar.miniSubTitle\":\"مناسبة لمنطقة ضيقة.\",\"forms.progressBar.miniCircularTitle\":\"شريط تقدم دائري أصغر.\",\"forms.progressBar.dynamicCircularTitle\":\"ديناميكية شريط التقدم دائرية\",\"forms.progressBar.dynamicCircularSubTitle\":\"شريط التقدم الديناميكي هو أفضل.\",\"forms.progressBar.customTextTitle\":\"تنسيق نص مخصص\",\"forms.progressBar.customTextSubTitle\":\"يمكنك تنسيق النص المخصص عن طريق وضع التنسيق.\",\"forms.progressBar.dashboardTitle\":\"لوحة القيادة\",\"forms.progressBar.dashboardSubTitle\":\"نمط لوحة القيادة للتقدم.\",\"forms.button.header\":\"وصفت\",\"forms.button.simpleButton\":\"نوع الزر\",\"forms.button.iconButton\":\"رمز الزر\",\"forms.button.simpleButtonPrimaryText\":\"ابتدائي\",\"forms.button.simpleButtonDefaultText\":\"افتراضي\",\"forms.button.simpleButtonDashedText\":\"متقطع\",\"forms.button.simpleButtonDangerText\":\"خطر\",\"forms.button.iconPrimaryButton\":\"بحث\",\"forms.button.iconSimpleButton\":\"بحث\",\"forms.button.iconCirculerButton\":\"بحث\",\"forms.button.iconDashedButton\":\"بحث\",\"forms.button.SizedButton\":\"حجم الزر\",\"forms.button.DisabledButton\":\"تم تعطيل الزر\",\"forms.button.LoadingButton\":\"زر التحميل\",\"forms.button.MultipleButton\":\"زر متعددة\",\"forms.button.groupButton\":\"زر المجموعة\",\"forms.Tabs.header\":\"علامات التبويب\",\"forms.Tabs.simpleTabTitle\":\"بحث\",\"forms.Tabs.simpleTabSubTitle\":\"تم تعطيل علامات التبويب\",\"forms.Tabs.iconTabTitle\":\"أيقونة علامات التبويب\",\"forms.Tabs.miniTabTitle\":\"ميني علامات التبويب\",\"forms.Tabs.extraTabTitle\":\"علامات تبويب إضافية للعمل\",\"forms.Tabs.TabpositionTitle\":\"موضع\",\"forms.Tabs.TabpositionSubTitle\":\"موضع علامات التبويب  يسار أو يمين أو أعلى أو أسفل\",\"forms.Tabs.cardTitle\":\"نوع بطاقة علامات التبويب\",\"forms.Tabs.editableTitle\":\"إضافة علامات التبويب وإغلاقها\",\"forms.Tabs.verticalTitle\":\"عمودي نوع علامات التبويب\",\"forms.Tabs.basicTitle\":\"علامات التبويب الأساسية\",\"forms.checkbox.header\":\"مربع\",\"forms.checkbox.basicTitle\":\"مربع الاختيار الأساسي\",\"forms.checkbox.basicSubTitle\":\"الاستخدام الأساسي لخانة الاختيار.\",\"forms.checkbox.groupTitle\":\"مربع الاختيار\",\"forms.checkbox.groupSubTitle\":\"إنشاء مجموعة من مربعات الاختيار من صفيف. استخدم تعطيل لتعطيل مربع اختيار.\",\"forms.checkbox.groupCheckTitle\":\"مربع الاختيار\",\"forms.checkbox.groupCheckSubTitle\":\"إنشاء مجموعة من مربعات الاختيار من صفيف. استخدم تعطيل لتعطيل مربع اختيار.\",\"forms.radio.header\":\"راديو\",\"forms.radio.simpleTitle\":\"الراديو الأساسي\",\"forms.radio.simpleSubTitle\":\"أبسط استخدام. استخدام تعطيل لتعطيل الراديو.\",\"forms.radio.groupTitle\":\"عمودي راديوغروب\",\"forms.radio.groupSubTitle\":\"عمودي راديوغروب، مع المزيد من أجهزة الراديو.\",\"forms.radio.groupSecondTitle\":\"RadioGroup\",\"forms.radio.groupSecondSubTitle\":\"مجموعة من مكونات الراديو.\",\"forms.radio.groupThirdTitle\":\"RadioGroup\",\"forms.radio.groupThirdSubTitle\":\"مجموعة من مكونات الراديو.\",\"forms.transfer.header\":\"تحويل\",\"forms.transfer.SubTitle\":\"نقل مع مربع البحث.\",\"forms.transfer.Title\":\"بحث\",\"forms.autocomplete.header\":\"الإكمال التلقائي\",\"forms.autocomplete.simpleTitle\":\"حسب الطلب\",\"forms.autocomplete.simpleSubTitle\":\"هل يمكن أن تمر AutoComplete.Option كأطفال الإكمال التلقائي، بدلا من استخدام داتسورس\",\"forms.autocomplete.customizeTitle\":\"تخصيص مكون الإدخال\",\"forms.autocomplete.customizeSubTitle\":\"تخصيص مكون الإدخال\",\"uiElements.badge.badge\":\"شارة\",\"uiElements.badge.basicExample\":\"مثال أساسي\",\"uiElements.badge.basicExampleSubTitle\":\"أبسط الاستخدام. سيتم إخفاء شارة عندما العد هو 0، ولكن يمكننا استخدام شوزيرو لإظهار ذلك.\",\"uiElements.badge.overflowCount\":\"تجاوز عدد\",\"uiElements.badge.overflowCountSubTitle\":\"يتم عرض أوفيرفلوكونت عندما يكون عدد أكبر من أوفيرفلوكونت. القيمة الافتراضية ل أوفيرفلوكونت هي 99.\",\"uiElements.badge.status\":\"الحالة\",\"uiElements.badge.statusSubTitle\":\"شارة مستقلة مع الوضع.\",\"uiElements.badge.success\":\"نجاح\",\"uiElements.badge.error\":\"خطأ\",\"uiElements.badge.default\":\"افتراضي\",\"uiElements.badge.processing\":\"معالجة\",\"uiElements.badge.warning\":\"تحذير\",\"uiElements.badge.redBadge\":\"شارة حمراء\",\"uiElements.badge.redBadgeSubTitle\":\"وهذا ببساطة عرض شارة حمراء، دون عدد معين.\",\"uiElements.badge.linkSomething\":\"ربط شيء\",\"uiElements.cards.cards\":\"بطاقات\",\"uiElements.cards.basicCard\":\"بطاقة أساسية\",\"uiElements.cards.basicCardSubTitle\":\"بطاقة أساسية تحتوي على عنوان ومحتوى ومحتوى زاوية إضافي.\",\"uiElements.cards.more\":\"أكثر من\",\"uiElements.cards.cardTitle\":\"عنوان البطاقة\",\"uiElements.cards.cardContent\":\"محتوى البطاقة\",\"uiElements.cards.lorem\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور إنسيدونت أوت لابور إت دولور ماغنا أليكوا. أوت إنيم أد مينيم فينيام، كويس نوسترود إكسيرسيساتيون أولامكو لابوريس نيسي أوت أليكيب إكس إي كومودو ثوسكات.\",\"uiElements.cards.noBorder\":\"ليس لها حدود\",\"uiElements.cards.noBorderSubTitle\":\"بطاقة بلا حدود على خلفية رمادية.\",\"uiElements.cards.gridCard\":\"بطاقة الشبكة\",\"uiElements.cards.gridCardSubTitle\":\"بطاقات عادة ما تتعاون مع تخطيط الشبكة في صفحة نظرة عامة.\",\"uiElements.cards.loadingCard\":\"تحميل البطاقة\",\"uiElements.cards.loadingCardSubTitle\":\"لعرض مؤشر التحميل أثناء جلب محتويات البطاقة.\",\"uiElements.cards.whateverContent\":\"أيا كان المحتوى\",\"uiElements.cards.customizedContentTitle\":\"محتوى مخصص\",\"uiElements.cards.customizedContent\":\"لعرض مؤشر التحميل أثناء جلب محتويات البطاقة.\",\"uiElements.cards.europeStreetBeat\":\"فاز شارع أوروبا\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"إحتفال صاخب مخمور\",\"uiElements.carousel.verticalCarousel\":\"دائري عمودي\",\"uiElements.carousel.verticalCarouselSubTitle\":\"ترقيم الصفحات الرأسي. استخدم   فرتيكال = ترو\",\"uiElements.carousel.basicCarousel\":\"دائري الأساسي\",\"uiElements.carousel.basicCarouselSubTitle\":\"الاستخدام الأساسي\",\"uiElements.carousel.fadeInTransition\":\"تتلاشى في الانتقال\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"الشرائح استخدام تتلاشى للانتقال.   تأثير = تتلاشى\",\"uiElements.carousel.scrollAutomatically\":\"مرر تلقائيا\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"توقيت التمرير إلى بطاقة المقبل    الصورة. تشغيل تلقائي\",\"uiElements.collapse.collapse\":\"انهدام\",\"uiElements.collapse.collapseSubTitle\":\"يمكن توسيع أكثر من لوحة واحدة في وقت واحد، يتم تهيئة اللوحة الأولى لتكون نشطة في هذه الحالة. وس   ديفولتاكتيفيكي =   [كينوم]\",\"uiElements.collapse.text\":\"الكلب هو نوع من الحيوانات المستأنسة. المعروفة عن ولائها والإخلاص، ويمكن العثور عليها كضيف ترحيب في العديد من الأسر في جميع أنحاء العالم.\",\"uiElements.collapse.headerOne\":\"هذا هو رأس اللوحة 1\",\"uiElements.collapse.headerTwo\":\"هذا هو رأس اللوحة 2\",\"uiElements.collapse.headerThree\":\"هذا هو رأس اللوحة 3\",\"uiElements.collapse.headerNested\":\"هذا هو لوحة لوحة العش\",\"uiElements.collapse.nestedExample\":\"مثال متداخل\",\"uiElements.collapse.nestedExampleSubTitle\":\"يتم دمج كولابس داخل كولابس.\",\"uiElements.collapse.borderlessExample\":\"مثال بلا حدود\",\"uiElements.collapse.borderlessExampleSubTitle\":\"نمط بلا حدود من كولابس. استخدم   بوردرد =   فالس\",\"uiElements.collapse.accordion\":\"أكورديون\",\"uiElements.collapse.accordionSubTitle\":\"وضع الأكورديون، لوحة واحدة فقط يمكن توسيعها في وقت واحد. سيتم توسيع اللوحة الأولى بشكل افتراضي. استخدام الأكورديون\",\"uiElements.popover.popover\":\"البوب\",\"uiElements.popover.basicExample\":\"مثال أساسي\",\"uiElements.popover.basicExampleSubTitle\":\"أبسط مثال. حجم طبقة عائمة يعتمد على محتويات المنطقة.\",\"uiElements.popover.hoverMe\":\"مرر لي\",\"uiElements.popover.title\":\"عنوان\",\"uiElements.popover.titleTrigger\":\"ثلاث طرق لتحريك\",\"uiElements.popover.titleTriggerSubTitle\":\"الماوس فوق، والتركيز والتحرك في.\",\"uiElements.popover.focusMe\":\"ركزني\",\"uiElements.popover.clickMe\":\"انقر فوق لي\",\"uiElements.popover.placement\":\"تحديد مستوى\",\"uiElements.popover.placementSubTitle\":\"تتوفر 12 خيارا للمواضع.\",\"uiElements.popover.top\":\"أعلى\",\"uiElements.popover.topLeft\":\"أعلى اليسار\",\"uiElements.popover.topRight\":\"اعلى اليمين\",\"uiElements.popover.leftTop\":\"أعلى اليسار\",\"uiElements.popover.left\":\"اليسار\",\"uiElements.popover.leftBottom\":\"أسفل اليسار\",\"uiElements.popover.rightTop\":\"أعلى اليمين\",\"uiElements.popover.right\":\"حق\",\"uiElements.popover.bottom\":\"الأسفل\",\"uiElements.popover.bottomLeft\":\"أسفل اليسار\",\"uiElements.popover.bottomRight\":\"أسفل يمين\",\"uiElements.popover.boxTitle\":\"التحكم في إغلاق مربع الحوار\",\"uiElements.popover.boxSubTitle\":\"استخدم دعامة مرئية للتحكم في عرض البطاقة.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"رطل\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"قريب\",\"uiElements.tooltip.tooltip\":\"تلميح\",\"uiElements.tooltip.tooltipContent\":\"تلميح المحتوى\",\"uiElements.tooltip.basicExample\":\"مثال أساسي\",\"uiElements.tooltip.basicExampleSubTitle\":\"أبسط الاستخدام.\",\"uiElements.tooltip.placementTitle\":\"تحديد مستوى\",\"uiElements.tooltip.placementSubTitle\":\"يحتوي تولتيب على 12 اختيار للمواضع.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"رطل\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"الأسفل\",\"uiElements.tooltip.right\":\"حق\",\"uiElements.tooltip.left\":\"اليسار\",\"uiElements.tooltip.top\":\"أعلى\",\"uiElements.tooltip.tooltipContentSpan\":\"سيتم عرض تلميح عندما يدخل الماوس.\",\"uiElements.tooltip.contentSpan\":\"تلميح المحتوى\",\"uiElements.tags.tags\":\"الكلمات\",\"uiElements.tags.basicExample\":\"مثال أساسي\",\"uiElements.tags.basicExampleSubTitle\":\"استخدام العلامة الأساسية، ويمكن أن يكون قابلا للإغلاق عن طريق مجموعة الممتلكات القابلة للإغلاق. كلوسابل تدعم العلامة إغلوس بعد أحداث كلوس.\",\"uiElements.tags.tagOne\":\"علامة 1\",\"uiElements.tags.tagTwo\":\"علامة 2\",\"uiElements.tags.link\":\"حلقة الوصل\",\"uiElements.tags.preventDefault\":\"منع افتراضي\",\"uiElements.tags.colorfulTag\":\"علامة ملونة\",\"uiElements.tags.hotTags\":\"العلامات الساخنة\",\"uiElements.tags.hotTagsSubTitle\":\"حدد الموضوعات المفضلة لديك.\",\"uiElements.tags.hots\":\"السواخن\",\"uiElements.tags.addRemoveDynamically\":\"إضافة & إزالة ديناميكيا\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"إنشاء مجموعة من العلامات من قبل مجموعة، يمكنك إضافة وإزالة حيوي. على أساس الحدث بعد كلوس، والتي سيتم تشغيلها في حين نهاية الرسوم المتحركة وثيق.\",\"uiElements.tags.newTag\":\"+ علامة جديدة\",\"uiElements.timeline.timeline\":\"الجدول الزمني\",\"uiElements.timeline.basicExample\":\"مثال أساسي\",\"uiElements.timeline.basicTimeline\":\"الجدول الزمني الأساسي\",\"uiElements.timeline.lastNode\":\"العقدة الأخيرة\",\"uiElements.timeline.lastNodeContent\":\"عندما يكون الجدول الزمني غير مكتمل ومستمر، ضع عقدة شبح في الماضي. سيت   بندينغ =   ترو     أور   بندينغ =   a رياكت إليمنت\",\"uiElements.timeline.seeMore\":\"شاهد المزيد\",\"uiElements.timeline.custom\":\"العادة\",\"uiElements.timeline.customContent\":\"تعيين عقدة كرمز أو عنصر مخصص آخر.\",\"uiElements.timeline.colorExample\":\"مثال على الألوان\",\"uiElements.timeline.colorExampleContent\":\"تعيين لون الدوائر. الأخضر يعني الانتهاء أو حالة النجاح، أحمر يعني التحذير أو الخطأ، والأزرق يعني استمرار أو حالة افتراضية أخرى.\",\"uiElements.timeline.createServiceSite\":\"إنشاء موقع خدمات 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"حل مشاكل الشبكة الأولية 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"مشاكل الشبكة التي يتم حلها 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"الاختبارات الفنية 2015-09-01\",\"uiElements.dropdown.dropdown\":\"اسقاط\",\"uiElements.dropdown.hoverDropdown\":\"مرر لأسفل\",\"uiElements.dropdown.hoverMe\":\"مرر لي\",\"uiElements.dropdown.hoverPlacement\":\"تحوم التنسيب المنسدلة\",\"uiElements.dropdown.hoverDisableLink\":\"مرر مؤشر الماوس لأسفل مع تعطيل الرابط\",\"uiElements.dropdown.clickedDropdown\":\"النقر المنسدلة\",\"uiElements.dropdown.buttonDropdown\":\"زر مع القائمة المنسدلة\",\"uiElements.pagination.pagination\":\"ترقيم الصفحات\",\"uiElements.pagination.basic\":\"الأساسية\",\"uiElements.pagination.more\":\"أكثر من\",\"uiElements.pagination.changer\":\"المغير\",\"uiElements.pagination.jumper\":\"سترة او قفاز او لاعب قفز\",\"uiElements.pagination.miniSize\":\"حجم صغير\",\"uiElements.pagination.simpleMode\":\"الوضع البسيط\",\"uiElements.pagination.controlled\":\"خاضع للسيطرة\",\"uiElements.pagination.totalNumber\":\"الرقم الإجمالي\",\"uiElements.rating.rating\":\"تقييم\",\"uiElements.rating.basicExample\":\"مثال أساسي\",\"uiElements.rating.basicExampleSubTitle\":\"أبسط الاستخدام.\",\"uiElements.rating.halfStar\":\"نصف نجوم\",\"uiElements.rating.halfStarSubTitle\":\"دعم حدد نصف النجم.\",\"uiElements.rating.showCopywriting\":\"عرض كتابة النصوص\",\"uiElements.rating.showCopywritingSubTitle\":\"إضافة مكونات الكتابة في معدل.\",\"uiElements.rating.readOnly\":\"يقرأ فقط\",\"uiElements.rating.readOnlySubTitle\":\"للقراءة فقط، لا يمكن استخدام الماوس للتفاعل.\",\"uiElements.rating.otherCharacter\":\"شخصية أخرى\",\"uiElements.rating.otherCharacterSubTitle\":\"استبدال النجمة الافتراضية إلى حرف آخر مثل الأبجدية، أرقام، إيكونفونت أو حتى كلمة الصينية.\",\"uiElements.tree.tree\":\"شجرة\",\"uiElements.tree.basicExample\":\"مثال أساسي\",\"uiElements.tree.basicExampleSubTitle\":\"الاستخدام الأساسي، أخبرك عن كيفية استخدام قابل للتحديد، قابل للتحديد، تعطيل، ديفولتكسانديكيس، وما إلى ذلك.\",\"uiElements.tree.basicControlledExample\":\"مثال تحكم أساسي\",\"uiElements.tree.basicControlledExampleSubTitle\":\"مثال أساسي للتحكم\",\"uiElements.tree.draggableExample\":\"مثال قابل للسحب\",\"uiElements.tree.draggableExampleSubTitle\":\"اسحب ترينود لإدراج بعد ترينود أخرى أو إدراج في ترينود الأصل الآخر.\",\"uiElements.tree.loadAsync\":\"تحميل البيانات بشكل غير متزامن\",\"uiElements.tree.loadAsyncSubTitle\":\"لتحميل البيانات بشكل غير متزامن عند النقر لتوسيع ترينود.\",\"uiElements.tree.searchableExample\":\"مثال قابل للبحث\",\"uiElements.tree.searchableExampleSubTitle\":\"شجرة قابلة للبحث\",\"uiElements.tree.treeWithLine\":\"شجرة مع خط\",\"shuffle.descriptionOne\":\"نيتسكيب 2.0 السفن، وتقديم جافا سكريبت\",\"shuffle.descriptionTwo\":\"جيسي جيمس غاريت يطلق مواصفات أجاكس\",\"shuffle.descriptionThree\":\"جكري 1.0 صدر\",\"shuffle.descriptionFour\":\"تلتزم suberscore.js الأولى\",\"shuffle.descriptionFive\":\"Backbone.js يصبح شيئا\",\"shuffle.descriptionSix\":\"الزاوي 1.0 صدر\",\"shuffle.descriptionSeven\":\"رد فعل مفتوح المصدر؛ المطورين نفرح\",\"toggle.list\":\"قائمة\",\"toggle.grid\":\"شبكة\",\"toggle.ascending\":\"تصاعدي\",\"toggle.descending\":\"تنازلي\",\"toggle.shuffle\":\"خلط\",\"toggle.rotate\":\"استدارة\",\"toggle.addItem\":\"اضافة عنصر\",\"toggle.removeItem\":\"إزالة بند\",\"contactlist.searchContacts\":\"اتصالات بحث\",\"contactlist.addNewContact\":\"إضافة جهة اتصال جديدة\",\"notes.ChoseColor\":\"اختر لونا لملاحظتك\",\"notes.addNote\":\"إضافة ملاحظة جديدة\",\"page404.title\":\"404\",\"page404.subTitle\":\"يبدو أنك قد فقدت\",\"page404.description\":\"الصفحة التي تبحث عنها غير موجودة أو تم نقلها.\",\"page404.backButton\":\"عودة المنزل\",\"page500.title\":\"500\",\"page500.subTitle\":\"خطأ في الخادم الداخلي\",\"page500.description\":\"هناك خطأ ما. الرجاء إعادة المحاولة.\",\"page500.backButton\":\"عودة المنزل\",\"page.forgetPassTitle\":\"متماثل\",\"page.forgetPassSubTitle\":\"هل نسيت كلمة المرور؟\",\"page.forgetPassDescription\":\"أدخل بريدك الإلكتروني ونرسل إليك رابط إعادة تعيين.\",\"page.sendRequest\":\"ارسل طلب\",\"page.resetPassTitle\":\"متماثل\",\"page.resetPassSubTitle\":\"إعادة تعيين كلمة المرور\",\"page.resetPassDescription\":\"أدخل كلمة مرور جديدة وقم بتأكيدها.\",\"page.resetPassSave\":\"حفظ\",\"page.signInTitle\":\"متماثل\",\"page.signInRememberMe\":\"تذكرنى\",\"page.signInButton\":\"تسجيل الدخول\",\"page.signInPreview\":\"اسم المستخدم  تجريبي، كلمة السر  ديموديمو، أو فقط اضغط على أي زر.\",\"page.signInFacebook\":\"قم بتسجيل الدخول باستخدام الفيسبوك\",\"page.signInGooglePlus\":\"سجل الدخول باستخدام غوغل بلوس\",\"page.signInAuth0\":\"سجل الدخول باستخدام أوث0\",\"page.signInForgotPass\":\"هل نسيت كلمة المرور\",\"page.signInCreateAccount\":\"إنشاء حساب إسومورفويك\",\"page.signUpTitle\":\"متماثل\",\"page.signUpTermsConditions\":\"أوافق على الشروط والأحكام\",\"page.signUpButton\":\"سجل\",\"page.signUpFacebook\":\"اشترك عبر حساب فايسبوك\",\"page.signUpGooglePlus\":\"اشترك مع غوغل بلوس\",\"page.signUpAuth0\":\"اشترك باستخدام أوث0\",\"page.signUpAlreadyAccount\":\"هل لديك حساب بالفعل؟ تسجيل الدخول.\",\"widget.reportswidget.label\":\"الإيرادات\",\"widget.reportswidget.details\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور\",\"widget.singleprogresswidget1.label\":\"تسويق\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"الاستشارات\",\"widget.singleprogresswidget4.label\":\"تطوير\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"بريد إلكتروني غير مقروء\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"تحميل الصور\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"إجمالي الرسالة\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"أوامر المشاركة\",\"widget.salewidget1.label\":\"الإيرادات\",\"widget.salewidget1.price\":\"$ 15000\",\"widget.salewidget1.details\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور\",\"widget.salewidget2.label\":\"الإيرادات\",\"widget.salewidget2.price\":\"$ 15000\",\"widget.salewidget2.details\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور\",\"widget.salewidget3.label\":\"الإيرادات\",\"widget.salewidget3.price\":\"$ 15000\",\"widget.salewidget3.details\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور\",\"widget.salewidget4.label\":\"الإيرادات\",\"widget.salewidget4.price\":\"$ 15000\",\"widget.salewidget4.details\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"رسائل جديدة\",\"widget.cardwidget2.number\":\"100٪\",\"widget.cardwidget2.text\":\"الصوت\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"موهلات\",\"widget.progresswidget1.label\":\"تحميل\",\"widget.progresswidget1.details\":\"50٪ كاملة\",\"widget.progresswidget2.label\":\"الدعم\",\"widget.progresswidget2.details\":\"80٪ العملاء راض\",\"widget.progresswidget3.label\":\"تحميل\",\"widget.progresswidget3.details\":\"65٪ كاملة\",\"widget.vcardwidget.name\":\"جون دو\",\"widget.vcardwidget.title\":\"مطور يوس\",\"widget.vcardwidget.description\":\"لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبيسيسينغ إليت، سيد دو إيسمود تيمبور أمت رولر كونسكتيتور أديبيسيسينغ إليت\",\"checkout.billingform.firstname\":\"الاسم الاول\",\"checkout.billingform.lastname\":\"الكنية\",\"checkout.billingform.company\":\"اسم الشركة\",\"checkout.billingform.email\":\"عنوان البريد الإلكتروني\",\"checkout.billingform.mobile\":\"رقم المحمول\",\"checkout.billingform.country\":\"بلد\",\"checkout.billingform.city\":\"مدينة\",\"checkout.billingform.address\":\"عنوان\",\"checkout.billingform.addressoptional\":\"شقة، جناح، وحدة الخ (اختياري\",\"checkout.billingform.checkbox\":\"انشئ حساب؟\",\"antTable.title.image\":\"صورة\",\"antTable.title.firstName\":\"الاسم الاول\",\"antTable.title.lastName\":\"الكنية\",\"antTable.title.city\":\"مدينة\",\"antTable.title.street\":\"شارع\",\"antTable.title.email\":\"البريد الإلكتروني\",\"antTable.title.dob\":\"تاريخ الميلاد\",\"Map.leaflet.basicTitle\":\"الخريطة الأساسية\",\"Map.leaflet.basicMarkerTitle\":\"خريطة أساسية (مع علامة افتراضية\",\"Map.leaflet.leafletCustomMarkerTitle\":\"خريطة أساسية (مع علامة رمز مخصص\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"خريطة أساسية (مع علامة هتمل مخصصة\",\"Map.leaflet.leafletMarkerClusterTitle\":\"الخريطة الأساسية (مع مجموعة العلامات\",\"Map.leaflet.leafletRoutingTitle\":\"خريطة أساسية التوجيه\",\"Component.contacts.noOption\":\"لم يتم العثور على جهة اتصال\",\"email.send\":\"إرسال\",\"email.cancel\":\"إلغاء\",\"email.compose\":\"مؤلف موسيقى\",\"email.noMessage\":\"الرجاء تحديد بريد للقراءة\",\"themeSwitcher.purchase\":\"شراء الآن\",\"themeSwitcher.settings\":\"إعدادات\",\"sidebar.selectbox\":\"تحديد\",\"topbar.myprofile\":\"ملفي\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/en_US.json":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/en_US.json ***!
  \*********************************************************************************************************/
/*! exports provided: sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.swiperslider, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, sidebar.scrumboard, sidebar.profile, sidebar.quiz, sidebar.authCheck, sidebar.swiperSlider, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInMobile, page.signUpMobile, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, Swiper.basic.basicTitle, Swiper.bullet.bulletTitle, Swiper.progress.progressTitle, Swiper.fraction.fractionTitle, Swiper.numbered.numberedTitle, Swiper.scroll.scrollTitle, Swiper.verticle.verticleTitle, Swiper.multiple.multipleGridTitle, Swiper.free.freeTitle, Swiper.multirow.multirowTitle, Swiper.cursor.cursorTitle, Swiper.loop.infiniteTitle, Swiper.wheel.wheelTitle, Swiper.auto.autoPlayTitle, Swiper.lazy.lazyTitle, Swiper.custom.customScrollTitle, Swiper.custom.basicNavTitle, Swiper.custom.buttonNavTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.email\":\"Email\",\"sidebar.chat\":\"Chat\",\"sidebar.ecommerce\":\"Ecommerce\",\"sidebar.shop\":\"Shop\",\"sidebar.cart\":\"Cart\",\"sidebar.checkout\":\"Checkout\",\"sidebar.cards\":\"Cards\",\"sidebar.maps\":\"Maps\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"Articles\",\"sidebar.firestorecrudinvestor\":\"Investors\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.leafletMap\":\"Leaflet Map\",\"sidebar.calendar\":\"Calendar\",\"sidebar.notes\":\"Notes\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contacts\",\"sidebar.shuffle\":\"Shuffle\",\"sidebar.charts\":\"Charts\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"React Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"React-Trend\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Forms\",\"sidebar.input\":\"Input\",\"sidebar.editor\":\"Editor\",\"sidebar.formsWithValidation\":\"Forms With Validation\",\"sidebar.progress\":\"Progress\",\"sidebar.button\":\"Button\",\"sidebar.tab\":\"Tab\",\"sidebar.checkbox\":\"Checkbox\",\"sidebar.radiobox\":\"Radiobox\",\"sidebar.transfer\":\"Transfer\",\"sidebar.autocomplete\":\"AutoComplete\",\"sidebar.boxOptions\":\"Box Options\",\"sidebar.uiElements\":\"UI Elements\",\"sidebar.badge\":\"Badge\",\"sidebar.card2\":\"Card\",\"sidebar.corusel\":\"Carousal\",\"sidebar.collapse\":\"Collapse\",\"sidebar.popover\":\"Pop Over\",\"sidebar.tooltip\":\"Tooltip\",\"sidebar.tag\":\"Tag\",\"sidebar.timeline\":\"Timeline\",\"sidebar.dropdown\":\"Dropdown\",\"sidebar.pagination\":\"Pagination\",\"sidebar.rating\":\"Rating\",\"sidebar.tree\":\"Tree\",\"sidebar.advancedElements\":\"Advanced Elements\",\"sidebar.reactDates\":\"React Dates\",\"sidebar.swiperslider\":\"Swiper Slider\",\"sidebar.codeMirror\":\"Code Mirror\",\"sidebar.uppy\":\"Uppy Uploader\",\"sidebar.dropzone\":\"Drop Zone\",\"sidebar.feedback\":\"Feedback\",\"sidebar.alert\":\"Alert\",\"sidebar.modal\":\"Modal\",\"sidebar.message\":\"Message\",\"sidebar.notification\":\"Notification\",\"sidebar.popConfirm\":\"Pop Confirm\",\"sidebar.spin\":\"Spin\",\"sidebar.tables\":\"Tables\",\"sidebar.antTables\":\"Ant Tables\",\"sidebar.pages\":\"Pages\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Sign In\",\"sidebar.signUp\":\"Sign Up\",\"sidebar.forgotPw\":\"Forgot Passwords\",\"sidebar.resetPw\":\"Reset Passwords\",\"sidebar.invoice\":\"Invoice\",\"sidebar.menuLevels\":\"Menu Levels\",\"sidebar.item1\":\"Item 1\",\"sidebar.item2\":\"Item 2\",\"sidebar.option1\":\"Option 1\",\"sidebar.option2\":\"Option 2\",\"sidebar.option3\":\"Option 3\",\"sidebar.option4\":\"Option 4\",\"sidebar.blankPage\":\"Blank Page\",\"sidebar.githubSearch\":\"Github Search\",\"sidebar.youtubeSearch\":\"Youtube Search\",\"sidebar.scrumboard\":\"Scrum Board\",\"sidebar.profile\":\"Profile\",\"sidebar.quiz\":\"Quiz\",\"sidebar.authCheck\":\"Check Auth Status\",\"sidebar.swiperSlider\":\"Swiper Slider\",\"languageSwitcher.label\":\"Change Language\",\"themeSwitcher\":\"Theme Switcher\",\"themeSwitcher.Sidebar\":\"Sidebar\",\"themeSwitcher.Topbar\":\"Topbar\",\"themeSwitcher.Background\":\"Background\",\"feedback.alert.basicTitle\":\"Basic Title\",\"feedback.alert.successText\":\"Success text\",\"feedback.alert.infoText\":\"Info Text\",\"feedback.alert.warningText\":\"Warning Text\",\"feedback.alert.errorText\":\"Error Text\",\"feedback.alert.closableAlertType\":\"Closable Alert Type\",\"feedback.alert.iconAlertType\":\"Icon Alert Type\",\"feedback.alert.iconInfoAlertType\":\"Icon Info Alert Type\",\"feedback.alert.successTips\":\"success tips\",\"feedback.alert.successTipsDescription\":\"Detailed description and advices about successful copywriting.\",\"feedback.alert.informationTips\":\"Informational Notes\",\"feedback.alert.informationDescription\":\"Additional description and informations about copywriting.\",\"feedback.alert.warningTips\":\"Warning\",\"feedback.alert.warningDescription\":\"This is a warning notice about copywriting.\",\"feedback.alert.errorTips\":\"Error\",\"feedback.alert.errorDescription\":\"This is an error message about copywriting.\",\"feedback.alert.modalTitle\":\"Modal one with customize Footer\",\"feedback.alert.modalSubTitle\":\"Basic modal dialog.\",\"feedback.alert.successTitle\":\"Success\",\"feedback.alert.infoTitle\":\"Info\",\"feedback.alert.errorTitle\":\"Error\",\"feedback.alert.warningTitle\":\"Warning\",\"feedback.alert.modalBlockTitle\":\"Modal\",\"feedback.alert.confirmationModalDialogue\":\"Confirmation modal dialog\",\"feedback.alert.simpleModalDialogue\":\"Simple modal dialog\",\"feedback.alert.message\":\"Message\",\"feedback.alert.normalMessageTitle\":\"Normal Message\",\"feedback.alert.normalMessageSubtitle\":\"Normal messages as feedbacks.\",\"feedback.alert.displayMessage\":\"Display normal message\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Other Types of Message\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Messages of success   error and warning types.\",\"feedback.alert.customizeDurationTitle\":\"Customize duration\",\"feedback.alert.customizeDurationSubTitle\":\"ustomize message display duration from default 1.5s to 10s.\",\"feedback.alert.customizeDurationButton\":\"Customized display duration\",\"feedback.alert.messageLoadingTitle\":\"Message of loading\",\"feedback.alert.messageLoadingSubTitle\":\"Display a global loading indicator   which is dismissed by itself asynchronously.\",\"feedback.alert.displayLoadIndicator\":\"Display a loading indicator\",\"feedback.alert.notification\":\"Notification\",\"feedback.alert.notificationBasicTitle\":\"Basic\",\"feedback.alert.notificationBasicSubTitle\":\"The simplest usage that close the notification box after 4.5s.\",\"feedback.alert.notificationBasicDescription\":\"Open the notification box\",\"feedback.alert.notificationDurationTitle\":\"Duration after which the notification box is closed\",\"feedback.alert.notificationDurationSubTitle\":\"Duration can be used to specify how long the notification stays open. After the duration time elapses   the notification closes automatically. If not specified   default value is 4.5 seconds. If you set the value to 0   the notification box will never close automatically.\",\"feedback.alert.notificationwithIconTitle\":\"Notification with icon\",\"feedback.alert.notificationwithIconSubTitle\":\"A notification box with a icon at the left side.\",\"feedback.alert.notificationwithCustomIconTitle\":\"Notification with custom icon\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Notification with custom button\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm\":\"Pop Confirm\",\"feedback.alert.popConfirm.basicTitle\":\"Basic Confirm\",\"feedback.alert.popConfirm.basicSubTitle\":\"The basic example.\",\"feedback.alert.popConfirm.delete\":\"Delete\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Notification with custom icon\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"Top\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"Left\",\"feedback.alert.popConfirm.LB\":\"LB\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"Right\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"Bottom\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"Spin\",\"feedback.alert.spin.basicTitle\":\"Size Spin\",\"feedback.alert.spin.background\":\"Spin With Background\",\"feedback.alert.spin.backgroundDescription\":\"Spin With Background description\",\"feedback.alert.spin.loadingState\":\"Loading State\",\"feedback.alert.spin.alertTitle\":\"Alert message title\",\"feedback.alert.spin.alertDescription\":\"Further details about the context of this alert.\",\"forms.input.header\":\"Input\",\"forms.input.basicTitle\":\"Basic usage\",\"forms.input.basicSubTitle\":\"Basic usage example.\",\"forms.input.variationsTitle\":\"Three sizes of Input\",\"forms.input.variationsSubtitle\":\"There are three sizes of an Input box  large (42px  、default (35px   and small (30px  . Note  Inside of forms   only the large size is used.\",\"forms.input.groupTitle\":\"Input Group\",\"forms.input.groupSubTitle\":\"Input.Group example Note  You dont need Col to control the width in the compact mode.\",\"forms.input.autoSizingTitle\":\"Autosizing the height to fit the content\",\"forms.input.autoSizingSubTitle\":\"autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust.\",\"forms.input.prePostTabTitle\":\"Pre    Post tab\",\"forms.input.prePostTabSubTitle\":\"Using pre &amp; post tabs example..\",\"forms.input.textAreaTitle\":\"Textarea\",\"forms.input.textAreaSubTitle\":\"For multi-line user input cases   an input whose type prop has the value of textarea can be used.\",\"forms.input.searchTitle\":\"Search\",\"forms.input.searchSubTitle\":\"Example of creating a search box by grouping a standard input with a search button\",\"forms.editor.header\":\"Editor\",\"forms.formsWithValidation.header\":\"Customized Validation Form\",\"forms.formsWithValidation.failLabel\":\"Fail\",\"forms.formsWithValidation.failHelp\":\"Should be combination of numbers & alphabets\",\"forms.formsWithValidation.warningLabel\":\"Warning\",\"forms.formsWithValidation.ValidatingLabel\":\"Validating\",\"forms.formsWithValidation.ValidatingHelp\":\"The information is being validated...\",\"forms.formsWithValidation.SuccessLabel\":\"Success\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Warning\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Fail\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Should be combination of numbers & alphabets\",\"forms.progressBar.header\":\"Progress Bar\",\"forms.progressBar.standardTitle\":\"Progress bar\",\"forms.progressBar.standardSubTitle\":\"A standard progress bar.\",\"forms.progressBar.circularTitle\":\"Circular Progress bar\",\"forms.progressBar.circularSubTitle\":\"A circular progress bar.\",\"forms.progressBar.miniTitle\":\"Mini size progress bar\",\"forms.progressBar.miniSubTitle\":\"Appropriate for a narrow area.\",\"forms.progressBar.miniCircularTitle\":\"A smaller circular progress bar.\",\"forms.progressBar.dynamicCircularTitle\":\"Dynamic circular progress bar\",\"forms.progressBar.dynamicCircularSubTitle\":\"A dynamic progress bar is better.\",\"forms.progressBar.customTextTitle\":\"Custom text format\",\"forms.progressBar.customTextSubTitle\":\"You can custom text format by setting format.\",\"forms.progressBar.dashboardTitle\":\"Dashboard\",\"forms.progressBar.dashboardSubTitle\":\"A dashboard style of progress.\",\"forms.button.header\":\"Buttons\",\"forms.button.simpleButton\":\"Button Type\",\"forms.button.iconButton\":\"Button Icon\",\"forms.button.simpleButtonPrimaryText\":\"Primary\",\"forms.button.simpleButtonDefaultText\":\"Default\",\"forms.button.simpleButtonDashedText\":\"Dashed\",\"forms.button.simpleButtonDangerText\":\"Danger\",\"forms.button.iconPrimaryButton\":\"search\",\"forms.button.iconSimpleButton\":\"search\",\"forms.button.iconCirculerButton\":\"search\",\"forms.button.iconDashedButton\":\"search\",\"forms.button.SizedButton\":\"Button Size\",\"forms.button.DisabledButton\":\"Button Disabled\",\"forms.button.LoadingButton\":\"Button Loading\",\"forms.button.MultipleButton\":\"Multiple Button\",\"forms.button.groupButton\":\"Button Group\",\"forms.Tabs.header\":\"Tabs\",\"forms.Tabs.simpleTabTitle\":\"search\",\"forms.Tabs.simpleTabSubTitle\":\"Disabled Tabs\",\"forms.Tabs.iconTabTitle\":\"Icon Tabs\",\"forms.Tabs.miniTabTitle\":\"Mini Tabs\",\"forms.Tabs.extraTabTitle\":\"Extra Action Tabs\",\"forms.Tabs.TabpositionTitle\":\"Position\",\"forms.Tabs.TabpositionSubTitle\":\"Tabss position  left   right   top or bottom\",\"forms.Tabs.cardTitle\":\"Card Type Tabs\",\"forms.Tabs.editableTitle\":\"Add and Close Tabs\",\"forms.Tabs.verticalTitle\":\"Vertical Type Tabs\",\"forms.Tabs.basicTitle\":\"Basic Tabs\",\"forms.checkbox.header\":\"Checkbox\",\"forms.checkbox.basicTitle\":\"Basic Checkbox\",\"forms.checkbox.basicSubTitle\":\"Basic usage of checkbox.\",\"forms.checkbox.groupTitle\":\"Checkbox Group\",\"forms.checkbox.groupSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.checkbox.groupCheckTitle\":\"Checkbox Group\",\"forms.checkbox.groupCheckSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.radio.header\":\"Radio\",\"forms.radio.simpleTitle\":\"Basic Radio\",\"forms.radio.simpleSubTitle\":\"The simplest use. Use disabled to disable a radio.\",\"forms.radio.groupTitle\":\"Vertical RadioGroup\",\"forms.radio.groupSubTitle\":\"Vertical RadioGroup   with more radios.\",\"forms.radio.groupSecondTitle\":\"RadioGroup\",\"forms.radio.groupSecondSubTitle\":\"A group of radio components.\",\"forms.radio.groupThirdTitle\":\"RadioGroup\",\"forms.radio.groupThirdSubTitle\":\"A group of radio components.\",\"forms.transfer.header\":\"Transfer\",\"forms.transfer.SubTitle\":\"Transfer with a search box.\",\"forms.transfer.Title\":\"Search\",\"forms.autocomplete.header\":\"Autocomplete\",\"forms.autocomplete.simpleTitle\":\"Customized\",\"forms.autocomplete.simpleSubTitle\":\"You could pass AutoComplete.Option as children of AutoComplete   instead of using dataSource\",\"forms.autocomplete.customizeTitle\":\"Customize Input Component\",\"forms.autocomplete.customizeSubTitle\":\"Customize Input Component\",\"uiElements.badge.badge\":\"Badge\",\"uiElements.badge.basicExample\":\"Basic Example\",\"uiElements.badge.basicExampleSubTitle\":\"Simplest Usage. Badge will be hidden when count is 0   but we can use showZero to show it.\",\"uiElements.badge.overflowCount\":\"Overflow Count\",\"uiElements.badge.overflowCountSubTitle\":\"OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.\",\"uiElements.badge.status\":\"Status\",\"uiElements.badge.statusSubTitle\":\"Standalone badge with status.\",\"uiElements.badge.success\":\"Success\",\"uiElements.badge.error\":\"Error\",\"uiElements.badge.default\":\"Default\",\"uiElements.badge.processing\":\"Processing\",\"uiElements.badge.warning\":\"Warning\",\"uiElements.badge.redBadge\":\"Red badge\",\"uiElements.badge.redBadgeSubTitle\":\"This will simply display a red badge   without a specific count.\",\"uiElements.badge.linkSomething\":\"Link something\",\"uiElements.cards.cards\":\"Cards\",\"uiElements.cards.basicCard\":\"Basic card\",\"uiElements.cards.basicCardSubTitle\":\"A basic card containing a title   content and an extra corner content.\",\"uiElements.cards.more\":\"More\",\"uiElements.cards.cardTitle\":\"Card Title\",\"uiElements.cards.cardContent\":\"Card content\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\"uiElements.cards.noBorder\":\"No Border\",\"uiElements.cards.noBorderSubTitle\":\"A borderless card on a gray background.\",\"uiElements.cards.gridCard\":\"Grid card\",\"uiElements.cards.gridCardSubTitle\":\"Cards usually cooperate with grid layout in overview page.\",\"uiElements.cards.loadingCard\":\"Loading card\",\"uiElements.cards.loadingCardSubTitle\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.whateverContent\":\"Whatever content\",\"uiElements.cards.customizedContentTitle\":\"Customized Content\",\"uiElements.cards.customizedContent\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.europeStreetBeat\":\"Europe Street beat\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"Carousal\",\"uiElements.carousel.verticalCarousel\":\"Vertical Carousel\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Vertical pagination. use   vertical=true\",\"uiElements.carousel.basicCarousel\":\"Basic Carousel\",\"uiElements.carousel.basicCarouselSubTitle\":\"Basic usage\",\"uiElements.carousel.fadeInTransition\":\"Fade In Transition\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Slides use fade for transition.   effect=fade\",\"uiElements.carousel.scrollAutomatically\":\"Scroll Automatically\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Timing of scrolling to the next card  picture. autoplay\",\"uiElements.collapse.collapse\":\"Collapse\",\"uiElements.collapse.collapseSubTitle\":\"More than one panel can be expanded at a time   the first panel is initialized to be active in this case. use   defaultActiveKey=  [keyNum]\",\"uiElements.collapse.text\":\"A dog is a type of domesticated animal. Known for its loyalty and faithfulness   it can be found as a welcome guest in many households across the world.\",\"uiElements.collapse.headerOne\":\"This is panel header 1\",\"uiElements.collapse.headerTwo\":\"This is panel header 2\",\"uiElements.collapse.headerThree\":\"This is panel header 3\",\"uiElements.collapse.headerNested\":\"This is panel nest panel\",\"uiElements.collapse.nestedExample\":\"Nested Example\",\"uiElements.collapse.nestedExampleSubTitle\":\"Collapse is nested inside the Collapse.\",\"uiElements.collapse.borderlessExample\":\"Borderless Example\",\"uiElements.collapse.borderlessExampleSubTitle\":\"A borderless style of Collapse. use   bordered=  false\",\"uiElements.collapse.accordion\":\"Accordion\",\"uiElements.collapse.accordionSubTitle\":\"Accordion mode   only one panel can be expanded at a time. The first panel will be expanded by default. use accordion\",\"uiElements.popover.popover\":\"Popover\",\"uiElements.popover.basicExample\":\"Basic Example\",\"uiElements.popover.basicExampleSubTitle\":\"The most basic example. The size of the floating layer depends on the contents region.\",\"uiElements.popover.hoverMe\":\"Hover me\",\"uiElements.popover.title\":\"Title\",\"uiElements.popover.titleTrigger\":\"Three ways to trigger\",\"uiElements.popover.titleTriggerSubTitle\":\"Mouse to click   focus and move in.\",\"uiElements.popover.focusMe\":\"Focus me\",\"uiElements.popover.clickMe\":\"Click me\",\"uiElements.popover.placement\":\"Placement\",\"uiElements.popover.placementSubTitle\":\"There are 12 placement options available.\",\"uiElements.popover.top\":\"Top\",\"uiElements.popover.topLeft\":\"Top Left\",\"uiElements.popover.topRight\":\"Top Right\",\"uiElements.popover.leftTop\":\"Left Top\",\"uiElements.popover.left\":\"Left\",\"uiElements.popover.leftBottom\":\"Left Bottom\",\"uiElements.popover.rightTop\":\"Right Top\",\"uiElements.popover.right\":\"Right\",\"uiElements.popover.bottom\":\"Bottom\",\"uiElements.popover.bottomLeft\":\"Bottom Left\",\"uiElements.popover.bottomRight\":\"Bottom Right\",\"uiElements.popover.boxTitle\":\"Controlling the close of the dialog\",\"uiElements.popover.boxSubTitle\":\"Use visible prop to control the display of the card.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"LB\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"Close\",\"uiElements.tooltip.tooltip\":\"Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Tooltip Content\",\"uiElements.tooltip.basicExample\":\"Basic Example\",\"uiElements.tooltip.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.tooltip.placementTitle\":\"Placement\",\"uiElements.tooltip.placementSubTitle\":\"The ToolTip has 12 placements choice.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"LB\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"Bottom\",\"uiElements.tooltip.right\":\"Right\",\"uiElements.tooltip.left\":\"Left\",\"uiElements.tooltip.top\":\"Top\",\"uiElements.tooltip.tooltipContentSpan\":\"Tooltip will show when mouse enter.\",\"uiElements.tooltip.contentSpan\":\"Tooltip Content\",\"uiElements.tags.tags\":\"Tags\",\"uiElements.tags.basicExample\":\"Basic Example\",\"uiElements.tags.basicExampleSubTitle\":\"Usage of basic Tag   and it could be closable by set closable property. Closable Tag supports onClose afterClose events.\",\"uiElements.tags.tagOne\":\"Tag 1\",\"uiElements.tags.tagTwo\":\"Tag 2\",\"uiElements.tags.link\":\"Link\",\"uiElements.tags.preventDefault\":\"Prevent Default\",\"uiElements.tags.colorfulTag\":\"Colorful Tag\",\"uiElements.tags.hotTags\":\"Hot Tags\",\"uiElements.tags.hotTagsSubTitle\":\"Select your favourite topics.\",\"uiElements.tags.hots\":\"Hots\",\"uiElements.tags.addRemoveDynamically\":\"Add & Remove Dynamically\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"Generating a set of Tags by array   you can add and remove dynamically. Its based on afterClose event   which will be triggered while the close animation end.\",\"uiElements.tags.newTag\":\"+ New Tag\",\"uiElements.timeline.timeline\":\"Timeline\",\"uiElements.timeline.basicExample\":\"Basic Example\",\"uiElements.timeline.basicTimeline\":\"Basic timeline\",\"uiElements.timeline.lastNode\":\"Last Node\",\"uiElements.timeline.lastNodeContent\":\"When the timeline is incomplete and ongoing   put a ghost node at last. set   pending=  true     or   pending=  a React Element\",\"uiElements.timeline.seeMore\":\"See more\",\"uiElements.timeline.custom\":\"Custom\",\"uiElements.timeline.customContent\":\"Set a node as an icon or other custom element.\",\"uiElements.timeline.colorExample\":\"Color Example\",\"uiElements.timeline.colorExampleContent\":\"Set the color of circles. green means completed or success status   red means warning or error   and blue means ongoing or other default status.\",\"uiElements.timeline.createServiceSite\":\"Create a services site 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Solve initial network problems 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Network problems being solved 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Technical testing 2015-09-01\",\"uiElements.dropdown.dropdown\":\"Dropdown\",\"uiElements.dropdown.hoverDropdown\":\"Hover Drop Down\",\"uiElements.dropdown.hoverMe\":\"Hover me\",\"uiElements.dropdown.hoverPlacement\":\"Hover Placement Drop Down\",\"uiElements.dropdown.hoverDisableLink\":\"Hover Drop Down with Disable link\",\"uiElements.dropdown.clickedDropdown\":\"Clicked Drop Down\",\"uiElements.dropdown.buttonDropdown\":\"Button with dropdown menu\",\"uiElements.pagination.pagination\":\"Pagination\",\"uiElements.pagination.basic\":\"Basic\",\"uiElements.pagination.more\":\"More\",\"uiElements.pagination.changer\":\"Changer\",\"uiElements.pagination.jumper\":\"Jumper\",\"uiElements.pagination.miniSize\":\"Mini Size\",\"uiElements.pagination.simpleMode\":\"Simple Mode\",\"uiElements.pagination.controlled\":\"Controlled\",\"uiElements.pagination.totalNumber\":\"Total Number\",\"uiElements.rating.rating\":\"Rating\",\"uiElements.rating.basicExample\":\"Basic Example\",\"uiElements.rating.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.rating.halfStar\":\"Half star\",\"uiElements.rating.halfStarSubTitle\":\"Support select half star.\",\"uiElements.rating.showCopywriting\":\"Show copywriting\",\"uiElements.rating.showCopywritingSubTitle\":\"Add copywriting in rate components.\",\"uiElements.rating.readOnly\":\"Read only\",\"uiElements.rating.readOnlySubTitle\":\"Read only   cant use mouse to interact.\",\"uiElements.rating.otherCharacter\":\"Other Character\",\"uiElements.rating.otherCharacterSubTitle\":\"Replace the default star to other character like alphabet   digit   iconfont or even Chinese word.\",\"uiElements.tree.tree\":\"Tree\",\"uiElements.tree.basicExample\":\"Basic example\",\"uiElements.tree.basicExampleSubTitle\":\"The most basic usage   tell you how to use checkable   selectable   disabled   defaultExpandKeys   and etc.\",\"uiElements.tree.basicControlledExample\":\"Basic controlled example\",\"uiElements.tree.basicControlledExampleSubTitle\":\"basic controlled example\",\"uiElements.tree.draggableExample\":\"Draggable example\",\"uiElements.tree.draggableExampleSubTitle\":\"Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.\",\"uiElements.tree.loadAsync\":\"Load data asynchronously\",\"uiElements.tree.loadAsyncSubTitle\":\"To load data asynchronously when click to expand a treeNode.\",\"uiElements.tree.searchableExample\":\"Searchable example\",\"uiElements.tree.searchableExampleSubTitle\":\"Searchable Tree\",\"uiElements.tree.treeWithLine\":\"Tree With Line\",\"shuffle.descriptionOne\":\"Netscape 2.0 ships   introducing Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett releases AJAX spec\",\"shuffle.descriptionThree\":\"jQuery 1.0 released\",\"shuffle.descriptionFour\":\"First underscore.js commit\",\"shuffle.descriptionFive\":\"Backbone.js becomes a thing\",\"shuffle.descriptionSix\":\"Angular 1.0 released\",\"shuffle.descriptionSeven\":\"React is open-sourced; developers rejoice\",\"toggle.list\":\"List\",\"toggle.grid\":\"Grid\",\"toggle.ascending\":\"Ascending\",\"toggle.descending\":\"Descending\",\"toggle.shuffle\":\"Shuffle\",\"toggle.rotate\":\"Rotate\",\"toggle.addItem\":\"Add Item\",\"toggle.removeItem\":\"Remove Item\",\"contactlist.searchContacts\":\"Search Contacts\",\"contactlist.addNewContact\":\"Add New Contact\",\"notes.ChoseColor\":\"Choose a color for your note\",\"notes.addNote\":\"Add New Note\",\"page404.title\":\"404\",\"page404.subTitle\":\"Looks like you got lost\",\"page404.description\":\"The page youre looking for doesnt exist or has been moved.\",\"page404.backButton\":\"BACK HOME\",\"page500.title\":\"500\",\"page500.subTitle\":\"Internal Server Error\",\"page500.description\":\"Something went wrong. Please try again later.\",\"page500.backButton\":\"BACK HOME\",\"page.forgetPassTitle\":\"Isomorphic\",\"page.forgetPassSubTitle\":\"Forgot Password?\",\"page.forgetPassDescription\":\"Enter your email and we send you a reset link.\",\"page.sendRequest\":\"Send request\",\"page.resetPassTitle\":\"Isomorphic\",\"page.resetPassSubTitle\":\"Reset Password\",\"page.resetPassDescription\":\"Enter new password and confirm it.\",\"page.resetPassSave\":\"Save\",\"page.signInTitle\":\"Isomorphic\",\"page.signInRememberMe\":\"Remember me\",\"page.signInButton\":\"Sign in\",\"page.signInPreview\":\"username: demo   password: demodemo   or just click on any button.\",\"page.signInFacebook\":\"Sign in with Facebook\",\"page.signInGooglePlus\":\"Sign in with Google Plus\",\"page.signInAuth0\":\"Sign in with Auth0\",\"page.signInMobile\":\"Sign in with Phone\",\"page.signUpMobile\":\"Sign up with Phone\",\"page.signInForgotPass\":\"Forgot password\",\"page.signInCreateAccount\":\"Create an Isomorphoic account\",\"page.signUpTitle\":\"Isomorphic\",\"page.signUpTermsConditions\":\"I agree with terms and condtions\",\"page.signUpButton\":\"Sign Up\",\"page.signUpFacebook\":\"Sign up with Facebook\",\"page.signUpGooglePlus\":\"Sign up with Google Plus\",\"page.signUpAuth0\":\"Sign Up with Auth0\",\"page.signUpAlreadyAccount\":\"Already have an account? Sign in.\",\"widget.reportswidget.label\":\"Income\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"Marketing\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"Consulting\",\"widget.singleprogresswidget4.label\":\"Development\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"Unread Email\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"Image Upload\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"Total Message\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"Orders Post\",\"widget.salewidget1.label\":\"Income\",\"widget.salewidget1.price\":\"$15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget2.label\":\"Income\",\"widget.salewidget2.price\":\"$15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget3.label\":\"Income\",\"widget.salewidget3.price\":\"$15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget4.label\":\"Income\",\"widget.salewidget4.price\":\"$15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"New Messages\",\"widget.cardwidget2.number\":\"100%\",\"widget.cardwidget2.text\":\"Volume\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"Achievement\",\"widget.progresswidget1.label\":\"Download\",\"widget.progresswidget1.details\":\"50% Complete\",\"widget.progresswidget2.label\":\"Support\",\"widget.progresswidget2.details\":\"80% Satisfied Customer\",\"widget.progresswidget3.label\":\"Upload\",\"widget.progresswidget3.details\":\"65% Complete\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"Sr. iOS Developer\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"First Name\",\"checkout.billingform.lastname\":\"Last Name\",\"checkout.billingform.company\":\"Company Name\",\"checkout.billingform.email\":\"Email Address\",\"checkout.billingform.mobile\":\"Mobile No\",\"checkout.billingform.country\":\"Country\",\"checkout.billingform.city\":\"City\",\"checkout.billingform.address\":\"Address\",\"checkout.billingform.addressoptional\":\"Apartment   suite   unit etc. (optional\",\"checkout.billingform.checkbox\":\"Create an account?\",\"antTable.title.image\":\"Image\",\"antTable.title.firstName\":\"First Name\",\"antTable.title.lastName\":\"Last Name\",\"antTable.title.city\":\"City\",\"antTable.title.street\":\"Street\",\"antTable.title.email\":\"Email\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"Basic Map\",\"Map.leaflet.basicMarkerTitle\":\"Basic Map(With Default Marker\",\"Map.leaflet.leafletCustomMarkerTitle\":\"Basic Map(With Custom Icon Marker)\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Basic Map(With Custom Html Marker\",\"Map.leaflet.leafletMarkerClusterTitle\":\"Basic Map(With Marker Cluster\",\"Map.leaflet.leafletRoutingTitle\":\"Basic Map Routing\",\"Component.contacts.noOption\":\"No contact found\",\"email.send\":\"SEND\",\"email.cancel\":\"CANCEL\",\"email.compose\":\"COMPOSE\",\"email.noMessage\":\"Please select a mail to read\",\"themeSwitcher.purchase\":\"PURCHASE NOW\",\"themeSwitcher.settings\":\"Settings\",\"sidebar.selectbox\":\"Select\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"My Profile\",\"topbar.help\":\"Help\",\"topbar.logout\":\"Logout\",\"topbar.viewAll\":\"View All\",\"topbar.viewCart\":\"View Cart\",\"topbar.totalPrice\":\"Total Price\",\"Swiper.basic.basicTitle\":\"Basic Slider\",\"Swiper.bullet.bulletTitle\":\"Bullet Pagination\",\"Swiper.progress.progressTitle\":\"Progress Pagination\",\"Swiper.fraction.fractionTitle\":\"Fraction Pagination\",\"Swiper.numbered.numberedTitle\":\"Numbered Pagination\",\"Swiper.scroll.scrollTitle\":\"Scrollbar\",\"Swiper.verticle.verticleTitle\":\"Verticle Slider\",\"Swiper.multiple.multipleGridTitle\":\"Multiple Grid Slider\",\"Swiper.free.freeTitle\":\"Swiper Free Mode\",\"Swiper.multirow.multirowTitle\":\"Multiple row On View\",\"Swiper.cursor.cursorTitle\":\"Slider with Cursor\",\"Swiper.loop.infiniteTitle\":\"Slider with Infinite Loop\",\"Swiper.wheel.wheelTitle\":\"Slider with Mouse Wheel\",\"Swiper.auto.autoPlayTitle\":\"Slider with Autoplay\",\"Swiper.lazy.lazyTitle\":\"Slider with Lazyload\",\"Swiper.custom.customScrollTitle\":\"Custom view with all Naviation\",\"Swiper.custom.basicNavTitle\":\"Basic Naviation\",\"Swiper.custom.buttonNavTitle\":\"Custom Naviation\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/es_ES.json":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/es_ES.json ***!
  \*********************************************************************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.selectbox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.quiz, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, sidebar.scrumboard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"Control deslizante\",\"sidebar.email\":\"Email\",\"sidebar.chat\":\"Charla\",\"sidebar.ecommerce\":\"Ecommerce\",\"sidebar.shop\":\"tienda\",\"sidebar.cart\":\"Carro\",\"sidebar.checkout\":\"revisa\",\"sidebar.cards\":\"Divertido Tarjetas\",\"sidebar.maps\":\"Mapas\",\"sidebar.firestorecrud\":\"Crud de Firestore\",\"sidebar.firestorecrudarticle\":\"Artículos\",\"sidebar.firestorecrudinvestor\":\"Inversores\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.leafletMap\":\"Mapa del folleto\",\"sidebar.calendar\":\"Calendario\",\"sidebar.notes\":\"Notas\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contactos\",\"sidebar.shuffle\":\"Barajar\",\"sidebar.charts\":\"Gráficos\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"Reaccionar Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"Reaccionar\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Formularios\",\"sidebar.input\":\"Entrada\",\"sidebar.editor\":\"Editor\",\"sidebar.formsWithValidation\":\"Formularios con validación\",\"sidebar.progress\":\"Progreso\",\"sidebar.button\":\"Botón\",\"sidebar.tab\":\"Lengüeta\",\"sidebar.checkbox\":\"Caja\",\"sidebar.radiobox\":\"Radiobox\",\"sidebar.selectbox\":\"Seleccionar\",\"sidebar.transfer\":\"Transferir\",\"sidebar.autocomplete\":\"Autocompletar\",\"sidebar.boxOptions\":\"Opciones de Caja\",\"sidebar.uiElements\":\"Elementos de la interfaz de usuario\",\"sidebar.badge\":\"Distintivo\",\"sidebar.card2\":\"Tarjeta\",\"sidebar.corusel\":\"Parranda\",\"sidebar.collapse\":\"Colapso\",\"sidebar.popover\":\"Acercarse\",\"sidebar.tooltip\":\"Tooltip\",\"sidebar.tag\":\"Etiqueta\",\"sidebar.timeline\":\"Cronograma\",\"sidebar.dropdown\":\"Desplegable\",\"sidebar.pagination\":\"Paginación\",\"sidebar.rating\":\"Clasificación\",\"sidebar.tree\":\"Árbol\",\"sidebar.advancedElements\":\"Elementos avanzados\",\"sidebar.reactDates\":\"Reaccionar fechas\",\"sidebar.codeMirror\":\"Código Espejo\",\"sidebar.uppy\":\"Uppy Uploader\",\"sidebar.dropzone\":\"Zona de descenso\",\"sidebar.feedback\":\"Realimentación\",\"sidebar.alert\":\"Alerta\",\"sidebar.modal\":\"Modal\",\"sidebar.message\":\"Mensaje\",\"sidebar.notification\":\"Notificación\",\"sidebar.popConfirm\":\"Pop confirmar\",\"sidebar.spin\":\"Girar\",\"sidebar.tables\":\"Mesas\",\"sidebar.antTables\":\"Tablas de hormigas\",\"sidebar.pages\":\"Páginas\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Registrarse\",\"sidebar.signUp\":\"Regístrate\",\"sidebar.forgotPw\":\"Olvidé contraseñas\",\"sidebar.resetPw\":\"Restablecer contraseñas\",\"sidebar.invoice\":\"Factura\",\"sidebar.menuLevels\":\"Niveles de menú\",\"sidebar.item1\":\"Artículo 1\",\"sidebar.item2\":\"Artículo 2\",\"sidebar.option1\":\"Opción 1\",\"sidebar.option2\":\"opcion 2\",\"sidebar.option3\":\"Opción 3\",\"sidebar.option4\":\"Opción 4\",\"sidebar.quiz\":\"Quiz\",\"sidebar.blankPage\":\"Página en blanco\",\"sidebar.githubSearch\":\"Github Buscar\",\"sidebar.youtubeSearch\":\"Búsqueda de Youtube\",\"languageSwitcher.label\":\"Cambiar idioma\",\"themeSwitcher\":\"Selector de temas\",\"themeSwitcher.Sidebar\":\"Barra lateral\",\"themeSwitcher.Topbar\":\"Barra superior\",\"themeSwitcher.Background\":\"Fondo\",\"feedback.alert.basicTitle\":\"Título Básico\",\"feedback.alert.successText\":\"Texto de éxito\",\"feedback.alert.infoText\":\"Texto de la información\",\"feedback.alert.warningText\":\"Texto de advertencia\",\"feedback.alert.errorText\":\"Texto de error\",\"feedback.alert.closableAlertType\":\"Tipo de Alerta Closable\",\"feedback.alert.iconAlertType\":\"Tipo de alerta de icono\",\"feedback.alert.iconInfoAlertType\":\"Tipo de Alerta\",\"feedback.alert.successTips\":\"consejos de éxito\",\"feedback.alert.successTipsDescription\":\"Descripción detallada y consejos sobre copywriting exitoso.\",\"feedback.alert.informationTips\":\"Notas informativas\",\"feedback.alert.informationDescription\":\"Descripción adicional e informaciones sobre copywriting.\",\"feedback.alert.warningTips\":\"Advertencia\",\"feedback.alert.warningDescription\":\"Este es un aviso de advertencia sobre copywriting.\",\"feedback.alert.errorTips\":\"Error\",\"feedback.alert.errorDescription\":\"Este es un mensaje de error acerca de copywriting.\",\"feedback.alert.modalTitle\":\"Modal uno con personalizar Footer\",\"feedback.alert.modalSubTitle\":\"Diálogo modal básico.\",\"feedback.alert.successTitle\":\"Éxito\",\"feedback.alert.infoTitle\":\"Información\",\"feedback.alert.errorTitle\":\"Error\",\"feedback.alert.warningTitle\":\"Advertencia\",\"feedback.alert.modalBlockTitle\":\"Modal\",\"feedback.alert.confirmationModalDialogue\":\"Cuadro de diálogo modal de confirmación\",\"feedback.alert.simpleModalDialogue\":\"Diálogo modal simple\",\"feedback.alert.message\":\"Mensaje\",\"feedback.alert.normalMessageTitle\":\"Mensaje normal\",\"feedback.alert.normalMessageSubtitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.displayMessage\":\"Mostrar mensaje normal\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Otros tipos de mensaje\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Mensajes de éxito   error y tipos de advertencia.\",\"feedback.alert.customizeDurationTitle\":\"Personalizar duración\",\"feedback.alert.customizeDurationSubTitle\":\"ustomize la duración de la exhibición del mensaje de 1.5s a 10s por defecto.\",\"feedback.alert.customizeDurationButton\":\"Duración de la pantalla personalizada\",\"feedback.alert.messageLoadingTitle\":\"Mensaje de carga\",\"feedback.alert.messageLoadingSubTitle\":\"Mostrar un indicador de carga global   que se descarta por sí mismo de forma asíncrona.\",\"feedback.alert.displayLoadIndicator\":\"Mostrar un indicador de carga\",\"feedback.alert.notification\":\"Notificación\",\"feedback.alert.notificationBasicTitle\":\"BASIC\",\"feedback.alert.notificationBasicSubTitle\":\"El uso más simple que cierre la caja de notificación después de 4.5s.\",\"feedback.alert.notificationBasicDescription\":\"Abrir el cuadro de notificación\",\"feedback.alert.notificationDurationTitle\":\"Duración después de la cual se cierra el cuadro de notificación\",\"feedback.alert.notificationDurationSubTitle\":\"La duración se puede utilizar para especificar cuánto tiempo permanece abierta la notificación. Una vez transcurrido el tiempo de duración   la notificación se cierra automáticamente. Si no se especifica   el valor predeterminado es 4  5 segundos. Si establece el valor en 0   el cuadro de notificación nunca se cerrará automáticamente.\",\"feedback.alert.notificationwithIconTitle\":\"Notificación con icono\",\"feedback.alert.notificationwithIconSubTitle\":\"Un cuadro de notificación con un icono en el lado izquierdo.\",\"feedback.alert.notificationwithCustomIconTitle\":\"Notificación con icono personalizado\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Notificación con botón personalizado\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.popConfirm\":\"Pop confirmar\",\"feedback.alert.popConfirm.basicTitle\":\"Confirmación básica\",\"feedback.alert.popConfirm.basicSubTitle\":\"El ejemplo básico.\",\"feedback.alert.popConfirm.delete\":\"Borrar\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Notificación con icono personalizado\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"Parte superior\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"Izquierda\",\"feedback.alert.popConfirm.LB\":\"LB\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"Derecha\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"licenciado en Derecho\",\"feedback.alert.popConfirm.bottom\":\"Fondo\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"Girar\",\"feedback.alert.spin.basicTitle\":\"Girar el tamaño\",\"feedback.alert.spin.background\":\"Girar con fondo\",\"feedback.alert.spin.backgroundDescription\":\"Descripción de Spin With Background\",\"feedback.alert.spin.loadingState\":\"Estado de carga \",\"feedback.alert.spin.alertTitle\":\"Título del mensaje de alerta\",\"feedback.alert.spin.alertDescription\":\"Más detalles sobre el contexto de esta alerta.\",\"forms.input.header\":\"Entrada\",\"forms.input.basicTitle\":\"Uso básico\",\"forms.input.basicSubTitle\":\"Ejemplo de uso básico.\",\"forms.input.variationsTitle\":\"Tres tamaños de entrada\",\"forms.input.variationsSubtitle\":\"Hay tres tamaños de un cuadro de entrada  grande (42px     predeterminado (35px   y pequeño (30px  . Nota  Dentro de los formularios   sólo se utiliza el tamaño grande.\",\"forms.input.groupTitle\":\"Grupo de entrada\",\"forms.input.groupSubTitle\":\"Ejemplo de Input.Group Nota  No necesita Col para controlar el ancho en el modo compacto.\",\"forms.input.autoSizingTitle\":\"Autosizing la altura para ajustar el contenido\",\"forms.input.autoSizingSubTitle\":\"prop de autosize para un tipo de entrada textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar un objeto de opciones al tamaño automático para especificar el número mínimo y máximo de líneas que la zona de texto ajustará automáticamente.\",\"forms.input.prePostTabTitle\":\"Pestaña Pre    Post\",\"forms.input.prePostTabSubTitle\":\"El uso de pre & amp; post tabs ejemplo ..\",\"forms.input.textAreaTitle\":\"Área de texto\",\"forms.input.textAreaSubTitle\":\"Para casos de entrada de usuario multi-línea   se puede utilizar una entrada cuyo tipo prop tiene el valor de textarea.\",\"forms.input.searchTitle\":\"Buscar\",\"forms.input.searchSubTitle\":\"Ejemplo de creación de un cuadro de búsqueda agrupando una entrada estándar con un botón de búsqueda\",\"forms.editor.header\":\"Editor\",\"forms.formsWithValidation.header\":\"Formulario de validación personalizado\",\"forms.formsWithValidation.failLabel\":\"Fallar\",\"forms.formsWithValidation.failHelp\":\"Debe ser la combinación de números & amp; alfabetos\",\"forms.formsWithValidation.warningLabel\":\"Advertencia\",\"forms.formsWithValidation.ValidatingLabel\":\"Validando\",\"forms.formsWithValidation.ValidatingHelp\":\"La información está siendo validada ...\",\"forms.formsWithValidation.SuccessLabel\":\"Éxito\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Advertencia\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Fallar\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Debe ser la combinación de números & amp; alfabetos\",\"forms.progressBar.header\":\"Barra de progreso\",\"forms.progressBar.standardTitle\":\"Barra de progreso\",\"forms.progressBar.standardSubTitle\":\"Una barra de progreso estándar.\",\"forms.progressBar.circularTitle\":\"Barra de progreso circular\",\"forms.progressBar.circularSubTitle\":\"Una barra de progreso circular.\",\"forms.progressBar.miniTitle\":\"Barra de progreso de tamaño mini\",\"forms.progressBar.miniSubTitle\":\"Adecuado para un área estrecha.\",\"forms.progressBar.miniCircularTitle\":\"Una barra de progreso circular más pequeña.\",\"forms.progressBar.dynamicCircularTitle\":\"Barra de progreso circular dinámica\",\"forms.progressBar.dynamicCircularSubTitle\":\"Una barra de progreso dinámica es mejor.\",\"forms.progressBar.customTextTitle\":\"Formato de texto personalizado\",\"forms.progressBar.customTextSubTitle\":\"Puede personalizar el formato de texto configurando el formato.\",\"forms.progressBar.dashboardTitle\":\"Tablero\",\"forms.progressBar.dashboardSubTitle\":\"Un estilo de progreso en el tablero de instrumentos.\",\"forms.button.header\":\"Botones\",\"forms.button.simpleButton\":\"Tipo de botón\",\"forms.button.iconButton\":\"Icono de botón\",\"forms.button.simpleButtonPrimaryText\":\"Primario\",\"forms.button.simpleButtonDefaultText\":\"Defecto\",\"forms.button.simpleButtonDashedText\":\"Dañado\",\"forms.button.simpleButtonDangerText\":\"Peligro\",\"forms.button.iconPrimaryButton\":\"buscar\",\"forms.button.iconSimpleButton\":\"buscar\",\"forms.button.iconCirculerButton\":\"buscar\",\"forms.button.iconDashedButton\":\"buscar\",\"forms.button.SizedButton\":\"Tamaño del botón\",\"forms.button.DisabledButton\":\"Botón desactivado\",\"forms.button.LoadingButton\":\"Botón de carga\",\"forms.button.MultipleButton\":\"Botón múltiple\",\"forms.button.groupButton\":\"Grupo de botones\",\"forms.Tabs.header\":\"Pestañas\",\"forms.Tabs.simpleTabTitle\":\"buscar\",\"forms.Tabs.simpleTabSubTitle\":\"Pestañas inhabilitadas\",\"forms.Tabs.iconTabTitle\":\"Icono de las pestañas\",\"forms.Tabs.miniTabTitle\":\"Mini pestañas\",\"forms.Tabs.extraTabTitle\":\"Pestañas de acción adicionales\",\"forms.Tabs.TabpositionTitle\":\"Posición\",\"forms.Tabs.TabpositionSubTitle\":\"Posición de las pestañas  izquierda   derecha   arriba o abajo\",\"forms.Tabs.cardTitle\":\"Fichas de tipo de tarjeta\",\"forms.Tabs.editableTitle\":\"Agregar y cerrar pestañas\",\"forms.Tabs.verticalTitle\":\"Fichas de tipo vertical\",\"forms.Tabs.basicTitle\":\"Pestañas básicas\",\"forms.checkbox.header\":\"Caja\",\"forms.checkbox.basicTitle\":\"Casilla de verificación básica\",\"forms.checkbox.basicSubTitle\":\"Uso básico de la casilla de verificación.\",\"forms.checkbox.groupTitle\":\"Grupo de casillas de verificación\",\"forms.checkbox.groupSubTitle\":\"Genera un grupo de casillas de verificación de una matriz. Utilizar desactivado para deshabilitar una casilla de verificación.\",\"forms.checkbox.groupCheckTitle\":\"Grupo de casillas de verificación\",\"forms.checkbox.groupCheckSubTitle\":\"Genera un grupo de casillas de verificación de una matriz. Utilizar desactivado para deshabilitar una casilla de verificación.\",\"forms.radio.header\":\"Radio\",\"forms.radio.simpleTitle\":\"Radio básica\",\"forms.radio.simpleSubTitle\":\"El uso más simple. Utilizar desactivado para desactivar una radio.\",\"forms.radio.groupTitle\":\"Grupo de radio vertical\",\"forms.radio.groupSubTitle\":\"Vertical RadioGroup   con más radios.\",\"forms.radio.groupSecondTitle\":\"Grupo de radio\",\"forms.radio.groupSecondSubTitle\":\"Un grupo de componentes de radio.\",\"forms.radio.groupThirdTitle\":\"Grupo de radio\",\"forms.radio.groupThirdSubTitle\":\"Un grupo de componentes de radio.\",\"forms.transfer.header\":\"Transferir\",\"forms.transfer.SubTitle\":\"Transferir con un cuadro de búsqueda.\",\"forms.transfer.Title\":\"Buscar\",\"forms.autocomplete.header\":\"Autocompletar\",\"forms.autocomplete.simpleTitle\":\"Personalizado\",\"forms.autocomplete.simpleSubTitle\":\"Puede pasar AutoComplete.Option como hijos de Autocompletar   en lugar de utilizar dataSource\",\"forms.autocomplete.customizeTitle\":\"Personalizar el componente de entrada\",\"forms.autocomplete.customizeSubTitle\":\"Personalizar el componente de entrada\",\"uiElements.badge.badge\":\"Distintivo\",\"uiElements.badge.basicExample\":\"Ejemplo Básico\",\"uiElements.badge.basicExampleSubTitle\":\"Uso más simple. La insignia se ocultará cuando count sea 0   pero podemos usar showZero para mostrarlo.\",\"uiElements.badge.overflowCount\":\"Cuenta de desbordamiento\",\"uiElements.badge.overflowCountSubTitle\":\"OverflowCount se muestra cuando count es mayor que overflowCount. El valor predeterminado de overflowCount es 99.\",\"uiElements.badge.status\":\"Estado\",\"uiElements.badge.statusSubTitle\":\"Insignia autónoma con estado.\",\"uiElements.badge.success\":\"Éxito\",\"uiElements.badge.error\":\"Error\",\"uiElements.badge.default\":\"Defecto\",\"uiElements.badge.processing\":\"Tratamiento\",\"uiElements.badge.warning\":\"Advertencia\",\"uiElements.badge.redBadge\":\"Insignia roja\",\"uiElements.badge.redBadgeSubTitle\":\"Esto simplemente mostrará una insignia roja   sin un conteo específico.\",\"uiElements.badge.linkSomething\":\"Enlace algo\",\"uiElements.cards.cards\":\"Divertido Tarjetas\",\"uiElements.cards.basicCard\":\"Tarjeta básica\",\"uiElements.cards.basicCardSubTitle\":\"Una tarjeta básica que contiene un título   contenido y un contenido de esquina adicional.\",\"uiElements.cards.more\":\"Más\",\"uiElements.cards.cardTitle\":\"Título de la tarjeta\",\"uiElements.cards.cardContent\":\"Contenido de la tarjeta\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore y dolore magna aliqua. Ut enim ad minim veniam   quis nostrud ejercicio ullamco laboris nisi ut aliquip ex y commodo consequat.\",\"uiElements.cards.noBorder\":\"Sin bordes\",\"uiElements.cards.noBorderSubTitle\":\"Una tarjeta sin fronteras sobre un fondo gris.\",\"uiElements.cards.gridCard\":\"Tarjeta de red\",\"uiElements.cards.gridCardSubTitle\":\"Las tarjetas suelen cooperar con el diseño de la cuadrícula en la página de vista general.\",\"uiElements.cards.loadingCard\":\"Carga de la tarjeta\",\"uiElements.cards.loadingCardSubTitle\":\"Muestra un indicador de carga mientras se está recuperando el contenido de la tarjeta.\",\"uiElements.cards.whateverContent\":\"Cualquier contenido\",\"uiElements.cards.customizedContentTitle\":\"Contenido personalizado\",\"uiElements.cards.customizedContent\":\"Muestra un indicador de carga mientras se está recuperando el contenido de la tarjeta.\",\"uiElements.cards.europeStreetBeat\":\"Europa Street beat\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"Parranda\",\"uiElements.carousel.verticalCarousel\":\"Carrusel vertical\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Paginación vertical. use   vertical = true  \",\"uiElements.carousel.basicCarousel\":\"Carrusel básico\",\"uiElements.carousel.basicCarouselSubTitle\":\"Uso básico\",\"uiElements.carousel.fadeInTransition\":\"Fade In Transition\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Las diapositivas utilizan el fundido para la transición.   effect = fade  \",\"uiElements.carousel.scrollAutomatically\":\"Desplazarse automáticamente\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Tiempo de desplazamiento a la siguiente tarjeta    imagen. auto reproducción\",\"uiElements.collapse.collapse\":\"Colapso\",\"uiElements.collapse.collapseSubTitle\":\"Se puede ampliar más de un panel a la vez   el primer panel se inicializa para estar activo en este caso. use   defaultActiveKey =   [keyNum]    \",\"uiElements.collapse.text\":\"Un perro es un tipo de animal domesticado. Conocido por su lealtad y fidelidad   se puede encontrar como un invitado de bienvenida en muchos hogares de todo el mundo.\",\"uiElements.collapse.headerOne\":\"Este es el encabezado del panel 1\",\"uiElements.collapse.headerTwo\":\"Se trata de la cabecera del panel 2\",\"uiElements.collapse.headerThree\":\"Este es el encabezado del panel 3\",\"uiElements.collapse.headerNested\":\"Éste es panel del nido del panel\",\"uiElements.collapse.nestedExample\":\"Ejemplo anidado\",\"uiElements.collapse.nestedExampleSubTitle\":\"Collapse está anidado dentro del Collapse.\",\"uiElements.collapse.borderlessExample\":\"Ejemplo sin márgenes\",\"uiElements.collapse.borderlessExampleSubTitle\":\"Un estilo sin fronteras de Collapse. use   bordered =   false    \",\"uiElements.collapse.accordion\":\"Acordeón\",\"uiElements.collapse.accordionSubTitle\":\"Acordeón   sólo se puede ampliar un panel cada vez. El primer panel se ampliará de forma predeterminada. utilizar acordeón\",\"uiElements.popover.popover\":\"Popover\",\"uiElements.popover.basicExample\":\"Ejemplo Básico\",\"uiElements.popover.basicExampleSubTitle\":\"El ejemplo más básico. El tamaño de la capa flotante depende de la región del contenido.\",\"uiElements.popover.hoverMe\":\"Mírame\",\"uiElements.popover.title\":\"Título\",\"uiElements.popover.titleTrigger\":\"Tres maneras de activar\",\"uiElements.popover.titleTriggerSubTitle\":\"El ratón para hacer clic   enfocar y moverse.\",\"uiElements.popover.focusMe\":\"Enfócame\",\"uiElements.popover.clickMe\":\"Haz click en mi\",\"uiElements.popover.placement\":\"Colocación\",\"uiElements.popover.placementSubTitle\":\"Hay 12 opciones de colocación disponibles.\",\"uiElements.popover.top\":\"Parte superior\",\"uiElements.popover.topLeft\":\"Arriba a la izquierda\",\"uiElements.popover.topRight\":\"Parte superior derecha\",\"uiElements.popover.leftTop\":\"Parte superior izquierda\",\"uiElements.popover.left\":\"Izquierda\",\"uiElements.popover.leftBottom\":\"Abajo a la izquierda\",\"uiElements.popover.rightTop\":\"Justo arriba\",\"uiElements.popover.right\":\"Derecha\",\"uiElements.popover.bottom\":\"Fondo\",\"uiElements.popover.bottomLeft\":\"Abajo Izquierda\",\"uiElements.popover.bottomRight\":\"Abajo a la derecha\",\"uiElements.popover.boxTitle\":\"Control del cierre del diálogo\",\"uiElements.popover.boxSubTitle\":\"Utilice el apoyo visible para controlar la visualización de la tarjeta.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"LB\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"licenciado en Derecho\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"Cerca\",\"uiElements.tooltip.tooltip\":\"Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Contenido de información sobre herramientas\",\"uiElements.tooltip.basicExample\":\"Ejemplo Básico\",\"uiElements.tooltip.basicExampleSubTitle\":\"El uso más simple.\",\"uiElements.tooltip.placementTitle\":\"Colocación\",\"uiElements.tooltip.placementSubTitle\":\"La herramienta tiene 12 opciones de ubicación.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"LB\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"licenciado en Derecho\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"Fondo\",\"uiElements.tooltip.right\":\"Derecha\",\"uiElements.tooltip.left\":\"Izquierda\",\"uiElements.tooltip.top\":\"Parte superior\",\"uiElements.tooltip.tooltipContentSpan\":\"La información sobre herramientas se mostrará cuando se introduzca el ratón.\",\"uiElements.tooltip.contentSpan\":\"Contenido de información sobre herramientas\",\"uiElements.tags.tags\":\"Etiquetas\",\"uiElements.tags.basicExample\":\"Ejemplo Básico\",\"uiElements.tags.basicExampleSubTitle\":\"Uso de la etiqueta básica   y podría ser cerrable por la propiedad cerrable del sistema. La etiqueta Closable soporta eventos onClose afterClose.\",\"uiElements.tags.tagOne\":\"Etiqueta 1\",\"uiElements.tags.tagTwo\":\"Etiqueta 2\",\"uiElements.tags.link\":\"Enlazar\",\"uiElements.tags.preventDefault\":\"Prevenga el Incumplimiento\",\"uiElements.tags.colorfulTag\":\"Etiqueta colorida\",\"uiElements.tags.hotTags\":\"Etiquetas populares\",\"uiElements.tags.hotTagsSubTitle\":\"Seleccione sus temas favoritos.\",\"uiElements.tags.hots\":\"Hots \",\"uiElements.tags.addRemoveDynamically\":\"Agregar y eliminar dinámicamente\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"Generando un conjunto de etiquetas por matriz   puede agregar y quitar dinámicamente. Se basa en el evento afterClose   que se activará mientras finaliza la animación de cierre.\",\"uiElements.tags.newTag\":\"+ Nueva etiqueta\",\"uiElements.timeline.timeline\":\"Cronograma\",\"uiElements.timeline.basicExample\":\"Ejemplo Básico\",\"uiElements.timeline.basicTimeline\":\"Línea de tiempo básica\",\"uiElements.timeline.lastNode\":\"Ultimo nodo\",\"uiElements.timeline.lastNodeContent\":\"Cuando la línea de tiempo está incompleta y en curso   poner un nodo fantasma por fin. set   pending =   true     o   pending =   un elemento React    \",\"uiElements.timeline.seeMore\":\"Ver más\",\"uiElements.timeline.custom\":\"Personalizado\",\"uiElements.timeline.customContent\":\"Establezca un nodo como un icono u otro elemento personalizado.\",\"uiElements.timeline.colorExample\":\"Ejemplo de color\",\"uiElements.timeline.colorExampleContent\":\"Establecer el color de los círculos. verde significa estado completado o de éxito   rojo significa advertencia o error y azul significa estado en curso u otro estado predeterminado.\",\"uiElements.timeline.createServiceSite\":\"Crear un sitio de servicios 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Resolver problemas de red iniciales 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Problemas de red resueltos 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Pruebas técnicas 2015-09-01\",\"uiElements.dropdown.dropdown\":\"Desplegable\",\"uiElements.dropdown.hoverDropdown\":\"Desplácese\",\"uiElements.dropdown.hoverMe\":\"Mírame\",\"uiElements.dropdown.hoverPlacement\":\"Despliegue de colocación de cola\",\"uiElements.dropdown.hoverDisableLink\":\"Desplazamiento con desplegable\",\"uiElements.dropdown.clickedDropdown\":\"Desplegable pulsado\",\"uiElements.dropdown.buttonDropdown\":\"Botón con menú desplegable\",\"uiElements.pagination.pagination\":\"Paginación\",\"uiElements.pagination.basic\":\"BASIC\",\"uiElements.pagination.more\":\"Más\",\"uiElements.pagination.changer\":\"Cambiador\",\"uiElements.pagination.jumper\":\"Saltador\",\"uiElements.pagination.miniSize\":\"Tamaño mini\",\"uiElements.pagination.simpleMode\":\"Modo simple\",\"uiElements.pagination.controlled\":\"Revisado\",\"uiElements.pagination.totalNumber\":\"Numero total\",\"uiElements.rating.rating\":\"Clasificación\",\"uiElements.rating.basicExample\":\"Ejemplo Básico\",\"uiElements.rating.basicExampleSubTitle\":\"El uso más simple.\",\"uiElements.rating.halfStar\":\"Media estrella\",\"uiElements.rating.halfStarSubTitle\":\"Soporte de media estrella.\",\"uiElements.rating.showCopywriting\":\"Mostrar copywriting\",\"uiElements.rating.showCopywritingSubTitle\":\"Añadir copywriting en los componentes de la tarifa.\",\"uiElements.rating.readOnly\":\"Solo lectura\",\"uiElements.rating.readOnlySubTitle\":\"Sólo lectura   no puede utilizar el ratón para interactuar.\",\"uiElements.rating.otherCharacter\":\"Otro Personaje\",\"uiElements.rating.otherCharacterSubTitle\":\"Reemplace la estrella predeterminada por otro carácter como alfabeto   dígito   iconfonte o incluso palabra china.\",\"uiElements.tree.tree\":\"Árbol\",\"uiElements.tree.basicExample\":\"Ejemplo básico\",\"uiElements.tree.basicExampleSubTitle\":\"El uso más básico   te dirá cómo usar checkable   seleccionable   disabled   defaultExpandKeys   y etc.\",\"uiElements.tree.basicControlledExample\":\"Ejemplo controlado básico\",\"uiElements.tree.basicControlledExampleSubTitle\":\"ejemplo controlado básico\",\"uiElements.tree.draggableExample\":\"Ejemplo arrastrable\",\"uiElements.tree.draggableExampleSubTitle\":\"Arrastre treeNode para insertar después del otro treeNode o inserte en el otro TreeNode padre.\",\"uiElements.tree.loadAsync\":\"Cargar datos asincrónicamente\",\"uiElements.tree.loadAsyncSubTitle\":\"Para cargar datos asincrónicamente cuando haga clic para expandir un treeNode.\",\"uiElements.tree.searchableExample\":\"Ejemplo de búsqueda\",\"uiElements.tree.searchableExampleSubTitle\":\"Árbol de búsqueda\",\"uiElements.tree.treeWithLine\":\"Árbol con línea\",\"shuffle.descriptionOne\":\"Netscape 2.0 se expande   introduciendo Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett lanza la especificación AJAX\",\"shuffle.descriptionThree\":\"jQuery 1.0 publicado\",\"shuffle.descriptionFour\":\"Primero underscore.js commit\",\"shuffle.descriptionFive\":\"Backbone.js se convierte en una cosa\",\"shuffle.descriptionSix\":\"Angular 1.0 liberado\",\"shuffle.descriptionSeven\":\"Reaccionar es de código abierto; los desarrolladores se regocijan\",\"toggle.list\":\"Lista\",\"toggle.grid\":\"Cuadrícula\",\"toggle.ascending\":\"Ascendente\",\"toggle.descending\":\"Descendente\",\"toggle.shuffle\":\"Barajar\",\"toggle.rotate\":\"Girar\",\"toggle.addItem\":\"Añadir artículo\",\"toggle.removeItem\":\"Remover el artículo\",\"contactlist.searchContacts\":\"Buscar contactos\",\"contactlist.addNewContact\":\"Añadir nuevo contacto\",\"notes.ChoseColor\":\"Elige un color para tu nota\",\"notes.addNote\":\"Añadir nueva nota\",\"page404.title\":\"404\",\"page404.subTitle\":\"Parece que te has perdido\",\"page404.description\":\"La página que estás buscando no existe o se ha movido.\",\"page404.backButton\":\"VOLVER A LA CASA\",\"page500.title\":\"500\",\"page500.subTitle\":\"error de servidor interno\",\"page500.description\":\"Algo salió mal. Por favor   inténtelo de nuevo.\",\"page500.backButton\":\"VOLVER A LA CASA\",\"page.forgetPassTitle\":\"Isomórfico\",\"page.forgetPassSubTitle\":\"¿Se te olvidó tu contraseña?\",\"page.forgetPassDescription\":\"Introduzca su correo electrónico y le enviaremos un enlace de restablecimiento.\",\"page.sendRequest\":\"Enviar petición\",\"page.resetPassTitle\":\"Isomórfico\",\"page.resetPassSubTitle\":\"Restablecer la contraseña\",\"page.resetPassDescription\":\"Introduzca una nueva contraseña y confirme.\",\"page.resetPassSave\":\"Salvar\",\"page.signInTitle\":\"Isomórfico\",\"page.signInRememberMe\":\"Recuérdame\",\"page.signInButton\":\"Registrarse\",\"page.signInPreview\":\"nombre de usuario  demo   contraseña  demodemo   o simplemente haga clic en cualquier botón.\",\"page.signInFacebook\":\"Iniciar sesión usando Facebook\",\"page.signInGooglePlus\":\"Acceder con Google Plus\",\"page.signInAuth0\":\"Iniciar sesión con Auth0\",\"page.signInForgotPass\":\"Se te olvidó tu contraseña\",\"page.signInCreateAccount\":\"Crear una cuenta Isomorphoic\",\"page.signUpTitle\":\"Isomórfico\",\"page.signUpTermsConditions\":\"Estoy de acuerdo con los términos y condiciones\",\"page.signUpButton\":\"Regístrate\",\"page.signUpFacebook\":\"Registrate con Facebook\",\"page.signUpGooglePlus\":\"Regístrese con Google Plus\",\"page.signUpAuth0\":\"Regístrese con Auth0\",\"page.signUpAlreadyAccount\":\"¿Ya tienes una cuenta? Registrarse.\",\"widget.reportswidget.label\":\"Ingresos\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"Márketing\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"Consultante\",\"widget.singleprogresswidget4.label\":\"Desarrollo\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"Correo electrónico no leído\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"Subida de imagen\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"Total de mensajes\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"Pedidos\",\"widget.salewidget1.label\":\"Ingresos\",\"widget.salewidget1.price\":\"15000 $\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget2.label\":\"Ingresos\",\"widget.salewidget2.price\":\"15000 $\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget3.label\":\"Ingresos\",\"widget.salewidget3.price\":\"15000 $\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget4.label\":\"Ingresos\",\"widget.salewidget4.price\":\"15000 $\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"Nuevos mensajes\",\"widget.cardwidget2.number\":\"100%\",\"widget.cardwidget2.text\":\"Volumen\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"Logro\",\"widget.progresswidget1.label\":\"Descargar\",\"widget.progresswidget1.details\":\"50% Completo\",\"widget.progresswidget2.label\":\"Apoyo\",\"widget.progresswidget2.details\":\"80% de clientes satisfechos\",\"widget.progresswidget3.label\":\"Subir\",\"widget.progresswidget3.details\":\"65% Completo\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"Sr. Desarrollador iOS\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"Nombre de pila\",\"checkout.billingform.lastname\":\"Apellido\",\"checkout.billingform.company\":\"nombre de empresa\",\"checkout.billingform.email\":\"Dirección de correo electrónico\",\"checkout.billingform.mobile\":\"No móviles\",\"checkout.billingform.country\":\"País\",\"checkout.billingform.city\":\"Ciudad\",\"checkout.billingform.address\":\"Dirección\",\"checkout.billingform.addressoptional\":\"Apartamento   suite   unidad   etc. (opcional  \",\"checkout.billingform.checkbox\":\"¿Crea una cuenta?\",\"antTable.title.image\":\"Imagen\",\"antTable.title.firstName\":\"Nombre de pila\",\"antTable.title.lastName\":\"Apellido\",\"antTable.title.city\":\"Ciudad\",\"antTable.title.street\":\"Calle\",\"antTable.title.email\":\"Email\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"Mapa básico\",\"Map.leaflet.basicMarkerTitle\":\"Mapa básico (con marcador predeterminado  \",\"Map.leaflet.leafletCustomMarkerTitle\":\"Mapa básico (con marcador de icono personalizado  \",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Mapa básico (con marcador HTML personalizado  \",\"Map.leaflet.leafletMarkerClusterTitle\":\"Mapa básico (con grupo de marcadores  \",\"Map.leaflet.leafletRoutingTitle\":\"Enrutamiento básico del mapa\",\"Component.contacts.noOption\":\"No se ha encontrado ningún contacto\",\"email.send\":\"ENVIAR\",\"email.cancel\":\"CANCELAR\",\"email.compose\":\"COMPONER\",\"email.noMessage\":\"Por favor seleccione un correo para leer\",\"themeSwitcher.purchase\":\"Compra ahora\",\"themeSwitcher.settings\":\"AJUSTES\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"Mi perfil\",\"topbar.help\":\"Ayuda\",\"topbar.logout\":\"Cerrar sesión\",\"topbar.viewAll\":\"Ver todo\",\"topbar.viewCart\":\"Ver carro\",\"topbar.totalPrice\":\"Precio total\",\"sidebar.scrumboard\":\"tablero de scrum\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/fr_FR.json":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/fr_FR.json ***!
  \*********************************************************************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.googleMap, sidebar.leafletMap, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, sidebar.scrumboard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"Curseur\",\"sidebar.email\":\"Email\",\"sidebar.chat\":\"Bavarder\",\"sidebar.ecommerce\":\"Commerce électronique\",\"sidebar.shop\":\"tienda\",\"sidebar.cart\":\"Carro\",\"sidebar.checkout\":\"revisa\",\"sidebar.cards\":\"Divertido Tarjetas\",\"sidebar.maps\":\"Mapas\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.leafletMap\":\"Mapa del folleto\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"Des articles\",\"sidebar.firestorecrudinvestor\":\"Investisseurs\",\"sidebar.calendar\":\"Calendario\",\"sidebar.notes\":\"Notas\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contactos\",\"sidebar.shuffle\":\"Barajar\",\"sidebar.charts\":\"Gráficos\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"Reaccionar Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"Reaccionar\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Formularios\",\"sidebar.input\":\"Entrada\",\"sidebar.editor\":\"Editor\",\"sidebar.formsWithValidation\":\"Formularios con validación\",\"sidebar.progress\":\"Progreso\",\"sidebar.button\":\"Botón\",\"sidebar.tab\":\"Lengüeta\",\"sidebar.checkbox\":\"Caja\",\"sidebar.radiobox\":\"Radiobox\",\"sidebar.transfer\":\"Transferir\",\"sidebar.autocomplete\":\"Autocompletar\",\"sidebar.boxOptions\":\"Opciones de Caja\",\"sidebar.uiElements\":\"Elementos de la interfaz de usuario\",\"sidebar.badge\":\"Distintivo\",\"sidebar.card2\":\"Tarjeta\",\"sidebar.corusel\":\"Parranda\",\"sidebar.collapse\":\"Colapso\",\"sidebar.popover\":\"Acercarse\",\"sidebar.tooltip\":\"Tooltip\",\"sidebar.tag\":\"Etiqueta\",\"sidebar.timeline\":\"Cronograma\",\"sidebar.dropdown\":\"Desplegable\",\"sidebar.pagination\":\"Paginación\",\"sidebar.rating\":\"Clasificación\",\"sidebar.tree\":\"Árbol\",\"sidebar.advancedElements\":\"Elementos avanzados\",\"sidebar.reactDates\":\"Reaccionar fechas\",\"sidebar.codeMirror\":\"Código Espejo\",\"sidebar.uppy\":\"Uppy Uploader\",\"sidebar.dropzone\":\"Zona de descenso\",\"sidebar.feedback\":\"Realimentación\",\"sidebar.alert\":\"Alerta\",\"sidebar.modal\":\"Modal\",\"sidebar.message\":\"Mensaje\",\"sidebar.notification\":\"Notificación\",\"sidebar.popConfirm\":\"Pop confirmar\",\"sidebar.spin\":\"Girar\",\"sidebar.tables\":\"Mesas\",\"sidebar.antTables\":\"Tablas de hormigas\",\"sidebar.pages\":\"Páginas\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Registrarse\",\"sidebar.signUp\":\"Regístrate\",\"sidebar.forgotPw\":\"Olvidé contraseñas\",\"sidebar.resetPw\":\"Restablecer contraseñas\",\"sidebar.invoice\":\"Factura\",\"sidebar.menuLevels\":\"Niveles de menú\",\"sidebar.item1\":\"Artículo 1\",\"sidebar.item2\":\"Artículo 2\",\"sidebar.option1\":\"Opción 1\",\"sidebar.option2\":\"opcion 2\",\"sidebar.option3\":\"Opción 3\",\"sidebar.option4\":\"Opción 4\",\"sidebar.blankPage\":\"Página en blanco\",\"sidebar.githubSearch\":\"Github Buscar\",\"sidebar.youtubeSearch\":\"Búsqueda de Youtube\",\"languageSwitcher.label\":\"Cambiar idioma\",\"themeSwitcher\":\"Selector de temas\",\"themeSwitcher.Sidebar\":\"Barra lateral\",\"themeSwitcher.Topbar\":\"Barra superior\",\"themeSwitcher.Background\":\"Fondo\",\"feedback.alert.basicTitle\":\"Título Básico\",\"feedback.alert.successText\":\"Texto de éxito\",\"feedback.alert.infoText\":\"Texto de la información\",\"feedback.alert.warningText\":\"Texto de advertencia\",\"feedback.alert.errorText\":\"Texto de error\",\"feedback.alert.closableAlertType\":\"Tipo de Alerta Closable\",\"feedback.alert.iconAlertType\":\"Tipo de alerta de icono\",\"feedback.alert.iconInfoAlertType\":\"Tipo de Alerta\",\"feedback.alert.successTips\":\"consejos de éxito\",\"feedback.alert.successTipsDescription\":\"Descripción detallada y consejos sobre copywriting exitoso.\",\"feedback.alert.informationTips\":\"Notas informativas\",\"feedback.alert.informationDescription\":\"Descripción adicional e informaciones sobre copywriting.\",\"feedback.alert.warningTips\":\"Advertencia\",\"feedback.alert.warningDescription\":\"Este es un aviso de advertencia sobre copywriting.\",\"feedback.alert.errorTips\":\"Error\",\"feedback.alert.errorDescription\":\"Este es un mensaje de error acerca de copywriting.\",\"feedback.alert.modalTitle\":\"Modal uno con personalizar Footer\",\"feedback.alert.modalSubTitle\":\"Diálogo modal básico.\",\"feedback.alert.successTitle\":\"Éxito\",\"feedback.alert.infoTitle\":\"Información\",\"feedback.alert.errorTitle\":\"Error\",\"feedback.alert.warningTitle\":\"Advertencia\",\"feedback.alert.modalBlockTitle\":\"Modal\",\"feedback.alert.confirmationModalDialogue\":\"Cuadro de diálogo modal de confirmación\",\"feedback.alert.simpleModalDialogue\":\"Diálogo modal simple\",\"feedback.alert.message\":\"Mensaje\",\"feedback.alert.normalMessageTitle\":\"Mensaje normal\",\"feedback.alert.normalMessageSubtitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.displayMessage\":\"Mostrar mensaje normal\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Otros tipos de mensaje\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Mensajes de éxito   error y tipos de advertencia.\",\"feedback.alert.customizeDurationTitle\":\"Personalizar duración\",\"feedback.alert.customizeDurationSubTitle\":\"ustomize la duración de la exhibición del mensaje de 1.5s a 10s por defecto.\",\"feedback.alert.customizeDurationButton\":\"Duración de la pantalla personalizada\",\"feedback.alert.messageLoadingTitle\":\"Mensaje de carga\",\"feedback.alert.messageLoadingSubTitle\":\"Mostrar un indicador de carga global   que se descarta por sí mismo de forma asíncrona.\",\"feedback.alert.displayLoadIndicator\":\"Mostrar un indicador de carga\",\"feedback.alert.notification\":\"Notificación\",\"feedback.alert.notificationBasicTitle\":\"BASIC\",\"feedback.alert.notificationBasicSubTitle\":\"El uso más simple que cierre la caja de notificación después de 4.5s.\",\"feedback.alert.notificationBasicDescription\":\"Abrir el cuadro de notificación\",\"feedback.alert.notificationDurationTitle\":\"Duración después de la cual se cierra el cuadro de notificación\",\"feedback.alert.notificationDurationSubTitle\":\"La duración se puede utilizar para especificar cuánto tiempo permanece abierta la notificación. Una vez transcurrido el tiempo de duración   la notificación se cierra automáticamente. Si no se especifica   el valor predeterminado es 4  5 segundos. Si establece el valor en 0   el cuadro de notificación nunca se cerrará automáticamente.\",\"feedback.alert.notificationwithIconTitle\":\"Notificación con icono\",\"feedback.alert.notificationwithIconSubTitle\":\"Un cuadro de notificación con un icono en el lado izquierdo.\",\"feedback.alert.notificationwithCustomIconTitle\":\"Notificación con icono personalizado\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Notificación con botón personalizado\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.popConfirm\":\"Pop confirmar\",\"feedback.alert.popConfirm.basicTitle\":\"Confirmación básica\",\"feedback.alert.popConfirm.basicSubTitle\":\"El ejemplo básico.\",\"feedback.alert.popConfirm.delete\":\"Borrar\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Notificación con icono personalizado\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"Mensajes normales como retroalimentación.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"Parte superior\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"Izquierda\",\"feedback.alert.popConfirm.LB\":\"LB\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"Derecha\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"licenciado en Derecho\",\"feedback.alert.popConfirm.bottom\":\"Fondo\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"Girar\",\"feedback.alert.spin.basicTitle\":\"Girar el tamaño\",\"feedback.alert.spin.background\":\"Girar con fondo\",\"feedback.alert.spin.backgroundDescription\":\"Descripción de Spin With Background\",\"feedback.alert.spin.loadingState\":\"Estado de carga\",\"feedback.alert.spin.alertTitle\":\"Título del mensaje de alerta\",\"feedback.alert.spin.alertDescription\":\"Más detalles sobre el contexto de esta alerta.\",\"forms.input.header\":\"Entrada\",\"forms.input.basicTitle\":\"Uso básico\",\"forms.input.basicSubTitle\":\"Ejemplo de uso básico.\",\"forms.input.variationsTitle\":\"Tres tamaños de entrada\",\"forms.input.variationsSubtitle\":\"Hay tres tamaños de un cuadro de entrada  grande (42px     predeterminado (35px   y pequeño (30px  . Nota  Dentro de los formularios   sólo se utiliza el tamaño grande.\",\"forms.input.groupTitle\":\"Grupo de entrada\",\"forms.input.groupSubTitle\":\"Ejemplo de Input.Group Nota  No necesita Col para controlar el ancho en el modo compacto.\",\"forms.input.autoSizingTitle\":\"Autosizing la altura para ajustar el contenido\",\"forms.input.autoSizingSubTitle\":\"prop de autosize para un tipo de entrada textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar un objeto de opciones al tamaño automático para especificar el número mínimo y máximo de líneas que la zona de texto ajustará automáticamente.\",\"forms.input.prePostTabTitle\":\"Pestaña Pre    Post\",\"forms.input.prePostTabSubTitle\":\"El uso de pre & amp; post tabs ejemplo ..\",\"forms.input.textAreaTitle\":\"Área de texto\",\"forms.input.textAreaSubTitle\":\"Para casos de entrada de usuario multi-línea   se puede utilizar una entrada cuyo tipo prop tiene el valor de textarea.\",\"forms.input.searchTitle\":\"Buscar\",\"forms.input.searchSubTitle\":\"Ejemplo de creación de un cuadro de búsqueda agrupando una entrada estándar con un botón de búsqueda\",\"forms.editor.header\":\"Editor\",\"forms.formsWithValidation.header\":\"Formulario de validación personalizado\",\"forms.formsWithValidation.failLabel\":\"Fallar\",\"forms.formsWithValidation.failHelp\":\"Debe ser la combinación de números & amp; alfabetos\",\"forms.formsWithValidation.warningLabel\":\"Advertencia\",\"forms.formsWithValidation.ValidatingLabel\":\"Validando\",\"forms.formsWithValidation.ValidatingHelp\":\"La información está siendo validada ...\",\"forms.formsWithValidation.SuccessLabel\":\"Éxito\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Advertencia\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Fallar\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Debe ser la combinación de números & amp; alfabetos\",\"forms.progressBar.header\":\"Barra de progreso\",\"forms.progressBar.standardTitle\":\"Barra de progreso\",\"forms.progressBar.standardSubTitle\":\"Una barra de progreso estándar.\",\"forms.progressBar.circularTitle\":\"Barra de progreso circular\",\"forms.progressBar.circularSubTitle\":\"Una barra de progreso circular.\",\"forms.progressBar.miniTitle\":\"Barra de progreso de tamaño mini\",\"forms.progressBar.miniSubTitle\":\"Adecuado para un área estrecha.\",\"forms.progressBar.miniCircularTitle\":\"Una barra de progreso circular más pequeña.\",\"forms.progressBar.dynamicCircularTitle\":\"Barra de progreso circular dinámica\",\"forms.progressBar.dynamicCircularSubTitle\":\"Una barra de progreso dinámica es mejor.\",\"forms.progressBar.customTextTitle\":\"Formato de texto personalizado\",\"forms.progressBar.customTextSubTitle\":\"Puede personalizar el formato de texto configurando el formato.\",\"forms.progressBar.dashboardTitle\":\"Tablero\",\"forms.progressBar.dashboardSubTitle\":\"Un estilo de progreso en el tablero de instrumentos.\",\"forms.button.header\":\"Botones\",\"forms.button.simpleButton\":\"Tipo de botón\",\"forms.button.iconButton\":\"Icono de botón\",\"forms.button.simpleButtonPrimaryText\":\"Primario\",\"forms.button.simpleButtonDefaultText\":\"Defecto\",\"forms.button.simpleButtonDashedText\":\"Dañado\",\"forms.button.simpleButtonDangerText\":\"Peligro\",\"forms.button.iconPrimaryButton\":\"buscar\",\"forms.button.iconSimpleButton\":\"buscar\",\"forms.button.iconCirculerButton\":\"buscar\",\"forms.button.iconDashedButton\":\"buscar\",\"forms.button.SizedButton\":\"Tamaño del botón\",\"forms.button.DisabledButton\":\"Botón desactivado\",\"forms.button.LoadingButton\":\"Botón de carga\",\"forms.button.MultipleButton\":\"Botón múltiple\",\"forms.button.groupButton\":\"Grupo de botones\",\"forms.Tabs.header\":\"Pestañas\",\"forms.Tabs.simpleTabTitle\":\"buscar\",\"forms.Tabs.simpleTabSubTitle\":\"Pestañas inhabilitadas\",\"forms.Tabs.iconTabTitle\":\"Icono de las pestañas\",\"forms.Tabs.miniTabTitle\":\"Mini pestañas\",\"forms.Tabs.extraTabTitle\":\"Pestañas de acción adicionales\",\"forms.Tabs.TabpositionTitle\":\"Posición\",\"forms.Tabs.TabpositionSubTitle\":\"Posición de las pestañas  izquierda   derecha   arriba o abajo\",\"forms.Tabs.cardTitle\":\"Fichas de tipo de tarjeta\",\"forms.Tabs.editableTitle\":\"Agregar y cerrar pestañas\",\"forms.Tabs.verticalTitle\":\"Fichas de tipo vertical\",\"forms.Tabs.basicTitle\":\"Pestañas básicas\",\"forms.checkbox.header\":\"Caja\",\"forms.checkbox.basicTitle\":\"Casilla de verificación básica\",\"forms.checkbox.basicSubTitle\":\"Uso básico de la casilla de verificación.\",\"forms.checkbox.groupTitle\":\"Grupo de casillas de verificación\",\"forms.checkbox.groupSubTitle\":\"Genera un grupo de casillas de verificación de una matriz. Utilizar desactivado para deshabilitar una casilla de verificación.\",\"forms.checkbox.groupCheckTitle\":\"Grupo de casillas de verificación\",\"forms.checkbox.groupCheckSubTitle\":\"Genera un grupo de casillas de verificación de una matriz. Utilizar desactivado para deshabilitar una casilla de verificación.\",\"forms.radio.header\":\"Radio\",\"forms.radio.simpleTitle\":\"Radio básica\",\"forms.radio.simpleSubTitle\":\"El uso más simple. Utilizar desactivado para desactivar una radio.\",\"forms.radio.groupTitle\":\"Grupo de radio vertical\",\"forms.radio.groupSubTitle\":\"Vertical RadioGroup   con más radios.\",\"forms.radio.groupSecondTitle\":\"Grupo de radio\",\"forms.radio.groupSecondSubTitle\":\"Un grupo de componentes de radio.\",\"forms.radio.groupThirdTitle\":\"Grupo de radio\",\"forms.radio.groupThirdSubTitle\":\"Un grupo de componentes de radio.\",\"forms.transfer.header\":\"Transferir\",\"forms.transfer.SubTitle\":\"Transferir con un cuadro de búsqueda.\",\"forms.transfer.Title\":\"Buscar\",\"forms.autocomplete.header\":\"Autocompletar\",\"forms.autocomplete.simpleTitle\":\"Personalizado\",\"forms.autocomplete.simpleSubTitle\":\"Puede pasar AutoComplete.Option como hijos de Autocompletar   en lugar de utilizar dataSource\",\"forms.autocomplete.customizeTitle\":\"Personalizar el componente de entrada\",\"forms.autocomplete.customizeSubTitle\":\"Personalizar el componente de entrada\",\"uiElements.badge.badge\":\"Distintivo\",\"uiElements.badge.basicExample\":\"Ejemplo Básico\",\"uiElements.badge.basicExampleSubTitle\":\"Uso más simple. La insignia se ocultará cuando count sea 0   pero podemos usar showZero para mostrarlo.\",\"uiElements.badge.overflowCount\":\"Cuenta de desbordamiento\",\"uiElements.badge.overflowCountSubTitle\":\"OverflowCount se muestra cuando count es mayor que overflowCount. El valor predeterminado de overflowCount es 99.\",\"uiElements.badge.status\":\"Estado\",\"uiElements.badge.statusSubTitle\":\"Insignia autónoma con estado.\",\"uiElements.badge.success\":\"Éxito\",\"uiElements.badge.error\":\"Error\",\"uiElements.badge.default\":\"Defecto\",\"uiElements.badge.processing\":\"Tratamiento\",\"uiElements.badge.warning\":\"Advertencia\",\"uiElements.badge.redBadge\":\"Insignia roja\",\"uiElements.badge.redBadgeSubTitle\":\"Esto simplemente mostrará una insignia roja   sin un conteo específico.\",\"uiElements.badge.linkSomething\":\"Enlace algo\",\"uiElements.cards.cards\":\"Divertido Tarjetas\",\"uiElements.cards.basicCard\":\"Tarjeta básica\",\"uiElements.cards.basicCardSubTitle\":\"Una tarjeta básica que contiene un título   contenido y un contenido de esquina adicional.\",\"uiElements.cards.more\":\"Más\",\"uiElements.cards.cardTitle\":\"Título de la tarjeta\",\"uiElements.cards.cardContent\":\"Contenido de la tarjeta\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore y dolore magna aliqua. Ut enim ad minim veniam   quis nostrud ejercicio ullamco laboris nisi ut aliquip ex y commodo consequat.\",\"uiElements.cards.noBorder\":\"Sin bordes\",\"uiElements.cards.noBorderSubTitle\":\"Una tarjeta sin fronteras sobre un fondo gris.\",\"uiElements.cards.gridCard\":\"Tarjeta de red\",\"uiElements.cards.gridCardSubTitle\":\"Las tarjetas suelen cooperar con el diseño de la cuadrícula en la página de vista general.\",\"uiElements.cards.loadingCard\":\"Carga de la tarjeta\",\"uiElements.cards.loadingCardSubTitle\":\"Muestra un indicador de carga mientras se está recuperando el contenido de la tarjeta.\",\"uiElements.cards.whateverContent\":\"Cualquier contenido\",\"uiElements.cards.customizedContentTitle\":\"Contenido personalizado\",\"uiElements.cards.customizedContent\":\"Muestra un indicador de carga mientras se está recuperando el contenido de la tarjeta.\",\"uiElements.cards.europeStreetBeat\":\"Europa Street beat\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"Parranda\",\"uiElements.carousel.verticalCarousel\":\"Carrusel vertical\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Paginación vertical. use   vertical = true\",\"uiElements.carousel.basicCarousel\":\"Carrusel básico\",\"uiElements.carousel.basicCarouselSubTitle\":\"Uso básico\",\"uiElements.carousel.fadeInTransition\":\"Fade In Transition\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Las diapositivas utilizan el fundido para la transición.   effect = fade\",\"uiElements.carousel.scrollAutomatically\":\"Desplazarse automáticamente\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Tiempo de desplazamiento a la siguiente tarjeta    imagen. auto reproducción\",\"uiElements.collapse.collapse\":\"Colapso\",\"uiElements.collapse.collapseSubTitle\":\"Se puede ampliar más de un panel a la vez   el primer panel se inicializa para estar activo en este caso. use   defaultActiveKey =   [keyNum]\",\"uiElements.collapse.text\":\"Un perro es un tipo de animal domesticado. Conocido por su lealtad y fidelidad   se puede encontrar como un invitado de bienvenida en muchos hogares de todo el mundo.\",\"uiElements.collapse.headerOne\":\"Este es el encabezado del panel 1\",\"uiElements.collapse.headerTwo\":\"Se trata de la cabecera del panel 2\",\"uiElements.collapse.headerThree\":\"Este es el encabezado del panel 3\",\"uiElements.collapse.headerNested\":\"Éste es panel del nido del panel\",\"uiElements.collapse.nestedExample\":\"Ejemplo anidado\",\"uiElements.collapse.nestedExampleSubTitle\":\"Collapse está anidado dentro del Collapse.\",\"uiElements.collapse.borderlessExample\":\"Ejemplo sin márgenes\",\"uiElements.collapse.borderlessExampleSubTitle\":\"Un estilo sin fronteras de Collapse. use   bordered =   false\",\"uiElements.collapse.accordion\":\"Acordeón\",\"uiElements.collapse.accordionSubTitle\":\"Acordeón   sólo se puede ampliar un panel cada vez. El primer panel se ampliará de forma predeterminada. utilizar acordeón\",\"uiElements.popover.popover\":\"Popover\",\"uiElements.popover.basicExample\":\"Ejemplo Básico\",\"uiElements.popover.basicExampleSubTitle\":\"El ejemplo más básico. El tamaño de la capa flotante depende de la región del contenido.\",\"uiElements.popover.hoverMe\":\"Mírame\",\"uiElements.popover.title\":\"Título\",\"uiElements.popover.titleTrigger\":\"Tres maneras de activar\",\"uiElements.popover.titleTriggerSubTitle\":\"El ratón para hacer clic   enfocar y moverse.\",\"uiElements.popover.focusMe\":\"Enfócame\",\"uiElements.popover.clickMe\":\"Haz click en mi\",\"uiElements.popover.placement\":\"Colocación\",\"uiElements.popover.placementSubTitle\":\"Hay 12 opciones de colocación disponibles.\",\"uiElements.popover.top\":\"Parte superior\",\"uiElements.popover.topLeft\":\"Arriba a la izquierda\",\"uiElements.popover.topRight\":\"Parte superior derecha\",\"uiElements.popover.leftTop\":\"Parte superior izquierda\",\"uiElements.popover.left\":\"Izquierda\",\"uiElements.popover.leftBottom\":\"Abajo a la izquierda\",\"uiElements.popover.rightTop\":\"Justo arriba\",\"uiElements.popover.right\":\"Derecha\",\"uiElements.popover.bottom\":\"Fondo\",\"uiElements.popover.bottomLeft\":\"Abajo Izquierda\",\"uiElements.popover.bottomRight\":\"Abajo a la derecha\",\"uiElements.popover.boxTitle\":\"Control del cierre del diálogo\",\"uiElements.popover.boxSubTitle\":\"Utilice el apoyo visible para controlar la visualización de la tarjeta.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"LB\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"licenciado en Derecho\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"Cerca\",\"uiElements.tooltip.tooltip\":\"Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Contenido de información sobre herramientas\",\"uiElements.tooltip.basicExample\":\"Ejemplo Básico\",\"uiElements.tooltip.basicExampleSubTitle\":\"El uso más simple.\",\"uiElements.tooltip.placementTitle\":\"Colocación\",\"uiElements.tooltip.placementSubTitle\":\"La herramienta tiene 12 opciones de ubicación.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"LB\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"licenciado en Derecho\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"Fondo\",\"uiElements.tooltip.right\":\"Derecha\",\"uiElements.tooltip.left\":\"Izquierda\",\"uiElements.tooltip.top\":\"Parte superior\",\"uiElements.tooltip.tooltipContentSpan\":\"La información sobre herramientas se mostrará cuando se introduzca el ratón.\",\"uiElements.tooltip.contentSpan\":\"Contenido de información sobre herramientas\",\"uiElements.tags.tags\":\"Etiquetas\",\"uiElements.tags.basicExample\":\"Ejemplo Básico\",\"uiElements.tags.basicExampleSubTitle\":\"Uso de la etiqueta básica   y podría ser cerrable por la propiedad cerrable del sistema. La etiqueta Closable soporta eventos onClose afterClose.\",\"uiElements.tags.tagOne\":\"Etiqueta 1\",\"uiElements.tags.tagTwo\":\"Etiqueta 2\",\"uiElements.tags.link\":\"Enlazar\",\"uiElements.tags.preventDefault\":\"Prevenga el Incumplimiento\",\"uiElements.tags.colorfulTag\":\"Etiqueta colorida\",\"uiElements.tags.hotTags\":\"Etiquetas populares\",\"uiElements.tags.hotTagsSubTitle\":\"Seleccione sus temas favoritos.\",\"uiElements.tags.hots\":\"Hots\",\"uiElements.tags.addRemoveDynamically\":\"Agregar y eliminar dinámicamente\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"Generando un conjunto de etiquetas por matriz   puede agregar y quitar dinámicamente. Se basa en el evento afterClose   que se activará mientras finaliza la animación de cierre.\",\"uiElements.tags.newTag\":\"+ Nueva etiqueta\",\"uiElements.timeline.timeline\":\"Cronograma\",\"uiElements.timeline.basicExample\":\"Ejemplo Básico\",\"uiElements.timeline.basicTimeline\":\"Línea de tiempo básica\",\"uiElements.timeline.lastNode\":\"Ultimo nodo\",\"uiElements.timeline.lastNodeContent\":\"Cuando la línea de tiempo está incompleta y en curso   poner un nodo fantasma por fin. set   pending =   true     o   pending =   un elemento React\",\"uiElements.timeline.seeMore\":\"Ver más\",\"uiElements.timeline.custom\":\"Personalizado\",\"uiElements.timeline.customContent\":\"Establezca un nodo como un icono u otro elemento personalizado.\",\"uiElements.timeline.colorExample\":\"Ejemplo de color\",\"uiElements.timeline.colorExampleContent\":\"Establecer el color de los círculos. verde significa estado completado o de éxito   rojo significa advertencia o error y azul significa estado en curso u otro estado predeterminado.\",\"uiElements.timeline.createServiceSite\":\"Crear un sitio de servicios 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Resolver problemas de red iniciales 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Problemas de red resueltos 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Pruebas técnicas 2015-09-01\",\"uiElements.dropdown.dropdown\":\"Desplegable\",\"uiElements.dropdown.hoverDropdown\":\"Desplácese\",\"uiElements.dropdown.hoverMe\":\"Mírame\",\"uiElements.dropdown.hoverPlacement\":\"Despliegue de colocación de cola\",\"uiElements.dropdown.hoverDisableLink\":\"Desplazamiento con desplegable\",\"uiElements.dropdown.clickedDropdown\":\"Desplegable pulsado\",\"uiElements.dropdown.buttonDropdown\":\"Botón con menú desplegable\",\"uiElements.pagination.pagination\":\"Paginación\",\"uiElements.pagination.basic\":\"BASIC\",\"uiElements.pagination.more\":\"Más\",\"uiElements.pagination.changer\":\"Cambiador\",\"uiElements.pagination.jumper\":\"Saltador\",\"uiElements.pagination.miniSize\":\"Tamaño mini\",\"uiElements.pagination.simpleMode\":\"Modo simple\",\"uiElements.pagination.controlled\":\"Revisado\",\"uiElements.pagination.totalNumber\":\"Numero total\",\"uiElements.rating.rating\":\"Clasificación\",\"uiElements.rating.basicExample\":\"Ejemplo Básico\",\"uiElements.rating.basicExampleSubTitle\":\"El uso más simple.\",\"uiElements.rating.halfStar\":\"Media estrella\",\"uiElements.rating.halfStarSubTitle\":\"Soporte de media estrella.\",\"uiElements.rating.showCopywriting\":\"Mostrar copywriting\",\"uiElements.rating.showCopywritingSubTitle\":\"Añadir copywriting en los componentes de la tarifa.\",\"uiElements.rating.readOnly\":\"Solo lectura\",\"uiElements.rating.readOnlySubTitle\":\"Sólo lectura   no puede utilizar el ratón para interactuar.\",\"uiElements.rating.otherCharacter\":\"Otro Personaje\",\"uiElements.rating.otherCharacterSubTitle\":\"Reemplace la estrella predeterminada por otro carácter como alfabeto   dígito   iconfonte o incluso palabra china.\",\"uiElements.tree.tree\":\"Árbol\",\"uiElements.tree.basicExample\":\"Ejemplo básico\",\"uiElements.tree.basicExampleSubTitle\":\"El uso más básico   te dirá cómo usar checkable   seleccionable   disabled   defaultExpandKeys   y etc.\",\"uiElements.tree.basicControlledExample\":\"Ejemplo controlado básico\",\"uiElements.tree.basicControlledExampleSubTitle\":\"ejemplo controlado básico\",\"uiElements.tree.draggableExample\":\"Ejemplo arrastrable\",\"uiElements.tree.draggableExampleSubTitle\":\"Arrastre treeNode para insertar después del otro treeNode o inserte en el otro TreeNode padre.\",\"uiElements.tree.loadAsync\":\"Cargar datos asincrónicamente\",\"uiElements.tree.loadAsyncSubTitle\":\"Para cargar datos asincrónicamente cuando haga clic para expandir un treeNode.\",\"uiElements.tree.searchableExample\":\"Ejemplo de búsqueda\",\"uiElements.tree.searchableExampleSubTitle\":\"Árbol de búsqueda\",\"uiElements.tree.treeWithLine\":\"Árbol con línea\",\"shuffle.descriptionOne\":\"Netscape 2.0 se expande   introduciendo Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett lanza la especificación AJAX\",\"shuffle.descriptionThree\":\"jQuery 1.0 publicado\",\"shuffle.descriptionFour\":\"Primero underscore.js commit\",\"shuffle.descriptionFive\":\"Backbone.js se convierte en una cosa\",\"shuffle.descriptionSix\":\"Angular 1.0 liberado\",\"shuffle.descriptionSeven\":\"Reaccionar es de código abierto; los desarrolladores se regocijan\",\"toggle.list\":\"Lista\",\"toggle.grid\":\"Cuadrícula\",\"toggle.ascending\":\"Ascendente\",\"toggle.descending\":\"Descendente\",\"toggle.shuffle\":\"Barajar\",\"toggle.rotate\":\"Girar\",\"toggle.addItem\":\"Añadir artículo\",\"toggle.removeItem\":\"Remover el artículo\",\"contactlist.searchContacts\":\"Buscar contactos\",\"contactlist.addNewContact\":\"Añadir nuevo contacto\",\"notes.ChoseColor\":\"Elige un color para tu nota\",\"notes.addNote\":\"Añadir nueva nota\",\"page404.title\":\"404\",\"page404.subTitle\":\"Parece que te has perdido\",\"page404.description\":\"La página que estás buscando no existe o se ha movido.\",\"page404.backButton\":\"VOLVER A LA CASA\",\"page500.title\":\"500\",\"page500.subTitle\":\"error de servidor interno\",\"page500.description\":\"Algo salió mal. Por favor   inténtelo de nuevo.\",\"page500.backButton\":\"VOLVER A LA CASA\",\"page.forgetPassTitle\":\"Isomórfico\",\"page.forgetPassSubTitle\":\"¿Se te olvidó tu contraseña?\",\"page.forgetPassDescription\":\"Introduzca su correo electrónico y le enviaremos un enlace de restablecimiento.\",\"page.sendRequest\":\"Enviar petición\",\"page.resetPassTitle\":\"Isomórfico\",\"page.resetPassSubTitle\":\"Restablecer la contraseña\",\"page.resetPassDescription\":\"Introduzca una nueva contraseña y confirme.\",\"page.resetPassSave\":\"Salvar\",\"page.signInTitle\":\"Isomórfico\",\"page.signInRememberMe\":\"Recuérdame\",\"page.signInButton\":\"Registrarse\",\"page.signInPreview\":\"nombre de usuario  demo   contraseña  demodemo   o simplemente haga clic en cualquier botón.\",\"page.signInFacebook\":\"Iniciar sesión usando Facebook\",\"page.signInGooglePlus\":\"Acceder con Google Plus\",\"page.signInAuth0\":\"Iniciar sesión con Auth0\",\"page.signInForgotPass\":\"Se te olvidó tu contraseña\",\"page.signInCreateAccount\":\"Crear una cuenta Isomorphoic\",\"page.signUpTitle\":\"Isomórfico\",\"page.signUpTermsConditions\":\"Estoy de acuerdo con los términos y condiciones\",\"page.signUpButton\":\"Regístrate\",\"page.signUpFacebook\":\"Registrate con Facebook\",\"page.signUpGooglePlus\":\"Regístrese con Google Plus\",\"page.signUpAuth0\":\"Regístrese con Auth0\",\"page.signUpAlreadyAccount\":\"¿Ya tienes una cuenta? Registrarse.\",\"widget.reportswidget.label\":\"Ingresos\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"Márketing\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"Consultante\",\"widget.singleprogresswidget4.label\":\"Desarrollo\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"Correo electrónico no leído\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"Subida de imagen\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"Total de mensajes\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"Pedidos\",\"widget.salewidget1.label\":\"Ingresos\",\"widget.salewidget1.price\":\"15000 $\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget2.label\":\"Ingresos\",\"widget.salewidget2.price\":\"15000 $\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget3.label\":\"Ingresos\",\"widget.salewidget3.price\":\"15000 $\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.salewidget4.label\":\"Ingresos\",\"widget.salewidget4.price\":\"15000 $\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed hacer eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"Nuevos mensajes\",\"widget.cardwidget2.number\":\"100%\",\"widget.cardwidget2.text\":\"Volumen\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"Logro\",\"widget.progresswidget1.label\":\"Descargar\",\"widget.progresswidget1.details\":\"50% Completo\",\"widget.progresswidget2.label\":\"Apoyo\",\"widget.progresswidget2.details\":\"80% de clientes satisfechos\",\"widget.progresswidget3.label\":\"Subir\",\"widget.progresswidget3.details\":\"65% Completo\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"Sr. Desarrollador iOS\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sentarse amet   consectetur adipisicing elit   sed eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"Nombre de pila\",\"checkout.billingform.lastname\":\"Apellido\",\"checkout.billingform.company\":\"nombre de empresa\",\"checkout.billingform.email\":\"Dirección de correo electrónico\",\"checkout.billingform.mobile\":\"No móviles\",\"checkout.billingform.country\":\"País\",\"checkout.billingform.city\":\"Ciudad\",\"checkout.billingform.address\":\"Dirección\",\"checkout.billingform.addressoptional\":\"Apartamento   suite   unidad   etc. (opcional\",\"checkout.billingform.checkbox\":\"¿Crea una cuenta?\",\"antTable.title.image\":\"Imagen\",\"antTable.title.firstName\":\"Nombre de pila\",\"antTable.title.lastName\":\"Apellido\",\"antTable.title.city\":\"Ciudad\",\"antTable.title.street\":\"Calle\",\"antTable.title.email\":\"Email\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"Mapa básico\",\"Map.leaflet.basicMarkerTitle\":\"Mapa básico (con marcador predeterminado\",\"Map.leaflet.leafletCustomMarkerTitle\":\"Mapa básico (con marcador de icono personalizado\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Mapa básico (con marcador HTML personalizado\",\"Map.leaflet.leafletMarkerClusterTitle\":\"Mapa básico (con grupo de marcadores\",\"Map.leaflet.leafletRoutingTitle\":\"Enrutamiento básico del mapa\",\"Component.contacts.noOption\":\"No se ha encontrado ningún contacto\",\"email.send\":\"ENVIAR\",\"email.cancel\":\"CANCELAR\",\"email.compose\":\"COMPONER\",\"email.noMessage\":\"Por favor seleccione un correo para leer\",\"themeSwitcher.purchase\":\"ACHETER MAINTENANT\",\"themeSwitcher.settings\":\"AJUSTES\",\"sidebar.selectbox\":\"Seleccionar\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"Mon profil\",\"topbar.help\":\"Aidez-moi\",\"topbar.logout\":\"Connectez - Out\",\"topbar.viewAll\":\"Connectez - Out\",\"topbar.viewCart\":\"Voir le panier\",\"topbar.totalPrice\":\"Prix ​​total\",\"sidebar.scrumboard\":\"Scrum Board\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/it_IT.json":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/it_IT.json ***!
  \*********************************************************************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, sidebar.scrumboard, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"Slider\",\"sidebar.email\":\"E-mail\",\"sidebar.chat\":\"Chiacchierare\",\"sidebar.ecommerce\":\"ecommerce\",\"sidebar.shop\":\"Negozio\",\"sidebar.cart\":\"Carrello\",\"sidebar.checkout\":\"check-out\",\"sidebar.cards\":\"Carte\",\"sidebar.maps\":\"Mappe\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.leafletMap\":\"Mappa del foglio\",\"sidebar.calendar\":\"Calendario\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"articoli\",\"sidebar.firestorecrudinvestor\":\"Investitori\",\"sidebar.notes\":\"Gli appunti\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contatti\",\"sidebar.shuffle\":\"rimescolare\",\"sidebar.charts\":\"Grafici\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"React Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"React-Trend\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Forme\",\"sidebar.input\":\"Ingresso\",\"sidebar.editor\":\"editore\",\"sidebar.formsWithValidation\":\"Forme con validazione\",\"sidebar.progress\":\"Progresso\",\"sidebar.button\":\"Pulsante\",\"sidebar.tab\":\"linguetta\",\"sidebar.checkbox\":\"casella di controllo\",\"sidebar.radiobox\":\"radiobox\",\"sidebar.transfer\":\"Trasferimento\",\"sidebar.autocomplete\":\"Completamento automatico\",\"sidebar.boxOptions\":\"Opzioni casella\",\"sidebar.uiElements\":\"Elementi UI\",\"sidebar.badge\":\"Distintivo\",\"sidebar.card2\":\"Carta\",\"sidebar.corusel\":\"gozzoviglia\",\"sidebar.collapse\":\"Crollo\",\"sidebar.popover\":\"Pop Over\",\"sidebar.tooltip\":\"tooltip\",\"sidebar.tag\":\"Etichetta\",\"sidebar.timeline\":\"Sequenza temporale\",\"sidebar.dropdown\":\"Cadere in picchiata\",\"sidebar.pagination\":\"paginatura\",\"sidebar.rating\":\"Valutazione\",\"sidebar.tree\":\"Albero\",\"sidebar.advancedElements\":\"Elementi avanzati\",\"sidebar.reactDates\":\"Date di reazione\",\"sidebar.codeMirror\":\"Specchio di codice\",\"sidebar.uppy\":\"Uploader Uppy\",\"sidebar.dropzone\":\"Zona di rilascio\",\"sidebar.feedback\":\"Risposta\",\"sidebar.alert\":\"Mettere in guardia\",\"sidebar.modal\":\"Modale\",\"sidebar.message\":\"Messaggio\",\"sidebar.notification\":\"Notifica\",\"sidebar.popConfirm\":\"Pop Conferma\",\"sidebar.spin\":\"Roteare\",\"sidebar.tables\":\"tabelle\",\"sidebar.antTables\":\"Ant Table\",\"sidebar.pages\":\"pagine\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Registrati\",\"sidebar.signUp\":\"Registrazione\",\"sidebar.forgotPw\":\"Hai dimenticato le password\",\"sidebar.resetPw\":\"Azzerare le password\",\"sidebar.invoice\":\"Fattura\",\"sidebar.menuLevels\":\"Livelli del menu\",\"sidebar.item1\":\"Voce 1\",\"sidebar.item2\":\"Articolo 2\",\"sidebar.option1\":\"opzione 1\",\"sidebar.option2\":\"Opzione 2\",\"sidebar.option3\":\"Opzione 3\",\"sidebar.option4\":\"Opzione 4\",\"sidebar.blankPage\":\"Pagina vuota\",\"sidebar.githubSearch\":\"Ricerca Github\",\"sidebar.youtubeSearch\":\"Cambia lingua\",\"languageSwitcher.label\":\"Switcher di temi\",\"themeSwitcher\":\"Sidebar\",\"themeSwitcher.Sidebar\":\"topbar\",\"themeSwitcher.Topbar\":\"sfondo\",\"themeSwitcher.Background\":\"Titolo di base\",\"feedback.alert.basicTitle\":\"Testo di successo\",\"feedback.alert.successText\":\"Info Testo\",\"feedback.alert.infoText\":\"Testo di avviso\",\"feedback.alert.warningText\":\"Testo di errore\",\"feedback.alert.errorText\":\"Tipo avvisi chiudibili\",\"feedback.alert.closableAlertType\":\"Tipo di avviso di icone\",\"feedback.alert.iconAlertType\":\"Tipo di avviso di informazioni sullicona\",\"feedback.alert.iconInfoAlertType\":\"suggerimenti di successo\",\"feedback.alert.successTips\":\"Descrizione dettagliata e consigli su copywriting di successo.\",\"feedback.alert.successTipsDescription\":\"Note informative\",\"feedback.alert.informationTips\":\"Descrizione e informazioni aggiuntive su copywriting.\",\"feedback.alert.informationDescription\":\"avvertimento\",\"feedback.alert.warningTips\":\"Questo è un avviso di avviso di copywriting.\",\"feedback.alert.warningDescription\":\"Errore\",\"feedback.alert.errorTips\":\"Si tratta di un messaggio di errore relativo a copywriting.\",\"feedback.alert.errorDescription\":\"Modale con personalizzazione di piè di pagina\",\"feedback.alert.modalTitle\":\"Dialogo modale di base.\",\"feedback.alert.modalSubTitle\":\"Successo\",\"feedback.alert.successTitle\":\"Informazioni\",\"feedback.alert.infoTitle\":\"Errore\",\"feedback.alert.errorTitle\":\"avvertimento\",\"feedback.alert.warningTitle\":\"Modale\",\"feedback.alert.modalBlockTitle\":\"Finestra di dialogo Modalità di conferma\",\"feedback.alert.confirmationModalDialogue\":\"Semplice dialogo modale\",\"feedback.alert.simpleModalDialogue\":\"Messaggio\",\"feedback.alert.message\":\"Messaggio normale\",\"feedback.alert.normalMessageTitle\":\"Messaggi normali come feedback.\",\"feedback.alert.normalMessageSubtitle\":\"Visualizza il messaggio normale\",\"feedback.alert.displayMessage\":\"Altri tipi di messaggio\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Messaggi di tipo di successo   di errore e di avviso.\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Personalizza durata\",\"feedback.alert.customizeDurationTitle\":\"personalizzare la durata della visualizzazione dei messaggi da default da 1.5s a 10s.\",\"feedback.alert.customizeDurationSubTitle\":\"Durata del display personalizzata\",\"feedback.alert.customizeDurationButton\":\"Messaggio di caricamento\",\"feedback.alert.messageLoadingTitle\":\"Visualizzare un indicatore globale di caricamento   che viene eliminato in modo sincrono.\",\"feedback.alert.messageLoadingSubTitle\":\"Visualizzare un indicatore di caricamento\",\"feedback.alert.displayLoadIndicator\":\"Notifica\",\"feedback.alert.notification\":\"Di base\",\"feedback.alert.notificationBasicTitle\":\"Lutilizzo più semplice che chiude la casella di notifica dopo 4.5s.\",\"feedback.alert.notificationBasicSubTitle\":\"Aprire la casella di notifica\",\"feedback.alert.notificationBasicDescription\":\"Durata dopo la chiusura della casella di notifica\",\"feedback.alert.notificationDurationTitle\":\"La durata può essere utilizzata per specificare la durata della notifica rimanere aperta. Dopo la scadenza della durata   la notifica si chiude automaticamente. Se non è specificato   il valore predefinito è di 4  5 secondi. Se si imposta il valore su 0   la casella di notifica non si chiude automaticamente.\",\"feedback.alert.notificationDurationSubTitle\":\"Notifica con icona\",\"feedback.alert.notificationwithIconTitle\":\"Una casella di notifica con unicona sul lato sinistro.\",\"feedback.alert.notificationwithIconSubTitle\":\"Notifica con icona personalizzata\",\"feedback.alert.notificationwithCustomIconTitle\":\"Messaggi normali come feedback.\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Notifica con il pulsante personalizzato\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Messaggi normali come feedback.\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Pop Conferma\",\"feedback.alert.popConfirm\":\"Conferma fondamentale\",\"feedback.alert.popConfirm.basicTitle\":\"Lesempio di base.\",\"feedback.alert.popConfirm.basicSubTitle\":\"Elimina\",\"feedback.alert.popConfirm.delete\":\"Notifica con icona personalizzata\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Messaggi normali come feedback.\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"TL\",\"feedback.alert.popConfirm.TL\":\"Superiore\",\"feedback.alert.popConfirm.top\":\"TR\",\"feedback.alert.popConfirm.TR\":\"LT\",\"feedback.alert.popConfirm.LT\":\"Sinistra\",\"feedback.alert.popConfirm.left\":\"LIBBRE\",\"feedback.alert.popConfirm.LB\":\"RT\",\"feedback.alert.popConfirm.RT\":\"Destra\",\"feedback.alert.popConfirm.right\":\"RB\",\"feedback.alert.popConfirm.RB\":\"BL\",\"feedback.alert.popConfirm.Bl\":\"Parte inferiore\",\"feedback.alert.popConfirm.bottom\":\"BR\",\"feedback.alert.popConfirm.BR\":\"Roteare\",\"feedback.alert.spin\":\"Dimensioni Spin\",\"feedback.alert.spin.basicTitle\":\"Spin con lo sfondo\",\"feedback.alert.spin.background\":\"Spin con descrizione di sfondo\",\"feedback.alert.spin.backgroundDescription\":\"Stato di caricamento\",\"feedback.alert.spin.loadingState\":\"Titolo del messaggio di avviso\",\"feedback.alert.spin.alertTitle\":\"Ulteriori dettagli sul contesto di questo avviso.\",\"feedback.alert.spin.alertDescription\":\"Ingresso\",\"forms.input.header\":\"Utilizzo di base\",\"forms.input.basicTitle\":\"Esempio di utilizzo di base.\",\"forms.input.basicSubTitle\":\"Tre formati di ingresso\",\"forms.input.variationsTitle\":\"Sono disponibili tre dimensioni di una casella Input  grande (42px     predefinito (35px   e piccolo (30px  . Nota  Allinterno delle forme viene utilizzata solo la grande dimensione.\",\"forms.input.variationsSubtitle\":\"Gruppo di input\",\"forms.input.groupTitle\":\"Esempio di input.Group Nota  Non è necessario Col per controllare la larghezza nella modalità compatta.\",\"forms.input.groupSubTitle\":\"Autosizing laltezza per adattarsi al contenuto\",\"forms.input.autoSizingTitle\":\"autosize prop per un tipo di textarea dellinput rende laltezza regolabile automaticamente in base al contenuto. Può essere fornito un oggetto opzioni per autosizzare per specificare il numero minimo e massimo di righe che larea textarea regolerà automaticamente.\",\"forms.input.autoSizingSubTitle\":\"Scheda Pre    Post\",\"forms.input.prePostTabTitle\":\"Utilizzo di pre & amp; esempi di tabulazioni post ..\",\"forms.input.prePostTabSubTitle\":\"Textarea\",\"forms.input.textAreaTitle\":\"Per i casi di input utente multi-line   è possibile utilizzare un input il cui tipo prop ha il valore di textarea.\",\"forms.input.textAreaSubTitle\":\"Ricerca\",\"forms.input.searchTitle\":\"Esempio di creazione di una casella di ricerca raggruppando un input standard con un pulsante di ricerca\",\"forms.input.searchSubTitle\":\"editore\",\"forms.editor.header\":\"Modulo di convalida personalizzata\",\"forms.formsWithValidation.header\":\"Fallire\",\"forms.formsWithValidation.failLabel\":\"Dovrebbe essere combinazione di numeri & amp; alfabeti\",\"forms.formsWithValidation.failHelp\":\"avvertimento\",\"forms.formsWithValidation.warningLabel\":\"Convalida\",\"forms.formsWithValidation.ValidatingLabel\":\"Le informazioni vengono convalidate ...\",\"forms.formsWithValidation.ValidatingHelp\":\"Successo\",\"forms.formsWithValidation.SuccessLabel\":\"avvertimento\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Fallire\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Dovrebbe essere combinazione di numeri & amp; alfabeti\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Barra di avanzamento\",\"forms.progressBar.header\":\"Barra di avanzamento\",\"forms.progressBar.standardTitle\":\"Una barra di avanzamento standard.\",\"forms.progressBar.standardSubTitle\":\"Barra di progressione circolare\",\"forms.progressBar.circularTitle\":\"Una barra di avanzamento circolare.\",\"forms.progressBar.circularSubTitle\":\"Barra di avanzamento di taglia minima\",\"forms.progressBar.miniTitle\":\"Adatto per una zona stretta.\",\"forms.progressBar.miniSubTitle\":\"Una barra di avanzamento circolare più piccola.\",\"forms.progressBar.miniCircularTitle\":\"Barra di avanzamento circolare dinamica\",\"forms.progressBar.dynamicCircularTitle\":\"Una barra dinamica di avanzamento è migliore.\",\"forms.progressBar.dynamicCircularSubTitle\":\"Formato di testo personalizzato\",\"forms.progressBar.customTextTitle\":\"È possibile formattare il testo personalizzato impostando il formato.\",\"forms.progressBar.customTextSubTitle\":\"Cruscotto\",\"forms.progressBar.dashboardTitle\":\"Uno stile del cruscotto del progresso.\",\"forms.progressBar.dashboardSubTitle\":\"pulsanti\",\"forms.button.header\":\"Tipo di pulsante\",\"forms.button.simpleButton\":\"Icona pulsante\",\"forms.button.iconButton\":\"Primario\",\"forms.button.simpleButtonPrimaryText\":\"Predefinito\",\"forms.button.simpleButtonDefaultText\":\"tratteggiata\",\"forms.button.simpleButtonDashedText\":\"Pericolo\",\"forms.button.simpleButtonDangerText\":\"ricerca\",\"forms.button.iconPrimaryButton\":\"ricerca\",\"forms.button.iconSimpleButton\":\"ricerca\",\"forms.button.iconCirculerButton\":\"ricerca\",\"forms.button.iconDashedButton\":\"Dimensioni del pulsante\",\"forms.button.SizedButton\":\"Pulsante disabilitato\",\"forms.button.DisabledButton\":\"Caricamento del tasto\",\"forms.button.LoadingButton\":\"Pulsante multiplo\",\"forms.button.MultipleButton\":\"Gruppo di pulsanti\",\"forms.button.groupButton\":\"Tabs\",\"forms.Tabs.header\":\"ricerca\",\"forms.Tabs.simpleTabTitle\":\"Schede disattivate\",\"forms.Tabs.simpleTabSubTitle\":\"Tabulazioni delle icone\",\"forms.Tabs.iconTabTitle\":\"Mini schede\",\"forms.Tabs.miniTabTitle\":\"Schede Azione Extra\",\"forms.Tabs.extraTabTitle\":\"Posizione\",\"forms.Tabs.TabpositionTitle\":\"Posizione delle schede  sinistra   destra   superiore o inferiore\",\"forms.Tabs.TabpositionSubTitle\":\"Schede del tipo di scheda\",\"forms.Tabs.cardTitle\":\"Aggiungi e chiudi le schede\",\"forms.Tabs.editableTitle\":\"Schede di tipo verticale\",\"forms.Tabs.verticalTitle\":\"Schede di base\",\"forms.Tabs.basicTitle\":\"casella di controllo\",\"forms.checkbox.header\":\"Casella di controllo di base\",\"forms.checkbox.basicTitle\":\"Utilizzo di base della casella di controllo.\",\"forms.checkbox.basicSubTitle\":\"Gruppo di casella di controllo\",\"forms.checkbox.groupTitle\":\"Generare un gruppo di caselle di controllo da un array. Utilizza disabilitato per disattivare una casella di controllo.\",\"forms.checkbox.groupSubTitle\":\"Gruppo di casella di controllo\",\"forms.checkbox.groupCheckTitle\":\"Generare un gruppo di caselle di controllo da un array. Utilizza disabilitato per disattivare una casella di controllo.\",\"forms.checkbox.groupCheckSubTitle\":\"Radio\",\"forms.radio.header\":\"Radio di base\",\"forms.radio.simpleTitle\":\"Luso più semplice. Usare disabilitato per disattivare una radio.\",\"forms.radio.simpleSubTitle\":\"RadioGroup verticale\",\"forms.radio.groupTitle\":\"RadioGroup verticale   con più radio.\",\"forms.radio.groupSubTitle\":\"RadioGroup\",\"forms.radio.groupSecondTitle\":\"Un gruppo di componenti radio.\",\"forms.radio.groupSecondSubTitle\":\"RadioGroup\",\"forms.radio.groupThirdTitle\":\"Un gruppo di componenti radio.\",\"forms.radio.groupThirdSubTitle\":\"Trasferimento\",\"forms.transfer.header\":\"Trasferisci con una casella di ricerca.\",\"forms.transfer.SubTitle\":\"Ricerca\",\"forms.transfer.Title\":\"Completamento automatico\",\"forms.autocomplete.header\":\"su misura\",\"forms.autocomplete.simpleTitle\":\"Potresti passare AutoComplete.Option come bambini di AutoComplete   invece di utilizzare dataSource\",\"forms.autocomplete.simpleSubTitle\":\"Personalizza componente di input\",\"forms.autocomplete.customizeTitle\":\"Personalizza componente di input\",\"forms.autocomplete.customizeSubTitle\":\"Distintivo\",\"uiElements.badge.badge\":\"Esempio di base\",\"uiElements.badge.basicExample\":\"Uso più semplice. Il distintivo sarà nascosto quando il conteggio è 0   ma possiamo usare showZero per mostrarlo.\",\"uiElements.badge.basicExampleSubTitle\":\"Numero di overflow\",\"uiElements.badge.overflowCount\":\"OverflowCount viene visualizzato quando il conteggio è maggiore di overflowCount. Il valore predefinito di overflowCount è 99.\",\"uiElements.badge.overflowCountSubTitle\":\"Stato\",\"uiElements.badge.status\":\"Distintivo autonomo con stato.\",\"uiElements.badge.statusSubTitle\":\"Successo\",\"uiElements.badge.success\":\"Errore\",\"uiElements.badge.error\":\"Predefinito\",\"uiElements.badge.default\":\"lavorazione\",\"uiElements.badge.processing\":\"avvertimento\",\"uiElements.badge.warning\":\"Distintivo rosso\",\"uiElements.badge.redBadge\":\"Questo mostrerà semplicemente un distintivo rosso   senza un conteggio specifico.\",\"uiElements.badge.redBadgeSubTitle\":\"Collegare qualcosa\",\"uiElements.badge.linkSomething\":\"Carte\",\"uiElements.cards.cards\":\"Scheda di base\",\"uiElements.cards.basicCard\":\"Una scheda di base contenente un titolo   un contenuto e un contenuto aggiuntivo dangolo.\",\"uiElements.cards.basicCardSubTitle\":\"Di Più\",\"uiElements.cards.more\":\"Titolo della carta\",\"uiElements.cards.cardTitle\":\"Contenuto della scheda\",\"uiElements.cards.cardContent\":\"Il peso del peso è ridotto   lelit di adipisizione del consectetur   che rende meno efficace il lavoro e la dolce magna aliqua. Lut enim ad minim veniam   quis nostrud esercizio ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\"uiElements.cards.lorem\":\"Nessun bordo\",\"uiElements.cards.noBorder\":\"Una carta senza bordi su uno sfondo grigio.\",\"uiElements.cards.noBorderSubTitle\":\"Scheda di griglia\",\"uiElements.cards.gridCard\":\"Carte di solito cooperano con il layout della griglia nella pagina di panoramica.\",\"uiElements.cards.gridCardSubTitle\":\"Caricamento della carta\",\"uiElements.cards.loadingCard\":\"Mostra un indicatore di caricamento durante il recupero del contenuto della scheda.\",\"uiElements.cards.loadingCardSubTitle\":\"Qualunque contenuto\",\"uiElements.cards.whateverContent\":\"Contenuto personalizzato\",\"uiElements.cards.customizedContentTitle\":\"Mostra un indicatore di caricamento durante il recupero del contenuto della scheda.\",\"uiElements.cards.customizedContent\":\"Europa Street beat\",\"uiElements.cards.europeStreetBeat\":\"www.instagram.com\",\"uiElements.cards.instagram\":\"gozzoviglia\",\"uiElements.carousel.carousel\":\"Carosello verticale\",\"uiElements.carousel.verticalCarousel\":\"Pagination verticale. utilizzare   vertical = true\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Carosello di base\",\"uiElements.carousel.basicCarousel\":\"Utilizzo di base\",\"uiElements.carousel.basicCarouselSubTitle\":\"Fade in transizione\",\"uiElements.carousel.fadeInTransition\":\"Le diapositive utilizzano dissolvenza per la transizione.   Effetto = dissolvenza\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Scorri automaticamente\",\"uiElements.carousel.scrollAutomatically\":\"Timing di scorrimento alla scheda    immagine successiva. riproduzione automatica\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Crollo\",\"uiElements.collapse.collapse\":\"Più di un pannello può essere espanso alla volta   il primo pannello viene inizializzato per essere attivo in questo caso. utilizzare   defaultActiveKey =   [keyNum]\",\"uiElements.collapse.collapseSubTitle\":\"Un cane è un tipo di animale domestico. Conosciuto per la sua fedeltà e fedeltà   si può trovare come un ospite benvenuto in molte famiglie in tutto il mondo.\",\"uiElements.collapse.text\":\"Questa è lintestazione del pannello 1\",\"uiElements.collapse.headerOne\":\"Questa è lintestazione del pannello 2\",\"uiElements.collapse.headerTwo\":\"Questa è lintestazione del pannello 3\",\"uiElements.collapse.headerThree\":\"Questo è il pannello nido del pannello\",\"uiElements.collapse.headerNested\":\"Esempio nidificato\",\"uiElements.collapse.nestedExample\":\"Il crollo è nidificato allinterno del Collapse.\",\"uiElements.collapse.nestedExampleSubTitle\":\"Esempio senza bordi\",\"uiElements.collapse.borderlessExample\":\"Uno stile senza bordo di Collapse. utilizzare   bordered =   false\",\"uiElements.collapse.borderlessExampleSubTitle\":\"Fisarmonica\",\"uiElements.collapse.accordion\":\"Modalità fisarmonica   è possibile espandere un solo pannello alla volta. Il primo pannello verrà espanso per impostazione predefinita. utilizzare la fisarmonica\",\"uiElements.collapse.accordionSubTitle\":\"popover\",\"uiElements.popover.popover\":\"Esempio di base\",\"uiElements.popover.basicExample\":\"Lesempio più semplice. La dimensione dello strato galleggiante dipende dalla regione dei contenuti.\",\"uiElements.popover.basicExampleSubTitle\":\"Allontanami\",\"uiElements.popover.hoverMe\":\"Titolo\",\"uiElements.popover.title\":\"Tre modi per attivare\",\"uiElements.popover.titleTrigger\":\"Mouse per fare clic   concentrarsi e muoversi.\",\"uiElements.popover.titleTriggerSubTitle\":\"Mi concentri\",\"uiElements.popover.focusMe\":\"Cliccami\",\"uiElements.popover.clickMe\":\"Posizionamento\",\"uiElements.popover.placement\":\"Sono disponibili 12 opzioni di posizionamento.\",\"uiElements.popover.placementSubTitle\":\"Superiore\",\"uiElements.popover.top\":\"A sinistra in alto\",\"uiElements.popover.topLeft\":\"In alto a destra\",\"uiElements.popover.topRight\":\"In alto a sinistra\",\"uiElements.popover.leftTop\":\"Sinistra\",\"uiElements.popover.left\":\"Sinistra inferiore\",\"uiElements.popover.leftBottom\":\"Destra destra\",\"uiElements.popover.rightTop\":\"Destra\",\"uiElements.popover.right\":\"Parte inferiore\",\"uiElements.popover.bottom\":\"In basso a sinistra\",\"uiElements.popover.bottomLeft\":\"In basso a destra\",\"uiElements.popover.bottomRight\":\"Controllare la chiusura della finestra di dialogo\",\"uiElements.popover.boxTitle\":\"Utilizzare un supporto visibile per controllare la visualizzazione della scheda.\",\"uiElements.popover.boxSubTitle\":\"TR\",\"uiElements.popover.TR\":\"TL\",\"uiElements.popover.TL\":\"LT\",\"uiElements.popover.LT\":\"LIBBRE\",\"uiElements.popover.LB\":\"RT\",\"uiElements.popover.RT\":\"RB\",\"uiElements.popover.RB\":\"BL\",\"uiElements.popover.BL\":\"BR\",\"uiElements.popover.BR\":\"Vicino\",\"uiElements.popover.close\":\"tooltip\",\"uiElements.tooltip.tooltip\":\"Contenuto del Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Esempio di base\",\"uiElements.tooltip.basicExample\":\"Luso più semplice.\",\"uiElements.tooltip.basicExampleSubTitle\":\"Posizionamento\",\"uiElements.tooltip.placementTitle\":\"La ToolTip ha 12 scelta dei posizionamenti.\",\"uiElements.tooltip.placementSubTitle\":\"TL\",\"uiElements.tooltip.TL\":\"TR\",\"uiElements.tooltip.TR\":\"LT\",\"uiElements.tooltip.LT\":\"LIBBRE\",\"uiElements.tooltip.LB\":\"RT\",\"uiElements.tooltip.RT\":\"RB\",\"uiElements.tooltip.RB\":\"BL\",\"uiElements.tooltip.BL\":\"BR\",\"uiElements.tooltip.BR\":\"Parte inferiore\",\"uiElements.tooltip.bottom\":\"Destra\",\"uiElements.tooltip.right\":\"Sinistra\",\"uiElements.tooltip.left\":\"Superiore\",\"uiElements.tooltip.top\":\"Tooltip verrà mostrato quando il mouse entra.\",\"uiElements.tooltip.tooltipContentSpan\":\"Contenuto del Tooltip\",\"uiElements.tooltip.contentSpan\":\"tag\",\"uiElements.tags.tags\":\"Esempio di base\",\"uiElements.tags.basicExample\":\"Utilizzo di Tag di base e potrebbe essere chiuso da una proprietà chiusa configurabile. Tag Closable supporta onClose afterClose eventi.\",\"uiElements.tags.basicExampleSubTitle\":\"Tag 1\",\"uiElements.tags.tagOne\":\"Tag 2\",\"uiElements.tags.tagTwo\":\"collegamento\",\"uiElements.tags.link\":\"Impedire il default\",\"uiElements.tags.preventDefault\":\"Tag colorato\",\"uiElements.tags.colorfulTag\":\"Tag Hot\",\"uiElements.tags.hotTags\":\"Seleziona i tuoi argomenti preferiti.\",\"uiElements.tags.hotTagsSubTitle\":\"Hots\",\"uiElements.tags.hots\":\"Aggiungi e rimuove in modo dinamico\",\"uiElements.tags.addRemoveDynamically\":\"La generazione di un insieme di tag per array consente di aggiungere e rimuovere in modo dinamico. Il suo è basato sullevento afterClose   che verrà attivato mentre la fine animazione fine.\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"+ Nuovo tag\",\"uiElements.tags.newTag\":\"Sequenza temporale\",\"uiElements.timeline.timeline\":\"Esempio di base\",\"uiElements.timeline.basicExample\":\"Timeline di base\",\"uiElements.timeline.basicTimeline\":\"Ultimo nodo\",\"uiElements.timeline.lastNode\":\"Quando la timeline è incompleta e in corso   infine   metti un nodo fantasma. impostare   in attesa =   true     o   in attesa =   a React Element\",\"uiElements.timeline.lastNodeContent\":\"Vedi altro\",\"uiElements.timeline.seeMore\":\"costume\",\"uiElements.timeline.custom\":\"Imposta un nodo come unicona o un altro elemento personalizzato.\",\"uiElements.timeline.customContent\":\"Esempio di colore\",\"uiElements.timeline.colorExample\":\"Imposta il colore dei cerchi. verde significa stato completato o successo   rosso significa avvertimento o errore   e blu significa stato continuo o altro.\",\"uiElements.timeline.colorExampleContent\":\"Creare un sito di servizi per il 2015-09-01\",\"uiElements.timeline.createServiceSite\":\"Risolvere i problemi di rete iniziali dal 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Problemi di rete risolti 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Test tecnici del 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Cadere in picchiata\",\"uiElements.dropdown.dropdown\":\"Disattiva a discesa\",\"uiElements.dropdown.hoverDropdown\":\"Allontanami\",\"uiElements.dropdown.hoverMe\":\"Posizionamento di posizionamento a discesa\",\"uiElements.dropdown.hoverPlacement\":\"Sospendi con il disattivato link\",\"uiElements.dropdown.hoverDisableLink\":\"Clicca su Drop Down\",\"uiElements.dropdown.clickedDropdown\":\"Pulsante con menu a discesa\",\"uiElements.dropdown.buttonDropdown\":\"paginatura\",\"uiElements.pagination.pagination\":\"Di base\",\"uiElements.pagination.basic\":\"Di Più\",\"uiElements.pagination.more\":\"Changer\",\"uiElements.pagination.changer\":\"Saltatore\",\"uiElements.pagination.jumper\":\"Mini formato\",\"uiElements.pagination.miniSize\":\"Modalità semplice\",\"uiElements.pagination.simpleMode\":\"Controlled\",\"uiElements.pagination.controlled\":\"Numero totale\",\"uiElements.pagination.totalNumber\":\"Valutazione\",\"uiElements.rating.rating\":\"Esempio di base\",\"uiElements.rating.basicExample\":\"Luso più semplice.\",\"uiElements.rating.basicExampleSubTitle\":\"Metà stella\",\"uiElements.rating.halfStar\":\"Sostenere selezionare la metà della stella.\",\"uiElements.rating.halfStarSubTitle\":\"Mostra copywriting\",\"uiElements.rating.showCopywriting\":\"Aggiungi copywriting in componenti di velocità.\",\"uiElements.rating.showCopywritingSubTitle\":\"Sola lettura\",\"uiElements.rating.readOnly\":\"Leggi solo   non può utilizzare il mouse per interagire.\",\"uiElements.rating.readOnlySubTitle\":\"Altro carattere\",\"uiElements.rating.otherCharacter\":\"Sostituire la stella predefinita in altri caratteri come lalfabeto   la cifra   licona o anche la parola cinese.\",\"uiElements.rating.otherCharacterSubTitle\":\"Albero\",\"uiElements.tree.tree\":\"Esempio di base\",\"uiElements.tree.basicExample\":\"Lutilizzo più semplice   ti dice come utilizzare controllibili   selezionabili   disattivati   defaultExpandKeys e così via.\",\"uiElements.tree.basicExampleSubTitle\":\"Esempio controllato di base\",\"uiElements.tree.basicControlledExample\":\"esempio controllato di base\",\"uiElements.tree.basicControlledExampleSubTitle\":\"Esempio Draggable\",\"uiElements.tree.draggableExample\":\"Trascinare alberoNode da inserire dopo laltro alberoNodo o inserire nellaltro albero TreeNode.\",\"uiElements.tree.draggableExampleSubTitle\":\"Caricare i dati in modo asincrono\",\"uiElements.tree.loadAsync\":\"Per caricare i dati in modo asincrono quando si fa clic per espandere un alberoNodo.\",\"uiElements.tree.loadAsyncSubTitle\":\"Esempio esplorabile\",\"uiElements.tree.searchableExample\":\"Albero ricercabile\",\"uiElements.tree.searchableExampleSubTitle\":\"Albero Con Linea\",\"uiElements.tree.treeWithLine\":\"Netscape 2.0 viene fornito   introducendo Javascript\",\"shuffle.descriptionOne\":\"Jesse James Garrett rilascia AJAX spec\",\"shuffle.descriptionTwo\":\"jQuery 1.0 è stato rilasciato\",\"shuffle.descriptionThree\":\"Prima sottolineare. Commit\",\"shuffle.descriptionFour\":\"Backbone.js diventa una cosa\",\"shuffle.descriptionFive\":\"Angular 1.0 è stato rilasciato\",\"shuffle.descriptionSix\":\"React è aperto; gli sviluppatori si rallegrano\",\"shuffle.descriptionSeven\":\"Elenco\",\"toggle.list\":\"Griglia\",\"toggle.grid\":\"Ascendente\",\"toggle.ascending\":\"Discendente\",\"toggle.descending\":\"rimescolare\",\"toggle.shuffle\":\"Ruotare\",\"toggle.rotate\":\"Aggiungi articolo\",\"toggle.addItem\":\"Rimuovi oggetto\",\"toggle.removeItem\":\"Cerca i contatti\",\"contactlist.searchContacts\":\"Aggiungi nuovo contatto\",\"contactlist.addNewContact\":\"Scegli un colore per la tua nota\",\"notes.ChoseColor\":\"Aggiungi nuova nota\",\"notes.addNote\":\"404\",\"page404.title\":\"Sembra che ti sei perso\",\"page404.subTitle\":\"La pagina che stai cercando non esiste o è stata spostata.\",\"page404.description\":\"RITORNO A CASA\",\"page404.backButton\":\"500\",\"page500.title\":\"Errore interno del server\",\"page500.subTitle\":\"Qualcosa è andato storto. Riprova la lettera.\",\"page500.description\":\"RITORNO A CASA\",\"page500.backButton\":\"isomorfo\",\"page.forgetPassTitle\":\"Ha dimenticato la password?\",\"page.forgetPassSubTitle\":\"Inserisci la tua email e ti inviamo un collegamento di ripristino.\",\"page.forgetPassDescription\":\"Invia richiesta\",\"page.sendRequest\":\"isomorfo\",\"page.resetPassTitle\":\"Resetta la password\",\"page.resetPassSubTitle\":\"Inserire una nuova password e confermarla.\",\"page.resetPassDescription\":\"Salvare\",\"page.resetPassSave\":\"isomorfo\",\"page.signInTitle\":\"Ricordati di me\",\"page.signInRememberMe\":\"registrati\",\"page.signInButton\":\"username  demo   password  demodemo   o basta cliccare su qualsiasi pulsante.\",\"page.signInPreview\":\"Accedi con Facebook\",\"page.signInFacebook\":\"Accedi con Google Plus\",\"page.signInGooglePlus\":\"Accedi con Auth0\",\"page.signInAuth0\":\"Ha dimenticato la password\",\"page.signInForgotPass\":\"Crea un account Isomorphoic\",\"page.signInCreateAccount\":\"isomorfo\",\"page.signUpTitle\":\"Sono daccordo con i termini e le condivisioni\",\"page.signUpTermsConditions\":\"Registrazione\",\"page.signUpButton\":\"Registrati con Facebook\",\"page.signUpFacebook\":\"Registrati con Google Plus\",\"page.signUpGooglePlus\":\"Registrati con Auth0\",\"page.signUpAuth0\":\"Hai già un account? Registrati.\",\"page.signUpAlreadyAccount\":\"Reddito\",\"widget.reportswidget.label\":\"Il suo peso è ridotto   è aumentato   è aumentato\",\"widget.reportswidget.details\":\"Marketing\",\"widget.singleprogresswidget1.label\":\"Addvertisement\",\"widget.singleprogresswidget2.label\":\"Consulenza\",\"widget.singleprogresswidget3.label\":\"Sviluppo\",\"widget.singleprogresswidget4.label\":\"210\",\"widget.stickerwidget1.number\":\"Email non letti\",\"widget.stickerwidget1.text\":\"1749\",\"widget.stickerwidget2.number\":\"Upload di immagini\",\"widget.stickerwidget2.text\":\"3024\",\"widget.stickerwidget3.number\":\"Messaggio totale\",\"widget.stickerwidget3.text\":\"54\",\"widget.stickerwidget4.number\":\"Ordini Post\",\"widget.stickerwidget4.text\":\"Reddito\",\"widget.salewidget1.label\":\"$ 15000\",\"widget.salewidget1.price\":\"Il suo peso è ridotto   è aumentato   è aumentato\",\"widget.salewidget1.details\":\"Reddito\",\"widget.salewidget2.label\":\"$ 15000\",\"widget.salewidget2.price\":\"Il suo peso è ridotto   è aumentato   è aumentato\",\"widget.salewidget2.details\":\"Reddito\",\"widget.salewidget3.label\":\"$ 15000\",\"widget.salewidget3.price\":\"Il suo peso è ridotto   è aumentato   è aumentato\",\"widget.salewidget3.details\":\"Reddito\",\"widget.salewidget4.label\":\"$ 15000\",\"widget.salewidget4.price\":\"Il suo peso è ridotto   è aumentato   è aumentato\",\"widget.salewidget4.details\":\"110\",\"widget.cardwidget1.number\":\"Nuovi messaggi\",\"widget.cardwidget1.text\":\"100%\",\"widget.cardwidget2.number\":\"Volume\",\"widget.cardwidget2.text\":\"137\",\"widget.cardwidget3.number\":\"realizzazione\",\"widget.cardwidget3.text\":\"Scaricare\",\"widget.progresswidget1.label\":\"50% completato\",\"widget.progresswidget1.details\":\"Supporto\",\"widget.progresswidget2.label\":\"80% Cliente soddisfatto\",\"widget.progresswidget2.details\":\"Caricare\",\"widget.progresswidget3.label\":\"65% completato\",\"widget.progresswidget3.details\":\"Jhon Doe\",\"widget.vcardwidget.name\":\"Sr. iOS Developer\",\"widget.vcardwidget.title\":\"Il peso è ridotto   il prezzo è basso   il prezzo è basso   il prezzo è basso\",\"widget.vcardwidget.description\":\"Nome di battesimo\",\"checkout.billingform.firstname\":\"Cognome\",\"checkout.billingform.lastname\":\"Nome della ditta\",\"checkout.billingform.company\":\"Indirizzo email\",\"checkout.billingform.email\":\"Mobile no\",\"checkout.billingform.mobile\":\"Nazione\",\"checkout.billingform.country\":\"Città\",\"checkout.billingform.city\":\"Indirizzo\",\"checkout.billingform.address\":\"Appartamento   suite   unità ecc. (Opzionale\",\"checkout.billingform.addressoptional\":\"Crea un account?\",\"checkout.billingform.checkbox\":\"Immagine\",\"antTable.title.image\":\"Nome di battesimo\",\"antTable.title.firstName\":\"Cognome\",\"antTable.title.lastName\":\"Città\",\"antTable.title.city\":\"strada\",\"antTable.title.street\":\"E-mail\",\"antTable.title.email\":\"DOB\",\"antTable.title.dob\":\"Mappa di base\",\"Map.leaflet.basicTitle\":\"Mappa di base (con il marcatore di default\",\"Map.leaflet.basicMarkerTitle\":\"Mappa di base (con il simbolo personalizzato dellicona\",\"Map.leaflet.leafletCustomMarkerTitle\":\"Mappa di base (con il personalizzatore Html Marker\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Mappa di base (con cluster di marcatori\",\"Map.leaflet.leafletMarkerClusterTitle\":\"Routing della mappa di base\",\"Map.leaflet.leafletRoutingTitle\":\"Nessun contatto trovato\",\"Component.contacts.noOption\":\"INVIARE\",\"email.send\":\"ANNULLA\",\"email.cancel\":\"COMPORRE\",\"email.compose\":\"Seleziona una mail per leggere\",\"email.noMessage\":\"PAGARE ORA\",\"themeSwitcher.purchase\":\"ACQUISTA ADESSO\",\"themeSwitcher.settings\":\"Selezionare\",\"sidebar.selectbox\":\"Selezionare\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"Il mio profilo\",\"topbar.help\":\"Aiuto\",\"topbar.logout\":\"Disconnettersi\",\"topbar.viewAll\":\"Guarda tutto\",\"topbar.viewCart\":\"Visualizza carrello\",\"topbar.totalPrice\":\"Prezzo totale\",\"sidebar.scrumboard\":\"Scrum Board\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/translation/locales/zh-Hans.json":
/*!***********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/translation/locales/zh-Hans.json ***!
  \***********************************************************************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, sidebar.scrumboard, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"滑塊\",\"sidebar.email\":\"电子邮件\",\"sidebar.chat\":\"聊\",\"sidebar.ecommerce\":\"电子商务\",\"sidebar.shop\":\"店\",\"sidebar.cart\":\"大车\",\"sidebar.checkout\":\"查看\",\"sidebar.cards\":\"牌\",\"sidebar.maps\":\"地图\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.leafletMap\":\"传单地图\",\"sidebar.calendar\":\"日历\",\"sidebar.notes\":\"笔记\",\"sidebar.todos\":\"待办事项\",\"sidebar.contacts\":\"往来\",\"sidebar.shuffle\":\"拖曳\",\"sidebar.charts\":\"图表\",\"sidebar.googleCharts\":\"Google购物车\",\"sidebar.recharts\":\"重新图表\",\"sidebar.reactVis\":\"反应可见\",\"sidebar.reactChart2\":\"反应 - 图2\",\"sidebar.reactTrend\":\"反应-趋势\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"形式\",\"sidebar.input\":\"输入\",\"sidebar.editor\":\"编辑\",\"sidebar.formsWithValidation\":\"验证形式\",\"sidebar.progress\":\"进展\",\"sidebar.button\":\"按键\",\"sidebar.tab\":\"标签\",\"sidebar.checkbox\":\"复选框\",\"sidebar.radiobox\":\"收音机盒\",\"sidebar.transfer\":\"转让\",\"sidebar.autocomplete\":\"自动完成\",\"sidebar.boxOptions\":\"框选项\",\"sidebar.uiElements\":\"UI元素\",\"sidebar.badge\":\"徽章\",\"sidebar.card2\":\"卡\",\"sidebar.corusel\":\"狂欢游行\",\"sidebar.collapse\":\"坍方\",\"sidebar.popover\":\"流行\",\"sidebar.tooltip\":\"提示\",\"sidebar.tag\":\"标签\",\"sidebar.timeline\":\"时间线\",\"sidebar.dropdown\":\"落下\",\"sidebar.pagination\":\"分页\",\"sidebar.rating\":\"评分\",\"sidebar.tree\":\"树\",\"sidebar.advancedElements\":\"高级元素\",\"sidebar.reactDates\":\"反应日期\",\"sidebar.codeMirror\":\"代码镜\",\"sidebar.uppy\":\"Uppy上传器\",\"sidebar.dropzone\":\"拖放区\",\"sidebar.feedback\":\"反馈\",\"sidebar.alert\":\"警报\",\"sidebar.modal\":\"语气\",\"sidebar.message\":\"信息\",\"sidebar.notification\":\"通知\",\"sidebar.popConfirm\":\"流行确认\",\"sidebar.spin\":\"纺\",\"sidebar.tables\":\"表\",\"sidebar.antTables\":\"蚂蚁表\",\"sidebar.pages\":\"网页\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"签到\",\"sidebar.signUp\":\"注册\",\"sidebar.forgotPw\":\"忘记密码\",\"sidebar.resetPw\":\"重置密码\",\"sidebar.invoice\":\"发票\",\"sidebar.menuLevels\":\"菜单级别\",\"sidebar.item1\":\"项目1\",\"sidebar.item2\":\"项目2\",\"sidebar.option1\":\"选项1\",\"sidebar.option2\":\"选项2\",\"sidebar.option3\":\"选项3\",\"sidebar.option4\":\"选项4\",\"sidebar.blankPage\":\"空白页\",\"sidebar.githubSearch\":\"Github搜索\",\"sidebar.youtubeSearch\":\"Youtube搜索\",\"languageSwitcher.label\":\"改变语言\",\"themeSwitcher\":\"主题切换器\",\"themeSwitcher.Sidebar\":\"侧边栏\",\"themeSwitcher.Topbar\":\"顶栏\",\"themeSwitcher.Background\":\"背景\",\"feedback.alert.basicTitle\":\"基本标题\",\"feedback.alert.successText\":\"成功文本\",\"feedback.alert.infoText\":\"信息文本\",\"feedback.alert.warningText\":\"警告文字\",\"feedback.alert.errorText\":\"错误文本\",\"feedback.alert.closableAlertType\":\"可关闭警报类型\",\"feedback.alert.iconAlertType\":\"图标警报类型\",\"feedback.alert.iconInfoAlertType\":\"图标信息警报类型\",\"feedback.alert.successTips\":\"成功提示\",\"feedback.alert.successTipsDescription\":\"关于成功写作的详细描述和建议。\",\"feedback.alert.informationTips\":\"信息备注\",\"feedback.alert.informationDescription\":\"关于文案的附加说明和信息。\",\"feedback.alert.warningTips\":\"警告\",\"feedback.alert.warningDescription\":\"这是关于文案的警告通知。\",\"feedback.alert.errorTips\":\"错误\",\"feedback.alert.errorDescription\":\"这是关于文案的错误信息。\",\"feedback.alert.modalTitle\":\"具有自定义页脚的模态\",\"feedback.alert.modalSubTitle\":\"基本模态对话框\",\"feedback.alert.successTitle\":\"成功\",\"feedback.alert.infoTitle\":\"信息\",\"feedback.alert.errorTitle\":\"错误\",\"feedback.alert.warningTitle\":\"警告\",\"feedback.alert.modalBlockTitle\":\"语气\",\"feedback.alert.confirmationModalDialogue\":\"确认模态对话框\",\"feedback.alert.simpleModalDialogue\":\"简单的模态对话框\",\"feedback.alert.message\":\"信息\",\"feedback.alert.normalMessageTitle\":\"正常讯息\",\"feedback.alert.normalMessageSubtitle\":\"正常消息作为反馈。\",\"feedback.alert.displayMessage\":\"显示正常消息\",\"feedback.alert.displayOtherTypeMessageTitle\":\"其他类型的消息\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"消息的成功，错误和警告类型。\",\"feedback.alert.customizeDurationTitle\":\"自定义持续时间\",\"feedback.alert.customizeDurationSubTitle\":\"自定义消息显示持续时间从默认值1.5s到10s。\",\"feedback.alert.customizeDurationButton\":\"定制显示持续时间\",\"feedback.alert.messageLoadingTitle\":\"加载消息\",\"feedback.alert.messageLoadingSubTitle\":\"显示一个全局加载指示器，它自身被异步地关闭。\",\"feedback.alert.displayLoadIndicator\":\"显示装载指示灯\",\"feedback.alert.notification\":\"通知\",\"feedback.alert.notificationBasicTitle\":\"基本\",\"feedback.alert.notificationBasicSubTitle\":\"4.5s后关闭通知框的最简单的用法。\",\"feedback.alert.notificationBasicDescription\":\"打开通知框\",\"feedback.alert.notificationDurationTitle\":\"通知框关闭之后的时间\",\"feedback.alert.notificationDurationSubTitle\":\"持续时间可用于指定通知保持打开的时间。持续时间过后，通知自动关闭。如果未指定，默认值为4.5秒。如果将值设置为0，则通知框将永远不会自动关闭。\",\"feedback.alert.notificationwithIconTitle\":\"通知图标\",\"feedback.alert.notificationwithIconSubTitle\":\"具有左侧图标的通知框。\",\"feedback.alert.notificationwithCustomIconTitle\":\"通知与自定义图标\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.notificationwithCustomButtonTitle\":\"通知使用自定义按钮\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm\":\"流行确认\",\"feedback.alert.popConfirm.basicTitle\":\"基本确认\",\"feedback.alert.popConfirm.basicSubTitle\":\"的基本例子。\",\"feedback.alert.popConfirm.delete\":\"删除\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"通知与自定义图标\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"最佳\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"剩下\",\"feedback.alert.popConfirm.LB\":\"磅\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"对\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"底部\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"纺\",\"feedback.alert.spin.basicTitle\":\"尺寸旋转\",\"feedback.alert.spin.background\":\"旋转背景\",\"feedback.alert.spin.backgroundDescription\":\"旋转背景描述\",\"feedback.alert.spin.loadingState\":\"装载状态：\",\"feedback.alert.spin.alertTitle\":\"提醒消息标题\",\"feedback.alert.spin.alertDescription\":\"有关此警报的上下文的更多详细信息。\",\"forms.input.header\":\"输入\",\"forms.input.basicTitle\":\"基本用法\",\"forms.input.basicSubTitle\":\"基本使用示例。\",\"forms.input.variationsTitle\":\"三种尺寸的输入\",\"forms.input.variationsSubtitle\":\"输入框有三种尺寸：大（42像素），默认（35像素）和小（30像素）。注意：在表格内部，只使用大尺寸。\",\"forms.input.groupTitle\":\"输入组\",\"forms.input.groupSubTitle\":\"Input.Group示例注意：您不需要Col来控制紧凑模式下的宽度。\",\"forms.input.autoSizingTitle\":\"自动调整高度以适应内容\",\"forms.input.autoSizingSubTitle\":\"对于textarea类型的输入，autosize prop可以根据内容自动调整高度。可以提供一个选项对象来自动调整，以指定textarea将自动调整的最小和最大行数。\",\"forms.input.prePostTabTitle\":\"前  后选项卡\",\"forms.input.prePostTabSubTitle\":\"使用前＆amp;帖子标签示例..\",\"forms.input.textAreaTitle\":\"多行文本\",\"forms.input.textAreaSubTitle\":\"对于多行用户输入案例，可以使用类型prop具有textarea值的输入。\",\"forms.input.searchTitle\":\"搜索\",\"forms.input.searchSubTitle\":\"通过使用搜索按钮对标准输入进行分组来创建搜索框的示例\",\"forms.editor.header\":\"编辑\",\"forms.formsWithValidation.header\":\"定制验证表\",\"forms.formsWithValidation.failLabel\":\"失败\",\"forms.formsWithValidation.failHelp\":\"应该是数字＆amp;字母\",\"forms.formsWithValidation.warningLabel\":\"警告\",\"forms.formsWithValidation.ValidatingLabel\":\"证实\",\"forms.formsWithValidation.ValidatingHelp\":\"信息正在验证...\",\"forms.formsWithValidation.SuccessLabel\":\"成功\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"警告\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"失败\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"应该是数字＆amp;字母\",\"forms.progressBar.header\":\"进度条\",\"forms.progressBar.standardTitle\":\"进度条\",\"forms.progressBar.standardSubTitle\":\"标准进度条。\",\"forms.progressBar.circularTitle\":\"循环进度栏\",\"forms.progressBar.circularSubTitle\":\"一个循环进度条。\",\"forms.progressBar.miniTitle\":\"迷你尺寸进度条\",\"forms.progressBar.miniSubTitle\":\"适合狭窄的地区。\",\"forms.progressBar.miniCircularTitle\":\"一个较小的圆形进度条。\",\"forms.progressBar.dynamicCircularTitle\":\"动态循环进度条\",\"forms.progressBar.dynamicCircularSubTitle\":\"动态进度条更好。\",\"forms.progressBar.customTextTitle\":\"自定义文本格式\",\"forms.progressBar.customTextSubTitle\":\"您可以通过设置格式自定义文本格式。\",\"forms.progressBar.dashboardTitle\":\"仪表板\",\"forms.progressBar.dashboardSubTitle\":\"仪表板风格的进步。\",\"forms.button.header\":\"纽扣\",\"forms.button.simpleButton\":\"按钮类型\",\"forms.button.iconButton\":\"按钮图标\",\"forms.button.simpleButtonPrimaryText\":\"主\",\"forms.button.simpleButtonDefaultText\":\"默认\",\"forms.button.simpleButtonDashedText\":\"虚线\",\"forms.button.simpleButtonDangerText\":\"危险\",\"forms.button.iconPrimaryButton\":\"搜索\",\"forms.button.iconSimpleButton\":\"搜索\",\"forms.button.iconCirculerButton\":\"搜索\",\"forms.button.iconDashedButton\":\"搜索\",\"forms.button.SizedButton\":\"按钮大小\",\"forms.button.DisabledButton\":\"按钮禁用\",\"forms.button.LoadingButton\":\"按钮加载\",\"forms.button.MultipleButton\":\"多重按钮\",\"forms.button.groupButton\":\"按钮组\",\"forms.Tabs.header\":\"标签\",\"forms.Tabs.simpleTabTitle\":\"搜索\",\"forms.Tabs.simpleTabSubTitle\":\"禁用标签\",\"forms.Tabs.iconTabTitle\":\"图标标签\",\"forms.Tabs.miniTabTitle\":\"迷你标签\",\"forms.Tabs.extraTabTitle\":\"额外动作标签\",\"forms.Tabs.TabpositionTitle\":\"位置\",\"forms.Tabs.TabpositionSubTitle\":\"标签的位置：左，右，上或下\",\"forms.Tabs.cardTitle\":\"卡类型选项卡\",\"forms.Tabs.editableTitle\":\"添加和关闭选项卡\",\"forms.Tabs.verticalTitle\":\"垂直类型标签\",\"forms.Tabs.basicTitle\":\"基本标签\",\"forms.checkbox.header\":\"复选框\",\"forms.checkbox.basicTitle\":\"基本复选框\",\"forms.checkbox.basicSubTitle\":\"复选框的基本用法\",\"forms.checkbox.groupTitle\":\"复选框组\",\"forms.checkbox.groupSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.checkbox.groupCheckTitle\":\"复选框组\",\"forms.checkbox.groupCheckSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.radio.header\":\"无线电\",\"forms.radio.simpleTitle\":\"基本电台\",\"forms.radio.simpleSubTitle\":\"最简单的用法禁用禁用广播。\",\"forms.radio.groupTitle\":\"垂直无线电组\",\"forms.radio.groupSubTitle\":\"垂直无线电组，更多收音机。\",\"forms.radio.groupSecondTitle\":\"RadioGroup中\",\"forms.radio.groupSecondSubTitle\":\"一组无线电组件。\",\"forms.radio.groupThirdTitle\":\"RadioGroup中\",\"forms.radio.groupThirdSubTitle\":\"一组无线电组件。\",\"forms.transfer.header\":\"转让\",\"forms.transfer.SubTitle\":\"使用搜索框转移。\",\"forms.transfer.Title\":\"搜索\",\"forms.autocomplete.header\":\"自动完成\",\"forms.autocomplete.simpleTitle\":\"定制\",\"forms.autocomplete.simpleSubTitle\":\"您可以将AutoComplete.Option作为AutoComplete的子代码，而不是使用dataSource\",\"forms.autocomplete.customizeTitle\":\"自定义输入组件\",\"forms.autocomplete.customizeSubTitle\":\"自定义输入组件\",\"uiElements.badge.badge\":\"徽章\",\"uiElements.badge.basicExample\":\"基本例子\",\"uiElements.badge.basicExampleSubTitle\":\"最简单的用法当count为0时，徽章将被隐藏，但是我们可以使用showZero来显示。\",\"uiElements.badge.overflowCount\":\"溢出计数\",\"uiElements.badge.overflowCountSubTitle\":\"当count大于overflowCount时，会显示OverflowCount。 overflowCount的默认值为99。\",\"uiElements.badge.status\":\"状态\",\"uiElements.badge.statusSubTitle\":\"独立徽章与状态。\",\"uiElements.badge.success\":\"成功\",\"uiElements.badge.error\":\"错误\",\"uiElements.badge.default\":\"默认\",\"uiElements.badge.processing\":\"处理\",\"uiElements.badge.warning\":\"警告\",\"uiElements.badge.redBadge\":\"红色徽章\",\"uiElements.badge.redBadgeSubTitle\":\"这只会显示一个红色的徽章，没有特定的数字。\",\"uiElements.badge.linkSomething\":\"链接一些东西\",\"uiElements.cards.cards\":\"牌\",\"uiElements.cards.basicCard\":\"基本卡\",\"uiElements.cards.basicCardSubTitle\":\"包含标题，内容和额外角落内容的基本卡。\",\"uiElements.cards.more\":\"更多\",\"uiElements.cards.cardTitle\":\"卡标题\",\"uiElements.cards.cardContent\":\"卡内容\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor incididunt ut labore et dolore magna aliqua。 Ut enim ad minim veniam，quis nostrud exerciseitation ullamco laboris nisi ut aliquip ex ea commodo因此。\",\"uiElements.cards.noBorder\":\"没有边界\",\"uiElements.cards.noBorderSubTitle\":\"在灰色背景上的无边界的卡。\",\"uiElements.cards.gridCard\":\"网格卡\",\"uiElements.cards.gridCardSubTitle\":\"卡通常在概览页面中与网格布局配合使用。\",\"uiElements.cards.loadingCard\":\"装卡\",\"uiElements.cards.loadingCardSubTitle\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.whateverContent\":\"无论内容\",\"uiElements.cards.customizedContentTitle\":\"定制内容\",\"uiElements.cards.customizedContent\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.europeStreetBeat\":\"欧洲街拍\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"狂欢游行\",\"uiElements.carousel.verticalCarousel\":\"垂直旋转木马\",\"uiElements.carousel.verticalCarouselSubTitle\":\"垂直分页。使用  vertical =true\",\"uiElements.carousel.basicCarousel\":\"基本转盘\",\"uiElements.carousel.basicCarouselSubTitle\":\"基本用法\",\"uiElements.carousel.fadeInTransition\":\"淡入淡出\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"幻灯片使用淡入淡出。   效果= 淡入\",\"uiElements.carousel.scrollAutomatically\":\"自动滚动\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"滚动到下一张卡  图片的时间。自动播放\",\"uiElements.collapse.collapse\":\"坍方\",\"uiElements.collapse.collapseSubTitle\":\"一次可以扩展多个面板，在这种情况下，第一个面板被初始化为活动状态。使用  defaultActiveKey =   [keyNum]\",\"uiElements.collapse.text\":\"狗是一种驯养动物。以其忠诚和忠诚而闻名，可以作为世界各地许多家庭的欢迎客人。\",\"uiElements.collapse.headerOne\":\"这是面板标题1\",\"uiElements.collapse.headerTwo\":\"这是面板标题2\",\"uiElements.collapse.headerThree\":\"这是面板标题3\",\"uiElements.collapse.headerNested\":\"这是面板嵌套面板\",\"uiElements.collapse.nestedExample\":\"嵌套示例\",\"uiElements.collapse.nestedExampleSubTitle\":\"折叠嵌套在折叠中。\",\"uiElements.collapse.borderlessExample\":\"无边界的例子\",\"uiElements.collapse.borderlessExampleSubTitle\":\"无边界风格的折叠。使用  bordered =   false\",\"uiElements.collapse.accordion\":\"手风琴\",\"uiElements.collapse.accordionSubTitle\":\"手风琴模式，一次只能扩展一个面板。默认情况下，第一个面板将被扩展。使用手风琴\",\"uiElements.popover.popover\":\"酥料饼\",\"uiElements.popover.basicExample\":\"基本例子\",\"uiElements.popover.basicExampleSubTitle\":\"最基本的例子。浮动层的大小取决于内容区域。\",\"uiElements.popover.hoverMe\":\"悬停我\",\"uiElements.popover.title\":\"标题\",\"uiElements.popover.titleTrigger\":\"三种触发方式\",\"uiElements.popover.titleTriggerSubTitle\":\"鼠标点击，对焦和移动。\",\"uiElements.popover.focusMe\":\"聚焦我\",\"uiElements.popover.clickMe\":\"点击我\",\"uiElements.popover.placement\":\"放置\",\"uiElements.popover.placementSubTitle\":\"有12个放置选项可用。\",\"uiElements.popover.top\":\"最佳\",\"uiElements.popover.topLeft\":\"左上角\",\"uiElements.popover.topRight\":\"右上\",\"uiElements.popover.leftTop\":\"左上\",\"uiElements.popover.left\":\"剩下\",\"uiElements.popover.leftBottom\":\"左下\",\"uiElements.popover.rightTop\":\"右上\",\"uiElements.popover.right\":\"对\",\"uiElements.popover.bottom\":\"底部\",\"uiElements.popover.bottomLeft\":\"左下方\",\"uiElements.popover.bottomRight\":\"右下\",\"uiElements.popover.boxTitle\":\"控制对话框的关闭\",\"uiElements.popover.boxSubTitle\":\"使用可见支柱来控制显卡的显示。\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"磅\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"关\",\"uiElements.tooltip.tooltip\":\"提示\",\"uiElements.tooltip.tooltipContent\":\"工具提示内容\",\"uiElements.tooltip.basicExample\":\"基本例子\",\"uiElements.tooltip.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.tooltip.placementTitle\":\"放置\",\"uiElements.tooltip.placementSubTitle\":\"工具提示有12个布局选择。\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"磅\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"底部\",\"uiElements.tooltip.right\":\"对\",\"uiElements.tooltip.left\":\"剩下\",\"uiElements.tooltip.top\":\"最佳\",\"uiElements.tooltip.tooltipContentSpan\":\"鼠标进入时会显示工具提示。\",\"uiElements.tooltip.contentSpan\":\"工具提示内容\",\"uiElements.tags.tags\":\"标签\",\"uiElements.tags.basicExample\":\"基本例子\",\"uiElements.tags.basicExampleSubTitle\":\"使用基本标签，它可以通过set closable属性来关闭。关闭标签支持onClose afterClose事件。\",\"uiElements.tags.tagOne\":\"标签1\",\"uiElements.tags.tagTwo\":\"标签2\",\"uiElements.tags.link\":\"链接\",\"uiElements.tags.preventDefault\":\"防止默认\",\"uiElements.tags.colorfulTag\":\"多彩标签\",\"uiElements.tags.hotTags\":\"热门标签\",\"uiElements.tags.hotTagsSubTitle\":\"选择您最喜欢的主题。\",\"uiElements.tags.hots\":\"热门活动：\",\"uiElements.tags.addRemoveDynamically\":\"动态添加和删除\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"通过数组生成一组标签，可以动态添加和删除。它基于afterClose事件，这将在关闭动画结束时触发。\",\"uiElements.tags.newTag\":\"+新标签\",\"uiElements.timeline.timeline\":\"时间线\",\"uiElements.timeline.basicExample\":\"基本例子\",\"uiElements.timeline.basicTimeline\":\"基本时间表\",\"uiElements.timeline.lastNode\":\"上一个节点\",\"uiElements.timeline.lastNodeContent\":\"当时间轴不完整和持续时，最后放一个鬼节点。 set   pending =   true    或  pending =   a React Element\",\"uiElements.timeline.seeMore\":\"查看更多\",\"uiElements.timeline.custom\":\"习惯\",\"uiElements.timeline.customContent\":\"将节点设置为图标或其他自定义元素。\",\"uiElements.timeline.colorExample\":\"颜色示例\",\"uiElements.timeline.colorExampleContent\":\"设置圈子的颜色。绿色表示完成或成功状态，红色表示警告或错误，蓝色表示正在进行或其他默认状态。\",\"uiElements.timeline.createServiceSite\":\"创建服务网站2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"解决初始网络问题2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"网络问题正在解决2015-09-01\",\"uiElements.timeline.technicalTesting\":\"技术测试2015-09-01\",\"uiElements.dropdown.dropdown\":\"落下\",\"uiElements.dropdown.hoverDropdown\":\"悬停下拉\",\"uiElements.dropdown.hoverMe\":\"悬停我\",\"uiElements.dropdown.hoverPlacement\":\"悬停放置下拉\",\"uiElements.dropdown.hoverDisableLink\":\"悬停下拉与禁用链接\",\"uiElements.dropdown.clickedDropdown\":\"点击下拉\",\"uiElements.dropdown.buttonDropdown\":\"按钮与下拉菜单\",\"uiElements.pagination.pagination\":\"分页\",\"uiElements.pagination.basic\":\"基本\",\"uiElements.pagination.more\":\"更多\",\"uiElements.pagination.changer\":\"换\",\"uiElements.pagination.jumper\":\"跨接器\",\"uiElements.pagination.miniSize\":\"迷你尺寸\",\"uiElements.pagination.simpleMode\":\"简单模式\",\"uiElements.pagination.controlled\":\"受控\",\"uiElements.pagination.totalNumber\":\"总数\",\"uiElements.rating.rating\":\"评分\",\"uiElements.rating.basicExample\":\"基本例子\",\"uiElements.rating.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.rating.halfStar\":\"半星\",\"uiElements.rating.halfStarSubTitle\":\"支持选择半星。\",\"uiElements.rating.showCopywriting\":\"显示文案\",\"uiElements.rating.showCopywritingSubTitle\":\"以速率组件添加文案。\",\"uiElements.rating.readOnly\":\"只读\",\"uiElements.rating.readOnlySubTitle\":\"只读，不能使用鼠标进行交互。\",\"uiElements.rating.otherCharacter\":\"其他性格\",\"uiElements.rating.otherCharacterSubTitle\":\"将默认明星替换为其他字符，如字母，数字，iconfont甚至中文字。\",\"uiElements.tree.tree\":\"树\",\"uiElements.tree.basicExample\":\"基本例子\",\"uiElements.tree.basicExampleSubTitle\":\"最基本的用法，告诉你如何使用可检查，可选择，禁用，defaultExpandKeys等。\",\"uiElements.tree.basicControlledExample\":\"基本控制示例\",\"uiElements.tree.basicControlledExampleSubTitle\":\"基本控制示例\",\"uiElements.tree.draggableExample\":\"可拖曳的例子\",\"uiElements.tree.draggableExampleSubTitle\":\"拖动treeNode插入另一个treeNode或插入到另一个父TreeNode中。\",\"uiElements.tree.loadAsync\":\"异步加载数据\",\"uiElements.tree.loadAsyncSubTitle\":\"单击以展开treeNode时异步加载数据。\",\"uiElements.tree.searchableExample\":\"可搜索的例子\",\"uiElements.tree.searchableExampleSubTitle\":\"可搜索的树\",\"uiElements.tree.treeWithLine\":\"树与线\",\"shuffle.descriptionOne\":\"Netscape 2.0发布，引入Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett发布了AJAX规范\",\"shuffle.descriptionThree\":\"jQuery 1.0发布\",\"shuffle.descriptionFour\":\"首先下划线\",\"shuffle.descriptionFive\":\"Backbone.js成为一件事情\",\"shuffle.descriptionSix\":\"角度1.0发布\",\"shuffle.descriptionSeven\":\"反应是开源的开发商高兴\",\"toggle.list\":\"名单\",\"toggle.grid\":\"格\",\"toggle.ascending\":\"上升\",\"toggle.descending\":\"降序\",\"toggle.shuffle\":\"拖曳\",\"toggle.rotate\":\"旋转\",\"toggle.addItem\":\"新增项目\",\"toggle.removeItem\":\"除去项目\",\"contactlist.searchContacts\":\"搜索联系人\",\"contactlist.addNewContact\":\"添加新联系人\",\"notes.ChoseColor\":\"为您的笔记选择一种颜色\",\"notes.addNote\":\"添加新注\",\"page404.title\":\"404\",\"page404.subTitle\":\"看起来你已经迷路了\",\"page404.description\":\"您正在寻找的页面不存在或已被移动。\",\"page404.backButton\":\"回家\",\"page500.title\":\"500\",\"page500.subTitle\":\"内部服务器错误\",\"page500.description\":\"出了些问题。请再试一次信。\",\"page500.backButton\":\"回家\",\"page.forgetPassTitle\":\"同构\",\"page.forgetPassSubTitle\":\"忘记密码？\",\"page.forgetPassDescription\":\"输入您的电子邮件，我们向您发送重置链接。\",\"page.sendRequest\":\"发送请求\",\"page.resetPassTitle\":\"同构\",\"page.resetPassSubTitle\":\"重设密码\",\"page.resetPassDescription\":\"输入新密码并进行确认。\",\"page.resetPassSave\":\"保存\",\"page.signInTitle\":\"同构\",\"page.signInRememberMe\":\"记住我\",\"page.signInButton\":\"签到\",\"page.signInPreview\":\"用户名：demo，密码：demodemo，或者点击任意按钮。\",\"page.signInFacebook\":\"用Facebook登录\",\"page.signInGooglePlus\":\"使用Google Plus登录\",\"page.signInAuth0\":\"用Auth0登录\",\"page.signInForgotPass\":\"忘记密码\",\"page.signInCreateAccount\":\"创建一个异构帐户\",\"page.signUpTitle\":\"同构\",\"page.signUpTermsConditions\":\"我同意条款和条件\",\"page.signUpButton\":\"注册\",\"page.signUpFacebook\":\"用Facebook注册\",\"page.signUpGooglePlus\":\"用Google Plus注册\",\"page.signUpAuth0\":\"注册Auth0\",\"page.signUpAlreadyAccount\":\"已经有账户？签到。\",\"widget.reportswidget.label\":\"收入\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"营销\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"咨询\",\"widget.singleprogresswidget4.label\":\"发展\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"未读电子邮件\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"图片上传\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"总信息\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"订单发布\",\"widget.salewidget1.label\":\"收入\",\"widget.salewidget1.price\":\"$ 15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget2.label\":\"收入\",\"widget.salewidget2.price\":\"$ 15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget3.label\":\"收入\",\"widget.salewidget3.price\":\"$ 15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget4.label\":\"收入\",\"widget.salewidget4.price\":\"$ 15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"新消息\",\"widget.cardwidget2.number\":\"100％\",\"widget.cardwidget2.text\":\"卷\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"成就\",\"widget.progresswidget1.label\":\"下载\",\"widget.progresswidget1.details\":\"50％完成\",\"widget.progresswidget2.label\":\"支持\",\"widget.progresswidget2.details\":\"80％满意客户\",\"widget.progresswidget3.label\":\"上传\",\"widget.progresswidget3.details\":\"65％完成\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"高级iOS开发人员\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"名字\",\"checkout.billingform.lastname\":\"姓\",\"checkout.billingform.company\":\"公司名\",\"checkout.billingform.email\":\"电子邮件地址\",\"checkout.billingform.mobile\":\"手机号码\",\"checkout.billingform.country\":\"国家\",\"checkout.billingform.city\":\"市\",\"checkout.billingform.address\":\"地址\",\"checkout.billingform.addressoptional\":\"公寓，套房，单位等（可选）\",\"checkout.billingform.checkbox\":\"创建一个帐户？\",\"antTable.title.image\":\"图片\",\"antTable.title.firstName\":\"名字\",\"antTable.title.lastName\":\"姓\",\"antTable.title.city\":\"市\",\"antTable.title.street\":\"街\",\"antTable.title.email\":\"电子邮件\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"基本地图\",\"Map.leaflet.basicMarkerTitle\":\"基本地图（带默认标记）\",\"Map.leaflet.leafletCustomMarkerTitle\":\"基本地图（使用自定义图标标记）\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"基本地图（使用自定义Html标记）\",\"Map.leaflet.leafletMarkerClusterTitle\":\"基本地图（带标记群集）\",\"Map.leaflet.leafletRoutingTitle\":\"基本地图路由\",\"Component.contacts.noOption\":\"找不到联系\",\"email.send\":\"发送\",\"email.cancel\":\"取消\",\"email.compose\":\"撰写\",\"email.noMessage\":\"请选择一个邮件阅读\",\"themeSwitcher.purchase\":\"现在买\",\"themeSwitcher.settings\":\"设置\",\"sidebar.selectbox\":\"选择\",\"sidebar.frappeChart\":\"图表\",\"topbar.myprofile\":\"我的简历\",\"topbar.help\":\"帮帮我\",\"topbar.logout\":\"登出\",\"topbar.viewAll\":\"查看全部\",\"topbar.viewCart\":\"查看购物车\",\"topbar.totalPrice\":\"总价格\",\"sidebar.scrumboard\":\"Scrum板\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"用品\",\"sidebar.firestorecrudinvestor\":\"投资者\"}");

/***/ }),

/***/ "../../node_modules/@iso/config/youtube_search.config.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/youtube_search.config.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const youtubeSearchApi = "your_youtube_search_api_key";
/* harmony default export */ __webpack_exports__["default"] = (youtubeSearchApi);

/***/ }),

/***/ "../../node_modules/@iso/lib/firebase/firebase.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/firebase/firebase.js ***!
  \********************************************************************************************/
/*! exports provided: firebaseApp, auth, db, rsf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseApp", function() { return firebaseApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rsf", function() { return rsf; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga-firebase */ "redux-saga-firebase");
/* harmony import */ var redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_config_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/config/firebase.config */ "../../node_modules/@iso/config/firebase.config.js");





const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID
};
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID
};
const config =  false ? undefined : devConfig; // !firebase.apps.length ? firebase.initializeApp(isoConfig) : firebase.app();

const firebaseApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(_iso_config_firebase_config__WEBPACK_IMPORTED_MODULE_4__["default"]) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
const rsf = new redux_saga_firebase__WEBPACK_IMPORTED_MODULE_3___default.a(firebaseApp);
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "../../node_modules/@iso/lib/firebase/firebase.util.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/firebase/firebase.util.js ***!
  \*************************************************************************************************/
/*! exports provided: convertCollectionsSnapshotToMap, getNewDocRef, addDocument, setDocument, getDocuments, getDocumentsByQuery, deleteDocuments, addCollectionAndDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCollectionsSnapshotToMap", function() { return convertCollectionsSnapshotToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewDocRef", function() { return getNewDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDocument", function() { return addDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDocument", function() { return setDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocuments", function() { return getDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentsByQuery", function() { return getDocumentsByQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDocuments", function() { return deleteDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCollectionAndDocuments", function() { return addCollectionAndDocuments; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ "../../node_modules/@iso/lib/firebase/firebase.js");


function convertCollectionsSnapshotToMap(snapshots) {
  return snapshots.docs.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection.data();
    return accumulator;
  }, {});
}
async function getNewDocRef(collectionName) {
  return await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName).doc();
}
async function addDocument(collectionName, documentData) {
  return await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName).add(documentData).then(docRef => docRef.id);
}
async function setDocument(collectionName, docRef, documentData) {
  return await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName).doc(docRef).set(documentData);
}
async function getDocuments(collectionName) {
  return await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName).get().then(querySnapshot => querySnapshot.docs.map(doc => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: doc.id
  }, doc.data())));
}
async function getDocumentsByQuery(collectionName, query) {
  console.log(...query, collectionName, 'test');
  return await _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName).where(...query).get().then(querySnapshot => querySnapshot.docs.map(doc => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: doc.id
  }, doc.data())));
}
async function deleteDocuments(collectionName) {
  const collectionRef = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionName);
  var batch = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  await collectionRef.get().then(querySnapshot => querySnapshot.docs.map(doc => batch.delete(collectionRef.doc(doc.id))));
  return await batch.commit().then(() => {
    console.log('Batch Deletion successfully committed!');
  });
}
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection(collectionKey);
  const batch = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit().then(() => {
    console.log('Batch Addition successfully committed!');
  });
}; // const { title, items } = doc.data();
//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//     };
//   });
//   console.log(transformedCollection);
//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/isServer.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/isServer.js ***!
  \*******************************************************************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
const isServer = true;

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/localStorage.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/localStorage.js ***!
  \***********************************************************************************************/
/*! exports provided: loadState, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadState", function() { return loadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

// localStorage.js
const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const saveState = (key, value) => {
  try {
    const serializedState = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value);

    localStorage.setItem(key, serializedState);
  } catch {// ignore write errors
  }
};

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/options.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/options.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = [{
  key: 'mailbox',
  label: 'sidebar.email',
  leftIcon: 'ion-android-mail'
}, {
  key: 'chat',
  label: 'sidebar.chat',
  leftIcon: 'ion-chatbubbles'
}, {
  key: 'ecommerce',
  label: 'sidebar.ecommerce',
  leftIcon: 'ion-bag',
  children: [{
    key: 'shop',
    label: 'sidebar.shop'
  }, {
    key: 'cart',
    label: 'sidebar.cart'
  }, {
    key: 'checkout',
    label: 'sidebar.checkout'
  }, {
    key: 'card',
    label: 'sidebar.cards'
  }]
}, {
  key: 'maps',
  label: 'sidebar.maps',
  leftIcon: 'ion-map',
  children: [{
    key: 'googlemap',
    label: 'sidebar.googleMap'
  }, {
    key: 'leafletmap',
    label: 'sidebar.leafletMap'
  }]
}, {
  key: 'my-profile',
  label: 'sidebar.profile',
  leftIcon: 'ion-person'
}, {
  key: 'scrum-board',
  label: 'sidebar.scrumboard',
  leftIcon: 'ion-android-checkbox-outline'
}, {
  key: 'invoice',
  label: 'sidebar.invoice',
  leftIcon: 'ion-clipboard'
}, {
  key: 'youtubeSearch',
  label: 'sidebar.youtubeSearch',
  leftIcon: 'ion-social-youtube'
}, {
  key: 'calendar',
  label: 'sidebar.calendar',
  leftIcon: 'ion-calendar'
}, {
  key: 'notes',
  label: 'sidebar.notes',
  leftIcon: 'ion-ios-paper'
}, {
  key: 'todo',
  label: 'sidebar.todos',
  leftIcon: 'ion-android-checkbox-outline'
}, {
  key: 'firestorecrud',
  label: 'sidebar.firestorecrud',
  leftIcon: 'ion-fireball',
  children: [{
    key: 'articles',
    label: 'sidebar.firestorecrudarticle'
  }, {
    key: 'investors',
    label: 'sidebar.firestorecrudinvestor'
  }]
}, {
  key: 'contacts',
  label: 'sidebar.contacts',
  leftIcon: 'ion-android-person-add'
}, {
  key: 'shuffle',
  label: 'sidebar.shuffle',
  leftIcon: 'ion-grid'
}, {
  key: 'charts',
  label: 'sidebar.charts',
  leftIcon: 'ion-arrow-graph-up-right',
  children: [{
    key: 'googleChart',
    label: 'sidebar.googleCharts'
  }, {
    key: 'reecharts',
    label: 'sidebar.recharts'
  }, {
    key: 'reactChart2',
    label: 'sidebar.reactChart2'
  }, {
    key: 'frappeChart',
    label: 'sidebar.frappeChart'
  }]
}, {
  key: 'Forms',
  label: 'sidebar.forms',
  leftIcon: 'ion-android-mail',
  children: [{
    key: 'InputField',
    label: 'sidebar.input'
  }, {
    key: 'editor',
    label: 'sidebar.editor'
  }, {
    key: 'FormsWithValidation',
    label: 'sidebar.formsWithValidation'
  }, {
    key: 'progress',
    label: 'sidebar.progress'
  }, {
    key: 'button',
    label: 'sidebar.button'
  }, {
    key: 'tab',
    label: 'sidebar.tab'
  }, {
    key: 'checkbox',
    label: 'sidebar.checkbox'
  }, {
    key: 'radiobox',
    label: 'sidebar.radiobox'
  }, {
    key: 'selectbox',
    label: 'sidebar.selectbox'
  }, {
    key: 'transfer',
    label: 'sidebar.transfer'
  }, {
    key: 'autocomplete',
    label: 'sidebar.autocomplete'
  }]
}, // {
//   key: 'gridLayout',
//   label: 'sidebar.boxOptions',
//   leftIcon: 'ion-cube'
// },
{
  key: 'uielements',
  label: 'sidebar.uiElements',
  leftIcon: 'ion-leaf',
  children: [{
    key: 'op_badge',
    label: 'sidebar.badge'
  }, {
    key: 'op_card',
    label: 'sidebar.card2'
  }, {
    key: 'op_carousel',
    label: 'sidebar.corusel'
  }, {
    key: 'op_collapse',
    label: 'sidebar.collapse'
  }, {
    key: 'op_popover',
    label: 'sidebar.popover'
  }, {
    key: 'op_tooltip',
    label: 'sidebar.tooltip'
  }, {
    key: 'op_tag',
    label: 'sidebar.tag'
  }, {
    key: 'op_timeline',
    label: 'sidebar.timeline'
  }, {
    key: 'dropdown',
    label: 'sidebar.dropdown'
  }, {
    key: 'pagination',
    label: 'sidebar.pagination'
  }, {
    key: 'rating',
    label: 'sidebar.rating'
  }, {
    key: 'tree',
    label: 'sidebar.tree'
  }, {
    key: 'swiperslider',
    label: 'sidebar.swiperslider'
  }]
}, {
  key: 'advancedUielements',
  label: 'sidebar.advancedElements',
  leftIcon: 'ion-flash',
  children: [{
    key: 'reactDates',
    label: 'sidebar.reactDates'
  }, {
    key: 'codeMirror',
    label: 'sidebar.codeMirror'
  }, {
    key: 'uppy',
    label: 'sidebar.uppy'
  }, {
    key: 'dropzone',
    label: 'sidebar.dropzone'
  }]
}, {
  key: 'feedback',
  label: 'sidebar.feedback',
  leftIcon: 'ion-thumbsup',
  children: [{
    key: 'alert',
    label: 'sidebar.alert'
  }, {
    key: 'modal',
    label: 'sidebar.modal'
  }, {
    key: 'message',
    label: 'sidebar.message'
  }, {
    key: 'notification',
    label: 'sidebar.notification'
  }, {
    key: 'popConfirm',
    label: 'sidebar.popConfirm'
  }, {
    key: 'spin',
    label: 'sidebar.spin'
  }]
}, {
  key: 'table',
  label: 'sidebar.tables',
  leftIcon: 'ion-android-menu',
  children: [{
    key: 'table_ant',
    label: 'sidebar.antTables'
  }]
}, {
  key: 'pages',
  label: 'sidebar.pages',
  leftIcon: 'ion-document-text',
  children: [{
    key: '404',
    label: 'sidebar.404',
    withoutDashboard: true
  }, {
    key: '500',
    label: 'sidebar.500',
    withoutDashboard: true
  }, {
    key: 'signin',
    label: 'sidebar.signIn',
    withoutDashboard: true
  }, {
    key: 'signup',
    label: 'sidebar.signUp',
    withoutDashboard: true
  }, {
    key: 'forgotpassword',
    label: 'sidebar.forgotPw',
    withoutDashboard: true
  }, {
    key: 'resetpassword',
    label: 'sidebar.resetPw',
    withoutDashboard: true
  } // {
  //   key: 'comingSoon',
  //   label: 'sidebar.comingSoon',
  //    withoutDashboard: true
  // }
  ]
}, {
  key: 'githubSearch',
  label: 'sidebar.githubSearch',
  leftIcon: 'ion-social-github'
}, {
  key: 'blank_page',
  label: 'sidebar.blankPage',
  leftIcon: 'ion-document'
}];
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/rtl.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/rtl.js ***!
  \**************************************************************************************/
/*! exports provided: default, direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/rtl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    "data-rtl": direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/style_utils.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/style_utils.js ***!
  \**********************************************************************************************/
/*! exports provided: transition, borderRadius, boxShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
// Transition
function transition(timing = 0.3) {
  return `
      -webkit-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
} // Border Radius

function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
} // Box Shadow

function boxShadow(shadow = 'none') {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/url_sync.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/url_sync.js ***!
  \*******************************************************************************************/
/*! exports provided: getInitData, setUrl, getDefaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitData", function() { return getInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUrl", function() { return setUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPath", function() { return getDefaultPath; });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "../../node_modules/@iso/lib/helpers/options.js");
/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isServer */ "../../node_modules/@iso/lib/helpers/isServer.js");



function getInitData() {
  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"]) {
    const initData = qs__WEBPACK_IMPORTED_MODULE_0___default.a.parse(window.location.search.slice(1));
    if (initData.toggle) initData.toggle.free_shipping = initData.toggle.free_shipping === 'true' ? true : undefined;
    return initData;
  }

  return false;
}
function setUrl(searchState) {
  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"]) {
    const search = searchState ? `${window.location.pathname}?${qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(searchState)}` : '';
    window.history.pushState(searchState, null, search);
  }

  return;
}
function getDefaultPath() {
  const getParent = lastRoute => {
    const parent = [];
    if (!lastRoute) return parent;
    parent.push(lastRoute);
    _options__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(option => {
      if (option.children) {
        option.children.forEach(child => {
          if (child.key === lastRoute) {
            parent.push(option.key);
          }
        });
      }
    });
    return parent;
  };

  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"] && window.location.pathname) {
    const routes = window.location.pathname.split('/');

    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      return getParent(lastRoute);
    }
  }

  return [];
}

/***/ }),

/***/ "../../node_modules/@iso/lib/helpers/utility.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/helpers/utility.js ***!
  \******************************************************************************************/
/*! exports provided: clearToken, getToken, arrayEqual, timeDifference, stringToInt, stringToPosetiveInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearToken", function() { return clearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeDifference", function() { return timeDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToInt", function() { return stringToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToPosetiveInt", function() { return stringToPosetiveInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);


function clearToken() {
  localStorage.removeItem('id_token');
}
function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    return new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]({
      idToken
    });
  } catch (err) {
    clearToken();
    return new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]();
  }
}
function arrayEqual(array1, array2) {
  return array1.sort().toString() == array2.sort().toString();
}
function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();

  const numberEnding = number => {
    return number > 1 ? 's' : '';
  };

  const number = num => num > 9 ? '' + num : '0' + num;

  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);

    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }

    const days = Math.floor((temp %= 31536000) / 86400);

    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }

    const hours = Math.floor((temp %= 86400) / 3600);

    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }

    const minutes = Math.floor((temp %= 3600) / 60);

    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }

    return 'a few seconds ago';
  };

  return getTime();
}
function stringToInt(value, defValue = 0) {
  if (!value) {
    return 0;
  } else if (!isNaN(value)) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value, 10);
  }

  return defValue;
}
function stringToPosetiveInt(value, defValue = 0) {
  const val = stringToInt(value, defValue);
  return val > -1 ? val : defValue;
}

/***/ }),

/***/ "../../node_modules/@iso/lib/hooks/useWindowSize.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/lib/hooks/useWindowSize.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../../node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "lodash/throttle");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);



const events = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a();

const onResize = () => events.forEach(fn => fn());

const useWindowSize = (options = {}) => {
  const {
    throttleMs = 100
  } = options;
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    width:  false && false,
    height:  false && false
  });
  const handle = lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(() => {
    setSize({
      width:  false && false,
      height:  false && false
    });
  }, throttleMs);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);
    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, [handle]);
  return size;
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "../../node_modules/@iso/redux/app/actions.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/app/actions.js ***!
  \****************************************************************************************/
/*! exports provided: getView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
function getView(width) {
  let newView = 'MobileView';

  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }

  return newView;
}
const actions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  CLEAR_MENU: 'CLEAR_MENU',
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current
  }),
  clearMenu: () => ({
    type: actions.CLEAR_MENU
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/app/reducer.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/app/reducer.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _iso_lib_helpers_url_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/url_sync */ "../../node_modules/@iso/lib/helpers/url_sync.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/app/actions.js");
/* harmony import */ var _iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/isServer */ "../../node_modules/@iso/lib/helpers/isServer.js");




const preKeys = Object(_iso_lib_helpers_url_sync__WEBPACK_IMPORTED_MODULE_1__["getDefaultPath"])();
const initState = {
  collapsed: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__["isServer"] && window.innerWidth > 1220 ? false : true,
  view: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__["isServer"] && Object(_actions__WEBPACK_IMPORTED_MODULE_2__["getView"])(window.innerWidth),
  height: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__["isServer"] && window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys
};
function appReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].COLLPSE_CHANGE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        collapsed: !state.collapsed
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].COLLPSE_OPEN_DRAWER:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        openDrawer: !state.openDrawer
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          collapsed: action.collapsed,
          view: action.view,
          height
        });
      }

      break;

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_OPEN_KEYS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        openKeys: action.openKeys
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_CURRENT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        current: action.current
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CLEAR_MENU:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        openKeys: [],
        current: []
      });

    default:
      return state;
  }

  return state;
}

/***/ }),

/***/ "../../node_modules/@iso/redux/articles/actions.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/articles/actions.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DOCUMENT = 'ARTICLE_';
const actions = {
  LOAD_FROM_FIRESTORE: DOCUMENT + 'LOAD_FROM_FIRESTORE',
  LOAD_FROM_FIRESTORE_SUCCESS: DOCUMENT + 'LOAD_FROM_FIRESTORE_SUCCESS',
  LOAD_FROM_FIRESTORE_ERROR: DOCUMENT + 'LOAD_FROM_FIRESTORE_ERROR',
  SAVE_INTO_FIRESTORE: DOCUMENT + 'SAVE_INTO_FIRESTORE',
  SAVE_INTO_FIRESTORE_ERROR: DOCUMENT + 'SAVE_INTO_FIRESTORE_ERROR',
  RESET_FIRESTORE_DOCUMENTS: DOCUMENT + 'RESET_FIRESTORE_DOCUMENTS',
  RESET_FIRESTORE_DOCUMENTS_ERROR: DOCUMENT + 'RESET_FIRESTORE_DOCUMENTS_ERROR',
  TOGGLE_FIRESTORE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_FIRESTORE_HANDLE_MODAL',
  FIRESTORE_UPDATE: DOCUMENT + 'FIRESTORE_UPDATE',
  loadFromFireStore: () => {
    return {
      type: actions.LOAD_FROM_FIRESTORE
    };
  },
  loadFromFireStoreSuccess: data => ({
    type: actions.LOAD_FROM_FIRESTORE_SUCCESS,
    payload: {
      data
    }
  }),
  loadFromFireStoreError: error => ({
    type: actions.LOAD_FROM_FIRESTORE_ERROR,
    payload: {
      error
    }
  }),
  saveIntoFireStore: (data, actionName = 'insert') => ({
    type: actions.SAVE_INTO_FIRESTORE,
    payload: {
      data,
      actionName
    }
  }),
  toggleModal: (data = null) => ({
    type: actions.TOGGLE_FIRESTORE_HANDLE_MODAL,
    payload: {
      data
    }
  }),
  update: data => ({
    type: actions.FIRESTORE_UPDATE,
    payload: {
      data
    }
  }),
  saveIntoFireStoreError: error => ({
    type: actions.SAVE_INTO_FIRESTORE_ERROR,
    payload: {
      error
    }
  }),
  resetFireStoreDocuments: () => ({
    type: actions.RESET_FIRESTORE_DOCUMENTS
  }),
  resetFireStoreDocumentsError: error => ({
    type: actions.RESET_FIRESTORE_DOCUMENTS_ERROR,
    payload: {
      error
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/articles/fakeData.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/articles/fakeData.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let createdAt = new Date().getTime();
const tableData = JSON.parse(`[{
  "id": "1",
  "title": "React is the future",
  "description": "Let’s take a closer look at some of the patterns that are emerging in the React ecosystem.",
  "excerpt": "Let’s take a closer look at some of the patterns that are emerging",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "future-in-react-116140e5fe8f"
}, {
  "id": "2",
  "title": "Global configuration of webpack, react and CRA",
  "description": "We are very happy to introduce. It’s available on npm effective immediately. To upgrade, run:",
  "excerpt": "Introducing the devtools world",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "next5-react"
}, {
  "id": "3",
  "title": "Reactive Pro: A user guide",
  "description": "Reactive a modern web based filtering and searching plugin. I have already released two apps in production, Kiven Aa (React) and Pollen Chat (React Native). ",
  "excerpt": "I’ve been working with React and React-Native for the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}, {
  "id": "4",
  "title": "Userplace - a compelete user experience.",
  "description": "There, You can use the traditional if statement or the switch statement. In this article, we’ll explore a few alternatives ",
  "excerpt": "I’ve been the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}, {
  "id": "5",
  "title": "React is rulling the tech ",
  "description": "There, You can use the traditional if statement or the switch statement. In this article, we’ll explore a few alternatives ",
  "excerpt": "I’ve been the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}]`);
const sortOption = {};

class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }

  dataModel(index) {
    return tableData[index];
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }

    return this.datas[index];
  }

  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }

    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }

  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }

  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }

  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;

    if (valueA > valueB) {
      sortVal = 1;
    }

    if (valueA < valueB) {
      sortVal = -1;
    }

    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * -1;
    }

    return sortVal;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (fakeData);

/***/ }),

/***/ "../../node_modules/@iso/redux/articles/reducers.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/articles/reducers.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/articles/actions.js");


const initState = {
  isLoading: false,
  errorMessage: false,
  articles: {},
  modalActive: false,
  article: {
    key: null,
    id: new Date().getTime(),
    title: '',
    slug: '',
    excerpt: '',
    status: 'draft',
    // publish
    description: '',
    created_at: new Date().getTime(),
    deleted_at: null // soft delete

  }
};
function reducer(state = initState, {
  type,
  payload,
  newRecord
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: true,
        errorMessage: false,
        modalActive: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        articles: payload.data,
        errorMessage: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE_ERROR:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        errorMessage: 'There is a loading problem'
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_FIRESTORE_HANDLE_MODAL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        modalActive: !state.modalActive,
        article: payload.data == null ? initState.article : payload.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].FIRESTORE_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        article: payload.data
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/articles/sagas.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/articles/sagas.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/articles/actions.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fakeData */ "../../node_modules/@iso/redux/articles/fakeData.js");
/* harmony import */ var _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/lib/firebase/firebase */ "../../node_modules/@iso/lib/firebase/firebase.js");
/* harmony import */ var _iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/lib/firebase/firebase.util */ "../../node_modules/@iso/lib/firebase/firebase.util.js");







const fakeDataList = new _fakeData__WEBPACK_IMPORTED_MODULE_4__["default"](5).getAll();
/**
 * DOC: https://redux-saga-firebase.js.org/reference/dev/firestore
 */

const COLLECTION_NAME = 'articles'; // change your collection

const ORDER_BY = 'id';
const ORDER = 'desc';

function* loadFromFirestore() {
  try {
    const collectionRef = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection(COLLECTION_NAME).where('deleted_at', '==', null).orderBy(ORDER_BY, ORDER);
    const snapshots = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.getCollection, collectionRef);
    let data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["convertCollectionsSnapshotToMap"], snapshots);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromFireStoreSuccess(data));
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromFireStoreError(error));
  }
}

function* storeIntoFirestore({
  payload
}) {
  const {
    data,
    actionName
  } = payload;

  try {
    switch (actionName) {
      case 'delete':
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.setDocument, `${COLLECTION_NAME}/${data.key}`, {
          deleted_at: new Date().getTime()
        });
        break;

      case 'update':
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.setDocument, `${COLLECTION_NAME}/${data.key}`, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(data, ['key'])));
        break;

      default:
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.addDocument, COLLECTION_NAME, data);
        break;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].saveIntoFireStoreError(error));
  }
}

function* resetFireStoreDocuments() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["deleteDocuments"], COLLECTION_NAME);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["addCollectionAndDocuments"], COLLECTION_NAME, fakeDataList);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE
    });
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE, loadFromFirestore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SAVE_INTO_FIRESTORE, storeIntoFirestore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].RESET_FIRESTORE_DOCUMENTS, resetFireStoreDocuments)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/box/DemoBox.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/box/DemoBox.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/box/DemoBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReactComponenta1 = () => __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, " Hello ");

const ReactComponenta2 = () => __jsx("input", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

const ReactComponenta3 = () => __jsx("button", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Add Me");

const allBox = [{
  uid: 'a1',
  title: 'Box-1',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  reactComponent: ReactComponenta1
}, {
  uid: 'a2',
  title: 'Box-2',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  reactComponent: ReactComponenta2
}, {
  uid: 'a3',
  title: 'Box-3',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  reactComponent: ReactComponenta3
}, {
  uid: 'a4',
  title: 'Box-4',
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  reactComponent: ReactComponenta3
}];
/* harmony default export */ __webpack_exports__["default"] = (allBox);

/***/ }),

/***/ "../../node_modules/@iso/redux/box/actions.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/box/actions.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const boxActions = {
  DELETE_BOX: 'DELETE_BOX',
  SAVE_BOX: 'SAVE_BOX',
  deleteBox: uid => ({
    type: boxActions.DELETE_BOX,
    uid
  }),
  saveBox: box => ({
    type: boxActions.SAVE_BOX,
    box
  })
};
/* harmony default export */ __webpack_exports__["default"] = (boxActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/box/reducer.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/box/reducer.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return boxReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _DemoBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoBox */ "../../node_modules/@iso/redux/box/DemoBox.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/box/actions.js");




const generateLayout = () => {
  let y = -2;
  const h = 2;
  const w = 48;
  _DemoBox__WEBPACK_IMPORTED_MODULE_1__["default"].map((box, index) => {
    let temp = {};
    temp.lg = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString()
    };
    temp.md = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString()
    };
    temp.sm = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString()
    };
    temp.xs = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString()
    };
    temp.xxs = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString()
    };
    _DemoBox__WEBPACK_IMPORTED_MODULE_1__["default"][index].size = temp;
    return null;
  });
  return _DemoBox__WEBPACK_IMPORTED_MODULE_1__["default"];
};

const initState = {
  allBox: generateLayout(),
  reload: false
};
function boxReducer(state = initState, action) {
  const {
    allBox
  } = state;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE_BOX:
      let tempAllBox = [];
      allBox.map(box => {
        if (box.uid.toString() !== action.uid.toString()) {
          tempAllBox.push(box);
        }

        return null;
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        allBox: tempAllBox,
        reload: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SAVE_BOX:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        reload: false,
        allBox: action.box
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/calendar/DemoEvents.js":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/calendar/DemoEvents.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const events = [{
  allDay: false,
  start: '2017-06-13T12:41:31.046Z',
  end: '2017-06-13T12:41:31.046Z'
}, {
  allDay: true,
  start: '2017-06-06T18:22:42.716Z',
  end: '2017-06-06T18:22:42.716Z'
}, {
  allDay: false,
  start: '2017-06-14T18:53:31.353Z',
  end: '2017-06-14T18:53:31.353Z'
}, {
  allDay: true,
  start: '2017-06-06T10:50:35.587Z',
  end: '2017-06-06T10:50:35.587Z'
}, {
  allDay: true,
  start: '2017-06-01T07:26:27.020Z',
  end: '2017-06-01T07:26:27.020Z'
}, {
  allDay: false,
  start: '2017-06-01T04:19:19.302Z',
  end: '2017-06-01T04:19:19.302Z'
}, {
  allDay: true,
  start: '2017-06-05T08:21:30.519Z',
  end: '2017-06-05T08:21:30.519Z'
}, {
  allDay: true,
  start: '2017-06-06T12:33:34.094Z',
  end: '2017-06-06T12:33:34.094Z'
}, {
  allDay: false,
  start: '2017-06-06T19:08:51.789Z',
  end: '2017-06-06T19:08:51.789Z'
}, {
  allDay: false,
  start: '2017-06-04T12:53:06.477Z',
  end: '2017-06-04T12:53:06.477Z'
}, {
  allDay: true,
  start: '2017-05-31T08:13:58.232Z',
  end: '2017-05-31T08:13:58.232Z'
}, {
  allDay: true,
  start: '2017-05-31T20:49:56.502Z',
  end: '2017-05-31T20:49:56.502Z'
}, {
  allDay: false,
  start: '2017-05-25T16:37:46.342Z',
  end: '2017-05-25T16:37:46.342Z'
}, {
  allDay: true,
  start: '2017-05-22T20:55:43.440Z',
  end: '2017-05-22T20:55:43.440Z'
}, {
  allDay: true,
  start: '2017-06-08T01:26:44.401Z',
  end: '2017-06-08T01:26:44.401Z'
}, {
  allDay: false,
  start: '2017-06-13T15:13:00.444Z',
  end: '2017-06-13T15:13:00.444Z'
}, {
  allDay: true,
  start: '2017-06-15T15:07:34.588Z',
  end: '2017-06-15T15:07:34.588Z'
}, {
  allDay: true,
  start: '2017-06-17T05:51:03.042Z',
  end: '2017-06-17T05:51:03.042Z'
}, {
  allDay: false,
  start: '2017-06-04T05:44:43.848Z',
  end: '2017-06-04T05:44:43.848Z'
}, {
  allDay: true,
  start: '2017-05-27T18:52:12.327Z',
  end: '2017-05-27T18:52:12.327Z'
}, {
  allDay: false,
  start: '2017-06-03T10:56:32.981Z',
  end: '2017-06-03T10:56:32.981Z'
}, {
  allDay: true,
  start: '2017-06-04T23:39:50.313Z',
  end: '2017-06-04T23:39:50.313Z'
}, {
  allDay: false,
  start: '2017-06-13T01:47:36.119Z',
  end: '2017-06-13T01:47:36.119Z'
}, {
  allDay: true,
  start: '2017-06-09T10:53:59.669Z',
  end: '2017-06-09T10:53:59.669Z'
}, {
  allDay: false,
  start: '2017-06-06T23:37:30.150Z',
  end: '2017-06-06T23:37:30.150Z'
}, {
  allDay: false,
  start: '2017-05-24T15:47:41.647Z',
  end: '2017-05-24T15:47:41.647Z'
}, {
  allDay: false,
  start: '2017-05-20T09:37:22.294Z',
  end: '2017-05-20T09:37:22.294Z'
}, {
  allDay: true,
  start: '2017-05-22T04:18:23.139Z',
  end: '2017-05-22T04:18:23.139Z'
}, {
  allDay: true,
  start: '2017-05-21T12:52:59.331Z',
  end: '2017-05-21T12:52:59.331Z'
}, {
  allDay: false,
  start: '2017-06-05T19:12:46.218Z',
  end: '2017-06-05T19:12:46.218Z'
}, {
  allDay: false,
  start: '2017-06-18T05:42:32.376Z',
  end: '2017-06-18T05:42:32.376Z'
}, {
  allDay: false,
  start: '2017-06-13T08:25:55.959Z',
  end: '2017-06-13T08:25:55.959Z'
}, {
  allDay: true,
  start: '2017-06-13T06:24:45.567Z',
  end: '2017-06-13T06:24:45.567Z'
}, {
  allDay: false,
  start: '2017-06-10T16:02:57.478Z',
  end: '2017-06-10T16:02:57.478Z'
}, {
  allDay: false,
  start: '2017-06-13T18:05:48.180Z',
  end: '2017-06-13T18:05:48.180Z'
}, {
  allDay: false,
  start: '2017-06-17T11:41:16.372Z',
  end: '2017-06-17T11:41:16.372Z'
}, {
  allDay: true,
  start: '2017-05-25T01:29:20.872Z',
  end: '2017-05-25T01:29:20.872Z'
}, {
  allDay: false,
  start: '2017-06-01T18:23:07.322Z',
  end: '2017-06-01T18:23:07.322Z'
}, {
  allDay: false,
  start: '2017-05-22T04:20:36.858Z',
  end: '2017-05-22T04:20:36.858Z'
}, {
  allDay: false,
  start: '2017-05-26T12:05:32.983Z',
  end: '2017-05-26T12:05:32.983Z'
}, {
  allDay: false,
  start: '2017-06-01T13:57:24.817Z',
  end: '2017-06-01T13:57:24.817Z'
}, {
  allDay: false,
  start: '2017-05-29T17:58:20.674Z',
  end: '2017-05-29T17:58:20.674Z'
}, {
  allDay: false,
  start: '2017-06-11T01:19:28.050Z',
  end: '2017-06-11T01:19:28.050Z'
}, {
  allDay: false,
  start: '2017-05-31T07:10:27.044Z',
  end: '2017-05-31T07:10:27.044Z'
}, {
  allDay: true,
  start: '2017-05-26T09:00:39.158Z',
  end: '2017-05-26T09:00:39.158Z'
}, {
  allDay: true,
  start: '2017-05-31T17:15:18.611Z',
  end: '2017-05-31T17:15:18.611Z'
}, {
  allDay: false,
  start: '2017-06-10T19:42:35.124Z',
  end: '2017-06-10T19:42:35.124Z'
}, {
  allDay: false,
  start: '2017-05-20T18:40:49.210Z',
  end: '2017-05-20T18:40:49.210Z'
}, {
  allDay: false,
  start: '2017-06-04T11:36:22.540Z',
  end: '2017-06-04T11:36:22.540Z'
}, {
  allDay: false,
  start: '2017-06-13T20:53:08.880Z',
  end: '2017-06-13T20:53:08.880Z'
}];
const datediff = new moment__WEBPACK_IMPORTED_MODULE_0___default.a(new Date()).diff(new moment__WEBPACK_IMPORTED_MODULE_0___default.a('2017-06-01T18:23:07.322Z'), 'days');
events.forEach((event, index) => {
  events[index].id = `${index + 1}`;
  events[index].title = `Demo event ${index + 1}`;
  events[index].desc = `Desc of event ${index + 1}`;
  events[index].start = new moment__WEBPACK_IMPORTED_MODULE_0___default.a(event.start).add(datediff, 'days').toDate();
  events[index].end = new moment__WEBPACK_IMPORTED_MODULE_0___default.a(event.end).add(datediff, 'days').toDate();
});
/* harmony default export */ __webpack_exports__["default"] = (events.splice(0, 10));

/***/ }),

/***/ "../../node_modules/@iso/redux/calendar/actions.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/calendar/actions.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calendarActions = {
  CALENDAR_VIEW: 'CALENDAR_VIEW',
  CALENDAR_EVENTS: 'CALENDAR_EVENTS',
  changeView: view => ({
    type: calendarActions.CALENDAR_VIEW,
    view
  }),
  changeEvents: events => ({
    type: calendarActions.CALENDAR_EVENTS,
    events
  })
};
/* harmony default export */ __webpack_exports__["default"] = (calendarActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/calendar/reducer.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/calendar/reducer.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calendarReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/calendar/actions.js");
/* harmony import */ var _DemoEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DemoEvents */ "../../node_modules/@iso/redux/calendar/DemoEvents.js");



const initState = {
  events: _DemoEvents__WEBPACK_IMPORTED_MODULE_2__["default"],
  view: 'month'
};
function calendarReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CALENDAR_VIEW:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        view: action.view
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CALENDAR_EVENTS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        events: action.events
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/card/actions.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/card/actions.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/card/config.js");

const cardActions = {
  CHANGE_CARDS: 'CHANGE_CARDS',
  addCard: card => {
    return (dispatch, getState) => {
      const cards = [card, ...getState().Cards.cards];
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  editCard: editCard => {
    return (dispatch, getState) => {
      const oldCards = getState().Cards.cards;
      const cards = [];
      oldCards.forEach(card => {
        if (card.id !== editCard.id) {
          cards.push(card);
        } else {
          cards.push(editCard);
        }
      });
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  deleteCard: deletedCard => {
    return (dispatch, getState) => {
      const oldCards = getState().Cards.cards;
      const cards = [];
      oldCards.forEach(card => {
        if (card.id !== deletedCard.id) {
          cards.push(card);
        }
      });
      dispatch({
        type: cardActions.CHANGE_CARDS,
        cards
      });
    };
  },
  restoreCards: () => {
    return {
      type: cardActions.CHANGE_CARDS,
      cards: _config__WEBPACK_IMPORTED_MODULE_0__["fakedata"]
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/card/config.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/card/config.js ***!
  \****************************************************************************************/
/*! exports provided: createColumns, fakedata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColumns", function() { return createColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakedata", function() { return fakedata; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/components/Tables/HelperCells */ "../../node_modules/@iso/components/Tables/HelperCells.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/card/config.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function createColumns(editColumn, deleteColumn) {
  return [{
    title: 'Number',
    dataIndex: 'number',
    rowKey: 'number'
  }, {
    title: 'Full Name',
    dataIndex: 'name',
    rowKey: 'name'
  }, {
    title: 'Notes',
    dataIndex: 'notes',
    rowKey: 'notes'
  }, {
    title: '',
    rowKey: 'action',
    render: (text, record) => __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_1__["DeleteCell"], {
      onDeleteCell: () => {
        deleteColumn(record);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))
  }];
}

const fakedata = [{
  id: 3,
  key: 1,
  number: '**** **** **** 4243',
  name: 'John Brown',
  notes: 'Nulla vitae elit libero, a pharetra augue.'
}, {
  id: 2,
  key: 2,
  number: '**** **** **** 4242',
  name: 'Jim Green',
  notes: 'Nullam id dolor id nibh ultricies vehicula ut id elit.'
}, {
  id: 1,
  key: 3,
  number: '**** **** **** 4241',
  name: 'Joe Black',
  notes: 'Nulla vitae elit libero, a pharetra augue.'
}];


/***/ }),

/***/ "../../node_modules/@iso/redux/card/reducer.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/card/reducer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/card/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/card/actions.js");



const cards = _config__WEBPACK_IMPORTED_MODULE_1__["fakedata"];
const initState = {
  cards
};
function cardReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_CARDS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cards: action.cards
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/card/saga.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/card/saga.js ***!
  \**************************************************************************************/
/*! exports provided: changedCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedCard", function() { return changedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/card/actions.js");


function* changedCard() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_CARDS, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(changedCard)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/chat/actions.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/chat/actions.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  CHAT_INIT: 'CHAT_INIT',
  CHAT_INIT_SAGA: 'CHAT_INIT_SAGA',
  CHAT_UPDATE_CHATROOM: 'CHAT_UPDATE_CHATROOM',
  CHAT_TOGGLE_COMPOSE: 'CHAT_TOGGLE_COMPOSE',
  CHAT_SET_TOGGLE_VIEW_PROFILE: 'CHAT_SET_TOGGLE_VIEW_PROFILE',
  CHAT_SET_TOGGLE_COMPOSED_ID: 'CHAT_SET_TOGGLE_COMPOSED_ID',
  CHAT_SEND_MESSAGE: 'CHAT_SEND_MESSAGE',
  CHAT_UPDATE_CHATROOM_SAGA: 'CHAT_UPDATE_CHATROOM_SAGA',
  TOGGLE_MOBILE_LIST: 'TOGGLE_MOBILE_LIST',
  TOGGLE_MOBILE_PROFILE: 'TOGGLE_MOBILE_PROFILE',
  RESTORE_DEMO_DATA: 'RESTORE_DEMO_DATA',
  RESTORE_DEMO_DATA_DONE: 'RESTORE_DEMO_DATA_DONE',
  UPDATE_NEW_USER_PROPS: 'UPDATE_NEW_USER_PROPS',
  ADD_NEW_USER: 'ADD_NEW_USER',
  ADD_NEW_USER_SAGA: 'ADD_NEW_USER_SAGA',
  NEW_MESSAGE_SUCCESFULL: 'NEW_MESSAGE_SUCCESFULL',
  chatInit: userId => ({
    type: actions.CHAT_INIT,
    payload: {
      userId
    }
  }),
  toggleCompose: () => ({
    type: actions.CHAT_TOGGLE_COMPOSE
  }),
  toggleViewProfile: viewProfile => ({
    type: actions.CHAT_SET_TOGGLE_VIEW_PROFILE,
    viewProfile
  }),
  setComposedId: id => ({
    type: actions.CHAT_SET_TOGGLE_COMPOSED_ID,
    id
  }),
  setSelectedChatroom: chatRoom => ({
    type: actions.CHAT_UPDATE_CHATROOM_SAGA,
    payload: {
      chatRoom,
      selected: true
    }
  }),
  sendMessage: message => ({
    type: actions.CHAT_SEND_MESSAGE,
    payload: message
  }),
  toggleMobileList: mobileActiveList => ({
    type: actions.TOGGLE_MOBILE_LIST,
    mobileActiveList
  }),
  toggleMobileProfile: mobileActiveProfile => ({
    type: actions.TOGGLE_MOBILE_PROFILE,
    mobileActiveProfile
  }),
  restoreData: demoData => ({
    type: actions.RESTORE_DEMO_DATA,
    demoData
  }),
  updateNewUsersProp: addNewUsersProp => ({
    type: actions.UPDATE_NEW_USER_PROPS,
    addNewUsersProp
  }),
  addNewUser: (user, addNewUsersProp) => ({
    type: actions.ADD_NEW_USER,
    user,
    addNewUsersProp
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/chat/reducers.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/chat/reducers.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/chat/actions.js");


const initState = {
  users: null,
  chatRooms: [],
  messages: [],
  selectedChatRoom: null,
  openCompose: false,
  viewProfile: false,
  composedId: null,
  loading: true,
  error: false,
  mobileActiveList: true,
  mobileActiveProfile: false,
  restoringData: false,
  addNewUsersProp: {
    modalActive: false
  }
};

const sortTimeStamp = (optionA, optionB) => optionA.messageTime - optionB.messageTime;

const sortChatRooms = (optionA, optionB) => optionB.lastMessageTime - optionA.lastMessageTime;

function reducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHAT_INIT_SAGA:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          userId: action.userId,
          user: action.user,
          users: action.users,
          chatRooms: action.chatRooms,
          messages: action.messages,
          selectedChatRoom: action.chatRooms[0],
          loading: false
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHAT_UPDATE_CHATROOM:
      {
        const {
          chatRoom,
          messages,
          selected
        } = action;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          chatRooms: state.chatRooms.map(chatroom => chatroom.id === chatRoom.id ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, chatroom, {
            lastMessage: chatRoom.lastMessage,
            lastMessageTime: chatRoom.lastMessageTime
          }) : chatroom).sort(sortChatRooms),
          composedId: null,
          openCompose: false,
          selectedChatRoom: selected ? chatRoom : state.selectedChatRoom,
          viewProfile: selected ? false : state.viewProfile,
          messages: messages ? messages.sort(sortTimeStamp) : state.messages
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHAT_TOGGLE_COMPOSE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        openCompose: !state.openCompose,
        viewProfile: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHAT_SET_TOGGLE_COMPOSED_ID:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        composedId: action.id
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHAT_SET_TOGGLE_VIEW_PROFILE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        viewProfile: action.viewProfile
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_MOBILE_LIST:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        mobileActiveList: action.mobileActiveList
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_MOBILE_PROFILE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        mobileActiveProfile: action.mobileActiveProfile
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].RESTORE_DEMO_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        restoringData: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].RESTORE_DEMO_DATA_DONE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        restoringData: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_NEW_USER_PROPS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        addNewUsersProp: action.addNewUsersProp
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].NEW_MESSAGE_SUCCESFULL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        openCompose: false,
        composedId: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_NEW_USER_SAGA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        addNewUsersProp: {
          modalActive: false
        },
        users: [action.user, ...state.users],
        chatRooms: [action.chatRoom, ...state.chatRooms]
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/chat/sagas.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/chat/sagas.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/chat/actions.js");
/* harmony import */ var _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/firebase/firebase */ "../../node_modules/@iso/lib/firebase/firebase.js");
/* harmony import */ var _iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/lib/firebase/firebase.util */ "../../node_modules/@iso/lib/firebase/firebase.util.js");






const getSelectedChatRoom = state => state.Chat.selectedChatRoom;

const reverseString = str => str.split('').reverse().join('');

const sortChatrooms = (optionA, optionB) => optionB.lastMessageTime - optionA.lastMessageTime;

const sortMessages = (optionA, optionB) => optionA.messageTime - optionB.messageTime;

const getCurrentUser = () => {
  return {
    userId: 'wt4TiasxgPrQ3dNwVZ55',
    user: {
      id: 'wt4TiasxgPrQ3dNwVZ55',
      dob: '06-Apr-1993',
      gender: 'Male',
      language: 'Burmese',
      mobileNo: '5726784596',
      name: 'Zondra Kulic',
      profileImageUrl: 'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-zonra.png'
    }
  };
};

let chatroomsUserCollections;
let chatroomCollectionRef = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('chatRooms');
let messagesCollectionRef = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('messages');

const sendMessageBatch = async ({
  payload,
  selectedChatRoom
}) => {
  const batch = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].batch(); // const { chatRoom, text } = payload;

  console.log(selectedChatRoom, payload, 'send');
  const revId = reverseString(selectedChatRoom.id);
  const messageTime = new Date().getTime();
  const chatRoomModified = {
    lastMessage: payload,
    lastMessageTime: messageTime
  };
  batch.update(chatroomCollectionRef.doc(selectedChatRoom.id), chatRoomModified);
  batch.update(chatroomCollectionRef.doc(revId), chatRoomModified);
  batch.set(messagesCollectionRef.doc(), {
    sender: selectedChatRoom.userId,
    text: payload,
    messageTime,
    chatRoomId: selectedChatRoom.id
  });
  batch.commit(); // yield fork(updateChatrooms);
};

function* initChat(action) {
  // console.log(payload, 'chatinit');
  const payload = getCurrentUser();
  const users = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["getDocuments"], 'users');
  const chatRooms = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["getDocumentsByQuery"], 'chatRooms', ['userId', '==', payload.userId]);
  chatRooms.sort(sortChatrooms);
  const messages = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["getDocumentsByQuery"], 'messages', ['chatRoomId', '==', chatRooms[0].id]);
  console.log(chatRooms, 'chatRooms');
  messages.sort(sortMessages); // fsProps.selectedChatRoom = chatRooms.length > 0 && chatRooms[0];

  chatroomsUserCollections = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('chatRooms').where('userId', '==', payload.userId);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(updateChatrooms);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_INIT_SAGA,
    user: payload.user,
    userId: payload.userId,
    users,
    chatRooms,
    messages
  });
}

function* sendMessage({
  payload
}) {
  // fsProps.selectedChatRoom = payload.chatRoom;
  const selectedChatRoom = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getSelectedChatRoom);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sendMessageBatch, {
    payload,
    selectedChatRoom
  });
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].NEW_MESSAGE_SUCCESFULL
  }); // yield fork(updateChatrooms);
}

function* addNewUser({
  user,
  addNewUsersProp
}) {
  const newUserId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["addDocument"], 'users', addNewUsersProp);

  const newUser = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: newUserId
  }, addNewUsersProp);

  const newChatroom = {
    reverse: false,
    userId: user.id,
    otherUserId: newUserId,
    otherUserInfo: newUser,
    lastMessage: '',
    lastMessageTime: 0
  };
  const newChatRoomId = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["addDocument"], 'chatRooms', newChatroom);
  const chatRoomKeyRev = reverseString(newChatRoomId);
  const newChatroomRev = {
    id: chatRoomKeyRev,
    reverse: true,
    userId: newUserId,
    otherUserId: user.id,
    otherUserInfo: user,
    lastMessage: '',
    lastMessageTime: 0
  };
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["addDocument"], 'chatRooms', newChatroomRev);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_NEW_USER_SAGA,
    user: newUser,
    chatRoom: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: newChatRoomId
    }, newChatroom)
  });
}

function* updateChatrooms() {
  const successActionCreator = data => {
    const {
      type,
      newIndex
    } = data.docChanges()[0];
    const dataMoodified = type === 'modified';

    if (!dataMoodified) {
      return {
        type: 'NO_CHANGE'
      };
    }

    const chatRoom = data.docs[newIndex].data();
    return {
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_UPDATE_CHATROOM_SAGA,
      payload: {
        chatRoom
      }
    };
  };

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["rsf"].firestore.syncCollection, chatroomsUserCollections, {
    successActionCreator
  });
}

function* updateChatroomSaga({
  payload
}) {
  const {
    chatRoom
  } = payload;
  let {
    selected
  } = payload;
  const selectedChatRoom = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getSelectedChatRoom);
  let messages;

  if (selected || chatRoom.id === selectedChatRoom.id) {
    messages = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_4__["getDocumentsByQuery"], 'messages', ['chatRoomId', '==', chatRoom.id]);
    selected = true;
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_UPDATE_CHATROOM,
    chatRoom,
    messages,
    selected
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_INIT, initChat), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_UPDATE_CHATROOM_SAGA, updateChatroomSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT_SEND_MESSAGE, sendMessage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_NEW_USER, addNewUser)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/contacts/actions.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/contacts/actions.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "../../node_modules/@iso/redux/contacts/reducer.js");


function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const contactActions = {
  ADD_CONTACT: 'ADD_CONTACT',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE__CONTACT: 'DELETE__CONTACT',
  CHANGE_CONTACT: 'CHANGE_CONTACT',
  EDIT_VIEW: 'EDIT_VIEW',
  changeContact: id => ({
    type: contactActions.CHANGE_CONTACT,
    id
  }),
  addContact: () => {
    const newContact = {
      id: new Date(),
      firstName: '',
      avatar: _reducer__WEBPACK_IMPORTED_MODULE_0__["contacts"][new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: ''
    };
    return (dispatch, getState) => {
      dispatch({
        type: contactActions.ADD_CONTACT,
        contacts: [...getState().Contacts.contacts, newContact],
        selectedId: newContact.id
      });
    };
  },
  editContact: newContact => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.contacts;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === newContact.id) {
          newContacts.push(newContact);
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.EDIT_CONTACT,
        contacts: newContacts.sort(ascendingSort)
      });
    };
  },
  deleteContact: id => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.contacts;
      const seectedId = getState().Contacts.seectedId;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {} else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.DELETE__CONTACT,
        contacts: newContacts,
        seectedId: id === seectedId ? undefined : seectedId
      });
    };
  },
  viewChange: view => ({
    type: contactActions.EDIT_VIEW,
    view
  })
};
/* harmony default export */ __webpack_exports__["default"] = (contactActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/contacts/data.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/contacts/data.js ***!
  \******************************************************************************************/
/*! exports provided: otherAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherAttributes", function() { return otherAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fakeData; });
const otherAttributes = [{
  title: 'Mobile',
  value: 'mobile',
  type: 'phoneNumber'
}, {
  title: 'Home',
  value: 'home',
  type: 'phoneNumber'
}, {
  title: 'Company',
  value: 'company',
  type: 'company'
}, {
  title: 'Work',
  value: 'work',
  type: 'phoneNumber'
}, {
  title: 'Notes',
  value: 'note',
  type: 'paragraph'
}];
const contactList = JSON.parse(`[{
  "id": 22143,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
  "firstName": "Benjamin",
  "lastName": "Jacobi",
  "name": "Benjamin Jacobi",
  "mobile": "(023) 302-3161 x60451",
  "home": "(136) 403-0476 x8388",
  "company": "Casper Inc",
  "work": "(399) 506-9438",
  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."
}, {
  "id": 17385,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
  "firstName": "Clementina",
  "lastName": "Hahn",
  "name": "Clementina Hahn",
  "mobile": "686.292.3548 x7219",
  "home": "447-343-4864 x414",
  "company": "Marquardt Inc",
  "work": "299-721-6828 x856",
  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."
}, {
  "id": 85838,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",
  "firstName": "Clinton",
  "lastName": "Goyette",
  "name": "Clinton Goyette",
  "mobile": "(913) 127-1563 x082",
  "home": "(843) 501-8804",
  "company": "Feil - Goodwin",
  "work": "732.111.8883",
  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."
}, {
  "id": 2791,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",
  "firstName": "Forrest",
  "lastName": "Klein",
  "name": "Forrest Klein",
  "mobile": "174-628-5802 x8324",
  "home": "(047) 141-0247",
  "company": "Wilkinson - Howe",
  "work": "1-624-238-9252",
  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."
}, {
  "id": 67493,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/salleedesign/128.jpg",
  "firstName": "General",
  "lastName": "Kub",
  "name": "General Kub",
  "mobile": "779.482.9824",
  "home": "(698) 858-0337 x3273",
  "company": "Moen Group",
  "work": "881.768.7522",
  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."
}, {
  "id": 75593,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg",
  "firstName": "Lon",
  "lastName": "Wunsch",
  "name": "Lon Wunsch",
  "mobile": "(792) 607-6366 x88975",
  "home": "447.683.3799 x38668",
  "company": "Johns, Gibson and Schinner",
  "work": "(735) 859-7674",
  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."
}, {
  "id": 90096,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",
  "firstName": "Mabelle",
  "lastName": "Kling",
  "name": "Mabelle Kling",
  "mobile": "499-736-0779 x2409",
  "home": "1-910-529-7393 x222",
  "company": "Bins, Murray and Ryan",
  "work": "905.098.6372",
  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."
}, {
  "id": 15783,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg",
  "firstName": "Maryse",
  "lastName": "Koss",
  "name": "Maryse Koss",
  "mobile": "668-920-9662 x610",
  "home": "075.864.1819 x8265",
  "company": "Smitham Inc",
  "work": "468.534.0931",
  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."
}, {
  "id": 42122,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",
  "firstName": "Maude",
  "lastName": "Grant",
  "name": "Maude Grant",
  "mobile": "1-077-505-0657",
  "home": "062.968.4841 x62748",
  "company": "Thiel, Bauch and Mosciski",
  "work": "1-318-593-2619 x206",
  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
}, {
  "id": 5869,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/silv3rgvn/128.jpg",
  "firstName": "Orrin",
  "lastName": "Harris",
  "name": "Orrin Harris",
  "mobile": "871.567.4877",
  "home": "(466) 574-3352",
  "company": "Haag Group",
  "work": "1-908-422-4964",
  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."
}]`);
class fakeData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }

  dataModel(index) {
    return contactList[index];
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }

    return this.datas[index];
  }

  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }

    return this.datas.slice().sort((contact1, contact2) => `${contact1.firstName}${contact1.LastName}`.toUpperCase() > `${contact2.firstName}${contact2.LastName}`.toUpperCase());
  }

  getSize() {
    return this.size;
  }

}

/***/ }),

/***/ "../../node_modules/@iso/redux/contacts/reducer.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/contacts/reducer.js ***!
  \*********************************************************************************************/
/*! exports provided: default, contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contactReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts", function() { return contacts; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "../../node_modules/@iso/redux/contacts/data.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/contacts/actions.js");



const contacts = new _data__WEBPACK_IMPORTED_MODULE_1__["default"](10).getAll();
const initState = {
  contacts,
  seectedId: contacts[0].id,
  editView: false
};
function contactReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_CONTACT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        seectedId: action.id,
        editView: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_CONTACT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        contacts: action.contacts,
        seectedId: action.selectedId,
        editView: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].EDIT_CONTACT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        contacts: action.contacts
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE__CONTACT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        contacts: action.contacts,
        seectedId: action.seectedId
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].EDIT_VIEW:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        editView: action.view
      });

    default:
      return state;
  }
}


/***/ }),

/***/ "../../node_modules/@iso/redux/contacts/saga.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/contacts/saga.js ***!
  \******************************************************************************************/
/*! exports provided: addContact, editContact, deleteContact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContact", function() { return addContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContact", function() { return editContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/contacts/actions.js");


function* addContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTACT, function* () {});
}
function* editContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_CONTACT, function* () {});
}
function* deleteContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE__CONTACT, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addContact), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(editContact), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteContact)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/drawer/actions.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/drawer/actions.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const drawerActions = {
  SHOW_DRAWER: 'SHOW_DRAWER',
  HIDE_DRAWER: 'HIDE_DRAWER',
  openDrawer: payload => ({
    type: drawerActions.SHOW_DRAWER,
    payload
  }),
  closeDrawer: () => ({
    type: drawerActions.HIDE_DRAWER
  })
};
/* harmony default export */ __webpack_exports__["default"] = (drawerActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/drawer/reducer.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/drawer/reducer.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return drawerReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/drawer/actions.js");


const initialState = {
  drawerVisibility: false,
  drawerType: '',
  drawerProps: {}
};
function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SHOW_DRAWER:
      return {
        drawerVisibility: true,
        drawerType: action.payload.drawerType,
        drawerProps: action.payload.drawerProps
      };

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].HIDE_DRAWER:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        drawerVisibility: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/dynamicEchart/reducer.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/dynamicEchart/reducer.js ***!
  \**************************************************************************************************/
/*! exports provided: default, updateOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calendsrReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOption", function() { return updateOption; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);


let count = 0;

function getOption() {
  const option = {
    title: {},
    tooltip: {
      trigger: 'axis'
    },
    Legend: {
      data: ['latest transaction price', 'pre - order queue']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          readOnly: false,
          title: 'View',
          lang: ['data view', 'turn off', 'refresh']
        },
        restore: {
          title: 'Reset'
        },
        saveAsImage: {
          title: 'Download'
        }
      }
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom: 30
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: ['#554faf', '#f4f5f6', '#3f2159', '#9d54ad', '#968acf', '#6f68cb', '#d2d1d6', '#d78da8', '#f6fbfd', '#584ba1', '#d7edf8', '#914692', '#c64187', '#98b0c8', '#a3d1e6', '#cad8e3', '#795cae', '#de8e90', '#f09875', '#e0a695', '#e86e7a']
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: (() => {
        let now = new Date();
        let res = [];
        let len = 20;

        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
          now = new Date(now - 2000);
        }

        return res;
      })()
    }, {
      type: 'category',
      boundaryGap: true,
      data: (() => {
        let res = [];
        let len = 20;

        while (len--) {
          res.push(20 - len + 1);
        }

        return res;
      })()
    }],
    yAxis: [{
      type: 'value',
      scale: true,
      name: 'Value Y',
      max: 20,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }, {
      type: 'value',
      scale: true,
      name: 'Value X',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }],
    series: [{
      name: 'Pre - order queue',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 4
        }
      },
      animationEasing: 'elasticOut',
      animationDelay: idx => {
        return idx * 10;
      },
      animationDelayUpdate: idx => {
        return idx * 10;
      },
      data: (() => {
        let res = [];
        let len = 20;

        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }

        return res;
      })()
    }, {
      name: 'Latest transaction price',
      type: 'line',
      data: (() => {
        let res = [];
        let len = 0;

        while (len < 20) {
          res.push((Math.random() * 10 + 5).toFixed(1) - 0);
          len++;
        }

        return res;
      })()
    }]
  };
  return option;
}

function fetchNewDate(option) {
  let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
  let data0 = option.series[0].data;
  let data1 = option.series[1].data;
  data0.shift();
  data0.push(Math.round(Math.random() * 1000));
  data1.shift();
  data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
  option.xAxis[0].data.shift();
  option.xAxis[0].data.push(axisData);
  option.xAxis[1].data.shift();
  option.xAxis[1].data.push(count++);
  return option;
}

const initState = {
  option: getOption()
};
function calendsrReducer(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_OPTION':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        option: clone__WEBPACK_IMPORTED_MODULE_1___default()(fetchNewDate(state.get('option')))
      });

    default:
      return state;
  }
}
function updateOption() {
  return {
    type: 'UPDATE_OPTION'
  };
}

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/actions.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/ecommerce/actions.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  INIT_DATA: 'ECOMMERCE_INIT_DATA',
  INIT_DATA_SAGA: 'ECOMMERCE_INIT_DATA_SAGA',
  UPDATE_DATA: 'ECOMMERCE_UPDATE_DATA',
  UPDATE_DATA_SAGA: 'ECOMMERCE_UPDATE_DATA_SAGA',
  CHANGE_VIEW: 'ECOMMERCE_CHANGE_VIEW',
  VIEW_TOPBAR_CART: 'ECOMMERCE_VIEW_TOPBAR_CART',
  initData: () => ({
    type: actions.INIT_DATA_SAGA
  }),
  changeView: view => ({
    type: actions.CHANGE_VIEW,
    view
  }),
  changeViewTopbarCart: viewTopbarCart => {
    return {
      type: actions.VIEW_TOPBAR_CART,
      viewTopbarCart
    };
  },
  changeProductQuantity: productQuantity => {
    return (dispatch, getState) => {
      const {
        products
      } = getState().Ecommerce;
      dispatch({
        type: actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  },
  addToCart: product => {
    return (dispatch, getState) => {
      const {
        products,
        productQuantity
      } = getState().Ecommerce;
      const objectID = product.objectID;
      productQuantity.push({
        objectID,
        quantity: 1
      });
      products[objectID] = product;
      dispatch({
        type: actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/config.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/ecommerce/config.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "../../node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/isServer */ "../../node_modules/@iso/lib/helpers/isServer.js");




const productDatas = [];

function getInitData() {
  let productQuantity = [];
  const products = {};

  if (!_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_3__["isServer"]) {
    const cartProductQuantity = localStorage.getItem('cartProductQuantity');
    let cartProducts = localStorage.getItem('cartProducts');

    if (cartProducts && cartProductQuantity) {
      cartProducts = JSON.parse(cartProducts);
      JSON.parse(cartProductQuantity).forEach(product => {
        const objectID = product.objectID;

        if (!isNaN(product.quantity)) {
          productQuantity.push({
            objectID,
            quantity: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(product.quantity, 10)
          });
          products[objectID] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cartProducts[objectID], {
            price: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(cartProducts[objectID].price, 10)
          });
        }
      });
    } else {
      productDatas.forEach(product => {
        productQuantity.push({
          objectID: product.objectID,
          quantity: 1
        });
        products[product.objectID] = product;
      });
    }
  }

  return {
    productQuantity,
    products
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getInitData());

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/fake.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/ecommerce/fake.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  productQuantity: [{
    objectID: '5357011',
    quantity: 1
  }, {
    objectID: '5354101',
    quantity: 1
  }, {
    objectID: '4494401',
    quantity: 1
  }, {
    objectID: '4494000',
    quantity: 1
  }],
  products: {
    '4494000': {
      name: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
      description: "Take your Amazon Fire HD 8 tablet on the go with this Amazon B00XM5W2WE case, which features a folio cover that guards your device's display and automatically wakes up your device when opened. The built-in stand offers comfortable hands-free viewing.",
      brand: 'Amazon',
      categories: ['Computers & Tablets', 'iPad & Tablet Accessories', 'Cases'],
      hierarchicalCategories: {
        lvl0: 'Computers & Tablets',
        lvl1: 'Computers & Tablets > iPad & Tablet Accessories',
        lvl2: 'Computers & Tablets > iPad & Tablet Accessories > Cases'
      },
      price: 39.99,
      price_range: '1 - 50',
      image: 'https://cdn-demo.algolia.com/bestbuy/4494000_sb.jpg',
      free_shipping: false,
      rating: 6,
      objectID: '4494000',
      _snippetResult: {
        description: {
          value: 'Take your Amazon Fire HD 8 tablet on the go',
          matchLevel: 'none'
        }
      },
      _highlightResult: {
        name: {
          value: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
          matchLevel: 'none',
          matchedWords: []
        },
        description: {
          value: "Take your Amazon Fire HD 8 tablet on the go with this Amazon B00XM5W2WE case, which features a folio cover that guards your device's display and automatically wakes up your device when opened. The built-in stand offers comfortable hands-free viewing.",
          matchLevel: 'none',
          matchedWords: []
        }
      }
    },
    '4494401': {
      name: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
      description: 'Protect your Amazon Fire 7" tablet from scratches and bumps on the go with this slim Amazon B00ZGUYN1Q case, which features a full-coverage design with polyurethane and microfiber materials for durability. The built-in stand enables hands-free viewing.',
      brand: 'Amazon',
      categories: ['Computers & Tablets', 'iPad & Tablet Accessories', 'Cases'],
      hierarchicalCategories: {
        lvl0: 'Computers & Tablets',
        lvl1: 'Computers & Tablets > iPad & Tablet Accessories',
        lvl2: 'Computers & Tablets > iPad & Tablet Accessories > Cases'
      },
      price: 24.99,
      price_range: '1 - 50',
      image: 'https://cdn-demo.algolia.com/bestbuy/4494401_sb.jpg',
      free_shipping: false,
      rating: 4,
      objectID: '4494401',
      _snippetResult: {
        description: {
          value: 'Protect your Amazon Fire 7" tablet from scratches and bumps',
          matchLevel: 'none'
        }
      },
      _highlightResult: {
        name: {
          value: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
          matchLevel: 'none',
          matchedWords: []
        },
        description: {
          value: 'Protect your Amazon Fire 7" tablet from scratches and bumps on the go with this slim Amazon B00ZGUYN1Q case, which features a full-coverage design with polyurethane and microfiber materials for durability. The built-in stand enables hands-free viewing.',
          matchLevel: 'none',
          matchedWords: []
        }
      }
    },
    '5354101': {
      name: '3DR - Solo Smart Rechargeable Battery - Black',
      description: '3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.',
      brand: '3DR',
      categories: ['Toys, Games & Drones', 'Drones & Accessories', 'Drone Accessories', 'Drone Batteries'],
      hierarchicalCategories: {
        lvl0: 'Toys, Games & Drones',
        lvl1: 'Toys, Games & Drones > Drones & Accessories',
        lvl2: 'Toys, Games & Drones > Drones & Accessories > Drone Accessories',
        lvl3: 'Toys, Games & Drones > Drones & Accessories > Drone Accessories > Drone Batteries'
      },
      price: 149.95,
      price_range: '100 - 200',
      image: 'https://cdn-demo.algolia.com/bestbuy/5354101_sb.jpg',
      free_shipping: false,
      rating: 4,
      objectID: '5354101',
      _snippetResult: {
        description: {
          value: '3D Robotics Battery for Solo Drones: Instead of waiting for',
          matchLevel: 'none'
        }
      },
      _highlightResult: {
        name: {
          value: '3DR - Solo Smart Rechargeable Battery - Black',
          matchLevel: 'none',
          matchedWords: []
        },
        description: {
          value: '3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.',
          matchLevel: 'none',
          matchedWords: []
        }
      }
    },
    '5357011': {
      name: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
      description: '3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.',
      brand: '3DR',
      categories: ['Toys, Games & Drones', 'Drones & Accessories', 'Drone Accessories', 'Drone Parts'],
      hierarchicalCategories: {
        lvl0: 'Toys, Games & Drones',
        lvl1: 'Toys, Games & Drones > Drones & Accessories',
        lvl2: 'Toys, Games & Drones > Drones & Accessories > Drone Accessories',
        lvl3: 'Toys, Games & Drones > Drones & Accessories > Drone Accessories > Drone Parts'
      },
      price: 14.95,
      price_range: '1 - 50',
      image: 'https://cdn-demo.algolia.com/bestbuy/5357011_rb.jpg',
      free_shipping: false,
      rating: 2,
      objectID: '5357011',
      _snippetResult: {
        description: {
          value: '3D Robotics Propellers for Solo Drones: Buy this set of',
          matchLevel: 'none'
        }
      },
      _highlightResult: {
        name: {
          value: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
          matchLevel: 'none',
          matchedWords: []
        },
        description: {
          value: '3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.',
          matchLevel: 'none',
          matchedWords: []
        }
      }
    }
  }
});

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/reducer.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/ecommerce/reducer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/ecommerce/actions.js");



const initState = {
  loadingInitData: false,
  view: 'gridView',
  viewTopbarCart: false,
  productQuantity: [],
  products: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].INIT_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loadingInitData: true,
        productQuantity: action.payload.productQuantity,
        products: action.payload.products
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_VIEW:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        view: action.view
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].VIEW_TOPBAR_CART:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        viewTopbarCart: action.viewTopbarCart
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        products: clone__WEBPACK_IMPORTED_MODULE_1___default()(action.products),
        productQuantity: clone__WEBPACK_IMPORTED_MODULE_1___default()(action.productQuantity)
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "../../node_modules/@iso/redux/ecommerce/saga.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/ecommerce/saga.js ***!
  \*******************************************************************************************/
/*! exports provided: changedCard, initData, updateData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedCard", function() { return changedCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initData", function() { return initData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/ecommerce/actions.js");
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake */ "../../node_modules/@iso/redux/ecommerce/fake.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/ecommerce/config.js");





function* changedCard() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_CARDS, function* () {});
}
function* initData() {
  let fakeData = _config__WEBPACK_IMPORTED_MODULE_4__["default"];

  if (_config__WEBPACK_IMPORTED_MODULE_4__["default"].productQuantity.length === 0) {
    fakeData = _fake__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].INIT_DATA,
    payload: fakeData
  });
}
function* updateData({
  products,
  productQuantity
}) {
  localStorage.setItem('cartProductQuantity', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(productQuantity));
  localStorage.setItem('cartProducts', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(products));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE_DATA,
    products,
    productQuantity
  });
}
/* harmony default export */ __webpack_exports__["default"] = (function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].INIT_DATA_SAGA, initData), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].UPDATE_DATA_SAGA, updateData)]);
});

/***/ }),

/***/ "../../node_modules/@iso/redux/githubSearch/actions.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/githubSearch/actions.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  GIT_SEARCH: 'GIT_SEARCH',
  GIT_SUCCESS_RESULT: 'GIT_SUCCESS_RESULT',
  GIT_ERROR_RESULT: 'GIT_ERROR_RESULT',
  gitSearch: searcText => ({
    type: actions.GIT_SEARCH,
    payload: {
      searcText,
      page: 1
    }
  }),
  onPageChange: (searcText, page) => ({
    type: actions.GIT_SEARCH,
    payload: {
      searcText,
      page
    }
  }),
  gitSearchSuccess: (result, total_count, page) => ({
    type: actions.GIT_SUCCESS_RESULT,
    result,
    total_count,
    page
  }),
  gitSearchError: () => ({
    type: actions.GIT_ERROR_RESULT
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/githubSearch/reducers.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/githubSearch/reducers.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/githubSearch/actions.js");


const initState = {
  searcText: 'react',
  total_count: 0,
  page: 1,
  result: [],
  loading: false,
  error: false
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GIT_SEARCH:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        searcText: action.payload.searcText
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GIT_SUCCESS_RESULT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: false,
        result: action.result,
        total_count: action.total_count,
        page: action.page
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GIT_ERROR_RESULT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: false,
        result: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/githubSearch/sagas.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/githubSearch/sagas.js ***!
  \***********************************************************************************************/
/*! exports provided: per_page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "per_page", function() { return per_page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/githubSearch/actions.js");


const per_page = 10;
const gitSearchApi = `https://api.github.com/search/repositories?per_page=${per_page}&q=`;

const onSearchReqeust = async (searcText, page = 1) => await fetch(`${gitSearchApi}${encodeURIComponent(searcText)}&page=${page}`).then(res => res.json()).then(res => res).catch(error => error);

function* searchRequest({
  payload
}) {
  const {
    searcText,
    page
  } = payload;

  try {
    const searchResult = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSearchReqeust, searcText, page);

    if (searchResult.items && searchResult.total_count) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].gitSearchSuccess(searchResult.items, searchResult.total_count, page));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].gitSearchSuccess());
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].gitSearchSuccess());
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GIT_SEARCH, searchRequest)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/investors/actions.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/investors/actions.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DOCUMENT = 'INVESTOR_';
const actions = {
  LOAD_FROM_FIRESTORE: DOCUMENT + 'LOAD_FROM_FIRESTORE',
  LOAD_FROM_FIRESTORE_SUCCESS: DOCUMENT + 'LOAD_FROM_FIRESTORE_SUCCESS',
  LOAD_FROM_FIRESTORE_ERROR: DOCUMENT + 'LOAD_FROM_FIRESTORE_ERROR',
  SAVE_INTO_FIRESTORE: DOCUMENT + 'SAVE_INTO_FIRESTORE',
  SAVE_INTO_FIRESTORE_ERROR: DOCUMENT + 'SAVE_INTO_FIRESTORE_ERROR',
  RESET_FIRESTORE_DOCUMENTS: DOCUMENT + 'RESET_FIRESTORE_DOCUMENTS',
  RESET_FIRESTORE_DOCUMENTS_ERROR: DOCUMENT + 'RESET_FIRESTORE_DOCUMENTS_ERROR',
  TOGGLE_FIRESTORE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_FIRESTORE_HANDLE_MODAL',
  FIRESTORE_UPDATE: DOCUMENT + 'FIRESTORE_UPDATE',
  loadFromFireStore: () => {
    return {
      type: actions.LOAD_FROM_FIRESTORE
    };
  },
  loadFromFireStoreSuccess: data => ({
    type: actions.LOAD_FROM_FIRESTORE_SUCCESS,
    payload: {
      data
    }
  }),
  loadFromFireStoreError: error => ({
    type: actions.LOAD_FROM_FIRESTORE_ERROR,
    payload: {
      error
    }
  }),
  saveIntoFireStore: (data, actionName = 'insert') => ({
    type: actions.SAVE_INTO_FIRESTORE,
    payload: {
      data,
      actionName
    }
  }),
  toggleModal: (data = null) => ({
    type: actions.TOGGLE_FIRESTORE_HANDLE_MODAL,
    payload: {
      data
    }
  }),
  update: data => ({
    type: actions.FIRESTORE_UPDATE,
    payload: {
      data
    }
  }),
  saveIntoFireStoreError: error => ({
    type: actions.SAVE_INTO_FIRESTORE_ERROR,
    payload: {
      error
    }
  }),
  resetFireStoreDocuments: () => ({
    type: actions.RESET_FIRESTORE_DOCUMENTS
  }),
  resetFireStoreDocumentsError: error => ({
    type: actions.RESET_FIRESTORE_DOCUMENTS_ERROR,
    payload: {
      error
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/investors/fakeData.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/investors/fakeData.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tableData = JSON.parse(`[{
  "id": "1",
  "name": "John Doe",
  "deleted_at": null,
  "exists_count": "70",
  "investment_count": "100",
  "job_title": "Data Scientist",
  "key": "eradf",
  "location": "New York, USA",
  "company_name": "Apple, Inc"
}, {
  "id": "2",
  "name": "Jae Doe",
  "deleted_at": null,
  "exists_count": "80",
  "investment_count": "100",
  "job_title": "Data Minning Engineer",
  "key": "eradf",
  "location": "Sillicon Valley, USA",
  "company_name": "Uber"
}, {
  "id": "3",
  "name": "Robertson Jane",
  "deleted_at": null,
  "exists_count": "50",
  "investment_count": "60",
  "job_title": "Project Architect",
  "key": "eradf",
  "location": "Mountain View, USA",
  "company_name": "TechCrunch"
}, {
  "id": "4",
  "name": "Jake Baw",
  "deleted_at": null,
  "exists_count": "70",
  "investment_count": "100",
  "job_title": "Sr. Software Engineer",
  "key": "eradf",
  "location": "Hangzhou, Zhejiang, China",
  "company_name": "AliExpress"
}, {
  "id": "5",
  "name": "John Doe",
  "deleted_at": null,
  "exists_count": "1",
  "investment_count": "1",
  "job_title": "CTO",
  "key": "eradf",
  "location": "Dupont Highway, Dover, Delaware, USA",
  "company_name": "RedQ, Inc"
}]`);
const sortOption = {};

class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }

  dataModel(index) {
    return tableData[index];
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }

    return this.datas[index];
  }

  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }

    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }

  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }

  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }

  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;

    if (valueA > valueB) {
      sortVal = 1;
    }

    if (valueA < valueB) {
      sortVal = -1;
    }

    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * -1;
    }

    return sortVal;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (fakeData);

/***/ }),

/***/ "../../node_modules/@iso/redux/investors/reducers.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/investors/reducers.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/investors/actions.js");


const initState = {
  isLoading: false,
  errorMessage: false,
  investors: {},
  modalActive: false,
  investor: {
    key: null,
    id: new Date().getTime(),
    name: '',
    company_name: '',
    job_title: '',
    investment_count: null,
    exists_count: null,
    location: '',
    deleted_at: null // soft delete

  }
};
function reducer(state = initState, {
  type,
  payload
}) {
  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: true,
        errorMessage: false,
        modalActive: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        investors: payload.data,
        errorMessage: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOAD_FROM_FIRESTORE_ERROR:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        errorMessage: 'There is a loading problem'
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_FIRESTORE_HANDLE_MODAL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        modalActive: !state.modalActive,
        investor: payload.data == null ? initState.investor : payload.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].FIRESTORE_UPDATE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        investor: payload.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].RESET_FIRESTORE_DOCUMENTS_ERROR:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        errorMessage: 'There is a loading problem'
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/investors/sagas.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/investors/sagas.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/investors/actions.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fakeData */ "../../node_modules/@iso/redux/investors/fakeData.js");
/* harmony import */ var _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/lib/firebase/firebase */ "../../node_modules/@iso/lib/firebase/firebase.js");
/* harmony import */ var _iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/lib/firebase/firebase.util */ "../../node_modules/@iso/lib/firebase/firebase.util.js");







const fakeDataList = new _fakeData__WEBPACK_IMPORTED_MODULE_4__["default"](5).getAll();
/**
 * DOC: https://redux-saga-firebase.js.org/reference/dev/firestore
 */

const COLLECTION_NAME = 'investors'; // change your collection

const ORDER_BY = 'id';
const ORDER = 'desc';

function* loadFromFirestore() {
  try {
    const collectionRef = _iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["db"].collection(COLLECTION_NAME).where('deleted_at', '==', null).orderBy(ORDER_BY, ORDER);
    const snapshots = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.getCollection, collectionRef);
    let data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["convertCollectionsSnapshotToMap"], snapshots);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromFireStoreSuccess(data));
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loadFromFireStoreError(error));
  }
}

function* storeIntoFirestore({
  payload
}) {
  const {
    data,
    actionName
  } = payload;

  try {
    switch (actionName) {
      case 'delete':
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.setDocument, `${COLLECTION_NAME}/${data.key}`, {
          deleted_at: new Date().getTime()
        });
        break;

      case 'update':
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.setDocument, `${COLLECTION_NAME}/${data.key}`, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(data, ['key'])));
        break;

      default:
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__["rsf"].firestore.addDocument, COLLECTION_NAME, data);
        break;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE
    });
  } catch (error) {
    console.log(error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].saveIntoFireStoreError(error));
  }
}

function* resetFireStoreDocuments() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["deleteDocuments"], COLLECTION_NAME);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_iso_lib_firebase_firebase_util__WEBPACK_IMPORTED_MODULE_6__["addCollectionAndDocuments"], COLLECTION_NAME, fakeDataList);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE
    });
  } catch (error) {
    console.log(error);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].LOAD_FROM_FIRESTORE, loadFromFirestore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].SAVE_INTO_FIRESTORE, storeIntoFirestore), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].RESET_FIRESTORE_DOCUMENTS, resetFireStoreDocuments)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/invoice/actions.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/invoice/actions.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  GET_INVOICE: 'GET_INVOICE',
  UPDATE_INVOICE: 'UPDATE_INVOICE',
  UPDATE_INVOICE_SAGA: 'UPDATE_INVOICE_SAGA',
  SELECT_CURRENT_INVOICE: 'SELECT_CURRENT_INVOICE',
  TOGGLE_VIEW: 'INVOICE_TOGGLE_VIEW',
  UPDATE_EDIT_INVOICE: 'INVOICE_UPDATE_EDIT_INVOICE',
  initData: () => ({
    type: actions.GET_INVOICE
  }),
  deleteInvoice: selected => {
    return (dispatch, getState) => {
      const invoices = getState().Invoices.invoices;
      const newInvoices = [];
      invoices.forEach(invoice => {
        const selectedIndex = selected.indexOf(invoice.key);

        if (selectedIndex === -1) {
          newInvoices.push(invoice);
        }
      });
      dispatch({
        type: actions.UPDATE_INVOICE_SAGA,
        invoices: newInvoices
      });
    };
  },
  updateInvoice: invoice => {
    return (dispatch, getState) => {
      const invoices = getState().Invoices.invoices;
      const index = invoices.map(inv => inv.id).indexOf(invoice.id);

      if (index === -1) {
        invoices.push(invoice);
      } else {
        invoices[index] = invoice;
      }

      dispatch({
        type: actions.UPDATE_INVOICE_SAGA,
        invoices,
        invoice
      });
    };
  },
  selectCurrentInvoice: id => ({
    type: actions.SELECT_CURRENT_INVOICE,
    id
  }),
  toggleView: view => ({
    type: actions.TOGGLE_VIEW,
    view
  }),
  editInvoice: invoice => ({
    type: actions.UPDATE_EDIT_INVOICE,
    invoice
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/invoice/config.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/invoice/config.js ***!
  \*******************************************************************************************/
/*! exports provided: fakedata, createDemoData, localDataName, newInvoice, orderStatusOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakedata", function() { return fakedata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDemoData", function() { return createDemoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localDataName", function() { return localDataName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInvoice", function() { return newInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStatusOptions", function() { return orderStatusOptions; });
const localDataName = 'mateInvoice';
const orderStatusOptions = ['Pending', 'Shipped', 'Delivered'];
const fakedata = [{
  key: 1,
  id: '1518713981654',
  number: '#1231',
  orderStatus: 'Shipped',
  orderDate: 1518849188360,
  currency: '$',
  billTo: 'REDQ Inc.',
  billToAddress: 'redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284',
  billFrom: 'Pineapple Inc.',
  billFromAddress: 'pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970',
  invoiceList: [{
    key: 1,
    itemName: 'A box of happiness',
    costs: 200,
    qty: 14,
    price: 2800
  }, {
    key: 2,
    itemName: 'Unicorn Tears',
    costs: 500,
    qty: 14,
    price: 7000
  }, {
    key: 3,
    itemName: 'Rainbow Machine',
    costs: 700,
    qty: 5,
    price: 3500
  }],
  subTotal: 13300,
  vatRate: 10,
  vatPrice: 1330,
  totalCost: 14630
}, {
  key: 2,
  id: '1518713981655',
  number: '#1232',
  orderStatus: 'Pending',
  orderDate: 1518849188360,
  currency: '$',
  billTo: 'REDQ Inc.',
  billToAddress: 'redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284',
  billFrom: 'Pineapple Inc.',
  billFromAddress: 'pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970',
  invoiceList: [{
    key: 1,
    itemName: 'A box of happiness',
    costs: 200,
    qty: 14,
    price: 2800
  }, {
    key: 2,
    itemName: 'Unicorn Tears',
    costs: 500,
    qty: 14,
    price: 7000
  }, {
    key: 3,
    itemName: 'Rainbow Machine',
    costs: 700,
    qty: 5,
    price: 3500
  }],
  subTotal: 13300,
  vatRate: 10,
  vatPrice: 1330,
  totalCost: 14630
}, {
  key: 3,
  id: '1518713981656',
  number: '#1233',
  orderStatus: 'Delivered',
  orderDate: 1518849188360,
  currency: '$',
  billTo: 'REDQ Inc.',
  billToAddress: 'redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284',
  billFrom: 'Pineapple Inc.',
  billFromAddress: 'pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970',
  invoiceList: [{
    key: 1,
    itemName: 'A box of happiness',
    costs: 200,
    qty: 14,
    price: 2800
  }, {
    key: 2,
    itemName: 'Unicorn Tears',
    costs: 500,
    qty: 14,
    price: 7000
  }, {
    key: 3,
    itemName: 'Rainbow Machine',
    costs: 700,
    qty: 5,
    price: 3500
  }],
  subTotal: 13300,
  vatRate: 10,
  vatPrice: 1330,
  totalCost: 14630
}];
const newInvoice = {
  orderStatus: 'Pending',
  orderDate: new Date().getTime(),
  currency: '$',
  billTo: '',
  billToAddress: '',
  billFrom: '',
  billFromAddress: '',
  invoiceList: [{
    key: 1,
    itemName: '',
    costs: 0,
    qty: 0,
    price: 0
  }],
  subTotal: 0,
  vatRate: 10,
  vatPrice: 0,
  totalCost: 0
};

const createDemoData = () => {
  const localData = localStorage.getItem(localDataName);

  if (localData) {
    try {
      const invoices = JSON.parse(localData);

      if (invoices && invoices.length > 0) {
        return invoices;
      }
    } catch (e) {}
  }

  return fakedata;
};



/***/ }),

/***/ "../../node_modules/@iso/redux/invoice/reducer.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/invoice/reducer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cardReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/invoice/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/invoice/actions.js");





const initState = {
  invoices: [],
  initialInvoices: false,
  currentInvoice: {},
  editableInvoice: {},
  isNewInvoice: false,
  enableEditView: false
};
function cardReducer(state = initState, _ref) {
  let {
    type
  } = _ref,
      action = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type"]);

  switch (type) {
    case _actions__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_INVOICE:
      {
        const currentInvoice = action.invoice ? action.invoice : state.currentInvoice;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          invoices: action.invoices,
          currentInvoice: clone__WEBPACK_IMPORTED_MODULE_2___default()(currentInvoice),
          initialInvoices: true,
          isNewInvoice: false,
          enableEditView: false
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_4__["default"].SELECT_CURRENT_INVOICE:
      {
        const invoices = state.invoices;
        const index = invoices.map(invoice => invoice.id).indexOf(action.id);
        const isNewInvoice = index === -1;
        const currentInvoice = isNewInvoice ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: action.id,
          number: `#${action.id}`,
          key: action.id
        }, _config__WEBPACK_IMPORTED_MODULE_3__["newInvoice"]) : invoices[index];
        const enableEditView = isNewInvoice;
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          currentInvoice,
          isNewInvoice,
          enableEditView,
          editableInvoice: clone__WEBPACK_IMPORTED_MODULE_2___default()(currentInvoice)
        });
      }

    case _actions__WEBPACK_IMPORTED_MODULE_4__["default"].TOGGLE_VIEW:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        enableEditView: action.view,
        editableInvoice: clone__WEBPACK_IMPORTED_MODULE_2___default()(state.currentInvoice)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_EDIT_INVOICE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        editableInvoice: clone__WEBPACK_IMPORTED_MODULE_2___default()(action.invoice)
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/invoice/saga.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/invoice/saga.js ***!
  \*****************************************************************************************/
/*! exports provided: getInvoice, updateInvoiceSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoice", function() { return getInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInvoiceSaga", function() { return updateInvoiceSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/invoice/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/invoice/actions.js");




function* getInvoice() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE_INVOICE,
    invoices: Object(_config__WEBPACK_IMPORTED_MODULE_2__["createDemoData"])()
  });
}
function* updateInvoiceSaga({
  invoices,
  invoice
}) {
  yield localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_2__["localDataName"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(invoices));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
    type: _actions__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE_INVOICE,
    invoices,
    invoice
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].GET_INVOICE, getInvoice), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE_INVOICE_SAGA, updateInvoiceSaga)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/languageSwitcher/actions.js":
/*!*****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/languageSwitcher/actions.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/languageSwitcher/config.js");

const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: actions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentLanguage"])(language)
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/languageSwitcher/config.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/languageSwitcher/config.js ***!
  \****************************************************************************************************/
/*! exports provided: getCurrentLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony import */ var _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/language.config */ "../../node_modules/@iso/config/language.config.js");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/assets/images/flag/uk.svg */ "../../node_modules/@iso/assets/images/flag/uk.svg");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/assets/images/flag/china.svg */ "../../node_modules/@iso/assets/images/flag/china.svg");
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/flag/spain.svg */ "../../node_modules/@iso/assets/images/flag/spain.svg");
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/assets/images/flag/france.svg */ "../../node_modules/@iso/assets/images/flag/france.svg");
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/flag/italy.svg */ "../../node_modules/@iso/assets/images/flag/italy.svg");
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__);






const config = {
  defaultLanguage: _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__["default"],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }, {
    languageId: 'spanish',
    locale: 'es',
    text: 'Spanish',
    icon: _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    languageId: 'french',
    locale: 'fr',
    text: 'French',
    icon: _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }, {
    languageId: 'italian',
    locale: 'it',
    text: 'Italian',
    icon: _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }]
};
function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "../../node_modules/@iso/redux/languageSwitcher/reducer.js":
/*!*****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/languageSwitcher/reducer.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/languageSwitcher/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/languageSwitcher/actions.js");



const initState = {
  isActivated: false,
  language: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getCurrentLanguage"])(_config__WEBPACK_IMPORTED_MODULE_1__["default"].defaultLanguage || 'english')
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].ACTIVATE_LANG_MODAL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isActivated: !state.isActivated
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_LANGUAGE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        language: action.language
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "../../node_modules/@iso/redux/mail/actions.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/mail/actions.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mailActions = {
  FILTER_ATTRIBUTE: 'FILTER_ATTRIBUTE',
  SELECTED_MAIL: 'SELECTED_MAIL',
  COMPOSE_MAIL: 'COMPOSE_MAIL',
  REPLY_MAIL: 'REPLY_MAIL',
  SEARCH_STRING: 'SEARCH_STRING',
  filterAction: newFilterAttr => {
    return (dispatch, getState) => {
      const filterAttr = getState().Mails.filterAttr;

      if (newFilterAttr) {
        if (newFilterAttr.bucket) {
          filterAttr.bucket = newFilterAttr.bucket;
          filterAttr.tag = newFilterAttr.tag;
        } else if (newFilterAttr.tag) {
          filterAttr.tag = newFilterAttr.tag;
        }
      }

      dispatch({
        type: mailActions.FILTER_ATTRIBUTE,
        filterAttr
      });
    };
  },
  selectMail: selectedMail => {
    return (dispatch, getState) => {
      const allMails = getState().Mails.allMails;
      allMails[allMails.findIndex(mail => mail.id === selectedMail)].read = true;
      dispatch({
        type: mailActions.SELECTED_MAIL,
        selectedMail,
        allMails
      });
    };
  },
  changeComposeMail: composeMail => ({
    type: mailActions.COMPOSE_MAIL,
    composeMail
  }),
  changeReplyMail: replyMail => ({
    type: mailActions.REPLY_MAIL,
    replyMail
  }),
  changeSearchString: searchString => ({
    type: mailActions.SEARCH_STRING,
    searchString
  })
};
/* harmony default export */ __webpack_exports__["default"] = (mailActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/mail/data.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/mail/data.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (JSON.parse(`[{
  "id": 30,
  "key": 30,
  "name": "Friedrich Mitchell",
  "cc": "Devon90@hotmail.com",
  "email": "Giovanny12@hotmail.com",
  "body": "Doloribus voluptas itaque blanditiis repudiandae. Est libero in. Id enim et vero velit enim nostrum cum aut libero. Dignissimos non et. Qui inventore ducimus debitis qui perspiciatis iure. Eligendi omnis eos et iste iusto ipsa iste dolor. Porro consequatur iste. Incidunt rerum mollitia dolore sit. Officia maxime doloremque esse eaque ad. Architecto animi at qui deserunt.",
  "subject": "voluptas excepturi voluptates",
  "date": "2017-06-10T22:16:42.057Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 44,
  "key": 44,
  "name": "Cristopher Bogan",
  "cc": "Axel17@yahoo.com",
  "email": "Belle_Gaylord17@gmail.com",
  "body": "Consectetur sed ut assumenda accusantium reprehenderit nemo adipisci amet. Voluptatibus quae inventore. Et qui dolore et quis. Alias minus autem libero possimus sunt nesciunt quis libero. Autem voluptas aliquam voluptatibus velit. Et distinctio quia earum a illo. Magnam quo ea architecto repellendus hic dolorem non illum doloremque. Id sapiente quo perspiciatis fugiat laboriosam rerum. Praesentium laboriosam ex sunt velit illum quis a ut qui. Sint in in eos.",
  "subject": "soluta mollitia a",
  "date": "2017-06-08T19:48:36.439Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 56,
  "key": 56,
  "name": "Michelle Kunze",
  "cc": "Connor_Cruickshank@hotmail.com",
  "email": "Beryl.Heidenreich82@gmail.com",
  "body": "Debitis necessitatibus distinctio minima. Molestias ab consectetur quos occaecati aut laudantium. Dolor eos dolore exercitationem. Et architecto quae labore est iusto cum. Illum ut commodi eaque aut totam officiis. Eos a provident omnis autem magni vel. Fuga numquam magni. Nihil beatae optio ratione minus et sequi quaerat ut. Earum voluptatem voluptatem suscipit ut consequuntur dolorum asperiores possimus. Maiores unde adipisci aperiam.",
  "subject": "ipsam ut veniam",
  "date": "2017-05-26T11:47:14.575Z",
  "bucket": "Starred",
  "read": false
}, {
  "id": 54,
  "key": 54,
  "name": "Darron Bednar",
  "cc": "Preston.Ullrich76@hotmail.com",
  "email": "Bessie_Gleason4@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",
  "tags": "Friend",
  "body": "Aut quasi est perferendis rem ut est quidem et. Dignissimos aperiam qui voluptas praesentium dicta. Consectetur repellat amet voluptates aperiam ut ratione. Est quia nisi ut vel iste debitis. Sint ea aspernatur mollitia cupiditate. Maiores quibusdam ducimus. Voluptates praesentium et sint earum laboriosam placeat. Minima possimus ipsa numquam consequatur molestias quasi. Fuga exercitationem ea deserunt dicta. Sit placeat aut.",
  "subject": "ea aut sint",
  "date": "2017-05-26T04:57:39.922Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 60,
  "key": 60,
  "name": "Marjorie Runolfsdottir",
  "cc": "Dock_Murazik93@yahoo.com",
  "email": "Reynold76@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg",
  "tags": "Family",
  "body": "Consequatur occaecati id est. Quis et fuga voluptate distinctio sit. Modi dolore inventore quam autem asperiores in placeat. Porro quam perspiciatis eos exercitationem non quisquam cumque esse. Vero molestiae enim possimus tempora est sapiente voluptate officiis. Sed tenetur tempore qui. Quae amet et beatae eum repellendus est et sed. Perspiciatis dolore cupiditate eaque error dolores doloribus. Quos cum iste sit delectus qui dicta quo saepe. Quaerat repudiandae sequi aliquam et maiores sunt saepe qui.",
  "subject": "quae aperiam quia",
  "date": "2017-05-22T02:19:09.262Z",
  "bucket": "Inbox",
  "read": false
}, {
  "id": 75,
  "key": 75,
  "name": "Orville Strosin",
  "cc": "Ressie_Klein@gmail.com",
  "email": "Kaitlyn.Block56@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/emmeffess/128.jpg",
  "body": "Qui animi quia vero asperiores ipsam repudiandae consequatur fugit. Temporibus aut facere quia et vel sit culpa. Dolor sapiente perferendis aut. Laborum autem quisquam alias perferendis ad tenetur. Debitis reprehenderit itaque rerum ea officiis odio deserunt molestiae. Accusantium atque praesentium in qui quo autem non. Dolore qui velit assumenda aut. Eos ex eveniet earum sapiente ea delectus. Quam consequatur voluptate non atque maxime et. Aut quia non facilis sed.",
  "subject": "ullam debitis aut",
  "date": "2017-05-20T10:13:38.494Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 87,
  "key": 87,
  "name": "Carlotta Friesen",
  "cc": "Robin.McGlynn21@gmail.com",
  "email": "Isabelle88@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/kinday/128.jpg",
  "body": "Vitae excepturi expedita fugiat ad vitae illo dolorum dolor. Qui consectetur et quia nemo. Similique non illum. Animi velit ut. Totam eius numquam veritatis quo molestiae dignissimos vero accusamus. Maiores soluta fuga neque magni vitae eaque sint voluptatem. Culpa quas consequatur facilis sit exercitationem reprehenderit doloremque aut. Ex iure alias. Qui odio laborum maxime. Repellendus et qui est quia voluptas.",
  "subject": "autem dolor saepe",
  "date": "2017-05-18T10:33:41.146Z",
  "bucket": "Starred",
  "read": false
}, {
  "id": 15,
  "key": 15,
  "name": "Ava Durgan",
  "cc": "Demario83@hotmail.com",
  "email": "Melany_Lemke@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/vimarethomas/128.jpg",
  "body": "Sint aut explicabo dolorum voluptatem magni nam at molestiae totam. Amet temporibus vel et harum eos minus atque et. Et dolores voluptas unde consequuntur odio quo sed voluptatem. Excepturi velit tempore praesentium vel in nesciunt. Laudantium non quis itaque aliquam ipsum qui aliquam blanditiis maxime. Fuga et quae eos numquam odio architecto impedit sed amet. Neque nemo nostrum dolores ut. Nostrum vitae ad. Aliquam in quaerat delectus cumque. Et consequatur esse sit omnis.",
  "subject": "ut sapiente praesentium",
  "date": "2017-05-18T04:39:53.974Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 86,
  "key": 86,
  "name": "Alverta Gutkowski",
  "cc": "Jonathon11@gmail.com",
  "email": "Lila.Metz1@yahoo.com",
  "tags": "ClassMates",
  "body": "Ut ratione at laudantium et quibusdam provident earum voluptates. Veritatis et qui corporis. Nostrum ab eum magnam quidem est. Quod voluptas animi aperiam dicta autem cupiditate sunt voluptas voluptate. Laudantium expedita eum corporis perferendis. Quia repudiandae omnis in dolorem. Ratione deleniti optio eum illum error assumenda veritatis sit. Est voluptatem perferendis nostrum sint. Dolorem officia cumque maxime magnam est provident ducimus eligendi. Magni iste quibusdam itaque voluptatem quibusdam amet fuga assumenda.",
  "subject": "ut qui et",
  "date": "2017-05-02T01:49:41.982Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 41,
  "key": 41,
  "name": "Hellen Carter",
  "cc": "Domenic85@hotmail.com",
  "email": "Evelyn84@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/vicivadeline/128.jpg",
  "body": "Incidunt sunt dicta et et ratione officiis quaerat in quas. Ut ut velit aut maxime rerum laboriosam. Ut qui cupiditate. Quidem quidem facilis ab. Suscipit tempore architecto atque nihil aut. Totam porro aut ut aspernatur similique laborum voluptatum ut. Qui maiores delectus deleniti aliquid. Harum autem natus velit doloribus. Deleniti velit enim alias et ratione consequatur eligendi et. Necessitatibus quia quod aspernatur nobis vero id sed.",
  "subject": "consectetur quia quisquam",
  "date": "2017-05-01T13:08:18.089Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 96,
  "key": 96,
  "name": "Alanis Koch",
  "cc": "Alvis.Harber64@gmail.com",
  "email": "Kelli1@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/saschadroste/128.jpg",
  "tags": "ClassMates",
  "body": "Ut non quis perferendis non itaque aliquid. Molestiae ut modi ab. Odio molestiae praesentium odit est ad veritatis est ut. Quasi quia sed ut enim. Animi cumque ipsum. Eligendi exercitationem ut et perspiciatis nostrum itaque mollitia facilis debitis. Similique sit velit pariatur distinctio cumque iure vel quia nulla. Ab omnis blanditiis et neque. Aut quis ea quas fugit. Rerum doloribus temporibus provident quis ut provident illo.",
  "subject": "iure nemo sed",
  "date": "2017-05-01T05:43:26.284Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 21,
  "key": 21,
  "name": "Sid Kris",
  "cc": "Ayden59@gmail.com",
  "email": "Marilyne_Schumm@hotmail.com",
  "body": "Aliquid cupiditate est velit consectetur est nihil accusantium. Tempora accusamus aliquam nihil voluptatem rerum. Aut fugiat rerum ad. Suscipit ex recusandae dolorum ullam voluptas tempora. Culpa eos et earum. Quod laborum ipsum. Tempora quos quaerat. Inventore totam architecto id sed. Sunt rerum tempora. Laudantium quia debitis.",
  "subject": "excepturi dolor autem",
  "date": "2017-04-30T12:42:49.275Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 81,
  "key": 81,
  "name": "Ewell Beahan",
  "cc": "Bethany_Towne@yahoo.com",
  "email": "Phyllis_Marvin47@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mr_shiznit/128.jpg",
  "tags": "Family",
  "body": "Nihil quam ipsum ut beatae. Vitae facere dolor qui fugiat eos ut sit dignissimos. Qui et aut culpa error eveniet ab et. Quasi provident sunt vel voluptatem. Corrupti nesciunt et esse repellat. Animi explicabo ullam debitis a reprehenderit totam harum delectus necessitatibus. Necessitatibus eligendi id pariatur. At aut at aperiam nihil molestiae ea consequatur. Consectetur in dolorem sunt fugit omnis ipsa est quod. Voluptates a velit accusamus.",
  "subject": "aspernatur odit est",
  "date": "2017-04-29T20:17:15.315Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 84,
  "key": 84,
  "name": "Wilton Hand",
  "cc": "Chandler_Robel@gmail.com",
  "email": "Elton8@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/sovesove/128.jpg",
  "body": "Similique ut hic vel velit. Ullam eos perspiciatis nesciunt eaque eaque repellendus rem occaecati quis. Qui sed numquam facere omnis. Soluta quos numquam esse. Nisi voluptatum voluptatem nostrum aut ab error pariatur architecto et. Similique voluptatem possimus deleniti vel. Doloremque magni asperiores nisi dignissimos reiciendis consectetur. Similique repudiandae in quia consequatur perspiciatis. Sed ea labore labore nostrum accusantium. Illo iure illo illum sequi aut omnis vel non quaerat.",
  "subject": "architecto omnis deserunt",
  "date": "2017-04-25T07:16:20.043Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 98,
  "key": 98,
  "name": "Remington Donnelly",
  "cc": "Abdiel90@hotmail.com",
  "email": "Adan20@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/kanickairaj/128.jpg",
  "tags": "Teachers",
  "body": "Deleniti sed suscipit quas ullam sed autem laboriosam qui. Deleniti velit debitis eum et corrupti quae fuga. Sed ea eligendi tenetur quae. Rerum vero dolore omnis sint fuga. Cum tenetur harum occaecati. Non expedita fugit rerum omnis. Et est odio architecto ducimus et modi. Necessitatibus ratione nisi qui unde debitis et hic doloribus. Est sunt suscipit delectus excepturi quo repellendus nisi reiciendis. Quia soluta illum odio libero.",
  "subject": "id et ut",
  "date": "2017-04-24T09:00:09.145Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 94,
  "key": 94,
  "name": "Sarina Frami",
  "cc": "Lucius_Raynor@yahoo.com",
  "email": "Stephanie40@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/prinzadi/128.jpg",
  "tags": "Colleague",
  "body": "Et veritatis quis. Quo autem et quae est sequi voluptatem. Molestias dolorem magni voluptates ratione autem. Vero consequatur asperiores voluptatem. Quaerat vel fugit. Expedita autem sit laborum tempora quisquam eos velit. Voluptatem ut vel rerum ipsam ut repellendus optio. Nisi possimus aliquid sed voluptas eligendi qui nesciunt. Dolor fuga autem quo est autem inventore ullam. Quia voluptatem ut cumque.",
  "subject": "qui animi qui",
  "date": "2017-04-22T05:19:12.082Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 43,
  "key": 43,
  "name": "Camila Kilback",
  "cc": "Maribel_Hoeger@hotmail.com",
  "email": "Bridget_Johns@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremymouton/128.jpg",
  "body": "Magnam ea veritatis consequatur. Voluptatum eaque et vel tempora ullam. A quos rerum laudantium. Est voluptatibus enim fuga in laudantium. Delectus illum veritatis tempore suscipit repellendus velit incidunt. Voluptate voluptatibus veritatis aut cum. Sint ab odit nostrum non aperiam nulla reprehenderit et quo. Voluptatum dolorem explicabo tempora deleniti omnis quia temporibus perspiciatis ut. Et autem totam tempora voluptatem pariatur. Rem omnis non animi.",
  "subject": "dolores vel a",
  "date": "2017-04-13T03:09:40.193Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 35,
  "key": 35,
  "name": "Jana Walter",
  "cc": "Delphia.Gerhold@hotmail.com",
  "email": "Elmira_Lind63@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/Shriiiiimp/128.jpg",
  "body": "Ut porro harum. Animi eum laudantium laudantium blanditiis illo facere in sed. Doloribus sed minima et eius veritatis. Est eum est. Est non qui et laborum ut ut sit. Rem sed veritatis. Officiis laborum rem soluta dolores voluptatum aut velit quia pariatur. Magnam perspiciatis omnis. Magni assumenda ad tempore. Suscipit maxime cumque.",
  "subject": "eos cupiditate sapiente",
  "date": "2017-04-11T04:10:15.341Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 53,
  "key": 53,
  "name": "Winfield Kihn",
  "cc": "Adan.Mraz@yahoo.com",
  "email": "Beulah_Reilly35@yahoo.com",
  "body": "Illum dolorem tempore omnis. Et delectus harum rerum qui quas reiciendis excepturi in. Velit inventore ut maxime minima expedita et eaque reiciendis architecto. Hic et qui ex. Eligendi quisquam vero iste. Consectetur ea qui magnam consequatur qui blanditiis amet esse tempore. Deserunt accusamus est. Odio maiores sunt pariatur ipsum itaque. Neque nulla enim sunt eum architecto deleniti ad rerum. Eius et sit mollitia.",
  "subject": "atque dolore exercitationem",
  "date": "2017-04-10T22:32:17.681Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 32,
  "key": 32,
  "name": "Jeramy D'Amore",
  "cc": "Tobin26@gmail.com",
  "email": "Jimmie_Bernier@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/alevizio/128.jpg",
  "tags": "Students",
  "body": "Sint temporibus totam minus est quis. Omnis ipsum ipsam iure eum est amet porro cumque. Ut doloribus doloribus nihil animi aliquid qui. Omnis ad velit sed et perspiciatis aspernatur deserunt veniam rerum. Molestiae veritatis nam architecto itaque omnis qui incidunt soluta. Qui et reprehenderit. Nemo cum iste accusantium. Consequatur eos aut. Nemo similique blanditiis corporis a. Fugit qui autem sunt sit assumenda perferendis.",
  "subject": "vel illo doloribus",
  "date": "2017-03-31T04:51:14.497Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 99,
  "key": 99,
  "name": "Hassan Nicolas",
  "cc": "Aron_OKeefe@yahoo.com",
  "email": "Laron76@hotmail.com",
  "body": "Nesciunt sequi sed omnis. Ea dicta voluptates rerum quas corrupti odio earum. Reiciendis alias modi. Eum ut corporis. Aut rerum cumque quos magni. Facere sit fugiat laboriosam eos. Enim ut et asperiores perspiciatis at voluptas labore. Voluptatem maiores eos repellendus. Vero voluptate voluptatum sequi molestiae omnis tempora fuga non dicta. Nostrum harum culpa eum consequatur.",
  "subject": "unde veniam vitae",
  "date": "2017-03-29T09:03:20.158Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 93,
  "key": 93,
  "name": "Jeffry Mann",
  "cc": "Talon_Pfannerstill@hotmail.com",
  "email": "Andrew.Olson@yahoo.com",
  "tags": "ClassMates",
  "body": "Sequi maiores asperiores. Sint vitae autem id molestias. Iure fuga deserunt. Atque fugiat aliquam est ipsum expedita magni modi officiis dolores. Quaerat voluptatibus in doloribus aliquid velit inventore eaque. Repellat tempora et nobis numquam. Amet rem porro doloremque minima. Cum sapiente sed velit provident. Perspiciatis dolor ducimus est laborum aut tempora. Nostrum accusamus nihil error quia quo quo optio tenetur.",
  "subject": "perspiciatis ipsa occaecati",
  "date": "2017-03-29T03:16:17.664Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 37,
  "key": 37,
  "name": "Lisandro Kreiger",
  "cc": "Madelynn72@hotmail.com",
  "email": "Cole_Ondricka@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ninjad3m0/128.jpg",
  "body": "Laudantium consequatur dolorem porro iure architecto modi corrupti sint et. Voluptatem vero odit laboriosam est iusto illo neque. Explicabo repudiandae veniam. Ab similique eveniet neque id dolores. Praesentium et eum aspernatur quo explicabo fugiat. Iure occaecati aperiam. Aut rem deserunt consequatur minus sed omnis adipisci explicabo. Tempora et velit id omnis. Dignissimos vitae sint et est quo dolore hic ea voluptatem. Aliquid praesentium eum accusamus ut cum quis laboriosam corporis non.",
  "subject": "ea iste quasi",
  "date": "2017-03-27T02:48:41.115Z",
  "bucket": "Inbox",
  "read": false
}, {
  "id": 26,
  "key": 26,
  "name": "Pansy Macejkovic",
  "cc": "Tyler.Koelpin38@yahoo.com",
  "email": "Alysa.Adams@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/bradenhamm/128.jpg",
  "tags": "ClassMates",
  "body": "Soluta voluptate nihil non velit minus nihil culpa. Rerum perferendis est temporibus hic voluptatem in. Delectus tenetur excepturi quasi enim. Consequuntur eius soluta in voluptas architecto incidunt consequatur ea. Harum nobis odio dolor velit neque tempora illo voluptatem dolor. Suscipit omnis dicta necessitatibus. Dolore nihil rerum sit et eos sed quae accusamus. Accusamus quo perspiciatis id doloribus quis eum harum distinctio sunt. Repellat soluta quis dolorem consequuntur fuga beatae ut. Corporis praesentium fugiat eum numquam voluptate facilis.",
  "subject": "expedita quis quisquam",
  "date": "2017-03-24T17:10:20.010Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 69,
  "key": 69,
  "name": "David Dach",
  "cc": "Ara7@yahoo.com",
  "email": "Josie37@gmail.com",
  "tags": "Friend",
  "body": "Incidunt quasi fugiat eum distinctio ut saepe iusto magni. Harum asperiores ut aut velit et consequuntur iure quasi velit. Architecto voluptatibus animi. Rerum necessitatibus quis eligendi deleniti consequatur porro qui. Sint molestiae neque error. Alias voluptate et veniam nihil cum doloribus ex sunt. Possimus placeat vero dolor alias magnam doloremque quo maiores voluptas. Sapiente deserunt voluptatem sunt debitis aut. Rerum corrupti animi in in eaque perferendis nostrum sunt. Nihil est accusamus rem aut expedita distinctio.",
  "subject": "beatae provident qui",
  "date": "2017-03-22T15:55:08.315Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 1,
  "key": 1,
  "name": "Kyleigh Schmeler",
  "cc": "Caterina38@gmail.com",
  "email": "Marco.Runolfsson36@yahoo.com",
  "body": "Velit nulla sunt facere dolorum aut. Maiores et eligendi nostrum. Laborum ut ipsa deleniti non. Aut atque id blanditiis unde et asperiores sit quisquam. Et provident repellendus ut cumque qui animi. Omnis non quo iste perspiciatis molestiae et. Deleniti sed molestiae minus et occaecati ducimus voluptatibus porro. Animi et deserunt et fugit quasi sapiente reiciendis. Consequatur repellendus amet aperiam corporis. Exercitationem itaque rerum molestiae placeat.",
  "subject": "earum excepturi explicabo",
  "date": "2017-03-22T14:01:05.443Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 22,
  "key": 22,
  "name": "Kennedy Bogisich",
  "cc": "Bernita56@yahoo.com",
  "email": "Destiny.Block50@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/sachacorazzi/128.jpg",
  "body": "Sunt perferendis vel quos molestiae in et ut provident. Esse illo est sapiente et quod quam odio facilis blanditiis. Et voluptas nulla iusto beatae. Non officia voluptatibus quia veniam laborum. A reprehenderit asperiores quas hic eaque magnam laudantium eos. Repellendus est quis error ipsa sint molestiae. Eaque rerum suscipit est rerum nemo. Totam autem minus voluptate. Esse et corporis expedita vel non alias est est deleniti. Deserunt ullam repellendus omnis omnis iste.",
  "subject": "et mollitia perspiciatis",
  "date": "2017-03-22T08:20:43.359Z",
  "bucket": "Starred",
  "read": false
}, {
  "id": 19,
  "key": 19,
  "name": "Cicero Kilback",
  "cc": "Margarete_Rau61@hotmail.com",
  "email": "Antone.Lind27@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
  "body": "Tenetur ex nihil quia animi eos voluptas itaque neque quis. Similique laborum laudantium dolor. Ea officiis voluptatem. Nobis ullam corporis voluptatibus qui temporibus delectus voluptatibus numquam. Repellendus non doloremque est. Qui dolorem doloremque rerum voluptas et consequatur consequatur dolorem. Illo est et ab. Ipsa quasi qui voluptatem repudiandae laudantium sed. Aut sapiente commodi et consequatur. Ut aliquid veritatis molestias ea dignissimos voluptate.",
  "subject": "assumenda vero nostrum",
  "date": "2017-03-19T09:20:41.526Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 52,
  "key": 52,
  "name": "Kieran Auer",
  "cc": "Ellie.Watsica@hotmail.com",
  "email": "Morris.OKeefe23@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/y2graphic/128.jpg",
  "body": "Suscipit tenetur tempore sed assumenda quos quia quidem quidem animi. Praesentium aperiam sequi molestiae voluptatem eveniet in. Sequi tempora amet et ut officia. Rem aperiam aut. Ut veritatis facere quia tempore ea. Doloribus occaecati corrupti corporis culpa vero aut a sint. Fugit placeat beatae labore ratione qui eaque quaerat. Rerum distinctio repellat veritatis iste possimus est. Incidunt eligendi excepturi. Doloribus et fuga et et rerum rerum molestiae ipsum ea.",
  "subject": "inventore et est",
  "date": "2017-03-18T11:51:50.816Z",
  "bucket": "Important",
  "read": false
}, {
  "id": 31,
  "key": 31,
  "name": "Moriah Stamm",
  "cc": "Stanford_Bode75@hotmail.com",
  "email": "Joelle.Brekke@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/wikiziner/128.jpg",
  "tags": "Colleague",
  "body": "Consequatur non reiciendis earum. Minus quaerat modi qui. Excepturi laudantium quas placeat ut voluptatem. Similique vitae quis officiis. Aut quam nihil voluptatem. Error et itaque rerum nemo. Non aperiam nihil totam non. Tempore ut quidem sit laborum consequatur mollitia mollitia facilis aliquam. Delectus facilis voluptas laudantium iusto est. Nostrum ab dolor et voluptatem illo.",
  "subject": "neque est est",
  "date": "2017-03-17T23:54:01.564Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 0,
  "key": 0,
  "name": "Rupert Gusikowski",
  "cc": "Harmon18@gmail.com",
  "email": "Sidney_Lubowitz27@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg",
  "body": "Repellendus quos est earum quasi voluptate. Aut illo rerum. Repudiandae similique velit ipsa. Minus harum ut et numquam repudiandae veritatis. Sequi dolorum assumenda ut qui est. Id inventore aspernatur. Ipsam neque voluptates enim facere et saepe deserunt atque. Nulla iste id totam aliquam veritatis qui. Qui voluptatem voluptas. Ad qui fugiat assumenda voluptatem sit.",
  "subject": "accusamus deleniti omnis",
  "date": "2017-03-13T15:34:50.447Z",
  "bucket": "Inbox",
  "read": false
}, {
  "id": 24,
  "key": 24,
  "name": "Dena Bergstrom",
  "cc": "Keshaun.Yost@hotmail.com",
  "email": "Cicero_Lubowitz83@yahoo.com",
  "tags": "Teachers",
  "body": "Nostrum necessitatibus nostrum est omnis et expedita. Et unde saepe omnis. Nulla et rerum repudiandae nesciunt. Hic aut non ducimus consequuntur modi qui eos sed dolorum. Quisquam ipsa qui voluptatum corporis sunt minus eum. Corporis est inventore illum iusto in quas pariatur. Tempora ab eum. Sit possimus molestiae dignissimos. Molestias nobis quae totam officiis sit voluptatem. Omnis a ea quam et optio iusto est.",
  "subject": "dolores dolore sit",
  "date": "2017-03-13T07:49:52.615Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 97,
  "key": 97,
  "name": "Randall Hodkiewicz",
  "cc": "Jacky.Bednar@hotmail.com",
  "email": "Heidi26@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mighty55/128.jpg",
  "body": "Iste minus et. Non necessitatibus ut est est id amet. Officiis sequi dolorum assumenda ipsam magnam cum possimus. Laudantium nulla amet tempore excepturi id expedita dolorum quisquam deserunt. Odit vel sint dolor eos. Ea blanditiis animi. Quibusdam unde unde. Perspiciatis vel pariatur qui. Deleniti omnis est quae. Laboriosam numquam amet aliquid.",
  "subject": "ratione quidem molestiae",
  "date": "2017-03-08T19:22:50.130Z",
  "bucket": "Inbox",
  "read": false
}, {
  "id": 57,
  "key": 57,
  "name": "Camden Flatley",
  "cc": "Luther_Lakin@gmail.com",
  "email": "Ardith41@yahoo.com",
  "body": "Ipsa reiciendis molestiae repellat est. Accusamus illo quisquam. Et nihil quo minima. Quis labore accusantium doloremque placeat commodi eligendi iusto impedit. Cumque delectus odio quos repudiandae omnis unde atque. Fugiat doloribus officia nesciunt libero sed consequatur tempore neque aspernatur. Aliquid non sit expedita ut magnam sunt. Dolorem quia perferendis sit odio numquam quia sit. Laboriosam sint reprehenderit reiciendis et nobis velit velit. Accusantium non quod temporibus enim ut quia quia doloremque.",
  "subject": "facilis in est",
  "date": "2017-03-03T17:54:02.112Z",
  "bucket": "Starred",
  "read": false
}, {
  "id": 64,
  "key": 64,
  "name": "Deion O'Connell",
  "cc": "Twila.Goyette@gmail.com",
  "email": "Cynthia_Jacobi38@hotmail.com",
  "body": "Et iste eligendi dignissimos officiis illum rerum sunt dolorum ducimus. Earum sunt qui in qui. Ullam nostrum in dolores quibusdam impedit voluptate repellat. Et adipisci distinctio sapiente est ducimus repellendus deleniti. Est impedit nobis enim distinctio. Tenetur rem maxime rerum quos quis deleniti vitae. Molestiae nisi quo natus eum numquam inventore sit enim. Quisquam voluptas animi. Quisquam reprehenderit nostrum. Sapiente tempora est qui facilis corporis voluptatibus.",
  "subject": "architecto quo ut",
  "date": "2017-03-01T04:43:49.049Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 59,
  "key": 59,
  "name": "Ethyl Kemmer",
  "cc": "Darby50@hotmail.com",
  "email": "Carson.Abbott@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/a1chapone/128.jpg",
  "body": "Aut inventore omnis ad voluptate. Consectetur in id laboriosam recusandae voluptatem. Quidem autem dolores eveniet libero est. Soluta tempora reprehenderit nihil modi eum. Ex facilis est perspiciatis debitis architecto. Quo nihil corrupti distinctio ea qui. Beatae recusandae quis minima. Quis consequatur molestiae deserunt optio qui. Atque quo dolores esse expedita est incidunt nobis laboriosam saepe. Earum quis id suscipit.",
  "subject": "accusamus quia mollitia",
  "date": "2017-03-01T04:30:39.636Z",
  "bucket": "Starred",
  "read": false
}, {
  "id": 79,
  "key": 79,
  "name": "Makayla Runolfsson",
  "cc": "Delilah41@yahoo.com",
  "email": "Carleton_Altenwerth@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/konus/128.jpg",
  "body": "A illum sunt. Voluptates aperiam nam incidunt animi dolorem deleniti. Sit beatae aliquid quia sed placeat facere ab cumque delectus. Officiis et et fugit iure et consequatur. Quae est sequi placeat rerum quia. Voluptatem est quod libero animi culpa. Aspernatur omnis culpa. Sequi dolores harum omnis veniam molestiae. Ea quia veniam architecto quas est eos harum iure voluptas. Ab quidem reiciendis consequatur eos.",
  "subject": "a corrupti facilis",
  "date": "2017-02-25T23:09:05.732Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 70,
  "key": 70,
  "name": "Jessy Hahn",
  "cc": "Gustave_Stehr91@yahoo.com",
  "email": "Jocelyn.Zulauf@gmail.com",
  "body": "Voluptate neque corrupti et ut. Ipsam non dolore quia et. Sit dolor voluptates. Velit eos sint asperiores magnam modi praesentium dignissimos quidem. Corporis modi ut voluptas fugiat aperiam ut pariatur. Voluptatum aut provident. Minus rerum quam aut similique ut neque sit. Voluptatum corrupti quia qui. Et similique natus. Explicabo sed eius doloribus maiores rerum odit cum nam enim.",
  "subject": "unde et reiciendis",
  "date": "2017-02-10T06:37:35.336Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 10,
  "key": 10,
  "name": "Domenico Shanahan",
  "cc": "Macie_Grant@gmail.com",
  "email": "Reva.Cormier2@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg",
  "body": "Atque officiis incidunt voluptatem neque sed placeat ut et. Qui inventore iste vitae est quia. Laborum quis quia. Et qui dolores atque nihil pariatur. Blanditiis dolorem consectetur quia. Nemo asperiores exercitationem eos architecto fugit quo. Et commodi dolor adipisci aut porro alias velit ipsa. Autem error ut doloremque ut explicabo eum assumenda. Magni eveniet quaerat dignissimos ipsam enim. Et nostrum voluptatem minima qui eveniet voluptatem nemo dolore nesciunt.",
  "subject": "neque assumenda distinctio",
  "date": "2017-02-08T20:02:47.644Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 40,
  "key": 40,
  "name": "Einar Prohaska",
  "cc": "Mabel.Kling@yahoo.com",
  "email": "Sarah_Leuschke@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/colgruv/128.jpg",
  "body": "Voluptatum dicta commodi nam odio. Qui omnis laborum deserunt sed iste praesentium atque. Nihil natus vel quibusdam qui distinctio. Amet consequuntur dolor qui ad saepe et cupiditate libero dolores. Rerum voluptatem nulla. Deserunt voluptatum et pariatur eum recusandae praesentium. Inventore placeat inventore excepturi quod velit. In id adipisci sed perferendis odit voluptas et sit. Eum nihil unde assumenda vel modi. Quia nihil placeat beatae quas eius illum.",
  "subject": "nemo unde ut",
  "date": "2017-02-08T01:09:50.428Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 58,
  "key": 58,
  "name": "Hertha Wisozk",
  "cc": "Kiara.Armstrong@gmail.com",
  "email": "Emmie9@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/missaaamy/128.jpg",
  "body": "Dolorum quisquam eum est explicabo atque. Pariatur atque impedit corporis non. Reiciendis minus sint et. Quis ut ratione consequuntur. Possimus facilis voluptas vel et quibusdam. Fugiat sed enim laudantium. Delectus ut quia rem dolores rerum necessitatibus voluptatem quos aut. Et quae voluptates nesciunt tenetur quia ut aut fuga corrupti. Aut voluptatem facere est officiis. Quasi provident id esse suscipit.",
  "subject": "dolores iure nisi",
  "date": "2017-01-29T19:04:48.094Z",
  "bucket": "Starred",
  "read": true
}, {
  "id": 61,
  "key": 61,
  "name": "Evangeline Robel",
  "cc": "Yasmeen74@hotmail.com",
  "email": "Maxine_Conn@gmail.com",
  "body": "Quo enim atque. Saepe molestiae perferendis qui maiores ut eum suscipit. Optio architecto nihil necessitatibus saepe aut dolorem ex. Ad ipsum aut tempora ab minus ut minus. Natus facere aut. Autem et vero nulla. Commodi aut possimus cumque et officia autem aut. Deserunt totam eum facere voluptatem incidunt provident et saepe est. Aut qui maxime. Iste in quia.",
  "subject": "error qui non",
  "date": "2017-01-24T00:32:23.309Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 68,
  "key": 68,
  "name": "Corbin Bruen",
  "cc": "Buck_Halvorson@gmail.com",
  "email": "Max24@gmail.com",
  "tags": "Family",
  "body": "Quia eligendi quia sit. Alias vel exercitationem molestias sed voluptatibus quo. Accusantium cupiditate facere qui possimus sunt fugiat aut. Pariatur aut deleniti et sed sed voluptatem quas. Sit nihil veritatis tenetur temporibus labore et excepturi quia. Consequatur quae nobis quia alias et commodi architecto. Vel nam consequuntur possimus autem. Laboriosam voluptas eaque omnis expedita optio aut tenetur doloribus repellendus. Aut magni tenetur veniam. Sint consequuntur consequatur amet dolorem officiis perferendis laudantium saepe aut.",
  "subject": "laborum voluptatem delectus",
  "date": "2017-01-12T02:23:00.347Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 95,
  "key": 95,
  "name": "Amara Denesik",
  "cc": "Rickie_Murazik@hotmail.com",
  "email": "Cierra.Sipes23@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/xiel/128.jpg",
  "tags": "Teachers",
  "body": "Nostrum dignissimos iure eos qui delectus. Vel cupiditate ex. Quam aliquid nesciunt cumque et. Est autem rerum voluptates ea id. Placeat sint eum aut. Illum autem officiis. Et expedita rerum veniam sed praesentium. Placeat aliquam similique dolorem doloribus fuga autem autem. Ipsa earum animi in. Fugit et veritatis quam autem tempora dolor molestias soluta est.",
  "subject": "et consectetur amet",
  "date": "2017-01-10T21:30:05.964Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 55,
  "key": 55,
  "name": "Alayna Abernathy",
  "cc": "Demario.Kilback@yahoo.com",
  "email": "Vinnie_Turcotte19@hotmail.com",
  "tags": "ClassMates",
  "body": "Quo doloremque tenetur consequatur commodi perferendis expedita. Aperiam magni quibusdam fuga culpa sed tempora. Occaecati dolorem inventore veniam est nihil sit. Perspiciatis corrupti veritatis distinctio sint eos. Alias molestias qui sunt est quo a eum non velit. Nesciunt ipsa ipsum ut nihil. Omnis animi praesentium. Placeat qui porro optio rerum eos. Impedit laborum ipsam dolores et atque eaque sint. Tenetur et ipsam est ea quis aut officiis et dolores.",
  "subject": "sunt error fugit",
  "date": "2017-01-04T11:18:33.434Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 25,
  "key": 25,
  "name": "Marcellus Torp",
  "cc": "Lester.Tremblay56@gmail.com",
  "email": "Chaz3@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/yayteejay/128.jpg",
  "body": "Id quod ut natus voluptas aut harum voluptatibus sunt. Et nemo corporis sint architecto ex vitae voluptatem soluta sapiente. Explicabo dolores et molestiae numquam non. Ducimus dolor alias temporibus eligendi iusto. Rerum quos est repellendus quae sint sit est voluptas quaerat. Temporibus quasi iusto. Inventore et voluptatibus quisquam temporibus maxime repellendus dicta numquam. Autem voluptatum assumenda sequi ipsum ut. Quasi sequi et temporibus. Rerum consequatur recusandae est.",
  "subject": "id ut est",
  "date": "2017-01-03T10:35:53.688Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 91,
  "key": 91,
  "name": "Eleanora Metz",
  "cc": "Breanne97@hotmail.com",
  "email": "Ashleigh65@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/betraydan/128.jpg",
  "body": "Natus delectus necessitatibus nostrum ratione atque neque inventore fugit. Totam eligendi sed nesciunt ducimus similique. Quae excepturi eos quaerat modi aut eveniet ex. Quasi voluptas quis atque porro quia eveniet. Soluta amet voluptate dolorem est quo numquam. Dolorum iure mollitia voluptas voluptas. Voluptatem vel rerum sed illum vel tempora. Temporibus nesciunt et quis laboriosam minima perspiciatis officia. Adipisci cupiditate mollitia libero adipisci doloribus eos. Adipisci error sunt nisi.",
  "subject": "exercitationem delectus velit",
  "date": "2016-12-31T08:20:35.747Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 82,
  "key": 82,
  "name": "Shanel Cummerata",
  "cc": "Dejuan_Wolf@gmail.com",
  "email": "Madyson.Muller@yahoo.com",
  "tags": "Friend",
  "body": "Fugiat ea qui quasi. Excepturi autem voluptatum nulla odio quia beatae qui neque. Laboriosam eum quia necessitatibus aut rerum placeat dolorum deserunt. Quia dolores aut corporis. Dolor repellendus delectus esse rerum magni reprehenderit voluptatem. Tempora cupiditate facere tempore tempore voluptatem voluptatem odit. Quaerat laborum laborum culpa. Vel sint eveniet. Recusandae expedita voluptatum dolorem alias fuga. Voluptatem dolorem enim aut sequi deleniti voluptas et facilis omnis.",
  "subject": "molestias laudantium vel",
  "date": "2016-12-31T03:44:15.599Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 48,
  "key": 48,
  "name": "Elva Orn",
  "cc": "Della.Wuckert@gmail.com",
  "email": "Elvis_Oberbrunner@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mahdif/128.jpg",
  "body": "Dolorem harum dolor temporibus laboriosam. Ducimus temporibus a. Qui et sed quia qui. Cum voluptatem non atque. Non esse maxime odit. Ab repudiandae reiciendis vel odio nobis magni. Tempore assumenda cum tenetur amet et fugit. Ab ab animi est voluptas consequatur et repudiandae qui sint. Possimus ipsam alias occaecati sint officiis nihil. Eos nihil soluta eos reiciendis dolor sequi.",
  "subject": "quasi voluptas voluptas",
  "date": "2016-12-29T14:27:05.995Z",
  "bucket": "Starred",
  "read": true
}, {
  "id": 17,
  "key": 17,
  "name": "Mateo Stehr",
  "cc": "Emery.Willms54@yahoo.com",
  "email": "Cullen22@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/darcystonge/128.jpg",
  "tags": "Family",
  "body": "Distinctio voluptatibus nihil. Vero fugiat ut dicta cumque quo. Illum officiis adipisci quaerat sunt dolorum consequatur officia voluptatem minima. Doloremque culpa quae et. Modi deserunt perferendis autem quo aliquid quia. Laudantium aut perspiciatis aperiam provident. Commodi sit et. Esse modi placeat reprehenderit et sit non. Maiores aperiam modi aut aspernatur. Aut non veritatis at iste ut repudiandae provident animi ullam.",
  "subject": "id doloremque omnis",
  "date": "2016-12-18T09:10:57.276Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 46,
  "key": 46,
  "name": "Katherine Nitzsche",
  "cc": "Bernadine91@yahoo.com",
  "email": "Dillan.Boyle89@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg",
  "tags": "Colleague",
  "body": "Eum tenetur consequatur sit voluptas maiores repellat quia. Est cumque doloremque voluptatum. Adipisci totam enim. Est at corrupti rerum voluptatem. Eos velit aut ut ab laborum minima. Quod optio dolores. Voluptas saepe deserunt est deleniti praesentium unde saepe. Magni ex est nostrum assumenda blanditiis quod. Voluptatem ut perspiciatis. Animi perferendis est totam et quos sed nemo illo sint.",
  "subject": "nemo reprehenderit quis",
  "date": "2016-12-18T00:01:59.194Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 13,
  "key": 13,
  "name": "Cecilia Schulist",
  "cc": "Imelda.Dibbert@gmail.com",
  "email": "Anderson.Terry14@gmail.com",
  "body": "Iure rerum quia quia quidem doloribus praesentium tempore aut. Doloribus ad voluptatum harum est. Cum assumenda et. Dolorem est maxime officia aliquid et perferendis occaecati. Eos nesciunt tempora ut alias. Iusto quo blanditiis recusandae. Voluptas omnis sint. Ab debitis aut delectus. Dolorum accusantium repellat. Ut est similique dolor nesciunt deserunt molestias porro sunt.",
  "subject": "eligendi maiores quaerat",
  "date": "2016-12-13T09:08:37.974Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 29,
  "key": 29,
  "name": "Henriette Rohan",
  "cc": "Laurianne26@gmail.com",
  "email": "Vicenta.Pouros34@yahoo.com",
  "body": "Vel consequatur culpa ut voluptatem est omnis enim. Ut eos tempora quibusdam vitae. Dolor mollitia alias occaecati cum officia cumque nesciunt sint. Animi ut id accusantium incidunt beatae. Voluptatum expedita qui repellendus veritatis impedit aliquid et illum. Quia quasi similique sint quidem est non. Blanditiis dignissimos autem quaerat nam ex earum. Et est explicabo eum et. Dolores nisi et officia quibusdam inventore. Rerum non quos rerum ipsa vitae odio.",
  "subject": "quia assumenda at",
  "date": "2016-12-11T23:43:32.239Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 7,
  "key": 7,
  "name": "Earlene Simonis",
  "cc": "Marilie_Moore@hotmail.com",
  "email": "Sydnie.Aufderhar61@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg",
  "tags": "Students",
  "body": "Et unde repudiandae earum maiores vel. Impedit consectetur dolorem nisi. Nesciunt omnis et veniam et doloremque a non consectetur vero. Veniam aperiam iste voluptas illo tempora. Rerum modi voluptate qui distinctio atque voluptatem at. Sequi voluptas nobis consequatur omnis. Expedita reiciendis aut eum qui qui possimus magnam similique est. Dignissimos odit ducimus perspiciatis. Qui ipsum ad maiores nemo id. Minus quidem rerum omnis est rerum eos dolorem voluptate.",
  "subject": "praesentium nesciunt eveniet",
  "date": "2016-11-28T10:06:56.174Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 23,
  "key": 23,
  "name": "Robbie Kuhic",
  "cc": "Vicente_Brakus79@gmail.com",
  "email": "Carol.Treutel@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/themikenagle/128.jpg",
  "body": "Aut maxime quae fuga nisi a soluta. Inventore nam sed reiciendis doloremque eum minus dignissimos. Laborum pariatur fugit vel et. Et quia quia. Et numquam voluptas illum nihil dolorem sit nihil. Omnis quibusdam rem esse qui non natus. Aut magnam recusandae ex amet. Cupiditate eos autem ut quae voluptatem animi nihil voluptates itaque. Rerum sint sunt quo culpa ea molestiae modi qui consequatur. Esse et dolor enim ea ipsum aut.",
  "subject": "vero architecto provident",
  "date": "2016-11-24T21:10:31.798Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 71,
  "key": 71,
  "name": "Werner McDermott",
  "cc": "Kareem_Ward@gmail.com",
  "email": "Gaetano77@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/jasonmarkjones/128.jpg",
  "body": "Ullam necessitatibus sunt alias dolorem minus aut illum impedit. Harum repellat voluptatem. Quia sed ad et. Perspiciatis vel assumenda officia labore nobis voluptas voluptates. Rem quaerat vel rerum adipisci. Dolorum quia error non. In dolorem ex alias. Blanditiis optio libero exercitationem dolore. Dolorem tempora ut dolorem ut. Aut ipsa perspiciatis.",
  "subject": "ullam illo placeat",
  "date": "2016-11-09T18:24:36.480Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 66,
  "key": 66,
  "name": "Steve Dickens",
  "cc": "Floy.Bartoletti@yahoo.com",
  "email": "Frederique_Wunsch@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg",
  "tags": "Students",
  "body": "Minima debitis id neque architecto. Aliquid quis excepturi sapiente repellat. Sint molestias non omnis numquam dolor veritatis esse aperiam. Sit voluptates doloremque repellat labore est voluptatum. Autem ut quos provident voluptatem. Sed a nemo et ut iure autem. Qui repudiandae qui eos. Consequatur vel sed provident tempore cum hic. Deserunt harum dolores natus rem id et quia eum voluptatum. Et eum sapiente sunt ut sapiente quidem.",
  "subject": "exercitationem vero qui",
  "date": "2016-11-08T17:44:26.340Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 33,
  "key": 33,
  "name": "Odie Gislason",
  "cc": "Tania.Mueller@hotmail.com",
  "email": "Angelina.Tromp7@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/gseguin/128.jpg",
  "body": "Molestias vero pariatur possimus repudiandae quo sed. Ut in minus nesciunt dolor quidem recusandae doloremque libero. Veritatis quis nemo repellat. Omnis et occaecati. Inventore natus voluptate quisquam rerum numquam inventore tempora a amet. Fuga iusto ullam. Est aspernatur voluptatem optio quisquam accusantium. Voluptatem eum eum in sed ut nostrum qui voluptate rem. Et et impedit veniam dolores. Voluptas non dolorem.",
  "subject": "rerum voluptas et",
  "date": "2016-11-06T13:20:00.738Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 5,
  "key": 5,
  "name": "Berenice Bradtke",
  "cc": "Clarissa.Ratke@hotmail.com",
  "email": "Enoch_Olson30@gmail.com",
  "body": "Temporibus quidem eligendi at et. Cupiditate in quis iste magni. Laboriosam autem explicabo voluptas quos. Minus tempora perferendis et dolore sed quasi dolorem fugiat blanditiis. Iusto id quia quasi at earum quam tempore. Aut incidunt sapiente dolor iste suscipit. Ut quia ut consequatur exercitationem iusto recusandae assumenda. Et laudantium molestias beatae repellat aut eius. Odit quas consectetur saepe ex quo rerum qui. Dolorem aspernatur est optio dicta non.",
  "subject": "voluptatem sit pariatur",
  "date": "2016-11-01T21:19:38.377Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 92,
  "key": 92,
  "name": "Jarvis Kovacek",
  "cc": "Westley81@hotmail.com",
  "email": "Cleve_Stroman@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/vikashpathak18/128.jpg",
  "tags": "Teachers",
  "body": "Sint illum voluptatem autem odit culpa autem reprehenderit veniam. Eos sit cumque voluptatem blanditiis molestiae quia aspernatur. Et dolorem dolorem delectus autem nesciunt quia ut. Consequatur qui quas iure fugit sequi ratione. Quod cumque et eos voluptatem qui est quis necessitatibus. Veritatis voluptas voluptatibus. Atque impedit illum quos eum. Tenetur libero culpa et nisi ea. Suscipit et et nihil quos temporibus. Pariatur aspernatur nisi et reiciendis.",
  "subject": "beatae qui rerum",
  "date": "2016-11-01T11:37:57.980Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 73,
  "key": 73,
  "name": "Hope Schuster",
  "cc": "Colt_Herzog@yahoo.com",
  "email": "Jeffrey_Glover@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg",
  "tags": "Students",
  "body": "Odio fuga nobis fugit molestias dicta sint et eos officiis. Quisquam dolores id. Earum aspernatur ut laboriosam maxime rerum aut sit voluptas ipsum. Amet deleniti repellendus et atque quia tenetur. Autem cupiditate labore. Autem reiciendis qui unde nostrum eos ducimus quis. Officia odit et sunt voluptatibus et id. Cupiditate est et repellendus. Fugit at qui et aperiam explicabo nobis deleniti fugit. Et amet adipisci et nihil sed non quasi in et.",
  "subject": "est nobis odit",
  "date": "2016-10-28T11:19:23.037Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 36,
  "key": 36,
  "name": "Jared Rath",
  "cc": "Macy_Medhurst@hotmail.com",
  "email": "Delpha_Gutkowski46@yahoo.com",
  "tags": "Colleague",
  "body": "Esse sed est laborum est aperiam optio totam. Sit occaecati sint aut omnis laudantium. Occaecati nulla aspernatur nulla est iure alias consequatur. Molestiae consequuntur sit id ut enim. Ea et voluptatibus assumenda cum animi sed esse aut. Similique ipsam assumenda esse rerum. Et doloribus vel nesciunt hic rerum est enim est commodi. Aperiam fugiat explicabo vel doloribus qui nisi et aut. Pariatur aut dolores numquam beatae repellendus et omnis. Velit voluptates sint in eius voluptates sequi aut ad necessitatibus.",
  "subject": "ad corrupti sequi",
  "date": "2016-10-27T09:22:19.945Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 27,
  "key": 27,
  "name": "Teagan Keebler",
  "cc": "Fritz.Fisher47@gmail.com",
  "email": "Sim_Klocko72@yahoo.com",
  "tags": "Students",
  "body": "Vero dicta quis voluptatem et autem. Ut odit aut qui voluptatem. Et hic tenetur. Numquam recusandae aliquid vel eligendi nisi accusantium. Illum sunt corporis cupiditate vitae eos perferendis rerum incidunt tenetur. Et vero labore illo et numquam. Alias aliquam quibusdam. Nam fugit minus aspernatur ab numquam inventore ex. Reprehenderit veniam doloremque sequi commodi molestias magni. Minima vel delectus eius consequatur sit aut est suscipit voluptatem.",
  "subject": "inventore ut quasi",
  "date": "2016-10-19T01:34:35.691Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 83,
  "key": 83,
  "name": "Kara Kuhic",
  "cc": "Reyna_Schaden97@gmail.com",
  "email": "Freddy.Gibson60@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg",
  "body": "Laudantium similique nam eum ut nihil. Non qui at beatae. Minima optio dolores quis. Quasi sed odit est quia qui dolore culpa. Consequatur voluptatibus ipsum explicabo et possimus. In harum ullam ut enim incidunt assumenda eveniet. Libero saepe vitae vero. Rem omnis nobis non quis. Sint ut aut est. Consequatur rem consequatur.",
  "subject": "asperiores commodi et",
  "date": "2016-10-17T00:29:28.677Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 76,
  "key": 76,
  "name": "Mariela Rath",
  "cc": "Jannie74@yahoo.com",
  "email": "Raina37@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg",
  "tags": "Friend",
  "body": "Numquam aliquam vitae a quis doloribus nihil blanditiis. Corporis eius animi. Sapiente beatae accusamus. Minima dolorem voluptas. Repudiandae velit nostrum. Voluptas enim repellendus reprehenderit ea suscipit accusamus consequuntur. Explicabo cum ratione impedit sunt voluptas. Ut placeat sint dolore ipsum. Aut ex error blanditiis et atque sint. Ab culpa ad et.",
  "subject": "ipsum eos esse",
  "date": "2016-10-16T13:44:14.334Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 18,
  "key": 18,
  "name": "Brown Padberg",
  "cc": "Josefa_Greenfelder@hotmail.com",
  "email": "Terence_Considine@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg",
  "body": "Nesciunt eum eaque. Laudantium voluptatem quis fuga sint. Magni dignissimos vero at dolorem repudiandae aut sunt qui. Beatae soluta tenetur. Porro autem quidem. At omnis aliquam eum. Aut praesentium nulla dolores quod quibusdam perferendis. Dolores ut id repellat similique libero aut quo laudantium. Nulla consequuntur voluptatem cumque beatae eum voluptates. Iusto voluptatum enim repellat ipsam illum.",
  "subject": "alias reiciendis tempora",
  "date": "2016-10-07T02:56:02.571Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 88,
  "key": 88,
  "name": "Luna Labadie",
  "cc": "Bessie.Blanda86@hotmail.com",
  "email": "Fletcher_Schumm@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg",
  "body": "Quia unde sapiente excepturi commodi rerum est consequatur at. Sed at labore labore deleniti hic consequuntur perferendis ipsa. Aut molestiae odio eos molestiae delectus dolores quisquam sunt. Vitae dolor eum similique magni voluptatem. Eveniet sed vitae. Autem omnis corrupti dolorem nesciunt rerum vel odit necessitatibus. A recusandae magni. Voluptatem at eveniet voluptatem qui quia asperiores harum error ea. Omnis rerum est consequatur. Culpa aut vel qui sint et odio.",
  "subject": "deleniti aut aut",
  "date": "2016-10-05T16:02:18.907Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 16,
  "key": 16,
  "name": "Keyon Boyle",
  "cc": "Ellsworth.Goldner48@hotmail.com",
  "email": "Agnes_Casper@gmail.com",
  "body": "Vero consequatur rem. Autem atque consequatur. Labore adipisci qui. Cumque quia labore nisi est molestiae autem voluptatem est. Adipisci velit corrupti similique fugit et. Incidunt vitae quam. Similique animi sint qui eos aut. Quia tempore dolore ducimus iusto non omnis aut. Voluptas maxime iure ratione. Maiores numquam aut fugiat.",
  "subject": "eveniet qui molestiae",
  "date": "2016-10-02T23:13:23.785Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 89,
  "key": 89,
  "name": "Magali Swaniawski",
  "cc": "Anika.Lebsack36@gmail.com",
  "email": "Shannon23@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg",
  "tags": "Colleague",
  "body": "Fugiat hic esse optio. Rerum beatae quas dolores pariatur in qui sunt. Consectetur sunt facere nemo qui voluptate non numquam. Ut voluptate saepe dolorem ut. Magni quae sequi laborum. Consequatur repellat iusto laboriosam sit laborum labore minus voluptas repellat. Modi aspernatur consequuntur qui at aut laudantium est non. Soluta et et aperiam quisquam quibusdam voluptatem. Ipsam et accusamus aperiam. Nam rerum deleniti ab hic.",
  "subject": "sed vel nihil",
  "date": "2016-09-30T10:25:06.903Z",
  "bucket": "Starred",
  "read": true
}, {
  "id": 39,
  "key": 39,
  "name": "Louvenia Bruen",
  "cc": "Christophe12@gmail.com",
  "email": "Cletus.Schumm@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/sementiy/128.jpg",
  "tags": "Family",
  "body": "Non ut fuga voluptas possimus non ab velit. Praesentium et incidunt consequuntur saepe. Voluptatibus ut velit laboriosam dignissimos. Nihil omnis non voluptatem aut consequatur dolores laboriosam sit. Cum distinctio est. Nobis corrupti libero. Hic velit assumenda unde odit fugit numquam et. Aliquam natus aut harum quaerat exercitationem. Ab cupiditate distinctio culpa impedit. Non et voluptatem impedit repellat neque omnis voluptas.",
  "subject": "qui doloremque omnis",
  "date": "2016-09-09T02:11:57.609Z",
  "bucket": "Starred",
  "read": true
}, {
  "id": 74,
  "key": 74,
  "name": "Samara Pfeffer",
  "cc": "Bridgette_Senger26@yahoo.com",
  "email": "Joey76@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/xamorep/128.jpg",
  "body": "Vero officia quasi optio quidem. Cupiditate consequuntur officia asperiores ut vel quisquam nam. Numquam eaque minima est rerum est blanditiis veritatis repudiandae laudantium. Et qui placeat saepe ad quas harum maxime quod. Dolor quae omnis qui. Est odit suscipit aperiam esse laborum modi iste distinctio occaecati. Rerum quia aspernatur quaerat minima eos rerum. Voluptas ad animi non aliquid. Recusandae repellendus consequatur quam. Aliquid unde tenetur.",
  "subject": "consectetur a accusantium",
  "date": "2016-09-08T16:33:08.696Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 42,
  "key": 42,
  "name": "Maximilian Breitenberg",
  "cc": "Lavina.Lubowitz64@yahoo.com",
  "email": "Ignatius_McGlynn@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/designervzm/128.jpg",
  "tags": "Students",
  "body": "Vero non voluptate. Asperiores inventore ut debitis odio culpa et exercitationem et ratione. Quo occaecati corrupti quia nihil dicta explicabo. Sequi consequatur harum odit. Nostrum nulla doloremque recusandae suscipit veritatis sapiente minima corporis. Voluptatem amet fugit blanditiis dolor voluptatem commodi. Atque rerum incidunt perferendis alias accusantium ducimus eveniet fuga nihil. Ut adipisci autem sit ut quia ipsa quia laborum molestiae. Et cum voluptas. Soluta eum perspiciatis iusto officiis.",
  "subject": "harum est neque",
  "date": "2016-09-06T10:16:27.820Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 51,
  "key": 51,
  "name": "Kaylin Koch",
  "cc": "Marjorie80@yahoo.com",
  "email": "Cleveland0@gmail.com",
  "tags": "Friend",
  "body": "Et id magni et minus amet sit veritatis. Voluptatem incidunt ipsa dolores ipsam laboriosam non laudantium et. Sed eaque placeat. Provident perferendis suscipit voluptatem vero enim suscipit totam omnis. Reiciendis delectus in consequatur. Id deserunt voluptatem ea quam dolores quod ipsum aperiam velit. Ratione praesentium rerum fugiat voluptatem maiores vero dolorem eaque fugit. Non quibusdam dolore maiores consequatur. Quia deleniti commodi sed tempore aut. Omnis est corporis qui placeat.",
  "subject": "facilis architecto maxime",
  "date": "2016-09-03T17:13:24.524Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 8,
  "key": 8,
  "name": "Angus Thompson",
  "cc": "Lera.Terry92@hotmail.com",
  "email": "Stella73@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/agustincruiz/128.jpg",
  "body": "Assumenda saepe maxime quas ut et. Enim dolore quas nihil et est atque sit. Enim tenetur eos iste velit amet quia. Facilis totam praesentium debitis veniam similique consequatur. Asperiores et quia recusandae quis aut. Deserunt et praesentium repudiandae tempora fugit odio. Quaerat error laudantium eligendi facilis veniam. Laudantium unde sapiente nemo. Minima voluptatem nemo qui autem tenetur. Sed accusamus maxime natus sint quibusdam eligendi quae rerum.",
  "subject": "rerum et ut",
  "date": "2016-09-01T20:39:57.285Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 14,
  "key": 14,
  "name": "Kaci Heathcote",
  "cc": "Krista.Sawayn36@gmail.com",
  "email": "Ford_Conn@hotmail.com",
  "body": "Laboriosam doloremque et commodi enim sint. Mollitia omnis omnis et voluptate vitae accusantium architecto. Debitis aut doloremque voluptatem quia molestiae explicabo sunt. Praesentium id accusantium nisi dignissimos nostrum repudiandae amet. Consequatur tempore laborum id a molestiae molestiae atque placeat placeat. Magnam laudantium non. Magnam enim excepturi rerum voluptatem ab et nesciunt eum. Enim ea quis delectus recusandae officiis quia vitae. Quam maiores facilis magni omnis ex quia dolor qui. Fuga architecto vel eos excepturi.",
  "subject": "autem omnis dolorem",
  "date": "2016-08-31T11:31:44.241Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 20,
  "key": 20,
  "name": "Stephon Rowe",
  "cc": "Mohammed_Rippin@gmail.com",
  "email": "Walter.Breitenberg@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/scottfeltham/128.jpg",
  "tags": "Colleague",
  "body": "Velit fuga ullam qui dolore vel. Expedita distinctio unde a non quia. Explicabo quis et a. Quidem recusandae similique magni ut velit rerum eaque. Voluptatem nulla debitis tenetur rerum maiores. Ipsa in dolores quo reiciendis adipisci voluptas consectetur consequuntur error. Quia ad tempore tempora maxime totam corporis minima vitae dolorum. Delectus sequi velit omnis ut consequatur ullam commodi. Est voluptatem ab adipisci dolores. Sed ullam autem deleniti rerum quos atque veniam et ut.",
  "subject": "ab consequatur qui",
  "date": "2016-08-30T22:01:16.544Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 85,
  "key": 85,
  "name": "Dejon Bartell",
  "cc": "Dusty_Nolan59@gmail.com",
  "email": "Citlalli83@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",
  "tags": "Family",
  "body": "Aperiam aliquid in voluptate et consequatur expedita et praesentium consequatur. Molestias non debitis consequatur impedit. Et accusamus quibusdam tenetur veniam enim. Sed ipsum occaecati natus. Autem sunt voluptatem soluta vel. Nostrum quia aut sunt reiciendis voluptas. Necessitatibus nihil eum et optio. Quia quos aut aut voluptatem quo eos quod. Eum cum suscipit distinctio. Laboriosam saepe minima.",
  "subject": "adipisci dolorum voluptatem",
  "date": "2016-08-26T02:04:20.150Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 62,
  "key": 62,
  "name": "Cydney Casper",
  "cc": "Jerome_Okuneva@hotmail.com",
  "email": "Jonas13@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg",
  "body": "Animi unde non nostrum et dolore. Nemo nihil praesentium qui nobis. Earum pariatur et omnis exercitationem corrupti ipsa. Et provident ex aliquam consequatur architecto accusantium. Facilis laboriosam debitis nulla natus modi saepe possimus. Nihil voluptatem ad repellendus non et et similique. Amet possimus velit. Veniam nulla sunt illo eum rerum quaerat. Et iusto molestiae aliquid rerum ratione quas et recusandae. Ullam dolorem laboriosam tempore nesciunt.",
  "subject": "et recusandae beatae",
  "date": "2016-08-11T05:54:46.384Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 47,
  "key": 47,
  "name": "Ashlee Schulist",
  "cc": "Breanna81@hotmail.com",
  "email": "Marie_Ryan@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mirfanqureshi/128.jpg",
  "body": "Dolor libero quos eius. Eveniet deserunt quia neque exercitationem sapiente maxime. Dolorem porro in amet at eligendi. Id vitae incidunt est provident ab quia. Mollitia labore ratione voluptatum non. Dolorum delectus velit veniam doloremque qui ab. Tempore et autem harum. Blanditiis similique vel labore itaque. Quis provident repellendus eos ipsa. Accusamus accusantium sed impedit quo commodi est sunt.",
  "subject": "omnis quas aut",
  "date": "2016-08-10T16:07:33.349Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 63,
  "key": 63,
  "name": "Chelsey Gislason",
  "cc": "Cullen_Shanahan@gmail.com",
  "email": "Estefania98@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/overcloacked/128.jpg",
  "body": "Voluptas natus cupiditate odio odit sit voluptas et. Qui soluta facere ut impedit et. Id dolores sed ut expedita quibusdam hic facilis quia. Expedita quia aut eum voluptas id. Veritatis labore delectus quae perspiciatis dolorem saepe deserunt ut omnis. Labore voluptas consectetur quis laboriosam nulla enim totam ut molestiae. Qui ipsa est dicta. Qui consequatur eum voluptatem consequatur eos suscipit repellendus voluptates cum. Doloremque vel rerum incidunt recusandae. Quia velit tempora fugiat pariatur eveniet repudiandae quia modi.",
  "subject": "iure est eos",
  "date": "2016-08-10T04:33:34.487Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 72,
  "key": 72,
  "name": "Sigmund Spinka",
  "cc": "Nikita_Rice91@hotmail.com",
  "email": "Margarita.Kohler@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/anasnakawa/128.jpg",
  "body": "Id et quam dolores non expedita laborum eius. Voluptas quia sunt delectus consectetur reprehenderit ut iusto delectus. Sit quas aliquam ut officiis. Ullam vitae hic est voluptatem voluptatem asperiores molestiae. Fugiat dolorem repudiandae. Omnis quis debitis natus perspiciatis non quo id porro quod. Dolor temporibus commodi nisi in error in. Eos accusantium dignissimos aliquid fuga doloremque ad iure dolorem quisquam. Officiis reiciendis et nam mollitia nulla provident est. Repellendus pariatur consequatur et iste enim.",
  "subject": "id quae autem",
  "date": "2016-08-08T17:11:29.856Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 12,
  "key": 12,
  "name": "Mauricio Beier",
  "cc": "Rosendo74@hotmail.com",
  "email": "Kyler_Gaylord46@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/tonymillion/128.jpg",
  "tags": "Family",
  "body": "Qui ex rem officia illo. Et quos dolores eaque autem. At rerum officia ut necessitatibus repellat. Sunt labore ut eos eaque ut quam. Ut doloribus aut optio cum voluptas vitae qui. Aut laborum voluptas cum. Eligendi repudiandae ullam incidunt consequuntur consectetur ut ab quia. Voluptas voluptatem eos cumque quaerat dolor ipsum modi eum. Quis sit ut consequatur nemo voluptatem. Hic ipsam recusandae voluptate sequi molestiae doloremque maxime non voluptatem.",
  "subject": "ut rem sit",
  "date": "2016-08-07T23:07:54.231Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 6,
  "key": 6,
  "name": "Nikko Miller",
  "cc": "Howell.Spinka11@hotmail.com",
  "email": "Kailee_Shields@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/deviljho_/128.jpg",
  "tags": "Family",
  "body": "Sit eum sequi corrupti iusto sed magnam. Dolorem sint ducimus aut a. Odit libero perferendis sed. Delectus ad in quam quia architecto. Exercitationem porro expedita porro aliquam. Et facilis quo atque voluptatem molestiae. Sunt ab dolorem hic odit. Velit sit quasi velit quia suscipit voluptate autem. Alias aut aspernatur nihil accusamus ea harum amet. Eum animi magni repellat distinctio libero accusantium.",
  "subject": "enim vel vitae",
  "date": "2016-08-04T03:31:50.216Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 49,
  "key": 49,
  "name": "Jarred Ebert",
  "cc": "Emmitt.Douglas19@yahoo.com",
  "email": "Akeem.Bartell14@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/tbakdesigns/128.jpg",
  "tags": "Students",
  "body": "Velit expedita cum libero eos. Est possimus possimus ducimus commodi perferendis. Aut autem voluptas maxime suscipit maiores quis alias iste. Pariatur ratione eaque. Et voluptatum culpa asperiores perferendis ullam iusto eum ab. Molestias reprehenderit et numquam officia aliquid. Nostrum voluptatum doloribus eum nisi. Tenetur in non ea officia. Dignissimos exercitationem aperiam sit assumenda optio animi asperiores deleniti et. Iusto repellat ea veritatis ut aliquid et.",
  "subject": "suscipit ut est",
  "date": "2016-07-30T22:55:52.144Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 78,
  "key": 78,
  "name": "Elta Daugherty",
  "cc": "Everardo.Sawayn@gmail.com",
  "email": "Jamil75@hotmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/martinansty/128.jpg",
  "body": "Incidunt at nulla rerum non aut voluptas. Libero in rerum. Natus et vitae exercitationem accusamus odio doloremque ullam. Facilis est voluptatem voluptatibus rerum molestiae tempora similique nulla culpa. In incidunt eos vel quisquam aut nihil molestias reprehenderit laborum. Illo et ut aut. Et et voluptas. Enim possimus recusandae aut quisquam eum doloribus. Delectus sed et incidunt eveniet doloremque voluptatem eos nostrum. Voluptates beatae rerum aut molestiae cumque minus et est vero.",
  "subject": "qui id sed",
  "date": "2016-07-26T16:14:01.222Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 34,
  "key": 34,
  "name": "Lolita Mayert",
  "cc": "Shanie.Doyle@yahoo.com",
  "email": "Marquis70@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg",
  "body": "Doloribus sit et iste laboriosam quis. Veritatis magnam et sit consequatur ipsam. Eum doloribus odio eos doloremque. Omnis unde qui et eum voluptas quae labore quos. Autem amet nisi omnis dolore omnis itaque vitae aut. Accusantium nam consequatur delectus. Reprehenderit est maiores consequuntur alias totam molestias dolor maiores neque. Deserunt odit aperiam a tenetur sint voluptas sit aut. Debitis qui dolorum. Vel iusto aut aut accusantium et aperiam vitae inventore.",
  "subject": "harum minus aut",
  "date": "2016-07-25T06:08:25.714Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 2,
  "key": 2,
  "name": "Tristian Dietrich",
  "cc": "Kiana_Stehr@yahoo.com",
  "email": "Eloise.Olson@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg",
  "tags": "ClassMates",
  "body": "Veritatis architecto quod possimus necessitatibus illo ab. Distinctio et incidunt dolores repellendus vitae maxime. Numquam id et temporibus reiciendis. Et velit non est et debitis adipisci labore. Pariatur quasi eaque provident quibusdam. Maxime ut aperiam ea eum in et. Hic quia dolor. Nobis sunt et corporis. Perspiciatis quod molestiae. Eius dolor quasi.",
  "subject": "eum id tempore",
  "date": "2016-07-22T10:17:15.497Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 28,
  "key": 28,
  "name": "Cordie Botsford",
  "cc": "Rosalee_Treutel@hotmail.com",
  "email": "Sasha_Lebsack@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg",
  "body": "Voluptates excepturi non eaque alias voluptate voluptatem temporibus. Qui beatae veniam ad. Quibusdam possimus amet est. Maxime non non. Enim officiis nobis dolorum. Voluptatem cum delectus quis animi quibusdam. Tempora at maiores. Est itaque est consequuntur sed architecto praesentium voluptatem. Repellendus consequuntur aut occaecati perferendis culpa mollitia voluptas et velit. Illum quia rem dolor mollitia aliquam voluptas.",
  "subject": "totam quo adipisci",
  "date": "2016-07-18T15:14:47.897Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 90,
  "key": 90,
  "name": "Marlee Schinner",
  "cc": "Blaze_Schaden77@yahoo.com",
  "email": "Darren_Kertzmann@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg",
  "tags": "Teachers",
  "body": "Explicabo consectetur magnam animi ut et voluptatum blanditiis. Blanditiis voluptatem qui quae consequatur. Eligendi voluptate perspiciatis excepturi. Occaecati molestias id repellendus. Est autem rem repudiandae doloribus tempora et repellat ipsum corrupti. Cumque quidem alias atque aliquid. Quibusdam dolorem mollitia ut. Laboriosam impedit nihil consequatur eum atque odio quia beatae. Dolore quidem pariatur est saepe occaecati veritatis. Dolor sunt quo fugiat facere deserunt sit molestiae laboriosam quas.",
  "subject": "magni sed sunt",
  "date": "2016-07-17T16:51:23.443Z",
  "bucket": "spam",
  "read": true
}, {
  "id": 11,
  "key": 11,
  "name": "Kailyn Johnson",
  "cc": "Napoleon89@gmail.com",
  "email": "Lucas_Stiedemann91@yahoo.com",
  "tags": "Family",
  "body": "Excepturi quo laboriosam qui eaque. Accusantium eveniet odit sint ducimus. Qui dolore hic. Eveniet laborum occaecati ullam culpa facilis libero dolores saepe. Qui est molestiae ad hic ut. Repellat natus similique. Dolor consequatur in. Qui tenetur et qui odit expedita molestiae quo harum. Ut sed voluptas ea molestiae et. Quas aut reprehenderit sit accusantium veniam rerum tenetur occaecati.",
  "subject": "illo in beatae",
  "date": "2016-07-15T14:44:12.972Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 4,
  "key": 4,
  "name": "Gunnar Kirlin",
  "cc": "Nolan75@hotmail.com",
  "email": "Tod3@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/fabbrucci/128.jpg",
  "tags": "Students",
  "body": "Deleniti eum et voluptatibus fuga velit et dolores quia quam. Veritatis nostrum adipisci voluptas voluptates. Nihil repellat cumque iure. Perspiciatis dolore fuga voluptas. Labore reiciendis accusantium et mollitia. Totam itaque odit. Sint voluptate praesentium deserunt. Accusamus ea et at dolores consequuntur sunt ut. Animi ipsa provident laboriosam nemo est saepe inventore. Rem in sunt ut esse et omnis dolor quisquam sint.",
  "subject": "ad fugiat eos",
  "date": "2016-07-10T23:51:28.839Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 50,
  "key": 50,
  "name": "Aletha Heaney",
  "cc": "Adelle_Gusikowski67@yahoo.com",
  "email": "Dariana3@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",
  "tags": "Students",
  "body": "In voluptatem quibusdam saepe voluptates iure ut odit illum. Vel cum quasi et ad voluptatem recusandae libero et. Atque et perspiciatis eaque voluptatem. Accusamus deserunt ut est possimus voluptate ut. Et dignissimos enim consequatur. Molestiae beatae soluta. Eum voluptatibus culpa recusandae rerum quaerat. Omnis accusantium sint molestiae ut accusantium iure ut. Eos aut architecto distinctio eveniet labore ipsa. Aliquid totam aut assumenda.",
  "subject": "consequatur quos voluptates",
  "date": "2016-07-08T06:30:35.201Z",
  "bucket": "Drafts",
  "read": true
}, {
  "id": 45,
  "key": 45,
  "name": "Jess Cummings",
  "cc": "Guy81@hotmail.com",
  "email": "Reggie_Goodwin@yahoo.com",
  "body": "Accusantium ipsum provident distinctio harum illo. Veniam aliquid a numquam soluta illum distinctio voluptates pariatur possimus. Nesciunt consequatur et eius necessitatibus iusto veniam ipsam sit qui. Voluptatem et porro optio et consectetur quia ab. Voluptatem nam sit recusandae tempore molestiae dolorem cum voluptatem. Aut quos doloribus consectetur ad mollitia et molestiae numquam voluptas. Suscipit rerum est rem aut accusamus cumque assumenda et nulla. Qui doloribus sed animi labore et labore unde. Numquam distinctio accusamus illo quia voluptatem quia. Sunt ut iure optio quidem fugit veritatis.",
  "subject": "distinctio a qui",
  "date": "2016-07-06T06:10:44.182Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 67,
  "key": 67,
  "name": "Marion Gusikowski",
  "cc": "Frank31@hotmail.com",
  "email": "Alec_Parisian87@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg",
  "body": "Quia possimus eligendi beatae et iusto ea. Est vitae officiis impedit ipsam consequuntur et. Vero quo pariatur dignissimos rem illum corrupti ut ut. Ipsum consequatur sapiente perspiciatis recusandae iusto similique placeat itaque. Porro asperiores eos ut voluptate quasi. Qui nisi aut quos officia nisi odio. Dolor voluptatem et. Fugiat quia ea omnis. Unde est voluptatibus quae. Quis expedita iusto in ipsum officia atque deleniti.",
  "subject": "quae maxime eos",
  "date": "2016-07-05T19:24:38.679Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 77,
  "key": 77,
  "name": "Darby Johnson",
  "cc": "Aurelie_Howell@gmail.com",
  "email": "Marcel59@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/BroumiYoussef/128.jpg",
  "body": "Animi quod vero. Autem ut quod dignissimos consequatur dignissimos et. Eum cum reprehenderit doloremque. Perferendis porro tenetur ad quae ut assumenda quis maiores. Fuga aut et aspernatur in totam ipsam est. Illo et architecto expedita ea error nulla hic. Et aut beatae. Deserunt provident dolor amet molestiae veniam. Minus perferendis itaque molestias dicta quos iusto porro tempore qui. Iste tenetur alias.",
  "subject": "aut alias eum",
  "date": "2016-07-05T17:37:15.933Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 80,
  "key": 80,
  "name": "Beatrice Jerde",
  "cc": "Gerard82@yahoo.com",
  "email": "Destiny95@yahoo.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/robturlinckx/128.jpg",
  "body": "Qui maxime exercitationem sint et voluptas. Repellat quo odio occaecati tempore et molestiae et sequi. Iste deleniti aliquam qui quaerat est saepe nemo. Sint quibusdam voluptas cupiditate optio ut recusandae repellendus reprehenderit. Ut optio quo eveniet. Accusantium consequuntur nulla quas et. Omnis eius et iure tempore minus fugiat mollitia qui. Aut deleniti ex est. Ex earum temporibus incidunt corporis saepe dolore. Voluptas aut ut repellat odit qui et dolorem voluptatibus.",
  "subject": "ut tempore nesciunt",
  "date": "2016-07-01T16:01:36.016Z",
  "bucket": "Trash",
  "read": true
}, {
  "id": 9,
  "key": 9,
  "name": "Shanelle Buckridge",
  "cc": "Earline_Bergstrom@gmail.com",
  "email": "Aaliyah.Schumm50@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/simobenso/128.jpg",
  "tags": "Teachers",
  "body": "At eveniet cupiditate qui dicta modi et neque sequi. Et magni nesciunt animi. Consequatur assumenda dolores fugiat omnis beatae ex ea quas. Tempore placeat cum dolor. Doloremque mollitia et autem repellat iusto eum suscipit consectetur officiis. Non ipsa ut odio sed reiciendis iure. Ipsum ducimus distinctio. Sit omnis sint ab fuga dignissimos inventore voluptatem. Et nisi et odit sint sunt ut qui est voluptas. Neque quas soluta sunt et distinctio aliquid omnis illo enim.",
  "subject": "quia fugiat placeat",
  "date": "2016-06-23T08:55:46.700Z",
  "bucket": "Important",
  "read": true
}, {
  "id": 65,
  "key": 65,
  "name": "Forest Walsh",
  "cc": "Cecil_Cummerata@yahoo.com",
  "email": "Joey_Monahan95@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",
  "tags": "Colleague",
  "body": "Incidunt dolor et unde. Quo et sequi sunt architecto necessitatibus quia aliquam. Sunt voluptatem quaerat doloremque. Exercitationem non quod nam et deserunt. Officiis vero ut aut enim libero consectetur nihil. Quia doloremque praesentium iste itaque qui repudiandae culpa qui omnis. Laboriosam dolores eveniet quas perferendis corrupti nulla consequatur illo. Nisi modi rem consequatur vel reiciendis. Consequuntur amet alias autem quia. Quo quaerat nihil mollitia architecto est nulla.",
  "subject": "ut sapiente nobis",
  "date": "2016-06-21T07:45:29.033Z",
  "bucket": "Sent",
  "read": true
}, {
  "id": 38,
  "key": 38,
  "name": "Alison Swift",
  "cc": "Willie.DAmore@hotmail.com",
  "email": "Hadley_Abshire42@gmail.com",
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/donjain/128.jpg",
  "body": "Rem quae ut placeat adipisci ut quia veritatis culpa. Eos enim ut iure aliquam. Consequuntur voluptatem inventore doloribus et dicta quam consequatur. Porro nihil soluta. Rerum pariatur non quia. Et quas debitis et et labore velit repudiandae debitis. Id omnis et libero architecto eaque repellat. Veritatis enim quis ut nisi praesentium. Aperiam laudantium consectetur qui et harum cupiditate placeat dolorem labore. Magni commodi explicabo quia.",
  "subject": "adipisci officiis nemo",
  "date": "2016-06-20T15:48:23.880Z",
  "bucket": "Inbox",
  "read": true
}, {
  "id": 3,
  "key": 3,
  "name": "Tanya Wuckert",
  "cc": "Adeline.Hermiston5@hotmail.com",
  "email": "Ubaldo83@yahoo.com",
  "tags": "Students",
  "body": "Odit sed totam praesentium nihil optio omnis sunt quia dolorem. In esse consequuntur hic hic pariatur. Voluptas omnis est cumque et consequuntur illum id. Omnis esse odit cupiditate est aut ad consequatur. Soluta et aliquam repudiandae molestiae voluptatem. Nobis perspiciatis dolorum ullam ipsam quia sint dolorem. Accusantium eum fugit praesentium et similique. Necessitatibus veniam sed sit aliquam laudantium. Sed assumenda est dignissimos at sapiente qui vero. Optio dolorem nam soluta autem atque ad quas in.",
  "subject": "placeat fugiat cum",
  "date": "2016-06-20T07:24:03.907Z",
  "bucket": "Sent",
  "read": true
}]`));

/***/ }),

/***/ "../../node_modules/@iso/redux/mail/reducer.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/mail/reducer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mailReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "../../node_modules/@iso/redux/mail/data.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/mail/actions.js");



const initState = {
  allMails: _data__WEBPACK_IMPORTED_MODULE_1__["default"],
  tag: undefined,
  selectedMail: -1,
  filterAttr: {
    bucket: 'Inbox'
  },
  composeMail: false,
  replyMail: false,
  searchString: ''
};
function mailReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].FILTER_ATTRIBUTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        composeMail: false,
        replyMail: false,
        selectedMail: -1,
        filterAttr: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.filterAttr)
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SELECTED_MAIL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        replyMail: false,
        selectedMail: action.selectedMail,
        allMails: action.allMails
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].COMPOSE_MAIL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        replyMail: false,
        composeMail: action.composeMail
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].REPLY_MAIL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        replyMail: action.replyMail
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SEARCH_STRING:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        searchString: action.searchString
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/mail/saga.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/mail/saga.js ***!
  \**************************************************************************************/
/*! exports provided: filterAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterAction", function() { return filterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/mail/actions.js");


function* filterAction() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].FILTER_ATTRIBUTE, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(filterAction)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/modal/actions.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/modal/actions.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  openModal: payload => ({
    type: modalActions.SHOW_MODAL,
    payload
  }),
  closeModal: () => ({
    type: modalActions.HIDE_MODAL
  })
};
/* harmony default export */ __webpack_exports__["default"] = (modalActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/modal/reducer.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/modal/reducer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/modal/actions.js");

const initialState = {
  modalVisibility: false,
  modalType: '',
  modalProps: {}
};
function modalReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_MODAL:
      return {
        modalVisibility: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/notes/actions.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/notes/actions.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const notesAction = {
  CHANGE_NOTE: 'CHANGE_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  CHANGE_COLOR: 'CHANGE_COLOR',
  changeNote: id => {
    return (dispatch, getState) => {
      const notes = getState().Notes.notes;
      const seectedColor = notes[notes.findIndex(note => note.id === id)].color;
      dispatch({
        type: notesAction.CHANGE_NOTE,
        selectedId: id,
        seectedColor
      });
    };
  },
  addNote: () => {
    return (dispatch, getState) => {
      const newNote = {
        id: new Date(),
        note: 'New Note',
        createTime: new Date(),
        color: getState().Notes.seectedColor
      };
      const notes = [newNote, ...getState().Notes.notes];
      dispatch({
        type: notesAction.ADD_NOTE,
        selectedId: newNote.id,
        notes
      });
    };
  },
  editNote: (id, newNote) => {
    return (dispatch, getState) => {
      const oldNotes = getState().Notes.notes;
      const notes = [];
      oldNotes.forEach(note => {
        if (note.id !== id) {
          notes.push(note);
        } else {
          note.note = newNote;
          notes.push(note);
        }
      });
      dispatch({
        type: notesAction.EDIT_NOTE,
        notes
      });
    };
  },
  deleteNote: id => {
    return (dispatch, getState) => {
      const oldNotes = getState().Notes.notes;
      const notes = [];
      oldNotes.forEach(note => {
        if (note.id !== id) {
          notes.push(note);
        }
      });
      let selectedId = getState().Notes.selectedId;

      if (selectedId === id) {
        if (notes.length === 0) {
          selectedId = undefined;
        } else {
          selectedId = notes[0].id;
        }
      }

      dispatch({
        type: notesAction.DELETE_NOTE,
        notes,
        selectedId
      });
    };
  },
  changeColor: seectedColor => {
    return (dispatch, getState) => {
      const oldNotes = getState().Notes.notes;
      const selectedId = getState().Notes.selectedId;
      const notes = [];
      oldNotes.forEach(note => {
        if (note.id !== selectedId) {
          notes.push(note);
        } else {
          note.color = seectedColor;
          notes.push(note);
        }
      });
      dispatch({
        type: notesAction.CHANGE_COLOR,
        notes,
        seectedColor
      });
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (notesAction);

/***/ }),

/***/ "../../node_modules/@iso/redux/notes/data.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/notes/data.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (JSON.parse(`[{
  "id": 94926,
  "note": "Et quia eum nobis ut hic autem enim. Qui ea a qui accusantium ducimus ut placeat modi. Esse quibusdam earum cupiditate optio et nulla voluptatem. Qui est deserunt doloremque qui eaque in. Rerum voluptatum dolor corrupti. Voluptatem occaecati laudantium ea enim similique.",
  "createTime": "2017-02-10T07:42:44.828Z",
  "color": 0
}, {
  "id": 51842,
  "note": "Possimus exercitationem qui ea quo repudiandae. Corporis magnam non soluta doloremque et sunt dolores sunt. Corrupti reiciendis sunt optio dolorem. Dignissimos quo adipisci veritatis et repellat. Omnis omnis dignissimos ipsum non iusto voluptates.",
  "createTime": "2017-04-08T03:17:31.999Z",
  "color": 0
}, {
  "id": 28180,
  "note": "Tempore est velit non eaque. Exercitationem fugiat rerum magni. Delectus reprehenderit est neque autem amet. Qui consequatur velit et reprehenderit soluta voluptates. Id reprehenderit dolorum omnis ipsa quae dolores.",
  "createTime": "2017-01-21T05:43:16.889Z",
  "color": 3
}, {
  "id": 29619,
  "note": "Officiis suscipit perferendis blanditiis aut aliquid quod et. Eius repellendus natus dicta saepe. In adipisci alias facilis nihil eligendi consequatur odit sequi. Quae quibusdam eos ut qui aut nisi beatae quaerat qui.",
  "createTime": "2017-01-08T23:36:05.692Z",
  "color": 4
}, {
  "id": 19600,
  "note": "Dolor quas est quae. Id temporibus sed. Illum quo amet est fuga laborum facilis. Aut nisi consequatur voluptatum et. Eum et necessitatibus quam corporis expedita quasi reiciendis quia vitae. Earum harum deserunt minus modi consequuntur perspiciatis labore officia quo.",
  "createTime": "2017-05-11T22:30:14.915Z",
  "color": 4
}]`));

/***/ }),

/***/ "../../node_modules/@iso/redux/notes/reducer.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/notes/reducer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noteReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "../../node_modules/@iso/redux/notes/data.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/notes/actions.js");



const colors = ['#7ED321', '#de1b1b', '#511E78', '#ff9009', '#42a5f5'];
const initState = {
  notes: _data__WEBPACK_IMPORTED_MODULE_1__["default"],
  colors,
  selectedId: _data__WEBPACK_IMPORTED_MODULE_1__["default"][0].id,
  seectedColor: _data__WEBPACK_IMPORTED_MODULE_1__["default"][0].color
};
function noteReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_NOTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        selectedId: action.selectedId,
        seectedColor: action.seectedColor
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_NOTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notes: action.notes,
        selectedId: action.selectedId
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].EDIT_NOTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notes: action.notes
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE_NOTE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notes: action.notes,
        selectedId: action.selectedId
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_COLOR:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notes: action.notes,
        seectedColor: action.seectedColor
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/notes/saga.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/notes/saga.js ***!
  \***************************************************************************************/
/*! exports provided: changeColor, addNote, editNote, deleteNote, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColor", function() { return changeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNote", function() { return addNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNote", function() { return editNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNote", function() { return deleteNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/notes/actions.js");


function* changeColor() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_COLOR, function* () {});
}
function* addNote() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_NOTE, function* () {});
}
function* editNote() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_NOTE, function* () {});
}
function* deleteNote() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_NOTE, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(changeColor), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addNote), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(editNote), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteNote)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/profile/actions.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/profile/actions.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const profileActions = {
  FETCH_PROFILE_DATA_START: 'FETCH_PROFILE_DATA_START',
  FETCH_PROFILE_DATA_SUCCESS: 'FETCH_PROFILE_DATA_SUCCESS',
  FETCH_PROFILE_DATA_FAILURE: 'FETCH_PROFILE_DATA_FAILURE',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START
  }),
  fetchProfileDataSuccess: profile => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile
  }),
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (profileActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/profile/profile.data.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/profile/profile.data.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/assets/images/user1.png */ "../../node_modules/@iso/assets/images/user1.png");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/assets/images/profile-bg.jpg */ "../../node_modules/@iso/assets/images/profile-bg.jpg");
/* harmony import */ var _iso_assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_assets_images_posts_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/assets/images/posts/1.png */ "../../node_modules/@iso/assets/images/posts/1.png");
/* harmony import */ var _iso_assets_images_posts_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_assets_images_posts_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/posts/2.png */ "../../node_modules/@iso/assets/images/posts/2.png");
/* harmony import */ var _iso_assets_images_posts_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_assets_images_posts_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/assets/images/posts/3.png */ "../../node_modules/@iso/assets/images/posts/3.png");
/* harmony import */ var _iso_assets_images_posts_3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_assets_images_posts_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/posts/4.png */ "../../node_modules/@iso/assets/images/posts/4.png");
/* harmony import */ var _iso_assets_images_posts_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iso_assets_images_posts_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/assets/images/posts/5.png */ "../../node_modules/@iso/assets/images/posts/5.png");
/* harmony import */ var _iso_assets_images_posts_5_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_5_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iso_assets_images_posts_6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/assets/images/posts/6.png */ "../../node_modules/@iso/assets/images/posts/6.png");
/* harmony import */ var _iso_assets_images_posts_6_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_6_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iso_assets_images_posts_7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/assets/images/posts/7.png */ "../../node_modules/@iso/assets/images/posts/7.png");
/* harmony import */ var _iso_assets_images_posts_7_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_7_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iso_assets_images_posts_8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/assets/images/posts/8.png */ "../../node_modules/@iso/assets/images/posts/8.png");
/* harmony import */ var _iso_assets_images_posts_8_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_8_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iso_assets_images_posts_9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iso/assets/images/posts/9.png */ "../../node_modules/@iso/assets/images/posts/9.png");
/* harmony import */ var _iso_assets_images_posts_9_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_9_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iso_assets_images_posts_10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/assets/images/posts/10.png */ "../../node_modules/@iso/assets/images/posts/10.png");
/* harmony import */ var _iso_assets_images_posts_10_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_10_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iso_assets_images_posts_11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iso/assets/images/posts/11.png */ "../../node_modules/@iso/assets/images/posts/11.png");
/* harmony import */ var _iso_assets_images_posts_11_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_posts_11_png__WEBPACK_IMPORTED_MODULE_12__);

 // posts












const profileData = {
  id: 1,
  name: 'Samwell Martina',
  username: '@samwell_martina',
  avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  profile_bg: _iso_assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  post: [{
    id: 1,
    type: 'image',
    thumb_url: _iso_assets_images_posts_1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    numberOflike: '21',
    numberOfcomment: '8',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'Hey. This is so dope',
      time: '133w'
    }]
  }, {
    id: 2,
    type: 'gallery',
    thumb_url: _iso_assets_images_posts_2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    gallery: [_iso_assets_images_posts_2_png__WEBPACK_IMPORTED_MODULE_3___default.a, _iso_assets_images_posts_11_png__WEBPACK_IMPORTED_MODULE_12___default.a, _iso_assets_images_posts_6_png__WEBPACK_IMPORTED_MODULE_7___default.a],
    numberOflike: '34',
    numberOfcomment: '2',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: '💪 😊 👍 🏆',
      time: '133w'
    }, {
      id: 3,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      username: '@jenny_doe',
      comment: 'wow!! 👌👌😍😍',
      time: '133w'
    }]
  }, {
    id: 3,
    type: 'video',
    thumb_url: _iso_assets_images_posts_9_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    video: `<iframe src="https://player.vimeo.com/video/359281775?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    numberOfView: '134',
    numberOflike: '47',
    numberOfcomment: '48',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
      time: '133w'
    }]
  }, {
    id: 4,
    type: 'image',
    thumb_url: _iso_assets_images_posts_3_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    numberOflike: '21',
    numberOfcomment: '8',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'Hey. This is so dope',
      time: '133w'
    }]
  }, {
    id: 5,
    type: 'image',
    thumb_url: _iso_assets_images_posts_4_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    numberOflike: '34',
    numberOfcomment: '2',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: '💪 😊 👍 🏆',
      time: '133w'
    }, {
      id: 3,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      username: '@jenny_doe',
      comment: 'wow!! 👌👌😍😍',
      time: '133w'
    }]
  }, {
    id: 6,
    type: 'image',
    thumb_url: _iso_assets_images_posts_5_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    numberOflike: '47',
    numberOfcomment: '48',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
      time: '133w'
    }]
  }, {
    id: 7,
    type: 'gallery',
    thumb_url: _iso_assets_images_posts_7_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    gallery: [_iso_assets_images_posts_7_png__WEBPACK_IMPORTED_MODULE_8___default.a, _iso_assets_images_posts_5_png__WEBPACK_IMPORTED_MODULE_6___default.a, _iso_assets_images_posts_9_png__WEBPACK_IMPORTED_MODULE_10___default.a],
    numberOflike: '34',
    numberOfcomment: '2',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: '💪 😊 👍 🏆',
      time: '133w'
    }, {
      id: 3,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      username: '@jenny_doe',
      comment: 'wow!! 👌👌😍😍',
      time: '133w'
    }]
  }, {
    id: 8,
    type: 'video',
    thumb_url: _iso_assets_images_posts_8_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    video: `<iframe src="https://player.vimeo.com/video/35396305?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
    numberOfView: '134',
    numberOflike: '47',
    numberOfcomment: '48',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
      time: '133w'
    }]
  }, {
    id: 9,
    type: 'image',
    thumb_url: _iso_assets_images_posts_10_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    numberOflike: '21',
    numberOfcomment: '8',
    comments: [{
      id: 1,
      role: 'author',
      avatar: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      username: '@samwell_martina',
      comment: 'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
      time: '133w'
    }, {
      id: 2,
      role: 'user',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
      username: '@jon_doe',
      comment: 'Hey. This is so dope',
      time: '133w'
    }]
  }],
  followers: [{
    id: 1,
    avatar: 'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
    name: 'Nykyta Korotkevych'
  }, {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Christine Maldonado'
  }, {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'Konsta Peura'
  }, {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    name: 'Britney Cooper'
  }, {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    name: 'Eduardo Hernandez'
  }, {
    id: 6,
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
    name: ' Elizabeth Olsen'
  }, {
    id: 7,
    avatar: 'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
    name: 'Hrvoje Šimić'
  }, {
    id: 8,
    avatar: 'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
    name: 'Monroe Bond'
  }],
  following: [{
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    name: 'Eduardo Hernandez'
  }, {
    id: 2,
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
    name: ' Elizabeth Olsen'
  }, {
    id: 3,
    avatar: 'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
    name: 'Hrvoje Šimić'
  }, {
    id: 4,
    avatar: 'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
    name: 'Monroe Bond'
  }, {
    id: 5,
    avatar: 'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
    name: 'Nykyta Korotkevych'
  }, {
    id: 6,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Christine Maldonado'
  }, {
    id: 7,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'Konsta Peura'
  }, {
    id: 8,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    name: 'Britney Cooper'
  }, {
    id: 9,
    avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
    name: ' Elizabeth Olsen'
  }, {
    id: 10,
    avatar: 'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
    name: 'Hrvoje Šimić'
  }, {
    id: 11,
    avatar: 'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
    name: 'Monroe Bond'
  }, {
    id: 12,
    avatar: 'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
    name: 'Nykyta Korotkevych'
  }, {
    id: 13,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Christine Maldonado'
  }, {
    id: 14,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'Konsta Peura'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (profileData);

/***/ }),

/***/ "../../node_modules/@iso/redux/profile/reducer.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/profile/reducer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profileReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/profile/actions.js");


const INITIAL_DATA = {
  data: null,
  loading: true,
  error: null
};
function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].FETCH_PROFILE_DATA_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data: action.payload,
        loading: false,
        error: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].FETCH_PROFILE_DATA_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/profile/saga.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/profile/saga.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profileSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/profile/actions.js");
/* harmony import */ var _profile_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.data */ "../../node_modules/@iso/redux/profile/profile.data.js");
// saga.js




function* fetchProfileDataEffect() {
  try {
    let profile = _profile_data__WEBPACK_IMPORTED_MODULE_2__["default"];
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].fetchProfileDataSuccess(profile));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].fetchProfileDataFailure(error));
  }
}

function* profileSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].FETCH_PROFILE_DATA_START, fetchProfileDataEffect)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/quiz/actions.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/quiz/actions.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const quizActions = {
  START_QUIZ: 'START_QUIZ',
  GET_QUIZ_DATA: 'GET_QUIZ_DATA',
  GET_QUESTION_DATA: 'GET_QUESTION_DATA',
  SET_QUESTION_DATA: 'SET_QUESTION_DATA',
  SET_QUIZ_DATA: 'SET_QUIZ_DATA',
  SET_QUESTION_ANSWER: 'SET_QUESTION_ANSWER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  // Load Data Actions
  startQuiz: () => ({
    type: quizActions.START_QUIZ
  }),
  getQuestionData: () => ({
    type: quizActions.GET_QUESTION_DATA
  }),
  getQuizData: () => ({
    type: quizActions.GET_QUIZ_DATA
  }),
  setQuizData: payload => ({
    type: quizActions.SET_QUIZ_DATA,
    payload
  }),
  setQuestionData: payload => ({
    type: quizActions.SET_QUESTION_DATA,
    payload
  }),
  setQuestionAnswer: payload => ({
    type: quizActions.SET_QUESTION_ANSWER,
    payload
  }),
  nextQuestion: payload => ({
    type: quizActions.NEXT_QUESTION,
    payload
  })
};
/* harmony default export */ __webpack_exports__["default"] = (quizActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/quiz/fakeQuestion.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/quiz/fakeQuestion.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Which is not in the following?',
  total: 5,
  time: '30 Minutes',
  data: [{
    id: 1,
    question: 'Which one is not a sports?',
    type: 'single',
    showAnswer: false,
    options: [{
      value: 'football',
      label: 'Football'
    }, {
      value: 'volleyball',
      label: 'Volleyball'
    }, {
      value: 'baseball',
      label: 'Baseball'
    }, {
      value: 'lutuputu',
      label: 'Lutuputu'
    }],
    answers: 'lutuputu'
  }, {
    id: 2,
    type: 'single',
    question: 'Which one is not a programming language?',
    options: [{
      value: 'c#',
      label: 'C#'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'php',
      label: 'PHP'
    }, {
      value: 'reactjs',
      label: 'React.JS'
    }],
    answers: 'reactjs'
  }, {
    id: 3,
    type: 'single',
    question: 'Which is not a HTML attributes?',
    options: [{
      value: 'title',
      label: 'title'
    }, {
      value: 'style',
      label: 'style'
    }, {
      value: 'onclick',
      label: 'onclick'
    }, {
      value: 'meta',
      label: 'meta'
    }],
    answers: 'meta'
  }, {
    id: 4,
    type: 'multiple',
    question: 'Powerful Javascript framework is?',
    options: [{
      value: 'laravel',
      label: 'Laravel'
    }, {
      value: 'angular',
      label: 'Angular'
    }, {
      value: 'symphony',
      label: 'Symphony'
    }, {
      value: 'react',
      label: 'React'
    }],
    answers: ['angular', 'react']
  }, {
    id: 5,
    type: 'single',
    question: 'Which is not a PHP framework?',
    options: [{
      value: 'symphony',
      label: 'Symphony'
    }, {
      value: 'laravel',
      label: 'Laravel'
    }, {
      value: 'codeigniter',
      label: 'Codeigniter'
    }, {
      value: 'django',
      label: 'django'
    }],
    answers: 'django'
  }]
});

/***/ }),

/***/ "../../node_modules/@iso/redux/quiz/fakeQuizes.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/quiz/fakeQuizes.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  page: 1,
  data: [{
    title: 'Which is not in the following?',
    slug: 'which-is-not-in-the-following',
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    thumbnail: 'https://via.placeholder.com/150'
  }, {
    title: 'Basic HTML test',
    slug: 'basic-html-test',
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    thumbnail: 'https://via.placeholder.com/150'
  }, {
    title: 'Advanced PHP test',
    slug: 'advanced-php-test',
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    thumbnail: 'https://via.placeholder.com/150'
  }]
});

/***/ }),

/***/ "../../node_modules/@iso/redux/quiz/reducer.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/quiz/reducer.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questionReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/quiz/actions.js");
/* harmony import */ var _iso_lib_helpers_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/utility */ "../../node_modules/@iso/lib/helpers/utility.js");




const initialState = {
  quizes: {},
  questions: {},
  gettingStarted: false,
  activeQuestion: 0,
  total: 0,
  correct: 0,
  wrong: 0,
  submitted: false,
  answers: false
};
function questionReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].START_QUIZ:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        gettingStarted: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_QUIZ_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        quizes: action.payload,
        gettingStarted: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_QUESTION_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        questions: action.payload,
        total: action.payload.total
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SET_QUESTION_ANSWER:
      const {
        questions,
        activeQuestion,
        correct,
        wrong
      } = state;
      const currentQuizz = questions.data[activeQuestion];
      let rightAnswer = false;

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(action.payload)) {
        rightAnswer = Object(_iso_lib_helpers_utility__WEBPACK_IMPORTED_MODULE_3__["arrayEqual"])(action.payload, currentQuizz['answers']);
      } else {
        rightAnswer = currentQuizz['answers'] === action.payload ? true : false;
      }

      let correctAnswer = rightAnswer ? correct + 1 : correct;
      let wrongAnswer = !rightAnswer ? wrong + 1 : wrong;
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        correct: correctAnswer,
        wrong: wrongAnswer,
        submitted: true,
        answers: rightAnswer,
        questions: {
          data: [...questions.data.slice(0, activeQuestion), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, questions.data[activeQuestion], {
            showAnswer: true
          }), ...questions.data.slice(activeQuestion + 1)]
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].NEXT_QUESTION:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        activeQuestion: state.activeQuestion + 1,
        submitted: false,
        answers: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/quiz/saga.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/quiz/saga.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questionSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/quiz/actions.js");
/* harmony import */ var _fakeQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fakeQuestion */ "../../node_modules/@iso/redux/quiz/fakeQuestion.js");
/* harmony import */ var _fakeQuizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fakeQuizes */ "../../node_modules/@iso/redux/quiz/fakeQuizes.js");
// saga.js





const getQuizes = state => state.quiz;

function* questionRenderEffectSaga() {
  let questons;
  questons = _fakeQuestion__WEBPACK_IMPORTED_MODULE_2__["default"];
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].setQuestionData(questons));
}

function* quizRenderEffectSaga() {
  let quizes;
  quizes = _fakeQuizes__WEBPACK_IMPORTED_MODULE_3__["default"];
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].setQuizData(quizes));
}

function* questionSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_QUESTION_DATA, questionRenderEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_QUIZ_DATA, quizRenderEffectSaga)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/scrumBoard/actions.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/scrumBoard/actions.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrumBoardActions = {
  //BOARD
  CREATE_OR_UPDATE_BOARD_WATCHER: 'CREATE_OR_UPDATE_BOARD_WATCHER',
  CREATE_OR_UPDATE_BOARD: 'CREATE_OR_UPDATE_BOARD',
  EDIT_BOARD: 'EDIT_BOARD',
  DELETE_BOARD_WATCHER: 'DELETE_BOARD_WATCHER',
  DELETE_BOARD: 'DELETE_BOARD',
  SELECT_BOARD: 'SELECT_BOARD',
  //COLUMN
  CREATE_OR_UPDATE_COLUMN_WATCHER: 'CREATE_OR_UPDATE_COLUMN_WATCHER',
  CREATE_OR_UPDATE_COLUMN: 'CREATE_OR_UPDATE_COLUMN',
  EDIT_COLUMN: 'EDIT_COLUMN',
  CANCEL_EDIT_COLUMN: 'CANCEL_EDIT_COLUMN',
  DELETE_COLUMN_WATCHER: 'DELETE_COLUMN_WATCHER',
  DELETE_COLUMN: 'DELETE_COLUMN',
  RESET_COLUMN: 'RESET_COLUMN',
  MOVE_COLUMN_WATCHER: 'MOVE_COLUMN_WATCHER',
  SET_MOVED_COLUMN: 'SET_MOVED_COLUMN',
  DUBLICATE_COLUMN: 'DUBLICATE_COLUMN',
  //TASK
  CREATE_OR_UPDATE_TASK_WATCHER: 'CREATE_OR_UPDATE_TASK_WATCHER',
  CREATE_OR_UPDATE_TASK: 'CREATE_OR_UPDATE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  CANCEL_EDIT_TASK: 'CANCEL_EDIT_TASK',
  DELETE_TASK_WATCHER: 'DELETE_TASK_WATCHER',
  DELETE_TASK: 'DELETE_TASK',
  RESET_TASK: 'RESET_TASK',
  MOVE_TASK_WATCHER: 'MOVE_TASK_WATCHER',
  SET_MOVED_TASK: 'SET_MOVED_TASK',
  DUBLICATE_TASK: 'DUBLICATE_TASK',
  // SEARCH
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  // LOAD DATA
  LOAD_BOARDS_DATA_SAGA: 'LOAD_BOARDS_DATA_SAGA',
  LOAD_CURRENT_BOARD_DATA_SAGA: 'LOAD_CURRENT_BOARD_DATA_SAGA',
  SET_BOARDS_DATA: 'SET_BOARDS_DATA',
  SET_CURRENT_BOARD_DATA: 'SET_CURRENT_BOARD_DATA',
  // LABELS
  CREATE_OR_UPDATE_LABEL: 'CREATE_OR_UPDATE_LABEL',
  EDIT_LABEL: 'EDIT_LABEL',
  DELETE_LABEL: 'DELETE_LABEL',
  // Load Data Actions
  boardsRenderWatcher: () => ({
    type: scrumBoardActions.LOAD_BOARDS_DATA_SAGA
  }),
  setBoardsData: boards => ({
    type: scrumBoardActions.SET_BOARDS_DATA,
    payload: boards
  }),
  boardRenderWatcher: boardId => ({
    type: scrumBoardActions.LOAD_CURRENT_BOARD_DATA_SAGA,
    payload: boardId
  }),
  setBoardData: boardData => ({
    type: scrumBoardActions.SET_CURRENT_BOARD_DATA,
    payload: boardData
  }),
  // Task Actions
  createOrUpdateTaskWatcher: payload => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_TASK_WATCHER,
      payload
    };
  },
  createOrUpdateTask: payload => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_TASK,
      payload
    };
  },
  editTask: payload => {
    return {
      type: scrumBoardActions.EDIT_TASK,
      payload
    };
  },
  cancelEditTask: payload => {
    return {
      type: scrumBoardActions.CANCEL_EDIT_TASK,
      payload
    };
  },
  deleteTaskWatcher: payload => {
    return {
      type: scrumBoardActions.DELETE_TASK_WATCHER,
      payload
    };
  },
  deleteTask: payload => {
    return {
      type: scrumBoardActions.DELETE_TASK,
      payload
    };
  },
  resetTask: payload => {
    return {
      type: scrumBoardActions.RESET_TASK,
      payload
    };
  },
  setSearchText: payload => {
    return {
      type: scrumBoardActions.SET_SEARCH_TEXT,
      payload
    };
  },
  moveTaskWatcher: payload => {
    return {
      type: scrumBoardActions.MOVE_TASK_WATCHER,
      payload
    };
  },
  setMovedTask: payload => {
    return {
      type: scrumBoardActions.SET_MOVED_TASK,
      payload
    };
  },
  // Column Actions
  createOrUpdateColumnWatcher: payload => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_COLUMN_WATCHER,
      payload
    };
  },
  createOrUpdateColumn: payload => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_COLUMN,
      payload
    };
  },
  editColumn: payload => {
    return {
      type: scrumBoardActions.EDIT_COLUMN,
      payload
    };
  },
  cancelEditColumn: payload => {
    return {
      type: scrumBoardActions.CANCEL_EDIT_COLUMN,
      payload
    };
  },
  deleteColumnWatcher: payload => {
    return {
      type: scrumBoardActions.DELETE_COLUMN_WATCHER,
      payload
    };
  },
  deleteColumn: payload => {
    return {
      type: scrumBoardActions.DELETE_COLUMN,
      payload
    };
  },
  resetColumn: payload => {
    return {
      type: scrumBoardActions.RESET_COLUMN,
      payload
    };
  },
  moveColumnWatcher: payload => {
    return {
      type: scrumBoardActions.MOVE_COLUMN_WATCHER,
      payload
    };
  },
  setMovedColumn: payload => {
    return {
      type: scrumBoardActions.SET_MOVED_COLUMN,
      payload
    };
  },
  // Board Actions
  createOrUpdateBoardWatcher: board => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_BOARD_WATCHER,
      payload: board
    };
  },
  createOrUpdateBoard: board => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_BOARD,
      payload: board
    };
  },
  editBoard: board => {
    return {
      type: scrumBoardActions.EDIT_BOARD,
      payload: board
    };
  },
  deleteBoardWatcher: boardID => {
    return {
      type: scrumBoardActions.DELETE_BOARD_WATCHER,
      payload: boardID
    };
  },
  deleteBoard: boardID => {
    return {
      type: scrumBoardActions.DELETE_BOARD,
      payload: boardID
    };
  },
  // Label Actions
  createOrUpdateLabel: label => {
    return {
      type: scrumBoardActions.CREATE_OR_UPDATE_LABEL,
      payload: label
    };
  },
  editLabel: label => {
    return {
      type: scrumBoardActions.EDIT_LABEL,
      payload: label
    };
  },
  deleteLabel: labelID => {
    return {
      type: scrumBoardActions.DELETE_LABEL,
      payload: labelID
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (scrumBoardActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/scrumBoard/data.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/scrumBoard/data.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      column_id: 'column-1',
      title: 'Hello There',
      description: 'Take Out the garbage 1',
      labels: ['default', 'processing', 'warning', 'success'],
      due_date: '01-12-2019',
      assignees: ['mark'],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: '01-09-2019',
      updated_at: ''
    },
    'task-2': {
      id: 'task-2',
      column_id: 'column-1',
      title: 'Hello World',
      description: 'Let Fix The Task manager using Redux 2',
      labels: ['warning', 'error'],
      due_date: '01-09-2019',
      assignees: [],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: '01-09-2019',
      updated_at: ''
    },
    'task-3': {
      id: 'task-3',
      column_id: 'column-1',
      title: 'There',
      description: 'Need Some Study Time To Solve The Problem 3',
      labels: ['processing', 'warning', 'success'],
      due_date: '01-09-2019',
      assignees: ['neamat', 'mim'],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: '01-09-2019',
      updated_at: ''
    },
    'task-4': {
      id: 'task-4',
      column_id: 'column-1',
      title: 'Nothing to do',
      description: 'Let Learn Formik 4',
      labels: ['warning', 'success'],
      due_date: '01-09-2019',
      assignees: [],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: '01-09-2019',
      updated_at: ''
    },
    'task-5': {
      id: 'task-5',
      column_id: 'column-3',
      title: 'Lets Fixed',
      description: 'Come on ... 5',
      labels: ['success', 'warning'],
      due_date: '01-10-2019',
      assignees: ['bob'],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: '01-09-2019',
      updated_at: ''
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      board_id: 'board-1',
      task_orders: ['task-1', 'task-2', 'task-3', 'task-4'],
      title: 'To Do',
      editing: false
    },
    'column-2': {
      id: 'column-2',
      board_id: 'board-2',
      task_orders: [],
      title: 'In Progress',
      editing: false
    },
    'column-3': {
      id: 'column-3',
      board_id: 'board-1',
      task_orders: ['task-5'],
      title: 'Done',
      editing: false
    }
  },
  boards: {
    'board-1': {
      id: 'board-1',
      column_orders: ['column-1', 'column-3'],
      title: 'Isomorphic',
      category: 'Software',
      progress: 50,
      thumb: '',
      open_to_members: false,
      open_to_company: false,
      estimated_time: '',
      editing: false,
      created_at: '01-10-2019',
      updated_at: ''
    },
    'board-2': {
      id: 'board-2',
      column_orders: ['column-2'],
      title: 'Headless',
      category: 'OPs',
      progress: 70,
      thumb: '',
      open_to_members: true,
      open_to_company: true,
      estimated_time: '',
      editing: false,
      created_at: '02-01-2019',
      updated_at: ''
    },
    'board-3': {
      id: 'board-3',
      column_orders: [],
      title: 'React Next Landing',
      category: 'Service Desk',
      progress: 30,
      thumb: '',
      open_to_members: false,
      open_to_company: true,
      estimated_time: '',
      editing: false,
      created_at: '02-03-2019',
      updated_at: ''
    }
  },
  labels: {
    'label-1': {
      id: 'label-1',
      title: 'default',
      color: 'red',
      created_at: '',
      updated_at: '',
      editing: false
    },
    'label-2': {
      id: 'label-2',
      title: 'processing',
      color: 'red',
      created_at: '',
      updated_at: '',
      editing: false
    },
    'label-3': {
      id: 'label-3',
      title: 'warning',
      color: 'red',
      created_at: '',
      updated_at: '',
      editing: false
    },
    'label-4': {
      id: 'label-4',
      title: 'success',
      color: 'red',
      created_at: '',
      updated_at: '',
      editing: false
    },
    'label-5': {
      id: 'label-5',
      title: 'error',
      color: 'red',
      created_at: '',
      updated_at: '',
      editing: false
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (initialData);

/***/ }),

/***/ "../../node_modules/@iso/redux/scrumBoard/reducer.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/scrumBoard/reducer.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrumBoardReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/scrumBoard/actions.js");


const initialState = {
  boards: {},
  columns: {},
  tasks: {},
  searchText: '',
  labels: {}
};
function scrumBoardReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SET_BOARDS_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SET_CURRENT_BOARD_DATA:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_OR_UPDATE_TASK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        tasks: action.payload.tasks,
        columns: action.payload.columns
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_TASK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        tasks: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.tasks, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: true
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CANCEL_EDIT_TASK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        tasks: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.tasks, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: false
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_TASK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        tasks: action.payload.tasks,
        columns: action.payload.columns
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SET_SEARCH_TEXT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        searchText: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SET_MOVED_TASK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        columns: action.payload.columns,
        tasks: action.payload.tasks
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].RESET_TASK:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          task: initialState.task
        });
      }
    /// COLUMNS

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_OR_UPDATE_COLUMN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        columns: action.payload.columns,
        boards: action.payload.boards
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_COLUMN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        columns: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.columns, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: true
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CANCEL_EDIT_COLUMN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        columns: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.columns, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: false
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_COLUMN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        columns: action.payload.columns,
        boards: action.payload.boards
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SET_MOVED_COLUMN:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        boards: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_OR_UPDATE_BOARD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        boards: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_BOARD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        boards: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.boards, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: true
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_BOARD:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        boards: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_OR_UPDATE_LABEL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        labels: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.labels, {
          [action.payload.id]: action.payload
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_LABEL:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        labels: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.labels, {
          [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload, {
            editing: true
          })
        })
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_LABEL:
      const LABELS = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.labels);

      delete LABELS[action.payload];
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        labels: LABELS
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/scrumBoard/saga.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/scrumBoard/saga.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrumBoardSaga; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/scrumBoard/actions.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "../../node_modules/@iso/redux/scrumBoard/data.js");
/* harmony import */ var _iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/lib/helpers/localStorage */ "../../node_modules/@iso/lib/helpers/localStorage.js");


// saga.js





const getScrumBoards = state => state.scrumBoard;

function* boardsRenderEffectSaga() {
  let boards;
  let columns;
  let tasks;

  if (localStorage.hasOwnProperty('scrum_boards')) {
    const scrum_boards = Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["loadState"])('scrum_boards');
    boards = scrum_boards.boards;
    columns = scrum_boards.columns;
    tasks = scrum_boards.tasks;
  } else {
    boards = _data__WEBPACK_IMPORTED_MODULE_4__["default"].boards;
    columns = _data__WEBPACK_IMPORTED_MODULE_4__["default"].columns;
    tasks = _data__WEBPACK_IMPORTED_MODULE_4__["default"].tasks;
  }

  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', {
    boards,
    columns,
    tasks
  });
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].setBoardsData({
    boards,
    columns,
    tasks
  }));
}

function* boardRenderEffectSaga({
  payload
}) {
  let scrum_boards;
  let boards;
  let columns;
  let tasks;

  if (localStorage.hasOwnProperty('scrum_boards')) {
    scrum_boards = Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["loadState"])('scrum_boards');
    boards = scrum_boards.boards;
    columns = scrum_boards.columns;
    tasks = scrum_boards.tasks;
  } else {
    scrum_boards = _data__WEBPACK_IMPORTED_MODULE_4__["default"];
    boards = _data__WEBPACK_IMPORTED_MODULE_4__["default"].boards;
    columns = _data__WEBPACK_IMPORTED_MODULE_4__["default"].columns;
    tasks = _data__WEBPACK_IMPORTED_MODULE_4__["default"].tasks;
  }

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].setBoardData({
    boards,
    columns,
    tasks
  }));
}

function* createOrUpdateBoardEffectSaga(action) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards, {
    [action.payload.id]: action.payload
  });

  scrum_boards = {
    columns: scrum_boards.columns,
    tasks: scrum_boards.tasks,
    boards: boards
  };
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].createOrUpdateBoard(boards));
}

function* deleteBoardEffectSaga(action) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const BOARDS = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards);

  delete BOARDS[action.payload];
  const boards = BOARDS;
  scrum_boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards, {
    boards
  });
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].deleteBoard(boards));
}

function* createOrUpdateColumnEffectSaga({
  payload: {
    column,
    board_id
  }
}) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);
  console.log(column, board_id);

  const columns = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns, {
    [column.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, column, {
      editing: false
    })
  });

  let boards = scrum_boards.boards;

  if (!column.editing) {
    boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards, {
      [board_id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards[board_id], {
        column_orders: [...scrum_boards.boards[board_id].column_orders, column.id]
      })
    });
  }

  scrum_boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards, {
    columns,
    boards
  });
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].createOrUpdateColumn({
    columns,
    boards
  }));
}

function* deleteColumnEffectSaga({
  payload: {
    column_id,
    board_id
  }
}) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const COLUMNS = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns);

  delete COLUMNS[column_id];
  const columns = COLUMNS;

  const boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards, {
    [board_id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards[board_id], {
      column_orders: scrum_boards.boards[board_id].column_orders.filter(order => order !== column_id)
    })
  });

  scrum_boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards, {
    columns,
    boards
  });
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].deleteColumn({
    columns,
    boards
  }));
}

function* moveColumnEffectSaga({
  payload: {
    board_id,
    column_orders
  }
}) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards, {
    [board_id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.boards[board_id], {
      column_orders: column_orders
    })
  });

  scrum_boards = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards, {
    boards: boards
  });
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].setMovedColumn(boards));
}

function* createOrUpdateTaskEffectSaga(action) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const tasks = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.tasks, {
    [action.payload.id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload, {
      editing: false
    })
  });

  let columns = scrum_boards.columns;

  if (!action.payload.editing) {
    columns = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns, {
      [action.payload.column_id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns[action.payload.column_id], {
        task_orders: [...scrum_boards.columns[action.payload.column_id].task_orders, action.payload.id]
      })
    });
  }

  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards
  };
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].createOrUpdateTask({
    tasks,
    columns
  }));
}

function* deleteTaskEffectSaga({
  payload: {
    task_id,
    column_id
  }
}) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);

  const tasks = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(scrum_boards.tasks).reduce((object, key) => {
    if (key !== task_id) {
      object[key] = scrum_boards.tasks[key];
    }

    return object;
  }, {});

  const columns = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns, {
    [column_id]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, scrum_boards.columns[column_id], {
      task_orders: scrum_boards.columns[column_id].task_orders.filter(order => order !== task_id)
    })
  });

  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards
  };
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask({
    columns,
    tasks
  }));
}

function* moveTaskEffectSaga({
  payload: {
    tasks,
    columns
  }
}) {
  let scrum_boards = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(getScrumBoards);
  scrum_boards = {
    columns: columns,
    tasks: tasks,
    boards: scrum_boards.boards
  };
  Object(_iso_lib_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__["saveState"])('scrum_boards', scrum_boards);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].setMovedTask({
    columns,
    tasks
  }));
}

function* scrumBoardSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].LOAD_BOARDS_DATA_SAGA, boardsRenderEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].LOAD_CURRENT_BOARD_DATA_SAGA, boardRenderEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].CREATE_OR_UPDATE_BOARD_WATCHER, createOrUpdateBoardEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].DELETE_BOARD_WATCHER, deleteBoardEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].CREATE_OR_UPDATE_COLUMN_WATCHER, createOrUpdateColumnEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].DELETE_COLUMN_WATCHER, deleteColumnEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].MOVE_COLUMN_WATCHER, moveColumnEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].CREATE_OR_UPDATE_TASK_WATCHER, createOrUpdateTaskEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].DELETE_TASK_WATCHER, deleteTaskEffectSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_3__["default"].MOVE_TASK_WATCHER, moveTaskEffectSaga)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/themeSwitcher/actions.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/themeSwitcher/actions.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/themeSwitcher/config.js");

const actions = {
  CHANGE_THEME: 'CHANGE_THEME',
  SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
  switchActivation: () => ({
    type: actions.SWITCH_ACTIVATION
  }),
  changeTheme: (attribute, themeName) => {
    const theme = Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])(attribute, themeName);

    if (attribute === 'layoutTheme') {
      document.getElementsByClassName('isomorphicContent')[0].style.backgroundColor = theme.backgroundColor;
    }

    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/themeSwitcher/config.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/themeSwitcher/config.js ***!
  \*************************************************************************************************/
/*! exports provided: getCurrentTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "../../node_modules/@iso/config/theme/theme.config.js");

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].theme,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'customTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }]
};
const topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].topbar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].sidebar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#323332',
    backgroundColor: undefined,
    textColor: '#788195'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].layout,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    backgroundColor: '#F1F3F6',
    textColor: undefined
  }, {
    themeName: 'theme1',
    buttonColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#323232'
  }, {
    themeName: 'theme2',
    buttonColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textColor: '#ffffff'
  }]
};
const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme
};
function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
/* harmony default export */ __webpack_exports__["default"] = (customizedThemes);

/***/ }),

/***/ "../../node_modules/@iso/redux/themeSwitcher/reducer.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/themeSwitcher/reducer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/redux/themeSwitcher/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/themeSwitcher/actions.js");



const initState = {
  isActivated: false,
  changeThemes: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getCurrentTheme"])('changeThemes', _config__WEBPACK_IMPORTED_MODULE_1__["default"].changeThemes.defaultTheme || 'themedefault'),
  topbarTheme: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getCurrentTheme"])('topbarTheme', _config__WEBPACK_IMPORTED_MODULE_1__["default"].topbarTheme.defaultTheme || 'themedefault'),
  sidebarTheme: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getCurrentTheme"])('sidebarTheme', _config__WEBPACK_IMPORTED_MODULE_1__["default"].sidebarTheme.defaultTheme || 'themedefault'),
  layoutTheme: Object(_config__WEBPACK_IMPORTED_MODULE_1__["getCurrentTheme"])('layoutTheme', _config__WEBPACK_IMPORTED_MODULE_1__["default"].layoutTheme.defaultTheme || 'themedefault')
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].SWITCH_ACTIVATION:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isActivated: !state.isActivated
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_THEME:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        [action.attribute]: action.theme
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "../../node_modules/@iso/redux/todos/actions.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/todos/actions.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todoActions = {
  CHANGE_TODO: 'CHANGE_TODO',
  ALL_COMPLETED: 'ALL_COMPLETED',
  DELETE_COMPLETED: 'DELETE_COMPLETED',
  addTodo: todo => {
    return (dispatch, getState) => {
      const newTodo = {
        id: new Date(),
        todo: todo,
        createTime: new Date(),
        color: 0,
        completed: false
      };
      const todos = [newTodo, ...getState().Todos.todos];
      dispatch({
        type: todoActions.CHANGE_TODO,
        todos
      });
    };
  },
  edittodo: editTodo => {
    return (dispatch, getState) => {
      const oldTodos = getState().Todos.todos;
      const todos = [];
      oldTodos.forEach(todo => {
        if (todo.id !== editTodo.id) {
          todos.push(todo);
        } else {
          todos.push(editTodo);
        }
      });
      dispatch({
        type: todoActions.CHANGE_TODO,
        todos
      });
    };
  },
  deleteTodo: id => {
    return (dispatch, getState) => {
      const oldTodos = getState().Todos.todos;
      const todos = [];
      oldTodos.forEach(todo => {
        if (todo.id !== id) {
          todos.push(todo);
        }
      });
      dispatch({
        type: todoActions.CHANGE_TODO,
        todos
      });
    };
  },
  allCompleted: () => {
    return (dispatch, getState) => {
      const oldTodos = getState().Todos.todos;
      const todos = [];
      oldTodos.forEach(todo => {
        todo.completed = true;
        todos.push(todo);
      });
      dispatch({
        type: todoActions.CHANGE_TODO,
        todos
      });
    };
  },
  deleteCompleted: () => {
    return (dispatch, getState) => {
      const oldTodos = getState().Todos.todos;
      const todos = [];
      oldTodos.forEach(todo => {
        if (!todo.completed) {
          todos.push(todo);
        }
      });
      dispatch({
        type: todoActions.CHANGE_TODO,
        todos
      });
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (todoActions);

/***/ }),

/***/ "../../node_modules/@iso/redux/todos/data.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/todos/data.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todoData = JSON.parse(`[{
  "id": 6903,
  "todo": "Ut corrupti eum. Magnam culpa et itaque voluptas maiores et sed molestiae ad. Ut earum est tempore enim odio hic architecto et iure. Qui dolore velit illo velit atque reprehenderit sed cupiditate.",
  "createTime": "2016-12-26T15:52:07.773Z",
  "color": 1,
  "completed": true
}, {
  "id": 47977,
  "todo": "Eos quas doloremque iste aut. Harum doloribus atque. Natus quis odio eaque ea. Ut recusandae occaecati. Consequuntur deleniti qui perspiciatis veniam ut.",
  "createTime": "2016-08-15T06:09:48.506Z",
  "color": 3,
  "completed": false
}, {
  "id": 81193,
  "todo": "Est quod in vel. Consequatur consequatur ipsa. Odio ea repellat aut quibusdam autem quibusdam. Ad ea quo in.",
  "createTime": "2016-09-10T03:59:20.370Z",
  "color": 2,
  "completed": true
}, {
  "id": 23485,
  "todo": "Omnis non iste. Delectus omnis quaerat dicta in aut. Id velit est aliquid ut voluptas eligendi numquam.",
  "createTime": "2016-07-04T04:40:50.001Z",
  "color": 3,
  "completed": false
}, {
  "id": 61833,
  "todo": "Exercitationem qui quia. Laborum suscipit qui voluptatum suscipit est accusamus. Placeat illo dolorem placeat totam.",
  "createTime": "2017-06-18T00:51:31.881Z",
  "color": 4,
  "completed": true
}]`);

class fakeData {
  constructor(size = 10, colorLength = 4) {
    this.size = size;
    this.datas = [];
    this.colorLength = colorLength;
  }

  dataModel(index) {
    // return {
    //   id: faker.random.number() ,
    //   todo: faker.lorem.paragraph(),
    //   createTime: faker.date.past(),
    //   color: faker.random.number(this.colorLength - 1),
    //   completed: faker.random.boolean(),
    // }
    return todoData[index];
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }

    return this.datas[index];
  }

  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }

    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (fakeData);

/***/ }),

/***/ "../../node_modules/@iso/redux/todos/reducer.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/todos/reducer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return todoReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "../../node_modules/@iso/redux/todos/data.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/todos/actions.js");



const colors = ['#7ED321', '#de1b1b', '#511E78', '#ff9009', '#42a5f5'];
const todos = new _data__WEBPACK_IMPORTED_MODULE_1__["default"](5, colors.length).getAll();
const initState = {
  todos,
  colors
};
function todoReducer(state = initState, action) {
  const todos = state.todos;
  const newtodos = [];

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE_TODO:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        todos: action.todos
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].ALL_COMPLETED:
      todos.forEach(todo => {
        todo.completed = true;
        newtodos.push(todo);
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        todos: newtodos
      });

    case _actions__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE_COMPLETED:
      todos.forEach(todo => {
        if (todo.completed !== true) {
          newtodos.push(todo);
        }
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        todos: newtodos
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/todos/saga.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/todos/saga.js ***!
  \***************************************************************************************/
/*! exports provided: changedTodo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedTodo", function() { return changedTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/todos/actions.js");


function* changedTodo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_TODO, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(changedTodo)]);
}

/***/ }),

/***/ "../../node_modules/@iso/redux/youtubeSearch/actions.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/youtubeSearch/actions.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  YOUTUBE_SEARCH: 'YOUTUBE_SEARCH',
  YOUTUBE_SUCCESS_RESULT: 'YOUTUBE_SUCCESS_RESULT',
  YOUTUBE_ERROR_RESULT: 'YOUTUBE_ERROR_RESULT',
  youtubeSearch: searcText => ({
    type: actions.YOUTUBE_SEARCH,
    payload: {
      searcText
    }
  }),
  onPageChange: (searcText, pageToken) => ({
    type: actions.YOUTUBE_SEARCH,
    payload: {
      searcText,
      pageToken
    }
  }),
  youtubeSearchSuccess: (result, total_count, nextPageToken, prevPageToken) => ({
    type: actions.YOUTUBE_SUCCESS_RESULT,
    result,
    total_count,
    nextPageToken,
    prevPageToken
  }),
  youtubeSearchError: () => ({
    type: actions.YOUTUBE_ERROR_RESULT
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "../../node_modules/@iso/redux/youtubeSearch/reducers.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/youtubeSearch/reducers.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/youtubeSearch/actions.js");


const initState = {
  searcText: 'React JS Conf',
  total_count: 0,
  result: [],
  loading: false,
  error: false
};
function reducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].YOUTUBE_SEARCH:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        searcText: action.payload.searcText
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].YOUTUBE_SUCCESS_RESULT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: false,
        result: action.result,
        total_count: action.total_count,
        prevPageToken: action.prevPageToken,
        nextPageToken: action.nextPageToken
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].YOUTUBE_ERROR_RESULT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: false,
        result: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../../node_modules/@iso/redux/youtubeSearch/sagas.js":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/redux/youtubeSearch/sagas.js ***!
  \************************************************************************************************/
/*! exports provided: per_page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "per_page", function() { return per_page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../node_modules/@iso/redux/youtubeSearch/actions.js");
/* harmony import */ var _iso_config_youtube_search_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/config/youtube_search.config */ "../../node_modules/@iso/config/youtube_search.config.js");



const per_page = 10;
const maxResults = 10;
const youtubeSearchURL = `https://www.googleapis.com/youtube/v3/search?maxResults=${maxResults}&type=video&key=${_iso_config_youtube_search_config__WEBPACK_IMPORTED_MODULE_2__["default"]}&part=snippet`;

const onSearchReqeust = async (searcText, pageToken) => await fetch(`${youtubeSearchURL}&q=${encodeURIComponent(searcText)}${pageToken}`).then(res => res.json()).then(res => res).catch(error => error);

function* searchRequest({
  payload
}) {
  const {
    searcText,
    pageToken
  } = payload;

  try {
    const searchResult = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onSearchReqeust, searcText, pageToken ? `&pageToken=${pageToken}` : '');

    if (searchResult.items) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].youtubeSearchSuccess(searchResult.items, searchResult.pageInfo.totalResults, searchResult.nextPageToken, searchResult.prevPageToken));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].youtubeSearchSuccess());
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].youtubeSearchSuccess());
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].YOUTUBE_SEARCH, searchRequest)]);
}

/***/ }),

/***/ "../../node_modules/antd/dist/antd.css":
/*!*********************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/dist/antd.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/button/style/css.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/button/style/css.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/config-provider/style/css.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/config-provider/style/css.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/icon/style/css.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/icon/style/css.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/input/style/css.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/input/style/css.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/notification/style/css.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/notification/style/css.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/popconfirm/style/css.js":
/*!***********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/popconfirm/style/css.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/popover/style/css.js":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/popover/style/css.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/next/app.js":
/*!**************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/app.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/client/router.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/client/with-router.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/mitt.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
/*!**********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router-context.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/next-server/lib/utils.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!**************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/pages/_app.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "../../node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/node_modules/react-is/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./authentication/actions.js":
/*!***********************************!*\
  !*** ./authentication/actions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',
  login: credentials => ({
    type: actions.LOGIN_REQUEST_START,
    payload: credentials
  }),
  jwtLogin: (history, userInfo) => ({
    type: actions.JWT_LOGIN_REQUEST_START,
    payload: {
      history,
      userInfo
    }
  }),
  loginRequestSuccess: credentials => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: credentials
  }),
  loginRequestFailure: error => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: error
  }),
  logout: () => ({
    type: actions.LOGOUT_REQUEST_START
  }),
  logoutRequestSuccess: () => ({
    type: actions.LOGOUT_REQUEST_SUCCESS
  }),
  logoutRequestFailure: error => ({
    type: actions.LOGOUT_REQUEST_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./authentication/auth.utils.js":
/*!**************************************!*\
  !*** ./authentication/auth.utils.js ***!
  \**************************************/
/*! exports provided: setCookie, removeCookie, getCookie, login, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "../../node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/authentication/auth.utils.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return  false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

const login = ({
  token
}) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/dashboard');
};
const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/signin'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signin');
  }

  return token;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()());
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signin');
};
const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/signin');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }));
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, componentProps, {
      token
    });
  };

  return Wrapper;
};

/***/ }),

/***/ "./authentication/jwtAuthentication.js":
/*!*********************************************!*\
  !*** ./authentication/jwtAuthentication.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/config/jwt.config */ "../../node_modules/@iso/config/jwt.config.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);





class JwtAuth {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "login", async userInfo => {
      if (!userInfo.username || !userInfo.password) {
        return {
          error: 'please fill in the input'
        };
      }

      return await fetch(_iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_2__["default"].fetchUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(userInfo)
      }).then(response => response.json()).then(res => {
        const result = {};

        if (res.token) {
          result.profile = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(res.token);
          result.token = res.token;
          return result;
        } else {
          return res;
        }
      }).catch(error => ({
        error
      }));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JwtAuth());

/***/ }),

/***/ "./authentication/reducer.js":
/*!***********************************!*\
  !*** ./authentication/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./authentication/actions.js");

// import Router from 'next/router';

const initState = {
  idToken: null,
  error: null
};
function authReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_REQUEST_SUCCESS:
      // Router.replace('/dashboard');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        idToken: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGOUT_REQUEST_FAILURE:
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_REQUEST_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        idToken: null,
        error: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGOUT_REQUEST_SUCCESS:
      // Router.replace('/');
      return initState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./authentication/sagas.js":
/*!*********************************!*\
  !*** ./authentication/sagas.js ***!
  \*********************************/
/*! exports provided: jwtLoginRequest, onLogin, onLogout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtLoginRequest", function() { return jwtLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.utils */ "./authentication/auth.utils.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components */ "../../node_modules/@iso/components/index.js");
/* harmony import */ var _jwtAuthentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwtAuthentication */ "./authentication/jwtAuthentication.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./authentication/actions.js");







const ApiUrl = '/api/login';

function* loginRequest({
  payload: {
    user
  }
}) {
  try {
    const response = yield isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        user
      })
    });

    if (response.status === 200) {
      const {
        token
      } = yield response.json();
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_auth_utils__WEBPACK_IMPORTED_MODULE_3__["login"], {
        token
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].loginRequestSuccess(token));
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].loginRequestFailure(error));
  }
}

function* jwtLoginRequest() {// yield takeLatest(actions.JWT_LOGIN_REQUEST, function*({ payload }) {
  //   const result = yield call(JwtAuthentication.login, payload.userInfo);
  //   if (result.error) {
  //     notification('error', result.error);
  //     yield put(actions.loginRequestFailure(error));
  //   } else {
  //     payload.history.push('/dashboard');
  //     yield put({
  //       type: actions.LOGIN_REQUEST_SUCCESS,
  //       token: result.token,
  //       profile: result.profile,
  //     });
  //   }
  // });
}

function* logoutRequest() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_auth_utils__WEBPACK_IMPORTED_MODULE_3__["logout"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].logoutRequestSuccess());
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].logoutRequestFailure(error));
  }
} // export function* loginSuccess() {
//   yield takeLatest(actions.LOGIN_SUCCESS, function*(payload) {
//     setCookie('login_saga', payload.token);
//     yield setCookie('id_token', payload.token);
//   });
// }
// export function* loginError() {
//   yield takeLatest(actions.LOGIN_ERROR, function*() {});
// }


function* onLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].LOGIN_REQUEST_START, loginRequest);
}
function* onLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_6__["default"].LOGOUT_REQUEST_START, logoutRequest);
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(jwtLoginRequest), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(onLogout)]);
}

/***/ }),

/***/ "./containers/ThemeProvider.js":
/*!*************************************!*\
  !*** ./containers/ThemeProvider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppProvider; });
/* harmony import */ var antd_lib_config_provider_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider/style/css */ "../../node_modules/antd/lib/config-provider/style/css.js");
/* harmony import */ var antd_lib_config_provider_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "../../node_modules/@iso/config/theme/theme.config.js");
/* harmony import */ var _iso_config_translation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/config/translation */ "../../node_modules/@iso/config/translation/index.js");
/* harmony import */ var _iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/lib/hooks/useWindowSize */ "../../node_modules/@iso/lib/hooks/useWindowSize.js");
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/redux/app/actions */ "../../node_modules/@iso/redux/app/actions.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/ThemeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const {
  toggleAll
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_9__["default"];
function AppProvider({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    locale
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.LanguageSwitcher.language);
  const {
    themeName
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = _iso_config_translation__WEBPACK_IMPORTED_MODULE_7__["default"][locale];
  const {
    width,
    height
  } = Object(_iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["default"])();
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [dispatch]);
  return __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    locale: currentAppLocale.antd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_6__["default"][themeName],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children)));
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/ThemeProvider */ "./containers/ThemeProvider.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "../../node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class CustomApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_containers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"])(CustomApp));

/***/ }),

/***/ "./redux/root-reducer.js":
/*!*******************************!*\
  !*** ./redux/root-reducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/reducer */ "./authentication/reducer.js");
/* harmony import */ var _iso_redux_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/redux/app/reducer */ "../../node_modules/@iso/redux/app/reducer.js");
/* harmony import */ var _iso_redux_mail_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/redux/mail/reducer */ "../../node_modules/@iso/redux/mail/reducer.js");
/* harmony import */ var _iso_redux_calendar_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/redux/calendar/reducer */ "../../node_modules/@iso/redux/calendar/reducer.js");
/* harmony import */ var _iso_redux_box_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/redux/box/reducer */ "../../node_modules/@iso/redux/box/reducer.js");
/* harmony import */ var _iso_redux_notes_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/redux/notes/reducer */ "../../node_modules/@iso/redux/notes/reducer.js");
/* harmony import */ var _iso_redux_todos_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/redux/todos/reducer */ "../../node_modules/@iso/redux/todos/reducer.js");
/* harmony import */ var _iso_redux_contacts_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/contacts/reducer */ "../../node_modules/@iso/redux/contacts/reducer.js");
/* harmony import */ var _iso_redux_card_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/redux/card/reducer */ "../../node_modules/@iso/redux/card/reducer.js");
/* harmony import */ var _iso_redux_chat_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iso/redux/chat/reducers */ "../../node_modules/@iso/redux/chat/reducers.js");
/* harmony import */ var _iso_redux_dynamicEchart_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/redux/dynamicEchart/reducer */ "../../node_modules/@iso/redux/dynamicEchart/reducer.js");
/* harmony import */ var _iso_redux_ecommerce_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iso/redux/ecommerce/reducer */ "../../node_modules/@iso/redux/ecommerce/reducer.js");
/* harmony import */ var _iso_redux_themeSwitcher_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iso/redux/themeSwitcher/reducer */ "../../node_modules/@iso/redux/themeSwitcher/reducer.js");
/* harmony import */ var _iso_redux_invoice_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iso/redux/invoice/reducer */ "../../node_modules/@iso/redux/invoice/reducer.js");
/* harmony import */ var _iso_redux_languageSwitcher_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iso/redux/languageSwitcher/reducer */ "../../node_modules/@iso/redux/languageSwitcher/reducer.js");
/* harmony import */ var _iso_redux_youtubeSearch_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iso/redux/youtubeSearch/reducers */ "../../node_modules/@iso/redux/youtubeSearch/reducers.js");
/* harmony import */ var _iso_redux_articles_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iso/redux/articles/reducers */ "../../node_modules/@iso/redux/articles/reducers.js");
/* harmony import */ var _iso_redux_investors_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iso/redux/investors/reducers */ "../../node_modules/@iso/redux/investors/reducers.js");
/* harmony import */ var _iso_redux_scrumBoard_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iso/redux/scrumBoard/reducer */ "../../node_modules/@iso/redux/scrumBoard/reducer.js");
/* harmony import */ var _iso_redux_drawer_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iso/redux/drawer/reducer */ "../../node_modules/@iso/redux/drawer/reducer.js");
/* harmony import */ var _iso_redux_modal_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iso/redux/modal/reducer */ "../../node_modules/@iso/redux/modal/reducer.js");
/* harmony import */ var _iso_redux_quiz_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iso/redux/quiz/reducer */ "../../node_modules/@iso/redux/quiz/reducer.js");
/* harmony import */ var _iso_redux_profile_reducer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iso/redux/profile/reducer */ "../../node_modules/@iso/redux/profile/reducer.js");
/* harmony import */ var _iso_redux_githubSearch_reducers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iso/redux/githubSearch/reducers */ "../../node_modules/@iso/redux/githubSearch/reducers.js");

























/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Auth: _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  App: _iso_redux_app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  ThemeSwitcher: _iso_redux_themeSwitcher_reducer__WEBPACK_IMPORTED_MODULE_13__["default"],
  LanguageSwitcher: _iso_redux_languageSwitcher_reducer__WEBPACK_IMPORTED_MODULE_15__["default"],
  Mails: _iso_redux_mail_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  Calendar: _iso_redux_calendar_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  Box: _iso_redux_box_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  Notes: _iso_redux_notes_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  Todos: _iso_redux_todos_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  Contacts: _iso_redux_contacts_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  Cards: _iso_redux_card_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  Chat: _iso_redux_chat_reducers__WEBPACK_IMPORTED_MODULE_10__["default"],
  DynamicChartComponent: _iso_redux_dynamicEchart_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],
  Ecommerce: _iso_redux_ecommerce_reducer__WEBPACK_IMPORTED_MODULE_12__["default"],
  Invoices: _iso_redux_invoice_reducer__WEBPACK_IMPORTED_MODULE_14__["default"],
  YoutubeSearch: _iso_redux_youtubeSearch_reducers__WEBPACK_IMPORTED_MODULE_16__["default"],
  Articles: _iso_redux_articles_reducers__WEBPACK_IMPORTED_MODULE_17__["default"],
  Investors: _iso_redux_investors_reducers__WEBPACK_IMPORTED_MODULE_18__["default"],
  scrumBoard: _iso_redux_scrumBoard_reducer__WEBPACK_IMPORTED_MODULE_19__["default"],
  modal: _iso_redux_modal_reducer__WEBPACK_IMPORTED_MODULE_21__["default"],
  quiz: _iso_redux_quiz_reducer__WEBPACK_IMPORTED_MODULE_22__["default"],
  drawer: _iso_redux_drawer_reducer__WEBPACK_IMPORTED_MODULE_20__["default"],
  profile: _iso_redux_profile_reducer__WEBPACK_IMPORTED_MODULE_23__["default"],
  githubSearch: _iso_redux_githubSearch_reducers__WEBPACK_IMPORTED_MODULE_24__["default"]
}));

/***/ }),

/***/ "./redux/root-saga.js":
/*!****************************!*\
  !*** ./redux/root-saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authentication_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/sagas */ "./authentication/sagas.js");
/* harmony import */ var _iso_redux_contacts_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/redux/contacts/saga */ "../../node_modules/@iso/redux/contacts/saga.js");
/* harmony import */ var _iso_redux_invoice_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/redux/invoice/saga */ "../../node_modules/@iso/redux/invoice/saga.js");
/* harmony import */ var _iso_redux_mail_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/redux/mail/saga */ "../../node_modules/@iso/redux/mail/saga.js");
/* harmony import */ var _iso_redux_notes_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/redux/notes/saga */ "../../node_modules/@iso/redux/notes/saga.js");
/* harmony import */ var _iso_redux_todos_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/redux/todos/saga */ "../../node_modules/@iso/redux/todos/saga.js");
/* harmony import */ var _iso_redux_ecommerce_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/redux/ecommerce/saga */ "../../node_modules/@iso/redux/ecommerce/saga.js");
/* harmony import */ var _iso_redux_card_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/card/saga */ "../../node_modules/@iso/redux/card/saga.js");
/* harmony import */ var _iso_redux_chat_sagas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/redux/chat/sagas */ "../../node_modules/@iso/redux/chat/sagas.js");
/* harmony import */ var _iso_redux_youtubeSearch_sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iso/redux/youtubeSearch/sagas */ "../../node_modules/@iso/redux/youtubeSearch/sagas.js");
/* harmony import */ var _iso_redux_githubSearch_sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/redux/githubSearch/sagas */ "../../node_modules/@iso/redux/githubSearch/sagas.js");
/* harmony import */ var _iso_redux_articles_sagas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iso/redux/articles/sagas */ "../../node_modules/@iso/redux/articles/sagas.js");
/* harmony import */ var _iso_redux_investors_sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iso/redux/investors/sagas */ "../../node_modules/@iso/redux/investors/sagas.js");
/* harmony import */ var _iso_redux_scrumBoard_saga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iso/redux/scrumBoard/saga */ "../../node_modules/@iso/redux/scrumBoard/saga.js");
/* harmony import */ var _iso_redux_quiz_saga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iso/redux/quiz/saga */ "../../node_modules/@iso/redux/quiz/saga.js");
/* harmony import */ var _iso_redux_profile_saga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iso/redux/profile/saga */ "../../node_modules/@iso/redux/profile/saga.js");

















function* rootSaga(getState) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_authentication_sagas__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_iso_redux_contacts_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_iso_redux_mail_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_iso_redux_notes_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_iso_redux_todos_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_iso_redux_ecommerce_saga__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(_iso_redux_card_saga__WEBPACK_IMPORTED_MODULE_8__["default"])(), Object(_iso_redux_invoice_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_iso_redux_chat_sagas__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(_iso_redux_youtubeSearch_sagas__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(_iso_redux_articles_sagas__WEBPACK_IMPORTED_MODULE_12__["default"])(), Object(_iso_redux_investors_sagas__WEBPACK_IMPORTED_MODULE_13__["default"])(), Object(_iso_redux_scrumBoard_saga__WEBPACK_IMPORTED_MODULE_14__["default"])(), Object(_iso_redux_quiz_saga__WEBPACK_IMPORTED_MODULE_15__["default"])(), Object(_iso_redux_profile_saga__WEBPACK_IMPORTED_MODULE_16__["default"])(), Object(_iso_redux_githubSearch_sagas__WEBPACK_IMPORTED_MODULE_11__["default"])()]);
}

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-reducer */ "./redux/root-reducer.js");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-saga */ "./redux/root-saga.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, sagaMiddleware]));

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_4__["default"]);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga(); // dispatch saga tasks

    tasks(store.dispatch); // Stop running and wait for the tasks to be done

    await store.stopSaga(); // Re-run on client side

    if (!isServer) {
      store.runSaga();
    }
  }; // Initial run


  store.runSaga();
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/config-provider":
/*!*******************************************!*\
  !*** external "antd/lib/config-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/locale-provider/ca_ES":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ca_ES" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ca_ES");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/locale-provider/fr_FR":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/fr_FR" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/fr_FR");

/***/ }),

/***/ "antd/lib/locale-provider/it_IT":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/it_IT" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/it_IT");

/***/ }),

/***/ "antd/lib/notification":
/*!****************************************!*\
  !*** external "antd/lib/notification" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "antd/lib/popconfirm":
/*!**************************************!*\
  !*** external "antd/lib/popconfirm" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "clone":
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash/omit":
/*!******************************!*\
  !*** external "lodash/omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-intl/locale-data/ar":
/*!********************************************!*\
  !*** external "react-intl/locale-data/ar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/ar");

/***/ }),

/***/ "react-intl/locale-data/en":
/*!********************************************!*\
  !*** external "react-intl/locale-data/en" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),

/***/ "react-intl/locale-data/es":
/*!********************************************!*\
  !*** external "react-intl/locale-data/es" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/es");

/***/ }),

/***/ "react-intl/locale-data/fr":
/*!********************************************!*\
  !*** external "react-intl/locale-data/fr" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),

/***/ "react-intl/locale-data/it":
/*!********************************************!*\
  !*** external "react-intl/locale-data/it" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/it");

/***/ }),

/***/ "react-intl/locale-data/zh":
/*!********************************************!*\
  !*** external "react-intl/locale-data/zh" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/zh");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga-firebase":
/*!**************************************!*\
  !*** external "redux-saga-firebase" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga-firebase");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-theme":
/*!*******************************!*\
  !*** external "styled-theme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map