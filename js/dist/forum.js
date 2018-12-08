module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components.js":
/*!*********************************!*\
  !*** ./src/forum/components.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  common: {
    Button: {},
    Separator: {}
  },
  forum: {
    CommentPost: {
      content: 'view',
      headerItems: 'ItemList'
    },
    Composer: {
      view: 'view'
    },
    ComposerBody: {
      view: 'view',
      headerItems: 'ItemList'
    },
    ComposerButton: {},
    DiscussionComposer: {
      headerItems: 'ItemList'
    },
    DiscussionHero: {
      view: 'view',
      items: 'ItemList'
    },
    DiscussionList: {
      view: 'view'
    },
    DiscussionListItem: {
      view: 'view',
      infoItems: 'ItemList'
    },
    DiscussionPage: {
      view: 'view',
      sidebarItems: 'ItemList'
    },
    DiscussionRenamedNotification: {
      content: 'view'
    },
    HeaderPrimary: {
      view: 'view',
      items: 'ItemList'
    },
    HeaderSecondary: {
      view: 'view',
      items: 'ItemList'
    },
    IndexPage: {
      view: 'view',
      hero: 'view',
      sidebarItems: 'ItemList',
      //navItems: 'ItemList',
      viewItems: 'ItemList',
      actionItems: 'ItemList'
    },
    LogInModal: {
      title: 'view',
      content: 'view',
      body: 'view',
      fields: 'ItemList',
      footer: 'view'
    },
    LogInButton: {},
    LogInButtons: {
      view: 'view',
      items: 'ItemList'
    },
    NotificationsDropdown: {
      getButton: 'view',
      getButtonContent: 'view',
      getMenu: 'view'
    },
    NotificationsPage: {
      view: 'view'
    },

    /*Post: {
        view: 'view',
        content: 'view',
        actionItems: 'ItemList',
        footerItems: 'ItemList',
    },*/
    PostEdited: {
      view: 'view'
    },
    PostMeta: {
      view: 'view'
    },
    PostPreview: {
      view: 'view'
    },
    PostStream: {
      view: 'view'
    },
    PostStreamScrubber: {
      view: 'view'
    },
    PostUser: {
      view: 'view'
    },
    PostsUserPage: {
      content: 'view'
    },
    RenameDiscussionModal: {
      title: 'view',
      content: 'view'
    },
    ReplyComposer: {
      headerItems: 'ItemList'
    },
    ReplyPlaceholder: {
      view: 'view'
    },
    Search: {
      view: 'view' //sourceItems: 'ItemList',

    },
    //SearchSource
    SessionDropdown: {
      view: 'view',
      items: 'ItemList'
    },
    SettingsPage: {
      content: 'view',
      settingsItems: 'ItemList',
      accountItems: 'ItemList',
      notificationsItems: 'ItemList',
      privacyItems: 'ItemList'
    },
    SignUpModal: {
      title: 'view',
      content: 'view',
      body: 'view',
      fields: 'ItemList',
      footer: 'view'
    },
    TerminalPost: {
      view: 'view'
    },
    TextEditor: {
      view: 'view',
      controlItems: 'ItemList',
      toolbarItems: 'ItemList'
    },
    TextEditorButton: {},
    UserCard: {
      view: 'view',
      infoItems: 'ItemList'
    },
    UserPage: {
      //view: 'view',
      content: 'view',
      sidebarItems: 'ItemList' //navItems: 'ItemList',

    },
    //UsersSearchSource
    WelcomeHero: {
      view: 'view'
    }
  },
  admin: {}
});

/***/ }),

/***/ "./src/forum/components/HowToUseModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/HowToUseModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HowToUseModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);



var HowToUseModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HowToUseModal, _Modal);

  function HowToUseModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = HowToUseModal.prototype;

  _proto.title = function title() {
    return 'How to Use';
  };

  _proto.content = function content() {
    return [m('.Modal-body', [m('p', 'Here\'s how you can extend ' + this.props.className + '.' + this.props.methodName + ':'), m('pre', this.code())])];
  };

  _proto.code = function code() {
    switch (this.props.methodType) {
      case 'ItemList':
        return 'import {extend} from \'flarum/extend\';\n' + 'import ' + this.props.className + ' from \'flarum/components/' + this.props.className + '\';\n' + '\n' + 'extend(' + this.props.className + '.prototype, \'' + this.props.methodName + '\', items => {\n' + '    items.add(\'example\', m(\'.example\', \'Hello World\'));\n' + '});';

      case 'view':
        return 'import {override} from \'flarum/extend\';\n' + 'import ' + this.props.className + ' from \'flarum/components/' + this.props.className + '\';\n' + '\n' + 'override(' + this.props.className + '.prototype, \'' + this.props.methodName + '\', original => {\n' + '    return m(\'.wrapper\', original());\n' + '});';
    }
  };

  return HowToUseModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/forum/components.js");
/* harmony import */ var _components_HowToUseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HowToUseModal */ "./src/forum/components/HowToUseModal.js");




flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('migratetoflarum-learn', function () {
  ['forum', 'admin'].forEach(function (stack) {
    Object.keys(_components__WEBPACK_IMPORTED_MODULE_2__["default"][stack]).forEach(function (className) {
      Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum.core.compat['components/' + className].prototype, 'view', function (original) {
        return m('.MTFLearnWrap.MTFLearnClass', [m('.MTFLearnWrapLabel', {
          onclick: function onclick() {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_HowToUseModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
              className: className,
              methodName: 'view',
              methodType: 'view'
            }));
          }
        }, className + '.view'), m('.MTFLearnWrapView', original())]);
      });
      Object.keys(_components__WEBPACK_IMPORTED_MODULE_2__["default"][stack][className]).forEach(function (methodName) {
        if (methodName === 'view') {
          return;
        }

        var methodType = _components__WEBPACK_IMPORTED_MODULE_2__["default"][stack][className][methodName];

        if (methodType === 'view') {
          Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum.core.compat['components/' + className].prototype, methodName, function (original) {
            return m('.MTFLearnWrap' + (methodName === 'view' ? '.MTFLearnClass' : '.MTFLearnMethod'), [m('.MTFLearnWrapLabel', {
              onclick: function onclick() {
                flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_HowToUseModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
                  className: className,
                  methodName: methodName,
                  methodType: methodType
                }));
              }
            }, className + '.' + methodName), m('.MTFLearnWrapView', original())]);
          });
        } else if (methodType === 'ItemList') {
          Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum.core.compat['components/' + className].prototype, methodName, function (items) {
            ['start', 'end'].forEach(function (place) {
              items.add('mtf-' + place, m('.MTFLearnListItem', {
                onclick: function onclick() {
                  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_HowToUseModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    className: className,
                    methodName: methodName,
                    methodType: methodType
                  }));
                }
              }, className + '.' + methodName), place === 'start' ? 1000 : -1000);
            });
          });
        }
      });
    });
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map