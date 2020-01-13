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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

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

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "../../node_modules/@iso/assets/images/bucket.svg":
/*!********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/bucket.svg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNDNUE7IiBkPSJNNTkuMDE0LDc5Ljc1MXYzNjQuNjY1YzAsMTkuMzc2LDE1LjcwNiwzNS4wODQsMzUuMDgsMzUuMDg0aDMyMy44MTQNCgljMTkuMzc0LDAsMzUuMDgtMTUuNzA4LDM1LjA4LTM1LjA4NFY3OS43NTFINTkuMDE0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQjAwMDsiIGQ9Ik00MjQuMTgxLDc5Ljc1MXYzNjQuNjY1YzAsMTkuMzc2LTE1LjcwNiwzNS4wODQtMzUuMDgsMzUuMDg0aDI4LjgwNg0KCWMxOS4zNzQsMCwzNS4wNzktMTUuNzA4LDM1LjA3OS0zNS4wODRWNzkuNzUxSDQyNC4xODF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZBMjI3OyIgZD0iTTQ2NC4wOTIsOTAuNzUySDQ3LjkwOGMtOC43MzMsMC0xNS44MTMtNy4wOC0xNS44MTMtMTUuODEzVjQ4LjMxNg0KCWMwLTguNzMzLDcuMDgtMTUuODEzLDE1LjgxMy0xNS44MTNoNDE2LjE4NGM4LjczMywwLDE1LjgxMyw3LjA4LDE1LjgxMywxNS44MTN2MjYuNjIzDQoJQzQ3OS45MDYsODMuNjcyLDQ3Mi44MjYsOTAuNzUyLDQ2NC4wOTIsOTAuNzUyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3OEIwQjsiIGQ9Ik00NjQuMDkzLDMyLjUwMmgtMTIuOTk0djEwLjE0OWMwLDEwLjY1NC04LjYzNiwxOS4yOTEtMTkuMjg5LDE5LjI5MUgzMi4wOTV2MTIuOTk2DQoJYzAsOC43MzQsNy4wNzksMTUuODE0LDE1LjgxMiwxNS44MTRoNDE2LjE4NmM4LjczMywwLDE1LjgxMi03LjA4LDE1LjgxMi0xNS44MTRWNDguMzE3DQoJQzQ3OS45MDYsMzkuNTgzLDQ3Mi44MjYsMzIuNTAyLDQ2NC4wOTMsMzIuNTAyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGMzk1QTsiIGQ9Ik0zNDAuNTUxLDM3Ni40MzRIMTcxLjQ0OWMtNy4yOTcsMC0xMy4yMTItNS45MTUtMTMuMjEyLTEzLjIxMnYtMjQuMDc4DQoJYzAtNy4yOTcsNS45MTUtMTMuMjEyLDEzLjIxMi0xMy4yMTJoMTY5LjEwMmM3LjI5NywwLDEzLjIxMiw1LjkxNSwxMy4yMTIsMTMuMjEydjI0LjA3OA0KCUMzNTMuNzYzLDM3MC41MTgsMzQ3Ljg0OCwzNzYuNDM0LDM0MC41NTEsMzc2LjQzNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODE5NDI7IiBkPSJNMzQwLjU1MiwzMjUuOTMyaC0yOC44MDZjNy4yOTYsMCwxMy4yMTEsNS45MTYsMTMuMjExLDEzLjIxM3YyNC4wNzcNCgljMCw3LjI5Ny01LjkxNSwxMy4yMTMtMTMuMjExLDEzLjIxM2gyOC44MDZjNy4yOTYsMCwxMy4yMTEtNS45MTYsMTMuMjExLTEzLjIxM3YtMjQuMDc3DQoJQzM1My43NjMsMzMxLjg0NywzNDcuODQ4LDMyNS45MzIsMzQwLjU1MiwzMjUuOTMyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzA4OEFGRjsiIGQ9Ik05My41NTIsMzIuNTAydjE0NC4yOTZjMCwxOC44MTEsMTUuMjQ3LDM0LjA1OSwzNC4wNTUsMzQuMDU5bDAsMA0KCWMxOC44MDgsMCwzNC4wNTYtMTUuMjQ5LDM0LjA1Ni0zNC4wNTl2LTcuMDA2YzAtMTguODEsMTUuMjQ3LTM0LjA1OSwzNC4wNTUtMzQuMDU5bDAsMGMxOC44MDgsMCwzNC4wNTYsMTUuMjQ5LDM0LjA1NiwzNC4wNTkNCgl2NTEuNjM1YzAsMTguODExLDE1LjI0NywzNC4wNTksMzQuMDU1LDM0LjA1OWwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDU5di05Ny40MzkNCgljMCwxOC44MTEsMTUuMjQ3LDM0LjA2LDM0LjA1NSwzNC4wNmwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDZWMzIuNTAySDkzLjU1MnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDc2Q0U7IiBkPSJNMjk3Ljg4NSwxMjMuOTg4Yy0xNS45MDksMC0yOC44MDYsMTIuODk5LTI4LjgwNiwyOC44MXY2OC42M2MwLDEzLjY2MS04LjA0NSwyNS40MzctMTkuNjUyLDMwLjg2NA0KCQljNC4zNzUsMi4wNDYsOS4yNTQsMy4xOTUsMTQuNDAzLDMuMTk1bDAsMGMxOC44MDgsMCwzNC4wNTUtMTUuMjQ5LDM0LjA1NS0zNC4wNTlWMTIzLjk4OEwyOTcuODg1LDEyMy45ODh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNzZDRTsiIGQ9Ik0xNjYuOTEyLDEzNS43MzJjLTE4LjgwOCwwLTM0LjA1NSwxNS4yNDktMzQuMDU1LDM0LjA2djcuMDA2YzAsMTMuNjYxLTguMDQ1LDI1LjQzNy0xOS42NTIsMzAuODY0DQoJCWM0LjM3NiwyLjA0Niw5LjI1NCwzLjE5NSwxNC40MDMsMy4xOTVjMTguODA4LDAsMzQuMDU2LTE1LjI0OSwzNC4wNTYtMzQuMDU5di03LjAwNmMwLTEzLjY2MSw4LjA0NS0yNS40MzcsMTkuNjUyLTMwLjg2NA0KCQlDMTc2LjkzOSwxMzYuODgyLDE3Mi4wNjEsMTM1LjczMiwxNjYuOTEyLDEzNS43MzJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNzZDRTsiIGQ9Ik0zMzcuMTg5LDMyLjUwMnY5MS40ODZjMCwxMy42NjEtOC4wNDUsMjUuNDM3LTE5LjY1MiwzMC44NjRjNC4zNzUsMi4wNDYsOS4yNTQsMy4xOTUsMTQuNDAzLDMuMTk1DQoJCWwwLDBjMTguODA4LDAsMzQuMDU1LTE1LjI0OSwzNC4wNTUtMzQuMDU5VjMyLjUwMkgzMzcuMTg5eiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzA1MUMxQjsiIGQ9Ik00ODcuNDA1LDU1LjM1N3YtNy4wNDJjMC0xMi44NTUtMTAuNDU4LTIzLjMxMy0yMy4zMTMtMjMuMzEzaC05OC4wOTdIOTMuNTUySDQ3LjkwOA0KCWMtMTIuODU1LDAtMjMuMzEzLDEwLjQ1OC0yMy4zMTMsMjMuMzEzdjcuMDQyQzEwLjQ4OCw1OC44NjMsMCw3MS42MzIsMCw4Ni44MXY4NS4wMDJjMCw0NC43MTIsMTYuMDQ4LDg3Ljk2OSw0NS4xODgsMTIxLjgwMg0KCWMyLjA1MiwyLjM4Miw0LjE2NSw0LjcwMSw2LjMyNSw2Ljk2OHY4MS43OTVjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTgsNy41LTcuNXYtNjcuNjkzDQoJYzI0LjE1NCwyMC4zMjcsNTMuMTQ4LDM0LjI5OSw4NC4yMjQsNDAuMzc4djguMTZjMCwxMS40Miw5LjI5MiwyMC43MTIsMjAuNzEyLDIwLjcxMmgxNjkuMTAyYzExLjQyMSwwLDIwLjcxMi05LjI5MiwyMC43MTItMjAuNzEyDQoJdi04LjE2YzMxLjA3Ny02LjA4LDYwLjA3MS0yMC4wNTIsODQuMjI1LTQwLjM3OXYxMjkuNzMzYzAsMTUuMjA5LTEyLjM3MiwyNy41ODMtMjcuNTgsMjcuNTgzSDk0LjA5Mw0KCWMtMTUuMjA4LDAtMjcuNTgtMTIuMzc0LTI3LjU4LTI3LjU4M3YtMzEuNzExYzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVzLTcuNSwzLjM1OC03LjUsNy41djMxLjcxMQ0KCWMwLDIzLjQ4LDE5LjEwMSw0Mi41ODMsNDIuNTgsNDIuNTgzaDMyMy44MTRjMjMuNDc5LDAsNDIuNTgtMTkuMTAzLDQyLjU4LTQyLjU4M1YzMDAuNThjMi4xNi0yLjI2Nyw0LjI3My00LjU4NSw2LjMyNC02Ljk2Nw0KCUM0OTUuOTUyLDI1OS43ODEsNTEyLDIxNi41MjMsNTEyLDE3MS44MTJWODYuODFDNTEyLDcxLjYzMiw1MDEuNTEyLDU4Ljg2Myw0ODcuNDA1LDU1LjM1N3ogTTQ3Mi40MDUsNDguMzE1djI2LjYyMw0KCWMwLDQuNTg0LTMuNzI5LDguMzEzLTguMzEzLDguMzEzaC05MC41OTd2LTQzLjI1aDkwLjU5N0M0NjguNjc3LDQwLjAwMiw0NzIuNDA1LDQzLjczMSw0NzIuNDA1LDQ4LjMxNXogTTM1OC40OTYsOTAuNzUydjMzLjIzNg0KCWMwLDE0LjY0NS0xMS45MTMsMjYuNTYtMjYuNTU2LDI2LjU2cy0yNi41NTYtMTEuOTE1LTI2LjU1Ni0yNi41NmMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXY5Ny40MzkNCgljMCwxNC42NDUtMTEuOTEzLDI2LjU1OS0yNi41NTYsMjYuNTU5cy0yNi41NTYtMTEuOTE1LTI2LjU1Ni0yNi41NTl2LTUxLjYzNWMwLTIyLjkxNi0xOC42NDItNDEuNTYtNDEuNTU1LTQxLjU2DQoJYy0yMi45MTQsMC00MS41NTYsMTguNjQ0LTQxLjU1Niw0MS41NnY3LjAwNWMwLDE0LjY0NS0xMS45MTMsMjYuNTYtMjYuNTU2LDI2LjU2cy0yNi41NTUtMTEuOTE1LTI2LjU1NS0yNi41NlY5MC43NTJ2LTUwLjc1DQoJaDI1Ny40NDR2NTAuNzVIMzU4LjQ5NnogTTM5LjU5NSw0OC4zMTVjMC00LjU4NCwzLjcyOS04LjMxMyw4LjMxMy04LjMxM2gzOC4xNDR2NDMuMjVINDcuOTA4Yy00LjU4NCwwLTguMzEzLTMuNzI5LTguMzEzLTguMzEzDQoJVjQ4LjMxNXogTTE1LDE3MS44MTJWODYuODFjMC02Ljc5LDMuOTExLTEyLjY3Nyw5LjU5NS0xNS41NDZ2My42NzVjMCwxMi44NTUsMTAuNDU4LDIzLjMxMywyMy4zMTMsMjMuMzEzaDMuNjA1djE3OS44OTUNCglDMjguNDkyLDI0OC44MTYsMTUsMjExLjgyOSwxNSwxNzEuODEyeiBNMzQwLjU1MSwzNjguOTM0SDE3MS40NDljLTMuMTQ5LDAtNS43MTItMi41NjMtNS43MTItNS43MTJ2LTEzLjAzNQ0KCWMwLjA4NC0wLjQ1MSwwLjEzNy0wLjkxLDAuMTM3LTEuMzc3di05Ljc4M2MwLTEuNzUxLDAuNzk1LTMuMzE4LDIuMDQyLTQuMzY0YzAuOTczLTAuNzY5LDIuMTk5LTEuMjMyLDMuNTMzLTEuMjMyaDE2OS4xMDINCgljMS4zMzQsMCwyLjU2LDAuNDYzLDMuNTM0LDEuMjMzYzEuMjQ2LDEuMDQ1LDIuMDQyLDIuNjEzLDIuMDQyLDQuMzYzdjkuNzgzYzAsMC40NjYsMC4wNTIsMC45MjYsMC4xMzcsMS4zNzd2MTMuMDM1DQoJQzM0Ni4yNjMsMzY2LjM3MSwzNDMuNywzNjguOTM0LDM0MC41NTEsMzY4LjkzNHogTTQ5NywxNzEuODEyYzAsNDAuMDE3LTEzLjQ5Miw3Ny4wMDQtMzYuNTEzLDEwNi4zMzN2LTExOC4yNw0KCWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXYxMzQuOThjLTIyLjYwNywyMi4wNzQtNTEuNDc5LDM3Ljk4OC04NC4yMjUsNDQuOTE1di0wLjYyNw0KCWMwLTYuNDY3LTIuOTgzLTEyLjI0Ny03LjY0MS0xNi4wNDljLTMuNTgzLTIuOTcyLTguMTgtNC43NjEtMTMuMTg4LTQuNzYxSDE3MS41NjdjLTUuMDA4LDAtOS42MDQsMS43OS0xMy4xODgsNC43NjENCgljLTQuNjU5LDMuODAxLTcuNjQyLDkuNTgyLTcuNjQyLDE2LjA0OXYwLjYyN2MtMzIuNzQ2LTYuOTI3LTYxLjYxNi0yMi44NDEtODQuMjI0LTQ0LjkxNVY5OC4yNTJoMTkuNTM4djc4LjU0Ng0KCWMwLDIyLjkxNiwxOC42NDIsNDEuNTYsNDEuNTU1LDQxLjU2YzIyLjkxNCwwLDQxLjU1Ni0xOC42NDQsNDEuNTU2LTQxLjU2di03LjAwNWMwLTE0LjY0NSwxMS45MTMtMjYuNTYsMjYuNTU2LTI2LjU2DQoJczI2LjU1NSwxMS45MTUsMjYuNTU1LDI2LjU2djUxLjYzNWMwLDIyLjkxNiwxOC42NDIsNDEuNTU5LDQxLjU1Niw0MS41NTlzNDEuNTU2LTE4LjY0Myw0MS41NTYtNDEuNTU5di02NS40OTYNCgljNy4yMDYsNi4wMDIsMTYuNDY3LDkuNjE2LDI2LjU1Niw5LjYxNmMyMi45MTQsMCw0MS41NTYtMTguNjQ0LDQxLjU1Ni00MS41NlY5OC4yNTJoNzEuOTkxdjMxLjQ5OWMwLDQuMTQyLDMuMzU3LDcuNSw3LjUsNy41DQoJczcuNS0zLjM1OCw3LjUtNy41Vjk4LjI1MmgzLjYwNWMxMi44NTQsMCwyMy4zMTMtMTAuNDU4LDIzLjMxMy0yMy4zMTN2LTMuNjc1YzUuNjg0LDIuODY5LDkuNTk1LDguNzU2LDkuNTk1LDE1LjU0NnY4NS4wMDJINDk3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

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

/***/ "../../node_modules/@iso/assets/images/user1.png":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/user1.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/user1-56a1f25e5fb02becf99ef7c50fe14233.png";

/***/ }),

