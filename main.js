/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    border: none;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(58, 58, 94);\n    padding: 0.25rem;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.appContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5em;\n    width: 95vw;\n    height: 90vh;\n    border-radius: 1rem;\n    background-color: rgba(70, 88, 187, 0.8);\n}\n\ninput[type='button'] {\n    width: 10%;\n    height: auto;\n}\n\ninput[type='text'] {\n    text-align: center;\n}\n\n#loadAnimation {\n    border: 16px solid #f3f3f3;\n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    margin: auto;\n    animation: spin 2s linear infinite;\n}\n\n#loadAnimationOff {\n    display: none;\n}\n\n.result, .description, .title {\n    color: white;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.instructions {\n    display: flex;\n    justify-content: center;\n    background-color: #3460db;\n    text-align: center;\n    color: white;\n}\n\n.gameInterface {\n    display: flex;\n    justify-content: center;\n    width: 95%;\n    height: 95%;\n    margin: 1em;\n    background-color: #3498db;\n}\n\n.playerContainer, .cpuContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 95%;\n    height: 95%;\n    margin: 1em;\n    background-color: aliceblue;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(9, 1fr);\n    height: 75%;\n    width: 75%;\n}\n\n.space {\n    display: flex;\n    background-color: #7ac2f1;\n    border: 1px black solid;\n    padding: 5%;\n}\n\n.occupiedSpace {\n    display: flex;\n    background-color: #62b9ae;\n    border: 1px black solid;\n    padding: 5%;\n}\n\n.missedShot {\n    display: flex;\n    background-color: #658faa;\n    border: 1px black solid;\n    padding: 5%;\n}\n\n.hitShot {\n    display: flex;\n    background-color: #f17a7a;\n    border: 1px black solid;\n    padding: 5%;\n}\n\n.winMessage {\n    display: flex;\n    background-color: cornflowerblue;\n    border: 1px black solid;\n    padding: 5%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Ship } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard {\n    constructor(length, width) {\n        this.length = length;\n        this.width = width;\n        this.board = new Array(length);\n        for (let i = 0; i < length; i++) {\n            this.board[i] = new Array(width);\n        }\n    }\n\n    placeShip(x, y, shipSize) {\n        const newShip = new Ship(shipSize);\n\n        while ((y + shipSize) > this.length) {\n            y = parseInt(prompt(`Ship too long to be placed at (${x}, ${y}), please enter a new Y coordinate.`));\n        }\n\n        if (shipSize > 1) {\n            for (let i = y; i < (y + shipSize); i++) {\n                while (this.getShip(x, i) !== null && this.getShip(x, i) !== 'O') {\n                    y = parseInt(prompt(`Ship placement conflicts with another ship, please enter a new Y coordinate. (Current coordinates hidden for gameplay balance.)`));\n                    i = y;\n                }\n            }\n    \n            for (let i = y; i < (y + shipSize); i++) {\n                this.board[x][i] = newShip;\n            }\n        }\n\n        else {\n            while (this.getShip(x, y) !== null && this.getShip(x, y) !== 'O') {\n                y = parseInt(prompt(`Ship placement (${x}, ${y}) conflicts with another ship, please enter a new Y coordinate.`));\n            }\n            this.board[x][y] = newShip;\n        }\n    }\n\n    getShip(x, y) {\n        if (this.board[x][y] == null) {\n            return null;\n        }\n        else if (this.board[x][y] == 'O') {\n            return 'O';\n        }\n        else {\n            return this.board[x][y];\n        }\n    }\n\n    receiveAttack(x, y) {\n        if (this.board[x][y] == null || this.board[x][y] == 'O') {\n            this.board[x][y] = 'O';\n            return null;\n        }\n        else {\n            this.board[x][y].hit();\n            this.board[x][y] = 'X';\n        }\n    }\n\n    checkSunkShips() {\n        for (let i = 0; i < this.length; i++) {\n            for (let j = 0; j < this.width; j++) {\n                if (this.board[i][j] == null || this.board[i][j] == 'O' || this.board[i][j] == 'X') {\n                    continue;\n                }\n                else {\n                    if (!this.getShip(i, j).isSunk()) {\n                        return false;\n                    }\n                }\n            }\n        }\n        return true;\n    }\n\n    resetBoard() {\n        for (let i = 0; i < this.length; i++) {\n            for (let j = 0; j < this.width; j++) {\n                this.board[i][j] = null;\n            }\n        }\n\n        const playerBoard = document.getElementById(\"playerBoard\");\n        const cpuBoard = document.getElementById(\"cpuBoard\");\n\n        const playerSpaces = Array.from(playerBoard.children);\n        const cpuSpaces = Array.from(cpuBoard.children);\n\n        playerSpaces.forEach((e) => {\n            e.setAttribute(\"class\", \"space\");\n        })\n\n        cpuSpaces.forEach((e) => {\n            e.setAttribute(\"class\", \"space\");\n        })\n    }\n};\n\nmodule.exports = { Gameboard }\n\n//# sourceURL=webpack://odin-weather/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nconst { Player } = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst player = new Player();\nplayer.type = \"Player\";\nconst cpu = new Player();\ncpu.type = \"Cpu\";\n\nconst playerBoard = document.getElementById(\"playerBoard\");\nconst cpuBoard = document.getElementById(\"cpuBoard\");\n\nconst playerSpaces = Array.from(playerBoard.children);\nconst cpuSpaces = Array.from(cpuBoard.children);\n\nfunction placeCpuShips() {\n\n    let x = Math.floor(Math.random() * 9);\n    let y = Math.floor(Math.random() * 9);\n    let x2 = Math.floor(Math.random() * 9);\n    let y2 = Math.floor(Math.random() * 6);\n    let x3 = Math.floor(Math.random() * 9);\n    let y3 = Math.floor(Math.random() * 4);\n\n    while ((y >= y2 && y <= y2 + 3) || (y >= y3 && y <= y3 + 5)) {\n        y = Math.floor(Math.random() * 9);\n    }\n\n    while ((y2 >= y3 && y2 <= y3 + 5)) {\n        y2 = Math.floor(Math.random() * 6);\n    }\n\n    cpu.gameboard.placeShip(x, y, 1);\n    cpu.gameboard.placeShip(x2, y2, 3);\n    cpu.gameboard.placeShip(x3, y3, 5);\n}\n\nfunction placePlayerShips() {\n    if (!player.gameboard.checkSunkShips()) {\n        return;\n    }\n\n    alert('The following prompts assume the positive X-axis to be from top to bottom and positive Y-axis to be from left to right.')\n\n    let x = parseInt(prompt('Please enter the x coordinate for your small ship.'));\n\n    while (x > 9) {\n        x = parseInt(prompt(`X coordinate for small ship (${x}) too high, please lower it.`));\n    }\n\n    while (x < 0) {\n        x = parseInt(prompt(`X coordinate for small ship (${x}) too low, please increase it.`));\n    }\n\n    let y = parseInt(prompt('Please enter the y coordinate for your small ship.'));\n\n    while (y > 9) {\n        y = parseInt(prompt(`Y coordinate for small ship (${y}) too high, please lower it.`));\n    }\n\n    while (y < 0) {\n        y = parseInt(prompt(`Y coordinate for small ship (${y}) too low, please increase it.`));\n    }\n\n    let x2 = parseInt(prompt('Please enter the x coordinate for your medium ship.'));\n\n    while (x2 > 9) {\n        x2 = parseInt(prompt(`X coordinate for medium ship (${x2}) too high, please lower it.`));\n    }\n\n    while (x2 < 0) {\n        x2 = parseInt(prompt(`X coordinate for medium ship (${x2}) too low, please increase it.`));\n    }\n\n    let y2 = parseInt(prompt('Please enter the y coordinate for your medium ship.'));\n\n\n    while (y2 > 6) {\n        y2 = parseInt(prompt(`Y coordinate for medium ship (${y2}) too high, please lower it.`));\n    }\n\n    while (y2 < 0) {\n        y2 = parseInt(prompt(`Y coordinate for medium ship (${y2}) too low, please increase it.`));\n    }\n\n    let x3 = parseInt(prompt('Please enter the x coordinate for your large ship.'));\n\n    while (x3 > 9) {\n        x3 = parseInt(prompt(`X coordinate for large ship (${x3}) too high, please lower it.`));\n    }\n\n    while (x3 < 0) {\n        x3 = parseInt(prompt(`X coordinate for large ship (${x3}) too low, please increase it.`));\n    }\n\n    let y3 = parseInt(prompt('Please enter the y coordinate for your large ship.'));\n\n    while (y3 > 4) {\n        y3 = parseInt(prompt(`Y coordinate for large ship (${y3}) too high, please lower it.`));\n    }\n\n    while (y3 < 0) {\n        y3 = parseInt(prompt(`Y coordinate for large ship (${y3}) too low, please increase it.`));\n    }\n\n    player.gameboard.placeShip(x, y, 1);\n    player.gameboard.placeShip(x2, y2, 3);\n    player.gameboard.placeShip(x3, y3, 5);\n\n    playerSpaces[9 * x + y].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x2 + y2].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x2 + y2 + 1].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x2 + y2 + 2].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x3 + y3].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x3 + y3 + 1].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x3 + y3 + 2].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x3 + y3 + 3].setAttribute(\"class\", \"occupiedSpace\");\n    playerSpaces[9 * x3 + y3 + 4].setAttribute(\"class\", \"occupiedSpace\");\n}\n\nfunction handleClick(index) {\n    let currX = Math.floor(index / 9);\n    let currY = index % 9;\n    if (this.disabled) {\n        return;\n    }\n\n    if ((cpu.gameboard.getShip(currX, currY) != null)) {\n        cpu.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each\n    }\n\n    if (cpu.gameboard.getShip(currX, currY) == null || cpu.gameboard.getShip(currX, currY) == 'O') {\n        this.setAttribute(\"class\", \"missedShot\");\n        this.disabled = true;\n    }\n    else {\n        this.setAttribute(\"class\", \"hitShot\");\n        this.disabled = true;\n    }\n\n    let coords = player.pickRandom();\n    if (player.gameboard.getShip(coords.x, coords.y) == null || player.gameboard.getShip(coords.x, coords.y) == 'O') {\n        playerSpaces[((9 * coords.x) + coords.y)].setAttribute(\"class\", \"missedShot\");\n    }\n    else {\n        playerSpaces[((9 * coords.x) + coords.y)].setAttribute(\"class\", \"hitShot\");\n    }\n\n    if (cpu.gameboard.checkSunkShips() == true) {\n        player.score++;\n        document.querySelector(\"#playerScore\").innerHTML = `Score: ${player.score}`;\n        const winBanner = document.createElement(\"h2\");\n        winBanner.innerHTML = \"Player Win!\";\n        winBanner.setAttribute(\"class\", \"result\");\n        document.querySelector(\".appContainer\").insertBefore(winBanner, document.querySelector(\".gameInterface\"));\n        setTimeout(function() {\n            alert(\"Player win!\");\n            winBanner.remove();\n        }, 1);\n        cpu.gameboard.resetBoard();\n        player.gameboard.resetBoard();\n        placeCpuShips();\n        setTimeout(function() {\n            placePlayerShips()}, 2);\n        cpuSpaces.forEach((child, index) => {\n            child.disabled = false;\n            // child.addEventListener(\"click\", handleClick.bind(child, index))\n        });\n    }\n    else if (player.gameboard.checkSunkShips() == true) {\n        cpu.score++;\n        document.querySelector(\"#cpuScore\").innerHTML = `Score: ${cpu.score}`;\n        const winBanner = document.createElement(\"h2\");\n        winBanner.innerHTML = \"CPU Win!\";\n        winBanner.setAttribute(\"class\", \"result\");\n        document.querySelector(\".appContainer\").insertBefore(winBanner, document.querySelector(\".gameInterface\"));\n        setTimeout(function() {\n            alert(\"CPU win!\");\n            winBanner.remove();\n        }, 1);\n        cpu.gameboard.resetBoard();\n        player.gameboard.resetBoard();\n        placeCpuShips();\n        setTimeout(function() {\n            placePlayerShips()}, 2);\n        cpuSpaces.forEach((child, index) => {\n            child.disabled = false;\n            // child.addEventListener(\"click\", handleClick.bind(child, index))\n        });\n    }\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    placeCpuShips();\n    setTimeout(placePlayerShips(), 2);\n    \n    cpuSpaces.forEach((child, index) => {\n        child.addEventListener(\"click\", handleClick.bind(child, index)\n        );\n    });\n})\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass Player {\n    constructor() {\n        this.gameboard = new Gameboard(9, 9);\n        this.type;\n        this.score = 0;\n    }\n\n    pickRandom() {\n        let x = Math.floor(Math.random() * 9);\n        let y = Math.floor(Math.random() * 9);\n        while (this.gameboard.getShip(x, y) == 'O' || this.gameboard.getShip(x, y) == 'X') {\n            x = Math.floor(Math.random() * 9);\n            y = Math.floor(Math.random() * 9);\n        }\n        \n        this.gameboard.receiveAttack(x, y);\n        return { x, y };\n    }\n\n    pickSpace(x, y) {\n        this.gameboard.receiveAttack(x, y);\n    }\n}\n\nmodule.exports = { Player }\n\n//# sourceURL=webpack://odin-weather/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n    constructor (length) {\n        this.length = length;\n        this.timesHit = 0;\n        this.sunk = false;\n\n    }\n\n    hit() {\n        this.timesHit++;\n    }\n\n    isSunk() {\n        return this.timesHit >= this.length ? true : false;\n    }\n}\n\nmodule.exports = { Ship };\n\n//# sourceURL=webpack://odin-weather/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;