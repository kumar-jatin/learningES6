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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DELIMETER = ', ';
var NO_OF_TRAIL_CHARACTERS = 2;
var START_INDEX = 0;

var ObjectFormatter = function () {
    function ObjectFormatter() {
        _classCallCheck(this, ObjectFormatter);
    }

    _createClass(ObjectFormatter, null, [{
        key: 'format',
        value: function format(obj) {
            var formattedMessage = "";

            if (obj) {
                for (var property in obj) {
                    var validation = obj[property] && _typeof(obj[property] !== 'function');

                    if (validation) {
                        formattedMessage += '' + obj[property] + DELIMETER;
                    }
                }

                if (formattedMessage.length > NO_OF_TRAIL_CHARACTERS) {
                    formattedMessage = formattedMessage.substr(START_INDEX, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
                }
            }

            return formattedMessage;
        }
    }]);

    return ObjectFormatter;
}();

exports.ObjectFormatter = ObjectFormatter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InternetCustomer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _customer = __webpack_require__(3);

var _formatutils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternetCustomer = function (_Customer) {
    _inherits(InternetCustomer, _Customer);

    function InternetCustomer(id, name, address, credit, status, blogUrl) {
        _classCallCheck(this, InternetCustomer);

        var _this = _possibleConstructorReturn(this, (InternetCustomer.__proto__ || Object.getPrototypeOf(InternetCustomer)).apply(this, arguments));

        _this.blogUrl = blogUrl;
        return _this;
    }

    _createClass(InternetCustomer, [{
        key: 'format',
        value: function format() {
            return _formatutils.ObjectFormatter.format(this).toUpperCase();
        }
    }]);

    return InternetCustomer;
}(_customer.Customer);

exports.InternetCustomer = InternetCustomer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _internetcustomer = __webpack_require__(1);

var customer = new _internetcustomer.InternetCustomer(10, "Jatin", "Gurgaon", 10000, true, "http://jatin.myblog.com");

console.log(customer.format());
console.log(customer instanceof _internetcustomer.InternetCustomer);

var customerCSVString = '10,JK,India,1000,true';
var anotherCustomer = _internetcustomer.InternetCustomer.createCustomer(customerCSVString);

console.log(anotherCustomer.format());

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Customer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _formatutils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COL_SEPARATOR = ",";

var Customer = function () {
    function Customer(id, name, address, credit, status) {
        _classCallCheck(this, Customer);

        var _arguments = Array.prototype.slice.call(arguments);

        this.id = _arguments[0];
        this.name = _arguments[1];
        this.address = _arguments[2];
        this.credit = _arguments[3];
        this.status = _arguments[4];
    }

    _createClass(Customer, [{
        key: "format",
        value: function format() {
            return _formatutils.ObjectFormatter.format(this);
        }
    }], [{
        key: "createCustomer",
        value: function createCustomer(csvString) {
            var customer = null;

            if (csvString) {
                var splittedString = csvString.split(COL_SEPARATOR);

                customer = new (Function.prototype.bind.apply(Customer, [null].concat(_toConsumableArray(splittedString))))();
            }

            return customer;
        }
    }]);

    return Customer;
}();

exports.Customer = Customer;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map