/***/ "../../node_modules/@iso/assets/images/user3.png":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/images/user3.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAC/VBMVEUAAAD39PLp7O3g5Obz8vHi5+nFyczz8vHm6+zo7O3c5OdmZm708/Lw8fHZ4+bz8vL29fPW4eX29PPr7u7y8vLY4eXw8fC6wMT49/To7O3S3uLm6uxkanT29PJmbHXa4+bX4eT39fPW4uTh6OpydXxwdn/29fPP2d3w8fHY4eXk6ux9gIVkanXU3+RjZ3Hx8fHj6OpiaHLs7u5wdX7X4OX49vNGNzk+MjVXWWFFPEEuJCthaHQ7Mjh8en/X4OPh6Ord5efi6OhdYWqosrgzJSguHiI+OUO4wMRbWFk0Jivz8vL09PL29fPu7+/v8PDx8fErIyrt7u7r7O749fPc5ujz8vEsJCzY4ub49vTb5eff5+ns7e/V3+Pu7+4uJCvp7e7X4eUvJi7W4OX29fLd5+jT3uMtJS3a5OYwJi3m6+wxJy/////o6+3i6Os4LTMzJy3k6ew1KS9la3QxKTFeYWtvdX1obHX8+/nh5+liZW7r7u5qb3diZ3EpIipZYWxqcXtdZG5UWWRlaXFGMTE/LjD7/f3a4+fO2+BfZnDQ3eJjaXLl6eptcnpZXmhrQjo5MThRVmBMNTNxeIE7Ky7m6+5YWmQ/NDh+hY1nbnhcX2dLSlNySEBBMTQ0LDOKkZhFNzp7gYhNUl75+PZ0gIo3Jyx1e4RNPj6DjJRsdoAXDhXy8vOtp6aPmaFVXGhTNjP09fV1eH5DKCgzIyjx8PDg3tzGvblrXVtRUFhCR1ReTk4/OkJ4RjouHSHm5eSPb2FWRkZYOzheOTUiGCD3+/z09/js9PWbpq6kmZaOgHp4V099TkQ7JScvISbt6unX1tXQzc24srBaVVtRSk9FQklhRD9LKypNQ0cmHibFtqptYmOFXFFrUk1lODRSLi3v8fLSxruGeXlFT11/ZFtsR0GKRD4TBg3z7uvs5d7c08vBxcjazcOUioinjH1hbntxOjTT3ODMxcOzub2qtr2Xoae+qJecgXFrZ2yYUUfDzNGZnaCym42AdnN1bm53jJqisboWC6+VAAAASnRSTlMA/iAWZRAHgxsNYxjNSUL0wr+c8rWEdP70yvPquj899OLd0cCi8Oq8qZ6Tfn10YTX0893UlI5sH+/u0s/Ew6ihNdzcyaCYjWlMQcnsYkwAABBESURBVFjDpJO/a9tAHMVD3Li2IAZTPNQebOwh2GAIJXOS/gFJsSs4dDZICBnh1ioCL0cgY2SMVq2lULqYDB3StRTiCDo0bejQkKV075D+CX3fu4rgNj+c9N0Pzsvnnt89LdyobGZTK9TzDx+XVsuVSjVfL2ibmezC/ymdyTXXq2XhOYbBRdjXLbvX6/aK1fVmLpO+MzaVK+SLlsuYYTg6sy2b6YZhdbu9EVTMF3KpO2EXtXzZtSzGbBZYFlkdj7uu4+iu1e2NgR4XV7TF22ObeRtEZtkWwQyGKyiGLmPkGWhij/LN26GXtKrFLCanFTBX1wMb6gLZwxxDciO0tjQ/dzlfDhgLsBj4tmTaMGrbvQR9DrCyXVzJzftmjRJaELgEduWkQEjgSxEeOgeXVCnM9Yq5Gvd83/M8JBsEwEopMATTMhK55DOCPofptFZxdF13HNA94bhM2lbsBK5848wC16UrRqOqdkOrs4VVrpMMg+DolhEYBuCgq9ZdREJx4Aeih+9iIXttGxqce5yIVDHi4wbDxbpIhcBQAgce5pH32jXtSG14HuecvEIOEkHSgCZwek/XnYH3pLp0qKeu9LvBuQAZpnUC0wX0hhgSr9hMCWQ5wSTb5L5+hedsw/Q9yW0PuDSt4oBzHgoc5UTm0jaUJC79UuRrl+acvt9qmTudQbvvdVq+4EJeQmnDMRfYlcg2xFji3baY/ICwFS7rxr0HHbP1ZPvgoNVuHQz8Adjosy/hqiS6YsO4SkWJYQXqKlbWLvkuHpmm2elsbWO0t3baW6YnMGDb4VF8FMeR7GFinLiYJByT/xFUcv8Uoub7fWgQ9fum2W5R3JgebMfT759/fXkXT6exo6Mzkm+Q7UTqKi7w32p/V6PhR1HkR30/EcUQCt+M9473z158evPq7OfJ+2lkcEiXXVRSYC6UdL42y10u9SM5/kiiRXS0Nz3e/zqZHJ6eHmL/sP86RgGFwFIvm+C5g8EJX1qeaXBNpiDlK3JfeEfPj09+fDuc7A6HL4fD4bPdyeTj07dCZRaGfhjiBQSHZC3pEApRW5ppxG+2yua1iSAM4/EDqiIqtggiHryIN8U/o3U/stBBDLthLsN2N+667KGwkJPZk2CRQi+mBkQCUbCorVDRVG2kRkVFi631EzUibREPFsGTzztjTAM+Ozs7h+Q3T555381QoYBBgmsaJ/P+wJWZWqu2EHMuhHDj8WB8obXiP4AFqbx6YI9TJ7ALhtSRzR3uxr35bhXyZx74U9P3awssjrnDGDOZw6Ng5H5p2beUchjZXM7CkMJvKBQsbLS382+1p9Bh0ldyuaHG8ZUnMDsee1ww5jhACxYG0blF/z1wNCArmwWZ1sADSsM6s+d/hi0Us5Yk6debtfssiJ2Iw6xpmkIwkztj058WZ99nbTATSdawBBR42sZKLAuPf5Y33zBu6LpGO1u5JJuAu+F1a4ELB8SiaTL4LQLtmJW11cXZy2DotqRqEFbSO0RY27azf1Pe1NdPGuw3BnEZhq75k9M14Ql4FcIsAk2mQRejb5Z+2w1N13VAwSC0rpGUdwvCo2+TquFeHR8FcXBQ7mAMH7vZigIXMJc7sAw2uRbc855cq39oTNAvVNL+UuGUnkpWr6rlHh0yOrrsz7VYKZQWHTh1XZfR7DhuwKLza5OpccMwOmDw6JaRIAdSD3G37JIxdJRORrUgQg6Mwa4buQ6BwTW9IBiZf7R6Z1b757jN1qgyNCvBjKPauwXg/TuN/vWaGP5YC1xBx+Y44lLomiThouoADiqfH/1MG7ayDCTdNtJOkIdVsCBMvTuoiLuwSHjyVSXgDFhmuuGoK8+OccfxHFeIOKg264uNiS7DmGS2pHwB6CGU8tZD/d3yp0oVJwyRKAKGaYDlKbrU2TwOKtPNpQ8+aJCCdw4RXaK6/NDWzMbt3dyJdO56ADDQqAaiknnB0CFAe3H5dLX5qP5t1lZW2wIeBYdOyQM7VEDIhyliAxcNmtK526EQODFKWQgEQh0NNBLn4XipPPOp+W7OR66JbGQrDyWJlc+hMMBOLKj3cGbzADTYcTx85+bpkdBjjJyiGmQeCJli5jzC6TWb89VnqWUnOUAx1r9l4BnCftsyPaot2mjDf16dro7K7sBUZFjQoKJGEsFYeWapeXUl1akjEsDAVpLmMaPcsOzJ7O6OmMAl5CtcHpJZMk6e4R3cqFQpzzTPv3nqv5cAWQngEAsnlyRkWbrenemD2cvrwOnTl7dGitxzHVGkLJQYQgY3Gi2Xq2/Orj5dBhkNgSurQYmG1wbVBmqEVrbel0FRANzRRONCZczhMZActxLlQFwvqlQq82d/Ty7htUz9S7UhbxJmIFX1bc8cGBjo8mz4d17cjtEhrEjgoiKjqsPIu/R2vlwu3/1c//Dx7XKqZSWVeGDjTiCbXhp4Hs0cHIDWh3xx+OHtYhAIpnKgCdXmwe/171/O341Gz32ur135NOXrbbUNJxS1VN7al9lJXEluR4IO8dyxcVUPKl/uhVEQPv519t5SKSzdrdcXp36keHEpriJTIrmE4FQsvX/YLv/XJMI4js8oiiiKigqivyHoz8gDizD8peCQjuMOTvQkGYxL8wZSeE4ky502NHMxN4ekbsu2acVmRl8YM6gmZa3Wt42+0vfofXd6U+p9z91tbLz23vv5PJ/nEWBUsbGd3HtvOsmFOUCbg6IVv6Fk7euiXC3Zk9FnU/l7d9khvXNqD+2lBIQy2Y4omlCzPn3s7DVugEM7axYwTWOBh8RsbXExI8liMvR46lX62atek265fWmrsRzag8kzm81wjUT0ijtauJ6yH2NUw9SxYyTNAOyt11YWxVrVaxNTt56kX0hLIAO9Kq1A8MTY37XJrEehp8zei4ocxVNI4RgCJmkS3GC5Xl+UxQUvGQpNvLsVLbzpHQJYYTfxWvfXvt7UtcMIgQzpphNsWkRPJymahl2KsiXBzSzUswtfq+UkvguWbqfum0aHWiGalQ0TnUzTFdw7urYZV4VQ1FxMLlclGOYYisR+x9B0UhRhWFqoZVe+yjYa82izZz+zQx1bjxmjJZNpW9d6Y4eaP2QnCyDzKAdl4uyi1+stS1I5my0+4g7a7Xaeuz21dKPZcHX0qkzrtbbZaRr/GmKeFsNRnqQVrBgFOLMgy1KpHMTSphk+Fi3/cN0ETQ0AtwrWbZs2otHr0Ha+lU3fFjlUr6jEgDsDx8WqnLFTjI1m4Nn77nCvWfeiRa2mraC37MPWZPwvOZF4moVRCPOGUZJkSa7KXpqEGBvDc9Jn16gCw40Lastk0xpspsb/i809DkLeYDCTyZRKJUkC+LlIgUsz2PwCofk3LOpiNeMhky5spl07CchKKDJi6CLYJ8/mM8DWa7VavSwVZZBlL0Xb4JhhYuFw9Mud3vb21aadyoFlN2EhMKygKi8rXlYj/kKCfVJ5ODbWP4fO7y0Xiyo5eIRkSIXMgxxEGKY2sLnF3bJXPWJZVLIVUAueIGsyukY//r54eXnZPRL39E9LK8Xic3neTpFAgxuLcQNTasPQ0XpFb92gHgotigj1JuBY9a7IdWbm4uXzpwWP4BNG4uNz8yvF6vOokgMPcCDGhSfysKyCO7VeO8butjQFpOpXA1sSu4YHT57ucfRE3P6+uDDeGJsvFoOAkiRP8gEoNfty9MC/2rK5efBucVUhYE0u458P35cd5309Qjzu6fOc7Ws0potSgI/hQhCBwNVUZclKNBdW63CC1dI8eGPxEf8Ihl2TH2bOORxujyDERxCFU+hvNCYePY7xAS4WCENzhdklTHOHsGaurNW4WCNtRGtr5ly5meGZiz6/03c20i10n+0bH++LN0bSFZyG+MBA6sHcg+nK+0kz0UmFtq7RP44Z/jGccOV2DZ77OOx0ursFp9Pj8UQ8cZDHZ/Kp8EA4NTFR+FlJ53PK71pxGQyEgTh8GOOwAUXcZrmTa2E/XHg9fHL4gvuEw+lw+yMev9/vFNzLwnLu/q9CofDz7Wz+7kuDARMDHC5dBJazrrUoDL3moAQ7GRn8Nuj7NOhzdHefGvH3+NzOvrH+scil38fZM/n3+fu5Oy9dloTFAFQbFNqNhHWt+1uauYRGDUVh2IIPpAvFTV1UQai6UAQR37rxLboQBmFWBRFcmIV4vfeO4cbcJCCEkNCQEvNAYqZpnAFnJA7o1KGiuKhCx8c4+MKNKx8rUUEUXXiqVBxRW/RP1l8u//nPCZw7Pz8paJC8IJyMw7EenI6VuWYpuoZwqzFwrFkbHnz04cILQRAKhwuFoXwO0tmBnbB0/qyOtcKySWx+6LRw5+5YsTgWqZHnOYpklI36QP/o6LFGWHfteuv5rXtABiaoC4qd+0mH9y+DDP+stZNcobDvbiUqqUGFe14SIb+caA3ADoSByRVqKNAs4oU7wun8vsOQIXg6rVjbyYWJAdhcriC8ujxWKkXETL049j2HJwk+fqA52LaUqoWxpomayHSl9PoO2AE56NT+LpgSv2jREiCfLjy5XUq8Uul9lLA69VLyPnL7+4fPBJRibNkQOgDrGlX07P5BYejHcSejsWRRJ/V7MoaEl7efeVrmOdFbRlpqWoorlbB5rNbgvoghHUGg4sDVqhINdFmNrhUK+X0TbkDNvvMhEb9b6J0++Hn8ihekSblSkoKQpF5UedCsjT8oEwNqaKHAFankqgFXMORb9e7uE4aADOCub7HrmjP7tyvIBffPDj6NxadXs/cmb9imE0Wt2vB4vUw0SeKGSrErYmy6oSFaooVE7dOne4UhqOGEcmD4grl/WJr2DQ5+qVyvjV48F4YDzEyiD83apVbZkETMmBjoyMVKQFBYrFoupppeTsweIQ+RgwTngPvHRW/3jtH4wujNU+eap061GSmx48OXWolpiBKlTCsaTBU1V0LuiA1fwlXux2l0R4A45+DNLfjLpr57Z/T8Zv8J8fzNgbZYds41J7iMUqQZyHKRj6kUilwOXWZQJDHHiirfzYD/w9+4QF6xsVY7+uHq40bbTB+NQt1MjVI4sM9CDF4zXDeRSYsiRYTqsey8e32tkAPuvDmzplj+r9vUfyR7emggTFq18UfAQkiTNOaILvMzomGsGrGBNMpMHztl+93r1wUYL0tmTn2ltXdL+wOMHBEfu3SWO2CuYRiYp0Wb+cigkqoin0FMKEIiT9TKx56uQtd86IuptX7Xhi/ttnTm0rCcmplJCTElSXJdRGydM10U/bgqy7ZtYSVW4jc91xauhT6elvZsDUcePayNJGlGSEZ8h3CtrqR8RIotwpU4lSi0ty3Lju987FkO82y66l635cb4ETiq6cTQdQTp1HY9LyyaMiIZ000qKbLs+w6Xt+/uqNrUfqzbpBJKTHCYMcQyxTW4Y48QX06zqqwruqRLxOdbV3aEbHroVb1LGdIl6ngEOaiocd0KTcSJzmm1Kvscre5d1T3jX9S9eGXv0jjmDlFUItpOKjUga8TyTFlnq3tXLgbsP2p29+IVfZs3ICSTDHPPasgO4062ek0fUCeT+x/wVSv6ejevWbrU3rhtTW/filXTgX4FuH02E47jzHIAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/@iso/assets/styles/constants.js":
/*!**********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/assets/styles/constants.js ***!
  \**********************************************************************************************/
/*! exports provided: colors, grid, borderRadius, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
const colors = {
  blue: {
    deep: 'rgb(0, 121, 191)',
    light: 'lightblue',
    lighter: '#d9fcff',
    soft: '#E6FCFF'
  },
  black: '#4d4d4d',
  shadow: 'rgba(0,0,0,0.2)',
  grey: {
    darker: '#C1C7D0',
    dark: '#E2E4E6',
    medium: '#DFE1E5',
    N30: '#EBECF0',
    light: '#F4F5F7'
  },
  green: 'rgb(185, 244, 188)',
  white: 'white',
  purple: 'rebeccapurple',
  orange: '#FF991F'
};
const grid = 8;
const borderRadius = 2;
const rowStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap'
};
const colStyle = {
  marginBottom: '16px'
};
const gutter = 16;
const basicStyle = {
  rowStyle,
  colStyle,
  gutter
};
/* harmony default export */ __webpack_exports__["default"] = (basicStyle);

/***/ }),

/***/ "../../node_modules/@iso/components/Cart/SingleCartModal.js":
/*!******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Cart/SingleCartModal.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleCartModal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleCartModal.style */ "../../node_modules/@iso/components/Cart/SingleCartModal.style.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Cart/SingleCartModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  price,
  quantity,
  image,
  objectID,
  cancelQuantity,
  _highlightResult
}) {
  return __jsx(_SingleCartModal_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "isoCartItems",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "isoItemImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    alt: "#",
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "isoCartDetails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _highlightResult.name.value)), __jsx("p", {
    className: "isoItemPriceQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "$"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, price.toFixed(2)), __jsx("span", {
    className: "itemMultiplier",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "X"), __jsx("span", {
    className: "isoItemQuantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, quantity))), __jsx("a", {
    className: "isoItemRemove",
    onClick: () => cancelQuantity(objectID),
    href: "#!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("i", {
    className: "ion-android-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
});

/***/ }),

/***/ "../../node_modules/@iso/components/Cart/SingleCartModal.style.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Cart/SingleCartModal.style.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarCartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SingleCartModalstyle__TopbarCartWrapper",
  componentId: "sc-11nst29-0"
})(["width:100%;display:flex;align-items:center;padding:15px 30px;flex-shrink:0;position:relative;border-bottom:1px solid ", ";", ";.isoItemImage{width:50px;height:50px;flex-shrink:0;display:flex;align-items:center;justify-content:center;img{width:100%;height:100%;object-fit:cover;}}.isoCartDetails{width:100%;display:flex;padding:", ";flex-direction:column;text-align:", ";h3{margin:0 0 5px;line-height:1;a{font-size:13px;font-weight:500;color:", ";line-height:1.3;text-decoration:none;}}p{display:flex;margin:0;span{font-size:12px;font-weight:400;color:", ";line-height:1.2;&.itemMultiplier{padding:0 3px;}}}}.isoItemRemove{position:absolute;right:", ";left:", ";font-size:13px;font-weight:500;color:", " !important;opacity:0;", ";}&:hover{background-color:", ";.isoItemRemove{opacity:1;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '0 20px 0 0' : '0 0 0 20px', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), props => props['data-rtl'] === 'rtl' ? 'inherit' : '15px', props => props['data-rtl'] === 'rtl' ? '15px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarCartWrapper));

/***/ }),

/***/ "../../node_modules/@iso/components/Feedback/Modal.js":
/*!************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/Feedback/Modal.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style/css */ "../../node_modules/antd/lib/modal/style/css.js");
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a);

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

/***/ "../../node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js":
/*!*************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_intlMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  config,
  changeTheme,
  selectedId
}) => {
  const {
    id,
    label,
    options
  } = config;
  return __jsx("div", {
    className: "themeSwitchBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_utility_intlMessages__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("div", {
    className: "themeSwitchBtnWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, options.map(option => {
    const {
      themeName,
      buttonColor
    } = option;

    const onClick = () => {
      changeTheme(id, themeName);
    };

    const customClass = themeName === selectedId ? 'selectedTheme' : '';
    return __jsx("button", {
      type: "button",
      key: themeName,
      onClick: onClick,
      className: customClass,
      style: {
        backgroundColor: buttonColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    });
  })));
});

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

/***/ "../../node_modules/@iso/components/uielements/form.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/form.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form/style/css */ "../../node_modules/antd/lib/form/style/css.js");
/* harmony import */ var antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a);

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

/***/ "../../node_modules/@iso/components/uielements/menu.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/menu.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "../../node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a);

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

/***/ "../../node_modules/@iso/components/uielements/progress.js":
/*!*****************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/progress.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_progress_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/progress/style/css */ "../../node_modules/antd/lib/progress/style/css.js");
/* harmony import */ var antd_lib_progress_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/progress */ "antd/lib/progress");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_progress_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/progress.style */ "../../node_modules/@iso/components/uielements/styles/progress.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const WDProgress = Object(_styles_progress_style__WEBPACK_IMPORTED_MODULE_2__["default"])(antd_lib_progress__WEBPACK_IMPORTED_MODULE_1___default.a);
const isoProgress = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDProgress);
/* harmony default export */ __webpack_exports__["default"] = (isoProgress);

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

/***/ "../../node_modules/@iso/components/uielements/styles/progress.style.js":
/*!******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/styles/progress.style.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const AntProgress = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "progressstyle__AntProgress",
  componentId: "i6jinq-0"
})(["&.ant-progress-line{.ant-progress-outer{padding-right:calc(2em + 16px);margin-right:calc(-2em - 16px);}.ant-progress-text{text-align:", ";margin:", ";}}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', props => props['data-rtl'] === 'rtl' ? '0 0.75em 0 0' : '0 0 0 0.75em');

/* harmony default export */ __webpack_exports__["default"] = (AntProgress);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/switch.style.js":
/*!****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/styles/switch.style.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);



const AntSwitch = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "switchstyle__AntSwitch",
  componentId: "t6blly-0"
})(["&.ant-switch-checked{border-color:", ";background-color:", ";}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));

/* harmony default export */ __webpack_exports__["default"] = (AntSwitch);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/styles/tab.style.js":
/*!*************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/styles/tab.style.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const AntTab = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "tabstyle__AntTab",
  componentId: "zxh90w-0"
})(["&.ant-tabs{&:not(.ant-tabs-vertical){> .ant-tabs-content-animated{display:", ";}}.ant-tabs-nav{.ant-tabs-tab{margin:", ";.anticon:not(.anticon-close){margin:", ";&.anticon-close{right:", ";;left:", ";;}}}}.ant-tabs-tab-prev{left:", ";right ", ";transform:", ";}.ant-tabs-tab-next{left:", ";right ", ";transform:", ";}&.ant-tabs-vertical{.ant-tabs-tab-prev,.ant-tabs-tab-next{transform:rotate(0);}}}"], props => props['data-rtl'] === 'rtl' ? 'block' : 'flex', props => props['data-rtl'] === 'rtl' ? '0 0 0 24px' : '0 24px 0 0', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', props => props['data-rtl'] === 'rtl' ? 'inherit' : '2px', props => props['data-rtl'] === 'rtl' ? '2px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '2px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '2px', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)');

/* harmony default export */ __webpack_exports__["default"] = (AntTab);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/switch.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/switch.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/switch/style/css */ "../../node_modules/antd/lib/switch/style/css.js");
/* harmony import */ var antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/switch */ "antd/lib/switch");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_switch_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/switch.style */ "../../node_modules/@iso/components/uielements/styles/switch.style.js");



const Switches = Object(_styles_switch_style__WEBPACK_IMPORTED_MODULE_2__["default"])(antd_lib_switch__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Switches);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/table.js":
/*!**************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/table.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style/css */ "../../node_modules/antd/lib/table/style/css.js");
/* harmony import */ var antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "../../node_modules/@iso/components/uielements/tabs.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/uielements/tabs.js ***!
  \*************************************************************************************************/
