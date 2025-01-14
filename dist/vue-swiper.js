(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSwiper"] = factory();
	else
		root["VueSwiper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\vue-swiper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4e3e4386/vue-swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/less-loader/index.js!./vue-swiper.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/less-loader/index.js!./vue-swiper.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".swiper {\n  position: relative;\n  overflow: hidden;\n}\n.swiper .swiper-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0ms ease;\n  transition: all 0ms ease;\n}\n.swiper .swiper-wrap > div {\n  overflow: hidden;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper.horizontal .swiper-wrap {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.swiper.vertical .swiper-wrap {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.swiper .swiper-pagination {\n  position: absolute;\n}\n.swiper .swiper-pagination .swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #000000;\n  opacity: .2;\n  -webkit-transition: all .5s ease;\n  transition: all .5s ease;\n}\n.swiper .swiper-pagination .swiper-pagination-bullet.active {\n  background: #007aff;\n  opacity: 1;\n}\n.swiper.vertical .swiper-pagination {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n.swiper.vertical .swiper-pagination .swiper-pagination-bullet {\n  display: block;\n  margin: 6px 0;\n}\n.swiper.horizontal .swiper-pagination {\n  bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.swiper.horizontal .swiper-pagination .swiper-pagination-bullet {\n  display: inline-block;\n  margin: 0 3px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="swiper" :class="[direction, {'dragging': dragging}]" @touchstart="_onTouchStart" @mousedown="_onTouchStart" @wheel="_onWheel">
	//         <div class="swiper-wrap" v-el:swiper-wrap :style="{
	//                 'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',
	//                 'transition-duration': transitionDuration + 'ms'
	//              }" @transitionend="_onTransitionEnd">
	//             <slot></slot>
	//         </div>
	//         <div class="swiper-pagination" v-show="paginationVisible">
	//             <span class="swiper-pagination-bullet" :class="{'active': $index+1===currentPage}" v-for="slide in slideEls" @click="paginationClickable && setPage($index+1)"></span>
	//         </div>
	//     </div>
	// </template>
	// <style lang="less" src="./vue-swiper.less"></style>
	// <script type="text/babel">
	var VERTICAL = 'vertical';
	var HORIZONTAL = 'horizontal';

	exports.default = {
	    props: {
	        direction: {
	            type: String,
	            default: VERTICAL,
	            validator: function validator(value) {
	                return [VERTICAL, HORIZONTAL].indexOf(value) > -1;
	            }
	        },
	        mousewheelControl: {
	            type: Boolean,
	            default: true
	        },
	        performanceMode: {
	            type: Boolean,
	            default: false
	        },
	        paginationVisible: {
	            type: Boolean,
	            default: false
	        },
	        paginationClickable: {
	            type: Boolean,
	            default: false
	        },
	        loop: {
	            type: Boolean,
	            default: false
	        },
	        speed: {
	            type: Number,
	            default: 500
	        }
	    },
	    data: function data() {
	        return {
	            currentPage: 1,
	            lastPage: 1,
	            translateX: 0,
	            translateY: 0,
	            startTranslate: 0,
	            delta: 0,
	            dragging: false,
	            startPos: null,
	            slideEls: [],
	            transitioning: false,
	            translateOffset: 0,
	            transitionDuration: 0
	        };
	    },
	    ready: function ready() {
	        this._onTouchMove = this._onTouchMove.bind(this);
	        this._onTouchEnd = this._onTouchEnd.bind(this);
	        this.slideEls = [].map.call(this.$els.swiperWrap.children, function (el) {
	            return el;
	        });
	        if (this.loop) {
	            this.$nextTick(function () {
	                this._createLoop();
	                this.setPage(this.currentPage, true);
	            });
	        } else {
	            this.setPage(this.currentPage);
	        }

	        var self = this;
	        this.$watch("$els.swiperWrap.children", function (o, n) {
	            self.slideEls = n;
	        });
	    },

	    methods: {
	        next: function next() {
	            var page = this.currentPage;
	            if (page < this.slideEls.length || this.loop) {
	                this.setPage(page + 1);
	            } else {
	                this._revert();
	            }
	        },
	        prev: function prev() {
	            var page = this.currentPage;
	            if (page > 1 || this.loop) {
	                this.setPage(page - 1);
	            } else {
	                this._revert();
	            }
	        },
	        setPage: function setPage(page, noAnimation) {
	            var self = this;
	            this.lastPage = this.currentPage;
	            if (page === 0) {
	                this.currentPage = this.slideEls.length;
	            } else if (page === this.slideEls.length + 1) {
	                this.currentPage = 1;
	            } else {
	                this.currentPage = page;
	            }

	            if (this.loop) {
	                if (this.delta === 0) {
	                    this._setTranslate(self._getTranslateOfPage(this.lastPage));
	                }
	                setTimeout(function () {
	                    self._setTranslate(self._getTranslateOfPage(page));
	                    if (noAnimation) return;
	                    self._onTransitionStart();
	                }, 0);
	            } else {
	                this._setTranslate(this._getTranslateOfPage(page));
	                if (noAnimation) return;
	                this._onTransitionStart();
	            }
	        },
	        isHorizontal: function isHorizontal() {
	            return this.direction === HORIZONTAL;
	        },
	        isVertical: function isVertical() {
	            return this.direction === VERTICAL;
	        },
	        reloadSlot: function reloadSlot() {
	            this.slideEls = [].map.call(this.$els.swiperWrap.children, function (el) {
	                return el;
	            });
	        },
	        _onTouchStart: function _onTouchStart(e) {
	            this.startPos = this._getTouchPos(e);
	            this.delta = 0;
	            this.startTranslate = this._getTranslateOfPage(this.currentPage);
	            this.startTime = new Date().getTime();
	            this.dragging = true;
	            this.transitionDuration = 0;

	            document.addEventListener('touchmove', this._onTouchMove, false);
	            document.addEventListener('touchend', this._onTouchEnd, false);
	            document.addEventListener('mousemove', this._onTouchMove, false);
	            document.addEventListener('mouseup', this._onTouchEnd, false);
	        },
	        _onTouchMove: function _onTouchMove(e) {
	            this.delta = this._getTouchPos(e) - this.startPos;

	            if (!this.performanceMode) {
	                this._setTranslate(this.startTranslate + this.delta);
	                this.$emit('slider-move', this._getTranslate());
	            }

	            if (this.isVertical() || this.isHorizontal() && Math.abs(this.delta) > 0) {
	                //e.preventDefault();
	            }
	        },
	        _onTouchEnd: function _onTouchEnd(e) {
	            this.dragging = false;
	            this.transitionDuration = this.speed;
	            var isQuickAction = new Date().getTime() - this.startTime < 1000;
	            if (this.delta < -100 || isQuickAction && this.delta < -15) {
	                this.next();
	            } else if (this.delta > 100 || isQuickAction && this.delta > 15) {
	                this.prev();
	            } else {
	                this._revert();
	            }

	            document.removeEventListener('touchmove', this._onTouchMove);
	            document.removeEventListener('touchend', this._onTouchEnd);
	            document.removeEventListener('mousemove', this._onTouchMove);
	            document.removeEventListener('mouseup', this._onTouchEnd);
	        },
	        _onWheel: function _onWheel(e) {
	            if (this.mousewheelControl) {
	                // TODO Support apple magic mouse and trackpad.
	                if (!this.transitioning) {
	                    if (e.deltaY > 0) {
	                        this.next();
	                    } else {
	                        this.prev();
	                    }
	                }
	                if (this._isPageChanged()) e.preventDefault();
	            }
	        },
	        _revert: function _revert() {
	            this.setPage(this.currentPage);
	        },
	        _getTouchPos: function _getTouchPos(e) {
	            var key = this.isHorizontal() ? 'pageX' : 'pageY';
	            return e.changedTouches ? e.changedTouches[0][key] : e[key];
	        },
	        _onTransitionStart: function _onTransitionStart() {
	            this.transitioning = true;
	            this.transitionDuration = this.speed;
	            if (this._isPageChanged()) {
	                this.$emit('slide-change-start', this.currentPage);
	            } else {
	                this.$emit('slide-revert-start', this.currentPage);
	            }
	        },
	        _onTransitionEnd: function _onTransitionEnd() {
	            this.transitioning = false;
	            this.transitionDuration = 0;
	            this.delta = 0;
	            if (this._isPageChanged()) {
	                this.$emit('slide-change-end', this.currentPage);
	            } else {
	                this.$emit('slide-revert-end', this.currentPage);
	            }
	        },
	        _isPageChanged: function _isPageChanged() {
	            return this.lastPage !== this.currentPage;
	        },
	        _setTranslate: function _setTranslate(value) {
	            var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
	            this[translateName] = value;
	        },
	        _getTranslate: function _getTranslate() {
	            var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
	            return this[translateName];
	        },
	        _getTranslateOfPage: function _getTranslateOfPage(page) {
	            if (page === 0) return 0;

	            var propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight';
	            return -[].reduce.call(this.slideEls, function (total, el, i) {
	                return i > page - 2 ? total : total + el[propName];
	            }, 0) + this.translateOffset;
	        },
	        _createLoop: function _createLoop() {
	            var propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight';
	            var swiperWrapEl = this.$els.swiperWrap;
	            var duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true);
	            var duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true);
	            swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild);
	            swiperWrapEl.appendChild(duplicateFirstChild);
	            this.translateOffset = -duplicateLastChild[propName];
	        }
	    }
	};
	// </script>

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" :class=\"[direction, {'dragging': dragging}]\" @touchstart=\"_onTouchStart\" @mousedown=\"_onTouchStart\" @wheel=\"_onWheel\">\n    <div class=\"swiper-wrap\" v-el:swiper-wrap :style=\"{\n            'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',\n            'transition-duration': transitionDuration + 'ms'\n         }\" @transitionend=\"_onTransitionEnd\">\n        <slot></slot>\n    </div>\n    <div class=\"swiper-pagination\" v-show=\"paginationVisible\">\n        <span class=\"swiper-pagination-bullet\" :class=\"{'active': $index+1===currentPage}\" v-for=\"slide in slideEls\" @click=\"paginationClickable && setPage($index+1)\"></span>\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;