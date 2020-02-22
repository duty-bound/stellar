/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialize_stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize-stars */ "./src/initialize-stars.js");
// lighten up front rays
// write test for util functions


var init = function init() {
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.background = 'RGB(40, 40, 50)';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.strokeStyle = 'RGB(100, 100, 100)';
  ctx.lineWidth = 1;
  var a = canvas.width * 0.75 / 2;
  var b = canvas.height * 0.75 / 2;
  var numberOfStars = 100;
  var stars;
  var count = 0;
  var drawingFrequency = 5; // the 'increment' constant in 'initialize-stars.js' is fundamental in getting the right animation speed

  Object(_initialize_stars__WEBPACK_IMPORTED_MODULE_0__["initializeStars"])(numberOfStars, canvas.width, canvas.height).then(function (data) {
    return stars = data;
  }).then(function () {
    return gameLoop();
  });

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    if (count % drawingFrequency === 0) {
      ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
      var c = 0;

      for (var i = 0; i < stars.length; i++) {
        ctx.fillStyle = stars[i].color;
        c = stars[i].currentPosition;
        ctx.fillRect(stars[i].trajectory[c].x, stars[i].trajectory[c].y, 3, 3);
        ctx.beginPath();
        ctx.moveTo(stars[i].trajectory[c].x + 2, stars[i].trajectory[c].y);
        ctx.lineTo(stars[i].trajectory[c].x + canvas.height * 2 * Math.cos(Math.PI / 3), stars[i].trajectory[c].y - canvas.height * 4 * Math.sin(Math.PI / 3));
        ctx.stroke();
        stars[i].currentPosition++;
        if (c === stars[i].trajectory.length - 1) stars[i].currentPosition = 0;
      }
    }

    count++;
  }
};

document.addEventListener("DOMContentLoaded", init, false);

/***/ }),

/***/ "./src/initialize-stars.js":
/*!*********************************!*\
  !*** ./src/initialize-stars.js ***!
  \*********************************/
/*! exports provided: initializeStars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStars", function() { return initializeStars; });
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ "./src/star.js");
/* harmony import */ var _util_get_trajectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/get-trajectory */ "./src/util/get-trajectory.js");
/* harmony import */ var _util_get_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/get-random */ "./src/util/get-random.js");



var initializeStars = function initializeStars(n, width, height) {
  var p = new Promise(function (resolve) {
    var w = width / 2;
    var h = height / 2;
    var stars = [];
    var color;
    var a = 0;
    var b = 0;
    var increment = 0.0005; // this determines how many points the trajectory will have. It intrinsically affects the animation speed

    var currentPosition = 0;

    for (var i = 0; i < n; i++) {
      color = "RGB(".concat(Object(_util_get_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(0, 255), ", ").concat(Object(_util_get_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(0, 255), ", ").concat(Object(_util_get_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(0, 255), ")");
      a = Object(_util_get_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(100, w);
      b = a * w / h;
      currentPosition = Object(_util_get_random__WEBPACK_IMPORTED_MODULE_2__["getRandom"])(0, 2 / increment);
      stars.push(new _star__WEBPACK_IMPORTED_MODULE_0__["Star"](color, Object(_util_get_trajectory__WEBPACK_IMPORTED_MODULE_1__["getTrajectory"])(a, b, increment), currentPosition, true));
    }

    resolve(stars);
  });
  return p;
};

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! exports provided: Star */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Star = function Star(color, trajectory, currentPosition) {
  _classCallCheck(this, Star);

  this.color = color;
  this.trajectory = trajectory;
  this.currentPosition = currentPosition;
};

/***/ }),

/***/ "./src/util/get-random.js":
/*!********************************!*\
  !*** ./src/util/get-random.js ***!
  \********************************/
/*! exports provided: getRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
var getRandom = function getRandom(min, max) {
  return min + Math.floor(Math.random() * Math.floor(max));
};

/***/ }),

/***/ "./src/util/get-trajectory.js":
/*!************************************!*\
  !*** ./src/util/get-trajectory.js ***!
  \************************************/
/*! exports provided: getTrajectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrajectory", function() { return getTrajectory; });
var getTrajectory = function getTrajectory(a, b, increment) {
  var x = 0;
  var y = 0;
  var trajectory = [];

  for (var i = 0; i < 2; i += increment) {
    x = a * b / Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2) * Math.pow(Math.tan(i * Math.PI), 2));
    y = Math.sqrt(Math.pow(b, 2) * (1 - Math.pow(x, 2) / Math.pow(a, 2)));

    if (i >= 0.5 && i < 1.0) {
      x *= -1;
    } else if (i >= 1.0 && i < 1.5) {
      x *= -1;
      y *= -1;
    } else if (i >= 1.5 && i < 2.0) {
      y *= -1;
    }

    trajectory.push({
      x: x,
      y: y
    });
  }

  return trajectory;
};

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map