/*! exports provided: default, TabPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "../../node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_tab_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/tab.style */ "../../node_modules/@iso/components/uielements/styles/tab.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const WDTabs = Object(_styles_tab_style__WEBPACK_IMPORTED_MODULE_2__["default"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a);
const TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane;
const isoTabs = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(WDTabs);
/* harmony default export */ __webpack_exports__["default"] = (isoTabs);


/***/ }),

/***/ "../../node_modules/@iso/components/utility/Logo.next.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/Logo.next.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/Logo.next.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function ({
  collapsed
}) {
  return __jsx("div", {
    className: "isoLogoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, collapsed ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("i", {
    className: _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))) : __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _iso_config_site_config__WEBPACK_IMPORTED_MODULE_2__["default"].siteName))));
});

/***/ }),

/***/ "../../node_modules/@iso/components/utility/intlMessages.js":
/*!******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/intlMessages.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/intlMessages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "../../node_modules/@iso/components/utility/layoutWrapper.js":
/*!*******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/layoutWrapper.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layoutWrapper_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layoutWrapper.style */ "../../node_modules/@iso/components/utility/layoutWrapper.style.js");

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/layoutWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(_layoutWrapper_style__WEBPACK_IMPORTED_MODULE_2__["LayoutContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: props.className != null ? `${props.className} isoLayoutContentWrapper` : 'isoLayoutContentWrapper'
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), props.children));

/***/ }),

/***/ "../../node_modules/@iso/components/utility/layoutWrapper.style.js":
/*!*************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/components/utility/layoutWrapper.style.js ***!
  \*************************************************************************************************************/
/*! exports provided: LayoutContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutContentWrapper", function() { return LayoutContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LayoutContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "layoutWrapperstyle__LayoutContentWrapper",
  componentId: "qhwnm2-0"
})(["padding:40px 20px;display:flex;flex-flow:row wrap;overflow:hidden;@media only screen and (max-width:767px){padding:50px 20px;}@media (max-width:580px){padding:15px;}"]);


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

/***/ "../../node_modules/@iso/config/site.config.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/config/site.config.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  footerText: `Isomorphic @ ${new Date().getFullYear()} Created by RedQ, Inc`,
  enableAnimatedRoute: false,
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1'
  },
  dashboard: '/dashboard'
});

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

/***/ "../../node_modules/@iso/containers/Charts/Charts.styles.js":
/*!******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Charts/Charts.styles.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");



const ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Chartsstyles__ChartWrapper",
  componentId: "sc-5wa9ca-0"
})(["display:flex;flex-direction:column;align-items:center;.isoChartControl{display:flex;align-items:center;margin-left:", ";margin-right:", ";margin-bottom:20px;span{font-size:13px;color:", ";font-weight:400;margin-right:", ";margin-left:", ";}button{border:1px solid ", ";padding:0 10px;border-radius:0;position:relative;span{margin:0;}&:last-child{margin-left:", ";margin-right:", ";}&:hover{color:", ";border-color:", ";z-index:1;span{color:", ";}}}}"], props => props['data-rtl'] === 'rtl' ? 'inherit' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), props => props['data-rtl'] === 'rtl' ? 'inherit' : '15px', props => props['data-rtl'] === 'rtl' ? '15px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(ChartWrapper));

/***/ }),

/***/ "../../node_modules/@iso/containers/Charts/GoogleChart/config.js":
/*!***********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Charts/GoogleChart/config.js ***!
  \***********************************************************************************************************/
/*! exports provided: BarChart, lineChart, BubbleChart, Histogram, ScatterChart, AreaChart, CandlestickChart, ComboChart, DonutChart, SteppedAreaChart, Table, Timeline, TreeMap, TrendLines, Waterfall, Gantt, WordTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChart", function() { return lineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChart", function() { return BubbleChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Histogram", function() { return Histogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterChart", function() { return ScatterChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChart", function() { return AreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandlestickChart", function() { return CandlestickChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboChart", function() { return ComboChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChart", function() { return DonutChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedAreaChart", function() { return SteppedAreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMap", function() { return TreeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendLines", function() { return TrendLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waterfall", function() { return Waterfall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gantt", function() { return Gantt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTree", function() { return WordTree; });
const width = '100%';
const height = '400px';
const BarChart = {
  title: 'BarChart',
  key: 'BarChart',
  chartType: 'BarChart',
  width,
  height,
  data: [['Year', 'Trafic', {
    role: 'style'
  }], ['2010', 10000, 'fill-color: #48A6F2; fill-opacity: 0.4'], ['2012', 21500, 'fill-color: #f64744; fill-opacity: 0.4'], ['2014', 56598, 'fill-color: #ffbf00; fill-opacity: 0.4'], ['2016', 85256, 'fill-color: #511E78; fill-opacity: 0.4']],
  options: {
    title: 'Visitor statistics from 2010 to 2016',
    titleTextStyle: {
      color: '#788195'
    },
    bar: {
      groupWidth: '95%'
    },
    legend: {
      position: 'none'
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  },
  chartEvents: [{
    eventName: 'onmouseover'
  }]
};
/* * * * * * * * * * * * * * * * * * * *
              Line Charts
* * * * * * * * * * * * * * * * * * * */

