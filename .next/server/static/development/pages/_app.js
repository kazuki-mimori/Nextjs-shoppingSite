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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.cjs");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/mimoriikkisuns/Desktop/Dev/Nextjs-shoppingSite/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Layout = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "\u30D5\u30FC\u30C9\u30C7\u30EA\u30D0\u30EA\u30FC\u30B5\u30FC\u30D3\u30B9"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  })), __jsx("header", {
    className: "jsx-3905241835",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3905241835",
    __self: undefined
  }, "a.jsx-3905241835{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW1vcmlpa2tpc3Vucy9EZXNrdG9wL0Rldi9OZXh0anMtc2hvcHBpbmdTaXRlL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCUyxBQUd5QixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9taW1vcmlpa2tpc3Vucy9EZXNrdG9wL0Rldi9OZXh0anMtc2hvcHBpbmdTaXRlL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgTmF2LCBOYXZJdGVtIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+44OV44O844OJ44OH44Oq44OQ44Oq44O844K144O844OT44K5PC90aXRsZT5cbiAgICAgIDxsaW5rIFxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC4wLjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBcbiAgICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuXG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj7jg5vjg7zjg6A8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPuOCteOCpOODs+OCpOODszwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7jgrXjgqTjg7PjgqLjg4Pjg5c8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgXG4gICAgICA8L05hdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8Q29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/mimoriikkisuns/Desktop/Dev/Nextjs-shoppingSite/components/Layout.js */"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "navbar navbar-dark bg-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3905241835" + " " + "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "\u30DB\u30FC\u30E0"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    className: "ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3905241835" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "\u30B5\u30A4\u30F3\u30A4\u30F3"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-3905241835" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7"))))), __jsx(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_1__);


const API_URL = "http://localhost:1337" || false;
const config = {
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
    uri: `${API_URL}/graphql`
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_1__["withData"])(config));

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

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

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

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
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
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
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
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
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

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


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
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
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
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
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as, options);
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
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

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
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
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
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
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
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
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


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
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

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

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
  var {
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
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "react-is");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/reactstrap/dist/reactstrap.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
var classNames = __webpack_require__(/*! classnames */ "classnames");
var reactPopper = __webpack_require__(/*! react-popper */ "react-popper");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "react-transition-group");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _extends() {
  _extends = Object.assign || function (target) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    return propType.apply(void 0, [props, propName, componentName].concat([].slice.call(arguments, 3)));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func, DOMElement, PropTypes__default["default"].shape({
  current: PropTypes__default["default"].any
})]);
var tagPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
}), PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
})]))]); // These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300 // $offcanvas-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  }

  if (isArrayOrNodeList(els)) {
    return els[0];
  }

  return els;
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = {
  __proto__: null,
  getScrollbarWidth: getScrollbarWidth,
  setScrollbarWidth: setScrollbarWidth,
  isBodyOverflowing: isBodyOverflowing,
  getOriginalBodyPadding: getOriginalBodyPadding,
  conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
  setGlobalCssModule: setGlobalCssModule,
  mapToCssModules: mapToCssModules,
  omit: omit,
  pick: pick,
  warnOnce: warnOnce,
  deprecated: deprecated,
  DOMElement: DOMElement,
  targetPropType: targetPropType,
  tagPropType: tagPropType,
  TransitionTimeouts: TransitionTimeouts,
  TransitionPropTypeKeys: TransitionPropTypeKeys,
  TransitionStatuses: TransitionStatuses,
  keyCodes: keyCodes,
  PopperPlacements: PopperPlacements,
  canUseDOM: canUseDOM,
  isReactRefObj: isReactRefObj,
  isObject: isObject,
  toNumber: toNumber,
  isFunction: isFunction,
  findDOMElements: findDOMElements,
  isArrayOrNodeList: isArrayOrNodeList,
  getTarget: getTarget,
  defaultToggleEvents: defaultToggleEvents,
  addMultipleEventListeners: addMultipleEventListeners,
  focusableElements: focusableElements
};

var _excluded$1f = ["className", "cssModule", "fluid", "tag"];
var propTypes$1l = {
  tag: tagPropType,
  fluid: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1j = {
  tag: 'div'
};

function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1f);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classNames__default["default"](className, containerClass), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Container.propTypes = propTypes$1l;
Container.defaultProps = defaultProps$1j;

var _excluded$1e = ["className", "cssModule", "noGutters", "tag", "widths"];
var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var rowColsPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var propTypes$1k = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes__default["default"].bool, 'Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/'),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: PropTypes__default["default"].array
};
var defaultProps$1i = {
  tag: 'div',
  widths: rowColWidths
};

function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1e);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classNames__default["default"](className, noGutters ? 'gx-0' : null, 'row', colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Row.propTypes = propTypes$1k;
Row.defaultProps = defaultProps$1i;

var _excluded$1d = ["className", "cssModule", "widths", "tag"];
var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string]),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$1j = {
  tag: tagPropType,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  xxl: columnProps$1,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  widths: PropTypes__default["default"].array
};
var defaultProps$1h = {
  tag: 'div',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var getColumnClasses = function getColumnClasses(attributes, cssModule, widths) {
  if (widths === void 0) {
    widths = colWidths$1;
  }

  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    modifiedAttributes: modifiedAttributes
  };
};

function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1d);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.modifiedAttributes,
      colClasses = _getColumnClasses.colClasses;

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classNames__default["default"](className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}

Col.propTypes = propTypes$1j;
Col.defaultProps = defaultProps$1h;

var _excluded$1c = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
var propTypes$1i = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Theme the navbar by adding a background color  */
  color: PropTypes__default["default"].string,

  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** This prop is passed if the background is dark, to make the text lighter */
  dark: PropTypes__default["default"].bool,

  /** Determine if to show toggler button */
  expand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Make the navbar fixed at the top */
  fixed: PropTypes__default["default"].string,
  full: PropTypes__default["default"].bool,

  /** Add `.navbar-light` class */
  light: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,

  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1g = {
  tag: 'nav',
  expand: false,
  container: 'fluid'
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  }

  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      container = props.container,
      Tag = props.tag,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1c);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  var containerClass = container && container === true ? 'container' : "container-" + container;
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), container ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: containerClass
  }, children) : children);
}

Navbar.propTypes = propTypes$1i;
Navbar.defaultProps = defaultProps$1g;

var _excluded$1b = ["className", "cssModule", "tag"];
var propTypes$1h = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1f = {
  tag: 'a'
};

function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1b);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-brand'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavbarBrand.propTypes = propTypes$1h;
NavbarBrand.defaultProps = defaultProps$1f;

var _excluded$1a = ["className", "cssModule", "active", "tag"];
var propTypes$1g = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,
  active: PropTypes__default["default"].bool
};
var defaultProps$1e = {
  tag: 'span'
};

function NavbarText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1a);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavbarText.propTypes = propTypes$1g;
NavbarText.defaultProps = defaultProps$1e;

var _excluded$19 = ["className", "cssModule", "children", "tag"];
var propTypes$1f = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes__default["default"].string,

  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node
};
var defaultProps$1d = {
  tag: 'button',
  type: 'button'
};

function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$19);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-toggler'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, attributes, {
    className: classes
  }), children || /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('navbar-toggler-icon', cssModule)
  }));
}

NavbarToggler.propTypes = propTypes$1f;
NavbarToggler.defaultProps = defaultProps$1d;

var _excluded$18 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
var propTypes$1e = {
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** fills the nav to extend to full available width */
  fill: PropTypes__default["default"].bool,

  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes__default["default"].oneOf(['center', 'end']),

  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes__default["default"].bool,

  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes__default["default"].bool,

  /** Make NavItems look like pills */
  pills: PropTypes__default["default"].bool,

  /** Make NavItems look like tabs */
  tabs: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string])
};
var defaultProps$1c = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  }

  if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$18);

  var classes = mapToCssModules(classNames__default["default"](className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Nav.propTypes = propTypes$1e;
Nav.defaultProps = defaultProps$1c;

var _excluded$17 = ["className", "cssModule", "active", "tag"];
var propTypes$1d = {
  /** Add active class to element */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1b = {
  tag: 'li'
};

function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$17);

  var classes = mapToCssModules(classNames__default["default"](className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavItem.propTypes = propTypes$1d;
NavItem.defaultProps = defaultProps$1b;

var _excluded$16 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes$1c = {
  /** Add active class to NavLink */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Disable the link */
  disabled: PropTypes__default["default"].bool,
  href: PropTypes__default["default"].any,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1a = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$16);

    var classes = mapToCssModules(classNames__default["default"](className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default["default"].Component);

NavLink.propTypes = propTypes$1c;
NavLink.defaultProps = defaultProps$1a;
var NavLink$1 = NavLink;

var _excluded$15 = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
var propTypes$1b = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Pass children so this component can wrap them */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Add custom class to list tag */
  listClassName: PropTypes__default["default"].string,

  /** Set a custom element for list tag */
  listTag: tagPropType,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$19 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$15);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"]('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/React__default["default"].createElement(ListTag, {
    className: listClasses
  }, children));
}

Breadcrumb.propTypes = propTypes$1b;
Breadcrumb.defaultProps = defaultProps$19;

var _excluded$14 = ["className", "cssModule", "active", "tag"];
var propTypes$1a = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: PropTypes__default["default"].bool,

  /** Add custom class to the element */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$18 = {
  tag: 'li'
};

function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$14);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
}

BreadcrumbItem.propTypes = propTypes$1a;
BreadcrumbItem.defaultProps = defaultProps$18;

var _excluded$13 = ["className", "cssModule", "variant", "innerRef"];
var propTypes$19 = {
  /** Disable the button if needed */
  active: PropTypes__default["default"].bool,

  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Change the variant to white */
  variant: PropTypes__default["default"].oneOf(['white']),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$17 = {
  'aria-label': 'close'
};

function CloseButton(props) {
  var className = props.className,
      variant = props.variant,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$13);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-close', variant && "btn-close-" + variant));
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    ref: innerRef,
    type: "button",
    className: classes
  }, attributes));
}

CloseButton.propTypes = propTypes$19;
CloseButton.defaultProps = defaultProps$17;

var _excluded$12 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes$18 = {
  /** Manually set the visual state of the button to active */
  active: PropTypes__default["default"].bool,

  /** Aria label */
  'aria-label': PropTypes__default["default"].string,
  block: PropTypes__default["default"].bool,

  /** Pass children so this component can wrap them */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Use the button as a close button */
  close: PropTypes__default["default"].bool,

  /** Change color of Button to one of the available colors */
  color: PropTypes__default["default"].string,

  /** Disables the button */
  disabled: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Adds outline to the button */
  outline: PropTypes__default["default"].bool,

  /** Make the button bigger or smaller */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$16 = {
  color: 'secondary',
  tag: 'button'
};

function Button(props) {
  var onClick = React.useCallback(function (e) {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      return props.onClick(e);
    }
  }, [props.onClick, props.disabled]);

  var active = props.active,
      ariaLabel = props['aria-label'],
      block = props.block,
      className = props.className,
      close = props.close,
      cssModule = props.cssModule,
      color = props.color,
      outline = props.outline,
      size = props.size,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$12);

  if (close) {
    return /*#__PURE__*/React__default["default"].createElement(CloseButton, attributes);
  }

  var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
  var classes = mapToCssModules(classNames__default["default"](className, 'btn', btnOutlineColor, size ? "btn-" + size : false, block ? 'd-block w-100' : false, {
    active: active,
    disabled: props.disabled
  }), cssModule);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    type: Tag === 'button' && attributes.onClick ? 'button' : undefined
  }, attributes, {
    className: classes,
    ref: innerRef,
    onClick: onClick,
    "aria-label": ariaLabel
  }));
}

Button.propTypes = propTypes$18;
Button.defaultProps = defaultProps$16;

var _excluded$11 = ["className"];
var propTypes$17 = {
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  defaultValue: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$15 = {
  defaultValue: false
};

function ButtonToggle(props) {
  var _useState = React.useState(props.defaultValue),
      toggled = _useState[0],
      setToggled = _useState[1];

  var _useState2 = React.useState(false),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var onBlur = React.useCallback(function (e) {
    if (props.onBlur) {
      props.onBlur(e);
    }

    setFocus(false);
  }, [props.onBlur]);
  var onFocus = React.useCallback(function (e) {
    if (props.onFocus) {
      props.onFocus(e);
    }

    setFocus(true);
  }, [props.onFocus]);
  var onClick = React.useCallback(function (e) {
    if (props.onClick) {
      props.onClick(e);
    }

    setToggled(!toggled);
  }, [props.onClick]);

  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$11);

  var classes = mapToCssModules(classNames__default["default"](className, {
    focus: focus
  }), props.cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button, _extends({
    active: toggled,
    onBlur: onBlur,
    onFocus: onFocus,
    onClick: onClick,
    className: classes
  }, attributes));
}

ButtonToggle.propTypes = propTypes$17;
ButtonToggle.defaultProps = defaultProps$15;

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = React__default["default"].createContext({});

var _excluded$10 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
var propTypes$16 = {
  a11y: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  direction: PropTypes__default["default"].oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
  group: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  nav: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  dropup: PropTypes__default["default"].bool,
  inNavbar: PropTypes__default["default"].bool,
  setActiveFromChild: PropTypes__default["default"].bool,
  menuRole: PropTypes__default["default"].oneOf(['listbox', 'menu'])
};
var defaultProps$14 = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default["default"].createRef();
    _this.menuRef = React__default["default"].createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var clickIsInContainer = container.contains(e.target) && container !== e.target;
    var clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;

    if ((clickIsInContainer && !clickIsInInput || clickIsInMenu) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this2 = this;

    var isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = keyCodes.tab === e.which;

    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        // Open the menu (if not open) and focus the first menu item
        if (!this.props.isOpen) {
          this.toggle(e);
        }

        setTimeout(function () {
          return _this2.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        // Focus the first menu item if tabbing from an open menu. We need this
        // for cases where the DropdownMenu sets a custom container, which may
        // not be the natural next item to tab to from the DropdownToggle.
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getItemType = function getItemType() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      menuRole: this.props.menuRole
    };
  };

  _proto.getMenuItems = function getMenuItems() {
    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
    // be null, but it is sometimes null in tests. To mitigate that, we just
    // use `this.getContainer()` as the fallback `menuContainer`.
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll("[role=\"" + this.getItemType() + "\"]"));
  };

  _proto.addEvents = function addEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this4 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this4.handleDocumentClick, true);
    });
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, _excluded$10);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default["default"].Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classNames__default["default"](className, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {
      'btn-group': group
    }, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group, _classNames.dropup = direction === 'up', _classNames.dropstart = direction === 'start' || direction === 'left', _classNames.dropend = direction === 'end' || direction === 'right', _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, /*#__PURE__*/React__default["default"].createElement(reactPopper.Manager, null, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default["default"].Component);

Dropdown.propTypes = propTypes$16;
Dropdown.defaultProps = defaultProps$14;
var Dropdown$1 = Dropdown;

var propTypes$15 = {
  children: PropTypes__default["default"].node
};

function ButtonDropdown(props) {
  return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
    group: true
  }, props));
}

ButtonDropdown.propTypes = propTypes$15;

var _excluded$$ = ["className", "cssModule", "size", "vertical", "tag"];
var propTypes$14 = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes__default["default"].string,

  /** Make the button bigger or smaller */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Make button group vertical */
  vertical: PropTypes__default["default"].bool
};
var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$$);

  var classes = mapToCssModules(classNames__default["default"](className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;

var _excluded$_ = ["className", "cssModule", "tag"];
var propTypes$13 = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$12 = {
  tag: 'div',
  role: 'toolbar'
};

function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$_);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-toolbar'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ButtonToolbar.propTypes = propTypes$13;
ButtonToolbar.defaultProps = defaultProps$12;

var _excluded$Z = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes$12 = {
  children: PropTypes__default["default"].node,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  divider: PropTypes__default["default"].bool,
  tag: tagPropType,
  header: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].bool
};
var defaultProps$11 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.onClick = function onClick(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;

    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;

    if (disabled || header || divider || text) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = _objectWithoutPropertiesLoose(_omit, _excluded$Z);

    var classes = mapToCssModules(classNames__default["default"](className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header && !text,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider,
      'dropdown-item-text': text
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      } else if (text) {
        Tag = 'span';
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default["default"].Component);

DropdownItem.propTypes = propTypes$12;
DropdownItem.defaultProps = defaultProps$11;
DropdownItem.contextType = DropdownContext;
var DropdownItem$1 = DropdownItem;

var _excluded$Y = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container", "updateOnSelect"];
var propTypes$11 = {
  tag: tagPropType,
  children: PropTypes__default["default"].node.isRequired,
  dark: PropTypes__default["default"].bool,
  end: PropTypes__default["default"].bool,

  /** Flips the menu to the opposite side if there is not enough space to fit */
  flip: PropTypes__default["default"].bool,
  modifiers: PropTypes__default["default"].array,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  style: PropTypes__default["default"].object,
  persist: PropTypes__default["default"].bool,
  strategy: PropTypes__default["default"].string,
  container: targetPropType,

  /** Update popper layout when a click event comes up. This leverages event bubbling. */
  updateOnSelect: PropTypes__default["default"].bool,
  right: deprecated(PropTypes__default["default"].bool, 'Please use "end" instead.')
};
var defaultProps$10 = {
  tag: 'div',
  flip: true,
  modifiers: []
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom'
};

var DropdownMenu = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }

    return 'menu';
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        dark = _this$props.dark,
        end = _this$props.end,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        strategy = _this$props.strategy,
        container = _this$props.container,
        updateOnSelect = _this$props.updateOnSelect,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$Y);

    var classes = mapToCssModules(classNames__default["default"](className, 'dropdown-menu', {
      'dropdown-menu-dark': dark,
      'dropdown-menu-end': end || right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = end || right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = [].concat(modifiers, [{
        name: 'flip',
        enabled: !!flip
      }]);
      var popper = /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        strategy: strategy
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement,
            update = _ref.update;

        var combinedStyle = _objectSpread2(_objectSpread2({}, _this.props.style), style);

        var handleRef = function handleRef(tagRef) {
          // Send the ref to `react-popper`
          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
          // it will cause it to close

          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef) onMenuRef(tagRef);
        };

        return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "data-popper-placement": placement,
          onClick: function onClick() {
            return updateOnSelect && update();
          }
        }));
      });

      if (container) {
        return ReactDOM__default["default"].createPortal(popper, getTarget(container));
      }

      return popper;
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "data-popper-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default["default"].Component);

DropdownMenu.propTypes = propTypes$11;
DropdownMenu.defaultProps = defaultProps$10;
DropdownMenu.contextType = DropdownContext;
var DropdownMenu$1 = DropdownMenu;

var _excluded$X = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes$10 = {
  caret: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  'aria-haspopup': PropTypes__default["default"].bool,
  split: PropTypes__default["default"].bool,
  tag: tagPropType,
  nav: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$$ = {
  color: 'secondary',
  'aria-haspopup': true
};

var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props['aria-haspopup'];
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$X);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classNames__default["default"](className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children: children
      }));
    }

    return /*#__PURE__*/React__default["default"].createElement(reactPopper.Reference, {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default["default"].Component);

DropdownToggle.propTypes = propTypes$10;
DropdownToggle.defaultProps = defaultProps$$;
DropdownToggle.contextType = DropdownContext;
var DropdownToggle$1 = DropdownToggle;

var _excluded$W = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

var propTypes$$ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  baseClass: PropTypes__default["default"].string,
  baseClassActive: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
});

var defaultProps$_ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  "in": true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$W);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classNames__default["default"](className, baseClass, isActive && baseClassActive), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$$;
Fade.defaultProps = defaultProps$_;

/**
 * AccordionContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  openId: PropTypes.string,
 * }
 */

var AccordionContext = React__default["default"].createContext({});

var _excluded$V = ["flush", "open", "toggle", "className", "cssModule", "tag", "innerRef"];
var propTypes$_ = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Render accordions edge-to-edge with their parent container */
  flush: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** The current active key that corresponds to the currently expanded card */
  open: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]).isRequired,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function that's triggered on clicking `AccordionHeader` */
  toggle: PropTypes__default["default"].func.isRequired
};
var defaultProps$Z = {
  tag: 'div'
};

function Accordion(props) {
  var flush = props.flush,
      open = props.open,
      toggle = props.toggle,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$V);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion', {
    'accordion-flush': flush
  }), cssModule);
  var accordionContext = React.useMemo(function () {
    return {
      open: open,
      toggle: toggle
    };
  });
  return /*#__PURE__*/React__default["default"].createElement(AccordionContext.Provider, {
    value: accordionContext
  }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  })));
}

Accordion.propTypes = propTypes$_;
Accordion.defaultProps = defaultProps$Z;

var _excluded$U = ["defaultOpen", "stayOpen"];
var propTypes$Z = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  defaultOpen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]),
  stayOpen: PropTypes__default["default"].bool
};
var defaultProps$Y = {
  tag: 'div'
};

function UncontrolledAccordion(_ref) {
  var defaultOpen = _ref.defaultOpen,
      stayOpen = _ref.stayOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$U);

  var _useState = React.useState(defaultOpen || (stayOpen ? [] : undefined)),
      open = _useState[0],
      setOpen = _useState[1];

  var toggle = function toggle(id) {
    if (stayOpen) {
      if (open.includes(id)) {
        setOpen(open.filter(function (accordionId) {
          return accordionId !== id;
        }));
      } else {
        setOpen([].concat(open, [id]));
      }
    } else if (open === id) {
      setOpen(undefined);
    } else {
      setOpen(id);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(Accordion, _extends({}, props, {
    open: open,
    toggle: toggle
  }));
}

UncontrolledAccordion.propTypes = propTypes$Z;
UncontrolledAccordion.defaultProps = defaultProps$Y;

var _excluded$T = ["className", "cssModule", "tag", "innerRef", "children", "targetId"];
var propTypes$Y = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Unique key used to control item's collapse/expand */
  targetId: PropTypes__default["default"].string.isRequired
};
var defaultProps$X = {
  tag: 'h2'
};

function AccordionHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      targetId = props.targetId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$T);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open,
      toggle = _useContext.toggle;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-header'), cssModule);
  var buttonClasses = mapToCssModules(classNames__default["default"]('accordion-button', {
    collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
}

AccordionHeader.propTypes = propTypes$Y;
AccordionHeader.defaultProps = defaultProps$X;

var _excluded$S = ["className", "cssModule", "tag", "innerRef"];
var propTypes$X = {
  children: PropTypes__default["default"].node,

  /** To add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$W = {
  tag: 'div'
};

function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$S);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

AccordionItem.propTypes = propTypes$X;
AccordionItem.defaultProps = defaultProps$W;

var _excluded$R = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

var _transitionStatusToCl;

var propTypes$W = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  /** Make content animation appear horizontally */
  horizontal: PropTypes__default["default"].bool,

  /** Set if Collapse is open or closed */
  isOpen: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Add custom class */
  className: PropTypes__default["default"].node,
  navbar: PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object])
});

var defaultProps$V = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

var Collapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dimension: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      dimension: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    this.getDimension(node); // eslint-disable-line no-unused-vars


    this.setState({
      dimension: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      dimension: null
    });
    this.props.onExited(node);
  };

  _proto.getDimension = function getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        horizontal = _this$props.horizontal,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded$R);

    var dimension = this.state.dimension;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      "in": isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var _ref;

      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classNames__default["default"](className, horizontal && 'collapse-horizontal', collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = dimension === null ? null : (_ref = {}, _ref[horizontal ? 'width' : 'height'] = dimension, _ref);
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, childProps, {
        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = propTypes$W;
Collapse.defaultProps = defaultProps$V;
var Collapse$1 = Collapse;

var _excluded$Q = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
var propTypes$V = {
  /** Unique key used to control item's collapse/expand */
  accordionId: PropTypes__default["default"].string.isRequired,

  /** To add custom class */
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,

  /** Pass ref to the component */
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$U = {
  tag: 'div'
};

function AccordionBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      accordionId = props.accordionId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$Q);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-collapse'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: "accordion-body"
  }, children));
}

AccordionBody.propTypes = propTypes$V;
AccordionBody.defaultProps = defaultProps$U;

var _excluded$P = ["className", "cssModule", "color", "innerRef", "pill", "tag"];
var propTypes$U = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change background color of Badge */
  color: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Add rounded corners to the Badge */
  pill: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$T = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      pill = props.pill,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$P);

  var classes = mapToCssModules(classNames__default["default"](className, 'badge', 'bg-' + color, pill ? 'rounded-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

Badge.propTypes = propTypes$U;
Badge.defaultProps = defaultProps$T;

var _excluded$O = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
var propTypes$T = {
  /** Toggles card padding using `.card-body` */
  body: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change background color of component */
  color: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Inverts the color */
  inverse: PropTypes__default["default"].bool,

  /** Changes the card to have only outline */
  outline: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$S = {
  tag: 'div'
};

function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$O);

  var classes = mapToCssModules(classNames__default["default"](className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

Card.propTypes = propTypes$T;
Card.defaultProps = defaultProps$S;

var _excluded$N = ["className", "cssModule", "tag"];
var propTypes$S = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$R = {
  tag: 'div'
};

function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$N);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardGroup.propTypes = propTypes$S;
CardGroup.defaultProps = defaultProps$R;

var _excluded$M = ["className", "cssModule", "tag"];
var propTypes$R = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$Q = {
  tag: 'div'
};

function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$M);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-deck'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardDeck.propTypes = propTypes$R;
CardDeck.defaultProps = defaultProps$Q;

var _excluded$L = ["className", "cssModule", "tag"];
var propTypes$Q = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$P = {
  tag: 'div'
};

function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$L);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-columns'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardColumns.propTypes = propTypes$Q;
CardColumns.defaultProps = defaultProps$P;

var _excluded$K = ["className", "cssModule", "innerRef", "tag"];
var propTypes$P = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$O = {
  tag: 'div'
};

function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$K);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

CardBody.propTypes = propTypes$P;
CardBody.defaultProps = defaultProps$O;

var _excluded$J = ["className", "cssModule", "tag", "innerRef"];
var propTypes$O = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$N = {
  tag: 'a'
};

function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$J);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-link'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
}

CardLink.propTypes = propTypes$O;
CardLink.defaultProps = defaultProps$N;

var _excluded$I = ["className", "cssModule", "tag"];
var propTypes$N = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$M = {
  tag: 'div'
};

function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$I);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardFooter.propTypes = propTypes$N;
CardFooter.defaultProps = defaultProps$M;

var _excluded$H = ["className", "cssModule", "tag"];
var propTypes$M = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$L = {
  tag: 'div'
};

function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$H);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardHeader.propTypes = propTypes$M;
CardHeader.defaultProps = defaultProps$L;

var _excluded$G = ["className", "cssModule", "top", "bottom", "tag"];
var propTypes$L = {
  /** Add `bottom` prop if image is at bottom of card */
  bottom: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Add `top` prop if image is at top of card */
  top: PropTypes__default["default"].bool
};
var defaultProps$K = {
  tag: 'img'
};

function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$G);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classNames__default["default"](className, cardImgClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardImg.propTypes = propTypes$L;
CardImg.defaultProps = defaultProps$K;

var _excluded$F = ["className", "cssModule", "tag"];
var propTypes$K = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$J = {
  tag: 'div'
};

function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$F);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-img-overlay'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardImgOverlay.propTypes = propTypes$K;
CardImgOverlay.defaultProps = defaultProps$J;

var _excluded$E = ["in", "children", "cssModule", "slide", "tag", "className"];

var CarouselItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props["in"],
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, _excluded$E);

    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      "in": isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classNames__default["default"](className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/React__default["default"].createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default["default"].Component);

CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  /** Set a custom element for this component */
  tag: tagPropType,
  "in": PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,

  /** Enable/disable animation */
  slide: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string
});
CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: PropTypes__default["default"].string
};
var CarouselItem$1 = CarouselItem;

/**
 * CarouselContext
 * {
 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
 * }
 */

var CarouselContext = React__default["default"].createContext({});

var SWIPE_THRESHOLD = 40;

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'end',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'end';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'start';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'start' : 'end';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'end' : 'start';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.getContextValue = function getContextValue() {
    return {
      direction: this.state.direction
    };
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function () {
    var _this2 = this;

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (this.props.interval) {
      this.cycleInterval = setInterval(function () {
        _this2.props.next();
      }, parseInt(this.props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, [].slice.call(arguments));
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, [].slice.call(arguments));
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this3 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this3.state.activeIndex;
      return React__default["default"].cloneElement(item, {
        "in": isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className,
        dark = _this$props3.dark,
        fade = _this$props3.fade;
    var outerClasses = mapToCssModules(classNames__default["default"](className, 'carousel', fade && 'carousel-fade', slide && 'slide', dark && 'carousel-dark'), cssModule);
    var innerClasses = mapToCssModules(classNames__default["default"]('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem$1;
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(children, innerClasses)));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this4.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default["default"].cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
      value: this.getContextValue()
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
  };

  return Carousel;
}(React__default["default"].Component);

Carousel.propTypes = {
  /** the current active slide of the carousel */
  activeIndex: PropTypes__default["default"].number,

  /** a function which should advance the carousel to the next slide (via activeIndex) */
  next: PropTypes__default["default"].func.isRequired,

  /** a function which should advance the carousel to the previous slide (via activeIndex) */
  previous: PropTypes__default["default"].func.isRequired,

  /** controls if the left and right arrow keys should control the carousel */
  keyboard: PropTypes__default["default"].bool,

  /** If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause: PropTypes__default["default"].oneOf(['hover', false]),

  /** Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. */
  ride: PropTypes__default["default"].oneOf(['carousel']),

  /** the interval at which the carousel automatically cycles */
  interval: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  children: PropTypes__default["default"].array,

  /** called when the mouse enters the Carousel */
  mouseEnter: PropTypes__default["default"].func,

  /** called when the mouse exits the Carousel */
  mouseLeave: PropTypes__default["default"].func,

  /** controls whether the slide animation on the Carousel works or not */
  slide: PropTypes__default["default"].bool,

  /** make the controls, indicators and captions dark on the Carousel */
  dark: PropTypes__default["default"].bool,
  fade: PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Enable touch support */
  enableTouch: PropTypes__default["default"].bool
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};
Carousel.childContextTypes = {
  direction: PropTypes__default["default"].string
};
var Carousel$1 = Carousel;

function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classNames__default["default"](className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classNames__default["default"]("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classNames__default["default"]('visually-hidden'), cssModule);
  return (
    /*#__PURE__*/
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React__default["default"].createElement("a", {
      className: anchorClasses,
      style: {
        cursor: 'pointer'
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
}

CarouselControl.propTypes = {
  /** Set the direction of control button */
  direction: PropTypes__default["default"].oneOf(['prev', 'next']).isRequired,

  /** Function to be triggered on click */
  onClickHandler: PropTypes__default["default"].func.isRequired,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Screen reader text */
  directionText: PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string
};

function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classNames__default["default"](className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classNames__default["default"]({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      type: "button",
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: listClasses
  }, indicators);
}

CarouselIndicators.propTypes = {
  /** The current active index */
  activeIndex: PropTypes__default["default"].number.isRequired,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Array of items to show */
  items: PropTypes__default["default"].array.isRequired,

  /** Function to be triggered on click */
  onClickHandler: PropTypes__default["default"].func.isRequired
};

function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classNames__default["default"](className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, captionHeader), /*#__PURE__*/React__default["default"].createElement("p", null, captionText));
}

CarouselCaption.propTypes = {
  /** Heading for the caption */
  captionHeader: PropTypes__default["default"].node,

  /** Text for caption */
  captionText: PropTypes__default["default"].node.isRequired,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object
};

var _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
var propTypes$J = {
  items: PropTypes__default["default"].array.isRequired,
  indicators: PropTypes__default["default"].bool,
  controls: PropTypes__default["default"].bool,
  autoPlay: PropTypes__default["default"].bool,
  defaultActiveIndex: PropTypes__default["default"].number,
  activeIndex: PropTypes__default["default"].number,
  next: PropTypes__default["default"].func,
  previous: PropTypes__default["default"].func,
  goToIndex: PropTypes__default["default"].func
};

var UncontrolledCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    var _this2 = this;

    if (this.animating) return;
    this.setState(function (prevState) {
      var nextIndex = prevState.activeIndex === _this2.props.items.length - 1 ? 0 : prevState.activeIndex + 1;
      return {
        activeIndex: nextIndex
      };
    });
  };

  _proto.previous = function previous() {
    var _this3 = this;

    if (this.animating) return;
    this.setState(function (prevState) {
      var nextIndex = prevState.activeIndex === 0 ? _this3.props.items.length - 1 : prevState.activeIndex - 1;
      return {
        activeIndex: nextIndex
      };
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$D);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return /*#__PURE__*/React__default["default"].createElement(CarouselItem$1, {
        onExiting: _this4.onExiting,
        onExited: _this4.onExited,
        key: key
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), /*#__PURE__*/React__default["default"].createElement(CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return /*#__PURE__*/React__default["default"].createElement(Carousel$1, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && /*#__PURE__*/React__default["default"].createElement(CarouselIndicators, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(React.Component);

UncontrolledCarousel.propTypes = propTypes$J;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
var UncontrolledCarousel$1 = UncontrolledCarousel;

var _excluded$C = ["className", "cssModule", "tag"];
var propTypes$I = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$I = {
  tag: 'div'
};

function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$C);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardSubtitle.propTypes = propTypes$I;
CardSubtitle.defaultProps = defaultProps$I;

var _excluded$B = ["className", "cssModule", "tag"];
var propTypes$H = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$H = {
  tag: 'p'
};

function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$B);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardText.propTypes = propTypes$H;
CardText.defaultProps = defaultProps$H;

var _excluded$A = ["className", "cssModule", "tag"];
var propTypes$G = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$G = {
  tag: 'div'
};

function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$A);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-title'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardTitle.propTypes = propTypes$G;
CardTitle.defaultProps = defaultProps$G;

var _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];

function noop$2() {}

var propTypes$F = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]).isRequired,
  popperClassName: PropTypes__default["default"].string,
  placement: PropTypes__default["default"].string,
  placementPrefix: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  hideArrow: PropTypes__default["default"].bool,
  tag: tagPropType,
  isOpen: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  fallbackPlacements: PropTypes__default["default"].array,
  flip: PropTypes__default["default"].bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  onClosed: PropTypes__default["default"].func,
  fade: PropTypes__default["default"].bool,
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$F = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: 'body',
  modifiers: [],
  onClosed: noop$2,
  fade: true,
  transition: _objectSpread2({}, Fade.defaultProps)
};

var PopperContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }

    return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        offset = _this$props.offset,
        fallbackPlacements = _this$props.fallbackPlacements,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        boundariesElement = _this$props.boundariesElement,
        fade = _this$props.fade,
        transition = _this$props.transition,
        placement = _this$props.placement,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$z);

    var arrowClassName = mapToCssModules(classNames__default["default"]('arrow', _arrowClassName), cssModule);
    var popperClassName = mapToCssModules(classNames__default["default"](_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);
    var modifierNames = modifiers.map(function (m) {
      return m.name;
    });
    var baseModifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'flip',
      enabled: flip,
      options: {
        fallbackPlacements: fallbackPlacements
      }
    }, {
      name: 'preventOverflow',
      options: {
        boundary: boundariesElement
      }
    }].filter(function (m) {
      return !modifierNames.includes(m.name);
    });
    var extendedModifiers = [].concat(baseModifiers, modifiers);

    var popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, popperTransition, attrs, {
      "in": isOpen,
      onExited: this.onClosed,
      tag: tag
    }), /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement,
      strategy: strategy
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          popperPlacement = _ref.placement,
          isReferenceHidden = _ref.isReferenceHidden,
          arrowProps = _ref.arrowProps,
          update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "data-popper-placement": popperPlacement,
        "data-popper-reference-hidden": isReferenceHidden ? 'true' : undefined
      }, typeof children === 'function' ? children({
        update: update
      }) : children, !hideArrow && /*#__PURE__*/React__default["default"].createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default["default"].Component);

