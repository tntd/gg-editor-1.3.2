! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("react")) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.GGEditor = e(require("react")) : t.GGEditor = e(t.React)
}("undefined" != typeof self ? self : this, function(t) {
	return function(t) {
		function e(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.d = function(t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, e.n = function(t) {
			var n = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, e.p = "", e(e.s = 48)
	}([function(e, n) {
		e.exports = t
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.upperFirst = e.pick = e.merge = e.createId = void 0;
		var i = n(51),
			o = r(i),
			a = n(100),
			u = r(a),
			c = n(134),
			s = r(c),
			f = function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				return function() {
					return t++
				}
			}();
		e.createId = f, e.merge = u.default, e.pick = o.default, e.upperFirst = s.default
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			var n = {};
			for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
			return n
		}

		function o(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function u(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var c = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			s = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}();
		e.default = function(t) {
			var e = function(e) {
				function n() {
					return o(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
				}
				return u(n, e), s(n, [{
					key: "render",
					value: function() {
						var e = this.props,
							n = e.forwardRef,
							r = i(e, ["forwardRef"]);
						return l.default.createElement(d.default.Consumer, null, function(e) {
							return l.default.createElement(t, c({
								ref: n
							}, r, e))
						})
					}
				}]), n
			}(l.default.Component);
			return l.default.forwardRef(function(t, n) {
				return l.default.createElement(e, c({}, t, {
					forwardRef: n
				}))
			})
		};
		var f = n(0),
			l = r(f),
			h = n(46),
			d = r(h)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = void 0 === t ? "undefined" : i(t);
			return null != t && ("object" == e || "function" == e)
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = (e.FLOW_CONTAINER = "J_FlowContainer", e.MIND_CONTAINER = "J_MindContainer", e.TOOLBAR_CONTAINER = "J_ToolbarContainer", e.MINIMAP_CONTAINER = "J_MinimapContainer", e.CONTEXT_MENU_CONTAINER = "J_ContextMenuContainer", e.FLOW_CLASS_NAME = "Flow", e.MIND_CLASS_NAME = "Mind", e.EVENT_BEFORE_ADD_PAGE = "beforeAddPage", e.EVENT_AFTER_ADD_PAGE = "afterAddPage", e.STATUS_CANVAS_SELECTED = "canvas-selected", e.STATUS_NODE_SELECTED = "node-selected", e.STATUS_EDGE_SELECTED = "edge-selected", e.STATUS_GROUP_SELECTED = "group-selected", e.STATUS_MULTI_SELECTED = "multi-selected", e.GRAPH_MOUSE_REACT_EVENTS = {
				click: "Click",
				contextmenu: "ContextMenu",
				dblclick: "DoubleClick",
				drag: "Drag",
				dragend: "DragEnd",
				dragenter: "DragEnter",
				dragleave: "DragLeave",
				dragstart: "DragStart",
				drop: "Drop",
				mousedown: "MouseDown",
				mouseenter: "MouseEnter",
				mouseleave: "MouseLeave",
				mousemove: "MouseMove",
				mouseup: "MouseUp"
			}),
			i = e.GRAPH_OTHER_REACT_EVENTS = {
				afterchange: "onAfterChange",
				afterchangesize: "onAfterChangeSize",
				afterviewportchange: "onAfterViewportChange",
				beforechange: "onBeforeChange",
				beforechangesize: "onBeforeChangeSize",
				beforeviewportchange: "onBeforeViewportChange",
				keydown: "onKeyDown",
				keyup: "onKeyUp",
				mousewheel: "onMouseWheel"
			},
			o = e.PAGE_REACT_EVENTS = {
				afteritemactived: "onAfterItemActived",
				afteriteminactivated: "onAfterItemInactivated",
				afteritemselected: "onAfterItemSelected",
				afteritemunactived: "onAfterItemInactivated",
				afteritemunselected: "onAfterItemUnselected",
				beforeitemactived: "onBeforeItemActived",
				beforeiteminactivated: "onBeforeItemInactivated",
				beforeitemselected: "onBeforeItemSelected",
				beforeitemunactived: "onBeforeItemInactivated",
				beforeitemunselected: "onBeforeItemUnselected",
				keyUpEditLabel: "onKeyUpEditLabel"
			},
			a = e.EDITOR_REACT_EVENTS = {
				aftercommandexecute: "onAfterCommandExecute",
				beforecommandexecute: "onBeforeCommandExecute"
			};
		e.GRAPH_MOUSE_EVENTS = Object.keys(r), e.GRAPH_OTHER_EVENTS = Object.keys(i), e.PAGE_EVENTS = Object.keys(o), e.EDITOR_EVENTS = Object.keys(a)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = n(50),
			c = r(u),
			s = n(1),
			f = n(44),
			l = r(f),
			h = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return l.default.get("trackable") ? c.default.track({
						GGEditor: !0
					}) : c.default.track(!1), n.id = (0, s.createId)(), n
				}
				return a(e, t), e
			}(c.default);
		e.default = h
	}, function(t, e, n) {
		"use strict";
		var r = Array.isArray;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			i = n(27),
			o = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
			a = i || o || Function("return this")();
		t.exports = a
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return null != t && "object" == (void 0 === t ? "undefined" : i(t))
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return null == t ? void 0 === t ? c : u : s && s in Object(t) ? o(t) : a(t)
		}
		var i = n(12),
			o = n(57),
			a = n(58),
			u = "[object Null]",
			c = "[object Undefined]",
			s = i ? i.toStringTag : void 0;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		t.exports = function(t) {
			return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
				enumerable: !0,
				get: function() {
					return t.l
				}
			}), Object.defineProperty(t, "id", {
				enumerable: !0,
				get: function() {
					return t.i
				}
			}), t.webpackPolyfill = 1), t
		}
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return i(t) ? t : o(t, e) ? [t] : a(u(t))
		}
		var i = n(6),
			o = n(55),
			a = n(59),
			u = n(30);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(7),
			i = r.Symbol;
		t.exports = i
	}, function(t, e, n) {
		"use strict";
		var r = n(21),
			i = r(Object, "create");
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var r = t[e];
				this.set(r[0], r[1])
			}
		}
		var i = n(74),
			o = n(75),
			a = n(76),
			u = n(77),
			c = n(78);
		r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			for (var n = t.length; n--;)
				if (i(t[n][0], e)) return n;
			return -1
		}
		var i = n(16);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return t === e || t !== t && e !== e
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = t.__data__;
			return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
		}
		var i = n(80);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = void 0 === t ? "undefined" : i(t);
			return !!(e = null == e ? o : e) && ("number" == n || "symbol" != n && a.test(t)) && t > -1 && t % 1 == 0 && t < e
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			o = 9007199254740991,
			a = /^(?:0|[1-9]\d*)$/;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(90),
			i = n(8),
			o = Object.prototype,
			a = o.hasOwnProperty,
			u = o.propertyIsEnumerable,
			c = r(function() {
				return arguments
			}()) ? r : function(t) {
				return i(t) && a.call(t, "callee") && !u.call(t, "callee")
			};
		t.exports = c
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return "symbol" == (void 0 === t ? "undefined" : i(t)) || a(t) && o(t) == u
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			o = n(9),
			a = n(8),
			u = "[object Symbol]";
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = o(t, e);
			return i(n) ? n : void 0
		}
		var i = n(65),
			o = n(69);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if (!o(t)) return !1;
			var e = i(t);
			return e == u || e == c || e == a || e == s
		}
		var i = n(9),
			o = n(3),
			a = "[object AsyncFunction]",
			u = "[object Function]",
			c = "[object GeneratorFunction]",
			s = "[object Proxy]";
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if ("string" == typeof t || i(t)) return t;
			var e = t + "";
			return "0" == e && 1 / t == -o ? "-0" : e
		}
		var i = n(20),
			o = 1 / 0;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			"__proto__" == e && i ? i(t, e, {
				configurable: !0,
				enumerable: !0,
				value: n,
				writable: !0
			}) : t[e] = n
		}
		var i = n(32);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
		}
		var i = 9007199254740991;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return null != t && o(t.length) && !i(t)
		}
		var i = n(22),
			o = n(25);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		(function(e) {
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				r = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e;
			t.exports = r
		}).call(e, n(56))
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var r = t[e];
				this.set(r[0], r[1])
			}
		}
		var i = n(62),
			o = n(79),
			a = n(81),
			u = n(82),
			c = n(83);
		r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(21),
			i = n(7),
			o = r(i, "Map");
		t.exports = o
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return null == t ? "" : i(t)
		}
		var i = n(84);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			var r = t[e];
			u.call(t, e) && o(r, n) && (void 0 !== n || e in t) || i(t, e, n)
		}
		var i = n(24),
			o = n(16),
			a = Object.prototype,
			u = a.hasOwnProperty;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(21),
			i = function() {
				try {
					var t = r(Object, "defineProperty");
					return t({}, "", {}), t
				} catch (t) {}
			}();
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			return e = o(void 0 === e ? t.length - 1 : e, 0),
				function() {
					for (var r = arguments, a = -1, u = o(r.length - e, 0), c = Array(u); ++a < u;) c[a] = r[e + a];
					a = -1;
					for (var s = Array(e + 1); ++a < e;) s[a] = r[a];
					return s[e] = n(c), i(t, this, s)
				}
		}
		var i = n(96),
			o = Math.max;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(97),
			i = n(99),
			o = i(r);
		t.exports = o
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			(void 0 === n || o(t[e], n)) && (void 0 !== n || e in t) || i(t, e, n)
		}
		var i = n(24),
			o = n(16);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(118),
			i = r(Object.getPrototypeOf, Object);
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = t && t.constructor;
			return t === ("function" == typeof e && e.prototype || i)
		}
		var i = Object.prototype;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				i = n(7),
				o = n(120),
				a = "object" == r(e) && e && !e.nodeType && e,
				u = a && "object" == r(t) && t && !t.nodeType && t,
				c = u && u.exports === a,
				s = c ? i.Buffer : void 0,
				f = s ? s.isBuffer : void 0,
				l = f || o;
			t.exports = l
		}).call(e, n(10)(t))
	}, function(t, e, n) {
		"use strict";
		var r = n(122),
			i = n(123),
			o = n(124),
			a = o && o.isTypedArray,
			u = a ? i(a) : r;
		t.exports = u
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if ("__proto__" != e) return t[e]
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return a(t) ? i(t, !0) : o(t)
		}
		var i = n(127),
			o = n(129),
			a = n(26);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i.test(t)
		}
		var i = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = {
			trackable: !0
		};
		e.default = {
			get: function(t) {
				return r[t]
			},
			set: function(t, e) {
				r[t] = e
			}
		}
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function o(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			u = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			c = n(0),
			s = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(c),
			f = n(1),
			l = n(4),
			h = function(t) {
				function e() {
					var t, n, o, a;
					r(this, e);
					for (var u = arguments.length, c = Array(u), s = 0; s < u; s++) c[s] = arguments[s];
					return n = o = i(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(c))), o.config = {}, o.addListener = function(t, e, n) {
						"function" == typeof n && t.on(e, n)
					}, a = n, i(o, a)
				}
				return o(e, t), u(e, [{
					key: "componentDidMount",
					value: function() {
						this.init(), this.bindEvent(), this.forceUpdate()
					}
				}, {
					key: "shouldComponentUpdate",
					value: function(t) {
						var e = t.data,
							n = this.props.data,
							r = t.graph || {},
							i = r.mode;
						return i !== (this.props.graph || {}).mode && this.page.changeMode(i), e !== n && (this.page.read(e), !0)
					}
				}, {
					key: "initPage",
					value: function() {}
				}, {
					key: "readData",
					value: function() {
						var t = this.config.data;
						t && this.page.read(t)
					}
				}, {
					key: "init",
					value: function() {
						(0, f.merge)(this.config, this.props, {
							graph: {
								container: this.pageId
							}
						}), this.initPage(), this.readData()
					}
				}, {
					key: "bindEvent",
					value: function() {
						var t = this,
							e = this.addListener;
						l.GRAPH_MOUSE_EVENTS.forEach(function(n) {
							var r = l.GRAPH_MOUSE_REACT_EVENTS[n];
							e(t.graph, "" + n, t.props["on" + r]), e(t.graph, "node:" + n, t.props["onNode" + r]), e(t.graph, "edge:" + n, t.props["onEdge" + r]), e(t.graph, "group:" + n, t.props["onGroup" + r]), e(t.graph, "guide:" + n, t.props["onGuide" + r]), e(t.graph, "anchor:" + n, t.props["onAnchor" + r])
						}), l.GRAPH_OTHER_EVENTS.forEach(function(n) {
							e(t.graph, [n], t.props[l.GRAPH_OTHER_REACT_EVENTS[n]])
						}), l.PAGE_EVENTS.forEach(function(n) {
							e(t.page, [n], t.props[l.PAGE_REACT_EVENTS[n]])
						})
					}
				}, {
					key: "render",
					value: function() {
						var t = this.page,
							e = this.pageId,
							n = this.props.children;
						return s.default.createElement("div", a({
							id: e
						}, (0, f.pick)(this.props, ["style", "className"])), t ? n : null)
					}
				}, {
					key: "graph",
					get: function() {
						return this.page.getGraph()
					}
				}]), e
			}(s.default.Component);
		e.default = h
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(r);
		e.default = i.default.createContext({})
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(r);
		e.default = i.default.createContext({})
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.withPropsAPI = e.DetailPanel = e.CanvasPanel = e.MultiPanel = e.GroupPanel = e.EdgePanel = e.NodePanel = e.ItemPanel = e.Item = e.Toolbar = e.ContextMenu = e.CanvasMenu = e.MultiMenu = e.GroupMenu = e.EdgeMenu = e.NodeMenu = e.Minimap = e.Command = e.RegisterBehaviour = e.RegisterCommand = e.RegisterGuide = e.RegisterGroup = e.RegisterEdge = e.RegisterNode = e.Mind = e.Flow = void 0;
		var i = n(49),
			o = r(i),
			a = n(141),
			u = r(a),
			c = n(142),
			s = n(143),
			f = r(s),
			l = n(144),
			h = r(l),
			d = n(145),
			p = r(d),
			g = n(147),
			v = r(g),
			m = n(148),
			y = r(m),
			b = n(150),
			x = r(b),
			_ = n(152),
			w = r(_),
			S = n(153),
			M = r(S);
		e.Flow = o.default, e.Mind = u.default, e.RegisterNode = c.RegisterNode, e.RegisterEdge = c.RegisterEdge, e.RegisterGroup = c.RegisterGroup, e.RegisterGuide = c.RegisterGuide, e.RegisterCommand = c.RegisterCommand, e.RegisterBehaviour = c.RegisterBehaviour, e.Command = f.default, e.Minimap = h.default, e.NodeMenu = d.NodeMenu, e.EdgeMenu = d.EdgeMenu, e.GroupMenu = d.GroupMenu, e.MultiMenu = d.MultiMenu, e.CanvasMenu = d.CanvasMenu, e.ContextMenu = p.default, e.Toolbar = v.default, e.Item = m.Item, e.ItemPanel = y.default, e.NodePanel = b.NodePanel, e.EdgePanel = b.EdgePanel, e.GroupPanel = b.GroupPanel, e.MultiPanel = b.MultiPanel, e.CanvasPanel = b.CanvasPanel, e.DetailPanel = x.default, e.withPropsAPI = w.default, e.default = M.default
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			c = n(5),
			s = r(c),
			f = n(4),
			l = n(45),
			h = r(l),
			d = n(2),
			p = r(d),
			g = function(t) {
				function e() {
					return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return a(e, t), u(e, [{
					key: "initPage",
					value: function() {
						var t = this.props.editor;
						t.emit(f.EVENT_BEFORE_ADD_PAGE, {
							className: f.FLOW_CLASS_NAME
						}), this.page = new s.default.Flow(this.config), t.add(this.page), t.emit(f.EVENT_AFTER_ADD_PAGE, {
							page: this.page
						})
					}
				}, {
					key: "pageId",
					get: function() {
						var t = this.props.editor;
						return f.FLOW_CONTAINER + "_" + t.id
					}
				}]), e
			}(h.default);
		g.defaultProps = {
			data: {
				nodes: [],
				edges: []
			}
		}, e.default = (0, p.default)(g)
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var n, r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			};
			! function(a, u) {
				"object" == o(e) && "object" == o(t) ? t.exports = u() : (r = [], n = u, void 0 !== (i = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = i))
			}(window, function() {
				return function(t) {
					function e(r) {
						if (n[r]) return n[r].exports;
						var i = n[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
					}
					var n = {};
					return e.m = t, e.c = n, e.d = function(t, n, r) {
						e.o(t, n) || Object.defineProperty(t, n, {
							enumerable: !0,
							get: r
						})
					}, e.r = function(t) {
						"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
							value: "Module"
						}), Object.defineProperty(t, "__esModule", {
							value: !0
						})
					}, e.t = function(t, n) {
						if (1 & n && (t = e(t)), 8 & n) return t;
						if (4 & n && "object" == (void 0 === t ? "undefined" : o(t)) && t && t.__esModule) return t;
						var r = Object.create(null);
						if (e.r(r), Object.defineProperty(r, "default", {
								enumerable: !0,
								value: t
							}), 2 & n && "string" != typeof t)
							for (var i in t) e.d(r, i, function(e) {
								return t[e]
							}.bind(null, i));
						return r
					}, e.n = function(t) {
						var n = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return e.d(n, "a", n), n
					}, e.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, e.p = "", e(e.s = 26)
				}([, , , , , , , function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function o(t, e) {
						var n = [];
						return c.isString(t) ? n = [e, t] : c.isArray(t) ? (t.unshift(e), n = t) : n = [e], n.unshift("page-base"), n
					}
					var a = n(16),
						u = n(11),
						c = n(12),
						s = {
							getActivedStyle: function() {},
							getSelectedStyle: function() {}
						};
					a.registerNode("page-base", r({}, s)), a.registerEdge("page-base", r({}, s)), a.registerGroup("page-base", r({}, s)), a.registerGuide("page-base", r({}, s)), u.registerBehaviour = function(t, e, n) {
						a.registerBehaviour(t, function(t) {
							var n = t.get("page");
							n.set("_graph", t), e(n)
						}, n)
					}, u.setRegister = function(t, e) {
						t.registerNode = function(t, n, r) {
							u.registerNode(t, n, o(r, e + "-node"))
						}, t.registerEdge = function(t, n, r) {
							u.registerEdge(t, n, o(r, e + "-edge"))
						}, t.registerGroup = function(t, n, r) {
							u.registerGroup(t, n, o(r, e + "-group"))
						}, t.registerGuide = function(t, n, r) {
							u.registerGuide(t, n, o(r, e + "-guide"))
						}
					}, u.registerNode = a.registerNode, u.registerEdge = a.registerEdge, u.registerGroup = a.registerGroup, u.registerGuide = a.registerGuide, n(146), t.exports = u
				}, , , , function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function a(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function u(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function c(t) {
						return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function s(t, e) {
						return (s = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var f = n(53),
						l = n(12),
						h = n(156),
						d = n(155),
						p = n(153),
						g = [h, n(152), n(151), d, p, n(150), n(148), n(147)],
						v = function(t) {
							function e(t) {
								var n;
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = {
									defaultData: null,
									shortcut: {
										redo: !0,
										undo: !0,
										delete: !0,
										resetZoom: !0,
										autoZoom: !0,
										zoomIn: !0,
										zoomOut: !0
									},
									_controllers: {},
									_signals: {}
								};
								return l.each(g, function(t) {
									l.mix(r, t.CFG)
								}), l.mix(!0, r, t), (n = u(this, c(e).call(this, r))).isPage = !0, n.type = "page", n._init(), n
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && s(t, e)
								}(e, f),
								function(t, e, n) {
									e && a(t.prototype, e)
								}(e, [{
									key: "getDelegation",
									value: function(t, e) {
										var n = l.getTotalBBox(t.map(function(t) {
												return t.getBBox()
											})),
											r = l.getRectByBox(n, e, {
												stroke: "#1890FF",
												fill: "#1890FF",
												fillOpacity: .08,
												lineDash: [4, 4],
												radius: 4,
												lineWidth: 1
											});
										return r.set("capture", !1), r
									}
								}, {
									key: "focusGraphWrapper",
									value: function() {
										this.getGraph().getKeyboardEventWrapper().focus()
									}
								}, {
									key: "saveImage",
									value: function(t) {
										var e, n, r = this,
											o = this.getGraph(),
											a = o.getBBox(),
											u = o.getFitViewPadding();
										return o.saveImage(function(t) {
											for (var e = 1; e < arguments.length; e++) {
												var n = null != arguments[e] ? arguments[e] : {},
													r = Object.keys(n);
												"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
													return Object.getOwnPropertyDescriptor(n, t).enumerable
												}))), r.forEach(function(e) {
													i(t, e, n[e])
												})
											}
											return t
										}({
											width: a.width + u[1] + u[3],
											height: a.height + u[0] + u[2],
											beforeTransform: function() {
												e = r.getSelected().map(function(t) {
													return t.id
												}), n = r.getSelected().map(function(t) {
													return t.id
												}), r.clearSelected(), r.clearActived()
											},
											afterTransform: function() {
												r.setSelected(e, !0), r.setActived(n, !0)
											}
										}, t))
									}
								}, {
									key: "executeCommand",
									value: function(t, e) {
										var n = this.editor;
										n ? n.executeCommand(t, e) : t()
									}
								}, {
									key: "_init",
									value: function() {
										var t = this;
										l.each(g, function(e) {
											e.INIT && t[e.INIT]()
										}), this.bindEvent(), this._cacheBBox()
									}
								}, {
									key: "_cacheBBox",
									value: function() {
										var t = this.getGraph();
										this.set("bboxCache", t.getBBox())
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this;
										this.getGraph().on("afterchange", function() {
											t._cacheBBox()
										})
									}
								}, {
									key: "translateLimt",
									value: function(t) {
										var e = this.getGraph(),
											n = this.get("bboxCache"),
											r = e.getWidth(),
											i = e.getHeight(),
											o = [n.minX, n.minY, 1],
											a = [n.maxX, n.maxY, 1];
										return l.vec3.transformMat3(o, o, t), l.vec3.transformMat3(a, a, t), a[0] < 100 && l.mat3.translate(t, t, [100 - a[0], 0]), a[1] < 100 && l.mat3.translate(t, t, [0, 100 - a[1]]), o[1] > i - 100 && l.mat3.translate(t, t, [0, i - 100 - o[1]]), o[0] > r - 100 && l.mat3.translate(t, t, [r - 100 - o[0], 0]), !0
									}
								}, {
									key: "setSignal",
									value: function(t, e) {
										this.get("_signals")[t] = e
									}
								}, {
									key: "getSignal",
									value: function(t) {
										return this.get("_signals")[t]
									}
								}, {
									key: "setController",
									value: function(t, e) {
										this.get("_controllers")[t] = e
									}
								}, {
									key: "getController",
									value: function(t) {
										return this.get("_controllers")[t]
									}
								}, {
									key: "destroy",
									value: function() {
										var t = this.get("_graph"),
											e = this.get("_controllers");
										l.each(e, function(t) {
											t.destroy()
										}), t.destroy()
									}
								}]), e
						}();
					l.each(g, function(t) {
						l.mix(v.prototype, t.AUGMENT)
					}), t.exports = v
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(17),
						o = n(30),
						a = i.createDOM("<canvas>").getContext("2d");
					t.exports = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								i = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), i.forEach(function(e) {
								r(t, e, n[e])
							})
						}
						return t
					}({}, i, {
						getPanCanvasBehaviour: function(t) {
							return function(e) {
								var n, r, a = e.getGraph();
								a.behaviourOn("canvas:mouseenter", function() {
									e.css({
										cursor: o.cursor.beforePanCanvas
									})
								}), a.behaviourOn("mouseleave", function(t) {
									t.toShape || e.css({
										cursor: o.cursor.beforePanCanvas
									})
								}), a.behaviourOn("dragstart", function(i) {
									(2 !== i.button && !t || !i.shape || i.item && !1 === i.item.dragable) && (n = {
										x: i.domX,
										y: i.domY
									}, e.css({
										cursor: o.cursor.panningCanvas
									}), r = a.getMatrix(), e.setCapture(!1))
								}), a.behaviourOn("drag", function(t) {
									if (n) {
										var o = t.domX - n.x,
											u = t.domY - n.y,
											c = [];
										i.mat3.translate(c, r, [o, u]), e.translateLimt(c) && (a.updateMatrix(c), a.draw())
									}
								}), a.behaviourOn("dragend", function() {
									n = void 0, r = void 0, e.setCapture(!0), e.css({
										cursor: o.cursor.beforePanCanvas
									})
								})
							}
						},
						getLabelTextByTextLineWidth: function(t, e) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 320;
							a.font = e;
							var r = a.measureText(t).width;
							if (r > n) {
								r = 0;
								for (var i = 1; i < t.length; i++)(r += a.measureText(t[i]).width) >= n && (t = t.substring(0, i) + "\n" + t.substring(i, t.length), i += 1, r = 0)
							}
							return t
						}
					})
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(16),
						o = n(52),
						a = n(123),
						u = n(122),
						c = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), i.forEach(function(e) {
									r(t, e, n[e])
								})
							}
							return t
						}({}, i.Util, o, a, u);
					t.exports = c
				}, function(t, e) {
					t.exports = {
						defaultNodeSize: [96, 48],
						groupBackgroundPadding: [40, 10, 10, 10],
						multiSelectRectStyle: {
							fill: "#1890FF",
							fillOpacity: .08,
							stroke: "#1890FF",
							opacity: .1
						},
						dragNodeHoverToGroupStyle: {
							stroke: "#1890FF",
							lineWidth: 2
						},
						dragNodeLeaveFromGroupStyle: {
							stroke: "#BAE7FF",
							lineWidth: 2
						},
						anchorPointStyle: {
							radius: 3.5,
							fill: "#fff",
							stroke: "#1890FF",
							lineAppendWidth: 12
						},
						anchorHotsoptStyle: {
							radius: 12,
							fill: "#1890FF",
							fillOpacity: .25
						},
						anchorHotsoptActivedStyle: {
							radius: 14
						},
						anchorPointHoverStyle: {
							radius: 4,
							fill: "#1890FF",
							fillOpacity: 1,
							stroke: "#1890FF"
						},
						nodeDelegationStyle: {
							stroke: "#1890FF",
							fill: "#1890FF",
							fillOpacity: .08,
							lineDash: [4, 4],
							radius: 4,
							lineWidth: 1
						},
						groupDelegationStyle: {
							stroke: "#1890FF",
							fill: "#1890FF",
							fillOpacity: .08,
							lineDash: [4, 4],
							radius: 4,
							lineWidth: 1
						},
						edgeDelegationStyle: {
							stroke: "#697B8C",
							lineWidth: 1
						},
						nodeControlPointStyle: {
							radius: 4,
							fill: "#fff",
							shadowBlur: 4,
							shadowColor: "#666"
						},
						edgeControlPointStyle: {
							radius: 6,
							symbol: "square",
							lineAppendWidth: 6,
							fillOpacity: 0,
							strokeOpacity: 0
						},
						nodeSelectedBoxStyle: {
							stroke: "#C2C2C2"
						},
						cursor: {
							panningCanvas: "-webkit-grabbing",
							beforePanCanvas: "-webkit-grab",
							hoverNode: "move",
							hoverEffectiveAnchor: "crosshair",
							hoverEdge: "default",
							hoverGroup: "move",
							hoverUnEffectiveAnchor: "default",
							hoverEdgeControllPoint: "crosshair",
							multiSelect: "crosshair"
						},
						zIndex: {
							anchorPoint: 3,
							anchorHotsopt: 2,
							selectedBox: 1,
							controlPoint: 4
						},
						polylineEdgeStyle: {
							offset: 10,
							borderRadius: 5
						},
						addToGroupDelayTime: 400,
						outFromGroupDelayTime: 400
					}
				}, , function(t, e, n) {
					window,
					t.exports = function(t) {
						function e(r) {
							if (n[r]) return n[r].exports;
							var i = n[r] = {
								i: r,
								l: !1,
								exports: {}
							};
							return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
						}
						var n = {};
						return e.m = t, e.c = n, e.d = function(t, n, r) {
							e.o(t, n) || Object.defineProperty(t, n, {
								enumerable: !0,
								get: r
							})
						}, e.r = function(t) {
							"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
								value: "Module"
							}), Object.defineProperty(t, "__esModule", {
								value: !0
							})
						}, e.t = function(t, n) {
							if (1 & n && (t = e(t)), 8 & n) return t;
							if (4 & n && "object" == (void 0 === t ? "undefined" : o(t)) && t && t.__esModule) return t;
							var r = Object.create(null);
							if (e.r(r), Object.defineProperty(r, "default", {
									enumerable: !0,
									value: t
								}), 2 & n && "string" != typeof t)
								for (var i in t) e.d(r, i, function(e) {
									return t[e]
								}.bind(null, i));
							return r
						}, e.n = function(t) {
							var n = t && t.__esModule ? function() {
								return t.default
							} : function() {
								return t
							};
							return e.d(n, "a", n), n
						}, e.o = function(t, e) {
							return Object.prototype.hasOwnProperty.call(t, e)
						}, e.p = "", e(e.s = 762)
					}([, function(t, e, n) {
						function r(t, e) {
							var n = Object.create(t.prototype);
							for (var r in e) n[r] = e[r];
							return n
						}

						function i() {}

						function o(t) {
							var e;
							return t = (t + "").trim().toLowerCase(), (e = B.exec(t)) ? new f((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = N.exec(t)) ? a(parseInt(e[1], 16)) : (e = L.exec(t)) ? new f(e[1], e[2], e[3], 1) : (e = D.exec(t)) ? new f(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = R.exec(t)) ? u(e[1], e[2], e[3], e[4]) : (e = G.exec(t)) ? u(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Y.exec(t)) ? h(e[1], e[2] / 100, e[3] / 100, 1) : (e = F.exec(t)) ? h(e[1], e[2] / 100, e[3] / 100, e[4]) : X.hasOwnProperty(t) ? a(X[t]) : "transparent" === t ? new f(NaN, NaN, NaN, 0) : null
						}

						function a(t) {
							return new f(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
						}

						function u(t, e, n, r) {
							return r <= 0 && (t = e = n = NaN), new f(t, e, n, r)
						}

						function c(t) {
							return t instanceof i || (t = o(t)), t ? new f((t = t.rgb()).r, t.g, t.b, t.opacity) : new f
						}

						function s(t, e, n, r) {
							return 1 === arguments.length ? c(t) : new f(t, e, n, null == r ? 1 : r)
						}

						function f(t, e, n, r) {
							this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
						}

						function l(t) {
							return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
						}

						function h(t, e, n, r) {
							return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new p(t, e, n, r)
						}

						function d(t, e, n, r) {
							return 1 === arguments.length ? function(t) {
								if (t instanceof p) return new p(t.h, t.s, t.l, t.opacity);
								if (t instanceof i || (t = o(t)), !t) return new p;
								if (t instanceof p) return t;
								var e = (t = t.rgb()).r / 255,
									n = t.g / 255,
									r = t.b / 255,
									a = Math.min(e, n, r),
									u = Math.max(e, n, r),
									c = NaN,
									s = u - a,
									f = (u + a) / 2;
								return s ? (c = e === u ? (n - r) / s + 6 * (n < r) : n === u ? (r - e) / s + 2 : (e - n) / s + 4, s /= f < .5 ? u + a : 2 - u - a, c *= 60) : s = f > 0 && f < 1 ? 0 : c, new p(c, s, f, t.opacity)
							}(t) : new p(t, e, n, null == r ? 1 : r)
						}

						function p(t, e, n, r) {
							this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
						}

						function g(t, e, n) {
							return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
						}

						function v(t) {
							if (t instanceof b) return new b(t.l, t.a, t.b, t.opacity);
							if (t instanceof E) {
								if (isNaN(t.h)) return new b(t.l, 0, 0, t.opacity);
								var e = t.h * z;
								return new b(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
							}
							t instanceof f || (t = c(t));
							var n, r, i = S(t.r),
								o = S(t.g),
								a = S(t.b),
								u = x((.2225045 * i + .7168786 * o + .0606169 * a) / q);
							return i === o && o === a ? n = r = u : (n = x((.4360747 * i + .3850649 * o + .1430804 * a) / U), r = x((.0139322 * i + .0971045 * o + .7141733 * a) / V)), new b(116 * u - 16, 500 * (n - u), 200 * (u - r), t.opacity)
						}

						function m(t, e) {
							return new b(t, 0, 0, null == e ? 1 : e)
						}

						function y(t, e, n, r) {
							return 1 === arguments.length ? v(t) : new b(t, e, n, null == r ? 1 : r)
						}

						function b(t, e, n, r) {
							this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
						}

						function x(t) {
							return t > $ ? Math.pow(t, 1 / 3) : t / Z + W
						}

						function _(t) {
							return t > K ? t * t * t : Z * (t - W)
						}

						function w(t) {
							return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
						}

						function S(t) {
							return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
						}

						function M(t) {
							if (t instanceof E) return new E(t.h, t.c, t.l, t.opacity);
							if (t instanceof b || (t = v(t)), 0 === t.a && 0 === t.b) return new E(NaN, 0, t.l, t.opacity);
							var e = Math.atan2(t.b, t.a) * H;
							return new E(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
						}

						function O(t, e, n, r) {
							return 1 === arguments.length ? M(t) : new E(n, e, t, null == r ? 1 : r)
						}

						function P(t, e, n, r) {
							return 1 === arguments.length ? M(t) : new E(t, e, n, null == r ? 1 : r)
						}

						function E(t, e, n, r) {
							this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
						}

						function A(t, e, n, r) {
							return 1 === arguments.length ? function(t) {
								if (t instanceof C) return new C(t.h, t.s, t.l, t.opacity);
								t instanceof f || (t = c(t));
								var e = t.r / 255,
									n = t.g / 255,
									r = t.b / 255,
									i = (ot * r + rt * e - it * n) / (ot + rt - it),
									o = r - i,
									a = (nt * (n - i) - tt * o) / et,
									u = Math.sqrt(a * a + o * o) / (nt * i * (1 - i)),
									s = u ? Math.atan2(a, o) * H - 120 : NaN;
								return new C(s < 0 ? s + 360 : s, u, i, t.opacity)
							}(t) : new C(t, e, n, null == r ? 1 : r)
						}

						function C(t, e, n, r) {
							this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
						}
						var j = function(t, e, n) {
								t.prototype = e.prototype = n, n.constructor = t
							},
							k = "\\s*([+-]?\\d+)\\s*",
							I = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
							T = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
							B = /^#([0-9a-f]{3})$/,
							N = /^#([0-9a-f]{6})$/,
							L = new RegExp("^rgb\\(" + [k, k, k] + "\\)$"),
							D = new RegExp("^rgb\\(" + [T, T, T] + "\\)$"),
							R = new RegExp("^rgba\\(" + [k, k, k, I] + "\\)$"),
							G = new RegExp("^rgba\\(" + [T, T, T, I] + "\\)$"),
							Y = new RegExp("^hsl\\(" + [I, T, T] + "\\)$"),
							F = new RegExp("^hsla\\(" + [I, T, T, I] + "\\)$"),
							X = {
								aliceblue: 15792383,
								antiquewhite: 16444375,
								aqua: 65535,
								aquamarine: 8388564,
								azure: 15794175,
								beige: 16119260,
								bisque: 16770244,
								black: 0,
								blanchedalmond: 16772045,
								blue: 255,
								blueviolet: 9055202,
								brown: 10824234,
								burlywood: 14596231,
								cadetblue: 6266528,
								chartreuse: 8388352,
								chocolate: 13789470,
								coral: 16744272,
								cornflowerblue: 6591981,
								cornsilk: 16775388,
								crimson: 14423100,
								cyan: 65535,
								darkblue: 139,
								darkcyan: 35723,
								darkgoldenrod: 12092939,
								darkgray: 11119017,
								darkgreen: 25600,
								darkgrey: 11119017,
								darkkhaki: 12433259,
								darkmagenta: 9109643,
								darkolivegreen: 5597999,
								darkorange: 16747520,
								darkorchid: 10040012,
								darkred: 9109504,
								darksalmon: 15308410,
								darkseagreen: 9419919,
								darkslateblue: 4734347,
								darkslategray: 3100495,
								darkslategrey: 3100495,
								darkturquoise: 52945,
								darkviolet: 9699539,
								deeppink: 16716947,
								deepskyblue: 49151,
								dimgray: 6908265,
								dimgrey: 6908265,
								dodgerblue: 2003199,
								firebrick: 11674146,
								floralwhite: 16775920,
								forestgreen: 2263842,
								fuchsia: 16711935,
								gainsboro: 14474460,
								ghostwhite: 16316671,
								gold: 16766720,
								goldenrod: 14329120,
								gray: 8421504,
								green: 32768,
								greenyellow: 11403055,
								grey: 8421504,
								honeydew: 15794160,
								hotpink: 16738740,
								indianred: 13458524,
								indigo: 4915330,
								ivory: 16777200,
								khaki: 15787660,
								lavender: 15132410,
								lavenderblush: 16773365,
								lawngreen: 8190976,
								lemonchiffon: 16775885,
								lightblue: 11393254,
								lightcoral: 15761536,
								lightcyan: 14745599,
								lightgoldenrodyellow: 16448210,
								lightgray: 13882323,
								lightgreen: 9498256,
								lightgrey: 13882323,
								lightpink: 16758465,
								lightsalmon: 16752762,
								lightseagreen: 2142890,
								lightskyblue: 8900346,
								lightslategray: 7833753,
								lightslategrey: 7833753,
								lightsteelblue: 11584734,
								lightyellow: 16777184,
								lime: 65280,
								limegreen: 3329330,
								linen: 16445670,
								magenta: 16711935,
								maroon: 8388608,
								mediumaquamarine: 6737322,
								mediumblue: 205,
								mediumorchid: 12211667,
								mediumpurple: 9662683,
								mediumseagreen: 3978097,
								mediumslateblue: 8087790,
								mediumspringgreen: 64154,
								mediumturquoise: 4772300,
								mediumvioletred: 13047173,
								midnightblue: 1644912,
								mintcream: 16121850,
								mistyrose: 16770273,
								moccasin: 16770229,
								navajowhite: 16768685,
								navy: 128,
								oldlace: 16643558,
								olive: 8421376,
								olivedrab: 7048739,
								orange: 16753920,
								orangered: 16729344,
								orchid: 14315734,
								palegoldenrod: 15657130,
								palegreen: 10025880,
								paleturquoise: 11529966,
								palevioletred: 14381203,
								papayawhip: 16773077,
								peachpuff: 16767673,
								peru: 13468991,
								pink: 16761035,
								plum: 14524637,
								powderblue: 11591910,
								purple: 8388736,
								rebeccapurple: 6697881,
								red: 16711680,
								rosybrown: 12357519,
								royalblue: 4286945,
								saddlebrown: 9127187,
								salmon: 16416882,
								sandybrown: 16032864,
								seagreen: 3050327,
								seashell: 16774638,
								sienna: 10506797,
								silver: 12632256,
								skyblue: 8900331,
								slateblue: 6970061,
								slategray: 7372944,
								slategrey: 7372944,
								snow: 16775930,
								springgreen: 65407,
								steelblue: 4620980,
								tan: 13808780,
								teal: 32896,
								thistle: 14204888,
								tomato: 16737095,
								turquoise: 4251856,
								violet: 15631086,
								wheat: 16113331,
								white: 16777215,
								whitesmoke: 16119285,
								yellow: 16776960,
								yellowgreen: 10145074
							};
						j(i, o, {
							displayable: function() {
								return this.rgb().displayable()
							},
							hex: function() {
								return this.rgb().hex()
							},
							toString: function() {
								return this.rgb() + ""
							}
						}), j(f, s, r(i, {
							brighter: function(t) {
								return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new f(this.r * t, this.g * t, this.b * t, this.opacity)
							},
							darker: function(t) {
								return t = null == t ? .7 : Math.pow(.7, t), new f(this.r * t, this.g * t, this.b * t, this.opacity)
							},
							rgb: function() {
								return this
							},
							displayable: function() {
								return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
							},
							hex: function() {
								return "#" + l(this.r) + l(this.g) + l(this.b)
							},
							toString: function() {
								var t = this.opacity;
								return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
							}
						})), j(p, d, r(i, {
							brighter: function(t) {
								return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new p(this.h, this.s, this.l * t, this.opacity)
							},
							darker: function(t) {
								return t = null == t ? .7 : Math.pow(.7, t), new p(this.h, this.s, this.l * t, this.opacity)
							},
							rgb: function() {
								var t = this.h % 360 + 360 * (this.h < 0),
									e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
									n = this.l,
									r = n + (n < .5 ? n : 1 - n) * e,
									i = 2 * n - r;
								return new f(g(t >= 240 ? t - 240 : t + 120, i, r), g(t, i, r), g(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
							},
							displayable: function() {
								return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
							}
						}));
						var z = Math.PI / 180,
							H = 180 / Math.PI,
							U = .96422,
							q = 1,
							V = .82521,
							W = 4 / 29,
							K = 6 / 29,
							Z = 3 * K * K,
							$ = K * K * K;
						j(b, y, r(i, {
							brighter: function(t) {
								return new b(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
							},
							darker: function(t) {
								return new b(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
							},
							rgb: function() {
								var t = (this.l + 16) / 116,
									e = isNaN(this.a) ? t : t + this.a / 500,
									n = isNaN(this.b) ? t : t - this.b / 200;
								return new f(w(3.1338561 * (e = U * _(e)) - 1.6168667 * (t = q * _(t)) - .4906146 * (n = V * _(n))), w(-.9787684 * e + 1.9161415 * t + .033454 * n), w(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
							}
						})), j(E, P, r(i, {
							brighter: function(t) {
								return new E(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
							},
							darker: function(t) {
								return new E(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
							},
							rgb: function() {
								return v(this).rgb()
							}
						}));
						var Q = -.14861,
							J = 1.78277,
							tt = -.29227,
							et = -.90649,
							nt = 1.97294,
							rt = nt * et,
							it = nt * J,
							ot = J * tt - et * Q;
						j(C, A, r(i, {
							brighter: function(t) {
								return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new C(this.h, this.s, this.l * t, this.opacity)
							},
							darker: function(t) {
								return t = null == t ? .7 : Math.pow(.7, t), new C(this.h, this.s, this.l * t, this.opacity)
							},
							rgb: function() {
								var t = isNaN(this.h) ? 0 : (this.h + 120) * z,
									e = +this.l,
									n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
									r = Math.cos(t),
									i = Math.sin(t);
								return new f(255 * (e + n * (Q * r + J * i)), 255 * (e + n * (tt * r + et * i)), 255 * (e + n * (nt * r)), this.opacity)
							}
						})), n.d(e, "a", function() {
							return o
						}), n.d(e, "h", function() {
							return s
						}), n.d(e, "e", function() {
							return d
						}), n.d(e, "f", function() {
							return y
						}), n.d(e, "d", function() {
							return P
						}), n.d(e, "g", function() {
							return O
						}), n.d(e, "c", function() {
							return m
						}), n.d(e, "b", function() {
							return A
						})
					}, , , , , , , , , , , , , , function(t, e, n) {
						function r() {
							return b || (w(i), b = _.now() + x)
						}

						function i() {
							b = 0
						}

						function a() {
							this._call = this._time = this._next = null
						}

						function u(t, e, n) {
							var r = new a;
							return r.restart(t, e, n), r
						}

						function c() {
							r(), ++p;
							for (var t, e = h; e;)(t = b - e._time) >= 0 && e._call.call(null, t), e = e._next;
							--p
						}

						function s() {
							b = (y = _.now()) + x, p = g = 0;
							try {
								c()
							} finally {
								p = 0,
									function() {
										for (var t, e, n = h, r = 1 / 0; n;) n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : h = e);
										d = t, l(r)
									}(), b = 0
							}
						}

						function f() {
							var t = _.now(),
								e = t - y;
							e > m && (x -= e, y = t)
						}

						function l(t) {
							p || (g && (g = clearTimeout(g)), t - b > 24 ? (t < 1 / 0 && (g = setTimeout(s, t - _.now() - x)), v && (v = clearInterval(v))) : (v || (y = _.now(), v = setInterval(f, m)), p = 1, w(s)))
						}
						n.r(e);
						var h, d, p = 0,
							g = 0,
							v = 0,
							m = 1e3,
							y = 0,
							b = 0,
							x = 0,
							_ = "object" == ("undefined" == typeof performance ? "undefined" : o(performance)) && performance.now ? performance : Date,
							w = "object" == ("undefined" == typeof window ? "undefined" : o(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
								setTimeout(t, 17)
							};
						a.prototype = u.prototype = {
							constructor: a,
							restart: function(t, e, n) {
								if ("function" != typeof t) throw new TypeError("callback is not a function");
								n = (null == n ? r() : +n) + (null == e ? 0 : +e), this._next || d === this || (d ? d._next = this : h = this, d = this), this._call = t, this._time = n, l()
							},
							stop: function() {
								this._call && (this._call = null, this._time = 1 / 0, l())
							}
						};
						var S = function(t, e, n) {
								var r = new a;
								return e = null == e ? 0 : +e, r.restart(function(n) {
									r.stop(), t(n + e)
								}, e, n), r
							},
							M = function(t, e, n) {
								var i = new a,
									o = e;
								return null == e ? (i.restart(t, e, n), i) : (e = +e, n = null == n ? r() : +n, i.restart(function r(a) {
									a += o, i.restart(r, o += e, n), t(a)
								}, e, n), i)
							};
						n.d(e, "now", function() {
							return r
						}), n.d(e, "timer", function() {
							return u
						}), n.d(e, "timerFlush", function() {
							return c
						}), n.d(e, "timeout", function() {
							return S
						}), n.d(e, "interval", function() {
							return M
						})
					}, , function(t, e, n) {
						var r = n(440),
							i = {};
						r.merge(i, r, {
							mixin: function(t, e) {
								var n = t.CFG ? "CFG" : "ATTRS";
								if (t && e) {
									t._mixins = e, t[n] = t[n] || {};
									var r = {};
									i.each(e, function(e) {
										i.augment(t, e);
										var o = e[n];
										o && i.merge(r, o)
									}), t[n] = i.merge(r, t[n])
								}
							}
						}), t.exports = i
					}, , , , , function(t, e, n) {
						var r = {},
							i = n(508),
							o = n(574),
							a = n(159),
							u = n(553),
							c = n(552),
							s = n(551),
							f = n(550);
						a.mix(r, a, c, s, u, o, i, f), t.exports = r
					}, , , , , , function(t, e, n) {
						function r(t) {
							return +t
						}

						function i(t) {
							return t * t
						}

						function o(t) {
							return t * (2 - t)
						}

						function a(t) {
							return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
						}

						function u(t) {
							return t * t * t
						}

						function c(t) {
							return --t * t * t + 1
						}

						function s(t) {
							return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
						}

						function f(t) {
							return 1 - Math.cos(t * P)
						}

						function l(t) {
							return Math.sin(t * P)
						}

						function h(t) {
							return (1 - Math.cos(O * t)) / 2
						}

						function d(t) {
							return Math.pow(2, 10 * t - 10)
						}

						function p(t) {
							return 1 - Math.pow(2, -10 * t)
						}

						function g(t) {
							return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
						}

						function v(t) {
							return 1 - Math.sqrt(1 - t * t)
						}

						function m(t) {
							return Math.sqrt(1 - --t * t)
						}

						function y(t) {
							return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
						}

						function b(t) {
							return 1 - x(1 - t)
						}

						function x(t) {
							return (t = +t) < E ? L * t * t : t < C ? L * (t -= A) * t + j : t < I ? L * (t -= k) * t + T : L * (t -= B) * t + N
						}

						function _(t) {
							return ((t *= 2) <= 1 ? 1 - x(1 - t) : x(t - 1) + 1) / 2
						}
						n.r(e);
						var w = function t(e) {
								function n(t) {
									return Math.pow(t, e)
								}
								return e = +e, n.exponent = t, n
							}(3),
							S = function t(e) {
								function n(t) {
									return 1 - Math.pow(1 - t, e)
								}
								return e = +e, n.exponent = t, n
							}(3),
							M = function t(e) {
								function n(t) {
									return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
								}
								return e = +e, n.exponent = t, n
							}(3),
							O = Math.PI,
							P = O / 2,
							E = 4 / 11,
							A = 6 / 11,
							C = 8 / 11,
							j = .75,
							k = 9 / 11,
							I = 10 / 11,
							T = .9375,
							B = 21 / 22,
							N = 63 / 64,
							L = 1 / E / E,
							D = function t(e) {
								function n(t) {
									return t * t * ((e + 1) * t - e)
								}
								return e = +e, n.overshoot = t, n
							}(1.70158),
							R = function t(e) {
								function n(t) {
									return --t * t * ((e + 1) * t + e) + 1
								}
								return e = +e, n.overshoot = t, n
							}(1.70158),
							G = function t(e) {
								function n(t) {
									return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
								}
								return e = +e, n.overshoot = t, n
							}(1.70158),
							Y = 2 * Math.PI,
							F = function t(e, n) {
								function r(t) {
									return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n)
								}
								var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
								return r.amplitude = function(e) {
									return t(e, n * Y)
								}, r.period = function(n) {
									return t(e, n)
								}, r
							}(1, .3),
							X = function t(e, n) {
								function r(t) {
									return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n)
								}
								var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
								return r.amplitude = function(e) {
									return t(e, n * Y)
								}, r.period = function(n) {
									return t(e, n)
								}, r
							}(1, .3),
							z = function t(e, n) {
								function r(t) {
									return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2
								}
								var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= Y);
								return r.amplitude = function(e) {
									return t(e, n * Y)
								}, r.period = function(n) {
									return t(e, n)
								}, r
							}(1, .3);
						n.d(e, "easeLinear", function() {
							return r
						}), n.d(e, "easeQuad", function() {
							return a
						}), n.d(e, "easeQuadIn", function() {
							return i
						}), n.d(e, "easeQuadOut", function() {
							return o
						}), n.d(e, "easeQuadInOut", function() {
							return a
						}), n.d(e, "easeCubic", function() {
							return s
						}), n.d(e, "easeCubicIn", function() {
							return u
						}), n.d(e, "easeCubicOut", function() {
							return c
						}), n.d(e, "easeCubicInOut", function() {
							return s
						}), n.d(e, "easePoly", function() {
							return M
						}), n.d(e, "easePolyIn", function() {
							return w
						}), n.d(e, "easePolyOut", function() {
							return S
						}), n.d(e, "easePolyInOut", function() {
							return M
						}), n.d(e, "easeSin", function() {
							return h
						}), n.d(e, "easeSinIn", function() {
							return f
						}), n.d(e, "easeSinOut", function() {
							return l
						}), n.d(e, "easeSinInOut", function() {
							return h
						}), n.d(e, "easeExp", function() {
							return g
						}), n.d(e, "easeExpIn", function() {
							return d
						}), n.d(e, "easeExpOut", function() {
							return p
						}), n.d(e, "easeExpInOut", function() {
							return g
						}), n.d(e, "easeCircle", function() {
							return y
						}), n.d(e, "easeCircleIn", function() {
							return v
						}), n.d(e, "easeCircleOut", function() {
							return m
						}), n.d(e, "easeCircleInOut", function() {
							return y
						}), n.d(e, "easeBounce", function() {
							return x
						}), n.d(e, "easeBounceIn", function() {
							return b
						}), n.d(e, "easeBounceOut", function() {
							return x
						}), n.d(e, "easeBounceInOut", function() {
							return _
						}), n.d(e, "easeBack", function() {
							return G
						}), n.d(e, "easeBackIn", function() {
							return D
						}), n.d(e, "easeBackOut", function() {
							return R
						}), n.d(e, "easeBackInOut", function() {
							return G
						}), n.d(e, "easeElastic", function() {
							return X
						}), n.d(e, "easeElasticIn", function() {
							return F
						}), n.d(e, "easeElasticOut", function() {
							return X
						}), n.d(e, "easeElasticInOut", function() {
							return z
						})
					}, function(t, e, n) {
						var r = n(61),
							i = Array.isArray ? Array.isArray : function(t) {
								return r(t, "Array")
							};
						t.exports = i
					}, function(t, e, n) {
						var r = n(417),
							i = n(29);
						t.exports = function(t, e) {
							if (t)
								if (i(t))
									for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++);
								else if (r(t))
								for (var a in t)
									if (t.hasOwnProperty(a) && !1 === e(t[a], a)) break
						}
					}, , , , , , , function(t, e, n) {
						var r = n(17),
							i = n(568),
							o = n(437),
							a = n(392),
							u = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						u.ATTRS = {}, r.extend(u, o);
						var c = {
							matrix: "matrix",
							path: "path",
							points: "points",
							lineDash: "lineDash"
						};
						r.augment(u, i, {
							isShape: !0,
							drawInner: function(t) {
								var e = this._attrs;
								this.createPath(t);
								var n = t.globalAlpha;
								if (this.hasFill()) {
									var i = e.fillOpacity;
									r.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i, t.fill(), t.globalAlpha = n)
								}
								if (this.hasStroke() && this._attrs.lineWidth > 0) {
									var o = e.strokeOpacity;
									r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke()
								}
								this.afterPath(t)
							},
							afterPath: function() {},
							isHitBox: function() {
								return !0
							},
							isHit: function(t, e) {
								var n = [t, e, 1];
								if (this.invert(n), this.isHitBox()) {
									var r = this.getBBox();
									if (r && !a.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1])) return !1
								}
								var i = this._attrs.clip;
								return i ? (i.invert(n, this.get("canvas")), !!i.isPointInPath(n[0], n[1]) && this.isPointInPath(n[0], n[1])) : this.isPointInPath(n[0], n[1])
							},
							calculateBox: function() {
								return null
							},
							getHitLineWidth: function() {
								var t = this._attrs,
									e = t.lineAppendWidth || 0;
								return (t.lineWidth || 0) + e
							},
							clearTotalMatrix: function() {
								this._cfg.totalMatrix = null, this._cfg.region = null
							},
							clearBBox: function() {
								this._cfg.box = null, this._cfg.region = null
							},
							getBBox: function() {
								var t = this._cfg.box;
								return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._cfg.box = t), t
							},
							clone: function() {
								var t = null,
									e = this._attrs,
									n = {};
								return r.each(e, function(t, i) {
									c[i] && r.isArray(e[i]) ? n[i] = function(t) {
										for (var e = [], n = 0; n < t.length; n++) r.isArray(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
										return e
									}(e[i]) : n[i] = e[i]
								}), (t = new this.constructor({
									attrs: n
								}))._cfg.zIndex = this._cfg.zIndex, t
							}
						}), t.exports = u
					}, function(t, e, n) {
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.setMatrixArrayType = function(t) {
							e.ARRAY_TYPE = t
						}, e.toRadian = function(t) {
							return t * i
						}, e.equals = function(t, e) {
							return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
						};
						var r = e.EPSILON = 1e-6;
						e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, e.RANDOM = Math.random;
						var i = Math.PI / 180
					}, , , , , , , , , function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Function")
						}
					}, , , , , , , , , , , , , function(t, e, n) {
						var r = n(470),
							i = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self,
							a = r || i || Function("return this")();
						t.exports = a
					}, function(t, e) {
						var n = {}.toString;
						t.exports = function(t, e) {
							return n.call(t) === "[object " + e + "]"
						}
					}, function(t, e, n) {
						var r;
						/*!
						 * EventEmitter v5.1.0 - git.io/ee
						 * Unlicense - http://unlicense.org/
						 * Oliver Caldwell - http://oli.me.uk/
						 * @preserve
						 */
						! function(e) {
							function i() {}

							function a(t, e) {
								for (var n = t.length; n--;)
									if (t[n].listener === e) return n;
								return -1
							}

							function u(t) {
								return function() {
									return this[t].apply(this, arguments)
								}
							}
							var c = i.prototype,
								s = e.EventEmitter;
							c.getListeners = function(t) {
								var e, n, r = this._getEvents();
								if (t instanceof RegExp)
									for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
								else e = r[t] || (r[t] = []);
								return e
							}, c.flattenListeners = function(t) {
								var e, n = [];
								for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
								return n
							}, c.getListenersAsObject = function(t) {
								var e, n = this.getListeners(t);
								return n instanceof Array && ((e = {})[t] = n), e || n
							}, c.addListener = function(t, e) {
								if (! function t(e) {
										return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : o(e))) && t(e.listener)
									}(e)) throw new TypeError("listener must be a function");
								var n, r = this.getListenersAsObject(t),
									i = "object" == (void 0 === e ? "undefined" : o(e));
								for (n in r) r.hasOwnProperty(n) && -1 === a(r[n], e) && r[n].push(i ? e : {
									listener: e,
									once: !1
								});
								return this
							}, c.on = u("addListener"), c.addOnceListener = function(t, e) {
								return this.addListener(t, {
									listener: e,
									once: !0
								})
							}, c.once = u("addOnceListener"), c.defineEvent = function(t) {
								return this.getListeners(t), this
							}, c.defineEvents = function(t) {
								for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
								return this
							}, c.removeListener = function(t, e) {
								var n, r, i = this.getListenersAsObject(t);
								for (r in i) i.hasOwnProperty(r) && -1 !== (n = a(i[r], e)) && i[r].splice(n, 1);
								return this
							}, c.off = u("removeListener"), c.addListeners = function(t, e) {
								return this.manipulateListeners(!1, t, e)
							}, c.removeListeners = function(t, e) {
								return this.manipulateListeners(!0, t, e)
							}, c.manipulateListeners = function(t, e, n) {
								var r, i, a = t ? this.removeListener : this.addListener,
									u = t ? this.removeListeners : this.addListeners;
								if ("object" != (void 0 === e ? "undefined" : o(e)) || e instanceof RegExp)
									for (r = n.length; r--;) a.call(this, e, n[r]);
								else
									for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? a.call(this, r, i) : u.call(this, r, i));
								return this
							}, c.removeEvent = function(t) {
								var e, n = void 0 === t ? "undefined" : o(t),
									r = this._getEvents();
								if ("string" === n) delete r[t];
								else if (t instanceof RegExp)
									for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
								else delete this._events;
								return this
							}, c.removeAllListeners = u("removeEvent"), c.emitEvent = function(t, e) {
								var n, r, i, o, a = this.getListenersAsObject(t);
								for (o in a)
									if (a.hasOwnProperty(o))
										for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
								return this
							}, c.trigger = u("emitEvent"), c.emit = function(t) {
								var e = Array.prototype.slice.call(arguments, 1);
								return this.emitEvent(t, e)
							}, c.setOnceReturnValue = function(t) {
								return this._onceReturnValue = t, this
							}, c._getOnceReturnValue = function() {
								return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
							}, c._getEvents = function() {
								return this._events || (this._events = {})
							}, i.noConflict = function() {
								return e.EventEmitter = s, i
							}, void 0 === (r = function() {
								return i
							}.call(e, n, e, t)) || (t.exports = r)
						}(this || {})
					}, function(t, e) {
						var n = Array.isArray;
						t.exports = n
					}, function(t, e) {
						t.exports = function(t) {
							return null !== t && "function" != typeof t && isFinite(t.length)
						}
					}, , , , , , , , , , function(t, e) {
						t.exports = function(t) {
							return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
								enumerable: !0,
								get: function() {
									return t.l
								}
							}), Object.defineProperty(t, "id", {
								enumerable: !0,
								get: function() {
									return t.i
								}
							}), t.webpackPolyfill = 1), t
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = void 0 === t ? "undefined" : o(t);
							return null != t && ("object" == e || "function" == e)
						}
					}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
						t.exports = function(t) {
							return null != t && "object" == (void 0 === t ? "undefined" : o(t))
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Number")
						}
					}, function(t, e) {
						t.exports = function(t) {
							return null === t || void 0 === t
						}
					}, function(t, e, n) {
						function r(t, e, n, r, i) {
							var o = t * t,
								a = o * t;
							return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
						}

						function i(t, e) {
							return function(n) {
								return t + n * e
							}
						}

						function a(t, e) {
							var n = e - t;
							return n ? i(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : w(isNaN(t) ? e : t)
						}

						function u(t, e) {
							var n = e - t;
							return n ? i(t, n) : w(isNaN(t) ? e : t)
						}

						function c(t) {
							return function(e) {
								var n, r, i = e.length,
									o = new Array(i),
									a = new Array(i),
									u = new Array(i);
								for (n = 0; n < i; ++n) r = Object(b.h)(e[n]), o[n] = r.r || 0, a[n] = r.g || 0, u[n] = r.b || 0;
								return o = t(o), a = t(a), u = t(u), r.opacity = 1,
									function(t) {
										return r.r = o(t), r.g = a(t), r.b = u(t), r + ""
									}
							}
						}

						function s(t, e, n, r) {
							function i(t) {
								return t.length ? t.pop() + " " : ""
							}
							return function(o, a) {
								var u = [],
									c = [];
								return o = t(o), a = t(a),
									function(t, r, i, o, a, u) {
										if (t !== i || r !== o) {
											var c = a.push("translate(", null, e, null, n);
											u.push({
												i: c - 4,
												x: A(t, i)
											}, {
												i: c - 2,
												x: A(r, o)
											})
										} else(i || o) && a.push("translate(" + i + e + o + n)
									}(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
									function(t, e, n, o) {
										t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({
											i: n.push(i(n) + "rotate(", null, r) - 2,
											x: A(t, e)
										})) : e && n.push(i(n) + "rotate(" + e + r)
									}(o.rotate, a.rotate, u, c),
									function(t, e, n, o) {
										t !== e ? o.push({
											i: n.push(i(n) + "skewX(", null, r) - 2,
											x: A(t, e)
										}) : e && n.push(i(n) + "skewX(" + e + r)
									}(o.skewX, a.skewX, u, c),
									function(t, e, n, r, o, a) {
										if (t !== n || e !== r) {
											var u = o.push(i(o) + "scale(", null, ",", null, ")");
											a.push({
												i: u - 4,
												x: A(t, n)
											}, {
												i: u - 2,
												x: A(e, r)
											})
										} else 1 === n && 1 === r || o.push(i(o) + "scale(" + n + "," + r + ")")
									}(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null,
									function(t) {
										for (var e, n = -1, r = c.length; ++n < r;) u[(e = c[n]).i] = e.x(t);
										return u.join("")
									}
							}
						}

						function f(t) {
							return ((t = Math.exp(t)) + 1 / t) / 2
						}

						function l(t) {
							return function(e, n) {
								var r = t((e = Object(b.e)(e)).h, (n = Object(b.e)(n)).h),
									i = u(e.s, n.s),
									o = u(e.l, n.l),
									a = u(e.opacity, n.opacity);
								return function(t) {
									return e.h = r(t), e.s = i(t), e.l = o(t), e.opacity = a(t), e + ""
								}
							}
						}

						function h(t, e) {
							var n = u((t = Object(b.f)(t)).l, (e = Object(b.f)(e)).l),
								r = u(t.a, e.a),
								i = u(t.b, e.b),
								o = u(t.opacity, e.opacity);
							return function(e) {
								return t.l = n(e), t.a = r(e), t.b = i(e), t.opacity = o(e), t + ""
							}
						}

						function d(t) {
							return function(e, n) {
								var r = t((e = Object(b.d)(e)).h, (n = Object(b.d)(n)).h),
									i = u(e.c, n.c),
									o = u(e.l, n.l),
									a = u(e.opacity, n.opacity);
								return function(t) {
									return e.h = r(t), e.c = i(t), e.l = o(t), e.opacity = a(t), e + ""
								}
							}
						}

						function p(t) {
							return function e(n) {
								function r(e, r) {
									var i = t((e = Object(b.b)(e)).h, (r = Object(b.b)(r)).h),
										o = u(e.s, r.s),
										a = u(e.l, r.l),
										c = u(e.opacity, r.opacity);
									return function(t) {
										return e.h = i(t), e.s = o(t), e.l = a(Math.pow(t, n)), e.opacity = c(t), e + ""
									}
								}
								return n = +n, r.gamma = e, r
							}(1)
						}
						n.r(e);
						var g, v, m, y, b = n(1),
							x = function(t) {
								var e = t.length - 1;
								return function(n) {
									var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
										o = t[i],
										a = t[i + 1],
										u = i > 0 ? t[i - 1] : 2 * o - a,
										c = i < e - 1 ? t[i + 2] : 2 * a - o;
									return r((n - i / e) * e, u, o, a, c)
								}
							},
							_ = function(t) {
								var e = t.length;
								return function(n) {
									var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
										o = t[(i + e - 1) % e],
										a = t[i % e],
										u = t[(i + 1) % e],
										c = t[(i + 2) % e];
									return r((n - i / e) * e, o, a, u, c)
								}
							},
							w = function(t) {
								return function() {
									return t
								}
							},
							S = function t(e) {
								function n(t, e) {
									var n = r((t = Object(b.h)(t)).r, (e = Object(b.h)(e)).r),
										i = r(t.g, e.g),
										o = r(t.b, e.b),
										a = u(t.opacity, e.opacity);
									return function(e) {
										return t.r = n(e), t.g = i(e), t.b = o(e), t.opacity = a(e), t + ""
									}
								}
								var r = function(t) {
									return 1 == (t = +t) ? u : function(e, n) {
										return n - e ? function(t, e, n) {
											return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
												function(r) {
													return Math.pow(t + r * e, n)
												}
										}(e, n, t) : w(isNaN(e) ? n : e)
									}
								}(e);
								return n.gamma = t, n
							}(1),
							M = c(x),
							O = c(_),
							P = function(t, e) {
								var n, r = e ? e.length : 0,
									i = t ? Math.min(r, t.length) : 0,
									o = new Array(i),
									a = new Array(r);
								for (n = 0; n < i; ++n) o[n] = T(t[n], e[n]);
								for (; n < r; ++n) a[n] = e[n];
								return function(t) {
									for (n = 0; n < i; ++n) a[n] = o[n](t);
									return a
								}
							},
							E = function(t, e) {
								var n = new Date;
								return e -= t = +t,
									function(r) {
										return n.setTime(t + e * r), n
									}
							},
							A = function(t, e) {
								return e -= t = +t,
									function(n) {
										return t + e * n
									}
							},
							C = function(t, e) {
								var n, r = {},
									i = {};
								for (n in null !== t && "object" == (void 0 === t ? "undefined" : o(t)) || (t = {}), null !== e && "object" == (void 0 === e ? "undefined" : o(e)) || (e = {}), e) n in t ? r[n] = T(t[n], e[n]) : i[n] = e[n];
								return function(t) {
									for (n in r) i[n] = r[n](t);
									return i
								}
							},
							j = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
							k = new RegExp(j.source, "g"),
							I = function(t, e) {
								var n, r, i, o = j.lastIndex = k.lastIndex = 0,
									a = -1,
									u = [],
									c = [];
								for (t += "", e += "";
									(n = j.exec(t)) && (r = k.exec(e));)(i = r.index) > o && (i = e.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({
									i: a,
									x: A(n, r)
								})), o = k.lastIndex;
								return o < e.length && (i = e.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function(t) {
									return function(e) {
										return t(e) + ""
									}
								}(c[0].x) : function(t) {
									return function() {
										return t
									}
								}(e) : (e = c.length, function(t) {
									for (var n, r = 0; r < e; ++r) u[(n = c[r]).i] = n.x(t);
									return u.join("")
								})
							},
							T = function(t, e) {
								var n, r = void 0 === e ? "undefined" : o(e);
								return null == e || "boolean" === r ? w(e) : ("number" === r ? A : "string" === r ? (n = Object(b.a)(e)) ? (e = n, S) : I : e instanceof b.a ? S : e instanceof Date ? E : Array.isArray(e) ? P : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? C : A)(t, e)
							},
							B = function(t, e) {
								return e -= t = +t,
									function(n) {
										return Math.round(t + e * n)
									}
							},
							N = 180 / Math.PI,
							L = {
								translateX: 0,
								translateY: 0,
								rotate: 0,
								skewX: 0,
								scaleX: 1,
								scaleY: 1
							},
							D = function(t, e, n, r, i, o) {
								var a, u, c;
								return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, c /= u), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
									translateX: i,
									translateY: o,
									rotate: Math.atan2(e, t) * N,
									skewX: Math.atan(c) * N,
									scaleX: a,
									scaleY: u
								}
							},
							R = s(function(t) {
								return "none" === t ? L : (g || (g = document.createElement("DIV"), v = document.documentElement, m = document.defaultView), g.style.transform = t, t = m.getComputedStyle(v.appendChild(g), null).getPropertyValue("transform"), v.removeChild(g), t = t.slice(7, -1).split(","), D(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
							}, "px, ", "px)", "deg)"),
							G = s(function(t) {
								return null == t ? L : (y || (y = document.createElementNS("http://www.w3.org/2000/svg", "g")), y.setAttribute("transform", t), (t = y.transform.baseVal.consolidate()) ? (t = t.matrix, D(t.a, t.b, t.c, t.d, t.e, t.f)) : L)
							}, ", ", ")", ")"),
							Y = Math.SQRT2,
							F = function(t, e) {
								var n, r, i = t[0],
									o = t[1],
									a = t[2],
									u = e[0],
									c = e[1],
									s = e[2],
									l = u - i,
									h = c - o,
									d = l * l + h * h;
								if (d < 1e-12) r = Math.log(s / a) / Y, n = function(t) {
									return [i + t * l, o + t * h, a * Math.exp(Y * t * r)]
								};
								else {
									var p = Math.sqrt(d),
										g = (s * s - a * a + 4 * d) / (2 * a * 2 * p),
										v = (s * s - a * a - 4 * d) / (2 * s * 2 * p),
										m = Math.log(Math.sqrt(g * g + 1) - g),
										y = Math.log(Math.sqrt(v * v + 1) - v);
									r = (y - m) / Y, n = function(t) {
										var e = t * r,
											n = f(m),
											u = a / (2 * p) * (n * function(t) {
												return ((t = Math.exp(2 * t)) - 1) / (t + 1)
											}(Y * e + m) - function(t) {
												return ((t = Math.exp(t)) - 1 / t) / 2
											}(m));
										return [i + u * l, o + u * h, a * n / f(Y * e + m)]
									}
								}
								return n.duration = 1e3 * r, n
							},
							X = l(a),
							z = l(u),
							H = d(a),
							U = d(u),
							q = p(a),
							V = p(u),
							W = function(t, e) {
								for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t(r / (e - 1));
								return n
							};
						n.d(e, "interpolate", function() {
							return T
						}), n.d(e, "interpolateArray", function() {
							return P
						}), n.d(e, "interpolateBasis", function() {
							return x
						}), n.d(e, "interpolateBasisClosed", function() {
							return _
						}), n.d(e, "interpolateDate", function() {
							return E
						}), n.d(e, "interpolateNumber", function() {
							return A
						}), n.d(e, "interpolateObject", function() {
							return C
						}), n.d(e, "interpolateRound", function() {
							return B
						}), n.d(e, "interpolateString", function() {
							return I
						}), n.d(e, "interpolateTransformCss", function() {
							return R
						}), n.d(e, "interpolateTransformSvg", function() {
							return G
						}), n.d(e, "interpolateZoom", function() {
							return F
						}), n.d(e, "interpolateRgb", function() {
							return S
						}), n.d(e, "interpolateRgbBasis", function() {
							return M
						}), n.d(e, "interpolateRgbBasisClosed", function() {
							return O
						}), n.d(e, "interpolateHsl", function() {
							return X
						}), n.d(e, "interpolateHslLong", function() {
							return z
						}), n.d(e, "interpolateLab", function() {
							return h
						}), n.d(e, "interpolateHcl", function() {
							return H
						}), n.d(e, "interpolateHclLong", function() {
							return U
						}), n.d(e, "interpolateCubehelix", function() {
							return q
						}), n.d(e, "interpolateCubehelixLong", function() {
							return V
						}), n.d(e, "quantize", function() {
							return W
						})
					}, , , , , , , , , function(t, e, n) {
						var r = n(388);
						t.exports = {
							track: !0,
							defaultNodeSize: 40,
							labelStyle: {
								fill: "#595959",
								textAlign: "center",
								textBaseline: "middle"
							},
							groupStyle: {
								stroke: "#CED4D9",
								fill: "#F2F4F5",
								radius: 2
							},
							groupBackgroundPadding: [40, 10, 10, 10],
							updateDuration: 450,
							enterDuration: 450,
							leaveDuration: 450,
							updateEasing: "easeQuadOut",
							enterEasing: "easeQuadOut",
							leaveEasing: "easeQuadOut",
							version: r
						}
					}, function(t, e, n) {
						t.exports = {
							Canvas: n(573),
							Group: n(438),
							Shape: n(37),
							Arc: n(434),
							Circle: n(433),
							Dom: n(432),
							Ellipse: n(431),
							Fan: n(430),
							Image: n(429),
							Line: n(428),
							Marker: n(390),
							Path: n(427),
							Polygon: n(426),
							Polyline: n(425),
							Rect: n(424),
							Text: n(423),
							PathSegment: n(371),
							PathUtil: n(389),
							Event: n(439),
							version: "3.3.4"
						}
					}, function(t, e, n) {
						var r = n(662),
							i = n(659);
						t.exports = function(t, e) {
							var n = i(t, e);
							return r(n) ? n : void 0
						}
					}, function(t, e) {
						var n;
						n = function() {
							return this
						}();
						try {
							n = n || Function("return this")() || (0, eval)("this")
						} catch (t) {
							"object" == ("undefined" == typeof window ? "undefined" : o(window)) && (n = window)
						}
						t.exports = n
					}, function(t, e, n) {
						function r() {
							var t = new p.ARRAY_TYPE(3);
							return p.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
						}

						function i(t) {
							var e = t[0],
								n = t[1],
								r = t[2];
							return Math.sqrt(e * e + n * n + r * r)
						}

						function o(t, e, n) {
							var r = new p.ARRAY_TYPE(3);
							return r[0] = t, r[1] = e, r[2] = n, r
						}

						function a(t, e, n) {
							return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t
						}

						function u(t, e, n) {
							return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t
						}

						function c(t, e, n) {
							return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t
						}

						function s(t, e) {
							var n = e[0] - t[0],
								r = e[1] - t[1],
								i = e[2] - t[2];
							return Math.sqrt(n * n + r * r + i * i)
						}

						function f(t, e) {
							var n = e[0] - t[0],
								r = e[1] - t[1],
								i = e[2] - t[2];
							return n * n + r * r + i * i
						}

						function l(t) {
							var e = t[0],
								n = t[1],
								r = t[2];
							return e * e + n * n + r * r
						}

						function h(t, e) {
							var n = e[0],
								r = e[1],
								i = e[2],
								o = n * n + r * r + i * i;
							return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
						}

						function d(t, e) {
							return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
						}
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0, e.create = r, e.clone = function(t) {
							var e = new p.ARRAY_TYPE(3);
							return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
						}, e.length = i, e.fromValues = o, e.copy = function(t, e) {
							return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
						}, e.set = function(t, e, n, r) {
							return t[0] = e, t[1] = n, t[2] = r, t
						}, e.add = function(t, e, n) {
							return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t
						}, e.subtract = a, e.multiply = u, e.divide = c, e.ceil = function(t, e) {
							return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
						}, e.floor = function(t, e) {
							return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
						}, e.min = function(t, e, n) {
							return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t
						}, e.max = function(t, e, n) {
							return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t
						}, e.round = function(t, e) {
							return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
						}, e.scale = function(t, e, n) {
							return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
						}, e.scaleAndAdd = function(t, e, n, r) {
							return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t
						}, e.distance = s, e.squaredDistance = f, e.squaredLength = l, e.negate = function(t, e) {
							return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
						}, e.inverse = function(t, e) {
							return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
						}, e.normalize = h, e.dot = d, e.cross = function(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2],
								a = n[0],
								u = n[1],
								c = n[2];
							return t[0] = i * c - o * u, t[1] = o * a - r * c, t[2] = r * u - i * a, t
						}, e.lerp = function(t, e, n, r) {
							var i = e[0],
								o = e[1],
								a = e[2];
							return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t
						}, e.hermite = function(t, e, n, r, i, o) {
							var a = o * o,
								u = a * (2 * o - 3) + 1,
								c = a * (o - 2) + o,
								s = a * (o - 1),
								f = a * (3 - 2 * o);
							return t[0] = e[0] * u + n[0] * c + r[0] * s + i[0] * f, t[1] = e[1] * u + n[1] * c + r[1] * s + i[1] * f, t[2] = e[2] * u + n[2] * c + r[2] * s + i[2] * f, t
						}, e.bezier = function(t, e, n, r, i, o) {
							var a = 1 - o,
								u = a * a,
								c = o * o,
								s = u * a,
								f = 3 * o * u,
								l = 3 * c * a,
								h = c * o;
							return t[0] = e[0] * s + n[0] * f + r[0] * l + i[0] * h, t[1] = e[1] * s + n[1] * f + r[1] * l + i[1] * h, t[2] = e[2] * s + n[2] * f + r[2] * l + i[2] * h, t
						}, e.random = function(t, e) {
							e = e || 1;
							var n = 2 * p.RANDOM() * Math.PI,
								r = 2 * p.RANDOM() - 1,
								i = Math.sqrt(1 - r * r) * e;
							return t[0] = Math.cos(n) * i, t[1] = Math.sin(n) * i, t[2] = r * e, t
						}, e.transformMat4 = function(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2],
								a = n[3] * r + n[7] * i + n[11] * o + n[15];
							return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t
						}, e.transformMat3 = function(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2];
							return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t
						}, e.transformQuat = function(t, e, n) {
							var r = n[0],
								i = n[1],
								o = n[2],
								a = n[3],
								u = e[0],
								c = e[1],
								s = e[2],
								f = i * s - o * c,
								l = o * u - r * s,
								h = r * c - i * u,
								d = i * h - o * l,
								p = o * f - r * h,
								g = r * l - i * f,
								v = 2 * a;
							return f *= v, l *= v, h *= v, d *= 2, p *= 2, g *= 2, t[0] = u + f + d, t[1] = c + l + p, t[2] = s + h + g, t
						}, e.rotateX = function(t, e, n, r) {
							var i = [],
								o = [];
							return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
						}, e.rotateY = function(t, e, n, r) {
							var i = [],
								o = [];
							return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
						}, e.rotateZ = function(t, e, n, r) {
							var i = [],
								o = [];
							return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t
						}, e.angle = function(t, e) {
							var n = o(t[0], t[1], t[2]),
								r = o(e[0], e[1], e[2]);
							h(n, n), h(r, r);
							var i = d(n, r);
							return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
						}, e.str = function(t) {
							return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
						}, e.exactEquals = function(t, e) {
							return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
						}, e.equals = function(t, e) {
							var n = t[0],
								r = t[1],
								i = t[2],
								o = e[0],
								a = e[1],
								u = e[2];
							return Math.abs(n - o) <= p.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - a) <= p.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i - u) <= p.EPSILON * Math.max(1, Math.abs(i), Math.abs(u))
						};
						var p = function(t) {
							if (t && t.__esModule) return t;
							var e = {};
							if (null != t)
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							return e.default = t, e
						}(n(38));
						e.sub = a, e.mul = u, e.div = c, e.dist = s, e.sqrDist = f, e.len = i, e.sqrLen = l, e.forEach = function() {
							var t = r();
							return function(e, n, r, i, o, a) {
								var u = void 0,
									c = void 0;
								for (n || (n = 3), r || (r = 0), c = i ? Math.min(i * n + r, e.length) : e.length, u = r; u < c; u += n) t[0] = e[u], t[1] = e[u + 1], t[2] = e[u + 2], o(t, t, a), e[u] = t[0], e[u + 1] = t[1], e[u + 2] = t[2];
								return e
							}
						}()
					}, function(t, e, n) {
						function r() {
							var t = new l.ARRAY_TYPE(2);
							return l.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0), t
						}

						function i(t, e, n) {
							return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
						}

						function o(t, e, n) {
							return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
						}

						function a(t, e, n) {
							return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
						}

						function u(t, e) {
							var n = e[0] - t[0],
								r = e[1] - t[1];
							return Math.sqrt(n * n + r * r)
						}

						function c(t, e) {
							var n = e[0] - t[0],
								r = e[1] - t[1];
							return n * n + r * r
						}

						function s(t) {
							var e = t[0],
								n = t[1];
							return Math.sqrt(e * e + n * n)
						}

						function f(t) {
							var e = t[0],
								n = t[1];
							return e * e + n * n
						}
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0, e.create = r, e.clone = function(t) {
							var e = new l.ARRAY_TYPE(2);
							return e[0] = t[0], e[1] = t[1], e
						}, e.fromValues = function(t, e) {
							var n = new l.ARRAY_TYPE(2);
							return n[0] = t, n[1] = e, n
						}, e.copy = function(t, e) {
							return t[0] = e[0], t[1] = e[1], t
						}, e.set = function(t, e, n) {
							return t[0] = e, t[1] = n, t
						}, e.add = function(t, e, n) {
							return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
						}, e.subtract = i, e.multiply = o, e.divide = a, e.ceil = function(t, e) {
							return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
						}, e.floor = function(t, e) {
							return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
						}, e.min = function(t, e, n) {
							return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
						}, e.max = function(t, e, n) {
							return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
						}, e.round = function(t, e) {
							return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
						}, e.scale = function(t, e, n) {
							return t[0] = e[0] * n, t[1] = e[1] * n, t
						}, e.scaleAndAdd = function(t, e, n, r) {
							return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t
						}, e.distance = u, e.squaredDistance = c, e.length = s, e.squaredLength = f, e.negate = function(t, e) {
							return t[0] = -e[0], t[1] = -e[1], t
						}, e.inverse = function(t, e) {
							return t[0] = 1 / e[0], t[1] = 1 / e[1], t
						}, e.normalize = function(t, e) {
							var n = e[0],
								r = e[1],
								i = n * n + r * r;
							return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t
						}, e.dot = function(t, e) {
							return t[0] * e[0] + t[1] * e[1]
						}, e.cross = function(t, e, n) {
							var r = e[0] * n[1] - e[1] * n[0];
							return t[0] = t[1] = 0, t[2] = r, t
						}, e.lerp = function(t, e, n, r) {
							var i = e[0],
								o = e[1];
							return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t
						}, e.random = function(t, e) {
							e = e || 1;
							var n = 2 * l.RANDOM() * Math.PI;
							return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t
						}, e.transformMat2 = function(t, e, n) {
							var r = e[0],
								i = e[1];
							return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t
						}, e.transformMat2d = function(t, e, n) {
							var r = e[0],
								i = e[1];
							return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t
						}, e.transformMat3 = function(t, e, n) {
							var r = e[0],
								i = e[1];
							return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t
						}, e.transformMat4 = function(t, e, n) {
							var r = e[0],
								i = e[1];
							return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t
						}, e.rotate = function(t, e, n, r) {
							var i = e[0] - n[0],
								o = e[1] - n[1],
								a = Math.sin(r),
								u = Math.cos(r);
							return t[0] = i * u - o * a + n[0], t[1] = i * a + o * u + n[1], t
						}, e.angle = function(t, e) {
							var n = t[0],
								r = t[1],
								i = e[0],
								o = e[1],
								a = n * n + r * r;
							a > 0 && (a = 1 / Math.sqrt(a));
							var u = i * i + o * o;
							u > 0 && (u = 1 / Math.sqrt(u));
							var c = (n * i + r * o) * a * u;
							return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c)
						}, e.str = function(t) {
							return "vec2(" + t[0] + ", " + t[1] + ")"
						}, e.exactEquals = function(t, e) {
							return t[0] === e[0] && t[1] === e[1]
						}, e.equals = function(t, e) {
							var n = t[0],
								r = t[1],
								i = e[0],
								o = e[1];
							return Math.abs(n - i) <= l.EPSILON * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - o) <= l.EPSILON * Math.max(1, Math.abs(r), Math.abs(o))
						};
						var l = function(t) {
							if (t && t.__esModule) return t;
							var e = {};
							if (null != t)
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							return e.default = t, e
						}(n(38));
						e.len = s, e.sub = i, e.mul = o, e.div = a, e.dist = u, e.sqrDist = c, e.sqrLen = f, e.forEach = function() {
							var t = r();
							return function(e, n, r, i, o, a) {
								var u = void 0,
									c = void 0;
								for (n || (n = 2), r || (r = 0), c = i ? Math.min(i * n + r, e.length) : e.length, u = r; u < c; u += n) t[0] = e[u], t[1] = e[u + 1], o(t, t, a), e[u] = t[0], e[u + 1] = t[1];
								return e
							}
						}()
					}, function(t, e, n) {
						function r(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2],
								a = e[3],
								u = e[4],
								c = e[5],
								s = e[6],
								f = e[7],
								l = e[8],
								h = n[0],
								d = n[1],
								p = n[2],
								g = n[3],
								v = n[4],
								m = n[5],
								y = n[6],
								b = n[7],
								x = n[8];
							return t[0] = h * r + d * a + p * s, t[1] = h * i + d * u + p * f, t[2] = h * o + d * c + p * l, t[3] = g * r + v * a + m * s, t[4] = g * i + v * u + m * f, t[5] = g * o + v * c + m * l, t[6] = y * r + b * a + x * s, t[7] = y * i + b * u + x * f, t[8] = y * o + b * c + x * l, t
						}

						function i(t, e, n) {
							return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t
						}
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.sub = e.mul = void 0, e.create = function() {
							var t = new o.ARRAY_TYPE(9);
							return o.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
						}, e.fromMat4 = function(t, e) {
							return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
						}, e.clone = function(t) {
							var e = new o.ARRAY_TYPE(9);
							return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
						}, e.copy = function(t, e) {
							return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
						}, e.fromValues = function(t, e, n, r, i, a, u, c, s) {
							var f = new o.ARRAY_TYPE(9);
							return f[0] = t, f[1] = e, f[2] = n, f[3] = r, f[4] = i, f[5] = a, f[6] = u, f[7] = c, f[8] = s, f
						}, e.set = function(t, e, n, r, i, o, a, u, c, s) {
							return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = u, t[7] = c, t[8] = s, t
						}, e.identity = function(t) {
							return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
						}, e.transpose = function(t, e) {
							if (t === e) {
								var n = e[1],
									r = e[2],
									i = e[5];
								t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i
							} else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
							return t
						}, e.invert = function(t, e) {
							var n = e[0],
								r = e[1],
								i = e[2],
								o = e[3],
								a = e[4],
								u = e[5],
								c = e[6],
								s = e[7],
								f = e[8],
								l = f * a - u * s,
								h = -f * o + u * c,
								d = s * o - a * c,
								p = n * l + r * h + i * d;
							return p ? (p = 1 / p, t[0] = l * p, t[1] = (-f * r + i * s) * p, t[2] = (u * r - i * a) * p, t[3] = h * p, t[4] = (f * n - i * c) * p, t[5] = (-u * n + i * o) * p, t[6] = d * p, t[7] = (-s * n + r * c) * p, t[8] = (a * n - r * o) * p, t) : null
						}, e.adjoint = function(t, e) {
							var n = e[0],
								r = e[1],
								i = e[2],
								o = e[3],
								a = e[4],
								u = e[5],
								c = e[6],
								s = e[7],
								f = e[8];
							return t[0] = a * f - u * s, t[1] = i * s - r * f, t[2] = r * u - i * a, t[3] = u * c - o * f, t[4] = n * f - i * c, t[5] = i * o - n * u, t[6] = o * s - a * c, t[7] = r * c - n * s, t[8] = n * a - r * o, t
						}, e.determinant = function(t) {
							var e = t[0],
								n = t[1],
								r = t[2],
								i = t[3],
								o = t[4],
								a = t[5],
								u = t[6],
								c = t[7],
								s = t[8];
							return e * (s * o - a * c) + n * (-s * i + a * u) + r * (c * i - o * u)
						}, e.multiply = r, e.translate = function(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2],
								a = e[3],
								u = e[4],
								c = e[5],
								s = e[6],
								f = e[7],
								l = e[8],
								h = n[0],
								d = n[1];
							return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = u, t[5] = c, t[6] = h * r + d * a + s, t[7] = h * i + d * u + f, t[8] = h * o + d * c + l, t
						}, e.rotate = function(t, e, n) {
							var r = e[0],
								i = e[1],
								o = e[2],
								a = e[3],
								u = e[4],
								c = e[5],
								s = e[6],
								f = e[7],
								l = e[8],
								h = Math.sin(n),
								d = Math.cos(n);
							return t[0] = d * r + h * a, t[1] = d * i + h * u, t[2] = d * o + h * c, t[3] = d * a - h * r, t[4] = d * u - h * i, t[5] = d * c - h * o, t[6] = s, t[7] = f, t[8] = l, t
						}, e.scale = function(t, e, n) {
							var r = n[0],
								i = n[1];
							return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
						}, e.fromTranslation = function(t, e) {
							return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
						}, e.fromRotation = function(t, e) {
							var n = Math.sin(e),
								r = Math.cos(e);
							return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
						}, e.fromScaling = function(t, e) {
							return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
						}, e.fromMat2d = function(t, e) {
							return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
						}, e.fromQuat = function(t, e) {
							var n = e[0],
								r = e[1],
								i = e[2],
								o = e[3],
								a = n + n,
								u = r + r,
								c = i + i,
								s = n * a,
								f = r * a,
								l = r * u,
								h = i * a,
								d = i * u,
								p = i * c,
								g = o * a,
								v = o * u,
								m = o * c;
							return t[0] = 1 - l - p, t[3] = f - m, t[6] = h + v, t[1] = f + m, t[4] = 1 - s - p, t[7] = d - g, t[2] = h - v, t[5] = d + g, t[8] = 1 - s - l, t
						}, e.normalFromMat4 = function(t, e) {
							var n = e[0],
								r = e[1],
								i = e[2],
								o = e[3],
								a = e[4],
								u = e[5],
								c = e[6],
								s = e[7],
								f = e[8],
								l = e[9],
								h = e[10],
								d = e[11],
								p = e[12],
								g = e[13],
								v = e[14],
								m = e[15],
								y = n * u - r * a,
								b = n * c - i * a,
								x = n * s - o * a,
								_ = r * c - i * u,
								w = r * s - o * u,
								S = i * s - o * c,
								M = f * g - l * p,
								O = f * v - h * p,
								P = f * m - d * p,
								E = l * v - h * g,
								A = l * m - d * g,
								C = h * m - d * v,
								j = y * C - b * A + x * E + _ * P - w * O + S * M;
							return j ? (j = 1 / j, t[0] = (u * C - c * A + s * E) * j, t[1] = (c * P - a * C - s * O) * j, t[2] = (a * A - u * P + s * M) * j, t[3] = (i * A - r * C - o * E) * j, t[4] = (n * C - i * P + o * O) * j, t[5] = (r * P - n * A - o * M) * j, t[6] = (g * S - v * w + m * _) * j, t[7] = (v * x - p * S - m * b) * j, t[8] = (p * w - g * x + m * y) * j, t) : null
						}, e.projection = function(t, e, n) {
							return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / n, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
						}, e.str = function(t) {
							return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
						}, e.frob = function(t) {
							return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
						}, e.add = function(t, e, n) {
							return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t
						}, e.subtract = i, e.multiplyScalar = function(t, e, n) {
							return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t
						}, e.multiplyScalarAndAdd = function(t, e, n, r) {
							return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t
						}, e.exactEquals = function(t, e) {
							return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
						}, e.equals = function(t, e) {
							var n = t[0],
								r = t[1],
								i = t[2],
								a = t[3],
								u = t[4],
								c = t[5],
								s = t[6],
								f = t[7],
								l = t[8],
								h = e[0],
								d = e[1],
								p = e[2],
								g = e[3],
								v = e[4],
								m = e[5],
								y = e[6],
								b = e[7],
								x = e[8];
							return Math.abs(n - h) <= o.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(r - d) <= o.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(i - p) <= o.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(a - g) <= o.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(u - v) <= o.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(c - m) <= o.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(s - y) <= o.EPSILON * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(f - b) <= o.EPSILON * Math.max(1, Math.abs(f), Math.abs(b)) && Math.abs(l - x) <= o.EPSILON * Math.max(1, Math.abs(l), Math.abs(x))
						};
						var o = function(t) {
							if (t && t.__esModule) return t;
							var e = {};
							if (null != t)
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							return e.default = t, e
						}(n(38));
						e.mul = r, e.sub = i
					}, function(t, e, n) {
						var r = n(364),
							i = n(682),
							o = n(681),
							a = r ? r.toStringTag : void 0;
						t.exports = function(t) {
							return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : o(t)
						}
					}, function(t, e, n) {
						function r(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}

						function i(t, e, n) {
							for (var r in n = n || 0, e)
								if (e.hasOwnProperty(r)) {
									var a = e[r];
									null !== a && u.isPlainObject(a) ? (u.isPlainObject(t[r]) || (t[r] = {}), n < o ? i(t[r], e[r], n + 1) : t[r] = e[r]) : u.isArray(a) ? (t[r] = [], t[r] = t[r].concat(a)) : void 0 !== a && (t[r] = e[r])
								}
						}
						var o = 5,
							a = n(761);
						Math.sign = function(t) {
							return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
						};
						var u = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), i.forEach(function(e) {
									r(t, e, n[e])
								})
							}
							return t
						}({}, a, {
							lowerFirst: n(691),
							isPlainObject: n(680),
							indexOf: n(679),
							cloneDeep: n(674),
							round: n(614),
							filter: n(612),
							throttle: n(582),
							debounce: n(441),
							uniq: n(580),
							traverseTree: function(t, e, n, r) {
								void 0 === r && (r = !1);
								var i = n(t);
								r && e(t, null, null), i && u.each(i, function(r, i) {
									e(r, t, i), u.traverseTree(r, e, n)
								})
							},
							toAllPadding: function(t) {
								var e = 0,
									n = 0,
									r = 0,
									i = 0;
								return u.isNumber(t) || u.isString(t) ? e = n = r = i = t : u.isArray(t) && (e = t[0], r = u.isNil(t[1]) ? t[0] : t[1], i = u.isNil(t[2]) ? t[0] : t[2], n = u.isNil(t[3]) ? r : t[3]), [e, r, i, n]
							},
							guid: function() {
								return "xxxxxxxx".replace(/[xy]/g, function(t) {
									var e = 16 * Math.random() | 0;
									return ("x" === t ? e : 3 & e | 8).toString(16)
								})
							},
							mix: function() {
								var t, e, n = u.toArray(arguments),
									r = n[0];
								if (!0 === r)
									for (r = n[1], e = 2; e < n.length; e++) i(r, t = n[e]);
								else
									for (e = 1; e < n.length; e++)
										for (var o in t = n[e]) t.hasOwnProperty(o) && "constructor" !== o && (r[o] = t[o]);
								return r
							},
							mixin: function(t, e) {
								t && e && (t._mixins = e, t.ATTRS = t.ATTRS || {}, u.each(e, function(e) {
									u.augment(t, e)
								}), t.ATTRS = u.mix({}, t.ATTRS))
							}
						});
						u.Array = {
							remove: function(t, e) {
								var n = u.indexOf(t, e); - 1 !== n && t.splice(n, 1)
							}
						}, t.exports = u
					}, function(t, e, n) {
						var r = n(22),
							i = {},
							o = {
								draw: function() {}
							},
							a = {
								defaultShapeType: null,
								getShape: function(t, e) {
									return this[t] || this[e] || this[this.defaultShapeType] || o
								},
								getExtendShape: function(t, e) {
									var n = this;
									if (r.isArray(t)) {
										var i = {};
										return t.forEach(function(t) {
											i = r.mix({}, i, n.getShape(t, e))
										}), i
									}
									return this.getShape(t, e)
								}
							};
						i.registerShapeManager = function(t, e) {
							var n = r.mix({}, a, e),
								o = r.upperFirst(t);
							return i[o] = n, i["register" + o] = function(t, e, i, o) {
								r.isNil(i) && r.isNil(o) && (i = t);
								var a = n.getExtendShape(i, o),
									u = r.mix(!0, {}, a, e);
								return u.type = t, n[t] = u, u
							}, n
						}, t.exports = i
					}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
						var r = n(17),
							i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
							o = /[^\s\,]+/gi,
							a = {};
						t.exports = {
							parseRadius: function(t) {
								var e = 0,
									n = 0,
									i = 0,
									o = 0;
								return r.isArray(t) ? 1 === t.length ? e = n = i = o = t[0] : 2 === t.length ? (e = i = t[0], n = o = t[1]) : 3 === t.length ? (e = t[0], n = o = t[1], i = t[2]) : (e = t[0], n = t[1], i = t[2], o = t[3]) : e = n = i = o = t, {
									r1: e,
									r2: n,
									r3: i,
									r4: o
								}
							},
							parsePath: function(t) {
								return t = t || [], r.isArray(t) ? t : r.isString(t) ? (t = t.match(i), r.each(t, function(e, n) {
									if ((e = e.match(o))[0].length > 1) {
										var i = e[0].charAt(0);
										e.splice(1, 0, e[0].substr(1)), e[0] = i
									}
									r.each(e, function(t, n) {
										isNaN(t) || (e[n] = +t)
									}), t[n] = e
								}), t) : void 0
							},
							numberToColor: function(t) {
								var e = a[t];
								if (!e) {
									for (var n = t.toString(16), r = n.length; r < 6; r++) n = "0" + n;
									e = "#" + n, a[t] = e
								}
								return e
							}
						}
					}, function(t, e, n) {
						var r = n(462),
							i = n(639),
							o = n(397);
						t.exports = function(t) {
							return o(t) ? r(t) : i(t)
						}
					}, function(t, e, n) {
						var r = n(60).Symbol;
						t.exports = r
					}, function(t, e, n) {
						var r = n(141);
						t.exports = function(t) {
							return r(t) ? "" : t.toString()
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "String")
						}
					}, function(t, e, n) {
						var r = n(415),
							i = n(61);
						t.exports = function(t) {
							if (!r(t) || !i(t, "Object")) return !1;
							if (null === Object.getPrototypeOf(t)) return !0;
							for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
							return Object.getPrototypeOf(t) === e
						}
					}, function(t, e, n) {
						var r = function(t) {
							function e(e) {
								var n;
								return (n = t.call(this) || this).options = e, n
							}
							return function(t, e) {
								t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
							}(e, t), e.prototype.execute = function() {
								var t = this,
									e = this.options;
								this.roots.forEach(function(n) {
									t.layout(n, e).eachNode(function(t) {
										t.data.x = t.x + t.data.width / 2 + t.hgap, t.data.y = t.y + t.data.height / 2 + t.vgap
									})
								})
							}, e
						}(n(418));
						t.exports = r
					}, function(t, e, n) {
						"undefined" != typeof self && self, t.exports = function(t) {
							function e(r) {
								if (n[r]) return n[r].exports;
								var i = n[r] = {
									i: r,
									l: !1,
									exports: {}
								};
								return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
							}
							var n = {};
							return e.m = t, e.c = n, e.d = function(t, n, r) {
								e.o(t, n) || Object.defineProperty(t, n, {
									configurable: !1,
									enumerable: !0,
									get: r
								})
							}, e.n = function(t) {
								var n = t && t.__esModule ? function() {
									return t.default
								} : function() {
									return t
								};
								return e.d(n, "a", n), n
							}, e.o = function(t, e) {
								return Object.prototype.hasOwnProperty.call(t, e)
							}, e.p = "", e(e.s = 5)
						}([function(t, e, n) {
							var r = n(7);
							t.exports = {
								assign: r
							}
						}, function(t, e, n) {
							var r = n(3),
								i = function() {
									function t(t, e) {
										void 0 === e && (e = {}), this.options = e, this.rootNode = r(t, e)
									}
									return t.prototype.execute = function() {
										throw new Error("please override this method")
									}, t
								}();
							t.exports = i
						}, function(t, e, n) {
							var r = n(4),
								i = ["LR", "RL", "TB", "BT", "H", "V"],
								o = ["LR", "RL", "H"],
								a = i[0];
							t.exports = function(t, e, n) {
								var u = e.direction || a;
								if (e.isHorizontal = function(t) {
										return o.indexOf(t) > -1
									}(u), u && -1 === i.indexOf(u)) throw new TypeError("Invalid direction: " + u);
								if (u === i[0]) n(t, e);
								else if (u === i[1]) n(t, e), t.right2left();
								else if (u === i[2]) n(t, e);
								else if (u === i[3]) n(t, e), t.bottom2top();
								else if (u === i[4] || u === i[5]) {
									var c = r(t, e),
										s = c.left,
										f = c.right;
									n(s, e), n(f, e), e.isHorizontal ? s.right2left() : s.bottom2top(), f.translate(s.x - f.x, s.y - f.y), t.x = s.x, t.y = f.y;
									var l = t.getBoundingBox();
									e.isHorizontal ? l.top < 0 && t.translate(0, -l.top) : l.left < 0 && t.translate(-l.left, 0)
								}
								return t.translate(-(t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)), t
							}
						}, function(t, e, n) {
							function r(t, e) {
								var n = this;
								if (n.vgap = n.hgap = 0, t instanceof r) return t;
								n.data = t;
								var i = e.getHGap(t),
									o = e.getVGap(t);
								return n.width = e.getWidth(t), n.height = e.getHeight(t), n.id = e.getId(t), n.x = n.y = 0, n.depth = 0, n.children || (n.children = []), n.addGap(i, o), n
							}
							var i = n(0),
								o = {
									getId: function(t) {
										return t.id || t.name
									},
									getHGap: function(t) {
										return t.hgap || 18
									},
									getVGap: function(t) {
										return t.vgap || 18
									},
									getChildren: function(t) {
										return t.children
									},
									getHeight: function(t) {
										return t.height || 36
									},
									getWidth: function(t) {
										var e = t.name || " ";
										return t.width || 18 * e.split("").length
									}
								};
							i.assign(r.prototype, {
								isRoot: function() {
									return 0 === this.depth
								},
								isLeaf: function() {
									return 0 === this.children.length
								},
								addGap: function(t, e) {
									this.hgap += t, this.vgap += e, this.width += 2 * t, this.height += 2 * e
								},
								eachNode: function(t) {
									for (var e, n = [this]; e = n.pop();) t(e), n = n.concat(e.children)
								},
								DFTraverse: function(t) {
									this.eachNode(t)
								},
								BFTraverse: function(t) {
									for (var e, n = [this]; e = n.shift();) t(e), n = n.concat(e.children)
								},
								getBoundingBox: function() {
									var t = {
										left: Number.MAX_VALUE,
										top: Number.MAX_VALUE,
										width: 0,
										height: 0
									};
									return this.eachNode(function(e) {
										t.left = Math.min(t.left, e.x), t.top = Math.min(t.top, e.y), t.width = Math.max(t.width, e.x + e.width), t.height = Math.max(t.height, e.y + e.height)
									}), t
								},
								translate: function(t, e) {
									void 0 === t && (t = 0), void 0 === e && (e = 0), this.eachNode(function(n) {
										n.x += t, n.y += e
									})
								},
								right2left: function() {
									var t = this.getBoundingBox();
									this.eachNode(function(e) {
										e.x = e.x - 2 * (e.x - t.left) - e.width
									}), this.translate(t.width, 0)
								},
								bottom2top: function() {
									var t = this.getBoundingBox();
									this.eachNode(function(e) {
										e.y = e.y - 2 * (e.y - t.top) - e.height
									}), this.translate(0, t.height)
								}
							}), t.exports = function(t, e, n) {
								void 0 === e && (e = {});
								var a, u = new r(t, e = i.assign({}, o, e)),
									c = [u];
								if (!n && !t.collapsed)
									for (; a = c.pop();)
										if (!a.data.collapsed) {
											var s = e.getChildren(a.data),
												f = s ? s.length : 0;
											if (a.children = new Array(f), s && f)
												for (var l = 0; l < f; l++) {
													var h = new r(s[l], e);
													a.children[l] = h, c.push(h), h.parent = a, h.depth = a.depth + 1
												}
										} return u
							}
						}, function(t, e, n) {
							var r = n(3);
							t.exports = function(t, e) {
								for (var n = r(t.data, e, !0), i = r(t.data, e, !0), o = t.children.length, a = Math.round(o / 2), u = e.getSide || function(t, e) {
										return e < a ? "right" : "left"
									}, c = 0; c < o; c++) {
									var s = t.children[c];
									"right" === u(s, c) ? i.children.push(s) : n.children.push(s)
								}
								return n.eachNode(function(t) {
									t.isRoot() || (t.side = "left")
								}), i.eachNode(function(t) {
									t.isRoot() || (t.side = "right")
								}), {
									left: n,
									right: i
								}
							}
						}, function(t, e, n) {
							var r = {
								compactBox: n(6),
								dendrogram: n(9),
								indented: n(11),
								mindmap: n(13)
							};
							t.exports = r
						}, function(t, e, n) {
							var r = n(1),
								i = n(8),
								o = n(2),
								a = n(0),
								u = function(t) {
									function e() {
										return t.apply(this, arguments) || this
									}
									return function(t, e) {
										t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
									}(e, t), e.prototype.execute = function() {
										return o(this.rootNode, this.options, i)
									}, e
								}(r),
								c = {};
							t.exports = function(t, e) {
								return e = a.assign({}, c, e), new u(t, e).execute()
							}
						}, function(t, e) {
							function n(t, e) {
								for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
							}
							t.exports = function(t, e, r, i) {
								return e && n(t, e), r && n(t, r), i && n(t, i), t
							}
						}, function(t, e) {
							function n(t, e, n, r) {
								void 0 === r && (r = []);
								var i = this;
								i.w = t || 0, i.h = e || 0, i.y = n || 0, i.x = 0, i.c = r || [], i.cs = r.length, i.prelim = 0, i.mod = 0, i.shift = 0, i.change = 0, i.tl = null, i.tr = null, i.el = null, i.er = null, i.msel = 0, i.mser = 0
							}
							n.fromNode = function(t, e) {
								if (!t) return null;
								var r = [];
								return t.children.forEach(function(t) {
									r.push(n.fromNode(t, e))
								}), e ? new n(t.height, t.width, t.x, r) : new n(t.width, t.height, t.y, r)
							}, t.exports = function(t, e) {
								function r(t) {
									0 === t.cs ? (t.el = t, t.er = t, t.msel = t.mser = 0) : (t.el = t.c[0].el, t.msel = t.c[0].msel, t.er = t.c[t.cs - 1].er, t.mser = t.c[t.cs - 1].mser)
								}

								function i(t, e, n) {
									for (var r = t.c[e - 1], i = r.mod, s = t.c[e], f = s.mod; null !== r && null !== s;) {
										c(r) > n.low && (n = n.nxt);
										var l = i + r.prelim + r.w - (f + s.prelim);
										l > 0 && (f += l, o(t, e, n.index, l));
										var h = c(r),
											d = c(s);
										h <= d && null !== (r = u(r)) && (i += r.mod), h >= d && null !== (s = a(s)) && (f += s.mod)
									}!r && s ? function(t, e, n, r) {
										var i = t.c[0].el;
										i.tl = n;
										var o = r - n.mod - t.c[0].msel;
										i.mod += o, i.prelim -= o, t.c[0].el = t.c[e].el, t.c[0].msel = t.c[e].msel
									}(t, e, s, f) : r && !s && function(t, e, n, r) {
										var i = t.c[e].er;
										i.tr = n;
										var o = r - n.mod - t.c[e].mser;
										i.mod += o, i.prelim -= o, t.c[e].er = t.c[e - 1].er, t.c[e].mser = t.c[e - 1].mser
									}(t, e, r, i)
								}

								function o(t, e, n, r) {
									t.c[e].mod += r, t.c[e].msel += r, t.c[e].mser += r,
										function(t, e, n, r) {
											if (n !== e - 1) {
												var i = e - n;
												t.c[n + 1].shift += r / i, t.c[e].shift -= r / i, t.c[e].change -= r - r / i
											}
										}(t, e, n, r)
								}

								function a(t) {
									return 0 === t.cs ? t.tl : t.c[0]
								}

								function u(t) {
									return 0 === t.cs ? t.tr : t.c[t.cs - 1]
								}

								function c(t) {
									return t.y + t.h
								}

								function s(t, e, n) {
									for (; null !== n && t >= n.low;) n = n.nxt;
									return {
										low: t,
										index: e,
										nxt: n
									}
								}
								void 0 === e && (e = {});
								var f = e.isHorizontal;
								! function t(e, n, r) {
									void 0 === r && (r = 0), n ? (e.x = r, r += e.width) : (e.y = r, r += e.height), e.children.forEach(function(e) {
										t(e, n, r)
									})
								}(t, f);
								var l = n.fromNode(t, f);
								return function t(e) {
										if (0 !== e.cs) {
											t(e.c[0]);
											for (var n = s(c(e.c[0].el), 0, null), o = 1; o < e.cs; ++o) {
												t(e.c[o]);
												var a = c(e.c[o].er);
												i(e, o, n), n = s(a, o, n)
											}! function(t) {
												t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2
											}(e), r(e)
										} else r(e)
									}(l),
									function t(e, n) {
										n += e.mod, e.x = e.prelim + n,
											function(t) {
												for (var e = 0, n = 0, r = 0; r < t.cs; r++) e += t.c[r].shift, n += e + t.c[r].change, t.c[r].mod += n
											}(e);
										for (var r = 0; r < e.cs; r++) t(e.c[r], n)
									}(l, 0),
									function t(e, n, r) {
										r ? n.y = e.x : n.x = e.x, e.c.forEach(function(e, i) {
											t(e, n.children[i], r)
										})
									}(l, t, f),
									function(t, e) {
										! function t(e, n, r) {
											r ? e.y += n : e.x += n, e.children.forEach(function(e) {
												t(e, n, r)
											})
										}(t, - function t(e, n) {
											var r = n ? e.y : e.x;
											return e.children.forEach(function(e) {
												r = Math.min(t(e, n), r)
											}), r
										}(t, e), e)
									}(t, f), t
							}
						}, function(t, e, n) {
							var r = n(1),
								i = n(10),
								o = n(2),
								a = n(0),
								u = function(t) {
									function e() {
										return t.apply(this, arguments) || this
									}
									return function(t, e) {
										t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
									}(e, t), e.prototype.execute = function() {
										return this.rootNode.width = 0, o(this.rootNode, this.options, i)
									}, e
								}(r),
								c = {};
							t.exports = function(t, e) {
								return e = a.assign({}, c, e), new u(t, e).execute()
							}
						}, function(t, e, n) {
							var r = n(0),
								i = {
									isHorizontal: !0,
									nodeSep: 20,
									nodeSize: 20,
									rankSep: 200,
									subTreeSep: 10
								};
							t.exports = function(t, e) {
								void 0 === e && (e = {}), e = r.assign({}, i, e);
								var n, o = 0,
									a = function t(e) {
										if (!e) return null;
										e.width = 0, e.depth && e.depth > o && (o = e.depth);
										var n = e.children,
											r = n.length,
											i = new function(t, e) {
												void 0 === t && (t = 0), void 0 === e && (e = []);
												var n = this;
												n.x = n.y = 0, n.leftChild = n.rightChild = null, n.height = 0, n.children = e
											}(e.height, []);
										return n.forEach(function(e, n) {
											var o = t(e);
											i.children.push(o), 0 === n && (i.leftChild = o), n === r - 1 && (i.rightChild = o)
										}), i.originNode = e, i.isLeaf = e.isLeaf(), i
									}(t);
								return function t(e) {
										if (e.isLeaf || 0 === e.children.length) e.drawingDepth = o;
										else {
											var n = e.children.map(function(e) {
													return t(e)
												}),
												r = Math.min.apply(null, n);
											e.drawingDepth = r - 1
										}
										return e.drawingDepth
									}(a),
									function t(r) {
										r.x = r.drawingDepth * e.rankSep, r.isLeaf ? (r.y = 0, n && (r.y = n.y + n.height + e.nodeSep, r.originNode.parent !== n.originNode.parent && (r.y += e.subTreeSep)), n = r) : (r.children.forEach(function(e) {
											t(e)
										}), r.y = (r.leftChild.y + r.rightChild.y) / 2)
									}(a),
									function t(e, n, r) {
										r ? (n.x = e.x, n.y = e.y) : (n.x = e.y, n.y = e.x), e.children.forEach(function(e, i) {
											t(e, n.children[i], r)
										})
									}(a, t, e.isHorizontal), t
							}
						}, function(t, e, n) {
							var r = n(1),
								i = n(12),
								o = n(4),
								a = n(0),
								u = ["LR", "RL", "H"],
								c = u[0],
								s = function(t) {
									function e() {
										return t.apply(this, arguments) || this
									}
									return function(t, e) {
										t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
									}(e, t), e.prototype.execute = function() {
										var t = this.options,
											e = this.rootNode;
										t.isHorizontal = !0;
										var n = t.indent,
											r = t.direction || c;
										if (r && -1 === u.indexOf(r)) throw new TypeError("Invalid direction: " + r);
										if (r === u[0]) i(e, n);
										else if (r === u[1]) i(e, n), e.right2left();
										else if (r === u[2]) {
											var a = o(e, t),
												s = a.left,
												f = a.right;
											i(s, n), s.right2left(), i(f, n);
											var l = s.getBoundingBox();
											f.translate(l.width, 0), e.x = f.x - e.width / 2
										}
										return e
									}, e
								}(r),
								f = {};
							t.exports = function(t, e) {
								return e = a.assign({}, f, e), new s(t, e).execute()
							}
						}, function(t, e) {
							t.exports = function(t, e) {
								void 0 === e && (e = 20);
								var n = null;
								t.eachNode(function(t) {
									! function(t, e, n) {
										t.x += n * t.depth, t.y = e ? e.y + e.height : 0
									}(t, n, e), n = t
								})
							}
						}, function(t, e, n) {
							var r = n(1),
								i = n(14),
								o = n(2),
								a = n(0),
								u = function(t) {
									function e() {
										return t.apply(this, arguments) || this
									}
									return function(t, e) {
										t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
									}(e, t), e.prototype.execute = function() {
										return o(this.rootNode, this.options, i)
									}, e
								}(r),
								c = {};
							t.exports = function(t, e) {
								return e = a.assign({}, c, e), new u(t, e).execute()
							}
						}, function(t, e, n) {
							var r = n(0),
								i = {
									getSubTreeSep: function() {
										return 0
									}
								};
							t.exports = function(t, e) {
								void 0 === e && (e = {}), e = r.assign({}, i, e), t.parent = {
										x: 0,
										width: 0,
										height: 0,
										y: 0
									}, t.BFTraverse(function(t) {
										t.x = t.parent.x + t.parent.width
									}), t.parent = null,
									function t(e, n) {
										var r = 0;
										return e.children.length ? e.children.forEach(function(e) {
											r += t(e, n)
										}) : r = e.height, e._subTreeSep = n.getSubTreeSep(e.data), e.totalHeight = Math.max(e.height, r) + 2 * e._subTreeSep, e.totalHeight
									}(t, e), t.startY = 0, t.y = t.totalHeight / 2 - t.height / 2, t.eachNode(function(t) {
										var e = t.children,
											n = e.length;
										if (n) {
											var r = e[0];
											if (r.startY = t.startY + t._subTreeSep, 1 === n) r.y = t.y + t.height / 2 - r.height / 2;
											else {
												r.y = r.startY + r.totalHeight / 2 - r.height / 2;
												for (var i = 1; i < n; i++) {
													var o = e[i];
													o.startY = e[i - 1].startY + e[i - 1].totalHeight, o.y = o.startY + o.totalHeight / 2 - o.height / 2
												}
											}
										}
									}),
									function t(e) {
										var n = e.children,
											r = n.length;
										if (r) {
											n.forEach(function(e) {
												t(e)
											});
											var i = n[0],
												o = n[r - 1],
												a = o.y - i.y + o.height,
												u = 0;
											if (n.forEach(function(t) {
													u += t.totalHeight
												}), a > e.height) e.y = i.y + a / 2 - e.height / 2;
											else if (1 !== n.length || e.height > u) {
												var c = e.y + (e.height - a) / 2 - i.y;
												n.forEach(function(t) {
													t.translate(0, c)
												})
											} else e.y = (i.y + i.height / 2 + o.y + o.height / 2) / 2 - e.height / 2
										}
									}(t)
							}
						}])
					}, function(t, e, n) {
						var r = n(22),
							i = function() {
								function t(t) {
									var e = this.getDefaultCfg();
									r.mix(this, e, t)
								}
								var e = t.prototype;
								return e.getDefaultCfg = function() {
									return {}
								}, e.destroy = function() {}, t
							}();
						t.exports = i
					}, function(t, e, n) {
						function r(t, e, n) {
							return {
								x: n.x + t,
								y: n.y + e
							}
						}

						function i(t, e) {
							return {
								x: e.x + (e.x - t.x),
								y: e.y + (e.y - t.y)
							}
						}

						function o(t) {
							return Math.sqrt(t[0] * t[0] + t[1] * t[1])
						}

						function a(t, e) {
							return (t[0] * e[0] + t[1] * e[1]) / (o(t) * o(e))
						}

						function u(t, e) {
							return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(a(t, e))
						}
						var c = n(17),
							s = n(392),
							f = n(391),
							l = n(436),
							h = n(435),
							d = c.vec3,
							p = c.mat3,
							g = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"],
							v = function(t, e, n) {
								this.preSegment = e, this.isLast = n, this.init(t, e)
							};
						c.augment(v, {
							init: function(t, e) {
								var n = t[0];
								e = e || {
									endPoint: {
										x: 0,
										y: 0
									}
								};
								var o, s, f, l, h = g.indexOf(n) >= 0,
									d = h ? n.toUpperCase() : n,
									p = t,
									v = e.endPoint,
									m = p[1],
									y = p[2];
								switch (d) {
									default:
										break;
									case "M":
										l = h ? r(m, y, v) : {
											x: m,
											y: y
										}, this.command = "M", this.params = [v, l], this.subStart = l, this.endPoint = l;
										break;
									case "L":
										l = h ? r(m, y, v) : {
											x: m,
											y: y
										}, this.command = "L", this.params = [v, l], this.subStart = e.subStart, this.endPoint = l, this.endTangent = function() {
											return [l.x - v.x, l.y - v.y]
										}, this.startTangent = function() {
											return [v.x - l.x, v.y - l.y]
										};
										break;
									case "H":
										l = h ? r(m, 0, v) : {
											x: m,
											y: v.y
										}, this.command = "L", this.params = [v, l], this.subStart = e.subStart, this.endPoint = l, this.endTangent = function() {
											return [l.x - v.x, l.y - v.y]
										}, this.startTangent = function() {
											return [v.x - l.x, v.y - l.y]
										};
										break;
									case "V":
										l = h ? r(0, m, v) : {
											x: v.x,
											y: m
										}, this.command = "L", this.params = [v, l], this.subStart = e.subStart, this.endPoint = l, this.endTangent = function() {
											return [l.x - v.x, l.y - v.y]
										}, this.startTangent = function() {
											return [v.x - l.x, v.y - l.y]
										};
										break;
									case "Q":
										h ? (o = r(m, y, v), s = r(p[3], p[4], v)) : (o = {
											x: m,
											y: y
										}, s = {
											x: p[3],
											y: p[4]
										}), this.command = "Q", this.params = [v, o, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function() {
											return [s.x - o.x, s.y - o.y]
										}, this.startTangent = function() {
											return [v.x - o.x, v.y - o.y]
										};
										break;
									case "T":
										s = h ? r(m, y, v) : {
											x: m,
											y: y
										}, "Q" === e.command ? (o = i(e.params[1], v), this.command = "Q", this.params = [v, o, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function() {
											return [s.x - o.x, s.y - o.y]
										}, this.startTangent = function() {
											return [v.x - o.x, v.y - o.y]
										}) : (this.command = "TL", this.params = [v, s], this.subStart = e.subStart, this.endPoint = s, this.endTangent = function() {
											return [s.x - v.x, s.y - v.y]
										}, this.startTangent = function() {
											return [v.x - s.x, v.y - s.y]
										});
										break;
									case "C":
										h ? (o = r(m, y, v), s = r(p[3], p[4], v), f = r(p[5], p[6], v)) : (o = {
											x: m,
											y: y
										}, s = {
											x: p[3],
											y: p[4]
										}, f = {
											x: p[5],
											y: p[6]
										}), this.command = "C", this.params = [v, o, s, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() {
											return [f.x - s.x, f.y - s.y]
										}, this.startTangent = function() {
											return [v.x - o.x, v.y - o.y]
										};
										break;
									case "S":
										h ? (s = r(m, y, v), f = r(p[3], p[4], v)) : (s = {
											x: m,
											y: y
										}, f = {
											x: p[3],
											y: p[4]
										}), "C" === e.command ? (o = i(e.params[2], v), this.command = "C", this.params = [v, o, s, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() {
											return [f.x - s.x, f.y - s.y]
										}, this.startTangent = function() {
											return [v.x - o.x, v.y - o.y]
										}) : (this.command = "SQ", this.params = [v, s, f], this.subStart = e.subStart, this.endPoint = f, this.endTangent = function() {
											return [f.x - s.x, f.y - s.y]
										}, this.startTangent = function() {
											return [v.x - s.x, v.y - s.y]
										});
										break;
									case "A":
										var b = m,
											x = y,
											_ = p[3],
											w = p[4],
											S = p[5];
										l = h ? r(p[6], p[7], v) : {
											x: p[6],
											y: p[7]
										}, this.command = "A";
										var M = function(t, e, n, r, i, o, s) {
											var f = c.mod(c.toRadian(s), 2 * Math.PI),
												l = t.x,
												h = t.y,
												d = e.x,
												p = e.y,
												g = Math.cos(f) * (l - d) / 2 + Math.sin(f) * (h - p) / 2,
												v = -1 * Math.sin(f) * (l - d) / 2 + Math.cos(f) * (h - p) / 2,
												m = g * g / (i * i) + v * v / (o * o);
											m > 1 && (i *= Math.sqrt(m), o *= Math.sqrt(m));
											var y = i * i * (v * v) + o * o * (g * g),
												b = Math.sqrt((i * i * (o * o) - y) / y);
											n === r && (b *= -1), isNaN(b) && (b = 0);
											var x = b * i * v / o,
												_ = b * -o * g / i,
												w = (l + d) / 2 + Math.cos(f) * x - Math.sin(f) * _,
												S = (h + p) / 2 + Math.sin(f) * x + Math.cos(f) * _,
												M = u([1, 0], [(g - x) / i, (v - _) / o]),
												O = [(g - x) / i, (v - _) / o],
												P = [(-1 * g - x) / i, (-1 * v - _) / o],
												E = u(O, P);
											return a(O, P) <= -1 && (E = Math.PI), a(O, P) >= 1 && (E = 0), 0 === r && E > 0 && (E -= 2 * Math.PI), 1 === r && E < 0 && (E += 2 * Math.PI), [t, w, S, i, o, M, E, f, r]
										}(v, l, w, S, b, x, _);
										this.params = M;
										var O = e.subStart;
										this.subStart = O, this.endPoint = l;
										var P = M[5] % (2 * Math.PI);
										c.isNumberEqual(P, 2 * Math.PI) && (P = 0);
										var E = M[6] % (2 * Math.PI);
										c.isNumberEqual(E, 2 * Math.PI) && (E = 0);
										var A = .001;
										this.startTangent = function() {
											0 === S && (A *= -1);
											var t = M[3] * Math.cos(P - A) + M[1],
												e = M[4] * Math.sin(P - A) + M[2];
											return [t - O.x, e - O.y]
										}, this.endTangent = function() {
											var t = M[6];
											t - 2 * Math.PI < 1e-4 && (t = 0);
											var e = M[3] * Math.cos(P + t + A) + M[1],
												n = M[4] * Math.sin(P + t - A) + M[2];
											return [v.x - e, v.y - n]
										};
										break;
									case "Z":
										this.command = "Z", this.params = [v, e.subStart], this.subStart = e.subStart, this.endPoint = e.subStart
								}
							},
							isInside: function(t, e, n) {
								var r = this.command,
									i = this.params,
									o = this.box;
								if (o && !s.box(o.minX, o.maxX, o.minY, o.maxY, t, e)) return !1;
								switch (r) {
									default:
										break;
									case "M":
										return !1;
									case "TL":
									case "L":
									case "Z":
										return s.line(i[0].x, i[0].y, i[1].x, i[1].y, n, t, e);
									case "SQ":
									case "Q":
										return s.quadraticline(i[0].x, i[0].y, i[1].x, i[1].y, i[2].x, i[2].y, n, t, e);
									case "C":
										return s.cubicline(i[0].x, i[0].y, i[1].x, i[1].y, i[2].x, i[2].y, i[3].x, i[3].y, n, t, e);
									case "A":
										var a = i,
											u = a[1],
											c = a[2],
											f = a[3],
											l = a[4],
											h = a[5],
											g = a[6],
											v = a[7],
											m = a[8],
											y = f > l ? f : l,
											b = f > l ? 1 : f / l,
											x = f > l ? l / f : 1;
										a = [t, e, 1];
										var _ = [1, 0, 0, 0, 1, 0, 0, 0, 1];
										return p.translate(_, _, [-u, -c]), p.rotate(_, _, -v), p.scale(_, _, [1 / b, 1 / x]), d.transformMat3(a, a, _), s.arcline(0, 0, y, h, h + g, 1 - m, n, a[0], a[1])
								}
								return !1
							},
							draw: function(t) {
								var e, n, r, i = this.command,
									o = this.params;
								switch (i) {
									default:
										break;
									case "M":
										t.moveTo(o[1].x, o[1].y);
										break;
									case "TL":
									case "L":
										t.lineTo(o[1].x, o[1].y);
										break;
									case "SQ":
									case "Q":
										e = o[1], n = o[2], t.quadraticCurveTo(e.x, e.y, n.x, n.y);
										break;
									case "C":
										e = o[1], n = o[2], r = o[3], t.bezierCurveTo(e.x, e.y, n.x, n.y, r.x, r.y);
										break;
									case "A":
										var a = o,
											u = a[1],
											c = a[2],
											s = a[3],
											f = a[4],
											l = a[5],
											h = a[6],
											d = a[7],
											p = a[8],
											g = s > f ? s : f,
											v = s > f ? 1 : s / f,
											m = s > f ? f / s : 1;
										t.translate(u, c), t.rotate(d), t.scale(v, m), t.arc(0, 0, g, l, l + h, 1 - p), t.scale(1 / v, 1 / m), t.rotate(-d), t.translate(-u, -c);
										break;
									case "Z":
										t.closePath()
								}
							},
							getBBox: function(t) {
								var e, n, r, i, o = t / 2,
									a = this.params;
								switch (this.command) {
									default:
									case "M":
									case "Z":
										break;
									case "TL":
									case "L":
										this.box = {
											minX: Math.min(a[0].x, a[1].x) - o,
											maxX: Math.max(a[0].x, a[1].x) + o,
											minY: Math.min(a[0].y, a[1].y) - o,
											maxY: Math.max(a[0].y, a[1].y) + o
										};
										break;
									case "SQ":
									case "Q":
										for (r = 0, i = (n = l.extrema(a[0].x, a[1].x, a[2].x)).length; r < i; r++) n[r] = l.at(a[0].x, a[1].x, a[2].x, n[r]);
										for (n.push(a[0].x, a[2].x), r = 0, i = (e = l.extrema(a[0].y, a[1].y, a[2].y)).length; r < i; r++) e[r] = l.at(a[0].y, a[1].y, a[2].y, e);
										e.push(a[0].y, a[2].y), this.box = {
											minX: Math.min.apply(Math, n) - o,
											maxX: Math.max.apply(Math, n) + o,
											minY: Math.min.apply(Math, e) - o,
											maxY: Math.max.apply(Math, e) + o
										};
										break;
									case "C":
										for (r = 0, i = (n = f.extrema(a[0].x, a[1].x, a[2].x, a[3].x)).length; r < i; r++) n[r] = f.at(a[0].x, a[1].x, a[2].x, a[3].x, n[r]);
										for (r = 0, i = (e = f.extrema(a[0].y, a[1].y, a[2].y, a[3].y)).length; r < i; r++) e[r] = f.at(a[0].y, a[1].y, a[2].y, a[3].y, e[r]);
										n.push(a[0].x, a[3].x), e.push(a[0].y, a[3].y), this.box = {
											minX: Math.min.apply(Math, n) - o,
											maxX: Math.max.apply(Math, n) + o,
											minY: Math.min.apply(Math, e) - o,
											maxY: Math.max.apply(Math, e) + o
										};
										break;
									case "A":
										var u = a,
											c = u[1],
											s = u[2],
											d = u[3],
											p = u[4],
											g = u[5],
											v = u[6],
											m = u[7],
											y = u[8],
											b = g,
											x = g + v,
											_ = h.xExtrema(m, d, p),
											w = 1 / 0,
											S = -1 / 0,
											M = [b, x];
										for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
											var O = _ + r;
											1 === y ? b < O && O < x && M.push(O) : x < O && O < b && M.push(O)
										}
										for (r = 0, i = M.length; r < i; r++) {
											var P = h.xAt(m, d, p, c, M[r]);
											P < w && (w = P), P > S && (S = P)
										}
										var E = h.yExtrema(m, d, p),
											A = 1 / 0,
											C = -1 / 0,
											j = [b, x];
										for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
											var k = E + r;
											1 === y ? b < k && k < x && j.push(k) : x < k && k < b && j.push(k)
										}
										for (r = 0, i = j.length; r < i; r++) {
											var I = h.yAt(m, d, p, s, j[r]);
											I < A && (A = I), I > C && (C = I)
										}
										this.box = {
											minX: w - o,
											maxX: S + o,
											minY: A - o,
											maxY: C + o
										}
								}
							}
						}), t.exports = v
					}, function(t, e, n) {
						function r(t, e, n, r, i, o, a) {
							var u, p, g, v, m, y, b;
							if (!e.fill) {
								var x = e.arrowLength || h,
									_ = e.arrowAngle ? e.arrowAngle * c / 180 : d;
								b = l(r - o, n - i), m = Math.abs(e.lineWidth * f(b)) / 2, y = Math.abs(e.lineWidth * s(b)) / 2, a && (m = -m, y = -y), u = i + x * f(b + _ / 2), p = o + x * s(b + _ / 2), g = i + x * f(b - _ / 2), v = o + x * s(b - _ / 2), t.beginPath(), t.moveTo(u - m, p - y), t.lineTo(i - m, o - y), t.lineTo(g - m, v - y), t.moveTo(i - m, o - y), t.lineTo(i + m, o + y), t.moveTo(i, o), t.stroke()
							}
						}

						function i(t, e, n, r, i, o, c) {
							var s = c ? e.startArrow : e.endArrow,
								f = s.d,
								l = 0,
								h = i - n,
								d = o - r,
								p = Math.atan(h / d);
							0 === d && h < 0 ? l = Math.PI : h > 0 && d > 0 ? l = Math.PI / 2 - p : h < 0 && d < 0 ? l = -Math.PI / 2 - p : h >= 0 && d < 0 ? l = -p - Math.PI / 2 : h <= 0 && d > 0 && (l = Math.PI / 2 - p);
							var g = function(t) {
								var e, n = [],
									r = a.parsePath(t.path);
								if (!Array.isArray(r) || 0 === r.length || "M" !== r[0][0] && "m" !== r[0][0]) return !1;
								for (var i = r.length, o = 0; o < r.length; o++) {
									var c = r[o];
									e = new u(c, e, o === i - 1), n.push(e)
								}
								return n
							}(s);
							if (g) {
								f && (c ? (i += Math.sin(Math.abs(p)) * f, o = o + Math.cos(Math.abs(p)) * f - .5 * t.lineWidth) : (i -= Math.sin(Math.abs(p)) * f, o = o - Math.cos(Math.abs(p)) * f + .5 * t.lineWidth)), t.save(), t.beginPath(), t.translate(i, o), t.rotate(l);
								for (var v = 0; v < g.length; v++) g[v].draw(t);
								t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = t.strokeStyle, t.fill(), t.restore()
							}
						}
						var a = n(362),
							u = n(371),
							c = Math.PI,
							s = Math.sin,
							f = Math.cos,
							l = Math.atan2,
							h = 10,
							d = c / 3;
						t.exports = {
							addStartArrow: function(t, e, n, a, u, c) {
								"object" == o(e.startArrow) ? i(t, e, n, a, u, c, !0) : e.startArrow && r(t, e, n, a, u, c, !0)
							},
							addEndArrow: function(t, e, n, a, u, c) {
								"object" == o(e.endArrow) ? i(t, e, n, a, u, c, !1) : e.endArrow && r(t, e, n, a, u, c, !1)
							}
						}
					}, function(t, e, n) {
						function r(t, e, n, r) {
							return {
								x: Math.cos(r) * n + t,
								y: Math.sin(r) * n + e
							}
						}

						function i(t, e, n, r) {
							var i, o;
							return r ? t < e ? (i = e - t, o = 2 * Math.PI - n + t) : t > n && (i = 2 * Math.PI - t + e, o = t - n) : (i = t - e, o = n - t), i > o ? n : e
						}

						function o(t, e, n, r) {
							var o = 0;
							return n - e >= 2 * Math.PI && (o = 2 * Math.PI), e = u.mod(e, 2 * Math.PI), n = u.mod(n, 2 * Math.PI) + o, t = u.mod(t, 2 * Math.PI), r ? e >= n ? t > n && t < e ? t : i(t, n, e, !0) : t < e || t > n ? t : i(t, e, n) : e <= n ? e < t && t < n ? t : i(t, e, n, !0) : t > e || t < n ? t : i(t, n, e)
						}

						function a(t, e, n, r, i, a, c, s, f) {
							var l = [c, s],
								h = [t, e],
								d = u.vec2.subtract([], l, h),
								p = u.vec2.angleTo([1, 0], d);
							p = o(p, r, i, a);
							var g = [n * Math.cos(p) + t, n * Math.sin(p) + e];
							return f && (f.x = g[0], f.y = g[1]), u.vec2.distance(g, l)
						}
						var u = n(17);
						t.exports = {
							nearAngle: o,
							projectPoint: function(t, e, n, r, i, o, u, c) {
								var s = {};
								return a(t, e, n, r, i, o, u, c, s), s
							},
							pointDistance: a,
							box: function(t, e, n, i, a, c) {
								var s = Math.PI / 2,
									f = Math.PI,
									l = 3 * Math.PI / 2,
									h = [],
									d = o(0, i, a, c);
								0 === d && h.push(r(t, e, n, 0)), (d = o(s, i, a, c)) === s && h.push(r(t, e, n, s)), (d = o(f, i, a, c)) === f && h.push(r(t, e, n, f)), (d = o(l, i, a, c)) === l && h.push(r(t, e, n, l)), h.push(r(t, e, n, i)), h.push(r(t, e, n, a));
								var p = 1 / 0,
									g = -1 / 0,
									v = 1 / 0,
									m = -1 / 0;
								return u.each(h, function(t) {
									p > t.x && (p = t.x), g < t.x && (g = t.x), v > t.y && (v = t.y), m < t.y && (m = t.y)
								}), {
									minX: p,
									minY: v,
									maxX: g,
									maxY: m
								}
							}
						}
					}, function(t, e, n) {
						var r = n(17).vec2;
						t.exports = {
							at: function(t, e, n) {
								return (e - t) * n + t
							},
							pointDistance: function(t, e, n, i, o, a) {
								var u = [n - t, i - e];
								if (r.exactEquals(u, [0, 0])) return NaN;
								var c = [-u[1], u[0]];
								r.normalize(c, c);
								var s = [o - t, a - e];
								return Math.abs(r.dot(s, c))
							},
							box: function(t, e, n, r, i) {
								var o = i / 2,
									a = Math.min(t, n),
									u = Math.max(t, n);
								return {
									minX: a - o,
									minY: Math.min(e, r) - o,
									maxX: u + o,
									maxY: Math.max(e, r) + o
								}
							},
							len: function(t, e, n, r) {
								return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e))
							}
						}
					}, function(t, e, n) {
						var r = n(382);
						t.exports = function(t) {
							if ("string" == typeof t || r(t)) return t;
							var e = t + "";
							return "0" == e && 1 / t == -1 / 0 ? "-0" : e
						}
					}, function(t, e, n) {
						var r = n(629),
							i = n(404),
							o = n(628),
							a = n(451),
							u = n(627),
							c = n(158),
							s = n(465),
							f = s(r),
							l = s(i),
							h = s(o),
							d = s(a),
							p = s(u),
							g = c;
						(r && "[object DataView]" != g(new r(new ArrayBuffer(1))) || i && "[object Map]" != g(new i) || o && "[object Promise]" != g(o.resolve()) || a && "[object Set]" != g(new a) || u && "[object WeakMap]" != g(new u)) && (g = function(t) {
							var e = c(t),
								n = "[object Object]" == e ? t.constructor : void 0,
								r = n ? s(n) : "";
							if (r) switch (r) {
								case f:
									return "[object DataView]";
								case l:
									return "[object Map]";
								case h:
									return "[object Promise]";
								case d:
									return "[object Set]";
								case p:
									return "[object WeakMap]"
							}
							return e
						}), t.exports = g
					}, function(t, e, n) {
						var r = n(464),
							i = n(463);
						t.exports = function(t, e, n, o) {
							var a = !n;
							n || (n = {});
							for (var u = -1, c = e.length; ++u < c;) {
								var s = e[u],
									f = o ? o(n[s], t[s], s, n, t) : void 0;
								void 0 === f && (f = t[s]), a ? i(n, s, f) : r(n, s, f)
							}
							return n
						}
					}, function(t, e, n) {
						var r = n(650);
						t.exports = function(t, e) {
							var n = t.__data__;
							return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
						}
					}, function(t, e, n) {
						var r = n(153)(Object, "create");
						t.exports = r
					}, function(t, e, n) {
						var r = n(405);
						t.exports = function(t, e) {
							for (var n = t.length; n--;)
								if (r(t[n][0], e)) return n;
							return -1
						}
					}, function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n;) {
								var r = t[e];
								this.set(r[0], r[1])
							}
						}
						var i = n(672),
							o = n(671),
							a = n(670),
							u = n(669),
							c = n(668);
						r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
					}, function(t, e, n) {
						var r = n(158),
							i = n(139);
						t.exports = function(t) {
							return "symbol" == (void 0 === t ? "undefined" : o(t)) || i(t) && "[object Symbol]" == r(t)
						}
					}, function(t, e, n) {
						var r = n(64);
						t.exports = function(t) {
							return r(t) ? Array.prototype.slice.call(t) : []
						}
					}, function(t, e, n) {
						var r = n(64),
							i = Array.prototype.indexOf;
						t.exports = function(t, e) {
							return !!r(t) && i.call(t, e) > -1
						}
					}, function(t, e) {
						function n(t, e) {
							for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
						}
						t.exports = function(t, e, r, i) {
							return e && n(t, e), r && n(t, r), i && n(t, i), t
						}
					}, , function(t, e, n) {
						var r = n(22),
							i = function() {
								function t(t) {
									r.mix(this, {
										id: "",
										type: null,
										model: {},
										group: null,
										animate: !1,
										modelCache: {},
										isItem: !0
									}, t), this._init()
								}
								var e = t.prototype;
								return e._init = function() {
									this._setIndex(), this._initGroup(), this.draw()
								}, e._setIndex = function() {
									var t = this.model;
									r.isNil(t.index) && (t.index = this.zIndex)
								}, e._mapping = function() {
									var t = this.mapper,
										e = this.model;
									t.mapping(e)
								}, e._initGroup = function() {
									var t = this.group,
										e = this.model,
										n = this.type;
									t.isItemContainer = !0, t.id = e.id, t.itemType = n, t.model = e, t.item = this
								}, e._calculateBBox = function() {
									var t = this.keyShape,
										e = this.group,
										n = r.getBBox(t, e);
									return n.width = n.maxX - n.minX, n.height = n.maxY - n.minY, n.centerX = (n.minX + n.maxX) / 2, n.centerY = (n.minY + n.maxY) / 2, n
								}, e.getLabel = function() {
									return this.group.findByClass("label")[0]
								}, e.getGraph = function() {
									return this.graph
								}, e.getEnterAnimate = function() {
									var t = this.shapeObj,
										e = this.graph;
									return t.enterAnimate ? t.enterAnimate : e.get("_enterAnimate")
								}, e.getLeaveAnimate = function() {
									var t = this.shapeObj,
										e = this.graph;
									return t.leaveAnimate ? t.leaveAnimate : e.get("_leaveAnimate")
								}, e.getUpdateAnimate = function() {
									var t = this.shapeObj,
										e = this.graph;
									return t.updateAnimate ? t.updateAnimate : e.get("_updateAnimate")
								}, e._setShapeObj = function() {
									var t = this.graph,
										e = this.type,
										n = this.getModel();
									this.shapeObj = t.getShapeObj(e, n)
								}, e._afterDraw = function() {
									var t = this.graph;
									this._setGId(), this._cacheModel(), t.emit("afteritemdraw", {
										item: this
									})
								}, e._cacheModel = function() {
									this.modelCache = r.mix({}, this.model)
								}, e._setGId = function() {
									var t = this.group,
										e = this.id,
										n = this.type;
									t.gid = e, t.deepEach(function(t, r, i) {
										var o = r.gid;
										t.id = e, t.eventPreFix = n, t.gid = o + "-" + i
									})
								}, e._beforeDraw = function() {
									this.graph.emit("beforeitemdraw", {
										item: this
									}), this.updateCollapsedParent()
								}, e._shouldDraw = function() {
									return !0
								}, e._getDiff = function() {
									var t = [],
										e = this.model,
										n = this.modelCache;
									return r.each(e, function(e, i) {
										r.isEqual(e, n[i]) || t.push(i)
									}), 0 !== t.length && t
								}, e._drawInner = function() {
									var t = this.animate;
									this.group.clear(!t), this._mapping(), this._setShapeObj();
									var e = this.shapeObj,
										n = e.draw(this);
									n && (n.isKeyShape = !0, this.keyShape = n), e.afterDraw && e.afterDraw(this)
								}, e.deepEach = function(t, e) {
									r.traverseTree(this, t, e || function(t) {
										return t.getChildren()
									})
								}, e.getShapeObj = function() {
									return this.shapeObj
								}, e.updateCollapsedParent = function() {
									var t = this.dataMap;
									this.collapsedParent = function t(e, n) {
										var r = n[e.parent];
										if (!r) return !1;
										if (r) {
											var i = t(r, n);
											if (i) return i
										}
										return r.collapsed ? r : void 0
									}(this.model, t)
								}, e.isVisible = function() {
									return this.group.get("visible")
								}, e.hide = function() {
									var t = this.group,
										e = this.graph;
									e.emit("beforeitemhide", {
										item: this
									}), t.hide(), e.emit("afteritemhide", {
										item: this
									})
								}, e.show = function() {
									var t = this.group,
										e = this.graph;
									e.emit("beforeitemshow", {
										item: this
									}), t.show(), e.emit("afteritemshow", {
										item: this
									})
								}, e.draw = function() {
									this._beforeDraw(), this._shouldDraw() && this._drawInner(), this._afterDraw()
								}, e.forceUpdate = function() {
									this._beforeDraw(), this._drawInner(), this._afterDraw()
								}, e.getCenter = function() {
									var t = this.getBBox();
									return {
										x: t.centerX,
										y: t.centerY
									}
								}, e.getBBox = function() {
									return this.bbox || this._calculateBBox()
								}, e.layoutUpdate = function() {
									this.isVisible() && this.draw()
								}, e.update = function() {
									this.isVisible() && this.draw()
								}, e.getModel = function() {
									return this.model
								}, e.getKeyShape = function() {
									return this.keyShape
								}, e.getGraphicGroup = function() {
									return this.group
								}, e.getHierarchy = function() {
									return this.graph.getHierarchy(this)
								}, e.getParent = function() {
									var t = this.model;
									return this.itemMap[t.parent]
								}, e.getAllParents = function() {
									for (var t = this.model, e = this.itemMap, n = [], r = t.parent; r && e[r];) n.push(e[r]), r = r.parent;
									return n
								}, e.getAllChildren = function() {
									var t = [];
									return this.deepEach(function(e) {
										t.push(e)
									}), t
								}, e.getChildren = function() {
									var t = this.id;
									return this.graph.getItems().filter(function(e) {
										return e.model.parent === t
									})
								}, e.toFront = function() {
									this.group.toFront()
								}, e.toBack = function() {
									this.group.toBack()
								}, e.destroy = function() {
									if (!this.destroyed) {
										var t = this.animate,
											e = this.graph;
										e.emit("beforeitemdestroy", {
											item: this
										}), this.group.remove(!t), this.destroyed = !0, e.emit("afteritemdestroy", {
											item: this
										})
									}
								}, t
							}();
						t.exports = i
					}, function(t, e) {
						t.exports = "2.1.4"
					}, function(t, e, n) {
						function r(t, e) {
							var n = [],
								r = [];
							return t.length && function t(e, i) {
								if (1 === e.length) n.push(e[0]), r.push(e[0]);
								else {
									for (var o = [], a = 0; a < e.length - 1; a++) 0 === a && n.push(e[0]), a === e.length - 2 && r.push(e[a + 1]), o[a] = [(1 - i) * e[a][0] + i * e[a + 1][0], (1 - i) * e[a][1] + i * e[a + 1][1]];
									t(o, i)
								}
							}(t, e), {
								left: n,
								right: r.reverse()
							}
						}

						function i(t, e, n) {
							var r = null,
								i = n;
							return e < i && (i = e, r = "add"), t < i && (i = t, r = "del"), {
								type: r,
								min: i
							}
						}

						function a(t, e, n) {
							for (var r, i = [].concat(t), o = 1 / (n + 1), a = u(e)[0], c = 1; c <= n; c++) o *= c, 0 === (r = Math.floor(t.length * o)) ? i.unshift([a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)]) : i.splice(r, 0, [a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)]);
							return i
						}

						function u(t) {
							var e = [];
							switch (t[0]) {
								case "M":
								case "L":
									e.push([t[1], t[2]]);
									break;
								case "A":
									e.push([t[6], t[7]]);
									break;
								case "Q":
									e.push([t[3], t[4]]), e.push([t[1], t[2]]);
									break;
								case "T":
									e.push([t[1], t[2]]);
									break;
								case "C":
									e.push([t[5], t[6]]), e.push([t[1], t[2]]), e.push([t[3], t[4]]);
									break;
								case "S":
									e.push([t[3], t[4]]), e.push([t[1], t[2]]);
									break;
								case "H":
								case "V":
									e.push([t[1], t[1]])
							}
							return e
						}
						var c = n(440),
							s = "\t\n\v\f\r   ᠎             　\u2028\u2029",
							f = new RegExp("([a-z])[" + s + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + s + "]*,?[" + s + "]*)+)", "ig"),
							l = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + s + "]*,?[" + s + "]*", "ig"),
							h = function(t) {
								if (!t) return null;
								if ((void 0 === t ? "undefined" : o(t)) == o([])) return t;
								var e = {
										a: 7,
										c: 6,
										o: 2,
										h: 1,
										l: 2,
										m: 2,
										r: 4,
										q: 4,
										s: 4,
										t: 2,
										v: 1,
										u: 3,
										z: 0
									},
									n = [];
								return String(t).replace(f, function(t, r, i) {
									var o = [],
										a = r.toLowerCase();
									if (i.replace(l, function(t, e) {
											e && o.push(+e)
										}), "m" === a && o.length > 2 && (n.push([r].concat(o.splice(0, 2))), a = "l", r = "m" === r ? "l" : "L"), "o" === a && 1 === o.length && n.push([r, o[0]]), "r" === a) n.push([r].concat(o));
									else
										for (; o.length >= e[a] && (n.push([r].concat(o.splice(0, e[a]))), e[a]););
								}), n
							},
							d = function(t, e) {
								for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
									var o = [{
										x: +t[r - 2],
										y: +t[r - 1]
									}, {
										x: +t[r],
										y: +t[r + 1]
									}, {
										x: +t[r + 2],
										y: +t[r + 3]
									}, {
										x: +t[r + 4],
										y: +t[r + 5]
									}];
									e ? r ? i - 4 === r ? o[3] = {
										x: +t[0],
										y: +t[1]
									} : i - 2 === r && (o[2] = {
										x: +t[0],
										y: +t[1]
									}, o[3] = {
										x: +t[2],
										y: +t[3]
									}) : o[0] = {
										x: +t[i - 2],
										y: +t[i - 1]
									} : i - 4 === r ? o[3] = o[2] : r || (o[0] = {
										x: +t[r],
										y: +t[r + 1]
									}), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
								}
								return n
							},
							p = function(t, e, n, r, i) {
								var o = [];
								if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) {
									var a = Math.PI / 180,
										u = t + n * Math.cos(-r * a),
										c = t + n * Math.cos(-i * a);
									o = [
										["M", u, e + n * Math.sin(-r * a)],
										["A", n, n, 0, +(i - r > 180), 0, c, e + n * Math.sin(-i * a)]
									]
								} else o = [
									["M", t, e],
									["m", 0, -r],
									["a", n, r, 0, 1, 1, 0, 2 * r],
									["a", n, r, 0, 1, 1, 0, -2 * r],
									["z"]
								];
								return o
							},
							g = function(t) {
								if (!(t = h(t)) || !t.length) return [
									["M", 0, 0]
								];
								var e, n, r = [],
									i = 0,
									o = 0,
									a = 0,
									u = 0,
									c = 0;
								"M" === t[0][0] && (a = i = +t[0][1], u = o = +t[0][2], c++, r[0] = ["M", i, o]);
								for (var s, f, l = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = c, v = t.length; g < v; g++) {
									if (r.push(s = []), (e = (f = t[g])[0]) !== e.toUpperCase()) switch (s[0] = e.toUpperCase(), s[0]) {
											case "A":
												s[1] = f[1], s[2] = f[2], s[3] = f[3], s[4] = f[4], s[5] = f[5], s[6] = +f[6] + i, s[7] = +f[7] + o;
												break;
											case "V":
												s[1] = +f[1] + o;
												break;
											case "H":
												s[1] = +f[1] + i;
												break;
											case "R":
												for (var m = 2, y = (n = [i, o].concat(f.slice(1))).length; m < y; m++) n[m] = +n[m] + i, n[++m] = +n[m] + o;
												r.pop(), r = r.concat(d(n, l));
												break;
											case "O":
												r.pop(), (n = p(i, o, f[1], f[2])).push(n[0]), r = r.concat(n);
												break;
											case "U":
												r.pop(), r = r.concat(p(i, o, f[1], f[2], f[3])), s = ["U"].concat(r[r.length - 1].slice(-2));
												break;
											case "M":
												a = +f[1] + i, u = +f[2] + o;
												break;
											default:
												for (var b = 1, x = f.length; b < x; b++) s[b] = +f[b] + (b % 2 ? i : o)
										} else if ("R" === e) n = [i, o].concat(f.slice(1)), r.pop(), r = r.concat(d(n, l)), s = ["R"].concat(f.slice(-2));
										else if ("O" === e) r.pop(), (n = p(i, o, f[1], f[2])).push(n[0]), r = r.concat(n);
									else if ("U" === e) r.pop(), r = r.concat(p(i, o, f[1], f[2], f[3])), s = ["U"].concat(r[r.length - 1].slice(-2));
									else
										for (var _ = 0, w = f.length; _ < w; _++) s[_] = f[_];
									if ("O" !== (e = e.toUpperCase())) switch (s[0]) {
										case "Z":
											i = +a, o = +u;
											break;
										case "H":
											i = s[1];
											break;
										case "V":
											o = s[1];
											break;
										case "M":
											a = s[s.length - 2], u = s[s.length - 1];
											break;
										default:
											i = s[s.length - 2], o = s[s.length - 1]
									}
								}
								return r
							},
							v = function(t, e, n, r) {
								return [t, e, n, r, n, r]
							},
							m = function(t, e, n, r, i, o) {
								return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
							},
							y = function(t, e) {
								var n, r = g(t),
									i = e && g(e),
									o = {
										x: 0,
										y: 0,
										bx: 0,
										by: 0,
										X: 0,
										Y: 0,
										qx: null,
										qy: null
									},
									a = {
										x: 0,
										y: 0,
										bx: 0,
										by: 0,
										X: 0,
										Y: 0,
										qx: null,
										qy: null
									},
									u = [],
									c = [],
									s = "",
									f = "",
									l = function(t, e, n) {
										var r, i;
										if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
										switch (!(t[0] in {
												T: 1,
												Q: 1
											}) && (e.qx = e.qy = null), t[0]) {
											case "M":
												e.X = t[1], e.Y = t[2];
												break;
											case "A":
												t = ["C"].concat(function t(e, n, r, i, o, a, u, c, s, f) {
													r === i && (r += 1);
													var l, h, d, p, g, v = 120 * Math.PI / 180,
														m = Math.PI / 180 * (+o || 0),
														y = [],
														b = function(t, e, n) {
															return {
																x: t * Math.cos(n) - e * Math.sin(n),
																y: t * Math.sin(n) + e * Math.cos(n)
															}
														};
													if (f) h = f[0], d = f[1], p = f[2], g = f[3];
													else {
														e = (l = b(e, n, -m)).x, n = l.y, c = (l = b(c, s, -m)).x, s = l.y, e === c && n === s && (c += 1, s += 1);
														var x = (e - c) / 2,
															_ = (n - s) / 2,
															w = x * x / (r * r) + _ * _ / (i * i);
														w > 1 && (r *= w = Math.sqrt(w), i *= w);
														var S = r * r,
															M = i * i,
															O = (a === u ? -1 : 1) * Math.sqrt(Math.abs((S * M - S * _ * _ - M * x * x) / (S * _ * _ + M * x * x)));
														p = O * r * _ / i + (e + c) / 2, g = O * -i * x / r + (n + s) / 2, h = Math.asin(((n - g) / i).toFixed(9)), d = Math.asin(((s - g) / i).toFixed(9)), h = e < p ? Math.PI - h : h, d = c < p ? Math.PI - d : d, h < 0 && (h = 2 * Math.PI + h), d < 0 && (d = 2 * Math.PI + d), u && h > d && (h -= 2 * Math.PI), !u && d > h && (d -= 2 * Math.PI)
													}
													var P = d - h;
													if (Math.abs(P) > v) {
														var E = d,
															A = c,
															C = s;
														d = h + v * (u && d > h ? 1 : -1), y = t(c = p + r * Math.cos(d), s = g + i * Math.sin(d), r, i, o, 0, u, A, C, [d, E, p, g])
													}
													P = d - h;
													var j = Math.cos(h),
														k = Math.sin(h),
														I = Math.cos(d),
														T = Math.sin(d),
														B = Math.tan(P / 4),
														N = 4 / 3 * r * B,
														L = 4 / 3 * i * B,
														D = [e, n],
														R = [e + N * k, n - L * j],
														G = [c + N * T, s - L * I],
														Y = [c, s];
													if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], f) return [R, G, Y].concat(y);
													for (var F = [], X = 0, z = (y = [R, G, Y].concat(y).join().split(",")).length; X < z; X++) F[X] = X % 2 ? b(y[X - 1], y[X], m).y : b(y[X], y[X + 1], m).x;
													return F
												}.apply(0, [e.x, e.y].concat(t.slice(1))));
												break;
											case "S":
												"C" === n || "S" === n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
												break;
											case "T":
												"Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(m(e.x, e.y, e.qx, e.qy, t[1], t[2]));
												break;
											case "Q":
												e.qx = t[1], e.qy = t[2], t = ["C"].concat(m(e.x, e.y, t[1], t[2], t[3], t[4]));
												break;
											case "L":
												t = ["C"].concat(v(e.x, e.y, t[1], t[2]));
												break;
											case "H":
												t = ["C"].concat(v(e.x, e.y, t[1], e.y));
												break;
											case "V":
												t = ["C"].concat(v(e.x, e.y, e.x, t[1]));
												break;
											case "Z":
												t = ["C"].concat(v(e.x, e.y, e.X, e.Y))
										}
										return t
									},
									h = function(t, e) {
										if (t[e].length > 7) {
											t[e].shift();
											for (var o = t[e]; o.length;) u[e] = "A", i && (c[e] = "A"), t.splice(e++, 0, ["C"].concat(o.splice(0, 6)));
											t.splice(e, 1), n = Math.max(r.length, i && i.length || 0)
										}
									},
									d = function(t, e, o, a, u) {
										t && e && "M" === t[u][0] && "M" !== e[u][0] && (e.splice(u, 0, ["M", a.x, a.y]), o.bx = 0, o.by = 0, o.x = t[u][1], o.y = t[u][2], n = Math.max(r.length, i && i.length || 0))
									};
								n = Math.max(r.length, i && i.length || 0);
								for (var p = 0; p < n; p++) {
									r[p] && (s = r[p][0]), "C" !== s && (u[p] = s, p && (f = u[p - 1])), r[p] = l(r[p], o, f), "A" !== u[p] && "C" === s && (u[p] = "C"), h(r, p), i && (i[p] && (s = i[p][0]), "C" !== s && (c[p] = s, p && (f = c[p - 1])), i[p] = l(i[p], a, f), "A" !== c[p] && "C" === s && (c[p] = "C"), h(i, p)), d(r, i, o, a, p), d(i, r, a, o, p);
									var y = r[p],
										b = i && i[p],
										x = y.length,
										_ = i && b.length;
									o.x = y[x - 2], o.y = y[x - 1], o.bx = parseFloat(y[x - 4]) || o.x, o.by = parseFloat(y[x - 3]) || o.y, a.bx = i && (parseFloat(b[_ - 4]) || a.x), a.by = i && (parseFloat(b[_ - 3]) || a.y), a.x = i && b[_ - 2], a.y = i && b[_ - 1]
								}
								return i ? [r, i] : r
							},
							b = /,?([a-z]),?/gi,
							x = function(t) {
								return t.join(",").replace(b, "$1")
							},
							_ = function(t, e, n, r, i) {
								return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
							},
							w = function(t, e, n, r, i, o, a, u, c) {
								null === c && (c = 1);
								for (var s = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], l = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, d = 0; d < 12; d++) {
									var p = s * f[d] + s,
										g = _(p, t, n, i, a),
										v = _(p, e, r, o, u),
										m = g * g + v * v;
									h += l[d] * Math.sqrt(m)
								}
								return s * h
							},
							S = function(t, e, n, r, i, o, a, u) {
								if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, u) || Math.min(e, r) > Math.max(o, u))) {
									var c = (t - n) * (o - u) - (e - r) * (i - a);
									if (c) {
										var s = ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / c,
											f = ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / c,
											l = +s.toFixed(2),
											h = +f.toFixed(2);
										if (!(l < +Math.min(t, n).toFixed(2) || l > +Math.max(t, n).toFixed(2) || l < +Math.min(i, a).toFixed(2) || l > +Math.max(i, a).toFixed(2) || h < +Math.min(e, r).toFixed(2) || h > +Math.max(e, r).toFixed(2) || h < +Math.min(o, u).toFixed(2) || h > +Math.max(o, u).toFixed(2))) return {
											x: s,
											y: f
										}
									}
								}
							},
							M = function(t, e, n) {
								return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
							},
							O = function(t, e, n, r, i) {
								if (i) return [
									["M", +t + +i, e],
									["l", n - 2 * i, 0],
									["a", i, i, 0, 0, 1, i, i],
									["l", 0, r - 2 * i],
									["a", i, i, 0, 0, 1, -i, i],
									["l", 2 * i - n, 0],
									["a", i, i, 0, 0, 1, -i, -i],
									["l", 0, 2 * i - r],
									["a", i, i, 0, 0, 1, i, -i],
									["z"]
								];
								var o = [
									["M", t, e],
									["l", n, 0],
									["l", 0, r],
									["l", -n, 0],
									["z"]
								];
								return o.parsePathArray = x, o
							},
							P = function(t, e, n, r) {
								return null === t && (t = e = n = r = 0), null === e && (e = t.y, n = t.width, r = t.height, t = t.x), {
									x: t,
									y: e,
									width: n,
									w: n,
									height: r,
									h: r,
									x2: t + n,
									y2: e + r,
									cx: t + n / 2,
									cy: e + r / 2,
									r1: Math.min(n, r) / 2,
									r2: Math.max(n, r) / 2,
									r0: Math.sqrt(n * n + r * r) / 2,
									path: O(t, e, n, r),
									vb: [t, e, n, r].join(" ")
								}
							},
							E = function(t, e, n, r, i, o, a, u) {
								c.isArray(t) || (t = [t, e, n, r, i, o, a, u]);
								var s = function(t, e, n, r, i, o, a, u) {
									for (var c, s, f, l, h = [], d = [
											[],
											[]
										], p = 0; p < 2; ++p)
										if (0 === p ? (s = 6 * t - 12 * n + 6 * i, c = -3 * t + 9 * n - 9 * i + 3 * a, f = 3 * n - 3 * t) : (s = 6 * e - 12 * r + 6 * o, c = -3 * e + 9 * r - 9 * o + 3 * u, f = 3 * r - 3 * e), Math.abs(c) < 1e-12) {
											if (Math.abs(s) < 1e-12) continue;
											(l = -f / s) > 0 && l < 1 && h.push(l)
										} else {
											var g = s * s - 4 * f * c,
												v = Math.sqrt(g);
											if (!(g < 0)) {
												var m = (-s + v) / (2 * c);
												m > 0 && m < 1 && h.push(m);
												var y = (-s - v) / (2 * c);
												y > 0 && y < 1 && h.push(y)
											}
										} for (var b, x = h.length, _ = x; x--;) b = 1 - (l = h[x]), d[0][x] = b * b * b * t + 3 * b * b * l * n + 3 * b * l * l * i + l * l * l * a, d[1][x] = b * b * b * e + 3 * b * b * l * r + 3 * b * l * l * o + l * l * l * u;
									return d[0][_] = t, d[1][_] = e, d[0][_ + 1] = a, d[1][_ + 1] = u, d[0].length = d[1].length = _ + 2, {
										min: {
											x: Math.min.apply(0, d[0]),
											y: Math.min.apply(0, d[1])
										},
										max: {
											x: Math.max.apply(0, d[0]),
											y: Math.max.apply(0, d[1])
										}
									}
								}.apply(null, t);
								return P(s.min.x, s.min.y, s.max.x - s.min.x, s.max.y - s.min.y)
							},
							A = function(t, e, n, r, i, o, a, u, c) {
								var s = 1 - c,
									f = Math.pow(s, 3),
									l = Math.pow(s, 2),
									h = c * c,
									d = h * c,
									p = t + 2 * c * (n - t) + h * (i - 2 * n + t),
									g = e + 2 * c * (r - e) + h * (o - 2 * r + e),
									v = n + 2 * c * (i - n) + h * (a - 2 * i + n),
									m = r + 2 * c * (o - r) + h * (u - 2 * o + r);
								return {
									x: f * t + 3 * l * c * n + 3 * s * c * c * i + d * a,
									y: f * e + 3 * l * c * r + 3 * s * c * c * o + d * u,
									m: {
										x: p,
										y: g
									},
									n: {
										x: v,
										y: m
									},
									start: {
										x: s * t + c * n,
										y: s * e + c * r
									},
									end: {
										x: s * i + c * a,
										y: s * o + c * u
									},
									alpha: 90 - 180 * Math.atan2(p - v, g - m) / Math.PI
								}
							},
							C = function(t, e, n) {
								if (! function(t, e) {
										return t = P(t), e = P(e), M(e, t.x, t.y) || M(e, t.x2, t.y) || M(e, t.x, t.y2) || M(e, t.x2, t.y2) || M(t, e.x, e.y) || M(t, e.x2, e.y) || M(t, e.x, e.y2) || M(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
									}(E(t), E(e))) return n ? 0 : [];
								for (var r = ~~(w.apply(0, t) / 8), i = ~~(w.apply(0, e) / 8), o = [], a = [], u = {}, c = n ? 0 : [], s = 0; s < r + 1; s++) {
									var f = A.apply(0, t.concat(s / r));
									o.push({
										x: f.x,
										y: f.y,
										t: s / r
									})
								}
								for (var l = 0; l < i + 1; l++) {
									var h = A.apply(0, e.concat(l / i));
									a.push({
										x: h.x,
										y: h.y,
										t: l / i
									})
								}
								for (var d = 0; d < r; d++)
									for (var p = 0; p < i; p++) {
										var g = o[d],
											v = o[d + 1],
											m = a[p],
											y = a[p + 1],
											b = Math.abs(v.x - g.x) < .001 ? "y" : "x",
											x = Math.abs(y.x - m.x) < .001 ? "y" : "x",
											_ = S(g.x, g.y, v.x, v.y, m.x, m.y, y.x, y.y);
										if (_) {
											if (u[_.x.toFixed(4)] === _.y.toFixed(4)) continue;
											u[_.x.toFixed(4)] = _.y.toFixed(4);
											var O = g.t + Math.abs((_[b] - g[b]) / (v[b] - g[b])) * (v.t - g.t),
												C = m.t + Math.abs((_[x] - m[x]) / (y[x] - m[x])) * (y.t - m.t);
											O >= 0 && O <= 1 && C >= 0 && C <= 1 && (n ? c++ : c.push({
												x: _.x,
												y: _.y,
												t1: O,
												t2: C
											}))
										}
									}
								return c
							},
							j = function(t, e) {
								if (t.length !== e.length) return !1;
								var n = !0;
								return c.each(t, function(t, r) {
									if (t !== e[r]) return n = !1, !1
								}), n
							};
						t.exports = {
							parsePathString: h,
							parsePathArray: x,
							pathTocurve: y,
							pathToAbsolute: g,
							catmullRomToBezier: d,
							rectPath: O,
							fillPath: function(t, e) {
								if (1 === t.length) return t;
								var n = t.length - 1,
									i = e.length - 1,
									o = n / i,
									a = [];
								if (1 === t.length && "M" === t[0][0]) {
									for (var u = 0; u < i - n; u++) t.push(t[0]);
									return t
								}
								for (var c = 0; c < i; c++) {
									var s = Math.floor(o * c);
									a[s] = (a[s] || 0) + 1
								}
								var f = a.reduce(function(e, i, o) {
									return o === n ? e.concat(t[n]) : e.concat(function(t, e, n) {
										if (1 === n) return [
											[].concat(t)
										];
										var i = [];
										if ("L" === e[0] || "C" === e[0] || "Q" === e[0]) i = i.concat(function(t, e, n) {
											var i = [
												[t[1], t[2]]
											];
											n = n || 2;
											var o = [];
											"A" === e[0] ? (i.push(e[6]), i.push(e[7])) : "C" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]]), i.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]])) : i.push([e[1], e[2]]);
											for (var a = i, u = 1 / n, c = 0; c < n - 1; c++) {
												var s = r(a, u / (1 - u * c));
												o.push(s.left), a = s.right
											}
											return o.push(a), o.map(function(t) {
												var e = [];
												return 4 === t.length && (e.push("C"), e = e.concat(t[2])), t.length >= 3 && (3 === t.length && e.push("Q"), e = e.concat(t[1])), 2 === t.length && e.push("L"), e = e.concat(t[t.length - 1])
											})
										}(t, e, n));
										else {
											var o = [].concat(t);
											"M" === o[0] && (o[0] = "L");
											for (var a = 0; a <= n - 1; a++) i.push(o)
										}
										return i
									}(t[o], t[o + 1], i))
								}, []);
								return f.unshift(t[0]), "Z" !== e[i] && "z" !== e[i] || f.push("Z"), f
							},
							fillPathByDiff: function(t, e) {
								var n = function(t, e) {
										var n, r, o = t.length,
											a = e.length,
											u = 0;
										if (0 === o || 0 === a) return null;
										for (var c = [], s = 0; s <= o; s++) c[s] = [], c[s][0] = {
											min: s
										};
										for (var f = 0; f <= a; f++) c[0][f] = {
											min: f
										};
										for (var l = 1; l <= o; l++) {
											n = t[l - 1];
											for (var h = 1; h <= a; h++) {
												r = e[h - 1], u = j(n, r) ? 0 : 1;
												var d = c[l - 1][h].min + 1,
													p = c[l][h - 1].min + 1,
													g = c[l - 1][h - 1].min + u;
												c[l][h] = i(d, p, g)
											}
										}
										return c
									}(t, e),
									r = t.length,
									o = e.length,
									a = [],
									u = 1,
									c = 1;
								if (n[r][o] !== r) {
									for (var s = 1; s <= r; s++) {
										var f = n[s][s].min;
										c = s;
										for (var l = u; l <= o; l++) n[s][l].min < f && (f = n[s][l].min, c = l);
										u = c, n[s][u].type && a.push({
											index: s - 1,
											type: n[s][u].type
										})
									}
									for (var h = a.length - 1; h >= 0; h--) u = a[h].index, "add" === a[h].type ? t.splice(u, 0, [].concat(t[u])) : t.splice(u, 1)
								}
								var d = o - (r = t.length);
								if (r < o)
									for (var p = 0; p < d; p++) "z" === t[r - 1][0] || "Z" === t[r - 1][0] ? t.splice(r - 2, 0, t[r - 2]) : t.push(t[r - 1]), r += 1;
								return t
							},
							formatPath: function(t, e) {
								if (t.length <= 1) return t;
								for (var n, r = 0; r < e.length; r++)
									if (t[r][0] !== e[r][0]) switch (n = u(t[r]), e[r][0]) {
										case "M":
											t[r] = ["M"].concat(n[0]);
											break;
										case "L":
											t[r] = ["L"].concat(n[0]);
											break;
										case "A":
											t[r] = [].concat(e[r]), t[r][6] = n[0][0], t[r][7] = n[0][1];
											break;
										case "Q":
											if (n.length < 2) {
												if (!(r > 0)) {
													t[r] = e[r];
													break
												}
												n = a(n, t[r - 1], 1)
											}
											t[r] = ["Q"].concat(n.reduce(function(t, e) {
												return t.concat(e)
											}, []));
											break;
										case "T":
											t[r] = ["T"].concat(n[0]);
											break;
										case "C":
											if (n.length < 3) {
												if (!(r > 0)) {
													t[r] = e[r];
													break
												}
												n = a(n, t[r - 1], 2)
											}
											t[r] = ["C"].concat(n.reduce(function(t, e) {
												return t.concat(e)
											}, []));
											break;
										case "S":
											if (n.length < 2) {
												if (!(r > 0)) {
													t[r] = e[r];
													break
												}
												n = a(n, t[r - 1], 1)
											}
											t[r] = ["S"].concat(n.reduce(function(t, e) {
												return t.concat(e)
											}, []));
											break;
										default:
											t[r] = e[r]
									}
								return t
							},
							intersection: function(t, e) {
								return function(t, e, n) {
									var r, i, o, a, u, c, s, f, l, h;
									t = y(t), e = y(e);
									for (var d = [], p = 0, g = t.length; p < g; p++) {
										var v = t[p];
										if ("M" === v[0]) r = u = v[1], i = c = v[2];
										else {
											"C" === v[0] ? (r = (l = [r, i].concat(v.slice(1)))[6], i = l[7]) : (l = [r, i, r, i, u, c, u, c], r = u, i = c);
											for (var m = 0, b = e.length; m < b; m++) {
												var x = e[m];
												if ("M" === x[0]) o = s = x[1], a = f = x[2];
												else {
													"C" === x[0] ? (o = (h = [o, a].concat(x.slice(1)))[6], a = h[7]) : (h = [o, a, o, a, s, f, s, f], o = s, a = f);
													for (var _ = C(l, h, void 0), w = 0, S = _.length; w < S; w++) _[w].segment1 = p, _[w].segment2 = m, _[w].bez1 = l, _[w].bez2 = h;
													d = d.concat(_)
												}
											}
										}
									}
									return d
								}(t, e)
							}
						}
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = n(362),
							a = n(371),
							u = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						u.Symbols = {
							circle: function(t, e, n) {
								return [
									["M", t, e],
									["m", -n, 0],
									["a", n, n, 0, 1, 0, 2 * n, 0],
									["a", n, n, 0, 1, 0, 2 * -n, 0]
								]
							},
							square: function(t, e, n) {
								return [
									["M", t - n, e - n],
									["L", t + n, e - n],
									["L", t + n, e + n],
									["L", t - n, e + n],
									["Z"]
								]
							},
							diamond: function(t, e, n) {
								return [
									["M", t - n, e],
									["L", t, e - n],
									["L", t + n, e],
									["L", t, e + n],
									["Z"]
								]
							},
							triangle: function(t, e, n) {
								var r = n * Math.sin(1 / 3 * Math.PI);
								return [
									["M", t - n, e + r],
									["L", t, e - r],
									["L", t + n, e + r],
									["z"]
								]
							},
							"triangle-down": function(t, e, n) {
								var r = n * Math.sin(1 / 3 * Math.PI);
								return [
									["M", t - n, e - r],
									["L", t + n, e - r],
									["L", t, e + r],
									["Z"]
								]
							}
						}, u.ATTRS = {
							path: null,
							lineWidth: 1
						}, r.extend(u, i), r.augment(u, {
							type: "marker",
							canFill: !0,
							canStroke: !0,
							getDefaultAttrs: function() {
								return {
									x: 0,
									y: 0,
									lineWidth: 1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.radius,
									i = this.getHitLineWidth() / 2 + r;
								return {
									minX: e - i,
									minY: n - i,
									maxX: e + i,
									maxY: n + i
								}
							},
							_getPath: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									i = t.radius || t.r,
									o = t.symbol || "circle";
								return (r.isFunction(o) ? o : u.Symbols[o])(e, n, i)
							},
							createPath: function(t) {
								var e = this._cfg.segments;
								if (!e || this._cfg.hasUpdate) {
									var n, r = o.parsePath(this._getPath());
									t.beginPath(), e = [];
									for (var i = 0; i < r.length; i++) {
										var u = r[i];
										n = new a(u, n, i === r.length - 1), e.push(n), n.draw(t)
									}
									this._cfg.segments = e, this._cfg.hasUpdate = !1
								} else {
									t.beginPath();
									for (var c = 0; c < e.length; c++) e[c].draw(t)
								}
							}
						}), t.exports = u
					}, function(t, e, n) {
						function r(t, e, n, r, i) {
							var o = 1 - i;
							return o * o * (o * r + 3 * i * n) + i * i * (i * t + 3 * o * e)
						}

						function i(t, e, n, i, o, a, c, s, f, l, h) {
							var d, p, g, v, m, y, b, x, _ = .005,
								w = 1 / 0,
								S = [f, l];
							for (p = 0; p < 1; p += .05) g = [r(t, n, o, c, p), r(e, i, a, s, p)], (v = u.squaredDistance(S, g)) < w && (d = p, w = v);
							w = 1 / 0;
							for (var M = 0; M < 32 && !(_ < 1e-4); M++) x = d + _, g = [r(t, n, o, c, b = d - _), r(e, i, a, s, b)], v = u.squaredDistance(S, g), b >= 0 && v < w ? (d = b, w = v) : (y = [r(t, n, o, c, x), r(e, i, a, s, x)], m = u.squaredDistance(S, y), x <= 1 && m < w ? (d = x, w = m) : _ *= .5);
							return h && (h.x = r(t, n, o, c, d), h.y = r(e, i, a, s, d)), Math.sqrt(w)
						}

						function o(t, e, n, r, i) {
							return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
						}
						var a = n(17),
							u = a.vec2;
						t.exports = {
							at: r,
							derivativeAt: function(t, e, n, r, i) {
								var o = 1 - i;
								return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i)
							},
							projectPoint: function(t, e, n, r, o, a, u, c, s, f) {
								var l = {};
								return i(t, e, n, r, o, a, u, c, s, f, l), l
							},
							pointDistance: i,
							extrema: function(t, e, n, r) {
								var i, o, u, c = 3 * t - 9 * e + 9 * n - 3 * r,
									s = 6 * e - 12 * n + 6 * r,
									f = 3 * n - 3 * r,
									l = [];
								if (a.isNumberEqual(c, 0)) a.isNumberEqual(s, 0) || (i = -f / s) >= 0 && i <= 1 && l.push(i);
								else {
									var h = s * s - 4 * c * f;
									a.isNumberEqual(h, 0) ? l.push(-s / (2 * c)) : h > 0 && (o = (-s - (u = Math.sqrt(h))) / (2 * c), (i = (-s + u) / (2 * c)) >= 0 && i <= 1 && l.push(i), o >= 0 && o <= 1 && l.push(o))
								}
								return l
							},
							len: function(t, e, n, r, i, u, c, s, f) {
								a.isNil(f) && (f = 1);
								for (var l = (f = f > 1 ? 1 : f < 0 ? 0 : f) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; g < 12; g++) {
									var v = l * h[g] + l,
										m = o(v, t, n, i, c),
										y = o(v, e, r, u, s),
										b = m * m + y * y;
									p += d[g] * Math.sqrt(b)
								}
								return l * p
							}
						}
					}, function(t, e, n) {
						var r = n(374),
							i = n(436),
							o = n(391),
							a = n(373);
						t.exports = {
							line: function(t, e, n, i, o, a, u) {
								var c = r.box(t, e, n, i, o);
								if (!this.box(c.minX, c.maxX, c.minY, c.maxY, a, u)) return !1;
								var s = r.pointDistance(t, e, n, i, a, u);
								return !isNaN(s) && s <= o / 2
							},
							polyline: function(t, e, n, r) {
								var i = t.length - 1;
								if (i < 1) return !1;
								for (var o = 0; o < i; o++) {
									var a = t[o][0],
										u = t[o][1],
										c = t[o + 1][0],
										s = t[o + 1][1];
									if (this.line(a, u, c, s, e, n, r)) return !0
								}
								return !1
							},
							cubicline: function(t, e, n, r, i, a, u, c, s, f, l) {
								return o.pointDistance(t, e, n, r, i, a, u, c, f, l) <= s / 2
							},
							quadraticline: function(t, e, n, r, o, a, u, c, s) {
								return i.pointDistance(t, e, n, r, o, a, c, s) <= u / 2
							},
							arcline: function(t, e, n, r, i, o, u, c, s) {
								return a.pointDistance(t, e, n, r, i, o, c, s) <= u / 2
							},
							rect: function(t, e, n, r, i, o) {
								return t <= i && i <= t + n && e <= o && o <= e + r
							},
							circle: function(t, e, n, r, i) {
								return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2)
							},
							box: function(t, e, n, r, i, o) {
								return t <= i && i <= e && n <= o && o <= r
							}
						}
					}, function(t, e, n) {
						var r = n(63),
							i = n(382),
							a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
							u = /^\w*$/;
						t.exports = function(t, e) {
							if (r(t)) return !1;
							var n = void 0 === t ? "undefined" : o(t);
							return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || u.test(t) || !a.test(t) || null != e && t in Object(e)
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = -1,
								n = Array(t.size);
							return t.forEach(function(t) {
								n[++e] = t
							}), n
						}
					}, function(t, e, n) {
						var r = n(450);
						t.exports = function(t) {
							var e = new t.constructor(t.byteLength);
							return new r(e).set(new r(t)), e
						}
					}, function(t, e, n) {
						var r = n(457),
							i = n(456),
							o = Object.prototype.propertyIsEnumerable,
							a = Object.getOwnPropertySymbols,
							u = a ? function(t) {
								return null == t ? [] : (t = Object(t), r(a(t), function(e) {
									return o.call(t, e)
								}))
							} : i;
						t.exports = u
					}, function(t, e, n) {
						var r = n(466),
							i = n(401);
						t.exports = function(t) {
							return null != t && i(t.length) && !r(t)
						}
					}, function(t, e) {
						var n = Object.prototype;
						t.exports = function(t) {
							var e = t && t.constructor;
							return t === ("function" == typeof e && e.prototype || n)
						}
					}, function(t, e, n) {
						(function(t) {
							var r = n(470),
								i = "object" == (void 0 === e ? "undefined" : o(e)) && e && !e.nodeType && e,
								a = i && "object" == (void 0 === t ? "undefined" : o(t)) && t && !t.nodeType && t,
								u = a && a.exports === i && r.process,
								c = function() {
									try {
										return a && a.require && a.require("util").types || u && u.binding && u.binding("util")
									} catch (t) {}
								}();
							t.exports = c
						}).call(this, n(74)(t))
					}, function(t, e) {
						t.exports = function(t) {
							return function(e) {
								return t(e)
							}
						}
					}, function(t, e) {
						t.exports = function(t) {
							return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
						}
					}, function(t, e, n) {
						(function(t) {
							var r = n(60),
								i = n(641),
								a = "object" == (void 0 === e ? "undefined" : o(e)) && e && !e.nodeType && e,
								u = a && "object" == (void 0 === t ? "undefined" : o(t)) && t && !t.nodeType && t,
								c = u && u.exports === a ? r.Buffer : void 0,
								s = (c ? c.isBuffer : void 0) || i;
							t.exports = s
						}).call(this, n(74)(t))
					}, function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n;) {
								var r = t[e];
								this.set(r[0], r[1])
							}
						}
						var i = n(658),
							o = n(651),
							a = n(649),
							u = n(648),
							c = n(647);
						r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
					}, function(t, e, n) {
						var r = n(153)(n(60), "Map");
						t.exports = r
					}, function(t, e) {
						t.exports = function(t, e) {
							return t === e || t != t && e != e
						}
					}, function(t, e, n) {
						function r(t) {
							var e = this.__data__ = new i(t);
							this.size = e.size
						}
						var i = n(381),
							o = n(667),
							a = n(666),
							u = n(665),
							c = n(664),
							s = n(663);
						r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r
					}, function(t, e, n) {
						var r = n(75),
							i = n(382),
							o = /^\s+|\s+$/g,
							a = /^[-+]0x[0-9a-f]+$/i,
							u = /^0b[01]+$/i,
							c = /^0o[0-7]+$/i,
							s = parseInt;
						t.exports = function(t) {
							if ("number" == typeof t) return t;
							if (i(t)) return NaN;
							if (r(t)) {
								var e = "function" == typeof t.valueOf ? t.valueOf() : t;
								t = r(e) ? e + "" : e
							}
							if ("string" != typeof t) return 0 === t ? t : +t;
							t = t.replace(o, "");
							var n = u.test(t);
							return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
						}
					}, function(t, e, n) {
						var r = n(469)(Object.getPrototypeOf, Object);
						t.exports = r
					}, function(t, e, n) {
						var r = n(684);
						t.exports = function(t) {
							return null == t ? "" : r(t)
						}
					}, function(t, e, n) {
						var r = n(415),
							i = n(64),
							o = n(366);
						t.exports = function t(e, n) {
							if (e === n) return !0;
							if (!e || !n) return !1;
							if (o(e) || o(n)) return !1;
							if (i(e) || i(n)) {
								if (e.length !== n.length) return !1;
								for (var a = !0, u = 0; u < e.length && (a = t(e[u], n[u])); u++);
								return a
							}
							if (r(e) || r(n)) {
								var c = Object.keys(e),
									s = Object.keys(n);
								if (c.length !== s.length) return !1;
								for (var f = !0, l = 0; l < c.length && (f = t(e[c[l]], n[c[l]])); l++);
								return f
							}
							return !1
						}
					}, function(t, e, n) {
						function r(t, e, n, u) {
							for (var c in n = n || 0, u = u || a, e)
								if (e.hasOwnProperty(c)) {
									var s = e[c];
									null !== s && i(s) ? (i(t[c]) || (t[c] = {}), n < u ? r(t[c], s, n + 1, u) : t[c] = e[c]) : o(s) ? (t[c] = [], t[c] = t[c].concat(s)) : void 0 !== s && (t[c] = s)
								}
						}
						var i = n(367),
							o = n(29),
							a = 5;
						t.exports = function() {
							for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
							for (var i = t[0], o = 1; o < e; o++) r(i, t[o]);
							return i
						}
					}, function(t, e, n) {
						var r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
								return void 0 === t ? "undefined" : o(t)
							} : function(t) {
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
							},
							i = n(29);
						t.exports = function t(e) {
							if ("object" !== (void 0 === e ? "undefined" : r(e)) || null === e) return e;
							var n = void 0;
							if (i(e)) {
								n = [];
								for (var o = 0, a = e.length; o < a; o++) "object" === r(e[o]) && null != e[o] ? n[o] = t(e[o]) : n[o] = e[o]
							} else
								for (var u in n = {}, e) "object" === r(e[u]) && null != e[u] ? n[u] = t(e[u]) : n[u] = e[u];
							return n
						}
					}, function(t, e, n) {
						var r = n(157);
						r.translate = function(t, e, n) {
							var i = new Array(9);
							return r.fromTranslation(i, n), r.multiply(t, i, e)
						}, r.rotate = function(t, e, n) {
							var i = new Array(9);
							return r.fromRotation(i, n), r.multiply(t, i, e)
						}, r.scale = function(t, e, n) {
							var i = new Array(9);
							return r.fromScaling(i, n), r.multiply(t, i, e)
						}, t.exports = r
					}, function(t, e) {
						t.exports = function(t, e, n) {
							return t < e ? e : t > n ? n : t
						}
					}, function(t, e) {
						var n = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						};
						t.exports = function(t) {
							return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(64);
						t.exports = function(t, e) {
							if (!i(t)) return t;
							var n = [];
							return r(t, function(t, r) {
								e(t, r) && n.push(t)
							}), n
						}
					}, function(t, e) {
						var n = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						};
						t.exports = function(t) {
							var e = void 0 === t ? "undefined" : n(t);
							return null !== t && "object" === e || "function" === e
						}
					}, function(t, e) {
						var n = function() {
							function t() {}
							return t.prototype.execute = function() {
								throw new Error("please override this method")
							}, t
						}();
						t.exports = n
					}, function(t, e, n) {
						t.exports = {
							CompactBoxTree: n(514),
							Dendrogram: n(513),
							IndentedTree: n(512),
							Mindmap: n(511),
							Base: n(418)
						}
					}, function(t, e, n) {
						var r = n(22),
							i = function(t) {
								function e(e) {
									var n = {
										type: "node",
										isNode: !0,
										zIndex: 3,
										edges: [],
										linkable: !0
									};
									return r.mix(n, e), t.call(this, n) || this
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n.updatePosition = function() {
									var t = this.group,
										e = this.model;
									t.setMatrix([1, 0, 0, 0, 1, 0, e.x ? e.x : 0, e.y ? e.y : 0, 1]), this.bbox = this._calculateBBox()
								}, n._shouldDraw = function() {
									var e = this._getDiff(),
										n = t.prototype._shouldDraw.call(this);
									return e && !(2 === e.length && -1 !== e.indexOf("x") && -1 !== e.indexOf("y")) && !(1 === e.length && ("x" === e[0] || "y" === e[0])) && n
								}, n._afterDraw = function() {
									this.updatePosition(), t.prototype._afterDraw.call(this)
								}, n.layoutUpdate = function() {
									this._beforeDraw(), this._afterDraw()
								}, n.getEdges = function() {
									return this.edges
								}, n.getInEdges = function() {
									var t = this;
									return this.edges.filter(function(e) {
										return e.target === t
									})
								}, n.getOutEdges = function() {
									var t = this;
									return this.edges.filter(function(e) {
										return e.source === t
									})
								}, n.getLinkPoints = function(t) {
									var e = this.getAnchorPoints();
									if (r.isNumber(t) && e[t]) return [e[t]];
									var n = t.x,
										i = t.y,
										o = this.getBBox(),
										a = o.centerX,
										u = o.centerY,
										c = n - a,
										s = i - u,
										f = this.shapeObj,
										l = f.anchor || {},
										h = this.defaultIntersectBox,
										d = [];
									if (r.isEmpty(e)) {
										switch (f.intersectBox || l.intersectBox || l.type || h) {
											case "rect":
												d = [r.getIntersectPointRect(o, t)];
												break;
											case "path":
												if (this.keyShape && "path" === this.keyShape.get("type")) {
													var p = r.parsePathArray(["M", n, i, "L", a, u]);
													d = [r.intersection(p, this.keyShape.get("path"))]
												}
												break;
											default:
												d = [r.getIntersectPointCircle(n, i, o.centerX, o.centerY, Math.max(o.width, o.height) / 2)]
										}
										r.isEmpty(d[0]) && (d = [{
											x: a,
											y: u
										}])
									} else d = e.map(function(t) {
										var e = t.x - a,
											n = t.y - u,
											i = r.getArcOfVectors({
												x: c,
												y: s
											}, {
												x: e,
												y: n
											});
										return r.mix({}, t, {
											arc: i
										})
									}).sort(function(t, e) {
										return t.arc - e.arc
									});
									return d
								}, n.getAnchorPoints = function(t) {
									var e, n = this.shapeObj,
										i = this.getBBox(),
										o = [],
										a = n.anchor || {};
									return e = r.isArray(a) ? a : r.isFunction(a) ? a(this) : r.isFunction(a.points) ? a.points(this) : a.points, r.each(e, function(t, e) {
										var n = r.mix({
											x: i.minX + t[0] * i.width,
											y: i.minY + t[1] * i.height
										}, t[2], {
											index: e
										});
										o.push(n)
									}), this._anchorPoints = o, r.isNumber(t) ? this._anchorPoints[t] : this._anchorPoints
								}, e
							}(n(387));
						t.exports = i
					}, function(t, e, n) {
						function r(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}
						n(540), n(539), n(538);
						var i = n(537),
							o = n(535),
							a = n(509),
							u = n(22),
							c = n(531),
							s = n(152),
							f = n(529),
							l = n(527),
							h = n(525),
							d = n(524),
							p = n(522),
							g = n(521),
							v = n(520),
							m = n(518),
							y = n(517),
							b = [g, l, h, v, m, n(516), f, y, d, p],
							x = function(t) {
								function e(e) {
									var n, r = {};
									return b.forEach(function(t) {
										u.mix(r, u.cloneDeep(t.CFG), e)
									}), (n = t.call(this, r) || this)._pluginInit(), n.emit("beforeinit"), n._init(), n.emit("afterinit"), n
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n.getDefaultCfg = function() {
									return {
										container: void 0,
										width: void 0,
										height: void 0,
										plugins: [],
										fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',
										nodeDefaultShape: void 0,
										edgeDefaultShape: void 0,
										groupDefaultShape: void 0,
										defaultIntersectBox: "circle",
										renderer: "canvas",
										_controllers: {},
										_timers: {},
										_dataMap: {},
										_itemMap: {},
										_freezMap: {},
										_data: {},
										_delayRunObj: {}
									}
								}, n._init = function() {
									var t = this;
									this._initData(), this._initContainer(), this._initCanvas(), b.forEach(function(e) {
										e.INIT && t[e.INIT]()
									}), this.initEvent()
								}, n.initEvent = function() {}, n._executeLayout = function(t, e, n, r) {
									u.isFunction(t) ? t(e, n, this) : u.isObject(t) && (t.nodes = e, t.edges = n, t.groups = r, t.graph = this, t.execute())
								}, n._pluginInit = function() {
									var t = this;
									this.get("plugins").forEach(function(e) {
										t._initPlugin(e)
									})
								}, n._initPlugin = function(t) {
									t.graph = this, t.init && t.init()
								}, n._getTimer = function(t) {
									return this.get("_timers")[t]
								}, n._setTimer = function(t, e) {
									this.get("_timers")[t] = e
								}, n._getController = function(t) {
									return this.get("_controllers")[t]
								}, n._initContainer = function() {
									var t = this.get("container");
									if (t || (t = this.get("id")), !t) throw new Error("please set the container for the graph !");
									u.isString(t) && (t = document.getElementById(t));
									var e = u.createDOM('<div class="graph-container"></div>', {
										position: "relative"
									});
									t.appendChild(e), this.set("_containerDOM", t), this.set("_graphContainer", e)
								}, n._initCanvas = function() {
									var t = this.get("_graphContainer"),
										e = {
											width: this.get("width"),
											height: this.get("height"),
											fontFamily: this.get("fontFamily"),
											renderer: this.get("renderer"),
											eventEnable: !1,
											containerDOM: t
										},
										n = new(0, s.Canvas)(e),
										r = n.get("el");
									r.style.top = 0, r.style.left = 0, r.style.overflow = "hidden", this.set("_canvas", n);
									var i = this.getMouseEventWrapper();
									i.style.outline = "none", i.style["user-select"] = "none", i.setAttribute("tabindex", 20);
									var o = n.addGroup(),
										a = o.addGroup();
									this.set("_itemGroup", a), this.set("_rootGroup", o)
								}, n._initData = function() {
									this.set("_dataMap", {}), this.set("_itemMap", {
										_nodes: [],
										_edges: [],
										_groups: [],
										_guides: []
									}), this.set("_data", {})
								}, n._refresh = function() {}, n.getKeyboardEventWrapper = function() {
									return this.get("keyboardEventWrapper") || this.getMouseEventWrapper()
								}, n.getMouseEventWrapper = function() {
									return this.get("_canvas").get("el")
								}, n.addPlugin = function(t) {
									var e = this.get("plugins");
									this._initPlugin(t), e.push(t)
								}, n.getGraphContainer = function() {
									return this.get("_graphContainer")
								}, n.addItems = function(t, e) {
									var n = this;
									this._addDatas(t, e);
									var r = u.upperFirst(t),
										i = o[r],
										a = this.get("_itemMap"),
										c = this.get("_itemGroup"),
										s = this.get("_dataMap"),
										f = this.get("animate"),
										l = this.get("defaultIntersectBox");
									if (!i) throw new Error("please set valid item type!");
									e.forEach(function(e) {
										var r = new i({
											id: e.id,
											type: t,
											model: e,
											group: c.addGroup(),
											graph: n,
											mapper: n._getController(t + "Mapper"),
											itemMap: a,
											animate: f,
											dataMap: s,
											defaultIntersectBox: l
										});
										a[e.id] = r, a["_" + t + "s"].push(r)
									})
								}, n.removeItems = function(t) {
									var e = this.get("_dataMap"),
										n = this.get("_itemMap");
									t.forEach(function(t) {
										delete e[t.id], delete n[t.id], u.Array.remove(n["_" + t.type + "s"], t), t.destroy()
									})
								}, n.updateItem = function(t, e) {
									u.mix(t.getModel(), e), t.isEdge && e && (e.target || e.source) && t.cacheEdges(), t.update()
								}, n._addDatas = function(t, e) {
									var n = this.get("_dataMap");
									e.forEach(function(t) {
										if (u.isNil(t.id) && (t.id = u.guid()), n[t.id]) throw new Error("id:" + t.id + " has already been set, please set new one");
										n[t.id] = t
									})
								}, n._drawInner = function() {
									var t = this.get("_data"),
										e = this.get("_itemGroup"),
										n = this.get("_dataMap");
									t.nodes && this.addItems("node", t.nodes), t.groups && this.addItems("group", t.groups), t.edges && this.addItems("edge", t.edges), t.guides && this.addItems("guide", t.guides), e.sortBy(function(t) {
										var e = t.id,
											r = n[e];
										return r && r.index
									})
								}, n._clearInner = function() {
									this.getItems().forEach(function(t) {
										t && t.destroy()
									})
								}, n.getShapeObj = function(t, e) {
									if (!u.isObject(t)) {
										var n = u.upperFirst(t),
											r = a[n],
											i = this.get(t + "DefaultShape");
										return r.getShape(e.shape, i)
									}
									return t.getShapeObj()
								}, n.getSource = function() {
									return this.get("_sourceData")
								}, n.parseSource = function(t) {
									return t
								}, n.getCanvas = function() {
									return this.get("_canvas")
								}, n.getRootGroup = function() {
									return this.get("_rootGroup")
								}, n.getItemGroup = function() {
									return this.get("_itemGroup")
								}, n.source = function(t) {
									return this.emit("beforesource"), this.set("_data", t), this.set("_sourceData", t), this.emit("aftersource"), this
								}, n.render = function() {
									return this.emit("beforerender"), this.emit("beforedrawinner"), this._drawInner(), this.emit("afterdrawinner"), this.draw(), this.emit("afterrender"), this
								}, n.forcePreventAnimate = function(t) {
									this.set("forcePreventAnimate", t)
								}, n.reRender = function() {
									var t = this.get("_sourceData");
									return this.read(t), this
								}, n.setCapture = function(t) {
									this.get("_rootGroup").set("capture", t)
								}, n.destroy = function() {
									this.emit("beforedestroy");
									var e = this.get("_canvas"),
										n = this.get("_graphContainer"),
										r = this.get("_controllers"),
										i = this.get("_timers"),
										o = this.get("_windowForceResizeEvent"),
										a = this.get("plugins");
									return u.each(i, function(t) {
										clearTimeout(t)
									}), u.each(r, function(t) {
										t.destroy()
									}), a.forEach(function(t) {
										t.destroy && t.destroy()
									}), e && e.destroy(), n.destroy(), window.removeEventListener("resize", o), this.emit("afterdestroy"), t.prototype.destroy.call(this), this
								}, n.save = function() {
									var t = {
										nodes: [],
										edges: [],
										groups: [],
										guides: []
									};
									return this.get("_itemGroup").get("children").forEach(function(e, n) {
										var r = e.model;
										if (r) {
											var i = e.itemType,
												o = u.cloneDeep(r);
											o.index = n, t[i + "s"].push(o)
										}
									}), 0 === t.nodes.length && delete t.nodes, 0 === t.edges.length && delete t.edges, 0 === t.groups.length && delete t.groups, 0 === t.guides.length && delete t.guides, t
								}, n.add = function(t, e) {
									var n = {
										action: "add",
										model: e
									};
									this.emit("beforechange", n);
									var r = this.get("_itemMap");
									this.addItems(t, [e]);
									var i = r[e.id];
									return i.getAllParents().forEach(function(t) {
										t.update()
									}), n.item = i, this.emit("afterchange", n), this.draw(), i
								}, n.remove = function(t) {
									if ((t = this.getItem(t)) && !t.destroyed) {
										var e = {
											action: "remove",
											item: t
										};
										if (this.emit("beforechange", e), t.isNode || t.isGroup)
											for (var n = t.getEdges(), r = 0; r < n.length; r++) {
                                                var sourceId , targetId;
                                                if(n[r].source){
                                                    sourceId = n[r].source.id
                                                }
                                                if(n[r].target){
                                                    targetId = n[r].target.id
                                                }
                                                if(t.id === sourceId || t.id === targetId){
                                                    this.remove(n[r])
                                                }
                                                //,  r--
                                            };
										if (t.isGroup)
											for (var i = t.getChildren(), o = 0; o < i.length; o++) this.remove(i[o]), i.shift(), o--;
										return this.removeItems([t]), t.getAllParents().forEach(function(t) {
											t.update()
										}), this.emit("afterchange", e), this.draw(), this
									}
								}, n.simpleUpdate = function(t, e) {
									return this.updateItem(t, e), this.draw(), this
								}, n.update = function(t, e) {
									var n = this.get("_itemMap");
									if ((t = this.getItem(t)) && !t.destroyed) {
										var r = t.getModel(),
											i = u.mix({}, r),
											o = {
												action: "update",
												item: t,
												originModel: i,
												updateModel: e
											},
											a = n[i.parent];
										return a && a !== parent && u.isGroup(a) && t.getAllParents().forEach(function(t) {
											t.update()
										}), e && this.emit("beforechange", o), this.updateItem(t, e), t.getAllParents().forEach(function(t) {
											t.update()
										}), !t.isNode && !t.isGroup || t.collapsedParent || t.getEdges().forEach(function(t) {
											t.update()
										}), t.isGroup && e && (t.deepEach(function(t) {
											t.updateCollapsedParent(), t.collapsedParent ? t.hide() : t.show(), t.update()
										}), t.getInnerEdges().forEach(function(t) {
											t.linkedItemVisible() ? t.show() : t.hide(), t.update()
										})), e && this.emit("afterchange", o), this.draw(), this
									}
								}, n.read = function(t) {
									if (!t) throw new Error("please read valid data!");
									var e = this.get("fitView"),
										n = {
											action: "changeData",
											data: t
										};
									return this.emit("beforechange", n), this.clear(), this.source(t), this.render(), this.emit("afterchange", n), e && this.setFitView(e), this
								}, n.clear = function() {
									return this.emit("beforeclear"), this._clearInner(), this._initData(), this.emit("afterclear"), this.draw(), this
								}, n.hide = function(t) {
									return (t = this.getItem(t)).hide(), t.isNode && t.getEdges().forEach(function(t) {
										t.hide()
									}), t.isGroup && (t.getEdges().forEach(function(t) {
										t.hide()
									}), t.deepEach(function(t) {
										t.hide()
									})), this.draw(), this
								}, n._tryShowEdge = function(t) {
									var e = t.getSource(),
										n = t.getTarget();
									return (e.linkable && e.isVisible() || !e.linkable) && (n.linkable && n.isVisible() || !n.linkable) && t.show()
								}, n.show = function(t) {
									var e = this;
									return (t = this.getItem(t)).isEdge ? this._tryShowEdge(t) : t.show(), t.isNode && t.getEdges().forEach(function(t) {
										e._tryShowEdge(t)
									}), t.isGroup && (t.getEdges().forEach(function(t) {
										e._tryShowEdge(t)
									}), t.deepEach(function(t) {
										t.show()
									})), this.draw(), this
								}, n.getWidth = function() {
									return this.get("width")
								}, n.getHeight = function() {
									return this.get("height")
								}, n.changeSize = function(t, e) {
									if (!(Math.abs(t) >= 1 / 0 || Math.abs(e) >= 1 / 0)) {
										var n = this.get("_canvas");
										return t === this.get("width") && e === this.get("height") || (this.emit("beforechangesize"), n.changeSize(t, e), this.set("width", t), this.set("height", e), this.emit("afterchangesize"), this.draw()), this
									}
									console.warn("size parameter more than the maximum")
								}, n.toFront = function(t) {
									t = this.getItem(t);
									var e = this.get("_itemGroup"),
										n = t.getGraphicGroup();
									u.toFront(n, e), this.draw()
								}, n.toBack = function(t) {
									t = this.getItem(t);
									var e = this.get("_itemGroup"),
										n = t.getGraphicGroup();
									u.toBack(n, e), this.draw()
								}, n.css = function(t) {
									var e = this.getGraphContainer();
									u.modifyCSS(e, t)
								}, n.saveImage = function(t) {
									var e = this.getBBox(),
										n = this.getFitViewPadding();
									return new c(function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												r(t, e, n[e])
											})
										}
										return t
									}({
										graph: this,
										width: e.width + n[1] + n[3],
										height: e.height + n[0] + n[2]
									}, t)).toCanvas()
								}, e
							}(i);
						b.forEach(function(t) {
							u.mix(x.prototype, t.AUGMENT)
						}), t.exports = x
					}, function(t, e) {
						var n = {
							registerBehaviour: function(t, e, r) {
								e.dependences = r, n[t] = e
							},
							resetMode: function(t, e) {
								var r, i = [];
								e._off();
								for (var o = 0; o < t.length; o++)(r = n[t[o]]) && (r.dependences && r.dependences.forEach(function(t) {
									t && -1 === i.indexOf(t) && (n[t](e), i.push(t))
								}), r && -1 === i.indexOf(r) && r(e))
							}
						};
						t.exports = n
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						o.ATTRS = {
							x: 0,
							y: 0,
							text: null,
							fontSize: 12,
							fontFamily: "sans-serif",
							fontStyle: "normal",
							fontWeight: "normal",
							fontVariant: "normal",
							textAlign: "start",
							textBaseline: "bottom",
							lineHeight: null,
							textArr: null
						}, r.extend(o, i), r.augment(o, {
							canFill: !0,
							canStroke: !0,
							type: "text",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1,
									lineCount: 1,
									fontSize: 12,
									fontFamily: "sans-serif",
									fontStyle: "normal",
									fontWeight: "normal",
									fontVariant: "normal",
									textAlign: "start",
									textBaseline: "bottom"
								}
							},
							initTransform: function() {
								var t = this._attrs.fontSize;
								t && +t < 12 && this.transform([
									["t", -1 * this._attrs.x, -1 * this._attrs.y],
									["s", +t / 12, +t / 12],
									["t", this._attrs.x, this._attrs.y]
								])
							},
							_assembleFont: function() {
								var t = this._attrs,
									e = t.fontSize,
									n = t.fontFamily,
									r = t.fontWeight,
									i = t.fontStyle,
									o = t.fontVariant;
								t.font = [i, o, r, e + "px", n].join(" ")
							},
							_setAttrText: function() {
								var t = this._attrs,
									e = t.text,
									n = null;
								if (r.isString(e) && -1 !== e.indexOf("\n")) {
									var i = (n = e.split("\n")).length;
									t.lineCount = i
								}
								t.textArr = n
							},
							_getTextHeight: function() {
								var t = this._attrs,
									e = t.lineCount,
									n = 1 * t.fontSize;
								return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
							},
							isHitBox: function() {
								return !1
							},
							calculateBox: function() {
								var t = this._attrs,
									e = this._cfg;
								e.attrs && !e.hasUpdate || (this._assembleFont(), this._setAttrText()), t.textArr || this._setAttrText();
								var n = t.x,
									r = t.y,
									i = this.measureText();
								if (!i) return {
									minX: n,
									minY: r,
									maxX: n,
									maxY: r
								};
								var o = this._getTextHeight(),
									a = t.textAlign,
									u = t.textBaseline,
									c = this.getHitLineWidth(),
									s = {
										x: n,
										y: r - o
									};
								a && ("end" === a || "right" === a ? s.x -= i : "center" === a && (s.x -= i / 2)), u && ("top" === u ? s.y += o : "middle" === u && (s.y += o / 2)), this.set("startPoint", s);
								var f = c / 2;
								return {
									minX: s.x - f,
									minY: s.y - f,
									maxX: s.x + i + f,
									maxY: s.y + o + f
								}
							},
							_getSpaceingY: function() {
								var t = this._attrs,
									e = t.lineHeight,
									n = 1 * t.fontSize;
								return e ? e - n : .14 * n
							},
							drawInner: function(t) {
								var e = this._attrs,
									n = this._cfg;
								n.attrs && !n.hasUpdate || (this._assembleFont(), this._setAttrText()), t.font = e.font;
								var i = e.text;
								if (i) {
									var o = e.textArr,
										a = e.x,
										u = e.y;
									if (t.beginPath(), this.hasStroke()) {
										var c = e.strokeOpacity;
										r.isNil(c) || 1 === c || (t.globalAlpha = c), o ? this._drawTextArr(t, !1) : t.strokeText(i, a, u), t.globalAlpha = 1
									}
									if (this.hasFill()) {
										var s = e.fillOpacity;
										r.isNil(s) || 1 === s || (t.globalAlpha = s), o ? this._drawTextArr(t, !0) : t.fillText(i, a, u)
									}
									n.hasUpdate = !1
								}
							},
							_drawTextArr: function(t, e) {
								var n, i = this._attrs.textArr,
									o = this._attrs.textBaseline,
									a = 1 * this._attrs.fontSize,
									u = this._getSpaceingY(),
									c = this._attrs.x,
									s = this._attrs.y,
									f = this.getBBox(),
									l = f.maxY - f.minY;
								r.each(i, function(r, i) {
									n = s + i * (u + a) - l + a, "middle" === o && (n += l - a - (l - a) / 2), "top" === o && (n += l - a), e ? t.fillText(r, c, n) : t.strokeText(r, c, n)
								})
							},
							measureText: function() {
								var t, e = this._attrs,
									n = e.text,
									i = e.font,
									o = e.textArr,
									a = 0;
								if (!r.isNil(n)) {
									var u = document.createElement("canvas").getContext("2d");
									return u.save(), u.font = i, o ? r.each(o, function(e) {
										t = u.measureText(e).width, a < t && (a = t), u.restore()
									}) : (a = u.measureText(n).width, u.restore()), a
								}
							}
						}), t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = n(362).parseRadius,
							o = n(37),
							a = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						a.ATTRS = {
							x: 0,
							y: 0,
							width: 0,
							height: 0,
							radius: 0,
							lineWidth: 1
						}, r.extend(a, o), r.augment(a, {
							canFill: !0,
							canStroke: !0,
							type: "rect",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1,
									radius: 0
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.width,
									i = t.height,
									o = this.getHitLineWidth() / 2;
								return {
									minX: e - o,
									minY: n - o,
									maxX: e + r + o,
									maxY: n + i + o
								}
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x,
									r = e.y,
									o = e.width,
									a = e.height,
									u = e.radius;
								if ((t = t || this.get("context")).beginPath(), 0 === u) t.rect(n, r, o, a);
								else {
									var c = i(u);
									t.moveTo(n + c.r1, r), t.lineTo(n + o - c.r2, r), 0 !== c.r2 && t.arc(n + o - c.r2, r + c.r2, c.r2, -Math.PI / 2, 0), t.lineTo(n + o, r + a - c.r3), 0 !== c.r3 && t.arc(n + o - c.r3, r + a - c.r3, c.r3, 0, Math.PI / 2), t.lineTo(n + c.r4, r + a), 0 !== c.r4 && t.arc(n + c.r4, r + a - c.r4, c.r4, Math.PI / 2, Math.PI), t.lineTo(n, r + c.r1), 0 !== c.r1 && t.arc(n + c.r1, r + c.r1, c.r1, Math.PI, 1.5 * Math.PI), t.closePath()
								}
							}
						}), t.exports = a
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = n(372),
							a = n(374),
							u = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						u.ATTRS = {
							points: null,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1,
							tCache: null
						}, r.extend(u, i), r.augment(u, {
							canStroke: !0,
							type: "polyline",
							tCache: null,
							getDefaultAttrs: function() {
								return {
									lineWidth: 1,
									startArrow: !1,
									endArrow: !1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = this.getHitLineWidth(),
									n = t.points;
								if (!n || 0 === n.length) return null;
								var i = 1 / 0,
									o = 1 / 0,
									a = -1 / 0,
									u = -1 / 0;
								r.each(n, function(t) {
									var e = t[0],
										n = t[1];
									e < i && (i = e), e > a && (a = e), n < o && (o = n), n > u && (u = n)
								});
								var c = e / 2;
								return {
									minX: i - c,
									minY: o - c,
									maxX: a + c,
									maxY: u + c
								}
							},
							_setTcache: function() {
								var t, e, n = this._attrs.points,
									i = 0,
									o = 0,
									u = [];
								n && 0 !== n.length && (r.each(n, function(t, e) {
									n[e + 1] && (i += a.len(t[0], t[1], n[e + 1][0], n[e + 1][1]))
								}), i <= 0 || (r.each(n, function(r, c) {
									n[c + 1] && ((t = [])[0] = o / i, e = a.len(r[0], r[1], n[c + 1][0], n[c + 1][1]), o += e, t[1] = o / i, u.push(t))
								}), this.tCache = u))
							},
							createPath: function(t) {
								var e, n, r = this._attrs.points;
								if (!(r.length < 2)) {
									for ((t = t || this.get("context")).beginPath(), t.moveTo(r[0][0], r[0][1]), n = 1, e = r.length - 1; n < e; n++) t.lineTo(r[n][0], r[n][1]);
									t.lineTo(r[e][0], r[e][1])
								}
							},
							getStartTangent: function() {
								var t = this.__attrs.points,
									e = [];
								return e.push([t[1][0], t[1][1]]), e.push([t[0][0], t[0][1]]), e
							},
							getEndTangent: function() {
								var t = this.__attrs.points,
									e = t.length - 1,
									n = [];
								return n.push([t[e - 1][0], t[e - 1][1]]), n.push([t[e][0], t[e][1]]), n
							},
							afterPath: function(t) {
								var e = this._attrs,
									n = e.points,
									r = n.length - 1;
								t = t || this.get("context"), e.startArrow && o.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]), e.endArrow && o.addEndArrow(t, e, n[r - 1][0], n[r - 1][1], n[r][0], n[r][1])
							},
							getPoint: function(t) {
								var e, n, i = this._attrs.points,
									o = this.tCache;
								return o || (this._setTcache(), o = this.tCache), r.each(o, function(r, i) {
									t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]), n = i)
								}), {
									x: a.at(i[n][0], i[n + 1][0], e),
									y: a.at(i[n][1], i[n + 1][1], e)
								}
							}
						}), t.exports = u
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						o.ATTRS = {
							points: null,
							lineWidth: 1
						}, r.extend(o, i), r.augment(o, {
							canFill: !0,
							canStroke: !0,
							type: "polygon",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1
								}
							},
							calculateBox: function() {
								var t = this._attrs.points,
									e = this.getHitLineWidth();
								if (!t || 0 === t.length) return null;
								var n = 1 / 0,
									i = 1 / 0,
									o = -1 / 0,
									a = -1 / 0;
								r.each(t, function(t) {
									var e = t[0],
										r = t[1];
									e < n && (n = e), e > o && (o = e), r < i && (i = r), r > a && (a = r)
								});
								var u = e / 2;
								return {
									minX: n - u,
									minY: i - u,
									maxX: o + u,
									maxY: a + u
								}
							},
							createPath: function(t) {
								var e = this._attrs.points;
								e.length < 2 || ((t = t || this.get("context")).beginPath(), r.each(e, function(e, n) {
									0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1])
								}), t.closePath())
							}
						}), t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = n(371),
							a = n(362),
							u = n(372),
							c = n(389),
							s = n(391),
							f = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						f.ATTRS = {
							path: null,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1
						}, r.extend(f, i), r.augment(f, {
							canFill: !0,
							canStroke: !0,
							type: "path",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1,
									startArrow: !1,
									endArrow: !1
								}
							},
							_afterSetAttrPath: function(t) {
								if (r.isNil(t)) return this.setSilent("segments", null), void this.setSilent("box", void 0);
								var e, n = a.parsePath(t),
									i = [];
								if (r.isArray(n) && 0 !== n.length && ("M" === n[0][0] || "m" === n[0][0])) {
									for (var u = n.length, c = 0; c < n.length; c++) {
										var s = n[c];
										e = new o(s, e, c === u - 1), i.push(e)
									}
									this.setSilent("segments", i), this.setSilent("tCache", null), this.setSilent("box", null)
								}
							},
							calculateBox: function() {
								var t = this.get("segments");
								if (!t) return null;
								var e = this.getHitLineWidth(),
									n = 1 / 0,
									i = -1 / 0,
									o = 1 / 0,
									a = -1 / 0;
								return r.each(t, function(t) {
									t.getBBox(e);
									var r = t.box;
									r && (r.minX < n && (n = r.minX), r.maxX > i && (i = r.maxX), r.minY < o && (o = r.minY), r.maxY > a && (a = r.maxY))
								}), n === 1 / 0 || o === 1 / 0 ? {
									minX: 0,
									minY: 0,
									maxX: 0,
									maxY: 0
								} : {
									minX: n,
									minY: o,
									maxX: i,
									maxY: a
								}
							},
							_setTcache: function() {
								var t, e, n, i, o = 0,
									a = 0,
									u = [],
									c = this._cfg.curve;
								c && (r.each(c, function(t, e) {
									n = c[e + 1], i = t.length, n && (o += s.len(t[i - 2], t[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]))
								}), r.each(c, function(r, f) {
									n = c[f + 1], i = r.length, n && ((t = [])[0] = a / o, e = s.len(r[i - 2], r[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]), a += e, t[1] = a / o, u.push(t))
								}), this._cfg.tCache = u)
							},
							_calculateCurve: function() {
								var t = this._attrs.path;
								this._cfg.curve = c.pathTocurve(t)
							},
							getStartTangent: function() {
								var t, e, n, i, o = this.get("segments");
								if (o.length > 1)
									if (t = o[0].endPoint, e = o[1].endPoint, n = o[1].startTangent, i = [], r.isFunction(n)) {
										var a = n();
										i.push([t.x - a[0], t.y - a[1]]), i.push([t.x, t.y])
									} else i.push([e.x, e.y]), i.push([t.x, t.y]);
								return i
							},
							getEndTangent: function() {
								var t, e, n, i, o = this.get("segments"),
									a = o.length;
								if (a > 1)
									if (t = o[a - 2].endPoint, e = o[a - 1].endPoint, n = o[a - 1].endTangent, i = [], r.isFunction(n)) {
										var u = n();
										i.push([e.x - u[0], e.y - u[1]]), i.push([e.x, e.y])
									} else i.push([t.x, t.y]), i.push([e.x, e.y]);
								return i
							},
							getPoint: function(t) {
								var e, n, i = this._cfg.tCache;
								i || (this._calculateCurve(), this._setTcache(), i = this._cfg.tCache);
								var o = this._cfg.curve;
								if (!i) return o ? {
									x: o[0][1],
									y: o[0][2]
								} : null;
								r.each(i, function(r, i) {
									t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]), n = i)
								});
								var a = o[n];
								if (r.isNil(a) || r.isNil(n)) return null;
								var u = a.length,
									c = o[n + 1];
								return {
									x: s.at(a[u - 2], c[1], c[3], c[5], 1 - e),
									y: s.at(a[u - 1], c[2], c[4], c[6], 1 - e)
								}
							},
							createPath: function(t) {
								var e = this.get("segments");
								if (r.isArray(e)) {
									(t = t || this.get("context")).beginPath();
									for (var n = e.length, i = 0; i < n; i++) e[i].draw(t)
								}
							},
							afterPath: function(t) {
								var e = this._attrs,
									n = this.get("segments"),
									i = e.path;
								if (t = t || this.get("context"), r.isArray(n) && 1 !== n.length && (e.startArrow || e.endArrow) && "z" !== i[i.length - 1] && "Z" !== i[i.length - 1] && !e.fill) {
									var o = this.getStartTangent();
									u.addStartArrow(t, e, o[0][0], o[0][1], o[1][0], o[1][1]);
									var a = this.getEndTangent();
									u.addEndArrow(t, e, a[0][0], a[0][1], a[1][0], a[1][1])
								}
							}
						}), t.exports = f
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = n(372),
							a = n(374),
							u = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						u.ATTRS = {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 0,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1
						}, r.extend(u, i), r.augment(u, {
							canStroke: !0,
							type: "line",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1,
									startArrow: !1,
									endArrow: !1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x1,
									n = t.y1,
									r = t.x2,
									i = t.y2,
									o = this.getHitLineWidth();
								return a.box(e, n, r, i, o)
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x1,
									r = e.y1,
									i = e.x2,
									o = e.y2;
								(t = t || self.get("context")).beginPath(), t.moveTo(n, r), t.lineTo(i, o)
							},
							afterPath: function(t) {
								var e = this._attrs,
									n = e.x1,
									r = e.y1,
									i = e.x2,
									a = e.y2;
								t = t || this.get("context"), e.startArrow && o.addStartArrow(t, e, i, a, n, r), e.endArrow && o.addEndArrow(t, e, n, r, i, a)
							},
							getPoint: function(t) {
								var e = this._attrs;
								return {
									x: a.at(e.x1, e.x2, t),
									y: a.at(e.y1, e.y2, t)
								}
							}
						}), t.exports = u
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						o.ATTRS = {
							x: 0,
							y: 0,
							img: void 0,
							width: 0,
							height: 0,
							sx: null,
							sy: null,
							swidth: null,
							sheight: null
						}, r.extend(o, i), r.augment(o, {
							type: "image",
							isHitBox: function() {
								return !1
							},
							calculateBox: function() {
								var t = this._attrs;
								this._cfg.attrs && this._cfg.attrs.img === t.img || this._setAttrImg();
								var e = t.x,
									n = t.y;
								return {
									minX: e,
									minY: n,
									maxX: e + t.width,
									maxY: n + t.height
								}
							},
							_beforeSetLoading: function(t) {
								var e = this.get("canvas");
								return !1 === t && !0 === this.get("toDraw") && (this._cfg.loading = !1, e.draw()), t
							},
							_setAttrImg: function() {
								var t = this,
									e = t._attrs,
									n = e.img;
								if (!r.isString(n)) return n instanceof Image ? (e.width || t.attr("width", n.width), e.height || t.attr("height", n.height), n) : n instanceof HTMLElement && r.isString(n.nodeName) && "CANVAS" === n.nodeName.toUpperCase() ? (e.width || t.attr("width", Number(n.getAttribute("width"))), e.height || t.attr("height", Number(n.getAttribute("height"))), n) : n instanceof ImageData ? (e.width || t.attr("width", n.width), e.height || t.attr("height", n.height), n) : null;
								var i = new Image;
								i.onload = function() {
									if (t.get("destroyed")) return !1;
									t.attr("imgSrc", n), t.attr("img", i);
									var e = t.get("callback");
									e && e.call(t), t.set("loading", !1)
								}, i.src = n, i.crossOrigin = "Anonymous", t.set("loading", !0)
							},
							drawInner: function(t) {
								this._cfg.hasUpdate && this._setAttrImg(), this.get("loading") ? this.set("toDraw", !0) : (this._drawImage(t), this._cfg.hasUpdate = !1)
							},
							_drawImage: function(t) {
								var e = this._attrs,
									n = e.x,
									i = e.y,
									o = e.img,
									a = e.width,
									u = e.height,
									c = e.sx,
									s = e.sy,
									f = e.swidth,
									l = e.sheight;
								this.set("toDraw", !1);
								var h = o;
								if (h instanceof ImageData && ((h = new Image).src = o), h instanceof Image || h instanceof HTMLElement && r.isString(h.nodeName) && "CANVAS" === h.nodeName.toUpperCase()) {
									if (r.isNil(c) || r.isNil(s) || r.isNil(f) || r.isNil(l)) return void t.drawImage(h, n, i, a, u);
									if (!(r.isNil(c) || r.isNil(s) || r.isNil(f) || r.isNil(l))) return void t.drawImage(h, c, s, f, l, n, i, a, u)
								}
							}
						}), t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = n(373),
							a = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						a.ATTRS = {
							x: 0,
							y: 0,
							rs: 0,
							re: 0,
							startAngle: 0,
							endAngle: 0,
							clockwise: !1,
							lineWidth: 1
						}, r.extend(a, i), r.augment(a, {
							canFill: !0,
							canStroke: !0,
							type: "fan",
							getDefaultAttrs: function() {
								return {
									clockwise: !1,
									lineWidth: 1,
									rs: 0,
									re: 0
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.rs,
									i = t.re,
									a = t.startAngle,
									u = t.endAngle,
									c = t.clockwise,
									s = this.getHitLineWidth(),
									f = o.box(e, n, r, a, u, c),
									l = o.box(e, n, i, a, u, c),
									h = s / 2;
								return {
									minX: Math.min(f.minX, l.minX) - h,
									minY: Math.min(f.minY, l.minY) - h,
									maxX: Math.max(f.maxX, l.maxX) + h,
									maxY: Math.max(f.maxY, l.maxY) + h
								}
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x,
									r = e.y,
									i = e.rs,
									o = e.re,
									a = e.startAngle,
									u = e.endAngle,
									c = e.clockwise,
									s = {
										x: Math.cos(a) * i + n,
										y: Math.sin(a) * i + r
									},
									f = {
										x: Math.cos(a) * o + n,
										y: Math.sin(a) * o + r
									},
									l = {
										x: Math.cos(u) * i + n,
										y: Math.sin(u) * i + r
									};
								(t = t || self.get("context")).beginPath(), t.moveTo(s.x, s.y), t.lineTo(f.x, f.y), t.arc(n, r, o, a, u, c), t.lineTo(l.x, l.y), t.arc(n, r, i, u, a, !c), t.closePath()
							}
						}), t.exports = a
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						o.ATTRS = {
							x: 0,
							y: 0,
							rx: 1,
							ry: 1,
							lineWidth: 1
						}, r.extend(o, i), r.augment(o, {
							canFill: !0,
							canStroke: !0,
							type: "ellipse",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.rx,
									i = t.ry,
									o = this.getHitLineWidth(),
									a = r + o / 2,
									u = i + o / 2;
								return {
									minX: e - a,
									minY: n - u,
									maxX: e + a,
									maxY: n + u
								}
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x,
									i = e.y,
									o = e.rx,
									a = e.ry;
								t = t || self.get("context");
								var u = o > a ? o : a,
									c = o > a ? 1 : o / a,
									s = o > a ? a / o : 1,
									f = [1, 0, 0, 0, 1, 0, 0, 0, 1];
								r.mat3.scale(f, f, [c, s]), r.mat3.translate(f, f, [n, i]), t.beginPath(), t.save(), t.transform(f[0], f[1], f[3], f[4], f[6], f[7]), t.arc(0, 0, u, 0, 2 * Math.PI), t.restore(), t.closePath()
							}
						}), t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						r.extend(o, i), r.augment(o, {
							canFill: !0,
							canStroke: !0,
							type: "dom",
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.width,
									i = t.height,
									o = this.getHitLineWidth() / 2;
								return {
									minX: e - o,
									minY: n - o,
									maxX: e + r + o,
									maxY: n + i + o
								}
							}
						}), t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = n(37),
							o = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						o.ATTRS = {
							x: 0,
							y: 0,
							r: 0,
							lineWidth: 1
						}, r.extend(o, i), r.augment(o, {
							canFill: !0,
							canStroke: !0,
							type: "circle",
							getDefaultAttrs: function() {
								return {
									lineWidth: 1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.r,
									i = this.getHitLineWidth() / 2 + r;
								return {
									minX: e - i,
									minY: n - i,
									maxX: e + i,
									maxY: n + i
								}
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x,
									r = e.y,
									i = e.r;
								t.beginPath(), t.arc(n, r, i, 0, 2 * Math.PI, !1), t.closePath()
							}
						}), t.exports = o
					}, function(t, e, n) {
						function r(t, e, n) {
							return t + e * Math.cos(n)
						}

						function i(t, e, n) {
							return t + e * Math.sin(n)
						}
						var o = n(17),
							a = n(37),
							u = n(373),
							c = n(372),
							s = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						s.ATTRS = {
							x: 0,
							y: 0,
							r: 0,
							startAngle: 0,
							endAngle: 0,
							clockwise: !1,
							lineWidth: 1,
							startArrow: !1,
							endArrow: !1
						}, o.extend(s, a), o.augment(s, {
							canStroke: !0,
							type: "arc",
							getDefaultAttrs: function() {
								return {
									x: 0,
									y: 0,
									r: 0,
									startAngle: 0,
									endAngle: 0,
									clockwise: !1,
									lineWidth: 1,
									startArrow: !1,
									endArrow: !1
								}
							},
							calculateBox: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									r = t.r,
									i = t.startAngle,
									o = t.endAngle,
									a = t.clockwise,
									c = this.getHitLineWidth() / 2,
									s = u.box(e, n, r, i, o, a);
								return s.minX -= c, s.minY -= c, s.maxX += c, s.maxY += c, s
							},
							getStartTangent: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									o = t.startAngle,
									a = t.r,
									u = t.clockwise,
									c = Math.PI / 180;
								u && (c *= -1);
								var s = [],
									f = r(e, a, o + c),
									l = i(n, a, o + c),
									h = r(e, a, o),
									d = i(n, a, o);
								return s.push([f, l]), s.push([h, d]), s
							},
							getEndTangent: function() {
								var t = this._attrs,
									e = t.x,
									n = t.y,
									o = t.endAngle,
									a = t.r,
									u = t.clockwise,
									c = Math.PI / 180,
									s = [];
								u && (c *= -1);
								var f = r(e, a, o + c),
									l = i(n, a, o + c),
									h = r(e, a, o),
									d = i(n, a, o);
								return s.push([h, d]), s.push([f, l]), s
							},
							createPath: function(t) {
								var e = this._attrs,
									n = e.x,
									r = e.y,
									i = e.r,
									o = e.startAngle,
									a = e.endAngle,
									u = e.clockwise;
								(t = t || self.get("context")).beginPath(), t.arc(n, r, i, o, a, u)
							},
							afterPath: function(t) {
								var e = this._attrs;
								if (t = t || this.get("context"), e.startArrow) {
									var n = this.getStartTangent();
									c.addStartArrow(t, e, n[0][0], n[0][1], n[1][0], n[1][1])
								}
								if (e.endArrow) {
									var r = this.getEndTangent();
									c.addEndArrow(t, e, r[0][0], r[0][1], r[1][0], r[1][1])
								}
							}
						}), t.exports = s
					}, function(t, e) {
						t.exports = {
							xAt: function(t, e, n, r, i) {
								return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r
							},
							yAt: function(t, e, n, r, i) {
								return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r
							},
							xExtrema: function(t, e, n) {
								return Math.atan(-n / e * Math.tan(t))
							},
							yExtrema: function(t, e, n) {
								return Math.atan(n / (e * Math.tan(t)))
							}
						}
					}, function(t, e, n) {
						function r(t, e, n, r) {
							var i = 1 - r;
							return i * (i * t + 2 * r * e) + r * r * n
						}

						function i(t, e, n, i, o, u, c, s, f) {
							var l, h, d, p, g, v, m, y = .005,
								b = 1 / 0,
								x = [c, s];
							for (g = 0; g < 1; g += .05) d = [r(t, n, o, g), r(e, i, u, g)], (h = a.squaredDistance(x, d)) < b && (l = g, b = h);
							for (b = 1 / 0, m = 0; m < 32 && !(y < 1e-4); m++) {
								var _ = l - y,
									w = l + y;
								d = [r(t, n, o, _), r(e, i, u, _)], h = a.squaredDistance(x, d), _ >= 0 && h < b ? (l = _, b = h) : (p = [r(t, n, o, w), r(e, i, u, w)], v = a.squaredDistance(x, p), w <= 1 && v < b ? (l = w, b = v) : y *= .5)
							}
							return f && (f.x = r(t, n, o, l), f.y = r(e, i, u, l)), Math.sqrt(b)
						}
						var o = n(17),
							a = o.vec2;
						t.exports = {
							at: r,
							projectPoint: function(t, e, n, r, o, a, u, c) {
								var s = {};
								return i(t, e, n, r, o, a, u, c, s), s
							},
							pointDistance: i,
							extrema: function(t, e, n) {
								var r = t + n - 2 * e;
								if (o.isNumberEqual(r, 0)) return [.5];
								var i = (t - e) / r;
								return i <= 1 && i >= 0 ? [i] : []
							}
						}
					}, function(t, e, n) {
						var r = n(17),
							i = n(572),
							o = n(571),
							a = n(570),
							u = n(62),
							c = function(t) {
								this._cfg = {
									zIndex: 0,
									capture: !0,
									visible: !0,
									destroyed: !1
								}, r.assign(this._cfg, this.getDefaultCfg(), t), this.initAttrs(this._cfg.attrs), this._cfg.attrs = {}, this.initTransform(), this.init()
							};
						c.CFG = {
							id: null,
							zIndex: 0,
							canvas: null,
							parent: null,
							capture: !0,
							context: null,
							visible: !0,
							destroyed: !1
						}, r.augment(c, i, o, u, a, {
							init: function() {
								this.setSilent("animable", !0), this.setSilent("animating", !1)
							},
							getParent: function() {
								return this._cfg.parent
							},
							getDefaultCfg: function() {
								return {}
							},
							set: function(t, e) {
								return "zIndex" === t && this._beforeSetZIndex && this._beforeSetZIndex(e), "loading" === t && this._beforeSetLoading && this._beforeSetLoading(e), this._cfg[t] = e, this
							},
							setSilent: function(t, e) {
								this._cfg[t] = e
							},
							get: function(t) {
								return this._cfg[t]
							},
							show: function() {
								return this._cfg.visible = !0, this
							},
							hide: function() {
								return this._cfg.visible = !1, this
							},
							remove: function(t, e) {
								var n = this._cfg,
									i = n.parent,
									o = n.el;
								return i && r.remove(i.get("children"), this), o && (e ? i && i._cfg.tobeRemoved.push(o) : o.parentNode.removeChild(o)), (t || void 0 === t) && this.destroy(), this
							},
							destroy: function() {
								this.get("destroyed") || (this._attrs = null, this.removeEvent(), this._cfg = {
									destroyed: !0
								})
							},
							toFront: function() {
								var t = this._cfg,
									e = t.parent;
								if (e) {
									var n = e._cfg.children,
										r = t.el,
										i = n.indexOf(this);
									n.splice(i, 1), n.push(this), r && (r.parentNode.removeChild(r), t.el = null)
								}
							},
							toBack: function() {
								var t = this._cfg,
									e = t.parent;
								if (e) {
									var n = e._cfg.children,
										r = t.el,
										i = n.indexOf(this);
									if (n.splice(i, 1), n.unshift(this), r) {
										var o = r.parentNode;
										o.removeChild(r), o.insertBefore(r, o.firstChild)
									}
								}
							},
							_beforeSetZIndex: function(t) {
								var e = this._cfg.parent;
								this._cfg.zIndex = t, r.isNil(e) || e.sort();
								var n = this._cfg.el;
								if (n) {
									var i = e._cfg.children,
										o = i.indexOf(this),
										a = n.parentNode;
									a.removeChild(n), o === i.length - 1 ? a.appendChild(n) : a.insertBefore(n, a.childNodes[o])
								}
								return t
							},
							_setAttrs: function(t) {
								return this.attr(t), t
							},
							setZIndex: function(t) {
								return this._cfg.zIndex = t, this._beforeSetZIndex(t)
							},
							clone: function() {
								return r.clone(this)
							},
							getBBox: function() {}
						}), t.exports = c
					}, function(t, e, n) {
						function r(t, e, n) {
							for (var r, i = t.length - 1; i >= 0; i--) {
								var o = t[i];
								if (o._cfg.visible && o._cfg.capture && (o.isGroup ? r = o.getShape(e, n) : o.isHit(e, n) && (r = o)), r) break
							}
							return r
						}
						var i = n(17),
							o = n(437),
							a = n(569),
							u = {},
							c = "_INDEX",
							s = function t(e) {
								t.superclass.constructor.call(this, e), this.set("children", []), this.set("tobeRemoved", []), this._beforeRenderUI(), this._renderUI(), this._bindUI()
							};
						i.extend(s, o), i.augment(s, {
							isGroup: !0,
							type: "group",
							canFill: !0,
							canStroke: !0,
							getDefaultCfg: function() {
								return function t(e) {
									if (!e._cfg && e !== s) {
										var n = e.superclass.constructor;
										n && !n._cfg && t(n), e._cfg = {}, i.merge(e._cfg, n._cfg), i.merge(e._cfg, e.CFG)
									}
								}(this.constructor), i.merge({}, this.constructor._cfg)
							},
							_beforeRenderUI: function() {},
							_renderUI: function() {},
							_bindUI: function() {},
							addShape: function(t, e) {
								var n = this.get("canvas");
								e = e || {};
								var r = u[t];
								if (r || (r = i.upperFirst(t), u[t] = r), e.attrs && n) {
									var o = e.attrs;
									if ("text" === t) {
										var c = n.get("fontFamily");
										c && (o.fontFamily = o.fontFamily ? o.fontFamily : c)
									}
								}
								e.canvas = n, e.type = t;
								var s = new a[r](e);
								return this.add(s), s
							},
							addGroup: function(t, e) {
								var n, r = this.get("canvas");
								if (e = i.merge({}, e), i.isFunction(t)) e ? (e.canvas = r, e.parent = this, n = new t(e)) : n = new t({
									canvas: r,
									parent: this
								}), this.add(n);
								else if (i.isObject(t)) t.canvas = r, n = new s(t), this.add(n);
								else {
									if (void 0 !== t) return !1;
									n = new s, this.add(n)
								}
								return n
							},
							renderBack: function(t, e) {
								var n = this.get("backShape"),
									r = this.getBBox();
								return i.merge(e, {
									x: r.minX - t[3],
									y: r.minY - t[0],
									width: r.width + t[1] + t[3],
									height: r.height + t[0] + t[2]
								}), n ? n.attr(e) : n = this.addShape("rect", {
									zIndex: -1,
									attrs: e
								}), this.set("backShape", n), this.sort(), n
							},
							removeChild: function(t, e) {
								if (arguments.length >= 2) this.contain(t) && t.remove(e);
								else {
									if (1 === arguments.length) {
										if (!i.isBoolean(t)) return this.contain(t) && t.remove(!0), this;
										e = t
									}
									0 === arguments.length && (e = !0), s.superclass.remove.call(this, e)
								}
								return this
							},
							add: function(t) {
								var e = this,
									n = e.get("children");
								if (i.isArray(t)) i.each(t, function(t) {
									var n = t.get("parent");
									n && n.removeChild(t, !1), e._setCfgProperty(t)
								}), e._cfg.children = n.concat(t);
								else {
									var r = t,
										o = r.get("parent");
									o && o.removeChild(r, !1), e._setCfgProperty(r), n.push(r)
								}
								return e
							},
							_setCfgProperty: function(t) {
								var e = this._cfg;
								t.set("parent", this), t.set("canvas", e.canvas), e.timeline && t.set("timeline", e.timeline)
							},
							contain: function(t) {
								return this.get("children").indexOf(t) > -1
							},
							getChildByIndex: function(t) {
								return this.get("children")[t]
							},
							getFirst: function() {
								return this.getChildByIndex(0)
							},
							getLast: function() {
								var t = this.get("children").length - 1;
								return this.getChildByIndex(t)
							},
							getBBox: function() {
								var t = 1 / 0,
									e = -1 / 0,
									n = 1 / 0,
									r = -1 / 0,
									o = this.get("children");
								o.length > 0 ? i.each(o, function(i) {
									if (i.get("visible")) {
										if (i.isGroup && 0 === i.get("children").length) return;
										var o = i.getBBox();
										if (!o) return !0;
										var a = [o.minX, o.minY, 1],
											u = [o.minX, o.maxY, 1],
											c = [o.maxX, o.minY, 1],
											s = [o.maxX, o.maxY, 1];
										i.apply(a), i.apply(u), i.apply(c), i.apply(s);
										var f = Math.min(a[0], u[0], c[0], s[0]),
											l = Math.max(a[0], u[0], c[0], s[0]),
											h = Math.min(a[1], u[1], c[1], s[1]),
											d = Math.max(a[1], u[1], c[1], s[1]);
										f < t && (t = f), l > e && (e = l), h < n && (n = h), d > r && (r = d)
									}
								}) : (t = 0, e = 0, n = 0, r = 0);
								var a = {
									minX: t,
									minY: n,
									maxX: e,
									maxY: r
								};
								return a.x = a.minX, a.y = a.minY, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY, a
							},
							getCount: function() {
								return this.get("children").length
							},
							sort: function() {
								var t = this.get("children");
								return i.each(t, function(t, e) {
									return t[c] = e, t
								}), t.sort(function(t, e) {
									var n = function(t, e) {
										return t.get("zIndex") - e.get("zIndex")
									}(t, e);
									return 0 === n ? t[c] - e[c] : n
								}), this
							},
							findById: function(t) {
								return this.find(function(e) {
									return e.get("id") === t
								})
							},
							find: function(t) {
								if (i.isString(t)) return this.findById(t);
								var e = this.get("children"),
									n = null;
								return i.each(e, function(e) {
									if (t(e) ? n = e : e.find && (n = e.find(t)), n) return !1
								}), n
							},
							findAll: function(t) {
								var e = this.get("children"),
									n = [],
									r = [];
								return i.each(e, function(e) {
									t(e) && n.push(e), e.findAllBy && (r = e.findAllBy(t), n = n.concat(r))
								}), n
							},
							findBy: function(t) {
								var e = this.get("children"),
									n = null;
								return i.each(e, function(e) {
									if (t(e) ? n = e : e.findBy && (n = e.findBy(t)), n) return !1
								}), n
							},
							findAllBy: function(t) {
								var e = this.get("children"),
									n = [],
									r = [];
								return i.each(e, function(e) {
									t(e) && n.push(e), e.findAllBy && (r = e.findAllBy(t), n = n.concat(r))
								}), n
							},
							getShape: function(t, e) {
								var n, i = this._attrs.clip,
									o = this._cfg.children;
								if (i) {
									var a = [t, e, 1];
									i.invert(a, this.get("canvas")), i.isPointInPath(a[0], a[1]) && (n = r(o, t, e))
								} else n = r(o, t, e);
								return n
							},
							clearTotalMatrix: function() {
								if (this.get("totalMatrix")) {
									this.setSilent("totalMatrix", null);
									for (var t = this._cfg.children, e = 0; e < t.length; e++) t[e].clearTotalMatrix()
								}
							},
							clear: function(t) {
								for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--) e[n].remove(!0, t);
								return this._cfg.children = [], this
							},
							destroy: function() {
								this.get("destroyed") || (this.clear(), s.superclass.destroy.call(this))
							},
							clone: function() {
								var t = this._cfg.children,
									e = new s;
								return i.each(t, function(t) {
									e.add(t.clone())
								}), e
							}
						}), t.exports = s
					}, function(t, e, n) {
						var r = n(17),
							i = function(t, e, n, r) {
								this.type = t, this.target = null, this.currentTarget = null, this.bubbles = n, this.cancelable = r, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e
							};
						r.augment(i, {
							preventDefault: function() {
								this.defaultPrevented = this.cancelable && !0
							},
							stopPropagation: function() {
								this.propagationStopped = !0
							},
							remove: function() {
								this.remove = !0
							},
							clone: function() {
								return r.clone(this)
							},
							toString: function() {
								return "[Event (type=" + this.type + ")]"
							}
						}), t.exports = i
					}, function(t, e, n) {
						t.exports = {
							isFunction: n(47),
							isObject: n(417),
							isBoolean: n(479),
							isNil: n(141),
							isString: n(366),
							isArray: n(29),
							isNumber: n(140),
							isEmpty: n(473),
							uniqueId: n(472),
							clone: n(412),
							deepMix: n(411),
							assign: n(385),
							merge: n(411),
							upperFirst: n(481),
							each: n(30),
							isEqual: n(410),
							toArray: n(383),
							extend: n(476),
							augment: n(477),
							remove: n(502),
							isNumberEqual: n(499),
							toRadian: n(495),
							toDegree: n(497),
							mod: n(498),
							clamp: n(414),
							createDom: n(507),
							modifyCSS: n(506),
							requestAnimationFrame: n(505),
							getRatio: function() {
								return window.devicePixelRatio ? window.devicePixelRatio : 2
							},
							mat3: n(413),
							vec2: n(494),
							vec3: n(493),
							transform: n(492)
						}
					}, function(t, e, n) {
						var r = n(75),
							i = n(581),
							o = n(407),
							a = Math.max,
							u = Math.min;
						t.exports = function(t, e, n) {
							function c(e) {
								var n = d,
									r = p;
								return d = p = void 0, b = e, v = t.apply(r, n)
							}

							function s(t) {
								var n = t - y;
								return void 0 === y || n >= e || n < 0 || _ && t - b >= g
							}

							function f() {
								var t = i();
								if (s(t)) return l(t);
								m = setTimeout(f, function(t) {
									var n = e - (t - y);
									return _ ? u(n, g - (t - b)) : n
								}(t))
							}

							function l(t) {
								return m = void 0, w && d ? c(t) : (d = p = void 0, v)
							}

							function h() {
								var t = i(),
									n = s(t);
								if (d = arguments, p = this, y = t, n) {
									if (void 0 === m) return function(t) {
										return b = t, m = setTimeout(f, e), x ? c(t) : v
									}(y);
									if (_) return m = setTimeout(f, e), c(y)
								}
								return void 0 === m && (m = setTimeout(f, e)), v
							}
							var d, p, g, v, m, y, b = 0,
								x = !1,
								_ = !1,
								w = !0;
							if ("function" != typeof t) throw new TypeError("Expected a function");
							return e = o(e) || 0, r(n) && (x = !!n.leading, g = (_ = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : g, w = "trailing" in n ? !!n.trailing : w), h.cancel = function() {
								void 0 !== m && clearTimeout(m), b = 0, d = y = p = m = void 0
							}, h.flush = function() {
								return void 0 === m ? v : l(i())
							}, h
						}
					}, function(t, e, n) {
						var r = n(63),
							i = n(393),
							o = n(592),
							a = n(409);
						t.exports = function(t, e) {
							return r(t) ? t : i(t, e) ? [t] : o(a(t))
						}
					}, function(t, e, n) {
						var r = n(442),
							i = n(375);
						t.exports = function(t, e) {
							for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
							return n && n == o ? t : void 0
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return function(n) {
								return null != n && n[t] === e && (void 0 !== e || t in Object(n))
							}
						}
					}, function(t, e, n) {
						var r = n(75);
						t.exports = function(t) {
							return t == t && !r(t)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return t.has(e)
						}
					}, function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.__data__ = new i; ++e < n;) this.add(t[e])
						}
						var i = n(403),
							o = n(601),
							a = n(600);
						r.prototype.add = r.prototype.push = o, r.prototype.has = a, t.exports = r
					}, function(t, e, n) {
						var r = n(447),
							i = n(599),
							o = n(446);
						t.exports = function(t, e, n, a, u, c) {
							var s = 1 & n,
								f = t.length,
								l = e.length;
							if (f != l && !(s && l > f)) return !1;
							var h = c.get(t);
							if (h && c.get(e)) return h == e;
							var d = -1,
								p = !0,
								g = 2 & n ? new r : void 0;
							for (c.set(t, e), c.set(e, t); ++d < f;) {
								var v = t[d],
									m = e[d];
								if (a) var y = s ? a(m, v, d, e, t, c) : a(v, m, d, t, e, c);
								if (void 0 !== y) {
									if (y) continue;
									p = !1;
									break
								}
								if (g) {
									if (!i(e, function(t, e) {
											if (!o(g, e) && (v === t || u(v, t, n, a, c))) return g.push(e)
										})) {
										p = !1;
										break
									}
								} else if (v !== m && !u(v, m, n, a, c)) {
									p = !1;
									break
								}
							}
							return c.delete(t), c.delete(e), p
						}
					}, function(t, e, n) {
						var r = n(602),
							i = n(139);
						t.exports = function t(e, n, o, a, u) {
							return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
						}
					}, function(t, e, n) {
						var r = n(60).Uint8Array;
						t.exports = r
					}, function(t, e, n) {
						var r = n(153)(n(60), "Set");
						t.exports = r
					}, function(t, e, n) {
						var r = n(454),
							i = n(63);
						t.exports = function(t, e, n) {
							var o = e(t);
							return i(t) ? o : r(o, n(t))
						}
					}, function(t, e, n) {
						var r = n(452),
							i = n(396),
							o = n(363);
						t.exports = function(t) {
							return r(t, o, i)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
							return t
						}
					}, function(t, e, n) {
						var r = n(454),
							i = n(408),
							o = n(396),
							a = n(456),
							u = Object.getOwnPropertySymbols ? function(t) {
								for (var e = []; t;) r(e, o(t)), t = i(t);
								return e
							} : a;
						t.exports = u
					}, function(t, e) {
						t.exports = function() {
							return []
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
								var a = t[n];
								e(a, n, t) && (o[i++] = a)
							}
							return o
						}
					}, function(t, e, n) {
						var r = n(462),
							i = n(636),
							o = n(397);
						t.exports = function(t) {
							return o(t) ? r(t, !0) : i(t)
						}
					}, function(t, e, n) {
						var r = n(640),
							i = n(400),
							o = n(399),
							a = o && o.isTypedArray,
							u = a ? i(a) : r;
						t.exports = u
					}, function(t, e) {
						var n = /^(?:0|[1-9]\d*)$/;
						t.exports = function(t, e) {
							var r = void 0 === t ? "undefined" : o(t);
							return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
						}
					}, function(t, e, n) {
						var r = n(642),
							i = n(139),
							o = Object.prototype,
							a = o.hasOwnProperty,
							u = o.propertyIsEnumerable,
							c = r(function() {
								return arguments
							}()) ? r : function(t) {
								return i(t) && a.call(t, "callee") && !u.call(t, "callee")
							};
						t.exports = c
					}, function(t, e, n) {
						var r = n(643),
							i = n(461),
							o = n(63),
							a = n(402),
							u = n(460),
							c = n(459),
							s = Object.prototype.hasOwnProperty;
						t.exports = function(t, e) {
							var n = o(t),
								f = !n && i(t),
								l = !n && !f && a(t),
								h = !n && !f && !l && c(t),
								d = n || f || l || h,
								p = d ? r(t.length, String) : [],
								g = p.length;
							for (var v in t) !e && !s.call(t, v) || d && ("length" == v || l && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, g)) || p.push(v);
							return p
						}
					}, function(t, e, n) {
						var r = n(645);
						t.exports = function(t, e, n) {
							"__proto__" == e && r ? r(t, e, {
								configurable: !0,
								enumerable: !0,
								value: n,
								writable: !0
							}) : t[e] = n
						}
					}, function(t, e, n) {
						var r = n(463),
							i = n(405),
							o = Object.prototype.hasOwnProperty;
						t.exports = function(t, e, n) {
							var a = t[e];
							o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
						}
					}, function(t, e) {
						var n = Function.prototype.toString;
						t.exports = function(t) {
							if (null != t) {
								try {
									return n.call(t)
								} catch (t) {}
								try {
									return t + ""
								} catch (t) {}
							}
							return ""
						}
					}, function(t, e, n) {
						var r = n(158),
							i = n(75);
						t.exports = function(t) {
							if (!i(t)) return !1;
							var e = r(t);
							return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
						}
					}, function(t, e, n) {
						var r = n(675);
						t.exports = function(t) {
							var e = r(t),
								n = e % 1;
							return e == e ? n ? e - n : e : 0
						}
					}, function(t, e, n) {
						var r = n(678),
							i = n(677),
							o = n(676);
						t.exports = function(t, e, n) {
							return e == e ? o(t, e, n) : r(t, i, n)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return function(n) {
								return t(e(n))
							}
						}
					}, function(t, e, n) {
						(function(e) {
							var n = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e;
							t.exports = n
						}).call(this, n(154))
					}, function(t, e) {
						var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
						t.exports = function(t) {
							return n.test(t)
						}
					}, function(t, e) {
						var n = function() {
							var t = {};
							return function(e) {
								return t[e = e || "g"] ? t[e] += 1 : t[e] = 1, e + t[e]
							}
						}();
						t.exports = n
					}, function(t, e, n) {
						var r = n(141),
							i = n(64),
							o = n(480),
							a = n(478),
							u = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							if (r(t)) return !0;
							if (i(t)) return !t.length;
							var e = o(t);
							if ("Map" === e || "Set" === e) return !t.size;
							if (a(t)) return !Object.keys(t).length;
							for (var n in t)
								if (u.call(t, n)) return !1;
							return !0
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(29),
							o = Object.prototype.hasOwnProperty;
						t.exports = function(t, e) {
							if (!e || !i(t)) return t;
							var n = {},
								a = null;
							return r(t, function(t) {
								a = e(t), o.call(n, a) ? n[a].push(t) : n[a] = [t]
							}), n
						}
					}, function(t, e, n) {
						var r = n(47),
							i = n(29),
							o = n(474);
						t.exports = function(t, e) {
							if (!e) return {
								0: t
							};
							if (!r(e)) {
								var n = i(e) ? e : e.replace(/\s+/g, "").split("*");
								e = function(t) {
									for (var e = "_", r = 0, i = n.length; r < i; r++) e += t[n[r]] && t[n[r]].toString();
									return e
								}
							}
							return o(t, e)
						}
					}, function(t, e, n) {
						var r = n(47),
							i = n(385);
						t.exports = function(t, e, n, o) {
							r(e) || (n = e, e = t, t = function() {});
							var a = Object.create ? function(t, e) {
									return Object.create(t, {
										constructor: {
											value: e
										}
									})
								} : function(t, e) {
									function n() {}
									n.prototype = t;
									var r = new n;
									return r.constructor = e, r
								},
								u = a(e.prototype, t);
							return t.prototype = i(u, t.prototype), t.superclass = a(e.prototype, e), i(u, n), i(t, o), t
						}
					}, function(t, e, n) {
						var r = n(47),
							i = n(383),
							o = n(385);
						t.exports = function(t) {
							for (var e = i(arguments), n = 1; n < e.length; n++) {
								var a = e[n];
								r(a) && (a = a.prototype), o(t.prototype, a)
							}
						}
					}, function(t, e) {
						var n = Object.prototype;
						t.exports = function(t) {
							var e = t && t.constructor;
							return t === ("function" == typeof e && e.prototype || n)
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Boolean")
						}
					}, function(t, e) {
						var n = {}.toString;
						t.exports = function(t) {
							return n.call(t).replace(/^\[object /, "").replace(/\]$/, "")
						}
					}, function(t, e, n) {
						var r = n(365);
						t.exports = function(t) {
							var e = r(t);
							return e.charAt(0).toUpperCase() + e.substring(1)
						}
					}, function(t, e, n) {
						var r = n(365);
						t.exports = function(t) {
							return r(t).toUpperCase()
						}
					}, function(t, e, n) {
						var r = n(365);
						t.exports = function(t) {
							return r(t).toLowerCase()
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
								var o = [{
									x: +t[r - 2],
									y: +t[r - 1]
								}, {
									x: +t[r],
									y: +t[r + 1]
								}, {
									x: +t[r + 2],
									y: +t[r + 3]
								}, {
									x: +t[r + 4],
									y: +t[r + 5]
								}];
								e ? r ? i - 4 === r ? o[3] = {
									x: +t[0],
									y: +t[1]
								} : i - 2 === r && (o[2] = {
									x: +t[0],
									y: +t[1]
								}, o[3] = {
									x: +t[2],
									y: +t[3]
								}) : o[0] = {
									x: +t[i - 2],
									y: +t[i - 1]
								} : i - 4 === r ? o[3] = o[2] : r || (o[0] = {
									x: +t[r],
									y: +t[r + 1]
								}), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
							}
							return n
						}
					}, function(t, e) {
						var n = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
								return void 0 === t ? "undefined" : o(t)
							} : function(t) {
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
							},
							r = "\t\n\v\f\r   ᠎             　\u2028\u2029",
							i = new RegExp("([a-z])[" + r + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + r + "]*,?[" + r + "]*)+)", "ig"),
							a = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + r + "]*,?[" + r + "]*", "ig");
						t.exports = function(t) {
							if (!t) return null;
							if ((void 0 === t ? "undefined" : n(t)) === n([])) return t;
							var e = {
									a: 7,
									c: 6,
									o: 2,
									h: 1,
									l: 2,
									m: 2,
									r: 4,
									q: 4,
									s: 4,
									t: 2,
									v: 1,
									u: 3,
									z: 0
								},
								r = [];
							return String(t).replace(i, function(t, n, i) {
								var o = [],
									u = n.toLowerCase();
								if (i.replace(a, function(t, e) {
										e && o.push(+e)
									}), "m" === u && o.length > 2 && (r.push([n].concat(o.splice(0, 2))), u = "l", n = "m" === n ? "l" : "L"), "o" === u && 1 === o.length && r.push([n, o[0]]), "r" === u) r.push([n].concat(o));
								else
									for (; o.length >= e[u] && (r.push([n].concat(o.splice(0, e[u]))), e[u]););
							}), r
						}
					}, function(t, e, n) {
						function r(t, e, n, r, i) {
							var o = [];
							if (null === i && null === r && (r = n), t = +t, e = +e, n = +n, r = +r, null !== i) {
								var a = Math.PI / 180,
									u = t + n * Math.cos(-r * a),
									c = t + n * Math.cos(-i * a);
								o = [
									["M", u, e + n * Math.sin(-r * a)],
									["A", n, n, 0, +(i - r > 180), 0, c, e + n * Math.sin(-i * a)]
								]
							} else o = [
								["M", t, e],
								["m", 0, -r],
								["a", n, r, 0, 1, 1, 0, 2 * r],
								["a", n, r, 0, 1, 1, 0, -2 * r],
								["z"]
							];
							return o
						}
						var i = n(485),
							o = n(484);
						t.exports = function(t) {
							if (!(t = i(t)) || !t.length) return [
								["M", 0, 0]
							];
							var e = [],
								n = 0,
								a = 0,
								u = 0,
								c = 0,
								s = 0,
								f = void 0,
								l = void 0;
							"M" === t[0][0] && (u = n = +t[0][1], c = a = +t[0][2], s++, e[0] = ["M", n, a]);
							for (var h, d, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = s, v = t.length; g < v; g++) {
								if (e.push(h = []), (f = (d = t[g])[0]) !== f.toUpperCase()) switch (h[0] = f.toUpperCase(), h[0]) {
										case "A":
											h[1] = d[1], h[2] = d[2], h[3] = d[3], h[4] = d[4], h[5] = d[5], h[6] = +d[6] + n, h[7] = +d[7] + a;
											break;
										case "V":
											h[1] = +d[1] + a;
											break;
										case "H":
											h[1] = +d[1] + n;
											break;
										case "R":
											for (var m = 2, y = (l = [n, a].concat(d.slice(1))).length; m < y; m++) l[m] = +l[m] + n, l[++m] = +l[m] + a;
											e.pop(), e = e.concat(o(l, p));
											break;
										case "O":
											e.pop(), (l = r(n, a, d[1], d[2])).push(l[0]), e = e.concat(l);
											break;
										case "U":
											e.pop(), e = e.concat(r(n, a, d[1], d[2], d[3])), h = ["U"].concat(e[e.length - 1].slice(-2));
											break;
										case "M":
											u = +d[1] + n, c = +d[2] + a;
											break;
										default:
											for (var b = 1, x = d.length; b < x; b++) h[b] = +d[b] + (b % 2 ? n : a)
									} else if ("R" === f) l = [n, a].concat(d.slice(1)), e.pop(), e = e.concat(o(l, p)), h = ["R"].concat(d.slice(-2));
									else if ("O" === f) e.pop(), (l = r(n, a, d[1], d[2])).push(l[0]), e = e.concat(l);
								else if ("U" === f) e.pop(), e = e.concat(r(n, a, d[1], d[2], d[3])), h = ["U"].concat(e[e.length - 1].slice(-2));
								else
									for (var _ = 0, w = d.length; _ < w; _++) h[_] = d[_];
								if ("O" !== (f = f.toUpperCase())) switch (h[0]) {
									case "Z":
										n = +u, a = +c;
										break;
									case "H":
										n = h[1];
										break;
									case "V":
										a = h[1];
										break;
									case "M":
										u = h[h.length - 2], c = h[h.length - 1];
										break;
									default:
										n = h[h.length - 2], a = h[h.length - 1]
								}
							}
							return e
						}
					}, function(t, e, n) {
						var r = n(486),
							i = function(t, e, n, r) {
								return [t, e, n, r, n, r]
							},
							o = function(t, e, n, r, i, o) {
								return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
							};
						t.exports = function(t, e) {
							var n = r(t),
								a = e && r(e),
								u = {
									x: 0,
									y: 0,
									bx: 0,
									by: 0,
									X: 0,
									Y: 0,
									qx: null,
									qy: null
								},
								c = {
									x: 0,
									y: 0,
									bx: 0,
									by: 0,
									X: 0,
									Y: 0,
									qx: null,
									qy: null
								},
								s = [],
								f = [],
								l = "",
								h = "",
								d = void 0,
								p = function(t, e, n) {
									var r = void 0,
										a = void 0;
									if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
									switch (!(t[0] in {
											T: 1,
											Q: 1
										}) && (e.qx = e.qy = null), t[0]) {
										case "M":
											e.X = t[1], e.Y = t[2];
											break;
										case "A":
											t = ["C"].concat(function t(e, n, r, i, o, a, u, c, s, f) {
												r === i && (r += 1);
												var l = 120 * Math.PI / 180,
													h = Math.PI / 180 * (+o || 0),
													d = [],
													p = void 0,
													g = void 0,
													v = void 0,
													m = void 0,
													y = void 0,
													b = function(t, e, n) {
														return {
															x: t * Math.cos(n) - e * Math.sin(n),
															y: t * Math.sin(n) + e * Math.cos(n)
														}
													};
												if (f) g = f[0], v = f[1], m = f[2], y = f[3];
												else {
													e = (p = b(e, n, -h)).x, n = p.y, c = (p = b(c, s, -h)).x, s = p.y, e === c && n === s && (c += 1, s += 1);
													var x = (e - c) / 2,
														_ = (n - s) / 2,
														w = x * x / (r * r) + _ * _ / (i * i);
													w > 1 && (r *= w = Math.sqrt(w), i *= w);
													var S = r * r,
														M = i * i,
														O = (a === u ? -1 : 1) * Math.sqrt(Math.abs((S * M - S * _ * _ - M * x * x) / (S * _ * _ + M * x * x)));
													m = O * r * _ / i + (e + c) / 2, y = O * -i * x / r + (n + s) / 2, g = Math.asin(((n - y) / i).toFixed(9)), v = Math.asin(((s - y) / i).toFixed(9)), g = e < m ? Math.PI - g : g, v = c < m ? Math.PI - v : v, g < 0 && (g = 2 * Math.PI + g), v < 0 && (v = 2 * Math.PI + v), u && g > v && (g -= 2 * Math.PI), !u && v > g && (v -= 2 * Math.PI)
												}
												var P = v - g;
												if (Math.abs(P) > l) {
													var E = v,
														A = c,
														C = s;
													v = g + l * (u && v > g ? 1 : -1), d = t(c = m + r * Math.cos(v), s = y + i * Math.sin(v), r, i, o, 0, u, A, C, [v, E, m, y])
												}
												P = v - g;
												var j = Math.cos(g),
													k = Math.sin(g),
													I = Math.cos(v),
													T = Math.sin(v),
													B = Math.tan(P / 4),
													N = 4 / 3 * r * B,
													L = 4 / 3 * i * B,
													D = [e, n],
													R = [e + N * k, n - L * j],
													G = [c + N * T, s - L * I],
													Y = [c, s];
												if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], f) return [R, G, Y].concat(d);
												for (var F = [], X = 0, z = (d = [R, G, Y].concat(d).join().split(",")).length; X < z; X++) F[X] = X % 2 ? b(d[X - 1], d[X], h).y : b(d[X], d[X + 1], h).x;
												return F
											}.apply(0, [e.x, e.y].concat(t.slice(1))));
											break;
										case "S":
											"C" === n || "S" === n ? (r = 2 * e.x - e.bx, a = 2 * e.y - e.by) : (r = e.x, a = e.y), t = ["C", r, a].concat(t.slice(1));
											break;
										case "T":
											"Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(o(e.x, e.y, e.qx, e.qy, t[1], t[2]));
											break;
										case "Q":
											e.qx = t[1], e.qy = t[2], t = ["C"].concat(o(e.x, e.y, t[1], t[2], t[3], t[4]));
											break;
										case "L":
											t = ["C"].concat(i(e.x, e.y, t[1], t[2]));
											break;
										case "H":
											t = ["C"].concat(i(e.x, e.y, t[1], e.y));
											break;
										case "V":
											t = ["C"].concat(i(e.x, e.y, e.x, t[1]));
											break;
										case "Z":
											t = ["C"].concat(i(e.x, e.y, e.X, e.Y))
									}
									return t
								},
								g = function(t, e) {
									if (t[e].length > 7) {
										t[e].shift();
										for (var r = t[e]; r.length;) s[e] = "A", a && (f[e] = "A"), t.splice(e++, 0, ["C"].concat(r.splice(0, 6)));
										t.splice(e, 1), d = Math.max(n.length, a && a.length || 0)
									}
								},
								v = function(t, e, r, i, o) {
									t && e && "M" === t[o][0] && "M" !== e[o][0] && (e.splice(o, 0, ["M", i.x, i.y]), r.bx = 0, r.by = 0, r.x = t[o][1], r.y = t[o][2], d = Math.max(n.length, a && a.length || 0))
								};
							d = Math.max(n.length, a && a.length || 0);
							for (var m = 0; m < d; m++) {
								n[m] && (l = n[m][0]), "C" !== l && (s[m] = l, m && (h = s[m - 1])), n[m] = p(n[m], u, h), "A" !== s[m] && "C" === l && (s[m] = "C"), g(n, m), a && (a[m] && (l = a[m][0]), "C" !== l && (f[m] = l, m && (h = f[m - 1])), a[m] = p(a[m], c, h), "A" !== f[m] && "C" === l && (f[m] = "C"), g(a, m)), v(n, a, u, c, m), v(a, n, c, u, m);
								var y = n[m],
									b = a && a[m],
									x = y.length,
									_ = a && b.length;
								u.x = y[x - 2], u.y = y[x - 1], u.bx = parseFloat(y[x - 4]) || u.x, u.by = parseFloat(y[x - 3]) || u.y, c.bx = a && (parseFloat(b[_ - 4]) || c.x), c.by = a && (parseFloat(b[_ - 3]) || c.y), c.x = a && b[_ - 2], c.y = a && b[_ - 1]
							}
							return a ? [n, a] : n
						}
					}, function(t, e) {
						var n = /,?([a-z]),?/gi;
						t.exports = function(t) {
							return t.join(",").replace(n, "$1")
						}
					}, function(t, e, n) {
						var r = n(488);
						t.exports = function(t, e, n, i, o) {
							if (o) return [
								["M", +t + +o, e],
								["l", n - 2 * o, 0],
								["a", o, o, 0, 0, 1, o, o],
								["l", 0, i - 2 * o],
								["a", o, o, 0, 0, 1, -o, o],
								["l", 2 * o - n, 0],
								["a", o, o, 0, 0, 1, -o, -o],
								["l", 0, 2 * o - i],
								["a", o, o, 0, 0, 1, o, -o],
								["z"]
							];
							var a = [
								["M", t, e],
								["l", n, 0],
								["l", 0, i],
								["l", -n, 0],
								["z"]
							];
							return a.parsePathArray = r, a
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(47),
							o = Object.values ? function(t) {
								return Object.values(t)
							} : function(t) {
								var e = [];
								return r(t, function(n, r) {
									i(t) && "prototype" === r || e.push(n)
								}), e
							};
						t.exports = o
					}, function(t, e) {
						t.exports = function(t, e) {
							return t.hasOwnProperty(e)
						}
					}, function(t, e, n) {
						var r = n(412),
							i = n(30),
							o = n(413);
						t.exports = function(t, e) {
							return t = r(t), i(e, function(e) {
								switch (e[0]) {
									case "t":
										o.translate(t, t, [e[1], e[2]]);
										break;
									case "s":
										o.scale(t, t, [e[1], e[2]]);
										break;
									case "r":
										o.rotate(t, t, e[1]);
										break;
									case "m":
										o.multiply(t, t, e[1]);
										break;
									default:
										return !1
								}
							}), t
						}
					}, function(t, e, n) {
						var r = n(155);
						t.exports = r
					}, function(t, e, n) {
						var r = n(156),
							i = n(414);
						r.angle = function(t, e) {
							var n = r.dot(t, e) / (r.length(t) * r.length(e));
							return Math.acos(i(n, -1, 1))
						}, r.direction = function(t, e) {
							return t[0] * e[1] - e[0] * t[1]
						}, r.angleTo = function(t, e, n) {
							var i = r.angle(t, e),
								o = r.direction(t, e) >= 0;
							return n ? o ? 2 * Math.PI - i : i : o ? i : 2 * Math.PI - i
						}, r.vertical = function(t, e, n) {
							return n ? (t[0] = e[1], t[1] = -1 * e[0]) : (t[0] = -1 * e[1], t[1] = e[0]), t
						}, t.exports = r
					}, function(t, e) {
						var n = Math.PI / 180;
						t.exports = function(t) {
							return n * t
						}
					}, function(t, e) {
						t.exports = parseInt
					}, function(t, e) {
						var n = 180 / Math.PI;
						t.exports = function(t) {
							return n * t
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return (t % e + e) % e
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-5;
							return Math.abs(t - e) < n
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(384);
						t.exports = function(t) {
							var e = [];
							return r(t, function(t) {
								i(e, t) || e.push(t)
							}), e
						}
					}, function(t, e, n) {
						var r = n(64),
							i = Array.prototype.splice;
						t.exports = function(t, e) {
							if (!r(t)) return [];
							for (var n = t ? e.length : 0, o = n - 1; n--;) {
								var a = void 0,
									u = e[n];
								n !== o && u === a || (a = u, i.call(t, u, 1))
							}
							return t
						}
					}, function(t, e) {
						var n = Array.prototype,
							r = n.splice,
							i = n.indexOf,
							o = n.slice;
						t.exports = function(t) {
							for (var e = o.call(arguments, 1), n = 0; n < e.length; n++)
								for (var a = e[n], u = -1;
									(u = i.call(t, a)) > -1;) r.call(t, u, 1);
							return t
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(47),
							o = Object.keys ? function(t) {
								return Object.keys(t)
							} : function(t) {
								var e = [];
								return r(t, function(n, r) {
									i(t) && "prototype" === r || e.push(r)
								}), e
							};
						t.exports = o
					}, function(t, e, n) {
						var r = n(503),
							i = n(141);
						t.exports = function(t, e) {
							var n = r(e),
								o = n.length;
							if (i(t)) return !o;
							for (var a = 0; a < o; a += 1) {
								var u = n[a];
								if (e[u] !== t[u] || !(u in t)) return !1
							}
							return !0
						}
					}, function(t, e) {
						t.exports = function(t) {
							return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
								return setTimeout(t, 16)
							})(t)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							if (t)
								for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
							return t
						}
					}, function(t, e) {
						var n = document.createElement("table"),
							r = document.createElement("tr"),
							i = /^\s*<(\w+|!)[^>]*>/,
							o = {
								tr: document.createElement("tbody"),
								tbody: n,
								thead: n,
								tfoot: n,
								td: r,
								th: r,
								"*": document.createElement("div")
							};
						t.exports = function(t) {
							var e = i.test(t) && RegExp.$1;
							e in o || (e = "*");
							var n = o[e];
							t = t.replace(/(^\s*)|(\s*$)/g, ""), n.innerHTML = "" + t;
							var r = n.childNodes[0];
							return n.removeChild(r), r
						}
					}, function(t, e, n) {
						var r = n(159),
							i = {
								isBetween: function(t, e, n) {
									return t >= e && t <= n
								},
								getLineIntersect: function(t, e, n, r) {
									var o = n.x - t.x,
										a = n.y - t.y,
										u = e.x - t.x,
										c = e.y - t.y,
										s = r.x - n.x,
										f = r.y - n.y,
										l = u * f - c * s,
										h = null;
									if (l * l > .001 * (u * u + c * c) * (s * s + f * f)) {
										var d = (o * f - a * s) / l,
											p = (o * c - a * u) / l;
										i.isBetween(d, 0, 1) && i.isBetween(p, 0, 1) && (h = {
											x: t.x + d * u,
											y: t.y + d * c
										})
									}
									return h
								},
								getIntersectPointRect: function(t, e) {
									var n = t.minX,
										r = t.minY,
										o = t.maxX - t.minX,
										a = t.maxY - t.minY,
										u = [],
										c = {
											x: n + o / 2,
											y: r + a / 2
										};
									u.push({
										x: n,
										y: r
									}), u.push({
										x: n + o,
										y: r
									}), u.push({
										x: n + o,
										y: r + a
									}), u.push({
										x: n,
										y: r + a
									}), u.push({
										x: n,
										y: r
									});
									for (var s = null, f = 1; f < u.length && !(s = i.getLineIntersect(u[f - 1], u[f], c, e)); f++);
									return s
								},
								getIntersectPointCircle: function(t, e, n, r, i) {
									if (Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2)) < i) return null;
									var o = t - n,
										a = e - r,
										u = Math.sign(o),
										c = Math.sign(a),
										s = Math.atan(a / o);
									return {
										x: n + Math.abs(i * Math.cos(s)) * u,
										y: r + Math.abs(i * Math.sin(s)) * c
									}
								},
								applyMatrix: function(t, e, n) {
									void 0 === n && (n = 1);
									var i = [t.x, t.y, n];
									return r.vec3.transformMat3(i, i, e), {
										x: i[0],
										y: i[1]
									}
								},
								invertMatrix: function(t, e, n) {
									void 0 === n && (n = 1);
									var i = r.mat3.invert([], e),
										o = [t.x, t.y, n];
									return r.vec3.transformMat3(o, o, i), {
										x: o[0],
										y: o[1]
									}
								},
								radixSort: function(t, e) {
									var n, r, i, o, a, u, c, s = 10,
										f = 1,
										l = [],
										h = 1;
									for (i = 0; i < t.length; i++) n = e(t[i]), r = (n = parseInt(n, 10)).toString().length, n.toString().length > h && (h = r);
									for (i = 0; i < h; i++, f *= 10, s *= 10) {
										for (o = 0; o < t.length; o++) a = e(t[o]), void 0 === l[a = parseInt(a % s / f, 10)] && (l[a] = []), l[a].push(t[o]);
										for (u = 0, o = 0; o < l.length; o++)
											if (c = void 0, void 0 !== l[o])
												for (c = l[o].shift(); void 0 !== c;) t[u++] = c, c = l[o].shift()
									}
									return t
								},
								getArcOfVectors: function(t, e) {
									var n = t.x,
										r = t.y,
										i = e.x,
										o = e.y,
										a = Math.sqrt(n * n + r * r),
										u = Math.sqrt(i * i + o * o);
									return Math.acos((n * i + r * o) / (a * u))
								}
							};
						t.exports = r.mix({}, r, i)
					}, function(t, e, n) {
						var r = n(160);
						r.registerShapeManager("node", {
							defaultShapeType: "common"
						}), r.registerShapeManager("edge", {
							defaultShapeType: "common"
						}), r.registerShapeManager("group", {
							defaultShapeType: "common"
						}), r.registerShapeManager("guide", {
							defaultShapeType: "common"
						}), n(549), n(546), n(544), n(542), t.exports = r
					}, function(t, e, n) {
						var r = n(151),
							i = n(388),
							o = n(22);
						setTimeout(function() {
							var t = r.track;
							if (r.track) {
								var e = new Image,
									n = {
										pg: document.URL,
										r: (new Date).getTime(),
										g6: !0,
										version: i,
										page_type: "syslog"
									};
								o.isObject(t) && o.mix(n, t);
								var a = encodeURIComponent(JSON.stringify([n]));
								e.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + a
							}
						}, 2e3)
					}, function(t, e, n) {
						var r = n(369),
							i = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this).layout = r.mindmap, n
								}
								return function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t), e
							}(n(368));
						t.exports = i
					}, function(t, e, n) {
						var r = n(369),
							i = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this).layout = r.indented, n
								}
								return function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t), e
							}(n(368));
						t.exports = i
					}, function(t, e, n) {
						var r = n(369),
							i = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this).layout = r.dendrogram, n
								}
								return function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t), e
							}(n(368));
						t.exports = i
					}, function(t, e, n) {
						var r = n(369),
							i = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this).layout = r.compactBox, n
								}
								return function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t), e
							}(n(368));
						t.exports = i
					}, function(t, e, n) {
						var r = n(22),
							i = n(421),
							o = n(419),
							a = function(t) {
								function e(e) {
									var n = r.mix({
										layout: new o.CompactBoxTree({
											getHGap: function() {
												return 10
											},
											getVGap: function() {
												return 10
											}
										})
									}, e);
									return t.call(this, n) || this
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n.initEvent = function() {
									var t = this;
									this.on("afterdrawinner", function() {
										t.get("_sourceData").roots.forEach(function(e) {
											var n = t.find(e.id);
											t._setVisibleByCollapsed(n)
										})
									})
								}, n._executeLayout = function(t) {
									var e = this.get("_sourceData");
									r.isFunction(t) ? t(e.roots, this) : r.isObject(t) && (t.roots = e.roots, t.graph = this, t.execute())
								}, n.getHierarchy = function(t) {
									t = this.getItem(t);
									for (var e = this.get("_dataMap"), n = t.getModel().parent, r = 1; n;) n = e[n].parent, r++;
									return r
								}, n.parseSource = function(t) {
									var e = t.roots,
										n = this.get("_dataMap"),
										i = [],
										o = [];
									return e.forEach(function(t) {
										r.traverseTree(t, function(t, e) {
											t.id || (t.id = r.guid()), e || (e = n[t.parent]), e && (t.parent = e.id, e.id || (e.id = r.guid()), o.push({
												source: e.id,
												target: t.id,
												id: e.id + "-" + t.id
											})), i.push(t)
										}, function(t) {
											return t.children
										}, !0)
									}), {
										nodes: i,
										edges: o
									}
								}, n._setVisibleByCollapsed = function(t) {
									var e = t.getModel();
									t.collapsedParent ? (t.hide(), t.getEdges().forEach(function(t) {
										t.hide()
									}), t.deepEach(function(t) {
										t.hide(), t.getEdges().forEach(function(t) {
											t.hide()
										})
									})) : e.collapsed ? t.deepEach(function(t) {
										t.hide(), t.getEdges().forEach(function(t) {
											t.hide()
										})
									}) : t.deepEach(function(t) {
										t.collapsedParent && (t.hide(), t.getEdges().forEach(function(t) {
											t.hide()
										}))
									})
								}, n.source = function(t) {
									var e = this.parseSource(t);
									this.emit("beforesource"), this.set("_sourceData", t), this.set("_data", e), this.emit("aftersource")
								}, n._setNodeNth = function(t, e) {
									var n = (t = this.getItem(t)).getModel(),
										i = t.getParent().getModel().children;
									r.Array.remove(i, n), i.splice(e, 0, n)
								}, n.getNth = function(t) {
									var e = (t = this.getItem(t)).getModel();
									return t.getParent().getModel().children.indexOf(e)
								}, n.add = function(t, e) {
									var n, i = this.get("_dataMap")[e.parent],
										o = {
											action: "add",
											model: e
										};
									if ("node" === t || "guide" === t) {
										if (this.emit("beforechange", o), "node" === t) {
											if (!i) throw new Error("please set available parent Id !");
											r.isArray(i.children) ? i.children.push(e) : i.children = [e];
											var a = this.parseSource({
												roots: [e]
											});
											this.addItems("node", a.nodes), this.addItems("edge", a.edges), n = this.find(e.id), this._setVisibleByCollapsed(n), r.isNil(e.nth) || this._setNodeNth(n, e.nth), this.find(i.id).forceUpdate()
										} else this.addItems(t, [e]), n = this.find(e.id);
										return o.item = n, this.emit("afterchange", o), this.draw(), n
									}
									console.warn("Tree do not support add type " + t + "!")
								}, n.update = function(t, e) {
									var n = this;
									if (e) {
										var i = (t = this.getItem(t)).getModel(),
											o = r.mix({}, i),
											a = {
												action: "update",
												item: t,
												originModel: o,
												updateModel: e
											};
										if (e && this.emit("beforechange", a), this.updateItem(t, e), t.isNode) {
											if ("collapsed" in e && (e.collapsed ? t.deepEach(function(t) {
													t.hide(), t.getEdges().forEach(function(t) {
														t.hide()
													})
												}) : t.deepEach(function(t) {
													t.show(), t.getEdges(function(e) {
														return e.getModel().target === t.id
													}).forEach(function(t) {
														t.show()
													})
												}, function(t) {
													return t.model.collapsed ? null : t.getChildren()
												})), e.parent && e.parent !== o.parent) {
												var u = this.find(o.parent).getModel(),
													c = this.find(e.parent).getModel(),
													s = this.find(u.id + "-" + o.id),
													f = {
														id: c.id + "-" + o.id,
														source: c.id,
														target: o.id
													};
												r.Array.remove(u.children, i), c.children ? c.children.push(i) : c.children = [i], this.removeItems([s]), this.addItems("edge", [f]), this.find(c.id).forceUpdate()
											}
											r.isArray(e.children) && (o.children && r.each(o.children, function(t) {
												var e = n.find(t.id),
													r = [e];
												e.getEdges().forEach(function(t) {
													r.push(t)
												}), n.removeItems(r)
											}), r.each(e.children, function(t) {
												var e = n.parseSource({
														roots: [t]
													}),
													i = r.isNil(t.id) ? r.guid() : t.id;
												n.addItems("node", e.nodes), n.addItems("edge", e.edges), !t.parent && n.addItems("edge", [{
													id: o.id + "-" + i,
													source: o.id,
													target: i
												}])
											})), r.isNil(e.nth) || this._setNodeNth(t, e.nth);
											var l = this.find(i.parent);
											l && l.forceUpdate()
										}
										return this.emit("afterchange", a), this.draw(), this
									}
								}, n.remove = function(t) {
									var e = this.get("_dataMap"),
										n = [];
									if ((t = this.getItem(t)) && !t.destroyed) {
										var i = {
											action: "remove",
											item: t
										};
										if (this.emit("beforechange", i), n.push(t), t.getEdges().forEach(function(t) {
												n.push(t)
											}), "node" === t.type) {
											var o = t.getModel(),
												a = e[o.parent];
											t.deepEach(function(t) {
												n.push(t), t.getEdges().forEach(function(t) {
													n.push(t)
												})
											}), r.Array.remove(a.children, o), this.find(a.id).forceUpdate()
										}
										return this.removeItems(r.uniq(n)), this.emit("afterchange", i), this.draw(), this
									}
								}, n.getRoots = function() {
									var t = this;
									return this.getSource().roots.map(function(e) {
										return t.find(e.id)
									})
								}, n.save = function() {
									var t = {
										roots: r.cloneDeep(this.getSource().roots),
										guides: this.getGuides().map(function(t) {
											return t.getModel()
										})
									};
									return 0 === t.roots.length && delete t.roots, 0 === t.guides.length && delete t.guides, t
								}, e
							}(i);
						t.exports = a
					}, function(t, e, n) {
						var r = n(22),
							i = {
								INIT: "_initForceFit"
							};
						i.AUGMENT = {
							_initForceFit: function() {
								var t = this.get("width"),
									e = this.get("height");
								return t || e ? t ? e ? void 0 : (this.forceFit("height"), void this._bindForceEvent("height")) : (this.forceFit("width"), void this._bindForceEvent("width")) : (this.forceFit(), void this._bindForceEvent())
							},
							_bindForceEvent: function(t) {
								var e = this,
									n = this._getTimer("forceFit"),
									r = function() {
										var r = setTimeout(function() {
											e.forceFit(t)
										}, 200);
										n && clearTimeout(n), e._setTimer("forceFit", r)
									};
								window.addEventListener("resize", r), this.set("_windowForceResizeEvent", r)
							},
							forceFit: function(t) {
								var e = this.get("_containerDOM"),
									n = this.get("width"),
									i = this.get("height"),
									o = r.getHeight(e),
									a = r.getWidth(e);
								return "width" === t ? (this.changeSize(a, i), this) : "height" === t ? (this.changeSize(n, o), this) : (this.changeSize(a, o), this)
							}
						}, t.exports = i
					}, function(t, e, n) {
						var r = n(22),
							i = {
								CFG: {
									fitView: void 0,
									fitViewPadding: 10,
									minZoom: .2,
									maxZoom: 10
								}
							};
						i.AUGMENT = {
							getBBox: function() {
								var t = this.get("_itemGroup"),
									e = this.get("_itemMap"),
									n = t.get("children");
								return n.length > 0 ? (n = n.filter(function(t) {
									var n = e[t.id];
									return !!n && !1 !== n.getShapeObj().bboxCalculation
								}), r.getChildrenBBox(n)) : {
									minX: 0,
									minY: 0,
									maxX: this.get("width"),
									maxY: this.get("height")
								}
							},
							getFitViewPadding: function() {
								return r.toAllPadding(this.get("fitViewPadding"))
							},
							setFitView: function(t) {
								if (!t) return this;
								if ("autoZoom" === t) return this.autoZoom(), this;
								var e = this.getFitViewPadding(),
									n = this.get("width"),
									i = this.get("height"),
									o = this.getBBox(),
									a = o.maxX - o.minX,
									u = o.maxY - o.minY,
									c = {
										x: 0,
										y: 0,
										width: n,
										height: i
									},
									s = r.getNineBoxPosition(t, c, a, u, e),
									f = [1, 0, 0, 0, 1, 0, 0, 0, 1];
								r.mat3.translate(f, f, [-o.minX + s.x, -o.minY + s.y]), this.updateMatrix(f)
							},
							_getZoomRatio: function(t) {
								var e = this.get("maxZoom"),
									n = this.get("minZoom");
								return t < n && (t = n), t > e && (t = e), t
							},
							autoZoom: function(t) {
								var e = this;
								t || (t = this.getFitViewPadding());
								var n = this.get("width"),
									i = this.get("height"),
									o = this.getBBox(),
									a = r.getAutoZoomMatrix({
										minX: 0,
										minY: 0,
										maxX: n,
										maxY: i
									}, o, t, function(t) {
										return e._getZoomRatio(t)
									});
								this.updateMatrix(a)
							},
							getZoom: function() {
								return this.getMatrix()[0]
							},
							updateMatrix: function(t) {
								var e = this.getMatrix(),
									n = {
										updateMatrix: t,
										originMatrix: e
									},
									r = e[0] !== t[0];
								return this.emit("beforeviewportchange", n), r && this.emit("beforezoom", n), this.setMatrix(t), r && this.emit("afterzoom", n), this.emit("afterviewportchange", n), this.draw(), this
							},
							zoom: function(t, e) {
								if (!r.isNumber(t)) {
									e = this._getZoomRatio(e);
									var n = this.get("_rootGroup"),
										i = r.clone(n.getMatrix()),
										o = i[6] + i[0] * t.x - e * t.x,
										a = i[7] + i[0] * t.y - e * t.y;
									return i[6] = 0, i[7] = 0, i[0] = e, i[4] = e, r.mat3.translate(i, i, [o, a]), this.updateMatrix(i), this
								}
								var u = this.get("width"),
									c = this.get("height");
								this.zoomByDom({
									x: u / 2,
									y: c / 2
								}, t)
							},
							zoomByDom: function(t, e) {
								var n = this.getPoint(t);
								return this.zoom(n, e), this
							},
							translate: function(t, e) {
								var n = this.get("_rootGroup").getMatrix();
								return r.mat3.translate(n, n, [t, e]), this.updateMatrix(n), this
							},
							translateByDom: function(t, e) {
								var n = this.get("_rootGroup").getMatrix()[0];
								return this.translate(t / n, e / n), this
							},
							getMatrix: function() {
								return this.get("_rootGroup").getMatrix()
							},
							setMatrix: function(t) {
								this.get("_rootGroup").setMatrix(t)
							},
							getPoint: function(t) {
								return this.getPointByDom(t)
							},
							getPointByDom: function(t) {
								var e = this.get("_rootGroup").getMatrix();
								return r.invertMatrix(t, e)
							},
							getPointByCanvas: function(t) {
								var e = this.get("_canvas").get("pixelRatio");
								return this.getPoint({
									x: t.x / e,
									y: t.y / e
								})
							},
							getPointByClient: function(t) {
								var e = this.get("_canvas").getPointByClient(t.x, t.y);
								return this.getPointByCanvas(e)
							},
							getDomPoint: function(t) {
								var e = this.get("_rootGroup").getMatrix();
								return r.applyMatrix(t, e)
							},
							getCanvasPoint: function(t) {
								var e = this.get("_canvas").get("pixelRatio"),
									n = this.getDomPoint(t);
								return {
									x: n.x * e,
									y: n.y * e
								}
							},
							getClientPoint: function(t) {
								var e = this.getCanvasPoint(t),
									n = this.get("_canvas").getClientByPoint(e.x, e.y);
								return {
									x: n.clientX,
									y: n.clientY
								}
							},
							focus: function(t) {
								if (r.isString(t) && (t = this.find(t)), t) {
									var e = t.getCenter();
									this.focusPoint(e)
								}
								return this
							},
							focusPoint: function(t) {
								var e = this.get("_rootGroup").getMatrix(),
									n = this.get("width"),
									r = this.get("height"),
									i = -e[6] + n / 2 - e[0] * t.x,
									o = -e[7] + r / 2 - e[0] * t.y;
								return this.translate(i, o), this
							},
							focusPointByDom: function(t) {
								var e = this.getPoint(t);
								return this.focusPoint(e), this
							}
						}, t.exports = i
					}, function(t, e) {
						t.exports = {
							INIT: "_initDraw",
							AUGMENT: {
								_initDraw: function() {
									var t, e = this,
										n = this.get("_controllers"),
										r = this.get("_canvas"),
										i = this.get("_animateDraw"),
										o = n.animate,
										a = function() {
											r.draw()
										};
									t = i ? function() {
										e.get("forcePreventAnimate") ? (o.updateStash(), a()) : i()
									} : a, this.draw = t
								}
							}
						}
					}, function(t, e, n) {
						var r = n(370),
							i = n(22),
							o = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this)._init(), n
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n._init = function() {
									var t = this;
									this.graph.on("afteritemdraw", function(e) {
										t.cacheKeyFrame(e.item)
									})
								}, n.cacheKeyFrame = function(t) {
									var e = this.keyFrameCache,
										n = t.getGraphicGroup();
									t.isEdge && n.setMatrix([1, 0, 0, 0, 1, 0, 0, 0, 1]), n.deepEach(function(n) {
										var r = n.gid,
											o = {
												matrix: i.cloneDeep(n.getMatrix())
											};
										n.isItemContainer && (o.enterAnimate = t.getEnterAnimate(), o.leaveAnimate = t.getLeaveAnimate()), n.isShape && (o.attrs = i.cloneDeep(n.attr())), o.item = t, e[r] = o
									}, !0)
								}, n._compare = function() {
									var t = this.stash0,
										e = this.stash1,
										n = [],
										r = [],
										o = [];
									i.each(e, function(e, r) {
										t[r] ? e.element.get("type") === t[r].element.get("type") && o.push(r) : n.push(r)
									}), i.each(t, function(t, n) {
										e[n] || r.push(n)
									}), this.enterElements = n, this.leaveElements = r, this.updateElements = o
								}, n._addTween = function() {
									var t = this.graph.get("_updateAnimate"),
										e = this.enterElements,
										n = this.leaveElements,
										r = this.updateElements,
										o = this.stash0,
										a = this.stash1,
										u = this.keyFrameCache;
									e.forEach(function(t) {
										var e = u[t],
											n = e.enterAnimate;
										n && n(e.item, o.element, a.element)
									}), i.each(n, function(t) {
										var e = u[t],
											n = e.leaveAnimate;
										if (n) {
											var r = o[t].element;
											r.getParent().add(r), n(e.item, o, a)
										}
									}), i.each(r, function(e) {
										var n = u[e],
											r = a[e],
											c = o[e],
											s = r.element,
											f = c.element,
											l = "none";
										r.visible && !c.visible ? l = "show" : !r.visible && c.visible && (l = "hide"), c.attrsStash && s.attr(c.attrsStash), s.setMatrix(i.cloneDeep(c.matrixStash)), t(s, i.mix({}, n.attrs, {
											matrix: n.matrix
										}), l), f !== s && f.remove()
									})
								}, n.getDefaultCfg = function() {
									return {
										graph: null,
										canvases: null,
										stash0: null,
										stash1: null,
										keyFrameCache: {}
									}
								}, n.run = function() {
									this.graph.destroyed || (this.updateStash(), this.count < 5e3 && (this._compare(), this._addTween()), i.each(this.canvases, function(t) {
										t.draw()
									}))
								}, n.updateStash = function() {
									var t = this.canvases,
										e = this.elementsStash,
										n = {},
										r = 0;
									e = e || {}, i.each(t, function(t) {
										r += function t(e, n, r) {
											var o = n.get("children");
											return i.each(o, function(n) {
												r++;
												var o = n.gid;
												if (n.isGroup && (r = t(e, n, r)), !i.isNil(o)) {
													var a = {
														matrixStash: i.cloneDeep(n.getMatrix()),
														element: n,
														visible: n.get("visible")
													};
													n.isShape && (a.attrsStash = i.cloneDeep(n.attr())), e[o] = a
												}
											}), r
										}(n, t, 0)
									}), this.elementsStash = n, this.stash0 = e, this.stash1 = n, this.count = r
								}, e
							}(r);
						t.exports = o
					}, function(t, e, n) {
						var r = n(22),
							i = n(151),
							o = n(519),
							a = {
								INIT: "_initAnimate"
							};
						a.CFG = {
							animate: !1,
							forcePreventAnimate: !1,
							_enterAnimate: function(t) {
								var e = t.getGraphicGroup();
								if (t.getKeyShape()) {
									var n = t.getBBox(),
										i = (n.minX + n.maxX) / 2,
										o = (n.minY + n.maxY) / 2;
									r.scaleIn(e, i, o)
								}
							},
							_leaveAnimate: function(t) {
								var e = t.getGraphicGroup();
								if (t.getKeyShape()) {
									var n = t.getBBox(),
										i = (n.minX + n.maxX) / 2,
										o = (n.minY + n.maxY) / 2;
									r.scaleOut(e, i, o, function() {
										e.remove()
									})
								} else e.remove()
							},
							_updateAnimate: function(t, e, n) {
								if ("show" === n) {
									var o = t.item.getBBox(),
										a = (o.minX + o.maxX) / 2,
										u = (o.minY + o.maxY) / 2;
									r.scaleIn(t, a, u)
								} else if ("hide" === n) {
									t.show();
									var c = t.item.getBBox(),
										s = (c.minX + c.maxX) / 2,
										f = (c.minY + c.maxY) / 2;
									r.scaleOut(t, s, f, function() {
										t.hide()
									})
								} else t.animate(e, i.updateDuration, i.updateEasing)
							}
						}, a.AUGMENT = {
							_initAnimate: function() {
								var t, e = this.get("_controllers"),
									n = this.get("animate"),
									i = this.get("_canvas");
								if (n) {
									t = new o({
										canvases: [i],
										graph: this
									}), e.animate = t;
									var a = r.debounce(function() {
										t.run()
									}, 450);
									this.set("_animateDraw", a)
								}
							}
						}, t.exports = a
					}, function(t, e, n) {
						var r = n(22),
							i = {
								INIT: "_initFilter",
								CFG: {
									filters: []
								}
							};
						i.AUGMENT = {
							_initFilter: function() {
								var t = this,
									e = this.get("filters");
								r.isFunction(e) && this.set("filters", [e]), this.on("afterchange", function(n) {
									var r = n.action;
									e.length > 0 && "changeData" === r && !t.destroyed && t.filter()
								})
							},
							addFilter: function(t) {
								return this.get("filters").push(t), t
							},
							removeFilter: function(t) {
								var e = this.get("filters");
								this.set("filters", r.filter(e, t))
							},
							filter: function() {
								this.emit("beforefilter");
								var t = this.get("filters"),
									e = this.getItems(),
									n = this._getFilterItems();
								t.forEach(function(t) {
									n = n.filter(t)
								}), e.forEach(function(t) {
									-1 === n.indexOf(t) ? t.hide() : t.show()
								}), this.draw(), this.emit("afterfilter")
							},
							_getFilterItems: function() {
								return this.getItems().filter(function(t) {
									return !1 !== t.getShapeObj().filter
								})
							}
						}, t.exports = i
					}, function(t, e, n) {
						var r = n(22),
							i = n(422),
							o = {
								CFG: {
									modes: {
										default: []
									},
									mode: "default",
									_eventStash: {}
								},
								INIT: "_initModes"
							};
						o.AUGMENT = {
							_initModes: function() {
								var t = this.get("mode");
								this.changeMode(t)
							},
							changeMode: function(t) {
								var e = this.get("modes");
								r.isEmpty(e) || r.isEmpty(e[t]) || (i.resetMode(e[t], this), this.set("mode", t))
							},
							addBehaviour: function(t) {
								var e = this.get("modes"),
									n = this.get("mode");
								r.isEmpty(e[n]) && (e[n] = []);
								var o = e[n],
									a = [].concat(t);
								return r.each(a, function(t) {
									-1 === o.indexOf(t) && o.push(t)
								}), i.resetMode(e[n], this), this
							},
							removeBehaviour: function(t) {
								var e = this.get("modes"),
									n = this.get("mode"),
									o = e[n];
								if (!r.isEmpty(o)) {
									var a = [].concat(t);
									return o = o.filter(function(t) {
										return -1 === a.indexOf(t)
									}), e[n] = o, i.resetMode(o, this), this
								}
							},
							behaviourOn: function(t, e) {
								var n = this._eventStash;
								n[t] || (n[t] = []), n[t].push(e), this.on(t, e)
							},
							_off: function() {
								var t = this,
									e = this._eventStash;
								r.each(e, function(e, n) {
									r.each(e, function(e) {
										t.off(n, e)
									})
								}), this._eventStash = {}
							}
						}, t.exports = o
					}, function(t, e, n) {
						var r = n(370),
							i = n(22),
							o = {
								MOUSEMOVE: "mousemove",
								MOUSEDOWN: "mousedown",
								MOUSEUP: "mouseup",
								MOUSEENTER: "mouseenter",
								MOUSELEAVE: "mouseleave",
								CLICK: "click",
								DBLCLICK: "dblclick",
								DRAGSTART: "dragstart",
								DRAG: "drag",
								DRAGENTER: "dragenter",
								DRAGLEAVE: "dragleave",
								DRAGEND: "dragend",
								DROP: "drop",
								CONTEXTMENU: "contextmenu",
								MOUSEWHEEL: "mousewheel",
								KEYDOWN: "keydown",
								KEYUP: "keyup",
								KEYPRESS: "keypress"
							},
							a = [o.DBLCLICK, o.MOUSEDOWN, o.MOUSEUP, o.MOUSEENTER, o.MOUSELEAVE, o.MOUSEMOVE, o.CONTEXTMENU, o.MOUSEWHEEL],
							u = [o.KEYDOWN, o.KEYUP, o.KEYPRESS],
							c = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this)._domEvents = [], n._initEventStates(), n._registerEvents(), n
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n._initEventStates = function() {
									this._pressing = !1, this._dragging = !1, this._currentEventObj = {}, this._dragEventObj = {}
								}, n._registerEvents = function() {
									this._registerMouseEvents(), this._registerKeyboardEvents()
								}, n._registerKeyboardEvents = function() {
									var t = this.graph,
										e = t.getKeyboardEventWrapper(),
										n = this._domEvents,
										r = t.get("keyboardEnable");
									i.each(u, function(o) {
										n.push(i.addEventListener(e, o, function(e) {
											var n = !0;
											i.isFunction(r) && (n = r()), n && t.emit(o, {
												domEvent: e
											})
										}))
									})
								}, n._registerMouseEvents = function() {
									var t = this,
										e = this,
										n = this.graph.getMouseEventWrapper(),
										r = this._domEvents;
									i.each(a, function(a) {
										r.push(i.addEventListener(n, a, function(n) {
											if (n.type !== o.MOUSEENTER || !n.fromElement || n.fromElement.parentNode && ! function(t, e) {
													for (var n = t.parentNode; n;) {
														if ("foreignObject" === n.tagName) return !0;
														n = n.parentNode
													}
													return !1
												}(n.fromElement)) {
												var r = t._currentEventObj;
												t._oldEventObj = r, t._processEventObj(n);
												var a = t._currentEventObj;
												e._simulateEvents(n, r, a), -1 !== [o.MOUSELEAVE, o.MOUSEENTER].indexOf(n.type) && e._triggerEvent("canvas:" + n.type), e._triggerEvent(n.type), n.type === o.MOUSELEAVE && (t._dragging && e._triggerEvent(o.DRAGLEAVE, i.mix({}, a, {
													item: null,
													shape: null,
													currentItem: t._dragEventObj.item,
													currentShape: t._dragEventObj.shape
												})), e._initEventStates())
											}
										}))
									})
								}, n.destroy = function() {
									var t = this._domEvents;
									i.each(t, function(t) {
										t && t.remove()
									}), this._domEvents = null
								}, n._triggerEvent = function(t, e) {
									if (e || (e = "mouseleave" === t ? this._oldEventObj : this._currentEventObj), "mousedown" === t && (e.button = this._button), e._type = t, this.emitGraphEvent(t, e), -1 === ["canvas:" + o.MOUSELEAVE, "canvas:" + o.MOUSEENTER].indexOf(t)) {
										var n = e.shape && e.shape.eventPreFix;
										if (-1 !== [o.DRAGSTART, o.DRAG, o.DRAGEND].indexOf(t) && (n = e.currentShape && e.currentShape.eventPreFix), n) {
											var r = n + ":" + t;
											e._type = r, i.isBoolean(e._isItemChange) ? e._isItemChange && this.emitGraphEvent(r, e) : this.emitGraphEvent(r, e)
										}
									}
								}, n.emitGraphEvent = function(t, e) {
									this.graph.emit(t, e)
								}, n._getDistanceToPress = function(t) {
									return Math.pow(t.clientX - this._pressX, 2) + Math.pow(t.clientY - this._pressY, 2)
								}, n._simulateEvents = function(t, e, n) {
									void 0 === e && (e = {}), void 0 === n && (n = {});
									var r = this._dragEventObj.item,
										a = this._dragEventObj.shape;
									switch (t.type) {
										case o.MOUSEDOWN:
											this._pressing = !0, this._button = t.button, this._pressX = t.clientX, this._pressY = t.clientY;
											break;
										case o.MOUSEMOVE:
											if (this._dragging) {
												if (this._triggerEvent(o.DRAG, i.mix({}, n, {
														button: this._button,
														currentItem: r,
														currentShape: a
													})), e.shape !== n.shape) {
													var u = this._isItemChange(e, n);
													e.shape && this._triggerEvent(o.DRAGLEAVE, i.mix({}, n, {
														button: this._button,
														item: e.item,
														shape: e.shape,
														toItem: n.item,
														toShape: n.shape,
														currentItem: r,
														currentShape: a,
														_isItemChange: u
													})), n.shape && this._triggerEvent(o.DRAGENTER, i.mix({}, n, {
														button: this._button,
														currentItem: r,
														currentShape: a,
														fromItem: e.item,
														fromShape: e.shape,
														_isItemChange: u
													}))
												}
											} else this._pressing && this._getDistanceToPress(t) > 9 && (this._dragging = !0, this._dragEventObj = n, r = this._dragEventObj.item, a = this._dragEventObj.shape, this._triggerEvent(o.DRAGSTART, i.mix({}, n, {
												button: this._button,
												currentItem: r,
												currentShape: a
											})));
											if (e.shape !== n.shape) {
												var c = this._isItemChange(e, n);
												e.shape && this._triggerEvent(o.MOUSELEAVE, i.mix({}, n, {
													item: e.item,
													shape: e.shape,
													toItem: n.item,
													toShape: n.shape,
													_isItemChange: c
												})), n.shape && this._triggerEvent(o.MOUSEENTER, i.mix({}, n, {
													fromtItem: e.item,
													fromShape: e.shape,
													_isItemChange: c
												}))
											}
											break;
										case o.MOUSEUP:
											!this._dragging && this._pressing ? this._triggerEvent(o.CLICK, i.mix({}, n, {
												button: this._button
											})) : (this._triggerEvent(o.DROP, i.mix({}, n, {
												button: this._button,
												currentItem: r,
												currentShape: a
											})), this._triggerEvent(o.DRAGEND, i.mix({}, n, {
												button: this._button,
												currentItem: r,
												currentShape: a
											}))), this._pressing = !1, this._dragging = !1, this._dragEventObj = {};
											break;
										default:
											return
									}
								}, n._isItemChange = function(t, e) {
									var n = t.shape,
										r = e.shape,
										o = n && r && (n.get("isItemChange") || r.get("isItemChange"));
									return o ? o(r, n) : i.isObject(t.item) && i.isObject(e.item) ? t.item.id !== e.item.id : t.item !== e.item
								}, n._processEventObj = function(t) {
									var e = this.graph.get("_canvas"),
										n = this._getEventObj(t, e);
									this._currentEventObj = n
								}, n._parsePoint = function(t, e) {
									return this.graph.getPointByCanvas({
										x: t,
										y: e
									})
								}, n._getEventObj = function(t, e) {
									var n = this.graph,
										r = t.clientX,
										i = t.clientY,
										o = e.getPointByClient(r, i),
										a = this._parsePoint(o.x, o.y),
										u = e.getShape(o.x, o.y),
										c = n.getItemByShape(u),
										s = e.get("pixelRatio");
									return {
										item: c,
										shape: u,
										x: a.x,
										y: a.y,
										domX: o.x / s,
										domY: o.y / s,
										domEvent: t
									}
								}, e
							}(r);
						t.exports = c
					}, function(t, e, n) {
						var r = {},
							i = n(523);
						r.INIT = "_initEvents", r.CFG = {
							keyboardEnable: !0
						}, r.AUGMENT = {
							_initEvents: function() {
								this.get("_controllers").events = new i({
									graph: this
								})
							}
						}, t.exports = r
					}, function(t, e, n) {
						var r = n(22),
							i = {};
						i.AUGMENT = {
							find: function(t) {
								return this.get("_itemMap")[t]
							},
							getNodes: function() {
								return this.get("_itemMap")._nodes
							},
							getEdges: function() {
								return this.get("_itemMap")._edges
							},
							getGroups: function() {
								return this.get("_itemMap")._groups
							},
							getGuides: function() {
								return this.get("_itemMap")._guides
							},
							getItems: function() {
								var t = this.get("_itemMap"),
									e = [];
								return r.each(t, function(t) {
									t.type && e.push(t)
								}), e
							},
							getItemByShape: function(t) {
								return t ? this.getItem(t.id) : null
							},
							getItem: function(t) {
								var e = this.get("_itemMap");
								return r.isObject(t) ? t.destroyed && (t = e[t.id]) : t = e[t], t
							}
						}, t.exports = i
					}, function(t, e, n) {
						var r = n(370),
							i = n(22),
							o = ["color", "shape", "size", "label", "style"],
							a = function(t) {
								function e(e) {
									var n;
									return (n = t.call(this, e) || this)._init(), n
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n._init = function() {
									var t = this,
										e = {};
									i.each(o, function(n) {
										e[n] = {}, t[n] = function(r) {
											return e[n].input = r, t
										}
									}), this.channels = e
								}, n.addChannels = function(t) {
									var e = this.channels;
									i.each(t, function(t, n) {
										e[n] = {
											input: t
										}
									})
								}, n.mapping = function(t) {
									var e = this.channels;
									i.each(e, function(e, n) {
										i.isFunction(e.input) ? t[n] = e.input(t) : e.input && (t[n] = e.input)
									})
								}, e
							}(r);
						t.exports = a
					}, function(t, e, n) {
						var r = n(526),
							i = {
								INIT: "_initMapper"
							};
						i.AUGMENT = {
							_initMapper: function() {
								var t = this.get("_controllers");
								t.nodeMapper = new r({
									graph: this
								}), t.edgeMapper = new r({
									graph: this
								}), t.groupMapper = new r({
									graph: this
								}), t.guideMapper = new r({
									graph: this
								})
							},
							node: function(t) {
								var e = this._getController("nodeMapper");
								return t && e.addChannels(t), e
							},
							edge: function(t) {
								var e = this._getController("edgeMapper");
								return t && e.addChannels(t), e
							},
							group: function(t) {
								var e = this._getController("groupMapper");
								return t && e.addChannels(t), this._getController("groupMapper")
							},
							guide: function(t) {
								var e = this._getController("guideMapper");
								return t && e.addChannels(t), this._getController("guideMapper")
							}
						}, t.exports = i
					}, function(t, e, n) {
						var r = function(t) {
							function e(e) {
								var n;
								return (n = t.call(this, e) || this)._init(), n
							}! function(t, e) {
								t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
							}(e, t);
							var n = e.prototype;
							return n.getDefaultCfg = function() {
								return {
									graph: null,
									auto: !0,
									processor: null
								}
							}, n._init = function() {
								var t = this,
									e = this.graph;
								e.on("afteritemdraw", function(t) {
									var e = t.item,
										n = e.getKeyShape(),
										r = e.getModel();
									if (e.isEdge) r.lineWidth = n.attr("lineWidth");
									else if (e.isNode || e.isGroup) {
										var i = e.getBBox();
										r.width = i.width, r.height = i.height
									}
								}), e.on("afterchange", function(n) {
									var r = n.action;
									"once" === t.auto ? "changeData" === r && !e.destroyed && t.layout() : t.auto && !e.destroyed && t.layout()
								})
							}, n.changeLayout = function(t) {
								this.processor = t, this.layout()
							}, n.layout = function() {
								var t = this.graph,
									e = this.getLayoutProcessor();
								t.emit("beforelayout");
								var n = t.getNodes().filter(function(t) {
										return t.isVisible()
									}).map(function(t) {
										return t.getModel()
									}),
									r = t.getEdges().filter(function(t) {
										return t.isVisible()
									}).map(function(t) {
										return t.getModel()
									}),
									i = t.getGroups().filter(function(t) {
										return t.isVisible()
									}).map(function(t) {
										return t.getModel()
									});
								t._executeLayout(e, n, r, i), t.updateNodePosition(), t.emit("afterlayout")
							}, n.getLayoutProcessor = function() {
								return this.processor ? this.processor : this.processer
							}, e
						}(n(370));
						t.exports = r
					}, function(t, e, n) {
						var r = n(22),
							i = n(528),
							o = {
								CFG: {
									layout: void 0
								},
								INIT: "_initLayout"
							};
						o.AUGMENT = {
							_initLayout: function() {
								var t = this.get("_controllers"),
									e = this._getLayoutCfg();
								e && (t.layout = new i(r.mix({
									graph: this
								}, e)))
							},
							_getLayoutCfg: function() {
								var t = this.get("layout");
								return r.isPlainObject(t) ? t : r.isFunction(t) || r.isObject(t) ? {
									processor: t
								} : null
							},
							layout: function() {
								return this._getController("layout").layout(), this
							},
							updateNodePosition: function(t) {
								var e = this.getGuides(),
									n = [],
									i = [];
								return t ? (t.forEach(function(t) {
									t.getEdges().forEach(function(t) {
										i.push(t)
									});
									var e = t.getParent();
									e && n.push(e)
								}), i = r.uniq(i), n = r.uniq(n)) : (t = this.getNodes(), n = this.getGroups(), i = this.getEdges()), t.forEach(function(t) {
									t.layoutUpdate()
								}), n.forEach(function(t) {
									t.layoutUpdate()
								}), i.forEach(function(t) {
									t.layoutUpdate()
								}), e.forEach(function(t) {
									t.layoutUpdate()
								}), this.draw(), this
							},
							changeLayout: function(t) {
								return this._getController("layout").changeLayout(t), this
							},
							getLayout: function() {
								return this._getController("layout").getLayoutProcessor()
							}
						}, t.exports = o
					}, function(t, e, n) {
						! function(e) {
							function n(t, e) {
								return function(t) {
									h.impl.options.imagePlaceholder = void 0 === t.imagePlaceholder ? l.imagePlaceholder : t.imagePlaceholder, h.impl.options.cacheBust = void 0 === t.cacheBust ? l.cacheBust : t.cacheBust
								}(e = e || {}), Promise.resolve(t).then(function(t) {
									return function(t, e, n) {
										return Promise.resolve(t).then(function(t) {
											return t instanceof HTMLCanvasElement ? u.makeImage(t.toDataURL()) : t.cloneNode(!1)
										}).then(function(n) {
											return function(t, e, n) {
												var r = t.childNodes;
												return 0 === r.length ? Promise.resolve(e) : function(t, e, n) {
													var r = Promise.resolve();
													return e.forEach(function(e) {
														r = r.then(function() {
															return i(e, n)
														}).then(function(e) {
															e && t.appendChild(e)
														})
													}), r
												}(e, u.asArray(r), n).then(function() {
													return e
												})
											}(t, n, e)
										}).then(function(e) {
											return function(t, e) {
												return e instanceof Element ? Promise.resolve().then(function() {
													! function(t, e) {
														t.cssText ? e.cssText = t.cssText : function(t, e) {
															u.asArray(t).forEach(function(n) {
																e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
															})
														}(t, e)
													}(window.getComputedStyle(t), e.style)
												}).then(function() {
													[":before", ":after"].forEach(function(n) {
														! function(n) {
															var r = window.getComputedStyle(t, n),
																i = r.getPropertyValue("content");
															if ("" !== i && "none" !== i) {
																var o = u.uid();
																e.className = e.className + " " + o;
																var a = document.createElement("style");
																a.appendChild(function(t, e, n) {
																	var r = ".0:" + e,
																		i = n.cssText ? function(t) {
																			var e = t.getPropertyValue("content");
																			return t.cssText + " content: " + e + ";"
																		}(n) : function(t) {
																			return u.asArray(t).map(function(e) {
																				return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
																			}).join("; ") + ";"
																		}(n);
																	return document.createTextNode(r + "{" + i + "}")
																}(0, n, r)), e.appendChild(a)
															}
														}(n)
													})
												}).then(function() {
													t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
												}).then(function() {
													e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach(function(t) {
														var n = e.getAttribute(t);
														n && e.style.setProperty(t, n)
													}))
												}).then(function() {
													return e
												}) : e
											}(t, e)
										})
									}(t, e.filter)
								}).then(o).then(a).then(function(t) {
									return e.bgcolor && (t.style.backgroundColor = e.bgcolor), e.width && (t.style.width = e.width + "px"), e.height && (t.style.height = e.height + "px"), e.style && Object.keys(e.style).forEach(function(n) {
										t.style[n] = e.style[n]
									}), t
								}).then(function(n) {
									return function(t, e, n) {
										return Promise.resolve(t).then(function(t) {
											return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(t)
										}).then(u.escapeXhtml).then(function(t) {
											return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>"
										}).then(function(t) {
											return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + n + '">' + t + "</svg>"
										}).then(function(t) {
											return "data:image/svg+xml;charset=utf-8," + t
										})
									}(n, e.width || u.width(t), e.height || u.height(t))
								})
							}

							function r(t, e) {
								return n(t, e).then(u.makeImage).then(u.delay(100)).then(function(n) {
									var r = function(t) {
										var n = document.createElement("canvas");
										if (n.width = e.width || u.width(t), n.height = e.height || u.height(t), e.bgcolor) {
											var r = n.getContext("2d");
											r.fillStyle = e.bgcolor, r.fillRect(0, 0, n.width, n.height)
										}
										return n
									}(t);
									return r.getContext("2d").drawImage(n, 0, 0), r
								})
							}

							function i(t, e, n) {
								function r(t, e, n) {
									var r = t.childNodes;
									return 0 === r.length ? Promise.resolve(e) : function(t, e, n) {
										var r = Promise.resolve();
										return e.forEach(function(e) {
											r = r.then(function() {
												return i(e, n)
											}).then(function(e) {
												e && t.appendChild(e)
											})
										}), r
									}(e, u.asArray(r), n).then(function() {
										return e
									})
								}
								return n || !e || e(t) ? Promise.resolve(t).then(function(t) {
									return t instanceof HTMLCanvasElement ? u.makeImage(t.toDataURL()) : t.cloneNode(!1)
								}).then(function(n) {
									return r(t, n, e)
								}).then(function(e) {
									return function(t, e) {
										return e instanceof Element ? Promise.resolve().then(function() {
											! function(t, e) {
												t.cssText ? e.cssText = t.cssText : function(t, e) {
													u.asArray(t).forEach(function(n) {
														e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
													})
												}(t, e)
											}(window.getComputedStyle(t), e.style)
										}).then(function() {
											[":before", ":after"].forEach(function(n) {
												! function(n) {
													var r = window.getComputedStyle(t, n),
														i = r.getPropertyValue("content");
													if ("" !== i && "none" !== i) {
														var o = u.uid();
														e.className = e.className + " " + o;
														var a = document.createElement("style");
														a.appendChild(function(t, e, n) {
															var r = "." + t + ":" + e,
																i = n.cssText ? function(t) {
																	var e = t.getPropertyValue("content");
																	return t.cssText + " content: " + e + ";"
																}(n) : function(t) {
																	return u.asArray(t).map(function(e) {
																		return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
																	}).join("; ") + ";"
																}(n);
															return document.createTextNode(r + "{" + i + "}")
														}(o, n, r)), e.appendChild(a)
													}
												}(n)
											})
										}).then(function() {
											t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
										}).then(function() {
											e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e instanceof SVGRectElement && ["width", "height"].forEach(function(t) {
												var n = e.getAttribute(t);
												n && e.style.setProperty(t, n)
											}))
										}).then(function() {
											return e
										}) : e
									}(t, e)
								}) : Promise.resolve()
							}

							function o(t) {
								return s.resolveAll().then(function(e) {
									var n = document.createElement("style");
									return t.appendChild(n), n.appendChild(document.createTextNode(e)), t
								})
							}

							function a(t) {
								return f.inlineAll(t).then(function() {
									return t
								})
							}
							var u = function() {
									function t(t) {
										var e = /\.([^\.\/]*?)$/g.exec(t);
										return e ? e[1] : ""
									}

									function e(t, e) {
										var n = window.getComputedStyle(t).getPropertyValue(e);
										return parseFloat(n.replace("px", ""))
									}
									return {
										escape: function(t) {
											return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
										},
										parseExtension: t,
										mimeType: function(e) {
											var n = t(e).toLowerCase();
											return function() {
												var t = "application/font-woff";
												return {
													woff: t,
													woff2: t,
													ttf: "application/font-truetype",
													eot: "application/vnd.ms-fontobject",
													png: "image/png",
													jpg: "image/jpeg",
													jpeg: "image/jpeg",
													gif: "image/gif",
													tiff: "image/tiff",
													svg: "image/svg+xml"
												}
											}()[n] || ""
										},
										dataAsUrl: function(t, e) {
											return "data:" + e + ";base64," + t
										},
										isDataUrl: function(t) {
											return -1 !== t.search(/^(data:)/)
										},
										canvasToBlob: function(t) {
											return t.toBlob ? new Promise(function(e) {
												t.toBlob(e)
											}) : function(t) {
												return new Promise(function(e) {
													for (var n = window.atob(t.toDataURL().split(",")[1]), r = n.length, i = new Uint8Array(r), o = 0; o < r; o++) i[o] = n.charCodeAt(o);
													e(new Blob([i], {
														type: "image/png"
													}))
												})
											}(t)
										},
										resolveUrl: function(t, e) {
											var n = document.implementation.createHTMLDocument(),
												r = n.createElement("base");
											n.head.appendChild(r);
											var i = n.createElement("a");
											return n.body.appendChild(i), r.href = e, i.href = t, i.href
										},
										getAndEncode: function(t) {
											return h.impl.options.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime()), new Promise(function(e) {
												function n(t) {
													console.error(t), e("")
												}
												var r, i = new XMLHttpRequest;
												if (i.onreadystatechange = function() {
														if (4 === i.readyState)
															if (200 === i.status) {
																var o = new FileReader;
																o.onloadend = function() {
																	var t = o.result.split(/,/)[1];
																	e(t)
																}, o.readAsDataURL(i.response)
															} else r ? e(r) : n("cannot fetch resource: " + t + ", status: " + i.status)
													}, i.ontimeout = function() {
														r ? e(r) : n("timeout of 30000ms occured while fetching resource: " + t)
													}, i.responseType = "blob", i.timeout = 3e4, i.open("GET", t, !0), i.send(), h.impl.options.imagePlaceholder) {
													var o = h.impl.options.imagePlaceholder.split(/,/);
													o && o[1] && (r = o[1])
												}
											})
										},
										uid: function() {
											var t = 0;
											return function() {
												return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + t++
											}
										}(),
										delay: function(t) {
											return function(e) {
												return new Promise(function(n) {
													setTimeout(function() {
														n(e)
													}, t)
												})
											}
										},
										asArray: function(t) {
											for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
											return e
										},
										escapeXhtml: function(t) {
											return t.replace(/#/g, "%23").replace(/\n/g, "%0A")
										},
										makeImage: function(t) {
											return new Promise(function(e, n) {
												var r = new Image;
												r.onload = function() {
													e(r)
												}, r.onerror = n, r.src = t
											})
										},
										width: function(t) {
											var n = e(t, "border-left-width"),
												r = e(t, "border-right-width");
											return t.scrollWidth + n + r
										},
										height: function(t) {
											var n = e(t, "border-top-width"),
												r = e(t, "border-bottom-width");
											return t.scrollHeight + n + r
										}
									}
								}(),
								c = function() {
									function t(t) {
										return -1 !== t.search(r)
									}

									function e(t) {
										for (var e, n = []; null !== (e = r.exec(t));) n.push(e[1]);
										return n.filter(function(t) {
											return !u.isDataUrl(t)
										})
									}

									function n(t, e, n, r) {
										return Promise.resolve(e).then(function(t) {
											return n ? u.resolveUrl(t, n) : t
										}).then(r || u.getAndEncode).then(function(t) {
											return u.dataAsUrl(t, u.mimeType(e))
										}).then(function(n) {
											return t.replace(function(t) {
												return new RegExp("(url\\(['\"]?)(" + u.escape(t) + ")(['\"]?\\))", "g")
											}(e), "$1" + n + "$3")
										})
									}
									var r = /url\(['"]?([^'"]+?)['"]?\)/g;
									return {
										inlineAll: function(r, i, o) {
											return t(r) ? Promise.resolve(r).then(e).then(function(t) {
												var e = Promise.resolve(r);
												return t.forEach(function(t) {
													e = e.then(function(e) {
														return n(e, t, i, o)
													})
												}), e
											}) : Promise.resolve(r)
										},
										shouldProcess: t,
										impl: {
											readUrls: e,
											inline: n
										}
									}
								}(),
								s = function() {
									function t() {
										function t(t) {
											return {
												resolve: function() {
													var e = (t.parentStyleSheet || {}).href;
													return c.inlineAll(t.cssText, e)
												},
												src: function() {
													return t.style.getPropertyValue("src")
												}
											}
										}
										return Promise.resolve(u.asArray(document.styleSheets)).then(function(t) {
											var e = [];
											return t.forEach(function(t) {
												try {
													u.asArray(t.cssRules || []).forEach(e.push.bind(e))
												} catch (e) {
													console.log("Error while reading CSS rules from " + t.href, e.toString())
												}
											}), e
										}).then(function(t) {
											return t.filter(function(t) {
												return t.type === CSSRule.FONT_FACE_RULE
											}).filter(function(t) {
												return c.shouldProcess(t.style.getPropertyValue("src"))
											})
										}).then(function(e) {
											return e.map(t)
										})
									}
									return {
										resolveAll: function() {
											return t(document).then(function(t) {
												return Promise.all(t.map(function(t) {
													return t.resolve()
												}))
											}).then(function(t) {
												return t.join("\n")
											})
										},
										impl: {
											readAll: t
										}
									}
								}(),
								f = function() {
									function t(t) {
										return {
											inline: function(e) {
												return u.isDataUrl(t.src) ? Promise.resolve() : Promise.resolve(t.src).then(e || u.getAndEncode).then(function(e) {
													return u.dataAsUrl(e, u.mimeType(t.src))
												}).then(function(e) {
													return new Promise(function(n, r) {
														t.onload = n, t.onerror = r, t.src = e
													})
												})
											}
										}
									}
									return {
										inlineAll: function e(n) {
											return n instanceof Element ? function(t) {
												var e = t.style.getPropertyValue("background");
												return e ? c.inlineAll(e).then(function(e) {
													t.style.setProperty("background", e, t.style.getPropertyPriority("background"))
												}).then(function() {
													return t
												}) : Promise.resolve(t)
											}(n).then(function() {
												return n instanceof HTMLImageElement ? t(n).inline() : Promise.all(u.asArray(n.childNodes).map(function(t) {
													return e(t)
												}))
											}) : Promise.resolve(n)
										},
										impl: {
											newImage: t
										}
									}
								}(),
								l = {
									imagePlaceholder: void 0,
									cacheBust: !1
								},
								h = {
									toSvg: n,
									toPng: function(t, e) {
										return r(t, e || {}).then(function(t) {
											return t.toDataURL()
										})
									},
									toJpeg: function(t, e) {
										return r(t, e = e || {}).then(function(t) {
											return t.toDataURL("image/jpeg", e.quality || 1)
										})
									},
									toBlob: function(t, e) {
										return r(t, e || {}).then(u.canvasToBlob)
									},
									toPixelData: function(t, e) {
										return r(t, e || {}).then(function(e) {
											return e.getContext("2d").getImageData(0, 0, u.width(t), u.height(t)).data
										})
									},
									impl: {
										fontFaces: s,
										images: f,
										util: u,
										inliner: c,
										options: {}
									}
								};
							t.exports = h
						}()
					}, function(t, e, n) {
						function r(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}
						var i = n(22),
							o = n(152),
							a = n(530),
							u = function() {
								function t(t) {
									this.options = function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												r(t, e, n[e])
											})
										}
										return t
									}({
										graph: null,
										width: null,
										height: null,
										canvas: null,
										beforeTransform: function() {},
										afterTransform: function() {},
										drawCount: 0
									}, t)
								}
								var e = t.prototype;
								return e.getCanvas = function() {
									var t = this.options,
										e = t.width,
										n = t.height,
										r = t.canvas;
									if (!r) {
										var a = i.createDOM("<canvas></canvas>");
										r = new o.Canvas({
											containerDOM: a,
											width: e,
											height: n
										})
									}
									return r.drawCount || (r.drawCount = 0), r
								}, e.drawInner = function(t, e) {
									var n = this.options.graph,
										r = n.getCanvas(),
										i = n.get("renderer"),
										o = t.drawCount;
									if ("svg" === i) {
										var u = [];
										r.deepEach(function(t) {
											"dom" === t.get("type") && u.push(t)
										}), u.length > 0 ? u.forEach(function(n) {
											n.domImageOnload = !1;
											var r = n.get("el"),
												i = n.attr("width"),
												c = n.attr("height");
											a.toPng(r, {
												width: i,
												height: c
											}).then(function(r) {
												var i = new Image;
												i.src = r, i.onload = function() {
													if (o === t.drawCount - 1) {
														n.domImage = i, n.domImageOnload = !0;
														for (var r = 0; r < u.length; r++) {
															var a = u[r];
															if (!a.domImageOnload || a.get("destroyed")) break;
															a.domImageOnload && r === u.length - 1 && e()
														}
													}
												}
											})
										}) : e()
									} else e();
									t.drawCount += 1
								}, e.toCanvas = function() {
									var t = this.options,
										e = t.graph,
										n = t.width,
										r = t.height,
										o = t.beforeTransform,
										a = t.afterTransform,
										u = this.getCanvas(),
										c = e.getBBox(),
										s = i.cloneDeep(e.getMatrix()),
										f = e.getFitViewPadding(),
										l = e.getCanvas(),
										h = i.getAutoZoomMatrix({
											minX: 0,
											minY: 0,
											maxX: n,
											maxY: r
										}, c, f);
									return this.drawInner(u, function() {
										var t = l.get("children");
										u.set("children", t), o(h, s), e.setMatrix(h), u.draw(), e.setMatrix(s), a(h, s)
									}), u.matrix = h, u.get("el")
								}, t
							}();
						t.exports = u
					}, function(t, e, n) {
						var r = n(22),
							i = function(t) {
								function e(e) {
									var n = {
										type: "guide",
										isGuide: !0,
										zIndex: 4
									};
									return r.mix(n, e), t.call(this, n) || this
								}
								return function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t), e
							}(n(387));
						t.exports = i
					}, function(t, e, n) {
						var r = n(22),
							i = function(t) {
								function e(e) {
									var n = {
										type: "group",
										isNode: !1,
										isGroup: !0,
										zIndex: 1
									};
									return r.mix(n, e), t.call(this, n) || this
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n._afterDraw = function() {
									this.getModel().collapsed && this.deepEach(function(t) {
										t.hide()
									}), t.prototype._afterDraw.call(this)
								}, n.updatePosition = function() {}, n._shouldDraw = function() {
									return !0
								}, n.getCrossEdges = function() {
									var t = [],
										e = this.getInnerEdges();
									this.deepEach(function(e) {
										t.push(e.id)
									});
									var n = e.filter(function(e) {
										var n = e.getModel();
										return -1 === t.indexOf(n.source) || -1 === t.indexOf(n.target)
									});
									return r.uniq(n)
								}, n.getInnerEdges = function() {
									var t = [];
									return this.deepEach(function(e) {
										e.getEdges().forEach(function(e) {
											t.push(e)
										})
									}), r.uniq(t)
								}, n.getChildrenBBox = function() {
									var t = this.getChildren().map(function(t) {
										return t.getGraphicGroup()
									});
									return r.getChildrenBBox(t)
								}, e
							}(n(420));
						t.exports = i
					}, function(t, e, n) {
						function r(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}
						var i = n(22),
							o = function(t) {
								function e(e) {
									var n = {
										type: "edge",
										isEdge: !0,
										zIndex: 2
									};
									return i.mix(n, e), t.call(this, n) || this
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n._init = function() {
									this.cacheEdges(), t.prototype._init.call(this)
								}, n.cacheEdges = function() {
									var t = this.itemMap,
										e = this.model,
										n = t[e.source],
										r = t[e.target];
									n && n.isItem && (n.edges.push(this), n.edges = i.uniq(n.edges)), r && r.isItem && (r.edges.push(this), r.edges = i.uniq(r.edges))
								}, n._beforeDraw = function() {
									var e = this.model,
										n = this.itemMap;
									i.isObject(e.source) ? this.source = e.source : this.source = n[e.source], i.isObject(e.target) ? this.target = e.target : this.target = n[e.target], t.prototype._beforeDraw.call(this)
								}, n._afterDraw = function() {
									this.linkedItemVisible() || this.hide(), this._addArrow(), t.prototype._afterDraw.call(this)
								}, n._addArrow = function() {
									var t = this.model,
										e = this.keyShape;
									if ("path" === e.get("type")) {
										var n = this.shapeObj,
											r = e.attr("endArrow"),
											i = e.attr("startArrow"),
											o = t.endArrow || r,
											a = t.startArrow || i;
										i && e.attr("startArrow", !1), r && e.attr("endArrow", !1), o && this._drawArrow(n.endArrow, "end"), a && this._drawArrow(n.startArrow, "start")
									}
								}, n._drawArrow = function(t, e) {
									var n = t.path,
										o = t.shorten,
										a = t.tangent,
										u = t.ratio,
										c = t.style;
									a = a(this), o = o(this), n = n(this), c = c(this), u = u();
									var s = this.group,
										f = this.keyShape,
										l = i.parsePathString(f.attr("path")),
										h = l[l.length - 1],
										d = l[0],
										p = f.getPoint(u);
									if (p && !isNaN(p.x)) {
										var g = s.addShape("path", {
												attrs: function(t) {
													for (var e = 1; e < arguments.length; e++) {
														var n = null != arguments[e] ? arguments[e] : {},
															i = Object.keys(n);
														"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
															return Object.getOwnPropertyDescriptor(n, t).enumerable
														}))), i.forEach(function(e) {
															r(t, e, n[e])
														})
													}
													return t
												}({
													path: n
												}, c)
											}),
											v = a[1][0] - a[0][0],
											m = a[1][1] - a[0][1],
											y = o / Math.sqrt(v * v + m * m),
											b = [-v * y, -m * y],
											x = 0,
											_ = Math.atan(v / m);
										0 === m && v < 0 ? x = Math.PI : v > 0 && m > 0 ? x = Math.PI / 2 - _ : v < 0 && m < 0 ? x = -Math.PI / 2 - _ : v >= 0 && m < 0 ? x = -_ - Math.PI / 2 : v <= 0 && m > 0 && (x = Math.PI / 2 - _), g.rotate(x), g.translate(p.x, p.y), "end" === e ? (h[h.length - 1] = b[1] + p.y, h[h.length - 2] = b[0] + p.x) : (d[d.length - 1] = b[1] + p.y, d[d.length - 2] = b[0] + p.x), f.attr("path", l), this[e + "Arrow"] = g
									}
								}, n._getControlPoints = function() {
									var t = this.model.controlPoints;
									return i.isArray(t) ? t : []
								}, n._shouldDraw = function() {
									return t.prototype._shouldDraw.call(this) && this.linkedItemVisible()
								}, n._getPoint = function(t) {
									if (t.isItem) {
										var e = t.getBBox();
										return {
											x: e.centerX,
											y: e.centerY
										}
									}
									return {
										x: t.x,
										y: t.y
									}
								}, n.linkedItemVisible = function() {
									var t = this.source,
										e = this.target;
									return i.isPlainObject(t) || i.isPlainObject(e) || t.isVisible() || e.isVisible() || t.collapsedParent !== e.collapsedParent
								}, n.getSource = function() {
									var t = this.source,
										e = t.collapsedParent,
										n = this.itemMap;
									return e ? n[e.id] : t
								}, n.getTarget = function() {
									var t = this.target,
										e = t.collapsedParent,
										n = this.itemMap;
									return e ? n[e.id] : t
								}, n.getPoints = function() {
									var t = this.getSource(),
										e = this.getTarget(),
										n = this.model,
										r = this._getControlPoints(),
										o = this._getPoint(t),
										a = this._getPoint(e),
										u = [o].concat(r).concat([a]),
										c = u.length;
									if (t.isItem) {
										var s = i.isNumber(this.model.sourceAnchor) && t.id === n.source ? this.model.sourceAnchor : u[1],
											f = t.getLinkPoints(s);
										u[0] = f[0]
									}
									if (e.isItem) {
										var l = i.isNumber(this.model.targetAnchor) && e.id === n.target ? this.model.targetAnchor : u[c - 2],
											h = e.getLinkPoints(l);
										u[c - 1] = h[0]
									}
									return u
								}, n.destroy = function() {
									var e = this.itemMap,
										n = this.model,
										r = e[n.source],
										o = e[n.target];
									r && r.isItem && i.Array.remove(r.edges, this), o && o.isItem && i.Array.remove(o.edges, this), t.prototype.destroy.call(this)
								}, e
							}(n(387));
						t.exports = o
					}, function(t, e, n) {
						t.exports = {
							Node: n(420),
							Edge: n(534),
							Group: n(533),
							Guide: n(532)
						}
					}, function(t, e, n) {
						var r;
						/*!
						 * EventEmitter v5.2.5 - git.io/ee
						 * Unlicense - http://unlicense.org/
						 * Oliver Caldwell - http://oli.me.uk/
						 * @preserve
						 */
						! function(e) {
							function i() {}

							function a(t, e) {
								for (var n = t.length; n--;)
									if (t[n].listener === e) return n;
								return -1
							}

							function u(t) {
								return function() {
									return this[t].apply(this, arguments)
								}
							}
							var c = i.prototype,
								s = e.EventEmitter;
							c.getListeners = function(t) {
								var e, n, r = this._getEvents();
								if (t instanceof RegExp)
									for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
								else e = r[t] || (r[t] = []);
								return e
							}, c.flattenListeners = function(t) {
								var e, n = [];
								for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
								return n
							}, c.getListenersAsObject = function(t) {
								var e, n = this.getListeners(t);
								return n instanceof Array && ((e = {})[t] = n), e || n
							}, c.addListener = function(t, e) {
								if (! function t(e) {
										return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : o(e))) && t(e.listener)
									}(e)) throw new TypeError("listener must be a function");
								var n, r = this.getListenersAsObject(t),
									i = "object" == (void 0 === e ? "undefined" : o(e));
								for (n in r) r.hasOwnProperty(n) && -1 === a(r[n], e) && r[n].push(i ? e : {
									listener: e,
									once: !1
								});
								return this
							}, c.on = u("addListener"), c.addOnceListener = function(t, e) {
								return this.addListener(t, {
									listener: e,
									once: !0
								})
							}, c.once = u("addOnceListener"), c.defineEvent = function(t) {
								return this.getListeners(t), this
							}, c.defineEvents = function(t) {
								for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
								return this
							}, c.removeListener = function(t, e) {
								var n, r, i = this.getListenersAsObject(t);
								for (r in i) i.hasOwnProperty(r) && -1 !== (n = a(i[r], e)) && i[r].splice(n, 1);
								return this
							}, c.off = u("removeListener"), c.addListeners = function(t, e) {
								return this.manipulateListeners(!1, t, e)
							}, c.removeListeners = function(t, e) {
								return this.manipulateListeners(!0, t, e)
							}, c.manipulateListeners = function(t, e, n) {
								var r, i, a = t ? this.removeListener : this.addListener,
									u = t ? this.removeListeners : this.addListeners;
								if ("object" != (void 0 === e ? "undefined" : o(e)) || e instanceof RegExp)
									for (r = n.length; r--;) a.call(this, e, n[r]);
								else
									for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? a.call(this, r, i) : u.call(this, r, i));
								return this
							}, c.removeEvent = function(t) {
								var e, n = void 0 === t ? "undefined" : o(t),
									r = this._getEvents();
								if ("string" === n) delete r[t];
								else if (t instanceof RegExp)
									for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
								else delete this._events;
								return this
							}, c.removeAllListeners = u("removeEvent"), c.emitEvent = function(t, e) {
								var n, r, i, o, a = this.getListenersAsObject(t);
								for (o in a)
									if (a.hasOwnProperty(o))
										for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
								return this
							}, c.trigger = u("emitEvent"), c.emit = function(t) {
								var e = Array.prototype.slice.call(arguments, 1);
								return this.emitEvent(t, e)
							}, c.setOnceReturnValue = function(t) {
								return this._onceReturnValue = t, this
							}, c._getOnceReturnValue = function() {
								return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
							}, c._getEvents = function() {
								return this._events || (this._events = {})
							}, i.noConflict = function() {
								return e.EventEmitter = s, i
							}, void 0 === (r = function() {
								return i
							}.call(e, n, e, t)) || (t.exports = r)
						}("undefined" != typeof window ? window : this || {})
					}, function(t, e, n) {
						var r = n(22),
							i = function(t) {
								function e(e) {
									var n, i = (n = t.call(this) || this).getDefaultCfg();
									return n._cfg = r.mix({}, i, e), n
								}! function(t, e) {
									t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
								}(e, t);
								var n = e.prototype;
								return n.getDefaultCfg = function() {
									return {}
								}, n.get = function(t) {
									return this._cfg[t]
								}, n.set = function(t, e) {
									this._cfg[t] = e
								}, n.destroy = function() {
									this._cfg = {}, this.removeAllListeners(), this.destroyed = !0
								}, e
							}(n(536));
						t.exports = i
					}, function(t, e, n) {
						var r = n(22),
							i = n(152),
							o = function() {};
						r.augment(o, {
							drawInner: function(t) {
								var e = r.clone(this.getTotalMatrix()),
									n = this._attrs,
									i = n.x,
									o = n.y,
									a = n.width,
									u = n.height;
								t.setTransform(e[0], e[1], e[3], e[4], e[6], e[7]), t.drawImage(this.domImage, i, o, a, u)
							}
						}), r.mixin(i.Dom, [o]), t.exports = o
					}, function(t, e, n) {
						var r = n(22),
							i = n(152),
							o = function() {};
						r.augment(o, {
							hasClass: function(t) {
								var e = this.get("class");
								return !(!e || -1 === e.indexOf(t))
							}
						}), r.mixin(i.Shape, [o]), t.exports = o
					}, function(t, e, n) {
						var r = n(152),
							i = n(22),
							o = function() {};
						i.augment(o, {
							findByClass: function(t) {
								var e = [];
								return this.deepEach(function(n) {
									n.hasClass(t) && e.push(n)
								}), e
							},
							hasClass: function(t) {
								var e = this.get("class");
								return !(!e || -1 === e.indexOf(t))
							},
							deepEach: function(t, e) {
								i.traverseTree(this, t, function(t) {
									return t.get("children")
								}, e)
							},
							sort: function() {
								var t = this.get("children");
								this.set("children", i.radixSort(t, function(t) {
									return t.get("zIndex")
								}))
							},
							sortBy: function(t) {
								var e = this.get("children");
								this.set("children", i.radixSort(e, t))
							},
							clear: function(t) {
								for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--) e[n].remove(t);
								return this._cfg.children = [], this
							}
						}), i.mixin(r.Group, [o]), t.exports = o
					}, function(t, e, n) {
						n(160).registerGuide("common", {
							draw: function() {
								console.warn("do not have this guide, please register one")
							}
						})
					}, function(t, e, n) {
						t.exports = {
							common: n(541)
						}
					}, function(t, e, n) {
						function r(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}
						var i = n(160),
							o = n(22),
							a = n(151);
						i.registerGroup("common", {
							draw: function(t) {
								return t.getModel().collapsed ? this.drawCollapsed(t) : this.drawExpanded(t)
							},
							defaultWidth: 184,
							defaultHeight: 40,
							getLabel: function(t) {
								return t.getModel().label
							},
							drawLabel: function(t, e, n) {
								var r = this.getLabel(t);
								if (r) {
									var i = t.getGraphicGroup(),
										u = [8, 8];
									e += u[0], n += u[1];
									var c = t.getModel(),
										s = c.labelOffsetX,
										f = c.labelOffsetY,
										l = c.labelRotate;
									e = s ? s + e : e, n = f ? f + n : n;
									var h = o.mix(!0, {}, a.labelStyle, {
										x: e,
										y: n,
										textAlign: "left",
										textBaseline: "top"
									});
									o.isObject(r) ? o.mix(h, r) : h.text = r;
									var d = i.addShape("text", {
										class: "label",
										attrs: h
									});
									if (l) {
										var p = d.getBBox(),
											g = (p.maxX + p.minX) / 2,
											v = (p.maxY + p.minY) / 2;
										d.transform([
											["t", -g, -v],
											["r", l, l],
											["t", g, v]
										])
									}
								}
							},
							drawKeyShape: function(t, e) {
								var n = e.x,
									r = e.y,
									i = e.width,
									u = e.height,
									c = t.getModel(),
									s = t.getGraphicGroup(),
									f = o.mix({}, a.groupStyle, c.style),
									l = o.getRectPath(n, r, i, u, f.radius);
								return t.lastChildrenBox = e, s.addShape("path", {
									attrs: o.mix({}, f, {
										path: l
									})
								})
							},
							getChildrenBBox: function(t) {
								var e = function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({}, t.lastChildrenBox);
								if (t.getChildren().length > 0) {
									var n = t.getChildrenBBox();
									e.x = n.minX - a.groupBackgroundPadding[3], e.y = n.minY - a.groupBackgroundPadding[0], e.width = n.maxX - n.minX + a.groupBackgroundPadding[3] + a.groupBackgroundPadding[1], e.height = n.maxY - n.minY + a.groupBackgroundPadding[0] + a.groupBackgroundPadding[2]
								} else e.width = this.defaultWidth, e.height = this.defaultHeight;
								return e
							},
							drawExpanded: function(t) {
								var e = this.getChildrenBBox(t),
									n = this.drawKeyShape(t, e);
								return this.drawLabel(t, e.x, e.y), n
							},
							drawCollapsed: function(t) {
								var e = this.getChildrenBBox(t);
								e.width = this.defaultWidth, e.height = this.defaultHeight;
								var n = this.drawKeyShape(t, e);
								return this.drawLabel(t, e.x, e.y), n
							},
							anchor: {
								intersectBox: "rect"
							}
						})
					}, function(t, e, n) {
						t.exports = {
							common: n(543)
						}
					}, function(t, e, n) {
						function r(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									r = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), r.forEach(function(e) {
									i(t, e, n[e])
								})
							}
							return t
						}

						function i(t, e, n) {
							return e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n, t
						}
						var o = n(160),
							a = n(22),
							u = n(151),
							c = {
								path: function(t) {
									var e = t.getKeyShape().attr("lineWidth"),
										n = 10 * (e = e > 3 ? e : 3) / 3,
										r = 4 * e / 3,
										i = 4 * e;
									return [
										["M", -n, r],
										["L", 0, 0],
										["L", -n, -r],
										["A", i, i, 0, 0, 1, -n, r],
										["Z"]
									]
								},
								shorten: function(t) {
									var e = t.getKeyShape().attr("lineWidth");
									return 3.1 * (e > 3 ? e : 3)
								},
								style: function(t) {
									var e = t.getKeyShape().attr();
									return {
										fillOpacity: e.strokeOpacity,
										fill: e.stroke
									}
								}
							};
						o.registerEdge("common", {
							draw: function(t) {
								var e = this.drawKeyShape(t);
								return this.drawLabel(t, e), e
							},
							drawKeyShape: function(t) {
								var e = t.getGraphicGroup(),
									n = this.getStyle(t),
									r = this.getPath(t);
								return e.addShape("path", {
									attrs: a.mix({}, n, {
										path: r
									})
								})
							},
							getStyle: function(t) {
								var e = t.getModel();
								return a.mix(!0, {}, {
									stroke: e.color || "#A3B1BF",
									strokeOpacity: .92,
									lineAppendWidth: 4,
									lineWidth: e.size || 1
								}, e.style)
							},
							getPath: function(t) {
								var e = t.getPoints();
								return a.pointsToPolygon(e)
							},
							getLabel: function(t) {
								return t.getModel().label
							},
							drawLabel: function(t, e) {
								var n = this.getLabel(t),
									r = t.getGraphicGroup(),
									i = t.getModel(),
									o = i.labelOffsetX,
									c = i.labelOffsetY,
									s = i.labelRotate;
								if (n) {
									var f = e.getPoint(.5);
									if (!f) return;
									f.x = o ? f.x + o : f.x, f.y = c ? f.y + c : f.y;
									var l = a.mix(!0, {}, u.labelStyle, f);
									a.isObject(n) ? a.mix(l, n) : l.text = n, n = r.addShape("text", {
										class: "label",
										attrs: l
									});
									var h = a.toAllPadding([4, 8]),
										d = n.getBBox(),
										p = {
											fill: "white"
										},
										g = i.labelRectStyle ? a.mix({}, p, i.labelRectStyle) : p,
										v = r.addShape("rect", {
											attrs: a.mix({}, g, {
												x: d.minX - h[3],
												y: d.minY - h[0],
												width: d.maxX - d.minX + h[1] + h[3],
												height: d.maxY - d.minY + h[0] + h[2]
											})
										});
									if (s) {
										var m = (d.maxX + d.minX) / 2,
											y = (d.maxY + d.minY) / 2;
										n.transform([
											["t", -m, -y],
											["r", s, s],
											["t", m, y]
										]), v.transform([
											["t", -m, -y],
											["r", s, s],
											["t", m, y]
										])
									}
									a.toFront(n)
								}
							},
							startArrow: r({}, c, {
								tangent: function(t) {
									return t.getKeyShape().getStartTangent()
								},
								ratio: function() {
									return 0
								}
							}),
							endArrow: r({}, c, {
								tangent: function(t) {
									return t.getKeyShape().getEndTangent()
								},
								ratio: function() {
									return 1
								}
							})
						})
					}, function(t, e, n) {
						t.exports = {
							common: n(545)
						}
					}, function(t, e, n) {
						var r = n(160),
							i = n(22);
						r.registerNode("html", {
							getHtml: function(t) {
								return t.getModel().html
							},
							cssSize: !0,
							draw: function(t) {
								var e = i.createDOM('<div class="g6-html-node-container"></div>'),
									n = t.getGraphicGroup(),
									r = t.getGraph();
								if ("svg" !== r.get("renderer")) throw new Error("please use svg renderer draw html element !");
								var o = r.getGraphContainer(),
									a = this.getSize(t),
									u = this.getStyle(t),
									c = this.cssSize,
									s = this.getHtml(t);
								s = i.createDOM(s), e.css({
									position: "absolute",
									padding: "0px",
									margin: "0px"
								}), e.appendChild(s), o.appendChild(e), c && (a[0] = e.width(), a[1] = e.height());
								var f = -a[0] / 2,
									l = -a[1] / 2,
									h = a[0],
									d = a[1],
									p = n.addShape("rect", {
										attrs: i.mix({}, u, {
											x: f,
											y: l,
											width: h,
											height: d
										})
									});
								return n.addShape("dom", {
									attrs: i.mix({
										x: f,
										y: l,
										width: h,
										height: d,
										html: e
									})
								}), p
							}
						})
					}, function(t, e, n) {
						var r = n(160),
							i = n(22),
							o = n(151);
						r.registerNode("common", {
							draw: function(t) {
								var e = t.getGraphicGroup(),
									n = this.drawLabel(t),
									r = this.drawKeyShape(t);
								return n && i.toFront(n, e), r
							},
							getSize: function(t) {
								var e = t.getModel().size;
								return i.isArray(e) ? e : i.isNumber(e) ? [e, e] : [o.defaultNodeSize, o.defaultNodeSize]
							},
							getStyle: function(t) {
								var e = t.getModel();
								return i.mix(!0, {
									lineWidth: 1,
									fill: e.color || "#40a9ff",
									stroke: e.color || "#096dd9",
									fillOpacity: .92
								}, e.style)
							},
							getLabel: function(t) {
								return t.getModel().label
							},
							drawKeyShape: function(t) {
								var e = t.getGraphicGroup(),
									n = this.getStyle(t),
									r = this.getPath(t);
								return e.addShape("path", {
									attrs: i.mix({}, n, {
										path: r
									})
								})
							},
							drawLabel: function(t) {
								var e = t.getGraphicGroup(),
									n = this.getLabel(t),
									r = t.getModel(),
									a = r.labelOffsetX,
									u = r.labelOffsetY,
									c = r.labelRotate;
								if (!i.isNil(n)) {
									var s = i.mix(!0, {}, o.labelStyle, {
										x: a || 0,
										y: u || 0
									});
									i.isObject(n) ? i.mix(s, n) : s.text = n;
									var f = e.addShape("text", {
										class: "label",
										attrs: s
									});
									return c && f.rotate(c), f
								}
							},
							getPath: function(t) {
								var e = this.getSize(t);
								return i.getEllipsePath(0, 0, e[0] / 2, e[1] / 2)
							}
						})
					}, function(t, e, n) {
						t.exports = {
							common: n(548),
							html: n(547)
						}
					}, function(t, e, n) {
						var r = n(151);
						t.exports = {
							scaleIn: function(t, e, n, i) {
								t.transform([
									["t", -e, -n],
									["s", .01, .01],
									["t", e, n]
								]), t && !t.get("destroyed") && t.animate({
									transform: [
										["t", -e, -n],
										["s", 100, 100],
										["t", e, n]
									]
								}, r.enterDuration, r.enterEasing, i)
							},
							scaleOut: function(t, e, n, i) {
								t && !t.get("destroyed") && t.animate({
									transform: [
										["t", -e, -n],
										["s", .01, .01],
										["t", e, n]
									]
								}, r.leaveDuration, r.leaveEasing, i)
							}
						}
					}, function(t, e, n) {
						var r = n(508),
							i = n(159),
							o = {
								getAutoZoomMatrix: function(t, e, n, i) {
									var o = [1, 0, 0, 0, 1, 0, 0, 0, 1],
										a = t.maxX - t.minX,
										u = t.maxY - t.minY,
										c = (e.maxX + e.minX) / 2,
										s = (e.maxY + e.minY) / 2,
										f = a - n[1] - n[3],
										l = u - n[0] - n[2],
										h = e.maxX - e.minX,
										d = e.maxY - e.minY,
										p = Math.min(l / d, f / h);
									return i && (p = i(p)), r.mat3.translate(o, o, [-c, -s]), r.mat3.scale(o, o, [p, p]), r.mat3.translate(o, o, [a / 2, u / 2]), o
								},
								getNineBoxPosition: function(t, e, n, r, i) {
									var o = {};
									switch (t) {
										case "tl":
											o.y = e.x + i[0], o.x = e.y + i[3];
											break;
										case "lc":
											o.y = (e.height - r) / 2, o.x = i[3];
											break;
										case "bl":
											o.y = e.height - r - i[2], o.x = i[3];
											break;
										case "cc":
											o.y = (e.height - r) / 2, o.x = (e.width - n) / 2;
											break;
										case "tc":
											o.y = i[0], o.x = (e.width - n) / 2;
											break;
										case "tr":
											o.y = i[0], o.x = e.width - n - i[1];
											break;
										case "rc":
											o.y = (e.height - r) / 2, o.x = e.width - n - i[1];
											break;
										case "br":
											o.y = e.height - r - i[2], o.x = e.width - n - i[1];
											break;
										case "bc":
											o.y = e.height - r - i[2], o.x = (e.width - n) / 2;
											break;
										default:
											o.y = e.x + i[0], o.x = e.y + i[3]
									}
									return o.x += e.x, o.y += e.y, o
								},
								getTotalBBox: function(t) {
									var e = 1 / 0,
										n = -1 / 0,
										r = 1 / 0,
										i = -1 / 0;
									return t.forEach(function(t) {
										t.minX < e && (e = t.minX), t.maxX > n && (n = t.maxX), t.minY < r && (r = t.minY), t.maxY > i && (i = t.maxY)
									}), {
										minX: e,
										minY: r,
										maxX: n,
										maxY: i,
										width: n - e,
										height: i - r
									}
								},
								getChildrenBBox: function(t) {
									var e = 1 / 0,
										n = -1 / 0,
										r = 1 / 0,
										a = -1 / 0;
									i.each(t, function(t) {
										var i = t.isGroup ? o.getChildrenBBox(t.get("children")) : t.getBBox();
										if (!i) return !0;
										var u = [i.minX, i.minY, 1],
											c = [i.minX, i.maxY, 1],
											s = [i.maxX, i.minY, 1],
											f = [i.maxX, i.maxY, 1];
										t.apply(u), t.apply(c), t.apply(s), t.apply(f);
										var l = Math.min(u[0], c[0], s[0], f[0]),
											h = Math.max(u[0], c[0], s[0], f[0]),
											d = Math.min(u[1], c[1], s[1], f[1]),
											p = Math.max(u[1], c[1], s[1], f[1]);
										l < e && (e = l), h > n && (n = h), d < r && (r = d), p > a && (a = p)
									});
									var u = {
										minX: e,
										minY: r,
										maxX: n,
										maxY: a
									};
									return u.x = u.minX, u.y = u.minY, u.width = u.maxX - u.minX, u.height = u.maxY - u.minY, u.centerX = (u.minX + u.maxX) / 2, u.centerY = (u.minY + u.maxY) / 2, u
								},
								getBBox: function(t, e) {
									var n, i = t.getBBox(),
										o = {
											x: i.minX,
											y: i.minY
										},
										a = {
											x: i.maxX,
											y: i.maxY
										};
									if (e.isGroup) {
										for (n = t; n !== e;) {
											var u = n.getMatrix();
											o = r.applyMatrix(o, u), a = r.applyMatrix(a, u), n = n.getParent()
										}
										var c = n.getMatrix();
										o = r.applyMatrix(o, c), a = r.applyMatrix(a, c)
									} else o = r.applyMatrix(o, e), a = r.applyMatrix(a, e);
									return {
										minX: o.x,
										minY: o.y,
										maxX: a.x,
										maxY: a.y
									}
								},
								toBack: function(t) {
									t.toBack()
								},
								toFront: function(t) {
									t.toFront()
								}
							};
						t.exports = o
					}, function(t, e, n) {
						var r = n(159);
						t.exports = {
							isNode: function(t) {
								return t && r.isObject(t) && "node" === t.type
							},
							isEdge: function(t) {
								return t && r.isObject(t) && "edge" === t.type
							},
							isGroup: function(t) {
								return t && r.isObject(t) && "group" === t.type
							}
						}
					}, function(t, e, n) {
						var r = n(159),
							i = {};
						r.mix(i, {
							addEventListener: function(t, e, n) {
								return t.attachEvent ? (t.attachEvent("on" + e, n), {
									remove: function() {
										t.detachEvent("on" + e, n)
									}
								}) : t.addEventListener ? (t.addEventListener(e, n, !1), {
									remove: function() {
										t.removeEventListener(e, n, !1)
									}
								}) : void 0
							},
							createDOM: function(t, e) {
								var n;
								return (n = r.isString(t) ? r.createDom(t) : t).bbox = n.getBoundingClientRect(), n.hide = function() {
									return n.style.visibility = "hidden", n
								}, n.show = function() {
									return n.style.visibility = "visible", n
								}, n.css = function(t) {
									return r.modifyCSS(n, t), n
								}, n.width = function() {
									return r.getWidth(n)
								}, n.height = function() {
									return r.getHeight(n)
								}, n.destroy = function() {
									n.parentNode && n.parentNode.removeChild(n)
								}, n.on = function(t, e) {
									n.addEventListener(t, e)
								}, n.off = function(t, e) {
									n.removeEventListener(t, e)
								}, n.css(e), n
							}
						}), t.exports = i
					}, function(t, e) {
						var n = {
							svg: "svg",
							circle: "circle",
							rect: "rect",
							text: "text",
							path: "path",
							foreignObject: "foreignObject",
							polygon: "polygon",
							ellipse: "ellipse",
							image: "image"
						};
						t.exports = function(t, e, r) {
							var i = r.target || r.srcElement;
							if (!n[i.tagName]) {
								for (var o = i.parentNode; o && !n[o.tagName];) o = o.parentNode;
								i = o
							}
							return this._cfg.el === i ? this : this.find(function(t) {
								return t._cfg && t._cfg.el === i
							})
						}
					}, function(t, e, n) {
						var r = n(17),
							i = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
							o = function() {
								function t(t) {
									function e() {
										console.log(c.width, c.height), n.setAttribute("width", c.width), n.setAttribute("height", c.height)
									}
									var n = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
									n.setAttribute("patternUnits", "userSpaceOnUse");
									var o = document.createElementNS("http://www.w3.org/2000/svg", "image");
									n.appendChild(o);
									var a = r.uniqueId("pattern_");
									n.id = a, this.el = n, this.id = a, this.cfg = t;
									var u = i.exec(t)[2];
									o.setAttribute("href", u);
									var c = new Image;
									return u.match(/^data:/i) || (c.crossOrigin = "Anonymous"), c.src = u, c.complete ? e() : (c.onload = e, c.src = c.src), this
								}
								return t.prototype.match = function(t, e) {
									return this.cfg === e
								}, t
							}();
						t.exports = o
					}, function(t, e, n) {
						var r = n(17),
							i = function() {
								function t(t) {
									this.type = "clip";
									var e = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
									this.el = e, this.id = r.uniqueId("clip_"), e.id = this.id;
									var n = t._cfg.el;
									return e.appendChild(n.cloneNode(!0)), this.cfg = t, this
								}
								var e = t.prototype;
								return e.match = function() {
									return !1
								}, e.remove = function() {
									var t = this.el;
									t.parentNode.removeChild(t)
								}, t
							}();
						t.exports = i
					}, function(t, e, n) {
						var r = n(17),
							i = function() {
								function t(t, e) {
									var n = document.createElementNS("http://www.w3.org/2000/svg", "marker"),
										i = r.uniqueId("marker_");
									n.setAttribute("id", i);
									var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
									return o.setAttribute("stroke", "none"), o.setAttribute("fill", t.stroke || "#000"), n.appendChild(o), n.setAttribute("overflow", "visible"), n.setAttribute("orient", "auto-start-reverse"), this.el = n, this.child = o, this.id = i, this.cfg = t["marker-start" === e ? "startArrow" : "endArrow"], this.stroke = t.stroke || "#000", !0 === this.cfg ? this._setDefaultPath(e, o) : this._setMarker(t.lineWidth, o), this
								}
								var e = t.prototype;
								return e.match = function() {
									return !1
								}, e._setDefaultPath = function(t, e) {
									var n = this.el;
									e.setAttribute("d", "M0,0 L6,3 L0,6 L3,3Z"), n.setAttribute("refX", 3), n.setAttribute("refY", 3)
								}, e._setMarker = function(t, e) {
									var n = this.el,
										i = this.cfg.path,
										o = this.cfg.d;
									r.isArray(i) && (i = i.map(function(t) {
										return t.join(" ")
									}).join("")), e.setAttribute("d", i), n.appendChild(e), o && n.setAttribute("refX", o / t)
								}, e.update = function(t) {
									var e = this.child;
									e.attr ? e.attr("fill", t) : e.setAttribute("fill", t)
								}, t
							}();
						t.exports = i
					}, function(t, e, n) {
						var r = n(17),
							i = {
								shadowColor: "color",
								shadowOpacity: "opacity",
								shadowBlur: "blur",
								shadowOffsetX: "dx",
								shadowOffsetY: "dy"
							},
							o = {
								x: "-40%",
								y: "-40%",
								width: "200%",
								height: "200%"
							},
							a = function() {
								function t(t) {
									this.type = "filter";
									var e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
									return r.each(o, function(t, n) {
										e.setAttribute(n, t)
									}), this.el = e, this.id = r.uniqueId("filter_"), this.el.id = this.id, this.cfg = t, this._parseShadow(t, e), this
								}
								var e = t.prototype;
								return e.match = function(t, e) {
									if (this.type !== t) return !1;
									var n = !0,
										i = this.cfg;
									return r.each(Object.keys(i), function(t) {
										if (i[t] !== e[t]) return n = !1, !1
									}), n
								}, e.update = function(t, e) {
									var n = this.cfg;
									return n[i[t]] = e, this._parseShadow(n, this.el), this
								}, e._parseShadow = function(t, e) {
									var n = '<feDropShadow \n      dx="' + (t.dx || 0) + '" \n      dy="' + (t.dy || 0) + '" \n      stdDeviation="' + (t.blur ? t.blur / 10 : 0) + '"\n      flood-color="' + (t.color ? t.color : "#000") + '"\n      flood-opacity="' + (t.opacity ? t.opacity : 1) + '"\n      />';
									e.innerHTML = n
								}, t
							}();
						t.exports = a
					}, function(t, e, n) {
						function r(t) {
							var e = t.match(u);
							if (!e) return "";
							var n = "";
							return e.sort(function(t, e) {
								return t = t.split(":"), e = e.split(":"), Number(t[0]) - Number(e[0])
							}), i.each(e, function(t) {
								t = t.split(":"), n += '<stop offset="' + t[0] + '" stop-color="' + t[1] + '"></stop>'
							}), n
						}
						var i = n(17),
							o = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
							a = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
							u = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
							c = function() {
								function t(t) {
									var e = null,
										n = i.uniqueId("gradient_");
									return "l" === t.toLowerCase()[0] ? function(t, e) {
										var n, a, u = o.exec(t),
											c = i.mod(i.toRadian(parseFloat(u[1])), 2 * Math.PI),
											s = u[2];
										c >= 0 && c < .5 * Math.PI ? (n = {
											x: 0,
											y: 0
										}, a = {
											x: 1,
											y: 1
										}) : .5 * Math.PI <= c && c < Math.PI ? (n = {
											x: 1,
											y: 0
										}, a = {
											x: 0,
											y: 1
										}) : Math.PI <= c && c < 1.5 * Math.PI ? (n = {
											x: 1,
											y: 1
										}, a = {
											x: 0,
											y: 0
										}) : (n = {
											x: 0,
											y: 1
										}, a = {
											x: 1,
											y: 0
										});
										var f = Math.tan(c),
											l = f * f,
											h = (a.x - n.x + f * (a.y - n.y)) / (l + 1) + n.x,
											d = f * (a.x - n.x + f * (a.y - n.y)) / (l + 1) + n.y;
										e.setAttribute("x1", n.x), e.setAttribute("y1", n.y), e.setAttribute("x2", h), e.setAttribute("y2", d), e.innerHTML = r(s)
									}(t, e = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")) : function(t, e) {
										var n = a.exec(t),
											i = parseFloat(n[1]),
											o = parseFloat(n[2]),
											u = parseFloat(n[3]),
											c = n[4];
										e.setAttribute("cx", i), e.setAttribute("cy", o), e.setAttribute("r", u), e.innerHTML = r(c)
									}(t, e = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")), e.setAttribute("id", n), this.el = e, this.id = n, this.cfg = t, this
								}
								return t.prototype.match = function(t, e) {
									return this.cfg === e
								}, t
							}();
						t.exports = c
					}, function(t, e, n) {
						var r = n(17),
							i = n(559),
							o = n(558),
							a = n(557),
							u = n(556),
							c = n(555),
							s = function() {
								function t(t) {
									var e = document.createElementNS("http://www.w3.org/2000/svg", "defs"),
										n = r.uniqueId("defs_");
									e.id = n, t.appendChild(e), this.children = [], this.defaultArrow = {}, this.el = e, this.canvas = t
								}
								var e = t.prototype;
								return e.find = function(t, e) {
									for (var n = this.children, r = null, i = 0; i < n.length; i++)
										if (n[i].match(t, e)) {
											r = n[i].id;
											break
										} return r
								}, e.findById = function(t) {
									for (var e = this.children, n = null, r = 0; r < e.length; r++)
										if (e[r].id === t) {
											n = e[r];
											break
										} return n
								}, e.add = function(t) {
									this.children.push(t), t.canvas = this.canvas, t.parent = this
								}, e.getDefaultArrow = function(t, e) {
									var n = t.stroke || t.strokeStyle;
									if (this.defaultArrow[n]) return this.defaultArrow[n].id;
									var r = new a(t, e);
									return this.defaultArrow[n] = r, this.el.appendChild(r.el), r.id
								}, e.addGradient = function(t) {
									var e = new i(t);
									return this.el.appendChild(e.el), this.add(e), e.id
								}, e.addArrow = function(t, e) {
									var n = new a(t, e);
									return this.el.appendChild(n.el), n.id
								}, e.addShadow = function(t) {
									var e = new o(t);
									return this.el.appendChild(e.el), this.add(e), e.id
								}, e.addPattern = function(t) {
									var e = new c(t);
									return this.el.appendChild(e.el), this.add(e), e.id
								}, e.addClip = function(t) {
									var e = new u(t);
									return this.el.appendChild(e.el), this.add(e), e.id
								}, t
							}();
						t.exports = s
					}, function(t, e, n) {
						var r = n(17),
							i = n(362).parseRadius,
							o = n(390),
							a = n(560),
							u = {
								rect: "path",
								circle: "circle",
								line: "line",
								path: "path",
								marker: "path",
								text: "text",
								polygon: "polygon",
								image: "image",
								ellipse: "ellipse",
								dom: "foreignObject",
								fan: "path",
								group: "g"
							},
							c = {
								opacity: "opacity",
								fillStyle: "fill",
								strokeOpacity: "stroke-opacity",
								fillOpacity: "fill-opacity",
								strokeStyle: "stroke",
								x: "x",
								y: "y",
								r: "r",
								width: "width",
								height: "height",
								x1: "x1",
								x2: "x2",
								y1: "y1",
								y2: "y2",
								lineCap: "stroke-linecap",
								lineJoin: "stroke-linejoin",
								lineWidth: "stroke-width",
								lineDash: "stroke-dasharray",
								lineDashOffset: "stroke-dashoffset",
								miterLimit: "stroke-miterlimit",
								font: "font",
								fontSize: "font-size",
								fontStyle: "font-style",
								fontVariant: "font-variant",
								fontWeight: "font-weight",
								fontFamily: "font-family",
								startArrow: "marker-start",
								endArrow: "marker-end",
								path: "d",
								class: "class",
								id: "id",
								style: "style",
								preserveAspectRatio: "preserveAspectRatio"
							},
							s = {
								top: "before-edge",
								middle: "central",
								bottom: "after-edge",
								alphabetic: "baseline",
								hanging: "hanging"
							},
							f = {
								left: "left",
								start: "left",
								center: "middle",
								right: "end",
								end: "end"
							},
							l = function() {
								function t(t) {
									if (!t) return null;
									var e = r.uniqueId("canvas_"),
										n = r.createDom('<svg id="' + e + '"></svg>');
									return t.appendChild(n), this.type = "svg", this.canvas = n, this.context = new a(n), this.toDraw = !1, this
								}
								var e = t.prototype;
								return e.draw = function(t) {
									var e = this;
									e.animateHandler ? e.toDraw = !0 : function n() {
										e.animateHandler = r.requestAnimationFrame(function() {
											e.animateHandler = void 0, e.toDraw && n()
										});
										try {
											t.resetMatrix(), e._drawGroup(t, !1)
										} catch (t) {
											console.warn("error in draw canvas, detail as:"), console.warn(t), e.toDraw = !1
										}
										e.toDraw = !1
									}()
								}, e.drawSync = function(t) {
									this._drawChildren(t, !1)
								}, e._drawGroup = function(t, e) {
									var n = t._cfg;
									n.removed || n.destroyed || (!n.el && n.attrs && (e = !0), n.tobeRemoved && (r.each(n.tobeRemoved, function(t) {
										t.parentNode && t.parentNode.removeChild(t)
									}), n.tobeRemoved = []), this._drawShape(t, e), n.children && n.children.length > 0 && this._drawChildren(t, e))
								}, e._drawChildren = function(t, e) {
									var n, r = t._cfg.children;
									if (r) {
										if (t._cfg.el && !e) {
											var i = t._cfg.el.childNodes.length + 1;
											0 !== i && i !== r.length && (e = !0)
										}
										for (var o = 0; o < r.length; o++)(n = r[o]).isGroup ? this._drawGroup(n, e) : this._drawShape(n, e)
									}
								}, e._drawShape = function(t, e) {
									var n = t._attrs,
										r = t._cfg,
										i = r.el;
									r.removed || r.destroyed ? i && i.parentNode.removeChild(r.el) : (e && i && (i.parentNode && i.parentNode.removeChild(i), i = null), !i && r.parent && (this._createDom(t), this._updateShape(t)), i = r.el, !1 !== r.visible ? (r.visible && i.hasAttribute("visibility") && i.removeAttribute("visibility"), r.hasUpdate && this._updateShape(t), n.clip && n.clip._cfg.hasUpdate && this._updateShape(n.clip)) : i.setAttribute("visibility", "hidden"))
								}, e._updateShape = function(t) {
									var e = t._attrs,
										n = t._cfg.attrs;
									if (n)
										if (t._cfg.el || this._createDom(t), "clip" in e && this._setClip(t, e.clip), ("shadowOffsetX" in e || "shadowOffsetY" in e || "shadowBlur" in e || "shadowColor" in e) && this._setShadow(t), "text" !== t.type) {
											for (var i in "fan" === t.type && this._updateFan(t), "marker" === t.type && t._cfg.el.setAttribute("d", this._assembleMarker(e)), "rect" === t.type && t._cfg.el.setAttribute("d", this._assembleRect(e)), e) e[i] !== n[i] && this._setAttribute(t, i, e[i]);
											t._cfg.attrs = r.deepMix({}, t._attrs), t._cfg.hasUpdate = !1
										} else this._updateText(t)
								}, e._setAttribute = function(t, e, n) {
									var i = t.type,
										o = t._attrs,
										a = t._cfg.el,
										u = this.context;
									if ("marker" !== i && "rect" !== i || !~["x", "y", "radius", "r"].indexOf(e))
										if (~["circle", "ellipse"].indexOf(i) && ~["x", "y"].indexOf(e)) a.setAttribute("c" + e, parseInt(n, 10));
										else {
											if ("polygon" === i && "points" === e) return n && 0 !== n.length || (n = ""), r.isArray(n) && (n = (n = n.map(function(t) {
												return t[0] + "," + t[1]
											})).join(" ")), void a.setAttribute("points", n);
											if ("path" === e && r.isArray(n)) a.setAttribute("d", this._formatPath(n));
											else if ("img" !== e) {
												if ("transform" === e) return n ? void this._setTransform(t) : void a.removeAttribute("transform");
												if ("rotate" === e) return n ? void this._setTransform(t) : void a.removeAttribute("transform");
												if ("matrix" !== e)
													if ("fillStyle" !== e && "strokeStyle" !== e) {
														if ("clip" !== e)
															if (~e.indexOf("Arrow"))
																if (e = c[e], n) {
																	var s = null;
																	s = "boolean" == typeof n ? u.getDefaultArrow(o, e) : u.addArrow(o, e), a.setAttribute(e, "url(#" + s + ")"), t._cfg[e] = s
																} else t._cfg[e] = null, a.removeAttribute(e);
														else "html" === e && ("string" == typeof n ? a.innerHTML = n : (a.innerHTML = "", a.appendChild(n))), c[e] && a.setAttribute(c[e], n)
													} else this._setColor(t, e, n);
												else this._setTransform(t)
											} else this._setImage(t, n)
										}
								}, e._createDom = function(t) {
									var e = u[t.type],
										n = t._attrs;
									if (!e) throw new Error("the type" + t.type + "is not supported by svg");
									var r = document.createElementNS("http://www.w3.org/2000/svg", e);
									return t._cfg.el = r, t._cfg.parent && t._cfg.parent.get("el").appendChild(r), t._cfg.attrs = {}, "text" === t.type ? (r.setAttribute("paint-order", "stroke"), r.setAttribute("style", "stroke-linecap:butt; stroke-linejoin:miter;")) : (n.stroke || n.strokeStyle || r.setAttribute("stroke", "none"), n.fill || n.fillStyle || r.setAttribute("fill", "none")), r
								}, e._assembleMarker = function(t) {
									var e = t.r;
									if (void 0 === t.r && (e = t.radius), isNaN(Number(t.x)) || isNaN(Number(t.y)) || isNaN(Number(e))) return "";
									var n = "";
									return n = "function" == typeof t.symbol ? t.symbol(t.x, t.y, e) : o.Symbols[t.symbol || "circle"](t.x, t.y, e), r.isArray(n) && (n = n.map(function(t) {
										return t.join(" ")
									}).join("")), n
								}, e._assembleRect = function(t) {
									var e = t.x,
										n = t.y,
										o = t.width,
										a = t.height,
										u = t.radius;
									if (!u) return "M " + e + "," + n + " l " + o + ",0 l 0," + a + " l" + -o + " 0 z";
									var c = i(u);
									return r.isArray(u) ? 1 === u.length ? c.r1 = c.r2 = c.r3 = c.r4 = u[0] : 2 === u.length ? (c.r1 = c.r3 = u[0], c.r2 = c.r4 = u[1]) : 3 === u.length ? (c.r1 = u[0], c.r2 = c.r4 = u[1], c.r3 = u[2]) : (c.r1 = u[0], c.r2 = u[1], c.r3 = u[2], c.r4 = u[3]) : c.r1 = c.r2 = c.r3 = c.r4 = u, [
										["M " + (e + c.r1) + "," + n],
										["l " + (o - c.r1 - c.r2) + ",0"],
										["a " + c.r2 + "," + c.r2 + ",0,0,1," + c.r2 + "," + c.r2],
										["l 0," + (a - c.r2 - c.r3)],
										["a " + c.r3 + "," + c.r3 + ",0,0,1," + -c.r3 + "," + c.r3],
										["l " + (c.r3 + c.r4 - o) + ",0"],
										["a " + c.r4 + "," + c.r4 + ",0,0,1," + -c.r4 + "," + -c.r4],
										["l 0," + (c.r4 + c.r1 - a)],
										["a " + c.r1 + "," + c.r1 + ",0,0,1," + c.r1 + "," + -c.r1],
										["z"]
									].join(" ")
								}, e._formatPath = function(t) {
									return ~(t = t.map(function(t) {
										return t.join(" ")
									}).join("")).indexOf("NaN") ? "" : t
								}, e._setTransform = function(t) {
									for (var e = t._attrs.matrix, n = t._cfg.el, r = [], i = 0; i < 9; i += 3) r.push(e[i] + "," + e[i + 1]); - 1 === (r = r.join(",")).indexOf("NaN") ? n.setAttribute("transform", "matrix(" + r + ")") : console.warn("invalid matrix:", e)
								}, e._setImage = function(t, e) {
									var n = t._attrs,
										i = t._cfg.el;
									if (r.isString(e)) i.setAttribute("href", e);
									else if (e instanceof Image) n.width || (i.setAttribute("width", e.width), t._attrs.width = e.width), n.height || (i.setAttribute("height", e.height), t._attrs.height = e.height), i.setAttribute("href", e.src);
									else if (e instanceof HTMLElement && r.isString(e.nodeName) && "CANVAS" === e.nodeName.toUpperCase()) i.setAttribute("href", e.toDataURL());
									else if (e instanceof ImageData) {
										var o = document.createElement("canvas");
										o.setAttribute("width", e.width), o.setAttribute("height", e.height), o.getContext("2d").putImageData(e, 0, 0), n.width || (i.setAttribute("width", e.width), t._attrs.width = e.width), n.height || (i.setAttribute("height", e.height), t._attrs.height = e.height), i.setAttribute("href", o.toDataURL())
									}
								}, e._updateFan = function(t) {
									function e(t, e, n) {
										return {
											x: e * Math.cos(t) + n.x,
											y: e * Math.sin(t) + n.y
										}
									}
									var n = t._attrs,
										i = t._cfg,
										o = {
											x: n.x,
											y: n.y
										},
										a = [],
										u = n.startAngle,
										c = n.endAngle;
									r.isNumberEqual(c - u, 2 * Math.PI) && (c -= 1e-5);
									var s = e(u, n.re, o),
										f = e(c, n.re, o),
										l = c > u ? 1 : 0,
										h = Math.abs(c - u) > Math.PI ? 1 : 0,
										d = n.rs,
										p = n.re,
										g = e(u, n.rs, o),
										v = e(c, n.rs, o);
									n.rs > 0 ? (a.push("M " + f.x + "," + f.y), a.push("L " + v.x + "," + v.y), a.push("A " + d + "," + d + ",0," + h + "," + (1 === l ? 0 : 1) + "," + g.x + "," + g.y), a.push("L " + s.x + " " + s.y)) : (a.push("M " + o.x + "," + o.y), a.push("L " + s.x + "," + s.y)), a.push("A " + p + "," + p + ",0," + h + "," + l + "," + f.x + "," + f.y), n.rs > 0 ? a.push("L " + v.x + "," + v.y) : a.push("Z"), i.el.setAttribute("d", a.join(" "))
								}, e._updateText = function(t) {
									var e = t._attrs,
										n = t._cfg.attrs,
										r = t._cfg.el;
									for (var i in this._setFont(t), e)
										if (e[i] !== n[i]) {
											if ("text" === i) {
												this._setText(t, "" + e[i]);
												continue
											}
											if ("fillStyle" === i || "strokeStyle" === i) {
												this._setColor(t, i, e[i]);
												continue
											}
											if ("matrix" === i) {
												this._setTransform(t);
												continue
											}
											c[i] && r.setAttribute(c[i], e[i])
										} t._cfg.attrs = Object.assign({}, t._attrs), t._cfg.hasUpdate = !1
								}, e._setFont = function(t) {
									var e = t.get("el"),
										n = t._attrs,
										r = n.fontSize;
									e.setAttribute("alignment-baseline", s[n.textBaseline] || "baseline"), e.setAttribute("text-anchor", f[n.textAlign] || "left"), r && +r < 12 && (n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1], t.transform([
										["t", -n.x, -n.y],
										["s", +r / 12, +r / 12],
										["t", n.x, n.y]
									]))
								}, e._setText = function(t, e) {
									var n = t._cfg.el,
										i = t._attrs.textBaseline || "bottom";
									if (e)
										if (~e.indexOf("\n")) {
											var o = t._attrs.x,
												a = e.split("\n"),
												u = a.length - 1,
												c = "";
											r.each(a, function(t, e) {
												0 === e ? "alphabetic" === i ? c += '<tspan x="' + o + '" dy="' + -u + 'em">' + t + "</tspan>" : "top" === i ? c += '<tspan x="' + o + '" dy="0.9em">' + t + "</tspan>" : "middle" === i ? c += '<tspan x="' + o + '" dy="' + -(u - 1) / 2 + 'em">' + t + "</tspan>" : "bottom" === i ? c += '<tspan x="' + o + '" dy="-' + (u + .3) + 'em">' + t + "</tspan>" : "hanging" === i && (c += '<tspan x="' + o + '" dy="' + (-(u - 1) - .3) + 'em">' + t + "</tspan>") : c += '<tspan x="' + o + '" dy="1em">' + t + "</tspan>"
											}), n.innerHTML = c
										} else n.innerHTML = e;
									else n.innerHTML = ""
								}, e._setClip = function(t, e) {
									var n = t._cfg.el;
									if (e)
										if (n.hasAttribute("clip-path")) e._cfg.hasUpdate && this._updateShape(e);
										else {
											this._createDom(e), this._updateShape(e);
											var r = this.context.addClip(e);
											n.setAttribute("clip-path", "url(#" + r + ")")
										}
									else n.removeAttribute("clip-path")
								}, e._setColor = function(t, e, n) {
									var r = t._cfg.el,
										i = this.context;
									if (n)
										if (n = n.trim(), /^[r,R,L,l]{1}[\s]*\(/.test(n)) {
											var o = i.find("gradient", n);
											o || (o = i.addGradient(n)), r.setAttribute(c[e], "url(#" + o + ")")
										} else if (/^[p,P]{1}[\s]*\(/.test(n)) {
										var a = i.find("pattern", n);
										a || (a = i.addPattern(n)), r.setAttribute(c[e], "url(#" + a + ")")
									} else r.setAttribute(c[e], n);
									else r.setAttribute(c[e], "none")
								}, e._setShadow = function(t) {
									var e = t._cfg.el,
										n = t._attrs,
										r = {
											dx: n.shadowOffsetX,
											dy: n.shadowOffsetY,
											blur: n.shadowBlur,
											color: n.shadowColor
										};
									if (r.dx || r.dy || r.blur || r.color) {
										var i = this.context.find("filter", r);
										i || (i = this.context.addShadow(r, this)), e.setAttribute("filter", "url(#" + i + ")")
									} else e.removeAttribute("filter")
								}, t
							}();
						t.exports = l
					}, function(t, e, n) {
						t.exports = {
							painter: n(561),
							getShape: n(554)
						}
					}, function(t, e, n) {
						function r(t, e) {
							var n = t.match(f);
							i.each(n, function(t) {
								t = t.split(":"), e.addColorStop(t[0], t[1])
							})
						}
						var i = n(17),
							o = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
							a = /[^\s\,]+/gi,
							u = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
							c = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
							s = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,
							f = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
							l = {};
						t.exports = {
							parsePath: function(t) {
								return t = t || [], i.isArray(t) ? t : i.isString(t) ? (t = t.match(o), i.each(t, function(e, n) {
									if ((e = e.match(a))[0].length > 1) {
										var r = e[0].charAt(0);
										e.splice(1, 0, e[0].substr(1)), e[0] = r
									}
									i.each(e, function(t, n) {
										isNaN(t) || (e[n] = +t)
									}), t[n] = e
								}), t) : void 0
							},
							parseStyle: function(t, e, n) {
								if (i.isString(t)) {
									if ("(" === t[1] || "(" === t[2]) {
										if ("l" === t[0]) return function(t, e, n) {
											var o, a, c = u.exec(t),
												s = i.mod(i.toRadian(parseFloat(c[1])), 2 * Math.PI),
												f = c[2],
												l = e.getBBox();
											s >= 0 && s < .5 * Math.PI ? (o = {
												x: l.minX,
												y: l.minY
											}, a = {
												x: l.maxX,
												y: l.maxY
											}) : .5 * Math.PI <= s && s < Math.PI ? (o = {
												x: l.maxX,
												y: l.minY
											}, a = {
												x: l.minX,
												y: l.maxY
											}) : Math.PI <= s && s < 1.5 * Math.PI ? (o = {
												x: l.maxX,
												y: l.maxY
											}, a = {
												x: l.minX,
												y: l.minY
											}) : (o = {
												x: l.minX,
												y: l.maxY
											}, a = {
												x: l.maxX,
												y: l.minY
											});
											var h = Math.tan(s),
												d = h * h,
												p = (a.x - o.x + h * (a.y - o.y)) / (d + 1) + o.x,
												g = h * (a.x - o.x + h * (a.y - o.y)) / (d + 1) + o.y,
												v = n.createLinearGradient(o.x, o.y, p, g);
											return r(f, v), v
										}(t, e, n);
										if ("r" === t[0]) return function(t, e, n) {
											var i = c.exec(t),
												o = parseFloat(i[1]),
												a = parseFloat(i[2]),
												u = parseFloat(i[3]),
												s = i[4];
											if (0 === u) {
												var l = s.match(f);
												return l[l.length - 1].split(":")[1]
											}
											var h = e.getBBox(),
												d = h.maxX - h.minX,
												p = h.maxY - h.minY,
												g = Math.sqrt(d * d + p * p) / 2,
												v = n.createRadialGradient(h.minX + d * o, h.minY + p * a, u * g, h.minX + d / 2, h.minY + p / 2, g);
											return r(s, v), v
										}(t, e, n);
										if ("p" === t[0]) return function(t, e, n) {
											function r() {
												i = n.createPattern(o, u), e.setSilent("pattern", i), e.setSilent("patternSource", t)
											}
											if (e.get("patternSource") && e.get("patternSource") === t) return e.get("pattern");
											var i, o, a = s.exec(t),
												u = a[1],
												c = a[2];
											switch (u) {
												case "a":
													u = "repeat";
													break;
												case "x":
													u = "repeat-x";
													break;
												case "y":
													u = "repeat-y";
													break;
												case "n":
													u = "no-repeat";
													break;
												default:
													u = "no-repeat"
											}
											return o = new Image, c.match(/^data:/i) || (o.crossOrigin = "Anonymous"), o.src = c, o.complete ? r() : (o.onload = r, o.src = o.src), i
										}(t, e, n)
									}
									return t
								}
							},
							numberToColor: function(t) {
								var e = l[t];
								if (!e) {
									for (var n = t.toString(16), r = n.length; r < 6; r++) n = "0" + n;
									e = "#" + n, l[t] = e
								}
								return e
							}
						}
					}, function(t, e, n) {
						var r = n(17),
							i = n(563),
							o = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "lineDashOffset"],
							a = function() {
								function t(t) {
									if (!t) return null;
									var e = r.uniqueId("canvas_"),
										n = r.createDom('<canvas id="' + e + '"></canvas>');
									return t.appendChild(n), this.type = "canvas", this.canvas = n, this.context = n.getContext("2d"), this.toDraw = !1, this
								}
								var e = t.prototype;
								return e.beforeDraw = function() {
									var t = this.canvas;
									this.context && this.context.clearRect(0, 0, t.width, t.height)
								}, e.draw = function(t) {
									var e = this;
									e.animateHandler ? e.toDraw = !0 : function n() {
										e.animateHandler = r.requestAnimationFrame(function() {
											e.animateHandler = void 0, e.toDraw && n()
										}), e.beforeDraw();
										try {
											e._drawGroup(t)
										} catch (t) {
											console.warn("error in draw canvas, detail as:"), console.warn(t), e.toDraw = !1
										}
										e.toDraw = !1
									}()
								}, e.drawSync = function(t) {
									this.beforeDraw(), this._drawGroup(t)
								}, e._drawGroup = function(t) {
									if (!t._cfg.removed && !t._cfg.destroyed && t._cfg.visible) {
										var e = t._cfg.children,
											n = null;
										this.setContext(t);
										for (var r = 0; r < e.length; r++) n = e[r], e[r].isGroup ? this._drawGroup(n) : this._drawShape(n);
										this.restoreContext(t)
									}
								}, e._drawShape = function(t) {
									t._cfg.removed || t._cfg.destroyed || !t._cfg.visible || (this.setContext(t), t.drawInner(this.context), this.restoreContext(t), t._cfg.attrs = t._attrs, t._cfg.hasUpdate = !1)
								}, e.setContext = function(t) {
									var e = this.context,
										n = t._attrs.clip;
									e.save(), n && (n.resetTransform(e), n.createPath(e), e.clip()), this.resetContext(t), t.resetTransform(e)
								}, e.restoreContext = function() {
									this.context.restore()
								}, e.resetContext = function(t) {
									var e = this.context,
										n = t._attrs;
									if (!t.isGroup)
										for (var a in n)
											if (o.indexOf(a) > -1) {
												var u = n[a];
												"fillStyle" === a && (u = i.parseStyle(u, t, e)), "strokeStyle" === a && (u = i.parseStyle(u, t, e)), "lineDash" === a && e.setLineDash ? r.isArray(u) ? e.setLineDash(u) : r.isString(u) && e.setLineDash(u.split(" ")) : e[a] = u
											}
								}, t
							}();
						t.exports = a
					}, function(t, e, n) {
						t.exports = {
							painter: n(564)
						}
					}, function(t, e, n) {
						t.exports = {
							canvas: n(565),
							svg: n(562)
						}
					}, function(t, e, n) {
						function r(t, e, n) {
							var r, a = e.startTime;
							if (n < a + e.delay || e.isPaused) return !1;
							var c = e.duration,
								l = e.easing;
							if (n = n - a - e.delay, e.toAttrs.repeat) r = n % c / c, r = u[l](r);
							else {
								if (!((r = n / c) < 1)) return t.attr(e.toAttrs), e.toMatrix && t.setMatrix(e.toMatrix), !0;
								r = u[l](r)
							}
							return function(t, e, n) {
								var r = {},
									a = e.toAttrs,
									u = e.fromAttrs,
									c = e.toMatrix;
								if (!t.get("destroyed")) {
									var l;
									for (var h in a)
										if (!i.isEqual(u[h], a[h]))
											if ("path" === h) {
												var d = a[h],
													p = u[h];
												d.length > p.length ? (d = o.parsePathString(a[h]), p = o.parsePathString(u[h]), p = o.fillPathByDiff(p, d), p = o.formatPath(p, d), e.fromAttrs.path = p, e.toAttrs.path = d) : e.pathFormatted || (d = o.parsePathString(a[h]), p = o.parsePathString(u[h]), p = o.formatPath(p, d), e.fromAttrs.path = p, e.toAttrs.path = d, e.pathFormatted = !0), r[h] = [];
												for (var g = 0; g < d.length; g++) {
													for (var v = d[g], m = p[g], y = [], b = 0; b < v.length; b++) i.isNumber(v[b]) && m && i.isNumber(m[b]) ? (l = s(m[b], v[b]), y.push(l(n))) : y.push(v[b]);
													r[h].push(y)
												}
											} else l = s(u[h], a[h]), r[h] = l(n);
									if (c) {
										var x = f(e.fromMatrix, c)(n);
										t.setMatrix(x)
									}
									t.attr(r)
								}
							}(t, e, r), !1
						}
						var i = n(17),
							o = n(389),
							a = n(15),
							u = n(28),
							c = n(142),
							s = c.interpolate,
							f = c.interpolateArray,
							l = function(t) {
								this._animators = [], this._current = 0, this._timer = null, this.canvas = t
							};
						i.augment(l, {
							initTimer: function() {
								var t, e, n, i = this,
									o = this;
								o._timer = a.timer(function(a) {
									if (o._current = a, i._animators.length > 0) {
										for (var u = i._animators.length - 1; u >= 0; u--)
											if ((t = i._animators[u]).get("destroyed")) o.removeAnimator(u);
											else {
												if (!t.get("pause").isPaused)
													for (var c = (e = t.get("animators")).length - 1; c >= 0; c--) n = e[c], r(t, n, a) && (e.splice(c, 1), n.callback && n.callback());
												0 === e.length && o.removeAnimator(u)
											} i.canvas.draw()
									}
								})
							},
							addAnimator: function(t) {
								this._animators.push(t)
							},
							removeAnimator: function(t) {
								this._animators.splice(t, 1)
							},
							isAnimating: function() {
								return !!this._animators.length
							},
							stop: function() {
								this._timer && this._timer.stop()
							},
							stopAllAnimations: function() {
								this._animators.forEach(function(t) {
									t.stopAnimate()
								}), this._animators = [], this.canvas.draw()
							},
							getTime: function() {
								return this._current
							}
						}), t.exports = l
					}, function(t, e, n) {
						function r(t, e, n) {
							return n.createPath(u), u.isPointInPath(t, e)
						}
						var i = n(17),
							o = n(392),
							a = {
								arc: n(373),
								ellipse: n(435),
								line: n(374)
							},
							u = i.createDom('<canvas width="500" height="500"></canvas>').getContext("2d"),
							c = {
								arc: function(t, e) {
									var n = this._attrs,
										r = n.x,
										i = n.y,
										a = n.r,
										u = n.startAngle,
										c = n.endAngle,
										s = n.clockwise,
										f = this.getHitLineWidth();
									return !!this.hasStroke() && o.arcline(r, i, a, u, c, s, f, t, e)
								},
								circle: function(t, e) {
									var n = this._attrs,
										r = n.x,
										i = n.y,
										a = n.r,
										u = this.getHitLineWidth(),
										c = this.hasFill(),
										s = this.hasStroke();
									return c && s ? o.circle(r, i, a, t, e) || o.arcline(r, i, a, 0, 2 * Math.PI, !1, u, t, e) : c ? o.circle(r, i, a, t, e) : !!s && o.arcline(r, i, a, 0, 2 * Math.PI, !1, u, t, e)
								},
								dom: function(t, e) {
									if (!this._cfg.el) return !1;
									var n = this._cfg.el.getBBox();
									return o.box(n.x, n.x + n.width, n.y, n.y + n.height, t, e)
								},
								ellipse: function(t, e) {
									var n = this._attrs,
										r = this.hasFill(),
										a = this.hasStroke(),
										u = n.x,
										c = n.y,
										s = n.rx,
										f = n.ry,
										l = this.getHitLineWidth(),
										h = s > f ? s : f,
										d = s > f ? 1 : s / f,
										p = s > f ? f / s : 1,
										g = [t, e, 1],
										v = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									i.mat3.scale(v, v, [d, p]), i.mat3.translate(v, v, [u, c]);
									var m = i.mat3.invert([], v);
									return i.vec3.transformMat3(g, g, m), r && a ? o.circle(0, 0, h, g[0], g[1]) || o.arcline(0, 0, h, 0, 2 * Math.PI, !1, l, g[0], g[1]) : r ? o.circle(0, 0, h, g[0], g[1]) : !!a && o.arcline(0, 0, h, 0, 2 * Math.PI, !1, l, g[0], g[1])
								},
								fan: function(t, e) {
									function n() {
										var t = a.arc.nearAngle(b, g, v, m);
										if (i.isNumberEqual(b, t)) {
											var e = i.vec2.squaredLength(y);
											if (d * d <= e && e <= p * p) return !0
										}
										return !1
									}

									function r() {
										var n = u.getHitLineWidth(),
											r = {
												x: Math.cos(g) * d + l,
												y: Math.sin(g) * d + h
											},
											i = {
												x: Math.cos(g) * p + l,
												y: Math.sin(g) * p + h
											},
											a = {
												x: Math.cos(v) * d + l,
												y: Math.sin(v) * d + h
											},
											c = {
												x: Math.cos(v) * p + l,
												y: Math.sin(v) * p + h
											};
										return !!(o.line(r.x, r.y, i.x, i.y, n, t, e) || o.line(a.x, a.y, c.x, c.y, n, t, e) || o.arcline(l, h, d, g, v, m, n, t, e) || o.arcline(l, h, p, g, v, m, n, t, e))
									}
									var u = this,
										c = u.hasFill(),
										s = u.hasStroke(),
										f = u._attrs,
										l = f.x,
										h = f.y,
										d = f.rs,
										p = f.re,
										g = f.startAngle,
										v = f.endAngle,
										m = f.clockwise,
										y = [t - l, e - h],
										b = i.vec2.angleTo([1, 0], y);
									return c && s ? n() || r() : c ? n() : !!s && r()
								},
								image: function(t, e) {
									var n = this._attrs;
									if (this.get("toDraw") || !n.img) return !1;
									this._cfg.attrs && this._cfg.attrs.img === n.img || this._setAttrImg();
									var r = n.x,
										i = n.y,
										a = n.width,
										u = n.height;
									return o.rect(r, i, a, u, t, e)
								},
								line: function(t, e) {
									var n = this._attrs,
										r = n.x1,
										i = n.y1,
										a = n.x2,
										u = n.y2,
										c = this.getHitLineWidth();
									return !!this.hasStroke() && o.line(r, i, a, u, c, t, e)
								},
								path: function(t, e) {
									function n() {
										if (!i.isEmpty(a)) {
											for (var n = o.getHitLineWidth(), r = 0, u = a.length; r < u; r++)
												if (a[r].isInside(t, e, n)) return !0;
											return !1
										}
									}
									var o = this,
										a = o.get("segments"),
										u = o.hasFill(),
										c = o.hasStroke();
									return u && c ? r(t, e, o) || n() : u ? r(t, e, o) : !!c && n()
								},
								marker: function(t, e) {
									var n = this._attrs,
										r = n.x,
										i = n.y,
										a = n.radius || n.r,
										u = this.getHitLineWidth();
									return o.circle(r, i, a + u / 2, t, e)
								},
								polygon: function(t, e) {
									function n() {
										var n = i._attrs.points;
										if (n.length < 2) return !1;
										var r = i.getHitLineWidth(),
											a = n.slice(0);
										return n.length >= 3 && a.push(n[0]), o.polyline(a, r, t, e)
									}
									var i = this,
										a = i.hasFill(),
										u = i.hasStroke();
									return a && u ? r(t, e, i) || n() : a ? r(t, e, i) : !!u && n()
								},
								polyline: function(t, e) {
									var n = this._attrs;
									if (this.hasStroke()) {
										var r = n.points;
										if (r.length < 2) return !1;
										var i = n.lineWidth;
										return o.polyline(r, i, t, e)
									}
									return !1
								},
								rect: function(t, e) {
									function n() {
										var n = i._attrs,
											r = n.x,
											a = n.y,
											u = n.width,
											c = n.height,
											s = n.radius,
											f = i.getHitLineWidth();
										if (0 === s) {
											var l = f / 2;
											return o.line(r - l, a, r + u + l, a, f, t, e) || o.line(r + u, a - l, r + u, a + c + l, f, t, e) || o.line(r + u + l, a + c, r - l, a + c, f, t, e) || o.line(r, a + c + l, r, a - l, f, t, e)
										}
										return o.line(r + s, a, r + u - s, a, f, t, e) || o.line(r + u, a + s, r + u, a + c - s, f, t, e) || o.line(r + u - s, a + c, r + s, a + c, f, t, e) || o.line(r, a + c - s, r, a + s, f, t, e) || o.arcline(r + u - s, a + s, s, 1.5 * Math.PI, 2 * Math.PI, !1, f, t, e) || o.arcline(r + u - s, a + c - s, s, 0, .5 * Math.PI, !1, f, t, e) || o.arcline(r + s, a + c - s, s, .5 * Math.PI, Math.PI, !1, f, t, e) || o.arcline(r + s, a + s, s, Math.PI, 1.5 * Math.PI, !1, f, t, e)
									}
									var i = this,
										a = i.hasFill(),
										u = i.hasStroke();
									return a && u ? r(t, e, i) || n() : a ? r(t, e, i) : !!u && n()
								},
								text: function(t, e) {
									var n = this.getBBox();
									if (this.hasFill() || this.hasStroke()) return o.box(n.minX, n.maxX, n.minY, n.maxY, t, e)
								}
							};
						t.exports = {
							isPointInPath: function(t, e) {
								var n = c[this.type];
								return !!n && n.call(this, t, e)
							}
						}
					}, function(t, e, n) {
						var r = n(37);
						r.Arc = n(434), r.Circle = n(433), r.Dom = n(432), r.Ellipse = n(431), r.Fan = n(430), r.Image = n(429), r.Line = n(428), r.Marker = n(390), r.Path = n(427), r.Polygon = n(426), r.Polyline = n(425), r.Rect = n(424), r.Text = n(423), t.exports = r
					}, function(t, e, n) {
						var r = n(17),
							i = {
								delay: "delay",
								rotate: "rotate"
							},
							o = {
								fill: "fill",
								stroke: "stroke",
								fillStyle: "fillStyle",
								strokeStyle: "strokeStyle"
							};
						t.exports = {
							animate: function(t, e, n, a, u) {
								void 0 === u && (u = 0), this.set("animating", !0);
								var c = this.get("timeline");
								c || (c = this.get("canvas").get("timeline"), this.setSilent("timeline", c));
								var s = this.get("animators") || [];
								c._timer || c.initTimer(), r.isNumber(a) && (u = a, a = null), r.isFunction(n) ? (a = n, n = "easeLinear") : n = n || "easeLinear";
								var f = function(t, e) {
										var n = {
												matrix: null,
												attrs: {}
											},
											a = e._attrs;
										for (var u in t)
											if ("transform" === u) n.matrix = r.transform(e.getMatrix(), t[u]);
											else if ("rotate" === u) n.matrix = r.transform(e.getMatrix(), [
											["r", t[u]]
										]);
										else if ("matrix" === u) n.matrix = t[u];
										else {
											if (o[u] && /^[r,R,L,l]{1}[\s]*\(/.test(t[u])) continue;
											i[u] || a[u] === t[u] || (n.attrs[u] = t[u])
										}
										return n
									}(t, this),
									l = {
										fromAttrs: function(t, e) {
											var n = {},
												r = e._attrs;
											for (var i in t.attrs) n[i] = r[i];
											return n
										}(f, this),
										toAttrs: f.attrs,
										fromMatrix: r.clone(this.getMatrix()),
										toMatrix: f.matrix,
										duration: e,
										easing: n,
										callback: a,
										delay: u,
										startTime: c.getTime(),
										id: r.uniqueId()
									};
								s.length > 0 ? s = function(t, e) {
									var n = e.delay,
										i = Object.prototype.hasOwnProperty;
									return r.each(e.toAttrs, function(e, o) {
										r.each(t, function(t) {
											n < t.startTime + t.duration && i.call(t.toAttrs, o) && (delete t.toAttrs[o], delete t.fromAttrs[o])
										})
									}), e.toMatrix && r.each(t, function(t) {
										n < t.startTime + t.duration && t.toMatrix && delete t.toMatrix
									}), t
								}(s, l) : c.addAnimator(this), s.push(l), this.setSilent("animators", s), this.setSilent("pause", {
									isPaused: !1
								})
							},
							stopAnimate: function() {
								var t = this,
									e = this.get("animators");
								r.each(e, function(e) {
									t.attr(e.toAttrs), e.toMatrix && t.attr("matrix", e.toMatrix), e.callback && e.callback()
								}), this.setSilent("animating", !1), this.setSilent("animators", [])
							},
							pauseAnimate: function() {
								var t = this.get("timeline");
								return this.setSilent("pause", {
									isPaused: !0,
									pauseTime: t.getTime()
								}), this
							},
							resumeAnimate: function() {
								var t = this.get("timeline").getTime(),
									e = this.get("animators"),
									n = this.get("pause").pauseTime;
								return r.each(e, function(e) {
									e.startTime = e.startTime + (t - n), e._paused = !1, e._pauseTime = null
								}), this.setSilent("pause", {
									isPaused: !1
								}), this.setSilent("animators", e), this
							}
						}
					}, function(t, e, n) {
						function r(t) {
							return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7]
						}

						function i(t) {
							return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7]
						}

						function o(t, e) {
							r(e) || (i(e) ? (t[0] *= e[0], t[4] *= e[4]) : a.mat3.multiply(t, t, e))
						}
						var a = n(17);
						t.exports = {
							initTransform: function() {},
							resetMatrix: function() {
								this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1])
							},
							translate: function(t, e) {
								var n = this._attrs.matrix;
								return a.mat3.translate(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this
							},
							rotate: function(t) {
								var e = this._attrs.matrix;
								return a.mat3.rotate(e, e, t), this.clearTotalMatrix(), this.attr("matrix", e), this
							},
							scale: function(t, e) {
								var n = this._attrs.matrix;
								return a.mat3.scale(n, n, [t, e]), this.clearTotalMatrix(), this.attr("matrix", n), this
							},
							rotateAtStart: function(t) {
								var e = this._attrs.x || this._cfg.attrs.x,
									n = this._attrs.y || this._cfg.attrs.y;
								return Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI), this.transform([
									["t", -e, -n],
									["r", t],
									["t", e, n]
								])
							},
							move: function(t, e) {
								var n = this.get("x") || 0,
									r = this.get("y") || 0;
								return this.translate(t - n, e - r), this.set("x", t), this.set("y", e), this
							},
							transform: function(t) {
								var e = this,
									n = this._attrs.matrix;
								return a.each(t, function(t) {
									switch (t[0]) {
										case "t":
											e.translate(t[1], t[2]);
											break;
										case "s":
											e.scale(t[1], t[2]);
											break;
										case "r":
											e.rotate(t[1]);
											break;
										case "m":
											e.attr("matrix", a.mat3.multiply([], n, t[1])), e.clearTotalMatrix()
									}
								}), e
							},
							setTransform: function(t) {
								return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]), this.transform(t)
							},
							getMatrix: function() {
								return this.attr("matrix")
							},
							setMatrix: function(t) {
								return this.attr("matrix", t), this.clearTotalMatrix(), this
							},
							apply: function(t, e) {
								var n;
								return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"), a.vec3.transformMat3(t, t, n), this
							},
							_getMatrixByRoot: function(t) {
								t = t || this;
								for (var e = this, n = []; e !== t;) n.unshift(e), e = e.get("parent");
								n.unshift(e);
								var r = [1, 0, 0, 0, 1, 0, 0, 0, 1];
								return a.each(n, function(t) {
									a.mat3.multiply(r, t.attr("matrix"), r)
								}), r
							},
							getTotalMatrix: function() {
								var t = this._cfg.totalMatrix;
								if (!t) {
									t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
									var e = this._cfg.parent;
									e && o(t, e.getTotalMatrix()), o(t, this.attr("matrix")), this._cfg.totalMatrix = t
								}
								return t
							},
							clearTotalMatrix: function() {},
							invert: function(t) {
								var e = this.getTotalMatrix();
								if (i(e)) t[0] /= e[0], t[1] /= e[4];
								else {
									var n = a.mat3.invert([], e);
									n && a.vec3.transformMat3(t, t, n)
								}
								return this
							},
							resetTransform: function(t) {
								var e = this.attr("matrix");
								r(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
							}
						}
					}, function(t, e, n) {
						var r = n(17);
						t.exports = {
							canFill: !1,
							canStroke: !1,
							initAttrs: function(t) {
								return this._attrs = {
									opacity: 1,
									fillOpacity: 1,
									strokeOpacity: 1,
									matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
								}, this.attr(r.assign(this.getDefaultAttrs(), t)), this
							},
							getDefaultAttrs: function() {
								return {}
							},
							attr: function(t, e) {
								if (0 === arguments.length) return this._attrs;
								if (r.isObject(t)) {
									for (var n in t) this._setAttr(n, t[n]);
									return this.clearBBox(), this._cfg.hasUpdate = !0, this
								}
								return 2 === arguments.length ? (this._setAttr(t, e), this.clearBBox(), this._cfg.hasUpdate = !0, this) : this._attrs[t]
							},
							_setAttr: function(t, e) {
								var n = this._attrs;
								n[t] = e, "fill" !== t && "stroke" !== t ? "opacity" !== t ? "clip" === t && e ? this._setClip(e) : "path" === t && this._afterSetAttrPath ? this._afterSetAttrPath(e) : "transform" !== t ? "rotate" === t && this.rotateAtStart(e) : this.transform(e) : n.globalAlpha = e : n[t + "Style"] = e
							},
							clearBBox: function() {
								this.setSilent("box", null)
							},
							hasFill: function() {
								return this.canFill && this._attrs.fillStyle
							},
							hasStroke: function() {
								return this.canStroke && this._attrs.strokeStyle
							},
							_setClip: function(t) {
								t._cfg.renderer = this._cfg.renderer, t._cfg.canvas = this._cfg.canvas, t._cfg.parent = this._cfg.parent, t.hasFill = function() {
									return !0
								}
							}
						}
					}, function(t, e, n) {
						var r = n(17),
							i = n(439),
							o = n(438),
							a = n(567),
							u = n(566),
							c = function t(e) {
								t.superclass.constructor.call(this, e)
							};
						c.CFG = {
							eventEnable: !0,
							width: null,
							height: null,
							widthCanvas: null,
							heightCanvas: null,
							widthStyle: null,
							heightStyle: null,
							containerDOM: null,
							canvasDOM: null,
							pixelRatio: null,
							renderer: "canvas"
						}, r.extend(c, o), r.augment(c, {
							init: function() {
								c.superclass.init.call(this), this._setGlobalParam(), this._setContainer(), this._initPainter(), this._scale(), this.get("eventEnable") && this._registEvents()
							},
							getEmitter: function(t, e) {
								if (t) {
									if (!r.isEmpty(t._getEvents())) return t;
									var n = t.get("parent");
									if (n && !e.propagationStopped) return this.getEmitter(n, e)
								}
							},
							_getEventObj: function(t, e, n, r) {
								var o = new i(t, e, !0, !0);
								return o.x = n.x, o.y = n.y, o.clientX = e.clientX, o.clientY = e.clientY, o.currentTarget = r, o.target = r, o
							},
							_triggerEvent: function(t, e) {
								var n, r = this.getPointByClient(e.clientX, e.clientY),
									i = this.getShape(r.x, r.y, e),
									o = this.get("el");
								if ("mousemove" === t) {
									var a = this.get("preShape");
									if (a && a !== i) {
										var u = this._getEventObj("mouseleave", e, r, a);
										(n = this.getEmitter(a, e)) && n.emit("mouseleave", u), o.style.cursor = "default"
									}
									if (i) {
										var c = this._getEventObj("mousemove", e, r, i);
										if ((n = this.getEmitter(i, e)) && n.emit("mousemove", c), a !== i) {
											var s = this._getEventObj("mouseenter", e, r, i);
											n && n.emit("mouseenter", s, e)
										}
									} else {
										var f = this._getEventObj("mousemove", e, r, this);
										this.emit("mousemove", f)
									}
									this.set("preShape", i)
								} else {
									var l = this._getEventObj(t, e, r, i || this);
									(n = this.getEmitter(i, e)) && n !== this && n.emit(t, l), this.emit(t, l)
								}
								i && !i.get("destroyed") && (o.style.cursor = i.attr("cursor") || "default")
							},
							_registEvents: function() {
								var t = this,
									e = t.get("el");
								r.each(["mouseout", "mouseover", "mousemove", "mousedown", "mouseleave", "mouseup", "click", "dblclick"], function(n) {
									e.addEventListener(n, function(e) {
										t._triggerEvent(n, e)
									}, !1)
								}), e.addEventListener("touchstart", function(e) {
									r.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0])
								}, !1), e.addEventListener("touchmove", function(e) {
									r.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0])
								}, !1), e.addEventListener("touchend", function(e) {
									r.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0])
								}, !1)
							},
							_scale: function() {
								var t = this.get("pixelRatio");
								this.scale(t, t)
							},
							_setGlobalParam: function() {
								this.get("pixelRatio") || this.set("pixelRatio", r.getRatio());
								var t = u[this.get("renderer") || "canvas"];
								this._cfg.renderer = t, this._cfg.canvas = this;
								var e = new a(this);
								this._cfg.timeline = e
							},
							_setContainer: function() {
								var t = this.get("containerId"),
									e = this.get("containerDOM");
								e || (e = document.getElementById(t), this.set("containerDOM", e)), r.modifyCSS(e, {
									position: "relative"
								})
							},
							_initPainter: function() {
								var t = this.get("containerDOM"),
									e = new this._cfg.renderer.painter(t);
								this._cfg.painter = e, this._cfg.canvasDOM = this._cfg.el = e.canvas, this.changeSize(this.get("width"), this.get("height"))
							},
							_resize: function() {
								var t = this.get("canvasDOM"),
									e = this.get("widthCanvas"),
									n = this.get("heightCanvas"),
									r = this.get("widthStyle"),
									i = this.get("heightStyle");
								t.style.width = r, t.style.height = i, t.setAttribute("width", e), t.setAttribute("height", n)
							},
							getWidth: function() {
								var t = this.get("pixelRatio");
								return this.get("width") * t
							},
							getHeight: function() {
								var t = this.get("pixelRatio");
								return this.get("height") * t
							},
							changeSize: function(t, e) {
								var n = this.get("pixelRatio"),
									r = t * n,
									i = e * n;
								this.set("widthCanvas", r), this.set("heightCanvas", i), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._resize()
							},
							getPointByClient: function(t, e) {
								var n = this.get("el"),
									r = this.get("pixelRatio") || 1,
									i = n.getBoundingClientRect();
								return {
									x: (t - i.left) * r,
									y: (e - i.top) * r
								}
							},
							getClientByPoint: function(t, e) {
								var n = this.get("el").getBoundingClientRect(),
									r = this.get("pixelRatio") || 1;
								return {
									clientX: t / r + n.left,
									clientY: e / r + n.top
								}
							},
							draw: function() {
								this._cfg.painter.draw(this)
							},
							getShape: function(t, e, n) {
								return 3 === arguments.length && this._cfg.renderer.getShape ? this._cfg.renderer.getShape.call(this, t, e, n) : c.superclass.getShape.call(this, t, e)
							},
							_drawSync: function() {
								this._cfg.painter.drawSync(this)
							},
							destroy: function() {
								var t = this._cfg,
									e = t.containerDOM,
									n = t.canvasDOM;
								n && e && e.removeChild(n), t.timeline.stop(), c.superclass.destroy.call(this)
							}
						}), t.exports = c
					}, function(t, e, n) {
						var r = n(152),
							i = {};
						n(159).mix(i, r.PathUtil, {
							getRectPath: r.PathUtil.rectPath,
							pointsToPolygon: function(t) {
								for (var e = [
										["M", t[0].x, t[0].y]
									], n = 1; n < t.length; n++) {
									var r = t[n];
									e.push(["L", r.x, r.y])
								}
								return e
							},
							getEllipsePath: function(t, e, n, r) {
								return [
									["M", t, e - r],
									["a", n, r, 0, 1, 1, 0, 2 * r],
									["a", n, r, 0, 1, 1, 0, -2 * r],
									["z"]
								]
							}
						}), t.exports = i
					}, function(t, e) {
						t.exports = function() {}
					}, function(t, e, n) {
						var r = n(451),
							i = n(575),
							o = n(394),
							a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(t) {
								return new r(t)
							} : i;
						t.exports = a
					}, function(t, e) {
						t.exports = function(t, e, n) {
							for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
								if (n(e, t[r])) return !0;
							return !1
						}
					}, function(t, e, n) {
						var r = n(468);
						t.exports = function(t, e) {
							return !(null == t || !t.length) && r(t, e, 0) > -1
						}
					}, function(t, e, n) {
						var r = n(447),
							i = n(578),
							o = n(577),
							a = n(446),
							u = n(576),
							c = n(394);
						t.exports = function(t, e, n) {
							var s = -1,
								f = i,
								l = t.length,
								h = !0,
								d = [],
								p = d;
							if (n) h = !1, f = o;
							else if (l >= 200) {
								var g = e ? null : u(t);
								if (g) return c(g);
								h = !1, f = a, p = new r
							} else p = e ? [] : d;
							t: for (; ++s < l;) {
								var v = t[s],
									m = e ? e(v) : v;
								if (v = n || 0 !== v ? v : 0, h && m == m) {
									for (var y = p.length; y--;)
										if (p[y] === m) continue t;
									e && p.push(m), d.push(v)
								} else f(p, m, n) || (p !== d && p.push(m), d.push(v))
							}
							return d
						}
					}, function(t, e, n) {
						var r = n(579);
						t.exports = function(t) {
							return t && t.length ? r(t) : []
						}
					}, function(t, e, n) {
						var r = n(60);
						t.exports = function() {
							return r.Date.now()
						}
					}, function(t, e, n) {
						var r = n(441),
							i = n(75);
						t.exports = function(t, e, n) {
							var o = !0,
								a = !0;
							if ("function" != typeof t) throw new TypeError("Expected a function");
							return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), r(t, e, {
								leading: o,
								maxWait: e,
								trailing: a
							})
						}
					}, function(t, e, n) {
						var r = n(443);
						t.exports = function(t) {
							return function(e) {
								return r(e, t)
							}
						}
					}, function(t, e) {
						t.exports = function(t) {
							return function(e) {
								return null == e ? void 0 : e[t]
							}
						}
					}, function(t, e, n) {
						var r = n(584),
							i = n(583),
							o = n(393),
							a = n(375);
						t.exports = function(t) {
							return o(t) ? r(a(t)) : i(t)
						}
					}, function(t, e) {
						t.exports = function(t) {
							return t
						}
					}, function(t, e, n) {
						var r = n(442),
							i = n(461),
							o = n(63),
							a = n(460),
							u = n(401),
							c = n(375);
						t.exports = function(t, e, n) {
							for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
								var h = c(e[s]);
								if (!(l = null != t && n(t, h))) break;
								t = t[h]
							}
							return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(h, f) && (o(t) || i(t))
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return null != t && e in Object(t)
						}
					}, function(t, e, n) {
						var r = n(588),
							i = n(587);
						t.exports = function(t, e) {
							return null != t && i(t, e, r)
						}
					}, function(t, e, n) {
						function r(t, e) {
							if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
							var n = function n() {
								var r = arguments,
									i = e ? e.apply(this, r) : r[0],
									o = n.cache;
								if (o.has(i)) return o.get(i);
								var a = t.apply(this, r);
								return n.cache = o.set(i, a) || o, a
							};
							return n.cache = new(r.Cache || i), n
						}
						var i = n(403),
							o = "Expected a function";
						r.Cache = i, t.exports = r
					}, function(t, e, n) {
						var r = n(590);
						t.exports = function(t) {
							var e = r(t, function(t) {
									return 500 === n.size && n.clear(), t
								}),
								n = e.cache;
							return e
						}
					}, function(t, e, n) {
						var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
							i = /\\(\\)?/g,
							o = n(591)(function(t) {
								var e = [];
								return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, function(t, n, r, o) {
									e.push(r ? o.replace(i, "$1") : n || t)
								}), e
							});
						t.exports = o
					}, function(t, e, n) {
						var r = n(443);
						t.exports = function(t, e, n) {
							var i = null == t ? void 0 : r(t, e);
							return void 0 === i ? n : i
						}
					}, function(t, e, n) {
						var r = n(449),
							i = n(593),
							o = n(589),
							a = n(393),
							u = n(445),
							c = n(444),
							s = n(375);
						t.exports = function(t, e) {
							return a(t) && u(e) ? c(s(t), e) : function(n) {
								var a = i(n, t);
								return void 0 === a && a === e ? o(n, t) : r(e, a, 3)
							}
						}
					}, function(t, e, n) {
						var r = n(445),
							i = n(363);
						t.exports = function(t) {
							for (var e = i(t), n = e.length; n--;) {
								var o = e[n],
									a = t[o];
								e[n] = [o, a, r(a)]
							}
							return e
						}
					}, function(t, e, n) {
						var r = n(453),
							i = Object.prototype.hasOwnProperty;
						t.exports = function(t, e, n, o, a, u) {
							var c = 1 & n,
								s = r(t),
								f = s.length;
							if (f != r(e).length && !c) return !1;
							for (var l = f; l--;) {
								var h = s[l];
								if (!(c ? h in e : i.call(e, h))) return !1
							}
							var d = u.get(t);
							if (d && u.get(e)) return d == e;
							var p = !0;
							u.set(t, e), u.set(e, t);
							for (var g = c; ++l < f;) {
								var v = t[h = s[l]],
									m = e[h];
								if (o) var y = c ? o(m, v, h, e, t, u) : o(v, m, h, t, e, u);
								if (!(void 0 === y ? v === m || a(v, m, n, o, u) : y)) {
									p = !1;
									break
								}
								g || (g = "constructor" == h)
							}
							if (p && !g) {
								var b = t.constructor,
									x = e.constructor;
								b != x && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof x && x instanceof x) && (p = !1)
							}
							return u.delete(t), u.delete(e), p
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = -1,
								n = Array(t.size);
							return t.forEach(function(t, r) {
								n[++e] = [r, t]
							}), n
						}
					}, function(t, e, n) {
						var r = n(364),
							i = n(450),
							o = n(405),
							a = n(448),
							u = n(597),
							c = n(394),
							s = r ? r.prototype : void 0,
							f = s ? s.valueOf : void 0;
						t.exports = function(t, e, n, r, s, l, h) {
							switch (n) {
								case "[object DataView]":
									if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
									t = t.buffer, e = e.buffer;
								case "[object ArrayBuffer]":
									return !(t.byteLength != e.byteLength || !l(new i(t), new i(e)));
								case "[object Boolean]":
								case "[object Date]":
								case "[object Number]":
									return o(+t, +e);
								case "[object Error]":
									return t.name == e.name && t.message == e.message;
								case "[object RegExp]":
								case "[object String]":
									return t == e + "";
								case "[object Map]":
									var d = u;
								case "[object Set]":
									var p = 1 & r;
									if (d || (d = c), t.size != e.size && !p) return !1;
									var g = h.get(t);
									if (g) return g == e;
									r |= 2, h.set(t, e);
									var v = a(d(t), d(e), r, s, l, h);
									return h.delete(t), v;
								case "[object Symbol]":
									if (f) return f.call(t) == f.call(e)
							}
							return !1
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
								if (e(t[n], n, t)) return !0;
							return !1
						}
					}, function(t, e) {
						t.exports = function(t) {
							return this.__data__.has(t)
						}
					}, function(t, e) {
						t.exports = function(t) {
							return this.__data__.set(t, "__lodash_hash_undefined__"), this
						}
					}, function(t, e, n) {
						var r = n(406),
							i = n(448),
							o = n(598),
							a = n(596),
							u = n(376),
							c = n(63),
							s = n(402),
							f = n(459),
							l = "[object Arguments]",
							h = "[object Array]",
							d = "[object Object]",
							p = Object.prototype.hasOwnProperty;
						t.exports = function(t, e, n, g, v, m) {
							var y = c(t),
								b = c(e),
								x = y ? h : u(t),
								_ = b ? h : u(e),
								w = (x = x == l ? d : x) == d,
								S = (_ = _ == l ? d : _) == d,
								M = x == _;
							if (M && s(t)) {
								if (!s(e)) return !1;
								y = !0, w = !1
							}
							if (M && !w) return m || (m = new r), y || f(t) ? i(t, e, n, g, v, m) : o(t, e, x, n, g, v, m);
							if (!(1 & n)) {
								var O = w && p.call(t, "__wrapped__"),
									P = S && p.call(e, "__wrapped__");
								if (O || P) {
									var E = O ? t.value() : t,
										A = P ? e.value() : e;
									return m || (m = new r), v(E, A, n, g, m)
								}
							}
							return !!M && (m || (m = new r), a(t, e, n, g, v, m))
						}
					}, function(t, e, n) {
						var r = n(406),
							i = n(449);
						t.exports = function(t, e, n, o) {
							var a = n.length,
								u = a,
								c = !o;
							if (null == t) return !u;
							for (t = Object(t); a--;) {
								var s = n[a];
								if (c && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
							}
							for (; ++a < u;) {
								var f = (s = n[a])[0],
									l = t[f],
									h = s[1];
								if (c && s[2]) {
									if (void 0 === l && !(f in t)) return !1
								} else {
									var d = new r;
									if (o) var p = o(l, h, f, t, e, d);
									if (!(void 0 === p ? i(h, l, 3, o, d) : p)) return !1
								}
							}
							return !0
						}
					}, function(t, e, n) {
						var r = n(603),
							i = n(595),
							o = n(444);
						t.exports = function(t) {
							var e = i(t);
							return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
								return n === t || r(n, t, e)
							}
						}
					}, function(t, e, n) {
						var r = n(604),
							i = n(594),
							a = n(586),
							u = n(63),
							c = n(585);
						t.exports = function(t) {
							return "function" == typeof t ? t : null == t ? a : "object" == (void 0 === t ? "undefined" : o(t)) ? u(t) ? i(t[0], t[1]) : r(t) : c(t)
						}
					}, function(t, e, n) {
						var r = n(397);
						t.exports = function(t, e) {
							return function(n, i) {
								if (null == n) return n;
								if (!r(n)) return t(n, i);
								for (var o = n.length, a = e ? o : -1, u = Object(n);
									(e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
								return n
							}
						}
					}, function(t, e) {
						t.exports = function(t) {
							return function(e, n, r) {
								for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
									var c = a[t ? u : ++i];
									if (!1 === n(o[c], c, o)) break
								}
								return e
							}
						}
					}, function(t, e, n) {
						var r = n(607)();
						t.exports = r
					}, function(t, e, n) {
						var r = n(608),
							i = n(363);
						t.exports = function(t, e) {
							return t && r(t, e, i)
						}
					}, function(t, e, n) {
						var r = n(609),
							i = n(606)(r);
						t.exports = i
					}, function(t, e, n) {
						var r = n(610);
						t.exports = function(t, e) {
							var n = [];
							return r(t, function(t, r, i) {
								e(t, r, i) && n.push(t)
							}), n
						}
					}, function(t, e, n) {
						var r = n(457),
							i = n(611),
							o = n(605),
							a = n(63);
						t.exports = function(t, e) {
							return (a(t) ? r : i)(t, o(e, 3))
						}
					}, function(t, e, n) {
						var r = n(467),
							i = n(407),
							o = n(409),
							a = Math.min;
						t.exports = function(t) {
							var e = Math[t];
							return function(t, n) {
								if (t = i(t), n = null == n ? 0 : a(r(n), 292)) {
									var u = (o(t) + "e").split("e"),
										c = e(u[0] + "e" + (+u[1] + n));
									return +((u = (o(c) + "e").split("e"))[0] + "e" + (+u[1] - n))
								}
								return e(t)
							}
						}
					}, function(t, e, n) {
						var r = n(613)("round");
						t.exports = r
					}, function(t, e, n) {
						var r = n(376),
							i = n(139);
						t.exports = function(t) {
							return i(t) && "[object Set]" == r(t)
						}
					}, function(t, e, n) {
						var r = n(615),
							i = n(400),
							o = n(399),
							a = o && o.isSet,
							u = a ? i(a) : r;
						t.exports = u
					}, function(t, e, n) {
						var r = n(376),
							i = n(139);
						t.exports = function(t) {
							return i(t) && "[object Map]" == r(t)
						}
					}, function(t, e, n) {
						var r = n(617),
							i = n(400),
							o = n(399),
							a = o && o.isMap,
							u = a ? i(a) : r;
						t.exports = u
					}, function(t, e, n) {
						var r = n(75),
							i = Object.create,
							o = function() {
								function t() {}
								return function(e) {
									if (!r(e)) return {};
									if (i) return i(e);
									t.prototype = e;
									var n = new t;
									return t.prototype = void 0, n
								}
							}();
						t.exports = o
					}, function(t, e, n) {
						var r = n(619),
							i = n(408),
							o = n(398);
						t.exports = function(t) {
							return "function" != typeof t.constructor || o(t) ? {} : r(i(t))
						}
					}, function(t, e, n) {
						var r = n(395);
						t.exports = function(t, e) {
							var n = e ? r(t.buffer) : t.buffer;
							return new t.constructor(n, t.byteOffset, t.length)
						}
					}, function(t, e, n) {
						var r = n(364),
							i = r ? r.prototype : void 0,
							o = i ? i.valueOf : void 0;
						t.exports = function(t) {
							return o ? Object(o.call(t)) : {}
						}
					}, function(t, e) {
						var n = /\w*$/;
						t.exports = function(t) {
							var e = new t.constructor(t.source, n.exec(t));
							return e.lastIndex = t.lastIndex, e
						}
					}, function(t, e, n) {
						var r = n(395);
						t.exports = function(t, e) {
							var n = e ? r(t.buffer) : t.buffer;
							return new t.constructor(n, t.byteOffset, t.byteLength)
						}
					}, function(t, e, n) {
						var r = n(395),
							i = n(624),
							o = n(623),
							a = n(622),
							u = n(621);
						t.exports = function(t, e, n) {
							var c = t.constructor;
							switch (e) {
								case "[object ArrayBuffer]":
									return r(t);
								case "[object Boolean]":
								case "[object Date]":
									return new c(+t);
								case "[object DataView]":
									return i(t, n);
								case "[object Float32Array]":
								case "[object Float64Array]":
								case "[object Int8Array]":
								case "[object Int16Array]":
								case "[object Int32Array]":
								case "[object Uint8Array]":
								case "[object Uint8ClampedArray]":
								case "[object Uint16Array]":
								case "[object Uint32Array]":
									return u(t, n);
								case "[object Map]":
									return new c;
								case "[object Number]":
								case "[object String]":
									return new c(t);
								case "[object RegExp]":
									return o(t);
								case "[object Set]":
									return new c;
								case "[object Symbol]":
									return a(t)
							}
						}
					}, function(t, e) {
						var n = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							var e = t.length,
								r = new t.constructor(e);
							return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r
						}
					}, function(t, e, n) {
						var r = n(153)(n(60), "WeakMap");
						t.exports = r
					}, function(t, e, n) {
						var r = n(153)(n(60), "Promise");
						t.exports = r
					}, function(t, e, n) {
						var r = n(153)(n(60), "DataView");
						t.exports = r
					}, function(t, e, n) {
						var r = n(452),
							i = n(455),
							o = n(458);
						t.exports = function(t) {
							return r(t, o, i)
						}
					}, function(t, e, n) {
						var r = n(377),
							i = n(455);
						t.exports = function(t, e) {
							return r(t, i(t), e)
						}
					}, function(t, e, n) {
						var r = n(377),
							i = n(396);
						t.exports = function(t, e) {
							return r(t, i(t), e)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = -1,
								r = t.length;
							for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
							return e
						}
					}, function(t, e, n) {
						(function(t) {
							var r = n(60),
								i = "object" == (void 0 === e ? "undefined" : o(e)) && e && !e.nodeType && e,
								a = i && "object" == (void 0 === t ? "undefined" : o(t)) && t && !t.nodeType && t,
								u = a && a.exports === i ? r.Buffer : void 0,
								c = u ? u.allocUnsafe : void 0;
							t.exports = function(t, e) {
								if (e) return t.slice();
								var n = t.length,
									r = c ? c(n) : new t.constructor(n);
								return t.copy(r), r
							}
						}).call(this, n(74)(t))
					}, function(t, e) {
						t.exports = function(t) {
							var e = [];
							if (null != t)
								for (var n in Object(t)) e.push(n);
							return e
						}
					}, function(t, e, n) {
						var r = n(75),
							i = n(398),
							o = n(635),
							a = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							if (!r(t)) return o(t);
							var e = i(t),
								n = [];
							for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
							return n
						}
					}, function(t, e, n) {
						var r = n(377),
							i = n(458);
						t.exports = function(t, e) {
							return t && r(e, i(e), t)
						}
					}, function(t, e, n) {
						var r = n(469)(Object.keys, Object);
						t.exports = r
					}, function(t, e, n) {
						var r = n(398),
							i = n(638),
							o = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							if (!r(t)) return i(t);
							var e = [];
							for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
							return e
						}
					}, function(t, e, n) {
						var r = n(158),
							i = n(401),
							o = n(139),
							a = {};
						a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
							return o(t) && i(t.length) && !!a[r(t)]
						}
					}, function(t, e) {
						t.exports = function() {
							return !1
						}
					}, function(t, e, n) {
						var r = n(158),
							i = n(139);
						t.exports = function(t) {
							return i(t) && "[object Arguments]" == r(t)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
							return r
						}
					}, function(t, e, n) {
						var r = n(377),
							i = n(363);
						t.exports = function(t, e) {
							return t && r(e, i(e), t)
						}
					}, function(t, e, n) {
						var r = n(153),
							i = function() {
								try {
									var t = r(Object, "defineProperty");
									return t({}, "", {}), t
								} catch (t) {}
							}();
						t.exports = i
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
							return t
						}
					}, function(t, e, n) {
						var r = n(378);
						t.exports = function(t, e) {
							var n = r(this, t),
								i = n.size;
							return n.set(t, e), this.size += n.size == i ? 0 : 1, this
						}
					}, function(t, e, n) {
						var r = n(378);
						t.exports = function(t) {
							return r(this, t).has(t)
						}
					}, function(t, e, n) {
						var r = n(378);
						t.exports = function(t) {
							return r(this, t).get(t)
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = void 0 === t ? "undefined" : o(t);
							return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
						}
					}, function(t, e, n) {
						var r = n(378);
						t.exports = function(t) {
							var e = r(this, t).delete(t);
							return this.size -= e ? 1 : 0, e
						}
					}, function(t, e, n) {
						var r = n(379);
						t.exports = function(t, e) {
							var n = this.__data__;
							return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
						}
					}, function(t, e, n) {
						var r = n(379),
							i = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							var e = this.__data__;
							return r ? void 0 !== e[t] : i.call(e, t)
						}
					}, function(t, e, n) {
						var r = n(379),
							i = Object.prototype.hasOwnProperty;
						t.exports = function(t) {
							var e = this.__data__;
							if (r) {
								var n = e[t];
								return "__lodash_hash_undefined__" === n ? void 0 : n
							}
							return i.call(e, t) ? e[t] : void 0
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = this.has(t) && delete this.__data__[t];
							return this.size -= e ? 1 : 0, e
						}
					}, function(t, e, n) {
						var r = n(379);
						t.exports = function() {
							this.__data__ = r ? r(null) : {}, this.size = 0
						}
					}, function(t, e, n) {
						function r(t) {
							var e = -1,
								n = null == t ? 0 : t.length;
							for (this.clear(); ++e < n;) {
								var r = t[e];
								this.set(r[0], r[1])
							}
						}
						var i = n(656),
							o = n(655),
							a = n(654),
							u = n(653),
							c = n(652);
						r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
					}, function(t, e, n) {
						var r = n(657),
							i = n(381),
							o = n(404);
						t.exports = function() {
							this.size = 0, this.__data__ = {
								hash: new r,
								map: new(o || i),
								string: new r
							}
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return null == t ? void 0 : t[e]
						}
					}, function(t, e, n) {
						var r = n(60)["__core-js_shared__"];
						t.exports = r
					}, function(t, e, n) {
						var r = n(660),
							i = function() {
								var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
								return t ? "Symbol(src)_1." + t : ""
							}();
						t.exports = function(t) {
							return !!i && i in t
						}
					}, function(t, e, n) {
						var r = n(466),
							i = n(661),
							o = n(75),
							a = n(465),
							u = /^\[object .+?Constructor\]$/,
							c = Function.prototype,
							s = Object.prototype,
							f = c.toString,
							l = s.hasOwnProperty,
							h = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
						t.exports = function(t) {
							return !(!o(t) || i(t)) && (r(t) ? h : u).test(a(t))
						}
					}, function(t, e, n) {
						var r = n(381),
							i = n(404),
							o = n(403);
						t.exports = function(t, e) {
							var n = this.__data__;
							if (n instanceof r) {
								var a = n.__data__;
								if (!i || a.length < 199) return a.push([t, e]), this.size = ++n.size, this;
								n = this.__data__ = new o(a)
							}
							return n.set(t, e), this.size = n.size, this
						}
					}, function(t, e) {
						t.exports = function(t) {
							return this.__data__.has(t)
						}
					}, function(t, e) {
						t.exports = function(t) {
							return this.__data__.get(t)
						}
					}, function(t, e) {
						t.exports = function(t) {
							var e = this.__data__,
								n = e.delete(t);
							return this.size = e.size, n
						}
					}, function(t, e, n) {
						var r = n(381);
						t.exports = function() {
							this.__data__ = new r, this.size = 0
						}
					}, function(t, e, n) {
						var r = n(380);
						t.exports = function(t, e) {
							var n = this.__data__,
								i = r(n, t);
							return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
						}
					}, function(t, e, n) {
						var r = n(380);
						t.exports = function(t) {
							return r(this.__data__, t) > -1
						}
					}, function(t, e, n) {
						var r = n(380);
						t.exports = function(t) {
							var e = this.__data__,
								n = r(e, t);
							return n < 0 ? void 0 : e[n][1]
						}
					}, function(t, e, n) {
						var r = n(380),
							i = Array.prototype.splice;
						t.exports = function(t) {
							var e = this.__data__,
								n = r(e, t);
							return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
						}
					}, function(t, e) {
						t.exports = function() {
							this.__data__ = [], this.size = 0
						}
					}, function(t, e, n) {
						var r = n(406),
							i = n(646),
							o = n(464),
							a = n(644),
							u = n(637),
							c = n(634),
							s = n(633),
							f = n(632),
							l = n(631),
							h = n(453),
							d = n(630),
							p = n(376),
							g = n(626),
							v = n(625),
							m = n(620),
							y = n(63),
							b = n(402),
							x = n(618),
							_ = n(75),
							w = n(616),
							S = n(363),
							M = "[object Arguments]",
							O = "[object Function]",
							P = "[object Object]",
							E = {};
						E[M] = E["[object Array]"] = E["[object ArrayBuffer]"] = E["[object DataView]"] = E["[object Boolean]"] = E["[object Date]"] = E["[object Float32Array]"] = E["[object Float64Array]"] = E["[object Int8Array]"] = E["[object Int16Array]"] = E["[object Int32Array]"] = E["[object Map]"] = E["[object Number]"] = E[P] = E["[object RegExp]"] = E["[object Set]"] = E["[object String]"] = E["[object Symbol]"] = E["[object Uint8Array]"] = E["[object Uint8ClampedArray]"] = E["[object Uint16Array]"] = E["[object Uint32Array]"] = !0, E["[object Error]"] = E[O] = E["[object WeakMap]"] = !1, t.exports = function t(e, n, A, C, j, k) {
							var I, T = 1 & n,
								B = 2 & n,
								N = 4 & n;
							if (A && (I = j ? A(e, C, j, k) : A(e)), void 0 !== I) return I;
							if (!_(e)) return e;
							var L = y(e);
							if (L) {
								if (I = g(e), !T) return s(e, I)
							} else {
								var D = p(e),
									R = D == O || "[object GeneratorFunction]" == D;
								if (b(e)) return c(e, T);
								if (D == P || D == M || R && !j) {
									if (I = B || R ? {} : m(e), !T) return B ? l(e, u(I, e)) : f(e, a(I, e))
								} else {
									if (!E[D]) return j ? e : {};
									I = v(e, D, T)
								}
							}
							k || (k = new r);
							var G = k.get(e);
							if (G) return G;
							if (k.set(e, I), w(e)) return e.forEach(function(r) {
								I.add(t(r, n, A, r, e, k))
							}), I;
							if (x(e)) return e.forEach(function(r, i) {
								I.set(i, t(r, n, A, i, e, k))
							}), I;
							var Y = N ? B ? d : h : B ? keysIn : S,
								F = L ? void 0 : Y(e);
							return i(F || e, function(r, i) {
								F && (r = e[i = r]), o(I, i, t(r, n, A, i, e, k))
							}), I
						}
					}, function(t, e, n) {
						var r = n(673);
						t.exports = function(t) {
							return r(t, 5)
						}
					}, function(t, e, n) {
						var r = n(407);
						t.exports = function(t) {
							return t ? (t = r(t)) === 1 / 0 || t === -1 / 0 ? 1.7976931348623157e308 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
						}
					}, function(t, e) {
						t.exports = function(t, e, n) {
							for (var r = n - 1, i = t.length; ++r < i;)
								if (t[r] === e) return r;
							return -1
						}
					}, function(t, e) {
						t.exports = function(t) {
							return t != t
						}
					}, function(t, e) {
						t.exports = function(t, e, n, r) {
							for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
								if (e(t[o], o, t)) return o;
							return -1
						}
					}, function(t, e, n) {
						var r = n(468),
							i = n(467),
							o = Math.max;
						t.exports = function(t, e, n) {
							var a = null == t ? 0 : t.length;
							if (!a) return -1;
							var u = null == n ? 0 : i(n);
							return u < 0 && (u = o(a + u, 0)), r(t, e, u)
						}
					}, function(t, e, n) {
						var r = n(158),
							i = n(408),
							o = n(139),
							a = Function.prototype,
							u = Object.prototype,
							c = a.toString,
							s = u.hasOwnProperty,
							f = c.call(Object);
						t.exports = function(t) {
							if (!o(t) || "[object Object]" != r(t)) return !1;
							var e = i(t);
							if (null === e) return !0;
							var n = s.call(e, "constructor") && e.constructor;
							return "function" == typeof n && n instanceof n && c.call(n) == f
						}
					}, function(t, e) {
						var n = Object.prototype.toString;
						t.exports = function(t) {
							return n.call(t)
						}
					}, function(t, e, n) {
						var r = n(364),
							i = Object.prototype,
							o = i.hasOwnProperty,
							a = i.toString,
							u = r ? r.toStringTag : void 0;
						t.exports = function(t) {
							var e = o.call(t, u),
								n = t[u];
							try {
								t[u] = void 0;
								var r = !0
							} catch (t) {}
							var i = a.call(t);
							return r && (e ? t[u] = n : delete t[u]), i
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
							return i
						}
					}, function(t, e, n) {
						var r = n(364),
							i = n(683),
							o = n(63),
							a = n(382),
							u = r ? r.prototype : void 0,
							c = u ? u.toString : void 0;
						t.exports = function t(e) {
							if ("string" == typeof e) return e;
							if (o(e)) return i(e, t) + "";
							if (a(e)) return c ? c.call(e) : "";
							var n = e + "";
							return "0" == n && 1 / e == -1 / 0 ? "-0" : n
						}
					}, function(t, e) {
						var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
							r = "\\ud83c[\\udffb-\\udfff]",
							i = "[^\\ud800-\\udfff]",
							o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
							a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
							u = "(?:" + n + "|" + r + ")?",
							c = "[\\ufe0e\\ufe0f]?" + u + "(?:\\u200d(?:" + [i, o, a].join("|") + ")[\\ufe0e\\ufe0f]?" + u + ")*",
							s = "(?:" + [i + n + "?", n, o, a, "[\\ud800-\\udfff]"].join("|") + ")",
							f = RegExp(r + "(?=" + r + ")|" + s + c, "g");
						t.exports = function(t) {
							return t.match(f) || []
						}
					}, function(t, e) {
						t.exports = function(t) {
							return t.split("")
						}
					}, function(t, e, n) {
						var r = n(686),
							i = n(471),
							o = n(685);
						t.exports = function(t) {
							return i(t) ? o(t) : r(t)
						}
					}, function(t, e) {
						t.exports = function(t, e, n) {
							var r = -1,
								i = t.length;
							e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
							for (var o = Array(i); ++r < i;) o[r] = t[r + e];
							return o
						}
					}, function(t, e, n) {
						var r = n(688);
						t.exports = function(t, e, n) {
							var i = t.length;
							return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n)
						}
					}, function(t, e, n) {
						var r = n(689),
							i = n(471),
							o = n(687),
							a = n(409);
						t.exports = function(t) {
							return function(e) {
								e = a(e);
								var n = i(e) ? o(e) : void 0,
									u = n ? n[0] : e.charAt(0),
									c = n ? r(n, 1).join("") : e.slice(1);
								return u[t]() + c
							}
						}
					}, function(t, e, n) {
						var r = n(690)("toLowerCase");
						t.exports = r
					}, function(t, e) {
						t.exports = function(t, e, n) {
							var r = void 0,
								i = void 0,
								o = void 0,
								a = void 0,
								u = 0;
							n || (n = {});
							var c = function() {
									u = !1 === n.leading ? 0 : Date.now(), r = null, a = t.apply(i, o), r || (i = o = null)
								},
								s = function() {
									var s = Date.now();
									u || !1 !== n.leading || (u = s);
									var f = e - (s - u);
									return i = this, o = arguments, f <= 0 || f > e ? (r && (clearTimeout(r), r = null), u = s, a = t.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(c, f)), a
								};
							return s.cancel = function() {
								clearTimeout(r), u = 0, r = i = o = null
							}, s
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(367),
							o = Object.prototype.hasOwnProperty;
						t.exports = function(t, e) {
							if (null === t || !i(t)) return {};
							var n = {};
							return r(e, function(e) {
								o.call(t, e) && (n[e] = t[e])
							}), n
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(64);
						t.exports = function(t, e) {
							if (!i(t)) return t;
							var n = [];
							return r(t, function(t, r) {
								n.push(e(t, r))
							}), n
						}
					}, function(t, e, n) {
						var r = n(47),
							i = n(410);
						t.exports = function(t, e, n) {
							return r(n) ? !!n(t, e) : i(t, e)
						}
					}, function(t, e, n) {
						var r = n(64);
						t.exports = function(t, e) {
							if (!r(t)) return -1;
							var n = Array.prototype.indexOf;
							if (n) return n.call(t, e);
							for (var i = -1, o = 0; o < t.length; o++)
								if (t[o] === e) {
									i = o;
									break
								} return i
						}
					}, function(t, e, n) {
						var r = n(475);
						t.exports = function(t, e) {
							if (!e) return [t];
							var n = r(t, e),
								i = [];
							for (var o in n) i.push(n[o]);
							return i
						}
					}, function(t, e) {
						t.exports = function(t, e, n) {
							var r = void 0;
							return function() {
								var i = this,
									o = arguments,
									a = n && !r;
								clearTimeout(r), r = setTimeout(function() {
									r = null, n || t.apply(i, o)
								}, e), a && t.apply(i, o)
							}
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Error")
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Arguments")
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "Date")
						}
					}, function(t, e, n) {
						var r = n(61);
						t.exports = function(t) {
							return r(t, "RegExp")
						}
					}, function(t, e) {
						t.exports = function(t) {
							return void 0 === t
						}
					}, function(t, e) {
						t.exports = function(t) {
							return null === t
						}
					}, function(t, e, n) {
						var r = n(61),
							i = {
								getType: n(480),
								isArray: n(29),
								isArrayLike: n(64),
								isBoolean: n(479),
								isFunction: n(47),
								isNil: n(141),
								isNull: n(704),
								isNumber: n(140),
								isObject: n(417),
								isObjectLike: n(415),
								isPlainObject: n(367),
								isPrototype: n(478),
								isType: r,
								isUndefined: n(703),
								isString: n(366),
								isRegExp: n(702),
								isDate: n(701),
								isArguments: n(700),
								isError: n(699)
							};
						t.exports = i
					}, function(t, e, n) {
						t.exports = n(482)
					}, function(t, e) {
						t.exports = function(t, e) {
							return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) {
								return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "" : e[n]
							}) : t
						}
					}, function(t, e, n) {
						var r = n(365);
						t.exports = function(t) {
							var e = r(t);
							return e.charAt(0).toLowerCase() + e.substring(1)
						}
					}, function(t, e, n) {
						t.exports = n(483)
					}, function(t, e, n) {
						var r = {
							lc: n(709),
							lowerCase: n(483),
							lowerFirst: n(708),
							substitute: n(707),
							uc: n(706),
							upperCase: n(482),
							upperFirst: n(481)
						};
						t.exports = r
					}, function(t, e) {
						function n(t) {
							var e = [];
							switch (t[0]) {
								case "M":
								case "L":
									e.push([t[1], t[2]]);
									break;
								case "A":
									e.push([t[6], t[7]]);
									break;
								case "Q":
									e.push([t[3], t[4]]), e.push([t[1], t[2]]);
									break;
								case "T":
									e.push([t[1], t[2]]);
									break;
								case "C":
									e.push([t[5], t[6]]), e.push([t[1], t[2]]), e.push([t[3], t[4]]);
									break;
								case "S":
									e.push([t[3], t[4]]), e.push([t[1], t[2]]);
									break;
								case "H":
								case "V":
									e.push([t[1], t[1]])
							}
							return e
						}

						function r(t, e, r) {
							for (var i = [].concat(t), o = void 0, a = 1 / (r + 1), u = n(e)[0], c = 1; c <= r; c++) a *= c, 0 === (o = Math.floor(t.length * a)) ? i.unshift([u[0] * a + t[o][0] * (1 - a), u[1] * a + t[o][1] * (1 - a)]) : i.splice(o, 0, [u[0] * a + t[o][0] * (1 - a), u[1] * a + t[o][1] * (1 - a)]);
							return i
						}
						t.exports = function(t, e) {
							if (t.length <= 1) return t;
							for (var i = void 0, o = 0; o < e.length; o++)
								if (t[o][0] !== e[o][0]) switch (i = n(t[o]), e[o][0]) {
									case "M":
										t[o] = ["M"].concat(i[0]);
										break;
									case "L":
										t[o] = ["L"].concat(i[0]);
										break;
									case "A":
										t[o] = [].concat(e[o]), t[o][6] = i[0][0], t[o][7] = i[0][1];
										break;
									case "Q":
										if (i.length < 2) {
											if (!(o > 0)) {
												t[o] = e[o];
												break
											}
											i = r(i, t[o - 1], 1)
										}
										t[o] = ["Q"].concat(i.reduce(function(t, e) {
											return t.concat(e)
										}, []));
										break;
									case "T":
										t[o] = ["T"].concat(i[0]);
										break;
									case "C":
										if (i.length < 3) {
											if (!(o > 0)) {
												t[o] = e[o];
												break
											}
											i = r(i, t[o - 1], 2)
										}
										t[o] = ["C"].concat(i.reduce(function(t, e) {
											return t.concat(e)
										}, []));
										break;
									case "S":
										if (i.length < 2) {
											if (!(o > 0)) {
												t[o] = e[o];
												break
											}
											i = r(i, t[o - 1], 1)
										}
										t[o] = ["S"].concat(i.reduce(function(t, e) {
											return t.concat(e)
										}, []));
										break;
									default:
										t[o] = e[o]
								}
							return t
						}
					}, function(t, e, n) {
						var r = n(30);
						t.exports = function(t, e) {
							if (t.length !== e.length) return !1;
							var n = !0;
							return r(t, function(t, r) {
								if (t !== e[r]) return n = !1, !1
							}), n
						}
					}, function(t, e, n) {
						function r(t, e, n) {
							var r = null,
								i = n;
							return e < i && (i = e, r = "add"), t < i && (i = t, r = "del"), {
								type: r,
								min: i
							}
						}
						var i = n(712);
						t.exports = function(t, e) {
							var n = function(t, e) {
									var n = t.length,
										o = e.length,
										a = void 0,
										u = void 0,
										c = 0;
									if (0 === n || 0 === o) return null;
									for (var s = [], f = 0; f <= n; f++) s[f] = [], s[f][0] = {
										min: f
									};
									for (var l = 0; l <= o; l++) s[0][l] = {
										min: l
									};
									for (var h = 1; h <= n; h++) {
										a = t[h - 1];
										for (var d = 1; d <= o; d++) {
											u = e[d - 1], c = i(a, u) ? 0 : 1;
											var p = s[h - 1][d].min + 1,
												g = s[h][d - 1].min + 1,
												v = s[h - 1][d - 1].min + c;
											s[h][d] = r(p, g, v)
										}
									}
									return s
								}(t, e),
								o = t.length,
								a = e.length,
								u = [],
								c = 1,
								s = 1;
							if (n[o][a] !== o) {
								for (var f = 1; f <= o; f++) {
									var l = n[f][f].min;
									s = f;
									for (var h = c; h <= a; h++) n[f][h].min < l && (l = n[f][h].min, s = h);
									c = s, n[f][c].type && u.push({
										index: f - 1,
										type: n[f][c].type
									})
								}
								for (var d = u.length - 1; d >= 0; d--) c = u[d].index, "add" === u[d].type ? t.splice(c, 0, [].concat(t[c])) : t.splice(c, 1)
							}
							if ((o = t.length) < a)
								for (var p = 0; p < a - o; p++) "z" === t[o - 1][0] || "Z" === t[o - 1][0] ? t.splice(o - 2, 0, t[o - 2]) : t.push(t[o - 1]);
							return t
						}
					}, function(t, e) {
						function n(t, e) {
							var n = [],
								r = [];
							return t.length && function t(e, i) {
								if (1 === e.length) n.push(e[0]), r.push(e[0]);
								else {
									for (var o = [], a = 0; a < e.length - 1; a++) 0 === a && n.push(e[0]), a === e.length - 2 && r.push(e[a + 1]), o[a] = [(1 - i) * e[a][0] + i * e[a + 1][0], (1 - i) * e[a][1] + i * e[a + 1][1]];
									t(o, i)
								}
							}(t, e), {
								left: n,
								right: r.reverse()
							}
						}

						function r(t, e, r) {
							if (1 === r) return [
								[].concat(t)
							];
							var i = [];
							if ("L" === e[0] || "C" === e[0] || "Q" === e[0]) i = i.concat(function(t, e, r) {
								var i = [
									[t[1], t[2]]
								];
								r = r || 2;
								var o = [];
								"A" === e[0] ? (i.push(e[6]), i.push(e[7])) : "C" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]]), i.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (i.push([e[1], e[2]]), i.push([e[3], e[4]])) : i.push([e[1], e[2]]);
								for (var a = i, u = 1 / r, c = 0; c < r - 1; c++) {
									var s = n(a, u / (1 - u * c));
									o.push(s.left), a = s.right
								}
								return o.push(a), o.map(function(t) {
									var e = [];
									return 4 === t.length && (e.push("C"), e = e.concat(t[2])), t.length >= 3 && (3 === t.length && e.push("Q"), e = e.concat(t[1])), 2 === t.length && e.push("L"), e = e.concat(t[t.length - 1])
								})
							}(t, e, r));
							else {
								var o = [].concat(t);
								"M" === o[0] && (o[0] = "L");
								for (var a = 0; a <= r - 1; a++) i.push(o)
							}
							return i
						}
						t.exports = function(t, e) {
							if (1 === t.length) return t;
							var n = t.length - 1,
								i = e.length - 1,
								o = n / i,
								a = [];
							if (1 === t.length && "M" === t[0][0]) {
								for (var u = 0; u < i - n; u++) t.push(t[0]);
								return t
							}
							for (var c = 0; c < i; c++) {
								var s = Math.floor(o * c);
								a[s] = (a[s] || 0) + 1
							}
							var f = a.reduce(function(e, i, o) {
								return o === n ? e.concat(t[n]) : e.concat(r(t[o], t[o + 1], i))
							}, []);
							return f.unshift(t[0]), "Z" !== e[i] && "z" !== e[i] || f.push("Z"), f
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(489),
							o = n(487),
							a = function(t, e, n, r, i) {
								return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
							},
							u = function(t, e, n, r, i, o, u, c, s) {
								null === s && (s = 1);
								for (var f = (s = s > 1 ? 1 : s < 0 ? 0 : s) / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) {
									var g = f * l[p] + f,
										v = a(g, t, n, i, u),
										m = a(g, e, r, o, c),
										y = v * v + m * m;
									d += h[p] * Math.sqrt(y)
								}
								return f * d
							},
							c = function(t, e, n, r, i, o, a, u) {
								if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, u) || Math.min(e, r) > Math.max(o, u))) {
									var c = (t - n) * (o - u) - (e - r) * (i - a);
									if (c) {
										var s = ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / c,
											f = ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / c,
											l = +s.toFixed(2),
											h = +f.toFixed(2);
										if (!(l < +Math.min(t, n).toFixed(2) || l > +Math.max(t, n).toFixed(2) || l < +Math.min(i, a).toFixed(2) || l > +Math.max(i, a).toFixed(2) || h < +Math.min(e, r).toFixed(2) || h > +Math.max(e, r).toFixed(2) || h < +Math.min(o, u).toFixed(2) || h > +Math.max(o, u).toFixed(2))) return {
											x: s,
											y: f
										}
									}
								}
							},
							s = function(t, e, n) {
								return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
							},
							f = function(t, e, n, r) {
								return null === t && (t = e = n = r = 0), null === e && (e = t.y, n = t.width, r = t.height, t = t.x), {
									x: t,
									y: e,
									width: n,
									w: n,
									height: r,
									h: r,
									x2: t + n,
									y2: e + r,
									cx: t + n / 2,
									cy: e + r / 2,
									r1: Math.min(n, r) / 2,
									r2: Math.max(n, r) / 2,
									r0: Math.sqrt(n * n + r * r) / 2,
									path: i(t, e, n, r),
									vb: [t, e, n, r].join(" ")
								}
							},
							l = function(t, e, n, i, o, a, u, c) {
								r(t) || (t = [t, e, n, i, o, a, u, c]);
								var s = function(t, e, n, r, i, o, a, u) {
									for (var c = [], s = [
											[],
											[]
										], f = void 0, l = void 0, h = void 0, d = void 0, p = 0; p < 2; ++p)
										if (0 === p ? (l = 6 * t - 12 * n + 6 * i, f = -3 * t + 9 * n - 9 * i + 3 * a, h = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * o, f = -3 * e + 9 * r - 9 * o + 3 * u, h = 3 * r - 3 * e), Math.abs(f) < 1e-12) {
											if (Math.abs(l) < 1e-12) continue;
											(d = -h / l) > 0 && d < 1 && c.push(d)
										} else {
											var g = l * l - 4 * h * f,
												v = Math.sqrt(g);
											if (!(g < 0)) {
												var m = (-l + v) / (2 * f);
												m > 0 && m < 1 && c.push(m);
												var y = (-l - v) / (2 * f);
												y > 0 && y < 1 && c.push(y)
											}
										} for (var b = c.length, x = b, _ = void 0; b--;) _ = 1 - (d = c[b]), s[0][b] = _ * _ * _ * t + 3 * _ * _ * d * n + 3 * _ * d * d * i + d * d * d * a, s[1][b] = _ * _ * _ * e + 3 * _ * _ * d * r + 3 * _ * d * d * o + d * d * d * u;
									return s[0][x] = t, s[1][x] = e, s[0][x + 1] = a, s[1][x + 1] = u, s[0].length = s[1].length = x + 2, {
										min: {
											x: Math.min.apply(0, s[0]),
											y: Math.min.apply(0, s[1])
										},
										max: {
											x: Math.max.apply(0, s[0]),
											y: Math.max.apply(0, s[1])
										}
									}
								}.apply(null, t);
								return f(s.min.x, s.min.y, s.max.x - s.min.x, s.max.y - s.min.y)
							},
							h = function(t, e, n, r, i, o, a, u, c) {
								var s = 1 - c,
									f = Math.pow(s, 3),
									l = Math.pow(s, 2),
									h = c * c,
									d = h * c,
									p = t + 2 * c * (n - t) + h * (i - 2 * n + t),
									g = e + 2 * c * (r - e) + h * (o - 2 * r + e),
									v = n + 2 * c * (i - n) + h * (a - 2 * i + n),
									m = r + 2 * c * (o - r) + h * (u - 2 * o + r);
								return {
									x: f * t + 3 * l * c * n + 3 * s * c * c * i + d * a,
									y: f * e + 3 * l * c * r + 3 * s * c * c * o + d * u,
									m: {
										x: p,
										y: g
									},
									n: {
										x: v,
										y: m
									},
									start: {
										x: s * t + c * n,
										y: s * e + c * r
									},
									end: {
										x: s * i + c * a,
										y: s * o + c * u
									},
									alpha: 90 - 180 * Math.atan2(p - v, g - m) / Math.PI
								}
							},
							d = function(t, e, n) {
								if (! function(t, e) {
										return t = f(t), e = f(e), s(e, t.x, t.y) || s(e, t.x2, t.y) || s(e, t.x, t.y2) || s(e, t.x2, t.y2) || s(t, e.x, e.y) || s(t, e.x2, e.y) || s(t, e.x, e.y2) || s(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
									}(l(t), l(e))) return n ? 0 : [];
								for (var r = ~~(u.apply(0, t) / 8), i = ~~(u.apply(0, e) / 8), o = [], a = [], d = {}, p = n ? 0 : [], g = 0; g < r + 1; g++) {
									var v = h.apply(0, t.concat(g / r));
									o.push({
										x: v.x,
										y: v.y,
										t: g / r
									})
								}
								for (var m = 0; m < i + 1; m++) {
									var y = h.apply(0, e.concat(m / i));
									a.push({
										x: y.x,
										y: y.y,
										t: m / i
									})
								}
								for (var b = 0; b < r; b++)
									for (var x = 0; x < i; x++) {
										var _ = o[b],
											w = o[b + 1],
											S = a[x],
											M = a[x + 1],
											O = Math.abs(w.x - _.x) < .001 ? "y" : "x",
											P = Math.abs(M.x - S.x) < .001 ? "y" : "x",
											E = c(_.x, _.y, w.x, w.y, S.x, S.y, M.x, M.y);
										if (E) {
											if (d[E.x.toFixed(4)] === E.y.toFixed(4)) continue;
											d[E.x.toFixed(4)] = E.y.toFixed(4);
											var A = _.t + Math.abs((E[O] - _[O]) / (w[O] - _[O])) * (w.t - _.t),
												C = S.t + Math.abs((E[P] - S[P]) / (M[P] - S[P])) * (M.t - S.t);
											A >= 0 && A <= 1 && C >= 0 && C <= 1 && (n ? p++ : p.push({
												x: E.x,
												y: E.y,
												t1: A,
												t2: C
											}))
										}
									}
								return p
							};
						t.exports = function(t, e) {
							return function(t, e, n) {
								t = o(t), e = o(e);
								for (var r = void 0, i = void 0, a = void 0, u = void 0, c = void 0, s = void 0, f = void 0, l = void 0, h = void 0, p = void 0, g = [], v = 0, m = t.length; v < m; v++) {
									var y = t[v];
									if ("M" === y[0]) r = c = y[1], i = s = y[2];
									else {
										"C" === y[0] ? (r = (h = [r, i].concat(y.slice(1)))[6], i = h[7]) : (h = [r, i, r, i, c, s, c, s], r = c, i = s);
										for (var b = 0, x = e.length; b < x; b++) {
											var _ = e[b];
											if ("M" === _[0]) a = f = _[1], u = l = _[2];
											else {
												"C" === _[0] ? (a = (p = [a, u].concat(_.slice(1)))[6], u = p[7]) : (p = [a, u, a, u, f, l, f, l], a = f, u = l);
												for (var w = d(h, p, void 0), S = 0, M = w.length; S < M; S++) w[S].segment1 = v, w[S].segment2 = b, w[S].bez1 = h, w[S].bez2 = p;
												g = g.concat(w)
											}
										}
									}
								}
								return g
							}(t, e)
						}
					}, function(t, e, n) {
						var r = n(715),
							i = n(486),
							o = n(487),
							a = n(484);
						t.exports = {
							catmullRom2Bezier: a,
							catmullRomToBezier: a,
							fillPath: n(714),
							fillPathByDiff: n(713),
							formatPath: n(711),
							intersection: r,
							pathIntersection: r,
							parsePathArray: n(488),
							parsePathString: n(485),
							pathToAbsolute: i,
							path2absolute: i,
							pathTocurve: o,
							path2curve: o,
							rectPath: n(489)
						}
					}, function(t, e, n) {
						var r = n(384),
							i = n(490);
						t.exports = function(t, e) {
							return r(i(t), e)
						}
					}, function(t, e, n) {
						t.exports = n(491)
					}, function(t, e, n) {
						t.exports = n(30)
					}, function(t, e, n) {
						t.exports = {
							forIn: n(719),
							has: n(491),
							hasKey: n(718),
							hasValue: n(717),
							keys: n(503),
							isMatch: n(504),
							values: n(490)
						}
					}, function(t, e, n) {
						t.exports = {
							mat3: n(413),
							vec2: n(494),
							vec3: n(493),
							transform: n(492)
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(47),
							o = n(30);
						t.exports = function(t, e) {
							if (r(t)) {
								var n = t[0],
									a = void 0;
								a = i(e) ? e(t[0]) : t[0][e];
								var u = void 0;
								return o(t, function(t) {
									(u = i(e) ? e(t) : t[e]) < a && (n = t, a = u)
								}), n
							}
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(47),
							o = n(30);
						t.exports = function(t, e) {
							if (r(t)) {
								var n = t[0],
									a = void 0;
								a = i(e) ? e(t[0]) : t[0][e];
								var u = void 0;
								return o(t, function(t) {
									(u = i(e) ? e(t) : t[e]) > a && (n = t, a = u)
								}), n
							}
						}
					}, function(t, e, n) {
						var r = n(140);
						t.exports = function(t) {
							return r(t) && t > 0
						}
					}, function(t, e, n) {
						var r = n(140);
						t.exports = function(t) {
							return r(t) && t % 2 != 0
						}
					}, function(t, e, n) {
						var r = n(140);
						t.exports = function(t) {
							return r(t) && t < 0
						}
					}, function(t, e, n) {
						var r = n(140),
							i = Number.isInteger ? Number.isInteger : function(t) {
								return r(t) && t % 1 == 0
							};
						t.exports = i
					}, function(t, e, n) {
						var r = n(140);
						t.exports = function(t) {
							return r(t) && t % 2 == 0
						}
					}, function(t, e, n) {
						var r = n(140);
						t.exports = function(t) {
							return r(t) && t % 1 != 0
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = e.toString(),
								r = n.indexOf(".");
							if (-1 === r) return Math.round(t);
							var i = n.substr(r + 1).length;
							return i > 20 && (i = 20), parseFloat(t.toFixed(i))
						}
					}, function(t, e, n) {
						var r = n(499);
						t.exports = {
							clamp: n(414),
							fixedBase: n(730),
							isDecimal: n(729),
							isEven: n(728),
							isInteger: n(727),
							isNegative: n(726),
							isNumberEqual: r,
							isOdd: n(725),
							isPositive: n(724),
							maxBy: n(723),
							minBy: n(722),
							mod: n(498),
							snapEqual: r,
							toDegree: n(497),
							toInt: n(496),
							toInteger: n(496),
							toRadian: n(495)
						}
					}, function(t, e, n) {
						var r = n(29);
						t.exports = function(t) {
							var e = 0,
								n = 0,
								i = 0,
								o = 0;
							return r(t) ? 1 === t.length ? e = n = i = o = t[0] : 2 === t.length ? (e = i = t[0], n = o = t[1]) : 3 === t.length ? (e = t[0], n = o = t[1], i = t[2]) : (e = t[0], n = t[1], i = t[2], o = t[3]) : e = n = i = o = t, {
								r1: e,
								r2: n,
								r3: i,
								r4: o
							}
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(366),
							o = n(30),
							a = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
							u = /[^\s\,]+/gi;
						t.exports = function(t) {
							return r(t = t || []) ? t : i(t) ? (t = t.match(a), o(t, function(e, n) {
								if ((e = e.match(u))[0].length > 1) {
									var r = e[0].charAt(0);
									e.splice(1, 0, e[0].substr(1)), e[0] = r
								}
								o(e, function(t, n) {
									isNaN(t) || (e[n] = +t)
								}), t[n] = e
							}), t) : void 0
						}
					}, function(t, e) {
						var n = {};
						t.exports = function(t) {
							var e = n[t];
							if (!e) {
								for (var r = t.toString(16), i = r.length; i < 6; i++) r = "0" + r;
								e = "#" + r, n[t] = e
							}
							return e
						}
					}, function(t, e, n) {
						var r = n(734);
						t.exports = {
							number2color: r,
							numberToColor: r,
							parsePath: n(733),
							parseRadius: n(732)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							if (t["_wrap_" + e]) return t["_wrap_" + e];
							var n = function(n) {
								t[e](n)
							};
							return t["_wrap_" + e] = n, n
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							return t["_wrap_" + e]
						}
					}, function(t, e, n) {
						t.exports = {
							getWrapBehavior: n(737),
							wrapBehavior: n(736)
						}
					}, function(t, e, n) {
						var r = n(141),
							i = n(29),
							o = n(30);
						t.exports = function(t, e) {
							for (var n = [], a = {}, u = 0; u < t.length; u++) {
								var c = t[u][e];
								r(c) || (i(c) || (c = [c]), o(c, function(t) {
									a[t] || (n.push(t), a[t] = !0)
								}))
							}
							return n
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(383),
							o = n(500);
						t.exports = function() {
							var t = [],
								e = i(arguments);
							return r(e, function(e) {
								t = t.concat(e)
							}), o(t)
						}
					}, function(t, e, n) {
						var r = n(366),
							i = n(47),
							o = n(29);
						t.exports = function(t, e) {
							var n = void 0;
							if (i(e)) n = function(t, n) {
								return e(t) - e(n)
							};
							else {
								var a = [];
								r(e) ? a.push(e) : o(e) && (a = e), n = function(t, e) {
									for (var n = 0; n < a.length; n += 1) {
										var r = a[n];
										if (t[r] > e[r]) return 1;
										if (t[r] < e[r]) return -1
									}
									return 0
								}
							}
							return t.sort(n), t
						}
					}, function(t, e, n) {
						var r = n(64),
							i = n(501);
						t.exports = function(t, e) {
							var n = [];
							if (!r(t)) return n;
							for (var o = -1, a = [], u = t.length; ++o < u;) {
								var c = t[o];
								e(c, o, t) && (n.push(c), a.push(o))
							}
							return i(t, a), n
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(367),
							o = n(30);
						t.exports = function(t, e, n) {
							if (!r(t) && !i(t)) return t;
							var a = n;
							return o(t, function(t, n) {
								a = e(a, t, n)
							}), a
						}
					}, function(t, e) {
						t.exports = function(t) {
							for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
							return e
						}
					}, function(t, e, n) {
						var r = n(416),
							i = n(29);
						t.exports = function(t) {
							if (!(t = r(t, function(t) {
									return !isNaN(t)
								})).length) return {
								min: 0,
								max: 0
							};
							if (i(t[0])) {
								for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
								t = e
							}
							var o = Math.max.apply(null, t);
							return {
								min: Math.min.apply(null, t),
								max: o
							}
						}
					}, function(t, e, n) {
						var r = n(29);
						t.exports = function t(e) {
							var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
							if (r(e))
								for (var i = 0; i < e.length; i += 1) t(e[i], n);
							else n.push(e);
							return n
						}
					}, function(t, e, n) {
						var r = n(29),
							i = n(30);
						t.exports = function(t) {
							if (!r(t)) return t;
							var e = [];
							return i(t, function(t) {
								r(t) ? i(t, function(t) {
									e.push(t)
								}) : e.push(t)
							}), e
						}
					}, function(t, e, n) {
						var r = n(141),
							i = n(29);
						t.exports = function(t, e) {
							for (var n = null, o = 0; o < t.length; o++) {
								var a = t[o][e];
								if (!r(a)) {
									n = i(a) ? a[0] : a;
									break
								}
							}
							return n
						}
					}, function(t, e, n) {
						var r = n(47),
							i = n(367),
							o = n(504);
						t.exports = function(t, e) {
							var n = void 0;
							if (r(e) && (n = e), i(e) && (n = function(t) {
									return o(t, e)
								}), n)
								for (var a = 0; a < t.length; a += 1)
									if (n(t[a])) return t[a];
							return null
						}
					}, function(t, e, n) {
						var r = n(416),
							i = n(384);
						t.exports = function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
							return r(t, function(t) {
								return !i(e, t)
							})
						}
					}, function(t, e, n) {
						t.exports = {
							contains: n(384),
							difference: n(750),
							find: n(749),
							firstValue: n(748),
							flatten: n(747),
							flattenDeep: n(746),
							getRange: n(745),
							merge: n(744),
							pull: n(502),
							pullAt: n(501),
							reduce: n(743),
							remove: n(742),
							sortBy: n(741),
							union: n(740),
							uniq: n(500),
							valuesOfKey: n(739)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = this.getStyle(t, "width", e);
							return "auto" === n && (n = t.offsetWidth), parseFloat(n)
						}
					}, function(t, e, n) {
						var r = n(141);
						t.exports = function(t, e, n) {
							try {
								return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
							} catch (t) {
								return r(n) ? null : n
							}
						}
					}, function(t, e) {
						t.exports = function() {
							return window.devicePixelRatio ? window.devicePixelRatio : 2
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = this.getWidth(t, e),
								r = parseFloat(this.getStyle(t, "borderLeftWidth")) || 0,
								i = parseFloat(this.getStyle(t, "paddingLeft")) || 0,
								o = parseFloat(this.getStyle(t, "paddingRight")) || 0;
							return n + r + (parseFloat(this.getStyle(t, "borderRightWidth")) || 0) + i + o
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = this.getHeight(t, e),
								r = parseFloat(this.getStyle(t, "borderTopWidth")) || 0,
								i = parseFloat(this.getStyle(t, "paddingTop")) || 0,
								o = parseFloat(this.getStyle(t, "paddingBottom")) || 0;
							return n + r + (parseFloat(this.getStyle(t, "borderBottomWidth")) || 0) + i + o
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							var n = this.getStyle(t, "height", e);
							return "auto" === n && (n = t.offsetHeight), parseFloat(n)
						}
					}, function(t, e) {
						t.exports = function(t, e) {
							if (t && t.getBoundingClientRect) {
								var n = t.getBoundingClientRect(),
									r = document.documentElement.clientTop,
									i = document.documentElement.clientLeft;
								return {
									top: n.top - r,
									bottom: n.bottom - r,
									left: n.left - i,
									right: n.right - i
								}
							}
							return e || null
						}
					}, function(t, e) {
						t.exports = function(t, e, n) {
							if (t) {
								if (t.addEventListener) return t.addEventListener(e, n, !1), {
									remove: function() {
										t.removeEventListener(e, n, !1)
									}
								};
								if (t.attachEvent) return t.attachEvent("on" + e, n), {
									remove: function() {
										t.detachEvent("on" + e, n)
									}
								}
							}
						}
					}, function(t, e, n) {
						t.exports = {
							addEventListener: n(759),
							createDom: n(507),
							getBoundingClientRect: n(758),
							getHeight: n(757),
							getOuterHeight: n(756),
							getOuterWidth: n(755),
							getRatio: n(754),
							getStyle: n(753),
							getWidth: n(752),
							modifyCSS: n(506),
							requestAnimationFrame: n(505)
						}
					}, function(t, e, n) {
						var r = n(30),
							i = n(385),
							o = n(760),
							a = n(751),
							u = n(738),
							c = n(735),
							s = n(731),
							f = n(721),
							l = n(720),
							h = n(716),
							d = n(710),
							p = n(705),
							g = {
								DOMUtil: o,
								DomUtil: o,
								MatrixUtil: f,
								PathUtil: h,
								arrayUtil: a,
								domUtil: o,
								eventUtil: u,
								formatUtil: c,
								mathUtil: s,
								matrixUtil: f,
								objectUtil: l,
								stringUtil: d,
								pathUtil: h,
								typeUtil: p,
								augment: n(477),
								clone: n(412),
								debounce: n(698),
								deepMix: n(411),
								each: r,
								extend: n(476),
								filter: n(416),
								group: n(697),
								groupBy: n(474),
								groupToMap: n(475),
								indexOf: n(696),
								isEmpty: n(473),
								isEqual: n(410),
								isEqualWith: n(695),
								map: n(694),
								mix: i,
								pick: n(693),
								throttle: n(692),
								toArray: n(383),
								toString: n(365),
								uniqueId: n(472)
							};
						r([o, a, u, c, s, f, l, h, d, p], function(t) {
							i(g, t)
						}), t.exports = g
					}, function(t, e, n) {
						var r = n(509),
							i = n(422),
							o = n(151),
							a = n(388),
							u = n(152),
							c = {
								Graph: n(421),
								Tree: n(515),
								Util: n(22),
								Layouts: n(419),
								G: u,
								Plugins: {},
								Components: {},
								Global: o,
								Shape: r,
								registerNode: r.registerNode,
								registerEdge: r.registerEdge,
								registerGroup: r.registerGroup,
								registerGuide: r.registerGuide,
								registerBehaviour: i.registerBehaviour,
								version: a,
								track: function(t) {
									o.track = t
								}
							};
						n(510), t.exports = c
					}])
				}, function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var o = n(16),
						a = n(162),
						u = n(161),
						c = {
							whitespace: {
								9: "Tab",
								13: "Enter",
								32: "Space"
							},
							fn: {
								112: "f1 ",
								113: "f2 ",
								114: "f3 ",
								115: "f4 ",
								116: "f5 ",
								117: "f6 ",
								118: "f7 ",
								119: "f8 ",
								120: "f9 ",
								121: "f10",
								122: "f11",
								123: "f12"
							},
							letter: {
								65: "a",
								66: "b",
								67: "c",
								68: "d",
								69: "e",
								70: "f",
								71: "g",
								72: "h",
								73: "i",
								74: "j",
								75: "k",
								76: "l",
								77: "m",
								78: "n",
								79: "o",
								80: "p",
								81: "q",
								82: "r",
								83: "s",
								84: "t",
								85: "u",
								86: "v",
								87: "w",
								88: "x",
								89: "y",
								90: "z"
							},
							number: {
								48: "0",
								49: "1",
								50: "2",
								51: "3",
								52: "4",
								53: "5",
								54: "6",
								55: "7",
								56: "8",
								57: "9"
							},
							navigation: {
								37: "ArrowLeft",
								38: "ArrowUp",
								39: "ArrowRight",
								40: "ArrowDown"
							},
							symbol: {
								110: "decimal point",
								186: "semi-colon",
								187: "=",
								188: "comma",
								189: "-",
								190: "period ",
								191: "/",
								192: "grave accent",
								219: "open bracket ",
								220: "back slash ",
								221: "close bracket ",
								222: "single quote "
							},
							smallNumberKey: {
								96: "numpad 0 ",
								97: "numpad 1 ",
								98: "numpad 2 ",
								99: "numpad 3 ",
								100: "numpad 4 ",
								101: "numpad 5 ",
								102: "numpad 6 ",
								103: "numpad 7 ",
								104: "numpad 8 ",
								105: "numpad 9 "
							},
							modifierKey: {
								16: "Shift",
								17: "Ctrl ",
								18: "Alt",
								20: "caps lock"
							},
							escKey: {
								8: "Backspace",
								46: "Delete",
								27: "Escape"
							},
							homeKey: {
								91: "Windows Key / Left command",
								92: "right window key ",
								93: "Windows Menu"
							},
							computeKey: {
								106: "multiply ",
								107: "add",
								109: "subtract ",
								111: "divide "
							}
						},
						s = r({}, o.Util, a, {
							getTypeAndChar: function(t) {
								var e;
								for (var n in t = "" + t, c)
									for (var r in e = n, c[n])
										if (r === t) return {
											type: e,
											character: c[n][r]
										};
								return {}
							},
							getKeyboradKey: function(t) {
								return t.key || s.getTypeAndChar(t.keyCode).character
							},
							getIndex: function(t) {
								return t.getParent().get("children").indexOf(t)
							},
							setId: function(t) {
								t.id || (t.id = o.Util.guid())
							},
							pointLineDistance: function(t, e, n, r, i, a) {
								var u = [n - t, r - e];
								if (o.Util.vec2.exactEquals(u, [0, 0])) return NaN;
								var c = [-u[1], u[0]];
								o.Util.vec2.normalize(c, c);
								var s = [i - t, a - e];
								return Math.abs(o.Util.vec2.dot(s, c))
							},
							getRectByBox: function(t, e, n) {
								return e.addShape("rect", {
									attrs: r({}, n, {
										x: t.minX,
										y: t.minY,
										width: t.maxX - t.minX,
										height: t.maxY - t.minY
									})
								})
							},
							objectToValues: function(t) {
								var e, n = [];
								for (e in t) t.hasOwnProperty(e) && n.push(t[e]);
								return n
							},
							getValue: function(t) {
								return o.Util.isFunction(t) ? t() : t
							},
							getContrast: function(t, e) {
								var n = {};
								return o.Util.each(e, function(e, r) {
									n[r] = t[r]
								}), n
							},
							arrowTo: function(t, e, n, r, i, a, u) {
								var c = [a - r, u - i],
									s = o.Util.vec2.angleTo(c, [1, 0], !0);
								return t.transform([
									["r", s],
									["t", e, n]
								]), t
							},
							setEndOfContenteditable: function(t) {
								var e, n;
								document.createRange ? ((e = document.createRange()).selectNodeContents(t), e.collapse(!1), (n = window.getSelection()).removeAllRanges(), n.addRange(e)) : document.selection && ((e = document.body.createTextRange()).moveToElementText(t), e.collapse(!1), e.select())
							},
							matches: function(t, e) {
								return (Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
									for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
									return n > -1
								}).call(t, e)
							},
							delegateEvent: function(t, e, n, r) {
								return s.addEventListener(t, e, function(e) {
									for (var i = e.target || e.srcElement; i !== t;) s.matches(i, n) && r.call(i, Array.prototype.slice.call(arguments)), i = i.parentNode
								})
							},
							Palettes: u
						});
					t.exports = s
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								a(t, e, n[e])
							})
						}
						return t
					}

					function a(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function c(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function s(t, e, n) {
						return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
							var r = function(t, e) {
								for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
								return t
							}(t, e);
							if (r) {
								var i = Object.getOwnPropertyDescriptor(r, e);
								return i.get ? i.get.call(n) : i.value
							}
						})(t, e, n || t)
					}

					function f(t) {
						return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function l(t, e) {
						return (l = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var h = n(16),
						d = n(7),
						p = n(19),
						g = [],
						v = function(t) {
							function e(t) {
								var n;
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = {
										showHotArea: !1,
										defaultData: {
											roots: [{
												label: "思维导图",
												children: [{
													label: "新建节点"
												}, {
													label: "新建节点"
												}, {
													label: "新建节点"
												}]
											}]
										},
										shortcut: {
											append: !0,
											appendChild: !0,
											collapseExpand: !0,
											selectAll: !0
										},
										labelEditable: !0,
										graph: {
											modes: {
												default: ["clickNodeSelected", "keydownMoveSelection", "clickCanvasSelected", "hoverMindExpandButton", "keydownEditLabel", "panBlank", "wheelChangeViewport", "panMindNode", "clickCollapsedButton", "clickExpandedButton", "hoverButton", "hoverNodeActived", "dblclickItemEditLabel"],
												readOnly: ["clickNodeSelected", "wheelChangeViewport", "keydownMoveSelection", "hoverNodeActived", "panCanvas", "clickExpandedButton", "hoverButton", "clickCanvasSelected"]
											},
											layout: new h.Layouts.Mindmap({
												direction: "H",
												getSubTreeSep: function(t) {
													return t.children && t.children.length > 0 ? t.hierarchy <= 2 ? 8 : 2 : 0
												},
												getHGap: function(t) {
													return 1 === t.hierarchy ? 8 : 2 === t.hierarchy ? 24 : 18
												},
												getVGap: function(t) {
													return 1 === t.hierarchy ? 24 : 2 === t.hierarchy ? 24 : 2
												},
												getSide: function(t) {
													return t.data.side ? t.data.side : "right"
												}
											}),
											mode: "default",
											defaultIntersectBox: "rect",
											nodeDefaultShape: "mind-node",
											edgeDefaultShape: "mind-edge",
											minZoom: .2,
											maxZoom: 2
										},
										align: {
											item: !1
										},
										rootShape: "mind-root",
										firstSubShape: "mind-first-sub",
										secondSubShape: "mind-second-sub",
										subShape: "mind-node",
										nodeDefaultShape: "mind-node",
										graphConstructor: h.Tree,
										defaultSide: "right"
									},
									i = {};
								return p.each(g, function(t) {
									p.mix(i, t.CFG)
								}), p.mix(!0, r, i, t), (n = c(this, f(e).call(this, r))).isMind = !0, n
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && l(t, e)
								}(e, d),
								function(t, e, n) {
									e && u(t.prototype, e)
								}(e, [{
									key: "_init",
									value: function() {
										var t = this;
										s(f(e.prototype), "_init", this).call(this), p.each(g, function(e) {
											e.INIT && t[e.INIT]()
										});
										var n = this.getGraph(),
											r = this.get("defaultData"),
											i = n.get("mode"),
											o = n.getRootGroup().addGroup();
										if (this.set("hotAreaGroup", o), n.edge().shape(function(t) {
												if (n.find(t.target).getModel().isPlaceholder) return "mind-placeholder-edge"
											}), r && this.read(r), "default" === i) {
											if (r) {
												var a = this.getRoot(),
													u = n.find(a.id);
												this.setSelected(u, !0)
											}
										} else if ("readOnly" === i) {
											var c = this.get("shortcut");
											c.append = !1, c.appendChild = !1, c.selectAll = !1, c.delete = !1
										}
										if (r) {
											var l = this.getRoot();
											this.focus(l.id)
										}
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this;
										s(f(e.prototype), "bindEvent", this).call(this);
										var n = this.get("_graph");
										n.on("keydown", function(t) {
											t.domEvent.preventDefault()
										}), n.on("beforechange", function(e) {
											"add" === e.action ? t._beforeAdd(e) : "changeData" === e.action && t._beforeChangeData(e)
										}), n.on("aftersource", function() {
											t._setHierarchy()
										}), n.on("afterchange", function() {
											t._setHotArea()
										}), n.on("afteritemdraw", function(t) {
											var e = t.item,
												n = e.getModel();
											if (e.isEdge) {
												var r = e.getGraphicGroup();
												p.toBack(r, r.getParent()), r.setSilent("capture", !1)
											}
											n.parent || (e.isRoot = !0, e.deleteable = !1, e.collapseExpand = !1, e.appendable = !1, e.dragable = !1)
										}), this.on("beforedelete", function(e) {
											var n = e.items[0],
												r = t._getBrothers(n),
												i = t._getNth(n);
											r[i - 1] ? t.setSelected(r[i - 1].id, !0) : r[i + 1] ? t.setSelected(r[i + 1].id, !0) : t.setSelected(n.getParent(), !0)
										}), this.on("afteritemselected", function(e) {
											t._tryAdjustViewport(e.item)
										})
									}
								}, {
									key: "getRoot",
									value: function() {
										return this.getGraph().getSource().roots[0]
									}
								}, {
									key: "_setHierarchy",
									value: function(t) {
										var e = this.getGraph(),
											n = this.get("firstSubShape"),
											r = this.get("secondSubShape"),
											i = this.get("defaultSide");
										if (t) {
											var o = e.find(t.parent);
											if (o) {
												var a = o.getModel();
												t.hierarchy = a.hierarchy + 1, "mind-placeholder" !== t.shape && (2 === t.hierarchy && (t.shape = n, t.side || (t.side = i)), 3 === t.hierarchy && (t.shape = r))
											}
										} else(t = this.getRoot()).hierarchy = 1;
										p.traverseTree(t, function(t, e) {
											t.hierarchy = e.hierarchy + 1, t.side || (t.side = i), e.side && (t.side = e.side), 2 === t.hierarchy ? t.shape = n : 3 === t.hierarchy && (t.shape = r)
										}, function(t) {
											return t.children
										})
									}
								}, {
									key: "getFirstChildrenBySide",
									value: function(t) {
										var e = [];
										return this.getRoot().children.forEach(function(n) {
											n.side === t && e.push(n)
										}), e
									}
								}, {
									key: "_getNth",
									value: function(t) {
										return this.getGraph().getNth(t)
									}
								}, {
									key: "_getBrothers",
									value: function(t) {
										return t.getParent().getModel().children
									}
								}, {
									key: "_getMoveChildModel",
									value: function(t) {
										if (t && t.length > 0) {
											var e = t.length;
											return t[parseInt(e / 2)]
										}
									}
								}, {
									key: "_getVerticalMoveItem",
									value: function(t, e, n) {
										for (var r, i = this.getGraph().getNodes(), o = t.getBBox(), a = [o.minX, o.maxX], u = [], c = 0; c < a.length; c++)
											for (var s = a[c], f = 0; f < i.length; f++) {
												var l = i[f],
													h = l.getBBox();
												e(h, o, s) && u.push({
													long: n(h, o),
													node: l
												})
											}
										return u.length > 0 && (u.sort(function(t, e) {
											return t.long - e.long
										}), r = u[0].node), r
									}
								}, {
									key: "_arrowTopItem",
									value: function(t) {
										var e = this._getBrothers(t),
											n = this._getNth(t);
										return e[n - 1] ? e[n - 1] : this._getVerticalMoveItem(t, function(t, e, n) {
											return t.centerY < e.centerY && n <= t.maxX && n >= t.minX
										}, function(t, e) {
											return e.centerY - t.centerY
										})
									}
								}, {
									key: "_arrowBottomItem",
									value: function(t) {
										var e = this._getBrothers(t),
											n = this._getNth(t);
										return e[n + 1] ? e[n + 1] : this._getVerticalMoveItem(t, function(t, e, n) {
											return t.centerY > e.centerY && n <= t.maxX && n >= t.minX
										}, function(t, e) {
											return t.centerY - e.centerY
										})
									}
								}, {
									key: "_arrowLeftItem",
									value: function(t) {
										var e = p.getMindNodeSide(t);
										if (t.isRoot) {
											var n = this.getFirstChildrenBySide("left");
											return this._getMoveChildModel(n)
										}
										if ("left" === e) {
											var r = t.getModel().children;
											return this._getMoveChildModel(r)
										}
										return t.getParent()
									}
								}, {
									key: "_arrowRightItem",
									value: function(t) {
										var e = p.getMindNodeSide(t);
										if (t.isRoot) {
											var n = this.getFirstChildrenBySide("right");
											return this._getMoveChildModel(n)
										}
										if ("right" === e) {
											var r = t.getModel().children;
											return this._getMoveChildModel(r)
										}
										return t.getParent()
									}
								}, {
									key: "_moveItemSelection",
									value: function(t) {
										var e = this.getGraph(),
											n = this.getSelected()[0];
										if (n) {
											var r, i = t.domEvent,
												o = p.getKeyboradKey(i);
											"ArrowUp" !== o || n.isRoot ? "ArrowDown" !== o || n.isRoot ? "ArrowLeft" === o ? r = this._arrowLeftItem(n) : "ArrowRight" === o && (r = this._arrowRightItem(n)) : r = this._arrowBottomItem(n) : r = this._arrowTopItem(n), r && (r = e.find(r.id)).isVisible() && (this.clearSelected(), this.setSelected(r, !0))
										}
									}
								}, {
									key: "showLabelEditor",
									value: function(t) {
										var e = t.domEvent,
											n = this.getSelected()[0],
											r = p.getKeyboradKey(e);
										if (n && 1 === r.length && !e.metaKey && !e.ctrlKey) {
											var i = this.get("labelTextArea");
											n && (this.beginEditLabel(n), i.innerHTML = r, p.setEndOfContenteditable(i))
										}
									}
								}, {
									key: "_tryAdjustViewport",
									value: function(t) {
										var e = this.get("_graph"),
											n = t.getBBox(),
											r = {
												x: n.minX,
												y: n.minY
											},
											i = {
												x: n.maxX,
												y: n.maxY
											},
											o = e.getDomPoint(r),
											a = e.getDomPoint(i),
											u = e.getWidth(),
											c = e.getHeight();
										o.x < 0 && e.translate(16 - o.x, 0), o.y < 0 && e.translate(0, 16 - o.y), a.x > u && e.translate(u - a.x - 16, 0), a.y > c && e.translate(0, c - a.y - 16)
									}
								}, {
									key: "_beforeChangeData",
									value: function(t) {
										var e = t.data.roots[0],
											n = this.get("rootShape");
										e.shape = n, this._setHierarchy(e)
									}
								}, {
									key: "_beforeAdd",
									value: function(t) {
										var e = this.get("_graph"),
											n = t.model,
											r = e.find(n.parent);
										r.getModel().collapsed && e.update(r, {
											collapsed: !1
										}), this._setHierarchy(n)
									}
								}, {
									key: "_drawHotAreaShape",
									value: function() {
										var t = this.get("_graph"),
											e = this.get("hotAreaGroup"),
											n = this.get("hotAreas");
										e.clear(), n.forEach(function(t) {
											e.addShape("rect", {
												attrs: {
													x: t.minX,
													y: t.minY,
													width: t.maxX - t.minX,
													height: t.maxY - t.minY,
													fill: t.color,
													fillOpacity: .4
												},
												capture: !1
											})
										}), t.draw()
									}
								}, {
									key: "_setHotArea",
									value: function() {
										var t = [],
											e = this.get("_graph"),
											n = this.getRoot(),
											r = "placeholder",
											o = this.get("showHotArea"),
											a = e.find(n.id).getBBox();
										t.push({
											minX: a.minX - 90,
											minY: a.minY - 60,
											maxX: (a.minX + a.maxX) / 2,
											maxY: a.maxY + 60,
											parent: n,
											current: n,
											id: n.id + "left" + r,
											nth: n.children.length,
											side: "left",
											color: "orange"
										}), t.push({
											minX: (a.minX + a.maxX) / 2,
											minY: a.minY - 60,
											maxX: a.maxX + 90,
											maxY: a.maxY + 60,
											parent: n,
											current: n,
											id: n.id + "right" + r,
											nth: n.children.length,
											side: "right",
											color: "pink"
										}), p.traverseTree(n, function(n, o, a) {
											var u = e.find(n.id);
											if (!n.isPlaceholder && u && u.isVisible()) {
												var c = function(t, e, n) {
														var r = n.children,
															i = t;
														if (!n.parent)
															for (; r[i] && r[i].side !== e.side;) i++;
														for (; r[i] && r[i].isPlaceholder;) i++;
														if (r[i] && r[i].side === e.side) return r[i]
													}(a + 1, n, o),
													s = function(t, e, n) {
														var r = n.children,
															i = t;
														if (!n.parent)
															for (; r[i] && r[i].side !== e.side;) i--;
														for (; r[i] && r[i].isPlaceholder;) i--;
														if (r[i] && r[i].side === e.side) return r[i]
													}(a - 1, n, o),
													f = e.find(n.id).getBBox(),
													l = o.children,
													h = 2 === n.hierarchy && "right" === n.side,
													d = 2 === n.hierarchy && "left" === n.side;
												if (s || t.push({
														minX: h ? f.minX - 90 : f.minX,
														minY: function() {
															var t = s ? f.minY : f.minY - 16;
															return l[a - 1] && l[a - 1].isPlaceholder && l[a - 1].side === n.side && (t = e.find(l[a - 1].id).getBBox().minY), t
														}(),
														maxX: d ? f.maxX + 90 : f.maxX,
														maxY: (f.minY + f.maxY) / 2,
														parent: o,
														id: (s ? s.id : void 0) + n.id + o.id + r,
														side: n.side,
														color: "yellow",
														nth: a
													}), c) {
													var p = e.find(c.id).getBBox();
													t.push({
														minX: "left" === n.side ? Math.max(f.minX, p.minX) : h ? f.minX - 90 : f.minX,
														minY: (f.minY + f.maxY) / 2,
														maxX: "right" === n.side ? Math.min(f.maxX, p.maxX) : d ? f.maxX + 90 : f.maxX,
														maxY: (p.minY + p.maxY) / 2,
														parent: o,
														id: n.id + (c ? c.id : void 0) + o.id + r,
														side: n.side,
														color: "blue",
														nth: a + 1
													})
												} else t.push({
													minX: h ? f.minX - 90 : f.minX,
													minY: (f.minY + f.maxY) / 2,
													maxX: d ? f.maxX + 90 : f.maxX,
													maxY: function() {
														var t = f.maxY + 16;
														return l[a + 1] && l[a + 1].isPlaceholder && l[a + 1].side === n.side && (t = e.find(l[a + 1].id).getBBox().maxY), t
													}(),
													parent: o,
													id: n.id + void 0 + o.id + r,
													color: "red",
													nth: a + 1,
													addOrder: "push",
													side: n.side
												});
												if (!n.children || 0 === n.children.length || 1 === n.children.length && n.children[0].isPlaceholder) {
													var g;
													g = n.x > o.x ? {
														minX: f.maxX,
														minY: f.minY - 0,
														maxX: f.maxX + 100,
														maxY: f.maxY + 0
													} : {
														minX: f.minX - 100,
														minY: f.minY - 0,
														maxX: f.minX,
														maxY: f.maxY + 0
													}, t.push(i({}, g, {
														parent: n,
														id: NaN + n.id + r,
														nth: 0,
														color: "green",
														side: n.side,
														addOrder: "push"
													}))
												}
											}
										}, function(t) {
											return t.children
										}), this.set("hotAreas", t), o && this._drawHotAreaShape()
									}
								}, {
									key: "hideHotArea",
									value: function() {
										var t = this.get("_graph");
										this.get("hotAreaGroup").clear(), t.draw(), this.set("showHotArea", !1)
									}
								}, {
									key: "showHotArea",
									value: function() {
										this._drawHotAreaShape(), this.set("showHotArea", !0)
									}
								}, {
									key: "getHotArea",
									value: function(t) {
										var e;
										return this.get("hotAreas").forEach(function(n) {
											if (t.x > n.minX && t.x < n.maxX && t.y > n.minY && t.y < n.maxY) return e = n, !1
										}), e
									}
								}, {
									key: "saveExpandImage",
									value: function(t) {
										var e, n, r, o = this,
											a = this.getGraph(),
											u = a.getBBox(),
											c = a.getFitViewPadding();
										return a.saveImage(i({
											width: u.width + c[1] + c[3],
											height: u.height + c[0] + c[2],
											beforeTransform: function() {
												var t = a.getNodes();
												(e = t.filter(function(t) {
													return t.getModel().collapsed
												}).map(function(t) {
													return t.getModel().id
												})).forEach(function(t) {
													a.update(t, {
														collapsed: !1
													})
												}), a.layout(), n = o.getSelected().map(function(t) {
													return t.id
												}), r = o.getSelected().map(function(t) {
													return t.id
												}), o.clearSelected(), o.clearActived()
											},
											afterTransform: function() {
												e.forEach(function(t) {
													a.update(t, {
														collapsed: !0
													})
												}), o.setSelected(n, !0), o.setActived(r, !0)
											}
										}, t))
									}
								}, {
									key: "save",
									value: function() {
										var t = this.get("_graph").save();
										return t.roots.forEach(function(t) {
											p.traverseTree(t, function(t) {
												delete t.x, delete t.y, delete t.width, delete t.height, delete t.parent, delete t.nth, delete t.hierarchy, delete t.index, delete t.shape
											}, function(t) {
												return t.children
											}, !0)
										}), t
									}
								}]), e
						}();
					p.each(g, function(t) {
						p.mix(v.prototype, t.AUGMENT)
					}), t.exports = v
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								i = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), i.forEach(function(e) {
								r(t, e, n[e])
							})
						}
						return t
					}({}, n(12), {
						getMindNodeSide: function(t) {
							var e = t.getModel();
							if (e.side) return e.side;
							var n = t.getParent();
							return n ? n.getModel().side ? n.getModel().side : i.getMindNodeSide(n) : void 0
						}
					});
					t.exports = i
				}, function(t, e, n) {
					t.exports = n(13)
				}, function(t, e, n) {
					function r(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function i(t, e, n) {
						return e && r(t.prototype, e), n && r(t, n), t
					}
					var o = n(16).Util,
						a = function() {
							function t(e) {
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, t);
								var n = this.getDefaultCfg();
								o.mix(this, n, e), this.init()
							}
							return i(t, [{
								key: "getDefaultCfg",
								value: function() {
									return {}
								}
							}]), i(t, [{
								key: "init",
								value: function() {}
							}, {
								key: "destroy",
								value: function() {}
							}]), t
						}();
					t.exports = a
				}, , , , function(t, e) {
					t.exports = {
						nodeDefaultShape: "flow-node",
						edgeDefaultShape: "flow-smooth",
						groupDefaultShape: "flow-group",
						nodeActivedOutterStyle: {
							lineWidth: 0
						},
						groupSelectedOutterStyle: {
							stroke: "#E0F0FF",
							lineWidth: 2
						},
						nodeSelectedOutterStyle: {
							stroke: "#E0F0FF",
							lineWidth: 2
						},
						edgeActivedStyle: {
							stroke: "#1890FF",
							strokeOpacity: .92
						},
						nodeActivedStyle: {
							fill: "#F3F9FF",
							stroke: "#1890FF"
						},
						groupActivedStyle: {
							stroke: "#1890FF"
						},
						edgeSelectedStyle: {
							lineWidth: 2,
							strokeOpacity: .92,
							stroke: "#A3B1BF"
						},
						nodeSelectedStyle: {
							fill: "#F3F9FF",
							stroke: "#1890FF"
						},
						groupSelectedStyle: {
							stroke: "#1890FF",
							fillOpacity: .92
						},
						nodeStyle: {
							stroke: "#CED4D9",
							fill: "#FFFFFF",
							shadowOffsetX: 0,
							shadowOffsetY: 4,
							shadowBlur: 10,
							shadowColor: "rgba(13, 26, 38, 0.08)",
							lineWidth: 1,
							radius: 4,
							fillOpacity: .92
						},
						edgeStyle: {
							stroke: "#A3B1BF",
							strokeOpacity: .92,
							lineWidth: 1,
							lineAppendWidth: 8,
							endArrow: !0
						},
						groupBackgroundPadding: [40, 10, 10, 10],
						groupLabelOffsetX: 10,
						groupLabelOffsetY: 10,
						defaultNodeSize: [96, 48],
						edgeLabelStyle: {
							fill: "#666",
							textAlign: "center",
							textBaseline: "middle"
						},
						edgeLabelRectPadding: 4,
						edgeLabelRectStyle: {
							fill: "white"
						},
						nodeLabelStyle: {
							fill: "#666",
							textAlign: "center",
							textBaseline: "middle"
						},
						groupStyle: {
							stroke: "#CED4D9",
							radius: 4
						},
						groupLabelStyle: {
							fill: "#666",
							textAlign: "left",
							textBaseline: "top"
						}
					}
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(164),
						o = n(17),
						a = n(31),
						u = n(157),
						c = n(16);
					i.Editor = i, i.Util = o, i.Page = n(7), i.Flow = n(127), i.Mind = n(98), i.Minimap = n(83), i.Toolbar = n(81), i.Contextmenu = n(80), i.Itempannel = n(79), i.Detailpannel = n(78), i.Command = n(31), i.registerBehaviour = i.Page.registerBehaviour, i.registerNode = i.Page.registerNode, i.registerEdge = i.Page.registerEdge, i.registerGroup = i.Page.registerGroup, i.registerGuide = i.Page.registerGuide, i.registerCommand = a.registerCommand, i.version = u, i.track = function(t) {
						var e = {
							G6Editor: !0
						};
						o.isObject(t) ? c.track(function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), i.forEach(function(e) {
									r(t, e, n[e])
								})
							}
							return t
						}({}, e, t)) : t ? c.track(e) : c.track(t)
					}, i.track(!0), t.exports = i
				}, , , , function(t, e) {
					t.exports = {
						gridStyle: {
							stroke: "#A3B1BF",
							lineWidth: .5
						},
						cursor: {
							panningCanvas: "-webkit-grabbing",
							beforePanCanvas: "-webkit-grab"
						},
						wheelPanRatio: .3,
						alignLineStyle: {
							stroke: "#FA8C16",
							lineWidth: 1
						}
					}
				}, function(t, e, n) {
					var r = n(43);
					n(159), n(158), t.exports = r
				}, , , , , , , , , , , , function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function o(t) {
						return t.getCurrentPage().getSelected().length > 0
					}

					function a(t) {
						var e = t.getCurrentPage();
						this.snapShot = e.save(), this.selectedItems = e.getSelected().map(function(t) {
							return t.id
						}), this.method && (h.isString(this.method) ? e[this.method]() : this.method(t))
					}

					function u(t) {
						var e = t.getCurrentPage();
						e.read(this.snapShot), e.setSelected(this.selectedItems, !0)
					}

					function c(t) {
						return t.getCurrentPage().getMode() !== this.toMode
					}

					function s(t) {
						var e = t.getCurrentPage();
						this.fromMode = e.getMode(), e.changeMode(this.toMode)
					}

					function f(t) {
						t.getCurrentPage().changeMode(this.fromMode)
					}

					function l(t) {
						var e = {},
							n = [];
						return t.forEach(function(t) {
							var i = t.model,
								o = h.mix(!0, {}, r({}, i, {
									id: h.guid()
								}));
							e[i.id] = o.id, n.push(r({}, t, {
								model: o
							}))
						}), n.forEach(function(t) {
							var n = t.model;
							if (n.parent) {
								var r = e[n.parent];
								r ? n.parent = r : delete n.parent
							}
						}), n.sort(function(t, e) {
							return t.index - e.index
						}), n
					}
					var h = n(17),
						d = {};
					d.list = [], d.registerCommand = function(t, e, n) {
						if (d[t]) h.mix(d[t], e);
						else {
							var i = r({
								enable: function() {
									return !0
								},
								init: function() {},
								execute: a,
								back: u,
								shortcutCodes: void 0,
								executeTimes: 1,
								name: t,
								queue: !0
							}, e);
							n && d[n] && (i = h.mix({}, d[n], e)), d[t] = i, d.list.push(i)
						}
					}, d.execute = function(t, e, n) {
						var r = h.mix(!0, {}, d[t], n),
							i = e.get("_command");
						if (r.enable(e)) return r.init(), r.queue && (i.queue.splice(i.current, i.queue.length - i.current, r), i.current += 1), e.emit("beforecommandexecute", {
							command: r
						}), r.execute(e), e.emit("aftercommandexecute", {
							command: r
						}), e.setCommandDOMenable(), r
					}, d.enable = function(t, e) {
						return d[t].enable(e)
					}, d.registerCommand("common", {
						back: u
					}), d.registerCommand("update", {
						enable: function() {
							return this.itemId && this.updateModel
						},
						execute: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = n.find(this.itemId);
							1 === this.executeTimes && (this.originModel = h.getContrast(r.getModel(), this.updateModel), this.page = e), n.update(r, this.updateModel)
						},
						back: function() {
							var t = this.page.getGraph(),
								e = t.find(this.itemId);
							t.update(e, this.originModel)
						}
					}), d.registerCommand("redo", {
						queue: !1,
						enable: function(t) {
							var e = t.get("_command"),
								n = e.queue;
							return e.current < n.length
						},
						execute: function(t) {
							var e = t.get("_command");
							e.queue[e.current].execute(t), e.current += 1
						},
						shortcutCodes: [
							["metaKey", "shiftKey", "z"],
							["ctrlKey", "shiftKey", "z"]
						]
					}), d.registerCommand("undo", {
						queue: !1,
						enable: function(t) {
							return t.get("_command").current > 0
						},
						execute: function(t) {
							var e = t.get("_command"),
								n = e.queue[e.current - 1];
							n.executeTimes++, n.back(t), e.current -= 1
						},
						shortcutCodes: [
							["metaKey", "z"],
							["ctrlKey", "z"]
						]
					}), d.registerCommand("copy", {
						queue: !1,
						enable: o,
						method: function(t) {
							var e = t.getCurrentPage().getSelected(),
								n = t.get("_command"),
								i = e.map(function(t) {
									return t.getGraphicGroup()
								}),
								o = h.getChildrenBBox(i);
							n.clipboard = [], e.forEach(function(t) {
								h.traverseTree(t, function(t) {
									var e = t.getModel(),
										r = t.getGraphicGroup();
									n.clipboard.push({
										type: t.type,
										index: h.getIndex(r),
										model: e
									})
								}, function(t) {
									return t.getChildren && t.getChildren()
								}, !0)
							}), t.set("copyCenterBox", r({}, o))
						}
					}), d.registerCommand("pasteHere", {
						enable: function(t) {
							return t.get("_command").clipboard.length > 0
						},
						method: function(t) {
							var e = t.getCurrentPage(),
								n = t.get("_command"),
								r = this.pasteData ? this.pasteData : l(n.clipboard),
								i = this.copyCenterBox ? this.copyCenterBox : t.get("copyCenterBox"),
								o = this.contextmenuPoint ? this.contextmenuPoint : t.get("contextmenuPoint");
							e.clearSelected(), this.copyCenterBox = h.cloneDeep(i), this.pasteData = h.cloneDeep(r), this.contextmenuPoint = h.cloneDeep(o), r.forEach(function(t) {
								var n = t.model;
								n.x && (n.x += o.x - i.minX), n.y && (n.y += o.y - i.minY), e.add(t.type, n)
							})
						},
						back: u
					}), d.registerCommand("paste", {
						enable: function(t) {
							return t.get("_command").clipboard.length > 0
						},
						method: function(t) {
							var e = t.getCurrentPage(),
								n = t.get("_command"),
								r = this.pasteData ? this.pasteData : l(n.clipboard);
							e.clearSelected(), this.pasteData = h.cloneDeep(r), r.forEach(function(t) {
								var n = t.model;
								n.x && (n.x += 10), n.y && (n.y += 10), e.add(t.type, n)
							})
						},
						back: u
					}), d.registerCommand("addGroup", {
						init: function() {
							this.addGroupId = h.guid()
						},
						enable: function(t) {
							return t.getCurrentPage().getSelected().length > 1
						},
						method: function(t) {
							t.getCurrentPage().addGroup({
								id: this.addGroupId
							})
						},
						back: u
					}), d.registerCommand("unGroup", {
						enable: function(t) {
							var e = t.getCurrentPage().getSelected();
							return 1 === e.length && e[0].isGroup
						},
						method: "unGroup",
						back: u
					}), d.registerCommand("delete", {
						getDeleteItems: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = this.itemIds ? this.itemIds.map(function(t) {
									return n.find(t)
								}) : e.getSelected();
							return r = r.filter(function(t) {
								return !1 !== t.deleteable
							})
						},
						enable: function(t) {
							return this.getDeleteItems(t).length > 0
						},
						method: function(t) {
							var e = t.getCurrentPage(),
								n = this.getDeleteItems(t),
								r = e.getGraph();
							e.emit("beforedelete", {
								items: n
							}), h.each(n, function(t) {
								r.remove(t)
							}), e.emit("afterdelete", {
								items: n
							}), this.itemIds = n.map(function(t) {
								return t.getModel().id
							})
						},
						back: u,
						shortcutCodes: ["Delete", "Backspace"]
					}), d.registerCommand("selectAll", {
						method: function(t) {
							var e = t.getCurrentPage();
							e.getGraph().getItems().forEach(function(t) {
								e.setSelected(t, !0)
							})
						},
						back: u,
						shortcutCodes: [
							["metaKey", "a"]
						]
					}), d.registerCommand("toBack", {
						enable: o,
						method: "toBack",
						back: u
					}), d.registerCommand("toFront", {
						enable: o,
						method: "toFront",
						back: u
					}), d.registerCommand("clear", {
						enable: function(t) {
							return t.getCurrentPage().getItems().length > 0
						},
						method: "clear",
						back: u
					}), d.registerCommand("multiSelect", {
						enable: c,
						toMode: "multiSelect",
						execute: s,
						back: f
					}), d.registerCommand("move", {
						enable: c,
						toMode: "move",
						execute: s,
						back: f
					}), t.exports = d
				}, , , , , , , , , function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(14),
						o = n(12);
					t.exports = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								i = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), i.forEach(function(e) {
								r(t, e, n[e])
							})
						}
						return t
					}({}, o, {
						getNodeSize: function(t, e) {
							if (t.size) return o.isNumber(t.size) ? [t.size, t.size] : o.isString(t.size) ? t.size.split("*") : t.size;
							if (t.html && e) {
								var n = o.createDOM(t.html, {
									position: "absolute",
									visibility: "hidden"
								});
								e.appendChild(n);
								var r = o.getWidth(n),
									a = o.getHeight(n);
								return n.remove(), [r, a]
							}
							return i.defaultNodeSize
						}
					})
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function a(t) {
						return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function c(t, e, n) {
						return e && u(t.prototype, e), n && u(t, n), t
					}

					function s(t, e) {
						return (s = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var f = n(163),
						l = n(17),
						h = function(t) {
							function e(t) {
								var n;
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = (n = i(this, a(e).call(this))).getDefaultCfg();
								return n._cfg = l.mix(!0, {}, n._cfg, r, t), n
							}
							return function(t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
								t.prototype = Object.create(e && e.prototype, {
									constructor: {
										value: t,
										writable: !0,
										configurable: !0
									}
								}), e && s(t, e)
							}(e, f), c(e, [{
								key: "getDefaultCfg",
								value: function() {
									return {}
								}
							}]), c(e, [{
								key: "get",
								value: function(t) {
									return this._cfg[t]
								}
							}, {
								key: "set",
								value: function(t, e) {
									this._cfg[t] = e
								}
							}, {
								key: "destroy",
								value: function() {
									this._cfg = {}, this.destroyed = !0
								}
							}]), e
						}();
					t.exports = h
				}, , , , , , , , , , function(t, e, n) {
					var r;
					! function(i) {
						function a(t, e) {
							if (t = t || "", e = e || {}, t instanceof a) return t;
							if (!(this instanceof a)) return new a(t, e);
							var n = function(t) {
								var e = {
										r: 0,
										g: 0,
										b: 0
									},
									n = 1,
									r = null,
									a = null,
									u = null,
									c = !1,
									s = !1;
								return "string" == typeof t && (t = function(t) {
									t = t.replace(T, "").replace(B, "").toLowerCase();
									var e, n = !1;
									if (Y[t]) t = Y[t], n = !0;
									else if ("transparent" == t) return {
										r: 0,
										g: 0,
										b: 0,
										a: 0,
										format: "name"
									};
									return (e = X.rgb.exec(t)) ? {
										r: e[1],
										g: e[2],
										b: e[3]
									} : (e = X.rgba.exec(t)) ? {
										r: e[1],
										g: e[2],
										b: e[3],
										a: e[4]
									} : (e = X.hsl.exec(t)) ? {
										h: e[1],
										s: e[2],
										l: e[3]
									} : (e = X.hsla.exec(t)) ? {
										h: e[1],
										s: e[2],
										l: e[3],
										a: e[4]
									} : (e = X.hsv.exec(t)) ? {
										h: e[1],
										s: e[2],
										v: e[3]
									} : (e = X.hsva.exec(t)) ? {
										h: e[1],
										s: e[2],
										v: e[3],
										a: e[4]
									} : (e = X.hex8.exec(t)) ? {
										r: E(e[1]),
										g: E(e[2]),
										b: E(e[3]),
										a: k(e[4]),
										format: n ? "name" : "hex8"
									} : (e = X.hex6.exec(t)) ? {
										r: E(e[1]),
										g: E(e[2]),
										b: E(e[3]),
										format: n ? "name" : "hex"
									} : (e = X.hex4.exec(t)) ? {
										r: E(e[1] + "" + e[1]),
										g: E(e[2] + "" + e[2]),
										b: E(e[3] + "" + e[3]),
										a: k(e[4] + "" + e[4]),
										format: n ? "name" : "hex8"
									} : !!(e = X.hex3.exec(t)) && {
										r: E(e[1] + "" + e[1]),
										g: E(e[2] + "" + e[2]),
										b: E(e[3] + "" + e[3]),
										format: n ? "name" : "hex"
									}
								}(t)), "object" == (void 0 === t ? "undefined" : o(t)) && (I(t.r) && I(t.g) && I(t.b) ? (e = function(t, e, n) {
									return {
										r: 255 * O(t, 255),
										g: 255 * O(e, 255),
										b: 255 * O(n, 255)
									}
								}(t.r, t.g, t.b), c = !0, s = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : I(t.h) && I(t.s) && I(t.v) ? (r = C(t.s), a = C(t.v), e = function(t, e, n) {
									t = 6 * O(t, 360), e = O(e, 100), n = O(n, 100);
									var r = i.floor(t),
										o = t - r,
										a = n * (1 - e),
										u = n * (1 - o * e),
										c = n * (1 - (1 - o) * e),
										s = r % 6;
									return {
										r: 255 * [n, u, a, a, c, n][s],
										g: 255 * [c, n, n, u, a, a][s],
										b: 255 * [a, a, c, n, n, u][s]
									}
								}(t.h, r, a), c = !0, s = "hsv") : I(t.h) && I(t.s) && I(t.l) && (r = C(t.s), u = C(t.l), e = function(t, e, n) {
									function r(t, e, n) {
										return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
									}
									var i, o, a;
									if (t = O(t, 360), e = O(e, 100), n = O(n, 100), 0 === e) i = o = a = n;
									else {
										var u = n < .5 ? n * (1 + e) : n + e - n * e,
											c = 2 * n - u;
										i = r(c, u, t + 1 / 3), o = r(c, u, t), a = r(c, u, t - 1 / 3)
									}
									return {
										r: 255 * i,
										g: 255 * o,
										b: 255 * a
									}
								}(t.h, r, u), c = !0, s = "hsl"), t.hasOwnProperty("a") && (n = t.a)), n = M(n), {
									ok: c,
									format: t.format || s,
									r: D(255, R(e.r, 0)),
									g: D(255, R(e.g, 0)),
									b: D(255, R(e.b, 0)),
									a: n
								}
							}(t);
							this._originalInput = t, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = L(100 * this._a) / 100, this._format = e.format || n.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = L(this._r)), this._g < 1 && (this._g = L(this._g)), this._b < 1 && (this._b = L(this._b)), this._ok = n.ok, this._tc_id = N++
						}

						function u(t, e, n) {
							t = O(t, 255), e = O(e, 255), n = O(n, 255);
							var r, i, o = R(t, e, n),
								a = D(t, e, n),
								u = (o + a) / 2;
							if (o == a) r = i = 0;
							else {
								var c = o - a;
								switch (i = u > .5 ? c / (2 - o - a) : c / (o + a), o) {
									case t:
										r = (e - n) / c + (e < n ? 6 : 0);
										break;
									case e:
										r = (n - t) / c + 2;
										break;
									case n:
										r = (t - e) / c + 4
								}
								r /= 6
							}
							return {
								h: r,
								s: i,
								l: u
							}
						}

						function c(t, e, n) {
							t = O(t, 255), e = O(e, 255), n = O(n, 255);
							var r, i, o = R(t, e, n),
								a = D(t, e, n),
								u = o,
								c = o - a;
							if (i = 0 === o ? 0 : c / o, o == a) r = 0;
							else {
								switch (o) {
									case t:
										r = (e - n) / c + (e < n ? 6 : 0);
										break;
									case e:
										r = (n - t) / c + 2;
										break;
									case n:
										r = (t - e) / c + 4
								}
								r /= 6
							}
							return {
								h: r,
								s: i,
								v: u
							}
						}

						function s(t, e, n, r) {
							var i = [A(L(t).toString(16)), A(L(e).toString(16)), A(L(n).toString(16))];
							return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
						}

						function f(t, e, n, r) {
							return [A(j(r)), A(L(t).toString(16)), A(L(e).toString(16)), A(L(n).toString(16))].join("")
						}

						function l(t, e) {
							e = 0 === e ? 0 : e || 10;
							var n = a(t).toHsl();
							return n.s -= e / 100, n.s = P(n.s), a(n)
						}

						function h(t, e) {
							e = 0 === e ? 0 : e || 10;
							var n = a(t).toHsl();
							return n.s += e / 100, n.s = P(n.s), a(n)
						}

						function d(t) {
							return a(t).desaturate(100)
						}

						function p(t, e) {
							e = 0 === e ? 0 : e || 10;
							var n = a(t).toHsl();
							return n.l += e / 100, n.l = P(n.l), a(n)
						}

						function g(t, e) {
							e = 0 === e ? 0 : e || 10;
							var n = a(t).toRgb();
							return n.r = R(0, D(255, n.r - L(-e / 100 * 255))), n.g = R(0, D(255, n.g - L(-e / 100 * 255))), n.b = R(0, D(255, n.b - L(-e / 100 * 255))), a(n)
						}

						function v(t, e) {
							e = 0 === e ? 0 : e || 10;
							var n = a(t).toHsl();
							return n.l -= e / 100, n.l = P(n.l), a(n)
						}

						function m(t, e) {
							var n = a(t).toHsl(),
								r = (n.h + e) % 360;
							return n.h = r < 0 ? 360 + r : r, a(n)
						}

						function y(t) {
							var e = a(t).toHsl();
							return e.h = (e.h + 180) % 360, a(e)
						}

						function b(t) {
							var e = a(t).toHsl(),
								n = e.h;
							return [a(t), a({
								h: (n + 120) % 360,
								s: e.s,
								l: e.l
							}), a({
								h: (n + 240) % 360,
								s: e.s,
								l: e.l
							})]
						}

						function x(t) {
							var e = a(t).toHsl(),
								n = e.h;
							return [a(t), a({
								h: (n + 90) % 360,
								s: e.s,
								l: e.l
							}), a({
								h: (n + 180) % 360,
								s: e.s,
								l: e.l
							}), a({
								h: (n + 270) % 360,
								s: e.s,
								l: e.l
							})]
						}

						function _(t) {
							var e = a(t).toHsl(),
								n = e.h;
							return [a(t), a({
								h: (n + 72) % 360,
								s: e.s,
								l: e.l
							}), a({
								h: (n + 216) % 360,
								s: e.s,
								l: e.l
							})]
						}

						function w(t, e, n) {
							e = e || 6, n = n || 30;
							var r = a(t).toHsl(),
								i = 360 / n,
								o = [a(t)];
							for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) r.h = (r.h + i) % 360, o.push(a(r));
							return o
						}

						function S(t, e) {
							e = e || 6;
							for (var n = a(t).toHsv(), r = n.h, i = n.s, o = n.v, u = [], c = 1 / e; e--;) u.push(a({
								h: r,
								s: i,
								v: o
							})), o = (o + c) % 1;
							return u
						}

						function M(t) {
							return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
						}

						function O(t, e) {
							(function(t) {
								return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
							})(t) && (t = "100%");
							var n = function(t) {
								return "string" == typeof t && -1 != t.indexOf("%")
							}(t);
							return t = D(e, R(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), i.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
						}

						function P(t) {
							return D(1, R(0, t))
						}

						function E(t) {
							return parseInt(t, 16)
						}

						function A(t) {
							return 1 == t.length ? "0" + t : "" + t
						}

						function C(t) {
							return t <= 1 && (t = 100 * t + "%"), t
						}

						function j(t) {
							return i.round(255 * parseFloat(t)).toString(16)
						}

						function k(t) {
							return E(t) / 255
						}

						function I(t) {
							return !!X.CSS_UNIT.exec(t)
						}
						var T = /^\s+/,
							B = /\s+$/,
							N = 0,
							L = i.round,
							D = i.min,
							R = i.max,
							G = i.random;
						a.prototype = {
							isDark: function() {
								return this.getBrightness() < 128
							},
							isLight: function() {
								return !this.isDark()
							},
							isValid: function() {
								return this._ok
							},
							getOriginalInput: function() {
								return this._originalInput
							},
							getFormat: function() {
								return this._format
							},
							getAlpha: function() {
								return this._a
							},
							getBrightness: function() {
								var t = this.toRgb();
								return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
							},
							getLuminance: function() {
								var t, e, n, r = this.toRgb();
								return t = r.r / 255, e = r.g / 255, n = r.b / 255, .2126 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4))
							},
							setAlpha: function(t) {
								return this._a = M(t), this._roundA = L(100 * this._a) / 100, this
							},
							toHsv: function() {
								var t = c(this._r, this._g, this._b);
								return {
									h: 360 * t.h,
									s: t.s,
									v: t.v,
									a: this._a
								}
							},
							toHsvString: function() {
								var t = c(this._r, this._g, this._b),
									e = L(360 * t.h),
									n = L(100 * t.s),
									r = L(100 * t.v);
								return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
							},
							toHsl: function() {
								var t = u(this._r, this._g, this._b);
								return {
									h: 360 * t.h,
									s: t.s,
									l: t.l,
									a: this._a
								}
							},
							toHslString: function() {
								var t = u(this._r, this._g, this._b),
									e = L(360 * t.h),
									n = L(100 * t.s),
									r = L(100 * t.l);
								return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
							},
							toHex: function(t) {
								return s(this._r, this._g, this._b, t)
							},
							toHexString: function(t) {
								return "#" + this.toHex(t)
							},
							toHex8: function(t) {
								return function(t, e, n, r, i) {
									var o = [A(L(t).toString(16)), A(L(e).toString(16)), A(L(n).toString(16)), A(j(r))];
									return i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("")
								}(this._r, this._g, this._b, this._a, t)
							},
							toHex8String: function(t) {
								return "#" + this.toHex8(t)
							},
							toRgb: function() {
								return {
									r: L(this._r),
									g: L(this._g),
									b: L(this._b),
									a: this._a
								}
							},
							toRgbString: function() {
								return 1 == this._a ? "rgb(" + L(this._r) + ", " + L(this._g) + ", " + L(this._b) + ")" : "rgba(" + L(this._r) + ", " + L(this._g) + ", " + L(this._b) + ", " + this._roundA + ")"
							},
							toPercentageRgb: function() {
								return {
									r: L(100 * O(this._r, 255)) + "%",
									g: L(100 * O(this._g, 255)) + "%",
									b: L(100 * O(this._b, 255)) + "%",
									a: this._a
								}
							},
							toPercentageRgbString: function() {
								return 1 == this._a ? "rgb(" + L(100 * O(this._r, 255)) + "%, " + L(100 * O(this._g, 255)) + "%, " + L(100 * O(this._b, 255)) + "%)" : "rgba(" + L(100 * O(this._r, 255)) + "%, " + L(100 * O(this._g, 255)) + "%, " + L(100 * O(this._b, 255)) + "%, " + this._roundA + ")"
							},
							toName: function() {
								return 0 === this._a ? "transparent" : !(this._a < 1) && (F[s(this._r, this._g, this._b, !0)] || !1)
							},
							toFilter: function(t) {
								var e = "#" + f(this._r, this._g, this._b, this._a),
									n = e,
									r = this._gradientType ? "GradientType = 1, " : "";
								if (t) {
									var i = a(t);
									n = "#" + f(i._r, i._g, i._b, i._a)
								}
								return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
							},
							toString: function(t) {
								var e = !!t;
								t = t || this._format;
								var n = !1,
									r = this._a < 1 && this._a >= 0;
								return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex4" === t && (n = this.toHex8String(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
							},
							clone: function() {
								return a(this.toString())
							},
							_applyModification: function(t, e) {
								var n = t.apply(null, [this].concat([].slice.call(e)));
								return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
							},
							lighten: function() {
								return this._applyModification(p, arguments)
							},
							brighten: function() {
								return this._applyModification(g, arguments)
							},
							darken: function() {
								return this._applyModification(v, arguments)
							},
							desaturate: function() {
								return this._applyModification(l, arguments)
							},
							saturate: function() {
								return this._applyModification(h, arguments)
							},
							greyscale: function() {
								return this._applyModification(d, arguments)
							},
							spin: function() {
								return this._applyModification(m, arguments)
							},
							_applyCombination: function(t, e) {
								return t.apply(null, [this].concat([].slice.call(e)))
							},
							analogous: function() {
								return this._applyCombination(w, arguments)
							},
							complement: function() {
								return this._applyCombination(y, arguments)
							},
							monochromatic: function() {
								return this._applyCombination(S, arguments)
							},
							splitcomplement: function() {
								return this._applyCombination(_, arguments)
							},
							triad: function() {
								return this._applyCombination(b, arguments)
							},
							tetrad: function() {
								return this._applyCombination(x, arguments)
							}
						}, a.fromRatio = function(t, e) {
							if ("object" == (void 0 === t ? "undefined" : o(t))) {
								var n = {};
								for (var r in t) t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : C(t[r]));
								t = n
							}
							return a(t, e)
						}, a.equals = function(t, e) {
							return !(!t || !e) && a(t).toRgbString() == a(e).toRgbString()
						}, a.random = function() {
							return a.fromRatio({
								r: G(),
								g: G(),
								b: G()
							})
						}, a.mix = function(t, e, n) {
							n = 0 === n ? 0 : n || 50;
							var r = a(t).toRgb(),
								i = a(e).toRgb(),
								o = n / 100;
							return a({
								r: (i.r - r.r) * o + r.r,
								g: (i.g - r.g) * o + r.g,
								b: (i.b - r.b) * o + r.b,
								a: (i.a - r.a) * o + r.a
							})
						}, a.readability = function(t, e) {
							var n = a(t),
								r = a(e);
							return (i.max(n.getLuminance(), r.getLuminance()) + .05) / (i.min(n.getLuminance(), r.getLuminance()) + .05)
						}, a.isReadable = function(t, e, n) {
							var r, i, o = a.readability(t, e);
							switch (i = !1, (r = function(t) {
									var e, n;
									return e = ((t = t || {
										level: "AA",
										size: "small"
									}).level || "AA").toUpperCase(), n = (t.size || "small").toLowerCase(), "AA" !== e && "AAA" !== e && (e = "AA"), "small" !== n && "large" !== n && (n = "small"), {
										level: e,
										size: n
									}
								}(n)).level + r.size) {
								case "AAsmall":
								case "AAAlarge":
									i = o >= 4.5;
									break;
								case "AAlarge":
									i = o >= 3;
									break;
								case "AAAsmall":
									i = o >= 7
							}
							return i
						}, a.mostReadable = function(t, e, n) {
							var r, i, o, u, c = null,
								s = 0;
							i = (n = n || {}).includeFallbackColors, o = n.level, u = n.size;
							for (var f = 0; f < e.length; f++)(r = a.readability(t, e[f])) > s && (s = r, c = a(e[f]));
							return a.isReadable(t, c, {
								level: o,
								size: u
							}) || !i ? c : (n.includeFallbackColors = !1, a.mostReadable(t, ["#fff", "#000"], n))
						};
						var Y = a.names = {
								aliceblue: "f0f8ff",
								antiquewhite: "faebd7",
								aqua: "0ff",
								aquamarine: "7fffd4",
								azure: "f0ffff",
								beige: "f5f5dc",
								bisque: "ffe4c4",
								black: "000",
								blanchedalmond: "ffebcd",
								blue: "00f",
								blueviolet: "8a2be2",
								brown: "a52a2a",
								burlywood: "deb887",
								burntsienna: "ea7e5d",
								cadetblue: "5f9ea0",
								chartreuse: "7fff00",
								chocolate: "d2691e",
								coral: "ff7f50",
								cornflowerblue: "6495ed",
								cornsilk: "fff8dc",
								crimson: "dc143c",
								cyan: "0ff",
								darkblue: "00008b",
								darkcyan: "008b8b",
								darkgoldenrod: "b8860b",
								darkgray: "a9a9a9",
								darkgreen: "006400",
								darkgrey: "a9a9a9",
								darkkhaki: "bdb76b",
								darkmagenta: "8b008b",
								darkolivegreen: "556b2f",
								darkorange: "ff8c00",
								darkorchid: "9932cc",
								darkred: "8b0000",
								darksalmon: "e9967a",
								darkseagreen: "8fbc8f",
								darkslateblue: "483d8b",
								darkslategray: "2f4f4f",
								darkslategrey: "2f4f4f",
								darkturquoise: "00ced1",
								darkviolet: "9400d3",
								deeppink: "ff1493",
								deepskyblue: "00bfff",
								dimgray: "696969",
								dimgrey: "696969",
								dodgerblue: "1e90ff",
								firebrick: "b22222",
								floralwhite: "fffaf0",
								forestgreen: "228b22",
								fuchsia: "f0f",
								gainsboro: "dcdcdc",
								ghostwhite: "f8f8ff",
								gold: "ffd700",
								goldenrod: "daa520",
								gray: "808080",
								green: "008000",
								greenyellow: "adff2f",
								grey: "808080",
								honeydew: "f0fff0",
								hotpink: "ff69b4",
								indianred: "cd5c5c",
								indigo: "4b0082",
								ivory: "fffff0",
								khaki: "f0e68c",
								lavender: "e6e6fa",
								lavenderblush: "fff0f5",
								lawngreen: "7cfc00",
								lemonchiffon: "fffacd",
								lightblue: "add8e6",
								lightcoral: "f08080",
								lightcyan: "e0ffff",
								lightgoldenrodyellow: "fafad2",
								lightgray: "d3d3d3",
								lightgreen: "90ee90",
								lightgrey: "d3d3d3",
								lightpink: "ffb6c1",
								lightsalmon: "ffa07a",
								lightseagreen: "20b2aa",
								lightskyblue: "87cefa",
								lightslategray: "789",
								lightslategrey: "789",
								lightsteelblue: "b0c4de",
								lightyellow: "ffffe0",
								lime: "0f0",
								limegreen: "32cd32",
								linen: "faf0e6",
								magenta: "f0f",
								maroon: "800000",
								mediumaquamarine: "66cdaa",
								mediumblue: "0000cd",
								mediumorchid: "ba55d3",
								mediumpurple: "9370db",
								mediumseagreen: "3cb371",
								mediumslateblue: "7b68ee",
								mediumspringgreen: "00fa9a",
								mediumturquoise: "48d1cc",
								mediumvioletred: "c71585",
								midnightblue: "191970",
								mintcream: "f5fffa",
								mistyrose: "ffe4e1",
								moccasin: "ffe4b5",
								navajowhite: "ffdead",
								navy: "000080",
								oldlace: "fdf5e6",
								olive: "808000",
								olivedrab: "6b8e23",
								orange: "ffa500",
								orangered: "ff4500",
								orchid: "da70d6",
								palegoldenrod: "eee8aa",
								palegreen: "98fb98",
								paleturquoise: "afeeee",
								palevioletred: "db7093",
								papayawhip: "ffefd5",
								peachpuff: "ffdab9",
								peru: "cd853f",
								pink: "ffc0cb",
								plum: "dda0dd",
								powderblue: "b0e0e6",
								purple: "800080",
								rebeccapurple: "663399",
								red: "f00",
								rosybrown: "bc8f8f",
								royalblue: "4169e1",
								saddlebrown: "8b4513",
								salmon: "fa8072",
								sandybrown: "f4a460",
								seagreen: "2e8b57",
								seashell: "fff5ee",
								sienna: "a0522d",
								silver: "c0c0c0",
								skyblue: "87ceeb",
								slateblue: "6a5acd",
								slategray: "708090",
								slategrey: "708090",
								snow: "fffafa",
								springgreen: "00ff7f",
								steelblue: "4682b4",
								tan: "d2b48c",
								teal: "008080",
								thistle: "d8bfd8",
								tomato: "ff6347",
								turquoise: "40e0d0",
								violet: "ee82ee",
								wheat: "f5deb3",
								white: "fff",
								whitesmoke: "f5f5f5",
								yellow: "ff0",
								yellowgreen: "9acd32"
							},
							F = a.hexNames = function(t) {
								var e = {};
								for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
								return e
							}(Y),
							X = function() {
								var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
									e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
									n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
								return {
									CSS_UNIT: new RegExp(t),
									rgb: new RegExp("rgb" + e),
									rgba: new RegExp("rgba" + n),
									hsl: new RegExp("hsl" + e),
									hsla: new RegExp("hsla" + n),
									hsv: new RegExp("hsv" + e),
									hsva: new RegExp("hsva" + n),
									hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
									hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
									hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
									hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
								}
							}();
						void 0 !== t && t.exports ? t.exports = a : void 0 === (r = function() {
							return a
						}.call(e, n, e, t)) || (t.exports = r)
					}(Math)
				}, , , , , , , , , , , , , , , function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(17),
						f = n(21),
						l = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, f),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											type: "detailpannel",
											container: null
										}
									}
								}, {
									key: "init",
									value: function() {
										this._initContainer()
									}
								}, {
									key: "_initContainer",
									value: function() {
										var t = this.container;
										if (!t) throw new Error("please set the container for the detailpannel !");
										s.isString(t) && (t = document.getElementById(t)), this.containerDom = t, this.switch("canvas-selected")
									}
								}, {
									key: "switch",
									value: function(t) {
										var e = this.containerDom.getElementsByClassName("pannel");
										s.each(e, function(e) {
											e.dataset.status === t ? e.style.display = "block" : e.style.display = "none"
										})
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this.editor,
											e = this.getItems;
										s.each(e, function(e) {
											s.addEventListener(e, "mousedown", function() {
												var n = e.dataset;
												t.getCurrentPage().beginAdd(n.type, {
													shape: n.shape
												})
											})
										}), s.addEventListener(window, "mouseup", function() {
											t.getCurrentPage().cancelAdd()
										})
									}
								}]), e
						}();
					t.exports = l
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(17),
						f = n(21),
						l = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, f),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											type: "itempannel",
											container: null,
											getItemData: function(t) {
												return t.dataset
											}
										}
									}
								}, {
									key: "init",
									value: function() {
										this._initContainer()
									}
								}, {
									key: "_initContainer",
									value: function() {
										var t = this.container;
										if (!t) throw new Error("please set the container for the itempannel !");
										s.isString(t) && (t = document.getElementById(t)), this.containerDom = t
									}
								}, {
									key: "bindEvent",
									value: function() {
										function t() {
											var t = n.getCurrentPage();
											e && (t.cancelAdd(), e = void 0)
										}
										var e, n = this.editor,
											r = this;
										s.delegateEvent(this.containerDom, "mousedown", ".getItem", function() {
											e = r.getItemData(this), n.getCurrentPage().beginAdd(e.type, e)
										}), s.addEventListener(window, "mouseup", function() {
											t()
										}), s.addEventListener(window, "mouseleave", function() {
											t()
										})
									}
								}]), e
						}();
					t.exports = l
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(17),
						f = n(21),
						l = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, f),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											type: "contextmenu",
											container: null
										}
									}
								}, {
									key: "init",
									value: function() {
										this._initContainer()
									}
								}, {
									key: "_initContainer",
									value: function() {
										var t = this.container;
										if (!t) throw new Error("please set the container for the tontextmenu !");
										s.isString(t) && (t = document.getElementById(t));
										var e = t.getElementsByClassName("command");
										t.style.position = "absolute", t.style["z-index"] = 2, t.style.top = "0px", t.style.left = "0px", this.commands = e, this.containerDom = t
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this,
											e = this.commands;
										s.each(e, function(e) {
											s.addEventListener(e, "click", function() {
												-1 === e.className.indexOf("disable") && t.hide()
											})
										})
									}
								}, {
									key: "switch",
									value: function(t) {
										var e = this.containerDom.getElementsByClassName("menu");
										s.each(e, function(e) {
											e.dataset.status === t ? e.style.display = "block" : e.style.display = "none"
										})
									}
								}, {
									key: "getCommandDoms",
									value: function() {
										return this.commands
									}
								}, {
									key: "show",
									value: function() {
										var t = this.containerDom;
										this.editor.getCurrentPage().setSignal("preventWheelPan", !0), t.style.display = "block"
									}
								}, {
									key: "hide",
									value: function() {
										var t = this.containerDom;
										this.editor.getCurrentPage().setSignal("preventWheelPan", !1), t.style.display = "none"
									}
								}, {
									key: "move",
									value: function(t, e) {
										var n = this.containerDom,
											r = s.getBoundingClientRect(n),
											i = parseFloat(s.getStyle(n, "top")),
											o = parseFloat(s.getStyle(n, "left"));
										n.style.left = o + (t - r.left) + "px", n.style.top = i + (e - r.top) + "px"
									}
								}]), e
						}();
					t.exports = l
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(17),
						f = n(21),
						l = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, f),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											type: "toolbar",
											container: null
										}
									}
								}, {
									key: "init",
									value: function() {
										this._initContainer()
									}
								}, {
									key: "_initContainer",
									value: function() {
										var t = this.container;
										if (!t) throw new Error("please set the container for the toolbar !");
										s.isString(t) && (t = document.getElementById(t));
										var e = t.getElementsByClassName("command");
										this.commands = e
									}
								}, {
									key: "getCommandDoms",
									value: function() {
										return this.commands
									}
								}]), e
						}();
					t.exports = l
				}, function(t, e, n) {
					window,
					t.exports = function(t) {
						return function(t) {
							function e(r) {
								if (n[r]) return n[r].exports;
								var i = n[r] = {
									i: r,
									l: !1,
									exports: {}
								};
								return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
							}
							var n = {};
							return e.m = t, e.c = n, e.d = function(t, n, r) {
								e.o(t, n) || Object.defineProperty(t, n, {
									enumerable: !0,
									get: r
								})
							}, e.r = function(t) {
								"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
									value: "Module"
								}), Object.defineProperty(t, "__esModule", {
									value: !0
								})
							}, e.t = function(t, n) {
								if (1 & n && (t = e(t)), 8 & n) return t;
								if (4 & n && "object" == (void 0 === t ? "undefined" : o(t)) && t && t.__esModule) return t;
								var r = Object.create(null);
								if (e.r(r), Object.defineProperty(r, "default", {
										enumerable: !0,
										value: t
									}), 2 & n && "string" != typeof t)
									for (var i in t) e.d(r, i, function(e) {
										return t[e]
									}.bind(null, i));
								return r
							}, e.n = function(t) {
								var n = t && t.__esModule ? function() {
									return t.default
								} : function() {
									return t
								};
								return e.d(n, "a", n), n
							}, e.o = function(t, e) {
								return Object.prototype.hasOwnProperty.call(t, e)
							}, e.p = "", e(e.s = 169)
						}({
							168: function(t, e, n) {
								function r(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											r = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), r.forEach(function(e) {
											i(t, e, n[e])
										})
									}
									return t
								}

								function i(t, e, n) {
									return e in t ? Object.defineProperty(t, e, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = n, t
								}
								var o = n(3),
									a = o.Util,
									u = o.G.Canvas,
									c = function() {
										function t(t) {
											a.mix(this, r({
												type: "minimap",
												container: null,
												isMinimap: !0,
												backgroundCSS: {
													height: "100%",
													position: "absolute",
													margin: "auto",
													left: 0,
													right: 0,
													"z-index": 0
												},
												minimapContainerCSS: {
													background: "#fff",
													position: "relative",
													overflow: "hidden"
												},
												viewportCSS: {
													height: "100%",
													position: "absolute",
													margin: "auto",
													left: 0,
													right: 0,
													"z-index": 1
												},
												controlLayerCSS: {
													width: "100%",
													height: "100%",
													cursor: "move",
													position: "absolute",
													"z-index": 2
												},
												viewportWindowStyle: {
													stroke: "#91D5FF"
												},
												viewportBackStyle: {
													fill: "#EBEEF2",
													fillOpacity: .65
												},
												getGraph: function() {}
											}, t)), this._initContainer(), this._initMiniMap(), this._bindEvent(), this._assignDebounceRender()
										}
										var e = t.prototype;
										return e._assignDebounceRender = function() {
											var t = this;
											this.debounceRender = a.debounce(function() {
												t.renderBackground(), t.renderViewPort()
											}, 32)
										}, e.bindGraph = function(t) {
											var e = this;
											t.on("afterchange", function() {
												e.debounceRender()
											}), t.on("afterlayout", function() {
												e.debounceRender()
											}), t.on("afterviewportchange", function() {
												e.renderViewPort()
											}), t.on("afterfilter", function() {
												e.debounceRender()
											})
										}, e.renderBackground = function(t) {
											t || (t = this.getGraph());
											var e = this.miniMapCanvas,
												n = this.width,
												r = this.height,
												i = [];
											t.saveImage({
												graph: t,
												width: n,
												height: r,
												canvas: e,
												beforeTransform: function(e) {
													var n = e[0];
													t.getNodes().forEach(function(t) {
														var e = t.getBBox(),
															r = t.getModel(),
															o = e.width;
														if (o * n < 2) {
															var u = t.getGraphicGroup(),
																c = a.clone(u.getMatrix());
															u.transform([
																["t", -r.x, -r.y],
																["s", 2 / (o * n), 2 / (o * n)],
																["t", r.x, r.y]
															]), i.push({
																item: t,
																originMatrix: c
															})
														}
													})
												},
												afterTransform: function() {
													i.forEach(function(t) {
														var e = t.item,
															n = t.originMatrix;
														e.getGraphicGroup().setMatrix(n)
													})
												}
											}), this.miniMapMatrix = e.matrix
										}, e._bindEvent = function() {
											function t() {
												s = !1, n = void 0, i = void 0, e = void 0, r = void 0, o = void 0
											}
											var e, n, r, i, o, u = this,
												c = this.controlLayer,
												s = !1;
											c.on("mousedown", function(t) {
												u.miniMapMatrix && (o = u.getGraph(), s = !0, e = a.cloneDeep(o.getMatrix()), n = u.miniMapMatrix[0], r = e[0], i = {
													clientX: t.clientX,
													clientY: t.clientY
												})
											}), c.on("mouseup", function() {
												t()
											}), c.on("mouseleave", function() {
												t()
											}), c.on("mousemove", function(t) {
												if (s && o) {
													var u = i.clientX - t.clientX,
														c = i.clientY - t.clientY,
														f = a.cloneDeep(e);
													a.mat3.translate(f, f, [r * u / n, r * c / n]), o.updateMatrix(f)
												}
											})
										}, e._initMiniMap = function() {
											var t = this.background,
												e = this.viewPort,
												n = this.width,
												i = this.height,
												o = this.viewportWindowStyle,
												a = this.viewportBackStyle,
												c = new u({
													containerDOM: t,
													width: n,
													height: i
												}),
												s = new u({
													containerDOM: e,
													width: n,
													height: i
												}),
												f = s.addShape("rect", {
													attrs: r({
														x: 0,
														y: 0,
														width: n,
														height: i
													}, o)
												}),
												l = s.addShape("path", {
													attrs: r({
														path: "M0,0 L1,1"
													}, a)
												});
											t.css({
												width: n + "px",
												height: i + "px"
											}), e.css({
												position: "absolute"
											}), this.miniMapCanvas = c, this.viewportCanvas = s, this.viewportWindow = f, this.viewportBack = l
										}, e._initContainer = function() {
											var t = this.container,
												e = this.width,
												n = this.height;
											if (!t) throw new Error("please set the container for the minimap !");
											a.isString(t) && (t = document.getElementById(t)), e || (e = a.getWidth(t), this.width = e), n || (n = a.getHeight(t), this.height = n);
											var r = this.minimapContainerCSS;
											r.width = e + "px", r.height = n + "px";
											var i = this.backgroundCSS,
												o = this.viewportCSS,
												u = this.controlLayerCSS,
												c = a.createDOM('<div class="g6-editor-minimap-container"></div>', r),
												s = a.createDOM('<div class="g6-editor-minimap-background"></div>', i),
												f = a.createDOM('<div class="g6-editor-minimap-viewport">', o),
												l = a.createDOM('<div class="g6-editor-minimap-control-layer">', u);
											t.appendChild(c), c.appendChild(l), c.appendChild(f), c.appendChild(s), this.minimapContainer = c, this.background = s, this.viewPort = f, this.controlLayer = l
										}, e.renderViewPort = function(t) {
											if (t || (t = this.getGraph()), 0 !== t.getItems().length) {
												var e = this.viewportWindow,
													n = this.viewportCanvas,
													r = this.viewportBack,
													i = this.miniMapMatrix,
													o = t.getWidth(),
													u = t.getHeight(),
													c = this.width,
													s = this.height,
													f = t.getMatrix();
												if (i) {
													var l = a.invertMatrix({
															x: 0,
															y: 0
														}, f),
														h = a.invertMatrix({
															x: o,
															y: u
														}, f),
														d = a.applyMatrix(l, i),
														p = a.applyMatrix(h, i),
														g = p.x - d.x,
														v = p.y - d.y;
													r.attr({
														path: [
															["M", 0, 0],
															["L", c, 0],
															["L", c, s],
															["L", 0, s],
															["L", 0, 0],
															["M", d.x, d.y],
															["L", d.x, p.y],
															["L", p.x, p.y],
															["L", p.x, d.y],
															["L", d.x, d.y]
														]
													}), e.attr({
														x: d.x,
														y: d.y,
														width: g,
														height: v
													}), n.draw()
												}
											}
										}, e.destroy = function() {
											this.minimapContainer.destroy()
										}, t
									}();
								t.exports = c
							},
							169: function(t, e, n) {
								function r(t, e, n) {
									return e in t ? Object.defineProperty(t, e, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = n, t
								}
								var i = n(3),
									o = n(168),
									a = function() {
										function t(t) {
											this.options = t
										}
										var e = t.prototype;
										return e.init = function() {
											var t = this.graph,
												e = new o(function(t) {
													for (var e = 1; e < arguments.length; e++) {
														var n = null != arguments[e] ? arguments[e] : {},
															i = Object.keys(n);
														"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
															return Object.getOwnPropertyDescriptor(n, t).enumerable
														}))), i.forEach(function(e) {
															r(t, e, n[e])
														})
													}
													return t
												}({
													getGraph: function() {
														return t
													}
												}, this.options));
											e.bindGraph(t), this.minimap = e
										}, e.destroy = function() {
											this.minimap.destroy()
										}, t
									}();
								i.Plugins["tool.minimap"] = a, i.Components.Minimap = o, t.exports = a
							},
							3: function(e, n) {
								e.exports = t
							}
						})
					}(n(16))
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function a(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function u(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function c(t) {
						return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function s(t, e) {
						return (s = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var f = n(16);
					n(82);
					var l = f.Components.Minimap,
						h = function(t) {
							function e(t) {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), u(this, c(e).call(this, function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											r = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), r.forEach(function(e) {
											i(t, e, n[e])
										})
									}
									return t
								}({
									type: "minimap"
								}, t)))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && s(t, e)
								}(e, l),
								function(t, e, n) {
									e && a(t.prototype, e)
								}(e, [{
									key: "bindPage",
									value: function(t) {
										var e = t.getGraph();
										this.bindGraph(e), this.debounceRender()
									}
								}]), e
						}();
					t.exports = h
				}, function(t, e, n) {
					function r(t, e, n) {
						var r = t.getGraph(),
							i = e.getModel(),
							o = t.getFirstChildrenBySide("left"),
							a = o[0] && r.find(o[0].id);
						return r.add("node", {
							id: n,
							parent: e.id,
							label: "新建节点",
							side: i.children.length > 2 ? "left" : "right",
							nth: a ? r.getNth(a) : void 0
						})
					}
					var i = n(31),
						o = n(19);
					i.registerCommand("append", {
						enable: function(t) {
							var e = t.getCurrentPage(),
								n = e.getSelected();
							return e.isMind && 1 === n.length
						},
						getItem: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph();
							return this.selectedItemId ? n.find(this.selectedItemId) : e.getSelected()[0]
						},
						execute: function(t) {
							var e, n = t.getCurrentPage(),
								i = n.getGraph(),
								o = n.getRoot(),
								a = this.getItem(t),
								u = a.getModel(),
								c = u.hierarchy,
								s = a.getParent();
							if (a.isRoot) e = r(n, a, this.addItemId);
							else {
								var f = i.getNth(a);
								e = i.add("node", {
									id: this.addItemId,
									parent: s.id,
									side: 2 === c && 3 === o.children.length ? "left" : u.side,
									label: "新建节点",
									nth: "left" === u.side && 2 === c ? f : f + 1
								})
							}
							n.clearSelected(), n.clearActived(), n.setSelected(e, !0), 1 === this.executeTimes && (this.selectedItemId = a.id, this.addItemId = e.id, n.beginEditLabel(e))
						},
						back: function(t) {
							var e = t.getCurrentPage();
							e.getGraph().remove(this.addItemId), e.clearSelected(), e.clearActived(), e.setSelected(this.selectedItemId, !0)
						},
						shortcutCodes: ["Enter"]
					}), i.registerCommand("appendChild", {
						enable: function(t) {
							var e = t.getCurrentPage(),
								n = e.getSelected();
							return e.isMind && n.length > 0
						},
						getItem: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph();
							return this.selectedItemId ? n.find(this.selectedItemId) : e.getSelected()[0]
						},
						execute: function(t) {
							var e, n = t.getCurrentPage(),
								i = n.getGraph(),
								o = this.getItem(t);
							e = o.isRoot ? r(n, o, this.addItemId) : i.add("node", {
								id: this.addItemId,
								parent: o.id,
								label: "新建节点"
							}), n.clearSelected(), n.clearActived(), n.setSelected(e, !0), 1 === this.executeTimes && (this.selectedItemId = o.id, this.addItemId = e.id, n.beginEditLabel(e))
						},
						back: function(t) {
							var e = t.getCurrentPage();
							e.getGraph().remove(this.addItemId), e.clearSelected(), e.clearActived(), e.setSelected(this.selectedItemId, !0)
						},
						shortcutCodes: ["Tab"]
					}), i.registerCommand("moveMindNode", {
						enable: function(t) {
							var e = t.getCurrentPage(),
								n = e.get("panItems");
							return e.isMind && n && n.length > 0
						},
						execute: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = this.newParentId,
								i = this.newNth,
								a = this.newSide,
								u = o.cloneDeep(this.model);
							delete u.shape, delete u.side, n.remove(u.id), o.mix(u, {
								parent: r,
								nth: i,
								side: a
							});
							var c = n.add("node", u);
							e.clearSelected(), e.setSelected(c, !0)
						},
						back: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = this.originParentId,
								i = this.originNth,
								a = this.originSide,
								u = o.cloneDeep(this.model);
							delete u.shape, delete u.side, n.remove(u.id), o.mix(u, {
								parent: r,
								nth: i,
								side: a
							});
							var c = n.add("node", u);
							e.clearSelected(), e.setSelected(c, !0)
						}
					})
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					n(18).registerEdge("mind-placeholder-edge", {
						getOriginShapeObject: function(t) {
							return t.getGraph().getShapeObj("edge", {
								shape: "mind-edge"
							})
						},
						getPath: function(t) {
							return this.getOriginShapeObject(t).getPath(t)
						},
						getStyle: function(t) {
							return function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var n = null != arguments[e] ? arguments[e] : {},
										i = Object.keys(n);
									"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
										return Object.getOwnPropertyDescriptor(n, t).enumerable
									}))), i.forEach(function(e) {
										r(t, e, n[e])
									})
								}
								return t
							}({}, this.getOriginShapeObject(t).getStyle(t), {
								stroke: "#91D5FF"
							})
						}
					})
				}, function(t, e, n) {
					n(18).registerEdge("mind-edge", {
						getEdetal: function(t) {
							return t.children && t.children.length > 0 && !t.collapsed ? 2 === t.hierarchy ? 24 : 18 : 0
						},
						getPath: function(t) {
							var e = t.getPoints(),
								n = t.getSource(),
								r = t.getTarget(),
								i = n.getBBox(),
								o = r.getBBox(),
								a = r.getModel(),
								u = 14,
								c = 4;
							if (2 === a.hierarchy && (u = 66, c = 30), e[0].y === e[1].y) {
								var s = 3 === a.hierarchy ? 24 : 18,
									f = this.getEdetal(a);
								return i.centerX < o.centerX ? [
									["M", e[0].x + s, e[0].y],
									["L", o.maxX + f, o.maxY]
								] : [
									["M", e[0].x + 2, e[0].y],
									["L", o.minX - f, o.maxY]
								]
							}
							if (a.hierarchy >= 3) {
								var l = 3 === a.hierarchy ? 24 : 18,
									h = this.getEdetal(a);
								if (i.centerX < o.centerX) {
									var d = e[0].x + l;
									return [
										["M", e[0].x, e[0].y],
										["M", d, e[0].y],
										["C", d + c, e[0].y, o.minX - u, o.maxY, o.minX, o.maxY],
										["L", o.maxX + h, o.maxY]
									]
								}
								var p = e[0].x - l;
								return [
									["M", e[0].x, e[0].y],
									["M", p, e[0].y],
									["C", p - c, e[0].y, o.maxX + u, o.maxY, o.maxX, o.maxY],
									["L", o.minX - h, o.maxY]
								]
							}
							var g = this.getEdetal(a);
							return i.centerX < o.centerX ? [
								["M", e[0].x, e[0].y],
								["C", e[0].x + c, e[0].y, o.minX - u, o.maxY, o.minX, o.maxY],
								["L", o.maxX + g, o.maxY]
							] : [
								["M", e[0].x, e[0].y],
								["C", e[0].x - c, e[0].y, o.maxX + u, o.maxY, o.maxX, o.maxY],
								["L", o.minX - g, o.maxY]
							]
						},
						getStyle: function(t) {
							var e = t.getTarget(),
								n = 1;
							if (e) {
								var r = e.getModel();
								n = r.hierarchy <= 3 ? 3 : r.hierarchy <= 5 ? 2 : 1
							}
							return {
								stroke: "#959EA6",
								lineWidth: n
							}
						}
					})
				}, function(t, e, n) {
					var r = n(18),
						i = n(19);
					r.registerNode("mind-placeholder", {
						afterDraw: function(t) {
							t.getKeyShape().isPlaceholder = !0
						},
						getPath: function(t) {
							var e, n = t.getModel().parentModel,
								r = this.getStyle(t),
								o = 0;
							return n.hierarchy <= 2 ? e = 28 : (e = 20, o = 4), i.getRectPath(-27.5, -e / 2 + o, 55, e, r.radius)
						},
						getStyle: function() {
							return {
								fill: "#91D5FF",
								radius: 4,
								lineWidth: 3
							}
						},
						drawExpandedButton: function() {},
						drawCollapsedButton: function() {},
						anchor: function() {
							return [
								[0, 1],
								[1, 1]
							]
						}
					})
				}, function(t, e, n) {
					var r = n(18),
						i = n(19);
					r.registerNode("mind-root", {
						adjustLabelPosition: function(t, e) {
							var n = e.getBBox();
							e.attr({
								x: -n.width / 2,
								y: -n.height / 2 - 1
							})
						},
						getPath: function(t) {
							var e = this.getSize(t),
								n = this.getStyle(t);
							return i.getRectPath(-e[0] / 2, -e[1] / 2, e[0], e[1], n.radius)
						},
						getButtonPositon: function(t, e, n) {
							return "right" === n ? {
								x: t.maxX + 2,
								y: (t.maxY + t.minY) / 2 - (e.maxY - e.minY) / 2
							} : {
								x: t.minX - (e.maxX - e.minX) - 2,
								y: (t.maxY + t.minY) / 2 - (e.maxY - e.minY) / 2
							}
						},
						getPadding: function() {
							return i.toAllPadding([12, 24])
						},
						getStyle: function() {
							return {
								fill: "#587EF7",
								stroke: "#587EF7",
								fillOpacity: 1,
								radius: 4
							}
						},
						getLabelStyle: function() {
							return {
								fontSize: 20,
								fill: "white",
								lineHeight: 28
							}
						},
						drawExpandedButton: function() {},
						drawCollapsedButton: function() {},
						panAble: !1,
						anchor: [
							[.45, .5],
							[.55, .5]
						]
					}, "mind-first-sub")
				}, function(t, e, n) {
					n(18).registerNode("mind-second-sub", {
						dy: 0,
						getPadding: function() {
							return [8, 4, 8, 4]
						},
						getLabelStyle: function() {
							return {
								fill: "rgba(38,38,38,0.85)",
								fontSize: 12,
								lineHeight: 20
							}
						}
					}, "mind-node")
				}, function(t, e, n) {
					n(18).registerNode("mind-first-sub", {
						dy: 0,
						getPadding: function() {
							return [6, 12, 8, 12]
						},
						getLabelStyle: function() {
							return {
								fill: "rgba(38,38,38,0.85)",
								fontWeight: 500,
								fontSize: 14,
								lineHeight: 20
							}
						}
					}, "mind-node")
				}, function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var o = n(18),
						a = n(19),
						u = {
							fill: "#000",
							textAlign: "left",
							textBaseline: "top"
						},
						c = {
							stroke: "#959EA6",
							strokeOpacity: 0,
							fill: "#959EA6",
							cursor: "pointer"
						},
						s = {
							stroke: "#434B54",
							fill: "#fff",
							cursor: "pointer"
						};
					o.registerNode("mind-node", {
						dy: 4,
						afterDraw: function(t) {
							var e = t.getModel();
							e.children && e.children.length > 0 && e.collapsed && this.drawExpandedButton(t)
						},
						debugDrawLayoutPoint: function(t) {
							var e = t.getModel();
							t.getGraphicGroup().addShape("circle", {
								attrs: {
									x: e.x,
									y: e.y,
									r: 5,
									fill: "red"
								}
							})
						},
						drawExpandedButton: function(t) {
							var e = t.getKeyShape().getBBox(),
								n = t.getGraphicGroup().addGroup(),
								i = n.addShape("path", {
									attrs: r({
										path: a.getRectPath(0, 0, 16, 7, 3)
									}, c)
								}),
								o = i.getBBox(),
								u = a.getMindNodeSide(t),
								s = this.getButtonPositon(e, o, u),
								f = {
									fill: "white",
									r: 1
								};
							n.addShape("circle", {
								attrs: r({}, f, {
									x: 4,
									y: 3.5
								}),
								capture: !1
							}), n.addShape("circle", {
								attrs: r({}, f, {
									x: 8,
									y: 3.5
								}),
								capture: !1
							}), n.addShape("circle", {
								attrs: r({}, f, {
									x: 12,
									y: 3.5
								}),
								capture: !1
							}), i.attr("lineAppendWidth", 20), n.translate(s.x, s.y), i.isExpandedButton = !0, i.isButton = !0
						},
						drawCollapsedButton: function(t) {
							var e = t.getKeyShape().getBBox(),
								n = t.getGraphicGroup().addShape("path", {
									attrs: r({
										path: a.getCollapsedButtonPath()
									}, s)
								}),
								i = n.getBBox(),
								o = a.getMindNodeSide(t),
								u = this.getButtonPositon(e, i, o);
							n.translate(u.x, u.y), n.isCollapsedButton = !0, n.isButton = !0
						},
						getButtonPositon: function(t, e, n) {
							return "right" === n ? {
								x: t.maxX + 2,
								y: t.maxY - (e.maxY - e.minY) / 2
							} : {
								x: t.minX - (e.maxX - e.minX) - 2,
								y: t.maxY - (e.maxY - e.minY) / 2
							}
						},
						getLabel: function(t) {
							return t.getModel().label
						},
						getPadding: function() {
							return [4, 8, 4, 8]
						},
						getSize: function(t) {
							var e = t.getModel(),
								n = t.getGraphicGroup(),
								r = e.size;
							if (e.size) {
								if (a.isArray(r)) return r;
								if (a.isNumber(r)) return [r, r]
							}
							var i = n.findByClass("label")[0],
								o = this.getPadding(t),
								u = i.getBBox();
							return [u.width + o[1] + o[3], u.height + o[0] + o[2]]
						},
						getPath: function(t) {
							var e = this.getSize(t),
								n = this.getStyle(t);
							return a.getRectPath(-e[0] / 2, -e[1] / 2 + this.dy, e[0], e[1], n.radius)
						},
						drawLabel: function(t) {
							var e = t.getGraphicGroup(),
								n = this.getLabel(t),
								r = this.getLabelStyle(t);
							n || (n = " ");
							var i = a.mix(!0, {}, u, r, {
								x: 0,
								y: 0
							});
							a.isObject(n) ? a.mix(i, n) : i.text = n;
							var o = e.addShape("text", {
								class: "label",
								attrs: i
							});
							return this.adjustLabelText(o), this.adjustLabelPosition(t, o), o
						},
						adjustLabelText: function(t) {
							var e = t.attr("text"),
								n = t.getBBox();
							if (n.maxX - n.minX > 400) {
								var r = t.attr("font");
								e = a.getLabelTextByTextLineWidth(e, r), t.attr("text", e)
							}
						},
						adjustLabelPosition: function(t, e) {
							var n = this.getSize(t),
								r = this.getPadding(),
								i = n[0],
								o = e.getBBox();
							e.attr({
								x: -i / 2 + r[3],
								y: -o.height / 2 + this.dy
							})
						},
						getLabelStyle: function() {
							return {
								fill: "rgba(38,38,38,0.85)",
								lineHeight: 18,
								fontSize: 12
							}
						},
						getStyle: function() {
							return {
								fill: "#ccc",
								fillOpacity: 0,
								radius: 4,
								lineWidth: 2
							}
						},
						getActivedStyle: function() {
							return {
								stroke: "#44C0FF",
								lineWidth: 2
							}
						},
						getSelectedStyle: function() {
							return {
								stroke: "#1AA7EE",
								lineWidth: 2
							}
						},
						anchor: [
							[0, 1],
							[1, 1]
						]
					})
				}, function(t, e, n) {
					n(91), n(90), n(89), n(88), n(87), n(86), n(85)
				}, function(t, e, n) {
					n(7).registerBehaviour("keydownEditLabel", function(t) {
						t.getGraph().behaviourOn("keydown", function(e) {
							t.showLabelEditor(e)
						})
					})
				}, function(t, e, n) {
					n(7).registerBehaviour("keydownMoveSelection", function(t) {
						t.getGraph().on("keydown", function(e) {
							t._moveItemSelection(e)
						})
					})
				}, function(t, e, n) {
					n(7).registerBehaviour("hoverMindExpandButton", function(t) {
						var e = t.getGraph();
						e.behaviourOn("mouseenter", function(t) {
							var n = t.shape;
							n && n.isExpandedButton && (n.attr("fillOpacity", .8), e.draw())
						}), e.behaviourOn("mouseleave", function(t) {
							var n = t.shape;
							n && n.isExpandedButton && (n.attr("fillOpacity", 1), e.draw())
						})
					})
				}, function(t, e, n) {
					var r = n(7),
						i = n(19);
					r.registerBehaviour("panMindNode", function(t) {
						function e() {
							r.nth = o;
							var e = u.add("node", r);
							t.setSelected(e, !0), a && u.remove(a.id)
						}

						function n() {
							u.emit("panitemend"), r = void 0, a = void 0, o = void 0
						}
						var r, o, a, u = t.getGraph();
						u.behaviourOn("beforeshowdelegation", function() {
							t.clearSelected(), t.clearActived()
						}), u.behaviourOn("node:dragstart", function(t) {
							if (2 !== t.button) {
								var e = t.item;
								!(r = e.getModel()).parent || t.shape.isCollapsedButton || t.shape.isExpandedButton ? n() : (o = u.getNth(e), u.remove(e))
							}
						}), u.behaviourOn("itempanning", function(e) {
							if (!e.shape || !e.shape.isPlaceholder) {
								var n = t.getHotArea(e),
									r = t.getRoot();
								if (a && (n ? a.id !== n.id && u.remove(u.find(a.id)) : u.remove(u.find(a.id))), a = n, n) {
									var i = n.parent;
									if (!u.find(n.id)) {
										var o = {
											id: n.id,
											parent: i.id,
											isPlaceholder: !0,
											parentModel: i,
											baseline: a.parent.id === r.id ? "center" : void 0,
											shape: "mind-placeholder",
											nth: n.nth
										};
										n.side && (o.side = n.side), u.add("node", o)
									}
								}
							}
						}), u.behaviourOn("drop", function() {
							if (r)
								if (a) {
									var c = i.cloneDeep(r);
									u.remove(a.id), t.executeCommand("moveMindNode", {
										model: c,
										newParentId: a.parent.id,
										newNth: a.nth,
										newSide: a.side,
										originParentId: r.parent,
										originNth: o,
										originSide: r.side
									})
								} else e();
							n()
						}), u.behaviourOn("canvas:mouseleave", function() {
							r && (e(), n())
						})
					}, ["startPanItem", "processPanItem", "endPanItem"])
				}, function(t, e, n) {
					n(96), n(95), n(94), n(93)
				}, function(t, e, n) {
					var r = n(18),
						i = n(7);
					r.Util = n(19), i.setRegister(r, "mind"), n(97), n(92), n(84), t.exports = r
				}, function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var o = n(7),
						a = n(25),
						u = n(20),
						c = u.getGroupIconPath(),
						s = u.getCollapsedButtonPath(),
						f = u.getExpandedButtonPath(),
						l = {
							fill: "#CED4D9"
						},
						h = {
							stroke: "#697B8C",
							fill: "#fff",
							fillOpacity: 0
						},
						d = {
							stroke: "#697B8C",
							fill: "#fff",
							fillOpacity: 0
						},
						p = {
							fill: "#000000",
							textBaseline: "top",
							textAlign: "left"
						},
						g = {
							stroke: "#CED4D9",
							fill: "#F2F4F5",
							radius: 4
						},
						v = a.groupBackgroundPadding,
						m = 184 - v[1] - v[3],
						y = 40 - v[0] - v[2];
					o.registerGroup("flow-group", {
						draw: function(t) {
							var e = t.getModel(),
								n = t.getGraphicGroup(),
								i = t.getChildrenBBox(),
								o = this.getStyle(t),
								a = e.collapsed,
								g = e.padding ? e.padding : v;
							if (i.minX === 1 / 0 && (i.minX = e.x, i.maxX = e.x + m, i.minY = e.y, i.maxY = e.y + y), a && (i.minX = i.maxX - m, i.maxY = i.minY + y), i.maxX - i.minX < m) {
								var b = m - i.maxX + i.minX;
								i.minX -= b / 2, i.maxX += b / 2
							}
							var x = function(t, e) {
									return t.minX - e[3]
								}(i, g),
								_ = function(t, e) {
									return t.minY - e[0]
								}(i, g),
								w = function(t, e) {
									return t.maxX - t.minX + e[3] + e[1]
								}(i, g),
								S = function(t, e) {
									return t.maxY - t.minY + e[0] + e[2]
								}(i, g),
								M = function(t, e, n, i) {
									var o = e.addShape("path", {
										attrs: r({}, i, {
											path: n
										})
									});
									return o.isGroupKeyShape = !0, o
								}(0, n, u.getRectPath(x, _, w, S, o.radius), o);
							return function(t, e, n, r) {
									var i = u.mix(!0, {}, p, {
										x: n + 40,
										y: r + 13
									});
									u.isString(t) ? i.text = t : u.mix(i, t), e.addShape("text", {
										attrs: i
									})
								}(u.isNil(e.label) ? "新建分组" : e.label, n, x, _),
								function(t, e, n, i) {
									var o = e.addShape("path", {
											attrs: r({
												path: t
											}, l)
										}),
										a = o.getBBox();
									o.translate(n - a.minX + 8, i - a.minY + 12)
								}(u.isNil(e.icon) ? c : e.icon, n, x, _), (function(t, e, n, i, o) {
									var a;
									if (t) {
										var u = (a = e.addShape("path", {
												attrs: r({
													path: f
												}, d)
											})).getBBox(),
											c = u.maxX - u.minX;
										a.isExpandedButton = !0, a.translate(n + o - u.minX - c - 12, i - u.minY + 12)
									} else {
										var l = (a = e.addShape("path", {
												attrs: r({
													path: s
												}, h)
											})).getBBox(),
											p = l.maxX - l.minX;
										a.isCollapsedButton = !0, a.translate(n + o - l.minX - p - 12, i - l.minY + 12)
									}
									return a.isButton = !0, a
								}(a, n, x, _, w)).item = t, e.x = i.minX, e.y = i.minY, M
						},
						getStyle: function(t) {
							var e = t.getModel();
							return u.mix(!0, {}, g, {
								fill: e.color,
								stroke: e.color
							}, e.style)
						},
						getActivedStyle: function() {
							return a.groupActivedStyle
						},
						getSelectedStyle: function() {
							return a.groupSelectedStyle
						},
						getSelectedOutterStyle: function() {
							return a.groupSelectedOutterStyle
						},
						getActivedOutterStyle: function() {}
					})
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						return function(t) {
							if (Array.isArray(t)) return t
						}(t) || function(t, e) {
							var n = [],
								r = !0,
								i = !1,
								o = void 0;
							try {
								for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
							} catch (t) {
								i = !0, o = t
							} finally {
								try {
									r || null == u.return || u.return()
								} finally {
									if (i) throw o
								}
							}
							return n
						}(t, e) || function() {
							throw new TypeError("Invalid attempt to destructure non-iterable instance")
						}()
					}

					function a(t, e) {
						var n = Math.min(t.minX, e.minX),
							r = Math.min(t.minY, e.minY),
							i = Math.max(t.maxX, e.maxX),
							o = Math.max(t.maxY, e.maxY);
						return {
							centerX: (n + i) / 2,
							centerY: (r + o) / 2,
							minX: n,
							minY: r,
							maxX: i,
							maxY: o,
							height: o - r,
							width: i - n
						}
					}

					function u(t, e) {
						return 2 * Math.abs(t.centerX - e.centerX) < t.width + e.width && 2 * Math.abs(t.centerY - e.centerY) < t.height + e.height
					}

					function c(t) {
						var e = t.x,
							n = t.y;
						return {
							centerX: e,
							centerY: n,
							minX: e,
							minY: n,
							maxX: e,
							maxY: n,
							height: 0,
							width: 0
						}
					}

					function s(t, e) {
						return 0 === t.width && 0 === t.height ? t : {
							centerX: t.centerX,
							centerY: t.centerY,
							minX: t.minX - e,
							minY: t.minY - e,
							maxX: t.maxX + e,
							maxY: t.maxY + e,
							height: t.height + 2 * e,
							width: t.width + 2 * e
						}
					}

					function f(t, e) {
						return function(t, e) {
							var n = Math.abs(t.x - e.centerX),
								r = Math.abs(t.y - e.centerY);
							return n / e.width > r / e.height
						}(e, t) ? {
							x: e.x > t.centerX ? t.maxX : t.minX,
							y: e.y
						} : {
							x: e.x,
							y: e.y > t.centerY ? t.maxY : t.minY
						}
					}

					function l(t) {
						var e = t.minX,
							n = t.minY,
							r = t.maxX,
							i = t.maxY;
						return [{
							x: e,
							y: n
						}, {
							x: r,
							y: n
						}, {
							x: r,
							y: i
						}, {
							x: e,
							y: i
						}]
					}

					function h(t, e) {
						var n = t.x,
							r = t.y;
						return n < e.minX || n > e.maxX || r < e.minY || r > e.maxY
					}

					function d(t, e, n, r) {
						var i = e.x - t.x,
							o = e.y - t.y,
							a = r.x - n.x,
							u = r.y - n.y,
							c = (-o * (t.x - n.x) + i * (t.y - n.y)) / (-a * o + i * u),
							s = (a * (t.y - n.y) - u * (t.x - n.x)) / (-a * o + i * u);
						return c >= 0 && c <= 1 && s >= 0 && s <= 1
					}

					function p(t, e, n) {
						if (n.width === n.height === 0) return !1;
						var r = i(l(n), 4),
							o = r[0],
							a = r[1],
							u = r[2],
							c = r[3];
						return d(t, e, o, a) || d(t, e, o, c) || d(t, e, a, u) || d(t, e, u, c)
					}

					function g(t) {
						return t = m(t)
					}

					function v(t, e) {
						return [t, {
							x: t.x,
							y: e.y
						}, e]
					}

					function m(t) {
						var e = [],
							n = {};
						return t.forEach(function(t) {
							var e = t.id = "".concat(t.x, "-").concat(t.y);
							n[e] = t
						}), S.each(n, function(t) {
							e.push(t)
						}), e
					}

					function y(t, e) {
						return Math.abs(t.x - e.x) + Math.abs(t.y - e.y)
					}

					function b(t, e, n, r, i) {
						return y(t, e) + y(t, n) + function(t, e) {
							var n = 0;
							return e.forEach(function(e) {
								e && (t.x === e.x && (n += -2), t.y === e.y && (n += -2))
							}), n
						}(t, [e, n, r, i])
					}

					function x(t, e, n, i, o, a, u) {
						var c = [],
							s = [e],
							f = {},
							l = {},
							h = {};
						l[e.id] = 0, h[e.id] = b(e, n, e);
						var d = {};
						t.forEach(function(t) {
							d[t.id] = t
						});
						for (; s.length;) {
							var g = function() {
								var r = void 0,
									g = 1 / 0;
								if (s.forEach(function(t) {
										h[t.id] < g && (g = h[t.id], r = t)
									}), r === n) {
									var v = [];
									return function t(e, n, r, i) {
										var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
										e.unshift(n[i]), r[i] && r[i] !== i && o <= 100 && t(e, n, r, r[i], o + 1)
									}(v, d, f, n.id), {
										v: v
									}
								}! function(t, e) {
									var n = t.indexOf(e);
									n > -1 && t.splice(n, 1)
								}(s, r), c.push(r),
									function(t, e, n, r) {
										var i = [];
										return t.forEach(function(t) {
											t !== e && (t.x !== e.x && t.y !== e.y || p(t, e, n) || p(t, e, r) || i.push(t))
										}), m(i)
									}(t, r, i, o).forEach(function(t) {
										if (-1 === c.indexOf(t)) {
											-1 === s.indexOf(t) && s.push(t);
											var i = h[r.id] + y(r, t);
											l[t.id] && i >= l[t.id] || (f[t.id] = r.id, l[t.id] = i, h[t.id] = l[t.id] + b(t, n, e, a, u))
										}
									})
							}();
							if ("object" === r(g)) return g.v
						}
						return console.error("cannot find path: ", t, e, n), [e, n]
					}

					function _(t, e, n, r, i) {
						var o = n && n.bbox ? n.bbox : c(t),
							d = r && r.bbox ? r.bbox : c(e);
						if (u(o, d)) return g(v(t, e));
						var p = s(o, i),
							y = s(d, i);
						if (u(p, y)) return g(v(t, e));
						var b = f(p, t),
							_ = f(y, e),
							w = function() {
								var t = [],
									e = [];
								(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(n) {
									t.push(n.x), e.push(n.y)
								});
								var n = Math.min.apply(Math, t),
									r = Math.max.apply(Math, t),
									i = Math.min.apply(Math, e),
									o = Math.max.apply(Math, e);
								return {
									centerX: (n + r) / 2,
									centerY: (i + o) / 2,
									maxX: r,
									maxY: o,
									minX: n,
									minY: i,
									height: o - i,
									width: r - n
								}
							}([b, _]),
							S = (a(p, y), a(p, w)),
							M = a(y, w),
							O = [];
						O = (O = O.concat(l(S))).concat(l(M));
						var P = {
							x: (t.x + e.x) / 2,
							y: (t.y + e.y) / 2
						};
						[w, S, M].forEach(function(t) {
							O = O.concat(function(t, e) {
								return function(t, e) {
									return e < t.minX || e > t.maxX ? [] : [{
										x: e,
										y: t.minY
									}, {
										x: e,
										y: t.maxY
									}]
								}(t, e.x).concat(function(t, e) {
									return e < t.minY || e > t.maxY ? [] : [{
										x: t.minX,
										y: e
									}, {
										x: t.maxX,
										y: e
									}]
								}(t, e.y))
							}(t, P).filter(function(t) {
								return h(t, p) && h(t, y)
							}))
						}), [{
							x: b.x,
							y: _.y
						}, {
							x: _.x,
							y: b.y
						}].forEach(function(t) {
							h(t, p) && h(t, y) && O.push(t)
						}), O.unshift(b), O.push(_);
						var E = x(O = m(O), b, _, o, d, t, e);
						return E.unshift(t), E.push(e), g(E)
					}

					function w(t, e) {
						var n = [],
							r = t[0];
						return n.push("M".concat(r.x, " ").concat(r.y)), t.forEach(function(r, o) {
							var a = t[o + 1],
								u = t[o + 2];
							if (a && u)
								if (function(t, e, n) {
										return !(t.x === e.x === n.x || t.y === e.y === n.y)
									}(r, a, u)) {
									var c = i(function(t, e, n, r) {
											var i = y(t, e),
												o = y(n, e);
											return i < r && (r = i), o < r && (r = o), [{
												x: e.x - r / i * (e.x - t.x),
												y: e.y - r / i * (e.y - t.y)
											}, {
												x: e.x - r / o * (e.x - n.x),
												y: e.y - r / o * (e.y - n.y)
											}]
										}(r, a, u, e), 2),
										s = c[0],
										f = c[1];
									n.push("L".concat(s.x, " ").concat(s.y)), n.push("Q".concat(a.x, " ").concat(a.y, " ").concat(f.x, " ").concat(f.y)), n.push("L".concat(f.x, " ").concat(f.y))
								} else n.push("L".concat(a.x, " ").concat(a.y));
							else a && n.push("L".concat(a.x, " ").concat(a.y))
						}), n.join("")
					}
					var S = n(20),
						M = n(7);
					M.registerEdge("flow-polyline", {
						getPathByPoints: function(t, e, n) {
							var r = _(t[0], t[t.length - 1], e, n, 10);
							return S.pointsToPolygon(r)
						}
					}, "flow-edge"), M.registerEdge("flow-polyline-round", {
						getPathByPoints: function(t, e, n) {
							return w(g(_(t[0], t[t.length - 1], e, n, 10)), 5)
						}
					}, "flow-edge")
				}, function(t, e, n) {
					function r(t, e, n, r) {
						var i = r ? r / 2 : 30,
							o = r;
						if (t <= e && e <= n || t >= e && e >= n) {
							var a = (n - e) / 2,
								u = Math.abs(a);
							if (0 === a) return t === e ? 0 : (e - t) / Math.abs(e - t) * i;
							if (u > o) {
								var c = a / u * o;
								return Math.abs(c) < i ? a / u * i : c
							}
							return u < i ? a / u * i : a
						}
						var s = i;
						return (s = Math.abs(e - n) < 2 * Math.abs(e - t) ? r * Math.abs(e - n) / (2 * Math.abs(e - t)) : r) > o && (s = o), s < i && (s = i), e > t ? s : -s
					}

					function i(t, e, n, i) {
						var o, a, u = t.bbox,
							c = function(t, e) {
								var n = Math.abs(t.x - e.centerX),
									r = Math.abs(t.y - e.centerY);
								return n / e.width > r / e.height
							}(e, u);
						o = a = 0;
						var s = Math.min(u.height, u.width);
						return i && i.bbox && (s = Math.min(s, i.bbox.height, i.bbox.width)), c ? o = r(u.centerX, e.x, n.x, s) : a = r(u.centerY, e.y, n.y, s), {
							x: e.x + o,
							y: e.y + a
						}
					}

					function o(t, e) {
						var n = t.x,
							r = t.y,
							i = e.x,
							o = e.y;
						return {
							x: n + (i - n) * c,
							y: r + (o - r) * c
						}
					}

					function a(t, e, n) {
						var r = t[0],
							a = t[t.length - 1],
							c = ["M", r.x, r.y],
							s = function(t, e, n, r) {
								return [n && n.bbox ? i(n, t, e, r) : o(t, e), r && r.bbox ? i(r, e, t, n) : o(e, t)]
							}(r, a, e, n),
							f = ["C"],
							l = [c];
						return u.each(s, function(t) {
							f.push(t.x, t.y)
						}), f.push(a.x, a.y), l.push(f), l
					}
					var u = n(20),
						c = .1;
					n(7).registerEdge("flow-smooth", {
						getPathByPoints: function(t, e, n) {
							return a(t, e, n)
						}
					}, "flow-edge")
				}, function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var o = n(7),
						a = n(20),
						u = n(25);
					o.registerEdge("flow-edge", {
						draw: function(t) {
							var e = t.getModel(),
								n = t.getGraphicGroup(),
								i = function(t, e, n, i) {
									return e.addShape("path", {
										attrs: r({}, i, {
											path: n
										})
									})
								}(0, n, this.getPath(t), this.getStyle(t));
							if (e.label && i) {
								var o = function(t, e, n) {
									var r = n.getPoint(.5),
										i = a.mix(!0, {}, u.edgeLabelStyle, r);
									if (r) return a.isString(t) ? i.text = t : a.mix(i, t), e.addShape("text", {
										attrs: i
									})
								}(e.label, n, i);
								o && (function(t, e, n) {
									var i = a.toAllPadding(u.edgeLabelRectPadding),
										o = t.getBBox();
									n = n || u.edgeLabelRectStyle, e.addShape("rect", {
										attrs: r({}, n, {
											x: o.minX - i[3],
											y: o.minY - i[0],
											width: o.maxX - o.minX + i[1] + i[3],
											height: o.maxY - o.minY + i[0] + i[2]
										})
									})
								}(o, n, e.labelRectStyle), a.toFront(o, n))
							}
							return i
						},
						getPath: function(t) {
							var e = t.getPoints(),
								n = t.getSource(),
								r = t.getTarget();
							return this.getPathByPoints(e, n, r)
						},
						getPathByPoints: function(t) {
							return a.pointsToPolygon(t)
						},
						getStyle: function(t) {
							var e = t.getModel();
							return a.mix(!0, {}, u.edgeStyle, {
								stroke: e.color
							}, e.style)
						},
						getActivedStyle: function() {
							return u.edgeActivedStyle
						},
						getSelectedStyle: function() {
							return u.edgeSelectedStyle
						},
						getActivedOutterStyle: function() {},
						getSelectedOutterStyle: function() {}
					})
				}, function(t, e, n) {
					function r(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								i(t, e, n[e])
							})
						}
						return t
					}

					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var o = n(7),
						a = n(20),
						u = n(25);
					o.registerNode("flow-node", {
						draw: function(t) {
							var e = t.getModel(),
								n = t.getGraphicGroup(),
								i = a.getNodeSize(e),
								o = this.getStyle(t),
								c = function(t, e, n, i) {
									return e.addShape("path", {
										attrs: r({}, i, {
											path: n
										})
									})
								}(0, n, this.getPath(i, o), o);
							return e.label && function(t, e) {
								var n = a.mix(!0, {}, u.nodeLabelStyle, {
									x: 0,
									y: 0
								});
								a.isString(t) ? n.text = t : a.mix(n, t), e.addShape("text", {
									attrs: n
								})
							}(e.label, n), c
						},
						getStyle: function(t) {
							var e, n, r = t.getModel(),
								i = this.getColor(t);
							if (i) {
								var o = a.Palettes.generate(i);
								e = o[0], n = o[3]
							}
							return a.mix(!0, {}, u.nodeStyle, {
								fill: e,
								stroke: n
							}, r.style)
						},
						color: null,
						getColor: function(t) {
							var e = t.getModel();
							return e.color ? e.color : this.color
						},
						getPath: function(t, e) {
							return a.getRectPath(-t[0] / 2, -t[1] / 2, t[0], t[1], e.radius)
						},
						getActivedOutterStyle: function() {
							return u.nodeActivedOutterStyle
						},
						getActivedStyle: function(t) {
							var e = this.getColor(t);
							if (e) {
								var n = a.Palettes.generate(e);
								return r({}, u.nodeActivedStyle, {
									fill: n[0],
									stroke: n[5]
								})
							}
							return u.nodeActivedStyle
						},
						getSelectedStyle: function(t) {
							var e = this.getColor(t);
							if (e) {
								var n = a.Palettes.generate(e);
								return r({}, u.nodeSelectedStyle, {
									fill: n[2],
									stroke: n[5]
								})
							}
							return u.nodeSelectedStyle
						},
						getSelectedOutterStyle: function(t) {
							var e = this.getColor(t);
							if (e) {
								var n = a.Palettes.generate(e);
								return r({}, u.nodeSelectedOutterStyle, {
									stroke: n[1],
									fill: n[1]
								})
							}
							return u.nodeSelectedOutterStyle
						},
						anchor: [
							[.5, 0],
							[1, .5],
							[.5, 1],
							[0, .5]
						]
					}), o.registerNode("flow-html", {}, ["flow-node", "html"]), o.registerNode("flow-rect", {}, "flow-node"), o.registerNode("flow-capsule", {
						getPath: function(t) {
							return a.getRectPath(-t[0] / 2, -t[1] / 2, t[0], t[1], t[1] / 2)
						}
					}, "flow-node"), o.registerNode("flow-circle", {
						getPath: function(t) {
							var e = t[0],
								n = t[1];
							return a.getEllipsePath(0, 0, e / 2, n / 2)
						}
					}, "flow-node"), o.registerNode("flow-rhombus", {
						getPath: function(t) {
							var e = t[0],
								n = t[1],
								r = [{
									x: 0,
									y: 0 - n / 2
								}, {
									x: 0 + e / 2,
									y: 0
								}, {
									x: 0,
									y: 0 + n / 2
								}, {
									x: 0 - e / 2,
									y: 0
								}, {
									x: 0,
									y: 0 - n / 2
								}];
							return a.pointsToPolygon(r)
						}
					}, "flow-node")
				}, function(t, e, n) {
					n(103), n(102), n(101), n(100), n(99)
				}, function(t, e, n) {
					var r = n(7),
						i = n(14),
						o = n(13);
					r.registerBehaviour("dragOutFromGroup", function(t) {
						function e() {
							clearTimeout(a), r && u.update(r, {
								padding: void 0,
								style: void 0
							}), c = !1, n = void 0, r = void 0
						}
						var n, r, a, u = t.getGraph(),
							c = !1;
						u.behaviourOn("drag", function(e) {
							t.getSignal("panningItem") && !c && (clearTimeout(a), a = setTimeout(function() {
								var a = t.get("panItems");
								if (a) {
									if (n = a[0], r = a[0].getParent(), n && 1 === a.length && r && !e.shape) {
										var s = t.get("panItemDelegation").getBBox(),
											f = r.getBBox();
										o.rectRectCrossAlgorithm(s, f) && (u.update(r, {
											padding: i.groupBackgroundPadding.map(function(t) {
												return t - 8
											}),
											style: i.dragNodeLeaveFromGroupStyle
										}), c = !0)
									}
									c || (n = void 0, r = void 0)
								}
							}, i.outFromGroupDelayTime))
						}), u.behaviourOn("dragenter", function(t) {
							n && r && (r === t.item && u.update(r, {
								padding: i.groupBackgroundPadding.map(function(t) {
									return t + 4
								}),
								style: i.dragNodeHoverToGroupStyle
							}), c = !1)
						}), u.on("drop", function(t) {
							r && n && !t.shape && (u.update(n, {
								parent: void 0
							}), u.update(r, {
								style: void 0
							}), e())
						}), u.on("dragend", function() {
							e()
						}), u.behaviourOn("canvas:mouseleave", function() {
							e()
						})
					})
				}, function(t, e, n) {
					var r = n(7),
						i = n(14);
					r.registerBehaviour("dragNodeAddToGroup", function(t) {
						function e() {
							t.setSignal("dragaddnodetogroup", !1), n = void 0, r = void 0
						}
						var n, r, o = t.getGraph();
						o.behaviourOn("dragenter", function(e) {
							if (t.getSignal("panningItem")) {
								var a = t.get("panItems");
								a[0] && a[0].isNode && 1 === a.length && e.item && e.item.isGroup && a[0].getParent() !== e.item && (n = a[0], r = e.item, o.update(r, {
									padding: i.groupBackgroundPadding.map(function(t) {
										return t + 4
									}),
									style: i.dragNodeHoverToGroupStyle
								}))
							}
						}), o.behaviourOn("dragleave", function() {
							r && n && o.update(r, {
								padding: void 0,
								style: void 0
							})
						}), o.behaviourOn("drop", function(e) {
							function i() {
								o.update(a, {
									parent: u
								})
							}
							if (r && n && r === e.item) {
								t.setSignal("dragaddnodetogroup", !0);
								var a = n.id,
									u = r.id;
								o.update(u, {
									padding: void 0,
									style: void 0,
									collapsed: !1
								});
								var c = t.editor;
								c ? c.executeCommand(i) : i()
							}
						}), o.behaviourOn("dragend", function() {
							e()
						}), o.behaviourOn("canvas:mouseleave", function() {
							r && (o.update(r, {
								padding: void 0,
								style: void 0
							}), e())
						})
					})
				}, function(t, e, n) {
					n(7).registerBehaviour("keydownShiftMultiSelected", function(t) {
						var e = t.getGraph();
						e.behaviourOn("keydown", function(e) {
							e.domEvent.shiftKey && t.setSignal("shiftKeyDown", !0)
						}), e.behaviourOn("keyup", function(e) {
							e.domEvent.shiftKey || t.setSignal("shiftKeyDown", !1)
						})
					})
				}, function(t, e, n) {
					var r = n(7),
						i = n(14);
					r.registerBehaviour("dragMultiSelect", function(t) {
						function e() {
							t.css({
								cursor: i.cursor.beforePanCanvas
							}), n = void 0, r = void 0
						}
						var n, r, o = t.getGraph(),
							a = o.getRootGroup();
						t.css({
							cursor: i.cursor.multiSelect
						}), o.behaviourOn("dragstart", function(t) {
							2 !== t.button && (n = {
								x: t.x,
								y: t.y
							}, r = a.addShape("rect", {
								attrs: i.multiSelectRectStyle
							}))
						}), o.behaviourOn("drag", function(t) {
							r && (r.attr({
								x: Math.min(n.x, t.x),
								y: Math.min(n.y, t.y),
								width: Math.abs(t.x - n.x),
								height: Math.abs(t.y - n.y)
							}), o.draw())
						}), o.behaviourOn("dragend", function() {
							function n() {
								t.clearSelected(), i.forEach(function(e) {
									var n = o.find(e),
										r = n.getBBox();
									r.minX > a.minX && r.minY > a.minY && r.maxX < a.maxX && r.maxY < a.maxY && t.setSelected(n, !0)
								})
							}
							if (r) {
								var i = o.getNodes().map(function(t) {
										return t.id
									}),
									a = r.getBBox(),
									u = t.editor;
								u ? u.executeCommand(n) : n(), r.remove(), t.changeMode("default"), t.updateStatus(), o.draw(), e()
							}
						}), o.behaviourOn("canvas:mouseleave", function() {
							r && (r.remove(), o.draw(), e())
						})
					})
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(7),
						o = n(14),
						a = n(13);
					i.registerBehaviour("dragAnchorAddEdge", function(t) {
						function e() {
							t.setSignal("dragEdge", !1), i = void 0, u = void 0, c = void 0, s = void 0
						}
						var n, i, u, c, s, f = t.getGraph(),
							l = f.getRootGroup(),
							h = t.get("noEndEdge");
						f.behaviourOn("anchor:dragstart", function(e) {
							if (2 !== e.button) {
								var a = e.shape,
									f = a.get("freezePoint");
								c = a.getItem(), n = t.get("addModel"), s = a.getIndex(), n.source = c.id, n.sourceAnchor = s, u = {
									x: f.x,
									y: f.y
								}, i = l.addShape("path", {
									attrs: function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												r(t, e, n[e])
											})
										}
										return t
									}({}, o.edgeDelegationStyle),
									capture: !1
								}), t.setSignal("dragEdge", !0), t.dragEdgeBeforeShowAnchor(c, s, "target")
							}
						}), f.behaviourOn("anchor:drag", function(t) {
							i && a.dragingEdgeEndPoint("target", n, f, i, u, t, c)
						}), f.behaviourOn("anchor:dragend", function(r) {
							function a() {
								f.add("edge", n)
							}
							if (i) {
								if (f.getNodes().forEach(function(e) {
										t.clearAnchor(e)
									}), t.clearAnchor(c), t.setActived(c, !1), t.setSelected(c, !1), t.css({
										cursor: o.cursor.beforePanCanvas
									}), i.remove(), r.shape) {
									if (r.shape.isAnchor && r.shape.hasHotspot) {
										var u = r.shape.getItem();
										n.target = u.id, n.targetAnchor = r.shape.getIndex();
										var s = t.editor;
										s ? s.executeCommand(a) : a()
									}
								} else if (h) {
									n.target = {
										x: r.x,
										y: r.y
									};
									var l = t.editor;
									l ? l.executeCommand(a) : a()
								}
								f.draw(), t.endAdd(), e()
							} else e()
						}), f.behaviourOn("canvas:mouseleave", function() {
							i ? (f.getNodes().forEach(function(e) {
								t.clearAnchor(e)
							}), t.setActived(c, !1), t.clearAnchor(c), i.remove(), t.cancelAdd(), f.draw(), e()) : e()
						})
					}, ["dragHoverAnchorHotspot", "hoverAnchorActived"])
				}, function(t, e, n) {
					n(7).registerBehaviour("dragHoverAnchorHotspot", function(t) {
						var e = t.getGraph();
						e.behaviourOn("anchor:dragenter", function(e) {
							if (t.getSignal("dragEdge")) {
								var n = e.shape;
								t.setHotspotActived(n, !0)
							}
						}), e.behaviourOn("anchor:dragleave", function(e) {
							if (t.getSignal("dragEdge")) {
								var n = e.shape;
								t.setHotspotActived(n, !1)
							}
						})
					})
				}, function(t, e, n) {
					var r = n(7),
						i = n(13),
						o = n(14);
					r.registerBehaviour("dragPanelItemAddNode", function(t) {
						function e() {
							t.setSignal("panningItem", !1), t.set("panItemDelegation", void 0), t.set("panItemStartBox", void 0), t.set("panItemStartPoint", void 0), r = void 0, a = void 0, u = void 0, c = void 0
						}
						var n, r, a, u, c, s = t.getGraph(),
							f = s.getRootGroup(),
							l = s.getCanvas().get("htmlElementContaniner");
						s.behaviourOn("canvas:mouseenter", function(e) {
							if (!r && (u = t.get("addType"), c = t.get("addModel"), "node" === u)) {
								var s = (a = i.getNodeSize(c, l))[0] / 2,
									h = a[1] / 2;
								n = {
									minX: e.x - s,
									minY: e.y - h,
									maxX: e.x + s,
									maxY: e.y + h,
									width: a[0],
									height: a[1]
								}, r = i.getRectByBox(n, f, o.nodeDelegationStyle), t.setSignal("panningItem", !0), t.set("panItemDelegation", r), t.set("panItemStartBox", n), t.set("panItemStartPoint", {
									x: e.x,
									y: e.y
								})
							}
						}), s.behaviourOn("mouseup", function(n) {
							function o() {
								t.clearSelected(), t.focusGraphWrapper(), s.add(f, i.cloneDeep(a)), t.setSelected(s.find(a.id), !0)
							}
							if (r) {
								var a = i.mix({}, c, {
										x: n.x,
										y: n.y
									}),
									f = u;
								i.setId(a);
								var l = t.editor;
								r.remove(), t.endAdd(), t.clearAlignLine(), l ? l.executeCommand(o) : o(), e()
							}
						}), s.behaviourOn("canvas:mouseleave", function() {
							r && (t.clearAlignLine(), r.remove(), s.draw(), t.cancelAdd(), e())
						})
					}, ["processPanItem"])
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(7),
						o = n(14),
						a = n(13);
					i.registerBehaviour("dragEdgeControlPoint", function(t) {
						function e(e) {
							function r() {
								g.update(b, a)
							}
							if (u) {
								var a;
								if (g.getNodes().forEach(function(e) {
										t.clearAnchor(e)
									}), t.css({
										cursor: o.cursor.beforePanCanvas
									}), u.remove(), e.shape) {
									if (e.shape.isAnchor) {
										var v = e.shape,
											y = v.getItem();
										n ? a = {
											target: y.id,
											targetAnchor: v.getIndex()
										} : i && (a = {
											source: y.id,
											sourceAnchor: v.getIndex()
										})
									}
								} else m && (n ? a = {
									target: {
										x: e.x,
										y: e.y
									}
								} : i && (a = {
									source: {
										x: e.x,
										y: e.y
									}
								})), g.show(d);
								g.show(d);
								var b = d.id;
								if (a) {
									var x = t.editor;
									x ? x.executeCommand(r) : r()
								}
								t.changeMode("default"), t.setSignal("dragEdge", !1), n = void 0, i = void 0, u = void 0, c = void 0, s = void 0, f = void 0, l = void 0, h = void 0, d = void 0, p = void 0
							}
						}
						var n, i, u, c, s, f, l, h, d, p, g = t.getGraph(),
							v = g.getRootGroup(),
							m = t.get("noEndEdge");
						g.behaviourOn("edgeControlPoint:dragstart", function(e) {
							if (2 !== e.button) {
								var a = e.shape;
								a.isTargetEndPoint() ? (d = a.getItem(), p = d.getModel(), n = a, c = a.getSourcePoint(), s = d.getSource(), l = p.sourceAnchor) : a.isSourceEndPoint() && (d = a.getItem(), p = d.getModel(), i = a, c = a.getTargetPoint(), f = d.getTarget(), h = p.targetAnchor), d && (u = v.addShape("path", {
									attrs: function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												r(t, e, n[e])
											})
										}
										return t
									}({
										path: "M0 0L 1 1"
									}, o.edgeDelegationStyle),
									capture: !1
								}), s ? t.dragEdgeBeforeShowAnchor(s, l, "target") : f && t.dragEdgeBeforeShowAnchor(f, h, "source"), g.hide(d), t.setSignal("dragEdge", !0))
							}
						}), g.behaviourOn("edgeControlPoint:drag", function(t) {
							u && a.dragingEdgeEndPoint(s ? "target" : "source", p, g, u, c, t, s, f)
						}), g.behaviourOn("edgeControlPoint:mouseleave", function(e) {
							n || i || (t.changeMode("default"), e.toShape || t.css({
								cursor: o.cursor.beforePanCanvas
							}))
						}), g.behaviourOn("edgeControlPoint:dragend", e), g.behaviourOn("canvas:mouseleave", e)
					}, ["dragHoverAnchorHotspot"])
				}, function(t, e, n) {
					var r = n(7),
						i = n(14);
					r.registerBehaviour("hoverEdgeControlPoint", function(t) {
						t.getGraph().behaviourOn("edgeControlPoint:mouseenter", function(e) {
							if (!t.getSignal("dragEdge") && !t.getSignal("panningItem")) {
								var n = e.shape;
								(n.isTargetEndPoint() || n.isSourceEndPoint()) && (t.css({
									cursor: i.cursor.hoverEdgeControllPoint
								}), t.changeMode("resize"))
							}
						})
					})
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(7),
						o = n(14);
					i.registerBehaviour("hoverAnchorActived", function(t) {
						var e = t.getGraph();
						e.behaviourOn("anchor:mouseenter", function(n) {
							if (!t.getSignal("panningItem") && !t.getSignal("dragEdge")) {
								var i = n.shape,
									a = i.getItem(),
									u = a.getModel(),
									c = function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												r(t, e, n[e])
											})
										}
										return t
									}({}, t.get("addEdgeModel"), {
										source: u.id
									}),
									s = {
										anchor: i.getPoint(),
										item: a
									};
								t.emit("hoveranchor:beforeaddedge", s), s.cancel ? t.css({
									cursor: o.cursor.hoverUnEffectiveAnchor
								}) : (t.css({
									cursor: o.cursor.hoverEffectiveAnchor
								}), !i.get("destroyed") && i.setActived(), t.beginAdd("edge", c), e.draw())
							}
						}), e.behaviourOn("anchor:mouseleave", function(n) {
							if (!t.getSignal("dragEdge") && !t.getSignal("panningItem")) {
								var r = n.shape,
									i = r.getItem();
								t.css({
									cursor: o.cursor.beforePanCanvas
								}), i.isSelected || (t.clearAnchor(i), t.setActived(i, !1)), !r.get("destroyed") && r.clearActived(), t.cancelAdd(), e.draw()
							}
						})
					})
				}, function(t, e, n) {
					var r = n(7),
						i = n(13);
					r.registerBehaviour("panItem", function(t) {
						var e = t.getGraph();
						e.behaviourOn("drop", function() {
							function n() {
								a.forEach(function(t) {
									var n = e.find(t),
										r = n.getModel();
									n.isGroup ? i.panGroup(n, f, l, e) : (e.update(n, {
										x: r.x + f,
										y: r.y + l
									}), e.toFront(n))
								}), 1 === a.length && (t.clearSelected(), t.setSelected(s, !0))
							}
							var r = t.get("panItems");
							if (r) {
								var o = r[0],
									a = r.map(function(t) {
										return t.id
									}),
									u = t.get("panItemDelegation"),
									c = t.get("panItemStartBox"),
									s = o.id,
									f = u.attr("x") - c.minX,
									l = u.attr("y") - c.minY;
								e.emit("afterpanitemdrop", {
									panItems: r
								}), t.clearAlignLine();
								var h = t.editor;
								e.emit("panitemend"), !h || t.getSignal("dragaddnodetogroup") ? n() : h.executeCommand(n)
							}
						})
					}, ["startPanItem", "processPanItem", "endPanItem"])
				}, function(t, e, n) {
					n(115), n(114), n(113), n(112), n(111), n(110), n(109), n(108), n(107), n(106), n(105)
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(13),
						o = {};
					o.AUGMENT = {
						addOutterShape: function(t, e) {
							this.clearOutterShape(t);
							var n = e.lineWidth,
								o = t.getKeyShape(),
								a = t.getGraphicGroup(),
								u = o.attr(),
								c = o.get("type"),
								s = o.attr("lineWidth"),
								f = i.cloneDeep(u);
							delete f.fillStyle, delete f.strokeStyle, delete f.matrix;
							var l = a.addShape(c, {
								attrs: function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({}, f, {
									fill: null
								}, e)
							});
							i.toBack(l, a);
							var h = l.getBBox(),
								d = h.maxX - h.minX,
								p = h.maxY - h.minY,
								g = (h.minX + h.maxX) / 2,
								v = (h.minY + h.maxY) / 2;
							l.transform([
								["t", -g, -v],
								["s", (n + d + s) / d, (n + p + s) / p],
								["t", g, v]
							]), l.isOutter = !0, t.outterShape = l
						},
						clearOutterShape: function(t) {
							t.outterShape && t.outterShape.remove()
						}
					}, t.exports = o
				}, function(t, e, n) {
					function r(t) {
						t.controlPointShapes && i.each(t.controlPointShapes, function(t) {
							t.remove()
						}), t.controlPointShapes = [], t.isControlPointShow = !1
					}
					var i = n(13),
						o = n(14),
						a = {};
					a.INIT = "_initResize", a.CFG = {
						nodeResizeable: !1,
						edgeResizeable: !0
					}, a.AUGMENT = {
						_initResize: function() {
							var t = this,
								e = this.get("_graph"),
								n = this.get("nodeResizeable"),
								o = this.get("edgeResizeable");
							n && e.on("afteritemdraw", function(e) {
								"node" === e.item.type && e.item.isVisible() && t.drawControlPoints(e.item)
							}), o && e.on("afteritemdraw", function(e) {
								"edge" === e.item.type && e.item.isVisible() && t.drawControlPoints(e.item)
							}), e.on("afteritemhide", function(t) {
								t.item.isControlPointShow && function(t) {
									t.controlPointShapes && i.each(t.controlPointShapes, function(t) {
										t.hide()
									}), t.isControlPointShow = !1
								}(t.item)
							}), e.on("afteritemshow", function(t) {
								!t.item.isControlPointShow && function(t) {
									t.controlPointShapes && i.each(t.controlPointShapes, function(t) {
										t.show()
									}), t.isControlPointShow = !0
								}(t.item)
							}), e.on("beforeitemdestroy", function(t) {
								t.item.isControlPointShow && r(t.item)
							})
						},
						drawControlPoints: function(t) {
							var e = this.get("_graph").getRootGroup(),
								n = this.get("nodeResizeable"),
								a = this.get("edgeResizeable");
							"node" === t.type ? n && function(t, e) {
								var n = t.getBBox(),
									a = [{
										x: n.minX,
										y: n.minY
									}, {
										x: n.maxX,
										y: n.minY
									}, {
										x: n.minX,
										y: n.maxY
									}, {
										x: n.maxX,
										y: n.maxY
									}];
								r(t);
								var u = e.addShape("rect", {
									attrs: i.mix({}, o.nodeSelectedBoxStyle, {
										symbol: "square",
										x: n.minX,
										y: n.minY,
										width: n.maxX - n.minX,
										height: n.maxY - n.minY
									})
								});
								t.controlPointShapes.push(u), i.each(a, function(n) {
									var r = e.addShape("marker", {
										attrs: i.mix({}, o.nodeControlPointStyle, {
											symbol: "square",
											x: n.x,
											y: n.y
										}),
										freezePoint: {
											x: n.x,
											y: n.y
										},
										item: t
									});
									t.controlPointShapes.push(r)
								})
							}(t, e) : "edge" === t.type && a && function(t, e) {
								var n = t.getPoints(),
									a = t.getModel();
								r(t), i.each(n, function(r, u) {
									var c = e.addShape("marker", {
										attrs: i.mix({}, o.edgeControlPointStyle, {
											x: r.x,
											y: r.y
										}),
										freezePoint: {
											x: r.x,
											y: r.y
										},
										item: t
									});
									c.eventPreFix = "edgeControlPoint", c.getSourcePoint = function() {
										return n[0]
									}, c.getTargetPoint = function() {
										return n[n.length - 1]
									}, c.getItem = function() {
										return t
									}, c.isSourceEndPoint = function() {
										return a.source && 0 === u
									}, c.isTargetEndPoint = function() {
										return a.target && u === n.length - 1
									}, t.controlPointShapes.push(c)
								})
							}(t, e), t.isControlPointShow = !0
						}
					}, t.exports = a
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), r.forEach(function(e) {
								a(t, e, n[e])
							})
						}
						return t
					}

					function a(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}

					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function c(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function s(t) {
						return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function f(t, e) {
						return (f = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var l = n(21),
						h = n(14),
						d = n(13),
						p = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), c(this, s(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && f(t, e)
								}(e, l),
								function(t, e, n) {
									e && u(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											_anchorItemCache: {}
										}
									}
								}, {
									key: "init",
									value: function() {
										var t = this,
											e = this.graph;
										e.on("afteritemdraw", function(e) {
											e.item.isAnchorShow && t.showAnchor(e.item)
										}), e.on("beforeitemdestroy", function(e) {
											t._clearAnchor(e.item)
										}), e.on("afteritemhide", function(e) {
											e.item.isNode && t._clearAnchor(e.item)
										})
									}
								}, {
									key: "_updateAnchor",
									value: function(t) {
										var e = this.graph;
										t.anchorShapes.forEach(function(t) {
											t.updatePosition()
										}), e.draw()
									}
								}, {
									key: "_drawAnchor",
									value: function(t, e, n, r) {
										var o = t.getAnchorPoints();
										this._clearAnchor(t), d.each(o, function(o, a) {
											if (!n || -1 !== n.indexOf(a)) {
												var u, c = e.addShape("marker", {
													attrs: i({
														symbol: "circle"
													}, h.anchorPointStyle, {
														x: o.x,
														y: o.y
													}),
													freezePoint: o,
													item: t,
													index: a,
													eventPreFix: "anchor",
													isItemChange: function() {},
													zIndex: h.zIndex.anchorPoint
												});
												c.toFront(), c.eventPreFix = "anchor", c.showHotspot = function() {
													u = e.addShape("marker", {
														attrs: i({
															symbol: "circle"
														}, h.anchorHotsoptStyle, {
															x: o.x,
															y: o.y
														}),
														freezePoint: o,
														capture: !1,
														zIndex: h.zIndex.anchorHotsopt
													}), t.anchorShapes.push(u), c.hasHotspot = !0, u.toFront(), c.toFront()
												}, c.getIndex = function() {
													return a
												}, c.getItem = function() {
													return t
												}, c.getPoint = function() {
													return o
												}, c.updatePosition = function() {
													var e = t.getAnchorPoints()[a];
													c.attr(e)
												}, c.setActived = function() {
													c.attr(h.anchorPointHoverStyle)
												}, c.clearActived = function() {
													c.attr(h.anchorPointStyle)
												}, c.isAnchor = !0, c.setHotspotActived = function(t) {
													u && (t ? u.attr(h.anchorHotsoptActivedStyle) : u.attr(h.anchorHotsoptStyle))
												}, r && c.showHotspot(), t.anchorShapes.push(c), t.getAllAnchors = function() {
													return t.anchorShapes.filter(function(t) {
														return t.isAnchor
													})
												}, t.getAnchor = function(e) {
													return t.anchorShapes.find(function(t) {
														return t.get("index") === e
													})
												}
											}
										})
									}
								}, {
									key: "_clearAnchor",
									value: function(t) {
										t.anchorShapes && t.anchorShapes.forEach(function(t) {
											t.remove()
										}), t.anchorShapes = []
									}
								}, {
									key: "setHotspotActived",
									value: function(t, e) {
										var n = this.diagram.getGraph();
										t.setHotspotActived(e), n.draw()
									}
								}, {
									key: "showAnchor",
									value: function(t, e, n) {
										if (t.isVisible()) {
											var r = this.graph,
												i = this._anchorItemCache,
												o = r.getRootGroup();
											this._drawAnchor(t, o, e, n), t.isAnchorShow = !0, i[t.id] = t
										}
									}
								}, {
									key: "clearAnchor",
									value: function(t) {
										var e = this,
											n = this.graph,
											r = n.get("itemCache"),
											i = this._anchorItemCache,
											o = t;
										o = d.isObject(t) ? [t] : d.isString(t) ? [r[t]] : i, d.each(o, function(t) {
											e._clearAnchor(t), t.isAnchorShow = !1, delete i[t.id]
										}), n.draw()
									}
								}]), e
						}();
					t.exports = p
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(119),
						o = n(13),
						a = {
							CFG: {
								anchor: {}
							},
							INIT: "_initAnchor"
						};
					a.AUGMENT = {
						_initAnchor: function() {
							var t = this.get("anchor"),
								e = this.get("_graph");
							if (t) {
								var n = new i(function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({
									diagram: this,
									graph: e
								}, t));
								this.setController("anchor", n)
							}
						},
						showAnchor: function(t, e, n) {
							this.getController("anchor").showAnchor(t, e, n)
						},
						clearAnchor: function(t) {
							this.getController("anchor").clearAnchor(t)
						},
						setHotspotActived: function(t, e) {
							this.getController("anchor").setHotspotActived(t, e)
						},
						hoverShowAnchor: function(t) {
							var e = this,
								n = [];
							t.getAnchorPoints().forEach(function(r, i) {
								var o = {
									anchor: r,
									item: t
								};
								e.emit("hovernode:beforeshowanchor", o), o.cancel || n.push(i)
							}), this.showAnchor(t, n)
						},
						anchorHasBeenLinked: function(t, e) {
							var n = [];
							return t.getEdges().forEach(function(e) {
								var r = e.getModel();
								r.source !== t.id || o.isNil(r.sourceAnchor) || n.push(r.sourceAnchor), r.target !== t.id || o.isNil(r.targetAnchor) || n.push(r.targetAnchor)
							}), o.isObject(e) ? -1 !== n.indexOf(e.index) : -1 !== n.indexOf(e)
						},
						dragEdgeBeforeShowAnchor: function(t, e, n) {
							var r = this;
							this.getGraph().getNodes().forEach(function(i) {
								var o, a = [],
									u = i.getAnchorPoints();
								if (t.isNode) {
									var c = t.getAnchorPoints();
									u.forEach(function(u, s) {
										o = "target" === n ? {
											source: t,
											sourceAnchor: c[e],
											target: i,
											targetAnchor: u,
											dragEndPointType: n
										} : {
											target: t,
											targetAnchor: c[e],
											source: i,
											sourceAnchor: u,
											dragEndPointType: n
										}, r.emit("dragedge:beforeshowanchor", o), o.cancel || a.push(s)
									})
								} else u.forEach(function(t, e) {
									a.push(e)
								});
								i === t && i.isAnchorShow ? a.forEach(function(t) {
									var n = i.getAnchor(t);
									e !== t && n && n.showHotspot()
								}) : r.showAnchor(i, a, !0)
							})
						}
					}, t.exports = a
				}, function(t, e, n) {
					var r = {},
						i = n(13);
					r.AUGMENT = {
						changeAddEdgeModel: function(t) {
							this.set("addEdgeModel", t)
						},
						cancelAdd: function() {
							this.set("addType", void 0), this.set("addModel", void 0), this.changeMode("default")
						},
						beginAdd: function(t, e) {
							this.set("addType", t), this.set("addModel", e), this.changeMode("add")
						},
						endAdd: function() {
							this.set("addType", void 0), this.set("addModel", void 0), this.changeMode("default")
						},
						delete: function() {
							var t = this.getSelected(),
								e = this.get("_graph");
							i.each(t, function(t) {
								e.remove(t)
							})
						},
						toBack: function() {
							var t = this.getSelected(),
								e = this.get("_graph");
							t.sort(function(t, e) {
								var n = t.getGraphicGroup(),
									r = e.getGraphicGroup();
								return i.getIndex(r) - i.getIndex(n)
							}), t.forEach(function(t) {
								e.toBack(t)
							})
						},
						toFront: function() {
							var t = this.getSelected(),
								e = this.get("_graph");
							t.sort(function(t, e) {
								var n = t.getGraphicGroup(),
									r = e.getGraphicGroup();
								return i.getIndex(n) - i.getIndex(r)
							}), t.forEach(function(t) {
								e.toFront(t)
							})
						},
						addGroup: function(t) {
							var e, n = this.get("_graph"),
								r = this.getSelected(),
								o = !0;
							if (0 !== r.length) {
								t || (t = {
									label: "新建分组"
								}), i.setId(t), n.add("group", t), n.toFront(t.id);
								var a = n.find(t.id);
								if (r.forEach(function(t) {
										var n = t.getParent();
										n && (e ? e !== n && (o = !1) : e = n)
									}), o) {
									e && (t.parent = e.getModel().id), r.forEach(function(e) {
										n.update(e, {
											parent: t.id
										})
									});
									var u = a.getInnerEdges();
									a.deepEach(function(t) {
										n.toFront(t)
									}), u.forEach(function(t) {
										n.toFront(t)
									})
								} else console.warn("add group elements must have the same parent")
							}
						},
						unGroup: function() {
							var t = this.get("_graph"),
								e = this.getSelected(),
								n = e[0];
							1 === e.length && i.isGroup(n) && (n.getChildren().forEach(function(e) {
								t.update(e, {
									parent: void 0
								})
							}), t.remove(n))
						},
						newGroup: function(t) {
							this.addGroup(t)
						}
					}, t.exports = r
				}, function(t, e) {
					t.exports = {
						rectRectCrossAlgorithm: function(t, e) {
							var n = Math.max(t.minX, e.minX),
								r = Math.max(t.minY, e.minY),
								i = Math.min(t.maxX, e.maxX),
								o = Math.min(t.maxY, e.maxY);
							return n > i || r > o
						}
					}
				}, function(t, e, n) {
					var r = n(52);
					t.exports = {
						dragingEdgeEndPoint: function(t, e, n, r, i, o, a, u) {
							var c = n.getShapeObj("edge", e),
								s = "source" === t ? [o, i] : [i, o],
								f = c.getPathByPoints(s, a, u);
							r.attr("path", f), n.draw()
						},
						panGroup: function(t, e, n, i) {
							var o = t.getModel();
							r.traverseTree(t, function(t) {
								if ("node" === t.type) {
									var r = t.getModel();
									i.update(t, {
										x: r.x + e,
										y: r.y + n
									})
								}
							}, function(t) {
								return "group" === t.type ? t.getChildren() : []
							}), i.update(t, {
								x: o.x + e,
								y: o.y + n
							})
						}
					}
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t, e, n) {
						return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
							var r = function(t, e) {
								for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
								return t
							}(t, e);
							if (r) {
								var i = Object.getOwnPropertyDescriptor(r, e);
								return i.get ? i.get.call(n) : i.value
							}
						})(t, e, n || t)
					}

					function c(t) {
						return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function s(t, e) {
						return (s = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var f = n(16),
						l = n(7),
						h = n(13),
						d = n(121),
						p = n(120),
						g = n(118),
						v = [d, n(117), g, p],
						m = function(t) {
							function e(t) {
								var n;
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = {
										graph: {
											minZoom: .2,
											maxZoom: 2
										},
										graphConstructor: f.Graph,
										noEndEdge: !0
									},
									i = {};
								return h.each(v, function(t) {
									h.mix(i, t.CFG)
								}), h.mix(!0, r, i, t), (n = a(this, c(e).call(this, r))).isFlow = !0, n
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && s(t, e)
								}(e, l),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "_init",
									value: function() {
										var t = this;
										u(c(e.prototype), "_init", this).call(this), h.each(v, function(e) {
											e.INIT && t[e.INIT]()
										})
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this;
										u(c(e.prototype), "bindEvent", this).call(this), this.on("beforeitemactived", function(e) {
											var n = e.item,
												r = t.get("_graph").getShapeObj(n).getActivedOutterStyle(n);
											n.isNode && t.addOutterShape(n, r)
										}), this.on("beforeitemunactived", function(e) {
											var n = e.item;
											(n.isNode || n.isGroup) && t.clearOutterShape(n)
										}), this.on("beforeitemselected", function(e) {
											var n = e.item,
												r = t.get("_graph").getShapeObj(n).getSelectedOutterStyle(n);
											n.isNode ? t.addOutterShape(n, r) : n.isGroup && t.addOutterShape(n, r)
										}), this.on("beforeitemunselected", function(e) {
											var n = e.item;
											(n.isNode || n.isGroup) && t.clearOutterShape(n)
										})
									}
								}]), e
						}();
					h.each(v, function(t) {
						h.mix(m.prototype, t.AUGMENT)
					}), t.exports = m
				}, function(t, e, n) {
					var r = n(124),
						i = n(7),
						o = n(14);
					r.Util = n(13), r.Global = o, i.setRegister(r, "diagram"), n(116), t.exports = r
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t, e, n) {
						return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
							var r = function(t, e) {
								for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)););
								return t
							}(t, e);
							if (r) {
								var i = Object.getOwnPropertyDescriptor(r, e);
								return i.get ? i.get.call(n) : i.value
							}
						})(t, e, n || t)
					}

					function c(t) {
						return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function s(t, e) {
						return (s = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var f = n(16),
						l = n(125),
						h = n(20),
						d = n(25),
						p = function(t) {
							function e(t) {
								var n;
								! function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e);
								var r = {
									shortcut: {
										copy: !0,
										paste: !0,
										selectAll: !0,
										addGroup: !0,
										unGroup: !0
									},
									graph: {
										modes: {
											default: ["panBlank", "hoverGroupActived", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "clickGroupSelected", "hoverNodeActived", "hoverEdgeActived", "hoverAnchorActived", "hoverButton", "clickCollapsedButton", "clickExpandedButton", "wheelChangeViewport", "keydownShiftMultiSelected", "dragNodeAddToGroup", "dragOutFromGroup", "panItem", "hoverEdgeControlPoint"],
											add: ["dragPanelItemAddNode", "dragAnchorAddEdge"],
											resize: ["dragEdgeControlPoint", "hoverEdgeControlPoint"],
											readOnly: ["panCanvas"],
											move: ["panCanvas"],
											multiSelect: ["dragMultiSelect"]
										},
										mode: "default",
										defaultIntersectBox: "rect",
										nodeDefaultShape: d.nodeDefaultShape,
										edgeDefaultShape: d.edgeDefaultShape,
										groupDefaultShape: d.groupDefaultShape
									},
									graphConstructor: f.Graph,
									noEndEdge: !0
								};
								return h.mix(!0, r, {}, t), (n = a(this, c(e).call(this, r))).isFlow = !0, n
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && s(t, e)
								}(e, l),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "_init",
									value: function() {
										u(c(e.prototype), "_init", this).call(this)
									}
								}, {
									key: "bindEvent",
									value: function() {
										var t = this;
										u(c(e.prototype), "bindEvent", this).call(this), this.on("beforeitemactived", function(e) {
											var n = e.item;
											n.isNode && t.hoverShowAnchor(n)
										}), this.on("beforeitemunactived", function(e) {
											var n = e.item;
											(n.isNode || n.isGroup) && (t.clearOutterShape(n), t.clearAnchor(n))
										}), this.on("beforeitemselected", function(e) {
											var n = e.item;
											n.isNode ? t.hoverShowAnchor(n) : n.isGroup && t.hoverShowAnchor(n)
										}), this.on("beforeitemunselected", function(e) {
											var n = e.item;
											(n.isNode || n.isGroup) && t.clearAnchor(n)
										})
									}
								}]), e
						}();
					t.exports = p
				}, function(t, e, n) {
					var r = n(126),
						i = n(7),
						o = n(25);
					r.Util = n(20), r.Global = o, i.setRegister(r, "flow"), n(104), t.exports = r
				}, function(t, e, n) {
					n(11).registerBehaviour("keydownCmdWheelZoom", function(t) {
						var e = t.getGraph();
						e.behaviourOn("keydown", function(e) {
							91 === e.domEvent.keyCode && t.setSignal("wheelZoom", !0)
						}), e.behaviourOn("keyup", function(e) {
							91 === e.domEvent.keyCode && t.setSignal("wheelZoom", !1)
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("hoverEdgeActived", function(t) {
						var e = t.getGraph();
						e.behaviourOn("edge:mouseenter", function(e) {
							t.getSignal("panningItem") || e.item && e.item.isSelected || t.setActived(e.item, !0)
						}), e.behaviourOn("edge:mouseleave", function(e) {
							t.setActived(e.item, !1)
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("hoverGroupActived", function(t) {
						var e = t.getGraph();
						e.behaviourOn("mouseenter", function(e) {
							t.getSignal("panningItem") || e.item && e.item.isSelected || e.shape && e.shape.isGroupKeyShape && (t.css({
								cursor: "move"
							}), t.setActived(e.item, !0))
						}), e.behaviourOn("group:mouseleave", function(e) {
							e.item.isActived && !e.item.isSelected && t.setActived(e.item, !1)
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("hoverNodeActived", function(t) {
						var e, n = t.getGraph();
						n.behaviourOn("node:mouseenter", function(n) {
							!1 !== n.item.getShapeObj().panAble && t.css({
								cursor: "move"
							}), t.getSignal("panningItem") || n.item && n.item.isSelected || (e = n.item, t.setActived(e, !0))
						}), n.behaviourOn("node:mouseleave", function(n) {
							var r = n.toShape;
							e && (r && r.isAnchor && r.getItem() === e || (e.isSelected || t.setActived(e, !1), e = void 0))
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickNodeSelected", function(t) {
						t.getGraph().behaviourOn("node:click", function(e) {
							t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(), t.clearSelected(), t.setSelected(e.item.id, !0))
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickGroupSelected", function(t) {
						t.getGraph().behaviourOn("group:click", function(e) {
							t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(), t.clearSelected(), t.setSelected(e.item.id, !0))
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickExpandedButton", function(t) {
						var e = t.getGraph();
						e.behaviourOn("click", function(n) {
							var r = n.item,
								i = n.shape;
							if (r && i && i.isExpandedButton) {
								var o = t.editor;
								o ? o.executeCommand("collapseExpand", {
									itemId: r.id
								}) : e.update(r, {
									collapsed: !1
								})
							}
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickEdgeSelected", function(t) {
						t.getGraph().behaviourOn("edge:click", function(e) {
							t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(), t.clearSelected(), t.setSelected(e.item.id, !0))
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickCollapsedButton", function(t) {
						var e = t.getGraph();
						e.behaviourOn("click", function(n) {
							var r = n.item,
								i = n.shape;
							if (r && i && i.isCollapsedButton) {
								var o = t.editor;
								o ? o.executeCommand("collapseExpand", {
									itemId: r.id
								}) : e.update(r, {
									collapsed: !0
								})
							}
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("clickCanvasSelected", function(t) {
						var e = t.getGraph();
						e.behaviourOn("click", function(e) {
							e.shape || (t.clearSelected(), t.clearActived(), t.updateStatus())
						}), e.behaviourOn("contextmenu", function(e) {
							e.shape || (t.clearSelected(), t.clearActived(), t.updateStatus())
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("dblclickItemEditLabel", function(t) {
						t.getGraph().behaviourOn("node:dblclick", function(e) {
							e.shape && !e.shape.isButton && t.beginEditLabel(e.item)
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("endPanItem", function(t) {
						var e = t.getGraph();
						e.behaviourOn("panitemend", function() {
							var n = t.get("panItemDelegation");
							n && (n.remove(), e.draw()), t.setSignal("panningItem", !1), t.set("panItemDelegation", void 0), t.set("panItemStartPoint", void 0), t.set("panItemStartBox", void 0), t.set("panItems", void 0)
						}), e.behaviourOn("canvas:mouseleave", function() {
							t.get("panItems") && (t.clearAlignLine(), e.emit("panitemend"))
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("startPanItem", function(t) {
						var e = t.getGraph(),
							n = e.getRootGroup();
						e.behaviourOn("dragstart", function(r) {
							if (2 !== r.button && r.item && (r.item.isNode || r.item.isGroup)) {
								var i, o = r.item;
								if ((i = (i = o.isSelected ? t.getSelected() : [o]).filter(function(t) {
										return t.isNode || t.isGroup
									}))[0] && !1 !== i[0].dragable) {
									e.emit("beforeshowdelegation", {
										items: i
									});
									var a = t.getDelegation(i, n),
										u = a.getBBox();
									t.setSignal("panningItem", !0), t.set("panItems", i), t.set("panItemDelegation", a), t.set("panItemStartBox", u), t.set("panItemStartPoint", {
										x: r.x,
										y: r.y
									}), e.draw()
								}
							}
						})
					})
				}, function(t, e, n) {
					n(11).registerBehaviour("processPanItem", function(t) {
						var e = t.getGraph();
						e.behaviourOn("mousemove", function(n) {
							var r = t.get("panItemDelegation");
							if (r) {
								var i = t.get("panItemStartPoint"),
									o = t.get("panItemStartBox"),
									a = n.x - i.x,
									u = n.y - i.y,
									c = t.align({
										x: o.minX + a,
										y: o.minY + u
									}, {
										width: o.width,
										height: o.height
									});
								r.attr({
									x: c.x,
									y: c.y
								}), e.emit("itempanning", n), e.draw()
							}
						})
					})
				}, function(t, e, n) {
					var r = n(11),
						i = n(30),
						o = n(12);
					r.registerBehaviour("wheelChangeViewport", function(t) {
						var e, n = t.getGraph();
						n.behaviourOn("mousewheel", function(t) {
							t.domEvent.preventDefault()
						}), n.behaviourOn("mousewheel", o.throttle(function(r) {
							if (!t.getSignal("preventWheelPan")) {
								var a = r.domEvent,
									u = t.getSignal("wheelZoom");
								if (e || t.setCapture(!1), u) {
									var c = a.wheelDelta;
									if (Math.abs(c) > 10) {
										var s = n.getMatrix()[0];
										c > 0 ? n.zoom({
											x: r.x,
											y: r.y
										}, 1.05 * s) : n.zoom({
											x: r.x,
											y: r.y
										}, s * (1 / 1.05))
									}
								} else {
									var f = [],
										l = n.getMatrix();
									o.mat3.translate(f, l, [a.wheelDeltaX * i.wheelPanRatio, a.wheelDeltaY * i.wheelPanRatio]), t.translateLimt(f) && n.updateMatrix(f)
								}
								e && clearTimeout(e), e = setTimeout(function() {
									t.setCapture(!0), e = void 0
								}, 50)
							}
						}, 16))
					})
				}, function(t, e, n) {
					var r = n(11),
						i = n(12);
					r.registerBehaviour("panCanvas", i.getPanCanvasBehaviour())
				}, function(t, e, n) {
					n(11).registerBehaviour("hoverButton", function(t) {
						t.getGraph().behaviourOn("mouseenter", function(e) {
							t.getSignal("panningItem") || e.shape && e.shape.isButton && t.css({
								cursor: "pointer"
							})
						})
					})
				}, function(t, e, n) {
					var r = n(11),
						i = n(12);
					r.registerBehaviour("panBlank", i.getPanCanvasBehaviour(!0))
				}, function(t, e, n) {
					n(145), n(144), n(143), n(142), n(141), n(140), n(139), n(138), n(137), n(136), n(135), n(134), n(133), n(132), n(131), n(130), n(129), n(128)
				}, function(t, e) {
					var n = {
						AUGMENT: {
							updateStatus: function() {
								var t, e = this.getSelected();
								0 === e.length ? t = "canvas-selected" : 1 === e.length ? e[0].isNode ? t = "node-selected" : e[0].isEdge ? t = "edge-selected" : e[0].isGroup && (t = "group-selected") : t = "multi-selected", this.emit("statuschange", {
									status: t
								})
							}
						}
					};
					t.exports = n
				}, function(t, e, n) {
					var r = n(12),
						i = {
							CFG: {
								labelEditable: !1
							},
							INIT: "_initLabelEditor"
						};
					i.AUGMENT = {
						_initLabelEditor: function() {
							var t = this;
							if (this.get("labelEditable")) {
								var e = this.getGraph(),
									n = r.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>', {
										position: "absolute",
										visibility: "hidden",
										"z-index": "2",
										padding: "0px 2px 0px 0px",
										resize: "none",
										width: "auto",
										height: "auto",
										outline: "none",
										border: "1px solid #1890FF",
										"transform-origin": "left top",
										"max-width": "320px",
										background: "white",
										"box-sizing": "content-box"
									});
								e.getGraphContainer().appendChild(n), n.on("blur", function(n) {
									n.stopPropagation(), !e.destroyed && t.endEditLabel()
								}), n.on("keydown", function(e) {
									e.stopPropagation();
									var n = r.getKeyboradKey(e);
									(e.metaKey && "s" === n || e.ctrlKey && "s" === n) && e.preventDefault(), "Enter" !== n && "Escape" !== n || t.endEditLabel()
								}), this.set("labelTextArea", n), e.on("beforeviewportchange", function() {
									n.focusItem && t.setLabelEditorBeginPosition(n.focusItem)
								})
							}
						},
						_getLabelTextAreaBox: function(t, e) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
							e && t.attr("text", e);
							var i = this.getGraph().getRootGroup(),
								o = r.getBBox(t, i);
							return {
								minX: o.minX - n[1],
								minY: o.minY - n[0],
								maxX: o.maxX + n[1],
								maxY: o.maxY + n[0]
							}
						},
						setLabelEditorBeginPosition: function(t) {
							var e = this.get("labelTextArea"),
								n = t.getLabel();
							if (n) {
								var i = this._getLabelTextAreaBox(n),
									o = n.attr("lineHeight"),
									a = n.attr("fontSize"),
									u = {
										x: i.minX,
										y: i.minY - o / 4 + a / 4 - 1,
										width: i.maxX - i.minX,
										height: i.maxY - i.minY
									};
								e.css({
									top: u.y + "px",
									left: u.x + "px"
								}), e.labelPoint = u
							} else {
								var c = this.getGraph().getRootGroup(),
									s = t.getKeyShape(),
									f = r.getBBox(s, c),
									l = {
										x: f.minY + (f.maxY - f.minY - e.height()) / 2,
										y: (f.minX + f.maxX) / 2
									};
								e.css({
									top: l.x + "px",
									left: l.y + "px"
								}), e.labelPoint = l
							}
						},
						beginEditLabel: function(t) {
							var e = this.get("labelTextArea"),
								n = this.getGraph();
							if (r.isString(t) && (t = n.find(t)), t && !t.destroyed && e) {
								this.setSignal("preventWheelPan", !0);
								var i = t.getModel(),
									o = t.getLabel(),
									a = n.getZoom();
								if (e.focusItem = t, o) {
									var u = o.attr("lineHeight"),
										c = this._getLabelTextAreaBox(o),
										s = (c.maxX - c.minX) / a,
										f = (c.maxY - c.minY + u / 4) / a;
									e.innerHTML = i.label, e.innerHTML = i.label, e.css({
										"min-width": s + "px",
										"min-height": f + "px",
										visibility: "visible",
										"font-family": o.attr("fontFamily"),
										"line-height": u + "px",
										"font-size": o.attr("fontSize") + "px",
										transform: "scale(" + a + ")"
									})
								} else e.innerHTML = "", e.css({
									"min-width": "auto",
									"min-height": "auto"
								});
								this.setLabelEditorBeginPosition(t), e.css({
									visibility: "visible"
								}), e.focus(), document.execCommand("selectAll", !1, null)
							}
						},
						endEditLabel: function() {
							var t = this.get("labelTextArea");
							if (this.setSignal("preventWheelPan", !1), t) {
								var e = t.focusItem;
								e && (e.getModel().label !== t.textContent && this.executeCommand("update", {
									action: "updateLabel",
									itemId: e.id,
									updateModel: {
										label: t.textContent
									}
								}), t.hide(), t.focusItem = void 0, this.focusGraphWrapper())
							}
						}
					}, t.exports = i
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}

					function s(t, e) {
						return {
							line: t,
							point: e,
							dis: h.pointLineDistance(t[0], t[1], t[2], t[3], e.x, e.y)
						}
					}
					var f = n(21),
						l = n(30),
						h = n(12),
						d = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, f),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											line: l.alignLineStyle,
											item: !0,
											grid: !1,
											tolerance: 5,
											_horizontalLines: {},
											_verticalLines: {},
											_alignLines: []
										}
									}
								}, {
									key: "init",
									value: function() {
										this.item && this._cacheBoxLine()
									}
								}, {
									key: "_cacheBoxLine",
									value: function() {
										var t = this.graph,
											e = this._horizontalLines,
											n = this._verticalLines,
											r = this.item;
										t.on("afteritemdraw", function(t) {
											var i = t.item;
											if (!h.isEdge(i)) {
												var o = i.getBBox();
												!0 === r || "horizontal" === r ? (e[i.id + "tltr"] = [o.minX, o.minY, o.maxX, o.minY, i], e[i.id + "lcrc"] = [o.minX, o.centerY, o.maxX, o.centerY, i], e[i.id + "blbr"] = [o.minX, o.maxY, o.maxX, o.maxY, i]) : "center" === r && (e[i.id + "lcrc"] = [o.minX, o.centerY, o.maxX, o.centerY, i]), !0 === r || "vertical" === r ? (n[i.id + "tlbl"] = [o.minX, o.minY, o.minX, o.maxY, i], n[i.id + "tcbc"] = [o.centerX, o.minY, o.centerX, o.maxY, i], n[i.id + "trbr"] = [o.maxX, o.minY, o.maxX, o.maxY, i]) : "center" === r && (n[i.id + "tcbc"] = [o.centerX, o.minY, o.centerX, o.maxY, i])
											}
										}), t.on("beforeitemdestroy", function(t) {
											var r = t.item;
											delete e[r.id + "tltr"], delete e[r.id + "lcrc"], delete e[r.id + "blbr"], delete n[r.id + "tlbl"], delete n[r.id + "tcbc"], delete n[r.id + "trbr"]
										})
									}
								}, {
									key: "align",
									value: function(t, e) {
										var n = h.mix({}, t),
											r = this.flow.getController("grid");
										return this.grid && r && r.visible && this._gridAlign(t, e), this.item && this._itemAlign(t, e, n), t
									}
								}, {
									key: "_gridAlign",
									value: function(t, e) {
										var n = this.flow,
											r = this.grid,
											i = n.getGridCell();
										if ("cc" === r) {
											var o = Math.round((t.x + e.width / 2) / i) * i,
												a = Math.round((t.y + e.height / 2) / i) * i;
											t.x = o - e.width / 2, t.y = a - e.height / 2
										} else t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i
									}
								}, {
									key: "_itemAlign",
									value: function(t, e, n) {
										var r = this._horizontalLines,
											i = this._verticalLines,
											o = this.tolerance,
											a = {
												x: n.x + e.width / 2,
												y: n.y
											},
											u = {
												x: n.x + e.width / 2,
												y: n.y + e.height / 2
											},
											c = {
												x: n.x + e.width / 2,
												y: n.y + e.height
											},
											f = {
												x: n.x,
												y: n.y + e.height / 2
											},
											l = {
												x: n.x + e.width,
												y: n.y + e.height / 2
											},
											d = [],
											p = [],
											g = null;
										if (this.clearAlignLine(), h.each(r, function(t) {
												t[4].isVisible() && (d.push(s(t, a)), d.push(s(t, u)), d.push(s(t, c)))
											}), h.each(i, function(t) {
												t[4].isVisible() && (p.push(s(t, f)), p.push(s(t, u)), p.push(s(t, l)))
											}), d.sort(function(t, e) {
												return t.dis - e.dis
											}), p.sort(function(t, e) {
												return t.dis - e.dis
											}), 0 !== d.length && d[0].dis < o) {
											t.y = d[0].line[1] - d[0].point.y + n.y, g = {
												type: "item",
												horizontals: [d[0]]
											};
											for (var v = 1; v < 3; v++) d[0].dis === d[v].dis && g.horizontals.push(d[v])
										}
										if (0 !== p.length && p[0].dis < o) {
											t.x = p[0].line[0] - p[0].point.x + n.x, g ? g.verticals = [p[0]] : g = {
												type: "item",
												verticals: [p[0]]
											};
											for (var m = 1; m < 3; m++) p[0].dis === p[m].dis && g.verticals.push(p[m])
										}
										g && (g.bbox = e, this._addAlignLine(g))
									}
								}, {
									key: "clearAlignLine",
									value: function() {
										var t = this._alignLines;
										h.each(t, function(t) {
											t.remove()
										}), this._alignLines = []
									}
								}, {
									key: "_addAlignLine",
									value: function(t) {
										var e = t.bbox,
											n = this.graph.getRootGroup(),
											r = this.line,
											i = this._alignLines;
										"item" === t.type && (t.horizontals && h.each(t.horizontals, function(t) {
											var o, a, u = t.line,
												c = t.point,
												s = (u[0] + u[2]) / 2;
											c.x < s ? (o = c.x - e.width / 2, a = Math.max(u[0], u[2])) : (o = c.x + e.width / 2, a = Math.min(u[0], u[2]));
											var f = n.addShape("line", {
												attrs: h.mix({
													x1: o,
													y1: u[1],
													x2: a,
													y2: u[1]
												}, r),
												capture: !1
											});
											i.push(f)
										}), t.verticals && h.each(t.verticals, function(t) {
											var o, a, u = t.line,
												c = t.point,
												s = (u[1] + u[3]) / 2;
											c.y < s ? (o = c.y - e.height / 2, a = Math.max(u[1], u[3])) : (o = c.y + e.height / 2, a = Math.min(u[1], u[3]));
											var f = n.addShape("line", {
												attrs: h.mix({
													x1: u[0],
													y1: o,
													x2: u[0],
													y2: a
												}, r),
												capture: !1
											});
											i.push(f)
										}))
									}
								}]), e
						}();
					t.exports = d
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(149),
						o = {
							CFG: {
								align: {}
							},
							INIT: "_initAlign"
						};
					o.AUGMENT = {
						_initAlign: function() {
							var t = this.get("align"),
								e = this.get("_graph"),
								n = new i(function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({
									flow: this,
									graph: e
								}, t));
							this.setController("align", n)
						},
						align: function(t, e, n) {
							return this.getController("align").align(t, e, n)
						},
						clearAlignLine: function() {
							return this.getController("align").clearAlignLine()
						}
					}, t.exports = o
				}, function(t, e, n) {
					var r = n(12),
						i = {
							CFG: {
								activeable: !0,
								_activedCache: {}
							},
							INIT: "_initActived"
						};
					i.AUGMENT = {
						_initActived: function() {
							var t = this,
								e = this.get("_graph");
							e.on("afteritemdraw", function(e) {
								var n = e.item;
								n.isActived && t.setItemActived(n)
							}), e.on("beforeitemdestroy", function(e) {
								t.clearItemActived(e.item)
							})
						},
						setItemActived: function(t) {
							var e = this.get("_graph").getShapeObj(t),
								n = this.get("_activedCache"),
								r = e.getActivedStyle(t),
								i = t.getKeyShape();
							n[t.id] = t, r && i.attr(r), t.isEdge && (t.startArrow && t.startArrow.attr({
								fill: r.stroke
							}), t.endArrow && t.endArrow.attr({
								fill: r.stroke
							}))
						},
						clearItemActived: function(t) {
							var e = this.get("_graph"),
								n = t.getKeyShape(),
								i = e.getShapeObj(t),
								o = i.getStyle(t),
								a = this.get("_activedCache"),
								u = i.getActivedStyle(t),
								c = r.getContrast(o, u);
							n.attr(c), t.isEdge && (t.startArrow && t.startArrow.attr({
								fill: c.stroke
							}), t.endArrow && t.endArrow.attr({
								fill: c.stroke
							})), delete a[t.id]
						},
						setActived: function(t, e) {
							var n, i = this,
								o = this.get("activeable"),
								a = this.get("_graph");
							o && (n = r.isArray(t) ? t : [t], r.each(n, function(t) {
								r.isString(t) && (t = a.find(t)), t && !t.destroyed && (e ? (i.emit("beforeitemactived", {
									item: t
								}), i.setItemActived(t), i.emit("afteritemactived", {
									item: t
								})) : (i.emit("beforeitemunactived", {
									item: t
								}), i.clearItemActived(t), i.emit("afteritemunactived", {
									item: t
								})), t.isActived = e)
							}), a.draw())
						},
						getActived: function() {
							var t = this.get("_activedCache");
							return r.objectToValues(t)
						},
						clearActived: function() {
							var t = this,
								e = this.get("_graph"),
								n = this.get("_activedCache");
							r.each(n, function(e) {
								e.isActived && t.setActived(e, !1)
							}), e.draw()
						}
					}, t.exports = i
				}, function(t, e, n) {
					var r = n(12),
						i = {
							CFG: {
								selectable: !0,
								multiSelectable: !0,
								_selectedCache: {}
							},
							INIT: "_initSelected"
						};
					i.AUGMENT = {
						_initSelected: function() {
							var t = this,
								e = this.get("_graph");
							e.on("afteritemdraw", function(e) {
								var n = e.item;
								n.isSelected && t.setItemSelected(n)
							}), e.on("beforeitemdestroy", function(e) {
								t.clearItemSelected(e.item)
							})
						},
						setItemSelected: function(t) {
							var e = this.get("_graph").getShapeObj(t).getSelectedStyle(t),
								n = t.getKeyShape();
							this.get("_selectedCache")[t.id] = t, e && n.attr(e), t.isEdge && (t.startArrow && t.startArrow.attr({
								fill: e.stroke
							}), t.endArrow && t.endArrow.attr({
								fill: e.stroke
							}))
						},
						clearItemSelected: function(t) {
							var e = this.get("_graph"),
								n = t.getKeyShape(),
								i = e.getShapeObj(t),
								o = i.getStyle(t),
								a = i.getSelectedStyle(t),
								u = this.get("_selectedCache"),
								c = r.getContrast(o, a);
							n.attr(c), t.isEdge && (t.startArrow && t.startArrow.attr({
								fill: c.stroke
							}), t.endArrow && t.endArrow.attr({
								fill: c.stroke
							})), delete u[t.id]
						},
						setSelected: function(t, e) {
							var n, i = this,
								o = this.get("selectable"),
								a = this.get("_graph");
							o && (n = r.isArray(t) ? t : [t], r.each(n, function(t) {
								r.isString(t) && (t = a.find(t)), t && !t.destroyed && (e ? (i.emit("beforeitemselected", {
									item: t
								}), i.setItemSelected(t), i.emit("afteritemselected", {
									item: t
								})) : (i.emit("beforeitemunselected", {
									item: t
								}), i.clearItemSelected(t), i.emit("afteritemunselected", {
									item: t
								})), t.isSelected = e, i.updateStatus(), a.draw())
							}))
						},
						getSelected: function() {
							var t = this.get("_selectedCache");
							return r.objectToValues(t)
						},
						clearSelected: function() {
							var t = this,
								e = this.get("_graph"),
								n = this.get("_selectedCache");
							r.each(n, function(e) {
								e.isSelected && t.setSelected(e, !1)
							}), e.draw()
						}
					}, t.exports = i
				}, function(t, e) {
					function n(t, e, n) {
						t.on(n, function(t) {
							e.emit(n, t)
						}), t.on("node:" + n, function(t) {
							e.emit("node:" + n, t)
						}), t.on("edge:" + n, function(t) {
							e.emit("edge:" + n, t)
						}), t.on("group:" + n, function(t) {
							e.emit("group:" + n, t)
						}), t.on("anchor:" + n, function(t) {
							e.emit("anchor:" + n, t)
						})
					}
					var r = {};
					r.INIT = "_initEvent", r.AUGMENT = {
						_initEvent: function() {
							var t = this,
								e = this.get("_graph");
							n(e, this, "click"), n(e, this, "dblclick"), n(e, this, "mouseenter"), n(e, this, "mouseleave"), n(e, this, "mousedown"), n(e, this, "mouseup"), n(e, this, "contextmenu"), e.on("keydown", function(e) {
								t.emit("keydown", e)
							}), e.on("keyup", function(e) {
								t.emit("keyup", e)
							}), e.on("beforechange", function(e) {
								t.emit("beforechange", e)
							}), e.on("afterchange", function(e) {
								t.emit("afterchange", e)
							}), e.on("afterviewportchange", function(e) {
								t.emit("afterviewportchange", e), e.updateMatrix[0] !== e.originMatrix[0] && t.emit("afterzoom", e)
							}), e.on("beforeviewportchange", function(e) {
								t.emit("beforeviewportchange", e), e.updateMatrix[0] !== e.originMatrix[0] && t.emit("beforezoom", e)
							})
						}
					}, t.exports = r
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(21),
						f = n(30),
						l = n(12),
						h = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, s),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											cell: 16,
											line: f.gridStyle,
											type: "point",
											visible: !0
										}
									}
								}, {
									key: "init",
									value: function() {
										this._draw(), this._onViewPortChange(), !this.visible && this.hide()
									}
								}, {
									key: "_onViewPortChange",
									value: function() {
										var t = this,
											e = this.graph;
										e.on("afterviewportchange", function() {
											t.update()
										}), e.on("beforechangesize", function() {
											t.update()
										})
									}
								}, {
									key: "_draw",
									value: function() {
										var t = this.graph,
											e = this._getPath(),
											n = t.getRootGroup(),
											r = l.mix({}, this.line),
											i = t.getMatrix(),
											o = this.type,
											a = "line" === o ? 1 / i[0] : 2 / i[0];
										"point" === o && (r.lineDash = null), r.lineWidth = a, r.path = e;
										var u = n.addShape("path", {
											attrs: r,
											capture: !1,
											zIndex: 0
										});
										l.toBack(u, n), this.gridEl = u
									}
								}, {
									key: "show",
									value: function() {
										this.gridEl.show(), this.visible = !0
									}
								}, {
									key: "hide",
									value: function() {
										this.gridEl.hide(), this.visible = !1
									}
								}, {
									key: "_getLinePath",
									value: function() {
										for (var t = this.graph, e = t.get("width"), n = t.get("height"), r = t.getPoint({
												x: 0,
												y: 0
											}), i = t.getPoint({
												x: e,
												y: n
											}), o = this.cell, a = Math.ceil(r.x / o) * o, u = Math.ceil(r.y / o) * o, c = [], s = 0; s <= i.x - r.x; s += o) {
											var f = a + s;
											c.push(["M", f, r.y]), c.push(["L", f, i.y])
										}
										for (var l = 0; l <= i.y - r.y; l += o) {
											var h = u + l;
											c.push(["M", r.x, h]), c.push(["L", i.x, h])
										}
										return c
									}
								}, {
									key: "_getPointPath",
									value: function() {
										for (var t = this.graph, e = t.get("width"), n = t.get("height"), r = t.getPoint({
												x: 0,
												y: 0
											}), i = 2 / t.getMatrix()[0], o = t.getPoint({
												x: e,
												y: n
											}), a = this.getCell(), u = Math.ceil(r.x / a) * a, c = Math.ceil(r.y / a) * a, s = [], f = 0; f <= o.x - r.x; f += a)
											for (var l = u + f, h = 0; h <= o.y - r.y; h += a) {
												var d = c + h;
												s.push(["M", l, d]), s.push(["L", l + i, d])
											}
										return s
									}
								}, {
									key: "getCell",
									value: function() {
										var t = this.cell,
											e = this.graph.getMatrix()[0];
										return t * e < 9.6 ? 9.6 / e : t
									}
								}, {
									key: "_getPath",
									value: function() {
										var t = this.type;
										return this["_get" + l.upperFirst(t) + "Path"]()
									}
								}, {
									key: "update",
									value: function(t) {
										l.mix(this, t);
										var e = this._getPath(),
											n = this.gridEl,
											r = this.graph.getMatrix(),
											i = "line" === this.type ? 1 / r[0] : 2 / r[0];
										n.attr("lineWidth", i), n.attr("path", e)
									}
								}, {
									key: "destroy",
									value: function() {
										var t = this.gridEl;
										t && t.remove()
									}
								}]), e
						}();
					t.exports = h
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(154),
						o = n(12),
						a = {
							CFG: {
								grid: void 0
							},
							INIT: "_initGrid"
						};
					a.AUGMENT = {
						_initGrid: function() {
							var t = this.get("grid"),
								e = this.get("_graph");
							if (t) {
								var n = new i(function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({
									flow: this,
									graph: e
								}, t));
								this.setController("grid", n)
							}
						},
						showGrid: function(t) {
							var e = this.get("_graph"),
								n = this.getController("grid");
							n || (t ? o.isObject(t) && this.set("grid", t) : this.set("grid", !0), this._initGrid()), (n = this.getController("grid")).show(), e.draw()
						},
						hideGrid: function() {
							var t = this.get("_graph"),
								e = this.getController("grid");
							e && e.hide(), t.draw()
						},
						getGridCell: function() {
							return this.getController("grid").getCell()
						}
					}, t.exports = a
				}, function(t, e, n) {
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n, t
					}
					var i = n(12),
						o = {
							INIT: "_initGraph"
						};
					o.AUGMENT = {
						_initGraph: function() {
							var t = this.get("graph"),
								e = new(this.get("graphConstructor"))(function(t) {
									for (var e = 1; e < arguments.length; e++) {
										var n = null != arguments[e] ? arguments[e] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
											return Object.getOwnPropertyDescriptor(n, t).enumerable
										}))), i.forEach(function(e) {
											r(t, e, n[e])
										})
									}
									return t
								}({
									page: this
								}, t));
							e.draw(), this.set("_graph", e)
						},
						changeMode: function(t) {
							this.get("_graph").changeMode(t)
						},
						updateMatrix: function(t) {
							this.get("_graph").updateMatrix(t)
						},
						getMode: function() {
							return this.get("_graph").get("mode")
						},
						getMatrix: function() {
							return this.get("_graph").getMatrix()
						},
						getZoom: function() {
							return this.get("_graph").getMatrix()[0]
						},
						getMaxZoom: function() {
							return this.get("_graph").get("maxZoom")
						},
						getMinZoom: function() {
							return this.get("_graph").get("minZoom")
						},
						getGraph: function() {
							return this.get("_graph")
						},
						getItems: function() {
							return this.get("_graph").getItems()
						},
						getNodes: function() {
							return this.get("_graph").getNodes()
						},
						translate: function(t, e) {
							return this.get("_graph").translate(t, e)
						},
						getEdges: function() {
							return this.get("_graph").getEdges()
						},
						getGroups: function() {
							return this.get("_graph").getGroups()
						},
						render: function() {
							return this.get("_graph").render(), this
						},
						add: function(t, e) {
							return this.get("_graph").add(t, e), this
						},
						focusPointByDom: function(t) {
							return this.get("_graph").focusPointByDom(t), this
						},
						focusPoint: function(t) {
							return this.get("_graph").focusPoint(t), this
						},
						find: function(t) {
							return this.get("_graph").find(t)
						},
						focus: function(t) {
							var e = this.get("_graph"),
								n = e.find(t);
							if (n) {
								var r = n.getCenter();
								e.focusPoint(r)
							}
							return this
						},
						save: function() {
							return this.get("_graph").save()
						},
						read: function(t) {
							this.get("_graph").read(t)
						},
						clear: function() {
							this.get("_graph").clear()
						},
						remove: function(t) {
							return this.get("_graph").remove(t), this
						},
						update: function(t, e) {
							return this.get("_graph").update(t, e), this
						},
						zoom: function(t, e) {
							return this.get("_graph").zoom(t, e), this
						},
						getDomPoint: function(t) {
							return this.get("_graph").getDomPoint(t)
						},
						getPoint: function(t) {
							return this.get("_graph").getPoint(t)
						},
						zoomByDom: function(t, e) {
							var n = this.get("_graph"),
								r = n.getPoint(t);
							return n.zoom(r, e), this
						},
						autoZoom: function() {
							return this.get("_graph").autoZoom(), this
						},
						resetZoom: function() {
							var t = this.get("_graph"),
								e = t.getWidth(),
								n = t.getHeight();
							return t.zoomByDom({
								x: e / 2,
								y: n / 2
							}, 1), this
						},
						css: function(t) {
							var e = this.get("_graph").getMouseEventWrapper();
							i.modifyCSS(e, t)
						},
						setCapture: function(t) {
							this.get("_graph").getRootGroup().set("capture", t)
						},
						destroy: function() {
							this.get("_graph").destroy()
						},
						delete: function() {
							var t = this.getSelected(),
								e = this.get("_graph");
							i.each(t, function(t) {
								e.remove(t)
							})
						}
					}, t.exports = o
				}, function(t, e) {
					t.exports = "1.1.1"
				}, function(t, e, n) {
					var r = n(43);
					r.registerCommand("collapseExpand", {
						getItem: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph();
							return this.itemId ? n.find(this.itemId) : e.getSelected()[0]
						},
						enable: function(t) {
							var e = this.getItem(t);
							return e && !1 !== e.collapseExpand && e.getChildren().length > 0
						},
						execute: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = this.getItem(t);
							r.getModel().collapsed ? (n.update(r, {
								collapsed: !1
							}), this.toCollapsed = !1) : (n.update(r, {
								collapsed: !0
							}), this.toCollapsed = !0), e.clearSelected(), e.setSelected(r, !0), 1 === this.executeTimes && (this.itemId = r.id)
						},
						back: function(t) {
							var e = t.getCurrentPage(),
								n = e.getGraph(),
								r = this.getItem(t);
							this.toCollapsed ? n.update(r, {
								collapsed: !1
							}) : n.update(r, {
								collapsed: !0
							}), e.clearSelected(), e.setSelected(r, !0)
						},
						shortcutCodes: [
							["metaKey", "/"],
							["ctrlKey", "/"]
						]
					}), r.registerCommand("collapse", {
						enable: function(t) {
							var e = this.getItem(t);
							return e && !1 !== e.collapseExpand && e.getChildren().length > 0 && !e.getModel().collapsed
						}
					}, "collapseExpand"), r.registerCommand("expand", {
						enable: function(t) {
							var e = this.getItem(t);
							return e && !1 !== e.collapseExpand && e.getChildren().length > 0 && e.getModel().collapsed
						}
					}, "collapseExpand")
				}, function(t, e, n) {
					function r(t) {
						var e = t.getCurrentPage();
						this.matrixCache = e.getMatrix().slice(0), this._zoom(t), e.updateStatus()
					}

					function i(t) {
						t.getCurrentPage().updateMatrix(this.matrixCache)
					}
					var o = n(43);
					o.registerCommand("zoomTo", {
						_zoom: function(t) {
							t.getCurrentPage().zoom(Number(this.zoom))
						},
						queue: !1,
						execute: r,
						back: i
					}), o.registerCommand("zoomIn", {
						enable: function(t) {
							var e = t.getCurrentPage(),
								n = e.getMaxZoom(),
								r = e.getMinZoom(),
								i = e.getZoom();
							return i < n || i === r
						},
						_zoom: function(t) {
							var e = t.getCurrentPage(),
								n = t.get("_command"),
								r = e.getZoom(),
								i = e.getMaxZoom(),
								o = r + n.zoomDelta;
							o >= i && (o = i), e.zoom(o)
						},
						queue: !1,
						execute: r,
						back: i,
						shortcutCodes: [
							["metaKey", "="],
							["ctrlKey", "="]
						]
					}), o.registerCommand("zoomOut", {
						enable: function(t) {
							var e = t.getCurrentPage(),
								n = e.getMaxZoom(),
								r = e.getMinZoom(),
								i = e.getZoom();
							return i > r || i === n
						},
						_zoom: function(t) {
							var e = t.getCurrentPage(),
								n = e.getZoom(),
								r = e.getMinZoom(),
								i = n - t.get("_command").zoomDelta;
							i <= r && (i = r), e.zoom(i)
						},
						queue: !1,
						execute: r,
						back: i,
						shortcutCodes: [
							["metaKey", "-"],
							["ctrlKey", "-"]
						]
					}), o.registerCommand("autoZoom", {
						enable: function() {
							return !0
						},
						_zoom: function(t) {
							t.getCurrentPage().autoZoom()
						},
						queue: !1,
						execute: r,
						back: i
					}), o.registerCommand("resetZoom", {
						enable: function() {
							return !0
						},
						_zoom: function(t) {
							t.getCurrentPage().resetZoom()
						},
						queue: !1,
						execute: r,
						back: i,
						shortcutCodes: [
							["metaKey", "0"],
							["ctrlKey", "0"]
						]
					})
				}, function(t, e, n) {
					function r(t, e, n) {
						var r = void 0;
						return (r = Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n ? Math.round(t.h) - u * e : Math.round(t.h) + u * e : n ? Math.round(t.h) + u * e : Math.round(t.h) - u * e) < 0 ? r += 360 : r >= 360 && (r -= 360), r
					}

					function i(t, e, n) {
						if (0 === t.h && 0 === t.s) return t.s;
						var r = void 0;
						return (r = n ? Math.round(100 * t.s) - c * e : e === d ? Math.round(100 * t.s) + c : Math.round(100 * t.s) + s * e) > 100 && (r = 100), n && e === h && r > 10 && (r = 10), r < 6 && (r = 6), r
					}

					function o(t, e, n) {
						return n ? Math.round(100 * t.v) + f * e : Math.round(100 * t.v) - l * e
					}
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.default = function(t) {
						for (var e = [], n = (0, a.default)(t), u = h; u > 0; u -= 1) {
							var c = n.toHsv(),
								s = (0, a.default)({
									h: r(c, u, !0),
									s: i(c, u, !0),
									v: o(c, u, !0)
								}).toHexString();
							e.push(s)
						}
						e.push(n.toHexString());
						for (var f = 1; f <= d; f += 1) {
							var l = n.toHsv(),
								p = (0, a.default)({
									h: r(l, f),
									s: i(l, f),
									v: o(l, f)
								}).toHexString();
							e.push(p)
						}
						return e
					};
					var a = function(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(n(63)),
						u = 2,
						c = 16,
						s = 5,
						f = 5,
						l = 15,
						h = 5,
						d = 4
				}, function(t, e, n) {
					Object.defineProperty(e, "__esModule", {
						value: !0
					}), e.presetPrimaryColors = e.presetPalettes = e.generate = void 0;
					var r = function(t) {
							return t && t.__esModule ? t : {
								default: t
							}
						}(n(160)),
						i = {
							red: "#F5222D",
							volcano: "#FA541C",
							orange: "#FA8C16",
							gold: "#FAAD14",
							yellow: "#FADB14",
							lime: "#A0D911",
							green: "#52C41A",
							cyan: "#13C2C2",
							blue: "#1890FF",
							geekblue: "#2F54EB",
							purple: "#722ED1",
							magenta: "#EB2F96",
							grey: "#666666"
						},
						o = {};
					Object.keys(i).forEach(function(t) {
						o[t] = (0, r.default)(i[t])
					}), e.generate = r.default, e.presetPalettes = o, e.presetPrimaryColors = i
				}, function(t, e, n) {
					var r = n(16).Util;
					t.exports = {
						getGroupIconPath: function() {
							return "M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z"
						},
						getCollapsedButtonPath: function() {
							return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7"
						},
						getExpandedButtonPath: function() {
							return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7M7,3L7,11"
						}
					}
				}, function(t, e, n) {
					var r;
					/*!
					 * EventEmitter v5.2.5 - git.io/ee
					 * Unlicense - http://unlicense.org/
					 * Oliver Caldwell - http://oli.me.uk/
					 * @preserve
					 */
					! function(e) {
						function i() {}

						function a(t, e) {
							for (var n = t.length; n--;)
								if (t[n].listener === e) return n;
							return -1
						}

						function u(t) {
							return function() {
								return this[t].apply(this, arguments)
							}
						}
						var c = i.prototype,
							s = e.EventEmitter;
						c.getListeners = function(t) {
							var e, n, r = this._getEvents();
							if (t instanceof RegExp)
								for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
							else e = r[t] || (r[t] = []);
							return e
						}, c.flattenListeners = function(t) {
							var e, n = [];
							for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
							return n
						}, c.getListenersAsObject = function(t) {
							var e, n = this.getListeners(t);
							return n instanceof Array && ((e = {})[t] = n), e || n
						}, c.addListener = function(t, e) {
							if (! function t(e) {
									return "function" == typeof e || e instanceof RegExp || !(!e || "object" != (void 0 === e ? "undefined" : o(e))) && t(e.listener)
								}(e)) throw new TypeError("listener must be a function");
							var n, r = this.getListenersAsObject(t),
								i = "object" == (void 0 === e ? "undefined" : o(e));
							for (n in r) r.hasOwnProperty(n) && -1 === a(r[n], e) && r[n].push(i ? e : {
								listener: e,
								once: !1
							});
							return this
						}, c.on = u("addListener"), c.addOnceListener = function(t, e) {
							return this.addListener(t, {
								listener: e,
								once: !0
							})
						}, c.once = u("addOnceListener"), c.defineEvent = function(t) {
							return this.getListeners(t), this
						}, c.defineEvents = function(t) {
							for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
							return this
						}, c.removeListener = function(t, e) {
							var n, r, i = this.getListenersAsObject(t);
							for (r in i) i.hasOwnProperty(r) && -1 !== (n = a(i[r], e)) && i[r].splice(n, 1);
							return this
						}, c.off = u("removeListener"), c.addListeners = function(t, e) {
							return this.manipulateListeners(!1, t, e)
						}, c.removeListeners = function(t, e) {
							return this.manipulateListeners(!0, t, e)
						}, c.manipulateListeners = function(t, e, n) {
							var r, i, a = t ? this.removeListener : this.addListener,
								u = t ? this.removeListeners : this.addListeners;
							if ("object" != (void 0 === e ? "undefined" : o(e)) || e instanceof RegExp)
								for (r = n.length; r--;) a.call(this, e, n[r]);
							else
								for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? a.call(this, r, i) : u.call(this, r, i));
							return this
						}, c.removeEvent = function(t) {
							var e, n = void 0 === t ? "undefined" : o(t),
								r = this._getEvents();
							if ("string" === n) delete r[t];
							else if (t instanceof RegExp)
								for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
							else delete this._events;
							return this
						}, c.removeAllListeners = u("removeEvent"), c.emitEvent = function(t, e) {
							var n, r, i, o, a = this.getListenersAsObject(t);
							for (o in a)
								if (a.hasOwnProperty(o))
									for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
							return this
						}, c.trigger = u("emitEvent"), c.emit = function(t) {
							var e = Array.prototype.slice.call(arguments, 1);
							return this.emitEvent(t, e)
						}, c.setOnceReturnValue = function(t) {
							return this._onceReturnValue = t, this
						}, c._getOnceReturnValue = function() {
							return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
						}, c._getEvents = function() {
							return this._events || (this._events = {})
						}, i.noConflict = function() {
							return e.EventEmitter = s, i
						}, void 0 === (r = function() {
							return i
						}.call(e, n, e, t)) || (t.exports = r)
					}("undefined" != typeof window ? window : this || {})
				}, function(t, e, n) {
					function r(t) {
						return (r = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
							return void 0 === t ? "undefined" : o(t)
						} : function(t) {
							return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
						})(t)
					}

					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}

					function a(t, e) {
						return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
							if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t
						}(t) : e
					}

					function u(t) {
						return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
							return t.__proto__ || Object.getPrototypeOf(t)
						})(t)
					}

					function c(t, e) {
						return (c = Object.setPrototypeOf || function(t, e) {
							return t.__proto__ = e, t
						})(t, e)
					}
					var s = n(53),
						f = n(17),
						l = n(31),
						h = function(t) {
							function e() {
								return function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, e), a(this, u(e).apply(this, arguments))
							}
							return function(t, e) {
									if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
									t.prototype = Object.create(e && e.prototype, {
										constructor: {
											value: t,
											writable: !0,
											configurable: !0
										}
									}), e && c(t, e)
								}(e, s),
								function(t, e, n) {
									e && i(t.prototype, e)
								}(e, [{
									key: "getDefaultCfg",
									value: function() {
										return {
											_components: [],
											_command: {
												zoomDelta: .1,
												queue: [],
												current: 0,
												clipboard: []
											}
										}
									}
								}, {
									key: "_getComponentsBy",
									value: function(t) {
										return this.get("_components").filter(t)
									}
								}, {
									key: "_bindCommands",
									value: function(t) {
										var e = this;
										f.each(t, function(t) {
											var n = t.dataset,
												r = n.command;
											l[r] ? f.addEventListener(t, "click", function() {
												e.getCurrentPage().focusGraphWrapper(), e.executeCommand(r, n)
											}) : console.warn("请设置有效的命令！")
										})
									}
								}, {
									key: "getCommands",
									value: function() {
										return this.get("_command").queue
									}
								}, {
									key: "getCurrentCommand",
									value: function() {
										var t = this.get("_command");
										return t.queue[t.current - 1]
									}
								}, {
									key: "executeCommand",
									value: function(t, e) {
										f.isString(t) ? l.execute(t, this, e) : l.execute("common", this, {
											method: t
										}, e)
									}
								}, {
									key: "commandEnable",
									value: function(t) {
										return l.enable(t, this)
									}
								}, {
									key: "setCommandDOMenable",
									value: function() {
										var t = this,
											e = this.getComponentsByType("toolbar"),
											n = this.getComponentsByType("contextmenu"),
											r = [];
										e.forEach(function(t) {
											f.each(t.getCommandDoms(), function(t) {
												r.push(t)
											})
										}), n.forEach(function(t) {
											f.each(t.getCommandDoms(), function(t) {
												r.push(t)
											})
										}), f.each(r, function(e) {
											var n = e.dataset.command;
											l.enable(n, t) ? e.classList.remove("disable") : e.classList.add("disable")
										})
									}
								}, {
									key: "_onPageStatusChange",
									value: function() {
										this.setCommandDOMenable()
									}
								}, {
									key: "_beforeAddMinimap",
									value: function(t) {
										var e = this,
											n = this.getComponentsByType("page");
										t.getGraph = function() {
											return e.getCurrentPage().getGraph()
										}, 0 !== n.length && n.forEach(function(e) {
											t.bindPage(e)
										})
									}
								}, {
									key: "_afterAddContextmenu",
									value: function() {
										this.getCurrentPage() && this.setCommandDOMenable()
									}
								}, {
									key: "_afterAddPage",
									value: function(t) {
										var e = this,
											n = this.getComponentsByType("minimap");
										this.setCommandDOMenable(), n.forEach(function(e) {
											e.bindPage(t)
										}), t.on("statuschange", function(t) {
											e._onPageStatusChange(t)
										}), t.on("mousedown", function() {
											e.getComponentsByType("contextmenu").forEach(function(t) {
												t.hide()
											})
										}), t.on("contextmenu", function(n) {
											var r = e.getComponentsByType("contextmenu"),
												i = t.getGraph().getCanvas().get("el"),
												o = f.getBoundingClientRect(i),
												a = {
													x: n.x,
													y: n.y
												},
												u = n.item;
											u && !u.isSelected && (t.clearSelected(), t.setSelected(n.item, !0)), e.set("contextmenuPoint", a), n.domEvent.preventDefault(), r.forEach(function(t) {
												t.show(), t.contextmenuPoint = a, t.move(o.left + n.domX, o.top + n.domY)
											})
										}), t.on("statuschange", function(t) {
											var n = e.getComponentsByType("contextmenu"),
												r = e.getComponentsByType("detailpannel");
											n.forEach(function(e) {
												e.switch(t.status)
											}), r.forEach(function(e) {
												e.switch(t.status)
											})
										}), this._bindShortcut(t)
									}
								}, {
									key: "_beforeAddToolbar",
									value: function(t) {
										var e = t.getCommandDoms();
										this._bindCommands(e)
									}
								}, {
									key: "_beforeAddContextmenu",
									value: function(t) {
										var e = t.getCommandDoms();
										t.bindEvent(), this._bindCommands(e)
									}
								}, {
									key: "_beforeAddItempannel",
									value: function(t) {
										t.bindEvent()
									}
								}, {
									key: "getComponentsByType",
									value: function(t) {
										return this._getComponentsBy(function(e) {
											return e.type === t
										})
									}
								}, {
									key: "getCurrentPage",
									value: function() {
										var t, e = this.getComponentsByType("page");
										return e.every(function(e) {
											return !e.isActived || (t = e, !1)
										}), t || (t = e[0]), t
									}
								}, {
									key: "getComponents",
									value: function() {
										return this.get("_components")
									}
								}, {
									key: "_shortcutEnable",
									value: function(t, e) {
										for (var n = t.shortcutCodes, r = f.getKeyboradKey(e), i = !1, o = 0; o < n.length; o++) {
											var a = n[o];
											if (f.isArray(a)) {
												for (var u = a.length, c = !0, s = 0; s < u - 1; s++)
													if (!e[a[s]]) {
														c = !1;
														break
													} a[u - 1] !== r && a[u - 1] !== f.lowerFirst(r) || !c || (i = !0)
											} else a === r && (i = !0);
											if (i) break
										}
										return i
									}
								}, {
									key: "_bindShortcut",
									value: function(t) {
										var e = this,
											n = t.get("shortcut");
										t.getGraph().on("keydown", function(t) {
											var r = e.getComponentsByType("contextmenu"),
												i = t.domEvent;
											r.forEach(function(t) {
												t.hide()
											}), i.preventDefault();
											for (var o = l.list.filter(function(t) {
													return t.shortcutCodes && n[t.name]
												}), a = 0; a < o.length; a++) {
												var u = o[a];
												if (e._shortcutEnable(u, i)) return e.executeCommand(u.name), !1
											}
										})
									}
								}, {
									key: "add",
									value: function(t) {
										var e = this.get("_components"),
											n = f.upperFirst(t.type);
										t.editor = this, this["_beforeAdd" + n] && this["_beforeAdd" + n](t), e.push(t), this["_afterAdd" + n] && this["_afterAdd" + n](t)
									}
								}, {
									key: "destroy",
									value: function() {
										this.get("_components").forEach(function(t) {
											t.destroy()
										})
									}
								}]), e
						}();
					t.exports = h
				}])
			})
		}).call(e, n(10)(t))
	}, function(t, e, n) {
		"use strict";
		var r = n(52),
			i = n(91),
			o = i(function(t, e) {
				return null == t ? {} : r(t, e)
			});
		t.exports = o
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return i(t, e, function(e, n) {
				return o(t, n)
			})
		}
		var i = n(53),
			o = n(87);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			for (var r = -1, u = e.length, c = {}; ++r < u;) {
				var s = e[r],
					f = i(t, s);
				n(f, s) && o(c, a(s, t), f)
			}
			return c
		}
		var i = n(54),
			o = n(86),
			a = n(11);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			e = i(e, t);
			for (var n = 0, r = e.length; null != t && n < r;) t = t[o(e[n++])];
			return n && n == r ? t : void 0
		}
		var i = n(11),
			o = n(23);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (o(t)) return !1;
			var n = void 0 === t ? "undefined" : i(t);
			return !("number" != n && "symbol" != n && "boolean" != n && null != t && !a(t)) || (c.test(t) || !u.test(t) || null != e && t in Object(e))
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			o = n(6),
			a = n(20),
			u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			c = /^\w*$/;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		r = function() {
			return this
		}();
		try {
			r = r || Function("return this")() || (0, eval)("this")
		} catch (t) {
			"object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = a.call(t, c),
				n = t[c];
			try {
				t[c] = void 0;
				var r = !0
			} catch (t) {}
			var i = u.call(t);
			return r && (e ? t[c] = n : delete t[c]), i
		}
		var i = n(12),
			o = Object.prototype,
			a = o.hasOwnProperty,
			u = o.toString,
			c = i ? i.toStringTag : void 0;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return o.call(t)
		}
		var i = Object.prototype,
			o = i.toString;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(60),
			i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			o = /\\(\\)?/g,
			a = r(function(t) {
				var e = [];
				return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
					e.push(r ? i.replace(o, "$1") : n || t)
				}), e
			});
		t.exports = a
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = i(t, function(t) {
					return n.size === o && n.clear(), t
				}),
				n = e.cache;
			return e
		}
		var i = n(61),
			o = 500;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(o);
			var n = function n() {
				var r = arguments,
					i = e ? e.apply(this, r) : r[0],
					o = n.cache;
				if (o.has(i)) return o.get(i);
				var a = t.apply(this, r);
				return n.cache = o.set(i, a) || o, a
			};
			return n.cache = new(r.Cache || i), n
		}
		var i = n(28),
			o = "Expected a function";
		r.Cache = i, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			this.size = 0, this.__data__ = {
				hash: new i,
				map: new(a || o),
				string: new i
			}
		}
		var i = n(63),
			o = n(14),
			a = n(29);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var r = t[e];
				this.set(r[0], r[1])
			}
		}
		var i = n(64),
			o = n(70),
			a = n(71),
			u = n(72),
			c = n(73);
		r.prototype.clear = i, r.prototype.delete = o, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			this.__data__ = i ? i(null) : {}, this.size = 0
		}
		var i = n(13);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return !(!a(t) || o(t)) && (i(t) ? p : s).test(u(t))
		}
		var i = n(22),
			o = n(66),
			a = n(3),
			u = n(68),
			c = /[\\^$.*+?()[\]{}|]/g,
			s = /^\[object .+?Constructor\]$/,
			f = Function.prototype,
			l = Object.prototype,
			h = f.toString,
			d = l.hasOwnProperty,
			p = RegExp("^" + h.call(d).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return !!o && o in t
		}
		var i = n(67),
			o = function() {
				var t = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "");
				return t ? "Symbol(src)_1." + t : ""
			}();
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(7),
			i = r["__core-js_shared__"];
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if (null != t) {
				try {
					return o.call(t)
				} catch (t) {}
				try {
					return t + ""
				} catch (t) {}
			}
			return ""
		}
		var i = Function.prototype,
			o = i.toString;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return null == t ? void 0 : t[e]
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.has(t) && delete this.__data__[t];
			return this.size -= e ? 1 : 0, e
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__;
			if (i) {
				var n = e[t];
				return n === o ? void 0 : n
			}
			return u.call(e, t) ? e[t] : void 0
		}
		var i = n(13),
			o = "__lodash_hash_undefined__",
			a = Object.prototype,
			u = a.hasOwnProperty;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__;
			return i ? void 0 !== e[t] : a.call(e, t)
		}
		var i = n(13),
			o = Object.prototype,
			a = o.hasOwnProperty;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = this.__data__;
			return this.size += this.has(t) ? 0 : 1, n[t] = i && void 0 === e ? o : e, this
		}
		var i = n(13),
			o = "__lodash_hash_undefined__";
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			this.__data__ = [], this.size = 0
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__,
				n = i(e, t);
			return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
		}
		var i = n(15),
			o = Array.prototype,
			a = o.splice;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__,
				n = i(e, t);
			return n < 0 ? void 0 : e[n][1]
		}
		var i = n(15);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i(this.__data__, t) > -1
		}
		var i = n(15);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = this.__data__,
				r = i(n, t);
			return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
		}
		var i = n(15);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = i(this, t).delete(t);
			return this.size -= e ? 1 : 0, e
		}
		var i = n(17);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = void 0 === t ? "undefined" : i(t);
			return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i(this, t).get(t)
		}
		var i = n(17);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i(this, t).has(t)
		}
		var i = n(17);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = i(this, t),
				r = n.size;
			return n.set(t, e), this.size += n.size == r ? 0 : 1, this
		}
		var i = n(17);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if ("string" == typeof t) return t;
			if (a(t)) return o(t, r) + "";
			if (u(t)) return f ? f.call(t) : "";
			var e = t + "";
			return "0" == e && 1 / t == -c ? "-0" : e
		}
		var i = n(12),
			o = n(85),
			a = n(6),
			u = n(20),
			c = 1 / 0,
			s = i ? i.prototype : void 0,
			f = s ? s.toString : void 0;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
			return i
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			if (!u(t)) return t;
			e = o(e, t);
			for (var s = -1, f = e.length, l = f - 1, h = t; null != h && ++s < f;) {
				var d = c(e[s]),
					p = n;
				if (s != l) {
					var g = h[d];
					p = r ? r(g, d, h) : void 0, void 0 === p && (p = u(g) ? g : a(e[s + 1]) ? [] : {})
				}
				i(h, d, p), h = h[d]
			}
			return t
		}
		var i = n(31),
			o = n(11),
			a = n(18),
			u = n(3),
			c = n(23);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return null != t && o(t, e, i)
		}
		var i = n(88),
			o = n(89);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return null != t && e in Object(t)
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			e = i(e, t);
			for (var r = -1, f = e.length, l = !1; ++r < f;) {
				var h = s(e[r]);
				if (!(l = null != t && n(t, h))) break;
				t = t[h]
			}
			return l || ++r != f ? l : !!(f = null == t ? 0 : t.length) && c(f) && u(h, f) && (a(t) || o(t))
		}
		var i = n(11),
			o = n(19),
			a = n(6),
			u = n(18),
			c = n(25),
			s = n(23);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return o(t) && i(t) == a
		}
		var i = n(9),
			o = n(8),
			a = "[object Arguments]";
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return a(o(t, void 0, i), t + "")
		}
		var i = n(92),
			o = n(33),
			a = n(34);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return (null == t ? 0 : t.length) ? i(t, 1) : []
		}
		var i = n(93);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, a, u) {
			var c = -1,
				s = t.length;
			for (n || (n = o), u || (u = []); ++c < s;) {
				var f = t[c];
				e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, a, u) : i(u, f) : a || (u[u.length] = f)
			}
			return u
		}
		var i = n(94),
			o = n(95);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
			return t
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return a(t) || o(t) || !!(u && t && t[u])
		}
		var i = n(12),
			o = n(19),
			a = n(6),
			u = i ? i.isConcatSpreadable : void 0;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			switch (n.length) {
				case 0:
					return t.call(e);
				case 1:
					return t.call(e, n[0]);
				case 2:
					return t.call(e, n[0], n[1]);
				case 3:
					return t.call(e, n[0], n[1], n[2])
			}
			return t.apply(e, n)
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(98),
			i = n(32),
			o = n(35),
			a = i ? function(t, e) {
				return i(t, "toString", {
					configurable: !0,
					enumerable: !1,
					value: r(e),
					writable: !0
				})
			} : o;
		t.exports = a
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return function() {
				return t
			}
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = 0,
				n = 0;
			return function() {
				var r = a(),
					u = o - (r - n);
				if (n = r, u > 0) {
					if (++e >= i) return arguments[0]
				} else e = 0;
				return t.apply(void 0, arguments)
			}
		}
		var i = 800,
			o = 16,
			a = Date.now;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(101),
			i = n(131),
			o = i(function(t, e, n) {
				r(t, e, n)
			});
		t.exports = o
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, l, h) {
			t !== e && a(e, function(a, s) {
				if (c(a)) h || (h = new i), u(t, e, s, n, r, l, h);
				else {
					var d = l ? l(f(t, s), a, s + "", t, e, h) : void 0;
					void 0 === d && (d = a), o(t, s, d)
				}
			}, s)
		}
		var i = n(102),
			o = n(36),
			a = n(108),
			u = n(110),
			c = n(3),
			s = n(42),
			f = n(41);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__ = new i(t);
			this.size = e.size
		}
		var i = n(14),
			o = n(103),
			a = n(104),
			u = n(105),
			c = n(106),
			s = n(107);
		r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			this.__data__ = new i, this.size = 0
		}
		var i = n(14);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = this.__data__,
				n = e.delete(t);
			return this.size = e.size, n
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return this.__data__.get(t)
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return this.__data__.has(t)
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = this.__data__;
			if (n instanceof i) {
				var r = n.__data__;
				if (!o || r.length < u - 1) return r.push([t, e]), this.size = ++n.size, this;
				n = this.__data__ = new a(r)
			}
			return n.set(t, e), this.size = n.size, this
		}
		var i = n(14),
			o = n(29),
			a = n(28),
			u = 200;
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(109),
			i = r();
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return function(e, n, r) {
				for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
					var c = a[t ? u : ++i];
					if (!1 === n(o[c], c, o)) break
				}
				return e
			}
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, r, b, x, _) {
			var w = m(t, n),
				S = m(e, n),
				M = _.get(S);
			if (M) return void i(t, n, M);
			var O = x ? x(w, S, n + "", t, e, _) : void 0,
				P = void 0 === O;
			if (P) {
				var E = f(S),
					A = !E && h(S),
					C = !E && !A && v(S);
				O = S, E || A || C ? f(w) ? O = w : l(w) ? O = u(w) : A ? (P = !1, O = o(S, !0)) : C ? (P = !1, O = a(S, !0)) : O = [] : g(S) || s(S) ? (O = w, s(w) ? O = y(w) : p(w) && !d(w) || (O = c(S))) : P = !1
			}
			P && (_.set(S, O), b(O, S, r, x, _), _.delete(S)), i(t, n, O)
		}
		var i = n(36),
			o = n(111),
			a = n(112),
			u = n(115),
			c = n(116),
			s = n(19),
			f = n(6),
			l = n(119),
			h = n(39),
			d = n(22),
			p = n(3),
			g = n(121),
			v = n(40),
			m = n(41),
			y = n(125);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			function r(t, e) {
				if (e) return t.slice();
				var n = t.length,
					r = f ? f(n) : new t.constructor(n);
				return t.copy(r), r
			}
			var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				o = n(7),
				a = "object" == i(e) && e && !e.nodeType && e,
				u = a && "object" == i(t) && t && !t.nodeType && t,
				c = u && u.exports === a,
				s = c ? o.Buffer : void 0,
				f = s ? s.allocUnsafe : void 0;
			t.exports = r
		}).call(e, n(10)(t))
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = e ? i(t.buffer) : t.buffer;
			return new t.constructor(n, t.byteOffset, t.length)
		}
		var i = n(113);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = new t.constructor(t.byteLength);
			return new i(e).set(new i(t)), e
		}
		var i = n(114);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(7),
			i = r.Uint8Array;
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = -1,
				r = t.length;
			for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
			return e
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return "function" != typeof t.constructor || a(t) ? {} : i(o(t))
		}
		var i = n(117),
			o = n(37),
			a = n(38);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(3),
			i = Object.create,
			o = function() {
				function t() {}
				return function(e) {
					if (!r(e)) return {};
					if (i) return i(e);
					t.prototype = e;
					var n = new t;
					return t.prototype = void 0, n
				}
			}();
		t.exports = o
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return function(n) {
				return t(e(n))
			}
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return o(t) && i(t)
		}
		var i = n(26),
			o = n(8);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r() {
			return !1
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if (!a(t) || i(t) != u) return !1;
			var e = o(t);
			if (null === e) return !0;
			var n = l.call(e, "constructor") && e.constructor;
			return "function" == typeof n && n instanceof n && f.call(n) == h
		}
		var i = n(9),
			o = n(37),
			a = n(8),
			u = "[object Object]",
			c = Function.prototype,
			s = Object.prototype,
			f = c.toString,
			l = s.hasOwnProperty,
			h = f.call(Object);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return a(t) && o(t.length) && !!u[i(t)]
		}
		var i = n(9),
			o = n(25),
			a = n(8),
			u = {};
		u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return function(e) {
				return t(e)
			}
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				i = n(27),
				o = "object" == r(e) && e && !e.nodeType && e,
				a = o && "object" == r(t) && t && !t.nodeType && t,
				u = a && a.exports === o,
				c = u && i.process,
				s = function() {
					try {
						var t = a && a.require && a.require("util").types;
						return t || c && c.binding && c.binding("util")
					} catch (t) {}
				}();
			t.exports = s
		}).call(e, n(10)(t))
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i(t, o(t))
		}
		var i = n(126),
			o = n(42);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, r) {
			var a = !n;
			n || (n = {});
			for (var u = -1, c = e.length; ++u < c;) {
				var s = e[u],
					f = r ? r(n[s], t[s], s, n, t) : void 0;
				void 0 === f && (f = t[s]), a ? o(n, s, f) : i(n, s, f)
			}
			return n
		}
		var i = n(31),
			o = n(24);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			var n = a(t),
				r = !n && o(t),
				f = !n && !r && u(t),
				h = !n && !r && !f && s(t),
				d = n || r || f || h,
				p = d ? i(t.length, String) : [],
				g = p.length;
			for (var v in t) !e && !l.call(t, v) || d && ("length" == v || f && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || c(v, g)) || p.push(v);
			return p
		}
		var i = n(128),
			o = n(19),
			a = n(6),
			u = n(39),
			c = n(18),
			s = n(40),
			f = Object.prototype,
			l = f.hasOwnProperty;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
			return r
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			if (!i(t)) return a(t);
			var e = o(t),
				n = [];
			for (var r in t)("constructor" != r || !e && c.call(t, r)) && n.push(r);
			return n
		}
		var i = n(3),
			o = n(38),
			a = n(130),
			u = Object.prototype,
			c = u.hasOwnProperty;
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			var e = [];
			if (null != t)
				for (var n in Object(t)) e.push(n);
			return e
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return i(function(e, n) {
				var r = -1,
					i = n.length,
					a = i > 1 ? n[i - 1] : void 0,
					u = i > 2 ? n[2] : void 0;
				for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(n[0], n[1], u) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++r < i;) {
					var c = n[r];
					c && t(e, c, r, a)
				}
				return e
			})
		}
		var i = n(132),
			o = n(133);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			return a(o(t, e, i), t + "")
		}
		var i = n(35),
			o = n(33),
			a = n(34);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			if (!c(n)) return !1;
			var r = void 0 === e ? "undefined" : i(e);
			return !!("number" == r ? a(n) && u(e, n.length) : "string" == r && e in n) && o(n[e], t)
		}
		var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			o = n(16),
			a = n(26),
			u = n(18),
			c = n(3);
		t.exports = r
	}, function(t, e, n) {
		"use strict";
		var r = n(135),
			i = r("toUpperCase");
		t.exports = i
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return function(e) {
				e = u(e);
				var n = o(e) ? a(e) : void 0,
					r = n ? n[0] : e.charAt(0),
					c = n ? i(n, 1).join("") : e.slice(1);
				return r[t]() + c
			}
		}
		var i = n(136),
			o = n(43),
			a = n(138),
			u = n(30);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			var r = t.length;
			return n = void 0 === n ? r : n, !e && n >= r ? t : i(t, e, n)
		}
		var i = n(137);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n) {
			var r = -1,
				i = t.length;
			e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
			for (var o = Array(i); ++r < i;) o[r] = t[r + e];
			return o
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return o(t) ? a(t) : i(t)
		}
		var i = n(139),
			o = n(43),
			a = n(140);
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t.split("")
		}
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t.match(h) || []
		}
		var i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
			o = "\\ud83c[\\udffb-\\udfff]",
			a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			c = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
			s = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*",
			f = "[\\ufe0e\\ufe0f]?" + c + s,
			l = "(?:" + ["[^\\ud800-\\udfff]" + i + "?", i, a, u, "[\\ud800-\\udfff]"].join("|") + ")",
			h = RegExp(o + "(?=" + o + ")|" + l + f, "g");
		t.exports = r
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			c = function t(e, n, r) {
				null === e && (e = Function.prototype);
				var i = Object.getOwnPropertyDescriptor(e, n);
				if (void 0 === i) {
					var o = Object.getPrototypeOf(e);
					return null === o ? void 0 : t(o, n, r)
				}
				if ("value" in i) return i.value;
				var a = i.get;
				if (void 0 !== a) return a.call(r)
			},
			s = n(5),
			f = r(s),
			l = n(4),
			h = n(45),
			d = r(h),
			p = n(2),
			g = r(p),
			v = function(t) {
				function e() {
					return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return a(e, t), u(e, [{
					key: "initPage",
					value: function() {
						var t = this.props.editor;
						t.emit(l.EVENT_BEFORE_ADD_PAGE, {
							className: l.MIND_CLASS_NAME
						}), this.page = new f.default.Mind(this.config), t.add(this.page), t.emit(l.EVENT_AFTER_ADD_PAGE, {
							page: this.page
						})
					}
				}, {
					key: "bindEvent",
					value: function() {
						c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "bindEvent", this).call(this), this.bindKeyUpEditLabel()
					}
				}, {
					key: "bindKeyUpEditLabel",
					value: function() {
						var t = this,
							e = this.page.get("labelTextArea");
						e.on("keyup", function(n) {
							n.stopPropagation();
							var r = e.focusItem,
								i = e.textContent;
							t.page.emit("keyUpEditLabel", {
								item: r,
								text: i
							})
						})
					}
				}, {
					key: "pageId",
					get: function() {
						var t = this.props.editor;
						return l.MIND_CONTAINER + "_" + t.id
					}
				}]), e
			}(d.default);
		e.default = (0, g.default)(v)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n
			}
			return Array.from(t)
		}

		function o(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function u(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.RegisterBehaviour = e.RegisterCommand = e.RegisterGuide = e.RegisterGroup = e.RegisterEdge = e.RegisterNode = void 0;
		var c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(5),
			h = r(l),
			d = n(1),
			p = n(2),
			g = r(p),
			v = function(t) {
				function e(t, n) {
					o(this, e);
					var r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return r.type = n, r.bindEvent(), r
				}
				return u(e, t), c(e, [{
					key: "bindEvent",
					value: function() {
						var t = this,
							e = this.type;
						(0, this.props.onBeforeAddPage)(function(n) {
							var r, o = n.className,
								a = h.default[o],
								u = ["name", "config", "extend"];
							"command" === e && (a = h.default), "behaviour" === e && (u = ["name", "behaviour", "dependences"]);
							var c = u.map(function(e) {
								return t.props[e]
							});
							(r = a)["register" + (0, d.upperFirst)(e)].apply(r, i(c))
						})
					}
				}, {
					key: "render",
					value: function() {
						return null
					}
				}]), e
			}(f.default.Component);
		v.create = function(t) {
			var e = function(e) {
				function n(e) {
					return o(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t))
				}
				return u(n, e), n
			}(v);
			return (0, g.default)(e)
		};
		e.RegisterNode = v.create("node"), e.RegisterEdge = v.create("edge"), e.RegisterGroup = v.create("group"), e.RegisterGuide = v.create("guide"), e.RegisterCommand = v.create("command"), e.RegisterBehaviour = v.create("behaviour")
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function o(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			u = n(0),
			c = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(u),
			s = function(t) {
				function e() {
					return r(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return o(e, t), a(e, [{
					key: "render",
					value: function() {
						var t = this.props,
							e = t.name,
							n = t.children;
						return c.default.createElement("div", {
							className: "command",
							"data-command": e
						}, n)
					}
				}]), e
			}(c.default.Component);
		e.default = s
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(5),
			h = r(l),
			d = n(1),
			p = n(4),
			g = n(2),
			v = r(g),
			m = function(t) {
				function e() {
					return i(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
				}
				return a(e, t), c(e, [{
					key: "componentDidMount",
					value: function() {
						var t = this.props.editor,
							e = this.props,
							n = e.container,
							r = void 0 === n ? this.containerId : n,
							i = e.width,
							o = e.height,
							a = e.viewportWindowStyle,
							u = e.viewportBackStyle,
							c = document.getElementById(r),
							s = c.clientWidth,
							f = c.clientHeight;
						t.add(new h.default.Minimap({
							container: r,
							width: i || s,
							height: o || f,
							viewportWindowStyle: a,
							viewportBackStyle: u
						}))
					}
				}, {
					key: "render",
					value: function() {
						return this.props.container ? null : f.default.createElement("div", u({
							id: this.containerId
						}, (0, d.pick)(this.props, ["style", "className"])))
					}
				}, {
					key: "containerId",
					get: function() {
						var t = this.props.editor;
						return p.MINIMAP_CONTAINER + "_" + t.id
					}
				}]), e
			}(f.default.Component);
		e.default = (0, v.default)(m)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CanvasMenu = e.MultiMenu = e.GroupMenu = e.EdgeMenu = e.NodeMenu = void 0;
		var u = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(1),
			h = n(5),
			d = r(h),
			p = n(4),
			g = n(2),
			v = r(g),
			m = n(146),
			y = r(m),
			b = function(t) {
				function e() {
					var t, n, r, a;
					i(this, e);
					for (var u = arguments.length, c = Array(u), s = 0; s < u; s++) c[s] = arguments[s];
					return n = r = o(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(c))), r.contextMenu = null, a = n, o(r, a)
				}
				return a(e, t), c(e, [{
					key: "componentDidMount",
					value: function() {
						var t = this.props.editor;
						this.contextMenu = new d.default.Contextmenu({
							container: this.containerId
						}), t.add(this.contextMenu)
					}
				}, {
					key: "render",
					value: function() {
						var t = this.props.children;
						return f.default.createElement("div", u({
							id: this.containerId
						}, (0, l.pick)(this.props, ["style", "className"])), t)
					}
				}, {
					key: "containerId",
					get: function() {
						var t = this.props.editor;
						return p.CONTEXT_MENU_CONTAINER + "_" + t.id
					}
				}]), e
			}(f.default.Component);
		e.NodeMenu = y.default.create("node"), e.EdgeMenu = y.default.create("edge"), e.GroupMenu = y.default.create("group"), e.MultiMenu = y.default.create("multi"), e.CanvasMenu = y.default.create("canvas");
		e.default = (0, v.default)(b)
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function o(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			u = n(0),
			c = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(u),
			s = function(t) {
				function e(t, n) {
					r(this, e);
					var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return o.type = n, o
				}
				return o(e, t), a(e, [{
					key: "render",
					value: function() {
						var t = this.props.children,
							e = this.type;
						return c.default.createElement("div", {
							className: "menu",
							"data-status": e + "-selected"
						}, t)
					}
				}]), e
			}(c.default.Component);
		s.create = function(t) {
			return function(e) {
				function n(e) {
					return r(this, n), i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t))
				}
				return o(n, e), n
			}(s)
		}, e.default = s
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(5),
			h = r(l),
			d = n(1),
			p = n(4),
			g = n(2),
			v = r(g),
			m = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					n.toolbar = null;
					var r = t.editor;
					return (0, t.onAfterAddPage)(function() {
						n.toolbar = new h.default.Toolbar({
							container: n.containerId
						}), r.add(n.toolbar)
					}), n
				}
				return a(e, t), c(e, [{
					key: "containerId",
					get: function() {
						var t = this.props.editor;
						return p.TOOLBAR_CONTAINER + "_" + t.id
					}
				}]), c(e, [{
					key: "render",
					value: function() {
						var t = this.props.children;
						return f.default.createElement("div", u({
							id: this.containerId
						}, (0, d.pick)(this.props, ["style", "className"])), t)
					}
				}]), e
			}(f.default.Component);
		e.default = (0, v.default)(m)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.Item = void 0;
		var u = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(1),
			h = n(2),
			d = r(h),
			p = n(149),
			g = r(p),
			v = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return n.page = null, n.handleMouseUp = function() {
						n.page.cancelAdd()
					}, n.bindEvent(), n
				}
				return a(e, t), c(e, [{
					key: "bindEvent",
					value: function() {
						var t = this;
						(0, this.props.onAfterAddPage)(function(e) {
							var n = e.page;
							t.page = n, document.addEventListener("mouseup", t.handleMouseUp)
						})
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						document.removeEventListener("mouseup", this.handleMouseUp)
					}
				}, {
					key: "render",
					value: function() {
						var t = this.props.children;
						return f.default.createElement("div", u({
							id: this.containerId
						}, (0, l.pick)(this.props, ["style", "className"])), t)
					}
				}]), e
			}(f.default.Component);
		e.Item = g.default, e.default = (0, d.default)(v)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			c = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(0),
			f = r(s),
			l = n(2),
			h = r(l),
			d = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return n.handleMouseDown = function() {
						var t = n.props,
							e = t.type,
							r = t.size,
							i = t.shape,
							o = t.model;
						n.page && n.page.beginAdd(e, u({
							type: e,
							size: r,
							shape: i
						}, o))
					}, n.bindEvent(), n
				}
				return a(e, t), c(e, [{
					key: "bindEvent",
					value: function() {
						var t = this;
						(0, this.props.onAfterAddPage)(function(e) {
							var n = e.page;
							t.page = n
						})
					}
				}, {
					key: "render",
					value: function() {
						var t = this.props,
							e = t.src,
							n = t.shape,
							r = t.children;
						return f.default.createElement("div", {
							style: {
								cursor: "pointer"
							},
							onMouseDown: this.handleMouseDown
						}, e ? f.default.createElement("img", {
							src: e,
							alt: n,
							draggable: !1
						}) : r)
					}
				}]), e
			}(f.default.Component);
		e.default = (0, h.default)(d)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.CanvasPanel = e.MultiPanel = e.GroupPanel = e.EdgePanel = e.NodePanel = void 0;
		var u = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			c = n(0),
			s = r(c),
			f = n(1),
			l = n(4),
			h = n(2),
			d = r(h),
			p = n(151),
			g = r(p),
			v = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return n.state = {
						status: ""
					}, n.bindEvent(), n
				}
				return a(e, t), u(e, [{
					key: "bindEvent",
					value: function() {
						var t = this;
						(0, this.props.onAfterAddPage)(function(e) {
							var n = e.page;
							t.setState({
								status: l.STATUS_CANVAS_SELECTED
							}), n.on("statuschange", function(e) {
								var n = e.status;
								t.setState({
									status: n
								})
							})
						})
					}
				}, {
					key: "render",
					value: function() {
						var t = this.props.children,
							e = this.state.status;
						return e ? s.default.createElement("div", (0, f.pick)(this.props, ["style", "className"]), s.default.Children.toArray(t).map(function(t) {
							return s.default.cloneElement(t, {
								status: e
							})
						})) : null
					}
				}]), e
			}(s.default.Component);
		e.NodePanel = g.default.create("node"), e.EdgePanel = g.default.create("edge"), e.GroupPanel = g.default.create("group"), e.MultiPanel = g.default.create("multi"), e.CanvasPanel = g.default.create("canvas");
		e.default = (0, d.default)(v)
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function o(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			u = n(0),
			c = function(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(u),
			s = n(1),
			f = function(t) {
				function e(t, n) {
					r(this, e);
					var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return o.type = n, o
				}
				return o(e, t), a(e, [{
					key: "render",
					value: function() {
						var t = this.props,
							e = t.status,
							n = t.children;
						return this.type + "-selected" !== e ? null : c.default.createElement("div", (0, s.pick)(this.props, ["style", "className"]), n)
					}
				}]), e
			}(c.default.Component);
		f.create = function(t) {
			return function(e) {
				function n(e) {
					return r(this, n), i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t))
				}
				return o(n, e), n
			}(f)
		}, e.default = f
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			var n = {};
			for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
			return n
		}

		function o(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function u(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var c = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
				}
				return t
			},
			s = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}();
		e.default = function(t) {
			var e = function(e) {
				function n() {
					return o(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
				}
				return u(n, e), s(n, [{
					key: "render",
					value: function() {
						var e = this.props,
							n = e.forwardRef,
							r = i(e, ["forwardRef"]);
						return l.default.createElement(d.default.Consumer, null, function(e) {
							return l.default.createElement(t, c({
								ref: n
							}, r, {
								propsAPI: e
							}))
						})
					}
				}]), n
			}(l.default.Component);
			return l.default.forwardRef(function(t, n) {
				return l.default.createElement(e, c({}, t, {
					forwardRef: n
				}))
			})
		};
		var f = n(0),
			l = r(f),
			h = n(47),
			d = r(h)
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			c = n(0),
			s = r(c),
			f = n(5),
			l = r(f),
			h = n(4),
			d = n(1),
			p = n(44),
			g = r(p),
			v = n(46),
			m = r(v),
			y = n(47),
			b = r(y),
			x = n(154),
			_ = r(x),
			w = function(t) {
				function e(t) {
					i(this, e);
					var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					return n.editor = null, n.addListener = function(t, e, n) {
						"function" == typeof n && t.on(e, n)
					}, n.handleBeforeAddPage = function(t) {
						n.editor.on(h.EVENT_BEFORE_ADD_PAGE, t)
					}, n.handleAfterAddPage = function(t) {
						var e = n.currentPage;
						if (e) return void t({
							page: e
						});
						n.editor.on(h.EVENT_AFTER_ADD_PAGE, t)
					}, n.init(), n.bindEvent(), n
				}
				return a(e, t), u(e, [{
					key: "currentPage",
					get: function() {
						return this.editor.getCurrentPage()
					}
				}], [{
					key: "setTrackable",
					value: function(t) {
						g.default.set("trackable", Boolean(t))
					}
				}]), u(e, [{
					key: "init",
					value: function() {
						this.editor = new l.default, this.ggEditor = {
							editor: this.editor,
							onBeforeAddPage: this.handleBeforeAddPage,
							onAfterAddPage: this.handleAfterAddPage
						}, this.propsAPI = new _.default(this.editor)
					}
				}, {
					key: "bindEvent",
					value: function() {
						var t = this;
						h.EDITOR_EVENTS.forEach(function(e) {
							t.addListener(t.editor, [e], t.props[h.EDITOR_REACT_EVENTS[e]])
						})
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.editor.destroy()
					}
				}, {
					key: "render",
					value: function() {
						var t = this.props.children;
						return s.default.createElement(m.default.Provider, {
							value: this.ggEditor
						}, s.default.createElement(b.default.Provider, {
							value: this.propsAPI
						}, s.default.createElement("div", (0, d.pick)(this.props, ["style", "className"]), t)))
					}
				}]), e
			}(s.default.Component);
		e.default = w
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function(e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = function() {
				function t(e) {
					var n = this;
					r(this, t), this.editor = null, this.editor = e, ["executeCommand"].forEach(function(t) {
						n[t] = function() {
							var e;
							return (e = n.editor)[t].apply(e, arguments)
						}
					}), ["read", "save", "add", "find", "update", "remove", "getSelected"].forEach(function(t) {
						n[t] = function() {
							var e;
							return (e = n.currentPage)[t].apply(e, arguments)
						}
					})
				}
				return i(t, [{
					key: "currentPage",
					get: function() {
						return this.editor.getCurrentPage()
					}
				}]), t
			}();
		e.default = o
	}])
});
//# sourceMappingURL=bundle.js.map