const lineChart = {
  title: 'Line Chart',
  chartType: 'LineChart',
  key: 'LineChart',
  width,
  height,
  columns: [{
    label: 'time',
    type: 'number'
  }, {
    label: 'Air Passengers',
    type: 'number'
  }],
  rows: [[1949, 11], [1949.08333333333, 11], [1949.16666666667, 13], [1949.25, 12], [1949.33333333333, 12], [1949.41666666667, 13], [1949.5, 14], [1949.58333333333, 14], [1949.66666666667, 136], [1949.75, 119], [1949.83333333333, 104], [1949.91666666667, 118], [1950, 115], [1950.08333333333, 126], [1950.16666666667, 141], [1950.25, 135], [1950.33333333333, 125], [1950.41666666667, 149], [1950.5, 170], [1950.58333333333, 170], [1950.66666666667, 158], [1950.75, 133], [1950.83333333333, 114], [1950.91666666667, 140], [1951, 145], [1951.08333333333, 150], [1951.16666666667, 178], [1951.25, 163], [1951.33333333333, 172], [1951.41666666667, 178], [1951.5, 199], [1951.58333333333, 199], [1951.66666666667, 184], [1951.75, 162], [1951.83333333333, 146], [1951.91666666667, 166], [1952, 171], [1952.08333333333, 180], [1952.16666666667, 193], [1952.25, 181], [1952.33333333333, 183], [1952.41666666667, 218], [1952.5, 230], [1952.58333333333, 242], [1952.66666666667, 209], [1952.75, 191], [1952.83333333333, 172], [1952.91666666667, 194], [1953, 196], [1953.08333333333, 196], [1953.16666666667, 236], [1953.25, 235], [1953.33333333333, 229], [1953.41666666667, 243], [1953.5, 264], [1953.58333333333, 272], [1953.66666666667, 237], [1953.75, 211], [1953.83333333333, 180], [1953.91666666667, 201], [1954, 204], [1954.08333333333, 188], [1954.16666666667, 235], [1954.25, 227], [1954.33333333333, 234], [1954.41666666667, 264], [1954.5, 302], [1954.58333333333, 293], [1954.66666666667, 259], [1954.75, 229], [1954.83333333333, 203], [1954.91666666667, 229], [1955, 242], [1955.08333333334, 233], [1955.16666666667, 267], [1955.25, 269], [1955.33333333334, 270], [1955.41666666667, 315], [1955.5, 364], [1955.58333333334, 347], [1955.66666666667, 312], [1955.75, 274], [1955.83333333334, 237], [1955.91666666667, 278], [1956, 284], [1956.08333333334, 277], [1956.16666666667, 317], [1956.25, 313], [1956.33333333334, 318], [1956.41666666667, 374], [1956.5, 413], [1956.58333333334, 405], [1956.66666666667, 355], [1956.75, 306], [1956.83333333334, 271], [1956.91666666667, 306], [1957, 315], [1957.08333333334, 301], [1957.16666666667, 356], [1957.25, 348], [1957.33333333334, 355], [1957.41666666667, 422], [1957.5, 465], [1957.58333333334, 467], [1957.66666666667, 404], [1957.75, 347], [1957.83333333334, 305], [1957.91666666667, 336], [1958, 340], [1958.08333333334, 318], [1958.16666666667, 362], [1958.25, 348], [1958.33333333334, 363], [1958.41666666667, 435], [1958.5, 491], [1958.58333333334, 505], [1958.66666666667, 404], [1958.75, 359], [1958.83333333334, 310], [1958.91666666667, 337], [1959, 360], [1959.08333333334, 342], [1959.16666666667, 406], [1959.25, 396], [1959.33333333334, 420], [1959.41666666667, 472], [1959.5, 548], [1959.58333333334, 559], [1959.66666666667, 463], [1959.75, 407], [1959.83333333334, 362], [1959.91666666667, 405], [1960, 417], [1960.08333333334, 391], [1960.16666666667, 419], [1960.25, 461], [1960.33333333334, 472], [1960.41666666667, 535], [1960.5, 622], [1960.58333333334, 606], [1960.66666666667, 508], [1960.75, 461], [1960.83333333334, 390], [1960.91666666667, 432]],
  options: {
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Time',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Air Passengers',
      titleTextStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2'],
    dataOpacity: 1.0,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Bubble Charts
* * * * * * * * * * * * * * * * * * * */

const BubbleChart = {
  title: 'Bubble Chart',
  key: 'BubbleChart',
  chartType: 'BubbleChart',
  width,
  height,
  data: [['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'], ['CAN', 80.66, 1.67, 'North America', 33739900], ['DEU', 79.84, 1.36, 'Europe', 81902307], ['DNK', 78.6, 1.84, 'Europe', 5523095], ['EGY', 72.73, 2.78, 'Middle East', 79716203], ['GBR', 80.05, 2, 'Europe', 61801570], ['IRN', 72.49, 1.7, 'Middle East', 73137148], ['IRQ', 68.09, 4.77, 'Middle East', 31090763], ['ISR', 81.55, 2.96, 'Middle East', 7485600], ['RUS', 68.6, 1.54, 'Europe', 141850000], ['USA', 78.09, 2.05, 'North America', 307007000]],
  options: {
    title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Life Expectancy',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Fertility Rate',
      titleTextStyle: {
        color: '#788195'
      }
    },
    bubble: {
      opacity: 0.6,
      stroke: '#ffffff',
      textStyle: {
        fontSize: 11,
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2', '#F55F82', '#ffbf00'],
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Histogram Charts
* * * * * * * * * * * * * * * * * * * */

const Histogram = {
  title: 'Histogram',
  key: 'Histogram',
  chartType: 'Histogram',
  width,
  height,
  data: [['Dinosaur', 'Length'], ['Acrocanthosaurus (top-spined lizard)', 12.2], ['Albertosaurus (Alberta lizard)', 9.1], ['Allosaurus (other lizard)', 12.2], ['Apatosaurus (deceptive lizard)', 22.9], ['Archaeopteryx (ancient wing)', 0.9], ['Argentinosaurus (Argentina lizard)', 36.6], ['Baryonyx (heavy claws)', 9.1], ['Brachiosaurus (arm lizard)', 30.5], ['Ceratosaurus (horned lizard)', 6.1], ['Coelophysis (hollow form)', 2.7], ['Compsognathus (elegant jaw)', 0.9], ['Deinonychus (terrible claw)', 2.7], ['Diplodocus (double beam)', 27.1], ['Dromicelomimus (emu mimic)', 3.4], ['Gallimimus (fowl mimic)', 5.5], ['Mamenchisaurus (Mamenchi lizard)', 21], ['Megalosaurus (big lizard)', 7.9], ['Microvenator (small hunter)', 1.2], ['Ornithomimus (bird mimic)', 4.6], ['Oviraptor (egg robber)', 1.5], ['Plateosaurus (flat lizard)', 7.9], ['Sauronithoides (narrow-clawed lizard)', 2], ['Seismosaurus (tremor lizard)', 45.7], ['Spinosaurus (spiny lizard)', 12.2], ['Supersaurus (super lizard)', 30.5], ['Tyrannosaurus (tyrant lizard)', 15.2], ['Ultrasaurus (ultra lizard)', 30.5], ['Velociraptor (swift robber)', 1.8]],
  options: {
    title: 'Lengths of dinosaurs, in meters',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#511E78'],
    dataOpacity: 0.6,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Scatter Charts
* * * * * * * * * * * * * * * * * * * */

const ScatterChart = {
  title: 'Scatter Chart',
  key: 'ScatterChart',
  chartType: 'ScatterChart',
  width,
  height,
  data: [['Age', 'Weight'], [8, 12], [4, 10.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7], [8, 11], [12, 8], [9.5, 14], [6.5, 12]],
  options: {
    title: 'Age vs. Weight Comparison',
    titleTextStyle: {
      color: '#788195'
    },
    hAxis: {
      title: 'Age',
      titleTextStyle: {
        color: '#788195'
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      title: 'Weight',
      titleTextStyle: {
        color: '#788195'
      },
      minValue: 0,
      maxValue: 15,
      textStyle: {
        color: '#788195'
      }
    },
    legend: 'none',
    colors: ['#42A5F5'],
    dataOpacity: 0.8,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Area Charts
* * * * * * * * * * * * * * * * * * * */

const AreaChart = {
  title: 'Area Chart',
  key: 'AreaChart',
  chartType: 'AreaChart',
  width,
  height,
  data: [['Year', 'Sales', 'Expenses'], ['2013', 1000, 400], ['2014', 1170, 460], ['2015', 660, 1120], ['2016', 1030, 540]],
  options: {
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    colors: ['#48A6F2', '#511E78'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Candle Stick Charts
* * * * * * * * * * * * * * * * * * * */

const CandlestickChart = {
  title: 'Candlestick Chart',
  key: 'CandlestickChart',
  chartType: 'CandlestickChart',
  width,
  height,
  data: [['DAY', 'val1', 'val2', 'val3', 'val4'], ['Mon', 20, 28, 38, 45], ['Tue', 31, 38, 55, 66], ['Wed', 50, 55, 77, 80], ['Thu', 77, 77, 66, 50], ['Fri', 68, 66, 22, 15]],
  options: {
    title: 'Visitors Per Day',
    titleTextStyle: {
      color: '#788195'
    },
    legend: 'none',
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#48A6F2'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Combo Charts
* * * * * * * * * * * * * * * * * * * */

const ComboChart = {
  title: 'Combo Chart',
  key: 'ComboChart',
  chartType: 'ComboChart',
  width,
  height,
  data: [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2004/05', 165, 938, 522, 998, 450, 614.6], ['2005/06', 135, 1120, 599, 1268, 288, 682], ['2006/07', 157, 1167, 587, 807, 397, 623], ['2007/08', 139, 1110, 615, 968, 215, 609.4], ['2008/09', 136, 691, 629, 1026, 366, 569.6]],
  options: {
    title: 'Monthly Coffee Production by Country',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Cups',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Month',
      titleTextStyle: {
        color: '#788195'
      }
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#00b16a', '#ff6384', '#511E78', '#01C0C8', '#ffbf00', '#48A6F2'],
    dataOpacity: 0.6,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Donut Charts
* * * * * * * * * * * * * * * * * * * */

const DonutChart = {
  title: 'Donut Chart',
  key: 'DonutChart',
  chartType: 'PieChart',
  width,
  height,
  data: [['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]],
  options: {
    title: 'My Daily Activities',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#ffffff'
    },
    is3D: true,
    colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Stepped Area Charts
* * * * * * * * * * * * * * * * * * * */

const SteppedAreaChart = {
  title: 'Stepped Area Chart',
  key: 'SteppedAreaChart',
  chartType: 'SteppedAreaChart',
  width,
  height,
  data: [['Director (Year)', 'Rotten Tomatoes', 'IMDB'], ['Alfred Hitchcock (1935)', 8.4, 7.9], ['Ralph Thomas (1959)', 6.9, 6.5], ['Don Sharp (1978)', 6.5, 6.4], ['James Hawes (2008)', 4.4, 6.2]],
  options: {
    title: 'The decline of The 39 Steps',
    titleTextStyle: {
      color: '#788195'
    },
    legend: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    colors: ['#511E78', '#F55F82'],
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Accumulated Rating',
      titleTextStyle: {
        color: '#788195'
      }
    },
    isStacked: true,
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Table
* * * * * * * * * * * * * * * * * * * */

const Table = {
  title: 'Table',
  key: 'Table',
  chartType: 'Table',
  chartPackages: ['table'],
  width,
  height,
  columns: [{
    type: 'string',
    label: 'Name'
  }, {
    type: 'number',
    label: 'Salary'
  }, {
    type: 'boolean',
    label: 'Full Time Employee'
  }],
  rows: [['Mike', {
    v: 10000,
    f: '$10,000'
  }, true], ['Jim', {
    v: 8000,
    f: '$8,000'
  }, false], ['Alice', {
    v: 12500,
    f: '$12,500'
  }, true], ['Bob', {
    v: 7000,
    f: '$7,000'
  }, true]]
};
/* * * * * * * * * * * * * * * * * * * *
            Timeline Charts
* * * * * * * * * * * * * * * * * * * */

const Timeline = {
  title: 'Timeline',
  key: 'Timeline',
  chartType: 'Timeline',
  chartPackage: 'timeline',
  width,
  height,
  columns: [{
    id: 'Term',
    type: 'string'
  }, {
    id: 'President',
    type: 'string'
  }, {
    id: 'Start',
    type: 'date'
  }, {
    id: 'End',
    type: 'date'
  }],
  rows: [['1', 'Washington', new Date('1789-04-29T18:00:00.000Z'), new Date('1797-03-03T18:00:00.000Z')], ['2', 'Adams', new Date('1797-03-03T18:00:00.000Z'), new Date('1801-03-03T18:00:00.000Z')], ['3', 'Jefferson', new Date('1801-03-03T18:00:00.000Z'), new Date('1809-03-03T18:00:00.000Z')]],
  options: {
    colors: ['#ffbf00', '#F55F82', '#48A6F2'],
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Tree Map
* * * * * * * * * * * * * * * * * * * */

const TreeMap = {
  title: 'TreeMap',
  key: 'TreeMap',
  chartType: 'TreeMap',
  chartPackages: ['treemap'],
  width,
  height,
  data: [['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'], ['Global', null, 0, 0], ['America', 'Global', 0, 0], ['Europe', 'Global', 0, 0], ['Asia', 'Global', 0, 0], ['Australia', 'Global', 0, 0], ['Africa', 'Global', 0, 0], ['Brazil', 'America', 11, 10], ['USA', 'America', 52, 31], ['Mexico', 'America', 24, 12], ['Canada', 'America', 16, -23], ['France', 'Europe', 42, -11], ['Germany', 'Europe', 31, -2], ['Sweden', 'Europe', 22, -13], ['Italy', 'Europe', 17, 4], ['UK', 'Europe', 21, -5], ['China', 'Asia', 36, 4], ['Japan', 'Asia', 20, -12], ['India', 'Asia', 40, 63], ['Laos', 'Asia', 4, 34], ['Mongolia', 'Asia', 1, -5], ['Israel', 'Asia', 12, 24], ['Iran', 'Asia', 18, 13], ['Pakistan', 'Asia', 11, -52], ['Egypt', 'Africa', 21, 0], ['S. Africa', 'Africa', 30, 43], ['Sudan', 'Africa', 12, 2], ['Congo', 'Africa', 10, 12], ['Zaire', 'Africa', 8, 10]],
  options: {
    minColor: '#511E78',
    midColor: '#C8E4FB',
    maxColor: '#48A6F2'
  }
};
/* * * * * * * * * * * * * * * * * * * *
          Trend Lines Charts
* * * * * * * * * * * * * * * * * * * */

const TrendLines = {
  title: 'TrendLines',
  key: 'TrendLines',
  chartType: 'ScatterChart',
  width,
  height,
  data: [['Diameter', 'Age'], [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]],
  options: {
    title: 'Age of sugar maples vs. trunk diameter, in inches',
    titleTextStyle: {
      color: '#788195'
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Diameter',
      titleTextStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      },
      title: 'Age',
      titleTextStyle: {
        color: '#788195'
      }
    },
    legend: 'none',
    trendlines: {
      0: {
        type: 'exponential',
        colors: '#48A6F2'
      }
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
            Water Fall Charts
* * * * * * * * * * * * * * * * * * * */

const Waterfall = {
  title: 'Waterfall',
  key: 'Waterfall',
  chartType: 'CandlestickChart',
  width,
  height,
  data: [['DAY', 'val1', 'val2', 'val3', 'val4'], ['Mon', 20, 28, 38, 45], ['Tue', 31, 38, 55, 66], ['Wed', 50, 55, 77, 80], ['Thu', 77, 77, 66, 50], ['Fri', 68, 66, 22, 15]],
  options: {
    legend: 'none',
    bar: {
      groupWidth: '100%'
    },
    hAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    vAxis: {
      textStyle: {
        color: '#788195'
      }
    },
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true
    },
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    candlestick: {
      fallingColor: {
        strokeWidth: 0,
        fill: '#F55F82'
      },
      risingColor: {
        strokeWidth: 0,
        fill: '#48A6F2'
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Gantt Charts
* * * * * * * * * * * * * * * * * * * */

const Gantt = {
  title: 'Gantt',
  key: 'Gantt',
  chartType: 'Gantt',
  chartPackages: ['gantt'],
  width,
  height,
  columns: [{
    id: 'Task ID',
    type: 'string'
  }, {
    id: 'Task Name',
    type: 'string'
  }, {
    id: 'Start Date',
    type: 'date'
  }, {
    id: 'End Date',
    type: 'date'
  }, {
    id: 'Duration',
    type: 'number'
  }, {
    id: 'Percent Complete',
    type: 'number'
  }, {
    id: 'Dependencies',
    type: 'string'
  }],
  rows: [['Research', 'Find sources', new Date('2014-12-31T18:00:00.000Z'), new Date('2015-01-04T18:00:00.000Z'), null, 100, null], ['Write', 'Write paper', null, new Date('2015-01-08T18:00:00.000Z'), 259200000, 25, 'Research,Outline'], ['Cite', 'Create bibliography', null, new Date('2015-01-06T18:00:00.000Z'), 86400000, 20, 'Research'], ['Complete', 'Hand in paper', null, new Date('2015-01-09T18:00:00.000Z'), 86400000, 0, 'Cite,Write'], ['Outline', 'Outline paper', null, new Date('2015-01-05T18:00:00.000Z'), 86400000, 100, 'Research']],
  options: {
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    gantt: {
      criticalPathEnabled: false,
      // Critical path arrows will be the same as other arrows.
      arrow: {
        angle: 100,
        width: 2,
        color: '#9678AE',
        radius: 0
      }
    }
  }
};
/* * * * * * * * * * * * * * * * * * * *
              Word Tree Charts
* * * * * * * * * * * * * * * * * * * */

const WordTree = {
  title: 'WordTree',
  key: 'WordTree',
  chartType: 'WordTree',
  chartPackages: ['wordtree'],
  width,
  height,
  data: [['Phrases'], ['cats are better than dogs'], ['cats eat kibble'], ['cats are better than hamsters'], ['cats are awesome'], ['cats are people too'], ['cats eat mice'], ['cats meowing'], ['cats in the cradle'], ['cats eat mice'], ['cats in the cradle lyrics'], ['cats eat kibble'], ['cats for adoption'], ['cats are family'], ['cats eat mice'], ['cats are better than kittens'], ['cats are evil'], ['cats are weird'], ['cats eat mice']],
  options: {
    tooltip: {
      textStyle: {
        color: '#788195'
      }
    },
    wordtree: {
      format: 'implicit',
      word: 'cats'
    }
  }
};


/***/ }),

/***/ "../../node_modules/@iso/containers/Charts/Recharts/Charts/StackedAreaChart.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Charts/Recharts/Charts/StackedAreaChart.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Charts_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Charts.styles */ "../../node_modules/@iso/containers/Charts/Charts.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Charts/Recharts/Charts/StackedAreaChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      datas,
      width,
      height,
      colors
    } = this.props;
    return __jsx(_Charts_styles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "isoChartWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
      width: width,
      height: height,
      data: datas,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "name",
      stroke: colors[3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
      stroke: colors[3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "uv",
      stackId: "1",
      stroke: colors[0],
      fill: colors[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "pv",
      stackId: "1",
      stroke: colors[1],
      fill: colors[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "amt",
      stackId: "1",
      stroke: colors[2],
      fill: colors[2],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })));
  }

});

/***/ }),

/***/ "../../node_modules/@iso/containers/Charts/Recharts/config.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Charts/Recharts/config.js ***!
  \********************************************************************************************************/
/*! exports provided: SimpleLineCharts, CustomizedDotLineChart, SimpleBarChart, MixBarChart, CustomShapeBarChart, BiaxialBarChart, SimpleAreaChart, StackedAreaChart, LineBarAreaComposedChart, CustomActiveShapePieChart, SpecifiedDomainRadarChart, SimpleRadialBarChart, LegendEffectOpacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLineCharts", function() { return SimpleLineCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedDotLineChart", function() { return CustomizedDotLineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBarChart", function() { return SimpleBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixBarChart", function() { return MixBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomShapeBarChart", function() { return CustomShapeBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiaxialBarChart", function() { return BiaxialBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleAreaChart", function() { return SimpleAreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedAreaChart", function() { return StackedAreaChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineBarAreaComposedChart", function() { return LineBarAreaComposedChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomActiveShapePieChart", function() { return CustomActiveShapePieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecifiedDomainRadarChart", function() { return SpecifiedDomainRadarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRadialBarChart", function() { return SimpleRadialBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendEffectOpacity", function() { return LegendEffectOpacity; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const width = 350;
const height = 350;
const colors = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'];
const datas = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];
const SimpleLineCharts = {
  componentName: 'SimpleLineCharts',
  key: 'SimpleLineCharts',
  title: 'Simple Line Charts',
  width,
  height,
  colors,
  datas
};
const CustomizedDotLineChart = {
  componentName: 'CustomizedDotLineChart',
  key: 'CustomizedDotLineChart',
  title: 'Customized Dot Line Chart',
  width,
  height,
  colors,
  datas: [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[0], {
    fillColor: '#48A6F2',
    svg: 'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[1], {
    fillColor: '#ff6384',
    svg: 'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[2], {
    fillColor: '#48A6F2',
    svg: 'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[3], {
    fillColor: '#ff6384',
    svg: 'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[4], {
    fillColor: '#48A6F2',
    svg: 'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[5], {
    fillColor: '#ff6384',
    svg: 'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z'
  }), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, datas[6], {
    fillColor: '#48A6F2',
    svg: 'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z'
  })]
};
const SimpleBarChart = {
  componentName: 'SimpleBarChart',
  key: 'SimpleBarChart',
  title: 'Simple Bar Chart',
  width,
  height,
  colors,
  datas
};
const MixBarChart = {
  componentName: 'MixBarChart',
  key: 'MixBarChart',
  title: 'Mix Bar Chart',
  width,
  height,
  colors,
  datas: [{
    name: 'Page A',
    uv: 4000,
    female: 2400,
    male: 2400
  }, {
    name: 'Page B',
    uv: 3000,
    female: 1398,
    male: 2210
  }, {
    name: 'Page C',
    uv: 2000,
    female: 9800,
    male: 2290
  }, {
    name: 'Page D',
    uv: 2780,
    female: 3908,
    male: 2000
  }, {
    name: 'Page E',
    uv: 1890,
    female: 4800,
    male: 2181
  }, {
    name: 'Page F',
    uv: 2390,
    female: 3800,
    male: 2500
  }, {
    name: 'Page G',
    uv: 3490,
    female: 4300,
    male: 2100
  }]
};
const CustomShapeBarChart = {
  componentName: 'CustomShapeBarChart',
  key: 'CustomShapeBarChart',
  title: 'Custom Shape Bar Chart',
  width,
  height,
  colors,
  datas: MixBarChart.datas
};
const BiaxialBarChart = {
  componentName: 'BiaxialBarChart',
  key: 'BiaxialBarChart',
  title: 'Biaxial Bar Chart',
  width,
  height,
  colors,
  datas
};
const SimpleAreaChart = {
  componentName: 'SimpleAreaChart',
  key: 'SimpleAreaChart',
  title: 'Simple Area Chart',
  width,
  height,
  colors,
  datas
};
const StackedAreaChart = {
  componentName: 'StackedAreaChart',
  key: 'StackedAreaChart',
  title: 'Stacked Area Chart',
  width,
  height,
  colors,
  datas
};
const LineBarAreaComposedChart = {
  componentName: 'LineBarAreaComposedChart',
  key: 'LineBarAreaComposedChart',
  title: 'Line Bar Area ComposedChart',
  width,
  height,
  colors,
  datas
};
const CustomActiveShapePieChart = {
  componentName: 'CustomActiveShapePieChart',
  key: 'CustomActiveShapePieChart',
  title: 'Custom Active Shape Pie Chart',
  width: 600,
  height,
  colors,
  dataKey: 'value',
  datas: [{
    name: 'Group A',
    value: 400
  }, {
    name: 'Group B',
    value: 300
  }, {
    name: 'Group C',
    value: 300
  }, {
    name: 'Group D',
    value: 200
  }]
};
const SpecifiedDomainRadarChart = {
  componentName: 'SpecifiedDomainRadarChart',
  key: 'SpecifiedDomainRadarChart',
  title: 'Specified Domain Radar Chart',
  width: 600,
  height: 500,
  colors,
  angle: 30,
  domain: [0, 150],
  cx: 300,
  cy: 250,
  outerRadius: 150,
  datas: [{
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150
  }, {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150
  }, {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150
  }, {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150
  }, {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150
  }, {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150
  }]
};
const SimpleRadialBarChart = {
  componentName: 'SimpleRadialBarChart',
  key: 'SimpleRadialBarChart',
  title: 'Simple Radial Bar Chart',
  width: 600,
  height: 300,
  datas: [{
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8'
  }, {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed'
  }, {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1'
  }, {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d'
  }, {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c'
  }, {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57'
  }, {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658'
  }]
};
const LegendEffectOpacity = {
  componentName: 'LegendEffectOpacity',
  key: 'LegendEffectOpacity',
  title: 'Legend Effect Opacity',
  width: 600,
  height,
  colors,
  datas
};


/***/ }),

/***/ "../../node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_redux_languageSwitcher_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/redux/languageSwitcher/actions */ "../../node_modules/@iso/redux/languageSwitcher/actions.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/containers/LanguageSwitcher/config.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  changeLanguage
} = _iso_redux_languageSwitcher_actions__WEBPACK_IMPORTED_MODULE_3__["default"];
function LanguageSwitcher() {
  const {
    language
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.LanguageSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return __jsx("div", {
    className: "themeSwitchBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "languageSwitcher.label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "themeSwitchBtnWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["default"].options.map(option => {
    const {
      languageId,
      icon
    } = option;
    const customClass = languageId === language.languageId ? 'selectedTheme languageSwitch' : 'languageSwitch';
    return __jsx("button", {
      type: "button",
      className: customClass,
      key: languageId,
      onClick: () => {
        dispatch(changeLanguage(languageId));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      src: icon,
      alt: "flag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/LanguageSwitcher/config.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/LanguageSwitcher/config.js ***!
  \*********************************************************************************************************/
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

/***/ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.js":
/*!************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/AntTables.js ***!
  \************************************************************************************************************/
/*! exports provided: default, TableViews, tableinfos, dataList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AntTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataList", function() { return dataList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/components/uielements/tabs */ "../../node_modules/@iso/components/uielements/tabs.js");
/* harmony import */ var _iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/utility/layoutWrapper */ "../../node_modules/@iso/components/utility/layoutWrapper.js");
/* harmony import */ var _Demo_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Demo.styles */ "../../node_modules/@iso/containers/Tables/AntTables/Demo.styles.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "../../node_modules/@iso/containers/Tables/data.js");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs */ "../../node_modules/@iso/containers/Tables/AntTables/configs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableinfos", function() { return _configs__WEBPACK_IMPORTED_MODULE_5__["tableinfos"]; });

/* harmony import */ var _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TableViews/TableViews */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/TableViews.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "TableViews", function() { return _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__; });
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/AntTables.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const dataList = new _data__WEBPACK_IMPORTED_MODULE_4__["default"](10);
function AntTable() {
  function renderTable(tableInfo) {
    let Component;

    switch (tableInfo.value) {
      case 'sortView':
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["SortView"];
        break;

      case 'filterView':
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["FilterView"];
        break;

      case 'editView':
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["EditView"];
        break;

      case 'groupView':
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["GroupView"];
        break;

      case 'customizedView':
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["CustomizedView"];
        break;

      default:
        Component = _TableViews_TableViews__WEBPACK_IMPORTED_MODULE_6__["SimpleView"];
    }

    return __jsx(Component, {
      tableInfo: tableInfo,
      dataList: dataList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }

  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_Demo_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "isoLayoutContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "isoTableDisplayTab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, _configs__WEBPACK_IMPORTED_MODULE_5__["tableinfos"].map(tableInfo => __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tab: tableInfo.title,
    key: tableInfo.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, renderTable(tableInfo))))));
}


/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js ***!
  \*******************************************************************************************************************/
/*! exports provided: CustomizedTableWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizedTableWrapper", function() { return CustomizedTableWrapper; });
/* harmony import */ var _iso_components_uielements_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/components/uielements/table */ "../../node_modules/@iso/components/uielements/table.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");





const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_iso_components_uielements_table__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "AntTablesstyles__TableWrapper",
  componentId: "sc-14sf9ud-0"
})(["overflow:hidden;overflow-x:auto;background-color:#ffffff;.ant-table-body{overflow-x:auto;}.ant-table-thead > tr > th{color:", ";font-size:13px;background-color:", ";border-bottom:0;&.ant-table-column-sort{background:", ";margin:", ";}}.ant-table-thead > tr > th,.ant-table-tbody > tr > td{padding:16px 15px;white-space:nowrap;text-align:", ";p{margin-bottom:0;}}.ant-table-tbody > tr > td{font-size:12px;color:", ";border-bottom:1px solid ", ";a{color:", ";", ";&:hover{color:", ";}}}.ant-table-thead > tr.ant-table-row-hover > td,.ant-table-tbody > tr.ant-table-row-hover > td,.ant-table-thead > tr:hover > td,.ant-table-tbody > tr:hover > td{background-color:transparent;}.ant-table-bordered .ant-table-thead > tr > th{border-bottom:1px solid ", ";}.ant-table-bordered .ant-table-thead > tr > th,.ant-table-bordered .ant-table-tbody > tr > td{border-right:1px solid ", ";}.ant-table-pagination{float:", ";}.ant-pagination-prev,.ant-pagination-next{border:1px solid ", ";}.ant-pagination-disabled,.ant-pagination-prev.ant-pagination-disabled,.ant-pagination-next.ant-pagination-disabled{border:1px solid ", ";a{border:0;}}.ant-pagination-prev,.ant-pagination-next,.ant-pagination-jump-prev,.ant-pagination-jump-next{transform:", ";}.ant-pagination-prev,.ant-pagination-jump-prev,.ant-pagination-jump-next{margin:", ";}.ant-pagination-item{margin:", ";&:hover{border-color:", ";", ";}&:hover a{color:", ";}}.ant-pagination-item-active{background-color:", ";border-color:", ";a{color:#ffffff;}&:hover a{color:#ffffff;}}.ant-table-expanded-row{background:", ";p{color:", ";}}.ant-spin-nested-loading > div > .ant-spin{max-height:none;.ant-spin-dot i{color:", ";}}.ant-table-header{background-color:transparent;}.ant-table-title{background:", ";color:", ";font-size:13px;font-weight:500;padding:16px 30px;", ";}.ant-table-footer{background:", ";color:", ";font-size:12px;font-weight:400;padding:16px 30px;", ";}.ant-table-content{overflow-x:auto;}.ant-table-column-sorter-up.on .anticon-caret-up,.ant-table-column-sorter-down.on .anticon-caret-up,.ant-table-column-sorter-up.on .anticon-caret-down,.ant-table-column-sorter-down.on .anticon-caret-down{color:", ";}&.isoSearchableTable{.isoTableSearchBox{padding:20px;display:flex;background:#ffffff;border:1px solid ", ";", ";input{font-size:14px;font-weight:400;color:", ";line-height:inherit;height:36px;width:100%;padding:0 15px;margin:0;border:1px solid ", ";outline:0 !important;overflow:hidden;background-color:#ffffff;", ";", ";", ";&:focus,&:hover{border-color:", ";", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}button{font-size:12px;font-weight:400;padding:0;text-transform:uppercase;color:#ffffff;background-color:", ";border:0;outline:0;height:36px;padding:0 15px;margin-left:-1px;cursor:pointer;border-radius:", ";", ";&:hover{background-color:", ";}}}.ant-table-thead > tr > th{word-break:keep-all;span{display:flex;justify-content:flex-start;align-items:center;i{margin:", ";order:-1;}}}}&.isoGroupTable{.ant-table-thead > tr{th{border:1px solid ", ";border-left:0;&[rowspan]{text-align:center;}&.isoImageCell{padding:3px;}}&:first-child{th{&:first-child{border-left:", " solid ", ";}}}&:last-child{th{border-top:0;}}}.ant-table-tbody{.ant-table-row{td{border-right:1px solid ", ";&:first-child{border-left:", " solid ", ";}&:last-child{border-left:", " solid ", ";}&.isoImageCell{padding:3px;}}}}}&.isoEditableTable{.isoEditData{.isoEditDataWrapper{display:flex;align-items:center;input{font-size:12px;font-weight:400;color:", ";line-height:inherit;padding:7px 10px;margin:", ";border:1px solid ", ";outline:0 !important;overflow:hidden;background-color:#ffffff;", ";", ";", ";&:focus,&:hover{border-color:", ";", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.isoEditIcon{cursor:pointer;}}.isoDataWrapper{display:flex;align-items:center;.isoEditIcon{margin:", ";cursor:pointer;flex-shrink:0;}}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? '0 4px 0 0' : '0 0 0 4px', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'left' : 'right', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 6), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["borderRadius"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["borderRadius"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["boxShadow"])('0 1px 6px rgba(0,0,0,0.2)'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 7), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["borderRadius"])('3px 0 0 3px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["boxShadow"])('none'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 7), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["boxShadow"])('none'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '3px 0 0 3px' : '0 3px 3px 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 1), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0' : '1px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0' : '1px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '1px' : '0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 3), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["borderRadius"])('3px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["boxShadow"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_3__["boxShadow"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? '0 auto 0 0' : '0 0 0 auto');
const WDCustomizedTableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AntTablesstyles__WDCustomizedTableWrapper",
  componentId: "sc-14sf9ud-1"
})([".isoCustomizedTableControlBar{margin-bottom:40px;.ant-form-item{margin:", ";}.ant-form-item-label{label{color:", ";&:after{margin:", ";}}}.ant-switch-checked{border-color:", ";background-color:", ";}}"], props => props['data-rtl'] === 'rtl' ? '0 0 0 16px' : '0 16px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('secondary', 2), props => props['data-rtl'] === 'rtl' ? '0 2px 0 8px' : '0 8px 0 2px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0));
const CustomizedTableWrapper = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_4__["default"])(WDCustomizedTableWrapper);

/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_4__["default"])(TableWrapper));

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/Demo.styles.js":
/*!**************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/Demo.styles.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const TableDemoStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Demostyles__TableDemoStyle",
  componentId: "sc-1dlf9n6-0"
})([".ant-tabs-content{margin-top:40px;}.ant-tabs-nav{> div{color:", ";&.ant-tabs-ink-bar{background-color:", ";}&.ant-tabs-tab-active{color:", ";}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["default"] = (TableDemoStyle);

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/CustomizedView.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/CustomizedView.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var _iso_components_uielements_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/uielements/switch */ "../../node_modules/@iso/components/uielements/switch.js");
/* harmony import */ var _iso_components_uielements_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/uielements/form */ "../../node_modules/@iso/components/uielements/form.js");

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/CustomizedView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const FormItem = _iso_components_uielements_form__WEBPACK_IMPORTED_MODULE_4__["default"].Item;

const expandedRowRender = record => __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, `${record.firstName} lives in ${record.city}`);

const title = () => 'Here is title';

const showHeader = true;

const footer = () => 'Here is footer';

const scroll = {
  y: 240
};
const toggleOptions = [{
  defaultValue: true,
  title: 'Bordered',
  key: 'bordered'
}, {
  defaultValue: true,
  title: 'Loading',
  key: 'loading'
}, {
  defaultValue: true,
  title: 'Pagination',
  key: 'pagination'
}, {
  defaultValue: title,
  title: 'Title',
  key: 'title'
}, {
  defaultValue: showHeader,
  title: 'Show Header',
  key: 'showHeader'
}, {
  defaultValue: footer,
  title: 'Footer',
  key: 'footer'
}, {
  defaultValue: expandedRowRender,
  title: 'Expanded Row Render',
  key: 'expandedRowRender'
}, {
  defaultValue: {},
  title: 'Checkbox',
  key: 'rowSelection'
}, {
  defaultValue: scroll,
  title: 'Scrollable',
  key: 'scroll'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    bordered: undefined,
    loading: undefined,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined
  });

  function renderSwitch(option) {
    const checked = state[option.key] !== undefined;

    const onChange = () => {
      if (!checked) {
        setState({
          [option.key]: option.defaultValue
        });
      } else {
        setState({
          [option.key]: undefined
        });
      }
    };

    return __jsx(FormItem, {
      label: option.title,
      key: option.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(_iso_components_uielements_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      checked: checked,
      onChange: onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }));
  }

  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_2__["CustomizedTableWrapper"], {
    className: "isoCustomizedTableWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "isoCustomizedTableControlBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_iso_components_uielements_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layout: "inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, toggleOptions.map(option => renderSwitch(option)))), __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    columns: props.tableInfo.columns,
    dataSource: props.dataList.getAll(),
    className: "isoCustomizedTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/EditView.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/EditView.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var _iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/Tables/HelperCells */ "../../node_modules/@iso/components/Tables/HelperCells.js");

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/EditView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    columns: createcolumns(clone__WEBPACK_IMPORTED_MODULE_2___default()(props.tableInfo.columns)),
    dataList: props.dataList.getAll()
  });
  const {
    columns,
    dataList
  } = state;

  function createcolumns(columns) {
    const editColumnRender = (text, record, index) => __jsx(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["EditableCell"], {
      index: index,
      columnsKey: columns[1].key,
      value: text[columns[1].key],
      onChange: onCellChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });

    columns[1].render = editColumnRender;
    const deleteColumn = {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => __jsx(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["DeleteCell"], {
        index: index,
        onDeleteCell: onDeleteCell,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })
    };
    columns.push(deleteColumn);
    return columns;
  }

  function onCellChange(value, columnsKey, index) {
    dataList[index][columnsKey] = value;
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      dataList
    }));
  }

  function onDeleteCell(index) {
    dataList.splice(index, 1);
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      dataList
    }));
  }

  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    dataSource: dataList,
    pagination: {
      pageSize: 5
    },
    className: "isoEditableTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  });
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/FilterView.js":
/*!************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/FilterView.js ***!
  \************************************************************************************************************************/
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
/* harmony import */ var _iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/Tables/HelperCells */ "../../node_modules/@iso/components/Tables/HelperCells.js");
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");



var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/FilterView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    dataList: props.dataList.getAll(),
    filterDropdownVisible: false,
    searchText: '',
    filtered: false
  });

  function onSearch() {
    let {
      searchText
    } = state;
    searchText = searchText.toUpperCase();
    const dataList = props.dataList.getAll().filter(data => data['firstName'].toUpperCase().includes(searchText));
    setState({
      dataList,
      filterDropdownVisible: false,
      searchText: '',
      filtered: false
    });
  }

  function onInputChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
      searchText: event.target.value
    }));
  }

  let {
    searchText
  } = state;
  const columns = props.tableInfo.columns;

  const filterDropdown = __jsx(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["FilterDropdown"], {
    searchText: searchText,
    onInputChange: onInputChange,
    onSearch: onSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  });

  columns[0] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, columns[0], {
    filterDropdown,
    filterIcon: __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "search",
      style: {
        color: state.filtered ? '#108ee9' : '#aaa'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }),
    filterDropdownVisible: state.filterDropdownVisible,
    onFilterDropdownVisibleChange: visible => {
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
        filterDropdownVisible: visible
      }));
      document.getElementById('tableFilterInput').focus();
    }
  });
  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: columns,
    onChange: props.onChange,
    dataSource: state.dataList,
    className: "isoSearchableTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  });
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/GroupView.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/GroupView.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/GroupView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    columns: props.tableInfo.columns,
    dataSource: props.dataList.getAll(),
    className: "isoGroupTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/SimpleView.js":