PopperContent.propTypes = propTypes$F;
PopperContent.defaultProps = defaultProps$F;
var PopperContent$1 = PopperContent;

function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
}

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes__default["default"].object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};

var propTypes$E = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]),
  placement: PropTypes__default["default"].oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  hideArrow: PropTypes__default["default"].bool,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  className: PropTypes__default["default"].string,
  innerClassName: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  popperClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].func,
  autohide: PropTypes__default["default"].bool,
  placementPrefix: PropTypes__default["default"].string,
  delay: PropTypes__default["default"].oneOfType([PropTypes__default["default"].shape({
    show: PropTypes__default["default"].number,
    hide: PropTypes__default["default"].number
  }), PropTypes__default["default"].number]),
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),
  trigger: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$E = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots) {
  if (subtreeRoots === void 0) {
    subtreeRoots = [];
  }

  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function (subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  })[0];
}

var TooltipPopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }

    return null;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.getCurrentTarget = function getCurrentTarget(target) {
    if (!target) return null;

    var index = this._targets.indexOf(target);

    if (index >= 0) return this._targets[index];
    return this.getCurrentTarget(target.parentElement);
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;

      if (e && e.composedPath && typeof e.composedPath === 'function') {
        var path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.addEventListener(type, handler, isBubble);
    });
  };

  _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.removeEventListener(type, handler, isBubble);
    });
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf('hover') > -1) {
            this.addEventOnTargets('mouseover', this.showWithDelay, true);
            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this.addEventOnTargets('focusin', this.show, true);
            this.addEventOnTargets('focusout', this.hide, true);
          }

          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
      this.removeEventOnTargets('focusin', this.show, true);
      this.removeEventOnTargets('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.props.isOpen) {
      this.updateTarget();
    }

    var target = this.currentTargetElement || this._targets[0];

    if (!target) {
      return null;
    }

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip,
        children = _this$props.children;
    var attributes = omit(this.props, Object.keys(propTypes$E));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(PopperContent$1, {
      className: className,
      target: target,
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      strategy: strategy,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, function (_ref) {
      var update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        ref: _this2.getRef,
        className: classes,
        role: "tooltip",
        onMouseOver: _this2.onMouseOverTooltipContent,
        onMouseLeave: _this2.onMouseLeaveTooltipContent,
        onKeyDown: _this2.onEscKeyDown
      }), typeof children === 'function' ? children({
        update: update
      }) : children);
    });
  };

  return TooltipPopoverWrapper;
}(React__default["default"].Component);

TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$E;
var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;

var defaultProps$D = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8]
};

function Popover(props) {
  var popperClasses = classNames__default["default"]('popover', 'show', props.popperClassName);
  var classes = classNames__default["default"]('popover-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "popover-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}

Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$D;

var omitKeys$4 = ['defaultOpen'];

var UncontrolledPopover = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Popover, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledPopover;
}(React.Component);
UncontrolledPopover.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Popover.propTypes);

var _excluded$y = ["className", "cssModule", "tag"];
var propTypes$D = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$C = {
  tag: 'h3'
};

function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$y);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PopoverHeader.propTypes = propTypes$D;
PopoverHeader.defaultProps = defaultProps$C;

var _excluded$x = ["className", "cssModule", "tag"];
var propTypes$C = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$B = {
  tag: 'div'
};

function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$x);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PopoverBody.propTypes = propTypes$C;
PopoverBody.defaultProps = defaultProps$B;

var _excluded$w = ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barStyle", "barAriaValueText", "barAriaLabelledBy"];
var propTypes$B = {
  /** Enable animation to bar */
  animated: PropTypes__default["default"].bool,
  bar: PropTypes__default["default"].bool,
  barAriaLabelledBy: PropTypes__default["default"].string,
  barAriaValueText: PropTypes__default["default"].string,
  barClassName: PropTypes__default["default"].string,
  barStyle: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add custom color to the placeholder */
  color: PropTypes__default["default"].string,

  /** Maximum value of progress */
  max: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),

  /** Minimum value of progress, defaults to zero */
  min: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  multi: PropTypes__default["default"].bool,

  /** Add stripes to progress bar */
  striped: PropTypes__default["default"].bool,
  style: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Current value of progress */
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
var defaultProps$A = {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  style: {},
  barStyle: {}
};

function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      min = props.min,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      style = props.style,
      barStyle = props.barStyle,
      barAriaValueText = props.barAriaValueText,
      barAriaLabelledBy = props.barAriaLabelledBy,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$w);

  var percent = toNumber(value) / toNumber(max) * 100;
  var progressClasses = mapToCssModules(classNames__default["default"](className, 'progress'), cssModule);
  var progressBarClasses = mapToCssModules(classNames__default["default"]('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-" + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var progressBarProps = {
    className: progressBarClasses,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, bar ? style : {}), barStyle), {}, {
      width: percent + "%"
    }),
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': barAriaValueText,
    'aria-labelledby': barAriaLabelledBy,
    children: children
  };

  if (bar) {
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, progressBarProps));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    style: style,
    className: progressClasses
  }), multi ? children : /*#__PURE__*/React__default["default"].createElement("div", progressBarProps));
}

Progress.propTypes = propTypes$B;
Progress.defaultProps = defaultProps$A;

var propTypes$A = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var Portal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default["default"].Component);

Portal.propTypes = propTypes$A;
var Portal$1 = Portal;

function noop$1() {}

var FadePropTypes$1 = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$z = {
  /** */
  autoFocus: PropTypes__default["default"].bool,

  /** Add backdrop to modal */
  backdrop: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['static'])]),

  /** add custom classname to backdrop */
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes$1,

  /** Vertically center the modal */
  centered: PropTypes__default["default"].bool,

  /** Add children for the modal to wrap */
  children: PropTypes__default["default"].node,

  /** Add custom className for modal content */
  contentClassName: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  external: PropTypes__default["default"].node,

  /** Enable/Disable animation */
  fade: PropTypes__default["default"].bool,

  /** Make the modal fullscreen */
  fullscreen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['sm', 'md', 'lg', 'xl'])]),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** The status of the modal, either open or close */
  isOpen: PropTypes__default["default"].bool,

  /** Allow modal to be closed with escape key. */
  keyboard: PropTypes__default["default"].bool,

  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: PropTypes__default["default"].string,
  modalClassName: PropTypes__default["default"].string,
  modalTransition: FadePropTypes$1,

  /** Function to be triggered on close */
  onClosed: PropTypes__default["default"].func,

  /** Function to be triggered on enter */
  onEnter: PropTypes__default["default"].func,

  /** Function to be triggered on exit */
  onExit: PropTypes__default["default"].func,

  /** Function to be triggered on open */
  onOpened: PropTypes__default["default"].func,

  /** Returns focus to the element that triggered opening of the modal */
  returnFocusAfterClose: PropTypes__default["default"].bool,

  /** Accessibility role */
  role: PropTypes__default["default"].string,

  /** Make the modal scrollable */
  scrollable: PropTypes__default["default"].bool,

  /** Two optional sizes `lg` and `sm` */
  size: PropTypes__default["default"].string,

  /** Function to toggle modal visibility */
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,

  /** Unmounts the modal when modal is closed */
  unmountOnClose: PropTypes__default["default"].bool,
  wrapClassName: PropTypes__default["default"].string,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit$1 = Object.keys(propTypes$z);
var defaultProps$z = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this._originalBodyOverflow = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) {
      // element is not attached
      return;
    }

    if (this._dialog && this._dialog.parentNode === ev.target) {
      // initial focus when the Modal is opened
      return;
    }

    if (this.modalIndex < Modal.openCount - 1) {
      // last opened modal
      return;
    }

    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i += 1) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    this._originalBodyOverflow = window.getComputedStyle(document.body).overflow;
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classNames__default["default"](document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      document.body.style.overflow = 'hidden';
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      document.body.style.overflow = this._originalBodyOverflow;
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit$1);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classNames__default["default"](dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames['modal-fullscreen'] = this.props.fullscreen === true, _classNames["modal-fullscreen-" + this.props.fullscreen + "-down"] = typeof this.props.fullscreen === 'string', _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: mapToCssModules(classNames__default["default"]('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  return Modal;
}(React__default["default"].Component);

Modal.propTypes = propTypes$z;
Modal.defaultProps = defaultProps$z;
Modal.openCount = 0;
var Modal$1 = Modal;

var _excluded$v = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close"];
var propTypes$y = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Custom close button */
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function to be triggered when close button is clicked */
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$y = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$v);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
}

ModalHeader.propTypes = propTypes$y;
ModalHeader.defaultProps = defaultProps$y;

var _excluded$u = ["className", "cssModule", "tag"];
var propTypes$x = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$x = {
  tag: 'div'
};

function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$u);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ModalBody.propTypes = propTypes$x;
ModalBody.defaultProps = defaultProps$x;

var _excluded$t = ["className", "cssModule", "tag"];
var propTypes$w = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$w = {
  tag: 'div'
};

function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$t);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ModalFooter.propTypes = propTypes$w;
ModalFooter.defaultProps = defaultProps$w;

var defaultProps$v = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus'
};

function Tooltip(props) {
  var popperClasses = classNames__default["default"]('tooltip', 'show', props.popperClassName);
  var classes = classNames__default["default"]('tooltip-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "tooltip-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}

Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$v;

var _excluded$s = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];
var propTypes$v = {
  /** Adds border to all sides of table */
  bordered: PropTypes__default["default"].bool,

  /** Removes all borders */
  borderless: PropTypes__default["default"].bool,

  /** Adds custom class name to component */
  className: PropTypes__default["default"].string,

  /**  */
  cssModule: PropTypes__default["default"].object,

  /** Makes the table dark */
  dark: PropTypes__default["default"].bool,

  /** Enables a hover state on the rows within `<tbody>` */
  hover: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),

  /** Responsive tables allow tables to be scrolled horizontally with ease */
  responsive: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  responsiveTag: tagPropType,

  /** Make tables more compact by cutting cell padding in half when setting size as sm. */
  size: PropTypes__default["default"].string,

  /** Adds zebra-striping to any table row within the `<tbody>` */
  striped: PropTypes__default["default"].bool,

  /** Add custom tag to the component */
  tag: tagPropType
};
var defaultProps$u = {
  tag: 'table',
  responsiveTag: 'div'
};

function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$s);

  var classes = mapToCssModules(classNames__default["default"](className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
}

Table.propTypes = propTypes$v;
Table.defaultProps = defaultProps$u;

var _excluded$r = ["className", "cssModule", "tag", "flush", "horizontal", "numbered"];
var propTypes$u = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Remove borders to make the list appear flush */
  flush: PropTypes__default["default"].bool,

  /** Make the list horizontal instead of vertical */
  horizontal: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Add number to the ListItems */
  numbered: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$t = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

var getHorizontalClass = function getHorizontalClass(horizontal) {
  if (horizontal === false) {
    return false;
  }

  if (horizontal === true || horizontal === 'xs') {
    return 'list-group-horizontal';
  }

  return "list-group-horizontal-" + horizontal;
};

function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      horizontal = props.horizontal,
      numbered = props.numbered,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$r);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
  // we only try to apply horizontal classes if flush is false
  flush ? 'list-group-flush' : getHorizontalClass(horizontal), {
    'list-group-numbered': numbered
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroup.propTypes = propTypes$u;
ListGroup.defaultProps = defaultProps$t;

var _excluded$q = ["className", "cssModule", "inline", "tag", "innerRef"];
var propTypes$t = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$s = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$q);

    var classes = mapToCssModules(classNames__default["default"](className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes$t;
Form.defaultProps = defaultProps$s;
var Form$1 = Form;

var _excluded$p = ["className", "cssModule", "valid", "tooltip", "tag"];
var propTypes$s = {
  children: PropTypes__default["default"].node,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  valid: PropTypes__default["default"].bool,
  tooltip: PropTypes__default["default"].bool
};
var defaultProps$r = {
  tag: 'div',
  valid: undefined
};

function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$p);

  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = mapToCssModules(classNames__default["default"](className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormFeedback.propTypes = propTypes$s;
FormFeedback.defaultProps = defaultProps$r;

var _excluded$o = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag", "switch"];
var propTypes$r = {
  children: PropTypes__default["default"].node,
  row: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  "switch": PropTypes__default["default"].bool,
  inline: PropTypes__default["default"].bool,
  floating: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$q = {
  tag: 'div'
};

function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      floating = props.floating,
      Tag = props.tag,
      switchProp = props["switch"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$o);

  var formCheck = check || switchProp;
  var classes = mapToCssModules(classNames__default["default"](className, row ? 'row' : false, formCheck ? 'form-check' : 'mb-3', switchProp ? 'form-switch' : false, formCheck && inline ? 'form-check-inline' : false, formCheck && disabled ? 'disabled' : false, floating && 'form-floating'), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormGroup.propTypes = propTypes$r;
FormGroup.defaultProps = defaultProps$q;

var _excluded$n = ["className", "cssModule", "inline", "color", "tag"];
var propTypes$q = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$p = {
  tag: 'small',
  color: 'muted'
};

function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$n);

  var classes = mapToCssModules(classNames__default["default"](className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormText.propTypes = propTypes$q;
FormText.defaultProps = defaultProps$p;

var _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
var propTypes$p = {
  children: PropTypes__default["default"].node,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  bsSize: PropTypes__default["default"].string,
  valid: PropTypes__default["default"].bool,
  invalid: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  plaintext: PropTypes__default["default"].bool,
  addon: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$o = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$m);

    var checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = /\D/g;
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (rangeInput) {
      formControlClass = 'form-range';
    } else if (selectInput) {
      formControlClass = 'form-select';
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classNames__default["default"](className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? "form-select-" + bsSize : "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type === 'switch' ? 'checkbox' : type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(React__default["default"].Component);

Input.propTypes = propTypes$p;
Input.defaultProps = defaultProps$o;
var Input$1 = Input;

var _excluded$l = ["className", "cssModule", "tag", "type", "size"];
var propTypes$o = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Sets size of InputGroup */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes__default["default"].string
};
var defaultProps$n = {
  tag: 'div'
};

function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$l);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group', size ? "input-group-" + size : null), cssModule);

  if (props.type === 'dropdown') {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({}, attributes, {
      className: classes
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

InputGroup.propTypes = propTypes$o;
InputGroup.defaultProps = defaultProps$n;

var _excluded$k = ["className", "cssModule", "tag"];
var propTypes$n = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$m = {
  tag: 'span'
};

function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$k);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

InputGroupText.propTypes = propTypes$n;
InputGroupText.defaultProps = defaultProps$m;

var _excluded$j = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].number, PropTypes__default["default"].shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$m = {
  children: PropTypes__default["default"].node,
  hidden: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  "for": PropTypes__default["default"].string,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes__default["default"].array
};
var defaultProps$l = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props["for"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$j);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var colFormLabel = size || colClasses.length;
  var formLabel = !(check || colFormLabel);
  var classes = mapToCssModules(classNames__default["default"](className, hidden ? 'visually-hidden' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colFormLabel ? 'col-form-label' : false, formLabel ? 'form-label' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
}

Label.propTypes = propTypes$m;
Label.defaultProps = defaultProps$l;

var _excluded$i = ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"];
var propTypes$l = {
  body: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  heading: PropTypes__default["default"].bool,
  left: PropTypes__default["default"].bool,
  list: PropTypes__default["default"].bool,
  middle: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].bool,
  right: PropTypes__default["default"].bool,
  tag: tagPropType,
  top: PropTypes__default["default"].bool
};

function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$i);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classNames__default["default"](className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Media.propTypes = propTypes$l;

function noop() {}

var FadePropTypes = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$k = {
  autoFocus: PropTypes__default["default"].bool,
  backdrop: PropTypes__default["default"].bool,
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  direction: PropTypes__default["default"].oneOf(['start', 'end', 'bottom', 'top']),
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  isOpen: PropTypes__default["default"].bool,
  keyboard: PropTypes__default["default"].bool,
  labelledBy: PropTypes__default["default"].string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes__default["default"].func,
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  style: PropTypes__default["default"].object,
  onOpened: PropTypes__default["default"].func,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  scrollable: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,
  unmountOnClose: PropTypes__default["default"].bool,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit = Object.keys(propTypes$k);
var defaultProps$k = {
  isOpen: false,
  autoFocus: true,
  direction: 'start',
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Offcanvas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Offcanvas, _React$Component);

  function Offcanvas(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  var _proto = Offcanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Offcanvas, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    } // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._backdrop;
      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      }
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && typeof this._dialog.focus === 'function') {
      this._dialog.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) {
      // element is not attached
      return;
    }

    if (this._dialog === ev.target) {
      // initial focus when the Offcanvas is opened
      return;
    }

    if (this.offcanvasIndex < Offcanvas.openCount - 1) {
      // last opened offcanvas
      return;
    }

    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i += 1) {
      // focus is already inside the Offcanvas
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Offcanvas
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
      document.body.style.overflow = 'hidden';
    }

    this.offcanvasIndex = Offcanvas.openCount;
    Offcanvas.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    this.manageFocusAfterClose();
    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);
    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        direction = _this$props2.direction,
        unmountOnClose = _this$props2.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';
      var _this$props3 = this.props,
          className = _this$props3.className,
          backdropClassName = _this$props3.backdropClassName,
          cssModule = _this$props3.cssModule,
          isOpen = _this$props3.isOpen,
          backdrop = _this$props3.backdrop,
          role = _this$props3.role,
          labelledBy = _this$props3.labelledBy,
          style = _this$props3.style;
      var offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : '',
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        innerRef: function innerRef(c) {
          _this2._backdrop = c;
        },
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', 'show', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      }));
      var attributes = omit(this.props, propsToOmit);
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas', className, "offcanvas-" + direction), cssModule),
        innerRef: function innerRef(c) {
          _this2._dialog = c;
        },
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          visibility: isOpen ? 'visible' : 'hidden'
        })
      }), this.props.children), Backdrop);
    }

    return null;
  };

  return Offcanvas;
}(React__default["default"].Component);

Offcanvas.propTypes = propTypes$k;
Offcanvas.defaultProps = defaultProps$k;
Offcanvas.openCount = 0;
var Offcanvas$1 = Offcanvas;

var _excluded$h = ["className", "cssModule", "tag"];
var propTypes$j = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$j = {
  tag: 'div'
};

function OffcanvasBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$h);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

OffcanvasBody.propTypes = propTypes$j;
OffcanvasBody.defaultProps = defaultProps$j;

var _excluded$g = ["children", "className", "close", "closeAriaLabel", "cssModule", "tag", "toggle", "wrapTag"];
var propTypes$i = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$i = {
  closeAriaLabel: 'Close',
  tag: 'h5',
  wrapTag: 'div'
};

function OffcanvasHeader(props) {
  var closeButton;

  var children = props.children,
      className = props.className,
      close = props.close,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      toggle = props.toggle,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$g);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('offcanvas-title', cssModule)
  }, children), close || closeButton);
}

OffcanvasHeader.propTypes = propTypes$i;
OffcanvasHeader.defaultProps = defaultProps$i;

var _excluded$f = ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"];
var propTypes$h = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Add custom class for list */
  listClassName: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Make the Pagination bigger or smaller  */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Set a custom element for list component */
  listTag: tagPropType,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$h = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$f);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"](listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: classes,
    "aria-label": label
  }, /*#__PURE__*/React__default["default"].createElement(ListTag, _extends({}, attributes, {
    className: listClasses
  })));
}

Pagination.propTypes = propTypes$h;
Pagination.defaultProps = defaultProps$h;

var _excluded$e = ["active", "className", "cssModule", "disabled", "tag"];
var propTypes$g = {
  /** Set item as active */
  active: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set item as disabled */
  disabled: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$g = {
  tag: 'li'
};

function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$e);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PaginationItem.propTypes = propTypes$g;
PaginationItem.defaultProps = defaultProps$g;

var _excluded$d = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
var propTypes$f = {
  'aria-label': PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add to next button to add default aria label and icon */
  next: PropTypes__default["default"].bool,

  /** Add to previous button to add default aria label and icon */
  previous: PropTypes__default["default"].bool,

  /** Add to first button to add default aria label and icon */
  first: PropTypes__default["default"].bool,

  /** Add to last button to add default aria label and icon */
  last: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$f = {
  tag: 'a'
};

function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$d);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [/*#__PURE__*/React__default["default"].createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
}

PaginationLink.propTypes = propTypes$f;
PaginationLink.defaultProps = defaultProps$f;

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default["default"].createContext({});

var propTypes$e = {
  tag: tagPropType,
  activeTab: PropTypes__default["default"].any,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$e = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$e));
    var classes = mapToCssModules(classNames__default["default"]('tab-content', className), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(React.Component);

var TabContent$1 = TabContent;
TabContent.propTypes = propTypes$e;
TabContent.defaultProps = defaultProps$e;

var _excluded$c = ["className", "cssModule", "tabId", "tag"];
var propTypes$d = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tabId: PropTypes__default["default"].any
};
var defaultProps$d = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$c);

  var getClasses = function getClasses(activeTabId) {
    return mapToCssModules(classNames__default["default"]('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/React__default["default"].createElement(TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes$d;
TabPane.defaultProps = defaultProps$d;

var _excluded$b = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];
var propTypes$c = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Add custom class for close button */
  closeClassName: PropTypes__default["default"].string,

  /** Aria label for close button */
  closeAriaLabel: PropTypes__default["default"].string,

  /** Change color of alert */
  color: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Toggle fade animation */
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Control visibility state of Alert */
  isOpen: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function to toggle visibility */
  toggle: PropTypes__default["default"].func,

  /** Props to be passed to `Fade` to modify transition */
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$c = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$b);

  var classes = mapToCssModules(classNames__default["default"](className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classNames__default["default"]('btn-close', closeClassName), cssModule);

  var alertTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }) : null, children);
}

Alert.propTypes = propTypes$c;
Alert.defaultProps = defaultProps$c;

var _excluded$a = ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"];
var propTypes$b = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$b = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Toast(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      isOpen = props.isOpen,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$a);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast'), cssModule);

  var toastTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, toastTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), children);
}

Toast.propTypes = propTypes$b;
Toast.defaultProps = defaultProps$b;

var _excluded$9 = ["className", "cssModule", "innerRef", "tag"];
var propTypes$a = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$a = {
  tag: 'div'
};

function ToastBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$9);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

ToastBody.propTypes = propTypes$a;
ToastBody.defaultProps = defaultProps$a;

var _excluded$8 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close", "tagClassName", "icon"];
var propTypes$9 = {
  tag: tagPropType,
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node]),
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  charCode: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  close: PropTypes__default["default"].object,
  tagClassName: PropTypes__default["default"].string
};
var defaultProps$9 = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'me-auto',
  closeAriaLabel: 'Close'
};

function ToastHeader(props) {
  var closeButton;
  var icon;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      tagClassName = props.tagClassName,
      iconProp = props.icon,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$8);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  if (typeof iconProp === 'string') {
    icon = /*#__PURE__*/React__default["default"].createElement("svg", {
      className: mapToCssModules("rounded text-" + iconProp),
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      focusable: "false",
      role: "img"
    }, /*#__PURE__*/React__default["default"].createElement("rect", {
      fill: "currentColor",
      width: "100%",
      height: "100%"
    }));
  } else if (iconProp) {
    icon = iconProp;
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), icon, /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules(classNames__default["default"](tagClassName, {
      'ms-2': icon != null
    }), cssModule)
  }, children), close || closeButton);
}

ToastHeader.propTypes = propTypes$9;
ToastHeader.defaultProps = defaultProps$9;

var _excluded$7 = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
var propTypes$8 = {
  /** Add action prop to give effects while hovering over element */
  action: PropTypes__default["default"].bool,

  /** Add active prop to make the current selection active */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add background colour to the list item */
  color: PropTypes__default["default"].string,

  /** Make the list item appear disabled */
  disabled: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$8 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$7);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItem.propTypes = propTypes$8;
ListGroupItem.defaultProps = defaultProps$8;

var _excluded$6 = ["className", "cssModule", "tag"];
var propTypes$7 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$7 = {
  tag: 'h5'
};

function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$6);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-heading'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItemHeading.propTypes = propTypes$7;
ListGroupItemHeading.defaultProps = defaultProps$7;

var _excluded$5 = ["className", "cssModule", "tag"];
var propTypes$6 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$6 = {
  tag: 'p'
};

function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$5);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItemText.propTypes = propTypes$6;
ListGroupItemText.defaultProps = defaultProps$6;

var _excluded$4 = ["className", "cssModule", "tag", "type"];
var propTypes$5 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Type of list `unstyled` or `inline` */
  type: PropTypes__default["default"].string
};
var defaultProps$5 = {
  tag: 'ul'
};
var List = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      type = props.type,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$4);

  var classes = mapToCssModules(classNames__default["default"](className, type ? "list-" + type : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
List.name = 'List';
List.propTypes = propTypes$5;
List.defaultProps = defaultProps$5;
var List$1 = List;

var _excluded$3 = ["className", "cssModule", "tag"];
var propTypes$4 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$4 = {
  tag: 'li'
};
var ListInlineItem = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$3);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-inline-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
ListInlineItem.name = 'ListInlineItem';
ListInlineItem.propTypes = propTypes$4;
ListInlineItem.defaultProps = defaultProps$4;
var ListInlineItem$1 = ListInlineItem;

var UncontrolledAlert = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(React.Component);

var UncontrolledAlert$1 = UncontrolledAlert;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(ButtonDropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledButtonDropdown;
}(React.Component);
UncontrolledButtonDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, ButtonDropdown.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$3 = {
  /** set if Collapse is open by default */
  defaultOpen: PropTypes__default["default"].bool,

  /** id of the element that should trigger toggle */
  toggler: PropTypes__default["default"].string.isRequired,

  /** Events that should trigger the toggle */
  toggleEvents: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
};
var defaultProps$3 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(React.Component);

UncontrolledCollapse.propTypes = propTypes$3;
UncontrolledCollapse.defaultProps = defaultProps$3;
var UncontrolledCollapse$1 = UncontrolledCollapse;

var omitKeys$1 = ['defaultOpen'];

var UncontrolledDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle(e) {
    var _this2 = this;

    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    }, function () {
      if (_this2.props.onToggle) {
        _this2.props.onToggle(e, _this2.state.isOpen);
      }
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledDropdown;
}(React.Component);
UncontrolledDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool,
  onToggle: PropTypes__default["default"].func
}, Dropdown$1.propTypes);

var omitKeys = ['defaultOpen'];

var UncontrolledTooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledTooltip;
}(React.Component);
UncontrolledTooltip.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Tooltip.propTypes);

var _excluded$2 = ["className", "cssModule", "type", "size", "color", "children", "tag"];
var propTypes$2 = {
  /** Set a custom element for this component */
  tag: tagPropType,

  /** Change animation of spinner */
  type: PropTypes__default["default"].oneOf(['border', 'grow']),

  /** Change size of spinner */
  size: PropTypes__default["default"].oneOf(['sm']),

  /** Change color of spinner */
  color: PropTypes__default["default"].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].string
};
var defaultProps$2 = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$2);

  var classes = mapToCssModules(classNames__default["default"](className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('visually-hidden', cssModule)
  }, children));
}

Spinner.propTypes = propTypes$2;
Spinner.defaultProps = defaultProps$2;

var _excluded$1 = ["className", "cssModule", "color", "innerRef", "tag", "animation", "size", "widths"];

var propTypes$1 = _objectSpread2(_objectSpread2({}, Col.propTypes), {}, {
  /** Add custom color to the placeholder */
  color: PropTypes__default["default"].string,

  /** Add custom tag. */
  tag: tagPropType,

  /** Apply either `glow` or `wave` animation. */
  animation: PropTypes__default["default"].oneOf(['glow', 'wave']),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Make the size larger */
  size: PropTypes__default["default"].oneOf(['lg', 'sm', 'xs'])
});

var defaultProps$1 = {
  tag: 'span'
};

function Placeholder(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      Tag = props.tag,
      animation = props.animation,
      size = props.size,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"](className, colClasses, 'placeholder' + (animation ? '-' + animation : ''), size ? 'placeholder-' + size : false, color ? 'bg-' + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes,
    ref: innerRef
  }));
}

Placeholder.propTypes = propTypes$1;
Placeholder.defaultProps = defaultProps$1;

var _excluded = ["cssModule", "className", "tag"];
var propTypes = {
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  tag: tagPropType,
  cssModule: PropTypes__default["default"].object
};
var defaultProps = {
  color: 'primary',
  tag: Button
};

function PlaceholderButton(props) {
  var cssModule = props.cssModule,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded);

  var _getColumnClasses = getColumnClasses(attributes, cssModule),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"]('placeholder', className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button, _extends({}, modifiedAttributes, {
    className: classes,
    disabled: true
  }));
}

PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;

(function () {
  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  window.CustomEvent = CustomEvent;
})();

(function () {
  if (typeof Object.values === 'function') return;

  var values = function values(O) {
    return Object.keys(O).map(function (key) {
      return O[key];
    });
  };

  Object.values = values;
})();

var polyfill = {
  __proto__: null
};

