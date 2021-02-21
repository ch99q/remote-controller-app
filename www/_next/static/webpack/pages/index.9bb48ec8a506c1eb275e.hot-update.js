webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/use-firebase */ \"./hooks/use-firebase.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/christian/Projects/School/remote-controller-app/app/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var firebase = Object(hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__[\"useFirebase\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    firebase.firestore().collection(\"monitor\").doc(\"control\").onSnapshot(function (snapshot) {\n      if (snapshot.exists) {\n        setData(snapshot.data());\n      }\n    });\n  }, []);\n\n  var update = function update() {\n    firebase.firestore().collection(\"monitor\").doc(\"control\").update({\n      title: document.getElementById(\"title\").innerText,\n      description: document.getElementById(\"description\").innerText\n    });\n  };\n\n  if (!data) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"px-16 py-16 text-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"text-2xl font-medium tracking-wider\",\n      children: \"Remote Controller\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      id: \"title\",\n      contentEditable: true,\n      onKeyUp: update,\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      id: \"description\",\n      contentEditable: true,\n      onKeyUp: update,\n      children: data.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"9Y3YGyxN/wcC0WSNuM11Vg1ThKU=\", false, function () {\n  return [hooks_use_firebase__WEBPACK_IMPORTED_MODULE_1__[\"useFirebase\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImZpcmViYXNlIiwidXNlRmlyZWJhc2UiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsIm9uU25hcHNob3QiLCJzbmFwc2hvdCIsImV4aXN0cyIsInVwZGF0ZSIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLHNFQUFXLEVBQTVCOztBQUQ2QixrQkFHTEMsc0RBQVEsQ0FBQyxJQUFELENBSEg7QUFBQSxNQUd0QkMsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEwsWUFBUSxDQUNMTSxTQURILEdBRUdDLFVBRkgsQ0FFYyxTQUZkLEVBR0dDLEdBSEgsQ0FHTyxTQUhQLEVBSUdDLFVBSkgsQ0FJYyxVQUFDQyxRQUFELEVBQWM7QUFDeEIsVUFBSUEsUUFBUSxDQUFDQyxNQUFiLEVBQXFCO0FBQ25CUCxlQUFPLENBQUNNLFFBQVEsQ0FBQ1AsSUFBVCxFQUFELENBQVA7QUFDRDtBQUNGLEtBUkg7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUOztBQVlBLE1BQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJaLFlBQVEsQ0FDTE0sU0FESCxHQUVHQyxVQUZILENBRWMsU0FGZCxFQUdHQyxHQUhILENBR08sU0FIUCxFQUlHSSxNQUpILENBSVU7QUFDTkMsV0FBSyxFQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLFNBRGxDO0FBRU5DLGlCQUFXLEVBQUVILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0M7QUFGOUMsS0FKVjtBQVFELEdBVEQ7O0FBV0EsTUFBSSxDQUFDYixJQUFMLEVBQVcsT0FBTyxJQUFQO0FBRVgsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBRyxRQUFFLEVBQUMsT0FBTjtBQUFjLHFCQUFlLE1BQTdCO0FBQThCLGFBQU8sRUFBRVMsTUFBdkM7QUFBQSxnQkFDR1QsSUFBSSxDQUFDVTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQU9FO0FBQUcsUUFBRSxFQUFDLGFBQU47QUFBb0IscUJBQWUsTUFBbkM7QUFBb0MsYUFBTyxFQUFFRCxNQUE3QztBQUFBLGdCQUNHVCxJQUFJLENBQUNjO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBM0N1QmxCLEk7VUFDTEUsOEQ7OztLQURLRixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRmlyZWJhc2UgfSBmcm9tIFwiaG9va3MvdXNlLWZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZmlyZWJhc2UgPSB1c2VGaXJlYmFzZSgpO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgLmNvbGxlY3Rpb24oXCJtb25pdG9yXCIpXG4gICAgICAuZG9jKFwiY29udHJvbFwiKVxuICAgICAgLm9uU25hcHNob3QoKHNuYXBzaG90KSA9PiB7XG4gICAgICAgIGlmIChzbmFwc2hvdC5leGlzdHMpIHtcbiAgICAgICAgICBzZXREYXRhKHNuYXBzaG90LmRhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGZpcmViYXNlXG4gICAgICAuZmlyZXN0b3JlKClcbiAgICAgIC5jb2xsZWN0aW9uKFwibW9uaXRvclwiKVxuICAgICAgLmRvYyhcImNvbnRyb2xcIilcbiAgICAgIC51cGRhdGUoe1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lclRleHQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCxcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTE2IHB5LTE2IHRleHQtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdHJhY2tpbmctd2lkZXJcIj5SZW1vdGUgQ29udHJvbGxlcjwvaDE+XG5cbiAgICAgIDxwIGlkPVwidGl0bGVcIiBjb250ZW50RWRpdGFibGUgb25LZXlVcD17dXBkYXRlfT5cbiAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwIGlkPVwiZGVzY3JpcHRpb25cIiBjb250ZW50RWRpdGFibGUgb25LZXlVcD17dXBkYXRlfT5cbiAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})