/*!************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/SimpleView.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/SimpleView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const dataSource = props.dataSource || props.dataList.getAll();
  const columns = props.columns || props.tableInfo.columns;
  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pagination: false,
    columns: columns,
    dataSource: dataSource,
    className: "isoSimpleTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/SortView.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/SortView.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AntTables_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AntTables.styles */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/SortView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  dataList,
  tableInfo
}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(dataList.getAll());

  function onChange(pagination, filters, sorter) {
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }

      setState(dataList.getAll());
    }
  }

  return __jsx(_AntTables_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    columns: tableInfo.columns,
    onChange: onChange,
    dataSource: state,
    className: "isoSortingTable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  });
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/TableViews.js":
/*!************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/TableViews/TableViews.js ***!
  \************************************************************************************************************************/
/*! exports provided: SimpleView, SortView, CustomizedView, FilterView, GroupView, EditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomizedView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomizedView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/CustomizedView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizedView", function() { return _CustomizedView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SimpleView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/SimpleView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleView", function() { return _SimpleView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SortView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/SortView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortView", function() { return _SortView__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FilterView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/FilterView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return _FilterView__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _GroupView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/GroupView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupView", function() { return _GroupView__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditView */ "../../node_modules/@iso/containers/Tables/AntTables/TableViews/EditView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditView", function() { return _EditView__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/AntTables/configs.js":
/*!**********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/configs.js ***!
  \**********************************************************************************************************/
/*! exports provided: columns, tableinfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableinfos", function() { return tableinfos; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/Tables/HelperCells */ "../../node_modules/@iso/components/Tables/HelperCells.js");

var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/AntTables/configs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const renderCell = (object, type, key) => {
  const value = object[key];

  switch (type) {
    case 'ImageCell':
      return Object(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["ImageCell"])(value);

    case 'DateCell':
      return Object(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["DateCell"])(value);

    case 'LinkCell':
      return Object(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["LinkCell"])(value);

    default:
      return Object(_iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_4__["TextCell"])(value);
  }
};

const columns = [{
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }),
  key: 'avatar',
  width: '1%',
  className: 'isoImageCell',
  render: object => renderCell(object, 'ImageCell', 'avatar')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.firstName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }),
  key: 'firstName',
  width: 100,
  render: object => renderCell(object, 'TextCell', 'firstName')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.lastName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }),
  key: 'lastName',
  width: 100,
  render: object => renderCell(object, 'TextCell', 'lastName')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.city",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }),
  key: 'city',
  width: 200,
  render: object => renderCell(object, 'TextCell', 'city')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.street",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }),
  key: 'street',
  width: 200,
  render: object => renderCell(object, 'TextCell', 'street')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }),
  key: 'email',
  width: 200,
  render: object => renderCell(object, 'LinkCell', 'email')
}, {
  title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "antTable.title.dob",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }),
  key: 'date',
  width: 200,
  render: object => renderCell(object, 'DateCell', 'date')
}];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[1], {
  sorter: true
}), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[2], {
  sorter: true
}), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[3], {
  sorter: true
}), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[4], {
  sorter: true
})];
const editColumns = [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[1], {
  width: 300
}), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, columns[2], {
  width: 300
}), columns[3], columns[4]];
const groupColumns = [columns[0], {
  title: 'Name',
  children: [columns[1], columns[2]]
}, {
  title: 'Address',
  children: [columns[3], columns[4]]
}];
const tableinfos = [{
  title: 'Simple Table',
  value: 'simple',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(smallColumns)
}, {
  title: 'Sortable Table',
  value: 'sortView',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(sortColumns)
}, {
  title: 'Search Text',
  value: 'filterView',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(smallColumns)
}, {
  title: 'Editable View',
  value: 'editView',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(editColumns)
}, {
  title: 'Grouping View',
  value: 'groupView',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(groupColumns)
}, {
  title: 'Customized View',
  value: 'customizedView',
  columns: clone__WEBPACK_IMPORTED_MODULE_2___default()(columns)
}];


/***/ }),

