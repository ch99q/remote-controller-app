webpackHotUpdate_N_E("pages/monitor",{

/***/ "./pages/monitor.tsx":
/*!***************************!*\
  !*** ./pages/monitor.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Monitor; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/use-firebase */ \"./hooks/use-firebase.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/christian/Projects/School/remote-controller-app/app/pages/monitor.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Monitor() {\n  _s();\n\n  var firebase = Object(hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__[\"useFirebase\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    firebase.firestore().collection(\"monitor\").doc(\"control\").onSnapshot(function (snapshot) {\n      if (snapshot.exists) {\n        setData(snapshot.data());\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Hello World\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: JSON.stringify(data)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Monitor, \"+jfMSmewa2nu1wIXyA7d0mXWOEM=\", false, function () {\n  return [hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__[\"useFirebase\"]];\n});\n\n_c = Monitor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Monitor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9uaXRvci50c3g/OGYwNyJdLCJuYW1lcyI6WyJNb25pdG9yIiwiZmlyZWJhc2UiLCJ1c2VGaXJlYmFzZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZXhpc3RzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyxzRUFBVyxFQUE1Qjs7QUFEZ0Msa0JBR1JDLHNEQUFRLENBQUMsRUFBRCxDQUhBO0FBQUEsTUFHekJDLElBSHlCO0FBQUEsTUFHbkJDLE9BSG1COztBQUtoQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLFlBQVEsQ0FDTE0sU0FESCxHQUVHQyxVQUZILENBRWMsU0FGZCxFQUdHQyxHQUhILENBR08sU0FIUCxFQUlHQyxVQUpILENBSWMsVUFBQ0MsUUFBRCxFQUFjO0FBQ3hCLFVBQUlBLFFBQVEsQ0FBQ0MsTUFBYixFQUFxQjtBQUNuQlAsZUFBTyxDQUFDTSxRQUFRLENBQUNQLElBQVQsRUFBRCxDQUFQO0FBQ0Q7QUFDRixLQVJIO0FBU0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUlTLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBdkJ1QkosTztVQUNMRSw4RDs7O0tBREtGLE8iLCJmaWxlIjoiLi9wYWdlcy9tb25pdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZpcmViYXNlIH0gZnJvbSBcImhvb2tzL3VzZS1maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb25pdG9yKCkge1xuICBjb25zdCBmaXJlYmFzZSA9IHVzZUZpcmViYXNlKCk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmNvbGxlY3Rpb24oXCJtb25pdG9yXCIpXG4gICAgICAuZG9jKFwiY29udHJvbFwiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMpIHtcbiAgICAgICAgICBzZXREYXRhKHNuYXBzaG90LmRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+SGVsbG8gV29ybGQ8L3A+XG4gICAgICA8cD57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/monitor.tsx\n");

/***/ })

})