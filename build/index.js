(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@usertech/apollo-client-utils", [], factory);
	else if(typeof exports === 'object')
		exports["@usertech/apollo-client-utils"] = factory();
	else
		root["@usertech/apollo-client-utils"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);




const introspectionQuery = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default.a`
	query IntrospectionFragmentMatcherQuery {
		__schema {
			types {
				kind
				name
				possibleTypes {
					name
				}
			}
		}
	}
`;

const createIntrospectionFragmentMatcher = ({ link }) => new Promise(function ($return, $error) {
	let introspectionQueryResult, introspectionQueryResultData;
	return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["makePromise"])(Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["execute"])(link, { query: introspectionQuery }))).then(function ($await_1) {
		try {
			introspectionQueryResult = $await_1;
			introspectionQueryResultData = {
				__schema: {
					types: introspectionQueryResult.data.__schema.types.filter(type => type.possibleTypes !== null)
				}
			};


			return $return(new __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__["IntrospectionFragmentMatcher"]({
				introspectionQueryResultData
			}));
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}, $error);
});

/* harmony default export */ __webpack_exports__["a"] = (createIntrospectionFragmentMatcher);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createDefaultApolloClient__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createIntrospectionFragmentMatcher__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMockLink__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultApolloClient", function() { return __WEBPACK_IMPORTED_MODULE_0__createDefaultApolloClient__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createIntrospectionFragmentMatcher", function() { return __WEBPACK_IMPORTED_MODULE_1__createIntrospectionFragmentMatcher__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createMockLink", function() { return __WEBPACK_IMPORTED_MODULE_2__createMockLink__["a"]; });






/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createIntrospectionFragmentMatcher__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






const createDefaultApolloClient = ({ link, useIntrospectionFragmentMatcher = false }) => new Promise(function ($return, $error) {
	let cacheOptions, cache;

	cacheOptions = {};
	if (useIntrospectionFragmentMatcher) {
		return Promise.resolve(Object(__WEBPACK_IMPORTED_MODULE_2__createIntrospectionFragmentMatcher__["a" /* default */])({ link })).then(function ($await_2) {
			try {
				cacheOptions = _extends({}, cacheOptions, {
					fragmentMatcher: $await_2
				});
				return $If_1.call(this);
			} catch ($boundEx) {
				return $error($boundEx);
			}
		}.bind(this), $error);
	}

	function $If_1() {
		cache = new __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__["InMemoryCache"](cacheOptions);


		return $return(new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
			link,
			cache
		}));
	}

	return $If_1.call(this);
});

/* harmony default export */ __webpack_exports__["a"] = (createDefaultApolloClient);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_schema__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_schema__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tools__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tools__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





const createMockLink = (_ref) => {
	var _ref$defaultOperation = _ref.defaultOperationDelay;
	let defaultOperationDelay = _ref$defaultOperation === undefined ? 500 : _ref$defaultOperation;
	var _ref$operationsDelays = _ref.operationsDelays;

	let operationsDelays = _ref$operationsDelays === undefined ? {
		IntrospectionFragmentMatcherQuery: 1200
	} : _ref$operationsDelays,
	    mocks = _ref.mocks,
	    preserveResolvers = _ref.preserveResolvers,
	    makeExecutableSchemaParams = _objectWithoutProperties(_ref, ['defaultOperationDelay', 'operationsDelays', 'mocks', 'preserveResolvers']);

	// mock link
	const schema = Object(__WEBPACK_IMPORTED_MODULE_2_graphql_tools__["makeExecutableSchema"])(makeExecutableSchemaParams);
	Object(__WEBPACK_IMPORTED_MODULE_2_graphql_tools__["addMockFunctionsToSchema"])({ schema, mocks, preserveResolvers });
	const mockLink = new __WEBPACK_IMPORTED_MODULE_1_apollo_link_schema__["SchemaLink"]({
		schema,
		context: ({ getContext }) => getContext()
	});

	// delay link
	const delayLink = new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"]((operation, forward) => {
		const operationName = operation.operationName;

		const presetOperationDelay = operationsDelays[operationName];
		const operationDelay = typeof presetOperationDelay !== 'undefined' ? presetOperationDelay : defaultOperationDelay;
		return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["Observable"](observer => {
			let handle;
			// eslint-disable-next-line
			setTimeout(() => {
				handle = forward(operation).subscribe({
					next: observer.next.bind(observer),
					error: observer.error.bind(observer),
					complete: observer.complete.bind(observer)
				});
			}, operationDelay);
			return () => {
				if (handle) handle.unsubscribe();
			};
		});
	});

	return __WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"].from([delayLink, mockLink]);
};

/* harmony default export */ __webpack_exports__["a"] = (createMockLink);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-schema");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map