/***/ "../../node_modules/@iso/containers/Tables/data.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Tables/data.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tableData = JSON.parse(`[{
  "id": 0,
  "key": 0,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg",
  "city": "Lake Zelda",
  "email": "Lonny79@hotmail.com",
  "firstName": "Emelia",
  "lastName": "Gislason",
  "street": "Kulas Shoals",
  "zipCode": "52677",
  "date": "2016-09-27T08:18:56.302Z",
  "bs": "back-end optimize e-markets",
  "catchPhrase": "Devolved heuristic focus group",
  "companyName": "Kessler LLC",
  "words": "dignissimos et natus",
  "sentence": "Illum molestiae saepe eaque odit magnam veritatis eligendi est qui."
}, {
  "id": 1,
  "key": 1,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg",
  "city": "East Pierce",
  "email": "Lucinda_Gottlieb@hotmail.com",
  "firstName": "Cloyd",
  "lastName": "Armstrong",
  "street": "Lyla Heights",
  "zipCode": "64903",
  "date": "2016-10-08T06:30:16.347Z",
  "bs": "seamless mesh vortals",
  "catchPhrase": "Managed background migration",
  "companyName": "Doyle and Sons",
  "words": "voluptatum dignissimos possimus",
  "sentence": "Aut similique a qui."
}, {
  "id": 2,
  "key": 2,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg",
  "city": "Sibylside",
  "email": "Ransom.Bergstrom@gmail.com",
  "firstName": "Rahul",
  "lastName": "Funk",
  "street": "Jolie Shoals",
  "zipCode": "46659",
  "date": "2017-05-16T02:02:32.105Z",
  "bs": "bleeding-edge enhance e-commerce",
  "catchPhrase": "Public-key intermediate hardware",
  "companyName": "Champlin and Sons",
  "words": "est est corrupti",
  "sentence": "Qui consequatur aut dignissimos error qui praesentium sit et unde."
}, {
  "id": 3,
  "key": 3,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg",
  "city": "Anaisshire",
  "email": "Loyce.Upton@hotmail.com",
  "firstName": "Hilbert",
  "lastName": "Langosh",
  "street": "Sim Station",
  "zipCode": "22101",
  "date": "2017-01-28T01:56:10.609Z",
  "bs": "24/7 orchestrate communities",
  "catchPhrase": "Team-oriented fault-tolerant help-desk",
  "companyName": "Shields Inc",
  "words": "aut perspiciatis totam",
  "sentence": "Ut omnis et."
}, {
  "id": 4,
  "key": 4,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg",
  "city": "North Brad",
  "email": "Cassidy48@hotmail.com",
  "firstName": "Cloyd",
  "lastName": "Wilderman",
  "street": "Ruecker Turnpike",
  "zipCode": "93686",
  "date": "2016-12-30T12:07:39.922Z",
  "bs": "sticky e-enable metrics",
  "catchPhrase": "Re-engineered intangible methodology",
  "companyName": "Hoeger Inc",
  "words": "iusto ut voluptatem",
  "sentence": "Praesentium sit exercitationem aut."
}, {
  "id": 5,
  "key": 5,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/claudioguglieri/128.jpg",
  "city": "Goyetteside",
  "email": "Tamia.Abbott98@hotmail.com",
  "firstName": "Jonatan",
  "lastName": "Gutmann",
  "street": "Donnelly Mountains",
  "zipCode": "92491-2242",
  "date": "2016-10-14T20:54:07.802Z",
  "bs": "B2C reintermediate initiatives",
  "catchPhrase": "Upgradable leading edge access",
  "companyName": "Greenholt and Sons",
  "words": "deserunt vel expedita",
  "sentence": "Sed dolorem amet voluptatem sed quasi."
}, {
  "id": 6,
  "key": 6,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg",
  "city": "West Terrence",
  "email": "Tina.Stehr66@hotmail.com",
  "firstName": "Verdie",
  "lastName": "O'Conner",
  "street": "Windler Mountains",
  "zipCode": "93882",
  "date": "2017-02-20T15:34:54.827Z",
  "bs": "one-to-one deploy technologies",
  "catchPhrase": "Multi-lateral 24 hour workforce",
  "companyName": "Herzog - Pagac",
  "words": "maiores sit distinctio",
  "sentence": "Rem illum voluptatibus asperiores."
}, {
  "id": 7,
  "key": 7,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/okseanjay/128.jpg",
  "city": "Dietrichfort",
  "email": "Hobart_Bashirian67@hotmail.com",
  "firstName": "Elza",
  "lastName": "Hoeger",
  "street": "Howe Stravenue",
  "zipCode": "11044",
  "date": "2016-09-15T07:33:19.033Z",
  "bs": "wireless generate methodologies",
  "catchPhrase": "Optional background secured line",
  "companyName": "Corwin LLC",
  "words": "sit dolores aut",
  "sentence": "Non non sit quas."
}, {
  "id": 8,
  "key": 8,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg",
  "city": "Kaitlynmouth",
  "email": "Jefferey33@hotmail.com",
  "firstName": "Gennaro",
  "lastName": "Waters",
  "street": "O'Hara Radial",
  "zipCode": "91831",
  "date": "2017-01-14T19:25:48.665Z",
  "bs": "open-source morph convergence",
  "catchPhrase": "Polarised interactive protocol",
  "companyName": "Osinski, Gleason and Schimmel",
  "words": "sapiente et praesentium",
  "sentence": "Omnis in voluptatibus enim unde nobis."
}, {
  "id": 9,
  "key": 9,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mhaligowski/128.jpg",
  "city": "Hammeschester",
  "email": "Hildegard.Durgan@yahoo.com",
  "firstName": "Erling",
  "lastName": "Armstrong",
  "street": "Fanny Lights",
  "zipCode": "96737-2299",
  "date": "2016-11-13T03:00:06.957Z",
  "bs": "magnetic utilize infrastructures",
  "catchPhrase": "Phased reciprocal firmware",
  "companyName": "Walker - Cartwright",
  "words": "ut qui excepturi",
  "sentence": "Culpa dolore nisi vero non."
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

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js":
/*!*************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_redux_themeSwitcher_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/redux/themeSwitcher/actions */ "../../node_modules/@iso/redux/themeSwitcher/actions.js");
/* harmony import */ var _iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/ThemeSwitcher/ThemeSwitcher */ "../../node_modules/@iso/components/ThemeSwitcher/ThemeSwitcher.js");
/* harmony import */ var _LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LanguageSwitcher/LanguageSwitcher */ "../../node_modules/@iso/containers/LanguageSwitcher/LanguageSwitcher.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "../../node_modules/@iso/containers/ThemeSwitcher/config.js");
/* harmony import */ var _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/assets/images/bucket.svg */ "../../node_modules/@iso/assets/images/bucket.svg");
/* harmony import */ var _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _ThemeSwitcher_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeSwitcher.styles */ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const {
  switchActivation,
  changeTheme
} = _iso_redux_themeSwitcher_actions__WEBPACK_IMPORTED_MODULE_2__["default"];
function ThemeSwitcher() {
  const {
    isActivated,
    topbarTheme,
    sidebarTheme,
    layoutTheme
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const styleButton = {
    background: sidebarTheme.buttonColor
  };
  return __jsx(_ThemeSwitcher_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "componentTitleWrapper",
    style: styleButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h3", {
    className: "componentTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "themeSwitcher.settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("div", {
    className: "SwitcherBlockWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].sidebarTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: sidebarTheme.themeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].topbarTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: topbarTheme.themeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_iso_components_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    config: _config__WEBPACK_IMPORTED_MODULE_5__["default"].layoutTheme,
    changeTheme: (attr, theme) => dispatch(changeTheme(attr, theme)),
    selectedId: layoutTheme.themeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    className: "purchaseBtnWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    href: "https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam",
    className: "purchaseBtn",
    target: "_blank",
    rel: "noopener noreferrer",
    style: styleButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "themeSwitcher.purchase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx("button", {
    type: "primary",
    className: "switcherToggleBtn",
    style: styleButton,
    onClick: () => {
      dispatch(switchActivation());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    src: _iso_assets_images_bucket_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "bucket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js":
/*!********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.styles.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const ThemeSwitcherStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThemeSwitcherstyles__ThemeSwitcherStyle",
  componentId: "sc-17l608g-0"
})(["background-color:#ffffff;width:340px;height:calc(100% - 70px);padding:0 0 50px;flex-shrink:0;position:fixed;top:70px;right:", ";left:", ";z-index:1001;", ";", ";@media only screen and (max-width:767px){width:270px;right:", ";left:", ";}&.active{right:", ";left:", ";}.switcher{right:", ";left:", ";}.componentTitleWrapper{padding:25px 15px;height:70px;background-color:", ";.componentTitle{font-size:21px;font-weight:700;color:#fff;line-height:1;width:100%;text-align:center;display:flex;justify-content:center;}}.SwitcherBlockWrapper{width:100%;height:100%;padding-bottom:105px;overflow:hidden;overflow-y:auto;display:flex;flex-direction:column;.themeSwitchBlock{width:100%;display:-webkit-flex;display:-ms-flex;display:flex;flex-shrink:0;flex-direction:column;margin-top:30px;h4{font-size:14px;font-weight:700;color:", ";line-height:1.3;margin-bottom:0;padding:0 15px;text-transform:uppercase;}.themeSwitchBtnWrapper{width:100%;display:flex;align-items:center;padding:15px 20px;button{width:20px;height:20px;display:flex;margin:", ";border:1px solid #e4e4e4;outline:0;padding:0;background:none;justify-content:center;position:relative;cursor:pointer;", ";&.languageSwitch{border:0;width:30px;height:auto;&.selectedTheme{&:before,&:after{top:2px;left:", ";right:", ";}}}img{width:100%;}&.selectedTheme{&:before{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;background-color:", ";position:absolute;top:-2px;left:", ";right:", ";", ";}&:after{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;border:1px solid ", ";background-color:", ";position:absolute;top:-2px;left:", ";right:", ";-webkit-animation:selectedAnimation 1.2s infinite ease-in-out;animation:selectedAnimation 1.2s infinite ease-in-out;", ";}}}}}}.switcherToggleBtn{width:50px;height:50px;display:flex;align-items:center;justify-content:center;text-align:center;background-color:#ffffff;outline:0;border:0;position:absolute;text-align:center;top:200px;left:", ";right:", ";cursor:pointer;border-radius:", ";", ";img{width:23px;}}.purchaseBtnWrapper{width:100%;padding:25px 0;display:flex;align-items:center;justify-content:center;bottom:0px;position:absolute;background-color:#ffffff;.purchaseBtn{width:calc(100% - 50px);height:42px;font-size:14px;font-weight:700;color:#fff;text-decoration:none;background-color:", ";text-transform:uppercase;line-height:1;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer;", ";", ";&:hover{background-color:", ";}}}@-webkit-keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}@keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}"], props => props['data-rtl'] === 'rtl' ? 'inherit' : '-340px', props => props['data-rtl'] === 'rtl' ? '-340px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('-1px 0 5px rgba(0,0,0,0.25)'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-270px', props => props['data-rtl'] === 'rtl' ? '-270px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', props => props['data-rtl'] === 'rtl' ? '-98px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '-98px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('3px'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-3px', props => props['data-rtl'] === 'rtl' ? '-3px' : 'inherit', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-50px', props => props['data-rtl'] === 'rtl' ? '-50px' : 'inherit', props => props['data-rtl'] === 'rtl' ? '0 3px 3px 0' : '3px 0 0 3px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('-2px 0 5px rgba(0,0,0,0.2)'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 13));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(ThemeSwitcherStyle));

/***/ }),

/***/ "../../node_modules/@iso/containers/ThemeSwitcher/config.js":
/*!******************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/ThemeSwitcher/config.js ***!
  \******************************************************************************************************/
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
    themeName: 'theme2',
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

/***/ "../../node_modules/@iso/containers/Widgets/Card/CardWidget.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Card/CardWidget.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardWidget.styles */ "../../node_modules/@iso/containers/Widgets/Card/CardWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Card/CardWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  icon,
  iconcolor,
  number,
  text
}) {
  const iconStyle = {
    color: iconcolor
  };
  return __jsx(_CardWidget_styles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "isoCardWidget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "isoIconWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("i", {
    className: icon,
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "isoContentWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h3", {
    className: "isoStatNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, number), __jsx("span", {
    className: "isoLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, text)));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Card/CardWidget.styles.js":
/*!****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Card/CardWidget.styles.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");



const CardWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CardWidgetstyles__CardWidgetWrapper",
  componentId: "u83ni0-0"
})(["width:100%;min-height:126px;padding:20px 30px 20px 20px;background-color:#ffffff;overflow:hidden;border:1px solid ", ";display:flex;align-items:center;.isoIconWrapper{display:flex;align-items:center;justify-content:center;padding:", ";i{font-size:36px;}}.isoContentWrapper{.isoStatNumber{font-size:19px;color:", ";font-weight:500;line-height:1.2;margin:0 0 10px;}.isoLabel{font-size:14px;color:", ";font-weight:400;margin:0;text-transform:uppercase;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), props => props['data-rtl'] === 'rtl' ? '20px 20px 20px 30px' : '20px 30px 20px 20px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(CardWidgetWrapper));

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Progress/ProgressSingle.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Progress/ProgressSingle.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleProgressWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_components_uielements_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/components/uielements/progress */ "../../node_modules/@iso/components/uielements/progress.js");
/* harmony import */ var _ProgressWidget_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressWidget.styles */ "../../node_modules/@iso/containers/Widgets/Progress/ProgressWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Progress/ProgressSingle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SingleProgressWidget({
  label,
  percent,
  barHeight,
  status,
  info,
  fontColor
}) {
  return __jsx(_ProgressWidget_styles__WEBPACK_IMPORTED_MODULE_2__["SingleProgressWidgetBar"], {
    className: "isoSingleProgressBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h3", {
    style: {
      color: fontColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, label), __jsx(_iso_components_uielements_progress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    percent: percent,
    strokeWidth: barHeight,
    status: status,
    showInfo: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Progress/ProgressWidget.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Progress/ProgressWidget.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_components_uielements_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/components/uielements/progress */ "../../node_modules/@iso/components/uielements/progress.js");
/* harmony import */ var _ProgressWidget_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressWidget.styles */ "../../node_modules/@iso/containers/Widgets/Progress/ProgressWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Progress/ProgressWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProgressWidget({
  label,
  icon,
  iconcolor,
  details,
  percent,
  barHeight,
  status
}) {
  const iconStyle = {
    color: iconcolor
  };
  return __jsx(_ProgressWidget_styles__WEBPACK_IMPORTED_MODULE_2__["ProgressWidgetWrapper"], {
    className: "isoProgressWidget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "isoProgressWidgetTopbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, label), __jsx("i", {
    className: icon,
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "isoProgressWidgetBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("p", {
    className: "isoDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, details), __jsx(_iso_components_uielements_progress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    percent: percent,
    strokeWidth: barHeight,
    status: status,
    showInfo: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
}

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Progress/ProgressWidget.styles.js":
/*!************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Progress/ProgressWidget.styles.js ***!
  \************************************************************************************************************************/
/*! exports provided: SingleProgressWidgetBar, CircleProgressWidgetBar, ProgressWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProgressWidgetBar", function() { return SingleProgressWidgetBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressWidgetBar", function() { return CircleProgressWidgetBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressWidgetWrapper", function() { return ProgressWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");



const VarSingleProgressWidgetBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgressWidgetstyles__VarSingleProgressWidgetBar",
  componentId: "sc-1fzu5ml-0"
})(["width:100%;display:flex;flex-direction:column;h3{font-size:14px;color:", ";font-weight:400;line-height:1.2;margin:0 0 5px;}.ant-progress-text{font-size:13px;color:", ";font-weight:400;line-height:1.2;text-align:right;margin-left:", ";margin-right:", ";}.ant-progress-show-info .ant-progress-outer{padding-right:4em;margin-right:-4em;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3), props => props['data-rtl'] === 'rtl' ? '0' : '0.75em', props => props['data-rtl'] === 'rtl' ? '0.75em' : '0');
const CircleProgressWidgetBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgressWidgetstyles__CircleProgressWidgetBar",
  componentId: "sc-1fzu5ml-1"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;h3{font-size:14px;font-weight:500;line-height:1.2;color:", ";margin:15px 0 0;}.ant-progress.ant-progress-circle{.ant-progress-text{font-size:18px;font-weight:400;line-height:1.2;color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));
const ProgressWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgressWidgetstyles__ProgressWidgetWrapper",
  componentId: "sc-1fzu5ml-2"
})(["display:flex;flex-direction:column;width:100%;padding:20px;background-color:#ffffff;overflow:hidden;border:1px solid ", ";.isoProgressWidgetTopbar{width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;h3{font-size:19px;color:", ";font-weight:400;margin:0;line-height:1.2;}i{font-size:24px;}}.isoProgressWidgetBody{p{font-size:14px;color:", ";font-weight:300;width:100%;margin:0 0 5px;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 3));
const SingleProgressWidgetBar = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(VarSingleProgressWidgetBar);


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Report/ReportWidget.js":
/*!*************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Report/ReportWidget.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReportWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportWidget.styles */ "../../node_modules/@iso/containers/Widgets/Report/ReportWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Report/ReportWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  label,
  details,
  children
}) {
  return __jsx(_ReportWidget_styles__WEBPACK_IMPORTED_MODULE_1__["ReportWidgetWrapper"], {
    className: "isoReportsWidget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "isoWidgetLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, label), __jsx("div", {
    className: "isoReportsWidgetBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children), __jsx("p", {
    className: "isoDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, details));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Report/ReportWidget.styles.js":
/*!********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Report/ReportWidget.styles.js ***!
  \********************************************************************************************************************/
/*! exports provided: ReportWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportWidgetWrapper", function() { return ReportWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const ReportWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ReportWidgetstyles__ReportWidgetWrapper",
  componentId: "sc-1gh74ec-0"
})(["width:100%;display:flex;flex-direction:column;padding:30px;background-color:#ffffff;border:1px solid ", ";.isoWidgetLabel{font-size:21px;color:", ";font-weight:400;line-height:1.2;margin:0 0 25px;}.isoReportsWidgetBar{display:flex;flex-direction:column;margin-bottom:25px;.isoSingleProgressBar{margin-bottom:10px;&:last-child{margin-bottom:0;}}}.isoDescription{font-size:13px;color:", ";font-weight:400;line-height:1.5;margin:0;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2));


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Sale/SaleWidget.js":
/*!*********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sale/SaleWidget.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SaleWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleWidget.styles */ "../../node_modules/@iso/containers/Widgets/Sale/SaleWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sale/SaleWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  fontColor,
  label,
  price,
  details
}) {
  const textColor = {
    color: fontColor
  };
  return __jsx(_SaleWidget_styles__WEBPACK_IMPORTED_MODULE_1__["SaleWidgetWrapper"], {
    className: "isoSaleWidget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "isoSaleLabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, label), __jsx("span", {
    className: "isoSalePrice",
    style: textColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, price), __jsx("p", {
    className: "isoSaleDetails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, details));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Sale/SaleWidget.styles.js":
/*!****************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sale/SaleWidget.styles.js ***!
  \****************************************************************************************************************/
/*! exports provided: SaleWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleWidgetWrapper", function() { return SaleWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const SaleWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SaleWidgetstyles__SaleWidgetWrapper",
  componentId: "lrot8b-0"
})(["width:100%;display:flex;flex-direction:column;padding:30px;background-color:#ffffff;overflow:hidden;border:1px solid ", ";.isoSaleLabel{font-size:14px;font-weight:700;line-height:1.2;text-transform:uppercase;color:", ";margin:0 0 20px;}.isoSalePrice{font-size:28px;font-weight:300;line-height:1.2;margin:0 0 20px;}.isoSaleDetails{font-size:13px;font-weight:400;line-height:1.5;color:", ";margin:0;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2));


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialProfileIcon.js":
/*!************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/SocialWidget/SocialProfileIcon.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/SocialWidget/SocialProfileIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function ({
  url,
  icon,
  iconcolor
}) {
  const iconStyle = {
    color: iconcolor
  };
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("i", {
    className: icon,
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialWidget.styles */ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  children
}) {
  return __jsx(_SocialWidget_styles__WEBPACK_IMPORTED_MODULE_1__["SocialWidgetWrapper"], {
    className: "isoSocialWidgetWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.styles.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.styles.js ***!
  \**************************************************************************************************************************/
/*! exports provided: SocialWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialWidgetWrapper", function() { return SocialWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");



const WDSocialWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "SocialWidgetstyles__WDSocialWidgetWrapper",
  componentId: "sc-1m615pv-0"
})(["width:100%;display:flex;align-items:center;padding:0;list-style:none;li{line-height:1;&:nth-child(n + 2){margin-left:", ";margin-right:", ";}a{display:flex;line-height:1;opacity:0.8;font-size:19px;", ";&:hover{opacity:1;}}}"], props => props['data-rtl'] === 'rtl' ? '0' : '16px', props => props['data-rtl'] === 'rtl' ? '15px' : '0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__["transition"])());
const SocialWidgetWrapper = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(WDSocialWidgetWrapper);


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Sticker/StickerWidget.js":
/*!***************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sticker/StickerWidget.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StickerWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StickerWidget.styles */ "../../node_modules/@iso/containers/Widgets/Sticker/StickerWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sticker/StickerWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  fontColor,
  bgColor,
  width,
  icon,
  number,
  text
}) {
  const textColor = {
    color: fontColor
  };
  const widgetStyle = {
    backgroundColor: bgColor,
    width: width
  };
  const iconStyle = {
    color: fontColor
  };
  return __jsx(_StickerWidget_styles__WEBPACK_IMPORTED_MODULE_1__["StickerWidgetWrapper"], {
    className: "isoStickerWidget",
    style: widgetStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "isoIconWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("i", {
    className: icon,
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "isoContentWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    className: "isoStatNumber",
    style: textColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, number), __jsx("span", {
    className: "isoLabel",
    style: textColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, text)));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Sticker/StickerWidget.styles.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Sticker/StickerWidget.styles.js ***!
  \**********************************************************************************************************************/
/*! exports provided: StickerWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerWidgetWrapper", function() { return StickerWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");


const StickerWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StickerWidgetstyles__StickerWidgetWrapper",
  componentId: "sc-68verh-0"
})(["width:100%;display:flex;align-items:stretch;overflow:hidden;", ";.isoIconWrapper{display:flex;align-items:center;justify-content:center;width:80px;flex-shrink:0;background-color:rgba(0,0,0,0.1);i{font-size:30px;}}.isoContentWrapper{width:100%;padding:20px 15px 20px 20px;display:flex;flex-direction:column;.isoStatNumber{font-size:20px;font-weight:500;line-height:1.1;margin:0 0 5px;}.isoLabel{font-size:16px;font-weight:400;margin:0;line-height:1.2;}}"], Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__["borderRadius"])('5px'));


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/WidgetBox.js":
/*!***************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/WidgetBox.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Widgets_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widgets.styles */ "../../node_modules/@iso/containers/Widgets/Widgets.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/WidgetBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  children,
  style,
  height,
  padding
}) {
  return __jsx(_Widgets_styles__WEBPACK_IMPORTED_MODULE_1__["WidgetBox"], {
    className: "isoWidgetBox",
    height: height,
    padding: padding,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Widgets.js":
/*!*************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Widgets.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style/css */ "../../node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style/css */ "../../node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/components/utility/layoutWrapper */ "../../node_modules/@iso/components/utility/layoutWrapper.js");
/* harmony import */ var _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/assets/styles/constants */ "../../node_modules/@iso/assets/styles/constants.js");
/* harmony import */ var _WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WidgetsWrapper */ "../../node_modules/@iso/containers/Widgets/WidgetsWrapper.js");
/* harmony import */ var _WidgetBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WidgetBox */ "../../node_modules/@iso/containers/Widgets/WidgetBox.js");
/* harmony import */ var _Card_CardWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Card/CardWidget */ "../../node_modules/@iso/containers/Widgets/Card/CardWidget.js");
/* harmony import */ var _Progress_ProgressWidget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Progress/ProgressWidget */ "../../node_modules/@iso/containers/Widgets/Progress/ProgressWidget.js");
/* harmony import */ var _Progress_ProgressSingle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Progress/ProgressSingle */ "../../node_modules/@iso/containers/Widgets/Progress/ProgressSingle.js");
/* harmony import */ var _Report_ReportWidget__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Report/ReportWidget */ "../../node_modules/@iso/containers/Widgets/Report/ReportWidget.js");
/* harmony import */ var _Sticker_StickerWidget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Sticker/StickerWidget */ "../../node_modules/@iso/containers/Widgets/Sticker/StickerWidget.js");
/* harmony import */ var _Sale_SaleWidget__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Sale/SaleWidget */ "../../node_modules/@iso/containers/Widgets/Sale/SaleWidget.js");
/* harmony import */ var _vCard_vCardWidget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vCard/vCardWidget */ "../../node_modules/@iso/containers/Widgets/vCard/vCardWidget.js");
/* harmony import */ var _SocialWidget_SocialWidget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SocialWidget/SocialWidget */ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialWidget.js");
/* harmony import */ var _SocialWidget_SocialProfileIcon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SocialWidget/SocialProfileIcon */ "../../node_modules/@iso/containers/Widgets/SocialWidget/SocialProfileIcon.js");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iso/assets/images/user1.png */ "../../node_modules/@iso/assets/images/user1.png");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iso/lib/helpers/isServer */ "../../node_modules/@iso/lib/helpers/isServer.js");
/* harmony import */ var _Tables_AntTables_AntTables__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Tables/AntTables/AntTables */ "../../node_modules/@iso/containers/Tables/AntTables/AntTables.js");
/* harmony import */ var _Charts_Recharts_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Charts/Recharts/config */ "../../node_modules/@iso/containers/Charts/Recharts/config.js");
/* harmony import */ var _Charts_Recharts_Charts_StackedAreaChart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Charts/Recharts/Charts/StackedAreaChart */ "../../node_modules/@iso/containers/Charts/Recharts/Charts/StackedAreaChart.js");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Charts/GoogleChart/config */ "../../node_modules/@iso/containers/Charts/GoogleChart/config.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");






var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Widgets.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;