exports.Accordion = Accordion;
exports.AccordionBody = AccordionBody;
exports.AccordionContext = AccordionContext;
exports.AccordionHeader = AccordionHeader;
exports.AccordionItem = AccordionItem;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonDropdown = ButtonDropdown;
exports.ButtonGroup = ButtonGroup;
exports.ButtonToggle = ButtonToggle;
exports.ButtonToolbar = ButtonToolbar;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardColumns = CardColumns;
exports.CardDeck = CardDeck;
exports.CardFooter = CardFooter;
exports.CardGroup = CardGroup;
exports.CardHeader = CardHeader;
exports.CardImg = CardImg;
exports.CardImgOverlay = CardImgOverlay;
exports.CardLink = CardLink;
exports.CardSubtitle = CardSubtitle;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel$1;
exports.CarouselCaption = CarouselCaption;
exports.CarouselControl = CarouselControl;
exports.CarouselIndicators = CarouselIndicators;
exports.CarouselItem = CarouselItem$1;
exports.CloseButton = CloseButton;
exports.Col = Col;
exports.Collapse = Collapse$1;
exports.Container = Container;
exports.Dropdown = Dropdown$1;
exports.DropdownContext = DropdownContext;
exports.DropdownItem = DropdownItem$1;
exports.DropdownMenu = DropdownMenu$1;
exports.DropdownToggle = DropdownToggle$1;
exports.Fade = Fade;
exports.Form = Form$1;
exports.FormFeedback = FormFeedback;
exports.FormGroup = FormGroup;
exports.FormText = FormText;
exports.Input = Input$1;
exports.InputGroup = InputGroup;
exports.InputGroupText = InputGroupText;
exports.Label = Label;
exports.List = List$1;
exports.ListGroup = ListGroup;
exports.ListGroupItem = ListGroupItem;
exports.ListGroupItemHeading = ListGroupItemHeading;
exports.ListGroupItemText = ListGroupItemText;
exports.ListInlineItem = ListInlineItem$1;
exports.Media = Media;
exports.Modal = Modal$1;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.NavLink = NavLink$1;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarText = NavbarText;
exports.NavbarToggler = NavbarToggler;
exports.Offcanvas = Offcanvas$1;
exports.OffcanvasBody = OffcanvasBody;
exports.OffcanvasHeader = OffcanvasHeader;
exports.Pagination = Pagination;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.Placeholder = Placeholder;
exports.PlaceholderButton = PlaceholderButton;
exports.Polyfill = polyfill;
exports.Popover = Popover;
exports.PopoverBody = PopoverBody;
exports.PopoverHeader = PopoverHeader;
exports.PopperContent = PopperContent$1;
exports.PopperTargetHelper = PopperTargetHelper;
exports.Progress = Progress;
exports.Row = Row;
exports.Spinner = Spinner;
exports.TabContent = TabContent$1;
exports.TabPane = TabPane;
exports.Table = Table;
exports.Toast = Toast;
exports.ToastBody = ToastBody;
exports.ToastHeader = ToastHeader;
exports.Tooltip = Tooltip;
exports.UncontrolledAccordion = UncontrolledAccordion;
exports.UncontrolledAlert = UncontrolledAlert$1;
exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
exports.UncontrolledCarousel = UncontrolledCarousel$1;
exports.UncontrolledCollapse = UncontrolledCollapse$1;
exports.UncontrolledDropdown = UncontrolledDropdown;
exports.UncontrolledPopover = UncontrolledPopover;
exports.UncontrolledTooltip = UncontrolledTooltip;
exports.Util = utils;
//# sourceMappingURL=reactstrap.cjs.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
var _jsxFileName = "/Users/mimoriikkisuns/Desktop/Dev/Nextjs-shoppingSite/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hcG9sbG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtYXNzaWduXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcG9wcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJjb25maWciLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJ3aXRoRGF0YSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJDb250YWluZXIiLCJjcmVhdGVVcmwiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0VBQ3hCLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNMLE1BQUMsZ0RBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEVBREYsRUFFRTtJQUNJLEdBQUcsRUFBQyxZQURS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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQywwQkFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMseUdBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLDhCQUFZO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGtDQUFjO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyw0QkFBVztBQUNsQywyQkFBMkIsbUJBQU8sQ0FBQyxzREFBd0I7O0FBRTNELG9DQUFvQyw0REFBNEQsZ0JBQWdCOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDLE9BQU87QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSx1QkFBdUIseUJBQXlCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssdUpBQXVKLG1CQUFtQjtBQUMvSztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREOztBQUU1RDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGtGQUFrRixvQkFBb0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFEQUFxRCxtREFBbUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7O0FBRzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGtGQUFrRjtBQUNsRiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQseURBQXlELGdEQUFnRDtBQUN6RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRCw0REFBNEQsbURBQW1EO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOztBQUVoRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HOztBQUVwRztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBFQUEwRSxxQ0FBcUM7QUFDL0c7QUFDQTtBQUNBLEtBQUs7O0FBRUwsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLGdCQUFnQjtBQUM1RjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGO0FBQ2hGOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBLEtBQUs7QUFDTDs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRjtBQUN0RixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtFQUErRSx5REFBeUQ7QUFDeEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsOEVBQThFLHdEQUF3RDtBQUN0STtBQUNBO0FBQ0EsT0FBTzs7QUFFUCx3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdFQUF3RTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMkVBQTJFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUVBQXVFO0FBQzVFO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3QkFBd0I7QUFDdEU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxxQ0FBcUM7QUFDNUc7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBQQUEwUDs7QUFFMVA7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrREFBa0Qsb0JBQW9CO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDajZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLEtBQU4sU0FBb0I3SSwrQ0FBcEIsQ0FBd0I7RUFDdEJuSCxNQUFNLEdBQUc7SUFDUCxNQUFNO01BQUU3QyxTQUFGO01BQWF5UjtJQUFiLElBQTJCLEtBQUsxVixLQUF0QztJQUNBLE9BQ0UsbUVBQ0EsTUFBQyxnREFBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0U7TUFDRSxHQUFHLEVBQUMsWUFETjtNQUVFLElBQUksRUFBQyx5RUFGUDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsQ0FEQSxFQU9BLE1BQUMsMERBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsU0FBRCxlQUFlMFYsU0FBZjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBREYsQ0FQQSxDQURGO0VBYUQ7O0FBaEJxQjs7QUFtQlRsViwwSEFBUSxDQUFDc1csS0FBRCxDQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0gfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT7jg5Xjg7zjg4njg4fjg6rjg5Djg6rjg7zjgrXjg7zjg5Pjgrk8L3RpdGxlPlxuICAgICAgPGxpbmsgXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIFxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjAuMC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIFxuICAgICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbiAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPuODm+ODvOODoDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+44K144Kk44Oz44Kk44OzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPuOCteOCpOODs+OCouODg+ODlzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICBcbiAgICAgIDwvTmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxDb250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvQ29udGFpbmVyPlxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSBcImFwb2xsby1saW5rLWh0dHBcIlxuaW1wb3J0IHsgd2l0aERhdGEgfSBmcm9tIFwibmV4dC1hcG9sbG9cIlxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBsaW5rOiBuZXcgSHR0cExpbmsgKHtcbiAgICB1cmk6YCR7QVBJX1VSTH0vZ3JhcGhxbGAsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoY29uZmlnKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgcmVhY3RQb3BwZXIgPSByZXF1aXJlKCdyZWFjdC1wb3BwZXInKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHJlYWN0VHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdCk7XG52YXIgUHJvcFR5cGVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShQcm9wVHlwZXMpO1xudmFyIGNsYXNzTmFtZXNfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KGNsYXNzTmFtZXMpO1xudmFyIFJlYWN0RE9NX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdERPTSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyAubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUgc3R5bGVzIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS40L3Njc3MvX21vZGFsLnNjc3MjTDEwNi1MMTEzXG5cbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufVxuZnVuY3Rpb24gc2V0U2Nyb2xsYmFyV2lkdGgocGFkZGluZykge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPiAwID8gcGFkZGluZyArIFwicHhcIiA6IG51bGw7XG59XG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpO1xuICByZXR1cm4gcGFyc2VJbnQoc3R5bGUgJiYgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKSB7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS42L2pzL3NyYy9tb2RhbC5qcyNMNDMzXG5cbiAgdmFyIGZpeGVkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnKVswXTtcbiAgdmFyIGJvZHlQYWRkaW5nID0gZml4ZWRDb250ZW50ID8gcGFyc2VJbnQoZml4ZWRDb250ZW50LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAwLCAxMCkgOiAwO1xuXG4gIGlmIChpc0JvZHlPdmVyZmxvd2luZygpKSB7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgoYm9keVBhZGRpbmcgKyBzY3JvbGxiYXJXaWR0aCk7XG4gIH1cbn1cbnZhciBnbG9iYWxDc3NNb2R1bGU7XG5mdW5jdGlvbiBzZXRHbG9iYWxDc3NNb2R1bGUoY3NzTW9kdWxlKSB7XG4gIGdsb2JhbENzc01vZHVsZSA9IGNzc01vZHVsZTtcbn1cbmZ1bmN0aW9uIG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWUsIGNzc01vZHVsZSkge1xuICBpZiAoY2xhc3NOYW1lID09PSB2b2lkIDApIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIGlmIChjc3NNb2R1bGUgPT09IHZvaWQgMCkge1xuICAgIGNzc01vZHVsZSA9IGdsb2JhbENzc01vZHVsZTtcbiAgfVxuXG4gIGlmICghY3NzTW9kdWxlKSByZXR1cm4gY2xhc3NOYW1lO1xuICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGNzc01vZHVsZVtjXSB8fCBjO1xuICB9KS5qb2luKCcgJyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIGBvYmpgIHRoYXQgYXJlIG5vdCBpbiB0aGUgYXJyYXkgYG9taXRLZXlzYC5cbiAqL1xuXG5mdW5jdGlvbiBvbWl0KG9iaiwgb21pdEtleXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvbWl0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgYSBmaWx0ZXJlZCBjb3B5IG9mIGFuIG9iamVjdCB3aXRoIG9ubHkgdGhlIHNwZWNpZmllZCBrZXlzLlxuICovXG5cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciBwaWNrS2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5cykgPyBrZXlzIDogW2tleXNdO1xuICB2YXIgbGVuZ3RoID0gcGlja0tleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICBsZW5ndGggLT0gMTtcbiAgICBrZXkgPSBwaWNrS2V5c1tsZW5ndGhdO1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIHdhcm5lZCA9IHt9O1xuZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICBpZiAoIXdhcm5lZFttZXNzYWdlXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgd2FybmVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gZGVwcmVjYXRlZChwcm9wVHlwZSwgZXhwbGFuYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IG51bGwgJiYgdHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdhcm5PbmNlKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgcHJvcGVydHkgb2YgXFxcIlwiICsgY29tcG9uZW50TmFtZSArIFwiXFxcIiBoYXMgYmVlbiBkZXByZWNhdGVkLlxcblwiICsgZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMykpKTtcbiAgfTtcbn0gLy8gU2hpbSBFbGVtZW50IGlmIG5lZWRlZCAoZS5nLiBpbiBOb2RlIGVudmlyb25tZW50KVxuXG52YXIgRWxlbWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5FbGVtZW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG5mdW5jdGlvbiBET01FbGVtZW50KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuIEV4cGVjdGVkIHByb3AgdG8gYmUgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudC4gVmFsaWRhdGlvbiBmYWlsZWQuJyk7XG4gIH1cbn1cbnZhciB0YXJnZXRQcm9wVHlwZSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBET01FbGVtZW50LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgY3VycmVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn0pXSk7XG52YXIgdGFnUHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICQkdHlwZW9mOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN5bWJvbCxcbiAgcmVuZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAkJHR5cGVvZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zeW1ib2wsXG4gIHJlbmRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59KV0pKV0pOyAvLyBUaGVzZSBhcmUgYWxsIHNldHVwIHRvIG1hdGNoIHdoYXQgaXMgaW4gdGhlIGJvb3RzdHJhcCBfdmFyaWFibGVzLnNjc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LWRldi9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG52YXIgVHJhbnNpdGlvblRpbWVvdXRzID0ge1xuICBGYWRlOiAxNTAsXG4gIC8vICR0cmFuc2l0aW9uLWZhZGVcbiAgQ29sbGFwc2U6IDM1MCxcbiAgLy8gJHRyYW5zaXRpb24tY29sbGFwc2VcbiAgTW9kYWw6IDMwMCxcbiAgLy8gJG1vZGFsLXRyYW5zaXRpb25cbiAgQ2Fyb3VzZWw6IDYwMCxcbiAgLy8gJGNhcm91c2VsLXRyYW5zaXRpb25cbiAgT2ZmY2FudmFzOiAzMDAgLy8gJG9mZmNhbnZhcy10cmFuc2l0aW9uXG5cbn07IC8vIER1cGxpY2F0ZWQgVHJhbnNpdGlvbi5wcm9wVHlwZSBrZXlzIHRvIGVuc3VyZSB0aGF0IFJlYWN0c3RyYXAgYnVpbGRzXG4vLyBmb3IgZGlzdHJpYnV0aW9uIHByb3Blcmx5IGV4Y2x1ZGUgdGhlc2Uga2V5cyBmb3IgbmVzdGVkIGNoaWxkIEhUTUwgYXR0cmlidXRlc1xuLy8gc2luY2UgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIHJlbW92ZXMgcHJvcFR5cGVzIGluIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG52YXIgVHJhbnNpdGlvblByb3BUeXBlS2V5cyA9IFsnaW4nLCAnbW91bnRPbkVudGVyJywgJ3VubW91bnRPbkV4aXQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAndGltZW91dCcsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnXTtcbnZhciBUcmFuc2l0aW9uU3RhdHVzZXMgPSB7XG4gIEVOVEVSSU5HOiAnZW50ZXJpbmcnLFxuICBFTlRFUkVEOiAnZW50ZXJlZCcsXG4gIEVYSVRJTkc6ICdleGl0aW5nJyxcbiAgRVhJVEVEOiAnZXhpdGVkJ1xufTtcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgc3BhY2U6IDMyLFxuICBlbnRlcjogMTMsXG4gIHRhYjogOSxcbiAgdXA6IDM4LFxuICBkb3duOiA0MCxcbiAgaG9tZTogMzYsXG4gIGVuZDogMzUsXG4gIG46IDc4LFxuICBwOiA4MFxufTtcbnZhciBQb3BwZXJQbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGlzUmVhY3RSZWZPYmoodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2N1cnJlbnQnIGluIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHZhciBOQU4gPSAwIC8gMDtcblxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyBcIlwiICsgb3RoZXIgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IC9eMGJbMDFdKyQvaS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IC9eMG9bMC03XSskL2kudGVzdCh2YWx1ZSkgPyBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiAvXlstK10weFswLTlhLWZdKyQvaS50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBQcm94eV0nO1xufVxuZnVuY3Rpb24gZmluZERPTUVsZW1lbnRzKHRhcmdldCkge1xuICBpZiAoaXNSZWFjdFJlZk9iaih0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5jdXJyZW50O1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBjYW5Vc2VET00pIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0YXJnZXQgJ1wiICsgdGFyZ2V0ICsgXCInIGNvdWxkIG5vdCBiZSBpZGVudGlmaWVkIGluIHRoZSBkb20sIHRpcDogY2hlY2sgc3BlbGxpbmdcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc0FycmF5T3JOb2RlTGlzdChlbHMpIHtcbiAgaWYgKGVscyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGVscykgfHwgY2FuVXNlRE9NICYmIHR5cGVvZiBlbHMubGVuZ3RoID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQsIGFsbEVsZW1lbnRzKSB7XG4gIHZhciBlbHMgPSBmaW5kRE9NRWxlbWVudHModGFyZ2V0KTtcblxuICBpZiAoYWxsRWxlbWVudHMpIHtcbiAgICBpZiAoaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG5cbiAgICBpZiAoZWxzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtlbHNdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXlPck5vZGVMaXN0KGVscykpIHtcbiAgICByZXR1cm4gZWxzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGVscztcbn1cbnZhciBkZWZhdWx0VG9nZ2xlRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ2NsaWNrJ107XG5mdW5jdGlvbiBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKF9lbHMsIGhhbmRsZXIsIF9ldmVudHMsIHVzZUNhcHR1cmUpIHtcbiAgdmFyIGVscyA9IF9lbHM7XG5cbiAgaWYgKCFpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgZWxzID0gW2Vsc107XG4gIH1cblxuICB2YXIgZXZlbnRzID0gX2V2ZW50cztcblxuICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIGlmICghaXNBcnJheU9yTm9kZUxpc3QoZWxzKSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJyB8fCAhQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgVGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBET00gbm9kZSBvciBhbiBhcnJheSBvbiBET00gbm9kZXMgb3IgTm9kZUxpc3QuXFxuICAgICAgVGhlIHNlY29uZCBtdXN0IGJlIGEgZnVuY3Rpb24uXFxuICAgICAgVGhlIHRoaXJkIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnRzIERPTSBldmVudHNcXG4gICAgXCIpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChldmVudHMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG52YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1t0YWJpbmRleF06bm90KC5tb2RhbCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKSddO1xuXG52YXIgdXRpbHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U2Nyb2xsYmFyV2lkdGg6IGdldFNjcm9sbGJhcldpZHRoLFxuICBzZXRTY3JvbGxiYXJXaWR0aDogc2V0U2Nyb2xsYmFyV2lkdGgsXG4gIGlzQm9keU92ZXJmbG93aW5nOiBpc0JvZHlPdmVyZmxvd2luZyxcbiAgZ2V0T3JpZ2luYWxCb2R5UGFkZGluZzogZ2V0T3JpZ2luYWxCb2R5UGFkZGluZyxcbiAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcjogY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcixcbiAgc2V0R2xvYmFsQ3NzTW9kdWxlOiBzZXRHbG9iYWxDc3NNb2R1bGUsXG4gIG1hcFRvQ3NzTW9kdWxlczogbWFwVG9Dc3NNb2R1bGVzLFxuICBvbWl0OiBvbWl0LFxuICBwaWNrOiBwaWNrLFxuICB3YXJuT25jZTogd2Fybk9uY2UsXG4gIGRlcHJlY2F0ZWQ6IGRlcHJlY2F0ZWQsXG4gIERPTUVsZW1lbnQ6IERPTUVsZW1lbnQsXG4gIHRhcmdldFByb3BUeXBlOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFnUHJvcFR5cGU6IHRhZ1Byb3BUeXBlLFxuICBUcmFuc2l0aW9uVGltZW91dHM6IFRyYW5zaXRpb25UaW1lb3V0cyxcbiAgVHJhbnNpdGlvblByb3BUeXBlS2V5czogVHJhbnNpdGlvblByb3BUeXBlS2V5cyxcbiAgVHJhbnNpdGlvblN0YXR1c2VzOiBUcmFuc2l0aW9uU3RhdHVzZXMsXG4gIGtleUNvZGVzOiBrZXlDb2RlcyxcbiAgUG9wcGVyUGxhY2VtZW50czogUG9wcGVyUGxhY2VtZW50cyxcbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG4gIGlzUmVhY3RSZWZPYmo6IGlzUmVhY3RSZWZPYmosXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgdG9OdW1iZXI6IHRvTnVtYmVyLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBmaW5kRE9NRWxlbWVudHM6IGZpbmRET01FbGVtZW50cyxcbiAgaXNBcnJheU9yTm9kZUxpc3Q6IGlzQXJyYXlPck5vZGVMaXN0LFxuICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgZGVmYXVsdFRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50cyxcbiAgYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyczogYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyxcbiAgZm9jdXNhYmxlRWxlbWVudHM6IGZvY3VzYWJsZUVsZW1lbnRzXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDFmID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZmx1aWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFsID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBmbHVpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZmx1aWQgPSBwcm9wcy5mbHVpZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFmKTtcblxuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyJztcblxuICBpZiAoZmx1aWQgPT09IHRydWUpIHtcbiAgICBjb250YWluZXJDbGFzcyA9ICdjb250YWluZXItZmx1aWQnO1xuICB9IGVsc2UgaWYgKGZsdWlkKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lci1cIiArIGZsdWlkO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb250YWluZXJDbGFzcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWw7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFqO1xuXG52YXIgX2V4Y2x1ZGVkJDFlID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibm9HdXR0ZXJzXCIsIFwidGFnXCIsIFwid2lkdGhzXCJdO1xudmFyIHJvd0NvbFdpZHRocyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgcm93Q29sc1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIHByb3BUeXBlcyQxayA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbm9HdXR0ZXJzOiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgJ1BsZWFzZSB1c2UgQm9vdHN0cmFwIDUgZ3V0dGVyIHV0aWxpdHkgY2xhc3Nlcy4gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4wL2xheW91dC9ndXR0ZXJzLycpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB4czogcm93Q29sc1Byb3BUeXBlLFxuICBzbTogcm93Q29sc1Byb3BUeXBlLFxuICBtZDogcm93Q29sc1Byb3BUeXBlLFxuICBsZzogcm93Q29sc1Byb3BUeXBlLFxuICB4bDogcm93Q29sc1Byb3BUeXBlLFxuICB4eGw6IHJvd0NvbHNQcm9wVHlwZSxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxaSA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgd2lkdGhzOiByb3dDb2xXaWR0aHNcbn07XG5cbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbm9HdXR0ZXJzID0gcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWUpO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2xTaXplID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgY29sQ2xhc3Nlcy5wdXNoKGlzWHMgPyBcInJvdy1jb2xzLVwiICsgY29sU2l6ZSA6IFwicm93LWNvbHMtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZSk7XG4gIH0pO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5vR3V0dGVycyA/ICdneC0wJyA6IG51bGwsICdyb3cnLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxaztcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWk7XG5cbnZhciBfZXhjbHVkZWQkMWQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ3aWR0aHNcIiwgXCJ0YWdcIl07XG52YXIgY29sV2lkdGhzJDEgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIGNvbHVtblByb3BzJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCQxLFxuICBvZmZzZXQ6IHN0cmluZ09yTnVtYmVyUHJvcCQxXG59KV0pO1xudmFyIHByb3BUeXBlcyQxaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgeHM6IGNvbHVtblByb3BzJDEsXG4gIHNtOiBjb2x1bW5Qcm9wcyQxLFxuICBtZDogY29sdW1uUHJvcHMkMSxcbiAgbGc6IGNvbHVtblByb3BzJDEsXG4gIHhsOiBjb2x1bW5Qcm9wcyQxLFxuICB4eGw6IGNvbHVtblByb3BzJDEsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHdpZHRoczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWggPSB7XG4gIHRhZzogJ2RpdicsXG4gIHdpZHRoczogY29sV2lkdGhzJDFcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MkMSA9IGZ1bmN0aW9uIGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sU2l6ZSkge1xuICBpZiAoY29sU2l6ZSA9PT0gdHJ1ZSB8fCBjb2xTaXplID09PSAnJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbCcgOiBcImNvbC1cIiArIGNvbFdpZHRoO1xuICB9XG5cbiAgaWYgKGNvbFNpemUgPT09ICdhdXRvJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbC1hdXRvJyA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1hdXRvXCI7XG4gIH1cblxuICByZXR1cm4gaXNYcyA/IFwiY29sLVwiICsgY29sU2l6ZSA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1cIiArIGNvbFNpemU7XG59O1xuXG52YXIgZ2V0Q29sdW1uQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpIHtcbiAgaWYgKHdpZHRocyA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGhzID0gY29sV2lkdGhzJDE7XG4gIH1cblxuICB2YXIgbW9kaWZpZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbHVtblByb3AgPSBtb2RpZmllZEF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBtb2RpZmllZEF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2x1bW5Qcm9wICYmIGNvbHVtblByb3AgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIHZhciBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyQxKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2NvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzJDEoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3ApO1xuXG4gICAgICBjb2xDbGFzc2VzLnB1c2goX2NvbENsYXNzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbENsYXNzZXM6IGNvbENsYXNzZXMsXG4gICAgbW9kaWZpZWRBdHRyaWJ1dGVzOiBtb2RpZmllZEF0dHJpYnV0ZXNcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIENvbChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWQpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMubW9kaWZpZWRBdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgaWYgKCFjb2xDbGFzc2VzLmxlbmd0aCkge1xuICAgIGNvbENsYXNzZXMucHVzaCgnY29sJyk7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWo7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFoO1xuXG52YXIgX2V4Y2x1ZGVkJDFjID0gW1wiZXhwYW5kXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibGlnaHRcIiwgXCJkYXJrXCIsIFwiZml4ZWRcIiwgXCJzdGlja3lcIiwgXCJjb2xvclwiLCBcImNvbnRhaW5lclwiLCBcInRhZ1wiLCBcImNoaWxkcmVuXCJdO1xudmFyIHByb3BUeXBlcyQxaSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBUaGVtZSB0aGUgbmF2YmFyIGJ5IGFkZGluZyBhIGJhY2tncm91bmQgY29sb3IgICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogVXNlIGFueSBvZiB0aGUgcmVzcG9uc2l2ZSBjb250YWluZXJzIHRvIGNoYW5nZSBob3cgd2lkZSB0aGUgY29udGVudCBpbiB5b3VyIG5hdmJhciBpcyBwcmVzZW50ZWQuICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBUaGlzIHByb3AgaXMgcGFzc2VkIGlmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssIHRvIG1ha2UgdGhlIHRleHQgbGlnaHRlciAqL1xuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIERldGVybWluZSBpZiB0byBzaG93IHRvZ2dsZXIgYnV0dG9uICovXG4gIGV4cGFuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogTWFrZSB0aGUgbmF2YmFyIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgZml4ZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmdWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBgLm5hdmJhci1saWdodGAgY2xhc3MgKi9cbiAgbGlnaHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFVzZSBgcG9zaXRpb246IHN0aWNreWAgd2hpY2ggaXNuJ3QgZnVsbHkgc3VwcG9ydGVkIGluIGV2ZXJ5IGJyb3dzZXIgKi9cbiAgc3RpY2t5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFnID0ge1xuICB0YWc6ICduYXYnLFxuICBleHBhbmQ6IGZhbHNlLFxuICBjb250YWluZXI6ICdmbHVpZCdcbn07XG5cbnZhciBnZXRFeHBhbmRDbGFzcyA9IGZ1bmN0aW9uIGdldEV4cGFuZENsYXNzKGV4cGFuZCkge1xuICBpZiAoZXhwYW5kID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChleHBhbmQgPT09IHRydWUgfHwgZXhwYW5kID09PSAneHMnKSB7XG4gICAgcmV0dXJuICduYXZiYXItZXhwYW5kJztcbiAgfVxuXG4gIHJldHVybiBcIm5hdmJhci1leHBhbmQtXCIgKyBleHBhbmQ7XG59O1xuXG5mdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBleHBhbmQgPSBwcm9wcy5leHBhbmQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBsaWdodCA9IHByb3BzLmxpZ2h0LFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBmaXhlZCA9IHByb3BzLmZpeGVkLFxuICAgICAgc3RpY2t5ID0gcHJvcHMuc3RpY2t5LFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyJywgZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSwgKF9jbGFzc05hbWVzID0ge1xuICAgICduYXZiYXItbGlnaHQnOiBsaWdodCxcbiAgICAnbmF2YmFyLWRhcmsnOiBkYXJrXG4gIH0sIF9jbGFzc05hbWVzW1wiYmctXCIgKyBjb2xvcl0gPSBjb2xvciwgX2NsYXNzTmFtZXNbXCJmaXhlZC1cIiArIGZpeGVkXSA9IGZpeGVkLCBfY2xhc3NOYW1lc1tcInN0aWNreS1cIiArIHN0aWNreV0gPSBzdGlja3ksIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHZhciBjb250YWluZXJDbGFzcyA9IGNvbnRhaW5lciAmJiBjb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyJyA6IFwiY29udGFpbmVyLVwiICsgY29udGFpbmVyO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNvbnRhaW5lciA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc1xuICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbik7XG59XG5cbk5hdmJhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWk7XG5OYXZiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFnO1xuXG52YXIgX2V4Y2x1ZGVkJDFiID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxaCA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWYgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG5mdW5jdGlvbiBOYXZiYXJCcmFuZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci1icmFuZCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5OYXZiYXJCcmFuZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWg7XG5OYXZiYXJCcmFuZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWY7XG5cbnZhciBfZXhjbHVkZWQkMWEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFnID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWUgPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG5mdW5jdGlvbiBOYXZiYXJUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTmF2YmFyVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWc7XG5OYXZiYXJUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZTtcblxudmFyIF9leGNsdWRlZCQxOSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZiA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlIGNoaWxkIGVsZW1lbnRzICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFkID0ge1xuICB0YWc6ICdidXR0b24nLFxuICB0eXBlOiAnYnV0dG9uJ1xufTtcblxuZnVuY3Rpb24gTmF2YmFyVG9nZ2xlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItdG9nZ2xlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gfHwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ25hdmJhci10b2dnbGVyLWljb24nLCBjc3NNb2R1bGUpXG4gIH0pKTtcbn1cblxuTmF2YmFyVG9nZ2xlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWY7XG5OYXZiYXJUb2dnbGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZDtcblxudmFyIF9leGNsdWRlZCQxOCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYnNcIiwgXCJwaWxsc1wiLCBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiLCBcImp1c3RpZmllZFwiLCBcImZpbGxcIiwgXCJuYXZiYXJcIiwgXCJjYXJkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZSA9IHtcbiAgLyoqIEFkZGluZyBjYXJkIHByb3AgYWRkcyBgLmNhcmQtaGVhZGVyLXRhYnNgIG9yIGAuY2FyZC1oZWFkZXItcGlsbHNgIGNsYXNzICovXG4gIGNhcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIGZpbGxzIHRoZSBuYXYgdG8gZXh0ZW5kIHRvIGZ1bGwgYXZhaWxhYmxlIHdpZHRoICovXG4gIGZpbGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB5b3VyIG5hdiAqL1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnY2VudGVyJywgJ2VuZCddKSxcblxuICAvKiogIEFsbCBob3Jpem9udGFsIHNwYWNlIHdpbGwgYmUgb2NjdXBpZWQgYnkgbmF2IGxpbmtzLCBidXQgdW5saWtlIHRoZSBgZmlsbGAgYWJvdmUsIGV2ZXJ5IG5hdiBpdGVtIHdpbGwgYmUgdGhlIHNhbWUgd2lkdGguICovXG4gIGp1c3RpZmllZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgbmF2YmFyIGZvciBhIGZ1bGwtaGVpZ2h0IGFuZCBsaWdodHdlaWdodCBuYXZpZ2F0aW9uICovXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIE5hdkl0ZW1zIGxvb2sgbGlrZSBwaWxscyAqL1xuICBwaWxsczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIE5hdkl0ZW1zIGxvb2sgbGlrZSB0YWJzICovXG4gIHRhYnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIFN0YWNrIHlvdXIgbmF2aWdhdGlvbiBieSBjaGFuZ2luZyB0aGUgZmxleCBpdGVtIGRpcmVjdGlvbiAqL1xuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWMgPSB7XG4gIHRhZzogJ3VsJyxcbiAgdmVydGljYWw6IGZhbHNlXG59O1xuXG52YXIgZ2V0VmVydGljYWxDbGFzcyA9IGZ1bmN0aW9uIGdldFZlcnRpY2FsQ2xhc3ModmVydGljYWwpIHtcbiAgaWYgKHZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSB8fCB2ZXJ0aWNhbCA9PT0gJ3hzJykge1xuICAgIHJldHVybiAnZmxleC1jb2x1bW4nO1xuICB9XG5cbiAgcmV0dXJuIFwiZmxleC1cIiArIHZlcnRpY2FsICsgXCItY29sdW1uXCI7XG59O1xuXG5mdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRhYnMgPSBwcm9wcy50YWJzLFxuICAgICAgcGlsbHMgPSBwcm9wcy5waWxscyxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIGp1c3RpZmllZCA9IHByb3BzLmp1c3RpZmllZCxcbiAgICAgIGZpbGwgPSBwcm9wcy5maWxsLFxuICAgICAgbmF2YmFyID0gcHJvcHMubmF2YmFyLFxuICAgICAgY2FyZCA9IHByb3BzLmNhcmQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxOCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXZiYXIgPyAnbmF2YmFyLW5hdicgOiAnbmF2JywgaG9yaXpvbnRhbCA/IFwianVzdGlmeS1jb250ZW50LVwiICsgaG9yaXpvbnRhbCA6IGZhbHNlLCBnZXRWZXJ0aWNhbENsYXNzKHZlcnRpY2FsKSwge1xuICAgICduYXYtdGFicyc6IHRhYnMsXG4gICAgJ2NhcmQtaGVhZGVyLXRhYnMnOiBjYXJkICYmIHRhYnMsXG4gICAgJ25hdi1waWxscyc6IHBpbGxzLFxuICAgICdjYXJkLWhlYWRlci1waWxscyc6IGNhcmQgJiYgcGlsbHMsXG4gICAgJ25hdi1qdXN0aWZpZWQnOiBqdXN0aWZpZWQsXG4gICAgJ25hdi1maWxsJzogZmlsbFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZTtcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWM7XG5cbnZhciBfZXhjbHVkZWQkMTcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFkID0ge1xuICAvKiogQWRkIGFjdGl2ZSBjbGFzcyB0byBlbGVtZW50ICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFiID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbmZ1bmN0aW9uIE5hdkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtaXRlbScsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5OYXZJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZDtcbk5hdkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFiO1xuXG52YXIgX2V4Y2x1ZGVkJDE2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDFjID0ge1xuICAvKiogQWRkIGFjdGl2ZSBjbGFzcyB0byBOYXZMaW5rICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogRGlzYWJsZSB0aGUgbGluayAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBocmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gY2xpY2sgKi9cbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWEgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOYXZMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOYXZMaW5rKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5hdkxpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSAnIycpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxNik7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtbGluaycsIHtcbiAgICAgIGRpc2FibGVkOiBhdHRyaWJ1dGVzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE5hdkxpbms7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYztcbk5hdkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFhO1xudmFyIE5hdkxpbmskMSA9IE5hdkxpbms7XG5cbnZhciBfZXhjbHVkZWQkMTUgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkMWIgPSB7XG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlbSAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyB0byBsaXN0IHRhZyAqL1xuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIGxpc3QgdGFnICovXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTkgPSB7XG4gIHRhZzogJ25hdicsXG4gIGxpc3RUYWc6ICdvbCcsXG4gICdhcmlhLWxhYmVsJzogJ2JyZWFkY3J1bWInXG59O1xuXG5mdW5jdGlvbiBCcmVhZGNydW1iKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsaXN0Q2xhc3NOYW1lID0gcHJvcHMubGlzdENsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBMaXN0VGFnID0gcHJvcHMubGlzdFRhZyxcbiAgICAgIGxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE1KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2JyZWFkY3J1bWInLCBsaXN0Q2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KExpc3RUYWcsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0sIGNoaWxkcmVuKSk7XG59XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFiO1xuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTk7XG5cbnZhciBfZXhjbHVkZWQkMTQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFhID0ge1xuICAvKiogQWRkcyBhIHZpc3VhbCBcImFjdGl2ZVwiIHN0YXRlIHRvIGEgQnJlYWRjcnVtYiBJdGVtICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzIHRvIHRoZSBlbGVtZW50ICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDE4ID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbmZ1bmN0aW9uIEJyZWFkY3J1bWJJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCAnYnJlYWRjcnVtYi1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtY3VycmVudFwiOiBhY3RpdmUgPyAncGFnZScgOiB1bmRlZmluZWRcbiAgfSkpO1xufVxuXG5CcmVhZGNydW1iSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWE7XG5CcmVhZGNydW1iSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTg7XG5cbnZhciBfZXhjbHVkZWQkMTMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YXJpYW50XCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDE5ID0ge1xuICAvKiogRGlzYWJsZSB0aGUgYnV0dG9uIGlmIG5lZWRlZCAqL1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQXJpYSBsYWJlbCAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gY2xpY2sgKi9cbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBDaGFuZ2UgdGhlIHZhcmlhbnQgdG8gd2hpdGUgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3doaXRlJ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDE3ID0ge1xuICAnYXJpYS1sYWJlbCc6ICdjbG9zZSdcbn07XG5cbmZ1bmN0aW9uIENsb3NlQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxMyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYnRuLWNsb3NlJywgdmFyaWFudCAmJiBcImJ0bi1jbG9zZS1cIiArIHZhcmlhbnQpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9LCBhdHRyaWJ1dGVzKSk7XG59XG5cbkNsb3NlQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxOTtcbkNsb3NlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxNztcblxudmFyIF9leGNsdWRlZCQxMiA9IFtcImFjdGl2ZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJibG9ja1wiLCBcImNsYXNzTmFtZVwiLCBcImNsb3NlXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJvdXRsaW5lXCIsIFwic2l6ZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxOCA9IHtcbiAgLyoqIE1hbnVhbGx5IHNldCB0aGUgdmlzdWFsIHN0YXRlIG9mIHRoZSBidXR0b24gdG8gYWN0aXZlICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJsb2NrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlbSAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogVXNlIHRoZSBidXR0b24gYXMgYSBjbG9zZSBidXR0b24gKi9cbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIGNvbG9yIG9mIEJ1dHRvbiB0byBvbmUgb2YgdGhlIGF2YWlsYWJsZSBjb2xvcnMgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYnV0dG9uICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsaWNrICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcblxuICAvKiogQWRkcyBvdXRsaW5lIHRvIHRoZSBidXR0b24gKi9cbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIHRoZSBidXR0b24gYmlnZ2VyIG9yIHNtYWxsZXIgKi9cbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNiA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB0YWc6ICdidXR0b24nXG59O1xuXG5mdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgdmFyIG9uQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICByZXR1cm4gcHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5vbkNsaWNrLCBwcm9wcy5kaXNhYmxlZF0pO1xuXG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYmxvY2sgPSBwcm9wcy5ibG9jayxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgb3V0bGluZSA9IHByb3BzLm91dGxpbmUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxMik7XG5cbiAgaWYgKGNsb3NlKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDbG9zZUJ1dHRvbiwgYXR0cmlidXRlcyk7XG4gIH1cblxuICB2YXIgYnRuT3V0bGluZUNvbG9yID0gXCJidG5cIiArIChvdXRsaW5lID8gJy1vdXRsaW5lJyA6ICcnKSArIFwiLVwiICsgY29sb3I7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2J0bicsIGJ0bk91dGxpbmVDb2xvciwgc2l6ZSA/IFwiYnRuLVwiICsgc2l6ZSA6IGZhbHNlLCBibG9jayA/ICdkLWJsb2NrIHctMTAwJyA6IGZhbHNlLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkXG4gIH0pLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYnV0dG9uJykge1xuICAgIFRhZyA9ICdhJztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiBhdHRyaWJ1dGVzLm9uQ2xpY2sgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0pKTtcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxODtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTY7XG5cbnZhciBfZXhjbHVkZWQkMTEgPSBbXCJjbGFzc05hbWVcIl07XG52YXIgcHJvcFR5cGVzJDE3ID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNSA9IHtcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gQnV0dG9uVG9nZ2xlKHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5kZWZhdWx0VmFsdWUpLFxuICAgICAgdG9nZ2xlZCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFRvZ2dsZWQgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1cyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1cyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG9uQmx1ciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xuICAgICAgcHJvcHMub25CbHVyKGUpO1xuICAgIH1cblxuICAgIHNldEZvY3VzKGZhbHNlKTtcbiAgfSwgW3Byb3BzLm9uQmx1cl0pO1xuICB2YXIgb25Gb2N1cyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXModHJ1ZSk7XG4gIH0sIFtwcm9wcy5vbkZvY3VzXSk7XG4gIHZhciBvbkNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgcHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICBzZXRUb2dnbGVkKCF0b2dnbGVkKTtcbiAgfSwgW3Byb3BzLm9uQ2xpY2tdKTtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgIGZvY3VzOiBmb2N1c1xuICB9KSwgcHJvcHMuY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24sIF9leHRlbmRzKHtcbiAgICBhY3RpdmU6IHRvZ2dsZWQsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9LCBhdHRyaWJ1dGVzKSk7XG59XG5cbkJ1dHRvblRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTc7XG5CdXR0b25Ub2dnbGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE1O1xuXG4vKipcbiAqIERyb3Bkb3duQ29udGV4dFxuICoge1xuICogIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAqICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gKiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdkb3duJywgJ3N0YXJ0JywgJ2VuZCddKS5pc1JlcXVpcmVkLFxuICogIGluTmF2YmFyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICogIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICogfVxuICovXG5cbnZhciBEcm9wZG93bkNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBfZXhjbHVkZWQkMTAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXJlY3Rpb25cIiwgXCJpc09wZW5cIiwgXCJncm91cFwiLCBcInNpemVcIiwgXCJuYXZcIiwgXCJzZXRBY3RpdmVGcm9tQ2hpbGRcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIiwgXCJtZW51Um9sZVwiXTtcbnZhciBwcm9wVHlwZXMkMTYgPSB7XG4gIGExMXk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsndXAnLCAnZG93bicsICdzdGFydCcsICdlbmQnLCAnbGVmdCcsICdyaWdodCddKSxcbiAgZ3JvdXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG5hdjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBkcm9wdXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5OYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1lbnVSb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnbGlzdGJveCcsICdtZW51J10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNCA9IHtcbiAgYTExeTogdHJ1ZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiAnZG93bicsXG4gIG5hdjogZmFsc2UsXG4gIGFjdGl2ZTogZmFsc2UsXG4gIGluTmF2YmFyOiBmYWxzZSxcbiAgc2V0QWN0aXZlRnJvbUNoaWxkOiBmYWxzZVxufTtcbnZhciBwcmV2ZW50RGVmYXVsdEtleXMgPSBba2V5Q29kZXMuc3BhY2UsIGtleUNvZGVzLmVudGVyLCBrZXlDb2Rlcy51cCwga2V5Q29kZXMuZG93biwga2V5Q29kZXMuZW5kLCBrZXlDb2Rlcy5ob21lXTtcblxudmFyIERyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmFkZEV2ZW50cyA9IF90aGlzLmFkZEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrID0gX3RoaXMuaGFuZGxlRG9jdW1lbnRDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gX3RoaXMuaGFuZGxlS2V5RG93bi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW1vdmVFdmVudHMgPSBfdGhpcy5yZW1vdmVFdmVudHMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZU1lbnVSZWYgPSBfdGhpcy5oYW5kbGVNZW51UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5tZW51UmVmID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oYW5kbGVQcm9wcygpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICE9PSBwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmhhbmRsZVByb3BzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZU1lbnVSZWYgPSBmdW5jdGlvbiBoYW5kbGVNZW51UmVmKG1lbnVSZWYpIHtcbiAgICB0aGlzLm1lbnVSZWYuY3VycmVudCA9IG1lbnVSZWY7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICBpZiAoZSAmJiAoZS53aGljaCA9PT0gMyB8fCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0ga2V5Q29kZXMudGFiKSkgcmV0dXJuO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHZhciBtZW51ID0gdGhpcy5nZXRNZW51KCk7XG4gICAgdmFyIGNsaWNrSXNJbkNvbnRhaW5lciA9IGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiYgY29udGFpbmVyICE9PSBlLnRhcmdldDtcbiAgICB2YXIgY2xpY2tJc0luSW5wdXQgPSBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1ncm91cCcpICYmIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgJiYgZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJztcbiAgICB2YXIgY2xpY2tJc0luTWVudSA9IG1lbnUgJiYgbWVudS5jb250YWlucyhlLnRhcmdldCkgJiYgbWVudSAhPT0gZS50YXJnZXQ7XG5cbiAgICBpZiAoKGNsaWNrSXNJbkNvbnRhaW5lciAmJiAhY2xpY2tJc0luSW5wdXQgfHwgY2xpY2tJc0luTWVudSkgJiYgKGUudHlwZSAhPT0gJ2tleXVwJyB8fCBlLndoaWNoID09PSBrZXlDb2Rlcy50YWIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBpc1RhcmdldE1lbnVJdGVtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdtZW51aXRlbScgfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICdvcHRpb24nO1xuICAgIHZhciBpc1RhcmdldE1lbnVDdHJsID0gdGhpcy5nZXRNZW51Q3RybCgpID09PSBlLnRhcmdldDtcbiAgICB2YXIgaXNUYWIgPSBrZXlDb2Rlcy50YWIgPT09IGUud2hpY2g7XG5cbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChlLnRhcmdldC50YWdOYW1lKSB8fCBpc1RhYiAmJiAhdGhpcy5wcm9wcy5hMTF5IHx8IGlzVGFiICYmICEoaXNUYXJnZXRNZW51SXRlbSB8fCBpc1RhcmdldE1lbnVDdHJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcmV2ZW50RGVmYXVsdEtleXMuaW5kZXhPZihlLndoaWNoKSAhPT0gLTEgfHwgZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChpc1RhcmdldE1lbnVDdHJsKSB7XG4gICAgICBpZiAoW2tleUNvZGVzLnNwYWNlLCBrZXlDb2Rlcy5lbnRlciwga2V5Q29kZXMudXAsIGtleUNvZGVzLmRvd25dLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICAvLyBPcGVuIHRoZSBtZW51IChpZiBub3Qgb3BlbikgYW5kIGZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRNZW51SXRlbXMoKVswXS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgaXNUYWIpIHtcbiAgICAgICAgLy8gRm9jdXMgdGhlIGZpcnN0IG1lbnUgaXRlbSBpZiB0YWJiaW5nIGZyb20gYW4gb3BlbiBtZW51LiBXZSBuZWVkIHRoaXNcbiAgICAgICAgLy8gZm9yIGNhc2VzIHdoZXJlIHRoZSBEcm9wZG93bk1lbnUgc2V0cyBhIGN1c3RvbSBjb250YWluZXIsIHdoaWNoIG1heVxuICAgICAgICAvLyBub3QgYmUgdGhlIG5hdHVyYWwgbmV4dCBpdGVtIHRvIHRhYiB0byBmcm9tIHRoZSBEcm9wZG93blRvZ2dsZS5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdldE1lbnVJdGVtcygpWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUud2hpY2ggPT09IGtleUNvZGVzLmVzYykge1xuICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgaXNUYXJnZXRNZW51SXRlbSkge1xuICAgICAgaWYgKFtrZXlDb2Rlcy50YWIsIGtleUNvZGVzLmVzY10uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgICAgICB0aGlzLmdldE1lbnVDdHJsKCkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoW2tleUNvZGVzLnNwYWNlLCBrZXlDb2Rlcy5lbnRlcl0uaW5kZXhPZihlLndoaWNoKSA+IC0xKSB7XG4gICAgICAgIGUudGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgIHRoaXMuZ2V0TWVudUN0cmwoKS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChba2V5Q29kZXMuZG93biwga2V5Q29kZXMudXBdLmluZGV4T2YoZS53aGljaCkgPiAtMSB8fCBba2V5Q29kZXMubiwga2V5Q29kZXMucF0uaW5kZXhPZihlLndoaWNoKSA+IC0xICYmIGUuY3RybEtleSkge1xuICAgICAgICB2YXIgJG1lbnVpdGVtcyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG4gICAgICAgIHZhciBpbmRleCA9ICRtZW51aXRlbXMuaW5kZXhPZihlLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGtleUNvZGVzLnVwID09PSBlLndoaWNoIHx8IGtleUNvZGVzLnAgPT09IGUud2hpY2ggJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCAhPT0gMCA/IGluZGV4IC0gMSA6ICRtZW51aXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5kb3duID09PSBlLndoaWNoIHx8IGtleUNvZGVzLm4gPT09IGUud2hpY2ggJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCA9PT0gJG1lbnVpdGVtcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgICRtZW51aXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmVuZCA9PT0gZS53aGljaCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIF8kbWVudWl0ZW1zW18kbWVudWl0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmhvbWUgPT09IGUud2hpY2gpIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zMiA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgXyRtZW51aXRlbXMyWzBdLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkge1xuICAgICAgICB2YXIgXyRtZW51aXRlbXMzID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICB2YXIgY2hhclByZXNzZWQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfJG1lbnVpdGVtczMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgZmlyc3RMZXR0ZXIgPSBfJG1lbnVpdGVtczNbaV0udGV4dENvbnRlbnQgJiYgXyRtZW51aXRlbXMzW2ldLnRleHRDb250ZW50WzBdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RMZXR0ZXIgPT09IGNoYXJQcmVzc2VkKSB7XG4gICAgICAgICAgICBfJG1lbnVpdGVtczNbaV0uZm9jdXMoKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVQcm9wcyA9IGZ1bmN0aW9uIGhhbmRsZVByb3BzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWVudSA9IGZ1bmN0aW9uIGdldE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVJlZi5jdXJyZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51Q3RybCA9IGZ1bmN0aW9uIGdldE1lbnVDdHJsKCkge1xuICAgIGlmICh0aGlzLl8kbWVudUN0cmwpIHJldHVybiB0aGlzLl8kbWVudUN0cmw7XG4gICAgdGhpcy5fJG1lbnVDdHJsID0gdGhpcy5nZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCdbYXJpYS1leHBhbmRlZF0nKTtcbiAgICByZXR1cm4gdGhpcy5fJG1lbnVDdHJsO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtVHlwZSA9IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5nZXRDb250ZXh0VmFsdWUgPSBmdW5jdGlvbiBnZXRDb250ZXh0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGUsXG4gICAgICBpc09wZW46IHRoaXMucHJvcHMuaXNPcGVuLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHRoaXMucHJvcHMuZHJvcHVwID8gJ3VwJyA6IHRoaXMucHJvcHMuZGlyZWN0aW9uLFxuICAgICAgaW5OYXZiYXI6IHRoaXMucHJvcHMuaW5OYXZiYXIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIC8vIENhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBieSBEcm9wZG93bk1lbnUgdG8gcHJvdmlkZSBhIHJlZiB0b1xuICAgICAgLy8gYSBIVE1MIHRhZyB0aGF0J3MgdXNlZCBmb3IgdGhlIERyb3Bkb3duTWVudVxuICAgICAgb25NZW51UmVmOiB0aGlzLmhhbmRsZU1lbnVSZWYsXG4gICAgICBtZW51Um9sZTogdGhpcy5wcm9wcy5tZW51Um9sZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVJdGVtcyA9IGZ1bmN0aW9uIGdldE1lbnVJdGVtcygpIHtcbiAgICAvLyBJbiBhIHJlYWwgbWVudSB3aXRoIGEgY2hpbGQgRHJvcGRvd25NZW51LCBgdGhpcy5nZXRNZW51KClgIHNob3VsZCBuZXZlclxuICAgIC8vIGJlIG51bGwsIGJ1dCBpdCBpcyBzb21ldGltZXMgbnVsbCBpbiB0ZXN0cy4gVG8gbWl0aWdhdGUgdGhhdCwgd2UganVzdFxuICAgIC8vIHVzZSBgdGhpcy5nZXRDb250YWluZXIoKWAgYXMgdGhlIGZhbGxiYWNrIGBtZW51Q29udGFpbmVyYC5cbiAgICB2YXIgbWVudUNvbnRhaW5lciA9IHRoaXMuZ2V0TWVudSgpIHx8IHRoaXMuZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobWVudUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9XFxcIlwiICsgdGhpcy5nZXRJdGVtVHlwZSgpICsgXCJcXFwiXVwiKSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZEV2ZW50cyA9IGZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCcsICdrZXl1cCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgX3RoaXMzLmhhbmRsZURvY3VtZW50Q2xpY2ssIHRydWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnLCAna2V5dXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIF90aGlzNC5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcywgX3JlZjtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnLCAnZGlzYWJsZWQnLCAnaW5OYXZiYXInLCAnYTExeSddKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX29taXQuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfb21pdC5jc3NNb2R1bGUsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9vbWl0LmRpcmVjdGlvbixcbiAgICAgICAgaXNPcGVuID0gX29taXQuaXNPcGVuLFxuICAgICAgICBncm91cCA9IF9vbWl0Lmdyb3VwLFxuICAgICAgICBzaXplID0gX29taXQuc2l6ZSxcbiAgICAgICAgbmF2ID0gX29taXQubmF2LFxuICAgICAgICBzZXRBY3RpdmVGcm9tQ2hpbGQgPSBfb21pdC5zZXRBY3RpdmVGcm9tQ2hpbGQsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGFnID0gX29taXQudGFnLFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0LCBfZXhjbHVkZWQkMTApO1xuXG4gICAgdmFyIFRhZyA9IHRhZyB8fCAobmF2ID8gJ2xpJyA6ICdkaXYnKTtcbiAgICB2YXIgc3ViSXRlbUlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAoc2V0QWN0aXZlRnJvbUNoaWxkKSB7XG4gICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW5bMV0ucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChkcm9wZG93bkl0ZW0pIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbSAmJiBkcm9wZG93bkl0ZW0ucHJvcHMuYWN0aXZlKSBzdWJJdGVtSXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXYgJiYgYWN0aXZlID8gJ2FjdGl2ZScgOiBmYWxzZSwgc2V0QWN0aXZlRnJvbUNoaWxkICYmIHN1Ykl0ZW1Jc0FjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIChfY2xhc3NOYW1lcyA9IHtcbiAgICAgICdidG4tZ3JvdXAnOiBncm91cFxuICAgIH0sIF9jbGFzc05hbWVzW1wiYnRuLWdyb3VwLVwiICsgc2l6ZV0gPSAhIXNpemUsIF9jbGFzc05hbWVzLmRyb3Bkb3duID0gIWdyb3VwLCBfY2xhc3NOYW1lcy5kcm9wdXAgPSBkaXJlY3Rpb24gPT09ICd1cCcsIF9jbGFzc05hbWVzLmRyb3BzdGFydCA9IGRpcmVjdGlvbiA9PT0gJ3N0YXJ0JyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0JywgX2NsYXNzTmFtZXMuZHJvcGVuZCA9IGRpcmVjdGlvbiA9PT0gJ2VuZCcgfHwgZGlyZWN0aW9uID09PSAncmlnaHQnLCBfY2xhc3NOYW1lcy5zaG93ID0gaXNPcGVuLCBfY2xhc3NOYW1lc1snbmF2LWl0ZW0nXSA9IG5hdiwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuTWFuYWdlciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJzLCAoX3JlZiA9IHt9LCBfcmVmW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IHRoaXMuY29udGFpbmVyUmVmLCBfcmVmKSwge1xuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTY7XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTQ7XG52YXIgRHJvcGRvd24kMSA9IERyb3Bkb3duO1xuXG52YXIgcHJvcFR5cGVzJDE1ID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXG59O1xuXG5mdW5jdGlvbiBCdXR0b25Ecm9wZG93bihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duJDEsIF9leHRlbmRzKHtcbiAgICBncm91cDogdHJ1ZVxuICB9LCBwcm9wcykpO1xufVxuXG5CdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTU7XG5cbnZhciBfZXhjbHVkZWQkJCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJ2ZXJ0aWNhbFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTQgPSB7XG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBJbiBvcmRlciBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoc3VjaCBhcyBzY3JlZW4gcmVhZGVycykgdG8gY29udmV5IHRoYXQgYSBzZXJpZXMgb2YgYnV0dG9ucyBpcyBncm91cGVkLCBhbiBhcHByb3ByaWF0ZSByb2xlIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBwcm92aWRlZC4gRm9yIGJ1dHRvbiBncm91cHMsIHRoaXMgd291bGQgYmUgcm9sZT1cImdyb3VwXCIsIHdoaWxlIHRvb2xiYXJzIHNob3VsZCBoYXZlIGEgcm9sZT1cInRvb2xiYXJcIi4gKi9cbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIE1ha2UgdGhlIGJ1dHRvbiBiaWdnZXIgb3Igc21hbGxlciAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIE1ha2UgYnV0dG9uIGdyb3VwIHZlcnRpY2FsICovXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDEzID0ge1xuICB0YWc6ICdkaXYnLFxuICByb2xlOiAnZ3JvdXAnXG59O1xuXG5mdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICB2ZXJ0aWNhbCA9IHByb3BzLnZlcnRpY2FsLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkJCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gJ2J0bi1ncm91cC0nICsgc2l6ZSA6IGZhbHNlLCB2ZXJ0aWNhbCA/ICdidG4tZ3JvdXAtdmVydGljYWwnIDogJ2J0bi1ncm91cCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTQ7XG5CdXR0b25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTM7XG5cbnZhciBfZXhjbHVkZWQkXyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkMTMgPSB7XG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGV4aXN0aW5nIGNsYXNzTmFtZSB3aXRoIGEgbmV3IGNsYXNzTmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBJbiBvcmRlciBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyAoc3VjaCBhcyBzY3JlZW4gcmVhZGVycykgdG8gY29udmV5IHRoYXQgYSBzZXJpZXMgb2YgYnV0dG9ucyBpcyBncm91cGVkLCBhbiBhcHByb3ByaWF0ZSByb2xlIGF0dHJpYnV0ZSBuZWVkcyB0byBiZSBwcm92aWRlZC4gRm9yIGJ1dHRvbiBncm91cHMsIHRoaXMgd291bGQgYmUgcm9sZT1cImdyb3VwXCIsIHdoaWxlIHRvb2xiYXJzIHNob3VsZCBoYXZlIGEgcm9sZT1cInRvb2xiYXJcIi4gKi9cbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgcm9sZTogJ3Rvb2xiYXInXG59O1xuXG5mdW5jdGlvbiBCdXR0b25Ub29sYmFyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRfKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdidG4tdG9vbGJhcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5CdXR0b25Ub29sYmFyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMztcbkJ1dHRvblRvb2xiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEyO1xuXG52YXIgX2V4Y2x1ZGVkJFogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXZpZGVyXCIsIFwidGFnXCIsIFwiaGVhZGVyXCIsIFwiYWN0aXZlXCIsIFwidGV4dFwiXTtcbnZhciBwcm9wVHlwZXMkMTIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXZpZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGhlYWRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0ZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJDExID0ge1xuICB0YWc6ICdidXR0b24nLFxuICB0b2dnbGU6IHRydWVcbn07XG5cbnZhciBEcm9wZG93bkl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25JdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bkl0ZW0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nZXRUYWJJbmRleCA9IF90aGlzLmdldFRhYkluZGV4LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bkl0ZW0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMuaGVhZGVyLFxuICAgICAgICBkaXZpZGVyID0gX3RoaXMkcHJvcHMuZGl2aWRlcixcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIHRoaXMuY29udGV4dC50b2dnbGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0Lm1lbnVSb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgIHJldHVybiAnb3B0aW9uJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ21lbnVpdGVtJztcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFiSW5kZXggPSBmdW5jdGlvbiBnZXRUYWJJbmRleCgpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgIGhlYWRlciA9IF90aGlzJHByb3BzMi5oZWFkZXIsXG4gICAgICAgIGRpdmlkZXIgPSBfdGhpcyRwcm9wczIuZGl2aWRlcixcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzMi50ZXh0O1xuXG4gICAgaWYgKGRpc2FibGVkIHx8IGhlYWRlciB8fCBkaXZpZGVyIHx8IHRleHQpIHtcbiAgICAgIHJldHVybiAnLTEnO1xuICAgIH1cblxuICAgIHJldHVybiAnMCc7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgdGFiSW5kZXggPSB0aGlzLmdldFRhYkluZGV4KCk7XG4gICAgdmFyIHJvbGUgPSB0YWJJbmRleCA+IC0xID8gdGhpcy5nZXRSb2xlKCkgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgX29taXQgPSBvbWl0KHRoaXMucHJvcHMsIFsndG9nZ2xlJ10pLFxuICAgICAgICBjbGFzc05hbWUgPSBfb21pdC5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF9vbWl0LmNzc01vZHVsZSxcbiAgICAgICAgZGl2aWRlciA9IF9vbWl0LmRpdmlkZXIsXG4gICAgICAgIFRhZyA9IF9vbWl0LnRhZyxcbiAgICAgICAgaGVhZGVyID0gX29taXQuaGVhZGVyLFxuICAgICAgICBhY3RpdmUgPSBfb21pdC5hY3RpdmUsXG4gICAgICAgIHRleHQgPSBfb21pdC50ZXh0LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vbWl0LCBfZXhjbHVkZWQkWik7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICdkcm9wZG93bi1pdGVtJzogIWRpdmlkZXIgJiYgIWhlYWRlciAmJiAhdGV4dCxcbiAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgJ2Ryb3Bkb3duLWhlYWRlcic6IGhlYWRlcixcbiAgICAgICdkcm9wZG93bi1kaXZpZGVyJzogZGl2aWRlcixcbiAgICAgICdkcm9wZG93bi1pdGVtLXRleHQnOiB0ZXh0XG4gICAgfSksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnYnV0dG9uJykge1xuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICBUYWcgPSAnaDYnO1xuICAgICAgfSBlbHNlIGlmIChkaXZpZGVyKSB7XG4gICAgICAgIFRhZyA9ICdkaXYnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgICAgIFRhZyA9ICdhJztcbiAgICAgIH0gZWxzZSBpZiAodGV4dCkge1xuICAgICAgICBUYWcgPSAnc3Bhbic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IFRhZyA9PT0gJ2J1dHRvbicgJiYgKHByb3BzLm9uQ2xpY2sgfHwgdGhpcy5wcm9wcy50b2dnbGUpID8gJ2J1dHRvbicgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcywge1xuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgcm9sZTogcm9sZSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGlja1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25JdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuRHJvcGRvd25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMjtcbkRyb3Bkb3duSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTE7XG5Ecm9wZG93bkl0ZW0uY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25JdGVtJDEgPSBEcm9wZG93bkl0ZW07XG5cbnZhciBfZXhjbHVkZWQkWSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRhcmtcIiwgXCJlbmRcIiwgXCJyaWdodFwiLCBcInRhZ1wiLCBcImZsaXBcIiwgXCJtb2RpZmllcnNcIiwgXCJwZXJzaXN0XCIsIFwic3RyYXRlZ3lcIiwgXCJjb250YWluZXJcIiwgXCJ1cGRhdGVPblNlbGVjdFwiXTtcbnZhciBwcm9wVHlwZXMkMTEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUuaXNSZXF1aXJlZCxcbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBlbmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogRmxpcHMgdGhlIG1lbnUgdG8gdGhlIG9wcG9zaXRlIHNpZGUgaWYgdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSB0byBmaXQgKi9cbiAgZmxpcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHN0eWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgcGVyc2lzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG5cbiAgLyoqIFVwZGF0ZSBwb3BwZXIgbGF5b3V0IHdoZW4gYSBjbGljayBldmVudCBjb21lcyB1cC4gVGhpcyBsZXZlcmFnZXMgZXZlbnQgYnViYmxpbmcuICovXG4gIHVwZGF0ZU9uU2VsZWN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJpZ2h0OiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgJ1BsZWFzZSB1c2UgXCJlbmRcIiBpbnN0ZWFkLicpXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxMCA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgZmxpcDogdHJ1ZSxcbiAgbW9kaWZpZXJzOiBbXVxufTtcbnZhciBkaXJlY3Rpb25Qb3NpdGlvbk1hcCA9IHtcbiAgdXA6ICd0b3AnLFxuICBsZWZ0OiAnbGVmdCcsXG4gIHJpZ2h0OiAncmlnaHQnLFxuICBzdGFydDogJ2xlZnQnLFxuICBlbmQ6ICdyaWdodCcsXG4gIGRvd246ICdib3R0b20nXG59O1xuXG52YXIgRHJvcGRvd25NZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd25NZW51KCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bk1lbnUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0Lm1lbnVSb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgIHJldHVybiAnbGlzdGJveCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdtZW51JztcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgZGFyayA9IF90aGlzJHByb3BzLmRhcmssXG4gICAgICAgIGVuZCA9IF90aGlzJHByb3BzLmVuZCxcbiAgICAgICAgcmlnaHQgPSBfdGhpcyRwcm9wcy5yaWdodCxcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBwZXJzaXN0ID0gX3RoaXMkcHJvcHMucGVyc2lzdCxcbiAgICAgICAgc3RyYXRlZ3kgPSBfdGhpcyRwcm9wcy5zdHJhdGVneSxcbiAgICAgICAgY29udGFpbmVyID0gX3RoaXMkcHJvcHMuY29udGFpbmVyLFxuICAgICAgICB1cGRhdGVPblNlbGVjdCA9IF90aGlzJHByb3BzLnVwZGF0ZU9uU2VsZWN0LFxuICAgICAgICBhdHRycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkWSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdkcm9wZG93bi1tZW51Jywge1xuICAgICAgJ2Ryb3Bkb3duLW1lbnUtZGFyayc6IGRhcmssXG4gICAgICAnZHJvcGRvd24tbWVudS1lbmQnOiBlbmQgfHwgcmlnaHQsXG4gICAgICBzaG93OiB0aGlzLmNvbnRleHQuaXNPcGVuXG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgdmFyIFRhZyA9IHRhZztcblxuICAgIGlmIChwZXJzaXN0IHx8IHRoaXMuY29udGV4dC5pc09wZW4gJiYgIXRoaXMuY29udGV4dC5pbk5hdmJhcikge1xuICAgICAgdmFyIHBvc2l0aW9uMSA9IGRpcmVjdGlvblBvc2l0aW9uTWFwW3RoaXMuY29udGV4dC5kaXJlY3Rpb25dIHx8ICdib3R0b20nO1xuICAgICAgdmFyIHBvc2l0aW9uMiA9IGVuZCB8fCByaWdodCA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgICAgIHZhciBwb3BlclBsYWNlbWVudCA9IHBvc2l0aW9uMSArIFwiLVwiICsgcG9zaXRpb24yO1xuICAgICAgdmFyIHBvcGVyTW9kaWZpZXJzID0gW10uY29uY2F0KG1vZGlmaWVycywgW3tcbiAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICBlbmFibGVkOiAhIWZsaXBcbiAgICAgIH1dKTtcbiAgICAgIHZhciBwb3BwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUG9wcGVyLCB7XG4gICAgICAgIHBsYWNlbWVudDogcG9wZXJQbGFjZW1lbnQsXG4gICAgICAgIG1vZGlmaWVyczogcG9wZXJNb2RpZmllcnMsXG4gICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVneVxuICAgICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICAgICAgICB1cGRhdGUgPSBfcmVmLnVwZGF0ZTtcblxuICAgICAgICB2YXIgY29tYmluZWRTdHlsZSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfdGhpcy5wcm9wcy5zdHlsZSksIHN0eWxlKTtcblxuICAgICAgICB2YXIgaGFuZGxlUmVmID0gZnVuY3Rpb24gaGFuZGxlUmVmKHRhZ1JlZikge1xuICAgICAgICAgIC8vIFNlbmQgdGhlIHJlZiB0byBgcmVhY3QtcG9wcGVyYFxuICAgICAgICAgIHJlZih0YWdSZWYpOyAvLyBTZW5kIHRoZSByZWYgdG8gdGhlIHBhcmVudCBEcm9wZG93biBzbyB0aGF0IGNsaWNrcyBvdXRzaWRlXG4gICAgICAgICAgLy8gaXQgd2lsbCBjYXVzZSBpdCB0byBjbG9zZVxuXG4gICAgICAgICAgdmFyIG9uTWVudVJlZiA9IF90aGlzLmNvbnRleHQub25NZW51UmVmO1xuICAgICAgICAgIGlmIChvbk1lbnVSZWYpIG9uTWVudVJlZih0YWdSZWYpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICByb2xlOiBfdGhpcy5nZXRSb2xlKCksXG4gICAgICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICAgICAgfSwgYXR0cnMsIHtcbiAgICAgICAgICBzdHlsZTogY29tYmluZWRTdHlsZSxcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6ICFfdGhpcy5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjogcGxhY2VtZW50LFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlT25TZWxlY3QgJiYgdXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbChwb3BwZXIsIGdldFRhcmdldChjb250YWluZXIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvcHBlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgIHJvbGU6IHRoaXMuZ2V0Um9sZSgpXG4gICAgfSwgYXR0cnMsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogIXRoaXMuY29udGV4dC5pc09wZW4sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBhdHRycy5wbGFjZW1lbnRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duTWVudTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTE7XG5Ecm9wZG93bk1lbnUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDEwO1xuRHJvcGRvd25NZW51LmNvbnRleHRUeXBlID0gRHJvcGRvd25Db250ZXh0O1xudmFyIERyb3Bkb3duTWVudSQxID0gRHJvcGRvd25NZW51O1xuXG52YXIgX2V4Y2x1ZGVkJFggPSBbXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNzc01vZHVsZVwiLCBcImNhcmV0XCIsIFwic3BsaXRcIiwgXCJuYXZcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkMTAgPSB7XG4gIGNhcmV0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICAnYXJpYS1oYXNwb3B1cCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc3BsaXQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbmF2OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkJCA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAnYXJpYS1oYXNwb3B1cCc6IHRydWVcbn07XG5cbnZhciBEcm9wZG93blRvZ2dsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93blRvZ2dsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcGRvd25Ub2dnbGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRHJvcGRvd25Ub2dnbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgdGhpcy5jb250ZXh0LmRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubmF2ICYmICF0aGlzLnByb3BzLnRhZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5nZXRSb2xlID0gZnVuY3Rpb24gZ2V0Um9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Lm1lbnVSb2xlIHx8IHRoaXMucHJvcHNbJ2FyaWEtaGFzcG9wdXAnXTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2xvciA9IF90aGlzJHByb3BzLmNvbG9yLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNhcmV0ID0gX3RoaXMkcHJvcHMuY2FyZXQsXG4gICAgICAgIHNwbGl0ID0gX3RoaXMkcHJvcHMuc3BsaXQsXG4gICAgICAgIG5hdiA9IF90aGlzJHByb3BzLm5hdixcbiAgICAgICAgdGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkWCk7XG5cbiAgICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCAnVG9nZ2xlIERyb3Bkb3duJztcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHtcbiAgICAgICdkcm9wZG93bi10b2dnbGUnOiBjYXJldCB8fCBzcGxpdCxcbiAgICAgICdkcm9wZG93bi10b2dnbGUtc3BsaXQnOiBzcGxpdCxcbiAgICAgICduYXYtbGluayc6IG5hdlxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHZhciBjaGlsZHJlbiA9IHR5cGVvZiBwcm9wcy5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9wcy5jaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInZpc3VhbGx5LWhpZGRlblwiXG4gICAgfSwgYXJpYUxhYmVsKTtcbiAgICB2YXIgVGFnO1xuXG4gICAgaWYgKG5hdiAmJiAhdGFnKSB7XG4gICAgICBUYWcgPSAnYSc7XG4gICAgICBwcm9wcy5ocmVmID0gJyMnO1xuICAgIH0gZWxzZSBpZiAoIXRhZykge1xuICAgICAgVGFnID0gQnV0dG9uO1xuICAgICAgcHJvcHMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHByb3BzLmNzc01vZHVsZSA9IGNzc01vZHVsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgVGFnID0gdGFnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQuaW5OYXZiYXIpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogdGhpcy5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUmVmZXJlbmNlLCB7XG4gICAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgcmVmID0gX3JlZi5yZWY7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIHByb3BzLCAoX3JlZjIgPSB7fSwgX3JlZjJbdHlwZW9mIFRhZyA9PT0gJ3N0cmluZycgPyAncmVmJyA6ICdpbm5lclJlZiddID0gcmVmLCBfcmVmMiksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBvbkNsaWNrOiBfdGhpczIub25DbGljayxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF90aGlzMi5jb250ZXh0LmlzT3BlbixcbiAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IF90aGlzMi5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93blRvZ2dsZTtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duVG9nZ2xlLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxMDtcbkRyb3Bkb3duVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQkO1xuRHJvcGRvd25Ub2dnbGUuY29udGV4dFR5cGUgPSBEcm9wZG93bkNvbnRleHQ7XG52YXIgRHJvcGRvd25Ub2dnbGUkMSA9IERyb3Bkb3duVG9nZ2xlO1xuXG52YXIgX2V4Y2x1ZGVkJFcgPSBbXCJ0YWdcIiwgXCJiYXNlQ2xhc3NcIiwgXCJiYXNlQ2xhc3NBY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcImlubmVyUmVmXCJdO1xuXG52YXIgcHJvcFR5cGVzJCQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYmFzZUNsYXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFzZUNsYXNzQWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyRfID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgYmFzZUNsYXNzOiAnZmFkZScsXG4gIGJhc2VDbGFzc0FjdGl2ZTogJ3Nob3cnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSxcbiAgYXBwZWFyOiB0cnVlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgXCJpblwiOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gRmFkZShwcm9wcykge1xuICB2YXIgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzLFxuICAgICAgYmFzZUNsYXNzQWN0aXZlID0gcHJvcHMuYmFzZUNsYXNzQWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRXKTtcblxuICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHN0YXR1cyA9PT0gJ2VudGVyZWQnO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYmFzZUNsYXNzLCBpc0FjdGl2ZSAmJiBiYXNlQ2xhc3NBY3RpdmUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IGlubmVyUmVmXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbkZhZGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJCQ7XG5GYWRlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRfO1xuXG4vKipcbiAqIEFjY29yZGlvbkNvbnRleHRcbiAqIHtcbiAqICB0b2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gKiAgb3BlbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICogfVxuICovXG5cbnZhciBBY2NvcmRpb25Db250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgX2V4Y2x1ZGVkJFYgPSBbXCJmbHVzaFwiLCBcIm9wZW5cIiwgXCJ0b2dnbGVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkXyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgY2xhc3NOYW1lIHdpdGggYSBuZXcgY2xhc3NOYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFJlbmRlciBhY2NvcmRpb25zIGVkZ2UtdG8tZWRnZSB3aXRoIHRoZWlyIHBhcmVudCBjb250YWluZXIgKi9cbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBUaGUgY3VycmVudCBhY3RpdmUga2V5IHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGN1cnJlbnRseSBleHBhbmRlZCBjYXJkICovXG4gIG9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBGdW5jdGlvbiB0aGF0J3MgdHJpZ2dlcmVkIG9uIGNsaWNraW5nIGBBY2NvcmRpb25IZWFkZXJgICovXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzJFogPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICB2YXIgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbicsIHtcbiAgICAnYWNjb3JkaW9uLWZsdXNoJzogZmx1c2hcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBhY2NvcmRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IG9wZW4sXG4gICAgICB0b2dnbGU6IHRvZ2dsZVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWNjb3JkaW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKSk7XG59XG5cbkFjY29yZGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkXztcbkFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWjtcblxudmFyIF9leGNsdWRlZCRVID0gW1wiZGVmYXVsdE9wZW5cIiwgXCJzdGF5T3BlblwiXTtcbnZhciBwcm9wVHlwZXMkWiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIHN0YXlPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG52YXIgZGVmYXVsdFByb3BzJFkgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIFVuY29udHJvbGxlZEFjY29yZGlvbihfcmVmKSB7XG4gIHZhciBkZWZhdWx0T3BlbiA9IF9yZWYuZGVmYXVsdE9wZW4sXG4gICAgICBzdGF5T3BlbiA9IF9yZWYuc3RheU9wZW4sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIF9leGNsdWRlZCRVKTtcblxuICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdE9wZW4gfHwgKHN0YXlPcGVuID8gW10gOiB1bmRlZmluZWQpKSxcbiAgICAgIG9wZW4gPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRPcGVuID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoaWQpIHtcbiAgICBpZiAoc3RheU9wZW4pIHtcbiAgICAgIGlmIChvcGVuLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICBzZXRPcGVuKG9wZW4uZmlsdGVyKGZ1bmN0aW9uIChhY2NvcmRpb25JZCkge1xuICAgICAgICAgIHJldHVybiBhY2NvcmRpb25JZCAhPT0gaWQ7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE9wZW4oW10uY29uY2F0KG9wZW4sIFtpZF0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wZW4gPT09IGlkKSB7XG4gICAgICBzZXRPcGVuKHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE9wZW4oaWQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY29yZGlvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgb3Blbjogb3BlbixcbiAgICB0b2dnbGU6IHRvZ2dsZVxuICB9KSk7XG59XG5cblVuY29udHJvbGxlZEFjY29yZGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkWjtcblVuY29udHJvbGxlZEFjY29yZGlvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWTtcblxudmFyIF9leGNsdWRlZCRUID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIiwgXCJjaGlsZHJlblwiLCBcInRhcmdldElkXCJdO1xudmFyIHByb3BUeXBlcyRZID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBiYXNlIGNsYXNzIG5hbWUgd2l0aCBhIG5ldyBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIFVuaXF1ZSBrZXkgdXNlZCB0byBjb250cm9sIGl0ZW0ncyBjb2xsYXBzZS9leHBhbmQgKi9cbiAgdGFyZ2V0SWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzJFggPSB7XG4gIHRhZzogJ2gyJ1xufTtcblxuZnVuY3Rpb24gQWNjb3JkaW9uSGVhZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRUKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEFjY29yZGlvbkNvbnRleHQpLFxuICAgICAgb3BlbiA9IF91c2VDb250ZXh0Lm9wZW4sXG4gICAgICB0b2dnbGUgPSBfdXNlQ29udGV4dC50b2dnbGU7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuICB2YXIgYnV0dG9uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnYWNjb3JkaW9uLWJ1dHRvbicsIHtcbiAgICBjb2xsYXBzZWQ6ICEoQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXModGFyZ2V0SWQpIDogb3BlbiA9PT0gdGFyZ2V0SWQpXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogYnV0dG9uQ2xhc3NlcyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZSh0YXJnZXRJZCk7XG4gICAgfVxuICB9LCBjaGlsZHJlbikpO1xufVxuXG5BY2NvcmRpb25IZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJFk7XG5BY2NvcmRpb25IZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFg7XG5cbnZhciBfZXhjbHVkZWQkUyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRYID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBUbyBhZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBiYXNlIGNsYXNzIG5hbWUgd2l0aCBhIG5ldyBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJFcgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRTKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24taXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59XG5cbkFjY29yZGlvbkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJFg7XG5BY2NvcmRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRXO1xuXG52YXIgX2V4Y2x1ZGVkJFIgPSBbXCJ0YWdcIiwgXCJob3Jpem9udGFsXCIsIFwiaXNPcGVuXCIsIFwiY2xhc3NOYW1lXCIsIFwibmF2YmFyXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpbm5lclJlZlwiXTtcblxudmFyIF90cmFuc2l0aW9uU3RhdHVzVG9DbDtcblxudmFyIHByb3BUeXBlcyRXID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24ucHJvcFR5cGVzKSwge30sIHtcbiAgLyoqIE1ha2UgY29udGVudCBhbmltYXRpb24gYXBwZWFyIGhvcml6b250YWxseSAqL1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBpZiBDb2xsYXBzZSBpcyBvcGVuIG9yIGNsb3NlZCAqL1xuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlKSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlXSksXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBuYXZiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJFYgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICBob3Jpem9udGFsOiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIHRhZzogJ2RpdicsXG4gIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5Db2xsYXBzZVxufSk7XG5cbnZhciB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2ggPSAoX3RyYW5zaXRpb25TdGF0dXNUb0NsID0ge30sIF90cmFuc2l0aW9uU3RhdHVzVG9DbFtUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSRURdID0gJ2NvbGxhcHNlIHNob3cnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRJTkddID0gJ2NvbGxhcHNpbmcnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVYSVRFRF0gPSAnY29sbGFwc2UnLCBfdHJhbnNpdGlvblN0YXR1c1RvQ2wpO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2xhc3Moc3RhdHVzKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uU3RhdHVzVG9DbGFzc0hhc2hbc3RhdHVzXSB8fCAnY29sbGFwc2UnO1xufVxuXG52YXIgQ29sbGFwc2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29sbGFwc2UsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbGxhcHNlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9O1xuICAgIFsnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzW25hbWVdID0gX3RoaXNbbmFtZV0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlcmluZyA9IGZ1bmN0aW9uIG9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogdGhpcy5nZXREaW1lbnNpb24obm9kZSlcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkVudGVyZWQgPSBmdW5jdGlvbiBvbkVudGVyZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ID0gZnVuY3Rpb24gb25FeGl0KG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogdGhpcy5nZXREaW1lbnNpb24obm9kZSlcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICAvLyBnZXR0aW5nIHRoaXMgdmFyaWFibGUgdHJpZ2dlcnMgYSByZWZsb3dcbiAgICB0aGlzLmdldERpbWVuc2lvbihub2RlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogMFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaG9yaXpvbnRhbCA/IG5vZGUuc2Nyb2xsV2lkdGggOiBub2RlLnNjcm9sbEhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBob3Jpem9udGFsID0gX3RoaXMkcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG5hdmJhciA9IF90aGlzJHByb3BzLm5hdmJhcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRSKTtcblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbjtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgICB2YXIgY2hpbGRQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSksIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgY29sbGFwc2VDbGFzcyA9IGdldFRyYW5zaXRpb25DbGFzcyhzdGF0dXMpO1xuICAgICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBob3Jpem9udGFsICYmICdjb2xsYXBzZS1ob3Jpem9udGFsJywgY29sbGFwc2VDbGFzcywgbmF2YmFyICYmICduYXZiYXItY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgICAgIHZhciBzdHlsZSA9IGRpbWVuc2lvbiA9PT0gbnVsbCA/IG51bGwgOiAoX3JlZiA9IHt9LCBfcmVmW2hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddID0gZGltZW5zaW9uLCBfcmVmKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNoaWxkUHJvcHMuc3R5bGUpLCBzdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcmVmOiBfdGhpczIucHJvcHMuaW5uZXJSZWZcbiAgICAgIH0pLCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRWO1xudmFyIENvbGxhcHNlJDEgPSBDb2xsYXBzZTtcblxudmFyIF9leGNsdWRlZCRRID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIiwgXCJjaGlsZHJlblwiLCBcImFjY29yZGlvbklkXCJdO1xudmFyIHByb3BUeXBlcyRWID0ge1xuICAvKiogVW5pcXVlIGtleSB1c2VkIHRvIGNvbnRyb2wgaXRlbSdzIGNvbGxhcHNlL2V4cGFuZCAqL1xuICBhY2NvcmRpb25JZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKiogVG8gYWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgYmFzZSBjbGFzcyBuYW1lIHdpdGggYSBuZXcgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBQYXNzIHJlZiB0byB0aGUgY29tcG9uZW50ICovXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJFUgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIEFjY29yZGlvbkJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYWNjb3JkaW9uSWQgPSBwcm9wcy5hY2NvcmRpb25JZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFEpO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQWNjb3JkaW9uQ29udGV4dCksXG4gICAgICBvcGVuID0gX3VzZUNvbnRleHQub3BlbjtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24tY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb2xsYXBzZSQxLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGlzT3BlbjogQXJyYXkuaXNBcnJheShvcGVuKSA/IG9wZW4uaW5jbHVkZXMoYWNjb3JkaW9uSWQpIDogb3BlbiA9PT0gYWNjb3JkaW9uSWRcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IFwiYWNjb3JkaW9uLWJvZHlcIlxuICB9LCBjaGlsZHJlbikpO1xufVxuXG5BY2NvcmRpb25Cb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRWO1xuQWNjb3JkaW9uQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVTtcblxudmFyIF9leGNsdWRlZCRQID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJpbm5lclJlZlwiLCBcInBpbGxcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFUgPSB7XG4gIC8qKiBQYXNzIGNoaWxkcmVuIHNvIHRoaXMgY29tcG9uZW50IGNhbiB3cmFwIHRoZSBjaGlsZCBlbGVtZW50cyAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIEJhZGdlICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGV4aXN0aW5nIGNsYXNzTmFtZSB3aXRoIGEgbmV3IGNsYXNzTmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG5cbiAgLyoqIEFkZCByb3VuZGVkIGNvcm5lcnMgdG8gdGhlIEJhZGdlICovXG4gIHBpbGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJFQgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgcGlsbDogZmFsc2UsXG4gIHRhZzogJ3NwYW4nXG59O1xuXG5mdW5jdGlvbiBCYWRnZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBwaWxsID0gcHJvcHMucGlsbCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFApO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2JhZGdlJywgJ2JnLScgKyBjb2xvciwgcGlsbCA/ICdyb3VuZGVkLXBpbGwnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnc3BhbicpIHtcbiAgICBUYWcgPSAnYSc7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59XG5cbkJhZGdlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRVO1xuQmFkZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFQ7XG5cbnZhciBfZXhjbHVkZWQkTyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiYm9keVwiLCBcImludmVyc2VcIiwgXCJvdXRsaW5lXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJFQgPSB7XG4gIC8qKiBUb2dnbGVzIGNhcmQgcGFkZGluZyB1c2luZyBgLmNhcmQtYm9keWAgKi9cbiAgYm9keTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGNvbXBvbmVudCAqL1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBJbnZlcnRzIHRoZSBjb2xvciAqL1xuICBpbnZlcnNlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIENoYW5nZXMgdGhlIGNhcmQgdG8gaGF2ZSBvbmx5IG91dGxpbmUgKi9cbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkUyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgaW52ZXJzZSA9IHByb3BzLmludmVyc2UsXG4gICAgICBvdXRsaW5lID0gcHJvcHMub3V0bGluZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRPKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkJywgaW52ZXJzZSA/ICd0ZXh0LXdoaXRlJyA6IGZhbHNlLCBib2R5ID8gJ2NhcmQtYm9keScgOiBmYWxzZSwgY29sb3IgPyAob3V0bGluZSA/ICdib3JkZXInIDogJ2JnJykgKyBcIi1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59XG5cbkNhcmQucHJvcFR5cGVzID0gcHJvcFR5cGVzJFQ7XG5DYXJkLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRTO1xuXG52YXIgX2V4Y2x1ZGVkJE4gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFMgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFIgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENhcmRHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1ncm91cCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJFM7XG5DYXJkR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFI7XG5cbnZhciBfZXhjbHVkZWQkTSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZERlY2socHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE0pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZGVjaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkRGVjay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUjtcbkNhcmREZWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRRO1xuXG52YXIgX2V4Y2x1ZGVkJEwgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFEgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJFAgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENhcmRDb2x1bW5zKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRMKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWNvbHVtbnMnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZENvbHVtbnMucHJvcFR5cGVzID0gcHJvcFR5cGVzJFE7XG5DYXJkQ29sdW1ucy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUDtcblxudmFyIF9leGNsdWRlZCRLID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJFAgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkTyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRLKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufVxuXG5DYXJkQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUDtcbkNhcmRCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRPO1xuXG52YXIgX2V4Y2x1ZGVkJEogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkTyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyROID0ge1xuICB0YWc6ICdhJ1xufTtcblxuZnVuY3Rpb24gQ2FyZExpbmsocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRKKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWxpbmsnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTztcbkNhcmRMaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyROO1xuXG52YXIgX2V4Y2x1ZGVkJEkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJE4gPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJE0gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENhcmRGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtZm9vdGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRGb290ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJE47XG5DYXJkRm9vdGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRNO1xuXG52YXIgX2V4Y2x1ZGVkJEggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJE0gPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJEwgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENhcmRIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtaGVhZGVyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJE07XG5DYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRMO1xuXG52YXIgX2V4Y2x1ZGVkJEcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEwgPSB7XG4gIC8qKiBBZGQgYGJvdHRvbWAgcHJvcCBpZiBpbWFnZSBpcyBhdCBib3R0b20gb2YgY2FyZCAqL1xuICBib3R0b206IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgY2xhc3NOYW1lIHdpdGggYSBuZXcgY2xhc3NOYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBBZGQgYHRvcGAgcHJvcCBpZiBpbWFnZSBpcyBhdCB0b3Agb2YgY2FyZCAqL1xuICB0b3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSyA9IHtcbiAgdGFnOiAnaW1nJ1xufTtcblxuZnVuY3Rpb24gQ2FyZEltZyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdG9wID0gcHJvcHMudG9wLFxuICAgICAgYm90dG9tID0gcHJvcHMuYm90dG9tLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkRyk7XG5cbiAgdmFyIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWcnO1xuXG4gIGlmICh0b3ApIHtcbiAgICBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nLXRvcCc7XG4gIH1cblxuICBpZiAoYm90dG9tKSB7XG4gICAgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZy1ib3R0b20nO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjYXJkSW1nQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZEltZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTDtcbkNhcmRJbWcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEs7XG5cbnZhciBfZXhjbHVkZWQkRiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkSyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkSiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZEltZ092ZXJsYXkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtaW1nLW92ZXJsYXknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZEltZ092ZXJsYXkucHJvcFR5cGVzID0gcHJvcFR5cGVzJEs7XG5DYXJkSW1nT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSjtcblxudmFyIF9leGNsdWRlZCRFID0gW1wiaW5cIiwgXCJjaGlsZHJlblwiLCBcImNzc01vZHVsZVwiLCBcInNsaWRlXCIsIFwidGFnXCIsIFwiY2xhc3NOYW1lXCJdO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENhcm91c2VsSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uRW50ZXIgPSBfdGhpcy5vbkVudGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBfdGhpcy5vbkVudGVyaW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdCA9IF90aGlzLm9uRXhpdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWxJdGVtLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlciA9IGZ1bmN0aW9uIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIHJldHVybiBvZmZzZXRIZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZGUuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWQuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNJbiA9IF90aGlzJHByb3BzW1wiaW5cIl0sXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wcy5zbGlkZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIGVudGVyOiBzbGlkZSxcbiAgICAgIGV4aXQ6IHNsaWRlLFxuICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMyLmNvbnRleHQuZGlyZWN0aW9uO1xuICAgICAgdmFyIGlzQWN0aXZlID0gc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJFRCB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HO1xuICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzTmFtZSA9IChzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklORyB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HKSAmJiBfdGhpczIuc3RhdGUuc3RhcnRBbmltYXRpb24gJiYgKGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyAnY2Fyb3VzZWwtaXRlbS1zdGFydCcgOiAnY2Fyb3VzZWwtaXRlbS1lbmQnKTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZSA9IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HICYmIChkaXJlY3Rpb24gPT09ICdlbmQnID8gJ2Nhcm91c2VsLWl0ZW0tbmV4dCcgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2Jyk7XG4gICAgICB2YXIgaXRlbUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaXRlbScsIGlzQWN0aXZlICYmICdhY3RpdmUnLCBkaXJlY3Rpb25DbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaXRlbUNsYXNzZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWxJdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgXCJpblwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogRW5hYmxlL2Rpc2FibGUgYW5pbWF0aW9uICovXG4gIHNsaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufSk7XG5DYXJvdXNlbEl0ZW0uZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkNhcm91c2VsLFxuICBzbGlkZTogdHJ1ZVxufSk7XG5DYXJvdXNlbEl0ZW0uY29udGV4dFR5cGVzID0ge1xuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIENhcm91c2VsSXRlbSQxID0gQ2Fyb3VzZWxJdGVtO1xuXG4vKipcbiAqIENhcm91c2VsQ29udGV4dFxuICoge1xuICogIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pLmlzUmVxdWlyZWQsXG4gKiB9XG4gKi9cblxudmFyIENhcm91c2VsQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIFNXSVBFX1RIUkVTSE9MRCA9IDQwO1xuXG52YXIgQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ2Fyb3VzZWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGFuZGxlS2V5UHJlc3MgPSBfdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5yZW5kZXJJdGVtcyA9IF90aGlzLnJlbmRlckl0ZW1zLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhvdmVyU3RhcnQgPSBfdGhpcy5ob3ZlclN0YXJ0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhvdmVyRW5kID0gX3RoaXMuaG92ZXJFbmQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b3VjaFN0YXJ0WCA9IDA7XG4gICAgX3RoaXMudG91Y2hTdGFydFkgPSAwO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSW5kZXg6IF90aGlzLnByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgZGlyZWN0aW9uOiAnZW5kJyxcbiAgICAgIGluZGljYXRvckNsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldCB1cCB0aGUgY3ljbGVcbiAgICBpZiAodGhpcy5wcm9wcy5yaWRlID09PSAnY2Fyb3VzZWwnKSB7XG4gICAgICB0aGlzLnNldEludGVydmFsKCk7XG4gICAgfSAvLyBUT0RPOiBtb3ZlIHRoaXMgdG8gdGhlIHNwZWNpZmljIGNhcm91c2VsIGxpa2UgYm9vdHN0cmFwLiBDdXJyZW50bHkgaXQgd2lsbCB0cmlnZ2VyIEFMTCBjYXJvdXNlbHMgb24gdGhlIHBhZ2UuXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVLZXlQcmVzcyk7XG4gIH07XG5cbiAgQ2Fyb3VzZWwuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5ld1N0YXRlID0gbnVsbDtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBwcmV2U3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbiA9IHByZXZTdGF0ZS5kaXJlY3Rpb24sXG4gICAgICAgIGluZGljYXRvckNsaWNrZWQgPSBwcmV2U3RhdGUuaW5kaWNhdG9yQ2xpY2tlZDtcblxuICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpcmVjdGlvbiB0byB0dXJuXG4gICAgICBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCArIDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ2VuZCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCA9PT0gYWN0aXZlSW5kZXggLSAxKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdzdGFydCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCA8IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGRpcmVjdGlvbiA9IGluZGljYXRvckNsaWNrZWQgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gaW5kaWNhdG9yQ2xpY2tlZCA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBuZXh0UHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICBpbmRpY2F0b3JDbGlja2VkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlSW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgpIHJldHVybjtcbiAgICB0aGlzLnNldEludGVydmFsKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlS2V5UHJlc3MgPSBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByb3BzLnByZXZpb3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZW5hYmxlVG91Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVUb3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICB2YXIgY3VycmVudFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblk7XG4gICAgdmFyIGRpZmZYID0gTWF0aC5hYnModGhpcy50b3VjaFN0YXJ0WCAtIGN1cnJlbnRYKTtcbiAgICB2YXIgZGlmZlkgPSBNYXRoLmFicyh0aGlzLnRvdWNoU3RhcnRZIC0gY3VycmVudFkpOyAvLyBEb24ndCBzd2lwZSBpZiBZLW1vdmVtZW50IGlzIGJpZ2dlciB0aGFuIFgtbW92ZW1lbnRcblxuICAgIGlmIChkaWZmWCA8IGRpZmZZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpZmZYIDwgU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRYIDwgdGhpcy50b3VjaFN0YXJ0WCkge1xuICAgICAgdGhpcy5wcm9wcy5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucHJldmlvdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRleHRWYWx1ZSA9IGZ1bmN0aW9uIGdldENvbnRleHRWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0aW9uOiB0aGlzLnN0YXRlLmRpcmVjdGlvblxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnNldEludGVydmFsID0gZnVuY3Rpb24gKF9zZXRJbnRlcnZhbCkge1xuICAgIGZ1bmN0aW9uIHNldEludGVydmFsKCkge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2V0SW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gbWFrZSBzdXJlIG5vdCB0byBoYXZlIG11bHRpcGxlIGludGVydmFscyBnb2luZy4uLlxuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuY3ljbGVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm5leHQoKTtcbiAgICAgIH0sIHBhcnNlSW50KHRoaXMucHJvcHMuaW50ZXJ2YWwsIDEwKSk7XG4gICAgfVxuICB9KTtcblxuICBfcHJvdG8uY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChfY2xlYXJJbnRlcnZhbCkge1xuICAgIGZ1bmN0aW9uIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgICByZXR1cm4gX2NsZWFySW50ZXJ2YWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9jbGVhckludGVydmFsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBjbGVhckludGVydmFsO1xuICB9KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY3ljbGVJbnRlcnZhbCk7XG4gIH0pO1xuXG4gIF9wcm90by5ob3ZlclN0YXJ0ID0gZnVuY3Rpb24gaG92ZXJTdGFydCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW91c2VFbnRlcikge1xuICAgICAgdmFyIF90aGlzJHByb3BzO1xuXG4gICAgICAoX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzKS5tb3VzZUVudGVyLmFwcGx5KF90aGlzJHByb3BzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaG92ZXJFbmQgPSBmdW5jdGlvbiBob3ZlckVuZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5zZXRJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm1vdXNlTGVhdmUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczI7XG5cbiAgICAgIChfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzKS5tb3VzZUxlYXZlLmFwcGx5KF90aGlzJHByb3BzMiwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckl0ZW1zID0gZnVuY3Rpb24gcmVuZGVySXRlbXMoY2Fyb3VzZWxJdGVtcywgY2xhc3NOYW1lKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgc2xpZGUgPSB0aGlzLnByb3BzLnNsaWRlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCBjYXJvdXNlbEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHZhciBpc0luID0gaW5kZXggPT09IF90aGlzMy5zdGF0ZS5hY3RpdmVJbmRleDtcbiAgICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGl0ZW0sIHtcbiAgICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgICBzbGlkZTogc2xpZGVcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzMy5jc3NNb2R1bGUsXG4gICAgICAgIHNsaWRlID0gX3RoaXMkcHJvcHMzLnNsaWRlLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICBkYXJrID0gX3RoaXMkcHJvcHMzLmRhcmssXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wczMuZmFkZTtcbiAgICB2YXIgb3V0ZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsJywgZmFkZSAmJiAnY2Fyb3VzZWwtZmFkZScsIHNsaWRlICYmICdzbGlkZScsIGRhcmsgJiYgJ2Nhcm91c2VsLWRhcmsnKSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgaW5uZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdjYXJvdXNlbC1pbm5lcicpLCBjc3NNb2R1bGUpOyAvLyBmaWx0ZXIgb3V0IGJvb2xlYW5zLCBudWxsLCBvciB1bmRlZmluZWRcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbic7XG4gICAgfSk7XG4gICAgdmFyIHNsaWRlc09ubHkgPSBjaGlsZHJlbi5ldmVyeShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlID09PSBDYXJvdXNlbEl0ZW0kMTtcbiAgICB9KTsgLy8gUmVuZGVyaW5nIG9ubHkgc2xpZGVzXG5cbiAgICBpZiAoc2xpZGVzT25seSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKGNoaWxkcmVuLCBpbm5lckNsYXNzZXMpKSk7XG4gICAgfSAvLyBSZW5kZXJpbmcgc2xpZGVzIGFuZCBjb250cm9sc1xuXG5cbiAgICBpZiAoY2hpbGRyZW5bMF0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIF9jYXJvdXNlbEl0ZW1zID0gY2hpbGRyZW5bMF07XG4gICAgICB2YXIgX2NvbnRyb2xMZWZ0ID0gY2hpbGRyZW5bMV07XG4gICAgICB2YXIgX2NvbnRyb2xSaWdodCA9IGNoaWxkcmVuWzJdO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKF9jYXJvdXNlbEl0ZW1zLCBpbm5lckNsYXNzZXMpLCBfY29udHJvbExlZnQsIF9jb250cm9sUmlnaHQpKTtcbiAgICB9IC8vIFJlbmRlcmluZyBpbmRpY2F0b3JzLCBzbGlkZXMgYW5kIGNvbnRyb2xzXG5cblxuICAgIHZhciBpbmRpY2F0b3JzID0gY2hpbGRyZW5bMF07XG5cbiAgICB2YXIgd3JhcHBlZE9uQ2xpY2sgPSBmdW5jdGlvbiB3cmFwcGVkT25DbGljayhlKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGljYXRvcnMucHJvcHMub25DbGlja0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3RoaXM0LnNldFN0YXRlKHtcbiAgICAgICAgICBpbmRpY2F0b3JDbGlja2VkOiB0cnVlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kaWNhdG9ycy5wcm9wcy5vbkNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB3cmFwcGVkSW5kaWNhdG9ycyA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoaW5kaWNhdG9ycywge1xuICAgICAgb25DbGlja0hhbmRsZXI6IHdyYXBwZWRPbkNsaWNrXG4gICAgfSk7XG4gICAgdmFyIGNhcm91c2VsSXRlbXMgPSBjaGlsZHJlblsxXTtcbiAgICB2YXIgY29udHJvbExlZnQgPSBjaGlsZHJlblsyXTtcbiAgICB2YXIgY29udHJvbFJpZ2h0ID0gY2hpbGRyZW5bM107XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3NlcyxcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5ob3ZlclN0YXJ0LFxuICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kLFxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCB3cmFwcGVkSW5kaWNhdG9ycywgdGhpcy5yZW5kZXJJdGVtcyhjYXJvdXNlbEl0ZW1zLCBpbm5lckNsYXNzZXMpLCBjb250cm9sTGVmdCwgY29udHJvbFJpZ2h0KSk7XG4gIH07XG5cbiAgcmV0dXJuIENhcm91c2VsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xuICAvKiogdGhlIGN1cnJlbnQgYWN0aXZlIHNsaWRlIG9mIHRoZSBjYXJvdXNlbCAqL1xuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG5cbiAgLyoqIGEgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGFkdmFuY2UgdGhlIGNhcm91c2VsIHRvIHRoZSBuZXh0IHNsaWRlICh2aWEgYWN0aXZlSW5kZXgpICovXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKiBhIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBhZHZhbmNlIHRoZSBjYXJvdXNlbCB0byB0aGUgcHJldmlvdXMgc2xpZGUgKHZpYSBhY3RpdmVJbmRleCkgKi9cbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKiBjb250cm9scyBpZiB0aGUgbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBzaG91bGQgY29udHJvbCB0aGUgY2Fyb3VzZWwgKi9cbiAga2V5Ym9hcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogSWYgc2V0IHRvIFwiaG92ZXJcIiwgcGF1c2VzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvblxuICAgKiBtb3VzZWxlYXZlLiBJZiBzZXQgdG8gZmFsc2UsIGhvdmVyaW5nIG92ZXIgdGhlIGNhcm91c2VsIHdvbid0IHBhdXNlIGl0LlxuICAgKi9cbiAgcGF1c2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydob3ZlcicsIGZhbHNlXSksXG5cbiAgLyoqIEF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgYWZ0ZXIgdGhlIHVzZXIgbWFudWFsbHkgY3ljbGVzIHRoZSBmaXJzdCBpdGVtLiBJZiBcImNhcm91c2VsXCIsIGF1dG9wbGF5cyB0aGUgY2Fyb3VzZWwgb24gbG9hZC4gKi9cbiAgcmlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2Nhcm91c2VsJ10pLFxuXG4gIC8qKiB0aGUgaW50ZXJ2YWwgYXQgd2hpY2ggdGhlIGNhcm91c2VsIGF1dG9tYXRpY2FsbHkgY3ljbGVzICovXG4gIGludGVydmFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG5cbiAgLyoqIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBlbnRlcnMgdGhlIENhcm91c2VsICovXG4gIG1vdXNlRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcblxuICAvKiogY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGV4aXRzIHRoZSBDYXJvdXNlbCAqL1xuICBtb3VzZUxlYXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIGNvbnRyb2xzIHdoZXRoZXIgdGhlIHNsaWRlIGFuaW1hdGlvbiBvbiB0aGUgQ2Fyb3VzZWwgd29ya3Mgb3Igbm90ICovXG4gIHNsaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIG1ha2UgdGhlIGNvbnRyb2xzLCBpbmRpY2F0b3JzIGFuZCBjYXB0aW9ucyBkYXJrIG9uIHRoZSBDYXJvdXNlbCAqL1xuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEVuYWJsZSB0b3VjaCBzdXBwb3J0ICovXG4gIGVuYWJsZVRvdWNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiB0cnVlLFxuICBlbmFibGVUb3VjaDogdHJ1ZSxcbiAgZmFkZTogZmFsc2Vcbn07XG5DYXJvdXNlbC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBDYXJvdXNlbCQxID0gQ2Fyb3VzZWw7XG5cbmZ1bmN0aW9uIENhcm91c2VsQ29udHJvbChwcm9wcykge1xuICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgb25DbGlja0hhbmRsZXIgPSBwcm9wcy5vbkNsaWNrSGFuZGxlcixcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGRpcmVjdGlvblRleHQgPSBwcm9wcy5kaXJlY3Rpb25UZXh0LFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICB2YXIgYW5jaG9yQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIFwiY2Fyb3VzZWwtY29udHJvbC1cIiArIGRpcmVjdGlvbiksIGNzc01vZHVsZSk7XG4gIHZhciBpY29uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShcImNhcm91c2VsLWNvbnRyb2wtXCIgKyBkaXJlY3Rpb24gKyBcIi1pY29uXCIpLCBjc3NNb2R1bGUpO1xuICB2YXIgc2NyZWVuUmVhZGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndmlzdWFsbHktaGlkZGVuJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIFdlIG5lZWQgdG8gZGlzYWJsZSB0aGlzIGxpbnRpbmcgcnVsZSB0byB1c2UgYW4gYDxhPmAgaW5zdGVhZCBvZlxuICAgIC8vIGA8YnV0dG9uPmAgYmVjYXVzZSB0aGF0J3Mgd2hhdCB0aGUgQm9vdHN0cmFwIGV4YW1wbGVzIHJlcXVpcmU6XG4gICAgLy8gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC41L2NvbXBvbmVudHMvY2Fyb3VzZWwvI3dpdGgtY29udHJvbHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkXG4gICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYW5jaG9yQ2xhc3NlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiBcIjBcIixcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2tIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGljb25DbGFzc2VzLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogc2NyZWVuUmVhZGVyQ2xhc3Nlc1xuICAgIH0sIGRpcmVjdGlvblRleHQgfHwgZGlyZWN0aW9uKSlcbiAgKTtcbn1cblxuQ2Fyb3VzZWxDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgLyoqIFNldCB0aGUgZGlyZWN0aW9uIG9mIGNvbnRyb2wgYnV0dG9uICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3ByZXYnLCAnbmV4dCddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gY2xpY2sgKi9cbiAgb25DbGlja0hhbmRsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNjcmVlbiByZWFkZXIgdGV4dCAqL1xuICBkaXJlY3Rpb25UZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xuXG5mdW5jdGlvbiBDYXJvdXNlbEluZGljYXRvcnMocHJvcHMpIHtcbiAgdmFyIGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBhY3RpdmVJbmRleCA9IHByb3BzLmFjdGl2ZUluZGV4LFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgb25DbGlja0hhbmRsZXIgPSBwcm9wcy5vbkNsaWNrSGFuZGxlcixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgdmFyIGxpc3RDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWluZGljYXRvcnMnKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGluZGljYXRvcnMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgIHZhciBpbmRpY2F0b3JDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlSW5kZXggPT09IGlkeFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IGl0ZW0uY2FwdGlvbixcbiAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogdHJ1ZSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBrZXk6IFwiXCIgKyAoaXRlbS5rZXkgfHwgT2JqZWN0LnZhbHVlcyhpdGVtKS5qb2luKCcnKSksXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrSGFuZGxlcihpZHgpO1xuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogaW5kaWNhdG9yQ2xhc3Nlc1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBsaXN0Q2xhc3Nlc1xuICB9LCBpbmRpY2F0b3JzKTtcbn1cblxuQ2Fyb3VzZWxJbmRpY2F0b3JzLnByb3BUeXBlcyA9IHtcbiAgLyoqIFRoZSBjdXJyZW50IGFjdGl2ZSBpbmRleCAqL1xuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIEFycmF5IG9mIGl0ZW1zIHRvIHNob3cgKi9cbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsaWNrICovXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gQ2Fyb3VzZWxDYXB0aW9uKHByb3BzKSB7XG4gIHZhciBjYXB0aW9uSGVhZGVyID0gcHJvcHMuY2FwdGlvbkhlYWRlcixcbiAgICAgIGNhcHRpb25UZXh0ID0gcHJvcHMuY2FwdGlvblRleHQsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWNhcHRpb24nLCAnZC1ub25lJywgJ2QtbWQtYmxvY2snKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIGNhcHRpb25IZWFkZXIpLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNhcHRpb25UZXh0KSk7XG59XG5cbkNhcm91c2VsQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBIZWFkaW5nIGZvciB0aGUgY2FwdGlvbiAqL1xuICBjYXB0aW9uSGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIFRleHQgZm9yIGNhcHRpb24gKi9cbiAgY2FwdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcblxudmFyIF9leGNsdWRlZCREID0gW1wiZGVmYXVsdEFjdGl2ZUluZGV4XCIsIFwiYXV0b1BsYXlcIiwgXCJpbmRpY2F0b3JzXCIsIFwiY29udHJvbHNcIiwgXCJpdGVtc1wiLCBcImdvVG9JbmRleFwiXTtcbnZhciBwcm9wVHlwZXMkSiA9IHtcbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcbiAgaW5kaWNhdG9yczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb250cm9sczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhdXRvUGxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkZWZhdWx0QWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZ29Ub0luZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRDYXJvdXNlbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUluZGV4OiBwcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggfHwgMFxuICAgIH07XG4gICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucHJldmlvdXMgPSBfdGhpcy5wcmV2aW91cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nb1RvSW5kZXggPSBfdGhpcy5nb1RvSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0aW5nID0gX3RoaXMub25FeGl0aW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGVkID0gX3RoaXMub25FeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENhcm91c2VsLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ZWQgPSBmdW5jdGlvbiBvbkV4aXRlZCgpIHtcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZTdGF0ZS5hY3RpdmVJbmRleCA9PT0gX3RoaXMyLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgPyAwIDogcHJldlN0YXRlLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SW5kZXhcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZXZpb3VzID0gZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2U3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyBfdGhpczMucHJvcHMuaXRlbXMubGVuZ3RoIC0gMSA6IHByZXZTdGF0ZS5hY3RpdmVJbmRleCAtIDE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVJbmRleDogbmV4dEluZGV4XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nb1RvSW5kZXggPSBmdW5jdGlvbiBnb1RvSW5kZXgobmV3SW5kZXgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXdJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvUGxheSA9IF90aGlzJHByb3BzLmF1dG9QbGF5LFxuICAgICAgICBpbmRpY2F0b3JzID0gX3RoaXMkcHJvcHMuaW5kaWNhdG9ycyxcbiAgICAgICAgY29udHJvbHMgPSBfdGhpcyRwcm9wcy5jb250cm9scyxcbiAgICAgICAgaXRlbXMgPSBfdGhpcyRwcm9wcy5pdGVtcyxcbiAgICAgICAgZ29Ub0luZGV4ID0gX3RoaXMkcHJvcHMuZ29Ub0luZGV4LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRCk7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbGlkZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBpdGVtLmtleSB8fCBpdGVtLnNyYztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxJdGVtJDEsIHtcbiAgICAgICAgb25FeGl0aW5nOiBfdGhpczQub25FeGl0aW5nLFxuICAgICAgICBvbkV4aXRlZDogX3RoaXM0Lm9uRXhpdGVkLFxuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImQtYmxvY2sgdy0xMDBcIixcbiAgICAgICAgc3JjOiBpdGVtLnNyYyxcbiAgICAgICAgYWx0OiBpdGVtLmFsdFRleHRcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDYXB0aW9uLCB7XG4gICAgICAgIGNhcHRpb25UZXh0OiBpdGVtLmNhcHRpb24sXG4gICAgICAgIGNhcHRpb25IZWFkZXI6IGl0ZW0uaGVhZGVyIHx8IGl0ZW0uY2FwdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWwkMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgbmV4dDogdGhpcy5uZXh0LFxuICAgICAgcHJldmlvdXM6IHRoaXMucHJldmlvdXMsXG4gICAgICByaWRlOiBhdXRvUGxheSA/ICdjYXJvdXNlbCcgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcyksIGluZGljYXRvcnMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSW5kaWNhdG9ycywge1xuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXg6IHByb3BzLmFjdGl2ZUluZGV4IHx8IGFjdGl2ZUluZGV4LFxuICAgICAgb25DbGlja0hhbmRsZXI6IGdvVG9JbmRleCB8fCB0aGlzLmdvVG9JbmRleFxuICAgIH0pLCBzbGlkZXMsIGNvbnRyb2xzICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRyb2wsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJwcmV2XCIsXG4gICAgICBkaXJlY3Rpb25UZXh0OiBcIlByZXZpb3VzXCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMucHJldmlvdXMgfHwgdGhpcy5wcmV2aW91c1xuICAgIH0pLCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250cm9sLCB7XG4gICAgICBkaXJlY3Rpb246IFwibmV4dFwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJOZXh0XCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMubmV4dCB8fCB0aGlzLm5leHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENhcm91c2VsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSjtcblVuY29udHJvbGxlZENhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG4gIGluZGljYXRvcnM6IHRydWUsXG4gIGF1dG9QbGF5OiB0cnVlXG59O1xudmFyIFVuY29udHJvbGxlZENhcm91c2VsJDEgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbDtcblxudmFyIF9leGNsdWRlZCRDID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRJID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRJID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkU3VidGl0bGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtc3VidGl0bGUnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZFN1YnRpdGxlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRJO1xuQ2FyZFN1YnRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRJO1xuXG52YXIgX2V4Y2x1ZGVkJEIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEggPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJEggPSB7XG4gIHRhZzogJ3AnXG59O1xuXG5mdW5jdGlvbiBDYXJkVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkQik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRIO1xuQ2FyZFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEg7XG5cbnZhciBfZXhjbHVkZWQkQSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkRyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkRyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZFRpdGxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRBKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXRpdGxlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRUaXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRztcbkNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRztcblxudmFyIF9leGNsdWRlZCR6ID0gW1wiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpc09wZW5cIiwgXCJmbGlwXCIsIFwidGFyZ2V0XCIsIFwib2Zmc2V0XCIsIFwiZmFsbGJhY2tQbGFjZW1lbnRzXCIsIFwicGxhY2VtZW50UHJlZml4XCIsIFwiYXJyb3dDbGFzc05hbWVcIiwgXCJoaWRlQXJyb3dcIiwgXCJwb3BwZXJDbGFzc05hbWVcIiwgXCJ0YWdcIiwgXCJjb250YWluZXJcIiwgXCJtb2RpZmllcnNcIiwgXCJzdHJhdGVneVwiLCBcImJvdW5kYXJpZXNFbGVtZW50XCIsIFwib25DbG9zZWRcIiwgXCJmYWRlXCIsIFwidHJhbnNpdGlvblwiLCBcInBsYWNlbWVudFwiXTtcblxuZnVuY3Rpb24gbm9vcCQyKCkge31cblxudmFyIHByb3BUeXBlcyRGID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50UHJlZml4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXJyb3dDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9mZnNldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyKSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgb25DbG9zZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkRiA9IHtcbiAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICBwbGFjZW1lbnQ6ICdhdXRvJyxcbiAgaGlkZUFycm93OiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGZsaXA6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICBtb2RpZmllcnM6IFtdLFxuICBvbkNsb3NlZDogbm9vcCQyLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpXG59O1xuXG52YXIgUG9wcGVyQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3BwZXJDb250ZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BwZXJDb250ZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc2V0VGFyZ2V0Tm9kZSA9IF90aGlzLnNldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0VGFyZ2V0Tm9kZSA9IF90aGlzLmdldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUG9wcGVyQ29udGVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzT3BlbiAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUG9wcGVyQ29udGVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXMgJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKCkge1xuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFyZ2V0Tm9kZSA9IGZ1bmN0aW9uIGdldFRhcmdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyTm9kZSA9IGZ1bmN0aW9uIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5zZXRUYXJnZXROb2RlID0gZnVuY3Rpb24gc2V0VGFyZ2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy50YXJnZXROb2RlID0gdHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gZ2V0VGFyZ2V0KG5vZGUpIDogbm9kZTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwbGFjZW1lbnRQcmVmaXggPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnRQcmVmaXgsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIF9wb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBib3VuZGFyaWVzRWxlbWVudCA9IF90aGlzJHByb3BzLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMuZmFkZSxcbiAgICAgICAgdHJhbnNpdGlvbiA9IF90aGlzJHByb3BzLnRyYW5zaXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJHopO1xuXG4gICAgdmFyIGFycm93Q2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdhcnJvdycsIF9hcnJvd0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgdmFyIHBvcHBlckNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfcG9wcGVyQ2xhc3NOYW1lLCBwbGFjZW1lbnRQcmVmaXggPyBwbGFjZW1lbnRQcmVmaXggKyBcIi1hdXRvXCIgOiAnJyksIHRoaXMucHJvcHMuY3NzTW9kdWxlKTtcbiAgICB2YXIgbW9kaWZpZXJOYW1lcyA9IG1vZGlmaWVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfSk7XG4gICAgdmFyIGJhc2VNb2RpZmllcnMgPSBbe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgZW5hYmxlZDogZmxpcCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBmYWxsYmFja1BsYWNlbWVudHNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJpZXNFbGVtZW50XG4gICAgICB9XG4gICAgfV0uZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gIW1vZGlmaWVyTmFtZXMuaW5jbHVkZXMobS5uYW1lKTtcbiAgICB9KTtcbiAgICB2YXIgZXh0ZW5kZWRNb2RpZmllcnMgPSBbXS5jb25jYXQoYmFzZU1vZGlmaWVycywgbW9kaWZpZXJzKTtcblxuICAgIHZhciBwb3BwZXJUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICB9KTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIHBvcHBlclRyYW5zaXRpb24sIGF0dHJzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgdGFnOiB0YWdcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudDogdGhpcy50YXJnZXROb2RlLFxuICAgICAgbW9kaWZpZXJzOiBleHRlbmRlZE1vZGlmaWVycyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgcG9wcGVyUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICAgICAgaXNSZWZlcmVuY2VIaWRkZW4gPSBfcmVmLmlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgICAgIGFycm93UHJvcHMgPSBfcmVmLmFycm93UHJvcHMsXG4gICAgICAgICAgdXBkYXRlID0gX3JlZi51cGRhdGU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IHBvcHBlclBsYWNlbWVudCxcbiAgICAgICAgXCJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuXCI6IGlzUmVmZXJlbmNlSGlkZGVuID8gJ3RydWUnIDogdW5kZWZpbmVkXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICB9KSA6IGNoaWxkcmVuLCAhaGlkZUFycm93ICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IGFycm93UHJvcHMucmVmLFxuICAgICAgICBjbGFzc05hbWU6IGFycm93Q2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogYXJyb3dQcm9wcy5zdHlsZVxuICAgICAgfSkpO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0VGFyZ2V0Tm9kZSh0aGlzLnByb3BzLnRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRhaW5lciA9PT0gJ2lubGluZScgPyB0aGlzLnJlbmRlckNoaWxkcmVuKCkgOiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuZ2V0UmVmXG4gICAgICB9LCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpLCB0aGlzLmdldENvbnRhaW5lck5vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHBlckNvbnRlbnQ7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Qb3BwZXJDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcyRGO1xuUG9wcGVyQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRjtcbnZhciBQb3BwZXJDb250ZW50JDEgPSBQb3BwZXJDb250ZW50O1xuXG5mdW5jdGlvbiBQb3BwZXJUYXJnZXRIZWxwZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgY29udGV4dC5wb3BwZXJNYW5hZ2VyLnNldFRhcmdldE5vZGUoZ2V0VGFyZ2V0KHByb3BzLnRhcmdldCkpO1xuICByZXR1cm4gbnVsbDtcbn1cblxuUG9wcGVyVGFyZ2V0SGVscGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcG9wcGVyTWFuYWdlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcHBlclRhcmdldEhlbHBlci5wcm9wVHlwZXMgPSB7XG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZFxufTtcblxudmFyIHByb3BUeXBlcyRFID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihQb3BwZXJQbGFjZW1lbnRzKSxcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaGlkZUFycm93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaW5uZXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhcnJvd0NsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBvcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBhdXRvaGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwbGFjZW1lbnRQcmVmaXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkZWxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIHNob3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGhpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXG4gIH0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb2Zmc2V0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSksXG4gIHRyaWdnZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBERUZBVUxUX0RFTEFZUyA9IHtcbiAgc2hvdzogMCxcbiAgaGlkZTogNTBcbn07XG52YXIgZGVmYXVsdFByb3BzJEUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGhpZGVBcnJvdzogZmFsc2UsXG4gIGF1dG9oaWRlOiBmYWxzZSxcbiAgZGVsYXk6IERFRkFVTFRfREVMQVlTLFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHt9LFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBmYWRlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJ0cmVlUm9vdCkge1xuICByZXR1cm4gc3VidHJlZVJvb3QgJiYgKGVsZW1lbnQgPT09IHN1YnRyZWVSb290IHx8IHN1YnRyZWVSb290LmNvbnRhaW5zKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gaXNJbkRPTVN1YnRyZWVzKGVsZW1lbnQsIHN1YnRyZWVSb290cykge1xuICBpZiAoc3VidHJlZVJvb3RzID09PSB2b2lkIDApIHtcbiAgICBzdWJ0cmVlUm9vdHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlUm9vdHMgJiYgc3VidHJlZVJvb3RzLmxlbmd0aCAmJiBzdWJ0cmVlUm9vdHMuZmlsdGVyKGZ1bmN0aW9uIChzdWJUcmVlUm9vdCkge1xuICAgIHJldHVybiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJUcmVlUm9vdCk7XG4gIH0pWzBdO1xufVxuXG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRvb2x0aXBQb3BvdmVyV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcFBvcG92ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX3RhcmdldHMgPSBbXTtcbiAgICBfdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuYWRkVGFyZ2V0RXZlbnRzID0gX3RoaXMuYWRkVGFyZ2V0RXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cyA9IF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2hvd1dpdGhEZWxheSA9IF90aGlzLnNob3dXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGlkZVdpdGhEZWxheSA9IF90aGlzLmhpZGVXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCA9IF90aGlzLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQgPSBfdGhpcy5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zaG93ID0gX3RoaXMuc2hvdy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oaWRlID0gX3RoaXMuaGlkZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkVzY0tleURvd24gPSBfdGhpcy5vbkVzY0tleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICB9O1xuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVG9vbHRpcFBvcG92ZXJXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgfTtcblxuICBUb29sdGlwUG9wb3ZlcldyYXBwZXIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5pc09wZW4gJiYgIXN0YXRlLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdsZWdhY3knKSA+IC0xICYmICh0aGlzLnByb3BzLmlzT3BlbiB8fCBpc0luRE9NU3VidHJlZXMoZS50YXJnZXQsIHRoaXMuX3RhcmdldHMpKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIWlzSW5ET01TdWJ0cmVlKGUudGFyZ2V0LCB0aGlzLl9wb3BvdmVyKSkge1xuICAgICAgICB0aGlzLmhpZGVXaXRoRGVsYXkoZSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNob3dXaXRoRGVsYXkoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdjbGljaycpID4gLTEgJiYgaXNJbkRPTVN1YnRyZWVzKGUudGFyZ2V0LCB0aGlzLl90YXJnZXRzKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2hvd1dpdGhEZWxheShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVdpdGhEZWxheShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQgPSBmdW5jdGlvbiBvbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50ID0gZnVuY3Rpb24gb25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Fc2NLZXlEb3duID0gZnVuY3Rpb24gb25Fc2NLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmhpZGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgdmFyIGlubmVyUmVmID0gdGhpcy5wcm9wcy5pbm5lclJlZjtcblxuICAgIGlmIChpbm5lclJlZikge1xuICAgICAgaWYgKHR5cGVvZiBpbm5lclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbm5lclJlZihyZWYpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5uZXJSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlciA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVsYXkgPSBmdW5jdGlvbiBnZXREZWxheShrZXkpIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBpc05hTihkZWxheVtrZXldKSA/IERFRkFVTFRfREVMQVlTW2tleV0gOiBkZWxheVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFRhcmdldCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIHRoaXMuX3RhcmdldHNbaW5kZXhdO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRUYXJnZXQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gZSA/IGUuY3VycmVudFRhcmdldCB8fCB0aGlzLmdldEN1cnJlbnRUYXJnZXQoZS50YXJnZXQpIDogbnVsbDtcblxuICAgICAgaWYgKGUgJiYgZS5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IHBhdGggJiYgcGF0aFswXSB8fCB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3dXaXRoRGVsYXkgPSBmdW5jdGlvbiBzaG93V2l0aERlbGF5KGUpIHtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNob3cuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnc2hvdycpKTtcbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGlkZVdpdGhEZWxheSA9IGZ1bmN0aW9uIGhpZGVXaXRoRGVsYXkoZSkge1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dCkge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclNob3dUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTaG93VGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXQpO1xuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckhpZGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJIaWRlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudE9uVGFyZ2V0cyA9IGZ1bmN0aW9uIGFkZEV2ZW50T25UYXJnZXRzKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRPblRhcmdldHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudE9uVGFyZ2V0cyh0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSkge1xuICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhcmdldEV2ZW50cyA9IGZ1bmN0aW9uIGFkZFRhcmdldEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ21hbnVhbCcpID09PSAtMSkge1xuICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xIHx8IHRyaWdnZXJzLmluZGV4T2YoJ2xlZ2FjeScpID4gLTEpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0cyAmJiB0aGlzLl90YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdob3ZlcicpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1dpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdtb3VzZW91dCcsIHRoaXMuaGlkZVdpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2ZvY3VzJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnZm9jdXNpbicsIHRoaXMuc2hvdywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdmb2N1c291dCcsIHRoaXMuaGlkZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlVGFyZ2V0RXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdtb3VzZW92ZXInLCB0aGlzLnNob3dXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnbW91c2VvdXQnLCB0aGlzLmhpZGVXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2ZvY3VzaW4nLCB0aGlzLnNob3csIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnZm9jdXNvdXQnLCB0aGlzLmhpZGUsIHRydWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVGFyZ2V0ID0gZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KCkge1xuICAgIHZhciBuZXdUYXJnZXQgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy50YXJnZXQsIHRydWUpO1xuXG4gICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy5fdGFyZ2V0cykge1xuICAgICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBuZXdUYXJnZXQgPyBBcnJheS5mcm9tKG5ld1RhcmdldCkgOiBbXTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50IHx8IHRoaXMuX3RhcmdldHNbMF07XG4gICAgICB0aGlzLmFkZFRhcmdldEV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgfHwgdGhpcy5fdGFyZ2V0c1swXTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgaW5uZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5pbm5lckNsYXNzTmFtZSxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gX3RoaXMkcHJvcHMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50UHJlZml4ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50UHJlZml4LFxuICAgICAgICBhcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBwb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wcy5mYWRlLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJEUpKTtcbiAgICB2YXIgcG9wcGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhwb3BwZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoaW5uZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BwZXJDb250ZW50JDEsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBpc09wZW46IGlzT3BlbixcbiAgICAgIGhpZGVBcnJvdzogaGlkZUFycm93LFxuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnRQcmVmaXg6IHBsYWNlbWVudFByZWZpeCxcbiAgICAgIGFycm93Q2xhc3NOYW1lOiBhcnJvd0NsYXNzTmFtZSxcbiAgICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgZmFkZTogZmFkZSxcbiAgICAgIGZsaXA6IGZsaXBcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICByZWY6IF90aGlzMi5nZXRSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgICAgIG9uTW91c2VPdmVyOiBfdGhpczIub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpczIub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQsXG4gICAgICAgIG9uS2V5RG93bjogX3RoaXMyLm9uRXNjS2V5RG93blxuICAgICAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICAgIH0pIDogY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEU7XG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEgPSBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkRCA9IHtcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy1wb3BvdmVyJyxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgb2Zmc2V0OiBbMCwgOF1cbn07XG5cbmZ1bmN0aW9uIFBvcG92ZXIocHJvcHMpIHtcbiAgdmFyIHBvcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3ZlcicsICdzaG93JywgcHJvcHMucG9wcGVyQ2xhc3NOYW1lKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3Zlci1pbm5lcicsIHByb3BzLmlubmVyQ2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYXJyb3dDbGFzc05hbWU6IFwicG9wb3Zlci1hcnJvd1wiLFxuICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICBpbm5lckNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cblBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyREO1xuXG52YXIgb21pdEtleXMkNCA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFBvcG92ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkUG9wb3ZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkUG9wb3Zlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRQb3BvdmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDQpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFBvcG92ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRQb3BvdmVyLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgUG9wb3Zlci5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJHkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEMgPSB7XG4gIHRhZzogJ2gzJ1xufTtcblxuZnVuY3Rpb24gUG9wb3ZlckhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkeSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncG9wb3Zlci1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuUG9wb3ZlckhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRDtcblBvcG92ZXJIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEM7XG5cbnZhciBfZXhjbHVkZWQkeCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkQyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkQiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gUG9wb3ZlckJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BvcG92ZXItYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQztcblBvcG92ZXJCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRCO1xuXG52YXIgX2V4Y2x1ZGVkJHcgPSBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImJhckNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInZhbHVlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiYW5pbWF0ZWRcIiwgXCJzdHJpcGVkXCIsIFwiY29sb3JcIiwgXCJiYXJcIiwgXCJtdWx0aVwiLCBcInRhZ1wiLCBcInN0eWxlXCIsIFwiYmFyU3R5bGVcIiwgXCJiYXJBcmlhVmFsdWVUZXh0XCIsIFwiYmFyQXJpYUxhYmVsbGVkQnlcIl07XG52YXIgcHJvcFR5cGVzJEIgPSB7XG4gIC8qKiBFbmFibGUgYW5pbWF0aW9uIHRvIGJhciAqL1xuICBhbmltYXRlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFyQXJpYUxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXJBcmlhVmFsdWVUZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyU3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIGN1c3RvbSBjb2xvciB0byB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBNYXhpbXVtIHZhbHVlIG9mIHByb2dyZXNzICovXG4gIG1heDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuXG4gIC8qKiBNaW5pbXVtIHZhbHVlIG9mIHByb2dyZXNzLCBkZWZhdWx0cyB0byB6ZXJvICovXG4gIG1pbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtdWx0aTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgc3RyaXBlcyB0byBwcm9ncmVzcyBiYXIgKi9cbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzICovXG4gIHZhbHVlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJEEgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHZhbHVlOiAwLFxuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBzdHlsZToge30sXG4gIGJhclN0eWxlOiB7fVxufTtcblxuZnVuY3Rpb24gUHJvZ3Jlc3MocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBiYXJDbGFzc05hbWUgPSBwcm9wcy5iYXJDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJhciA9IHByb3BzLmJhcixcbiAgICAgIG11bHRpID0gcHJvcHMubXVsdGksXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYmFyU3R5bGUgPSBwcm9wcy5iYXJTdHlsZSxcbiAgICAgIGJhckFyaWFWYWx1ZVRleHQgPSBwcm9wcy5iYXJBcmlhVmFsdWVUZXh0LFxuICAgICAgYmFyQXJpYUxhYmVsbGVkQnkgPSBwcm9wcy5iYXJBcmlhTGFiZWxsZWRCeSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHcpO1xuXG4gIHZhciBwZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpIC8gdG9OdW1iZXIobWF4KSAqIDEwMDtcbiAgdmFyIHByb2dyZXNzQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwcm9ncmVzcycpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwcm9ncmVzcy1iYXInLCBiYXIgPyBjbGFzc05hbWUgfHwgYmFyQ2xhc3NOYW1lIDogYmFyQ2xhc3NOYW1lLCBhbmltYXRlZCA/ICdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnIDogbnVsbCwgY29sb3IgPyBcImJnLVwiICsgY29sb3IgOiBudWxsLCBzdHJpcGVkIHx8IGFuaW1hdGVkID8gJ3Byb2dyZXNzLWJhci1zdHJpcGVkJyA6IG51bGwpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQmFyQ2xhc3NlcyxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGJhciA/IHN0eWxlIDoge30pLCBiYXJTdHlsZSksIHt9LCB7XG4gICAgICB3aWR0aDogcGVyY2VudCArIFwiJVwiXG4gICAgfSksXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICdhcmlhLXZhbHVlbWluJzogbWluLFxuICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICdhcmlhLXZhbHVldGV4dCc6IGJhckFyaWFWYWx1ZVRleHQsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGJhckFyaWFMYWJlbGxlZEJ5LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9O1xuXG4gIGlmIChiYXIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHByb2dyZXNzQmFyUHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQ2xhc3Nlc1xuICB9KSwgbXVsdGkgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBwcm9ncmVzc0JhclByb3BzKSk7XG59XG5cblByb2dyZXNzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRCO1xuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEE7XG5cbnZhciBwcm9wVHlwZXMkQSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBub2RlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcblxudmFyIFBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9ydGFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHROb2RlID0gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghY2FuVXNlRE9NKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMubm9kZSAmJiAhdGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgdGhpcy5kZWZhdWx0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzLm5vZGUgfHwgdGhpcy5kZWZhdWx0Tm9kZSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBvcnRhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQTtcbnZhciBQb3J0YWwkMSA9IFBvcnRhbDtcblxuZnVuY3Rpb24gbm9vcCQxKCkge31cblxudmFyIEZhZGVQcm9wVHlwZXMkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpO1xudmFyIHByb3BUeXBlcyR6ID0ge1xuICAvKiogKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBiYWNrZHJvcCB0byBtb2RhbCAqL1xuICBiYWNrZHJvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXRpYyddKV0pLFxuXG4gIC8qKiBhZGQgY3VzdG9tIGNsYXNzbmFtZSB0byBiYWNrZHJvcCAqL1xuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyQxLFxuXG4gIC8qKiBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgbW9kYWwgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGNoaWxkcmVuIGZvciB0aGUgbW9kYWwgdG8gd3JhcCAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzTmFtZSBmb3IgbW9kYWwgY29udGVudCAqL1xuICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZXh0ZXJuYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogRW5hYmxlL0Rpc2FibGUgYW5pbWF0aW9uICovXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogTWFrZSB0aGUgbW9kYWwgZnVsbHNjcmVlbiAqL1xuICBmdWxsc2NyZWVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXSldKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBUaGUgc3RhdHVzIG9mIHRoZSBtb2RhbCwgZWl0aGVyIG9wZW4gb3IgY2xvc2UgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFsbG93IG1vZGFsIHRvIGJlIGNsb3NlZCB3aXRoIGVzY2FwZSBrZXkuICovXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB0aGF0IGxhYmVscyB0aGUgY3VycmVudCBlbGVtZW50LiAqL1xuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb2RhbFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMkMSxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsb3NlICovXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCBvbiBlbnRlciAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCBvbiBleGl0ICovXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gb3BlbiAqL1xuICBvbk9wZW5lZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBSZXR1cm5zIGZvY3VzIHRvIHRoZSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIG9wZW5pbmcgb2YgdGhlIG1vZGFsICovXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBY2Nlc3NpYmlsaXR5IHJvbGUgKi9cbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIE1ha2UgdGhlIG1vZGFsIHNjcm9sbGFibGUgKi9cbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBUd28gb3B0aW9uYWwgc2l6ZXMgYGxnYCBhbmQgYHNtYCAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogRnVuY3Rpb24gdG8gdG9nZ2xlIG1vZGFsIHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHRyYXBGb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBVbm1vdW50cyB0aGUgbW9kYWwgd2hlbiBtb2RhbCBpcyBjbG9zZWQgKi9cbiAgdW5tb3VudE9uQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgd3JhcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHpJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pXG59O1xudmFyIHByb3BzVG9PbWl0JDEgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkeik7XG52YXIgZGVmYXVsdFByb3BzJHogPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgY2VudGVyZWQ6IGZhbHNlLFxuICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgcm9sZTogJ2RpYWxvZycsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgekluZGV4OiAxMDUwLFxuICBmYWRlOiB0cnVlLFxuICBvbk9wZW5lZDogbm9vcCQxLFxuICBvbkNsb3NlZDogbm9vcCQxLFxuICBtb2RhbFRyYW5zaXRpb246IHtcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuTW9kYWxcbiAgfSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlIC8vIHVzZXMgc3RhbmRhcmQgZmFkZSB0cmFuc2l0aW9uXG5cbiAgfSxcbiAgdW5tb3VudE9uQ2xvc2U6IHRydWUsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIHRyYXBGb2N1czogZmFsc2Vcbn07XG5cbnZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIF90aGlzLl9vcmlnaW5hbEJvZHlPdmVyZmxvdyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiA9IF90aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgTW9kYWwsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7IC8vIGxldCByZW5kZXIoKSByZW5kZXJzIE1vZGFsIERpYWxvZyBmaXJzdFxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgTW9kYWwgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgOiBudWxsO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnByb3BzLmJhY2tkcm9wICE9PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUYWIgPSBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIGlmIChlLndoaWNoICE9PSA5KSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIHJldHVybjsgLy8gbGFzdCBvcGVuZWQgbW9kYWxcblxuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcbiAgICB2YXIgdG90YWxGb2N1c2FibGUgPSBmb2N1c2FibGVDaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKHRvdGFsRm9jdXNhYmxlID09PSAwKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnRGb2N1cyA9IHRoaXMuZ2V0Rm9jdXNlZENoaWxkKCk7XG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsRm9jdXNhYmxlOyBpICs9IDEpIHtcbiAgICAgIGlmIChmb2N1c2FibGVDaGlsZHJlbltpXSA9PT0gY3VycmVudEZvY3VzKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bdG90YWxGb2N1c2FibGUgLSAxXS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSB0b3RhbEZvY3VzYWJsZSAtIDEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLl9tb3VzZURvd25FbGVtZW50ID0gZS50YXJnZXQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUVzY2FwZSA9IGZ1bmN0aW9uIGhhbmRsZUVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT3BlbmVkID0gZnVuY3Rpb24gb25PcGVuZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbmVkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRW50ZXJlZCB8fCBub29wJDEpKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZChub2RlKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTsgLy8gc28gYWxsIG1ldGhvZHMgZ2V0IGNhbGxlZCBiZWZvcmUgaXQgaXMgdW5tb3VudGVkXG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRXhpdGVkIHx8IG5vb3AkMSkobm9kZSk7XG5cbiAgICBpZiAodW5tb3VudE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSAmJiB0eXBlb2YgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHMuam9pbignLCAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldEZvY3VzZWRDaGlsZCgpIHtcbiAgICB2YXIgY3VycmVudEZvY3VzO1xuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIHRyeSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY3VycmVudEZvY3VzID0gZm9jdXNhYmxlQ2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGb2N1cztcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBub3QgYXR0YWNoZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlID09PSBldi50YXJnZXQpIHtcbiAgICAgIC8vIGluaXRpYWwgZm9jdXMgd2hlbiB0aGUgTW9kYWwgaXMgb3BlbmVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIHtcbiAgICAgIC8vIGxhc3Qgb3BlbmVkIG1vZGFsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZm9jdXMgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIE1vZGFsXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGV2LnRhcmdldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBNb2RhbFxuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lciA9IGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvdztcbiAgICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoTW9kYWwub3BlbkNvdW50ID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLCBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxJbmRleCA9IE1vZGFsLm9wZW5Db3VudDtcbiAgICBNb2RhbC5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoTW9kYWwub3BlbkNvdW50IDw9IDEpIHtcbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7IC8vIFVzZSByZWdleCB0byBwcmV2ZW50IG1hdGNoaW5nIGBtb2RhbC1vcGVuYCBhcyBwYXJ0IG9mIGEgZGlmZmVyZW50IGNsYXNzLCBlLmcuIGBteS1tb2RhbC1vcGVuZWRgXG5cbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbW9kYWxPcGVuQ2xhc3NOYW1lICsgXCIoIHwkKVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShtb2RhbE9wZW5DbGFzc05hbWVSZWdleCwgJyAnKS50cmltKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gdGhpcy5fb3JpZ2luYWxCb2R5T3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgICBNb2RhbC5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBNb2RhbC5vcGVuQ291bnQgLSAxKTtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlck1vZGFsRGlhbG9nID0gZnVuY3Rpb24gcmVuZGVyTW9kYWxEaWFsb2coKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0JDEpO1xuICAgIHZhciBkaWFsb2dCYXNlQ2xhc3MgPSAnbW9kYWwtZGlhbG9nJztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkaWFsb2dCYXNlQ2xhc3MsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1cIiArIHRoaXMucHJvcHMuc2l6ZV0gPSB0aGlzLnByb3BzLnNpemUsIF9jbGFzc05hbWVzW2RpYWxvZ0Jhc2VDbGFzcyArIFwiLWNlbnRlcmVkXCJdID0gdGhpcy5wcm9wcy5jZW50ZXJlZCwgX2NsYXNzTmFtZXNbZGlhbG9nQmFzZUNsYXNzICsgXCItc2Nyb2xsYWJsZVwiXSA9IHRoaXMucHJvcHMuc2Nyb2xsYWJsZSwgX2NsYXNzTmFtZXNbJ21vZGFsLWZ1bGxzY3JlZW4nXSA9IHRoaXMucHJvcHMuZnVsbHNjcmVlbiA9PT0gdHJ1ZSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1mdWxsc2NyZWVuLVwiICsgdGhpcy5wcm9wcy5mdWxsc2NyZWVuICsgXCItZG93blwiXSA9IHR5cGVvZiB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gPT09ICdzdHJpbmcnLCBfY2xhc3NOYW1lcykpLCB0aGlzLnByb3BzLmNzc01vZHVsZSksXG4gICAgICByb2xlOiBcImRvY3VtZW50XCIsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgIF90aGlzMy5fZGlhbG9nID0gYztcbiAgICAgIH1cbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1jb250ZW50JywgdGhpcy5wcm9wcy5jb250ZW50Q2xhc3NOYW1lKSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpXG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc01vZGFsSGlkZGVuID0gISF0aGlzLl9lbGVtZW50ICYmICF0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdW5tb3VudE9uQ2xvc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc01vZGFsSGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIud3JhcENsYXNzTmFtZSxcbiAgICAgICAgICBtb2RhbENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5tb2RhbENsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczIuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMi5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczIuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMi5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczIubGFiZWxsZWRCeSxcbiAgICAgICAgICBleHRlcm5hbCA9IF90aGlzJHByb3BzMi5leHRlcm5hbCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzMi5pbm5lclJlZjtcbiAgICAgIHZhciBtb2RhbEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24sXG4gICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlRXNjYXBlLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlVGFiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSxcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBtb2RhbFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgYmFja2Ryb3BUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIEJhY2tkcm9wID0gYmFja2Ryb3AgJiYgKGhhc1RyYW5zaXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGJhY2tkcm9wVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbiAmJiAhIWJhY2tkcm9wLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpXG4gICAgICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3J0YWwkMSwge1xuICAgICAgICBub2RlOiB0aGlzLl9lbGVtZW50XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyh3cmFwQ2xhc3NOYW1lKVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBtb2RhbEF0dHJpYnV0ZXMsIG1vZGFsVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgICAgb25FbnRlcmVkOiB0aGlzLm9uT3BlbmVkLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbCcsIG1vZGFsQ2xhc3NOYW1lLCB0aGlzLnN0YXRlLnNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiAmJiAnbW9kYWwtc3RhdGljJyksIGNzc01vZHVsZSksXG4gICAgICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICAgICAgfSksIGV4dGVybmFsLCB0aGlzLnJlbmRlck1vZGFsRGlhbG9nKCkpLCBCYWNrZHJvcCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBNb2RhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyR6O1xuTW9kYWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHo7XG5Nb2RhbC5vcGVuQ291bnQgPSAwO1xudmFyIE1vZGFsJDEgPSBNb2RhbDtcblxudmFyIF9leGNsdWRlZCR2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiXTtcbnZhciBwcm9wVHlwZXMkeSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDdXN0b20gY2xvc2UgYnV0dG9uICovXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgd2hlbiBjbG9zZSBidXR0b24gaXMgY2xpY2tlZCAqL1xuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHkgPSB7XG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2RpdicsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnXG59O1xuXG5mdW5jdGlvbiBNb2RhbEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnbW9kYWwtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufVxuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkeTtcbk1vZGFsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR5O1xuXG52YXIgX2V4Y2x1ZGVkJHUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHggPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHggPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIE1vZGFsQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Nb2RhbEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJHg7XG5Nb2RhbEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHg7XG5cbnZhciBfZXhjbHVkZWQkdCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkdyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkdyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gTW9kYWxGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWZvb3RlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdztcbk1vZGFsRm9vdGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR3O1xuXG52YXIgZGVmYXVsdFByb3BzJHYgPSB7XG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy10b29sdGlwJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufTtcblxuZnVuY3Rpb24gVG9vbHRpcChwcm9wcykge1xuICB2YXIgcG9wcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwJywgJ3Nob3cnLCBwcm9wcy5wb3BwZXJDbGFzc05hbWUpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwLWlubmVyJywgcHJvcHMuaW5uZXJDbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhcnJvd0NsYXNzTmFtZTogXCJ0b29sdGlwLWFycm93XCIsXG4gICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgIGlubmVyQ2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuVG9vbHRpcC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRTtcblRvb2x0aXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHY7XG5cbnZhciBfZXhjbHVkZWQkcyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJib3JkZXJlZFwiLCBcImJvcmRlcmxlc3NcIiwgXCJzdHJpcGVkXCIsIFwiZGFya1wiLCBcImhvdmVyXCIsIFwicmVzcG9uc2l2ZVwiLCBcInRhZ1wiLCBcInJlc3BvbnNpdmVUYWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdiA9IHtcbiAgLyoqIEFkZHMgYm9yZGVyIHRvIGFsbCBzaWRlcyBvZiB0YWJsZSAqL1xuICBib3JkZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBSZW1vdmVzIGFsbCBib3JkZXJzICovXG4gIGJvcmRlcmxlc3M6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkcyBjdXN0b20gY2xhc3MgbmFtZSB0byBjb21wb25lbnQgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIE1ha2VzIHRoZSB0YWJsZSBkYXJrICovXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogRW5hYmxlcyBhIGhvdmVyIHN0YXRlIG9uIHRoZSByb3dzIHdpdGhpbiBgPHRib2R5PmAgKi9cbiAgaG92ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pLFxuXG4gIC8qKiBSZXNwb25zaXZlIHRhYmxlcyBhbGxvdyB0YWJsZXMgdG8gYmUgc2Nyb2xsZWQgaG9yaXpvbnRhbGx5IHdpdGggZWFzZSAqL1xuICByZXNwb25zaXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICByZXNwb25zaXZlVGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogTWFrZSB0YWJsZXMgbW9yZSBjb21wYWN0IGJ5IGN1dHRpbmcgY2VsbCBwYWRkaW5nIGluIGhhbGYgd2hlbiBzZXR0aW5nIHNpemUgYXMgc20uICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGRzIHplYnJhLXN0cmlwaW5nIHRvIGFueSB0YWJsZSByb3cgd2l0aGluIHRoZSBgPHRib2R5PmAgKi9cbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIHRhZyB0byB0aGUgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHUgPSB7XG4gIHRhZzogJ3RhYmxlJyxcbiAgcmVzcG9uc2l2ZVRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGJvcmRlcmVkID0gcHJvcHMuYm9yZGVyZWQsXG4gICAgICBib3JkZXJsZXNzID0gcHJvcHMuYm9yZGVybGVzcyxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBob3ZlciA9IHByb3BzLmhvdmVyLFxuICAgICAgcmVzcG9uc2l2ZSA9IHByb3BzLnJlc3BvbnNpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBSZXNwb25zaXZlVGFnID0gcHJvcHMucmVzcG9uc2l2ZVRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRzKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0YWJsZScsIHNpemUgPyAndGFibGUtJyArIHNpemUgOiBmYWxzZSwgYm9yZGVyZWQgPyAndGFibGUtYm9yZGVyZWQnIDogZmFsc2UsIGJvcmRlcmxlc3MgPyAndGFibGUtYm9yZGVybGVzcycgOiBmYWxzZSwgc3RyaXBlZCA/ICd0YWJsZS1zdHJpcGVkJyA6IGZhbHNlLCBkYXJrID8gJ3RhYmxlLWRhcmsnIDogZmFsc2UsIGhvdmVyID8gJ3RhYmxlLWhvdmVyJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHRhYmxlID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICB2YXIgcmVzcG9uc2l2ZUNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhyZXNwb25zaXZlID09PSB0cnVlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogXCJ0YWJsZS1yZXNwb25zaXZlLVwiICsgcmVzcG9uc2l2ZSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVUYWcsIHtcbiAgICAgIGNsYXNzTmFtZTogcmVzcG9uc2l2ZUNsYXNzTmFtZVxuICAgIH0sIHRhYmxlKTtcbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn1cblxuVGFibGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJHY7XG5UYWJsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdTtcblxudmFyIF9leGNsdWRlZCRyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiZmx1c2hcIiwgXCJob3Jpem9udGFsXCIsIFwibnVtYmVyZWRcIl07XG52YXIgcHJvcFR5cGVzJHUgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogUmVtb3ZlIGJvcmRlcnMgdG8gbWFrZSB0aGUgbGlzdCBhcHBlYXIgZmx1c2ggKi9cbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogTWFrZSB0aGUgbGlzdCBob3Jpem9udGFsIGluc3RlYWQgb2YgdmVydGljYWwgKi9cbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogQWRkIG51bWJlciB0byB0aGUgTGlzdEl0ZW1zICovXG4gIG51bWJlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyR0ID0ge1xuICB0YWc6ICd1bCcsXG4gIGhvcml6b250YWw6IGZhbHNlLFxuICBudW1iZXJlZDogZmFsc2Vcbn07XG5cbnZhciBnZXRIb3Jpem9udGFsQ2xhc3MgPSBmdW5jdGlvbiBnZXRIb3Jpem9udGFsQ2xhc3MoaG9yaXpvbnRhbCkge1xuICBpZiAoaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSB8fCBob3Jpem9udGFsID09PSAneHMnKSB7XG4gICAgcmV0dXJuICdsaXN0LWdyb3VwLWhvcml6b250YWwnO1xuICB9XG5cbiAgcmV0dXJuIFwibGlzdC1ncm91cC1ob3Jpem9udGFsLVwiICsgaG9yaXpvbnRhbDtcbn07XG5cbmZ1bmN0aW9uIExpc3RHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIGhvcml6b250YWwgPSBwcm9wcy5ob3Jpem9udGFsLFxuICAgICAgbnVtYmVyZWQgPSBwcm9wcy5udW1iZXJlZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnLCAvLyBsaXN0LWdyb3VwLWhvcml6b250YWwgY2Fubm90IGN1cnJlbnRseSBiZSBtaXhlZCB3aXRoIGxpc3QtZ3JvdXAtZmx1c2hcbiAgLy8gd2Ugb25seSB0cnkgdG8gYXBwbHkgaG9yaXpvbnRhbCBjbGFzc2VzIGlmIGZsdXNoIGlzIGZhbHNlXG4gIGZsdXNoID8gJ2xpc3QtZ3JvdXAtZmx1c2gnIDogZ2V0SG9yaXpvbnRhbENsYXNzKGhvcml6b250YWwpLCB7XG4gICAgJ2xpc3QtZ3JvdXAtbnVtYmVyZWQnOiBudW1iZXJlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTGlzdEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyR1O1xuTGlzdEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR0O1xuXG52YXIgX2V4Y2x1ZGVkJHEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbmxpbmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgaW5saW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkcyA9IHtcbiAgdGFnOiAnZm9ybSdcbn07XG5cbnZhciBGb3JtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEZvcm0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5nZXRSZWYgPSBfdGhpcy5nZXRSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3VibWl0ID0gX3RoaXMuc3VibWl0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGb3JtLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UmVmID0gZnVuY3Rpb24gZ2V0UmVmKHJlZikge1xuICAgIGlmICh0aGlzLnByb3BzLmlubmVyUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLmlubmVyUmVmKHJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5yZWYgPSByZWY7XG4gIH07XG5cbiAgX3Byb3RvLnN1Ym1pdCA9IGZ1bmN0aW9uIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLnN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBpbmxpbmUgPSBfdGhpcyRwcm9wcy5pbmxpbmUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkcSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGlubGluZSA/ICdmb3JtLWlubGluZScgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGb3JtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcyR0O1xuRm9ybS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcztcbnZhciBGb3JtJDEgPSBGb3JtO1xuXG52YXIgX2V4Y2x1ZGVkJHAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YWxpZFwiLCBcInRvb2x0aXBcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvb2x0aXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkciA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdmFsaWQ6IHVuZGVmaW5lZFxufTtcblxuZnVuY3Rpb24gRm9ybUZlZWRiYWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWxpZCA9IHByb3BzLnZhbGlkLFxuICAgICAgdG9vbHRpcCA9IHByb3BzLnRvb2x0aXAsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRwKTtcblxuICB2YXIgdmFsaWRNb2RlID0gdG9vbHRpcCA/ICd0b29sdGlwJyA6ICdmZWVkYmFjayc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdmFsaWQgPyBcInZhbGlkLVwiICsgdmFsaWRNb2RlIDogXCJpbnZhbGlkLVwiICsgdmFsaWRNb2RlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuRm9ybUZlZWRiYWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcyRzO1xuRm9ybUZlZWRiYWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRyO1xuXG52YXIgX2V4Y2x1ZGVkJG8gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJyb3dcIiwgXCJkaXNhYmxlZFwiLCBcImNoZWNrXCIsIFwiaW5saW5lXCIsIFwiZmxvYXRpbmdcIiwgXCJ0YWdcIiwgXCJzd2l0Y2hcIl07XG52YXIgcHJvcFR5cGVzJHIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHJvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBcInN3aXRjaFwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmbG9hdGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRxID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBGb3JtR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHJvdyA9IHByb3BzLnJvdyxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBjaGVjayA9IHByb3BzLmNoZWNrLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgZmxvYXRpbmcgPSBwcm9wcy5mbG9hdGluZyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHN3aXRjaFByb3AgPSBwcm9wc1tcInN3aXRjaFwiXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG8pO1xuXG4gIHZhciBmb3JtQ2hlY2sgPSBjaGVjayB8fCBzd2l0Y2hQcm9wO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHJvdyA/ICdyb3cnIDogZmFsc2UsIGZvcm1DaGVjayA/ICdmb3JtLWNoZWNrJyA6ICdtYi0zJywgc3dpdGNoUHJvcCA/ICdmb3JtLXN3aXRjaCcgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGlubGluZSA/ICdmb3JtLWNoZWNrLWlubGluZScgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBmbG9hdGluZyAmJiAnZm9ybS1mbG9hdGluZycpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChUYWcgPT09ICdmaWVsZHNldCcpIHtcbiAgICBhdHRyaWJ1dGVzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Gb3JtR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJHI7XG5Gb3JtR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHE7XG5cbnZhciBfZXhjbHVkZWQkbiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubGluZVwiLCBcImNvbG9yXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRxID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRwID0ge1xuICB0YWc6ICdzbWFsbCcsXG4gIGNvbG9yOiAnbXV0ZWQnXG59O1xuXG5mdW5jdGlvbiBGb3JtVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgIWlubGluZSA/ICdmb3JtLXRleHQnIDogZmFsc2UsIGNvbG9yID8gXCJ0ZXh0LVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkZvcm1UZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRxO1xuRm9ybVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHA7XG5cbnZhciBfZXhjbHVkZWQkbSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInR5cGVcIiwgXCJic1NpemVcIiwgXCJ2YWxpZFwiLCBcImludmFsaWRcIiwgXCJ0YWdcIiwgXCJhZGRvblwiLCBcInBsYWludGV4dFwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRwID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBic1NpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbnZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgcGxhaW50ZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFkZG9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG8gPSB7XG4gIHR5cGU6ICd0ZXh0J1xufTtcblxudmFyIElucHV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbm5lclJlZikge1xuICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpO1xuICAgIH1cblxuICAgIHRoaXMucmVmID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgIGJzU2l6ZSA9IF90aGlzJHByb3BzLmJzU2l6ZSxcbiAgICAgICAgdmFsaWQgPSBfdGhpcyRwcm9wcy52YWxpZCxcbiAgICAgICAgaW52YWxpZCA9IF90aGlzJHByb3BzLmludmFsaWQsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgYWRkb24gPSBfdGhpcyRwcm9wcy5hZGRvbixcbiAgICAgICAgcGxhaW50ZXh0ID0gX3RoaXMkcHJvcHMucGxhaW50ZXh0LFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRtKTtcblxuICAgIHZhciBjaGVja0lucHV0ID0gWydzd2l0Y2gnLCAncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHR5cGUpID4gLTE7XG4gICAgdmFyIGlzTm90YU51bWJlciA9IC9cXEQvZztcbiAgICB2YXIgdGV4dGFyZWFJbnB1dCA9IHR5cGUgPT09ICd0ZXh0YXJlYSc7XG4gICAgdmFyIHNlbGVjdElucHV0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSB0eXBlID09PSAncmFuZ2UnO1xuICAgIHZhciBUYWcgPSB0YWcgfHwgKHNlbGVjdElucHV0IHx8IHRleHRhcmVhSW5wdXQgPyB0eXBlIDogJ2lucHV0Jyk7XG4gICAgdmFyIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcblxuICAgIGlmIChwbGFpbnRleHQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBmb3JtQ29udHJvbENsYXNzICsgXCItcGxhaW50ZXh0XCI7XG4gICAgICBUYWcgPSB0YWcgfHwgJ2lucHV0JztcbiAgICB9IGVsc2UgaWYgKHJhbmdlSW5wdXQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1yYW5nZSc7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RJbnB1dCkge1xuICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9ICdmb3JtLXNlbGVjdCc7XG4gICAgfSBlbHNlIGlmIChjaGVja0lucHV0KSB7XG4gICAgICBpZiAoYWRkb24pIHtcbiAgICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLnNpemUgJiYgaXNOb3RhTnVtYmVyLnRlc3QoYXR0cmlidXRlcy5zaXplKSkge1xuICAgICAgd2Fybk9uY2UoJ1BsZWFzZSB1c2UgdGhlIHByb3AgXCJic1NpemVcIiBpbnN0ZWFkIG9mIHRoZSBcInNpemVcIiB0byBib290c3RyYXBcXCdzIGlucHV0IHNpemluZy4nKTtcbiAgICAgIGJzU2l6ZSA9IGF0dHJpYnV0ZXMuc2l6ZTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNpemU7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBpbnZhbGlkICYmICdpcy1pbnZhbGlkJywgdmFsaWQgJiYgJ2lzLXZhbGlkJywgYnNTaXplID8gc2VsZWN0SW5wdXQgPyBcImZvcm0tc2VsZWN0LVwiICsgYnNTaXplIDogXCJmb3JtLWNvbnRyb2wtXCIgKyBic1NpemUgOiBmYWxzZSwgZm9ybUNvbnRyb2xDbGFzcyksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnaW5wdXQnIHx8IHRhZyAmJiB0eXBlb2YgdGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhdHRyaWJ1dGVzLnR5cGUgPSB0eXBlID09PSAnc3dpdGNoJyA/ICdjaGVja2JveCcgOiB0eXBlO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLmNoaWxkcmVuICYmICEocGxhaW50ZXh0IHx8IHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGVvZiBUYWcgIT09ICdzdHJpbmcnIHx8IFRhZyA9PT0gJ3NlbGVjdCcpKSB7XG4gICAgICB3YXJuT25jZShcIklucHV0IHdpdGggYSB0eXBlIG9mIFxcXCJcIiArIHR5cGUgKyBcIlxcXCIgY2Fubm90IGhhdmUgY2hpbGRyZW4uIFBsZWFzZSB1c2UgXFxcInZhbHVlXFxcIi9cXFwiZGVmYXVsdFZhbHVlXFxcIiBpbnN0ZWFkLlwiKTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IGludmFsaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzJHA7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbztcbnZhciBJbnB1dCQxID0gSW5wdXQ7XG5cbnZhciBfZXhjbHVkZWQkbCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInR5cGVcIiwgXCJzaXplXCJdO1xudmFyIHByb3BUeXBlcyRvID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldHMgc2l6ZSBvZiBJbnB1dEdyb3VwICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJG4gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIElucHV0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnLCBzaXplID8gXCJpbnB1dC1ncm91cC1cIiArIHNpemUgOiBudWxsKSwgY3NzTW9kdWxlKTtcblxuICBpZiAocHJvcHMudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbklucHV0R3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJG87XG5JbnB1dEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRuO1xuXG52YXIgX2V4Y2x1ZGVkJGsgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJG4gPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJG0gPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG5mdW5jdGlvbiBJbnB1dEdyb3VwVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkayk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAtdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5JbnB1dEdyb3VwVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbjtcbklucHV0R3JvdXBUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRtO1xuXG52YXIgX2V4Y2x1ZGVkJGogPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJoaWRkZW5cIiwgXCJ3aWR0aHNcIiwgXCJ0YWdcIiwgXCJjaGVja1wiLCBcInNpemVcIiwgXCJmb3JcIl07XG52YXIgY29sV2lkdGhzID0gWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXTtcbnZhciBzdHJpbmdPck51bWJlclByb3AgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSk7XG52YXIgY29sdW1uUHJvcHMgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzaXplOiBzdHJpbmdPck51bWJlclByb3AsXG4gIG9yZGVyOiBzdHJpbmdPck51bWJlclByb3AsXG4gIG9mZnNldDogc3RyaW5nT3JOdW1iZXJQcm9wXG59KV0pO1xudmFyIHByb3BUeXBlcyRtID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBoaWRkZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hlY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIFwiZm9yXCI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB4czogY29sdW1uUHJvcHMsXG4gIHNtOiBjb2x1bW5Qcm9wcyxcbiAgbWQ6IGNvbHVtblByb3BzLFxuICBsZzogY29sdW1uUHJvcHMsXG4gIHhsOiBjb2x1bW5Qcm9wcyxcbiAgeHhsOiBjb2x1bW5Qcm9wcyxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyRsID0ge1xuICB0YWc6ICdsYWJlbCcsXG4gIHdpZHRoczogY29sV2lkdGhzXG59O1xuXG52YXIgZ2V0Q29sdW1uU2l6ZUNsYXNzID0gZnVuY3Rpb24gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2xTaXplKSB7XG4gIGlmIChjb2xTaXplID09PSB0cnVlIHx8IGNvbFNpemUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sJyA6IFwiY29sLVwiICsgY29sV2lkdGg7XG4gIH1cblxuICBpZiAoY29sU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgcmV0dXJuIGlzWHMgPyAnY29sLWF1dG8nIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLWF1dG9cIjtcbiAgfVxuXG4gIHJldHVybiBpc1hzID8gXCJjb2wtXCIgKyBjb2xTaXplIDogXCJjb2wtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZTtcbn07XG5cbmZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBoaWRkZW4gPSBwcm9wcy5oaWRkZW4sXG4gICAgICB3aWR0aHMgPSBwcm9wcy53aWR0aHMsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjaGVjayA9IHByb3BzLmNoZWNrLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBodG1sRm9yID0gcHJvcHNbXCJmb3JcIl0sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRqKTtcblxuICB2YXIgY29sQ2xhc3NlcyA9IFtdO1xuICB3aWR0aHMuZm9yRWFjaChmdW5jdGlvbiAoY29sV2lkdGgsIGkpIHtcbiAgICB2YXIgY29sdW1uUHJvcCA9IHByb3BzW2NvbFdpZHRoXTtcbiAgICBkZWxldGUgYXR0cmlidXRlc1tjb2xXaWR0aF07XG5cbiAgICBpZiAoIWNvbHVtblByb3AgJiYgY29sdW1uUHJvcCAhPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNYcyA9ICFpO1xuICAgIHZhciBjb2xDbGFzcztcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSkpLCBjc3NNb2R1bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sdW1uUHJvcCk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2goY29sQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBjb2xGb3JtTGFiZWwgPSBzaXplIHx8IGNvbENsYXNzZXMubGVuZ3RoO1xuICB2YXIgZm9ybUxhYmVsID0gIShjaGVjayB8fCBjb2xGb3JtTGFiZWwpO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGhpZGRlbiA/ICd2aXN1YWxseS1oaWRkZW4nIDogZmFsc2UsIGNoZWNrID8gJ2Zvcm0tY2hlY2stbGFiZWwnIDogZmFsc2UsIHNpemUgPyBcImNvbC1mb3JtLWxhYmVsLVwiICsgc2l6ZSA6IGZhbHNlLCBjb2xDbGFzc2VzLCBjb2xGb3JtTGFiZWwgPyAnY29sLWZvcm0tbGFiZWwnIDogZmFsc2UsIGZvcm1MYWJlbCA/ICdmb3JtLWxhYmVsJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICBodG1sRm9yOiBodG1sRm9yXG4gIH0sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5MYWJlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbTtcbkxhYmVsLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRsO1xuXG52YXIgX2V4Y2x1ZGVkJGkgPSBbXCJib2R5XCIsIFwiYm90dG9tXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiaGVhZGluZ1wiLCBcImxlZnRcIiwgXCJsaXN0XCIsIFwibWlkZGxlXCIsIFwib2JqZWN0XCIsIFwicmlnaHRcIiwgXCJ0YWdcIiwgXCJ0b3BcIl07XG52YXIgcHJvcFR5cGVzJGwgPSB7XG4gIGJvZHk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGhlYWRpbmc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGVmdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsaXN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1pZGRsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvYmplY3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcmlnaHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9wOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn07XG5cbmZ1bmN0aW9uIE1lZGlhKHByb3BzKSB7XG4gIHZhciBib2R5ID0gcHJvcHMuYm9keSxcbiAgICAgIGJvdHRvbSA9IHByb3BzLmJvdHRvbSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGhlYWRpbmcgPSBwcm9wcy5oZWFkaW5nLFxuICAgICAgbGVmdCA9IHByb3BzLmxlZnQsXG4gICAgICBsaXN0ID0gcHJvcHMubGlzdCxcbiAgICAgIG1pZGRsZSA9IHByb3BzLm1pZGRsZSxcbiAgICAgIG9iamVjdCA9IHByb3BzLm9iamVjdCxcbiAgICAgIHJpZ2h0ID0gcHJvcHMucmlnaHQsXG4gICAgICB0YWcgPSBwcm9wcy50YWcsXG4gICAgICB0b3AgPSBwcm9wcy50b3AsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRpKTtcblxuICB2YXIgZGVmYXVsdFRhZztcblxuICBpZiAoaGVhZGluZykge1xuICAgIGRlZmF1bHRUYWcgPSAnaDQnO1xuICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXMuaHJlZikge1xuICAgIGRlZmF1bHRUYWcgPSAnYSc7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5zcmMgfHwgb2JqZWN0KSB7XG4gICAgZGVmYXVsdFRhZyA9ICdpbWcnO1xuICB9IGVsc2UgaWYgKGxpc3QpIHtcbiAgICBkZWZhdWx0VGFnID0gJ3VsJztcbiAgfSBlbHNlIHtcbiAgICBkZWZhdWx0VGFnID0gJ2Rpdic7XG4gIH1cblxuICB2YXIgVGFnID0gdGFnIHx8IGRlZmF1bHRUYWc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICdtZWRpYS1ib2R5JzogYm9keSxcbiAgICAnbWVkaWEtaGVhZGluZyc6IGhlYWRpbmcsXG4gICAgJ21lZGlhLWxlZnQnOiBsZWZ0LFxuICAgICdtZWRpYS1yaWdodCc6IHJpZ2h0LFxuICAgICdtZWRpYS10b3AnOiB0b3AsXG4gICAgJ21lZGlhLWJvdHRvbSc6IGJvdHRvbSxcbiAgICAnbWVkaWEtbWlkZGxlJzogbWlkZGxlLFxuICAgICdtZWRpYS1vYmplY3QnOiBvYmplY3QsXG4gICAgJ21lZGlhLWxpc3QnOiBsaXN0LFxuICAgIG1lZGlhOiAhYm9keSAmJiAhaGVhZGluZyAmJiAhbGVmdCAmJiAhcmlnaHQgJiYgIXRvcCAmJiAhYm90dG9tICYmICFtaWRkbGUgJiYgIW9iamVjdCAmJiAhbGlzdFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTWVkaWEucHJvcFR5cGVzID0gcHJvcFR5cGVzJGw7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgRmFkZVByb3BUeXBlcyA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpO1xudmFyIHByb3BUeXBlcyRrID0ge1xuICBhdXRvRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFja2Ryb3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFja2Ryb3BDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYWNrZHJvcFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXJ0JywgJ2VuZCcsICdib3R0b20nLCAndG9wJ10pLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBvZmZjYW52YXNUcmFuc2l0aW9uOiBGYWRlUHJvcFR5cGVzLFxuICBvbkNsb3NlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBzdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9uT3BlbmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgdHJhcEZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHVubW91bnRPbkNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHpJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pXG59O1xudmFyIHByb3BzVG9PbWl0ID0gT2JqZWN0LmtleXMocHJvcFR5cGVzJGspO1xudmFyIGRlZmF1bHRQcm9wcyRrID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIGRpcmVjdGlvbjogJ3N0YXJ0JyxcbiAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gIHJvbGU6ICdkaWFsb2cnLFxuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHpJbmRleDogMTA1MCxcbiAgZmFkZTogdHJ1ZSxcbiAgb25PcGVuZWQ6IG5vb3AsXG4gIG9uQ2xvc2VkOiBub29wLFxuICBvZmZjYW52YXNUcmFuc2l0aW9uOiB7XG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLk9mZmNhbnZhc1xuICB9LFxuICBiYWNrZHJvcFRyYW5zaXRpb246IHtcbiAgICBtb3VudE9uRW50ZXI6IHRydWUsXG4gICAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkZhZGUgLy8gdXNlcyBzdGFuZGFyZCBmYWRlIHRyYW5zaXRpb25cblxuICB9LFxuICB1bm1vdW50T25DbG9zZTogdHJ1ZSxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBjb250YWluZXI6ICdib2R5JyxcbiAgdHJhcEZvY3VzOiBmYWxzZVxufTtcblxudmFyIE9mZmNhbnZhcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShPZmZjYW52YXMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9mZmNhbnZhcyhwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICBfdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUYWIgPSBfdGhpcy5oYW5kbGVUYWIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25PcGVuZWQgPSBfdGhpcy5vbk9wZW5lZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkNsb3NlZCA9IF90aGlzLm9uQ2xvc2VkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IF90aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5jbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRyYXBGb2N1cyA9IF90aGlzLnRyYXBGb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPZmZjYW52YXMucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICBvbkVudGVyID0gX3RoaXMkcHJvcHMub25FbnRlcjtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbkVudGVyKSB7XG4gICAgICBvbkVudGVyKCk7XG4gICAgfSAvLyB0cmFwcyBmb2N1cyBpbnNpZGUgdGhlIE9mZmNhbnZhcywgZXZlbiBpZiB0aGUgYnJvd3NlciBhZGRyZXNzIGJhciBpcyBmb2N1c2VkXG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIG5vdyBPZmZjYW52YXMgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fYmFja2Ryb3A7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuIHx8IHRoaXMucHJvcHMuYmFja2Ryb3AgIT09IHRydWUpIHJldHVybjtcblxuICAgICAgaWYgKGJhY2tkcm9wICYmIGUudGFyZ2V0ID09PSBiYWNrZHJvcCAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgaWYgKGUud2hpY2ggIT09IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5vZmZjYW52YXNJbmRleCA8IE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKSByZXR1cm47IC8vIGxhc3Qgb3BlbmVkIG9mZmNhbnZhc1xuXG4gICAgdmFyIGZvY3VzYWJsZUNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuICAgIHZhciB0b3RhbEZvY3VzYWJsZSA9IGZvY3VzYWJsZUNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAodG90YWxGb2N1c2FibGUgPT09IDApIHJldHVybjtcbiAgICB2YXIgY3VycmVudEZvY3VzID0gdGhpcy5nZXRGb2N1c2VkQ2hpbGQoKTtcbiAgICB2YXIgZm9jdXNlZEluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWxGb2N1c2FibGU7IGkgKz0gMSkge1xuICAgICAgaWYgKGZvY3VzYWJsZUNoaWxkcmVuW2ldID09PSBjdXJyZW50Rm9jdXMpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblt0b3RhbEZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IHRvdGFsRm9jdXNhYmxlIC0gMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX21vdXNlRG93bkVsZW1lbnQgPSBlLnRhcmdldDtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXNjYXBlID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgZS5rZXlDb2RlID09PSBrZXlDb2Rlcy5lc2MgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9wZW5lZCA9IGZ1bmN0aW9uIG9uT3BlbmVkKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW5lZCgpO1xuICAgICh0aGlzLnByb3BzLm9mZmNhbnZhc1RyYW5zaXRpb24ub25FbnRlcmVkIHx8IG5vb3ApKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZChub2RlKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTsgLy8gc28gYWxsIG1ldGhvZHMgZ2V0IGNhbGxlZCBiZWZvcmUgaXQgaXMgdW5tb3VudGVkXG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgKHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5vbkV4aXRlZCB8fCBub29wKShub2RlKTtcblxuICAgIGlmICh1bm1vdW50T25DbG9zZSkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHR5cGVvZiB0aGlzLl9kaWFsb2cuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZUVsZW1lbnRzLmpvaW4oJywgJykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2VkQ2hpbGQgPSBmdW5jdGlvbiBnZXRGb2N1c2VkQ2hpbGQoKSB7XG4gICAgdmFyIGN1cnJlbnRGb2N1cztcbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICB0cnkge1xuICAgICAgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGN1cnJlbnRGb2N1cyA9IGZvY3VzYWJsZUNoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50Rm9jdXM7XG4gIH07XG5cbiAgX3Byb3RvLnRyYXBGb2N1cyA9IGZ1bmN0aW9uIHRyYXBGb2N1cyhldikge1xuICAgIGlmICghdGhpcy5wcm9wcy50cmFwRm9jdXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RpYWxvZyA9PT0gZXYudGFyZ2V0KSB7XG4gICAgICAvLyBpbml0aWFsIGZvY3VzIHdoZW4gdGhlIE9mZmNhbnZhcyBpcyBvcGVuZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vZmZjYW52YXNJbmRleCA8IE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKSB7XG4gICAgICAvLyBsYXN0IG9wZW5lZCBvZmZjYW52YXNcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBmb2N1cyBpcyBhbHJlYWR5IGluc2lkZSB0aGUgT2ZmY2FudmFzXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGV2LnRhcmdldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBPZmZjYW52YXNcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy5jb250YWluZXIpO1xuXG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZ2V0T3JpZ2luYWxCb2R5UGFkZGluZygpO1xuICAgIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKTtcblxuICAgIGlmIChPZmZjYW52YXMub3BlbkNvdW50ID09PSAwICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgJiYgIXRoaXMucHJvcHMuc2Nyb2xsYWJsZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIHRoaXMub2ZmY2FudmFzSW5kZXggPSBPZmZjYW52YXMub3BlbkNvdW50O1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICAgIE9mZmNhbnZhcy5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBPZmZjYW52YXMub3BlbkNvdW50IC0gMSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG51bGw7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgodGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMyLmRpcmVjdGlvbixcbiAgICAgICAgdW5tb3VudE9uQ2xvc2UgPSBfdGhpcyRwcm9wczIudW5tb3VudE9uQ2xvc2U7XG5cbiAgICBpZiAoISF0aGlzLl9lbGVtZW50ICYmICh0aGlzLnN0YXRlLmlzT3BlbiB8fCAhdW5tb3VudE9uQ2xvc2UpKSB7XG4gICAgICB2YXIgaXNPZmZjYW52YXNIaWRkZW4gPSAhIXRoaXMuX2VsZW1lbnQgJiYgIXRoaXMuc3RhdGUuaXNPcGVuICYmICF1bm1vdW50T25DbG9zZTtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzT2ZmY2FudmFzSGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgYmFja2Ryb3BDbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuYmFja2Ryb3BDbGFzc05hbWUsXG4gICAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMzLmNzc01vZHVsZSxcbiAgICAgICAgICBpc09wZW4gPSBfdGhpcyRwcm9wczMuaXNPcGVuLFxuICAgICAgICAgIGJhY2tkcm9wID0gX3RoaXMkcHJvcHMzLmJhY2tkcm9wLFxuICAgICAgICAgIHJvbGUgPSBfdGhpcyRwcm9wczMucm9sZSxcbiAgICAgICAgICBsYWJlbGxlZEJ5ID0gX3RoaXMkcHJvcHMzLmxhYmVsbGVkQnksXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGU7XG4gICAgICB2YXIgb2ZmY2FudmFzQXR0cmlidXRlcyA9IHtcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVFc2NhcGUsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVUYWIsXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbGxlZEJ5LFxuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICB0YWJJbmRleDogJy0xJ1xuICAgICAgfTtcbiAgICAgIHZhciBoYXNUcmFuc2l0aW9uID0gdGhpcy5wcm9wcy5mYWRlO1xuXG4gICAgICB2YXIgb2ZmY2FudmFzVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgQmFja2Ryb3AgPSBiYWNrZHJvcCAmJiAoaGFzVHJhbnNpdGlvbiA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYmFja2Ryb3BUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuICYmICEhYmFja2Ryb3AsXG4gICAgICAgIGlubmVyUmVmOiBmdW5jdGlvbiBpbm5lclJlZihjKSB7XG4gICAgICAgICAgX3RoaXMyLl9iYWNrZHJvcCA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnb2ZmY2FudmFzLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duXG4gICAgICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnb2ZmY2FudmFzLWJhY2tkcm9wJywgJ3Nob3cnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd25cbiAgICAgIH0pKTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wc1RvT21pdCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBvcnRhbCQxLCB7XG4gICAgICAgIG5vZGU6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgb2ZmY2FudmFzQXR0cmlidXRlcywgb2ZmY2FudmFzVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgICAgb25FbnRlcmVkOiB0aGlzLm9uT3BlbmVkLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMnLCBjbGFzc05hbWUsIFwib2ZmY2FudmFzLVwiICsgZGlyZWN0aW9uKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX2RpYWxvZyA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3R5bGUpLCB7fSwge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGlzT3BlbiA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgICAgIH0pXG4gICAgICB9KSwgdGhpcy5wcm9wcy5jaGlsZHJlbiksIEJhY2tkcm9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gT2ZmY2FudmFzO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuT2ZmY2FudmFzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRrO1xuT2ZmY2FudmFzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRrO1xuT2ZmY2FudmFzLm9wZW5Db3VudCA9IDA7XG52YXIgT2ZmY2FudmFzJDEgPSBPZmZjYW52YXM7XG5cbnZhciBfZXhjbHVkZWQkaCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkaiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gT2ZmY2FudmFzQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkaCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnb2ZmY2FudmFzLWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuT2ZmY2FudmFzQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkajtcbk9mZmNhbnZhc0JvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGo7XG5cbnZhciBfZXhjbHVkZWQkZyA9IFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xvc2VcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInRvZ2dsZVwiLCBcIndyYXBUYWdcIl07XG52YXIgcHJvcFR5cGVzJGkgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGkgPSB7XG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnLFxuICB0YWc6ICdoNScsXG4gIHdyYXBUYWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBPZmZjYW52YXNIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGcpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ29mZmNhbnZhcy1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChXcmFwVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdvZmZjYW52YXMtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufVxuXG5PZmZjYW52YXNIZWFkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJGk7XG5PZmZjYW52YXNIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGk7XG5cbnZhciBfZXhjbHVkZWQkZiA9IFtcImNsYXNzTmFtZVwiLCBcImxpc3RDbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJzaXplXCIsIFwidGFnXCIsIFwibGlzdFRhZ1wiLCBcImFyaWEtbGFiZWxcIl07XG52YXIgcHJvcFR5cGVzJGggPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyBmb3IgbGlzdCAqL1xuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBNYWtlIHRoZSBQYWdpbmF0aW9uIGJpZ2dlciBvciBzbWFsbGVyICAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciBsaXN0IGNvbXBvbmVudCAqL1xuICBsaXN0VGFnOiB0YWdQcm9wVHlwZSxcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkaCA9IHtcbiAgdGFnOiAnbmF2JyxcbiAgbGlzdFRhZzogJ3VsJyxcbiAgJ2FyaWEtbGFiZWwnOiAncGFnaW5hdGlvbidcbn07XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb24ocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsaXN0Q2xhc3NOYW1lID0gcHJvcHMubGlzdENsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgTGlzdFRhZyA9IHByb3BzLmxpc3RUYWcsXG4gICAgICBsYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRmKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0obGlzdENsYXNzTmFtZSwgJ3BhZ2luYXRpb24nLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbXCJwYWdpbmF0aW9uLVwiICsgc2l6ZV0gPSAhIXNpemUsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTGlzdFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0pKSk7XG59XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJGg7XG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRoO1xuXG52YXIgX2V4Y2x1ZGVkJGUgPSBbXCJhY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJkaXNhYmxlZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZyA9IHtcbiAgLyoqIFNldCBpdGVtIGFzIGFjdGl2ZSAqL1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBpdGVtIGFzIGRpc2FibGVkICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRnID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncGFnZS1pdGVtJywge1xuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuUGFnaW5hdGlvbkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJGc7XG5QYWdpbmF0aW9uSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZztcblxudmFyIF9leGNsdWRlZCRkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibmV4dFwiLCBcInByZXZpb3VzXCIsIFwiZmlyc3RcIiwgXCJsYXN0XCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRmID0ge1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIHRvIG5leHQgYnV0dG9uIHRvIGFkZCBkZWZhdWx0IGFyaWEgbGFiZWwgYW5kIGljb24gKi9cbiAgbmV4dDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgdG8gcHJldmlvdXMgYnV0dG9uIHRvIGFkZCBkZWZhdWx0IGFyaWEgbGFiZWwgYW5kIGljb24gKi9cbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIHRvIGZpcnN0IGJ1dHRvbiB0byBhZGQgZGVmYXVsdCBhcmlhIGxhYmVsIGFuZCBpY29uICovXG4gIGZpcnN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCB0byBsYXN0IGJ1dHRvbiB0byBhZGQgZGVmYXVsdCBhcmlhIGxhYmVsIGFuZCBpY29uICovXG4gIGxhc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGYgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG5mdW5jdGlvbiBQYWdpbmF0aW9uTGluayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbmV4dCA9IHByb3BzLm5leHQsXG4gICAgICBwcmV2aW91cyA9IHByb3BzLnByZXZpb3VzLFxuICAgICAgZmlyc3QgPSBwcm9wcy5maXJzdCxcbiAgICAgIGxhc3QgPSBwcm9wcy5sYXN0LFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncGFnZS1saW5rJyksIGNzc01vZHVsZSk7XG4gIHZhciBkZWZhdWx0QXJpYUxhYmVsO1xuXG4gIGlmIChwcmV2aW91cykge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnUHJldmlvdXMnO1xuICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ05leHQnO1xuICB9IGVsc2UgaWYgKGZpcnN0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdGaXJzdCc7XG4gIH0gZWxzZSBpZiAobGFzdCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnTGFzdCc7XG4gIH1cblxuICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSB8fCBkZWZhdWx0QXJpYUxhYmVsO1xuICB2YXIgZGVmYXVsdENhcmV0O1xuXG4gIGlmIChwcmV2aW91cykge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx1MjAzOVwiO1xuICB9IGVsc2UgaWYgKG5leHQpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxcdTIwM0FcIjtcbiAgfSBlbHNlIGlmIChmaXJzdCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx4QUJcIjtcbiAgfSBlbHNlIGlmIChsYXN0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHhCQlwiO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKGNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIGlmICghYXR0cmlidXRlcy5ocmVmICYmIFRhZyA9PT0gJ2EnKSB7XG4gICAgVGFnID0gJ2J1dHRvbic7XG4gIH1cblxuICBpZiAocHJldmlvdXMgfHwgbmV4dCB8fCBmaXJzdCB8fCBsYXN0KSB7XG4gICAgY2hpbGRyZW4gPSBbLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAga2V5OiBcImNhcmV0XCJcbiAgICB9LCBjaGlsZHJlbiB8fCBkZWZhdWx0Q2FyZXQpLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJ2aXN1YWxseS1oaWRkZW5cIixcbiAgICAgIGtleTogXCJhcmlhTGFiZWxcIlxuICAgIH0sIGFyaWFMYWJlbCldO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxcbiAgfSksIGNoaWxkcmVuKTtcbn1cblxuUGFnaW5hdGlvbkxpbmsucHJvcFR5cGVzID0gcHJvcFR5cGVzJGY7XG5QYWdpbmF0aW9uTGluay5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZjtcblxuLyoqXG4gKiBUYWJDb250ZXh0XG4gKiB7XG4gKiAgYWN0aXZlVGFiSWQ6IFByb3BUeXBlcy5hbnlcbiAqIH1cbiAqL1xuXG52YXIgVGFiQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIHByb3BUeXBlcyRlID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmVUYWI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRlID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG52YXIgVGFiQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUYWJDb250ZW50LCBfQ29tcG9uZW50KTtcblxuICBUYWJDb250ZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVUYWI6IG5leHRQcm9wcy5hY3RpdmVUYWJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gVGFiQ29udGVudChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlVGFiOiBfdGhpcy5wcm9wcy5hY3RpdmVUYWJcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUYWJDb250ZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBUYWcgPSBfdGhpcyRwcm9wcy50YWc7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIE9iamVjdC5rZXlzKHByb3BUeXBlcyRlKSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1jb250ZW50JywgY2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhYkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGFjdGl2ZVRhYklkOiB0aGlzLnN0YXRlLmFjdGl2ZVRhYlxuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpO1xuICB9O1xuXG4gIHJldHVybiBUYWJDb250ZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVGFiQ29udGVudCQxID0gVGFiQ29udGVudDtcblRhYkNvbnRlbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzJGU7XG5UYWJDb250ZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRlO1xuXG52YXIgX2V4Y2x1ZGVkJGMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWJJZFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkZCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdGFiSWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYW55XG59O1xudmFyIGRlZmF1bHRQcm9wcyRkID0ge1xuICB0YWc6ICdkaXYnXG59O1xuZnVuY3Rpb24gVGFiUGFuZShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdGFiSWQgPSBwcm9wcy50YWJJZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGMpO1xuXG4gIHZhciBnZXRDbGFzc2VzID0gZnVuY3Rpb24gZ2V0Q2xhc3NlcyhhY3RpdmVUYWJJZCkge1xuICAgIHJldHVybiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ3RhYi1wYW5lJywgY2xhc3NOYW1lLCB7XG4gICAgICBhY3RpdmU6IHRhYklkID09PSBhY3RpdmVUYWJJZFxuICAgIH0pLCBjc3NNb2R1bGUpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgYWN0aXZlVGFiSWQgPSBfcmVmLmFjdGl2ZVRhYklkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgY2xhc3NOYW1lOiBnZXRDbGFzc2VzKGFjdGl2ZVRhYklkKVxuICAgIH0pKTtcbiAgfSk7XG59XG5UYWJQYW5lLnByb3BUeXBlcyA9IHByb3BUeXBlcyRkO1xuVGFiUGFuZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkZDtcblxudmFyIF9leGNsdWRlZCRiID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xvc2VDbGFzc05hbWVcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImNvbG9yXCIsIFwiaXNPcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0cmFuc2l0aW9uXCIsIFwiZmFkZVwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRjID0ge1xuICAvKiogUGFzcyBjaGlsZHJlbiBzbyB0aGlzIGNvbXBvbmVudCBjYW4gd3JhcCB0aGUgY2hpbGQgZWxlbWVudHMgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzIGZvciBjbG9zZSBidXR0b24gKi9cbiAgY2xvc2VDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBcmlhIGxhYmVsIGZvciBjbG9zZSBidXR0b24gKi9cbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgY29sb3Igb2YgYWxlcnQgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgY2xhc3NOYW1lIHdpdGggYSBuZXcgY2xhc3NOYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFRvZ2dsZSBmYWRlIGFuaW1hdGlvbiAqL1xuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcblxuICAvKiogQ29udHJvbCB2aXNpYmlsaXR5IHN0YXRlIG9mIEFsZXJ0ICovXG4gIGlzT3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogRnVuY3Rpb24gdG8gdG9nZ2xlIHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIFByb3BzIHRvIGJlIHBhc3NlZCB0byBgRmFkZWAgdG8gbW9kaWZ5IHRyYW5zaXRpb24gKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcylcbn07XG52YXIgZGVmYXVsdFByb3BzJGMgPSB7XG4gIGNvbG9yOiAnc3VjY2VzcycsXG4gIGlzT3BlbjogdHJ1ZSxcbiAgdGFnOiAnZGl2JyxcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZScsXG4gIGZhZGU6IHRydWUsXG4gIHRyYW5zaXRpb246IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHt9LCB7XG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxuICB9KVxufTtcblxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsb3NlQ2xhc3NOYW1lID0gcHJvcHMuY2xvc2VDbGFzc05hbWUsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlzT3BlbiA9IHByb3BzLmlzT3BlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0cmFuc2l0aW9uID0gcHJvcHMudHJhbnNpdGlvbixcbiAgICAgIGZhZGUgPSBwcm9wcy5mYWRlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FsZXJ0JywgXCJhbGVydC1cIiArIGNvbG9yLCB7XG4gICAgJ2FsZXJ0LWRpc21pc3NpYmxlJzogdG9nZ2xlXG4gIH0pLCBjc3NNb2R1bGUpO1xuICB2YXIgY2xvc2VDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdidG4tY2xvc2UnLCBjbG9zZUNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG5cbiAgdmFyIGFsZXJ0VHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRyYW5zaXRpb24pLCB7fSwge1xuICAgIGJhc2VDbGFzczogZmFkZSA/IHRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgfSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGYWRlLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgYWxlcnRUcmFuc2l0aW9uLCB7XG4gICAgdGFnOiBUYWcsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiaW5cIjogaXNPcGVuLFxuICAgIHJvbGU6IFwiYWxlcnRcIixcbiAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgfSksIHRvZ2dsZSA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGNsb3NlQ2xhc3NlcyxcbiAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWwsXG4gICAgb25DbGljazogdG9nZ2xlXG4gIH0pIDogbnVsbCwgY2hpbGRyZW4pO1xufVxuXG5BbGVydC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYztcbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRjO1xuXG52YXIgX2V4Y2x1ZGVkJGEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpc09wZW5cIiwgXCJjaGlsZHJlblwiLCBcInRyYW5zaXRpb25cIiwgXCJmYWRlXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJGIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGIgPSB7XG4gIGlzT3BlbjogdHJ1ZSxcbiAgdGFnOiAnZGl2JyxcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBUb2FzdChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgZmFkZSA9IHByb3BzLmZhZGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAndG9hc3QnKSwgY3NzTW9kdWxlKTtcblxuICB2YXIgdG9hc3RUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB0b2FzdFRyYW5zaXRpb24sIHtcbiAgICB0YWc6IFRhZyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJpblwiOiBpc09wZW4sXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICB9KSwgY2hpbGRyZW4pO1xufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkYjtcblRvYXN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRiO1xuXG52YXIgX2V4Y2x1ZGVkJDkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkYSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59O1xudmFyIGRlZmF1bHRQcm9wcyRhID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBUb2FzdEJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdC1ib2R5JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn1cblxuVG9hc3RCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRhO1xuVG9hc3RCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRhO1xuXG52YXIgX2V4Y2x1ZGVkJDggPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjaGlsZHJlblwiLCBcInRvZ2dsZVwiLCBcInRhZ1wiLCBcIndyYXBUYWdcIiwgXCJjbG9zZUFyaWFMYWJlbFwiLCBcImNsb3NlXCIsIFwidGFnQ2xhc3NOYW1lXCIsIFwiaWNvblwiXTtcbnZhciBwcm9wVHlwZXMkOSA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaWNvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoYXJDb2RlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSksXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdGFnQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkOSA9IHtcbiAgdGFnOiAnc3Ryb25nJyxcbiAgd3JhcFRhZzogJ2RpdicsXG4gIHRhZ0NsYXNzTmFtZTogJ21lLWF1dG8nLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJ1xufTtcblxuZnVuY3Rpb24gVG9hc3RIZWFkZXIocHJvcHMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uO1xuICB2YXIgaWNvbjtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICB0YWdDbGFzc05hbWUgPSBwcm9wcy50YWdDbGFzc05hbWUsXG4gICAgICBpY29uUHJvcCA9IHByb3BzLmljb24sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ4KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcblxuICBpZiAoIWNsb3NlICYmIHRvZ2dsZSkge1xuICAgIGNsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiB0b2dnbGUsXG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnYnRuLWNsb3NlJywgY3NzTW9kdWxlKSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBpY29uID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKFwicm91bmRlZCB0ZXh0LVwiICsgaWNvblByb3ApLFxuICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgIGhlaWdodDogXCIyMFwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcbiAgICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgICAgcm9sZTogXCJpbWdcIlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICB9KSk7XG4gIH0gZWxzZSBpZiAoaWNvblByb3ApIHtcbiAgICBpY29uID0gaWNvblByb3A7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBpY29uLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0odGFnQ2xhc3NOYW1lLCB7XG4gICAgICAnbXMtMic6IGljb24gIT0gbnVsbFxuICAgIH0pLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufVxuXG5Ub2FzdEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkOTtcblRvYXN0SGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ5O1xuXG52YXIgX2V4Y2x1ZGVkJDcgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJhY3RpdmVcIiwgXCJkaXNhYmxlZFwiLCBcImFjdGlvblwiLCBcImNvbG9yXCJdO1xudmFyIHByb3BUeXBlcyQ4ID0ge1xuICAvKiogQWRkIGFjdGlvbiBwcm9wIHRvIGdpdmUgZWZmZWN0cyB3aGlsZSBob3ZlcmluZyBvdmVyIGVsZW1lbnQgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBhY3RpdmUgcHJvcCB0byBtYWtlIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBhY3RpdmUgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBBZGQgYmFja2dyb3VuZCBjb2xvdXIgdG8gdGhlIGxpc3QgaXRlbSAqL1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIE1ha2UgdGhlIGxpc3QgaXRlbSBhcHBlYXIgZGlzYWJsZWQgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDggPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxudmFyIGhhbmRsZURpc2FibGVkT25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURpc2FibGVkT25DbGljayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmZ1bmN0aW9uIExpc3RHcm91cEl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCBkaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiBmYWxzZSwgYWN0aW9uID8gJ2xpc3QtZ3JvdXAtaXRlbS1hY3Rpb24nIDogZmFsc2UsIGNvbG9yID8gXCJsaXN0LWdyb3VwLWl0ZW0tXCIgKyBjb2xvciA6IGZhbHNlLCAnbGlzdC1ncm91cC1pdGVtJyksIGNzc01vZHVsZSk7IC8vIFByZXZlbnQgY2xpY2sgZXZlbnQgd2hlbiBkaXNhYmxlZC5cblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBhdHRyaWJ1dGVzLm9uQ2xpY2sgPSBoYW5kbGVEaXNhYmxlZE9uQ2xpY2s7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5MaXN0R3JvdXBJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ4O1xuTGlzdEdyb3VwSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkODtcblxudmFyIF9leGNsdWRlZCQ2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQ3ID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQ3ID0ge1xuICB0YWc6ICdoNSdcbn07XG5cbmZ1bmN0aW9uIExpc3RHcm91cEl0ZW1IZWFkaW5nKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ2KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0taGVhZGluZycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5MaXN0R3JvdXBJdGVtSGVhZGluZy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNztcbkxpc3RHcm91cEl0ZW1IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ3O1xuXG52YXIgX2V4Y2x1ZGVkJDUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDYgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDYgPSB7XG4gIHRhZzogJ3AnXG59O1xuXG5mdW5jdGlvbiBMaXN0R3JvdXBJdGVtVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkNSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1ncm91cC1pdGVtLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTGlzdEdyb3VwSXRlbVRleHQucHJvcFR5cGVzID0gcHJvcFR5cGVzJDY7XG5MaXN0R3JvdXBJdGVtVGV4dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNjtcblxudmFyIF9leGNsdWRlZCQ0ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidHlwZVwiXTtcbnZhciBwcm9wVHlwZXMkNSA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogVHlwZSBvZiBsaXN0IGB1bnN0eWxlZGAgb3IgYGlubGluZWAgKi9cbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDUgPSB7XG4gIHRhZzogJ3VsJ1xufTtcbnZhciBMaXN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ0KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHR5cGUgPyBcImxpc3QtXCIgKyB0eXBlIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5MaXN0Lm5hbWUgPSAnTGlzdCc7XG5MaXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQ1O1xuTGlzdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkNTtcbnZhciBMaXN0JDEgPSBMaXN0O1xuXG52YXIgX2V4Y2x1ZGVkJDMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDQgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDQgPSB7XG4gIHRhZzogJ2xpJ1xufTtcbnZhciBMaXN0SW5saW5lSXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtaW5saW5lLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuTGlzdElubGluZUl0ZW0ubmFtZSA9ICdMaXN0SW5saW5lSXRlbSc7XG5MaXN0SW5saW5lSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNDtcbkxpc3RJbmxpbmVJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ0O1xudmFyIExpc3RJbmxpbmVJdGVtJDEgPSBMaXN0SW5saW5lSXRlbTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZEFsZXJ0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRBbGVydChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiB0cnVlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZEFsZXJ0LnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWxlcnQsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW4sXG4gICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlXG4gICAgfSwgdGhpcy5wcm9wcykpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRBbGVydDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIFVuY29udHJvbGxlZEFsZXJ0JDEgPSBVbmNvbnRyb2xsZWRBbGVydDtcblxudmFyIG9taXRLZXlzJDMgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b25Ecm9wZG93biwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59LCBCdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMpO1xuXG52YXIgb21pdEtleXMkMiA9IFsndG9nZ2xlRXZlbnRzJywgJ2RlZmF1bHRPcGVuJ107XG52YXIgcHJvcFR5cGVzJDMgPSB7XG4gIC8qKiBzZXQgaWYgQ29sbGFwc2UgaXMgb3BlbiBieSBkZWZhdWx0ICovXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIHRyaWdnZXIgdG9nZ2xlICovXG4gIHRvZ2dsZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqIEV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyIHRoZSB0b2dnbGUgKi9cbiAgdG9nZ2xlRXZlbnRzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcpXG59O1xudmFyIGRlZmF1bHRQcm9wcyQzID0ge1xuICB0b2dnbGVFdmVudHM6IGRlZmF1bHRUb2dnbGVFdmVudHNcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRDb2xsYXBzZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRDb2xsYXBzZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQ29sbGFwc2UocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy50b2dnbGVycyA9IG51bGw7XG4gICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRDb2xsYXBzZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50b2dnbGVycyA9IGZpbmRET01FbGVtZW50cyh0aGlzLnByb3BzLnRvZ2dsZXIpO1xuXG4gICAgaWYgKHRoaXMudG9nZ2xlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyh0aGlzLnRvZ2dsZXJzLCB0aGlzLnRvZ2dsZSwgdGhpcy5wcm9wcy50b2dnbGVFdmVudHMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy50b2dnbGVycy5sZW5ndGggJiYgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgaXNPcGVuID0gX3JlZi5pc09wZW47XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFpc09wZW5cbiAgICAgIH07XG4gICAgfSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDb2xsYXBzZSQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuXG4gICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0S2V5cyQyKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRDb2xsYXBzZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVW5jb250cm9sbGVkQ29sbGFwc2UucHJvcFR5cGVzID0gcHJvcFR5cGVzJDM7XG5VbmNvbnRyb2xsZWRDb2xsYXBzZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMztcbnZhciBVbmNvbnRyb2xsZWRDb2xsYXBzZSQxID0gVW5jb250cm9sbGVkQ29sbGFwc2U7XG5cbnZhciBvbWl0S2V5cyQxID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkRHJvcGRvd24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZERyb3Bkb3duKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZERyb3Bkb3duLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMyLnByb3BzLm9uVG9nZ2xlKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vblRvZ2dsZShlLCBfdGhpczIuc3RhdGUuaXNPcGVuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDEpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZERyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkRHJvcGRvd24ucHJvcFR5cGVzID0gX29iamVjdFNwcmVhZDIoe1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBvblRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59LCBEcm9wZG93biQxLnByb3BUeXBlcyk7XG5cbnZhciBvbWl0S2V5cyA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkVG9vbHRpcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkVG9vbHRpcChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRUb29sdGlwLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVG9vbHRpcCwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzKSkpO1xuICB9O1xuXG4gIHJldHVybiBVbmNvbnRyb2xsZWRUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuVW5jb250cm9sbGVkVG9vbHRpcC5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIFRvb2x0aXAucHJvcFR5cGVzKTtcblxudmFyIF9leGNsdWRlZCQyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidHlwZVwiLCBcInNpemVcIiwgXCJjb2xvclwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQyID0ge1xuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIENoYW5nZSBhbmltYXRpb24gb2Ygc3Bpbm5lciAqL1xuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnYm9yZGVyJywgJ2dyb3cnXSksXG5cbiAgLyoqIENoYW5nZSBzaXplIG9mIHNwaW5uZXIgKi9cbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3NtJ10pLFxuXG4gIC8qKiBDaGFuZ2UgY29sb3Igb2Ygc3Bpbm5lciAqL1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3N1Y2Nlc3MnLCAnZGFuZ2VyJywgJ3dhcm5pbmcnLCAnaW5mbycsICdsaWdodCcsICdkYXJrJ10pLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogUGFzcyBjaGlsZHJlbiBzbyB0aGlzIGNvbXBvbmVudCBjYW4gd3JhcCB0aGUgY2hpbGQgZWxlbWVudHMgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQyID0ge1xuICB0YWc6ICdkaXYnLFxuICB0eXBlOiAnYm9yZGVyJyxcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTtcblxuZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gXCJzcGlubmVyLVwiICsgdHlwZSArIFwiLVwiICsgc2l6ZSA6IGZhbHNlLCBcInNwaW5uZXItXCIgKyB0eXBlLCBjb2xvciA/IFwidGV4dC1cIiArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwic3RhdHVzXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ3Zpc3VhbGx5LWhpZGRlbicsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pKTtcbn1cblxuU3Bpbm5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMjtcblNwaW5uZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDI7XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNvbG9yXCIsIFwiaW5uZXJSZWZcIiwgXCJ0YWdcIiwgXCJhbmltYXRpb25cIiwgXCJzaXplXCIsIFwid2lkdGhzXCJdO1xuXG52YXIgcHJvcFR5cGVzJDEgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQ29sLnByb3BUeXBlcyksIHt9LCB7XG4gIC8qKiBBZGQgY3VzdG9tIGNvbG9yIHRvIHRoZSBwbGFjZWhvbGRlciAqL1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEFkZCBjdXN0b20gdGFnLiAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBBcHBseSBlaXRoZXIgYGdsb3dgIG9yIGB3YXZlYCBhbmltYXRpb24uICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ2dsb3cnLCAnd2F2ZSddKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuXG4gIC8qKiBNYWtlIHRoZSBzaXplIGxhcmdlciAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnbGcnLCAnc20nLCAneHMnXSlcbn0pO1xuXG52YXIgZGVmYXVsdFByb3BzJDEgPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG5mdW5jdGlvbiBQbGFjZWhvbGRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDEpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgY29sQ2xhc3NlcywgJ3BsYWNlaG9sZGVyJyArIChhbmltYXRpb24gPyAnLScgKyBhbmltYXRpb24gOiAnJyksIHNpemUgPyAncGxhY2Vob2xkZXItJyArIHNpemUgOiBmYWxzZSwgY29sb3IgPyAnYmctJyArIGNvbG9yIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn1cblxuUGxhY2Vob2xkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE7XG5QbGFjZWhvbGRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTtcblxudmFyIF9leGNsdWRlZCA9IFtcImNzc01vZHVsZVwiLCBcImNsYXNzTmFtZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMgPSB7XG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG91dGxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIHRhZzogQnV0dG9uXG59O1xuXG5mdW5jdGlvbiBQbGFjZWhvbGRlckJ1dHRvbihwcm9wcykge1xuICB2YXIgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlKSxcbiAgICAgIG1vZGlmaWVkQXR0cmlidXRlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmF0dHJpYnV0ZXMsXG4gICAgICBjb2xDbGFzc2VzID0gX2dldENvbHVtbkNsYXNzZXMuY29sQ2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncGxhY2Vob2xkZXInLCBjbGFzc05hbWUsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBkaXNhYmxlZDogdHJ1ZVxuICB9KSk7XG59XG5cblBsYWNlaG9sZGVyQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblBsYWNlaG9sZGVyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnIHx8IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICB2YXIgQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICBkZXRhaWw6IG51bGxcbiAgICB9O1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIHJldHVybiBldnQ7XG4gIH07XG5cbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIE9iamVjdC52YWx1ZXMgPT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICB2YXIgdmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKE8pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBPW2tleV07XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LnZhbHVlcyA9IHZhbHVlcztcbn0pKCk7XG5cbnZhciBwb2x5ZmlsbCA9IHtcbiAgX19wcm90b19fOiBudWxsXG59O1xuXG5leHBvcnRzLkFjY29yZGlvbiA9IEFjY29yZGlvbjtcbmV4cG9ydHMuQWNjb3JkaW9uQm9keSA9IEFjY29yZGlvbkJvZHk7XG5leHBvcnRzLkFjY29yZGlvbkNvbnRleHQgPSBBY2NvcmRpb25Db250ZXh0O1xuZXhwb3J0cy5BY2NvcmRpb25IZWFkZXIgPSBBY2NvcmRpb25IZWFkZXI7XG5leHBvcnRzLkFjY29yZGlvbkl0ZW0gPSBBY2NvcmRpb25JdGVtO1xuZXhwb3J0cy5BbGVydCA9IEFsZXJ0O1xuZXhwb3J0cy5CYWRnZSA9IEJhZGdlO1xuZXhwb3J0cy5CcmVhZGNydW1iID0gQnJlYWRjcnVtYjtcbmV4cG9ydHMuQnJlYWRjcnVtYkl0ZW0gPSBCcmVhZGNydW1iSXRlbTtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuZXhwb3J0cy5CdXR0b25Ecm9wZG93biA9IEJ1dHRvbkRyb3Bkb3duO1xuZXhwb3J0cy5CdXR0b25Hcm91cCA9IEJ1dHRvbkdyb3VwO1xuZXhwb3J0cy5CdXR0b25Ub2dnbGUgPSBCdXR0b25Ub2dnbGU7XG5leHBvcnRzLkJ1dHRvblRvb2xiYXIgPSBCdXR0b25Ub29sYmFyO1xuZXhwb3J0cy5DYXJkID0gQ2FyZDtcbmV4cG9ydHMuQ2FyZEJvZHkgPSBDYXJkQm9keTtcbmV4cG9ydHMuQ2FyZENvbHVtbnMgPSBDYXJkQ29sdW1ucztcbmV4cG9ydHMuQ2FyZERlY2sgPSBDYXJkRGVjaztcbmV4cG9ydHMuQ2FyZEZvb3RlciA9IENhcmRGb290ZXI7XG5leHBvcnRzLkNhcmRHcm91cCA9IENhcmRHcm91cDtcbmV4cG9ydHMuQ2FyZEhlYWRlciA9IENhcmRIZWFkZXI7XG5leHBvcnRzLkNhcmRJbWcgPSBDYXJkSW1nO1xuZXhwb3J0cy5DYXJkSW1nT3ZlcmxheSA9IENhcmRJbWdPdmVybGF5O1xuZXhwb3J0cy5DYXJkTGluayA9IENhcmRMaW5rO1xuZXhwb3J0cy5DYXJkU3VidGl0bGUgPSBDYXJkU3VidGl0bGU7XG5leHBvcnRzLkNhcmRUZXh0ID0gQ2FyZFRleHQ7XG5leHBvcnRzLkNhcmRUaXRsZSA9IENhcmRUaXRsZTtcbmV4cG9ydHMuQ2Fyb3VzZWwgPSBDYXJvdXNlbCQxO1xuZXhwb3J0cy5DYXJvdXNlbENhcHRpb24gPSBDYXJvdXNlbENhcHRpb247XG5leHBvcnRzLkNhcm91c2VsQ29udHJvbCA9IENhcm91c2VsQ29udHJvbDtcbmV4cG9ydHMuQ2Fyb3VzZWxJbmRpY2F0b3JzID0gQ2Fyb3VzZWxJbmRpY2F0b3JzO1xuZXhwb3J0cy5DYXJvdXNlbEl0ZW0gPSBDYXJvdXNlbEl0ZW0kMTtcbmV4cG9ydHMuQ2xvc2VCdXR0b24gPSBDbG9zZUJ1dHRvbjtcbmV4cG9ydHMuQ29sID0gQ29sO1xuZXhwb3J0cy5Db2xsYXBzZSA9IENvbGxhcHNlJDE7XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lcjtcbmV4cG9ydHMuRHJvcGRvd24gPSBEcm9wZG93biQxO1xuZXhwb3J0cy5Ecm9wZG93bkNvbnRleHQgPSBEcm9wZG93bkNvbnRleHQ7XG5leHBvcnRzLkRyb3Bkb3duSXRlbSA9IERyb3Bkb3duSXRlbSQxO1xuZXhwb3J0cy5Ecm9wZG93bk1lbnUgPSBEcm9wZG93bk1lbnUkMTtcbmV4cG9ydHMuRHJvcGRvd25Ub2dnbGUgPSBEcm9wZG93blRvZ2dsZSQxO1xuZXhwb3J0cy5GYWRlID0gRmFkZTtcbmV4cG9ydHMuRm9ybSA9IEZvcm0kMTtcbmV4cG9ydHMuRm9ybUZlZWRiYWNrID0gRm9ybUZlZWRiYWNrO1xuZXhwb3J0cy5Gb3JtR3JvdXAgPSBGb3JtR3JvdXA7XG5leHBvcnRzLkZvcm1UZXh0ID0gRm9ybVRleHQ7XG5leHBvcnRzLklucHV0ID0gSW5wdXQkMTtcbmV4cG9ydHMuSW5wdXRHcm91cCA9IElucHV0R3JvdXA7XG5leHBvcnRzLklucHV0R3JvdXBUZXh0ID0gSW5wdXRHcm91cFRleHQ7XG5leHBvcnRzLkxhYmVsID0gTGFiZWw7XG5leHBvcnRzLkxpc3QgPSBMaXN0JDE7XG5leHBvcnRzLkxpc3RHcm91cCA9IExpc3RHcm91cDtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbSA9IExpc3RHcm91cEl0ZW07XG5leHBvcnRzLkxpc3RHcm91cEl0ZW1IZWFkaW5nID0gTGlzdEdyb3VwSXRlbUhlYWRpbmc7XG5leHBvcnRzLkxpc3RHcm91cEl0ZW1UZXh0ID0gTGlzdEdyb3VwSXRlbVRleHQ7XG5leHBvcnRzLkxpc3RJbmxpbmVJdGVtID0gTGlzdElubGluZUl0ZW0kMTtcbmV4cG9ydHMuTWVkaWEgPSBNZWRpYTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbCQxO1xuZXhwb3J0cy5Nb2RhbEJvZHkgPSBNb2RhbEJvZHk7XG5leHBvcnRzLk1vZGFsRm9vdGVyID0gTW9kYWxGb290ZXI7XG5leHBvcnRzLk1vZGFsSGVhZGVyID0gTW9kYWxIZWFkZXI7XG5leHBvcnRzLk5hdiA9IE5hdjtcbmV4cG9ydHMuTmF2SXRlbSA9IE5hdkl0ZW07XG5leHBvcnRzLk5hdkxpbmsgPSBOYXZMaW5rJDE7XG5leHBvcnRzLk5hdmJhciA9IE5hdmJhcjtcbmV4cG9ydHMuTmF2YmFyQnJhbmQgPSBOYXZiYXJCcmFuZDtcbmV4cG9ydHMuTmF2YmFyVGV4dCA9IE5hdmJhclRleHQ7XG5leHBvcnRzLk5hdmJhclRvZ2dsZXIgPSBOYXZiYXJUb2dnbGVyO1xuZXhwb3J0cy5PZmZjYW52YXMgPSBPZmZjYW52YXMkMTtcbmV4cG9ydHMuT2ZmY2FudmFzQm9keSA9IE9mZmNhbnZhc0JvZHk7XG5leHBvcnRzLk9mZmNhbnZhc0hlYWRlciA9IE9mZmNhbnZhc0hlYWRlcjtcbmV4cG9ydHMuUGFnaW5hdGlvbiA9IFBhZ2luYXRpb247XG5leHBvcnRzLlBhZ2luYXRpb25JdGVtID0gUGFnaW5hdGlvbkl0ZW07XG5leHBvcnRzLlBhZ2luYXRpb25MaW5rID0gUGFnaW5hdGlvbkxpbms7XG5leHBvcnRzLlBsYWNlaG9sZGVyID0gUGxhY2Vob2xkZXI7XG5leHBvcnRzLlBsYWNlaG9sZGVyQnV0dG9uID0gUGxhY2Vob2xkZXJCdXR0b247XG5leHBvcnRzLlBvbHlmaWxsID0gcG9seWZpbGw7XG5leHBvcnRzLlBvcG92ZXIgPSBQb3BvdmVyO1xuZXhwb3J0cy5Qb3BvdmVyQm9keSA9IFBvcG92ZXJCb2R5O1xuZXhwb3J0cy5Qb3BvdmVySGVhZGVyID0gUG9wb3ZlckhlYWRlcjtcbmV4cG9ydHMuUG9wcGVyQ29udGVudCA9IFBvcHBlckNvbnRlbnQkMTtcbmV4cG9ydHMuUG9wcGVyVGFyZ2V0SGVscGVyID0gUG9wcGVyVGFyZ2V0SGVscGVyO1xuZXhwb3J0cy5Qcm9ncmVzcyA9IFByb2dyZXNzO1xuZXhwb3J0cy5Sb3cgPSBSb3c7XG5leHBvcnRzLlNwaW5uZXIgPSBTcGlubmVyO1xuZXhwb3J0cy5UYWJDb250ZW50ID0gVGFiQ29udGVudCQxO1xuZXhwb3J0cy5UYWJQYW5lID0gVGFiUGFuZTtcbmV4cG9ydHMuVGFibGUgPSBUYWJsZTtcbmV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbmV4cG9ydHMuVG9hc3RCb2R5ID0gVG9hc3RCb2R5O1xuZXhwb3J0cy5Ub2FzdEhlYWRlciA9IFRvYXN0SGVhZGVyO1xuZXhwb3J0cy5Ub29sdGlwID0gVG9vbHRpcDtcbmV4cG9ydHMuVW5jb250cm9sbGVkQWNjb3JkaW9uID0gVW5jb250cm9sbGVkQWNjb3JkaW9uO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRBbGVydCA9IFVuY29udHJvbGxlZEFsZXJ0JDE7XG5leHBvcnRzLlVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duID0gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd247XG5leHBvcnRzLlVuY29udHJvbGxlZENhcm91c2VsID0gVW5jb250cm9sbGVkQ2Fyb3VzZWwkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQ29sbGFwc2UgPSBVbmNvbnRyb2xsZWRDb2xsYXBzZSQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWREcm9wZG93biA9IFVuY29udHJvbGxlZERyb3Bkb3duO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRQb3BvdmVyID0gVW5jb250cm9sbGVkUG9wb3ZlcjtcbmV4cG9ydHMuVW5jb250cm9sbGVkVG9vbHRpcCA9IFVuY29udHJvbGxlZFRvb2x0aXA7XG5leHBvcnRzLlV0aWwgPSB1dGlscztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0c3RyYXAuY2pzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCzjgIB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB3aXRoRGF0YSBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayBcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuMC4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWFwb2xsb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=