const tableDataList = clone__WEBPACK_IMPORTED_MODULE_7___default()(_Tables_AntTables_AntTables__WEBPACK_IMPORTED_MODULE_23__["dataList"]);
tableDataList.size = 5;
const styles = {
  wisgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden'
  }
};
const SIGNLE_PROGRESS_WIDGET = [{
  label: 'widget.singleprogresswidget1.label',
  percent: 70,
  barHeight: 7,
  status: 'active',
  info: true
}, {
  label: 'widget.singleprogresswidget2.label',
  percent: 80,
  barHeight: 7,
  status: 'active',
  info: true
}, {
  label: 'widget.singleprogresswidget3.label',
  percent: 40,
  barHeight: 7,
  status: 'active',
  info: true
}, {
  label: 'widget.singleprogresswidget4.label',
  percent: 60,
  barHeight: 7,
  status: 'active',
  info: true
}];
const STICKER_WIDGET = [{
  number: 'widget.stickerwidget1.number',
  text: 'widget.stickerwidget1.text',
  icon: 'ion-email-unread',
  fontColor: '#ffffff',
  bgColor: '#7266BA'
}, {
  number: 'widget.stickerwidget1.number',
  text: 'widget.stickerwidget2.text',
  icon: 'ion-android-camera',
  fontColor: '#ffffff',
  bgColor: '#42A5F6'
}, {
  number: 'widget.stickerwidget1.number',
  text: 'widget.stickerwidget3.text',
  icon: 'ion-chatbubbles',
  fontColor: '#ffffff',
  bgColor: '#7ED320'
}, {
  number: 'widget.stickerwidget1.number',
  text: 'widget.stickerwidget4.text',
  icon: 'ion-android-cart',
  fontColor: '#ffffff',
  bgColor: '#F75D81'
}];
const SALE_WIDGET = [{
  label: 'widget.salewidget1.label',
  price: 'widget.salewidget1.price',
  details: 'widget.salewidget1.details',
  fontColor: '#F75D81'
}, {
  label: 'widget.salewidget2.label',
  price: 'widget.salewidget2.price',
  details: 'widget.salewidget2.details',
  fontColor: '#F75D81'
}, {
  label: 'widget.salewidget3.label',
  price: 'widget.salewidget3.price',
  details: 'widget.salewidget3.details',
  fontColor: '#F75D81'
}, {
  label: 'widget.salewidget4.label',
  price: 'widget.salewidget4.price',
  details: 'widget.salewidget4.details',
  fontColor: '#F75D81'
}];
const CARD_WIDGET = [{
  icon: 'ion-android-chat',
  iconcolor: '#42A5F5',
  number: 'widget.cardwidget1.number',
  text: 'widget.cardwidget1.text'
}, {
  icon: 'ion-music-note',
  iconcolor: '#F75D81',
  number: 'widget.cardwidget2.number',
  text: 'widget.cardwidget2.text'
}, {
  icon: 'ion-trophy',
  iconcolor: '#FEAC01',
  number: 'widget.cardwidget3.number',
  text: 'widget.cardwidget3.text'
}];
const PROGRESS_WIDGET = [{
  label: 'widget.progresswidget1.label',
  details: 'widget.progresswidget1.details',
  icon: 'ion-archive',
  iconcolor: '#4482FF',
  percent: 50,
  barHeight: 7,
  status: 'active'
}, {
  label: 'widget.progresswidget2.label',
  details: 'widget.progresswidget2.details',
  icon: 'ion-pie-graph',
  iconcolor: '#F75D81',
  percent: 80,
  barHeight: 7,
  status: 'active'
}, {
  label: 'widget.progresswidget3.label',
  details: 'widget.progresswidget3.details',
  icon: 'ion-android-download',
  iconcolor: '#494982',
  percent: 65,
  barHeight: 7,
  status: 'active'
}];
const SOCIAL_PROFILE = [{
  url: '#',
  icon: 'ion-social-facebook',
  iconcolor: '#3b5998'
}, {
  url: '#',
  icon: 'ion-social-twitter',
  iconcolor: '#00aced'
}, {
  url: '#',
  icon: 'ion-social-googleplus',
  iconcolor: '#dd4b39'
}, {
  url: '#',
  icon: 'ion-social-linkedin-outline',
  iconcolor: '#007bb6'
}, {
  url: '#',
  icon: 'ion-social-dribbble-outline',
  iconcolor: '#ea4c89'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const {
    rowStyle,
    colStyle
  } = _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_9__["default"];
  const chartEvents = [{
    eventName: 'select',

    callback(Chart) {}

  }];

  const stackConfig = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, _Charts_Recharts_config__WEBPACK_IMPORTED_MODULE_24__["StackedAreaChart"], {
    width: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_22__["isServer"] && window.innerWidth < 450 ? 300 : 500
  });

  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    style: styles.wisgetPageStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(_Report_ReportWidget__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "widget.reportswidget.label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }),
    details: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "widget.reportswidget.details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, SIGNLE_PROGRESS_WIDGET.map((widget, idx) => __jsx(_Progress_ProgressSingle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: idx,
    label: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }),
    percent: widget.percent,
    barHeight: widget.barHeight,
    status: widget.status,
    info: widget.info // Boolean: true, false
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_Tables_AntTables_AntTables__WEBPACK_IMPORTED_MODULE_23__["TableViews"].SimpleView, {
    tableInfo: _Tables_AntTables_AntTables__WEBPACK_IMPORTED_MODULE_23__["tableinfos"][0],
    dataList: tableDataList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, STICKER_WIDGET.map((widget, idx) => __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx(_Sticker_StickerWidget__WEBPACK_IMPORTED_MODULE_16__["default"], {
    number: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.number,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }),
    text: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }),
    icon: widget.icon,
    fontColor: widget.fontColor,
    bgColor: widget.bgColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, SALE_WIDGET.map((widget, idx) => __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(_Sale_SaleWidget__WEBPACK_IMPORTED_MODULE_17__["default"], {
    label: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }),
    price: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.price,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }),
    details: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }),
    fontColor: widget.fontColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, CARD_WIDGET.map((widget, idx) => __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: idx,
    gutterBottom: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(_Card_CardWidget__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: widget.icon,
    iconcolor: widget.iconcolor,
    number: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.number,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }),
    text: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 6,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, PROGRESS_WIDGET.map((widget, idx) => __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: idx,
    gutterBottom: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx(_Progress_ProgressWidget__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }),
    details: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: widget.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }),
    icon: widget.icon,
    iconcolor: widget.iconcolor,
    percent: widget.percent,
    barHeight: widget.barHeight,
    status: widget.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: 448,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(_Charts_Recharts_Charts_StackedAreaChart__WEBPACK_IMPORTED_MODULE_25__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stackConfig, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: 470,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_26___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_27__["BarChart"], {
    chartEvents: chartEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: 470,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_26___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_27__["Histogram"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  })))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx(_vCard_vCardWidget__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      height: '450px'
    },
    src: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    alt: "Jhon",
    name: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "widget.vcardwidget.name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }),
    title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "widget.vcardwidget.title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }),
    description: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_28__["default"], {
      id: "widget.vcardwidget.description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx(_SocialWidget_SocialWidget__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, SOCIAL_PROFILE.map((profile, idx) => __jsx(_SocialWidget_SocialProfileIcon__WEBPACK_IMPORTED_MODULE_20__["default"], {
    key: idx,
    url: profile.url,
    icon: profile.icon,
    iconcolor: profile.iconcolor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  })))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: 450,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_26___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_27__["TrendLines"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 8,
    md: 24,
    sm: 24,
    xs: 24,
    style: colStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx(_WidgetsWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, __jsx(_WidgetBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    height: 450,
    style: {
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_26___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Charts_GoogleChart_config__WEBPACK_IMPORTED_MODULE_27__["ComboChart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }))))))));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/Widgets.styles.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/Widgets.styles.js ***!
  \********************************************************************************************************/
/*! exports provided: WidgetWrapper, WidgetBox, WidgetColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetWrapper", function() { return WidgetWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetBox", function() { return WidgetBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetColumn", function() { return WidgetColumn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const WidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widgetsstyles__WidgetWrapper",
  componentId: "sc-1j6baaj-0"
})(["margin:0 10px;width:", "px;margin-top:", "px;margin-right:", "px;margin-bottom:", "px;margin-left:", "px;padding:", ";background-color:", "px;@media only screen and (max-width:767){margin-right:0 !important;}"], props => props.width, props => props.gutterTop, props => props.gutterRight, props => props.gutterBottom, props => props.gutterLeft, props => props.padding, props => props.bgColor);
const WidgetBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widgetsstyles__WidgetBox",
  componentId: "sc-1j6baaj-1"
})(["width:100%;height:", ";padding:", ";background-color:#ffffff;border:1px solid ", ";canvas{width:100% !important;height:100% !important;}"], props => props.height ? `${props.height}px` : '100%', props => props.padding ? props.padding : '30px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2));

const getAlignContent = (align = 'flex-start') => {
  if (align === 'start') return 'flex-start';
  if (align === 'end') return 'flex-end';
  return align;
};

const WidgetColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widgetsstyles__WidgetColumn",
  componentId: "sc-1j6baaj-2"
})(["align-content:", ";display:flex;flex-wrap:wrap;flex-direction:row;margin-top:", "px;margin-right:", "px;margin-bottom:", "px;margin-left:", "px;padding:", "px;width:", "px;"], props => getAlignContent(props.align), props => props.gutterTop, props => props.gutterRight, props => props.gutterBottom, props => props.gutterLeft, props => props.padding, props => props.width);


/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/WidgetsWrapper.js":
/*!********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/WidgetsWrapper.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Widgets_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widgets.styles */ "../../node_modules/@iso/containers/Widgets/Widgets.styles.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/WidgetsWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  let {
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return __jsx(_Widgets_styles__WEBPACK_IMPORTED_MODULE_3__["WidgetWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "isoWidgetsWrapper"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), children);
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/vCard/vCardWidget.js":
/*!***********************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/vCard/vCardWidget.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vCardWidget_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vCardWidget.styles */ "../../node_modules/@iso/containers/Widgets/vCard/vCardWidget.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/vCard/vCardWidget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function ({
  src,
  alt,
  name,
  title,
  description,
  children,
  style
}) {
  return __jsx(_vCardWidget_styles__WEBPACK_IMPORTED_MODULE_1__["VCardWidgetWrapper"], {
    className: "isoVCardWidgetWrapper",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "isoVCardImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: src,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "isoVCardBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h3", {
    className: "isoName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, name), __jsx("span", {
    className: "isoDesgTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title), __jsx("p", {
    className: "isoDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, description), __jsx("div", {
    className: "isoWidgetSocial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children)));
});

/***/ }),

/***/ "../../node_modules/@iso/containers/Widgets/vCard/vCardWidget.styles.js":
/*!******************************************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/@iso/containers/Widgets/vCard/vCardWidget.styles.js ***!
  \******************************************************************************************************************/
/*! exports provided: VCardWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCardWidgetWrapper", function() { return VCardWidgetWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");



const VCardWidgetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "vCardWidgetstyles__VCardWidgetWrapper",
  componentId: "sc-1enpp74-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;background-color:#ffffff;overflow:hidden;border:1px solid ", ";padding:50px 30px 30px;.isoVCardImage{width:70px;height:70px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:35px;", ";img{width:100%;height:100%;object-fit:cover;}}.isoVCardBody{align-items:center;display:flex;width:100%;flex-direction:column;text-align:center;.isoName{font-size:17px;color:", ";font-weight:400;margin:0 0 5px;line-height:1.2;}.isoDesgTitle{font-size:13px;color:", ";font-weight:400;margin:0;line-height:1.2;}.isoDescription{font-size:13px;color:", ";font-weight:400;margin:20px 0 0 0;line-height:1.5;}.isoSocialWidgetWrapper{margin-top:25px;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2));


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

/***/ "../../node_modules/antd/lib/button/style/css.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/button/style/css.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/col/style/css.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/col/style/css.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/form/style/css.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/form/style/css.js ***!
  \*****************************************************************************************/
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

/***/ "../../node_modules/antd/lib/layout/style/css.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/layout/style/css.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/menu/style/css.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/menu/style/css.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/modal/style/css.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/modal/style/css.js ***!
  \******************************************************************************************/
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

/***/ "../../node_modules/antd/lib/progress/style/css.js":
/*!*********************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/progress/style/css.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/row/style/css.js":
/*!****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/row/style/css.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/switch/style/css.js":
/*!*******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/switch/style/css.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/table/style/css.js":
/*!******************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/table/style/css.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/antd/lib/tabs/style/css.js":
/*!*****************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/antd/lib/tabs/style/css.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!***************************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/dist/client/link.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "../../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

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

/***/ "../../node_modules/next/link.js":
/*!***************************************************************************!*\
  !*** /Users/biswa/Sites/Others/demo/Isomorphic/node_modules/next/link.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


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

/***/ "./containers/DashboardLayout/DashboardLayout.js":
/*!*******************************************************!*\
  !*** ./containers/DashboardLayout/DashboardLayout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashboardLayout; });
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.js");
/* harmony import */ var _iso_containers_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/containers/ThemeSwitcher/ThemeSwitcher */ "../../node_modules/@iso/containers/ThemeSwitcher/ThemeSwitcher.js");
/* harmony import */ var _Topbar_Topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/Topbar */ "./containers/Topbar/Topbar.js");
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
/* harmony import */ var _DashboardLayout_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardLayout.styles */ "./containers/DashboardLayout/DashboardLayout.styles.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/DashboardLayout/DashboardLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const {
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;
function DashboardLayout({
  children
}) {
  return __jsx(_DashboardLayout_styles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Topbar_Topbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      flexDirection: 'row',
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "isoContentMainLayout",
    style: {
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(Content, {
    className: "isomorphicContent",
    style: {
      padding: '70px 0 0',
      flexShrink: '0',
      background: '#f1f3f6',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children), __jsx(Footer, {
    style: {
      background: '#ffffff',
      textAlign: 'center',
      borderTop: '1px solid #ededed'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, _iso_config_site_config__WEBPACK_IMPORTED_MODULE_6__["default"].footerText))), __jsx(_iso_containers_ThemeSwitcher_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })));
}

/***/ }),

/***/ "./containers/DashboardLayout/DashboardLayout.styles.js":
/*!**************************************************************!*\
  !*** ./containers/DashboardLayout/DashboardLayout.styles.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const AppHolder = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "DashboardLayoutstyles__AppHolder",
  componentId: "sc-705goz-0"
})([".trigger{font-size:18px;line-height:64px;padding:0 16px;cursor:pointer;transition:color 0.3s;}.trigger:hover{color:", ";}.ant-layout-sider-collapsed .anticon{font-size:16px;}.ant-layout-sider-collapsed .nav-text{display:none;}.ant-layout{background:", ";&.isoContentMainLayout{overflow:auto;overflow-x:hidden;@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);flex-shrink:0;}@media only screen and (max-width:767px){width:100%;flex-shrink:0;}}}.isoLayoutContent{width:100%;padding:35px;background-color:#ffffff;border:1px solid ", ";height:100%;}.isomorphicLayout{width:calc(100% - 240px);flex-shrink:0;overflow-x:hidden !important;@media only screen and (max-width:767px){width:100%;}@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);}}.ant-layout-footer{font-size:13px;@media (max-width:767px){padding:10px 20px;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0));
/* harmony default export */ __webpack_exports__["default"] = (AppHolder);

/***/ }),

/***/ "./containers/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./containers/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clone */ "clone");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/uielements/menu */ "../../node_modules/@iso/components/uielements/menu.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/app/actions */ "../../node_modules/@iso/redux/app/actions.js");
/* harmony import */ var _iso_components_utility_Logo_next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/components/utility/Logo.next */ "../../node_modules/@iso/components/utility/Logo.next.js");
/* harmony import */ var _Sidebar_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sidebar.styles */ "./containers/Sidebar/Sidebar.styles.js");
/* harmony import */ var _SidebarMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarMenu */ "./containers/Sidebar/SidebarMenu.js");
/* harmony import */ var _sidebar_navigations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar.navigations */ "./containers/Sidebar/sidebar.navigations.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Sidebar/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











const SubMenu = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].SubMenu;
const MenuItemGroup = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].ItemGroup;
const {
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__["default"];
function Sidebar(props) {
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    height,
    current
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.App);
  const {
    sidebarTheme
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));

    if (view === 'MobileView') {
      setTimeout(() => {
        dispatch(toggleCollapsed()); // dispatch(toggleOpenDrawer());
      }, 100);
    }
  }

  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
    const latestCloseKey = openKeys.find(key => !(newOpenKeys.indexOf(key) > -1));
    let nextOpenKeys = [];

    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }

    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }

    dispatch(changeOpenKeys(nextOpenKeys));
  }

  const getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  const isCollapsed = collapsed && !openDrawer;
  const mode = isCollapsed === true ? 'vertical' : 'inline';
  const scrollheight = height;
  const styling = {
    backgroundColor: sidebarTheme.backgroundColor
  };
  const submenuStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: sidebarTheme.textColor
  };
  const submenuColor = {
    color: sidebarTheme.textColor
  };

  const onMouseEnter = () => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  return __jsx(_Sidebar_styles__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: isCollapsed,
    width: 240,
    className: "isomorphicSidebar",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: styling,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_iso_components_utility_Logo_next__WEBPACK_IMPORTED_MODULE_9__["default"], {
    collapsed: isCollapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__["Scrollbars"], {
    style: {
      height: scrollheight - 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClick,
    theme: "dark",
    mode: mode,
    openKeys: isCollapsed ? [] : openKeys,
    selectedKeys: current,
    onOpenChange: onOpenChange,
    className: "isoDashboardMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, _sidebar_navigations__WEBPACK_IMPORTED_MODULE_12__["default"].map(option => __jsx(_SidebarMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: option.key,
    item: option,
    submenuColor: submenuColor,
    submenuStyle: submenuStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), __jsx(SubMenu, {
    key: "sub1",
    title: __jsx("span", {
      className: "isoMenuHolder",
      style: submenuColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("i", {
      className: "ion-android-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), __jsx("span", {
      className: "nav-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.menuLevels",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(MenuItemGroup, {
    key: "g1",
    title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.item1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), __jsx(MenuItemGroup, {
    key: "g2",
    title: __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "sidebar.item2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    style: submenuStyle,
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "sidebar.option4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }))))))));
}

/***/ }),

/***/ "./containers/Sidebar/Sidebar.styles.js":
/*!**********************************************!*\
  !*** ./containers/Sidebar/Sidebar.styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Sidebarstyles__SidebarWrapper",
  componentId: "sc-1e24q4y-0"
})([".isomorphicSidebar{z-index:1000;background:", ";width:280px;flex:0 0 280px;.scrollarea{height:calc(100vh - 70px);}@media only screen and (max-width:767px){width:240px !important;flex:0 0 240px !important;}&.ant-layout-sider-collapsed{@media only screen and (max-width:767px){width:0;min-width:0 !important;max-width:0 !important;flex:0 0 0 !important;}}.isoLogoWrapper{height:70px;background:rgba(0,0,0,0.3);margin:0;padding:0 10px;text-align:center;overflow:hidden;", ";h3{a,i{font-size:21px;font-weight:300;line-height:70px;letter-spacing:3px;text-transform:uppercase;color:", ";display:block;text-decoration:none;}}}&.ant-layout-sider-collapsed{.isoLogoWrapper{padding:0;h3{a{font-size:27px;font-weight:500;letter-spacing:0;}}}}.isoDashboardMenu{padding-top:35px;padding-bottom:35px;background:transparent;a{text-decoration:none;font-weight:400;}.ant-menu-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 24px;margin:0;}.isoMenuHolder{display:flex;align-items:center;i{font-size:19px;color:inherit;margin:", ";width:18px;", ";}}.anticon{font-size:18px;margin-right:30px;color:inherit;", ";}.nav-text{font-size:14px;color:inherit;font-weight:400;", ";}.ant-menu-item-selected{background-color:rgba(0,0,0,0.4) !important;.anticon{color:#fff;}i{color:#fff;}.nav-text{color:#fff;}}.ant-menu-item{&:hover{i,.nav-text > span{color:#ffffff;}}}.ant-menu-submenu{&:hover{.ant-menu-submenu-title{i,.nav-text > span{color:#ffffff;}}}}}.ant-menu-dark .ant-menu-inline.ant-menu-sub{background:", ";}.ant-menu-submenu-inline,.ant-menu-submenu-vertical{> .ant-menu-submenu-title{width:100%;display:flex;align-items:center;padding:0 24px;> span{display:flex;align-items:center;}.ant-menu-submenu-arrow{left:", ";right:", ";&:before,&:after{width:8px;", ";}&:before{transform:rotate(-45deg) translateX(3px);}&:after{transform:rotate(45deg) translateX(-3px);}", ";}&:hover{.ant-menu-submenu-arrow{&:before,&:after{color:#ffffff;}}}}.ant-menu-inline,.ant-menu-submenu-vertical{> li:not(.ant-menu-item-group){padding-left:", ";padding-right:", ";font-size:13px;font-weight:400;margin:0;color:inherit;", ";&:hover{a{color:#ffffff !important;}}}.ant-menu-item-group{padding-left:0;.ant-menu-item-group-title{padding-left:100px !important;}.ant-menu-item-group-list{.ant-menu-item{padding-left:125px !important;}}}}.ant-menu-sub{box-shadow:none;background-color:transparent !important;}}&.ant-layout-sider-collapsed{.nav-text{display:none;}.ant-menu-submenu-inline >{.ant-menu-submenu-title:after{display:none;}}.ant-menu-submenu-vertical{> .ant-menu-submenu-title:after{display:none;}.ant-menu-sub{background-color:transparent !important;.ant-menu-item{height:35px;}}}}.ant-menu-inline-collapsed > .ant-menu-item,.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item,.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title{left:0;-o-text-overflow:clip;text-overflow:clip;padding:0 32px !important;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 5), props => props['data-rtl'] === 'rtl' ? '25px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '25px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), ''
/* &:after {
content: '\f123';
font-family: 'Ionicons' !important;
font-size: 16px;
color: inherit;
left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
${transition()};
} */
, props => props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important', props => props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])());
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(SidebarWrapper));

/***/ }),

/***/ "./containers/Sidebar/SidebarMenu.js":
/*!*******************************************!*\
  !*** ./containers/Sidebar/SidebarMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SidebarMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/uielements/menu */ "../../node_modules/@iso/components/uielements/menu.js");
/* harmony import */ var _iso_config_site_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/config/site.config */ "../../node_modules/@iso/config/site.config.js");
/* harmony import */ var _iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/utility/intlMessages */ "../../node_modules/@iso/components/utility/intlMessages.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Sidebar/SidebarMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const SubMenu = _iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_4__["default"].SubMenu;
function SidebarMenu(_ref) {
  let {
    item,
    submenuStyle,
    submenuColor
  } = _ref,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["item", "submenuStyle", "submenuColor"]);

  const {
    key,
    label,
    leftIcon,
    children
  } = item;
  const url = _iso_config_site_config__WEBPACK_IMPORTED_MODULE_5__["default"].dashboard;

  if (children) {
    return __jsx(SubMenu, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key,
      title: __jsx("span", {
        className: "isoMenuHolder",
        style: submenuColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("i", {
        className: leftIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })))
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), children.map(({
      key,
      label,
      withoutDashboard
    }) => {
      const linkTo = withoutDashboard ? `/${key}` : `${url}/${key}`;
      return __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        style: submenuStyle,
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: linkTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("a", {
        className: "isoMenuHolder",
        style: submenuColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("span", {
        className: "nav-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })))));
    }));
  }

  return __jsx(_iso_components_uielements_menu__WEBPACK_IMPORTED_MODULE_4__["default"].Item, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: key
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `${url}/${key}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    className: "isoMenuHolder",
    style: submenuColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("i", {
    className: leftIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("span", {
    className: "nav-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_iso_components_utility_intlMessages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./containers/Sidebar/sidebar.navigations.js":
/*!***************************************************!*\
  !*** ./containers/Sidebar/sidebar.navigations.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  key: 'mailbox',
  path: '/mailbox',
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
  key: 'my_profile',
  label: 'sidebar.profile',
  leftIcon: 'ion-person'
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
    key: 'reactTrend',
    label: 'sidebar.reactTrend'
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
    key: 'swiper_slider',
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
  }]
}, {
  key: 'githubSearch',
  label: 'sidebar.githubSearch',
  leftIcon: 'ion-social-github'
}, {
  key: 'blank_page',
  label: 'sidebar.blankPage',
  leftIcon: 'ion-document'
}]);

/***/ }),

/***/ "./containers/Topbar/Topbar.js":
/*!*************************************!*\
  !*** ./containers/Topbar/Topbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout/style/css */ "../../node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/redux/app/actions */ "../../node_modules/@iso/redux/app/actions.js");
/* harmony import */ var _TopbarNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopbarNotification */ "./containers/Topbar/TopbarNotification.js");
/* harmony import */ var _TopbarMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopbarMessage */ "./containers/Topbar/TopbarMessage.js");
/* harmony import */ var _TopbarSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopbarSearch */ "./containers/Topbar/TopbarSearch.js");
/* harmony import */ var _TopbarUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TopbarUser */ "./containers/Topbar/TopbarUser.js");
/* harmony import */ var _TopbarAddToCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TopbarAddToCart */ "./containers/Topbar/TopbarAddToCart.js");
/* harmony import */ var _Topbar_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Topbar.styles */ "./containers/Topbar/Topbar.styles.js");



var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/Topbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const {
  Header
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a;
const {
  toggleCollapsed
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_5__["default"];

class Topbar extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  render() {
    const {
      toggleCollapsed,
      url,
      customizedTheme,
      locale
    } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return __jsx(_Topbar_styles__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(Header, {
      style: styling,
      className: collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "isoLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("button", {
      className: collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen',
      style: {
        color: customizedTheme.textColor
      },
      onClick: toggleCollapsed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("ul", {
      className: "isoRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("li", {
      className: "isoSearch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_TopbarSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      locale: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'notification'
      }),
      className: "isoNotify",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_TopbarNotification__WEBPACK_IMPORTED_MODULE_6__["default"], {
      locale: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'message'
      }),
      className: "isoMsg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_TopbarMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      locale: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'addToCart'
      }),
      className: "isoCart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_TopbarAddToCart__WEBPACK_IMPORTED_MODULE_10__["default"], {
      url: url,
      locale: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })), __jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'user'
      }),
      className: "isoUser",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx(_TopbarUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
      locale: locale,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.App, {
  locale: state.LanguageSwitcher.language.locale,
  customizedTheme: state.ThemeSwitcher.topbarTheme
}), {
  toggleCollapsed
})(Topbar));

/***/ }),

/***/ "./containers/Topbar/Topbar.styles.js":
/*!********************************************!*\
  !*** ./containers/Topbar/Topbar.styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Topbarstyles__TopbarWrapper",
  componentId: "u06vju-0"
})([".isomorphicTopbar{display:flex;justify-content:space-between;background-color:#ffffff;border-bottom:1px solid rgba(0,0,0,0.1);padding:", ";z-index:1000;", ";@media only screen and (max-width:767px){padding:", ";}&.collapsed{padding:", ";@media only screen and (max-width:767px){padding:", ";}}.isoLeft{display:flex;align-items:center;@media only screen and (max-width:767px){margin:", ";}.triggerBtn{width:24px;height:100%;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;position:relative;cursor:pointer;&:before{content:'\f20e';font-family:'Ionicons';font-size:26px;color:inherit;line-height:0;position:absolute;}}}.isoRight{display:flex;align-items:center;justify-content:center;margin:0;li{margin-left:", ";margin-right:", ";cursor:pointer;line-height:normal;position:relative;display:inline-block;@media only screen and (max-width:360px){margin-left:", ";margin-right:", ";}&:last-child{margin:0;}i{font-size:24px;color:", ";line-height:1;}.isoIconWrapper{position:relative;line-height:normal;span{font-size:12px;color:#fff;background-color:", ";width:20px;height:20px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:20px;position:absolute;top:-8px;left:", ";right:", ";", ";}}&.isoMail{.isoIconWrapper{span{background-color:", ";}}}&.isoNotify{.isoIconWrapper{span{background-color:", ";}}}&.isoMsg{.isoIconWrapper{span{background-color:", ";}}}&.isoCart{.isoIconWrapper{span{background-color:", ";}}}&.isoUser{.isoImgWrapper{width:40px;height:40px;display:flex;align-items:center;justify-content:center;position:relative;background-color:", ";", ";img{height:100%;object-fit:cover;}.userActivity{width:10px;height:10px;display:block;background-color:", ";position:absolute;bottom:0;right:3px;border:1px solid #ffffff;", ";}}}}}}.isoUserDropdown{.ant-popover-inner{.ant-popover-inner-content{.isoUserDropdownContent{padding:7px 0;display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;.isoBorderRadius(5px);", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}}}}.ant-popover{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:360px;min-width:160px;flex-shrink:0;", ";", ";@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;width:100%;", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin-right:15px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding-right:15px;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}}}}&.topbarMail{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:519px){right:-170px;}}}}}&.topbarMessage{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-69px;}}}}}&.topbarNotification{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-120px;}}}}}&.topbarAddtoCart{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";}}}}}}"], props => props['data-rtl'] === 'rtl' ? '0 265px 0 31px' : '0 31px 0 265px', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '0px 260px 0px 15px !important' : '0px 15px 0px 260px !important', props => props['data-rtl'] === 'rtl' ? '0 89px 0 31px' : '0 31px 0 89px', props => props['data-rtl'] === 'rtl' ? '0px 15px !important' : '0px 15px !important', props => props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0', props => props['data-rtl'] === 'rtl' ? '35px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '35px', props => props['data-rtl'] === 'rtl' ? '25px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '25px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? 'inherit' : '10px', props => props['data-rtl'] === 'rtl' ? '10px' : 'inherit', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('color', 3), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 6), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarWrapper));

/***/ }),

/***/ "./containers/Topbar/TopbarAddToCart.js":
/*!**********************************************!*\
  !*** ./containers/Topbar/TopbarAddToCart.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/components/uielements/popover */ "../../node_modules/@iso/components/uielements/popover.js");
/* harmony import */ var _iso_components_Cart_SingleCartModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/Cart/SingleCartModal */ "../../node_modules/@iso/components/Cart/SingleCartModal.js");
/* harmony import */ var _iso_redux_ecommerce_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/redux/ecommerce/actions */ "../../node_modules/@iso/redux/ecommerce/actions.js");
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/TopbarAddToCart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const {
  changeViewTopbarCart,
  changeProductQuantity
} = _iso_redux_ecommerce_actions__WEBPACK_IMPORTED_MODULE_7__["default"];
let totalPrice;

class TopbarAddtoCart extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.cancelQuantity = this.cancelQuantity.bind(this);
  }

  hide() {
    this.props.changeViewTopbarCart(false);
  }

  handleVisibleChange() {
    this.props.changeViewTopbarCart(!this.props.viewTopbarCart);
  }

  renderProducts() {
    const {
      productQuantity,
      products
    } = this.props;
    totalPrice = 0;

    if (!productQuantity || productQuantity.length === 0) {
      return __jsx("div", {
        className: "isoNoItemMsg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "No item found"));
    }

    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return __jsx(_iso_components_Cart_SingleCartModal__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        key: product.objectID,
        quantity: product.quantity,
        changeQuantity: this.changeQuantity,
        cancelQuantity: this.cancelQuantity
      }, products[product.objectID], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    });
  }

  changeQuantity(objectID, quantity) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      } else {
        newProductQuantity.push({
          objectID,
          quantity
        });
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  cancelQuantity(objectID) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  render() {
    const {
      url,
      productQuantity,
      viewTopbarCart,
      customizedTheme
    } = this.props;

    const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "topbarAddtoCart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("div", {
      className: "isoDropdownHeader",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Cart")), __jsx("div", {
      className: "isoDropdownBody isoCartItemsWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, this.renderProducts()), __jsx("div", {
      className: "isoDropdownFooterLinks",
      onClick: this.hide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/dashboard/cart`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "View Cart")), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Total Price: ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "$", totalPrice.toFixed(2)))));

    return __jsx(_iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: content,
      trigger: "click",
      visible: viewTopbarCart,
      onVisibleChange: this.handleVisibleChange,
      placement: "bottomLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "isoIconWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("i", {
      className: "ion-android-cart",
      style: {
        color: customizedTheme.textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), productQuantity.length === 0 ? '' : __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, productQuantity.length)));
  }

}

function mapStateToProps(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.Ecommerce, {
    customizedTheme: state.ThemeSwitcher.topbarTheme
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  changeViewTopbarCart,
  changeProductQuantity
})(TopbarAddtoCart));

/***/ }),

/***/ "./containers/Topbar/TopbarDropdown.styles.js":
/*!****************************************************!*\
  !*** ./containers/Topbar/TopbarDropdown.styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "../../node_modules/@iso/lib/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarDropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TopbarDropdownstyles__TopbarDropdownWrapper",
  componentId: "mo3q2b-0"
})(["display:flex;flex-direction:column;background-color:#ffffff;margin:-8px -16px;width:360px;min-width:160px;flex-shrink:0;", ";", ";", ";@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";a{text-decoration:none;}.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;text-align:", ";width:100%;border-bottom:1px solid ", ";", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin:", ";display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding:", ";}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}&.topbarMail{@media only screen and (max-width:519px){right:-170px;}}&.topbarMessage{@media only screen and (max-width:500px){right:-69px;}}&.topbarNotification{@media only screen and (max-width:500px){right:-120px;}}&.topbarAddtoCart{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";display:flex;flex-direction:column;.isoNoItemMsg{height:100%;display:flex;align-items:center;justify-content:center;span{font-size:30px;font-weight:300;color:", ";line-height:1.2;}}}}&.isoUserDropdown{padding:7px 0;display:flex;flex-direction:column;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;", ";", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}"], Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 2px 10px rgba(0,0,0,0.2)'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 2), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 9), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('50%'), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 6), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('5px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])('0 2px 10px rgba(0,0,0,0.2)'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('secondary', 6));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarDropdownWrapper));

/***/ }),

/***/ "./containers/Topbar/TopbarMessage.js":
/*!********************************************!*\
  !*** ./containers/Topbar/TopbarMessage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarMessage; });
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");
/* harmony import */ var _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/user3.png */ "../../node_modules/@iso/assets/images/user3.png");
/* harmony import */ var _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/TopbarMessage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const demoMassage = [{
  id: 1,
  name: 'David Doe',
  time: '3 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  time: '4 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  time: '5 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  time: '6 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarMessage() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "topbarMessage withImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "isoDropdownHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Messages")), __jsx("div", {
    className: "isoDropdownBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, demoMassage.map(massage => __jsx("a", {
    className: "isoDropdownListItem",
    key: massage.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "isoImgWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("img", {
    alt: "#",
    src: _iso_assets_images_user3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("div", {
    className: "isoListContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "isoListHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, massage.name), __jsx("span", {
    className: "isoDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, massage.time)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, massage.massage))))), __jsx("a", {
    className: "isoViewAllBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "View All"));

  return __jsx(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "isoIconWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("i", {
    className: "ion-chatbubbles",
    style: {
      color: customizedTheme.textColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, demoMassage.length)));
}

/***/ }),

/***/ "./containers/Topbar/TopbarNotification.js":
/*!*************************************************!*\
  !*** ./containers/Topbar/TopbarNotification.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarNotification; });
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style/css */ "../../node_modules/antd/lib/popover/style/css.js");
/* harmony import */ var antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");


var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/TopbarNotification.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const demoNotifications = [{
  id: 1,
  name: 'David Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarNotification() {
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "topbarNotification",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "isoDropdownHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Notifications")), __jsx("div", {
    className: "isoDropdownBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, demoNotifications.map(notification => __jsx("a", {
    className: "isoDropdownListItem",
    key: notification.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, notification.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, notification.notification)))), __jsx("a", {
    className: "isoViewAllBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "View All"));

  return __jsx(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "isoIconWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("i", {
    className: "ion-android-notifications",
    style: {
      color: customizedTheme.textColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, demoNotifications.length)));
}

/***/ }),

/***/ "./containers/Topbar/TopbarSearch.js":
/*!*******************************************!*\
  !*** ./containers/Topbar/TopbarSearch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/input */ "../../node_modules/@iso/components/uielements/input.js");
/* harmony import */ var _TopbarSearchModal_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopbarSearchModal.styles */ "./containers/Topbar/TopbarSearchModal.styles.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/TopbarSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Searchbar(props) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });
  return __jsx(_iso_components_uielements_input__WEBPACK_IMPORTED_MODULE_2__["InputSearch"], {
    id: "InputTopbarSearch",
    size: "large",
    placeholder: "Enter search text",
    onBlur: props.onBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  });
}

function TopbarSearch() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const customizedTheme = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  const handleCancel = () => {
    setVisibility(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setVisibility(false);
    }, 200);
  };

  const showModal = () => {
    setVisibility(true);
  };

  return __jsx("div", {
    onClick: showModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    className: "ion-ios-search-strong",
    style: {
      color: customizedTheme.textColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_TopbarSearchModal_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: visible,
    onOk: handleCancel,
    onCancel: handleCancel,
    wrapClassName: "isoSearchModal",
    width: "60%",
    footer: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "isoSearchContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, visible ? __jsx(Searchbar, {
    onBlur: handleBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }) : '')));
}

/***/ }),

/***/ "./containers/Topbar/TopbarSearchModal.styles.js":
/*!*******************************************************!*\
  !*** ./containers/Topbar/TopbarSearchModal.styles.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/components/Feedback/Modal */ "../../node_modules/@iso/components/Feedback/Modal.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "../../node_modules/@iso/lib/helpers/rtl.js");




const TopbarSearchModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_iso_components_Feedback_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "TopbarSearchModalstyles__TopbarSearchModal",
  componentId: "noc4sy-0"
})(["&.ant-modal{top:150px;padding-bottom:0;}.ant-modal-close-x{width:28px;height:28px;line-height:28px;display:none;}.ant-modal-content{overflow:hidden;border-radius:5px;.ant-modal-header{display:none;}.ant-modal-body{padding:0px;.isoSearchContainer{.ant-input-search{.ant-input{border:0;border-radius:0;padding-left:", ";padding-right:", ";height:60px;font-size:14px;&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}&:focus{outline:0;box-shadow:none;}}}.ant-input-suffix{right:", ";left:", ";height:0;&:before{content:'\f4a4';font-family:'ionicons';font-size:24px;color:", ";}.ant-input-search-icon{display:none;}}}}}"], props => props['data-rtl'] === 'rtl' ? '15px' : '55px', props => props['data-rtl'] === 'rtl' ? '55px' : '15px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? '20px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '20px', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('text', 2));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_3__["default"])(TopbarSearchModal));

/***/ }),

/***/ "./containers/Topbar/TopbarUser.js":
/*!*****************************************!*\
  !*** ./containers/Topbar/TopbarUser.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopbarUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/uielements/popover */ "../../node_modules/@iso/components/uielements/popover.js");
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/actions */ "./authentication/actions.js");
/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopbarDropdown.styles */ "./containers/Topbar/TopbarDropdown.styles.js");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/user1.png */ "../../node_modules/@iso/assets/images/user1.png");
/* harmony import */ var _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/containers/Topbar/TopbarUser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  logout
} = _authentication_actions__WEBPACK_IMPORTED_MODULE_3__["default"];

function TopbarUser() {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "isoUserDropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "isoDropdownLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Settings"), __jsx("a", {
    className: "isoDropdownLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Feedback"), __jsx("a", {
    className: "isoDropdownLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Help"), __jsx("a", {
    className: "isoDropdownLink",
    onClick: () => dispatch(logout()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Logout"));

  return __jsx(_iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    arrowPointAtCenter: true,
    placement: "bottomLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "isoImgWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    alt: "user",
    src: _iso_assets_images_user1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("span", {
    className: "userActivity online",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
}

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authentication_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication/auth.utils */ "./authentication/auth.utils.js");
/* harmony import */ var _containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/DashboardLayout/DashboardLayout */ "./containers/DashboardLayout/DashboardLayout.js");
/* harmony import */ var _iso_containers_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/containers/Widgets/Widgets */ "../../node_modules/@iso/containers/Widgets/Widgets.js");
var _jsxFileName = "/Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/pages/dashboard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (Object(_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_2__["withAuthSync"])(() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Home page")), __jsx(_containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_iso_containers_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})))));

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./pages/dashboard/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/biswa/Sites/Others/demo/Isomorphic/packages/isomorphic-next/pages/dashboard/index.js */"./pages/dashboard/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

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

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

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

/***/ "antd/lib/progress":
/*!************************************!*\
  !*** external "antd/lib/progress" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/switch":
/*!**********************************!*\
  !*** external "antd/lib/switch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "clone":
/*!************************!*\
  !*** external "clone" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

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

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

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
//# sourceMappingURL=dashboard.js.map