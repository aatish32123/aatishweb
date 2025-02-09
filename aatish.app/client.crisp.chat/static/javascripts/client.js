/**
 * crisp-client
 * @version v2.12.1 2940d8d
 * @author Crisp IM SAS
 * @date 11/21/2023
 */
(function() {
    try {
        var g = {},
            t = new function() {
                var t, i, n, e, s, c, a;
                try {
                    this.ns = "CrispLibrary";
                    var r = {},
                        h = g;

                    function oi(t, i) {
                        return function(t) {
                            if (Array.isArray(t)) return t
                        }(t) || function(t, i) {
                            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != n) {
                                var e, s, c, a, r = [],
                                    o = !0,
                                    h = !1;
                                try {
                                    if (c = (n = n.call(t)).next, 0 === i) {
                                        if (Object(n) !== n) return;
                                        o = !1
                                    } else
                                        for (; !(o = (e = c.call(n)).done) && (r.push(e.value), r.length !== i); o = !0);
                                } catch (t) {
                                    h = !0, s = t
                                } finally {
                                    try {
                                        if (!o && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (h) throw s
                                    }
                                }
                                return r
                            }
                        }(t, i) || o(t, i) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function hi(t, i) {
                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!n) {
                            if (Array.isArray(t) || (n = o(t)) || i && t && "number" == typeof t.length) {
                                function e() {}
                                n && (t = n);
                                var s = 0;
                                return {
                                    s: e,
                                    n: function() {
                                        return s >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[s++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: e
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var c, a = !0,
                            r = !1;
                        return {
                            s: function() {
                                n = n.call(t)
                            },
                            n: function() {
                                var t = n.next();
                                return a = t.done, t
                            },
                            e: function(t) {
                                r = !0, c = t
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (r) throw c
                                }
                            }
                        }
                    }

                    function o(t, i) {
                        if (t) {
                            if ("string" == typeof t) return l(t, i);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, i) : void 0
                        }
                    }

                    function l(t, i) {
                        (null == i || i > t.length) && (i = t.length);
                        for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
                        return e
                    }

                    function li(t, i, n) {
                        return m(t, "symbol" != typeof i ? i + "" : i, n), n
                    }
                    r.Console = ((a = {}).i = "production", a.c = "development" == a.i, a.a = void 0 !== window.console, a.o = a.c && a.a, a.h = function(t, i, n) {}, a.warn = function(t, i) {
                        a.o && console.warn(t, i), a.h("warn", t, i)
                    }, a.error = function(t, i) {
                        a.o && console.error(t, i), a.h("error", t, i)
                    }, a.info = function(t, i) {
                        a.o && console.info(t, i), a.h("info", t, i)
                    }, a.log = function(t, i) {
                        a.o && console.log(t, i), a.h("log", t, i)
                    }, a.debug = function(t, i) {
                        a.o && (void 0 !== console.debug ? console.debug(t, i) : console.log(t, i)), a.h("debug", t, i)
                    }, a.set_log_sink = function(t) {
                        if ("function" != typeof t) throw new Error("Invalid function");
                        a.h = t
                    }, a), s = function() {
                        return function e(s, c, a) {
                            function r(i, t) {
                                if (!c[i]) {
                                    if (!s[i]) {
                                        var n = "function" == typeof require && require;
                                        if (!t && n) return n(i, !0);
                                        if (o) return o(i, !0);
                                        n = new Error("Cannot find module '" + i + "'");
                                        throw n.code = "MODULE_NOT_FOUND", n
                                    }
                                    n = c[i] = {
                                        exports: {}
                                    };
                                    s[i][0].call(n.exports, function(t) {
                                        return r(s[i][1][t] || t)
                                    }, n, n.exports, e, s, c, a)
                                }
                                return c[i].exports
                            }
                            for (var o = "function" == typeof require && require, t = 0; t < a.length; t++) r(a[t]);
                            return r
                        }({
                            1: [function(r, t, o) {
                                "use strict";

                                function h(t) {
                                    return null != t && "" !== t
                                }

                                function l(i) {
                                    return (Array.isArray(i) ? i.map(l) : i && "object" == typeof i ? Object.keys(i).filter(function(t) {
                                        return i[t]
                                    }) : [i]).filter(h).join(" ")
                                }
                                o.merge = function t(i, n) {
                                    if (1 === arguments.length) {
                                        for (var e = i[0], s = 1; s < i.length; s++) e = t(e, i[s]);
                                        return e
                                    }
                                    var c, a = i.class,
                                        r = n.class;
                                    for (c in (a || r) && (a = a || [], r = r || [], Array.isArray(a) || (a = [a]), Array.isArray(r) || (r = [r]), i.class = a.concat(r).filter(h)), n) "class" != c && (i[c] = n[c]);
                                    return i
                                }, o.joinClasses = l, o.cls = function(t, i) {
                                    for (var n = [], e = 0; e < t.length; e++) i && i[e] ? n.push(o.escape(l([t[e]]))) : n.push(l(t[e]));
                                    var s = l(n);
                                    return s.length ? ' class="' + s + '"' : ""
                                }, o.style = function(i) {
                                    return i && "object" == typeof i ? Object.keys(i).map(function(t) {
                                        return t + ":" + i[t]
                                    }).join(";") : i
                                }, o.attr = function(t, i, n, e) {
                                    return "boolean" == typeof(i = "style" === t ? o.style(i) : i) || null == i ? i ? " " + (e ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof i ? " " + t + "='" + JSON.stringify(i).replace(/'/g, "&apos;") + "'" : n ? " " + t + '="' + o.escape(i) + '"' : " " + t + '="' + i + '"'
                                }, o.attrs = function(t, i) {
                                    var n = [],
                                        e = Object.keys(t);
                                    if (e.length)
                                        for (var s = 0; s < e.length; ++s) {
                                            var c = e[s],
                                                a = t[c];
                                            "class" == c ? (a = l(a)) && n.push(" " + c + '="' + a + '"') : n.push(o.attr(c, a, !1, i))
                                        }
                                    return n.join("")
                                }, o.escape = function(t) {
                                    var i = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                                    return i === "" + t ? t : i
                                }, o.rethrow = function i(n, t, e, s) {
                                    if (!(n instanceof Error)) throw n;
                                    if (!("undefined" == typeof window && t || s)) throw n.message += " on line " + e, n;
                                    try {
                                        s = s || r("fs").readFileSync(t, "utf8")
                                    } catch (t) {
                                        i(n, null, e)
                                    }
                                    var c = s.split("\n"),
                                        a = Math.max(e - 3, 0),
                                        s = Math.min(c.length, e + 3),
                                        s = c.slice(a, s).map(function(t, i) {
                                            i = i + a + 1;
                                            return (i == e ? "  > " : "    ") + i + "| " + t
                                        }).join("\n");
                                    throw n.path = t, n.message = (t || "Jade") + ":" + e + "\n" + s + "\n\n" + n.message, n
                                }
                            }, {
                                fs: 2
                            }],
                            2: [function(t, i, n) {}, {}]
                        }, {}, [1])(1)
                    }, "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = s() : "function" == typeof __crisp_void_define && define.amd ? define([], s) : (void 0 !== r ? c = r : "undefined" != typeof global ? c = global : "undefined" != typeof self && (c = self), c.jade = s());
                    var u = Object.defineProperty,
                        f = Object.defineProperties,
                        d = Object.getOwnPropertyDescriptors,
                        v = Object.getOwnPropertySymbols,
                        p = Object.prototype.hasOwnProperty,
                        y = Object.prototype.propertyIsEnumerable,
                        m = function(t, i, n) {
                            return i in t ? u(t, i, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: n
                            }) : t[i] = n
                        },
                        ui = function(t, i) {
                            for (var n in i = i || {}) p.call(i, n) && m(t, n, i[n]);
                            if (v) {
                                var e, s = hi(v(i));
                                try {
                                    for (s.s(); !(e = s.n()).done;) n = e.value, y.call(i, n) && m(t, n, i[n])
                                } catch (t) {
                                    s.e(t)
                                } finally {
                                    s.f()
                                }
                            }
                            return t
                        },
                        fi = function(t, i) {
                            return f(t, d(i))
                        };
                    r.PetiteVue = function(t) {
                        function r(t) {
                            if (k(t)) {
                                for (var i = {}, n = 0; n < t.length; n++) {
                                    var e = t[n],
                                        s = (v(e) ? function(t) {
                                            var i = {};
                                            return t.split(a).forEach(function(t) {
                                                !t || 1 < (t = t.split(o)).length && (i[t[0].trim()] = t[1].trim())
                                            }), i
                                        } : r)(e);
                                    if (s)
                                        for (var c in s) i[c] = s[c]
                                }
                                return i
                            }
                            return v(t) || $(t) ? t : void 0
                        }
                        var a = /;(?![^(]*\))/g,
                            o = /:(.+)/;

                        function p(t, i) {
                            if (t === i) return !0;
                            var n = u(t),
                                e = u(i);
                            if (n || e) return !(!n || !e) && t.getTime() === i.getTime();
                            if (n = k(t), e = k(i), n || e) return !(!n || !e) && function(t, i) {
                                if (t.length !== i.length) return !1;
                                for (var n = !0, e = 0; n && e < t.length; e++) n = p(t[e], i[e]);
                                return n
                            }(t, i);
                            if (n = $(t), e = $(i), n || e) {
                                if (!n || !e) return !1;
                                if (Object.keys(t).length !== Object.keys(i).length) return !1;
                                for (var s in t) {
                                    var c = t.hasOwnProperty(s),
                                        a = i.hasOwnProperty(s);
                                    if (c && !a || !c && a || !p(t[s], i[s])) return !1
                                }
                            }
                            return String(t) === String(i)
                        }

                        function y(t, i) {
                            return t.findIndex(function(t) {
                                return p(t, i)
                            })
                        }

                        function h(t, i) {
                            return n.call(t, i)
                        }

                        function f(t) {
                            return "[object Map]" === _(t)
                        }

                        function l(t) {
                            return "symbol" == typeof t
                        }

                        function d(t) {
                            return v(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t
                        }

                        function i(i) {
                            var n = Object.create(null);
                            return function(t) {
                                return n[t] || (n[t] = i(t))
                            }
                        }

                        function m(t) {
                            var i = parseFloat(t);
                            return isNaN(i) ? t : i
                        }
                        var e = Object.assign,
                            n = Object.prototype.hasOwnProperty,
                            k = Array.isArray,
                            u = function(t) {
                                return t instanceof Date
                            },
                            v = function(t) {
                                return "string" == typeof t
                            },
                            $ = function(t) {
                                return null !== t && "object" == typeof t
                            },
                            s = Object.prototype.toString,
                            _ = function(t) {
                                return s.call(t)
                            },
                            c = /-(\w)/g,
                            g = i(function(t) {
                                return t.replace(c, function(t, i) {
                                    return i ? i.toUpperCase() : ""
                                })
                            }),
                            w = /\B([A-Z])/g,
                            b = i(function(t) {
                                return t.replace(w, "-$1").toLowerCase()
                            });

                        function x(t, i) {
                            i && i.active && i.effects.push(t)
                        }
                        var F, j = function(t) {
                                t = new Set(t);
                                return t.w = 0, t.n = 0, t
                            },
                            E = function(t) {
                                return 0 < (t.w & I)
                            },
                            z = function(t) {
                                return 0 < (t.n & I)
                            },
                            C = new WeakMap,
                            A = 0,
                            I = 1,
                            q = Symbol(""),
                            O = Symbol(""),
                            S = function() {
                                function t(t) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = 2 < arguments.length ? arguments[2] : void 0;
                                    this.fn = t, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, x(this, n)
                                }
                                var i = t.prototype;
                                return i.run = function() {
                                    if (!this.active) return this.fn();
                                    for (var t = F, i = B; t;) {
                                        if (t === this) return;
                                        t = t.parent
                                    }
                                    try {
                                        return this.parent = F, B = !0, I = 1 << ++A, (A <= 30 ? function(t) {
                                            var i = t.deps;
                                            if (i.length)
                                                for (var n = 0; n < i.length; n++) i[n].w |= I
                                        } : D)(F = this), this.fn()
                                    } finally {
                                        A <= 30 && function(t) {
                                            var i = t.deps;
                                            if (i.length) {
                                                for (var n = 0, e = 0; e < i.length; e++) {
                                                    var s = i[e];
                                                    E(s) && !z(s) ? s.delete(t) : i[n++] = s, s.w &= ~I, s.n &= ~I
                                                }
                                                i.length = n
                                            }
                                        }(this), I = 1 << --A, F = this.parent, B = i, this.parent = void 0
                                    }
                                }, i.stop = function() {
                                    this.active && (D(this), this.onStop && this.onStop(), this.active = !1)
                                }, t
                            }();

                        function D(t) {
                            var i = t.deps;
                            if (i.length) {
                                for (var n = 0; n < i.length; n++) i[n].delete(t);
                                i.length = 0
                            }
                        }

                        function R(t) {
                            t.effect.stop()
                        }
                        var B = !0,
                            N = [];

                        function M(t, i, n) {
                            var e;
                            B && F && ((e = C.get(t)) || C.set(t, e = new Map), (t = e.get(n)) || e.set(n, t = j()), n = t, t = !1, A <= 30 ? z(n) || (n.n |= I, t = !E(n)) : t = !n.has(F), t && (n.add(F), F.deps.push(n)))
                        }

                        function T(t, i, n, e, s, c) {
                            var a = C.get(t);
                            if (a) {
                                var r = [];
                                if ("clear" === i) r = [...a.values()];
                                else if ("length" === n && k(t)) a.forEach(function(t, i) {
                                    ("length" === i || e <= i) && r.push(t)
                                });
                                else switch (void 0 !== n && r.push(a.get(n)), i) {
                                    case "add":
                                        k(t) ? d(n) && r.push(a.get("length")) : (r.push(a.get(q)), f(t) && r.push(a.get(O)));
                                        break;
                                    case "delete":
                                        k(t) || (r.push(a.get(q)), f(t) && r.push(a.get(O)));
                                        break;
                                    case "set":
                                        f(t) && r.push(a.get(q))
                                }
                                if (1 === r.length) r[0] && U(r[0]);
                                else {
                                    var o, h = [],
                                        l = hi(r);
                                    try {
                                        for (l.s(); !(o = l.n()).done;) {
                                            var u = o.value;
                                            u && h.push(...u)
                                        }
                                    } catch (t) {
                                        l.e(t)
                                    } finally {
                                        l.f()
                                    }
                                    U(j(h))
                                }
                            }
                        }

                        function U(t, i) {
                            var n, e = hi(k(t) ? t : [...t]);
                            try {
                                for (e.s(); !(n = e.n()).done;) {
                                    var s = n.value;
                                    s === F && !s.allowRecurse || (s.scheduler ? s.scheduler() : s.run())
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                        var P, L = function(t, i) {
                                for (var n = Object.create(null), e = "__proto__,__v_isRef,__isVue".split(","), s = 0; s < e.length; s++) n[e[s]] = !0;
                                return function(t) {
                                    return !!n[t]
                                }
                            }(),
                            J = new Set(Object.getOwnPropertyNames(Symbol).map(function(t) {
                                return Symbol[t]
                            }).filter(l)),
                            V = K(),
                            W = K(!0),
                            H = (P = {}, ["includes", "indexOf", "lastIndexOf"].forEach(function(r) {
                                P[r] = function() {
                                    for (var t = st(this), i = 0, n = this.length; i < n; i++) M(t, 0, i + "");
                                    for (var e = arguments.length, s = new Array(e), c = 0; c < e; c++) s[c] = arguments[c];
                                    var a = t[r](...s);
                                    return -1 === a || !1 === a ? t[r](...s.map(st)) : a
                                }
                            }), ["push", "pop", "shift", "unshift", "splice"].forEach(function(c) {
                                P[c] = function() {
                                    N.push(B), B = !1;
                                    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                    var e = st(this)[c].apply(this, i),
                                        s = N.pop();
                                    return B = void 0 === s || s, e
                                }
                            }), P);

                        function K() {
                            var s = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                            return function(t, i, n) {
                                if ("__v_isReactive" === i) return !s;
                                if ("__v_isReadonly" === i) return s;
                                if ("__v_isShallow" === i) return c;
                                if ("__v_raw" === i && n === (s ? c ? tt : Q : c ? X : Z).get(t)) return t;
                                var e = k(t);
                                if (!s && e && h(H, i)) return Reflect.get(H, i, n);
                                n = Reflect.get(t, i, n);
                                return (l(i) ? J.has(i) : L(i)) || (s || M(t, 0, i), c) ? n : ct(n) ? e && d(i) ? n : n.value : $(n) ? s ? nt(n, !0, Y, null, Q) : it(n) : n
                            }
                        }
                        var G = {
                                get: V,
                                set: function() {
                                    var r = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                    return function(t, i, n, e) {
                                        var s = t[i];
                                        if (et(s) && ct(s) && !ct(n)) return !1;
                                        if (!r && !et(n) && (n && n.__v_isShallow || (n = st(n), s = st(s)), !k(t) && ct(s) && !ct(n))) return s.value = n, !0;
                                        var c = k(t) && d(i) ? Number(i) < t.length : h(t, i),
                                            a = Reflect.set(t, i, n, e);
                                        return t === st(e) && (c ? (c = n, s = s, Object.is(c, s) || T(t, "set", i, n)) : T(t, "add", i, n)), a
                                    }
                                }(),
                                deleteProperty: function(t, i) {
                                    var n = h(t, i);
                                    t[i];
                                    var e = Reflect.deleteProperty(t, i);
                                    return e && n && T(t, "delete", i, void 0), e
                                },
                                has: function(t, i) {
                                    var n = Reflect.has(t, i);
                                    return l(i) && J.has(i) || M(t, 0, i), n
                                },
                                ownKeys: function(t) {
                                    return M(t, 0, k(t) ? "length" : q), Reflect.ownKeys(t)
                                }
                            },
                            Y = {
                                get: W,
                                set: function(t, i) {
                                    return !0
                                },
                                deleteProperty: function(t, i) {
                                    return !0
                                }
                            },
                            Z = new WeakMap,
                            X = new WeakMap,
                            Q = new WeakMap,
                            tt = new WeakMap;

                        function it(t) {
                            return et(t) ? t : nt(t, !1, G, null, Z)
                        }

                        function nt(t, i, n, e, s) {
                            if (!$(t) || t.__v_raw && (!i || !t.__v_isReactive)) return t;
                            i = s.get(t);
                            if (i) return i;
                            var c, i = (c = t).l || !Object.isExtensible(c) ? 0 : function(t) {
                                switch (_(c).slice(8, -1)) {
                                    case "Object":
                                    case "Array":
                                        return 1;
                                    case "Map":
                                    case "Set":
                                    case "WeakMap":
                                    case "WeakSet":
                                        return 2;
                                    default:
                                        return 0
                                }
                            }();
                            if (0 === i) return t;
                            n = new Proxy(t, 2 === i ? e : n);
                            return s.set(t, n), n
                        }

                        function et(t) {
                            return t && t.__v_isReadonly
                        }

                        function st(t) {
                            var i = t && t.__v_raw;
                            return i ? st(i) : t
                        }

                        function ct(t) {
                            return t && !0 === t.__v_isRef
                        }

                        function at(t) {
                            return wt.then(t)
                        }

                        function rt() {
                            for (var t = 0, i = gt; t < i.length; t++)(0, i[t])();
                            gt.length = 0, _t = !1
                        }

                        function ot(t) {
                            var e, s = t.el,
                                c = t.get,
                                i = t.effect,
                                a = t.arg,
                                r = t.modifiers;
                            "class" === a && (s.u = s.className), i(function() {
                                var t = c();
                                if (a) null != r && r.camel && (a = g(a)), ht(s, a, t, e);
                                else {
                                    for (var i in t) ht(s, i, t[i], e && e[i]);
                                    for (var n in e) t && n in t || ht(s, n, null)
                                }
                                e = t
                            })
                        }

                        function ht(t, i, n, e) {
                            if ("class" === i) t.setAttribute("class", function t(i) {
                                var n = "";
                                if (v(i)) n = i;
                                else if (k(i))
                                    for (var e = 0; e < i.length; e++) {
                                        var s = t(i[e]);
                                        s && (n += s + " ")
                                    } else if ($(i))
                                        for (var c in i) i[c] && (n += c + " ");
                                return n.trim()
                            }(t.u ? [t.u, n] : n) || "");
                            else if ("style" === i) {
                                n = r(n);
                                var s = t.style;
                                if (n)
                                    if (v(n)) n !== e && (s.cssText = n);
                                    else {
                                        for (var c in n) xt(s, c, n[c]);
                                        if (e && !v(e))
                                            for (var a in e) null == n[a] && xt(s, a, "")
                                    }
                                else t.removeAttribute("style")
                            } else t instanceof SVGElement || !(i in t) || kt.test(i) ? "true-value" === i ? t._trueValue = n : "false-value" === i ? t._falseValue = n : null != n ? t.setAttribute(i, n) : t.removeAttribute(i) : (t[i] = n, "value" === i && (t._value = n))
                        }

                        function lt(t, i, n, e) {
                            t.addEventListener(i, n, e)
                        }

                        function ut(t) {
                            var i = t.el,
                                n = t.get,
                                e = t.exp,
                                s = t.arg,
                                c = t.ctx,
                                a = t.modifiers;
                            if (s) {
                                var r, o = function(t) {
                                    jt.test(e) ? n("".concat(e))(t) : (c.scope.$event = t, n("".concat(e)), delete c.scope.$event)
                                };
                                if ("vue:mounted" !== s) {
                                    if ("vue:unmounted" === s) return function() {
                                        return o()
                                    };
                                    a && ("click" === s && (a.right && (s = "contextmenu"), a.middle && (s = "mouseup")), r = o, o = function(t) {
                                        if (!("key" in t) || b(t.key) in a) {
                                            for (var i in a) {
                                                i = zt[i];
                                                if (i && i(t, a)) return
                                            }
                                            return r(t)
                                        }
                                    }), lt(i, s, o, a)
                                } else at(o)
                            }
                        }

                        function ft(t) {
                            return null == t ? "" : $(t) ? JSON.stringify(t, null, 2) : String(t)
                        }

                        function dt(t) {
                            return "_value" in t ? t._value : t.value
                        }

                        function vt(t, i) {
                            var n = i ? "_trueValue" : "_falseValue";
                            return n in t ? t[n] : i
                        }

                        function pt(t) {
                            t.target.composing = !0
                        }

                        function yt(t) {
                            var i = t.target;
                            i.composing && (i.composing = !1, t = i, (i = document.createEvent("HTMLEvents")).initEvent("input", !0, !0), t.dispatchEvent(i))
                        }

                        function mt() {
                            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                            throw console.error(i), "ERROR"
                        }
                        Promise.resolve();
                        var _t = !1,
                            gt = [],
                            wt = Promise.resolve(),
                            bt = function(t) {
                                gt.includes(t) || gt.push(t), _t || (_t = !0, at(rt))
                            },
                            kt = /^(spellcheck|draggable|form|list|type)$/,
                            $t = /\s*!important$/,
                            xt = function i(n, e, t) {
                                k(t) ? t.forEach(function(t) {
                                    return i(n, e, t)
                                }) : e.startsWith("--") ? n.setProperty(e, t) : $t.test(t) ? n.setProperty(b(e), t.replace($t, ""), "important") : n[e] = t
                            },
                            Ft = function(t, i) {
                                var n = t.getAttribute(i);
                                return null != n && t.removeAttribute(i), n
                            },
                            jt = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                            Et = ["ctrl", "shift", "alt", "meta"],
                            zt = {
                                stop: function(t) {
                                    return t.stopPropagation()
                                },
                                prevent: function(t) {
                                    return t.preventDefault()
                                },
                                self: function(t) {
                                    return t.target !== t.currentTarget
                                },
                                ctrl: function(t) {
                                    return !t.ctrlKey
                                },
                                shift: function(t) {
                                    return !t.shiftKey
                                },
                                alt: function(t) {
                                    return !t.altKey
                                },
                                meta: function(t) {
                                    return !t.metaKey
                                },
                                left: function(t) {
                                    return "button" in t && 0 !== t.button
                                },
                                middle: function(t) {
                                    return "button" in t && 1 !== t.button
                                },
                                right: function(t) {
                                    return "button" in t && 2 !== t.button
                                },
                                exact: function(i, n) {
                                    return Et.some(function(t) {
                                        return i["".concat(t, "Key")] && !n[t]
                                    })
                                }
                            },
                            Ct = function(t) {
                                var i = t.el,
                                    n = t.get;
                                (0, t.effect)(function() {
                                    i.textContent = ft(n())
                                })
                            };
                        ({}).constructor.prototype.valueOf;
                        var At = {
                                true: !0,
                                false: !1,
                                null: null,
                                undefined: void 0
                            },
                            It = {};

                        function qt() {}
                        "+ - * / % === !== == != < > <= >= && || ! =".split(" ").forEach(function(t) {
                            It[t] = !0
                        });
                        var Ot = {
                            n: "\n",
                            f: "\f",
                            r: "\r",
                            t: "\t",
                            v: "\v",
                            "'": "'",
                            '"': '"'
                        };

                        function St(t, i) {
                            this.lexer = t, this.options = i
                        }

                        function Dt(t) {
                            return t.type === St.Identifier || t.type === St.MemberExpression
                        }

                        function Rt() {}

                        function Bt(t, i) {
                            this.ast = new St(t, i), this.astCompiler = new Rt
                        }

                        function Nt(t, i, n) {
                            try {
                                return Lt(i)(t)
                            } catch (t) {
                                console.error(t)
                            }
                        }

                        function Mt(t, i) {
                            var n = t.nodeType;
                            if (1 === n) {
                                var e, s = t;
                                if (!s.hasAttribute("v-pre")) {
                                    if (Ft(s, "v-cloak"), e = Ft(s, "v-if")) return function(t, i, e) {
                                        var s = t.parentElement,
                                            c = new Comment("v-if");
                                        s.insertBefore(c, t);
                                        for (var n, a, r = [{
                                                exp: i,
                                                el: t
                                            }];
                                            (n = t.nextElementSibling) && (a = null, "" === Ft(n, "v-else") || (a = Ft(n, "v-else-if")));) s.removeChild(n), r.push({
                                            exp: a,
                                            el: n
                                        });
                                        i = t.nextSibling;

                                        function o() {
                                            h && (s.insertBefore(c, h.el), h.remove(), h = void 0)
                                        }
                                        s.removeChild(t);
                                        var h, l = -1;
                                        return e.effect(function() {
                                            for (var t = 0; t < r.length; t++) {
                                                var i = r[t],
                                                    n = i.exp,
                                                    i = i.el;
                                                if (!n || Jt(e.scope, n)) return void(t !== l && (o(), (h = new ri(i, e)).insert(s, c), s.removeChild(c), l = t))
                                            }
                                            l = -1, o()
                                        }), i
                                    }(s, e, i);
                                    if (e = Ft(s, "v-for")) return Yt(s, e, i);
                                    !(e = Ft(s, "v-scope")) && "" !== e || (c = e ? Jt(i.scope, e) : {}, i = ci(i, c), c.$template && si(s, c.$template));
                                    var c = null != Ft(s, "v-once");
                                    c && (ti = !0), (e = Ft(s, "ref")) && ei(s, Zt, '"'.concat(e, '"'), i), ii(s, i);
                                    for (var a = [], r = 0, o = [...s.attributes]; r < o.length; r++) {
                                        var h = o[r],
                                            l = h.name,
                                            h = h.value;
                                        Xt.test(l) && "v-cloak" !== l && ("v-model" === l ? a.unshift([l, h]) : "@" === l[0] || /^v-on\b/.test(l) ? a.push([l, h]) : ni(s, l, h, i))
                                    }
                                    for (var u = 0, f = a; u < f.length; u++) {
                                        var d = oi(f[u], 2),
                                            v = d[0],
                                            d = d[1];
                                        ni(s, v, d, i)
                                    }
                                    c && (ti = !1)
                                }
                            } else if (3 === n) {
                                var p = t.data;
                                if (p.includes(i.delimiters[0])) {
                                    for (var y, m = [], _ = 0; y = i.delimitersRE.exec(p);) {
                                        var g = p.slice(_, y.index);
                                        g && m.push(JSON.stringify(g)), m.push("$s(".concat(y[1], ")")), _ = y.index + y[0].length
                                    }
                                    _ < p.length && m.push(JSON.stringify(p.slice(_))), ei(t, Ct, m.join("+"), i)
                                }
                            } else 11 === n && ii(t, i)
                        }

                        function Tt(t) {
                            var n = fi(ui({
                                delimiters: ["{{", "}}"],
                                delimitersRE: /\{\{([^]+?)\}\}/g
                            }, t), {
                                scope: t ? t.scope : it({}),
                                dirs: t ? t.dirs : {},
                                effects: [],
                                blocks: [],
                                cleanups: [],
                                effect: function(t) {
                                    if (ti) return bt(t), t;
                                    var i = function(t, i) {
                                        t.effect && (t = t.effect.fn);
                                        t = new S(t);
                                        e(t, i), i.scope && x(t, i.scope), i.lazy || t.run();
                                        i = t.run.bind(t);
                                        return i.effect = t, i
                                    }(t, {
                                        scheduler: function() {
                                            return bt(i)
                                        }
                                    });
                                    return n.effects.push(i), i
                                }
                            });
                            return n
                        }

                        function Ut(t) {
                            return t.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&")
                        }

                        function Pt(t) {
                            var i, n, e = Tt();
                            return t && (e.scope = it(t), ai(e.scope), t.$delimiters) && (t = (i = oi(e.delimiters = t.$delimiters, 2))[0], i = i[1], e.delimitersRE = new RegExp(Ut(t) + "([^]+?)" + Ut(i), "g")), e.scope.$s = ft, e.scope.$nextTick = at, e.scope.$refs = Object.create(null), {
                                directive: function(t, i) {
                                    return i ? (e.dirs[t] = i, this) : e.dirs[t]
                                },
                                mount: function(t) {
                                    if ("string" != typeof t || (t = document.querySelector(t))) {
                                        var i = (t = t || document.documentElement).hasAttribute("v-scope") ? [t] : [...t.querySelectorAll("[v-scope]")].filter(function(t) {
                                            return !t.matches("[v-scope] [v-scope]")
                                        });
                                        return i.length || (i = [t]), n = i.map(function(t) {
                                            return new ri(t, e, !0)
                                        }), this
                                    }
                                },
                                unmount: function() {
                                    n.forEach(function(t) {
                                        return t.teardown()
                                    })
                                }
                            }
                        }
                        qt.prototype = {
                            constructor: qt,
                            lex: function(t) {
                                for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                                    var i, n, e, s, c, a = this.text.charAt(this.index);
                                    '"' === a || "'" === a ? this.readString(a) : this.isNumber(a) || "." === a && this.isNumber(this.peek()) ? this.readNumber() : this.isIdentifierStart(this.peekMultichar()) ? this.readIdent() : this.is(a, "(){}[].,;:?") ? (this.tokens.push({
                                        index: this.index,
                                        text: a
                                    }), this.index++) : this.isWhitespace(a) ? this.index++ : (n = (i = a + this.peek()) + this.peek(2), e = It[a], s = It[i], c = It[n], e || s || c ? (this.tokens.push({
                                        index: this.index,
                                        text: a = c ? n : s ? i : a,
                                        operator: !0
                                    }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1))
                                }
                                return this.tokens
                            },
                            is: function(t, i) {
                                return -1 !== i.indexOf(t)
                            },
                            peek: function(t) {
                                t = t || 1;
                                return this.index + t < this.text.length && this.text.charAt(this.index + t)
                            },
                            isNumber: function(t) {
                                return "0" <= t && t <= "9" && "string" == typeof t
                            },
                            isWhitespace: function(t) {
                                return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
                            },
                            isIdentifierStart: function(t) {
                                return this.isValidIdentifierStart(t)
                            },
                            isValidIdentifierStart: function(t) {
                                return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
                            },
                            isIdentifierContinue: function(t) {
                                return this.isValidIdentifierContinue(t)
                            },
                            isValidIdentifierContinue: function(t, i) {
                                return this.isValidIdentifierStart(t, i) || this.isNumber(t)
                            },
                            codePointAt: function(t) {
                                return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
                            },
                            peekMultichar: function() {
                                var t = this.text.charAt(this.index),
                                    i = this.peek();
                                if (!i) return t;
                                var n = t.charCodeAt(0),
                                    e = i.charCodeAt(0);
                                return 55296 <= n && n <= 56319 && 56320 <= e && e <= 57343 ? t + i : t
                            },
                            isExpOperator: function(t) {
                                return "-" === t || "+" === t || this.isNumber(t)
                            },
                            throwError: function(t, i, n) {
                                throw n = n || this.index, mt("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, void 0 !== i ? "s " + i + "-" + this.index + " [" + this.text.substring(i, n) + "]" : " " + n, this.text)
                            },
                            readNumber: function() {
                                for (var t = "", i = this.index; this.index < this.text.length;) {
                                    var n = this.text.charAt(this.index).toLowerCase();
                                    if ("." === n || this.isNumber(n)) t += n;
                                    else {
                                        var e = this.peek();
                                        if ("e" === n && this.isExpOperator(e)) t += n;
                                        else if (this.isExpOperator(n) && e && this.isNumber(e) && "e" === t.charAt(t.length - 1)) t += n;
                                        else {
                                            if (!this.isExpOperator(n) || e && this.isNumber(e) || "e" !== t.charAt(t.length - 1)) break;
                                            this.throwError("Invalid exponent")
                                        }
                                    }
                                    this.index++
                                }
                                this.tokens.push({
                                    index: i,
                                    text: t,
                                    constant: !0,
                                    value: Number(t)
                                })
                            },
                            readIdent: function() {
                                var t = this.index;
                                for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                                    var i = this.peekMultichar();
                                    if (!this.isIdentifierContinue(i)) break;
                                    this.index += i.length
                                }
                                this.tokens.push({
                                    index: t,
                                    text: this.text.slice(t, this.index),
                                    identifier: !0
                                })
                            },
                            readString: function(t) {
                                var i = this.index;
                                this.index++;
                                for (var n = "", e = t, s = !1; this.index < this.text.length;) {
                                    var c, a = this.text.charAt(this.index);
                                    if (e += a, s) "u" === a ? ((c = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + c + "]"), this.index += 4, n += String.fromCharCode(parseInt(c, 16))) : n += Ot[a] || a, s = !1;
                                    else if ("\\" === a) s = !0;
                                    else {
                                        if (a === t) return this.index++, void this.tokens.push({
                                            index: i,
                                            text: e,
                                            constant: !0,
                                            value: n
                                        });
                                        n += a
                                    }
                                    this.index++
                                }
                                this.throwError("Unterminated quote", i)
                            }
                        }, St.Program = "Program", St.ExpressionStatement = "ExpressionStatement", St.AssignmentExpression = "AssignmentExpression", St.ConditionalExpression = "ConditionalExpression", St.LogicalExpression = "LogicalExpression", St.BinaryExpression = "BinaryExpression", St.UnaryExpression = "UnaryExpression", St.CallExpression = "CallExpression", St.MemberExpression = "MemberExpression", St.Identifier = "Identifier", St.Literal = "Literal", St.ArrayExpression = "ArrayExpression", St.Property = "Property", St.ObjectExpression = "ObjectExpression", St.ThisExpression = "ThisExpression", St.LocalsExpression = "LocalsExpression", St.NGValueParameter = "NGValueParameter", St.prototype = {
                            ast: function(t) {
                                this.text = t, this.tokens = this.lexer.lex(t);
                                t = this.program();
                                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
                            },
                            program: function() {
                                for (var t = [];;)
                                    if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                                        type: St.Program,
                                        body: t
                                    }
                            },
                            expressionStatement: function() {
                                return {
                                    type: St.ExpressionStatement,
                                    expression: this.expression()
                                }
                            },
                            expression: function() {
                                return this.assignment()
                            },
                            assignment: function() {
                                var t = this.ternary();
                                if (this.expect("=")) {
                                    if (!Dt(t)) throw mt("lval", "Trying to assign a value to a non l-value");
                                    t = {
                                        type: St.AssignmentExpression,
                                        left: t,
                                        right: this.assignment(),
                                        operator: "="
                                    }
                                }
                                return t
                            },
                            ternary: function() {
                                var t, i, n = this.logicalOR();
                                return this.expect("?") && (t = this.expression(), this.consume(":")) ? (i = this.expression(), {
                                    type: St.ConditionalExpression,
                                    test: n,
                                    alternate: t,
                                    consequent: i
                                }) : n
                            },
                            logicalOR: function() {
                                for (var t = this.logicalAND(); this.expect("||");) t = {
                                    type: St.LogicalExpression,
                                    operator: "||",
                                    left: t,
                                    right: this.logicalAND()
                                };
                                return t
                            },
                            logicalAND: function() {
                                for (var t = this.equality(); this.expect("&&");) t = {
                                    type: St.LogicalExpression,
                                    operator: "&&",
                                    left: t,
                                    right: this.equality()
                                };
                                return t
                            },
                            equality: function() {
                                for (var t, i = this.relational(); t = this.expect("==", "!=", "===", "!==");) i = {
                                    type: St.BinaryExpression,
                                    operator: t.text,
                                    left: i,
                                    right: this.relational()
                                };
                                return i
                            },
                            relational: function() {
                                for (var t, i = this.additive(); t = this.expect("<", ">", "<=", ">=");) i = {
                                    type: St.BinaryExpression,
                                    operator: t.text,
                                    left: i,
                                    right: this.additive()
                                };
                                return i
                            },
                            additive: function() {
                                for (var t, i = this.multiplicative(); t = this.expect("+", "-");) i = {
                                    type: St.BinaryExpression,
                                    operator: t.text,
                                    left: i,
                                    right: this.multiplicative()
                                };
                                return i
                            },
                            multiplicative: function() {
                                for (var t, i = this.unary(); t = this.expect("*", "/", "%");) i = {
                                    type: St.BinaryExpression,
                                    operator: t.text,
                                    left: i,
                                    right: this.unary()
                                };
                                return i
                            },
                            unary: function() {
                                var t;
                                return (t = this.expect("+", "-", "!")) ? {
                                    type: St.UnaryExpression,
                                    operator: t.text,
                                    prefix: !0,
                                    argument: this.unary()
                                } : this.primary()
                            },
                            primary: function() {
                                var t, i;
                                for (this.expect("(") ? (t = this.expression(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = Object.assign({}, this.selfReferential[this.consume().text]) : At.hasOwnProperty(this.peek().text) ? t = {
                                        type: St.Literal,
                                        value: At[this.consume().text]
                                    } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek()); i = this.expect("(", "[", ".");) "(" === i.text ? (t = {
                                    type: St.CallExpression,
                                    callee: t,
                                    arguments: this.parseArguments()
                                }, this.consume(")")) : "[" === i.text ? (t = {
                                    type: St.MemberExpression,
                                    object: t,
                                    property: this.expression(),
                                    computed: !0
                                }, this.consume("]")) : "." === i.text ? t = {
                                    type: St.MemberExpression,
                                    object: t,
                                    property: this.identifier(),
                                    computed: !1
                                } : this.throwError("IMPOSSIBLE");
                                return t
                            },
                            parseArguments: function() {
                                var t = [];
                                if (")" !== this.peekToken().text)
                                    for (; t.push(this.expression()), this.expect(","););
                                return t
                            },
                            identifier: function() {
                                var t = this.consume();
                                return t.identifier || this.throwError("is not a valid identifier", t), {
                                    type: St.Identifier,
                                    name: t.text
                                }
                            },
                            constant: function() {
                                return {
                                    type: St.Literal,
                                    value: this.consume().value
                                }
                            },
                            arrayDeclaration: function() {
                                var t = [];
                                if ("]" !== this.peekToken().text)
                                    for (; !this.peek("]") && (t.push(this.expression()), this.expect(",")););
                                return this.consume("]"), {
                                    type: St.ArrayExpression,
                                    elements: t
                                }
                            },
                            object: function() {
                                var t, i = [];
                                if ("}" !== this.peekToken().text)
                                    for (; !this.peek("}") && (t = {
                                            type: St.Property,
                                            kind: "init"
                                        }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), i.push(t), this.expect(",")););
                                return this.consume("}"), {
                                    type: St.ObjectExpression,
                                    properties: i
                                }
                            },
                            throwError: function(t, i) {
                                throw mt("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", i.text, t, i.index + 1, this.text, this.text.substring(i.index))
                            },
                            consume: function(t) {
                                if (0 === this.tokens.length) throw mt("ueoe", "Unexpected end of expression: {0}", this.text);
                                var i = this.expect(t);
                                return i || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), i
                            },
                            peekToken: function() {
                                if (0 === this.tokens.length) throw mt("ueoe", "Unexpected end of expression: {0}", this.text);
                                return this.tokens[0]
                            },
                            peek: function(t, i, n, e) {
                                return this.peekAhead(0, t, i, n, e)
                            },
                            peekAhead: function(t, i, n, e, s) {
                                if (this.tokens.length > t) {
                                    var c = this.tokens[t],
                                        t = c.text;
                                    if (t === i || t === n || t === e || t === s || !i && !n && !e && !s) return c
                                }
                                return !1
                            },
                            expect: function(t, i, n, e) {
                                e = this.peek(t, i, n, e);
                                return !!e && (this.tokens.shift(), e)
                            },
                            selfReferential: {
                                this: {
                                    type: St.ThisExpression
                                },
                                $locals: {
                                    type: St.LocalsExpression
                                }
                            }
                        }, Rt.prototype = {
                            compile: function(i) {
                                var e, s = this;
                                (function i(t, n) {
                                    var e, s, c = t.isPure = function(t, i) {
                                        switch (t.type) {
                                            case St.MemberExpression:
                                                if (t.computed) return !1;
                                                break;
                                            case St.UnaryExpression:
                                                return 1;
                                            case St.BinaryExpression:
                                                return "+" !== t.operator && 1;
                                            case St.CallExpression:
                                                return !1
                                        }
                                        return void 0 === i ? 2 : i
                                    }(t, n);
                                    switch (t.type) {
                                        case St.Program:
                                            e = !0, t.body.forEach(function(t) {
                                                i(t.expression, c), e = e && t.expression.constant
                                            }), t.constant = e;
                                            break;
                                        case St.Literal:
                                            t.constant = !0, t.toWatch = [];
                                            break;
                                        case St.UnaryExpression:
                                            i(t.argument, c), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                                            break;
                                        case St.BinaryExpression:
                                            i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                                            break;
                                        case St.LogicalExpression:
                                            i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                                            break;
                                        case St.ConditionalExpression:
                                            i(t.test, c), i(t.alternate, c), i(t.consequent, c), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                                            break;
                                        case St.Identifier:
                                            t.constant = !1, t.toWatch = [t];
                                            break;
                                        case St.MemberExpression:
                                            i(t.object, c), t.computed && i(t.property, c), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                                            break;
                                        case St.CallExpression:
                                            e = !1, s = [], t.arguments.forEach(function(t) {
                                                i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                            }), t.constant = e, t.toWatch = [t];
                                            break;
                                        case St.AssignmentExpression:
                                            i(t.left, c), i(t.right, c), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                                            break;
                                        case St.ArrayExpression:
                                            e = !0, s = [], t.elements.forEach(function(t) {
                                                i(t, c), e = e && t.constant, s.push.apply(s, t.toWatch)
                                            }), t.constant = e, t.toWatch = s;
                                            break;
                                        case St.ObjectExpression:
                                            e = !0, s = [], t.properties.forEach(function(t) {
                                                i(t.value, c), e = e && t.value.constant, s.push.apply(s, t.value.toWatch), t.computed && (i(t.key, !1), e = e && t.key.constant, s.push.apply(s, t.key.toWatch))
                                            }), t.constant = e, t.toWatch = s;
                                            break;
                                        case St.ThisExpression:
                                        case St.LocalsExpression:
                                            t.constant = !1, t.toWatch = []
                                    }
                                })(i), (t = function(t) {
                                    if (1 === i.body.length && Dt(i.body[0].expression)) return {
                                        type: St.AssignmentExpression,
                                        left: i.body[0].expression,
                                        right: {
                                            type: St.NGValueParameter
                                        },
                                        operator: "="
                                    }
                                }()) && (e = this.recurse(t));
                                var c, t = function(t) {
                                    if (1 === t.length) {
                                        var i = t[0].expression,
                                            t = i.toWatch;
                                        return 1 !== t.length || t[0] !== i ? t : void 0
                                    }
                                }(i.body);
                                t && (c = [], t.forEach(function(t, i) {
                                    var n = s.recurse(t);
                                    n.isPure = t.isPure, t.input = n, c.push(n), t.watchId = i
                                }));
                                var a = [];
                                i.body.forEach(function(t) {
                                    a.push(s.recurse(t.expression))
                                });
                                t = 0 === i.body.length ? noop : 1 === i.body.length ? a[0] : function(i, n) {
                                    var e;
                                    return a.forEach(function(t) {
                                        e = t(i, n)
                                    }), e
                                };
                                return e && (t.assign = function(t, i, n) {
                                    return e(t, n, i)
                                }), c && (t.inputs = c), t
                            },
                            recurse: function(t, o, i) {
                                var c, h, l, n = this;
                                if (t.input) return this.inputs(t.input, t.watchId);
                                switch (t.type) {
                                    case St.Literal:
                                        return this.value(t.value, o);
                                    case St.UnaryExpression:
                                        return h = this.recurse(t.argument), this["unary" + t.operator](h, o);
                                    case St.BinaryExpression:
                                    case St.LogicalExpression:
                                        return c = this.recurse(t.left), h = this.recurse(t.right), this["binary" + t.operator](c, h, o);
                                    case St.ConditionalExpression:
                                        return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), o);
                                    case St.Identifier:
                                        return n.identifier(t.name, o, i);
                                    case St.MemberExpression:
                                        return c = this.recurse(t.object, !1, !!i), t.computed || (h = t.property.name), t.computed && (h = this.recurse(t.property)), t.computed ? this.computedMember(c, h, o, i) : this.nonComputedMember(c, h, o, i);
                                    case St.CallExpression:
                                        return l = [], t.arguments.forEach(function(t) {
                                                l.push(n.recurse(t))
                                            }), h = this.recurse(t.callee, !0),
                                            function(t, i, n, e) {
                                                var s, c = h(t, i, n, e);
                                                if (null != c.value) {
                                                    for (var a = [], r = 0; r < l.length; ++r) a.push(l[r](t, i, n, e));
                                                    s = c.value.apply(c.context, a)
                                                }
                                                return o ? {
                                                    value: s
                                                } : s
                                            };
                                    case St.AssignmentExpression:
                                        return c = this.recurse(t.left, !0, 1), h = this.recurse(t.right),
                                            function(t, i, n, e) {
                                                var s = c(t, i, n, e),
                                                    e = h(t, i, n, e);
                                                return s.context[s.name] = e, o ? {
                                                    value: e
                                                } : e
                                            };
                                    case St.ArrayExpression:
                                        return l = [], t.elements.forEach(function(t) {
                                                l.push(n.recurse(t))
                                            }),
                                            function(t, i, n, e) {
                                                for (var s = [], c = 0; c < l.length; ++c) s.push(l[c](t, i, n, e));
                                                return o ? {
                                                    value: s
                                                } : s
                                            };
                                    case St.ObjectExpression:
                                        return l = [], t.properties.forEach(function(t) {
                                                t.computed ? l.push({
                                                    key: n.recurse(t.key),
                                                    computed: !0,
                                                    value: n.recurse(t.value)
                                                }) : l.push({
                                                    key: t.key.type === St.Identifier ? t.key.name : "" + t.key.value,
                                                    computed: !1,
                                                    value: n.recurse(t.value)
                                                })
                                            }),
                                            function(t, i, n, e) {
                                                for (var s = {}, c = 0; c < l.length; ++c) l[c].computed ? s[l[c].key(t, i, n, e)] = l[c].value(t, i, n, e) : s[l[c].key] = l[c].value(t, i, n, e);
                                                return o ? {
                                                    value: s
                                                } : s
                                            };
                                    case St.ThisExpression:
                                        return function(t) {
                                            return o ? {
                                                value: t
                                            } : t
                                        };
                                    case St.LocalsExpression:
                                        return function(t, i) {
                                            return o ? {
                                                value: i
                                            } : i
                                        };
                                    case St.NGValueParameter:
                                        return function(t, i, n) {
                                            return o ? {
                                                value: n
                                            } : n
                                        }
                                }
                            },
                            "unary+": function(s, c) {
                                return function(t, i, n, e) {
                                    e = void 0 !== (e = s(t, i, n, e)) ? +e : 0;
                                    return c ? {
                                        value: e
                                    } : e
                                }
                            },
                            "unary-": function(s, c) {
                                return function(t, i, n, e) {
                                    e = void 0 !== (e = s(t, i, n, e)) ? -e : -0;
                                    return c ? {
                                        value: e
                                    } : e
                                }
                            },
                            "unary!": function(s, c) {
                                return function(t, i, n, e) {
                                    e = !s(t, i, n, e);
                                    return c ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary+": function(c, a, r) {
                                return function(t, i, n, e) {
                                    var s, e = (s = c(t, i, n, e), e = a(t, i, n, e), void 0 === s ? e : void 0 === e ? s : s + e);
                                    return r ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary-": function(c, a, r) {
                                return function(t, i, n, e) {
                                    var s = c(t, i, n, e),
                                        e = a(t, i, n, e),
                                        e = (void 0 !== s ? s : 0) - (void 0 !== e ? e : 0);
                                    return r ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary*": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) * c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary/": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) / c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary%": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) % c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary===": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) === c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary!==": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) !== c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary==": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) == c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary!=": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) != c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary<": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) < c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary>": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) > c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary<=": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) <= c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary>=": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) >= c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary&&": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) && c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "binary||": function(s, c, a) {
                                return function(t, i, n, e) {
                                    e = s(t, i, n, e) || c(t, i, n, e);
                                    return a ? {
                                        value: e
                                    } : e
                                }
                            },
                            "ternary?:": function(s, c, a, r) {
                                return function(t, i, n, e) {
                                    e = (s(t, i, n, e) ? c : a)(t, i, n, e);
                                    return r ? {
                                        value: e
                                    } : e
                                }
                            },
                            value: function(t, i) {
                                return function() {
                                    return i ? {
                                        context: void 0,
                                        name: void 0,
                                        value: t
                                    } : t
                                }
                            },
                            identifier: function(s, c, a) {
                                return function(t, i, n, e) {
                                    i = i && s in i ? i : t;
                                    a && 1 !== a && i && null == i[s] && (i[s] = {});
                                    t = i ? i[s] : void 0;
                                    return c ? {
                                        context: i,
                                        name: s,
                                        value: t
                                    } : t
                                }
                            },
                            computedMember: function(r, o, h, l) {
                                return function(t, i, n, e) {
                                    var s, c, a = r(t, i, n, e);
                                    return null != a && (s = o(t, i, n, e), s += "", l && 1 !== l && a && !a[s] && (a[s] = {}), c = a[s]), h ? {
                                        context: a,
                                        name: s,
                                        value: c
                                    } : c
                                }
                            },
                            nonComputedMember: function(s, c, a, r) {
                                return function(t, i, n, e) {
                                    n = s(t, i, n, e);
                                    r && 1 !== r && n && null == n[c] && (n[c] = {});
                                    e = null != n ? n[c] : void 0;
                                    return a ? {
                                        context: n,
                                        name: c,
                                        value: e
                                    } : e
                                }
                            },
                            inputs: function(s, c) {
                                return function(t, i, n, e) {
                                    return e ? e[c] : s(t, i, n)
                                }
                            }
                        };
                        var Lt = new function() {
                                var e = {};
                                return function(t, i) {
                                    var n;
                                    return t = t.trim(), (n = e[t]) ? n : new Bt(new qt).parse(t)
                                }
                            },
                            Jt = function(t, i, n) {
                                return Nt(t, i)
                            },
                            Vt = {
                                bind: ot,
                                on: ut,
                                show: function(t) {
                                    var i = t.el,
                                        n = t.get,
                                        t = t.effect,
                                        e = i.style.display;
                                    t(function() {
                                        i.style.display = n() ? e : "none"
                                    })
                                },
                                text: Ct,
                                html: function(t) {
                                    var i = t.el,
                                        n = t.get;
                                    (0, t.effect)(function() {
                                        i.innerHTML = n()
                                    })
                                },
                                model: function(t) {
                                    function c(t) {
                                        t = (t = t.replace(l, "\\\\")).replace(u, '\\"');
                                        o("".concat(e, ' = "').concat(t, '"'))
                                    }
                                    var a, i, n, r = t.el,
                                        e = t.exp,
                                        o = t.get,
                                        s = t.effect,
                                        h = t.modifiers,
                                        l = /\\/g,
                                        u = /"/g,
                                        f = r.type,
                                        t = h || {},
                                        d = t.trim,
                                        t = t.number,
                                        v = void 0 === t ? "number" === f : t;
                                    "SELECT" === r.tagName ? (lt(a = r, "change", function() {
                                        var t = Array.prototype.filter.call(a.options, function(t) {
                                            return t.selected
                                        }).map(function(t) {
                                            return v ? m(dt(t)) : dt(t)
                                        });
                                        c(a.multiple ? t : t[0])
                                    }), s(function() {
                                        for (var t = o(), i = a.multiple, n = 0, e = a.options.length; n < e; n++) {
                                            var s = a.options[n],
                                                c = dt(s);
                                            if (i) k(t) ? s.selected = -1 < y(t, c) : s.selected = t.has(c);
                                            else if (p(dt(s), t)) return void(a.selectedIndex !== n && (a.selectedIndex = n))
                                        }
                                        i || -1 === a.selectedIndex || (a.selectedIndex = -1)
                                    })) : "checkbox" === f ? (lt(r, "change", function() {
                                        var t, i, n, e = o(),
                                            s = r.checked;
                                        k(e) ? (n = -1 !== (i = y(e, t = dt(r))), s && !n ? c(e.concat(t)) : !s && n && ((e = [...e]).splice(i, 1), c(e))) : c(vt(r, s))
                                    }), s(function() {
                                        var t = o();
                                        k(t) ? r.checked = -1 < y(t, dt(r)) : t !== i && (r.checked = p(t, vt(r, !0))), i = t
                                    })) : "radio" === f ? (lt(r, "change", function() {
                                        c(dt(r))
                                    }), s(function() {
                                        var t = o();
                                        void 0 !== t && (r.checked = p(t, dt(r)))
                                    })) : (n = function(t) {
                                        return d ? t.trim() : v ? m(t) : t
                                    }, lt(r, "compositionstart", pt), lt(r, "compositionend", yt), lt(r, null != h && h.lazy ? "change" : "input", function() {
                                        r.composing || c(n(r.value))
                                    }), d && lt(r, "change", function() {
                                        r.value = r.value.trim()
                                    }), s(function() {
                                        var t, i;
                                        r.composing || (t = r.value, i = o(), document.activeElement === r && n(t) === i || t !== i && (r.value = i))
                                    }))
                                },
                                effect: function(t) {
                                    t.el;
                                    var i = t.ctx,
                                        n = t.exp,
                                        e = t.effect;
                                    at(function() {
                                        return e(function() {
                                            return Nt(i.scope, n)
                                        })
                                    })
                                }
                            },
                            Wt = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                            Ht = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                            Kt = /^\(|\)$/g,
                            Gt = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,
                            Yt = function(e, t, l) {
                                var i = t.match(Wt);
                                if (i) {
                                    var t = e.nextSibling,
                                        u = e.parentElement,
                                        f = new Text("");
                                    u.insertBefore(f, e), u.removeChild(e);
                                    var a, r, o, d = i[2].trim(),
                                        h = i[1].trim().replace(Kt, "").trim(),
                                        v = !1,
                                        i = "key",
                                        p = e.getAttribute(i) || e.getAttribute(i = ":key") || e.getAttribute(i = "v-bind:key");

                                    function y(t, n, i, e) {
                                        var s = {};
                                        a ? a.forEach(function(t, i) {
                                            return s[t] = n[v ? i : t]
                                        }) : s[h] = n, e ? (r && (s[r] = e), o && (s[o] = i)) : r && (s[r] = i);
                                        var c = ci(l, s),
                                            e = p ? Jt(c.scope, p) : i;
                                        return t.set(e, i), c.key = e, c
                                    }

                                    function m(t, i) {
                                        var n = new ri(e, t);
                                        return n.key = t.key, n.insert(u, i), n
                                    }
                                    p && (e.removeAttribute(i), "key" === i && (p = JSON.stringify(p))), (i = h.match(Ht)) && (h = h.replace(Ht, "").trim(), r = i[1].trim(), i[2] && (o = i[2].trim())), (i = h.match(Gt)) && (a = i[1].split(",").map(function(t) {
                                        return t.trim()
                                    }), v = "[" === h[0]);
                                    var _, g, w, b = !1;
                                    return l.effect(function() {
                                        var t = Jt(l.scope, d),
                                            i = w,
                                            t = oi(function(t) {
                                                var i = new Map,
                                                    n = [];
                                                if (k(t))
                                                    for (var e = 0; e < t.length; e++) n.push(y(i, t[e], e));
                                                else if ("number" == typeof t)
                                                    for (var s = 0; s < t; s++) n.push(y(i, s + 1, s));
                                                else if ($(t)) {
                                                    var c, a = 0;
                                                    for (c in t) n.push(y(i, t[c], a++, c))
                                                }
                                                return [n, i]
                                            }(t), 2);
                                        if (g = t[0], w = t[1], b) {
                                            for (var n = 0; n < _.length; n++) w.has(_[n].key) || _[n].remove();
                                            for (var e, s, c = [], a = g.length; a--;) {
                                                var r = g[a],
                                                    o = i.get(r.key),
                                                    h = void 0;
                                                null == o ? h = m(r, e ? e.el : f) : (h = _[o], Object.assign(h.ctx.scope, r.scope), o === a || _[o + 1] === e && s !== e || (s = h).insert(u, e ? e.el : f)), c.unshift(e = h)
                                            }
                                            _ = c
                                        } else _ = g.map(function(t) {
                                            return m(t, f)
                                        }), b = !0
                                    }), t
                                }
                            },
                            Zt = function(t) {
                                var i, n = t.el,
                                    e = t.ctx.scope.$refs,
                                    s = t.get;
                                return (0, t.effect)(function() {
                                        var t = s();
                                        e[t] = n, i && t !== i && delete e[i], i = t
                                    }),
                                    function() {
                                        i && delete e[i]
                                    }
                            },
                            Xt = /^(?:v-|:|@)/,
                            Qt = /\.([\w-]+)/g,
                            ti = !(Bt.prototype = {
                                constructor: Bt,
                                parse: function(t) {
                                    var i = this.getAst(t),
                                        n = this.astCompiler.compile(i.ast);
                                    return n.literal = 0 === (t = i.ast).body.length || 1 === t.body.length && (t.body[0].expression.type === St.Literal || t.body[0].expression.type === St.ArrayExpression || t.body[0].expression.type === St.ObjectExpression), n.constant = i.ast.constant, n.oneTime = i.oneTime, n
                                },
                                getAst: function(t) {
                                    var i = !1;
                                    return ":" === (t = t.trim()).charAt(0) && ":" === t.charAt(1) && (i = !0, t = t.substring(2)), {
                                        ast: this.ast.ast(t),
                                        oneTime: i
                                    }
                                }
                            }),
                            ii = function(t, i) {
                                for (var n = t.firstChild; n;) n = Mt(n, i) || n.nextSibling
                            },
                            ni = function(t, i, n, e) {
                                var s, c, a, r = i.replace(Qt, function(t, i) {
                                        return (s = s || {})[i] = !0, ""
                                    }),
                                    o = ":" === r[0] ? (a = ot, r.slice(1)) : "@" === r[0] ? (a = ut, r.slice(1)) : (c = 0 < (o = r.indexOf(":")) ? r.slice(2, o) : r.slice(2), a = Vt[c] || e.dirs[c], 0 < o ? r.slice(o + 1) : void 0);
                                a && (ei(t, a = a === ot && "ref" === o ? Zt : a, n, e, o, s), t.removeAttribute(i))
                            },
                            ei = function(t, i, n, e, s, c) {
                                c = i({
                                    el: t,
                                    get: function() {
                                        return Jt(e.scope, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : n)
                                    },
                                    effect: e.effect,
                                    ctx: e,
                                    exp: n,
                                    arg: s,
                                    modifiers: c
                                });
                                c && e.cleanups.push(c)
                            },
                            si = function(t, i) {
                                "#" !== i[0] ? t.innerHTML = i : (i = document.querySelector(i), t.appendChild(i.content.cloneNode(!0)))
                            },
                            ci = function(t) {
                                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                    s = t.scope,
                                    n = Object.create(s);
                                Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)), n.$refs = Object.create(s.$refs);
                                var c = it(new Proxy(n, {
                                    set: function(t, i, n, e) {
                                        return e !== c || t.hasOwnProperty(i) ? Reflect.set(t, i, n, e) : Reflect.set(s, i, n)
                                    }
                                }));
                                return ai(c), fi(ui({}, t), {
                                    scope: c
                                })
                            },
                            ai = function(t) {
                                for (var i = 0, n = Object.keys(t); i < n.length; i++) {
                                    var e = n[i];
                                    "function" == typeof t[e] && (t[e] = t[e].bind(t))
                                }
                            },
                            ri = function() {
                                function t(t, i) {
                                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                                    li(this, "template"), li(this, "ctx"), li(this, "key"), li(this, "parentCtx"), li(this, "isFragment"), li(this, "start"), li(this, "end"), this.isFragment = t instanceof HTMLTemplateElement, n ? this.template = t : this.isFragment ? this.template = t.content.cloneNode(!0) : this.template = t.cloneNode(!0), n ? this.ctx = i : ((this.parentCtx = i).blocks.push(this), this.ctx = Tt(i)), Mt(this.template, this.ctx)
                                }
                                var i = t.prototype;
                                return i.insert = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                        if (this.isFragment)
                                            if (this.start)
                                                for (var n, e = this.start; e && (n = e.nextSibling, t.insertBefore(e, i), e !== this.end);) e = n;
                                            else this.start = new Text(""), this.end = new Text(""), t.insertBefore(this.end, i), t.insertBefore(this.start, this.end), t.insertBefore(this.template, this.end);
                                        else t.insertBefore(this.template, i)
                                    }, i.remove = function() {
                                        if (this.parentCtx && -1 < (s = (e = this.parentCtx.blocks).indexOf(this)) && e.splice(s, 1), this.start)
                                            for (var t, i = this.start.parentNode, n = this.start; n && (t = n.nextSibling, i.removeChild(n), n !== this.end);) n = t;
                                        else this.template.parentNode.removeChild(this.template);
                                        var e, s;
                                        this.teardown()
                                    }, i.teardown = function() {
                                        this.ctx.blocks.forEach(function(t) {
                                            t.teardown()
                                        }), this.ctx.effects.forEach(R), this.ctx.cleanups.forEach(function(t) {
                                            return t()
                                        })
                                    },
                                    function(t, i) {
                                        for (var n, e = 0; e < i.length; e++) {
                                            var s = i[e];
                                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, "symbol" == typeof(n = function(t, i) {
                                                if ("object" != typeof t || null === t) return t;
                                                var n = t[Symbol.toPrimitive];
                                                if (void 0 === n) return String(t);
                                                t = n.call(t, "string");
                                                if ("object" != typeof t) return t;
                                                throw new TypeError("@@toPrimitive must return a primitive value.")
                                            }(s.key)) ? n : String(n), s)
                                        }
                                    }((i = t).prototype, [{
                                        key: "el",
                                        get: function() {
                                            return this.start || this.template
                                        }
                                    }]), Object.defineProperty(i, "prototype", {
                                        writable: !1
                                    }), t
                            }(),
                            W = document.currentScript;
                        return W && W.hasAttribute("init") && Pt().mount(), t.createApp = Pt, t.nextTick = at, t.reactive = it, Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t[Symbol.toStringTag] = "Module", t
                    }({}), n = r, e = function() {
                        function t() {}
                        var i = t.prototype;
                        return i.init = function(t) {
                            var i = function() {
                                    function t(t) {
                                        this.parent = t, this.smiley_map = {
                                            angry: ":@",
                                            blushing: ":$",
                                            confused: "x)",
                                            cool: "8)",
                                            crying: ":'(",
                                            embarrassed: ":/",
                                            heart: "<3",
                                            laughing: ":'D",
                                            sad: ":(",
                                            sick: ":S",
                                            "small-smile": ":)",
                                            "big-smile": ":D",
                                            "thumbs-up": "+1",
                                            surprised: ":o",
                                            tongue: ":P",
                                            winking: ";)"
                                        }, this.d = {
                                            angry: "((?:=|:)(?:-)?@)",
                                            blushing: "((?:=|:)(?:-)?\\$)",
                                            cool: "(8(?:-)?\\))",
                                            confused: "(x(?:-)?\\))",
                                            crying: "((?:=|:)'(?:-)?\\()",
                                            embarrassed: "((?:=|:)(?:-)?\\/)",
                                            heart: "(&lt;3)",
                                            laughing: "((?:=|:)(?:-)?'D)",
                                            sad: "((?:=|:)(?:-)?(?:\\(|\\|))",
                                            sick: "((?:=|:)(?:-)?S)",
                                            "small-smile": "((?:=|:)(?:-)?\\))",
                                            "big-smile": "((?:=|:)(?:-)?D)",
                                            "thumbs-up": "(\\+1)",
                                            surprised: "((?:=|:)(?:-)?o)",
                                            tongue: "((?:=|:)(?:-)?P)",
                                            winking: "(;(?:-)?\\))"
                                        }, this.p()
                                    }
                                    var i = t.prototype;
                                    return i.code = function(t) {
                                        return this.parent.template.render("smiley", {
                                            name: t,
                                            size: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "small"
                                        })
                                    }, i.parse = function(t) {
                                        var i, n, e, s, c = t;
                                        for (i in this.m)
                                            if (this.m.hasOwnProperty(i))
                                                for (n = this.m[i]; null !== (s = c.match(n));) e = "small", c === s[2] && (e = "large"), e = this.code(i, e), c = c.replace(n, "$1".concat(e, "$3"));
                                        return c
                                    }, i.count = function(t) {
                                        var i, n, e = 0,
                                            s = t;
                                        for (i in this.m)
                                            if (this.m.hasOwnProperty(i))
                                                for (n = this.m[i]; !0 === n.test(s);) e++, s = s.replace(n, "$1[]$3");
                                        return e
                                    }, i.name = function(t) {
                                        var i, n, e = null;
                                        for (i in this.m)
                                            if (this.m.hasOwnProperty(i) && (n = this.m[i], t.match(n))) {
                                                e = i;
                                                break
                                            }
                                        return e
                                    }, i.p = function() {
                                        for (var t in this.m = {}, this.d) this.m[t] = new RegExp("(^|\\s|\\()".concat(this.d[t], "($|\\s|\\))"), "i")
                                    }, t
                                }(),
                                n = function() {
                                    function t(t) {
                                        this.parent = t, this._ = ["com", "net", "org", "info", "biz", "mobi", "chat", "email", "help", "watch", "name", "pro", "aero", "asia", "cat", "coop", "edu", "gov", "int", "jobs", "mil", "museum", "post", "tel", "travel", "xxx", "xyz", "top", "site", "online", "club", "shop", "work", "app", "live", "store", "space", "website", "tech", "life", "dev", "blog", "cloud", "page", "link", "design", "group", "company", "agency", "network", "media", "immo", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"], this.g = {
                                            "&": /&amp;/g,
                                            "<": /&lt;/g,
                                            ">": /&gt;/g,
                                            '"': /&quot;/g
                                        }, this.b = {
                                            "&amp;": /&/g,
                                            "&lt;": /</g,
                                            "&gt;": />/g,
                                            "&quot;": /"/g
                                        }, this.k = {
                                            "\\\\": /\\/g,
                                            "\\t": /\t/g,
                                            "\\n": /\n/g,
                                            "\\u00A0": /\u00A0/g,
                                            "&quot;": /"/g,
                                            "&apos;": /'/g,
                                            "&lowbar;": /_/g,
                                            "&ast;": /\*/g,
                                            "&plus;": /\+/g,
                                            "&#126;": /~/g
                                        }, this.$ = {
                                            "<": /&lt;/g,
                                            ">": /&gt;/g
                                        }, this.F = /[-\/\\^$*+?.()|[\]{}]/g, this.j = /([\#$\*\_\-+![\]\(\)`~><\.|{}])/g, this.z = /\n(\s+)?\n(\s+)?\n/g, this.C = /\n/g, this.A = /^([a-z]{1,20})\n((?:\n?.*)*)$/, this.I = /(,|\.)(\s|$)/g, this.q = /\u0001/g, this.O = /^(www\.)/i, this.S = {
                                            links: {
                                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                                suffix: "(\\s||<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                                            },
                                            markdown_simple: {
                                                prefix: "(^)",
                                                suffix: "($)"
                                            },
                                            markdown_includes: {
                                                prefix: "(\\s|<[^<>]+\\/>|<[^<>]+>|\\(|^)",
                                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|\\)|$)"
                                            },
                                            markdown_formatting: {
                                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                                suffix: ""
                                            },
                                            markdown_list: {
                                                prefix: "(^\\s*)",
                                                suffix: "(.*?)($)"
                                            }
                                        }, this.D = ["title", "list", "code_inline", "blockquote", "table", "emphasis"], this.R = ["code_block", "code_inline"], this.B = ["escape", "consecutive_lines", "markdown", "links_uri", "links_domain", "emails", "phones", "smileys", "new_lines"], this.N = {
                                            escape: this.M,
                                            consecutive_lines: this.T,
                                            new_lines: this.U,
                                            emails: this.P,
                                            phones: this.L,
                                            markdown: this.J,
                                            links_domain: this.V,
                                            links_uri: this.W,
                                            smileys: this.H
                                        }, this.K = {
                                            markdown_code_block: this.G,
                                            markdown_table: this.Y
                                        }, this.Z(), this.X()
                                    }
                                    var i = t.prototype;
                                    return i.format = function(t) {
                                        for (var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], s = t, c = 0; c < this.B.length; c++) i = this.B[c], -1 === e.indexOf(i) && (s = this.N[i].bind(this)(s, n));
                                        return s
                                    }, i.replace = function(t) {
                                        for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = t, e = 0; e < i.length; e++) n = n.replace("%".concat(e + 1, "s"), i[e]);
                                        return n
                                    }, i.attribute = function(t) {
                                        return this.M(t, {}, this.k)
                                    }, i.html = function(t) {
                                        return this.M(t, {}, !0 === (1 < arguments.length && void 0 !== arguments[1] && arguments[1]) ? this.g : this.b)
                                    }, i.escape_regex = function(t) {
                                        return t.replace(this.F, "\\$&")
                                    }, i.M = function(t) {
                                        var i, n, e = t,
                                            s = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) || this.b;
                                        for (n in s) s.hasOwnProperty(n) && (i = s[n], e = e.replace(i, n));
                                        return e
                                    }, i.T = function(t) {
                                        return t.replace(this.z, "\n\n")
                                    }, i.U = function(t) {
                                        var i = this.parent.template.render("new_line", {}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                                        return t.trim().replace(this.C, i)
                                    }, i.P = function(t) {
                                        var s = this,
                                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        return this.Q(t, this.tt.email, function(t, i, n, e) {
                                            n = s.parent.template.render("link_email", {
                                                email: n,
                                                no_external_link: s.parent.config.runtime.no_external_link || !1
                                            }, c);
                                            return "".concat(i).concat(n).concat(e)
                                        })
                                    }, i.L = function(t) {
                                        var s = this,
                                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        return this.Q(t, this.tt.phone, function(t, i, n, e) {
                                            n = s.parent.template.render("link_phone", {
                                                phone: n,
                                                no_external_link: s.parent.config.runtime.no_external_link || !1
                                            }, c);
                                            return "".concat(i).concat(n).concat(e)
                                        })
                                    }, i.J = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        t = "\n".concat(t, "\n");
                                        for (var n = 0; n < this.it.length; n++) t = t.replace(this.it[n][1], this.nt(this.it[n], i));
                                        return t = t.trim()
                                    }, i.V = function(t) {
                                        var s = this,
                                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        return this.Q(t, this.tt.domain, function(t, i, n, e) {
                                            n = s.parent.template.render("link_domain", {
                                                domain_value: n,
                                                domain_name: n,
                                                no_external_link: s.parent.config.runtime.no_external_link || !1
                                            }, c);
                                            return "".concat(i).concat(n).concat(e)
                                        })
                                    }, i.W = function(t) {
                                        var c = this,
                                            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        return this.Q(t, this.tt.uri, function(t, i, n, e) {
                                            var s = !0 === c.O.test(n) ? "http://".concat(n) : n,
                                                n = c.parent.template.render("link_uri", {
                                                    uri_value: s,
                                                    uri_name: n,
                                                    no_external_link: c.parent.config.runtime.no_external_link || !1
                                                }, a);
                                            return "".concat(i).concat(n).concat(e)
                                        })
                                    }, i.H = function(t) {
                                        return this.parent.Smileys.parse(t)
                                    }, i.G = function(t) {
                                        var i = (t.value || "").match(this.A);
                                        null != i && i[1] ? (t.type = i[1], t.value = i[2]) : t.type = "none", t.value = (t.value || "").trim()
                                    }, i.Y = function(t) {
                                        var i = t.type.split("|"),
                                            s = i.slice(1, i.length - 1).map(function(t) {
                                                return (t || "").trim()
                                            }),
                                            i = t.value.split("\n").map(function(t) {
                                                var t = t.split("|"),
                                                    i = t.slice(1, t.length - 1).map(function(t) {
                                                        return (t || "").trim()
                                                    }),
                                                    n = s.length - i.length;
                                                if (0 != n)
                                                    if (n < 0) i = i.slice(0, s.length);
                                                    else
                                                        for (var e = 0; e < n; e++) i.push("");
                                                return i
                                            });
                                        t.type = s, t.value = i
                                    }, i.nt = function(r) {
                                        var o = this,
                                            h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                                        return function(t, i, n, e, s) {
                                            var c = "markdown_".concat(r[0]),
                                                a = {
                                                    type: null,
                                                    value: null,
                                                    url_crisp_image: o.parent.config.url.crisp_image,
                                                    no_external_link: o.parent.config.runtime.no_external_link || !1
                                                },
                                                i = ("string" == typeof i ? i : null) || "",
                                                s = ("string" == typeof s ? s : null) || "";
                                            a.type = n, a.value = e, -1 !== o.D.indexOf(r[0]) && "string" == typeof a.value && (a.value = a.value.trim()), -1 !== o.R.indexOf(r[0]) && "string" == typeof a.value && (a.value = o.et(a.value));
                                            e = o.K[c] || null;
                                            null !== e && e.bind(o)(a);
                                            a = o.parent.template.render(c, a, h);
                                            return "".concat(i).concat(a).concat(s)
                                        }
                                    }, i.Q = function(t, i, s) {
                                        var c = this,
                                            n = t.match(i);
                                        if (n)
                                            for (var e = 0; e < n.length; e++) {
                                                var a = n[e].replace(this.I, function(t, i, n) {
                                                    return "".concat(i).concat(n)
                                                });
                                                t = t.replace(n[e], a)
                                            }
                                        return t.replace(i, function(t, i, n, e) {
                                            return s(t, i, n, e.replace(c.q, ""))
                                        })
                                    }, i.et = function(t) {
                                        return (t = this.M(t, {}, this.$)).replace(this.j, function(t) {
                                            return "&#".concat(t.charCodeAt(0), ";")
                                        })
                                    }, i.st = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "gi",
                                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                        return new RegExp("".concat(n.prefix || "").concat(t).concat(n.suffix || ""), i)
                                    }, i.Z = function() {
                                        this.tt = {
                                            email: this.st("([\\w\\._-]+@[\\w\\.\\/_-]+)", "gi", this.S.links),
                                            phone: this.st("(\\+[0-9]{1,3}[ \\(\\)\\-0-9]{7,20})", "gi", this.S.links),
                                            domain: this.st(["((?:[^<>\\(\\)\\s,@]+)(?:\\.(?:", this._.map(this.escape_regex.bind(this)).join("|"), ")))"].join(""), "gim", this.S.links),
                                            uri: this.st("((?:(?:(?:https?|ftps?|file):)|(?:www\\.))(?:[^<>\\(\\)\\s]+))", "gim", this.S.links)
                                        }
                                    }, i.X = function() {
                                        this.it = [
                                            ["code_block", this.st("(`{2,3})((?:\\n+)?(?:(?!\\2).(?:\\n+)?)*)(?:\\2)", "gi", {
                                                prefix: "(\\s|<[^<>]+\\/>|^)",
                                                suffix: "(\\s|\\.|,|:|$)"
                                            })],
                                            ["code_inline", this.st("(`{1})([^`]*)(?:\\2)", "gim", {
                                                prefix: "(\\s|<[^<>]+\\/>|\\(|^)",
                                                suffix: "(\\s|\\.|,|:|\\)|<\\/[^<>]+>|$)"
                                            })],
                                            ["title", this.st("(#{1})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["title", this.st("(#{2})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["title", this.st("(#{3})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["title", this.st("(#{4})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["title", this.st("(#{5})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["title", this.st("(#{6})(?:[\\s]+)([^#].*)", "gim", this.S.markdown_simple)],
                                            ["link_image", this.st("\\[!\\[(?:[^\\[]*)\\]\\(([^\\)]+)\\)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["image", this.st("!\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["link_text", this.st("\\[([^\\[]+)\\]\\(([^\\)]+)\\)", "gim", {
                                                prefix: "(\\s|<[^<>]+\\/>|<[^a][^<>]*>|\\(|^)",
                                                suffix: "(\\s|.|,|:|<[^<>]+\\/>|</[^a][^<>]*>|\\)|$)"
                                            })],
                                            ["youtube", this.st("\\$\\{youtube\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["vimeo", this.st("\\$\\{vimeo\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["dailymotion", this.st("\\$\\{dailymotion\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["frame", this.st("\\$\\{frame\\}\\[([^\\[]*)\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)],
                                            ["bold", this.st("(\\*\\*)(.*?)(?:\\2)", "gim", this.S.markdown_formatting)],
                                            ["underline", this.st("(__)(.*?)(?:\\2)", "gim", this.S.markdown_formatting)],
                                            ["italic", this.st("(\\*|_)(.*?)(?:\\2)", "gim", this.S.markdown_formatting)],
                                            ["delete", this.st("(\\~\\~)(.*?)(?:\\2)", "gim", this.S.markdown_formatting)],
                                            ["highlight", this.st("(\\+\\+)(.*?)(?:\\2)", "gim", this.S.markdown_formatting)],
                                            ["list", this.st("(\\*)(?:[\\s]+)", "gim", this.S.markdown_list)],
                                            ["list", this.st("(?:([\\d]{1,2})\\.)(?:[\\s]+)", "gim", this.S.markdown_list)],
                                            ["blockquote", this.st("(&gt;|\\>)(?:[\\s]+)(.*)", "gim", this.S.markdown_simple)],
                                            ["table", this.st("(?:(\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19})(?: *\\n)(?:\\|(?: *\\-{1,99} *\\|){1,19}))((?: *\\n\\|(?:[^\\|\\r\\n]{0,999}\\|){1,19}){1,49})", "gi", {
                                                prefix: "(\\s|^)",
                                                suffix: "(\\s|$)"
                                            })],
                                            ["emphasis", this.st("(\\|{1})(?:[\\s]+)([^\\|].*)", "gim", this.S.markdown_simple)],
                                            ["emphasis", this.st("(\\|{2})(?:[\\s]+)([^\\|].*)", "gim", this.S.markdown_simple)],
                                            ["emphasis", this.st("(\\|{3})(?:[\\s]+)([^\\|].*)", "gim", this.S.markdown_simple)],
                                            ["interpolate", this.st('(?:\\{\\{\\s*)([^\\{\\}\\|\\s]+)(?:\\s*\\|\\s*(?:(?:&quot;)|")([^&"]*)(?:(?:&quot;)|"))?(?:\\s*\\}\\})', "gim", {
                                                prefix: "(\\s|\\(|^)",
                                                suffix: ""
                                            })],
                                            ["line", this.st("(-{3,})", "gim", {
                                                prefix: "(^)(\\s+)?",
                                                suffix: "(\\s|$)"
                                            })],
                                            ["color", this.st("\\$\\{color\\}\\[(#[0-9A-Fa-f]{6})\\]\\(([^\\)]+)\\)", "gim", this.S.markdown_includes)]
                                        ]
                                    }, t
                                }(),
                                e = function() {
                                    function t(t) {
                                        this.parent = t, this.ct = /^(\S+)((?:\s+)(.+))?$/
                                    }
                                    var i = t.prototype;
                                    return i.parse_first_name = function(t) {
                                        return this.rt(t, 1)
                                    }, i.parse_last_name = function(t) {
                                        return this.rt(t, 3)
                                    }, i.rt = function(t, i) {
                                        var n = (t || "").trim();
                                        return !n || null != (t = n.match(this.ct)) && t[i] && (n = t[i].trim()), n
                                    }, t
                                }();
                            this.ot(t), this.Smileys = new i(this), this.Parse = new n(this), this.Name = new e(this)
                        }, i.ot = function(t) {
                            null != t && t.template && (this.template = t.template), null != t && t.config && (this.config = t.config)
                        }, t
                    }(), n.CrispLibraryWeb = new e, t = r, i = function() {
                        function t() {}
                        var i = t.prototype;
                        return i.init = function(t) {
                            var r = {},
                                i = function() {
                                    function t(t) {
                                        this.parent = t, this.ht()
                                    }
                                    var i = t.prototype;
                                    return i.set_ignore_privacy = function() {
                                        this.lt = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                                    }, i.set_visitor_compose = function() {
                                        this.ut = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.ht = function() {
                                        this.lt = !1, this.ut = !0
                                    }, t
                                }(),
                                n = function() {
                                    function t(t) {
                                        this.parent = t
                                    }
                                    var i = t.prototype;
                                    return i.get = function(t) {
                                        var i, n = this.parent.cookie.get(t);
                                        if (void 0 === n) try {
                                            window.localStorage && "function" == typeof window.localStorage.getItem && (0 < (i = parseInt(window.localStorage.getItem("".concat(t, ":e")) || "0", 10)) && i <= (new Date).getTime() ? (n = void 0, "function" == typeof window.localStorage.removeItem && (window.localStorage.removeItem(t), window.localStorage.removeItem("".concat(t, ":e")))) : n = window.localStorage.getItem(t))
                                        } catch (t) {}
                                        return void 0 !== n ? n : null
                                    }, i.set = function(t, i) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                        this.parent.cookie.set(t, i, n);
                                        try {
                                            window.localStorage && "function" == typeof window.localStorage.setItem && (window.localStorage.setItem("".concat(t, ":e"), void 0 !== n.expires ? (new Date).getTime() + n.expires : 0), window.localStorage.setItem(t, i))
                                        } catch (t) {}
                                    }, i.expire = function(t) {
                                        this.parent.cookie.expire(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                                        try {
                                            window.localStorage && "function" == typeof window.localStorage.removeItem && (window.localStorage.removeItem(t), window.localStorage.removeItem("".concat(t, ":e")))
                                        } catch (t) {}
                                    }, t
                                }(),
                                e = function() {
                                    function t(t) {
                                        this.parent = t, this.ht()
                                    }
                                    var i = t.prototype;
                                    return i.set_timeout = function(t) {
                                        var i = this,
                                            n = setTimeout(function() {
                                                delete i.ft[n], t()
                                            }, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                                        return this.ft[n] = n
                                    }, i.clear_timeout = function(t) {
                                        t in this.ft && (clearTimeout(this.ft[t]), delete this.ft[t])
                                    }, i.set_interval = function(t) {
                                        var i = setInterval(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0);
                                        return this.dt[i] = i
                                    }, i.clear_interval = function(t) {
                                        t in this.dt && (clearInterval(this.dt[t]), delete this.dt[t])
                                    }, i.reset = function() {
                                        for (var t in this.ft) this.clear_timeout(t);
                                        for (var i in this.dt) this.clear_interval(i);
                                        this.ht()
                                    }, i.ht = function() {
                                        this.ft = {}, this.dt = {}
                                    }, t
                                }(),
                                s = function() {
                                    function t(t) {
                                        this.parent = t, this.ht()
                                    }
                                    var i = t.prototype;
                                    return i.add_event = function(t, i, n, e) {
                                        var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                                            c = this.vt(t, i, n);
                                        if (c in this.pt) throw new Error("Event listener is already registered for '".concat(n, "' event on ") + "'".concat(i, "' instance, cannot re-register"));
                                        window[i].addEventListener(n, e, s), this.pt[c] = [e, s]
                                    }, i.remove_event = function(t, i, n) {
                                        var e = this.vt(t, i, n);
                                        e in this.pt && (t = this.pt[e], window[i].removeEventListener(n, t[0], t[1]), delete this.pt[e])
                                    }, i.apply_patch = function(t, i, n, e, s) {
                                        t = this.vt(t, i, n);
                                        if (t in this.yt) throw new Error("Patch is already registered for '".concat(n, "' method on ") + "'".concat(i, "' instance, cannot re-register"));
                                        var c = e[n];
                                        "function" == typeof c && (e[n] = function() {
                                            var t = c.apply(e, arguments);
                                            return s(arguments), t
                                        }, this.yt[t] = [e, c])
                                    }, i.revoke_patch = function(t, i, n) {
                                        t = this.vt(t, i, n);
                                        t in this.yt && ((i = this.yt[t])[0][n] = i[1], delete this.yt[t])
                                    }, i.reset = function() {
                                        for (var t in this.pt) {
                                            t = this.mt(t);
                                            null !== t && this.remove_event(t[0], t[1], t[2])
                                        }
                                        for (var i in this.yt) {
                                            i = this.mt(i);
                                            null !== i && this.revoke_patch(i[0], i[1], i[2])
                                        }
                                        this.ht()
                                    }, i.vt = function(t, i, n) {
                                        return "".concat(t, ":").concat(i, ":").concat(n)
                                    }, i.mt = function(t) {
                                        t = t.split(":");
                                        return 3 === t.length ? t : null
                                    }, i.ht = function() {
                                        this.pt = {}, this.yt = {}
                                    }, t
                                }(),
                                c = function() {
                                    function t(t) {
                                        this.parent = t, this._t()
                                    }
                                    var i = t.prototype;
                                    return i.get_state = function() {
                                        this.gt(this.parent.socket.connected || !1)
                                    }, i._t = function() {
                                        var t = this;
                                        this.parent.socket.on("connect", function() {
                                            t.gt(!0)
                                        }), this.parent.socket.on("disconnect", function() {
                                            t.gt(!1)
                                        }), this.parent.socket.io.on("reconnect_failed", function() {
                                            t.gt(!1, !0)
                                        })
                                    }, i.gt = function() {
                                        this.parent.event.publish("socket:state", {
                                            connected: !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                                            failed_reconnect: 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                                        })
                                    }, t
                                }(),
                                a = function() {
                                    function t(t) {
                                        this.parent = t, this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.bind_to = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                                            s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                                        this.wt = t, this.pt = i, this.bt = n, this.kt = e, this.$t = s, !0 !== this.xt ? this.parent.stream.connect() : this.Ft()
                                    }, i.unbind_from = function() {
                                        this.jt(), this.parent.stream.disconnect()
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.ht = function() {
                                        this.xt = !1, this.wt = null, this.pt = [], this.bt = {}, this.kt = null, this.$t = null, this.Et = null, this.zt = null
                                    }, i._t = function() {
                                        var t = this;
                                        this.parent.stream.on("connect", function() {
                                            t.xt = !0, t.Ft()
                                        }), this.parent.stream.on("disconnect", function() {
                                            t.xt = !1, t.Ct()
                                        }), this.parent.stream.on("socket:bound", function() {
                                            t.At()
                                        })
                                    }, i.Ft = function() {
                                        var t;
                                        this.Et !== this.wt || this.zt !== this.pt ? (this.Et = this.wt, this.zt = this.pt, t = [], this.Et && t.push(this.Et), this.parent.stream.emit("socket:bind", {
                                            ray: "client",
                                            events: this.zt,
                                            rooms: t,
                                            context: this.bt
                                        })) : this.At()
                                    }, i.Ct = function() {
                                        null !== this.$t && this.$t(), this.jt(), this.Et = null, this.zt = null
                                    }, i.At = function() {
                                        null !== this.kt && this.kt(), this.jt()
                                    }, i.jt = function() {
                                        this.wt = null, this.pt = [], this.bt = {}, this.kt = null, this.$t = null
                                    }, t
                                }(),
                                o = function() {
                                    function t(t) {
                                        this.parent = t, this.It = 1e5, this.qt = "crisp-client", this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.update = function(t, i) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                                            e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                                            s = {
                                                ray: this.Ot(t),
                                                type: t,
                                                data: i
                                            };
                                        this.St.push(s.ray), this.Dt[s.ray] = {
                                            success: n,
                                            error: e
                                        }, this.parent.socket.emit("storage:sync:update", s), this.parent.event.publish("storage:sync:update", s)
                                    }, i.get_stamp_local = function(t) {
                                        var i = this.Rt(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []);
                                        return "object" == typeof window.localStorage && window.localStorage.getItem(i) || ""
                                    }, i.set_stamp_local = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                                            i = this.Rt(t, i);
                                        return "object" == typeof window.localStorage && (window.localStorage.setItem(i, n), !0)
                                    }, i.is_syncing_storage = function() {
                                        return 0 < this.St.length && !0
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.Rt = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                                            n = "".concat(this.qt, "/").concat(t);
                                        return 0 < i.length && (n += "/".concat(i.join("/"))), n
                                    }, i.ht = function() {
                                        this.Bt = 1, this.Nt = 0, this.Dt = {}, this.St = []
                                    }, i._t = function() {
                                        this.parent.socket.on("storage:sync:updated", this.Tt.Mt(this))
                                    }, i.Tt = function(t) {
                                        var i;
                                        "object" == typeof this.Dt[t.ray] && (t.error ? this.Dt[t.ray].error() : this.Dt[t.ray].success(), delete this.Dt[t.ray], -1 !== (i = this.St.indexOf(t.ray)) && this.St.splice(i, 1)), this.parent.event.publish("storage:sync:updated", t)
                                    }, i.Ot = function(t) {
                                        var i = Math.floor(Math.random() * this.It),
                                            n = this.Nt++;
                                        return "".concat(t, "/").concat(i, "/").concat(n)
                                    }, t
                                }(),
                                h = function() {
                                    function t(t) {
                                        this.parent = t, this.Ut = 6e4, this.Pt = 6e3, this.Lt = new RegExp(["(^(?:\\S+(?:(?:\\s+|\\?|\\!|\\.|\\(|\\)|:|;)|(?:[\\u4e00-\\u9fff])|(?:[\\u0e00-\\u0e7f])))+).*$"].join(""), "i"), this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.update_message = function(t, i) {
                                        i = {
                                            fingerprint: t,
                                            content: i
                                        };
                                        this.parent.socket.emit("message:update", i), this.Jt(i, "local")
                                    }, i.send_raw_message = function(t) {
                                        var i, n = this,
                                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0; - 1 === this.Vt.indexOf(t.fingerprint) && this.Vt.push(t.fingerprint), this.parent.platform_name && this.parent.platform_signature_key && (_signature_data = [this.parent.Session.Wt, t.fingerprint, t.type], (i = this.parent.sha256.hmac.create(this.parent.platform_signature_key.split("/").map(function(t) {
                                            return String.fromCharCode(parseInt(t, 36))
                                        }).join(""))).update("[".concat(_signature_data.join("|"), "]")), t.signature = "".concat(this.parent.platform_name, ":").concat(i.hex())), this.parent.event.publish("message:send", t), this.parent.Schedule.set_timeout(function() {
                                            n.parent.socket.emit("message:send", t)
                                        }, e)
                                    }, i.send_text_message = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                                        this.send_raw_message({
                                            type: "text",
                                            origin: "chat",
                                            content: t,
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, i)
                                    }, i.send_file_message = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                                        this.send_raw_message({
                                            type: "file",
                                            origin: "chat",
                                            content: {
                                                name: t,
                                                url: i,
                                                type: n
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, e)
                                    }, i.send_animation_message = function(t, i) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                        this.send_raw_message({
                                            type: "animation",
                                            origin: "chat",
                                            content: {
                                                url: t,
                                                type: i
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, n)
                                    }, i.send_audio_message = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                                        this.send_raw_message({
                                            type: "audio",
                                            origin: "chat",
                                            content: {
                                                url: t,
                                                type: i,
                                                duration: n
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, e)
                                    }, i.send_picker_message = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                                        this.send_raw_message({
                                            type: "picker",
                                            origin: "chat",
                                            content: {
                                                id: t,
                                                text: i,
                                                choices: n
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, e)
                                    }, i.send_field_message = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                                        this.send_raw_message({
                                            type: "field",
                                            origin: "chat",
                                            content: {
                                                id: t,
                                                text: i,
                                                explain: n
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, e)
                                    }, i.send_carousel_message = function(t, i) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                                        this.send_raw_message({
                                            type: "carousel",
                                            origin: "chat",
                                            content: {
                                                text: t,
                                                targets: i
                                            },
                                            timestamp: (new Date).getTime(),
                                            fingerprint: this.Ht()
                                        }, n)
                                    }, i.send_message_compose = function(t) {
                                        var i = this,
                                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                        (!0 !== this.parent.Config.lt && "1" === (navigator || {}).doNotTrack || !1 === this.parent.Config.ut) && (n = null);
                                        var n = this.Kt(n),
                                            e = t !== this.Gt.local.type && !0;
                                        (1 == e || n !== (this.Gt.local.excerpt || null) || "start" === this.Gt.local.type && this.Yt && (new Date).getTime() - this.Yt >= this.Ut) && (this.Yt = (new Date).getTime(), this.Gt.local = {
                                            type: t
                                        }, n && (this.Gt.local.excerpt = n), 1 == e && null !== this.Zt && (this.parent.Schedule.clear_timeout(this.Zt), this.Zt = null), null === this.Zt && (this.Zt = this.parent.Schedule.set_timeout(function() {
                                            i.Zt = null, i.parent.socket.emit("message:compose:send", i.Gt.local), i.parent.event.publish("message:compose:send", i.Gt.local)
                                        }, 1 == e ? 0 : this.Pt)))
                                    }, i.send_message_thread = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                            n = {
                                                type: t
                                            };
                                        i && (n.text = i), this.parent.socket.emit("message:thread", n), this.parent.event.publish("message:thread", n)
                                    }, i.receive_message_local = function(t, i, n) {
                                        var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                                            e = {
                                                from: "operator",
                                                type: t,
                                                origin: "local",
                                                timestamp: (new Date).getTime(),
                                                content: i,
                                                fingerprint: null !== e ? e : this.Ht(),
                                                user: n
                                            };
                                        this.parent.socket.emit("message:received:local", e), this.Xt(e)
                                    }, i.receive_message_mirror = function(t, i, n, e) {
                                        e = {
                                            from: "operator",
                                            type: t,
                                            origin: i,
                                            timestamp: (new Date).getTime(),
                                            content: n,
                                            fingerprint: e
                                        };
                                        this.parent.socket.emit("message:received:mirror", e)
                                    }, i.get_message_compose = function() {
                                        this.parent.event.publish("message:compose:received", this.Gt.remote)
                                    }, i.get_cached_messages = function() {
                                        return this.Qt
                                    }, i.count_message_history = function() {
                                        return this.Qt.length
                                    }, i.count_message_history_diff = function() {
                                        return this.ti.length
                                    }, i.get_message_history = function() {
                                        if (0 < this.Qt.length) {
                                            for (var t = 0; t < this.Qt.length; t++) this.Qt[t].origin = "history";
                                            this.parent.event.publish("history:messages", this.Qt)
                                        }
                                        for (var i = 0; i < this.ti.length; i++) this.ii(this.ti[i], "diff");
                                        this.ti = []
                                    }, i.is_sending_messages = function() {
                                        return 0 < this.Vt.length && !0
                                    }, i.mark_messages_as_read = function() {
                                        !0 === this.ni(void 0, void 0, !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]) && this.ei()
                                    }, i.set_messages_in_view = function(t) {
                                        this.si = t, this.mark_messages_as_read(!1)
                                    }, i.get_unread_messages = function() {
                                        this.ci = -1, this.ai()
                                    }, i.set_unread_messages_callback = function(t) {
                                        this.ri = t
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.oi = function(t) {
                                        this.hi(t)
                                    }, i.li = function(t) {
                                        t && (this.Gt.remote = t)
                                    }, i.ui = function(t) {
                                        if (t) {
                                            this.fi(t);
                                            for (var i = 0; i < t.length; i++) this.ti.push(t[i]);
                                            this.ai()
                                        }
                                    }, i.hi = function(t) {
                                        this.Qt = t = t || [], this.di = [], this.fi(this.Qt);
                                        for (var i = 0; i < this.Qt.length; i++) {
                                            var n = this.Qt[i];
                                            this.di.push(n.fingerprint), t[i].is_me || n.read || this.vi.push(n.fingerprint)
                                        }
                                        this.ai()
                                    }, i.ht = function() {
                                        this.Qt = [], this.di = [], this.ti = [], this.vi = [], this.Vt = [], this.pi = [], this.Zt = null, this.si = !1, this.ri = function() {}, this.ci = -1, this.Yt = 0, this.Gt = {
                                            local: {
                                                type: "stop"
                                            },
                                            remote: {
                                                type: "stop"
                                            }
                                        }
                                    }, i._t = function() {
                                        this.parent.socket.on("message:updated", this.Jt.Mt(this)), this.parent.socket.on("message:sent", this.yi.Mt(this)), this.parent.socket.on("message:received", this.mi.Mt(this)), this.parent.socket.on("message:received:local", this.Xt.Mt(this)), this.parent.socket.on("message:removed", this._i.Mt(this)), this.parent.socket.on("message:compose:received", this.gi.Mt(this)), this.parent.socket.on("message:acknowledge:read:send", this.wi.Mt(this)), this.parent.socket.on("message:acknowledge:read:received", this.bi.Mt(this)), this.parent.socket.on("message:acknowledge:pending", this.ki.Mt(this))
                                    }, i.Kt = function(t) {
                                        var i = null;
                                        return null === t || (t = t.match(this.Lt)) && (i = (t[1] || "").trim()), i
                                    }, i.$i = function(t) {
                                        this.parent.socket.emit("message:acknowledge:pending", {
                                            origin: "chat",
                                            fingerprints: t
                                        }), this.parent.socket.emit("message:acknowledge:delivered", {
                                            origin: "chat",
                                            fingerprints: t
                                        })
                                    }, i.xi = function(t) {
                                        this.parent.socket.emit("message:acknowledge:read:received", {
                                            origin: "chat",
                                            fingerprints: t
                                        })
                                    }, i.Fi = function(t, i) {
                                        var n = !1;
                                        !1 === i && (this.vi = [], this.ai());
                                        for (var e = 0; e < this.Qt.length; e++) {
                                            var s = this.Qt[e];
                                            !0 === s.read || 0 !== t.length && -1 === t.indexOf(s.fingerprint) || i === (!0 === s.is_me) && (n = s.read = !0, this.ji(s))
                                        }
                                        return n
                                    }, i.ni = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                            i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                            n = i || !1;
                                        return !1 === i && (!0 === (2 < arguments.length && void 0 !== arguments[2] && arguments[2]) || !0 === this.si) && 0 < this.vi.length && (this.xi(this.vi), n = !0), !0 === n && this.Fi(t, i)
                                    }, i.ei = function(t, i) {
                                        if (0 < this.pi.length) {
                                            for (var n = [], e = 0; e < this.Qt.length; e++) {
                                                var s = this.Qt[e]; - 1 !== this.pi.indexOf(s.fingerprint) && (delete s.index, n.push(s))
                                            }
                                            this.pi = [], this.parent.Storage.update("message", n, t, i)
                                        } else "function" == typeof t && t()
                                    }, i.Ei = function(t, i, n) {
                                        null === this.zi(t.fingerprint) ? (this.di.push(t.fingerprint), this.Qt.push(t), this.ni(), this.ji(t), this.ei(i, n)) : "function" == typeof i && i()
                                    }, i.Ci = function(i, n, t) {
                                        var e = this,
                                            s = this.di.indexOf(i.fingerprint); - 1 !== s ? (this.ji(i), this.ei(function() {
                                            e.di.splice(s, 1), e.Qt.splice(s, 1);
                                            var t = e.vi.indexOf(i.fingerprint); - 1 !== t && (e.vi.splice(t, 1), e.ai()), "function" == typeof n && n()
                                        }, t)) : "function" == typeof n && n()
                                    }, i.zi = function(t) {
                                        t = this.di.indexOf(t);
                                        return 0 <= t && this.Qt[t] || null
                                    }, i.ji = function(t) {
                                        -1 === this.pi.indexOf(t.fingerprint) && this.pi.push(t.fingerprint)
                                    }, i.fi = function(t) {
                                        t.sort(function(t, i) {
                                            return t.timestamp < i.timestamp ? -1 : t.timestamp > i.timestamp ? 1 : 0
                                        })
                                    }, i.Ht = function() {
                                        var t = "" + (new Date).getTime() + Math.ceil(100 * Math.random());
                                        return t.length < 15 && (t += new Array(15 - t.length + 1).join("0")), parseInt(t, 10)
                                    }, i.ii = function(t, i) {
                                        t.is_me ? this.yi(t, i) : this.mi(t, i)
                                    }, i.ai = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                                            i = this.vi.length;
                                        i !== this.ci && (this.ci = i, "function" == typeof this.ri && this.ri(i, this.vi, [].concat(this.Qt, t)))
                                    }, i.Jt = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                                            n = this.zi(t.fingerprint);
                                        null !== n && (n.content = t.content, n.edited = !0, this.ii(n, "update"), "local" !== i && (this.ji(n), this.ei()))
                                    }, i.yi = function(t) {
                                        var i = this,
                                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                                            e = this.Vt.indexOf(t.fingerprint); - 1 !== e && this.Vt.splice(e, 1);
                                        var s = t.origin;
                                        t.origin = n, t.index = {
                                            current: 1,
                                            total: 1
                                        }, this.Ei(t, function() {
                                            "chat" === s || "network" !== n && "diff" !== n || i.$i([t.fingerprint]), i.parent.event.publish("message:sent", t)
                                        }), 1 === this.count_message_history() && this.parent.Session.Ai()
                                    }, i.mi = function(t) {
                                        var i = this,
                                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "network",
                                            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "message:received";
                                        t.origin = n, t.index = {
                                            current: 1,
                                            total: 1
                                        }, "update" !== n && (this.vi.push(t.fingerprint), this.ai([t])), this.Ei(t, function() {
                                            "network" !== n && "diff" !== n || i.$i([t.fingerprint]), i.parent.event.publish(e, t)
                                        })
                                    }, i.Xt = function(t) {
                                        this.mi(t, "local", "message:received:local")
                                    }, i._i = function(t) {
                                        var i = this,
                                            n = this.zi(t.fingerprint);
                                        null !== n && (n.removed = !0, this.Ci(n, function() {
                                            i.parent.event.publish("message:removed", n)
                                        }))
                                    }, i.gi = function(t) {
                                        this.Gt.remote = t, this.parent.event.publish("message:compose:received", t)
                                    }, i.wi = function(t) {
                                        !0 === this.ni(t.fingerprints, !0) && this.ei(), this.parent.event.publish("message:acknowledge:read:send", t.fingerprints)
                                    }, i.bi = function(t) {
                                        for (var i = 0; i < t.fingerprints.length; i++) {
                                            var n = this.vi.indexOf(t.fingerprints[i]); - 1 !== n && this.vi.splice(n, 1)
                                        }
                                        this.ai()
                                    }, i.ki = function(t) {
                                        this.parent.event.publish("message:acknowledge:pending", t.fingerprints)
                                    }, t
                                }(),
                                l = function() {
                                    function t(t) {
                                        this.parent = t, this.Ii = new RegExp("^(https?\\:\\/\\/[^/]+)\\/chat\\/resume\\/\\?target_url=(.+)&session_id=(.+)$"), this.qi = /^\?.*(crisp_sid=([^&=]+)).*$/, this.Oi = /(\?.*)(crisp_sid=[^&=]+&?)(.*)$/, this.Si = 9e4, this.Di = 5e3, this.Ri = 3e3, this.Bi = 240, this.Ni = 80, this.Mi = "...", this.Ti = 24e4, this.Ui = 3e5, this.Pi = 15768e3, this.Li = 500, this.Ji = ["email", "phone", "nickname", "avatar", "company"], this.parent.disable_autoload || (this.ht(), this._t())
                                    }
                                    var i = t.prototype;
                                    return i.save = function() {
                                        var t = {
                                                domain: this.Vi(),
                                                expires: this.Wi()
                                            },
                                            i = this.Hi();
                                        t.sameSite = i.policy, !0 === i.secure && (t.secure = !0), this.parent.Register.set(this.Ki(), this.Wt, t), this.parent.token_id && this.parent.Register.set(this.Ki(this.parent.token_id), this.Wt, t), this.parent.event.publish("session:saved", this.Wt)
                                    }, i.storage_session_retrieve = function(t) {
                                        this.Gi(t.state), this.parent.Message.oi(t.message)
                                    }, i.sync_session_diff = function(t) {
                                        this.parent.Message.li(t.compose), this.parent.Message.ui(t.messages)
                                    }, i.sync_user_data = function(t) {
                                        for (var i = 0; i < this.Ji.length; i++) {
                                            var n = this.Ji[i];
                                            this.Yi[n] && this.Yi[n] !== t[n] ? this["set_".concat(n)](this.Yi[n], !0, this.Zi[n]) : this.Yi[n] = t[n] || null
                                        }
                                        this.Xi(t.segments || [], this.Yi.segments), this.Qi(t.data || {}, this.Yi.data)
                                    }, i.send_device = function() {
                                        var t = this.tn();
                                        null !== t && this.parent.socket.emit("session:device", t)
                                    }, i.send_event = function() {
                                        for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], i = {
                                                events: []
                                            }, n = 0; n < t.length; n++) {
                                            var e = t[n],
                                                s = {
                                                    text: e[0]
                                                };
                                            null !== e[1] && (s.data = e[1]), null !== e[2] && (s.color = e[2]), i.events.push(s)
                                        }
                                        0 < i.events.length && this.parent.socket.emit("session:event", i)
                                    }, i.send_feedback_rate = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                                            n = {
                                                rating: {
                                                    stars: t
                                                }
                                            };
                                        null !== i && (n.rating.comment = i), this.parent.socket.emit("session:feedback:rate", n), this.parent.event.publish("session:feedback:rate", n)
                                    }, i.get_request_initiate = function(t) {
                                        Object.keys && 0 === Object.keys(this.in).length && 0 < this.parent.Message.count_message_history_diff() && this.nn({}), "function" == typeof t && t()
                                    }, i.get_state = function(t) {
                                        this.handle_state(this.in, t)
                                    }, i.handle_state = function(t, i) {
                                        this.in = t, this.parent.event.publish("session:state", this.in), "function" == typeof i && i()
                                    }, i.set_state = function(t, i) {
                                        for (var n in t) this.in[n] = t[n];
                                        this.parent.Storage.update("state", t), this.sync_state(t, i)
                                    }, i.sync_state = function(t, i) {
                                        this.parent.socket.emit("session:state", t), "function" == typeof i && i()
                                    }, i.create = function() {
                                        var t = {
                                            website_id: this.parent.website_id,
                                            website_domain: this.parent.website_domain,
                                            useragent: this.parent.device.useragent || "",
                                            timezone: this.parent.device.timezone || 0,
                                            capabilities: this.parent.device.capabilities || [],
                                            locales: this.parent.device.locales || []
                                        };
                                        this.parent.token_id && (t.token_id = this.parent.token_id), this.parent.socket.emit("session:create", t)
                                    }, i.get_email = function() {
                                        return this.Yi.email
                                    }, i.set_email = function(t) {
                                        var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                                            s = {};
                                        null !== e && ("string" == (i = typeof e) ? s.verify = e : "object" == i && (s = e)), !0 === this.en("email", t, n, s) && this.Ai()
                                    }, i.get_phone = function() {
                                        return this.Yi.phone
                                    }, i.set_phone = function(t) {
                                        this.en("phone", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                                    }, i.get_nickname = function() {
                                        return this.Yi.nickname
                                    }, i.set_nickname = function(t) {
                                        this.en("nickname", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                                    }, i.get_avatar = function() {
                                        return this.Yi.avatar
                                    }, i.set_avatar = function(t) {
                                        this.en("avatar", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                                    }, i.get_company = function() {
                                        return this.Yi.company
                                    }, i.set_company = function(t) {
                                        this.en("company", t, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                                    }, i.get_data = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                        return null === t ? this.Yi.data : this.Yi.data[t] || null
                                    }, i.set_data = function(t) {
                                        var i = this;
                                        if (this.sn.data = this.sn.data || {}, t)
                                            for (var n in t) this.sn.data[n] = t[n];
                                        this.cn("data", function() {
                                            i.Qi(i.Yi.data || {}, i.sn.data), delete i.sn.data
                                        })
                                    }, i.set_segments = function(t) {
                                        var i = this,
                                            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                                        if (!0 === n) this.sn.segments = t || [];
                                        else if (this.sn.segments = this.sn.segments || [], t)
                                            for (var e = 0; e < t.length; e++) this.sn.segments.push(t[e]);
                                        this.cn("segments", function() {
                                            i.Xi(i.Yi.segments || [], i.sn.segments, n), delete i.sn.segments
                                        }, n || !1)
                                    }, i.mark_active = function() {
                                        var t = (new Date).getTime();
                                        t - Math.min(this.an || t, this.rn || t) >= this.Si && this.hn(!0), this.an = t
                                    }, i.acquire_saved = function() {
                                        var t = this.ln(),
                                            i = null,
                                            n = (location.search || "").match(this.qi),
                                            e = (document.referrer || "").match(this.Ii);
                                        n && n[2] && n[2] !== t.current && (i = n[2] || null);
                                        e = (i = e && e[1] === this.parent.url_go && e[3] !== t.current ? e[3] || null : i) || t.current, i = null;
                                        return {
                                            session_id: e,
                                            merge: i = t.previous && t.current !== t.previous && t.current === e ? t.previous : i
                                        }
                                    }, i.restore = function() {
                                        var t = this.acquire_saved();
                                        this.un(t.session_id, t.merge)
                                    }, i.join = function() {
                                        var t, i = {
                                            website_id: this.parent.website_id,
                                            session_id: this.Wt,
                                            expire: this.Ui,
                                            storage: !0,
                                            sync: 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                            useragent: this.parent.device.useragent || "",
                                            timezone: this.parent.device.timezone || 0,
                                            capabilities: this.parent.device.capabilities || [],
                                            locales: this.parent.device.locales || []
                                        };
                                        this.dn || null !== (t = this.tn()) && (i.device = t), null !== this.vn && (i.merge = {
                                            session_id: this.vn
                                        }), this.parent.socket.emit("session:join", i)
                                    }, i.reset = function(t, i) {
                                        var n = null;
                                        try {
                                            for (var e in this.parent) {
                                                var s = this.parent[e];
                                                s !== this && s && "object" == typeof s && "function" == typeof s.reset && s.reset()
                                            }
                                            this.pn()
                                        } catch (t) {
                                            n = t
                                        }
                                        n ? "function" == typeof i && i(n) : "function" == typeof t && t()
                                    }, i.Ai = function() {
                                        var t = this;
                                        this.Yi.email && (this.yn && this.parent.Schedule.clear_timeout(this.yn), this.yn = this.parent.Schedule.set_timeout(function() {
                                            t.yn = null, t.hn(!0)
                                        }, this.Di))
                                    }, i.ht = function() {
                                        if ("object" == typeof this.mn)
                                            for (var t in this.mn) this.parent.Schedule.clear_timeout(this.mn[t]);
                                        this.Wt = null, this.vn = null, this.dn = !1, this.an = 0, this.rn = (new Date).getTime(), this.gn = null, this.yn = null, this.wn = null, this.bn = null, this.Yi = {}, this.Zi = {}, this.in = {}, this.mn = {}, this.sn = {}
                                    }, i._t = function() {
                                        var t = this;
                                        this.parent.socket.on("session:created", this.kn.Mt(this)), this.parent.socket.on("session:joined", this.$n.Mt(this)), this.parent.socket.on("session:state", this.xn.Mt(this)), this.parent.socket.on("session:error", this.Fn.Mt(this)), this.parent.socket.on("session:request:initiate", this.nn.Mt(this)), this.parent.socket.on("session:request:purge", this.jn.Mt(this)), this.parent.socket.on("session:request:feedback", this.En.Mt(this)), this.parent.socket.on("session:feedback:rated", this.zn.Mt(this)), this.parent.socket.on("connect", function() {
                                            t.dn ? t.join(!0) : t.restore()
                                        })
                                    }, i.kn = function(t) {
                                        var i;
                                        t.error ? this.parent.event.publish("session:created", {
                                            error: t.error
                                        }) : (i = !!this.parent.token_id, this.Wt = t.session_id, this.save(), this.join(i), this.parent.event.publish("session:created", {
                                            session_id: this.Wt
                                        }))
                                    }, i.$n = function(t) {
                                        t.error ? this.parent.event.publish("session:joined", {
                                            error: t.error
                                        }) : (this.dn || (this.dn = !0), this.parent.Website.set_users_available(t.users_available), this.storage_session_retrieve(t.storage || {}), this.sync_session_diff(t.sync || {}), this.sync_user_data(t), this.parent.Browsing.restore_browsing_state(), this.parent.event.publish("session:joined", t), this.Cn(t.last_active))
                                    }, i.xn = function(t) {
                                        this.handle_state(t)
                                    }, i.Fn = function(t) {
                                        "email:invalid_format" === t.type && (delete this.Yi.email, delete this.Zi.email), this.parent.event.publish("session:error", t)
                                    }, i.nn = function(t) {
                                        this.parent.event.publish("session:request:initiate", t)
                                    }, i.jn = function(t) {
                                        this.parent.event.publish("session:request:purge", t)
                                    }, i.En = function(t) {
                                        this.parent.event.publish("session:request:feedback", t)
                                    }, i.zn = function(t) {
                                        this.parent.event.publish("session:feedback:rated", t)
                                    }, i.pn = function() {
                                        this.ht();
                                        var t = {
                                            domain: this.Vi()
                                        };
                                        this.parent.Register.expire(this.Ki(), t), this.parent.token_id && this.parent.Register.expire(this.Ki(this.parent.token_id), t)
                                    }, i.ln = function() {
                                        var t = {
                                            previous: null,
                                            current: null
                                        };
                                        return this.parent.token_id ? (this.parent.runtime_configuration && !0 === this.parent.runtime_configuration.session_merge && (t.previous = this.parent.Register.get(this.Ki()) || null), t.current = this.parent.Register.get(this.Ki(this.parent.token_id)) || null) : t.current = this.parent.Register.get(this.Ki()) || null, t
                                    }, i.un = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                        null !== i && (this.vn = i), t ? (this.Wt = t, this.save(), this.join(!0)) : this.create()
                                    }, i.Gi = function(t) {
                                        this.in = t || {}
                                    }, i.Cn = function() {
                                        this.an = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0) || (new Date).getTime(), this.hn()
                                    }, i.hn = function() {
                                        var t = this,
                                            i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                        this.gn && this.parent.Schedule.clear_timeout(this.gn), this.gn = this.parent.Schedule.set_timeout(function() {
                                            t.gn = null, t.rn = (new Date).getTime(), t.parent.socket.emit("session:heartbeat", {
                                                last_active: t.an || 0,
                                                availability: {
                                                    type: "online",
                                                    time: {
                                                        for: t.Ui
                                                    }
                                                }
                                            }), t.hn()
                                        }, !0 === i ? 0 : this.Ti)
                                    }, i.tn = function() {
                                        var t = document.location.href || "";
                                        if (this.wn !== t) {
                                            this.wn = t;
                                            var i = (new Date).getTime();
                                            if (i - (this.bn || 0) >= this.Ri) {
                                                this.bn = i;
                                                var n = document.title || "";
                                                if (n.length > this.Ni && (n = n.substring(0, this.Ni - this.Mi.length), n += this.Mi), !0 === this.Oi.test(t) && ("?" !== (i = (t = t.replace(this.Oi, "$1$3"))[t.length - 1]) && "&" !== i || (t = t.substr(0, t.length - 1))), (t = t.length > this.Bi ? t.split("?")[0] || "" : t) && n && t.length <= this.Bi) {
                                                    t = {
                                                        page_url: t,
                                                        page_title: n
                                                    }, n = (document.referrer || "").split("?")[0] || "";
                                                    return n && n.length <= this.Bi && (t.page_referrer = n), t
                                                }
                                            }
                                        }
                                        return null
                                    }, i.Ki = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                            i = [this.parent.website_id];
                                        return t && i.push(t), this.parent.Storage.Rt("session", i)
                                    }, i.Wi = function() {
                                        return "number" == typeof this.parent.cookie_expire && 0 < this.parent.cookie_expire ? this.parent.cookie_expire : this.Pi
                                    }, i.Vi = function() {
                                        return "string" == typeof this.parent.cookie_domain && this.parent.cookie_domain ? this.parent.cookie_domain : this.An()
                                    }, i.Hi = function() {
                                        return !0 === this.parent.runtime_configuration.cross_origin_cookies && "https:" === document.location.protocol ? {
                                            policy: "none",
                                            secure: !0
                                        } : {
                                            policy: "lax"
                                        }
                                    }, i.An = function() {
                                        var t = document.domain,
                                            i = t,
                                            n = this.Hi(),
                                            e = "samesite=".concat(n.policy, ";") + (!0 === n.secure ? "secure;" : "");
                                        try {
                                            for (var s = 0, c = i.split("."), a = this.parent.Storage.Rt("domain-detect", ["".concat((new Date).getTime())]); s < c.length - 1 && -1 === document.cookie.indexOf("".concat(a, "=").concat(a));) i = c.slice(-1 - ++s).join("."), document.cookie = "".concat(a, "=").concat(a, ";domain=").concat(i, ";").concat(e);
                                            document.cookie = "".concat(a, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;") + "domain=".concat(i, ";").concat(e)
                                        } catch (t) {} finally {
                                            return i || t
                                        }
                                    }, i.en = function(t, i) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                                            e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                                            s = !1;
                                        if (!0 === n ? s = !0 : i instanceof Object ? !1 === this.In(this.Yi[t], i) && (s = !0) : this.Yi[t] !== i && (s = !0), !0 !== s || (this.Yi[t] = i, this.Zi[t] = e, !0 !== this.dn)) return !1;
                                        var c, a = {};
                                        for (c in a[t] = i, e) a[c] = e[c];
                                        return this.parent.socket.emit("session:set_".concat(t), a), !0
                                    }, i.Xi = function(t) {
                                        for (var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], s = [], c = 0; c < n.length; c++) {
                                            var a = (n[c] || "").trim().toLowerCase();
                                            a && -1 === t.indexOf(a) && s.push(a)
                                        }!0 === e ? 0 < s.length || t.length !== n.length ? (i = [].concat(n), this.Yi.segments = i) : i = [] : this.Yi.segments = t.concat(i = s), 0 < i.length && !0 === this.dn && (i = {
                                            segments: i
                                        }, !0 === e && (i.overwrite = !0), this.parent.socket.emit("session:set_segments", i))
                                    }, i.Qi = function(t) {
                                        var i, n, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                            s = !1,
                                            c = {};
                                        for (i in e) t[i] !== e[i] && (s = !0, c[i] = e[i]);
                                        for (n in this.Yi.data = t, c) this.Yi.data[n] = c[n];
                                        !0 === s && !0 === this.dn && this.parent.socket.emit("session:set_data", {
                                            data: c
                                        })
                                    }, i.In = function(t, i) {
                                        if (t instanceof Object && i instanceof Object) {
                                            var n, e, s = {};
                                            for (n in t) s[n] = !0;
                                            for (e in i) s[e] = !0;
                                            var c, a = !0;
                                            for (c in s)
                                                if (!1 === this.In(t[c], i[c])) {
                                                    a = !1;
                                                    break
                                                }
                                            return a
                                        }
                                        return t === i && !0
                                    }, i.cn = function(t, i) {
                                        var n = this;
                                        !0 === (2 < arguments.length && void 0 !== arguments[2] && arguments[2]) ? (void 0 !== this.mn[t] && (this.parent.Schedule.clear_timeout(this.mn[t]), delete this.mn[t]), i()) : void 0 === this.mn[t] && (this.mn[t] = this.parent.Schedule.set_timeout(function() {
                                            delete n.mn[t], i()
                                        }, this.Li))
                                    }, t
                                }(),
                                u = function() {
                                    function t(t) {
                                        this.parent = t, this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.get_users_available = function() {
                                        this.qn(!1)
                                    }, i.set_users_available = function(t) {
                                        this.On = t
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.ht = function() {
                                        this.On = !1
                                    }, i._t = function() {
                                        this.parent.socket.on("website:users:available", this.Sn.Mt(this))
                                    }, i.Sn = function(t) {
                                        "boolean" == typeof t && (this.set_users_available(t), this.qn(!0))
                                    }, i.qn = function() {
                                        this.parent.event.publish("website:users:available", {
                                            available: this.On,
                                            changed: 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                                        })
                                    }, t
                                }(),
                                f = function() {
                                    function t(t) {
                                        this.parent = t, this._t()
                                    }
                                    var i = t.prototype;
                                    return i.get_url_upload = function(t, i) {
                                        i = {
                                            id: "".concat((new Date).getTime()),
                                            from: "visitor",
                                            file: {
                                                name: t,
                                                type: i
                                            }
                                        };
                                        this.parent.socket.emit("bucket:url:upload:generate", i), this.parent.event.publish("bucket:url:upload:generate", i)
                                    }, i._t = function() {
                                        this.parent.socket.on("bucket:url:upload:generated", this.Dn.Mt(this))
                                    }, i.Dn = function(t) {
                                        this.parent.event.publish("bucket:url:upload:generated", t)
                                    }, t
                                }(),
                                d = function() {
                                    function t(t) {
                                        this.parent = t, this._t()
                                    }
                                    var i = t.prototype;
                                    return i.get_animation_list = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                                            i = {
                                                id: (new Date).getTime(),
                                                from: "visitor",
                                                list: {
                                                    page: i
                                                }
                                            };
                                        t && (i.list.query = t), this.parent.socket.emit("media:animation:list", i), this.parent.event.publish("media:animation:list", i)
                                    }, i._t = function() {
                                        this.parent.socket.on("media:animation:listed", this.Rn.Mt(this))
                                    }, i.Rn = function(t) {
                                        this.parent.event.publish("media:animation:listed", t)
                                    }, t
                                }();

                            function v(t, i, n) {
                                var e;
                                return (i = "symbol" == typeof(e = function(t, i) {
                                    if ("object" != typeof t || null === t) return t;
                                    var n = t[Symbol.toPrimitive];
                                    if (void 0 === n) return String(t);
                                    t = n.call(t, "string");
                                    if ("object" != typeof t) return t;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }(i)) ? e : String(e)) in t ? Object.defineProperty(t, i, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[i] = n, t
                            }

                            function p() {
                                "use strict";

                                function o(t) {
                                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                        return typeof t
                                    } : function(t) {
                                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                    })(t)
                                }

                                function e(t, i) {
                                    for (var n = 0; n < i.length; n++) {
                                        var e = i[n];
                                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                                    }
                                }

                                function c(t, i, n) {
                                    return i && e(t.prototype, i), n && e(t, n), t
                                }

                                function s() {
                                    return (s = Object.assign || function(t) {
                                        for (var i = 1; i < arguments.length; i++) {
                                            var n, e = arguments[i];
                                            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                        }
                                        return t
                                    }).apply(this, arguments)
                                }

                                function a(t, i) {
                                    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                                    t.prototype = Object.create(i && i.prototype, {
                                        constructor: {
                                            value: t,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), i && r(t, i)
                                }

                                function h(t) {
                                    return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                        return t.__proto__ || Object.getPrototypeOf(t)
                                    })(t)
                                }

                                function r(t, i) {
                                    return (r = Object.setPrototypeOf || function(t, i) {
                                        return t.__proto__ = i, t
                                    })(t, i)
                                }

                                function l() {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }

                                function u(t, i, n) {
                                    return (u = l() ? Reflect.construct : function(t, i, n) {
                                        var e = [null];
                                        e.push.apply(e, i);
                                        e = new(Function.bind.apply(t, e));
                                        return n && r(e, n.prototype), e
                                    }).apply(null, arguments)
                                }

                                function n(t) {
                                    var n = "function" == typeof Map ? new Map : void 0;
                                    return function(t) {
                                        if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                                        if (void 0 !== n) {
                                            if (n.has(t)) return n.get(t);
                                            n.set(t, i)
                                        }

                                        function i() {
                                            return u(t, arguments, h(this).constructor)
                                        }
                                        return i.prototype = Object.create(t.prototype, {
                                            constructor: {
                                                value: i,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), r(i, t)
                                    }(t)
                                }

                                function f(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }

                                function d(n) {
                                    var e = l();
                                    return function() {
                                        var t, i = h(n);
                                        return function(t, i) {
                                            if (i && ("object" == typeof i || "function" == typeof i)) return i;
                                            if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
                                            return f(t)
                                        }(this, e ? (t = h(this).constructor, Reflect.construct(i, arguments, t)) : i.apply(this, arguments))
                                    }
                                }

                                function v(t, i, n) {
                                    return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, i, n) {
                                        t = function(t, i) {
                                            for (; !Object.prototype.hasOwnProperty.call(t, i) && null !== (t = h(t)););
                                            return t
                                        }(t, i);
                                        if (t) {
                                            i = Object.getOwnPropertyDescriptor(t, i);
                                            return i.get ? i.get.call(n) : i.value
                                        }
                                    })(t, i, n || t)
                                }

                                function p(t, i) {
                                    (null == i || i > t.length) && (i = t.length);
                                    for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
                                    return e
                                }
                                var y = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                    m = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                                    _ = Object.create(null);
                                _.open = "0", _.close = "1", _.ping = "2", _.pong = "3", _.message = "4", _.upgrade = "5", _.noop = "6";
                                var g = Object.create(null);
                                Object.keys(_).forEach(function(t) {
                                    g[_[t]] = t
                                });
                                for (var w = {
                                        type: "error",
                                        data: "parser error"
                                    }, b = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), k = "function" == typeof ArrayBuffer, $ = function(t, i) {
                                        var n = new FileReader;
                                        return n.onload = function() {
                                            var t = n.result.split(",")[1];
                                            i("b" + t)
                                        }, n.readAsDataURL(t)
                                    }, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", x = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < t.length; i++) x[t.charCodeAt(i)] = i;

                                function F(t, i) {
                                    return "blob" === i && t instanceof ArrayBuffer ? new Blob([t]) : t
                                }
                                var j = "function" == typeof ArrayBuffer,
                                    E = z;

                                function z(t) {
                                    if (t) return function(t) {
                                        for (var i in z.prototype) t[i] = z.prototype[i];
                                        return t
                                    }(t)
                                }
                                z.prototype.on = z.prototype.addEventListener = function(t, i) {
                                    return this.Bn = this.Bn || {}, (this.Bn["$" + t] = this.Bn["$" + t] || []).push(i), this
                                }, z.prototype.once = function(t, i) {
                                    function n() {
                                        this.off(t, n), i.apply(this, arguments)
                                    }
                                    return n.fn = i, this.on(t, n), this
                                }, z.prototype.off = z.prototype.removeListener = z.prototype.removeAllListeners = z.prototype.removeEventListener = function(t, i) {
                                    if (this.Bn = this.Bn || {}, 0 == arguments.length) return this.Bn = {}, this;
                                    var n, e = this.Bn["$" + t];
                                    if (!e) return this;
                                    if (1 == arguments.length) return delete this.Bn["$" + t], this;
                                    for (var s = 0; s < e.length; s++)
                                        if ((n = e[s]) === i || n.fn === i) {
                                            e.splice(s, 1);
                                            break
                                        }
                                    return 0 === e.length && delete this.Bn["$" + t], this
                                }, z.prototype.emitReserved = z.prototype.emit = function(t) {
                                    this.Bn = this.Bn || {};
                                    for (var i = new Array(arguments.length - 1), n = this.Bn["$" + t], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
                                    if (n)
                                        for (var e = 0, s = (n = n.slice(0)).length; e < s; ++e) n[e].apply(this, i);
                                    return this
                                }, z.prototype.listeners = function(t) {
                                    return this.Bn = this.Bn || {}, this.Bn["$" + t] || []
                                }, z.prototype.hasListeners = function(t) {
                                    return !!this.listeners(t).length
                                }, "undefined" != typeof self || "undefined" != typeof window || Function("return this")();
                                var C = setTimeout,
                                    A = clearTimeout;

                                function I(t, i) {
                                    i.useNativeTimers ? (t.setTimeoutFn = C.bind(window), t.clearTimeoutFn = A.bind(window)) : (t.setTimeoutFn = setTimeout.bind(window), t.clearTimeoutFn = clearTimeout.bind(window))
                                }
                                var q, O = function(t) {
                                        a(i, n(Error));
                                        var e = d(i);

                                        function i(t, i, n) {
                                            t = e.call(this, t);
                                            return t.description = i, t.context = n, t.type = "TransportError", t
                                        }
                                        return i
                                    }(),
                                    S = function(t) {
                                        a(e, E);
                                        var n = d(e);

                                        function e(t) {
                                            var i = n.call(this);
                                            return i.writable = !1, I(f(i), t), i.opts = t, i.query = t.query, i.readyState = "", i.socket = t.socket, i
                                        }
                                        return c(e, [{
                                            key: "onError",
                                            value: function(t, i, n) {
                                                return v(h(e.prototype), "emitReserved", this).call(this, "error", new O(t, i, n)), this
                                            }
                                        }, {
                                            key: "open",
                                            value: function() {
                                                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
                                            }
                                        }, {
                                            key: "close",
                                            value: function() {
                                                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                                            }
                                        }, {
                                            key: "send",
                                            value: function(t) {
                                                "open" === this.readyState && this.write(t)
                                            }
                                        }, {
                                            key: "onOpen",
                                            value: function() {
                                                this.readyState = "open", this.writable = !0, v(h(e.prototype), "emitReserved", this).call(this, "open")
                                            }
                                        }, {
                                            key: "onData",
                                            value: function(t) {
                                                t = function(t, i) {
                                                    if ("string" != typeof t) return {
                                                        type: "message",
                                                        data: F(t, i)
                                                    };
                                                    var n, e = t.charAt(0);
                                                    return "b" === e ? {
                                                        type: "message",
                                                        data: (n = t.substring(1), i = i, j ? F(function(t) {
                                                            var i, n, e, s, c = .75 * t.length,
                                                                a = t.length,
                                                                r = 0;
                                                            "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                                                            for (var c = new ArrayBuffer(c), o = new Uint8Array(c), h = 0; h < a; h += 4) i = x[t.charCodeAt(h)], n = x[t.charCodeAt(h + 1)], e = x[t.charCodeAt(h + 2)], s = x[t.charCodeAt(h + 3)], o[r++] = i << 2 | n >> 4, o[r++] = (15 & n) << 4 | e >> 2, o[r++] = (3 & e) << 6 | 63 & s;
                                                            return c
                                                        }(n), i) : {
                                                            base64: !0,
                                                            data: n
                                                        })
                                                    } : g[e] ? 1 < t.length ? {
                                                        type: g[e],
                                                        data: t.substring(1)
                                                    } : {
                                                        type: g[e]
                                                    } : w
                                                }(t, this.socket.binaryType);
                                                this.onPacket(t)
                                            }
                                        }, {
                                            key: "onPacket",
                                            value: function(t) {
                                                v(h(e.prototype), "emitReserved", this).call(this, "packet", t)
                                            }
                                        }, {
                                            key: "onClose",
                                            value: function(t) {
                                                this.readyState = "closed", v(h(e.prototype), "emitReserved", this).call(this, "close", t)
                                            }
                                        }]), e
                                    }(),
                                    D = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                                    R = {},
                                    B = 0,
                                    N = 0;

                                function M(t) {
                                    for (var i = ""; i = D[t % 64] + i, 0 < (t = Math.floor(t / 64)););
                                    return i
                                }
                                for (; N < 64; N++) R[D[N]] = N;
                                var T = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
                                        return Promise.resolve().then(t)
                                    } : function(t, i) {
                                        return i(t, 0)
                                    },
                                    U = window.WebSocket || window.MozWebSocket,
                                    P = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
                                    L = {
                                        websocket: function(t) {
                                            a(i, S);
                                            var n = d(i);

                                            function i(t) {
                                                var i = n.call(this, t);
                                                return i.supportsBinary = !t.forceBase64, i
                                            }
                                            return c(i, [{
                                                key: "name",
                                                get: function() {
                                                    return "websocket"
                                                }
                                            }, {
                                                key: "doOpen",
                                                value: function() {
                                                    if (this.check()) {
                                                        var t = this.uri(),
                                                            i = this.opts.protocols,
                                                            n = P ? {} : function(n) {
                                                                for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) i[e - 1] = arguments[e];
                                                                return i.reduce(function(t, i) {
                                                                    return n.hasOwnProperty(i) && (t[i] = n[i]), t
                                                                }, {})
                                                            }(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                                        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                                                        try {
                                                            this.ws = P ? new U(t, i, n) : i ? new U(t, i) : new U(t)
                                                        } catch (t) {
                                                            return this.emitReserved("error", t)
                                                        }
                                                        this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners()
                                                    }
                                                }
                                            }, {
                                                key: "addEventListeners",
                                                value: function() {
                                                    var i = this;
                                                    this.ws.onopen = function() {
                                                        i.opts.autoUnref && i.ws.Nn.unref(), i.onOpen()
                                                    }, this.ws.onclose = function(t) {
                                                        return i.onClose({
                                                            description: "websocket connection closed",
                                                            context: t
                                                        })
                                                    }, this.ws.onmessage = function(t) {
                                                        return i.onData(t.data)
                                                    }, this.ws.onerror = function(t) {
                                                        return i.onError("websocket error", t)
                                                    }
                                                }
                                            }, {
                                                key: "write",
                                                value: function(a) {
                                                    var r = this;
                                                    this.writable = !1;
                                                    for (var t = 0; t < a.length; t++)(function(t) {
                                                        function i(t) {
                                                            try {
                                                                r.ws.send(t)
                                                            } catch (t) {}
                                                            e && T(function() {
                                                                r.writable = !0, r.emitReserved("drain")
                                                            }, r.setTimeoutFn)
                                                        }
                                                        var n = a[t],
                                                            e = t === a.length - 1,
                                                            s = r.supportsBinary,
                                                            c = n.type,
                                                            t = n.data;
                                                        b && t instanceof Blob ? s ? i(t) : $(t, i) : k && (t instanceof ArrayBuffer || (n = t, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer)) ? s ? i(t) : $(new Blob([t]), i) : i(_[c] + (t || ""))
                                                    })(t)
                                                }
                                            }, {
                                                key: "doClose",
                                                value: function() {
                                                    void 0 !== this.ws && (this.ws.close(), this.ws = null)
                                                }
                                            }, {
                                                key: "uri",
                                                value: function() {
                                                    var t, i = this.query || {},
                                                        n = this.opts.secure ? "wss" : "ws",
                                                        e = "";
                                                    this.opts.port && ("wss" == n && 443 !== Number(this.opts.port) || "ws" == n && 80 !== Number(this.opts.port)) && (e = ":" + this.opts.port), this.opts.timestampRequests && (i[this.opts.timestampParam] = (t = M(+new Date)) !== q ? (B = 0, q = t) : t + "." + M(B++)), this.supportsBinary || (i.b64 = 1);
                                                    i = function(t) {
                                                        var i, n = "";
                                                        for (i in t) t.hasOwnProperty(i) && (n.length && (n += "&"), n += encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                                                        return n
                                                    }(i);
                                                    return n + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + e + this.opts.path + (i.length ? "?" + i : "")
                                                }
                                            }, {
                                                key: "check",
                                                value: function() {
                                                    return !(!U || "Mn" in U && this.name === i.prototype.name)
                                                }
                                            }]), i
                                        }()
                                    },
                                    J = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                    V = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

                                function W(t) {
                                    var i = t,
                                        n = t.indexOf("["),
                                        e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                    for (var s, c = J.exec(t || ""), a = {}, r = 14; r--;) a[V[r]] = c[r] || "";
                                    return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (i = (e = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != e.substr(0, 1) && 0 !== e.length || i.splice(0, 1), "/" == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1), i), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                        i && (s[i] = n)
                                    }), s), a
                                }
                                var H = function(t) {
                                    a(u, E);
                                    var n = d(u);

                                    function u(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                            a = n.call(this);
                                        return t && "object" === o(t) && (i = t, t = null), t ? (t = W(t), i.hostname = t.host, i.secure = "https" === t.protocol || "wss" === t.protocol, i.port = t.port, t.query && (i.query = t.query)) : i.host && (i.hostname = W(i.host).host), I(f(a), i), a.secure = null != i.secure ? i.secure : "undefined" != typeof location && "https:" === location.protocol, i.hostname && !i.port && (i.port = a.secure ? "443" : "80"), a.hostname = i.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), a.port = i.port || ("undefined" != typeof location && location.port ? location.port : a.secure ? "443" : "80"), a.transports = i.transports || ["websocket"], a.readyState = "", a.writeBuffer = [], a.prevBufferLen = 0, a.opts = s({
                                            path: "/engine.io",
                                            agent: !1,
                                            withCredentials: !1,
                                            upgrade: !0,
                                            timestampParam: "t",
                                            rememberUpgrade: !1,
                                            rejectUnauthorized: !0,
                                            perMessageDeflate: {
                                                threshold: 1024
                                            },
                                            transportOptions: {},
                                            closeOnBeforeunload: !0
                                        }, i), a.opts.path = a.opts.path.replace(/\/$/, "") + "/", "string" == typeof a.opts.query && (a.opts.query = function(t) {
                                            for (var i = {}, n = a.opts.query.split("&"), e = 0, s = n.length; e < s; e++) {
                                                var c = n[e].split("=");
                                                i[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
                                            }
                                            return i
                                        }()), a.id = null, a.upgrades = null, a.pingInterval = null, a.pingTimeout = null, a.pingTimeoutTimer = null, "function" == typeof addEventListener && (a.opts.closeOnBeforeunload && addEventListener("beforeunload", function() {
                                            a.transport && (a.transport.removeAllListeners(), a.transport.close())
                                        }, !1), "localhost" !== a.hostname && (a.offlineEventListener = function() {
                                            a.onClose("transport close", {
                                                description: "network connection lost"
                                            })
                                        }, addEventListener("offline", a.offlineEventListener, !1))), a.open(), a
                                    }
                                    return c(u, [{
                                        key: "createTransport",
                                        value: function(t) {
                                            var i = function(t) {
                                                var i, n = {};
                                                for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                                                return n
                                            }(this.opts.query);
                                            i.EIO = 4, i.transport = t, this.id && (i.sid = this.id);
                                            i = s({}, this.opts.transportOptions[t], this.opts, {
                                                query: i,
                                                socket: this,
                                                hostname: this.hostname,
                                                secure: this.secure,
                                                port: this.port
                                            });
                                            return new L[t](i)
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            var t, i = this;
                                            if (this.opts.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                            else {
                                                if (0 === this.transports.length) return void this.setTimeoutFn(function() {
                                                    i.emitReserved("error", "No transports available")
                                                }, 0);
                                                t = this.transports[0]
                                            }
                                            this.readyState = "opening";
                                            try {
                                                t = this.createTransport(t)
                                            } catch (t) {
                                                return this.transports.shift(), void this.open()
                                            }
                                            t.open(), this.setTransport(t)
                                        }
                                    }, {
                                        key: "setTransport",
                                        value: function(t) {
                                            var i = this;
                                            this.transport && this.transport.removeAllListeners(), (this.transport = t).on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function(t) {
                                                return i.onClose("transport close", t)
                                            })
                                        }
                                    }, {
                                        key: "probe",
                                        value: function(t) {
                                            var i = this,
                                                n = this.createTransport(t),
                                                e = !1;
                                            u.priorWebsocketSuccess = !1;
                                            var s = function() {
                                                e || (n.send([{
                                                    type: "ping",
                                                    data: "probe"
                                                }]), n.once("packet", function(t) {
                                                    e || ("pong" === t.type && "probe" === t.data ? (i.upgrading = !0, i.emitReserved("upgrading", n), n && (u.priorWebsocketSuccess = "websocket" === n.name, i.transport.pause(function() {
                                                        e || "closed" !== i.readyState && (l(), i.setTransport(n), n.send([{
                                                            type: "upgrade"
                                                        }]), i.emitReserved("upgrade", n), n = null, i.upgrading = !1, i.flush())
                                                    }))) : ((t = new Error("probe error")).transport = n.name, i.emitReserved("upgradeError", t)))
                                                }))
                                            };

                                            function c() {
                                                e || (e = !0, l(), n.close(), n = null)
                                            }
                                            var a = function(t) {
                                                t = new Error("probe error: " + t);
                                                t.transport = n.name, c(), i.emitReserved("upgradeError", t)
                                            };

                                            function r() {
                                                a("transport closed")
                                            }

                                            function o() {
                                                a("socket closed")
                                            }

                                            function h(t) {
                                                n && t.name !== n.name && c()
                                            }
                                            var l = function() {
                                                n.removeListener("open", s), n.removeListener("error", a), n.removeListener("close", r), i.off("close", o), i.off("upgrading", h)
                                            };
                                            n.once("open", s), n.once("error", a), n.once("close", r), this.once("close", o), this.once("upgrading", h), n.open()
                                        }
                                    }, {
                                        key: "onOpen",
                                        value: function() {
                                            if (this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                                                for (var t = 0, i = this.upgrades.length; t < i; t++) this.probe(this.upgrades[t])
                                        }
                                    }, {
                                        key: "onPacket",
                                        value: function(t) {
                                            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
                                                case "open":
                                                    this.onHandshake(JSON.parse(t.data));
                                                    break;
                                                case "ping":
                                                    this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                                                    break;
                                                case "error":
                                                    var i = new Error("server error");
                                                    i.code = t.data, this.onError(i);
                                                    break;
                                                case "message":
                                                    this.emitReserved("data", t.data), this.emitReserved("message", t.data)
                                            }
                                        }
                                    }, {
                                        key: "onHandshake",
                                        value: function(t) {
                                            this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                                        }
                                    }, {
                                        key: "resetPingTimeout",
                                        value: function() {
                                            var t = this;
                                            this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(function() {
                                                t.onClose("ping timeout")
                                            }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                                        }
                                    }, {
                                        key: "onDrain",
                                        value: function() {
                                            this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                                        }
                                    }, {
                                        key: "flush",
                                        value: function() {
                                            var t;
                                            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (t = this.getWritablePackets(), this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush"))
                                        }
                                    }, {
                                        key: "getWritablePackets",
                                        value: function() {
                                            if (!(this.maxPayload && "polling" === this.transport.name && 1 < this.writeBuffer.length)) return this.writeBuffer;
                                            for (var t = 1, i = 0; i < this.writeBuffer.length; i++) {
                                                var n = this.writeBuffer[i].data;
                                                if (n && (t += "string" == typeof(n = n) ? function(t) {
                                                        for (var i, n = 0, e = 0, s = t.length; e < s; e++)(i = t.charCodeAt(e)) < 128 ? n += 1 : i < 2048 ? n += 2 : i < 55296 || 57344 <= i ? n += 3 : (e++, n += 4);
                                                        return n
                                                    }(n) : Math.ceil(1.33 * (n.byteLength || n.size))), 0 < i && t > this.maxPayload) return this.writeBuffer.slice(0, i);
                                                t += 2
                                            }
                                            return this.writeBuffer
                                        }
                                    }, {
                                        key: "write",
                                        value: function(t, i, n) {
                                            return this.sendPacket("message", t, i, n), this
                                        }
                                    }, {
                                        key: "send",
                                        value: function(t, i, n) {
                                            return this.sendPacket("message", t, i, n), this
                                        }
                                    }, {
                                        key: "sendPacket",
                                        value: function(t, i, n, e) {
                                            "function" == typeof i && (e = i, i = void 0), "function" == typeof n && (e = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState && ((n = n || {}).compress = !1 !== n.compress, this.emitReserved("packetCreate", n = {
                                                type: t,
                                                data: i,
                                                options: n
                                            }), this.writeBuffer.push(n), e && this.once("flush", e), this.flush())
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            function t() {
                                                n.off("upgrade", t), n.off("upgradeError", t), e()
                                            }

                                            function i() {
                                                n.once("upgrade", t), n.once("upgradeError", t)
                                            }
                                            var n = this,
                                                e = function() {
                                                    n.onClose("forced close"), n.transport.close()
                                                };
                                            return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
                                                (n.upgrading ? i : e)()
                                            }) : (this.upgrading ? i : e)()), this
                                        }
                                    }, {
                                        key: "onError",
                                        value: function(t) {
                                            u.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t)
                                        }
                                    }, {
                                        key: "onClose",
                                        value: function(t, i) {
                                            "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", t, i), this.writeBuffer = [], this.prevBufferLen = 0)
                                        }
                                    }, {
                                        key: "filterUpgrades",
                                        value: function(t) {
                                            for (var i = [], n = 0, e = t.length; n < e; n++) ~this.transports.indexOf(t[n]) && i.push(t[n]);
                                            return i
                                        }
                                    }]), u
                                }();
                                H.protocol = 4;
                                var K = "function" == typeof ArrayBuffer,
                                    G = Object.prototype.toString,
                                    Y = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === G.call(Blob),
                                    Z = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === G.call(File);

                                function X(t) {
                                    return K && (t instanceof ArrayBuffer || (i = t, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(i) : i.buffer instanceof ArrayBuffer)) || Y && t instanceof Blob || Z && t instanceof File;
                                    var i
                                }
                                var Q = {
                                        CONNECT: 0,
                                        0: "CONNECT",
                                        DISCONNECT: 1,
                                        1: "DISCONNECT",
                                        EVENT: 2,
                                        2: "EVENT",
                                        ACK: 3,
                                        3: "ACK",
                                        CONNECT_ERROR: 4,
                                        4: "CONNECT_ERROR",
                                        BINARY_EVENT: 5,
                                        5: "BINARY_EVENT",
                                        BINARY_ACK: 6,
                                        6: "BINARY_ACK"
                                    },
                                    tt = function() {
                                        function t() {}
                                        return c(t, [{
                                            key: "encode",
                                            value: function(t) {
                                                return t.type !== Q.EVENT && t.type !== Q.ACK || ! function t(i, n) {
                                                    if (!i || "object" !== o(i)) return !1;
                                                    if (Array.isArray(i)) {
                                                        for (var e = 0, s = i.length; e < s; e++)
                                                            if (t(i[e])) return !0;
                                                        return !1
                                                    }
                                                    if (X(i)) return !0;
                                                    if (i.toJSON && "function" == typeof i.toJSON && 1 === arguments.length) return t(i.toJSON(), !0);
                                                    for (var c in i)
                                                        if (Object.prototype.hasOwnProperty.call(i, c) && t(i[c])) return !0;
                                                    return !1
                                                }(t) ? [this.encodeAsString(t)] : (t.type = t.type === Q.EVENT ? Q.BINARY_EVENT : Q.BINARY_ACK, this.encodeAsBinary(t))
                                            }
                                        }, {
                                            key: "encodeAsString",
                                            value: function(t) {
                                                var i = "" + t.type;
                                                return t.type !== Q.BINARY_EVENT && t.type !== Q.BINARY_ACK || (i += t.attachments + "-"), t.nsp && "/" !== t.nsp && (i += t.nsp + ","), null != t.id && (i += t.id), null != t.data && (i += JSON.stringify(t.data)), i
                                            }
                                        }, {
                                            key: "encodeAsBinary",
                                            value: function(t) {
                                                var t = (i = t.data, (t = t).data = function t(i, n) {
                                                        if (!i) return i;
                                                        if (X(i)) {
                                                            var e = {
                                                                Tn: !0,
                                                                num: n.length
                                                            };
                                                            return n.push(i), e
                                                        }
                                                        if (Array.isArray(i)) {
                                                            for (var s = new Array(i.length), c = 0; c < i.length; c++) s[c] = t(i[c], n);
                                                            return s
                                                        }
                                                        if ("object" !== o(i) || i instanceof Date) return i;
                                                        var a, r = {};
                                                        for (a in i) i.hasOwnProperty(a) && (r[a] = t(i[a], n));
                                                        return r
                                                    }(i, i = []), t.attachments = i.length, {
                                                        packet: t,
                                                        buffers: i
                                                    }),
                                                    i = this.encodeAsString(t.packet),
                                                    t = t.buffers;
                                                return t.unshift(i), t
                                            }
                                        }]), t
                                    }(),
                                    G = function(t) {
                                        a(r, E);
                                        var i = d(r);

                                        function r() {
                                            return i.call(this)
                                        }
                                        return c(r, [{
                                            key: "add",
                                            value: function(t) {
                                                var i;
                                                if ("string" == typeof t)(i = this.decodeString(t)).type === Q.BINARY_EVENT || i.type === Q.BINARY_ACK ? (this.reconstructor = new it(i), 0 === i.attachments && v(h(r.prototype), "emitReserved", this).call(this, "decoded", i)) : v(h(r.prototype), "emitReserved", this).call(this, "decoded", i);
                                                else {
                                                    if (!X(t) && !t.base64) throw new Error("Unknown type: " + t);
                                                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                                    (i = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, v(h(r.prototype), "emitReserved", this).call(this, "decoded", i))
                                                }
                                            }
                                        }, {
                                            key: "decodeString",
                                            value: function(t) {
                                                var i = 0,
                                                    n = {
                                                        type: Number(t.charAt(0))
                                                    };
                                                if (void 0 === Q[n.type]) throw new Error("unknown packet type " + n.type);
                                                if (n.type === Q.BINARY_EVENT || n.type === Q.BINARY_ACK) {
                                                    for (var e = i + 1;
                                                        "-" !== t.charAt(++i) && i != t.length;);
                                                    e = t.substring(e, i);
                                                    if (e != Number(e) || "-" !== t.charAt(i)) throw new Error("Illegal attachments");
                                                    n.attachments = Number(e)
                                                }
                                                if ("/" === t.charAt(i + 1)) {
                                                    for (var s = i + 1; ++i && "," !== t.charAt(i) && i !== t.length;);
                                                    n.nsp = t.substring(s, i)
                                                } else n.nsp = "/";
                                                s = t.charAt(i + 1);
                                                if ("" !== s && Number(s) == s) {
                                                    for (var c = i + 1; ++i;) {
                                                        var a = t.charAt(i);
                                                        if (null == a || Number(a) != a) {
                                                            --i;
                                                            break
                                                        }
                                                        if (i === t.length) break
                                                    }
                                                    n.id = Number(t.substring(c, i + 1))
                                                }
                                                if (t.charAt(++i)) {
                                                    c = function(t) {
                                                        try {
                                                            return JSON.parse(t)
                                                        } catch (t) {
                                                            return !1
                                                        }
                                                    }(t.substr(i));
                                                    if (!r.isPayloadValid(n.type, c)) throw new Error("invalid payload");
                                                    n.data = c
                                                }
                                                return n
                                            }
                                        }, {
                                            key: "destroy",
                                            value: function() {
                                                this.reconstructor && this.reconstructor.finishedReconstruction()
                                            }
                                        }], [{
                                            key: "isPayloadValid",
                                            value: function(t, i) {
                                                switch (t) {
                                                    case Q.CONNECT:
                                                        return "object" === o(i);
                                                    case Q.DISCONNECT:
                                                        return void 0 === i;
                                                    case Q.CONNECT_ERROR:
                                                        return "string" == typeof i || "object" === o(i);
                                                    case Q.EVENT:
                                                    case Q.BINARY_EVENT:
                                                        return Array.isArray(i) && 0 < i.length;
                                                    case Q.ACK:
                                                    case Q.BINARY_ACK:
                                                        return Array.isArray(i)
                                                }
                                            }
                                        }]), r
                                    }(),
                                    it = function() {
                                        function t(t) {
                                            this.packet = t, this.buffers = [], this.reconPack = t
                                        }
                                        return c(t, [{
                                            key: "takeBinaryData",
                                            value: function(t) {
                                                if (this.buffers.push(t), this.buffers.length !== this.reconPack.attachments) return null;
                                                var i = (i = this.reconPack, t = this.buffers, i.data = function t(i, n) {
                                                    if (!i) return i;
                                                    if (i && i.Tn) return n[i.num];
                                                    if (Array.isArray(i))
                                                        for (var e = 0; e < i.length; e++) i[e] = t(i[e], n);
                                                    else if ("object" === o(i))
                                                        for (var s in i) i.hasOwnProperty(s) && (i[s] = t(i[s], n));
                                                    return i
                                                }(i.data, t), i.attachments = void 0, i);
                                                return this.finishedReconstruction(), i
                                            }
                                        }, {
                                            key: "finishedReconstruction",
                                            value: function() {
                                                this.reconPack = null, this.buffers = []
                                            }
                                        }]), t
                                    }(),
                                    nt = Object.freeze({
                                        __proto__: null,
                                        protocol: 5,
                                        get PacketType() {
                                            return Q
                                        },
                                        Encoder: tt,
                                        Decoder: G
                                    });

                                function et(t, i, n) {
                                    return t.on(i, n),
                                        function() {
                                            t.off(i, n)
                                        }
                                }
                                var st = Object.freeze({
                                        connect: 1,
                                        connect_error: 1,
                                        disconnect: 1,
                                        disconnecting: 1,
                                        newListener: 1,
                                        removeListener: 1
                                    }),
                                    ct = function(t) {
                                        a(e, E);
                                        var s = d(e);

                                        function e(t, i, n) {
                                            var e = s.call(this);
                                            return e.connected = !1, e.disconnected = !0, e.receiveBuffer = [], e.sendBuffer = [], e.ids = 0, e.acks = {}, e.flags = {}, e.io = t, e.nsp = i, n && n.auth && (e.auth = n.auth), e.io._autoConnect && e.open(), e
                                        }
                                        return c(e, [{
                                            key: "subEvents",
                                            value: function() {
                                                var t;
                                                this.subs || (t = this.io, this.subs = [et(t, "open", this.onopen.bind(this)), et(t, "packet", this.onpacket.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this))])
                                            }
                                        }, {
                                            key: "active",
                                            get: function() {
                                                return !!this.subs
                                            }
                                        }, {
                                            key: "connect",
                                            value: function() {
                                                return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                                            }
                                        }, {
                                            key: "open",
                                            value: function() {
                                                return this.connect()
                                            }
                                        }, {
                                            key: "send",
                                            value: function() {
                                                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                return i.unshift("message"), this.emit.apply(this, i), this
                                            }
                                        }, {
                                            key: "emit",
                                            value: function(t) {
                                                if (st.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name');
                                                for (var i = arguments.length, n = new Array(1 < i ? i - 1 : 0), e = 1; e < i; e++) n[e - 1] = arguments[e];
                                                n.unshift(t);
                                                var s = {
                                                    type: Q.EVENT,
                                                    data: n,
                                                    options: {}
                                                };
                                                s.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1] && (c = this.ids++, t = n.pop(), this._registerAckCallback(c, t), s.id = c);
                                                var c = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                                return (!this.flags.volatile || c && this.connected) && (this.connected ? this.packet(s) : this.sendBuffer.push(s)), this.flags = {}, this
                                            }
                                        }, {
                                            key: "_registerAckCallback",
                                            value: function(i, e) {
                                                var s, c = this,
                                                    t = this.flags.timeout;
                                                void 0 !== t ? (s = this.io.setTimeoutFn(function() {
                                                    delete c.acks[i];
                                                    for (var t = 0; t < c.sendBuffer.length; t++) c.sendBuffer[t].id === i && c.sendBuffer.splice(t, 1);
                                                    e.call(c, new Error("operation has timed out"))
                                                }, t), this.acks[i] = function() {
                                                    c.io.clearTimeoutFn(s);
                                                    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                    e.apply(c, [null].concat(i))
                                                }) : this.acks[i] = e
                                            }
                                        }, {
                                            key: "packet",
                                            value: function(t) {
                                                t.nsp = this.nsp, this.io._packet(t)
                                            }
                                        }, {
                                            key: "onopen",
                                            value: function() {
                                                var i = this;
                                                "function" == typeof this.auth ? this.auth(function(t) {
                                                    i.packet({
                                                        type: Q.CONNECT,
                                                        data: t
                                                    })
                                                }) : this.packet({
                                                    type: Q.CONNECT,
                                                    data: this.auth
                                                })
                                            }
                                        }, {
                                            key: "onerror",
                                            value: function(t) {
                                                this.connected || this.emitReserved("connect_error", t)
                                            }
                                        }, {
                                            key: "onclose",
                                            value: function(t) {
                                                this.connected = !1, this.disconnected = !0, delete this.id, this.emitReserved("disconnect", t)
                                            }
                                        }, {
                                            key: "onpacket",
                                            value: function(t) {
                                                if (t.nsp === this.nsp) switch (t.type) {
                                                    case Q.CONNECT:
                                                        t.data && t.data.sid ? (i = t.data.sid, this.onconnect(i)) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                                        break;
                                                    case Q.EVENT:
                                                    case Q.BINARY_EVENT:
                                                        this.onevent(t);
                                                        break;
                                                    case Q.ACK:
                                                    case Q.BINARY_ACK:
                                                        this.onack(t);
                                                        break;
                                                    case Q.DISCONNECT:
                                                        this.ondisconnect();
                                                        break;
                                                    case Q.CONNECT_ERROR:
                                                        this.destroy();
                                                        var i = new Error(t.data.message);
                                                        i.data = t.data.data, this.emitReserved("connect_error", i)
                                                }
                                            }
                                        }, {
                                            key: "onevent",
                                            value: function(t) {
                                                var i = t.data || [];
                                                null != t.id && i.push(this.ack(t.id)), this.connected ? this.emitEvent(i) : this.receiveBuffer.push(Object.freeze(i))
                                            }
                                        }, {
                                            key: "emitEvent",
                                            value: function(t) {
                                                if (this._anyListeners && this._anyListeners.length) {
                                                    var i, n = function(t, i) {
                                                        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                                        if (!n) {
                                                            if (Array.isArray(t) || (n = function(t, i) {
                                                                    if (t) {
                                                                        if ("string" == typeof t) return p(t, void 0);
                                                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, void 0) : void 0
                                                                    }
                                                                }(t))) {
                                                                n && (t = n);
                                                                var e = 0,
                                                                    s = function() {};
                                                                return {
                                                                    s: s,
                                                                    n: function() {
                                                                        return e >= t.length ? {
                                                                            done: !0
                                                                        } : {
                                                                            done: !1,
                                                                            value: t[e++]
                                                                        }
                                                                    },
                                                                    e: function(t) {
                                                                        throw t
                                                                    },
                                                                    f: s
                                                                }
                                                            }
                                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                        }
                                                        var c, a = !0,
                                                            r = !1;
                                                        return {
                                                            s: function() {
                                                                n = n.call(t)
                                                            },
                                                            n: function() {
                                                                var t = n.next();
                                                                return a = t.done, t
                                                            },
                                                            e: function(t) {
                                                                r = !0, c = t
                                                            },
                                                            f: function() {
                                                                try {
                                                                    a || null == n.return || n.return()
                                                                } finally {
                                                                    if (r) throw c
                                                                }
                                                            }
                                                        }
                                                    }(this._anyListeners.slice());
                                                    try {
                                                        for (n.s(); !(i = n.n()).done;) i.value.apply(this, t)
                                                    } catch (t) {
                                                        n.e(t)
                                                    } finally {
                                                        n.f()
                                                    }
                                                }
                                                v(h(e.prototype), "emit", this).apply(this, t)
                                            }
                                        }, {
                                            key: "ack",
                                            value: function(e) {
                                                var s = this,
                                                    c = !1;
                                                return function() {
                                                    if (!c) {
                                                        c = !0;
                                                        for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                                                        s.packet({
                                                            type: Q.ACK,
                                                            id: e,
                                                            data: i
                                                        })
                                                    }
                                                }
                                            }
                                        }, {
                                            key: "onack",
                                            value: function(t) {
                                                var i = this.acks[t.id];
                                                "function" == typeof i && (i.apply(this, t.data), delete this.acks[t.id])
                                            }
                                        }, {
                                            key: "onconnect",
                                            value: function(t) {
                                                this.id = t, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                                            }
                                        }, {
                                            key: "emitBuffered",
                                            value: function() {
                                                var i = this;
                                                this.receiveBuffer.forEach(function(t) {
                                                    return i.emitEvent(t)
                                                }), this.receiveBuffer = [], this.sendBuffer.forEach(function(t) {
                                                    return i.packet(t)
                                                }), this.sendBuffer = []
                                            }
                                        }, {
                                            key: "ondisconnect",
                                            value: function() {
                                                this.destroy(), this.onclose("io server disconnect")
                                            }
                                        }, {
                                            key: "destroy",
                                            value: function() {
                                                this.subs && (this.subs.forEach(function(t) {
                                                    return t()
                                                }), this.subs = void 0), this.io._destroy(this)
                                            }
                                        }, {
                                            key: "disconnect",
                                            value: function() {
                                                return this.connected && this.packet({
                                                    type: Q.DISCONNECT
                                                }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
                                            }
                                        }, {
                                            key: "close",
                                            value: function() {
                                                return this.disconnect()
                                            }
                                        }, {
                                            key: "compress",
                                            value: function(t) {
                                                return this.flags.compress = t, this
                                            }
                                        }, {
                                            key: "volatile",
                                            get: function() {
                                                return this.flags.volatile = !0, this
                                            }
                                        }, {
                                            key: "timeout",
                                            value: function(t) {
                                                return this.flags.timeout = t, this
                                            }
                                        }, {
                                            key: "onAny",
                                            value: function(t) {
                                                return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
                                            }
                                        }, {
                                            key: "prependAny",
                                            value: function(t) {
                                                return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
                                            }
                                        }, {
                                            key: "offAny",
                                            value: function(t) {
                                                if (!this._anyListeners) return this;
                                                if (t) {
                                                    for (var i = this._anyListeners, n = 0; n < i.length; n++)
                                                        if (t === i[n]) return i.splice(n, 1), this
                                                } else this._anyListeners = [];
                                                return this
                                            }
                                        }, {
                                            key: "listenersAny",
                                            value: function() {
                                                return this._anyListeners || []
                                            }
                                        }]), e
                                    }(),
                                    at = rt;

                                function rt(t) {
                                    this.ms = (t = t || {}).min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
                                }
                                rt.prototype.duration = function() {
                                    var t, i, n = this.ms * Math.pow(this.factor, this.attempts++);
                                    return this.jitter && (t = Math.random(), i = Math.floor(t * this.jitter * n), n = 0 == (1 & Math.floor(10 * t)) ? n - i : n + i), 0 | Math.min(n, this.max)
                                }, rt.prototype.reset = function() {
                                    this.attempts = 0
                                }, rt.prototype.setMin = function(t) {
                                    this.ms = t
                                }, rt.prototype.setMax = function(t) {
                                    this.max = t
                                }, rt.prototype.setJitter = function(t) {
                                    this.jitter = t
                                };
                                var ot = function(t) {
                                        a(i, E);
                                        var s = d(i);

                                        function i(t, i) {
                                            var n, e = s.call(this);
                                            e.nsps = {}, e.subs = [], t && "object" === o(t) && (i = t, t = void 0), (i = i || {}).path = i.path || "/socket.io", e.opts = i, I(f(e), i), e.reconnection(!1 !== i.reconnection), e.reconnectionAttempts(i.reconnectionAttempts || 1 / 0), e.reconnectionDelay(i.reconnectionDelay || 1e3), e.reconnectionDelayMax(i.reconnectionDelayMax || 5e3), e.randomizationFactor(null !== (n = i.randomizationFactor) && void 0 !== n ? n : .5), e.backoff = new at({
                                                min: e.reconnectionDelay(),
                                                max: e.reconnectionDelayMax(),
                                                jitter: e.randomizationFactor()
                                            }), e.timeout(null == i.timeout ? 2e4 : i.timeout), e._readyState = "closed", e.uri = t;
                                            t = i.parser || nt;
                                            return e.encoder = new t.Encoder, e.decoder = new t.Decoder, e._autoConnect = !1 !== i.autoConnect, e._autoConnect && e.open(), e
                                        }
                                        return c(i, [{
                                            key: "reconnection",
                                            value: function(t) {
                                                return arguments.length ? (this.Un = !!t, this) : this.Un
                                            }
                                        }, {
                                            key: "reconnectionAttempts",
                                            value: function(t) {
                                                return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
                                            }
                                        }, {
                                            key: "reconnectionDelay",
                                            value: function(t) {
                                                var i;
                                                return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null !== (i = this.backoff) && void 0 !== i && i.setMin(t), this)
                                            }
                                        }, {
                                            key: "randomizationFactor",
                                            value: function(t) {
                                                var i;
                                                return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null !== (i = this.backoff) && void 0 !== i && i.setJitter(t), this)
                                            }
                                        }, {
                                            key: "reconnectionDelayMax",
                                            value: function(t) {
                                                var i;
                                                return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null !== (i = this.backoff) && void 0 !== i && i.setMax(t), this)
                                            }
                                        }, {
                                            key: "timeout",
                                            value: function(t) {
                                                return arguments.length ? (this.Pn = t, this) : this.Pn
                                            }
                                        }, {
                                            key: "maybeReconnectOnOpen",
                                            value: function() {
                                                !this._reconnecting && this.Un && 0 === this.backoff.attempts && this.reconnect()
                                            }
                                        }, {
                                            key: "open",
                                            value: function(i) {
                                                var n = this;
                                                if (~this._readyState.indexOf("open")) return this;
                                                this.engine = new H(this.uri, this.opts);
                                                var t = this.engine,
                                                    e = this;
                                                this._readyState = "opening", this.skipReconnect = !1;
                                                var s, c, a = et(t, "open", function() {
                                                        e.onopen(), i && i()
                                                    }),
                                                    r = et(t, "error", function(t) {
                                                        e.cleanup(), e._readyState = "closed", n.emitReserved("error", t), i ? i(t) : e.maybeReconnectOnOpen()
                                                    });
                                                return !1 !== this.Pn && (0 === (s = this.Pn) && a(), c = this.setTimeoutFn(function() {
                                                    a(), t.close(), t.emit("error", new Error("timeout"))
                                                }, s), this.opts.autoUnref && c.unref(), this.subs.push(function() {
                                                    clearTimeout(c)
                                                })), this.subs.push(a), this.subs.push(r), this
                                            }
                                        }, {
                                            key: "connect",
                                            value: function(t) {
                                                return this.open(t)
                                            }
                                        }, {
                                            key: "onopen",
                                            value: function() {
                                                this.cleanup(), this._readyState = "open", this.emitReserved("open");
                                                var t = this.engine;
                                                this.subs.push(et(t, "ping", this.onping.bind(this)), et(t, "data", this.ondata.bind(this)), et(t, "error", this.onerror.bind(this)), et(t, "close", this.onclose.bind(this)), et(this.decoder, "decoded", this.ondecoded.bind(this)))
                                            }
                                        }, {
                                            key: "onping",
                                            value: function() {
                                                this.emitReserved("ping")
                                            }
                                        }, {
                                            key: "ondata",
                                            value: function(t) {
                                                this.decoder.add(t)
                                            }
                                        }, {
                                            key: "ondecoded",
                                            value: function(t) {
                                                this.emitReserved("packet", t)
                                            }
                                        }, {
                                            key: "onerror",
                                            value: function(t) {
                                                this.emitReserved("error", t)
                                            }
                                        }, {
                                            key: "socket",
                                            value: function(t, i) {
                                                var n;
                                                return (n = this.nsps[t]) || (n = new ct(this, t, i), this.nsps[t] = n), n
                                            }
                                        }, {
                                            key: "_destroy",
                                            value: function(t) {
                                                for (var i = 0, n = Object.keys(this.nsps); i < n.length; i++) {
                                                    var e = n[i];
                                                    if (this.nsps[e].active) return
                                                }
                                                this._close()
                                            }
                                        }, {
                                            key: "_packet",
                                            value: function(t) {
                                                for (var i = this.encoder.encode(t), n = 0; n < i.length; n++) this.engine.write(i[n], t.options)
                                            }
                                        }, {
                                            key: "cleanup",
                                            value: function() {
                                                this.subs.forEach(function(t) {
                                                    return t()
                                                }), this.subs.length = 0, this.decoder.destroy()
                                            }
                                        }, {
                                            key: "_close",
                                            value: function() {
                                                this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                                            }
                                        }, {
                                            key: "disconnect",
                                            value: function() {
                                                return this._close()
                                            }
                                        }, {
                                            key: "onclose",
                                            value: function(t) {
                                                this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t), this.Un && !this.skipReconnect && this.reconnect()
                                            }
                                        }, {
                                            key: "reconnect",
                                            value: function() {
                                                var i = this;
                                                if (this._reconnecting || this.skipReconnect) return this;
                                                var t, n, e = this;
                                                this.backoff.attempts >= this._reconnectionAttempts ? (this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1) : (t = this.backoff.duration(), this._reconnecting = !0, n = this.setTimeoutFn(function() {
                                                    e.skipReconnect || (i.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open(function(t) {
                                                        t ? (e._reconnecting = !1, e.reconnect(), i.emitReserved("reconnect_error", t)) : e.onreconnect()
                                                    }))
                                                }, t), this.opts.autoUnref && n.unref(), this.subs.push(function() {
                                                    clearTimeout(n)
                                                }))
                                            }
                                        }, {
                                            key: "onreconnect",
                                            value: function() {
                                                var t = this.backoff.attempts;
                                                this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
                                            }
                                        }]), i
                                    }(),
                                    ht = {};

                                function lt(t, i) {
                                    "object" === o(t) && (i = t, t = void 0);
                                    var n = function(t) {
                                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                                n = t,
                                                e = (2 < arguments.length ? arguments[2] : void 0) || "undefined" != typeof location && location;
                                            "string" == typeof(t = null == t ? e.protocol + "//" + e.host : t) && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), n = function(t) {
                                                var i = t,
                                                    n = t.indexOf("["),
                                                    e = t.indexOf("]"); - 1 != n && -1 != e && (t = t.substring(0, n) + t.substring(n, e).replace(/:/g, ";") + t.substring(e, t.length));
                                                for (var s, c = y.exec(t || ""), a = {}, r = 14; r--;) a[m[r]] = c[r] || "";
                                                return -1 != n && -1 != e && (a.source = i, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = (i = (e = a.path).replace(/\/{2,9}/g, "/").split("/"), "/" != e.substr(0, 1) && 0 !== e.length || i.splice(0, 1), "/" == e.substr(e.length - 1, 1) && i.splice(i.length - 1, 1), i), a.queryKey = (i = a.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, i, n) {
                                                    i && (s[i] = n)
                                                }), s), a
                                            }(t = /^(https?|wss?):\/\//.test(t) ? t : e.protocol + "//" + t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                                            t = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                                            return n.id = n.protocol + "://" + t + ":" + n.port + i, n.href = n.protocol + "://" + t + (e && e.port === n.port ? "" : ":" + n.port), n
                                        }(t, (i = i || {}).path || "/socket.io"),
                                        e = n.source,
                                        s = n.id,
                                        t = n.path,
                                        t = ht[s] && t in ht[s].nsps,
                                        s = i.forceNew || i["force new connection"] || !1 === i.multiplex || t ? new ot(e, i) : (ht[s] || (ht[s] = new ot(e, i)), ht[s]);
                                    return n.query && !i.query && (i.query = n.queryKey), s.socket(n.path, i)
                                }
                                return s(lt, {
                                    Manager: ot,
                                    Socket: ct,
                                    io: lt,
                                    connect: lt
                                }), lt
                            }
                            var y = function() {
                                    function t(t) {
                                        this.parent = t, this.Ln = 100, this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.get_article_search = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                        return this.Jn("search", this.Vn, "query", this.Wn.Mt(this), t, i)
                                    }, i.get_article_suggest = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                        return this.Jn("suggest", this.Hn, "part", this.Kn.Mt(this), t, i)
                                    }, i.report_article_search = function(t) {
                                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                                        (i = (i || "").trim()) && (this.parent.socket.emit("helpdesk:article:report", i = {
                                            report: {
                                                locale: t,
                                                query: i
                                            }
                                        }), this.parent.event.publish("helpdesk:article:report", i))
                                    }, i.reset = function() {
                                        this.ht()
                                    }, i.ht = function() {
                                        this.Vn = {}, this.Hn = {}
                                    }, i._t = function() {
                                        this.parent.socket.on("helpdesk:article:searched", this.Wn.Mt(this)), this.parent.socket.on("helpdesk:article:suggested", this.Kn.Mt(this))
                                    }, i.Wn = function(t) {
                                        return this.Gn("search", this.Vn, "query", t)
                                    }, i.Kn = function(t) {
                                        return this.Gn("suggest", this.Hn, "part", t)
                                    }, i.Jn = function(t, i, n, e, s) {
                                        var c = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                                            a = (i[c || "default"] || {})[s],
                                            r = "helpdesk:article:".concat(t),
                                            o = v({
                                                id: (new Date).getTime(),
                                                from: "visitor"
                                            }, t, v({
                                                locale: c
                                            }, n, s));
                                        this.parent.event.publish(r, o), a ? this.parent.Schedule.set_timeout(function() {
                                            e(v({
                                                id: o.id,
                                                results: a
                                            }, t, v({
                                                locale: c
                                            }, n, s)))
                                        }, this.Ln) : this.parent.socket.emit(r, o)
                                    }, i.Gn = function(t, i, n, e) {
                                        var s;
                                        e[t] && "string" == typeof e[t][n] && (i[s = e[t].locale || "default"] = i[s] || {}, i[s][e[t][n]] = e.results), this.parent.event.publish("helpdesk:article:".concat(t, "ed"), e)
                                    }, t
                                }(),
                                m = function() {
                                    function t(t) {
                                        this.parent = t, this.Yn = 1e4, this.Zn = 45e3, this.Xn = 45e3, this.Qn = 1e3, this.te = 1e3, this.Li = 500, this.ie = 1e3, this.ne = 10, this.ee = ["browsing:action:start", "browsing:action:stop", "browsing:action:heartbeat", "browsing:assist:start", "browsing:assist:stop", "browsing:assist:heartbeat", "browsing:assist:mouse", "browsing:assist:scroll", "browsing:assist:click"], this.ht(), this._t(), this.se(), this.ce(), this.ae(), this.re(), this.oe()
                                    }
                                    var i = t.prototype;
                                    return i.init = function(t, i, n) {
                                        var e = this;
                                        this.parent.Stream.bind_to(null, this.ee, {
                                            session_id: this.parent.Session.Wt
                                        }, function() {
                                            -1 === (e.parent.device.capabilities || []).indexOf("browsing") || !0 !== e.parent.Config.lt && "1" === (navigator || {}).doNotTrack ? (e.parent.stream.emit("client:browsing:request:decline", {}), e.he()) : (e.le = t.deps.tree_mirror || null, (e.ue = !0) === t.resume ? (e.parent.stream.emit("client:browsing:resume", {
                                                browsing_id: e.fe
                                            }), e.hn(!0), !0 === e.de && e.ve(!0)) : (e.hn(!0), e.parent.stream.emit("client:browsing:request:accept", {
                                                useragent: navigator.userAgent
                                            }))), "function" == typeof i && i()
                                        }, function() {
                                            "function" == typeof n && n()
                                        })
                                    }, i.restore_browsing_state = function() {
                                        this.fe && (!1 === this.pe() ? this.ye({
                                            resume: !0
                                        }) : this.he())
                                    }, i.toggle_ignore_scroll_event = function() {
                                        this.me = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                                    }, i.reset = function() {
                                        !0 === this.de && this.he(), this.ht(), this.ge()
                                    }, i.ht = function() {
                                        if (this.parent.Schedule.clear_interval(this.we), this.parent.Schedule.clear_interval(this.be), this.parent.Schedule.clear_interval(this.ke), this.parent.Schedule.clear_interval(this.$e), "object" == typeof this.mn)
                                            for (var t in this.mn) this.parent.Schedule.clear_timeout(this.mn[t]);
                                        if ("object" == typeof this.xe)
                                            for (var i in this.xe) this.parent.Schedule.clear_timeout(this.xe[i].dead_timeout);
                                        (this.Fe || {}).defer_event && this.parent.Schedule.clear_timeout(this.Fe.defer_event), this.ue = !1, this.fe = null, this.de = !1, this.rn = null, this.we = null, this.be = null, this.ke = null, this.$e = null, this.me = !1, this.je = null, this.le = null, this.Ee = null, this.mn = {}, this.ze = [], this.xe = {
                                            assist: {
                                                ongoing: !1,
                                                last_heartbeat: null,
                                                dead_timeout: null
                                            }
                                        }, this.Ce = {
                                            x: 0,
                                            y: 0,
                                            last_x: 0,
                                            last_y: 0
                                        }, this.Ae = {
                                            x: 0,
                                            y: 0,
                                            last_x: 0,
                                            last_y: 0
                                        }, this.Fe = {
                                            last_call: (new Date).getTime(),
                                            defer_event: null
                                        }
                                    }, i.Ki = function() {
                                        return this.parent.Storage.Rt("browsing", [this.parent.website_id])
                                    }, i._t = function() {
                                        this.parent.socket.on("browsing:request:initiate", this.ye.Mt(this)), this.parent.stream.on("client:browsing:request:initiated", this.Ie.Mt(this)), this.parent.stream.on("client:browsing:action:start", this.qe.Mt(this)), this.parent.stream.on("client:browsing:action:stop", this.Oe.Mt(this)), this.parent.stream.on("client:browsing:action:heartbeat", this.Se.Mt(this)), this.parent.stream.on("client:browsing:assist:start", this.De.Mt(this)), this.parent.stream.on("client:browsing:assist:stop", this.Re.Mt(this)), this.parent.stream.on("client:browsing:assist:heartbeat", this.Be.Mt(this)), this.parent.stream.on("client:browsing:assist:mouse", this.Ne.Mt(this)), this.parent.stream.on("client:browsing:assist:scroll", this.Me.Mt(this)), this.parent.stream.on("client:browsing:assist:click", this.Te.Mt(this))
                                    }, i.se = function() {
                                        var t;
                                        "object" != typeof window.sessionStorage || (t = window.sessionStorage.getItem(this.Ki())) && (browsing_data = JSON.parse(t), this.fe = t.browsing_id || null, this.de = t.is_playing || !1, this.rn = t.last_heartbeat || null)
                                    }, i.ye = function(t) {
                                        !0 === this.ue && !0 !== t.resume || (!0 !== t.resume && this.he(), this.parent.event.publish("browsing:request:initiate", t || {}))
                                    }, i.Ie = function(t) {
                                        !0 === this.ue && (this.fe = t.browsing_id, this.rn = (new Date).getTime(), this.Ue())
                                    }, i.qe = function() {
                                        !0 === this.ue && this.fe && this.ve()
                                    }, i.Oe = function() {
                                        !0 === this.ue && this.fe && this.he()
                                    }, i.Se = function() {
                                        !0 === this.ue && this.fe && (this.rn = (new Date).getTime(), this.Ue())
                                    }, i.De = function() {
                                        !0 === this.ue && this.fe && !0 === this.Pe("assist") && this.parent.event.publish("browsing:assist:started", {})
                                    }, i.Re = function() {
                                        !0 === this.ue && this.fe && !0 === this.Le("assist") && this.parent.event.publish("browsing:assist:stopped", {})
                                    }, i.Be = function() {
                                        !0 === this.ue && this.fe && this.Je("assist")
                                    }, i.Ne = function(t) {
                                        !0 === this.ue && this.fe && !0 === this.xe.assist.ongoing && this.parent.event.publish("browsing:assist:mouse", t)
                                    }, i.Me = function(t) {
                                        !0 === this.ue && this.fe && !0 === this.xe.assist.ongoing && this.parent.event.publish("browsing:assist:scroll", t)
                                    }, i.Te = function(t) {
                                        !0 === this.ue && this.fe && !0 === this.xe.assist.ongoing && this.parent.event.publish("browsing:assist:click", t)
                                    }, i.Ue = function() {
                                        "object" == typeof window.sessionStorage && JSON && "function" == typeof JSON.stringify && window.sessionStorage.setItem(this.Ki(), JSON.stringify({
                                            browsing_id: this.fe,
                                            is_playing: this.de,
                                            last_heartbeat: this.rn
                                        }))
                                    }, i.ge = function() {
                                        "object" == typeof window.sessionStorage && "object" == typeof window.sessionStorage && window.sessionStorage.removeItem(this.Ki())
                                    }, i.ve = function() {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                        this.de = !0, this.rn = (new Date).getTime(), this.Ue(), this.Ve(), this.We(!0), this.He(!0), this.Ke(!0), !0 !== t && this.parent.stream.emit("client:browsing:action:started", {})
                                    }, i.he = function() {
                                        var t = this.de;
                                        this.Ee && this.Ee.disconnect(), this.ht(), this.Ue(), !0 === t && this.parent.stream.emit("client:browsing:action:stopped", {}), this.parent.Stream.unbind_from()
                                    }, i.Ve = function() {
                                        var s = this;
                                        if (this.Ge(), this.Ye(), this.Ze(), this.Ee) return this.Xe(this.je);
                                        this.Ee = new this.le(document, {
                                            initialize: function(t, i) {
                                                s.je = {
                                                    f: "initialize",
                                                    args: [t, i]
                                                }, s.Xe(s.je)
                                            },
                                            applyChanged: function(t, i, n, e) {
                                                s.ze.push({
                                                    f: "applyChanged",
                                                    args: [t, i, n, e]
                                                })
                                            }
                                        })
                                    }, i.Xe = function(t) {
                                        t.f && t.args && "function" == typeof JSON.stringify && this.parent.stream.emit("client:browsing:stream:mirror", {
                                            f: t.f,
                                            args: JSON.stringify(t.args)
                                        })
                                    }, i.Ye = function() {
                                        this.parent.stream.emit("client:browsing:stream:tab", {
                                            title: document.title,
                                            url: document.location.href,
                                            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                                        })
                                    }, i.Ge = function() {
                                        this.parent.stream.emit("client:browsing:stream:mouse", {
                                            x: this.Ce.x,
                                            y: this.Ce.y
                                        })
                                    }, i.Ze = function() {
                                        this.parent.stream.emit("client:browsing:stream:scroll", {
                                            x: this.Ae.x,
                                            y: this.Ae.y
                                        })
                                    }, i.Qe = function() {
                                        this.parent.stream.emit("client:browsing:stream:click", {})
                                    }, i.Pe = function(t) {
                                        var i = !0 !== this.xe[t].ongoing && !0;
                                        return this.xe[t].ongoing = !0, this.Je(t), this.parent.stream.emit("client:browsing:".concat(t, ":started"), {}), i
                                    }, i.Le = function(t) {
                                        return !0 === this.xe[t].ongoing && (this.Je(t, !1), this.xe[t].ongoing = !1, this.parent.stream.emit("client:browsing:".concat(t, ":stopped"), {}), !0)
                                    }, i.Je = function(t) {
                                        var i = this,
                                            n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                        !0 === this.xe[t].ongoing && (null !== this.xe[t].dead_timeout && (this.parent.Schedule.clear_timeout(this.xe[t].dead_timeout), this.xe[t].dead_timeout = null), !0 === n ? (this.xe[t].last_heartbeat = (new Date).getTime(), this.xe[t].dead_timeout = this.parent.Schedule.set_timeout(function() {
                                            i.Le(t)
                                        }, this.Xn)) : this.xe[t].last_heartbeat = null)
                                    }, i.ce = function() {
                                        var i = this;
                                        this.parent.Listener.add_event("browsing", "document", "mousemove", function(t) {
                                            i.Ce.last_x = t.pageX, i.Ce.last_y = t.pageY
                                        })
                                    }, i.ae = function() {
                                        var n = this;
                                        this.parent.Listener.add_event("browsing", "window", "resize", function() {
                                            null !== n.Fe.defer_event && n.parent.Schedule.clear_timeout(n.Fe.defer_event), n.Fe.defer_event = n.parent.Schedule.set_timeout(function() {
                                                n.Fe.defer_event = null;
                                                var t = n.Fe.last_call,
                                                    i = (new Date).getTime();
                                                n.Fe.last_call = i, t && i > t + n.te && !0 === n.de && n.Ye()
                                            }, n.Qn)
                                        })
                                    }, i.re = function() {
                                        var i = this;
                                        this.parent.Listener.add_event("browsing", "window", "scroll", function() {
                                            var t;
                                            !0 !== i.me && (t = document.documentElement, i.Ae.last_x = (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), i.Ae.last_y = (window.pageYOffset || t.scrollTop) - (t.clientTop || 0))
                                        })
                                    }, i.oe = function() {
                                        var i = this;
                                        this.parent.Listener.add_event("browsing", "window", "click", function(t) {
                                            !0 !== i.de || t.ts || i.es("click", function() {
                                                i.Qe(), i.Ge()
                                            })
                                        })
                                    }, i.pe = function() {
                                        return null === this.rn || null !== this.rn && (new Date).getTime() - this.rn >= this.Zn
                                    }, i.hn = function() {
                                        var t = this,
                                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                        null !== this.we && this.parent.Schedule.clear_interval(this.we), !0 === i && (this.we = this.parent.Schedule.set_interval(function() {
                                            t.parent.stream.emit("client:browsing:heartbeat", {}), !0 === t.pe() && t.he()
                                        }, this.Yn))
                                    }, i.We = function() {
                                        var t = this,
                                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                        null !== this.ke && (this.parent.Schedule.clear_interval(this.ke), this.ke = null), !0 === i && (this.ke = this.parent.Schedule.set_interval(function() {
                                            t.Ce.last_x === t.Ce.x && t.Ce.last_y === t.Ce.y || !0 !== t.de || (t.Ce.x = t.Ce.last_x, t.Ce.y = t.Ce.last_y, t.Ge())
                                        }, this.te))
                                    }, i.He = function() {
                                        var t = this,
                                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                        null !== this.$e && (this.parent.Schedule.clear_interval(this.$e), this.$e = null), !0 === i && (this.$e = this.parent.Schedule.set_interval(function() {
                                            t.Ae.last_x === t.Ae.x && t.Ae.last_y === t.Ae.y || !0 !== t.de || (t.Ae.x = t.Ae.last_x, t.Ae.y = t.Ae.last_y, t.Ge(), t.Ze())
                                        }, this.te))
                                    }, i.Ke = function() {
                                        var i = this,
                                            t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                        null !== this.be && this.parent.Schedule.clear_interval(this.be), !0 === t && (this.be = this.parent.Schedule.set_interval(function() {
                                            for (var t = 0; t < i.ze.length && !(t >= i.ne); t++) i.Xe(i.ze[t]);
                                            i.ze.splice(0, i.ne)
                                        }, this.ie))
                                    }, i.es = function(t, i) {
                                        var n = this;
                                        void 0 === this.mn[t] && (this.mn[t] = this.parent.Schedule.set_timeout(function() {
                                            delete n.mn[t], i()
                                        }, this.Li))
                                    }, t
                                }(),
                                _ = function() {
                                    function t(t) {
                                        this.parent = t, this.Yn = 1e4, this.ss = 5e3, this.cs = 200, this.ee = ["call:request:initiate", "call:request:accepted", "call:request:declined", "call:action:stopped", "call:signaling:sdp", "call:signaling:candidate"], this.ht(), this._t()
                                    }
                                    var i = t.prototype;
                                    return i.init = function(t, i, n) {
                                        var e = this;
                                        this.parent.Stream.bind_to(null, this.ee, {
                                            session_id: this.parent.Session.Wt
                                        }, function() {
                                            e.as = t.mode || null, e.rs = t.ice || [], !0 === t.has_support ? (e.parent.stream.emit("client:call:request:initiated", {
                                                call_id: t.call_id
                                            }), e.hn(!0)) : e.parent.stream.emit("client:call:request:decline", {}), "function" == typeof i && i()
                                        }, function() {
                                            "function" == typeof n && n()
                                        })
                                    }, i.accept = function() {
                                        !0 === this.ue && (this.os = !0, this.parent.stream.emit("client:call:request:accept", {}))
                                    }, i.decline = function() {
                                        !0 === this.ue && (this.parent.stream.emit("client:call:request:decline", {}), this.he())
                                    }, i.stop = function() {
                                        !0 === this.ue && (this.parent.stream.emit("client:call:action:stopped", {}), this.he())
                                    }, i.toggle_audio = function() {
                                        return this.hs("audio", "getAudioTracks")
                                    }, i.toggle_video = function() {
                                        return this.hs("video", "getVideoTracks")
                                    }, i.toggle_screensharing = function() {
                                        return !0 === this.ue && null !== this.ls.local && (!1 === this.us ? this.ds() : this.vs()), this.us
                                    }, i.is_ongoing = function() {
                                        return !0 === this.ue && null !== this.ps && !0
                                    }, i.has_support_screensharing = function() {
                                        return !(!navigator.mediaDevices || "function" != typeof navigator.mediaDevices.getDisplayMedia)
                                    }, i.get_stream = function(t) {
                                        return this.ls[t] || null
                                    }, i.reset = function() {
                                        !0 === this.ue && this.he(), this.ht()
                                    }, i.ht = function() {
                                        this.ue = !1, this.us = !1, this.os = !1, this.ys = !1, this.fe = null, this.ps = null, this.we = null, this._s = null, this.as = null, this.rs = [], this.ls = {
                                            local: null,
                                            remote: null
                                        }, this.gs = {
                                            video: null
                                        }
                                    }, i._t = function() {
                                        this.parent.socket.on("call:request:initiate", this.ye.Mt(this)), this.parent.stream.on("client:call:request:accepted", this.bs.Mt(this)), this.parent.stream.on("client:call:request:declined", this.ks.Mt(this)), this.parent.stream.on("client:call:action:stopped", this.xs.Mt(this)), this.parent.stream.on("client:call:signaling:sdp", this.Fs.Mt(this)), this.parent.stream.on("client:call:signaling:candidate", this.js.Mt(this))
                                    }, i.ye = function(t) {
                                        !0 !== this.ue && (t.has_support = -1 !== (this.parent.device.capabilities || []).indexOf("call"), this.ue = !0, this.parent.event.publish("call:request:initiate", t))
                                    }, i.bs = function() {
                                        !0 === this.ue && !0 !== this.os && this.he()
                                    }, i.ks = function() {
                                        !0 === this.ue && this.he()
                                    }, i.xs = function() {
                                        !0 === this.ue && this.he()
                                    }, i.Fs = function(t) {
                                        var i = this;
                                        !0 === this.ue && (this.Es(), "operator" === t.from && this.ps.setRemoteDescription(new RTCSessionDescription(t.sdp)).then(function() {
                                            return i.parent.event.publish("call:peer:remote:success", {}), null === i.ls.local ? i.zs() : "offer" === t.sdp.type ? i.Cs("answer") : Promise.resolve()
                                        }).catch(function() {
                                            i.parent.event.publish("call:peer:remote:error", {})
                                        }))
                                    }, i.js = function(t) {
                                        !0 === this.ue && (this.Es(), "operator" === t.from && "object" == typeof t.candidate && null !== t.candidate && this.ps.addIceCandidate(new RTCIceCandidate({
                                            sdpMLineIndex: t.candidate.sdpMLineIndex,
                                            candidate: t.candidate.candidate
                                        })).catch(function() {}))
                                    }, i.Es = function() {
                                        var i = this;
                                        null === this.ps && (this.ps = new RTCPeerConnection({
                                            iceServers: this.rs
                                        }), this.ps.onicecandidate = function(t) {
                                            t && t.candidate && i.parent.stream.emit("client:call:signaling:candidate", {
                                                from: "user",
                                                candidate: t.candidate
                                            })
                                        }, this.ps.ontrack = function(t) {
                                            t = t.streams[0];
                                            i.ls.remote = t, i.parent.event.publish("call:media:remote:success", {}), t.onremovetrack = function() {
                                                i.parent.event.publish("call:media:remote:success", {})
                                            }
                                        }, this.ps.oniceconnectionstatechange = function() {
                                            var t = i.ps;
                                            null !== t && "failed" !== t.iceConnectionState && "closed" !== t.iceConnectionState || i.As(), null !== t && "disconnected" === t.iceConnectionState && (i._s = i.parent.Schedule.set_timeout(function() {
                                                (i._s = null) !== i.ps && "connected" === t.iceConnectionState || i.As()
                                            }, i.ss)), null !== t && "connected" === t.iceConnectionState && !0 !== i.ys && i.parent.Schedule.set_timeout(function() {
                                                i.zs(!0)
                                            }, i.cs)
                                        }, this.ps.onnegotiationneeded = function() {
                                            i.Cs("offer")
                                        }, this.ps.onclose = function() {
                                            i.As()
                                        })
                                    }, i.zs = function() {
                                        function i() {
                                            n.parent.event.publish("call:peer:local:error", {})
                                        }
                                        var n = this,
                                            e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                                        this.Is(function(t) {
                                            navigator.mediaDevices.getUserMedia({
                                                audio: !0,
                                                video: "video" === n.as && !0 === t.video
                                            }).then(function(t) {
                                                return n.ls.local = t, n.parent.event.publish("call:media:local:success", {
                                                    retried: e || !1
                                                }), !0 === e && (n.ys = !0), n.qs(t, e)
                                            }).catch(i)
                                        }, i)
                                    }, i.qs = function(t) {
                                        var i = this,
                                            n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                                            e = t.getTracks();
                                        !0 === n && this.ps.getSenders().forEach(function(t) {
                                            t.track && t.track.stop(), i.ps.removeTrack(t)
                                        });
                                        for (var s = 0; s < e.length; s++) this.ps.addTrack(e[s], t);
                                        !0 !== n && this.Cs("answer")
                                    }, i.Is = function(n, e) {
                                        var s = {
                                            audio: !1,
                                            video: !1
                                        };
                                        navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
                                            for (var i = 0; i < t.length; i++) switch (t[i].kind) {
                                                case "audioinput":
                                                    s.audio = !0;
                                                    break;
                                                case "videoinput":
                                                    s.video = !0
                                            }!0 !== s.audio ? e() : n(s)
                                        }).catch(e) : n(s)
                                    }, i.Cs = function() {
                                        var i, n = this,
                                            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "offer";
                                        return Promise.resolve().then(function() {
                                            var t = {
                                                OfferToReceiveAudio: !0,
                                                OfferToReceiveVideo: !0
                                            };
                                            return "answer" === e ? n.ps.createAnswer(t) : n.ps.createOffer(t)
                                        }).then(function(t) {
                                            return i = t, n.ps.setLocalDescription(i)
                                        }).then(function() {
                                            return n.parent.stream.emit("client:call:signaling:sdp", {
                                                from: "user",
                                                sdp: i
                                            }), n.parent.event.publish("call:peer:local:success", {}), Promise.resolve()
                                        }).catch(function() {
                                            return n.parent.event.publish("call:peer:local:error", {}), Promise.resolve()
                                        })
                                    }, i.he = function() {
                                        this.As()
                                    }, i.As = function() {
                                        if (null !== this.ps) {
                                            for (var t = this.ps.getSenders(), i = 0; i < t.length; i++) null !== t[i].track && t[i].track.stop();
                                            null !== this.gs.video && this.gs.video.stop(), this.ps.close(), this.ps = null
                                        }
                                        null !== this._s && (this.parent.Schedule.clear_timeout(this._s), this._s = null), this.parent.Stream.unbind_from(), this.ue = !1, this.us = !1, this.os = !1, this.ys = !1, this.as = null, this.rs = [], this.ls.local = null, this.ls.remote = null, this.gs.video = null, this.hn(!1), this.parent.event.publish("call:action:stopped", {})
                                    }, i.hs = function(t, i) {
                                        var n = !1;
                                        if (!0 === this.ue && null !== this.ls.local) {
                                            for (var e = !1, s = this.ls.local[i](), c = 0; c < s.length; c++) e = !0, n = !s[c].enabled, s[c].enabled = n;
                                            !0 === e && this.parent.event.publish("call:track:local:".concat(!0 === n ? "started" : "ended"), {
                                                media: t
                                            })
                                        }
                                        return n
                                    }, i.ds = function() {
                                        var s = this;
                                        !0 === this.has_support_screensharing() && (this.us = !0, navigator.mediaDevices.getDisplayMedia({
                                            video: !0
                                        }).then(function(t) {
                                            for (var t = t.getTracks()[0], i = s.ps.getSenders(), n = null, e = 0; e < i.length; e++)
                                                if (i[e].track && "video" === i[e].track.kind) {
                                                    n = i[e];
                                                    break
                                                }
                                            null !== n ? (s.gs.video = n.track, n.replaceTrack(t)) : n = s.ps.addTrack(t, s.ls.local), t.onended = function() {
                                                null !== s.ps && (s.Os(n), s.parent.event.publish("call:track:local:ended", {
                                                    media: "screensharing"
                                                }))
                                            }, s.parent.event.publish("call:track:local:started", {
                                                media: "screensharing"
                                            })
                                        }).catch(function() {
                                            s.us = !1
                                        }))
                                    }, i.vs = function() {
                                        for (var t = this.ps.getSenders(), i = null, n = 0; n < t.length; n++)
                                            if (t[n].track && "video" === t[n].track.kind) {
                                                i = t[n];
                                                break
                                            }
                                        null !== i && (i.track.stop(), i.track.dispatchEvent(new Event("ended")))
                                    }, i.Os = function(t) {
                                        null !== this.gs.video ? (t.replaceTrack(this.gs.video), this.gs.video = null) : this.ps.removeTrack(t), this.us = !1
                                    }, i.hn = function() {
                                        var t = this,
                                            i = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                                        null !== this.we && this.parent.Schedule.clear_interval(this.we), !0 === i && (this.we = this.parent.Schedule.set_interval(function() {
                                            t.parent.stream.emit("client:call:heartbeat", {})
                                        }, this.Yn))
                                    }, t
                                }(),
                                g = function() {
                                    function t(t) {
                                        this.parent = t
                                    }
                                    return t.prototype.fired = function(t, i) {
                                        i = {
                                            identifier: t,
                                            name: i
                                        };
                                        this.parent.socket.emit("trigger:fired", i), this.parent.event.publish("trigger:fired", i)
                                    }, t
                                }(),
                                w = function() {
                                    function t(t) {
                                        this.parent = t, this.ht()
                                    }
                                    var i = t.prototype;
                                    return i.configure = function(t) {
                                        this.Ss = t.project, this.Ds = t.revision, this.Rs = t.environment, this.Bs = t.useragent, this.Ns = t.page
                                    }, i.report = function(t, i, n) {
                                        if (!(this.Ss && this.Ds && this.Rs && this.Bs && this.Ns)) throw new Error("Missing a configuration parameter. Did you call configure() before?");
                                        "object" == typeof n && n instanceof Error && (n = {
                                            fileName: n.fileName,
                                            lineNumber: n.lineNumber,
                                            columnNumber: n.columnNumber,
                                            message: n.message,
                                            stack: n.stack
                                        });
                                        n = {
                                            project: this.Ss,
                                            revision: this.Ds,
                                            environment: this.Rs,
                                            useragent: this.Bs,
                                            page: this.Ns,
                                            level: t,
                                            namespace: i,
                                            traceback: n
                                        };
                                        this.parent.socket.emit("issue:report", n), this.parent.event.publish("issue:report", n)
                                    }, i.ht = function() {
                                        this.Ss = null, this.Ds = null, this.Rs = null, this.Bs = null, this.Ns = null
                                    }, t
                                }(),
                                b = r;
                            "object" == typeof __crisp_void_exports && "undefined" != typeof module ? module.exports = p() : "function" == typeof __crisp_void_define && define.amd ? define(p) : (b = "undefined" != typeof __crisp_void_global_this ? globalThis : b || self).io = p(),
                                function(t, i) {
                                    "use strict";
                                    "function" == typeof __crisp_void_define && define.amd ? define(["exports"], i) : "object" == typeof __crisp_void_exports ? i(exports) : i(t.PubSub = {})
                                }("object" == typeof r ? r : this, function(n) {
                                    "use strict";
                                    var o = {},
                                        e = -1;

                                    function r(t) {
                                        for (var i in t)
                                            if (t.hasOwnProperty(i)) return !0;
                                        return !1
                                    }

                                    function h(t, i, n) {
                                        try {
                                            t(i, n)
                                        } catch (t) {
                                            setTimeout((e = t, function() {
                                                throw e
                                            }), 0)
                                        }
                                        var e
                                    }

                                    function l(t, i, n) {
                                        t(i, n)
                                    }

                                    function u(t, i, n, e) {
                                        var s, c = o[i],
                                            a = e ? l : h;
                                        if (o.hasOwnProperty(i))
                                            for (s in c) c.hasOwnProperty(s) && a(c[s], t, n)
                                    }

                                    function s(t, i, n, e) {
                                        var s, c, a, e = (c = i, a = e, function() {
                                            var t = String(s),
                                                i = t.lastIndexOf(".");
                                            for (u(s, s, c, a); - 1 !== i;) i = (t = t.substr(0, i)).lastIndexOf("."), u(s, t, c, a)
                                        });
                                        return !! function(t) {
                                            for (var i = String(s), n = Boolean(o.hasOwnProperty(i) && r(o[i])), e = i.lastIndexOf("."); !n && -1 !== e;) e = (i = i.substr(0, e)).lastIndexOf("."), n = Boolean(o.hasOwnProperty(i) && r(o[i]));
                                            return n
                                        }(s = t) && (!0 === n ? e() : setTimeout(e, 0), !0)
                                    }
                                    n.publish = function(t, i) {
                                        return s(t, i, !1, n.immediateExceptions)
                                    }, n.publishSync = function(t, i) {
                                        return s(t, i, !0, n.immediateExceptions)
                                    }, n.subscribe = function(t, i) {
                                        if ("function" != typeof i) return !1;
                                        o.hasOwnProperty(t) || (o[t] = {});
                                        var n = "uid_" + String(++e);
                                        return o[t][n] = i, n
                                    }, n.clearAllSubscriptions = function() {
                                        o = {}
                                    }, n.clearSubscriptions = function(t) {
                                        for (var i in o) o.hasOwnProperty(i) && 0 === i.indexOf(t) && delete o[i]
                                    }, n.unsubscribe = function(t) {
                                        var i, n, e, s = "string" == typeof t && o.hasOwnProperty(t),
                                            c = !s && "string" == typeof t,
                                            a = "function" == typeof t,
                                            r = !1;
                                        if (!s) {
                                            for (i in o)
                                                if (o.hasOwnProperty(i)) {
                                                    if (n = o[i], c && n[t]) {
                                                        delete n[t], r = t;
                                                        break
                                                    }
                                                    if (a)
                                                        for (e in n) n.hasOwnProperty(e) && n[e] === t && (delete n[e], r = !0)
                                                }
                                            return r
                                        }
                                        delete o[t]
                                    }
                                }),
                                function(t, a) {
                                    "use strict";

                                    function i(t) {
                                        function c(t, i, n) {
                                            return 1 === arguments.length ? c.get(t) : c.set(t, i, n)
                                        }
                                        return c.Ms = t.document, c._cacheKeyPrefix = "cookey.", c._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), c.defaults = {
                                            path: "/",
                                            secure: !1,
                                            sameSite: a
                                        }, c.get = function(t) {
                                            c._cachedDocumentCookie !== c.Ms.cookie && c._renewCache();
                                            t = c.Ts[c._cacheKeyPrefix + t];
                                            return t === a ? a : decodeURIComponent(t)
                                        }, c.set = function(t, i, n) {
                                            return (n = c._getExtendedOptions(n)).expires = c._getExpiresDate(i === a ? -1 : n.expires), c.Ms.cookie = c._generateCookieString(t, i, n), c
                                        }, c.expire = function(t, i) {
                                            return c.set(t, a, i)
                                        }, c._getExtendedOptions = function(t) {
                                            return {
                                                path: t && t.path || c.defaults.path,
                                                domain: t && t.domain || c.defaults.domain,
                                                expires: t && t.expires || c.defaults.expires,
                                                secure: (t && t.secure !== a ? t : c.defaults).secure,
                                                sameSite: t && t.sameSite || c.defaults.sameSite
                                            }
                                        }, c._isValidDate = function(t) {
                                            return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
                                        }, c._getExpiresDate = function(t, i) {
                                            if (i = i || new Date, "number" == typeof t ? t = t === 1 / 0 ? c._maxExpireDate : new Date(i.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)), t && !c._isValidDate(t)) throw new Error("Invalid expires");
                                            return t
                                        }, c._generateSameSiteString = function(t) {
                                            switch (t && t.sameSite || c.defaults.sameSite) {
                                                case a:
                                                    return "";
                                                case "None":
                                                case "none":
                                                    return ";sameSite=None";
                                                case "Lax":
                                                case "lax":
                                                    return ";sameSite=Lax";
                                                case "Strict":
                                                case "strict":
                                                    return ";sameSite=Strict";
                                                default:
                                                    throw new TypeError("Invalid sameSite")
                                            }
                                        }, c._generateCookieString = function(t, i, n) {
                                            i = (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (i = (i + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
                                            return i += (n = n || {}).path ? ";path=" + n.path : "", i += n.domain ? ";domain=" + n.domain : "", i += n.expires ? ";expires=" + n.expires.toUTCString() : "", (i += n.secure ? ";secure" : "") + c._generateSameSiteString(n)
                                        }, c._getCacheFromString = function(t) {
                                            for (var i = {}, n = t ? t.split("; ") : [], e = 0; e < n.length; e++) {
                                                var s = c._getKeyValuePairFromCookieString(n[e]);
                                                i[c._cacheKeyPrefix + s.key] === a && (i[c._cacheKeyPrefix + s.key] = s.value)
                                            }
                                            return i
                                        }, c._getKeyValuePairFromCookieString = function(t) {
                                            var i, n = (n = t.indexOf("=")) < 0 ? t.length : n,
                                                e = t.substr(0, n);
                                            try {
                                                i = decodeURIComponent(e)
                                            } catch (t) {}
                                            return {
                                                key: i,
                                                value: t.substr(n + 1)
                                            }
                                        }, c._renewCache = function() {
                                            c.Ts = c._getCacheFromString(c.Ms.cookie), c._cachedDocumentCookie = c.Ms.cookie
                                        }, c
                                    }
                                    t.Cookies = t && "object" == typeof t.document ? i(t) : i
                                }(r),
                                function() {
                                    "use strict";
                                    var t = r,
                                        u = "invalid",
                                        f = "undefined" != typeof ArrayBuffer,
                                        o = "0123456789abcdef".split(""),
                                        n = [-2147483648, 8388608, 32768, 128],
                                        h = [24, 16, 8, 0],
                                        y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                        i = [];

                                    function d(t) {
                                        t ? (i[0] = i[16] = i[1] = i[2] = i[3] = i[4] = i[5] = i[6] = i[7] = i[8] = i[9] = i[10] = i[11] = i[12] = i[13] = i[14] = i[15] = 0, this.blocks = i) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                                    }

                                    function e(t, i) {
                                        var n = typeof t;
                                        if ("string" == n) {
                                            for (var e, s = [], c = t.length, a = 0, r = 0; r < c; ++r)(e = t.charCodeAt(r)) < 128 ? s[a++] = e : (e < 2048 ? s[a++] = 192 | e >> 6 : (e < 55296 || 57344 <= e ? s[a++] = 224 | e >> 12 : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++r)), s[a++] = 240 | e >> 18, s[a++] = 128 | e >> 12 & 63), s[a++] = 128 | e >> 6 & 63), s[a++] = 128 | 63 & e);
                                            t = s
                                        } else {
                                            if ("object" != n) throw new Error(u);
                                            if (null === t) throw new Error(u);
                                            if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                            else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(u)
                                        }
                                        64 < t.length && (t = new d(!0).update(t).digest());
                                        for (var o = [], h = [], r = 0; r < 64; ++r) {
                                            var l = t[r] || 0;
                                            o[r] = 92 ^ l, h[r] = 54 ^ l
                                        }
                                        d.call(this, i), this.update(h), this.oKeyPad = o, this.inner = !0, this.memory = i
                                    }
                                    Array.isArray || (Array.isArray = function(t) {
                                        return "[object Array]" === Object.prototype.toString.call(t)
                                    }), f && !ArrayBuffer.isView && (ArrayBuffer.isView = function(t) {
                                        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                                    }), d.prototype.update = function(t) {
                                        if (!this.finalized) {
                                            var i, n = typeof t;
                                            if ("string" != n) {
                                                if ("object" != n) throw new Error(u);
                                                if (null === t) throw new Error(u);
                                                if (f && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                                else if (!(Array.isArray(t) || f && ArrayBuffer.isView(t))) throw new Error(u);
                                                i = !0
                                            }
                                            for (var e, s, c = 0, a = t.length, r = this.blocks; c < a;) {
                                                if (this.hashed && (this.hashed = !1, r[0] = this.block, r[16] = r[1] = r[2] = r[3] = r[4] = r[5] = r[6] = r[7] = r[8] = r[9] = r[10] = r[11] = r[12] = r[13] = r[14] = r[15] = 0), i)
                                                    for (s = this.start; c < a && s < 64; ++c) r[s >> 2] |= t[c] << h[3 & s++];
                                                else
                                                    for (s = this.start; c < a && s < 64; ++c)(e = t.charCodeAt(c)) < 128 ? r[s >> 2] |= e << h[3 & s++] : (e < 2048 ? r[s >> 2] |= (192 | e >> 6) << h[3 & s++] : (e < 55296 || 57344 <= e ? r[s >> 2] |= (224 | e >> 12) << h[3 & s++] : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++c)), r[s >> 2] |= (240 | e >> 18) << h[3 & s++], r[s >> 2] |= (128 | e >> 12 & 63) << h[3 & s++]), r[s >> 2] |= (128 | e >> 6 & 63) << h[3 & s++]), r[s >> 2] |= (128 | 63 & e) << h[3 & s++]);
                                                this.lastByteIndex = s, this.bytes += s - this.start, 64 <= s ? (this.block = r[16], this.start = s - 64, this.hash(), this.hashed = !0) : this.start = s
                                            }
                                            return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                        }
                                    }, d.prototype.finalize = function() {
                                        var t, i;
                                        this.finalized || (this.finalized = !0, t = this.blocks, i = this.lastByteIndex, t[16] = this.block, t[i >> 2] |= n[3 & i], this.block = t[16], 56 <= i && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash())
                                    }, d.prototype.hash = function() {
                                        for (var t, i, n, e, s, c, a = this.h0, r = this.h1, o = this.h2, h = this.h3, l = this.h4, u = this.h5, f = this.h6, d = this.h7, v = this.blocks, p = 16; p < 64; ++p) t = ((i = v[p - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, i = v[p - 2], v[p] = v[p - 16] + t + v[p - 7] + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) << 0;
                                        for (c = r & o, p = 0; p < 64; p += 4) this.first ? (d = (i = v[0] - 210244248) - 1521486534 << 0, h = i + 143694565 << 0, this.first = !(n = 704751109)) : (d = h + (i = d + ((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & u ^ ~l & f) + y[p] + v[p]) << 0, h = i + ((t = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((n = a & r) ^ a & o ^ c)) << 0), f = o + (i = f + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & l ^ ~d & u) + y[p + 1] + v[p + 1]) << 0, o = i + ((t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((e = h & a) ^ h & r ^ n)) << 0, u = r + (i = u + ((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & d ^ ~f & l) + y[p + 2] + v[p + 2]) << 0, r = i + ((t = (o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10)) + ((s = o & h) ^ o & a ^ e)) << 0, l = a + (i = l + ((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & f ^ ~u & d) + y[p + 3] + v[p + 3]) << 0, a = i + ((t = (r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + ((c = r & o) ^ r & h ^ s)) << 0;
                                        this.h0 = this.h0 + a << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + o << 0, this.h3 = this.h3 + h << 0, this.h4 = this.h4 + l << 0, this.h5 = this.h5 + u << 0, this.h6 = this.h6 + f << 0, this.h7 = this.h7 + d << 0
                                    }, d.prototype.toString = d.prototype.hex = function() {
                                        this.finalize();
                                        var t = this.h0,
                                            i = this.h1,
                                            n = this.h2,
                                            e = this.h3,
                                            s = this.h4,
                                            c = this.h5,
                                            a = this.h6,
                                            r = this.h7;
                                        return o[t >> 28 & 15] + o[t >> 24 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 4 & 15] + o[15 & t] + o[i >> 28 & 15] + o[i >> 24 & 15] + o[i >> 20 & 15] + o[i >> 16 & 15] + o[i >> 12 & 15] + o[i >> 8 & 15] + o[i >> 4 & 15] + o[15 & i] + o[n >> 28 & 15] + o[n >> 24 & 15] + o[n >> 20 & 15] + o[n >> 16 & 15] + o[n >> 12 & 15] + o[n >> 8 & 15] + o[n >> 4 & 15] + o[15 & n] + o[e >> 28 & 15] + o[e >> 24 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 4 & 15] + o[15 & e] + o[s >> 28 & 15] + o[s >> 24 & 15] + o[s >> 20 & 15] + o[s >> 16 & 15] + o[s >> 12 & 15] + o[s >> 8 & 15] + o[s >> 4 & 15] + o[15 & s] + o[c >> 28 & 15] + o[c >> 24 & 15] + o[c >> 20 & 15] + o[c >> 16 & 15] + o[c >> 12 & 15] + o[c >> 8 & 15] + o[c >> 4 & 15] + o[15 & c] + o[a >> 28 & 15] + o[a >> 24 & 15] + o[a >> 20 & 15] + o[a >> 16 & 15] + o[a >> 12 & 15] + o[a >> 8 & 15] + o[a >> 4 & 15] + o[15 & a] + o[r >> 28 & 15] + o[r >> 24 & 15] + o[r >> 20 & 15] + o[r >> 16 & 15] + o[r >> 12 & 15] + o[r >> 8 & 15] + o[r >> 4 & 15] + o[15 & r]
                                    }, d.prototype.digest = function() {
                                        this.finalize();
                                        var t = this.h0,
                                            i = this.h1,
                                            n = this.h2,
                                            e = this.h3,
                                            s = this.h4,
                                            c = this.h5,
                                            a = this.h6,
                                            r = this.h7;
                                        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                                    }, (e.prototype = new d).finalize = function() {
                                        var t;
                                        d.prototype.finalize.call(this), this.inner && (this.inner = !1, t = this.digest(), d.call(this, this.memory), this.update(this.oKeyPad), this.update(t), d.prototype.finalize.call(this))
                                    };
                                    var s = (c.create = function() {
                                        return new d
                                    }, c.update = function(t) {
                                        return c.create().update(t)
                                    }, c);

                                    function c(t) {
                                        return new d(!0).update(t).hex()
                                    }

                                    function a(t, i) {
                                        return new e(t, !0).update(i).hex()
                                    }(s.sha256 = s).sha256.hmac = (a.create = function(t) {
                                        return new e(t)
                                    }, a.update = function(t, i) {
                                        return a.create(t).update(i)
                                    }, a), t.sha256 = s.sha256
                                }(), this.Us = /^((?:https?|wss?):\/\/[^\/]+)(\/.*)?$/, this.Ps(), this.ot(t), this.Ls(t, r), this.Config = new i(this), this.Register = new n(this), this.Schedule = new e(this), this.Listener = new s(this), this.Socket = new c(this), this.Stream = new a(this), this.Storage = new o(this), this.Browsing = new m(this), this.Call = new _(this), this.Message = new h(this), this.Session = new l(this), this.Website = new u(this), this.Bucket = new f(this), this.Media = new d(this), this.Helpdesk = new y(this), this.Trigger = new g(this), this.Issue = new w(this), this.pt(), !0 === t.connect_socket && this.socket.connect()
                        }, i.Ps = function() {
                            this.ht()
                        }, i.ht = function() {
                            delete this.environment, delete this.disable_autoload, delete this.url_go, delete this.website_domain, delete this.website_id, delete this.token_id, delete this.cookie_expire, delete this.cookie_domain, delete this.platform_name, delete this.platform_signature_key, delete this.runtime_configuration, delete this.device, this.Js = !1, this.Vs = !1
                        }, i.ot = function(t) {
                            t && t.environment && (this.environment = t.environment || "development"), t && t.disable_autoload && (this.disable_autoload = t.disable_autoload), t && t.url_go && (this.url_go = t.url_go), t && t.website_domain && (this.website_domain = t.website_domain), t && t.website_id && (this.website_id = t.website_id), t && t.token_id && (this.token_id = t.token_id), t && t.cookie_expire && (this.cookie_expire = t.cookie_expire), t && t.cookie_domain && (this.cookie_domain = t.cookie_domain), t && t.platform_name && (this.platform_name = t.platform_name), t && t.platform_signature_key && (this.platform_signature_key = t.platform_signature_key), t && t.runtime_configuration && (this.runtime_configuration = t.runtime_configuration), this.device = {}, t && t.useragent && (this.device.useragent = t.useragent), t && t.timezone && (this.device.timezone = t.timezone), t && t.capabilities && (this.device.capabilities = t.capabilities), t && t.locales && (this.device.locales = t.locales)
                        }, i.Ls = function(t, i) {
                            var n = ["websocket"],
                                e = (t.url_relay_client || "").match(this.Us) || [],
                                t = (t.url_relay_stream || "").match(this.Us) || [];
                            this.event = i.PubSub, this.socket = i.io(e[1] || null, {
                                path: e[2] || "/",
                                transports: n,
                                autoConnect: !1,
                                timeout: 25e3,
                                reconnectionDelay: 15e3,
                                reconnectionDelayMax: 6e4,
                                reconnectionAttempts: 5,
                                randomizationFactor: .5
                            }), this.stream = i.io(t[1] || null, {
                                path: t[2] || "/",
                                transports: n,
                                reconnection: !1,
                                autoConnect: !1
                            }), this.cookie = i.Cookies(window), this.sha256 = i.sha256
                        }, i.pt = function() {
                            var t = this;
                            this.Listener.add_event("index", "window", "pagehide", function() {
                                t.Js = t.socket.connected || !1, t.Vs = t.stream.connected || !1, !0 === t.socket.connected && t.socket.disconnect(), !0 === t.stream.connected && t.stream.disconnect()
                            }), this.Listener.add_event("index", "window", "pageshow", function() {
                                !0 === t.Js && (t.Js = !1, t.socket.connect()), !0 === t.Vs && (t.Vs = !1, t.stream.connect())
                            }), this.Listener.add_event("index", "window", "popstate", function() {
                                t.Ws()
                            }), "object" == typeof window.history && (this.Listener.apply_patch("index", "window.history", "pushState", window.history, function() {
                                t.Ws()
                            }), this.Listener.apply_patch("index", "window.history", "replaceState", window.history, function() {
                                t.Ws()
                            }))
                        }, i.Ws = function() {
                            this.Session.send_device(), this.event.publish("window:history", {
                                page_url: document.location.href,
                                page_domain: document.location.hostname
                            })
                        }, t
                    }(), t.CrispLibraryClient = new i;
                    var _ = {
                        client: function(t) {
                            var n = [],
                                t = t || {};
                            return function(t, i) {
                                n.push('<div aria-live="polite" class="crisp-client"><div class="cc-1s47"></div><div id="crisp-chatbox" :data-hidden="$store.base.is_hidden" :data-force-show="$store.base.force_show" :data-availability="$store.base.availability" :data-lock-maximized="$store.base.runtime.lock_maximized ? true : false" :data-last-operator-face="($store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.active_operators.length &gt; 0) ? true : false" :data-ongoing-operator-face="($store.base.configuration.chat.ongoing_operator_face &amp;&amp; $store.chat.ongoing_operator.url) ? true : false" :data-availability-tooltip="$store.base.configuration.chat.availability_tooltip" :data-hide-vacation="$store.base.configuration.chat.hide_vacation" :data-blocked="$store.base.is_blocked" :data-mobile-view="$store.base.is_mobile_view" :data-full-view="$store.base.is_full_view" :data-small-view="$store.base.is_small_view" :data-large-view="$store.base.is_large_view" :data-has-local-messages="$store.base.has_local_messages" :data-was-availability-online="$store.base.was_availability_online" :data-is-activity-ongoing="$store.base.is_activity_ongoing" :data-hide-on-away="$store.base.configuration.chat.hide_on_away" :data-hide-on-mobile="$store.base.configuration.chat.hide_on_mobile" :data-position-reverse="$store.base.configuration.chat.position_reverse"' + h.Library.jade.runtime.attr("lang", "" + i, !0, !0) + h.Library.jade.runtime.attr("dir", "" + t, !0, !0) + ' translate="no" tabindex="-1" class="cc-tlyw"></div></div>')
                            }.call(this, "direction" in t ? t.direction : "undefined" != typeof direction ? direction : void 0, "lang" in t ? t.lang : "undefined" != typeof lang ? lang : void 0), n.join("")
                        },
                        viewport: function(t) {
                            var i = [],
                                t = t || {};
                            return function(t) {
                                i.push('<meta name="viewport"' + h.Library.jade.runtime.attr("content", "" + t, !0, !0) + ">")
                            }.call(this, "content" in t ? t.content : "undefined" != typeof content ? content : void 0), i.join("")
                        },
                        clear: function(t) {
                            var i = [];
                            return i.push('<span class="cc-1vzn"></span>'), i.join("")
                        },
                        style_color: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<div class="cc-1kpe"><style type="text/css">.crisp-client *:focus-visible {\n  outline-color: ' + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1v0h {\n  color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-uv5q {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1cu8 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-ycwi {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-18qu {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-qfnu {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-qfnu *:focus-visible {\n  outline-color: " + h.Library.jade.runtime.escape(null == (i = t[10].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1ms5 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[20].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1r50 {\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[10].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-zkg3 {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t.reverse.hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-ut0j,\n.crisp-client .cc-tlyw .cc-dpkb:hover {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-zg42 {\n  border-color: " + h.Library.jade.runtime.escape(null == (i = t[500].rgba(.2)) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1sel {\n  border-bottom-color: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-jf4n::placeholder {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-4upc::placeholder {\n  color: " + h.Library.jade.runtime.escape(null == (i = t[200].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-f23s,\n.crisp-client .cc-tlyw .cc-f23s:active,\n.crisp-client .cc-tlyw .cc-eugx:hover .cc-1una,\n.crisp-client .cc-tlyw .cc-eugx .cc-1una:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + ' !important;\n}\n\n.crisp-client .cc-tlyw .cc-1oci,\n.crisp-client .cc-tlyw .cc-a691:hover,\n.crisp-client .cc-tlyw .cc-jf9n[data-active="true"] .cc-1lnv {\n  background: ' + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-f23s:hover,\n.crisp-client .cc-tlyw .cc-1oci:hover,\n.crisp-client .cc-tlyw .cc-a691:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1oci:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[900].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-raer:hover .cc-y80i {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-raer .cc-y80i:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[800].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x,\n.crisp-client .cc-tlyw .cc-pyh5:hover .cc-13te,\n.crisp-client .cc-tlyw .cc-pyh5 .cc-13te:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[500].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x:hover {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[600].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-1t4x:active {\n  background: " + h.Library.jade.runtime.escape(null == (i = t[700].hex) ? "" : i) + " !important;\n}\n\n.crisp-client .cc-tlyw .cc-14b7::selection,\n.crisp-client .cc-tlyw .cc-14b7 *::selection {\n  color: #1c293b !important;\n  background-color: " + h.Library.jade.runtime.escape(null == (i = t[100].hex) ? "" : i) + " !important;\n}</style></div>")
                            }.call(this, "colors" in t ? t.colors : "undefined" != typeof colors ? colors : void 0), n.join("")
                        },
                        style_other: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<div class="cc-15aw"><style type="text/css">.crisp-client .cc-tlyw {\n  z-index: ' + h.Library.jade.runtime.escape(null == (i = t) ? "" : i) + ";\n}</style></div>")
                            }.call(this, "container_index" in t ? t.container_index : "undefined" != typeof container_index ? container_index : void 0), n.join("")
                        },
                        style_position: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<div class="cc-17eb">'), t.default_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-1hqb {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-1hqb {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"][data-position-reverse="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.default_button_vertical && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-nsge,\n.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-1hqb {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.default_button_vertical) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_horizontal && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="false"] .cc-kxkl .cc-nsge {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="false"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-right: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="true"] .cc-kxkl .cc-nsge {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"][data-position-reverse="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-left: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_horizontal) ? "" : i) + "px !important;\n}\n</style>"), t.mobile_button_vertical && n.push('<style type="text/css">.crisp-client .cc-tlyw[data-full-view="true"] .cc-kxkl .cc-nsge {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + 'px !important;\n}\n\n.crisp-client .cc-tlyw[data-full-view="true"] .cc-kxkl .cc-nsge .cc-ujvn .cc-1fs0 {\n  margin-bottom: ' + h.Library.jade.runtime.escape(null == (i = t.mobile_button_vertical) ? "" : i) + "px !important;\n}</style>"), n.push("</div>")
                            }.call(this, "position" in t ? t.position : "undefined" != typeof position ? position : void 0), n.join("")
                        },
                        new_line: function(t) {
                            var i = [];
                            return i.push('<br class="cc-mrr9">'), i.join("")
                        },
                        link_phone: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push("<a" + h.Library.jade.runtime.attr("href", "tel:" + t, !1, !0) + ' class="cc-unsu cc-1c9j">' + (null == (i = t) ? "" : i) + "</a>")
                            }.call(this, "phone" in t ? t.phone : "undefined" != typeof phone ? phone : void 0), n.join("")
                        },
                        link_email: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push("<a" + h.Library.jade.runtime.attr("href", "mailto:" + t, !1, !0) + ' class="cc-unsu cc-cieh">' + (null == (i = t) ? "" : i) + "</a>")
                            }.call(this, "email" in t ? t.email : "undefined" != typeof email ? email : void 0), n.join("")
                        },
                        link_uri: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push("<a" + h.Library.jade.runtime.attr("href", "" + i, !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-unsu cc-e1vc">' + (null == (n = t) ? "" : n) + "</a>")
                            }.call(this, "uri_name" in t ? t.uri_name : "undefined" != typeof uri_name ? uri_name : void 0, "uri_value" in t ? t.uri_value : "undefined" != typeof uri_value ? uri_value : void 0), e.join("")
                        },
                        link_domain: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push("<a" + h.Library.jade.runtime.attr("href", "http://" + i + "/", !1, !0) + ' rel="noopener noreferrer" target="_blank" class="cc-unsu cc-1lq3">' + (null == (n = t) ? "" : n) + "</a>")
                            }.call(this, "domain_name" in t ? t.domain_name : "undefined" != typeof domain_name ? domain_name : void 0, "domain_value" in t ? t.domain_value : "undefined" != typeof domain_value ? domain_value : void 0), e.join("")
                        },
                        markdown_blockquote: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-h2ac">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_table: function(t) {
                            var c, a = [],
                                t = t || {};
                            return function(s, t, e) {
                                a.push('<table class="cc-1d9x cc-9afi">'), 0 < s.length && (a.push('<thead class="cc-179w"><tr>'), function() {
                                        var t = s;
                                        if ("number" == typeof t.length)
                                            for (var i = 0, n = t.length; i < n; i++) {
                                                var e = t[i];
                                                a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                            } else
                                                for (i in n = 0, t) n++, e = t[i], a.push("<th>" + (null == (c = e) ? "" : c) + "</th>")
                                    }.call(this), a.push("</tr></thead>")), a.push("<tbody>"),
                                    function() {
                                        var t = e;
                                        if ("number" == typeof t.length)
                                            for (var i = 0, n = t.length; i < n; i++) {
                                                var s = t[i];
                                                a.push("<tr>"),
                                                    function() {
                                                        var t = s;
                                                        if ("number" == typeof t.length)
                                                            for (var i = 0, n = t.length; i < n; i++) {
                                                                var e = t[i];
                                                                a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                            } else
                                                                for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                    }.call(this), a.push("</tr>")
                                            } else
                                                for (i in n = 0, t) n++, s = t[i], a.push("<tr>"),
                                                    function() {
                                                        var t = s;
                                                        if ("number" == typeof t.length)
                                                            for (var i = 0, n = t.length; i < n; i++) {
                                                                var e = t[i];
                                                                a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                            } else
                                                                for (i in n = 0, t) n++, e = t[i], a.push("<td>" + (null == (c = e) ? "" : c) + "</td>")
                                                    }.call(this), a.push("</tr>")
                                    }.call(this), a.push("</tbody></table>")
                            }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "undefined" in t ? t.undefined : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                        },
                        markdown_color: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push("<span" + h.Library.jade.runtime.attr("style", "color: " + t + " !important;", !0, !0) + ' class="cc-1d9x cc-1djk">' + (null == (n = i) ? "" : n) + "</span>")
                            }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                        },
                        markdown_bold: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-b2np cc-179w">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_code_inline: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-188s cc-1vqo cc-1ms5">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_code_block: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-188s cc-1xuf cc-1ms5">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_delete: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-xymf">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_highlight: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-1lge">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_emphasis: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-8jm9 cc-179w">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_image: function(t) {
                            var s = [],
                                t = t || {};
                            return function(t, i, n, e) {
                                s.push("");
                                e = t(e);
                                s.push('<span class="cc-1d9x cc-1spa"><img' + h.Library.jade.runtime.attr("src", n + "/process/original/?url=" + e, !1, !0) + h.Library.jade.runtime.attr("alt", "" + i, !1, !0) + "></span>")
                            }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                        },
                        markdown_interpolate: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push('<span class="cc-1d9x cc-1c09">{{ ' + h.Library.jade.runtime.escape(null == (n = t) ? "" : n) + h.Library.jade.runtime.escape(null == (n = i ? ' | "' + i + '"' : "") ? "" : n) + " }}</span>")
                            }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                        },
                        markdown_italic: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-s248">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_line: function(t) {
                            var i = [];
                            return i.push('<span class="cc-1d9x cc-1ux6"></span>'), i.join("")
                        },
                        markdown_link_text: function(t) {
                            var e, s = [],
                                t = t || {};
                            return function(t, i, n) {
                                s.push("<a" + h.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + h.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-s0i4 cc-13qg">' + (null == (e = i) ? "" : e) + "</a>")
                            }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                        },
                        markdown_link_image: function(t) {
                            var c = [],
                                t = t || {};
                            return function(t, i, n, e, s) {
                                c.push("");
                                n = t(n);
                                c.push("<a" + h.Library.jade.runtime.attr("href", "" + i.filter_link_safe(s), !1, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-s0i4 cc-1jsk"><span class="cc-1d9x cc-1spa"><img' + h.Library.jade.runtime.attr("src", e + "/process/original/?url=" + n, !1, !0) + ' alt=""></span></a>')
                            }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                        },
                        markdown_list: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push("<span" + h.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-1d9x cc-s39d">' + (null == (n = i) ? "" : n) + "</span>")
                            }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                        },
                        markdown_title: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push("<span" + h.Library.jade.runtime.attr("data-type", "" + t, !1, !0) + ' class="cc-1d9x cc-17lj cc-179w">' + (null == (n = i) ? "" : n) + "</span>")
                            }.call(this, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), e.join("")
                        },
                        markdown_underline: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span class="cc-1d9x cc-dzm3">' + (null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), n.join("")
                        },
                        markdown_youtube: function(t) {
                            var a = [],
                                t = t || {};
                            return function(t, i, n, e, s) {
                                a.push("");
                                var c = "https://www.youtube.com/embed/" + t(s) + "?autoplay=1&rel=0",
                                    s = t("https://img.youtube.com/vi/" + t(s) + "/hqdefault.jpg");
                                a.push("<a" + h.Library.jade.runtime.attr("href", c, !0, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-sput cc-wzp2"><span class="cc-mxp0 cc-qy8o cc-9siz cc-1jnc"><img' + h.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=960&height=960", !0, !0) + h.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                            }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                        },
                        markdown_vimeo: function(t) {
                            var s, c = [],
                                t = t || {};
                            return function(t, i, n, e) {
                                c.push("");
                                e = "https://vimeo.com/" + t(e) + "?autoplay=1";
                                c.push("<a" + h.Library.jade.runtime.attr("href", e, !1, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-unsu cc-e1vc">' + (null == (s = n || e) ? "" : s) + "</a>")
                            }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), c.join("")
                        },
                        markdown_dailymotion: function(t) {
                            var a = [],
                                t = t || {};
                            return function(t, i, n, e, s) {
                                a.push("");
                                var c = "https://www.dailymotion.com/embed/video/" + t(s),
                                    s = t("https://www.dailymotion.com/thumbnail/video/" + t(s));
                                a.push("<a" + h.Library.jade.runtime.attr("href", c, !0, !0) + h.Library.jade.runtime.attr("target", "" + i.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-1d9x cc-sput cc-kkqo"><span class="cc-mxp0 cc-vxmv cc-9siz cc-1jnc"><img' + h.Library.jade.runtime.attr("src", e + "/process/resize/?url=" + s + "&width=320&height=240", !0, !0) + h.Library.jade.runtime.attr("alt", "" + n, !0, !0) + "></span></a>")
                            }.call(this, "encodeURIComponent" in t ? t.encodeURIComponent : "undefined" != typeof encodeURIComponent ? encodeURIComponent : void 0, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "url_crisp_image" in t ? t.url_crisp_image : "undefined" != typeof url_crisp_image ? url_crisp_image : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), a.join("")
                        },
                        markdown_frame: function(t) {
                            var e, s = [],
                                t = t || {};
                            return function(t, i, n) {
                                s.push("<a" + h.Library.jade.runtime.attr("href", "" + t.filter_link_safe(n), !1, !0) + h.Library.jade.runtime.attr("target", "" + t.html_attribute("_blank"), !1, !0) + ' rel="noopener noreferrer" class="cc-unsu cc-e1vc">' + (null == (e = i || n) ? "" : e) + "</a>")
                            }.call(this, "methods" in t ? t.methods : "undefined" != typeof methods ? methods : void 0, "type" in t ? t.type : "undefined" != typeof type ? type : void 0, "value" in t ? t.value : "undefined" != typeof value ? value : void 0), s.join("")
                        },
                        smiley: function(t) {
                            var n = [],
                                t = t || {};
                            return function(t, i) {
                                n.push("<span" + h.Library.jade.runtime.attr("data-size", i, !0, !0) + h.Library.jade.runtime.attr("data-name", t, !0, !0) + ' class="cc-1eqs"></span>')
                            }.call(this, "name" in t ? t.name : "undefined" != typeof name ? name : void 0, "size" in t ? t.size : "undefined" != typeof size ? size : void 0), n.join("")
                        },
                        magnify: function(t) {
                            var i = [];
                            return i.push('<div @click="$events.magnify.disappear_fuzzy" @keydown="$events.magnify.keydown" :data-type="$store.magnify.type" :data-state="$store.magnify.state" tabindex="0" class="cc-uxns"><span class="cc-irw3 cc-1gcw cc-1sel"></span><img v-if="$store.magnify.type === \'image\'" v-on:load="$store.magnify.state = \'loaded\'" @click="$events.magnify.disappear()" :src="$store.magnify.source" alt="" class="cc-5moc"><video v-else-if="$store.magnify.type === \'video\'" v-on:loadeddata="$store.magnify.state = \'loaded\'" :src="$store.magnify.source" autoplay controls class="cc-5moc"></video><iframe v-else v-on:load="$store.magnify.state = \'loaded\'" type="text/html" :src="$store.magnify.source" frameborder="0" sandbox="allow-popups allow-same-origin allow-scripts" class="cc-5moc"></iframe><div class="cc-1scn"><div class="cc-iy3v"><a v-if="$store.magnify.messages.previous" v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.navigate_click(\'previous\')" data-action="previous" class="cc-fupn"></a><a v-if="$store.magnify.type === \'image\' || $store.magnify.type === \'video\'" v-crisp-accessibility="{ role: \'button\' }" :href="$store.magnify.source" :download="$store.magnify.name || $store.magnify.source" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-fupn"></a><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.disappear()" data-action="close" class="cc-fupn"></a><a v-if="$store.magnify.messages.next" v-crisp-accessibility="{ role: \'button\' }" @click="$events.magnify.navigate_click(\'next\')" data-action="next" class="cc-fupn"></a></div></div></div>'), i.join("")
                        },
                        date_now: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="now" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t("date", "now")) ? "" : i) + "</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        date_seconds: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="seconds" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t("date", "second")) ? "" : i) + "</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        date_minutes: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push('<span data-type="minutes" class="cc-q065">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("date", "minute_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("date", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                        },
                        date_hours: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push('<span data-type="hours" class="cc-q065">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("date", "hour_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("date", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                        },
                        date_far_away: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="far_away" class="cc-q065">' + h.Library.jade.runtime.escape(null == (i = t) ? "" : i) + "</span>")
                            }.call(this, "date_full" in t ? t.date_full : "undefined" != typeof date_full ? date_full : void 0), n.join("")
                        },
                        duration_now: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="now" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "now")) ? "" : i) + "</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        duration_seconds: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="seconds" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "second")) ? "" : i) + "</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        duration_minutes: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push('<span data-type="minutes" class="cc-k09t">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "minute_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "minute_plural", [i])) ? "" : n)), e.push("</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "minutes" in t ? t.minutes : "undefined" != typeof minutes ? minutes : void 0), e.join("")
                        },
                        duration_hours: function(t) {
                            var n, e = [],
                                t = t || {};
                            return function(t, i) {
                                e.push('<span data-type="hours" class="cc-k09t">'), 1 === i ? e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "hour_singular")) ? "" : n)) : e.push(h.Library.jade.runtime.escape(null == (n = t("duration", "hour_plural", [i])) ? "" : n)), e.push("</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "hours" in t ? t.hours : "undefined" != typeof hours ? hours : void 0), e.join("")
                        },
                        duration_days: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<span data-type="days" class="cc-k09t">' + h.Library.jade.runtime.escape(null == (i = t("duration", "days")) ? "" : i) + "</span>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        chat: function(t) {
                            var a, r = [],
                                o = {},
                                t = t || {};
                            return function(e, s, t, i) {
                                r.push(""), r.push(""), o["text-space"] = a = function() {
                                        this && this.block, this && this.attributes, r.push("<span> </span>")
                                    }, r.push('<div class="cc-kxkl cc-14b7"><div @wheel="$events.chat.fuzzy_wheel" :data-visible="$store.chat.is_opened" :data-chat-status="$store.chat.status_marker" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" class="cc-1hqb"><div v-effect="has_tile = (($store.base.configuration.chat.tile &amp;&amp; $store.base.configuration.chat.tile !== \'default\') ? true : false)" class="cc-13tl"><div :data-mode="$store.chat.mode" :data-helpdesk-collapsed="(($store.chat.mode === \'helpdesk\') &amp;&amp; $store.chat.helpdesk_viewer.url) ? \'true\' : \'false\'" :data-tile="(has_tile ? $store.base.configuration.chat.tile : null)" :data-overflow="$store.chat.has_channels" class="cc-1cff cc-qfnu"><span class="cc-143a">'),
                                    function() {
                                        var t = ["chat", "helpdesk"];
                                        if ("number" == typeof t.length)
                                            for (var i = 0, n = t.length; i < n; i++) {
                                                var e = t[i];
                                                r.push("<a" + h.Library.jade.runtime.attr("v-if", ("chat" === e ? "!$store.chat.helpdesk.only" : null) || ("helpdesk" === e ? "$store.chat.helpdesk.search" : null), !0, !0) + h.Library.jade.runtime.attr("v-crisp-accessibility", "{ role: 'button', is_first: " + (0 === i) + " }", !0, !0) + h.Library.jade.runtime.attr("@click.stop.prevent", "$events.chat.pane_mode_click('" + e + "')", !0, !0) + h.Library.jade.runtime.attr(":class", "{ 'cc-1oci cc-a691': ($store.chat.mode === '" + e + "'), 'cc-a691': ($store.chat.mode !== '" + e + "') }", !0, !0) + h.Library.jade.runtime.attr(":data-disabled", "helpdesk" === e ? "($store.chat.has_offline && $store.chat.mode !== 'helpdesk') ? 'true' : 'false'" : null, !0, !0) + h.Library.jade.runtime.attr("data-mode", "" + e, !0, !0) + ' class="cc-3opp"><span class="cc-443p cc-1cu8"></span><span class="cc-ptjr cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_mode_" + e)) ? "" : a) + "</span></a>")
                                            } else
                                                for (i in n = 0, t) n++, r.push("<a" + h.Library.jade.runtime.attr("v-if", ("chat" === (e = t[i]) ? "!$store.chat.helpdesk.only" : null) || ("helpdesk" === e ? "$store.chat.helpdesk.search" : null), !0, !0) + h.Library.jade.runtime.attr("v-crisp-accessibility", "{ role: 'button', is_first: " + (0 === i) + " }", !0, !0) + h.Library.jade.runtime.attr("@click.stop.prevent", "$events.chat.pane_mode_click('" + e + "')", !0, !0) + h.Library.jade.runtime.attr(":class", "{ 'cc-1oci cc-a691': ($store.chat.mode === '" + e + "'), 'cc-a691': ($store.chat.mode !== '" + e + "') }", !0, !0) + h.Library.jade.runtime.attr(":data-disabled", "helpdesk" === e ? "($store.chat.has_offline && $store.chat.mode !== 'helpdesk') ? 'true' : 'false'" : null, !0, !0) + h.Library.jade.runtime.attr("data-mode", "" + e, !0, !0) + ' class="cc-3opp"><span class="cc-443p cc-1cu8"></span><span class="cc-ptjr cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_mode_" + e)) ? "" : a) + "</span></a>")
                                    }.call(this), r.push('</span><div v-if="$store.chat.mode === \'chat\'" class="cc-ac94"><span class="cc-15os"><span v-if="$store.chat.status_marker === \'ongoing\'" class="cc-18pq"><span class="cc-1g88 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.chat.ongoing_operator.type, $store.chat.ongoing_operator.user_id, $store.chat.ongoing_operator.url) + \') !important\') }" class="cc-1b4q cc-4yys"></span><span v-if="$store.base.availability === \'online\'" class="cc-acrr cc-ut0j"></span></span><span class="cc-1vzn"></span></span><span v-else class="cc-18pq"><span v-for="active_avatar in $store.base.active_operators" class="cc-1g88 cc-18ij cc-10fp cc-ut0j"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, active_avatar.type, active_avatar.identifier, active_avatar.avatar) + \') !important\') }" class="cc-1b4q cc-4yys"></span><span v-if="active_avatar.name || (active_avatar.type === \'website\' &amp;&amp; $store.base.other_operators_count &gt; 0 &amp;&amp; $store.chat.show_operator_count === true)" class="cc-1shv cc-1npw cc-1o14 cc-e871"><span class="cc-1hb6 cc-l4vy cc-1ev6">{{ (active_avatar.type === \'website\' && $store.base.other_operators_count > 0 && $store.chat.show_operator_count === true) ? $render._e("chat", "chat_header_initial_avatar_website_tooltip", [$store.base.other_operators_count]) : active_avatar.name }}</span></span></span><span class="cc-1vzn"></span></span></span><span class="cc-hiql"><span v-if="$store.chat.status_marker === \'ongoing\'" class="cc-1lcq"><span class="cc-i5ze cc-1v0h cc-179w"><span class="cc-1ede cc-gjan cc-1v0h">{{ $store.chat.ongoing_operator.name }}</span><span v-if="$store.chat.ongoing_operator.name !== $store.base.configuration.website.name" class="cc-1ede cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_from")) ? "" : a) + ' {{ $store.base.configuration.website.name }}</span><span class="cc-1vzn"></span></span></span><span v-else class="cc-1lcq"><span class="cc-r03y cc-1v0h cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("theme_text", ["default_chat", t.chat.theme_text + "_chat"])) ? "" : a) + '</span><span class="cc-gsm6"><span v-if="$store.base.availability === \'online\'" data-type="online" class="cc-qx87 cc-1v0h"><span v-if="$store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.metrics" v-crisp-date="{ type: \'duration\', date : $store.chat.activity.metrics, format : $render._e(\'chat\', \'chat_header_ongoing_status_metrics\')}" class="cc-zacj cc-1v0h cc-1ev6"></span><span v-else class="cc-zacj cc-1v0h cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_status_online")) ? "" : a) + '</span></span><span v-else data-type="away" class="cc-qx87 cc-1v0h"><span v-if="$store.base.configuration.chat.activity_metrics === true &amp;&amp; $store.chat.activity.last" v-crisp-date="{ date : $store.chat.activity.last, format : $render._e(\'chat\', \'chat_header_ongoing_status_last\')}" class="cc-zacj cc-1v0h cc-1ev6"></span><span v-else class="cc-zacj cc-1v0h cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_ongoing_status_away")) ? "" : a) + '</span></span></span></span></span><span v-if="$store.chat.status_marker === \'ongoing\' &amp;&amp; $store.chat.channels.length &gt; 0" :data-active="$store.chat.has_channels" class="cc-skli cc-jf9n"><a v-crisp-accessibility="{ role: \'button\' }" @click.stop="$events.chat.header_channels_button_click" class="cc-1cx4 cc-10fp cc-1lnv"><span v-if="!$store.chat.has_channels" class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_channels")) ? "" : a) + '</span></span><span class="cc-k0lh cc-1cu8"></span></a><span class="cc-12c8"><span @click="$events.chat.header_channels_dropdown_click" class="cc-8noq"><a v-for="channel in $store.chat.channels" @click.stop="$events.chat.header_channels_dropdown_entry_click" :data-channel="channel.name" :target="((channel.name === \'email\') || (channel.name === \'phone\')) ? \'_parent\' : \'_blank\'" :href="channel.link" :aria-label="channel.name" rel="noopener noreferrer" class="cc-uu6n cc-10fp cc-pyh5"><span class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">{{ $render._e("chat", "chat_header_ongoing_channel_continue", [channel.format]) }}</span></span><span class="cc-alsu cc-13te"></span></a><span class="cc-1vzn"></span></span></span></span></div><div v-else-if="$store.chat.mode === \'helpdesk\'" class="cc-ac94"><span v-if="!$store.chat.helpdesk_viewer.url" class="cc-i73x"><span v-if="$store.chat.helpdesk_search.has_search" class="cc-4fqf cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_helpdesk_results")) ? "" : a) + '</span><span v-else class="cc-4fqf cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_header_helpdesk_curated")) ? "" : a) + '</span></span></div><span @click.prevent="$events.chat.pane_minimize_click" :class="(has_tile ? \'cc-eugx\' : \'cc-raer\')" class="cc-w9jl"><span v-crisp-accessibility="{ role: \'button\' }" :class="(has_tile ? \'cc-1una\' : \'cc-y80i\')" :aria-label="$render._e(\'minimized\', \'tooltip_button_close_hint\')" class="cc-13se"><span class="cc-ecxg cc-1cu8"></span></span></span></div><span class="cc-126v"></span></div><div @click="$events.chat.fuzzy_click" :data-has-health="(($store.chat.status.url &amp;&amp; $store.base.configuration.chat.status_health_dead === true &amp;&amp; $store.base.configuration.website.status &amp;&amp; $store.base.configuration.website.status.health === \'dead\' &amp;&amp; ($render.current_time() - $store.base.configuration.website.status.since) &gt;= 180000))" :data-has-offline="$store.chat.has_offline" :data-has-feedback="$store.chat.feedback.is_visible" :data-has-alert="$store.chat.current_alerts ? true : false" :data-has-drop-zone="$store.chat.has_drop_zone" :data-is-hidden-prompt="$store.chat.is_hidden_prompt" class="cc-gye0"><div v-effect="has_form_disabled = ($store.base.runtime.lock_maximized !== true &amp;&amp; ($store.base.configuration.chat.hide_vacation === true || $store.chat.blocked === true))" @wheel="$events.chat.chat_wheel" @dragover="$events.chat.file_drop_dragover" :data-visible="$store.chat.mode === \'chat\'" class="cc-11uv"><div :data-reconnect-failed="$store.chat.reconnect_failed" :data-reconnect-inactive="$store.chat.reconnect_inactive" class="cc-1dp6 cc-1vf3"><div class="cc-jdpj"><span class="cc-10vv cc-gr6h"></span><span class="cc-1enr"><span v-if="!$store.chat.reconnect_failed &amp;&amp; !$store.chat.reconnect_inactive" class="cc-snfi cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_main")) ? "" : a) + '</span><span v-else-if="$store.chat.reconnect_failed" class="cc-1aml cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_fail")) ? "" : a) + '</span><span v-else-if="$store.chat.reconnect_inactive" class="cc-squm cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_inactive")) ? "" : a) + '</span><span v-if="$store.chat.reconnect_inactive" class="cc-11bg cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_label_resume")) ? "" : a) + '</span><span v-else class="cc-m99z cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_offline_label_frozen")) ? "" : a) + '</span></span></div></div><div v-if="$store.chat.status.url" class="cc-1by5 cc-1vf3"><div class="cc-v1eh"><span class="cc-or7a cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_main")) ? "" : a) + '</span><span class="cc-k0w5 cc-1ev6"><a :href="$store.chat.status.url" target="_blank" rel="noopener noreferrer" class="cc-3j1q cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_label_link")) ? "" : a) + "</a>"), o["text-space"](), r.push(h.Library.jade.runtime.escape(null == (a = s("chat", "chat_health_label_updates")) ? "" : a) + '</span></div></div><div v-crisp-accessibility="{ role: \'dialog\' }" id="cc-1hzo" aria-live="polite" aria-atomic="false" class="cc-1hzo"><div @scroll="$events.chat.flow_scroll" @touchstart="$events.chat.flow_touch" class="cc-19vt"><div class="cc-nasd wp-exclude-emoji"><div v-for="(message, index) in $store.messages.list" :key="message.fingerprint" :date-has-timestamp="message.timestamp ? true : false" tabindex="-1" aria-live="polite" aria-relevant="additions" class="cc-1sbg"><div v-if="$store.chat.is_different_date(index, (index - 1))" class="cc-1kii"><div class="cc-n24r"><div class="cc-3ed4 cc-179w">{{ $store.chat.timestamp_to_properties(message.timestamp).title }}</div></div></div><div :class="{ \'cc-1lsb\': message.metas.is_new }" :data-from="(message.from === \'operator\') ? \'operator\' : \'visitor\'" :data-type="message.type" :data-first-of-group="$store.chat.is_first_of_group(message, index)" :data-last-of-group="$store.chat.is_last_of_group(message, index)" :data-last-of-thread="$store.chat.is_last_of_thread(message, index)" class="cc-s2y8"><span v-if="message.from === \'operator\'" class="cc-1yu7 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-aez0 cc-4yys"></span></span><span v-if="(message.from === \'operator\') &amp;&amp; message.user.nickname" class="cc-1k48 cc-1ev6">{{ ((message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname)) }}</span><span class="cc-1vkl"><span class="cc-yiv0 cc-10fp"><span @click="$events.chat.message_common_click" :class="(message.from === \'operator\') ? \'cc-qfnu cc-1v0h\' : \'\'" class="cc-1yd3 cc-1ev6 cc-x1l1"><span v-if="message.type === \'text\'" class="cc-1o1o"><div v-html="$render._f(message.content, $render.format_context)" @click="$events.chat.message_text_click" class="cc-s3gl"></div></span><span v-else-if="message.type === \'file\'" class="cc-1o1o"><span class="cc-14cs"><a v-if="$store.base.environment.types.file_preview.image.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'image\', message.content.url, message.content.name, message.fingerprint)" :href="message.content.url" :data-name="message.content.name" data-action="image" rel="noopener noreferrer" class="cc-15ec"><span v-if="message.content.type === \'image/gif\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-1bwm"></span><span v-else :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url) + \') !important\') }" class="cc-1bwm"></span></a><span v-else class="cc-3sqg"><a v-if="$store.base.environment.types.file_preview.video.indexOf(message.content.type) !== -1" @click.prevent="$events.chat.message_file_click(\'video\', message.content.url, message.content.name, message.fingerprint)" :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" :href="message.content.url" :data-name="message.content.name" data-action="video" rel="noopener noreferrer" class="cc-vlob"><span class="cc-dvab cc-1cu8"></span></a><a v-else :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" :href="message.content.url" :download="(message.content.type === \'text/html\') ? null : (message.content.name || message.content.url)" data-action="download" rel="noopener noreferrer" target="_blank" class="cc-vlob"><span class="cc-dvab cc-1cu8"></span></a><span v-if="message.content.name" class="cc-1f9h cc-179w">{{ message.content.name }}</span><span v-else class="cc-1f9h cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_file_name")) ? "" : a) + '</span></span></span></span><span v-else-if="message.type === \'animation\'" class="cc-1o1o"><span :data-source="$store.chat.content_source(message.content.url)" class="cc-j6r5"><span :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-ussf"><span class="cc-ukph"><span class="cc-qnzz"></span></span></span></span></span><span v-else-if="message.type === \'audio\'" class="cc-1o1o"><span v-crisp-audio="{ duration : message.content.duration }" data-state="none" class="cc-8gvm"><span class="cc-nmh8"><a :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" v-crisp-accessibility="{ role: \'button\' }" class="cc-nub9"><span class="cc-1t41 cc-1cu8"></span></a><span :class="(message.from === \'operator\') ? \'cc-1cu8\' : \'\'" class="cc-1hbt"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-o0b7"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-qsec"><span :class="(message.from === \'operator\') ? \'cc-ycwi\' : \'cc-qfnu\'" class="cc-1sgl"></span></span></span></span><span class="cc-1knx"><a :class="(message.from === \'operator\') ? \'cc-f23s\' : \'cc-1t4x\'" v-crisp-accessibility="{ role: \'button\' }" class="cc-7bm2 cc-179w cc-1v0h">1x</a><span class="cc-xszf cc-1ev6">{{ $render.format_time(message.content.duration) }}</span></span></span><audio preload="none" class="cc-1lzb"><source :src="message.content.url" :type="message.content.type"></audio></span></span><span v-else-if="message.type === \'field\'" class="cc-1o1o"><span :data-has-value="message.content.value ? \'true\' : \'false\'" class="cc-1ghj"><a v-crisp-accessibility="{ role: \'button\' }" v-if="message.content.previous &amp;&amp; (message.from === \'operator\')" @click="$events.chat.message_previous_click(message)" class="cc-19x0 cc-1oci"><span class="cc-hnkf cc-1cu8"></span></a><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span></span><span v-else-if="message.type === \'picker\'" class="cc-1o1o"><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span><span v-else-if="message.type === \'carousel\'" class="cc-1o1o"><span v-html="$render._f(message.content.text, $render.format_context)" class="cc-s3gl"></span></span></span><span v-if="message.timestamp" class="cc-15od cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6"><span v-crisp-date="{ date : message.timestamp }" class="cc-wg68"></span><span v-if="(message.user.type === \'participant\') || (message.edited === true) || (message.translated === true)" class="cc-14yz"><span class="cc-18f2">(<span v-if="message.user.type === \'participant\'">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_participant")) ? "" : a) + '<span v-if="(message.edited === true) || (message.translated === true)">,'), o["text-space"](), r.push('</span></span><span v-if="message.edited === true">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_edited")) ? "" : a) + '<span v-if="message.translated === true">,'), o["text-space"](), r.push('</span></span><span v-if="message.translated === true">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_tag_translated")) ? "" : a) + '</span>)</span></span></span></span><span class="cc-1vzn"></span></span><span v-if="message.type === \'field\' || message.type === \'picker\' || message.type === \'carousel\'" class="cc-151c"><span class="cc-1vzn"></span><span class="cc-1el3"><span class="cc-1q8g"><span v-if="message.type === \'field\'" class="cc-jh08"><span v-if="message.content.value || (message.from !== \'operator\')" :data-has-value="message.content.value ? true : false" class="cc-8jds"><span :class="message.content.value ? \'cc-179w cc-x1l1\' : \'cc-1ev6\'" class="cc-1aiu">{{ (message.content.value || message.content.explain) }}</span></span><form v-else action="#" method="post" class="cc-1o15"><input v-model="message.metas.field.value" @keydown="$events.chat.message_field_input_keydown($event, message)" @focus="$events.chat.message_field_input_focus($event)" @blur="$events.chat.message_field_input_blur($event)" :name="\'message_field_\' + message.content.id" :placeholder="message.content.explain" type="text" autocapitalize="off" autocorrect="off" spellcheck="false" tabindex="0" class="cc-k6m4 cc-jf4n cc-x1l1 cc-1ev6"><a @click.prevent="$events.chat.message_field_send(message)" v-crisp-accessibility="{ role: \'button\' }" class="cc-7mio cc-1t4x cc-179w"><span class="cc-13fr cc-1cu8"></span></a></form></span><span v-else-if="message.type === \'picker\'" :data-has-selected="$store.chat.has_picker_selected(message)" class="cc-e323"><a v-for="choice in message.content.choices" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.message_picker_button_click(message, choice)" :class="{ \'cc-ut0j cc-uv5q\': (!choice.selected &amp;&amp; message.from === \'operator\'), \'cc-qfnu cc-ut0j cc-1v0h\': (choice.selected &amp;&amp; message.from === \'operator\') }" :data-selected="(choice.selected === true) ? \'true\' : \'false\'" :data-has-action="choice.action ? \'true\' : \'false\'" class="cc-nwb0 cc-179w"><span v-if="choice.icon" aria-hidden="true" class="cc-181l">{{ choice.icon }}</span>{{ choice.label }}</a></span><span v-else-if="message.type === \'carousel\'" class="cc-1b24"><span @wheel="$events.chat.message_carousel_wheel" class="cc-1nq3"><span :data-target-count="message.content.targets.length" class="cc-37uh"><span v-for="target in message.content.targets" class="cc-px18"><span v-if="target.image" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(target.image, 340, 340) + \') !important\') }" class="cc-1fwm"></span><span class="cc-1yzg"><span class="cc-xaz5 cc-179w">{{ target.title }}</span><span class="cc-m1yy cc-1ev6">{{ target.description }}</span><span v-if="target.actions.length &gt; 0" class="cc-10o8"><a v-for="action in target.actions" :class="{ \'cc-qfnu cc-1v0h\': (message.from === \'operator\') }" :href="action.url" target="_blank" rel="noopener noreferrer" class="cc-56j7 cc-1x3g cc-18lb cc-179w">{{ action.label }}</a></span></span></span></span></span></span></span><span class="cc-1vzn"></span></span></span><span v-if="message.preview" class="cc-7sl7"><span class="cc-1vzn"></span><span v-for="link_preview in message.preview" class="cc-g2cm"><span v-if="link_preview.preview &amp;&amp; link_preview.preview.embed &amp;&amp; link_preview.preview.image" class="cc-yvpg"><a @click.prevent="$events.chat.message_file_click(\'embed\', link_preview.preview.embed)" :href="link_preview.preview.embed" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" rel="noopener noreferrer" target="_blank" data-type="embed" class="cc-1ve7 cc-9siz cc-1jnc"><span class="cc-ipxv"></span></a></span><span v-else class="cc-yvpg"><a v-if="link_preview.preview &amp;&amp; link_preview.preview.image" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(link_preview.preview.image) + \') !important\') }" :href="link_preview.url" rel="noopener noreferrer" target="_blank" data-type="image" class="cc-1ve7"></a><a v-crisp-accessibility="{ role: \'button\' }" :href="link_preview.url" rel="noopener noreferrer" target="_blank" data-type="link" class="cc-1ve7 cc-179w">{{ (link_preview.title || link_preview.website || link_preview.url) }}</a></span><span class="cc-1vzn"></span></span></span></span><span class="cc-1vzn"></span><span v-if="(message.from === \'user\') &amp;&amp; message.read &amp;&amp; ($store.messages.latest_fingerprint === message.fingerprint)" class="cc-15ci"><span class="cc-1iio"><span class="cc-4oyp"></span><span class="cc-1fja cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_info_read")) ? "" : a) + '</span><span class="cc-1vzn"></span></span><span class="cc-1vzn"></span></span><a v-if="(message.from === \'user\') &amp;&amp; message.metas.has_error" v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.message_send_retry_click(message)" class="cc-pz9u"><span class="cc-1ei9 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_message_error_retry")) ? "" : a) + '</span><span class="cc-12bp cc-gr6h"></span><span class="cc-1vzn"></span></a><span class="cc-1vzn"></span></div><span class="cc-1vzn"></span></div></div><div class="cc-1q1g"><div v-if="$store.messages.is_composing" class="cc-1b1c"><span class="cc-1kij cc-qfnu">'),
                                    function() {
                                        var t = e(3);
                                        if ("number" == typeof t.length)
                                            for (var i = 0, n = t.length; i < n; i++) t[i], r.push('<span class="cc-ou2z cc-1cu8"></span>');
                                        else
                                            for (i in n = 0, t) n++, t[i], r.push('<span class="cc-ou2z cc-1cu8"></span>')
                                    }.call(this), r.push('</span><span class="cc-1vzn"></span></div></div></div></div><div v-if="$store.base.configuration.chat.file_transfer" class="cc-1du9"><div @drop="$events.chat.file_drop" @dragleave="$events.chat.file_drop_dragleave" class="cc-1dj0"></div><div class="cc-175h"><div class="cc-1ige"><div class="cc-4pq8 cc-qfnu"></div><div class="cc-sjap cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_tooltip")) ? "" : a) + '</div></div></div></div><div v-if="$store.chat.feedback.is_visible" @click="$events.chat.feedback_click" data-has-animation="true" class="cc-tbnr cc-v9te"><div class="cc-idg0"><div class="cc-1vb5"><div data-type="rate" class="cc-1kwg cc-15e8">');
                                var n = s("chat", "chat_feedback_rate_placeholder");
                                r.push('<span class="cc-j7w1 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_feedback_rate_title")) ? "" : a) + '</span><span class="cc-2961"><span @mouseleave="$store.chat.feedback.stars.hovered = 0" :data-stars-hovered="$store.chat.feedback.stars.hovered" :data-stars-selected="$store.chat.feedback.stars.selected" class="cc-eelg">'),
                                    function() {
                                        var t = e(5);
                                        if ("number" == typeof t.length)
                                            for (var i = 0, n = t.length; i < n; i++) t[i], r.push("<a v-crisp-accessibility=\"{ role: 'button' }\"" + h.Library.jade.runtime.attr("@click", "$store.chat.feedback.stars.selected = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("@mouseenter", "$store.chat.feedback.stars.hovered = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("aria-label", i + 1 + "/5", !0, !0) + ' class="cc-jrl7"></a>');
                                        else
                                            for (i in n = 0, t) n++, t[i], r.push("<a v-crisp-accessibility=\"{ role: 'button' }\"" + h.Library.jade.runtime.attr("@click", "$store.chat.feedback.stars.selected = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("@mouseenter", "$store.chat.feedback.stars.hovered = " + (i + 1), !0, !0) + h.Library.jade.runtime.attr("aria-label", i + 1 + "/5", !0, !0) + ' class="cc-jrl7"></a>')
                                    }.call(this), r.push('</span></span><textarea v-model.trim="$store.chat.feedback.comment" name="feedback_rate"' + h.Library.jade.runtime.attr("placeholder", "" + n, !0, !0) + ' cols="10" rows="1" dir="auto" class="cc-7fhf cc-x1l1"></textarea><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.feedback_submit_click" :data-disabled="($store.chat.has_offline || !$store.chat.feedback.stars.selected || !$store.chat.feedback.comment) ? \'true\' : \'false\'" class="cc-103c cc-1x3g cc-18lb cc-179w cc-qfnu cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_feedback_rate_submit")) ? "" : a) + '</a></div></div></div></div><div v-if="$store.chat.picker.is_visible" @click="$events.chat.picker_click" :data-has-animation="$store.chat.picker.has_animation" class="cc-tbnr cc-143w"><div class="cc-idg0"><div class="cc-1vb5"><div v-if="$store.chat.picker.type === \'smiley\'" data-type="smiley" class="cc-1kwg cc-1tka"><span class="cc-z6ad"><span v-for="(smiley_value, smiley_name) in $store.base.environment.smileys" @click="$events.chat.picker_smiley_click(smiley_value)" :data-name="smiley_name" data-size="large" class="cc-1lef cc-1eqs"></span></span></div><div v-if="$store.chat.picker.type === \'gif\'" :data-has-search="$store.chat.picker.gif.input.length &gt; 0" data-type="gif" class="cc-1kwg cc-1tka"><span class="cc-1mtx"><span data-action="search" class="cc-162v">');
                                var c = s("chat", "chat_pickers_gif_search");
                                r.push('<a @click="$events.chat.picker_gif_input_reset" v-crisp-accessibility="{ role: \'button\' }" class="cc-qd2o"></a><input v-effect="$el.focus()" v-model="$store.chat.picker.gif.input" @keyup="$events.chat.picker_gif_input_keyup" :disabled="$store.chat.has_offline" type="text" name="gif_search"' + h.Library.jade.runtime.attr("placeholder", "" + c, !0, !0) + ' maxlength="25" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" tabindex="0" class="cc-1ibt cc-x1l1 cc-1ev6"></span></span><span class="cc-z6ad"><span v-for="gif in $store.chat.picker.gif.results" :data-type="gif.type" :data-loading="gif.loading" class="cc-1lef cc-zkg3 cc-dpkb"><span v-if="gif.url" @click="$events.chat.picker_gif_item_click(gif)" :style="{ backgroundImage: (\'url(\' + $store.base.environment.url.crisp_image + \'/process/original/?url=\' + gif.url + \') !important\') }" class="cc-16l6"></span></span></span><span class="cc-1s6g"><span v-if="$store.chat.picker.gif.results.length === 0" data-notice="no_results" class="cc-14dg cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_gif_no_results")) ? "" : a) + "</span></span></div></div><div class=\"cc-1jjn\"><a v-crisp-accessibility=\"{ role: 'button' }\" @click=\"$events.chat.picker_show_click('smiley')\" :class=\"($store.chat.picker.type === 'smiley') ? 'cc-qfnu cc-1v0h' : null\" :data-active=\"($store.chat.picker.type === 'smiley') ? 'true' : 'false'\" data-type=\"smiley\" class=\"cc-tn1f cc-179w\">" + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_selector_smileys")) ? "" : a) + "</a><a v-crisp-accessibility=\"{ role: 'button' }\" @click=\"$events.chat.picker_show_click('gif')\" :class=\"($store.chat.picker.type === 'gif') ? 'cc-qfnu cc-1v0h' : null\" :data-active=\"($store.chat.picker.type === 'gif') ? 'true' : 'false'\" :data-disabled=\"($store.chat.has_offline &amp;&amp; $store.chat.picker.type !== 'gif') ? 'true' : 'false'\" data-type=\"gif\" class=\"cc-tn1f cc-179w\">" + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_pickers_selector_gifs")) ? "" : a) + '</a></div></div></div><div v-if="$store.chat.current_alerts" class="cc-14gd"><a v-if="$store.chat.current_alerts.email_invalid" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_email_invalid_click()" data-type="email_invalid" class="cc-16md"><span class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_email_invalid")) ? "" : a) + '</span></a><a v-else-if="$store.chat.current_alerts.warn_reply" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_warn_reply_click()" data-type="warn_reply" class="cc-16md"><span class="cc-u38s"></span><span class="cc-djns cc-179w">');
                                n = "email_default";
                                !0 === t.chat.phone_visitors && !0 !== t.chat.email_visitors ? n = !0 === t.chat.force_identify ? "phone_force" : "phone_default" : !0 === t.chat.force_identify && (n = "email_force"), r.push(h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_warn_reply_" + n)) ? "" : a) + '</span></a><a v-else-if="$store.chat.current_alerts.warn_prompt" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_warn_prompt_click()" data-type="warn_prompt" class="cc-16md"><span class="cc-u38s"></span><span class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_warn_prompt")) ? "" : a) + '</span></a><div v-else-if="$store.chat.current_alerts.wait_reply" v-crisp-accessibility="{ role: \'alert\' }" data-type="wait_reply" class="cc-16md"><span v-if="$store.base.availability === \'online\'" class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_wait_reply_online")) ? "" : a) + '</span><span v-else class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_wait_reply_away")) ? "" : a) + '</span></div><a v-else-if="$store.chat.current_alerts.new_messages" v-crisp-accessibility="{ role: \'alert\' }" @click.prevent="$events.chat.alert_new_messages_click()" data-type="new_messages" class="cc-16md"><span class="cc-u38s"></span><span class="cc-djns cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_alerts_new_messages")) ? "" : a) + '</span></a></div><div :data-has-value="$store.chat.field.has_value" :data-is-locked="has_form_disabled || $store.chat.is_locked_identify || $store.chat.is_locked_prompt" :data-retain-lock="has_form_disabled" class="cc-1tyx"><form name="form_message" action="#" method="post" class="cc-cx3x">');
                                c = s("chat", "chat_form_field_message"), n = s("chat", "chat_form_field_disabled");
                                r.push('<textarea @keyup="$events.chat.textarea_keyup" @keydown="$events.chat.textarea_keydown" @paste="$events.chat.textarea_paste" :disabled="has_form_disabled || $store.chat.is_locked_identify || $store.chat.is_locked_prompt"' + h.Library.jade.runtime.attr(":placeholder", "has_form_disabled ? '" + n + "' : '" + c + "'", !0, !0) + h.Library.jade.runtime.attr(":aria-label", "has_form_disabled ? '" + n + "' : '" + c + "'", !0, !0) + ' name="message" cols="20" rows="1" dir="auto" autocapitalize="off" autocomplete="off" aria-controls="cc-1hzo" tab="0" tabindex="0" class="cc-c5c3 cc-x1l1 cc-4upc cc-1ev6"></textarea></form><div class="cc-1xqi"><span v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.textarea_send_click" :aria-label="$render._e(\'chat\', \'chat_form_send_hint\')" class="cc-fpwe cc-1t4x"><span class="cc-o9pn cc-1cu8"></span></span></div></div><div class="cc-15ak"><div :data-has-popover="$store.chat.picker.is_visible || $store.chat.feedback.is_visible" class="cc-e8o6"><span v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.picker_toggle_click" :aria-label="$render._e(\'chat\', \'chat_form_smiley_tooltip\')" :data-state="$store.chat.picker.is_visible ? \'active\' : \'none\'" data-type="smiley" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-854b"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_smiley_tooltip")) ? "" : a) + '</span></span><span :class="$store.chat.picker.is_visible ? \'cc-qfnu\' : null" class="cc-1w5b"></span></span>'), !0 === t.chat.file_transfer && r.push('<span v-crisp-accessibility="{ role: \'button\' }" :aria-label="$render._e(\'chat\', \'chat_form_attach_tooltip\')" :data-state="$store.chat.file.state" :data-disabled="(has_form_disabled || $store.chat.is_locked_identify || $store.chat.has_offline) ? \'true\' : \'false\'" data-type="file" class="cc-cti3 cc-10fp"><span v-if="$store.chat.file.state === \'none\'" class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_tooltip")) ? "" : a) + '</span></span><span class="cc-1xif"><input @change.prevent="$events.chat.file_change" type="file" name="attach_file" title="" multiple tabindex="-1" aria-hidden="true" class="cc-oky3"></span><span v-if="$store.chat.file.state === \'preparing\' || $store.chat.file.state === \'uploading\'" class="cc-1aau"><span class="cc-lbx1 cc-1gcw cc-zg42 cc-1sel"></span><span v-if="$store.chat.file.state === \'preparing\'" class="cc-qrf8 cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_wait_preparing")) ? "" : a) + '</span><span v-else class="cc-qrf8 cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_attach_wait_uploading")) ? "" : a) + '</span></span><span v-else class="cc-1w5b"></span></span><span v-if="$store.chat.speech.state !== \'none\'" :data-state="$store.chat.speech.state" class="cc-wqeg"><span class="cc-39hr"><span :style="{ width: ($store.chat.speech.progress + \'% !important\') }" class="cc-1pl3"></span><span class="cc-1u2a cc-1ev6">{{ $render.format_time($store.chat.speech.duration) }}</span></span><span class="cc-xml7"><span @click.prevent="$events.chat.speech_cancel_click" data-action="cancel" class="cc-7fpw"></span><span @click.prevent="$events.chat.speech_send_click" data-action="send" class="cc-7fpw"></span></span></span><span v-else-if="$store.base.features.audio_recording" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.speech_record_click" :aria-label="$render._e(\'chat\', \'chat_form_speech_tooltip\')" :data-state="$store.chat.speech.state" :data-disabled="(has_form_disabled || $store.chat.is_locked_identify || $store.chat.has_offline) ? \'true\' : \'false\'" data-type="speech" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-e871"><span v-if="$store.chat.speech.state === \'none\'" class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_speech_tooltip")) ? "" : a) + '</span></span><span v-else class="cc-1w5b"></span></span>'), r.push('<span v-if="$store.chat.feedback.is_available" v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.chat.feedback_toggle_click" :aria-label="$render._e(\'chat\', \'chat_form_feedback_tooltip\')" :data-state="$store.chat.feedback.is_visible ? \'active\' : \'none\'" data-type="feedback" class="cc-cti3 cc-10fp"><span class="cc-1npw cc-1o14 cc-e871"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_form_feedback_tooltip")) ? "" : a) + '</span></span><span class="cc-1w5b"></span></span><span class="cc-1vzn"></span></div><div v-if="(!$store.base.configuration.plugins[\'urn:crisp.im:debranding:0\'] || $store.base.configuration.website.trial === true) &amp;&amp; $store.chat.branding_link" class="cc-acjo"><a :href="$store.chat.branding_link" target="_blank" rel="noopener noreferrer nofollow" class="cc-nmj4"><span class="cc-17ym cc-k5d6 cc-1ev6">We run on</span><span class="cc-yd9z"></span><span class="cc-17ym cc-1287 cc-179w">Crisp</span><span class="cc-1vzn"></span></a></div></div></div><div v-if="$store.chat.mode === \'helpdesk\'" @wheel="$events.chat.helpdesk_wheel" data-visible="true" class="cc-11uv"><div class="cc-1m29"><div v-if="$store.chat.helpdesk_viewer.url" class="cc-f51i"><div class="cc-4ou1"><a @click.prevent="$events.chat.helpdesk_viewer_previous_click()" v-crisp-accessibility="{ role: \'button\' }" class="cc-50jt cc-1t4x"><span class="cc-uiwj cc-1cu8"></span></a><span class="cc-j6oe"><span v-if="$store.chat.helpdesk_viewer.title" class="cc-72dk"><span v-if="$store.chat.helpdesk_viewer.category" class="cc-1nu4 cc-1ev6">{{ $store.chat.helpdesk_viewer.category }}</span><span v-if="$store.chat.helpdesk_viewer.category" class="cc-hsfq cc-1ev6">/</span><span class="cc-sfco cc-179w">{{ $store.chat.helpdesk_viewer.title }}</span></span></span><span class="cc-1343 cc-10fp"><span class="cc-1npw cc-1c4p cc-854b"><span class="cc-l4vy cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_viewer_open_tooltip")) ? "" : a) + '</span></span><a :href="$store.chat.helpdesk_viewer.url" rel="noopener noreferrer" target="_blank" class="cc-12lx"></a></span></div><div class="cc-1eb5 cc-1r50"><iframe v-on:load="$store.chat.helpdesk_viewer.loaded = true" :src="$store.chat.helpdesk_viewer.url + \'reader/compact/\'" type="text/html" frameborder="0" class="cc-1crj"></iframe></div><div v-if="!$store.chat.helpdesk_viewer.loaded" class="cc-1bj3"><span class="cc-168q"><span class="cc-auok cc-1gcw cc-zg42 cc-1sel"></span></span></div></div><div v-else @keydown="$events.chat.helpdesk_search_keydown" class="cc-1r2q"><div class="cc-1or4"><div v-if="!$store.chat.helpdesk_search.initialized" class="cc-1lbh"><span class="cc-1w3b cc-1gcw cc-zg42 cc-1sel"></span></div><ul v-else-if="$store.chat.helpdesk_search.articles.length &gt; 0" @mouseleave="$store.chat.helpdesk_search.current_index = -1" class="cc-1tz2"><li v-for="(result, index) in $store.chat.helpdesk_search.articles" class="cc-1194"><a @click.prevent="$events.chat.helpdesk_search_article_click(result.locale, result.slug, result.title, result.category)" @mouseenter="$store.chat.helpdesk_search.current_index = index" :href="$store.chat.helpdesk_search.url + \'/\' + result.locale + \'/article/\' + result.slug + \'/\'" :data-active="index === $store.chat.helpdesk_search.current_index" rel="noopener noreferrer" target="_blank" class="cc-1i08"><span class="cc-m99f cc-179w"><span class="cc-13uf cc-qfnu"></span>{{ result.title }}</span><span class="cc-11qf cc-1ev6">{{ result.excerpt }}</span></a></li></ul><div v-else-if="$store.chat.helpdesk_search.has_search" class="cc-11ga"><span class="cc-sfbs cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_search_empty")) ? "" : a) + '</span></div><div v-else class="cc-11ga"><span class="cc-sfbs cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("chat", "chat_helpdesk_search_unpopulated")) ? "" : a) + '</span></div></div><div class="cc-5p9s"><form name="form_helpdesk" action="#" method="post" class="cc-18a3"><span v-if="$store.chat.helpdesk_search.initialized &amp;&amp; $store.chat.helpdesk_search.loading" class="cc-94gm"><span class="cc-mc5n cc-1gcw cc-zg42 cc-1sel"></span></span><span v-else class="cc-oaxo"></span><input v-model="$store.chat.helpdesk_search.input" @keyup="$events.chat.helpdesk_search_field_keyup" :disabled="$store.chat.has_offline" type="text" name="helpdesk_search"' + h.Library.jade.runtime.attr("placeholder", "" + s("chat", "chat_helpdesk_search_form_field"), !0, !0) + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="100" class="cc-guux cc-x1l1 cc-jf4n cc-1ev6"><span class="cc-x1r7 cc-1ev6"></span><span class="cc-fayq cc-1ev6"></span></form></div></div></div></div></div></div><a v-crisp-accessibility="{ role: \'button\', is_last: true }" @click.prevent.stop="$events.chat.pane_toggle_click" :data-visible="$store.chat.is_opened" :data-maximized="$store.chat.is_opened" :data-animate-maximize="$store.chat.animate_maximize" :data-animate-minimize="$store.chat.animate_minimize" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" data-is-failure="false" class="cc-nsge"><span class="cc-ujvn"><span v-if="!$store.chat.is_opened &amp;&amp; $store.minimized.tooltips.new_messages.visible" @click="$events.chat.pane_tooltip_new_messages_click" :class="{ \'cc-6z8x\': $store.minimized.tooltips.new_messages.animate }" data-id="new_messages" class="cc-1fs0"><span v-if="$store.messages.preview.length &gt; 0" class="cc-5mxk"><span class="cc-18a9"><span class="cc-1kn9 cc-yx2c"></span></span><span class="cc-16dw"><span v-for="message in $store.messages.preview" :class="{ \'cc-1u4l\': message.animate }" class="cc-1cx3"><span class="cc-41ym"><span class="cc-1vk5 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, (message.user.type || message.from), message.user.user_id, message.user.avatar) + \') !important\') }" class="cc-3tv5 cc-4yys"></span></span><span class="cc-vind"><span class="cc-q6ar"></span><span class="cc-bxu9"><span class="cc-hctt cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("chat", "minimized_tooltip_message_from")) ? "" : a) + '</span><span class="cc-nmlj cc-179w">{{ (message.user.type === \'website\') ? message.user.nickname : $render._n(message.user.nickname) }}</span><span class="cc-1vzn"></span></span><span v-if="message.type === \'text\'" v-html="$render._f(message.content, $render.format_context)" class="cc-26eu cc-1ev6"></span><span v-else-if="message.type === \'picker\' || message.type === \'field\' || message.type === \'carousel\'" v-html="$render._f(message.content.text, $render.format_context)" class="cc-26eu cc-1ev6"></span><span v-else-if="message.type === \'file\' || message.type === \'animation\'" class="cc-26eu"><span v-if="message.content.type === \'image/gif\' || message.type === \'animation\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_original(message.content.url) + \') !important\') }" class="cc-atpp"></span><span v-else-if="message.content.type === \'image/jpg\' || message.content.type === \'image/jpeg\' || message.content.type === \'image/png\'" :style="{ backgroundImage: (\'url(\' + $render.image_url_resize(message.content.url, 180, 180) + \') !important\') }" class="cc-atpp"></span><span v-else class="cc-26eu cc-1ev6">📦 {{ message.content.name }}</span></span><span v-else-if="message.type === \'audio\'" class="cc-26eu cc-1ev6">🎧</span></span></span><span class="cc-1vzn"></span></span></span></span><span class="cc-1fe2"><span class="cc-9q9h cc-qfnu"><span class="cc-nndd cc-1cu8"></span><span data-for-id="new_messages" class="cc-19x6 cc-179w cc-1v0h">' + h.Library.jade.runtime.escape(null == (a = s("chat", "minimized_tooltip_message_compose")) ? "" : a) + '</span></span></span></span></span><span :data-has-unread="$store.minimized.pane.unread.visible" class="cc-imbb cc-qfnu"><span :data-is-ongoing="$store.minimized.pane.is_ongoing" data-id="chat_opened" class="cc-11f2"><span class="cc-15e7"><span v-if="$store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.configuration.website.active_operators.length &gt; 0" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, \'operator\', $store.base.configuration.website.active_operators[0].user_id, $store.base.configuration.website.active_operators[0].avatar) + \') !important\') }" class="cc-ci26 cc-4yys"></span></span><span v-else-if="$store.chat.ongoing_operator.url" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $store.chat.ongoing_operator.url + \') !important\') }" class="cc-ci26 cc-4yys"></span></span></span><span class="cc-1ygf"></span><span v-if="$store.minimized.pane.unread.visible" class="cc-1bck cc-179w">{{ $store.minimized.pane.unread.count }}</span></span></span></a><span :data-visible="$store.chat.is_opened || $store.minimized.tooltips.new_messages.visible" :data-animate-minimize="$store.chat.animate_minimize" :data-animate-maximize="$store.chat.animate_maximize" class="cc-1ajr"><span class="cc-ygcd"></span></span></div>')
                            }.call(this, "Array" in t ? t.Array : "undefined" != typeof Array ? Array : void 0, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "configuration" in t ? t.configuration : "undefined" != typeof configuration ? configuration : void 0, "undefined" in t ? t.undefined : void 0), r.join("")
                        },
                        minimized_authorized: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push(""), n.push('<div class="cc-kxkl cc-14b7"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent.stop="$events.minimized.pane_click" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + h.Library.jade.runtime.attr("data-is-failure", "false", !0, !0) + ' class="cc-nsge"><span class="cc-ujvn">'), n.push('<span v-if="$store.minimized.pane.general_entice.visible" :class="{ \'cc-6z8x\': $store.minimized.pane.general_entice.animate_full, \'cc-14wx\': $store.minimized.pane.general_entice.animate_short }" :data-with-helpdesk="$store.minimized.pane.helpdesk.url !== null" :data-is-concealed="$store.minimized.pane.general_entice.is_concealed" data-id="general_entice" class="cc-1fs0"><span class="cc-1fe2"><span class="cc-9q9h cc-1ev6"><span class="cc-1503"><span class="cc-xzla"><span v-crisp-accessibility="{ role: \'button\' }" class="cc-1rzf cc-yx2c"></span><span class="cc-123q"><span class="cc-1upp cc-179w">{{ $render._e("theme_text", "default_chat", [$store.base.configuration.chat.theme_text + "_chat"]) }}</span><span class="cc-oe8p"><span v-if="$store.base.availability === \'online\'" data-id="online" class="cc-gx6h cc-179w cc-uv5q">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_status_online")) ? "" : i) + '</span><span v-else data-id="away" class="cc-gx6h cc-1ev6">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_status_away")) ? "" : i) + '</span><span class="cc-mtsi"><span v-for="active_avatar in $store.base.active_operators" class="cc-1lj1"><span class="cc-zeky cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(60, active_avatar.type, active_avatar.identifier, active_avatar.avatar) + \') !important\') }" class="cc-h8d1 cc-4yys"></span></span></span></span></span></span></span></span><span class="cc-195r"><span data-type="chat" v-crisp-accessibility="{ role: \'button\' }" class="cc-rknl cc-1t4x"><span class="cc-1cfg cc-1cu8"></span><span class="cc-m8ji cc-179w cc-1v0h">{{ $render._e("minimized", "tooltip_entice_action_chat", [$store.base.configuration.website.name]) }}</span></span><span v-if="$store.minimized.pane.helpdesk.url &amp;&amp; !$store.minimized.pane.is_offline" v-crisp-accessibility="{ role: \'button\' }" data-type="helpdesk" data-pop="helpdesk:search" class="cc-rknl"><span class="cc-1cfg"></span><span class="cc-m8ji cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "tooltip_entice_action_helpdesk")) ? "" : i) + "</span></span></span></span></span></span>"), n.push("</span>"), n.push('<span class="cc-imbb cc-qfnu"><span data-id="chat_closed" data-is-ongoing="false" class="cc-11f2"><span v-if="$store.minimized.pane.is_waiting" class="cc-1ype"><span class="cc-1npz cc-1gcw"></span></span><span v-else class="cc-15e7"><span v-if="$store.base.configuration.chat.last_operator_face &amp;&amp; $store.base.active_operators.length &gt; 0" class="cc-1d2k cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.base.active_operators[0].type, $store.base.active_operators[0].identifier, $store.base.active_operators[0].avatar) + \') !important\') }" class="cc-ci26 cc-4yys"></span></span></span></span></span>'), n.push("</a></div>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        minimized_unauthorized: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push(""), n.push('<div class="cc-kxkl cc-14b7"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent.stop="$events.minimized.pane_click" :aria-label="$store.chat.is_opened ? $render._e(\'minimized\', \'tooltip_button_close_hint\') : $render._e(\'minimized\', \'tooltip_button_open_hint\')" :data-pane-animate-entrance="$store.minimized.pane.animate_entrance" data-maximized="false"' + h.Library.jade.runtime.attr("data-is-failure", "true", !0, !0) + ' class="cc-nsge"><span class="cc-ujvn">'), n.push('<span data-id="failure_notice" class="cc-1fs0"><span class="cc-1fe2"><span class="cc-9q9h"><span class="cc-19x6 cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("minimized", "unauthorized_pane")) ? "" : i) + "</span></span></span></span>"), n.push("</span>"), n.push('<span class="cc-imbb cc-krwc"><span data-id="in_failure" data-is-ongoing="false" class="cc-11f2"><span class="cc-15e7"></span></span></span>'), n.push("</a></div>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        chat_frame: function(t) {
                            var i = [];
                            return i.push('<div :data-loaded="$store.chat.frame.loaded" class="cc-adem"><span class="cc-1khc cc-qfnu"><a @click.prevent="$events.chat.frame_previous_click()" v-crisp-accessibility="{ role: \'button\' }" class="cc-vqaq cc-1oci"><span class="cc-1iop cc-1cu8"></span></a><span v-if="$store.chat.frame.title" class="cc-k5oh cc-179w cc-1v0h">{{ $store.chat.frame.title }}</span></span><iframe v-on:load="$store.chat.frame.loaded = true" :src="$store.chat.frame.target" type="text/html" frameborder="0" class="cc-vz1f"></iframe><span v-if="!$store.chat.frame.loaded" class="cc-1daw"><span class="cc-12mo cc-1gcw cc-zg42 cc-1sel"></span></span></div>'), i.join("")
                        },
                        chat_game: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<div :data-loaded="$store.chat.game.loaded" class="cc-1692"><span class="cc-ekij"><a v-crisp-accessibility="{ role: \'button\' }" @click="$events.chat.game_stop_click()" class="cc-1s95 cc-1x3g cc-ngrj cc-179w cc-qfnu cc-1v0h">' + h.Library.jade.runtime.escape(null == (i = t("chat", "chat_game_controls_stop")) ? "" : i) + '</a></span><iframe v-on:load="$store.chat.game.loaded = true" :src="$store.base.environment.url.crisp_game + \'/\'" type="text/html" frameborder="0" class="cc-13em"></iframe><span v-if="!$store.chat.game.loaded" class="cc-jxsk"><span class="cc-1sun cc-1gcw cc-zg42 cc-1sel"></span></span></div>')
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        browsing_assist: function(t) {
                            var i = [];
                            return i.push('<div class="cc-1hgs"><div class="cc-1ps6"><span class="cc-trvs cc-10fp cc-1prk"><span class="cc-18rg"></span><span class="cc-vthc"></span><span class="cc-1npw cc-1236 cc-e871"><span class="cc-l4vy cc-1ev6">{{ $render._e("browsing", "assist_mouse_tooltip", [$store.base.configuration.website.name]) }}</span></span></span></div></div>'), i.join("")
                        },
                        call_ring: function(t) {
                            var i, n = [],
                                t = t || {};
                            return function(t) {
                                n.push('<div data-browsing-ignore="true" class="cc-qfip"><div class="cc-1x39"><div class="cc-15kc cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-am5o cc-4yys"></span></div><div class="cc-z44l"><div class="cc-1ip4 cc-179w">{{ $render._e("call", "ring_title_label", [$store.call.user.nickname]) }}</div><div class="cc-qg9v cc-1ev6">{{ $render._e("call", "ring_title_website", [$store.base.configuration.website.name]) }}</div></div><ul class="cc-m1mp"><li data-action="decline" class="cc-glj8"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.call.ring_decline_click()" class="cc-1pgh"></a><span class="cc-181c cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_decline")) ? "" : i) + '</span></li><li :data-mode="$store.call.mode" data-action="accept" class="cc-glj8"><a v-crisp-accessibility="{ role: \'button\' }" @click.prevent="$events.call.ring_accept_click()" class="cc-1pgh"></a><span class="cc-181c cc-179w">' + h.Library.jade.runtime.escape(null == (i = t("call", "ring_actions_accept")) ? "" : i) + "</span></li></ul></div></div>")
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0), n.join("")
                        },
                        call_screen: function(t) {
                            var a, r = [],
                                t = t || {};
                            return function(s, t) {
                                r.push('<div data-browsing-ignore="true" class="cc-qfip"><div :data-mode="$store.call.mode" :data-size="$store.call.size" tabindex="0" class="cc-q3eu"><div class="cc-9k07"><div data-type="remote" class="cc-18c0"><span v-if="$store.call.mode === \'audio\'" class="cc-b2q4 cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(480, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-8yua cc-4yys"></span></span><video v-on:dblclick="$events.call.toggle_fullscreen_mode_click" v-on:fullscreenchange="$events.call.toggle_fullscreen_aspect_ratio_click" alt="" autoplay playsinline class="cc-17rk"></video></div><ul class="cc-a1wo"><li v-if="$store.call.muted.audio" data-type="audio" class="cc-x085 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_label_audio_muted")) ? "" : a) + '</li><li v-if="$store.call.mode === \'video\' &amp;&amp; $store.call.muted.video" data-type="video" class="cc-x085 cc-179w">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_label_video_muted")) ? "" : a) + '</li></ul><div class="cc-nt3f"><div class="cc-15ky"><span class="cc-1ewy cc-18ij"><span :style="{ backgroundImage: (\'url(\' + $render._a(240, $store.call.user.type, $store.call.user.user_id) + \') !important\') }" class="cc-4z34 cc-4yys"></span></span><div class="cc-zmui"><span class="cc-10c4"><span class="cc-15ph cc-179w">{{ $store.call.user.nickname }}</span></span><span class="cc-f941">');
                                var c = ["connecting", "ongoing"];
                                (function() {
                                    var t = c;
                                    if ("number" == typeof t.length)
                                        for (var i = 0, n = t.length; i < n; i++) {
                                            var e = t[i];
                                            r.push("<span" + h.Library.jade.runtime.attr("v-if", "$store.call.state === '" + e + "'", !0, !0) + h.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1d6x cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                                        } else
                                            for (i in n = 0, t) n++, r.push("<span" + h.Library.jade.runtime.attr("v-if", "$store.call.state === '" + (e = t[i]) + "'", !0, !0) + h.Library.jade.runtime.attr("data-state", "" + e, !0, !0) + ' class="cc-1d6x cc-1ev6">' + h.Library.jade.runtime.escape(null == (a = s("call", "screen_status_" + e)) ? "" : a) + "</span>")
                                }).call(this), r.push('<span v-if="$store.call.state === \'ongoing\'" class="cc-sae2"></span><span v-if="$store.call.state === \'ongoing\'" class="cc-viln cc-1ev6">{{ $render.format_time($store.call.duration) }}</span></span></div></div><div class="cc-rhyu"><a v-for="action in $store.call.actions" v-crisp-accessibility="{ role: \'button\' }" @click="$events.call.action_click(action.type)" :data-type="action.type" :data-state="action.state" :data-visible="action.visible" :data-unsupported="action.supported === false" class="cc-k9ak"></a></div></div><div v-if="$store.call.mode === \'video\'" data-type="local" class="cc-18c0"><video alt="" autoplay playsinline muted></video><span v-if="$store.call.muted.audio" class="cc-1gps"><span class="cc-dtnk"></span></span></div></div></div></div>')
                            }.call(this, "_e" in t ? t._e : "undefined" != typeof _e ? _e : void 0, "undefined" in t ? t.undefined : void 0), r.join("")
                        }
                    };
                    this.logger = r.Console, this.vue = r.PetiteVue, this.crisp = {
                        web: r.CrispLibraryWeb,
                        client: r.CrispLibraryClient
                    }, this.jade = {
                        runtime: r.jade,
                        client: _
                    }
                } catch (t) {}
            };
        g.Library = t;
        var i = new(function() {
            function t() {
                try {
                    this.ns = "CrispCompatibility", this.Hs = 2e4, this.Ks = "UTF-8", this.Gs = 'You can disable this warning by adding: $crisp.push(["safe", true]) to your page JavaScript.', this.Ys = /\{\s*\[native code\]\s*\}$/, this.ht(), this.Zs()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.schedule_warn_incompatible = function() {
                var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    null !== this.Xs && clearTimeout(this.Xs), this.Xs = setTimeout(function() {
                        !(t.Xs = null) !== g.Pipeline.Qs && (t.tc(), t.ic())
                    }, !0 === i ? 0 : this.Hs)
                } catch (t) {}
            }, i.Zs = function() {
                try {
                    this.nc()
                } catch (t) {}
            }, i.nc = function() {
                try {
                    Function.prototype.Mt = function(t) {
                        var i, n, e, s;
                        if ("function" != typeof this) throw new TypeError("Function.prototype.__crisp_bind - not callable");
                        return i = Array.prototype.slice.call(arguments, 1), e = function() {}, s = function() {
                            return n.apply(this instanceof e ? this : t, i.concat(Array.prototype.slice.call(arguments)))
                        }, (n = this).prototype && (e.prototype = this.prototype), s.prototype = new e, s
                    }
                } catch (t) {}
            }, i.tc = function() {
                try {
                    var t = (document.characterSet || document.charset || "").toUpperCase();
                    t !== this.Ks && window.console && "function" == typeof window.console.warn && console.warn("[WARNING] Crisp found an incompatible charset on your page. " + "You are currently using the ".concat(t, " charset. ") + "We recommend using the ".concat(this.Ks, " charset ") + "instead to avoid rendering issues.\n\n" + this.Gs)
                } catch (t) {}
            }, i.ic = function() {
                try {
                    var t = window;
                    if (null != t && t.console && "function" == typeof t.console.warn && "function" == typeof Function.prototype.toString) {
                        for (var i, n, e, s = [
                                [null, t, ["eval", "escape", "unescape", "decodeURI", "encodeURI", "decodeURIComponent", "encodeURIComponent", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "parseInt", "parseFloat", "RTCPeerConnection", "MutationObserver", "XMLHttpRequest", "AudioContext", "WebSocket", "Proxy", "Text", "Comment"]],
                                [null, t, ["Array", "Object", "String", "Number", "Date", "Function", "RegExp", "Symbol", "Set", "Map", "WeakMap", "Event", "Error"]],
                                ["Array", t.Array, ["from", "isArray"]],
                                ["Array.prototype", t.Array.prototype, ["push", "pop", "indexOf", "includes", "sort", "splice", "slice", "shift", "unshift", "map", "filter", "find", "findIndex", "forEach"]],
                                ["Object", t.Object, ["assign", "create", "keys", "values", "is", "isExtensible", "defineProperty", "defineProperties", "getOwnPropertyNames", "getOwnPropertyDescriptors"]],
                                ["Object.prototype", t.Object.prototype, ["hasOwnProperty", "propertyIsEnumerable", "toString"]],
                                ["String", t.String, ["fromCharCode"]],
                                ["String.prototype", t.String.prototype, ["indexOf", "charAt", "charCodeAt", "trim", "toLowerCase", "toUpperCase", "slice", "replace", "match"]],
                                ["Math", t.Math, ["random", "round", "floor", "ceil", "abs"]],
                                ["Date", t.Date, ["now"]],
                                ["Date.prototype", t.Date.prototype, ["getTime", "toISOString"]],
                                ["Function.prototype", t.Function.prototype, ["bind", "apply", "call"]],
                                ["RegExp.prototype", t.RegExp.prototype, ["test", "exec"]],
                                ["Event.prototype", t.Event.prototype, ["preventDefault", "stopPropagation"]],
                                ["Reflect", t.Reflect, ["get", "set", "has", "ownKeys", "deleteProperty"]],
                                ["document", t.document, ["querySelector", "querySelectorAll", "createElement", "createEvent", "addEventListener", "removeEventListener"]],
                                ["JSON", t.JSON, ["stringify", "parse"]],
                                ["localStorage", t.localStorage, ["setItem", "getItem", "removeItem"]],
                                ["sessionStorage", t.sessionStorage, ["setItem", "getItem", "removeItem"]]
                            ], c = [], a = 0; a < s.length; a++)
                            if (void 0 === (n = (i = s[a])[1])) c.push(i[0] || "[root]");
                            else
                                for (var r = i[2] || [], o = 0; o < r.length; o++) void 0 === (e = n[r[o]]) || this.Ys.test("" + e) || (null !== i[0] ? c.push("".concat(i[0], ".").concat(r[o])) : c.push(r[o]));
                        0 < c.length && console.warn("[WARNING] Crisp found shims of native JavaScript methods. This can alter the chatbox behavior and break things. Make sure not to override listed functions to ensure your chatbox works as expected. You may be looking for other JavaScript libraries in use on this page.\n\n" + "".concat(this.Gs, "\n\n") + "Methods to check:", c)
                    }
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Xs = null
                } catch (t) {}
            }, t
        }());
        g.Compatibility = i;
        var n = new(function() {
            function t() {
                try {
                    this.ns = "CrispUtility", this.ec = "[match:single]", this.sc = "[match:double]", this.cc = "[match:negate]", this.ac = /([\*]{1})/g, this.rc = /([\*]{2})/g, this.oc = /^([\!]{1})/, this.hc = /(\[match:single\])/g, this.lc = /(\[match:double\])/g, this.uc = /(\[match:negate\])/g, this.fc = new RegExp(["^(\\!)?", "(?:https?:[\\/]*)?", "(?:www\\.)?([^\\/]+)([^#?]*)?", "(?:[\\/]+)?", "(?:[#?].*)?"].join(""), "i"), this.dc = /^(?:\s*)(?:(?:javascript|vbscript):)/i, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.get_or_fallback = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = t;
                try {
                    e = null !== n ? typeof t !== n ? i : t : t || i
                } catch (t) {} finally {
                    return e
                }
            }, i.lower_string_first = function(t) {
                var i = t;
                try {
                    t && (i = "".concat(t.charAt(0).toLowerCase()).concat(t.slice(1)))
                } catch (t) {} finally {
                    return i
                }
            }, i.pad_number = function(t) {
                var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "00",
                    e = n;
                try {
                    0 <= t && (i = n.length - Math.ceil((t + 1) / 10), e = t ? n.substr(0, i) + t : n)
                } catch (t) {} finally {
                    return e
                }
            }, i.insert_link_query_values = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t;
                try {
                    if (0 < (null == n ? void 0 : n.length)) {
                        var e, s, c = "";
                        for (e in i) c && (c += "&"), c += "".concat(e, "=").concat(encodeURIComponent(i[e]));
                        0 < (null == c ? void 0 : c.length) && ("?" !== (s = n[n.length - 1]) && "&" !== s && (n += !0 === n.includes("?") ? "&" : "?"), n += c)
                    }
                } catch (t) {} finally {
                    return n
                }
            }, i.filter_link_safe = function(t) {
                var i = "#";
                try {
                    t && !1 === this.dc.test(t) && (i = t)
                } catch (t) {} finally {
                    return i
                }
            }, i.filter_image_url_resize = function(t, i, n) {
                var e = "";
                try {
                    e = this.vc(t, "".concat(g.Base.pc, "/process/resize/") + "?url=".concat(encodeURIComponent(t)) + "&width=".concat(i, "&height=").concat(n))
                } catch (t) {} finally {
                    return e
                }
            }, i.filter_image_url_original = function(t) {
                var i = "";
                try {
                    i = this.vc(t, "".concat(g.Base.pc, "/process/original/") + "?url=".concat(encodeURIComponent(t)))
                } catch (t) {} finally {
                    return i
                }
            }, i.to_hashcode = function(t) {
                var i = 0;
                try {
                    if (0 < t.length)
                        for (var n = 0; n < t.length; n++) i = (i << 5) - i + t.charCodeAt(n), i &= i
                } catch (t) {} finally {
                    return i
                }
            }, i.is_empty = function(t) {
                var i = !0;
                try {
                    0 < this.keys(t).length && (i = !1)
                } catch (t) {} finally {
                    return i
                }
            }, i.is_equal = function(t, i) {
                var n = !0;
                try {
                    var e, s, c = -1;
                    if (typeof t != typeof i) n = !1;
                    else if (t && "object" == typeof t && i && "object" == typeof i)
                        for (t instanceof Array || i instanceof Array ? (s = this.union(t, i), t.length === s.length && i.length === s.length || (n = !1)) : s = this.union(this.keys(t), this.keys(i)); ++c < s.length && !0 === n;) e = s[c], n = this.is_equal(t[e], i[e]);
                    else n = t === i && !0
                } catch (t) {} finally {
                    return n
                }
            }, i.keys = function(t) {
                var i = [];
                try {
                    "object" == typeof t && t && (i = Object.keys(t))
                } catch (t) {} finally {
                    return i
                }
            }, i.clone = function(t) {
                try {
                    var i, n, e = Array.isArray(t) ? [] : {};
                    for (i in t) n = t[i], e[i] = "object" == typeof n ? this.clone(n) : n
                } catch (t) {} finally {
                    return e
                }
            }, i.merge = function(t, i) {
                try {
                    "object" == typeof t && t && Object.assign(t, i)
                } catch (t) {} finally {
                    return t
                }
            }, i.intersect = function(t, i) {
                var n = [];
                try {
                    for (var e = 0; e < t.length; e++) - 1 !== i.indexOf(t[e]) && n.push(t[e])
                } catch (t) {} finally {
                    return n
                }
            }, i.union = function(t, i) {
                var n = [];
                try {
                    for (var e = 0; e < t.length; e++) - 1 === n.indexOf(t[e]) && n.push(t[e]);
                    for (var s = 0; s < i.length; s++) - 1 === n.indexOf(i[s]) && n.push(i[s])
                } catch (t) {} finally {
                    return n
                }
            }, i.extract = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1,
                    s = i || n || "";
                try {
                    var c = (i || "").trim().match(t),
                        s = null != c && c[e] ? c[e] : n || ""
                } catch (t) {} finally {
                    return s
                }
            }, i.compare_rule = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ".",
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                    s = !1;
                try {
                    s = -1 !== (i = !0 === this.oc.test(i) ? (i = i.replace(this.oc, this.cc)).replace(this.uc, "") : i).indexOf("*") ? (i = (i = (i = (i = i.replace(this.rc, this.sc)).replace(this.ac, this.ec)).replace(this.lc, e + "*")).replace(this.hc, n + "*"), new RegExp("^".concat(i, "$")).test(t) && !0) : t === i && !0
                } catch (t) {} finally {
                    return s
                }
            }, i.compare_rules = function(t, i, n) {
                var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : ".",
                    s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : ".",
                    c = !1,
                    a = !1,
                    r = !1;
                try {
                    if (0 < i.length) {
                        for (var o = 0; o < i.length && !0 !== a;) a = this.compare_rule(t, i[o], e, s), o++;
                        !1 === a && (c = !0)
                    }
                    if (!1 === a && 0 < n.length) {
                        for (var h = 0; h < n.length && !0 !== r;) r = this.compare_rule(t, n[h], e, s), h++;
                        c = r
                    }
                } catch (t) {} finally {
                    return c
                }
            }, i.normalize_url_path = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    e = "";
                try {
                    i ? 1 < i.length && "/" !== i[i.length - 1] && "*" !== i[i.length - 1] && (i += "/") : i = "/", e = "".concat(n).concat(t).concat(i)
                } catch (t) {} finally {
                    return e
                }
            }, i.compare_page_rules = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = !1;
                try {
                    if (0 < i.length) {
                        var s, c = [],
                            a = [],
                            r = [];
                        null === n && (n = g.Base.yc);
                        for (var o = 0; o < i.length; o++) {
                            var h = (i[o] || "").trim();
                            h && ((s = (h = !1 === this.fc.test(h) ? this.normalize_url_path(n, h) : h).match(this.fc)) ? c.push(this.normalize_url_path(s[2], s[3], s[1])) : c.push("".concat(n).concat(h)))
                        }
                        for (var l = t.match(this.fc), u = l ? this.normalize_url_path(l[2], l[3], l[1]) : null, f = 0; f < c.length; f++)(!0 === this.oc.test(c[f]) ? a : r).push(c[f]);
                        !0 === this.compare_rules(u, a, r, "[^/]", ".") && (e = !0)
                    }
                } catch (t) {} finally {
                    return e
                }
            }, i.play_media = function(t) {
                try {
                    var i = t.play();
                    void 0 !== i && "function" == typeof i.catch && i.catch(function(t) {})
                } catch (t) {}
            }, i.open_link = function(t) {
                try {
                    var i = window.open();
                    i.opener = null, i.location = t
                } catch (t) {}
            }, i.acquire_channel_url_regex = function(t, i) {
                var n, e, s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
                    c = null;
                try {
                    g.Base.mc.channels[t] && ((c = null === (n = this._c[t]) || void 0 === n ? void 0 : n[i]) || (e = g.Chat.Interface.generate_channel_link("helpdesk"), c = new RegExp("^".concat(g.Library.crisp.web.Parse.escape_regex(e)) + "".concat(s, "$")), this._c[t] = this._c[t] || {}, this._c[t][i] = c))
                } catch (t) {} finally {
                    return c
                }
            }, i.next_render = function(t) {
                try {
                    g.Library.vue.nextTick(t)
                } catch (t) {}
            }, i.set_timeout = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = null;
                try {
                    if (!g.Library.crisp.client.Schedule) throw new Error("Could not set timeout after ".concat(i, "ms, as the schedule wrapper ") + "is not yet available");
                    n = g.Library.crisp.client.Schedule.set_timeout(t, i)
                } catch (t) {} finally {
                    return n
                }
            }, i.clear_timeout = function(t) {
                try {
                    if (!g.Library.crisp.client.Schedule) throw new Error("Could not clear timeout #".concat(t, ", as the schedule wrapper ") + "is not yet available");
                    g.Library.crisp.client.Schedule.clear_timeout(t)
                } catch (t) {}
            }, i.set_interval = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = null;
                try {
                    if (!g.Library.crisp.client.Schedule) throw new Error("Could not set interval every ".concat(i, "ms, as the schedule wrapper ") + "is not yet available");
                    n = g.Library.crisp.client.Schedule.set_interval(t, i)
                } catch (t) {} finally {
                    return n
                }
            }, i.clear_interval = function(t) {
                try {
                    if (!g.Library.crisp.client.Schedule) throw new Error("Could not clear interval #".concat(t, ", as the schedule wrapper ") + "is not yet available");
                    g.Library.crisp.client.Schedule.clear_interval(t)
                } catch (t) {}
            }, i.add_event_listener = function(t, i, n, e) {
                var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
                try {
                    if (!g.Library.crisp.client.Listener) throw new Error("Could not add event listener '".concat(n, "' to ") + "'".concat(i, "' instance, as the listener wrapper is not ") + "yet available");
                    g.Library.crisp.client.Listener.add_event(t, i, n, e, s)
                } catch (t) {}
            }, i.remove_event_listener = function(t, i, n) {
                try {
                    if (!g.Library.crisp.client.Listener) throw new Error("Could not remove event listener '".concat(n, "' from ") + "'".concat(i, "' instance, as the listener wrapper is not ") + "yet available");
                    g.Library.crisp.client.Listener.remove_event(t, i, n)
                } catch (t) {}
            }, i.reset_instance_children = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                try {
                    var n, e = null !== i ? i : t,
                        s = [];
                    for (n in t) {
                        var c = t[n];
                        c !== e && c && "object" == typeof c && "function" == typeof c.reset && c.reset(s)
                    }
                    for (; 0 < s.length;) s.shift()()
                } catch (t) {}
            }, i.vc = function(t, i) {
                var n = "";
                try {
                    n = t.substring(0, g.Base.pc.length) === g.Base.pc ? t : i
                } catch (t) {} finally {
                    return n
                }
            }, i.ht = function() {
                try {
                    this._c = {}
                } catch (t) {}
            }, t
        }());
        g.Utility = n;
        var e = new(function() {
            function t() {
                try {
                    this.ns = "CrispFeature", this.gc = /^[a-z]/, this.wc = /no/, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.has_screen_touch = function() {
                var t = !1;
                try {
                    t = this.bc
                } catch (t) {} finally {
                    return t
                }
            }, i.has_css_animations = function() {
                var t = !1;
                try {
                    t = this.kc
                } catch (t) {} finally {
                    return t
                }
            }, i.has_audio_recording = function() {
                var t = !1;
                try {
                    t = this.$c
                } catch (t) {} finally {
                    return t
                }
            }, i.has_html_audio = function() {
                var t = !1;
                try {
                    t = null !== this.xc && !0
                } catch (t) {} finally {
                    return t
                }
            }, i.html_audio_format = function() {
                var t = "mp3";
                try {
                    t = this.xc
                } catch (t) {} finally {
                    return t
                }
            }, i.Fc = function(t) {
                var i = !1;
                try {
                    i = !!(t in window)
                } catch (t) {} finally {
                    return i
                }
            }, i.jc = function(t) {
                var i = !1;
                try {
                    var n = document.documentElement.style,
                        e = ["Khtml", "Ms", "O", "Moz", "Webkit"],
                        s = e.length;
                    if (t in n) i = !0;
                    else
                        for (t = t.replace(this.gc, function(t) {
                                return t.toUpperCase()
                            }); s--;)
                            if (e[s] + t in n) {
                                i = !0;
                                break
                            }
                } catch (t) {} finally {
                    return i
                }
            }, i.Ec = function() {
                var n = this;
                try {
                    this.$c = !1, window.MediaRecorder && window.File && navigator.mediaDevices && "function" == typeof window.MediaRecorder.isTypeSupported && "function" == typeof navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.enumerateDevices().then(function(t) {
                        for (var i = 0; i < ((null == t ? void 0 : t.length) || 0); i++)
                            if ("audioinput" === t[i].kind) {
                                n.$c = !0;
                                break
                            }
                        g.Store.$store.base.features.audio_recording = n.$c
                    }).catch(function(t) {})
                } catch (t) {}
            }, i.zc = function() {
                var i = this;
                try {
                    this.bc = !!(this.Fc("ontouchstart") || 0 < navigator.maxTouchPoints), window.addEventListener("touchstart", function t() {
                        i.bc = !0, window.removeEventListener("touchstart", t)
                    }, !1)
                } catch (t) {}
            }, i.Cc = function() {
                var t = null;
                try {
                    var i = document.createElement("audio"),
                        n = !(!i.canPlayType || !i.canPlayType('audio/ogg; codecs="vorbis"').replace(this.wc, "")),
                        e = !(!i.canPlayType || !i.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(this.wc, "")),
                        s = !(!i.canPlayType || !i.canPlayType("audio/mpeg;").replace(this.wc, ""));
                    1 == n ? t = "oga" : 1 == e ? t = "m4a" : 1 == s && (t = "mp3")
                } catch (t) {} finally {
                    return t
                }
            }, i.ht = function() {
                try {
                    this.kc = this.jc("animation"), this.xc = this.Cc(), this.Ec(), this.zc()
                } catch (t) {}
            }, t
        }());
        g.Feature = e;
        var s = new(function() {
            function t() {
                try {
                    this.ns = "CrispStore", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.bind_events = function(t, i, n) {
                try {
                    if (void 0 === g.Store.$events[t]) {
                        g.Store.$events[t] = {};
                        for (var e = 0; e < i.length; e++) {
                            var s = i[e],
                                c = n[s];
                            if ("function" != typeof c) throw new Error("Event to bind not found in realm: ".concat(t, " for name: ") + "".concat(s));
                            g.Store.$events[t][s] = c.Mt(n)
                        }
                    }
                } catch (t) {}
            }, i._t = function() {
                try {
                    this.$events = {}
                } catch (t) {}
            }, i.Ac = function() {
                try {
                    this.$store = {}, this.Ic(), this.qc(), this.Oc(), this.Sc(), this.Dc(), this.Rc()
                } catch (t) {}
            }, i.Ic = function() {
                try {
                    this.$store.base = g.Library.vue.reactive({
                        availability: "none",
                        is_hidden: !1,
                        is_blocked: !1,
                        is_mobile_view: !1,
                        is_full_view: !1,
                        is_small_view: !1,
                        is_large_view: !1,
                        is_activity_ongoing: !1,
                        has_local_messages: !1,
                        was_availability_online: !1,
                        force_show: !1,
                        active_operators: [],
                        other_operators_count: 0,
                        website: {
                            id: "",
                            domain: "",
                            name: ""
                        },
                        environment: {
                            types: {
                                file_preview: {}
                            }
                        },
                        features: {
                            audio_recording: !1
                        },
                        configuration: {},
                        runtime: {}
                    })
                } catch (t) {}
            }, i.qc = function() {
                try {
                    this.$store.chat = g.Library.vue.reactive({
                        mode: "chat",
                        status_marker: "none",
                        is_visible: !1,
                        is_locked_identify: !1,
                        is_locked_prompt: !1,
                        is_hidden_prompt: !1,
                        has_offline: !1,
                        has_drop_zone: !1,
                        has_channels: !1,
                        show_operator_count: !0,
                        animate_minimize: !1,
                        animate_maximize: !1,
                        reconnect_failed: !1,
                        reconnect_inactive: !1,
                        blocked: !1,
                        ongoing_operator: {
                            user_id: "",
                            type: "",
                            name: "",
                            url: ""
                        },
                        current_alerts: null,
                        channels: [],
                        branding_link: null,
                        activity: {
                            metrics: null,
                            last: null
                        },
                        speech: {
                            state: "none",
                            duration: 0,
                            progress: 0
                        },
                        file: {
                            state: "none"
                        },
                        game: {
                            loaded: !1
                        },
                        frame: {
                            target: "",
                            title: "",
                            loaded: !1
                        },
                        status: {
                            url: ""
                        },
                        field: {
                            has_value: !1
                        },
                        picker: {
                            type: "smiley",
                            is_visible: !1,
                            has_animation: !1,
                            gif: {
                                results: [],
                                input: ""
                            }
                        },
                        feedback: {
                            is_visible: !1,
                            is_available: !1,
                            stars: {
                                hovered: 0,
                                selected: 0
                            },
                            comment: ""
                        },
                        helpdesk_search: {
                            input: "",
                            url: "",
                            articles: [],
                            current_index: 0,
                            has_search: !1,
                            initialized: !1,
                            loading: !1
                        },
                        helpdesk_viewer: {
                            url: "",
                            category: "",
                            title: "",
                            loaded: !1
                        }
                    })
                } catch (t) {}
            }, i.Oc = function() {
                try {
                    this.$store.magnify = g.Library.vue.reactive({
                        state: null,
                        type: null,
                        source: null,
                        name: null,
                        messages: null
                    })
                } catch (t) {}
            }, i.Sc = function() {
                try {
                    this.$store.call = g.Library.vue.reactive({
                        mode: null,
                        size: "maximized",
                        state: null,
                        duration: 0,
                        user: {
                            user_id: "",
                            nickname: "",
                            type: ""
                        },
                        muted: {
                            audio: !1,
                            video: !1
                        },
                        actions: []
                    })
                } catch (t) {}
            }, i.Dc = function() {
                try {
                    this.$store.minimized = g.Library.vue.reactive({
                        pane: {
                            is_ongoing: !1,
                            is_waiting: !1,
                            is_offline: !1,
                            animate_entrance: !1,
                            general_entice: {
                                visible: !1,
                                is_concealed: !1,
                                animate_full: !1,
                                animate_short: !1
                            },
                            unread: {
                                visible: !1,
                                count: 0
                            },
                            helpdesk: {
                                url: null,
                                only: !1
                            }
                        },
                        tooltips: {
                            new_messages: {
                                visible: !1,
                                animate: !0
                            }
                        }
                    })
                } catch (t) {}
            }, i.Rc = function() {
                try {
                    this.$store.messages = g.Library.vue.reactive({
                        list: [],
                        preview: [],
                        fingerprints: {},
                        is_composing: !1,
                        prompt_fingerprints: [],
                        latest_fingerprint: null
                    })
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this._t(), this.Ac()
                } catch (t) {}
            }, t
        }());
        g.Store = s;
        var c = new(function() {
            function t() {
                try {
                    this.ns = "CrispAction", this.Bc = ["session:loaded", "chat:initiated", "chat:opened", "chat:closed", "message:sent", "message:received", "message:compose:sent", "message:compose:received", "user:email:changed", "user:phone:changed", "user:nickname:changed", "user:avatar:changed", "website:availability:changed", "helpdesk:queried"], this.Nc = {
                        on: this.Mc,
                        off: this.Tc
                    }, this.Uc = 500, this.Pc = /^([a-f0-9]{64})$/, this.Lc = {}
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    void 0 === g.Base.Jc.__spool.pending_actions && (g.Base.Jc.__spool.pending_actions = [])
                } catch (t) {}
            }, i.do_chat_open = function() {
                !0 === g.Chat.Vc ? g.Chat.Interface.maximize() : g.Minimized.Interface.Wc()
            }, i.do_chat_close = function() {
                !0 === g.Chat.Vc && g.Chat.Interface.minimize()
            }, i.do_chat_toggle = function() {
                !0 === this.is_chat_closed() ? this.do_chat_open() : this.do_chat_close()
            }, i.do_chat_show = function() {
                !0 === this.is_chat_hidden() && (g.Store.$store.base.is_hidden = !1, (g.Store.$store.base.force_show = !0) === g.Chat.Vc && (g.Chat.Interface.request_dynamic_sizing_properties(), g.Chat.Interface.apply_chat_focus()))
            }, i.do_chat_hide = function() {
                !0 === this.is_chat_visible() && (g.Store.$store.base.is_hidden = !0, !(g.Store.$store.base.force_show = !1) === g.Chat.Vc && g.Chat.Interface.apply_chat_focus())
            }, i.do_helpdesk_search = function() {
                if (!0 !== g.Chat.Helpdesk.show_search()) throw new Error("Helpdesk search is unavailable");
                this.do_chat_show(), this.do_chat_open()
            }, i.do_helpdesk_article_open = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                if ("string" != typeof t || !t) throw new Error("Invalid article locale");
                if ("string" != typeof i || !i) throw new Error("Invalid article slug");
                if (!0 !== g.Chat.Helpdesk.show_article(t, i, n, e)) throw new Error("Helpdesk article is unavailable");
                this.do_chat_show(), this.do_chat_open()
            }, i.do_helpdesk_query = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                g.Base.ensure_socket(function() {
                    g.Library.crisp.client.Helpdesk.get_article_search(t, g.Locale.code())
                })
            }, i.do_message_send = function(n, e) {
                var s = this;
                g.Base.ensure_socket(function() {
                    var t = s.Hc(n, e);
                    if (null !== t.type && null !== t.content) {
                        var i = !0 === g.Chat.Message.trigger_will_send_hooks() ? s.Uc : 0;
                        switch (t.type) {
                            case "text":
                                g.Library.crisp.client.Message.send_text_message(t.content, i);
                                break;
                            case "file":
                                g.Library.crisp.client.Message.send_file_message(t.content.name, t.content.url, t.content.type, i);
                                break;
                            case "animation":
                                g.Library.crisp.client.Message.send_animation_message(t.content.url, t.content.type, i);
                                break;
                            case "audio":
                                g.Library.crisp.client.Message.send_audio_message(t.content.url, t.content.type, t.content.duration, i);
                                break;
                            case "picker":
                                g.Library.crisp.client.Message.send_picker_message(t.content.id, t.content.text, t.content.choices, i);
                                break;
                            case "field":
                                g.Library.crisp.client.Message.send_field_message(t.content.id, t.content.text, t.content.explain, i);
                                break;
                            case "carousel":
                                g.Library.crisp.client.Message.send_carousel_message(t.content.text, t.content.targets, i)
                        }
                        g.Chat.start_maximized()
                    }
                })
            }, i.do_message_show = function(i, n) {
                var e = this,
                    s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    c = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                g.Base.ensure_socket(function() {
                    var t = e.Hc(i, n);
                    null !== t.type && null !== t.content && g.Chat.Message.dispatch_local(t.type, t.content, s, c)
                })
            }, i.do_message_read = function() {
                !0 === g.Chat.Vc && g.Library.crisp.client.Message.mark_messages_as_read()
            }, i.do_message_thread_start = function(t) {
                if ("string" != typeof t || !t) throw new Error("Invalid message thread start text");
                if (!0 !== g.Chat.Vc) throw new Error("Chat must be active for message thread to start");
                g.Base.ensure_socket(function() {
                    g.Library.crisp.client.Message.send_message_thread("start", t)
                })
            }, i.do_message_thread_end = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                if (t && ("string" != typeof t || !t)) throw new Error("Invalid message thread end text");
                if (!0 !== g.Chat.Vc) throw new Error("Chat must be active for message thread to end");
                g.Base.ensure_socket(function() {
                    g.Library.crisp.client.Message.send_message_thread("end", t || "")
                })
            }, i.do_session_reset = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                g.Base.update_socket_cookie_key(!1, !0), g.Library.crisp.client.Session.reset(), !1 === t ? (g.Base.uninsert_client(), g.Base.reset(), g.Base.re_trigger_loader()) : document.location.reload()
            }, i.do_trigger_run = function(t) {
                if (!0 !== g.Trigger.run(t)) throw new Error("Trigger does not exist")
            }, i.is_chat_opened = function() {
                return !(!0 !== g.Store.$store.chat.is_opened || !0 !== g.Chat.Vc)
            }, i.is_chat_closed = function() {
                return !1 === this.is_chat_opened() && !0
            }, i.is_chat_visible = function() {
                return !1 === this.is_chat_hidden() && !0
            }, i.is_chat_hidden = function() {
                return (null === g.Base.Kc || !0 === g.Store.$store.base.is_hidden || null === g.Base.Kc.offsetParent) && !0
            }, i.is_chat_small = function() {
                return !1 === g.Base.is_full_view() && !0
            }, i.is_chat_large = function() {
                return !1 === this.is_chat_small() && !0
            }, i.is_session_ongoing = function() {
                return (!0 === g.Chat.Message.Gc || !0 === g.Chat.Message.Yc) && !0
            }, i.is_website_available = function() {
                return g.Availability.Zc && !0
            }, i.get_chat_unread_count = function() {
                return g.Chat.Notification.Xc || 0
            }, i.get_message_text = function() {
                return !0 === g.Chat.Vc && g.Chat.Selector.get("form_textarea_message").value || ""
            }, i.get_session_identifier = function() {
                return g.Broker.Wt || null
            }, i.get_session_data = function() {
                return g.Library.crisp.client.Session.get_data(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null) || null
            }, i.get_user_email = function() {
                return g.Library.crisp.client.Session.get_email() || null
            }, i.get_user_phone = function() {
                return g.Library.crisp.client.Session.get_phone() || null
            }, i.get_user_nickname = function() {
                return g.Library.crisp.client.Session.get_nickname() || null
            }, i.get_user_avatar = function() {
                return g.Library.crisp.client.Session.get_avatar() || null
            }, i.get_user_company = function() {
                var t, i, n = g.Library.crisp.client.Session.get_company() || null;
                return null != n && null !== (t = n.employment) && void 0 !== t && t.title && (n.employment = [n.employment.title, n.employment.role]), null != n && null !== (i = n.geolocation) && void 0 !== i && i.country && (n.geolocation = [n.geolocation.country, n.geolocation.city || null]), n
            }, i.set_message_text = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if ("string" != typeof t) throw new Error("Invalid message text");
                var i = g.Chat.Selector.get("form_textarea_message");
                i && !0 !== i.disabled && (i.value = t, i.dispatchEvent(new window.KeyboardEvent("keydown")))
            }, i.set_session_data = function(c, a) {
                g.Base.ensure_socket(function() {
                    for (var t, i = c instanceof Array && c[0] instanceof Array ? c : [
                            [c, a]
                        ], n = {}, e = 0; e < i.length; e++) {
                        var s = i[e][1];
                        s && "string" == typeof s && ("false" === s ? s = !1 : "true" === s ? s = !0 : !1 === isNaN(Number(s)) && (s = Number(s))), n[i[e][0]] = s
                    }
                    if (!0 !== g.Validate.is_data(n)) throw new Error("Invalid data");
                    for (t in g.Library.crisp.client.Session.set_data(n), n) g.Trigger.do_event("user_data", {
                        key: t,
                        value: n[t]
                    })
                }, !0)
            }, i.set_session_segments = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                g.Base.ensure_socket(function() {
                    if (!t || !0 !== g.Validate.are_segments(t)) throw new Error("Invalid segments value");
                    g.Library.crisp.client.Session.set_segments(t, i)
                }, !0)
            }, i.set_session_event = function(n) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                g.Base.ensure_socket(function() {
                    var t = n instanceof Array && n[0] instanceof Array ? n : [
                        [n, e, s]
                    ];
                    if (!0 !== g.Validate.are_events(t)) throw new Error("Invalid event text or data");
                    g.Library.crisp.client.Session.send_event(t);
                    for (var i = 0; i < t.length; i++) g.Trigger.do_event("user_event", {
                        text: t[i][0]
                    })
                }, !0)
            }, i.set_user_email = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                if (!t || !0 !== g.Validate.is_email(t)) throw new Error("Invalid email");
                if (null !== i && !0 !== this.Pc.test(i)) throw new Error("Invalid verify signature (should be lowercase HMAC-SHA256)");
                g.Library.crisp.client.Session.set_email(t, !1, i), this.Qc(), this.event("user:email:changed", t)
            }, i.set_user_phone = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (!(t = "number" == typeof t ? "".concat(t) : t) || !0 !== g.Validate.is_phone(t)) throw new Error("Invalid phone");
                g.Library.crisp.client.Session.set_phone(t), this.Qc(), this.event("user:phone:changed", t)
            }, i.set_user_nickname = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if ("string" != typeof t || !t) throw new Error("Invalid nickname");
                g.Library.crisp.client.Session.set_nickname(t), this.event("user:nickname:changed", t)
            }, i.set_user_avatar = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (!t || !0 !== g.Validate.is_avatar(t)) throw new Error("Invalid avatar");
                g.Library.crisp.client.Session.set_avatar(t), this.event("user:avatar:changed", t)
            }, i.set_user_company = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t) throw new Error("Invalid company name");
                var n, e = {
                    name: t
                };
                if (i.url) {
                    if ("string" != typeof i.url) throw new Error("Invalid URL");
                    e.url = i.url
                }
                if (i.description) {
                    if ("string" != typeof i.description) throw new Error("Invalid description");
                    e.description = i.description
                }
                if (null !== (n = i.employment) && void 0 !== n && n[0]) {
                    if ("string" != typeof i.employment[0] || "string" != typeof i.employment[1]) throw new Error("Invalid employment");
                    e.employment = {
                        title: i.employment[0],
                        role: i.employment[1]
                    }
                }
                if (null !== (n = i.geolocation) && void 0 !== n && n[0]) {
                    if ("string" != typeof i.geolocation[0] || i.geolocation[1] && "string" != typeof i.geolocation[1]) throw new Error("Invalid geolocation");
                    e.geolocation = {
                        country: i.geolocation[0],
                        city: i.geolocation[1] || null
                    }
                }
                g.Library.crisp.client.Session.set_company(e)
            }, i.config_availability_tooltip = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                g.Base.update_configuration("availability_tooltip", t), !0 === t && !0 !== g.Base.is_full_view() && !0 !== g.Store.$store.minimized.pane.helpdesk.only && g.Minimized.Interface.display_general_entice()
            }, i.config_hide_vacation = function() {
                g.Base.update_configuration("hide_vacation", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            }, i.config_hide_on_away = function() {
                g.Base.update_configuration("hide_on_away", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            }, i.config_hide_on_mobile = function() {
                g.Base.update_configuration("hide_on_mobile", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            }, i.config_position_reverse = function() {
                g.Base.update_configuration("position_reverse", 0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            }, i.config_sound_mute = function() {
                g.Sound.mute(0 < arguments.length && void 0 !== arguments[0] && arguments[0])
            }, i.config_color_theme = function() {
                g.Base.insert_style({
                    color: {
                        theme: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                    }
                })
            }, i.config_container_index = function() {
                g.Base.insert_style({
                    other: {
                        container_index: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                    }
                })
            }, i.config_show_operator_count = function() {
                g.Store.$store.chat.show_operator_count = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
            }, i.event = function(t) {
                var i = this,
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                if (-1 === this.Bc.indexOf(t)) throw new Error("Event namespace not recognized: ".concat(t));
                "function" == typeof this.Lc[t] && g.Utility.next_render(function() {
                    try {
                        i.Lc[t].apply(window, n instanceof Array ? n : void 0 !== n ? [n] : [])
                    } catch (t) {}
                })
            }, i.unstack_pending = function() {
                try {
                    var t = g.Base.Jc.__spool.pending_actions;
                    if (delete g.Base.Jc.__spool.pending_actions, 0 < (null == t ? void 0 : t.length))
                        for (var i = 0; i < t.length; i++) try {
                            g.Pipeline.push(t[i])
                        } catch (t) {}
                } catch (t) {}
            }, i.Mc = function(t, i) {
                if ("function" != typeof i) throw new Error("Handler must be a function");
                this.Lc[t] = i
            }, i.Tc = function(t) {
                void 0 !== this.Lc[t] && delete this.Lc[t]
            }, i.Qc = function() {
                !0 === g.Chat.Vc && (!0 === g.Chat.Message.Gc && g.Chat.Alert.update("wait_reply", "show"), g.Chat.Alert.update("warn_reply", "hide"), g.Chat.Alert.update("email_invalid", "hide"), g.Chat.Intent.update("identity", !1))
            }, i.Hc = function(t, i) {
                var n = {
                    type: null,
                    content: null
                };
                switch (t) {
                    case "text":
                        if ("string" != typeof i || !i) throw new Error("Invalid text message");
                        n.type = "text", n.content = i;
                        break;
                    case "file":
                        if ("object" != typeof i || !i.name || !i.url || !i.type) throw new Error("Invalid file message");
                        n.type = "file", n.content = {
                            name: i.name,
                            url: i.url,
                            type: i.type
                        };
                        break;
                    case "animation":
                        if ("object" != typeof i || !i.url || !i.type) throw new Error("Invalid animation message");
                        n.type = "animation", n.content = {
                            url: i.url,
                            type: i.type
                        };
                        break;
                    case "audio":
                        if ("object" != typeof i || !i.url || !i.type || !i.duration) throw new Error("Invalid audio message");
                        n.type = "audio", n.content = {
                            url: i.url,
                            type: i.type,
                            duration: i.duration
                        };
                        break;
                    case "picker":
                        if ("object" != typeof i || !i.id || !i.text || 0 === (i.choices || []).length) throw new Error("Invalid picker message");
                        n.type = "picker", n.content = {
                            id: i.id,
                            text: i.text,
                            choices: i.choices
                        };
                        break;
                    case "field":
                        if ("object" != typeof i || !i.id || !i.text || !i.explain) throw new Error("Invalid field message");
                        n.type = "field", n.content = {
                            id: i.id,
                            text: i.text,
                            explain: i.explain
                        };
                        break;
                    case "carousel":
                        if ("object" != typeof i || !i.text || 0 === (i.targets || []).length) throw new Error("Invalid carousel message");
                        n.type = "carousel", n.content = {
                            text: i.text,
                            targets: i.targets
                        }
                }
                return n
            }, t
        }());
        g.Action = c;
        var a = new(function() {
            function t() {
                try {
                    this.ns = "CrispAccessibility", this.ta = ["button", "alert"], this.ia = 13, this.na = 32, this.ea = 9, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.directive = function(n) {
                var e = this;
                try {
                    function i(t) {
                        switch (t.keyCode) {
                            case e.ia:
                            case e.na:
                                var i;
                                null !== (i = t.target) && void 0 !== i && i.role && -1 !== e.ta.indexOf(t.target.role) && (t.stopImmediatePropagation(), t.preventDefault(), t.target.click());
                                break;
                            case e.ea:
                                null !== e.sa && null !== e.ca && e.sa === n.el && "hidden" !== window.getComputedStyle(e.ca).visibility && (t.stopImmediatePropagation(), t.preventDefault(), e.ca.focus())
                        }
                    }
                    var t = function() {
                        n.el.removeEventListener("keydown", i);
                        var t = e.aa.indexOf(n.el); - 1 < t && e.aa.splice(t, 1)
                    };
                    n.el.setAttribute("tabindex", 0), n.get() && (n.get().role && n.el.setAttribute("role", n.get().role), !0 === n.get().is_first && null === this.ca && (this.ca = n.el), !0 === n.get().is_last && null === this.sa && (this.sa = n.el)), n.el.addEventListener("keydown", i), this.aa.push(n.el)
                } catch (t) {} finally {
                    return t || function() {}
                }
            }, i.ht = function() {
                try {
                    this.ca = null, this.sa = null, this.aa = []
                } catch (t) {}
            }, t
        }());
        g.Accessibility = a;
        var r = new(function() {
            function t() {
                try {
                    this.ns = "CrispPipeline", this.ra = ["get", "set", "is", "do", "on", "off", "config", "safe", "help"], this.oa = ["on", "off"], this.ha = /:/g, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.push = function(t) {
                var i = (null === (i = window.$__CRISP_INSTANCE) || void 0 === i ? void 0 : i.__spool) || {};
                void 0 !== i.pending_actions ? i.pending_actions.push(t) : t[0] && void 0 !== t[1] && -1 !== this.ra.indexOf(t[0]) && "function" == typeof this[t[0]] && this[t[0]](t[1], t[2] || [])
            }, i.get = function(t) {
                return this.la("get", t, this.ua(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
            }, i.set = function(t) {
                return this.la("set", t, this.ua(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
            }, i.is = function(t) {
                return this.la("is", t)
            }, i.do = function(t) {
                return this.la("do", t, this.ua(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
            }, i.on = function(t, i) {
                return this.fa("on", t, [t, i])
            }, i.off = function(t) {
                return this.fa("off", t, [t])
            }, i.config = function(t) {
                return this.la("config", t, this.ua(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []))
            }, i.safe = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                if ("boolean" != typeof t) throw new Error("Safe mode value must be 'true' or 'false'.");
                this.Qs = t
            }, i.help = function() {
                var t, i = [];
                for (t in g.Action) {
                    var n = t.split("_");
                    1 < n.length && -1 !== this.ra.indexOf(n[0]) && "function" == typeof g.Action[t] && i.push("$crisp.".concat(n[0], "('").concat(n.slice(1).join(":"), "')"))
                }
                for (var e = 0; e < this.oa.length; e++)
                    for (var s = 0; s < g.Action.Bc.length; s++) i.push("$crisp.".concat(this.oa[e], "('").concat(g.Action.Bc[s], "')"));
                return i
            }, i.ua = function(t) {
                return t ? t instanceof Array ? t : [t] : []
            }, i.la = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                    e = null,
                    s = null;
                try {
                    var c = "".concat(t, "_").concat((i || "").replace(this.ha, "_"));
                    "function" == typeof g.Action[c] ? e = g.Action[c].apply(g.Action, n) : this.da(i)
                } catch (t) {
                    !0 !== this.Qs && (s = t)
                } finally {
                    if (null !== s) throw s;
                    return e
                }
            }, i.fa = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                    e = null,
                    s = null;
                try {
                    var c = g.Action.Nc[t];
                    if ("function" != typeof c) throw new Error("No such event method for action: ".concat(t)); - 1 !== g.Action.Bc.indexOf(i) ? e = c.apply(g.Action, n) : this.da(i)
                } catch (t) {
                    !0 !== this.Qs && (s = t)
                } finally {
                    if (null !== s) throw s;
                    return e
                }
            }, i.da = function(t) {
                throw new Error("No such namespace: ".concat(t, " - Call $crisp.help() for a list ") + "of available actions.")
            }, i.ht = function() {
                try {
                    this.Qs = !1
                } catch (t) {}
            }, t
        }());
        g.Pipeline = r;
        var o = new(function() {
            function t() {
                try {
                    this.ns = "CrispValidate", this.va = 80, this.pa = /^(([^\s@]+)@([^\s@]+)\.([^\s@]+))$/, this.ya = new RegExp(["^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?", "[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})", "(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\/]?", "(\\d+))?$"].join(""), "i"), this.ma = /^https?:\/\/(.+)$/, this.ga = /^([A-Za-z0-9_\\-]{1,50})$/
                } catch (t) {}
            }
            var i = t.prototype;
            return i.is_email = function(t) {
                var i = !1;
                try {
                    t.match(this.pa) && (i = !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.is_phone = function(t) {
                var i = !1;
                try {
                    t.match(this.ya) && (i = !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.is_avatar = function(t) {
                var i = !1;
                try {
                    t.match(this.ma) && (i = !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.is_data = function(t) {
                var i = !1;
                try {
                    if (t instanceof Object)
                        for (var n in i = 0 < g.Utility.keys(t).length && !0, t) {
                            var e = t[n];
                            ("string" != typeof n || !0 !== this.ga.test(n) || "string" != typeof e && "boolean" != typeof e && "number" != typeof e) && (i = !1)
                        }
                } catch (t) {} finally {
                    return i
                }
            }, i.are_events = function(t) {
                var i = !1;
                try {
                    if (t instanceof Array)
                        for (var i = 0 < t.length && !0, n = 0; n < t.length; n++) "string" == typeof t[n][0] && t[n][0] && (!1 !== g.Utility.is_empty(t[n][1]) || !1 !== this.is_data(t[n][1])) || (i = !1)
                } catch (t) {} finally {
                    return i
                }
            }, i.are_segments = function(t) {
                var i = !1;
                try {
                    if (t instanceof Array)
                        for (var i = !0, n = [], e = 0; e < t.length; e++) {
                            var s = (t[e] || "").trim();
                            if (!s || s.length > this.va || -1 !== n.indexOf(s)) {
                                i = !1;
                                break
                            }
                            n.push(s)
                        }
                } catch (t) {} finally {
                    return i
                }
            }, t
        }());
        g.Validate = o;
        var h = new(function() {
            function t() {
                try {
                    this.ns = "CrispDate", this.wa = 20, this.ba = 1e3, this.ka = 60, this.$a = 24, this.xa = 60, this.Fa = this.ka * this.xa, this.ja = this.$a * this.Fa, this.Ea = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], this.za = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
                } catch (t) {}
            }
            var i = t.prototype;
            return i.directive = function(i) {
                var t, n = this;
                try {
                    var e = i.get() || {},
                        s = e.date,
                        c = e.format || "",
                        a = e.type || "date",
                        r = null,
                        o = function() {
                            g.Utility.clear_timeout(r), r = null
                        },
                        h = function() {
                            o(), r = g.Utility.set_timeout(function() {
                                l()
                            }, n.wa * n.ba)
                        },
                        l = function() {
                            var t = "";
                            switch (a) {
                                case "date":
                                    t = n.format_date(n.timestamp_to_iso(s));
                                    break;
                                case "duration":
                                    t = n.format_duration(s)
                            }
                            c && (t = g.Library.crisp.web.Parse.replace(c, [g.Utility.lower_string_first(t)])), i.el.innerText = t, h()
                        };
                    i.effect(function() {
                        var t = i.get() || {};
                        s = t.date, c = t.format || "", l()
                    }), t = function() {
                        o()
                    }
                } catch (t) {} finally {
                    return t || function() {}
                }
            }, i.timestamp_to_iso = function(t) {
                var i = "";
                try {
                    i = new Date(t).toISOString()
                } catch (t) {} finally {
                    return i
                }
            }, i.iso_to_timestamp = function(t) {
                var i = 0;
                try {
                    i = new Date(t).getTime()
                } catch (t) {} finally {
                    return i
                }
            }, i.timestamp_to_properties = function(t) {
                var i, n, e, s = {
                    day: "none",
                    month: "none",
                    year: "none",
                    title: null
                };
                try {
                    0 < t && (i = new Date(t), n = g.Locale.text("days", this.Ea[i.getDay()]), e = g.Locale.text("months", this.za[i.getMonth()]), s.day = "".concat(i.getDate()), s.month = "".concat(i.getMonth() + 1), s.year = "".concat(i.getFullYear()), s.title = "".concat(n, ", ").concat(i.getDate(), " ").concat(e), (new Date).getFullYear() !== i.getFullYear() && (s.title += " (".concat(s.year, ")")))
                } catch (t) {} finally {
                    return s
                }
            }, i.seconds_in_timestamp = function(t) {
                var i = 0;
                try {
                    if (isNaN(Number(t))) throw new Error("Timestamp is not a number");
                    i = Math.floor(parseInt(t, 10) / this.ba)
                } catch (t) {} finally {
                    return i
                }
            }, i.timestamp = function() {
                var t = 0;
                try {
                    t = (new Date).getTime()
                } catch (t) {} finally {
                    return t
                }
            }, i.difference = function(t, i) {
                var n = -1;
                try {
                    n = this.iso_to_timestamp(t) - this.iso_to_timestamp(i)
                } catch (t) {} finally {
                    return n
                }
            }, i.equal = function(t, i) {
                var n = !1;
                try {
                    n = 0 === this.difference(t, i) && !0
                } catch (t) {} finally {
                    return n
                }
            }, i.format_time = function(t) {
                var i, n, e, s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    c = "0:00";
                try {
                    0 <= t && (t = Math.round(t), i = Math.floor(t / this.Fa), n = Math.floor(t % this.Fa / this.xa), e = t % this.xa % this.Fa, c = 0 < i || !0 === s ? "".concat(i, ":").concat(g.Utility.pad_number(n, "00"), ":") + "".concat(g.Utility.pad_number(e, "00")) : "".concat(n, ":").concat(g.Utility.pad_number(e, "00")))
                } catch (t) {} finally {
                    return c
                }
            }, i.format_date = function(t) {
                var i = null;
                try {
                    var n = new Date,
                        e = new Date(t),
                        s = n.getTime() - e.getTime(),
                        c = this.Ca(s);
                    if (c.type || (c.type = "far_away", c.data = {
                            date_full: e.toLocaleDateString()
                        }), !(i = g.Template.dom(g.Template.render("date_".concat(c.type), c.data)).innerText)) throw new Error("Empty parsed date for ISO string: ".concat(t))
                } catch (t) {} finally {
                    return i
                }
            }, i.format_duration = function(t) {
                var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = null;
                try {
                    var e = this.Ca(t, i);
                    if (e.type || (e.type = "days"), !(n = g.Template.dom(g.Template.render("duration_".concat(e.type), e.data)).innerText)) throw new Error("Empty parsed duration for duration: ".concat(t))
                } catch (t) {} finally {
                    return n
                }
            }, i.Ca = function(t) {
                var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = {};
                try {
                    var e = Math.round(t / this.ba);
                    e < 10 && !0 === i ? n.type = "now" : e < this.xa ? n.type = "seconds" : e < this.Fa ? (n.type = "minutes", n.data = {
                        minutes: Math.floor(e / this.xa)
                    }) : e < this.ja && (n.type = "hours", n.data = {
                        hours: Math.floor(e / this.Fa)
                    })
                } catch (t) {} finally {
                    return n
                }
            }, t
        }());
        g.Date = h;
        var l = new(function() {
            function t() {
                try {
                    this.ns = "CrispTheme", this.Aa = 16, this.Ia = "default", this.qa = {
                        default: {
                            10: "#F0F2F5",
                            20: "#EFF5FE",
                            100: "#E2EEFF",
                            200: "#92A9C1",
                            500: "#1972F5",
                            600: "#055EE1",
                            700: "#0057D7",
                            800: "#0051C8",
                            900: "#004AB5",
                            reverse: "#FFFFFF"
                        },
                        red: {
                            10: "#F0F2F5",
                            20: "#F9F3F3",
                            100: "#FFE5E4",
                            200: "#92A9C1",
                            500: "#E51E0F",
                            600: "#CC1B0E",
                            700: "#C5170A",
                            800: "#B81206",
                            900: "#A71004",
                            reverse: "#FFFFFF"
                        },
                        pink: {
                            10: "#F0F2F5",
                            20: "#F7F2F2",
                            100: "#FFE0EB",
                            200: "#92A9C1",
                            500: "#F11D64",
                            600: "#DB165A",
                            700: "#CE1454",
                            800: "#C20F4D",
                            900: "#B40A45",
                            reverse: "#FFFFFF"
                        },
                        purple: {
                            10: "#F0F2F5",
                            20: "#F8F3FA",
                            100: "#FADDFF",
                            200: "#92A9C1",
                            500: "#B520CF",
                            600: "#9B19B2",
                            700: "#9614AE",
                            800: "#8A0DA1",
                            900: "#800896",
                            reverse: "#FFFFFF"
                        },
                        deep_purple: {
                            10: "#F0F2F5",
                            20: "#F6F5FA",
                            100: "#EDE2FF",
                            200: "#92A9C1",
                            500: "#682AD5",
                            600: "#581FBB",
                            700: "#5019B0",
                            800: "#441599",
                            900: "#3B0F89",
                            reverse: "#FFFFFF"
                        },
                        indigo: {
                            10: "#F0F2F5",
                            20: "#F5F5FB",
                            100: "#DDE2FF",
                            200: "#92A9C1",
                            500: "#2943D1",
                            600: "#1732C4",
                            700: "#112BB9",
                            800: "#0F249A",
                            900: "#091C87",
                            reverse: "#FFFFFF"
                        },
                        blue: {
                            10: "#F0F2F5",
                            20: "#EFF5FE",
                            100: "#E2EEFF",
                            200: "#92A9C1",
                            500: "#1972F5",
                            600: "#055EE1",
                            700: "#0057D7",
                            800: "#0051C8",
                            900: "#004AB5",
                            reverse: "#FFFFFF"
                        },
                        light_blue: {
                            10: "#F0F2F5",
                            20: "#EFF5F7",
                            100: "#DCF0F9",
                            200: "#92A9C1",
                            500: "#009FDF",
                            600: "#008CCB",
                            700: "#0088C5",
                            800: "#007EB7",
                            900: "#0076AB",
                            reverse: "#FFFFFF"
                        },
                        cyan: {
                            10: "#F0F2F5",
                            20: "#F1F7F7",
                            100: "#DBF7F9",
                            200: "#92A9C1",
                            500: "#01A2B4",
                            600: "#009CAE",
                            700: "#008A9A",
                            800: "#008493",
                            900: "#007B89",
                            reverse: "#FFFFFF"
                        },
                        teal: {
                            10: "#F0F2F5",
                            20: "#E7F4F4",
                            100: "#D6EEE9",
                            200: "#92A9C1",
                            500: "#00947C",
                            600: "#00816C",
                            700: "#007B66",
                            800: "#00705D",
                            900: "#006655",
                            reverse: "#FFFFFF"
                        },
                        green: {
                            10: "#F0F2F5",
                            20: "#EDF5ED",
                            100: "#D6F3D7",
                            200: "#92A9C1",
                            500: "#28A52D",
                            600: "#1A941F",
                            700: "#148919",
                            800: "#0F7B13",
                            900: "#0A6C0E",
                            reverse: "#FFFFFF"
                        },
                        light_green: {
                            10: "#F0F2F5",
                            20: "#F0F7F0",
                            100: "#DFF6C6",
                            200: "#92A9C1",
                            500: "#6EB700",
                            600: "#64A500",
                            700: "#5E9C00",
                            800: "#528800",
                            900: "#487800",
                            reverse: "#FFFFFF"
                        },
                        amber: {
                            10: "#F0F2F5",
                            20: "#F6F4ED",
                            100: "#FFF0C1",
                            200: "#92A9C1",
                            500: "#E1AE01",
                            600: "#CD9E00",
                            700: "#C49700",
                            800: "#B88E00",
                            900: "#A37E00",
                            reverse: "#FFFFFF"
                        },
                        orange: {
                            10: "#F0F2F5",
                            20: "#F5F5EF",
                            100: "#FFECCF",
                            200: "#92A9C1",
                            500: "#EC6800",
                            600: "#E16300",
                            700: "#CE5B00",
                            800: "#BE5400",
                            900: "#B54F00",
                            reverse: "#FFFFFF"
                        },
                        deep_orange: {
                            10: "#F0F2F5",
                            20: "#FDF5F5",
                            100: "#FFE8E0",
                            200: "#92A9C1",
                            500: "#E45300",
                            600: "#CD4A00",
                            700: "#C24702",
                            800: "#B84200",
                            900: "#AC3E00",
                            reverse: "#FFFFFF"
                        },
                        brown: {
                            10: "#F0F2F5",
                            20: "#F7F1EF",
                            100: "#F2EAE7",
                            200: "#92A9C1",
                            500: "#924B32",
                            600: "#8C462D",
                            700: "#7F3D25",
                            800: "#75361F",
                            900: "#692E19",
                            reverse: "#FFFFFF"
                        },
                        grey: {
                            10: "#F0F2F5",
                            20: "#F4F4F4",
                            100: "#E5E5E5",
                            200: "#92A9C1",
                            500: "#7A7A7A",
                            600: "#6B6B6B",
                            700: "#646464",
                            800: "#5B5B5B",
                            900: "#505050",
                            reverse: "#FFFFFF"
                        },
                        blue_grey: {
                            10: "#F0F2F5",
                            20: "#F2F7F8",
                            100: "#DCEDF6",
                            200: "#92A9C1",
                            500: "#447991",
                            600: "#3C7189",
                            700: "#32657C",
                            800: "#2A5A70",
                            900: "#27556A",
                            reverse: "#FFFFFF"
                        },
                        black: {
                            10: "#F0F2F5",
                            20: "#F2F2F2",
                            100: "#E9E9E9",
                            200: "#92A9C1",
                            500: "#2A2A2A",
                            600: "#313131",
                            700: "#454545",
                            800: "#525252",
                            900: "#5B5B5B",
                            reverse: "#FFFFFF"
                        }
                    }, this.Oa = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i
                } catch (t) {}
            }
            var i = t.prototype;
            return i.colors = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = {};
                try {
                    var e, s = !0 !== i ? g.Plugin.get_customization("color", "chatbox") : {},
                        c = this.qa[t] || this.qa[this.Ia];
                    for (e in this.Sa(s, c), s) n[e] = {
                        hex: s[e],
                        rgba: this.Da.Mt(this, s[e])
                    }
                } catch (t) {} finally {
                    return n
                }
            }, i.Sa = function(t, i) {
                try {
                    for (var n in i) t[n] || (t[n] = i[n])
                } catch (t) {}
            }, i.Da = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = "rgba(0, 0, 0, 1)";
                try {
                    var e = [0, 0, 0],
                        s = t.match(this.Oa);
                    s && (e[0] = parseInt(s[1], this.Aa), e[1] = parseInt(s[2], this.Aa), e[2] = parseInt(s[3], this.Aa)), n = "rgba(" + "".concat(e[0], ", ") + "".concat(e[1], ", ") + "".concat(e[2], ", ") + "".concat(i) + ")"
                } catch (t) {} finally {
                    return n
                }
            }, t
        }());
        g.Theme = l;
        var u = new(function() {
            function t() {
                try {
                    this.ns = "CrispPlugin"
                } catch (t) {}
            }
            var i = t.prototype;
            return i.get_triggers = function() {
                var t = {};
                try {
                    var i, t = (null === (i = g.Base.mc.plugins["urn:crisp.im:triggers:0"]) || void 0 === i || null === (i = i.settings) || void 0 === i ? void 0 : i.triggers) || {}
                } catch (t) {} finally {
                    return t
                }
            }, i.get_customization = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = null;
                try {
                    var s, e = (null === (s = g.Base.mc.plugins["urn:crisp.im:customization:0"]) || void 0 === s || null === (s = s.settings) || void 0 === s || null === (s = s[t]) || void 0 === s ? void 0 : s[i]) || {};
                    n && (e = e[n] || null)
                } catch (t) {} finally {
                    return e
                }
            }, t
        }());
        g.Plugin = u;
        var f = new(function() {
            function t() {
                try {
                    this.ns = "CrispSound", this.Ra = {
                        events: ["chat-message-receive", "chat-message-action"],
                        call: ["call-established", "call-hangup", "call-ring"]
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.stop(), this.ht()
                } catch (t) {}
            }, i.allow = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    this.Ba = t
                } catch (t) {}
            }, i.mute = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    this.Na = t
                } catch (t) {}
            }, i.initialize = function(t) {
                try {
                    if (!1 === this.Ba) return;
                    this.Ma[t] = this.Ma[t] || {};
                    for (var i = this.Ra[t], n = 0; n < i.length; n++) void 0 === this.Ma[t][i[n]] && this.Ta(t, i[n])
                } catch (t) {}
            }, i.start = function(n, e) {
                var s = this,
                    c = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 50;
                try {
                    if (!1 === this.Ba) return;
                    if (!0 === g.Feature.has_html_audio() && !0 === this.Ua(n)) {
                        var t = this.Ra[n];
                        if (void 0 === t) throw new Error("Subset does not exist: ".concat(n));
                        if (-1 === t.indexOf(e)) throw new Error("Sound does not exist: ".concat(e, " in subset ").concat(n));
                        this.stop(), this.Ta(n, e, function(t) {
                            var i;
                            null !== s.Pa && ("suspended" === s.Pa.state && s.Pa.resume(), (i = s.Pa.createGain()).gain.setValueAtTime(a / 100, 0), i.connect(s.Pa.destination), s.La = s.Pa.createBufferSource(), s.La.buffer = t, s.La.loop = c, s.La.connect(i), s.La.start(), s.Ja = n, s.Va = e)
                        }, function(t) {})
                    }
                } catch (t) {}
            }, i.stop = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                try {
                    null === this.La || null !== t && t !== this.Ja || null !== i && i !== this.Va || (this.La.stop(), this.La = null, this.Ja = null, this.Va = null)
                } catch (t) {}
            }, i.Ta = function(i, n) {
                var t, e, s = this,
                    c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function() {},
                    a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {};
                try {
                    this.Ma[i] = this.Ma[i] || {}, this.Wa[i] = this.Wa[i] || {}, void 0 === this.Wa[i][n] ? (this.Wa[i][n] = {
                        success: [c],
                        error: [a]
                    }, void 0 !== this.Ma[i][n] ? this.Ha("success", i, n, this.Ma[i][n]) : (t = this.Ka(i, n)) && ((e = new window.XMLHttpRequest).open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() {
                        null === s.Pa && (s.Pa = s.Ga()), null !== s.Pa ? s.Pa.decodeAudioData(e.response, function(t) {
                            s.Ma[i][n] = t, s.Ha("success", i, n, t)
                        }, function(t) {
                            s.Ha("error", i, n, t)
                        }) : s.Ha("error", i, n)
                    }, e.onerror = function(t) {
                        s.Ha("error", i, n, t)
                    }, e.send())) : (this.Wa[i][n].success.push(c), this.Wa[i][n].error.push(a))
                } catch (t) {}
            }, i.Ha = function(t, i, n) {
                var e, s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    c = null === (e = this.Wa[i]) || void 0 === e ? void 0 : e[n];
                if (void 0 !== c) {
                    for (var a = 0; a < c[t].length; a++) c[t][a](s);
                    delete this.Wa[i][n]
                }
            }, i.Ka = function(t, i) {
                var n = null;
                try {
                    var e = g.Feature.html_audio_format();
                    null !== e && (n = "".concat(g.Base.Ya, "/static/sounds/").concat(t, "/") + "".concat(i, ".").concat(e, "?").concat(g.Base.Za))
                } catch (t) {} finally {
                    return n
                }
            }, i.Ga = function() {
                var t = null;
                try {
                    try {
                        !0 === g.Event.Xa && "function" == typeof window.AudioContext && (t = new window.AudioContext)
                    } catch (t) {}
                } catch (t) {} finally {
                    return t
                }
            }, i.Ua = function(t) {
                var i = !0;
                try {
                    var n = !this.Na && !0,
                        e = "call" === t || !0 !== g.Library.crisp.client.Call.is_ongoing(),
                        i = n && e && !0
                } catch (t) {} finally {
                    return i
                }
            }, i.ht = function() {
                try {
                    this.Ba = !0, this.Na = !1, this.Pa = null, this.La = null, this.Ja = null, this.Va = null, this.Ma = {}, this.Wa = {}
                } catch (t) {}
            }, t
        }());
        g.Sound = f;
        var d = new(function() {
            function t() {
                try {
                    this.ns = "CrispLocale", this.Qa = "en", this.tr = "ltr", this.ir = ["af", "ar-ae", "ar-sa", "ar-ye", "ar", "az", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fo", "fr", "gu", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "ko", "lt", "lv", "ml", "mn", "ms", "nl-be", "nl", "no", "pl", "ps", "pt-br", "pt", "ro", "ru", "sk", "sl", "sr-cyrl-cs", "sr", "sv", "ta", "th", "tr", "uk", "vi", "zh-hk", "zh-tw", "zh"], this.nr = "en", this.er = ["en", "fr", "de", "es", "fi", "nl", "pt", "tr", "pl", "ru", "zh"], this.sr = this.ir, this.cr = ["ltr", "rtl"], this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.detect = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    i = this.Qa;
                try {
                    var n, e, s = [];
                    for (t.length && (this.sr = g.Utility.intersect(t, this.ir), 0 < this.sr.length && -1 === this.sr.indexOf(i) && (i = this.Qa = this.sr[0])), n = 0; n < g.Base.ar.length; n++)(e = g.Base.ar[n]) && (s.push(e.toLowerCase()), -1 !== e.indexOf("-") && (e = e.split("-")[0]) && s.push(e.toLowerCase()));
                    for (n = 0; n < s.length; n++)
                        if (-1 !== this.sr.indexOf(s[n])) {
                            i = s[n];
                            break
                        }
                } catch (t) {} finally {
                    return i
                }
            }, i.load = function(t, i) {
                var n = this;
                try {
                    var e = t; - 1 === this.sr.indexOf(t) && (e = this.Qa), null !== this.rr && this.rr._meta.locale_code !== t && (this.rr = null), null === this.rr ? g.Base.load_dependency("locale", "locales/".concat(e, ".js"), function(t) {
                        try {
                            n.or(e, t, i)
                        } catch (t) {}
                    }) : "function" == typeof i && i()
                } catch (t) {}
            }, i.name = function() {
                var t = null;
                try {
                    if (null === this.rr) throw new Error("Cannot get locale name, locale data not loaded");
                    t = this.rr._meta.locale_name
                } catch (t) {} finally {
                    return t
                }
            }, i.code = function() {
                var t = null;
                try {
                    if (null === this.rr) throw new Error("Cannot get locale code, locale data not loaded");
                    t = this.rr._meta.locale_code
                } catch (t) {} finally {
                    return t
                }
            }, i.direction = function() {
                var t = null;
                try {
                    if (null === this.rr) throw new Error("Cannot get locale direction, locale data not loaded");
                    t = this.rr._meta.locale_direction, -1 === this.cr.indexOf(t) && (t = this.tr)
                } catch (t) {} finally {
                    return t
                }
            }, i.text = function(t, i) {
                var n, e, s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                    c = null;
                try {
                    if ("object" == typeof i ? (n = i[0], e = i[1]) : n = e = i, null === this.rr) throw new Error("Cannot get locale text, locale data not loaded");
                    if (void 0 === this.rr._strings[t]) throw new Error("Locale text group not found: ".concat(t));
                    if (void 0 === this.rr._strings[t][e]) throw new Error("Locale text namespace not found in group: " + "".concat(e, " in ").concat(t));
                    c = g.Plugin.get_customization("text", t, n) || this.rr._strings[t][e], c = g.Library.crisp.web.Parse.replace(c, s), c = this.hr(c)
                } catch (t) {} finally {
                    return c
                }
            }, i.web = function() {
                var t = null;
                try {
                    var t = this.nr,
                        i = this.code();
                    !0 === this.er.includes(i) && (t = i)
                } catch (t) {} finally {
                    return t
                }
            }, i.or = function(t, i, n) {
                try {
                    if (null !== this.rr) throw new Error("Locale has already been loaded (double requested handled?)");
                    if ("object" != typeof i) throw new Error("Did not receive a proper locale data file");
                    if (i._meta.locale_code !== t) throw new Error("Received a mismatching locale code, expected: ".concat(t));
                    this.rr = i, "function" == typeof n && n()
                } catch (t) {} finally {
                    return null
                }
            }, i.hr = function(i) {
                var n = null;
                try {
                    try {
                        n = decodeURIComponent(escape(i))
                    } catch (t) {
                        n = i
                    }
                } catch (t) {} finally {
                    return n
                }
            }, i.ht = function() {
                try {
                    this.rr = null
                } catch (t) {}
            }, t
        }());
        g.Locale = d;
        var v = new(function() {
            function t() {
                try {
                    this.ns = "CrispAudio", this.lr = 1, this.ur = 2, this.fr = .5
                } catch (t) {}
            }
            var i = t.prototype;
            return i.directive = function(i) {
                var n = this;
                try {
                    var t, e = !1,
                        s = !1,
                        c = !1,
                        a = this.lr,
                        r = i.el,
                        o = i.el.querySelector(".cc-nub9"),
                        h = i.el.querySelector(".cc-7bm2"),
                        l = i.el.querySelector(".cc-xszf"),
                        u = i.el.querySelector(".cc-1lzb"),
                        f = i.el.querySelector(".cc-o0b7");
                    u && (t = u.querySelector("source"), u.addEventListener("play", function() {
                        u.playbackRate = a, r.setAttribute("data-state", !0 === c ? "playing" : "loading")
                    }), u.addEventListener("pause", function() {
                        r.setAttribute("data-state", "paused")
                    }), u.addEventListener("canplay", function() {
                        c = !0, n.dr(i, u, l, f), r.setAttribute("data-state", "playing")
                    }), u.addEventListener("stalled", function() {
                        r.setAttribute("data-state", "none")
                    }), t && t.addEventListener("error", function() {
                        u.paused || u.pause(), (s = !0) === e && alert(g.Locale.text("chat", "chat_message_audio_play_error"))
                    }), f && l && u.addEventListener("timeupdate", function(t) {
                        t.target && n.dr(i, t.target, l, f, !1)
                    }), o && o.addEventListener("click", function() {
                        try {
                            u && (e = !0, u.paused ? (!0 === s && (u.load(), s = !1), g.Utility.play_media(u)) : u.pause())
                        } catch (t) {} finally {
                            return !1
                        }
                    }), h && h.addEventListener("click", function() {
                        try {
                            (a += n.fr) > n.ur && (a = n.lr), u.playbackRate = a, h.innerText = a % 1 == 0 ? "x".concat(Math.floor(a)) : "".concat(a)
                        } catch (t) {} finally {
                            return !1
                        }
                    }))
                } catch (t) {} finally {
                    return function() {}
                }
            }, i.dr = function(t, i, n, e) {
                var s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4];
                try {
                    var c = i.duration !== 1 / 0 ? i.duration : (t.get().duration || 0) + 1,
                        a = Math.ceil(i.currentTime / c * 100),
                        r = a < 100 ? a : 0,
                        o = 0 === r && !0 !== s ? t.get().duration || 0 : Math.floor(i.currentTime);
                    n.innerText = g.Date.format_time(o), e.style.setProperty("width", "".concat(r, "%"), "important")
                } catch (t) {}
            }, t
        }());
        g.Audio = v;
        var p = new(function() {
            function t() {
                try {
                    this.ns = "CrispAvatar"
                } catch (t) {}
            }
            return t.prototype.url = function(t, i, n) {
                var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    s = "";
                try {
                    s = e ? e.substring(0, g.Base.pc.length) === g.Base.pc ? e : "".concat(g.Base.pc, "/process/thumbnail/") + "?url=".concat(encodeURIComponent(e)) + "&width=".concat(t, "&height=").concat(t) + "&".concat(g.Base.mc.website.buster) : "".concat(g.Base.pc, "/avatar/").concat(i, "/") + "".concat(n || "default", "/").concat(t, "/") + "?".concat(g.Base.mc.website.buster)
                } catch (t) {} finally {
                    return s
                }
            }, t
        }());
        g.Avatar = p;
        var y = new(function() {
            function t() {
                try {
                    this.ns = "CrispTemplate", this.vr = 600, this.pr = 600
                } catch (t) {}
            }
            var i = t.prototype;
            return i.render = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    e = "";
                try {
                    if ("function" != typeof g.Library.jade.client[t]) throw new Error("No such template: ".concat(t));
                    if ("object" != typeof i) throw new Error("Object argument is not an object");
                    if (i._e = g.Locale.text.Mt(g.Locale), !1 === g.Utility.is_empty(n))
                        for (var s in n) void 0 === i[s] && (i[s] = n[s]);
                    e = g.Library.jade.client[t](i).trim()
                } catch (t) {} finally {
                    return e
                }
            }, i.dom = function(t) {
                var i = null;
                try {
                    var n = document.createElement("div");
                    n.innerHTML = t, i = n.firstChild
                } catch (t) {} finally {
                    return i
                }
            }, i.vue = function(t) {
                var e = this;
                try {
                    var i = {
                        _f: function(t, i) {
                            return g.Library.crisp.web.Parse.format("string" == typeof t ? t : "", i)
                        },
                        _n: function(t) {
                            return g.Library.crisp.web.Name.parse_first_name("string" == typeof t ? t : "")
                        }
                    };
                    i._e = g.Locale.text.Mt(g.Locale), i._a = g.Avatar.url.Mt(g.Avatar), i.format_context = {
                        methods: {
                            filter_link_safe: g.Utility.filter_link_safe.Mt(g.Utility),
                            html_attribute: g.Library.crisp.web.Parse.attribute.Mt(g.Library.crisp.web.Parse)
                        }
                    }, i.format_time = g.Date.format_time.Mt(g.Date), i.image_url_resize = function(t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                        return g.Utility.filter_image_url_resize(t, null !== i ? i : e.vr, null !== n ? n : e.pr)
                    }, i.image_url_original = function(t) {
                        return g.Utility.filter_image_url_original(t)
                    }, i.current_time = function() {
                        return (new Date).getTime()
                    }, g.Library.vue.createApp({
                        $store: g.Store.$store,
                        $events: g.Store.$events,
                        $render: i
                    }).directive("crisp-date", g.Date.directive.Mt(g.Date)).directive("crisp-audio", g.Audio.directive.Mt(g.Audio)).directive("crisp-accessibility", g.Accessibility.directive.Mt(g.Accessibility)).mount(t)
                } catch (t) {}
            }, t
        }());
        g.Template = y;
        var m = new(function() {
            function t() {
                try {
                    this.ns = "CrispBroker", this.yr = 1, this.mr = {
                        chat: {
                            country: null,
                            locale: "en",
                            theme: "default",
                            theme_text: "default",
                            theme_welcome: "default",
                            tile: "default",
                            allowed_pages: [],
                            blocked_pages: [],
                            blocked_locales: [],
                            last_operator_face: !1,
                            ongoing_operator_face: !0,
                            activity_metrics: !0,
                            operator_privacy: !1,
                            availability_tooltip: !1,
                            hide_vacation: !1,
                            hide_on_away: !1,
                            hide_on_mobile: !1,
                            position_reverse: !1,
                            email_visitors: !0,
                            phone_visitors: !1,
                            force_identify: !1,
                            ignore_privacy: !1,
                            visitor_compose: !0,
                            file_transfer: !0,
                            helpdesk_link: !0,
                            helpdesk_only: !1,
                            status_health_dead: !0,
                            wait_game: !0
                        },
                        website: {
                            name: "",
                            domain: "",
                            mailer: "",
                            buster: 1,
                            count_operators: 0,
                            active_operators: [],
                            response_metrics: {},
                            last_available: g.Date.timestamp(),
                            status: null,
                            trial: !1
                        },
                        channels: {},
                        plugins: {}
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function(t, i, n, e, s, c, a, r, o, h, l, u, f, d) {
                var v = !(14 < arguments.length && void 0 !== arguments[14]) || arguments[14];
                try {
                    g.Library.crisp.client.init({
                        environment: t,
                        url_relay_client: i,
                        url_relay_stream: n,
                        url_go: e,
                        website_domain: s,
                        website_id: c,
                        token_id: a,
                        cookie_expire: r,
                        cookie_domain: o,
                        useragent: h,
                        timezone: l,
                        capabilities: u,
                        locales: f,
                        runtime_configuration: d,
                        connect_socket: v,
                        platform_name: "crisp-client",
                        platform_signature_key: "25/2z/2h/3e/33/34/2g/20/2i/1v/2t/24/24/3c/2s/22"
                    }), this._r = g.Library.crisp.client.event, g.Base.configure_console_sink(), this.gr(), this.wr(), this.br(), this.kr(), this.$r(), this.xr(), this.Fr(), this.jr(), this.Er(), this.zr(), this.Cr(), this.Ar(), this.Ir(), this.qr(), this.Or(), this.Sr(), this.Dr(), this.Rr(), this.Br(), this.Nr(), this.Mr(), this.Tr(), this.Ur(), this.Pr(), this.Lr(), this.Jr(), this.Vr(), this.Wr(), this.Hr(), this.Kr(), this.Gr(), this.Yr(), this.Zr(), this.Xr(), this.Qr(), this.no(), this.eo(), this.so(), this.co(), this.ao(), this.ro(), this.oo(), this.ho(), this.lo(), this.uo(), this.fo(), this.vo(), this.po(), this.yo(), this.mo(), this._o(), this.go()
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.gr = function() {
                var n = this;
                try {
                    this._r.subscribe("socket:state", function(t, i) {
                        i.connected === n.wo && i.failed_reconnect === n.bo || (n.wo = i.connected || !1, n.bo = i.failed_reconnect || !1, !0 === g.Chat.Vc ? g.Chat.Interface.toggle_socket_state(n.wo, n.bo) : g.Store.$store.minimized.pane.is_offline = !0 !== n.wo, !0 === n.wo && g.Event.check_activity_autokill())
                    })
                } catch (t) {}
            }, i.wr = function() {
                var n = this;
                try {
                    this._r.subscribe("session:created", function(t, i) {
                        i.error ? "invalid_website_id" === i.error && g.Base.run_error() : i.session_id && (n.ko = !0)
                    })
                } catch (t) {}
            }, i.br = function() {
                var n = this;
                try {
                    this._r.subscribe("session:joined", function(t, i) {
                        i.error ? "invalid_session" === i.error && ++n.$o <= n.yr && g.Library.crisp.client.Session.reset(function() {
                            g.Library.crisp.client.Session.create()
                        }, function() {}) : (n.Wt = i.session_id || null, n.xo = i.session_hash || null, !1 === i.socket && !0 !== i.initiated && g.Base.update_socket_cookie_key(!0), !0 === n.Fo ? (n.Fo = !1, g.Base.load_website_settings(i, function(t, i, n) {
                            !0 !== n && (g.Base.spawn_client(t), g.Library.crisp.client.Website.get_users_available())
                        })) : !0 === g.Chat.Vc && g.Chat.Message.synchronize())
                    })
                } catch (t) {}
            }, i.kr = function() {
                var e = this;
                try {
                    this._r.subscribe("session:state", function(t, i) {
                        if (1 === e.jo && (e.jo++, e.Eo = !0), !1 === g.Chat.Vc) {
                            if (null !== e.zo.master) {
                                e.zo.master(g.Utility.is_empty(i) ? null : i);
                                for (var n = 0; n < e.zo.actions.length; n++) e.zo.actions[n]();
                                e.zo.master = null, e.zo.actions = []
                            } else g.Utility.is_empty(i) ? (g.Minimized.init(!0, e.ko), g.Library.crisp.client.Session.get_request_initiate()) : g.Chat.init(i);
                            g.Utility.next_render(function() {
                                g.Base.trigger_session_loaded()
                            })
                        } else !0 === g.Chat.Vc && g.Chat.State.receive(i);
                        e.Co()
                    })
                } catch (t) {}
            }, i.$r = function() {
                try {
                    this._r.subscribe("session:error", function(t, i) {
                        "email:invalid_format" === i.type && g.Chat.Alert.update("email_invalid", "show")
                    })
                } catch (t) {}
            }, i.xr = function() {
                try {
                    this._r.subscribe("session:request:initiate", function(t, i) {})
                } catch (t) {}
            }, i.Fr = function() {
                try {
                    this._r.subscribe("session:request:purge", function(t, i) {
                        g.Action.do_session_reset()
                    })
                } catch (t) {}
            }, i.jr = function() {
                try {
                    this._r.subscribe("session:request:feedback", function(t, i) {
                        g.Chat.Feedback.request()
                    })
                } catch (t) {}
            }, i.Er = function() {
                try {
                    this._r.subscribe("session:feedback:rate", function(t, i) {})
                } catch (t) {}
            }, i.zr = function() {
                try {
                    this._r.subscribe("session:feedback:rated", function(t, i) {})
                } catch (t) {}
            }, i.Cr = function() {
                var n = this;
                try {
                    this._r.subscribe("website:users:available", function(t, i) {
                        g.Availability.receive(i.available, i.changed), 0 === n.jo ? (n.jo++, g.Library.crisp.client.Session.get_state()) : g.Availability.apply()
                    })
                } catch (t) {}
            }, i.Ar = function() {
                var n = this;
                try {
                    this._r.subscribe("message:received", function(t, i) {
                        n.mi(i)
                    })
                } catch (t) {}
            }, i.Ir = function() {
                var n = this;
                try {
                    this._r.subscribe("message:received:local", function(t, i) {
                        n.mi(i)
                    })
                } catch (t) {}
            }, i.qr = function() {
                try {
                    this._r.subscribe("message:send", function(t, i) {
                        !0 === g.Chat.Vc && g.Chat.Message.sent(i)
                    })
                } catch (t) {}
            }, i.Or = function() {
                try {
                    this._r.subscribe("message:sent", function(t, i) {
                        !0 === g.Chat.Vc && g.Chat.Message.sent_acknowledgement(i), g.Action.event("message:sent", i)
                    })
                } catch (t) {}
            }, i.Sr = function() {
                try {
                    this._r.subscribe("message:removed", function(t, i) {
                        !0 === g.Chat.Vc && g.Chat.Message.removed(i)
                    })
                } catch (t) {}
            }, i.Rr = function() {
                try {
                    this._r.subscribe("message:compose:send", function(t, i) {
                        g.Action.event("message:compose:sent", i)
                    })
                } catch (t) {}
            }, i.Br = function() {
                try {
                    this._r.subscribe("message:acknowledge:pending", function(t, i) {})
                } catch (t) {}
            }, i.Nr = function() {
                try {
                    this._r.subscribe("message:acknowledge:read:send", function(t, i) {
                        g.Chat.Message.acknowledge_read_send(i)
                    })
                } catch (t) {}
            }, i.Mr = function() {
                try {
                    this._r.subscribe("message:acknowledge:read:received", function(t, i) {})
                } catch (t) {}
            }, i.Tr = function() {
                try {
                    this._r.subscribe("message:thread", function(t, i) {})
                } catch (t) {}
            }, i.Dr = function() {
                try {
                    this._r.subscribe("message:compose:received", function(t, i) {
                        if (!0 === g.Chat.Vc && !0 !== g.Base.mc.chat.operator_privacy) switch (i.type) {
                            case "start":
                                g.Chat.Message.show_compose(i.timestamp);
                                break;
                            case "stop":
                                g.Chat.Message.hide_compose()
                        }
                        g.Action.event("message:compose:received", i)
                    })
                } catch (t) {}
            }, i.Ur = function() {
                try {
                    this._r.subscribe("history:messages", function(t, i) {
                        !0 === g.Chat.Vc && g.Chat.Message.history(i)
                    })
                } catch (t) {}
            }, i.Pr = function() {
                try {
                    this._r.subscribe("call:request:initiate", function(t, i) {
                        g.Library.crisp.client.Call.init({
                            ice: g.Base.Ao,
                            call_id: i.call_id,
                            mode: i.mode,
                            has_support: i.has_support
                        }, function() {
                            g.Call.ring(i)
                        }, function() {})
                    })
                } catch (t) {}
            }, i.Lr = function() {
                try {
                    this._r.subscribe("call:action:stopped", function(t, i) {
                        g.Call.stop()
                    })
                } catch (t) {}
            }, i.Jr = function() {
                try {
                    this._r.subscribe("call:peer:local:error", function(t, i) {
                        g.Call.error()
                    })
                } catch (t) {}
            }, i.Vr = function() {
                try {
                    this._r.subscribe("call:peer:remote:error", function(t, i) {
                        g.Call.error()
                    })
                } catch (t) {}
            }, i.Wr = function() {
                try {
                    this._r.subscribe("call:media:local:success", function(t, i) {
                        g.Call.success("media_local")
                    })
                } catch (t) {}
            }, i.Hr = function() {
                try {
                    this._r.subscribe("call:media:local:error", function(t, i) {
                        g.Call.error()
                    })
                } catch (t) {}
            }, i.Kr = function() {
                try {
                    this._r.subscribe("call:media:remote:success", function(t, i) {
                        g.Call.success("media_remote")
                    })
                } catch (t) {}
            }, i.Gr = function() {
                try {
                    this._r.subscribe("call:track:local:started", function(t, i) {
                        g.Call.toggle_media_status(i.media, !0)
                    })
                } catch (t) {}
            }, i.Yr = function() {
                try {
                    this._r.subscribe("call:track:local:ended", function(t, i) {
                        g.Call.toggle_media_status(i.media, !1)
                    })
                } catch (t) {}
            }, i.Zr = function() {
                var n = this;
                try {
                    this._r.subscribe("browsing:request:initiate", function(t, i) {
                        n.Io.push(function() {
                            g.Base.load_dependency("browsing", "browsing.js", function(t) {
                                try {
                                    g.Library.crisp.client.Browsing.init({
                                        resume: i.resume || !1,
                                        deps: {
                                            tree_mirror: t.TreeMirrorClient
                                        }
                                    }, function() {}, function() {})
                                } catch (t) {}
                            })
                        }), n.Co()
                    })
                } catch (t) {}
            }, i.Xr = function() {
                try {
                    this._r.subscribe("browsing:assist:started", function(t, i) {
                        g.Browsing.Assist.start()
                    })
                } catch (t) {}
            }, i.Qr = function() {
                try {
                    this._r.subscribe("browsing:assist:stopped", function(t, i) {
                        g.Browsing.Assist.stop()
                    })
                } catch (t) {}
            }, i.no = function() {
                try {
                    this._r.subscribe("browsing:assist:mouse", function(t, i) {
                        g.Browsing.Assist.pipe_mouse(i)
                    })
                } catch (t) {}
            }, i.eo = function() {
                try {
                    this._r.subscribe("browsing:assist:scroll", function(t, i) {
                        g.Browsing.Assist.pipe_scroll(i)
                    })
                } catch (t) {}
            }, i.so = function() {
                try {
                    this._r.subscribe("browsing:assist:click", function(t, i) {
                        g.Browsing.Assist.pipe_click(i)
                    })
                } catch (t) {}
            }, i.co = function() {
                var n = this;
                try {
                    this._r.subscribe("bucket:url:upload:generate", function(t, i) {
                        n.qo.bucket_url_upload_generate = i.id
                    })
                } catch (t) {}
            }, i.ao = function() {
                var s = this;
                try {
                    this._r.subscribe("bucket:url:upload:generated", function(t, i) {
                        var n, e;
                        s.qo.bucket_url_upload_generate === i.id && "preparing" === (g.Store.$store.chat.file.state || null) && (n = (null === (e = i.url) || void 0 === e ? void 0 : e.signed) || "", e = (null === (e = i.url) || void 0 === e ? void 0 : e.resource) || "", i = (null === (i = i.policy) || void 0 === i ? void 0 : i.size_limit) || 0, g.Chat.File.upload_generated(n, e, i))
                    })
                } catch (t) {}
            }, i.ro = function() {
                var n = this;
                try {
                    this._r.subscribe("media:animation:list", function(t, i) {
                        n.qo.media_animation_list = i.id
                    })
                } catch (t) {}
            }, i.oo = function() {
                var n = this;
                try {
                    this._r.subscribe("media:animation:listed", function(t, i) {
                        n.qo.media_animation_list === i.id && (g.Store.$store.chat.picker.gif.results = i.results)
                    })
                } catch (t) {}
            }, i.ho = function() {
                var n = this;
                try {
                    this._r.subscribe("helpdesk:article:search", function(t, i) {
                        n.qo.helpdesk_article_search = i.id
                    })
                } catch (t) {}
            }, i.lo = function() {
                var r = this;
                try {
                    this._r.subscribe("helpdesk:article:searched", function(t, i) {
                        if (r.qo.helpdesk_article_search === i.id) {
                            var n = !!i.search.query;
                            g.Chat.Helpdesk.handle_articles(i.results, i.search, n);
                            var e = g.Chat.Interface.generate_channel_link("helpdesk");
                            if (e) {
                                for (var s, c = [], a = 0; a < i.results.length; a++) s = i.results[a], c.push({
                                    title: s.title,
                                    url: "".concat(e).concat(s.locale, "/article/") + "".concat(s.slug, "/")
                                });
                                g.Action.event("helpdesk:queried", {
                                    query: i.search.query,
                                    results: c
                                })
                            }
                        }
                    })
                } catch (t) {}
            }, i.uo = function() {
                var n = this;
                try {
                    this._r.subscribe("helpdesk:article:suggest", function(t, i) {
                        n.qo.helpdesk_article_suggest = i.id
                    })
                } catch (t) {}
            }, i.fo = function() {
                var n = this;
                try {
                    this._r.subscribe("helpdesk:article:suggested", function(t, i) {
                        n.qo.helpdesk_article_suggest === i.id && g.Chat.Helpdesk.handle_autocomplete(i.results)
                    })
                } catch (t) {}
            }, i.vo = function() {
                try {
                    this._r.subscribe("helpdesk:article:report", function(t, i) {})
                } catch (t) {}
            }, i.po = function() {
                try {
                    this._r.subscribe("storage:sync:update", function(t, i) {})
                } catch (t) {}
            }, i.yo = function() {
                try {
                    this._r.subscribe("storage:sync:updated", function(t, i) {})
                } catch (t) {}
            }, i.mo = function() {
                try {
                    this._r.subscribe("trigger:fired", function(t, i) {})
                } catch (t) {}
            }, i._o = function() {
                try {
                    this._r.subscribe("issue:report", function(t, i) {})
                } catch (t) {}
            }, i.go = function() {
                try {
                    this._r.subscribe("window:history", function(t, i) {
                        g.Base.Oo = i.page_url, g.Base.So = i.page_domain;
                        i = g.Base.process_blocked_states();
                        null !== g.Base.Kc && (g.Store.$store.base.is_blocked = i, !0 === g.Chat.Vc && !1 === i && g.Chat.Interface.request_dynamic_sizing_properties()), g.Trigger.reprocess_events_page()
                    })
                } catch (t) {}
            }, i.mi = function(t) {
                try {
                    g.Chat.start_minimized();
                    var i = "network" === t.origin && !0;
                    g.Chat.Message.received(t, i, i, !0, !1), g.Action.event("message:received", t)
                } catch (t) {}
            }, i.Co = function() {
                try {
                    if (!0 === this.Eo)
                        for (; 0 < this.Io.length;) this.Io.shift()()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Wt = null, this.xo = null, this.wo = !0, this.qo = {}, this.zo = {
                        master: null,
                        actions: []
                    }, this._r = null, this.ko = !1, this.Fo = !0, this.bo = !1, this.jo = 0, this.Eo = !1, this.Io = [], this.$o = 0
                } catch (t) {}
            }, t
        }());
        g.Broker = m;
        var _ = new(function() {
            function t() {
                try {
                    this.ns = "CrispAvailability", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.receive = function() {
                var t, i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    this.Zc = i, !0 === n && (t = g.Date.timestamp(), g.Base.mc.website.last_available = t), g.Action.event("website:availability:changed", this.Zc)
                } catch (t) {}
            }, i.apply = function() {
                try {
                    var t = !0 === this.Zc ? "online" : "away";
                    g.Store.$store.base.availability = t, !1 === g.Store.$store.base.was_availability_online && "online" == t && (g.Store.$store.base.was_availability_online = !0)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Zc = !1
                } catch (t) {}
            }, t
        }());
        g.Availability = _;
        var w = new(function() {
            function t() {
                try {
                    this.ns = "CrispEvent", this.Do = 6e5, this.Ro = 36e5, this.Bo = {
                        capture: !1
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                try {
                    this.No()
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.trigger_interacted = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    this.Xa = !0, this.Mo(), !0 === t && this.To()
                } catch (t) {}
            }, i.check_activity_autokill = function() {
                try {
                    null === this.Uo && this.Po(), null === this.Lo && this.Jo()
                } catch (t) {}
            }, i.No = function() {
                try {
                    this.Vo(), this.Wo(), this.Ho()
                } catch (t) {}
            }, i.Vo = function() {
                try {
                    g.Utility.add_event_listener(this.ns, "window", "resize", function() {
                        try {
                            !0 === g.Chat.Vc ? (g.Chat.Interface.refresh_resize_page_scroll(), g.Chat.Interface.request_dynamic_sizing_properties()) : g.Base.apply_sizing()
                        } catch (t) {}
                    })
                } catch (t) {}
            }, i.Wo = function() {
                try {
                    this.Mo(), g.Utility.add_event_listener(this.ns, "window", "click", this.Ko.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "touchend", this.Ko.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "touchmove", this.Ko.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "keydown", this.Ko.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "mousemove", this.Mo.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "focus", this.Mo.Mt(this), this.Bo), g.Utility.add_event_listener(this.ns, "window", "blur", this.Mo.Mt(this), this.Bo)
                } catch (t) {}
            }, i.Ho = function() {
                try {
                    this.To()
                } catch (t) {}
            }, i.Ko = function() {
                try {
                    this.trigger_interacted()
                } catch (t) {}
            }, i.Mo = function() {
                var t = this;
                try {
                    null !== this.Uo && g.Utility.clear_timeout(this.Uo), this.Uo = g.Utility.set_timeout(function() {
                        t.Uo = null, t.Po()
                    }, this.Do), !0 === this.Go && !1 === this.Yo && g.Library.crisp.client.socket.connect(), this.Go = !1, g.Library.crisp.client.Session.mark_active()
                } catch (t) {}
            }, i.Po = function() {
                try {
                    !0 === g.Library.crisp.client.socket.connected && (this.Go = !0, g.Library.crisp.client.socket.disconnect())
                } catch (t) {}
            }, i.To = function() {
                var t = this;
                try {
                    null !== this.Lo && g.Utility.clear_timeout(this.Lo), this.Lo = g.Utility.set_timeout(function() {
                        t.Lo = null, t.Jo()
                    }, this.Ro), !0 === this.Yo && g.Library.crisp.client.socket.connect(), this.Yo = !1
                } catch (t) {}
            }, i.Jo = function() {
                try {
                    !0 !== g.Library.crisp.client.socket.connected && !0 !== this.Go || (this.Yo = !0) === g.Library.crisp.client.socket.connected && g.Library.crisp.client.socket.disconnect()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Xa = !1, this.Go = !1, this.Yo = !1, this.Uo = null, this.Lo = null
                } catch (t) {}
            }, t
        }());

        function b(t, i) {
            (null == i || i > t.length) && (i = t.length);
            for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
            return e
        }
        g.Event = w;
        var k = new(function() {
            function t() {
                try {
                    this.ns = "CrispTrigger", this.ba = 1e3, this.Zo = 18e5, this.Xo = "trigger", this.Qo = "1", this.th = ["page", "url_parameter"], this.ih = {
                        delay: this.nh,
                        leave: this.eh,
                        link: this.sh,
                        page: this.ch,
                        url_parameter: this.ah,
                        user_data: this.rh,
                        user_event: this.oh
                    }, this.hh = {
                        message: this.lh,
                        open: this.uh,
                        sound: this.fh
                    }, this.dh = {
                        page: this.vh,
                        url_parameter: this.ph
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function(t) {
                try {
                    this.yh = t, this.mh()
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.run = function(t) {
                var i = !1;
                try {
                    var n, e = null === (n = this.yh) || void 0 === n ? void 0 : n[t];
                    !0 === (null == e ? void 0 : e.enabled) && (this.ra(t, e), i = !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.do_event = function(t, i) {
                try {
                    for (var n = this._h[t] || [], e = 0; e < n.length; e++) n[e](i)
                } catch (t) {}
            }, i.mark_processed = function(t) {
                try {
                    -1 === this.gh.indexOf(t) && this.gh.push(t), g.Library.crisp.client.Storage.set_stamp_local(this.Xo, [g.Base.wh, "status", t], this.Qo)
                } catch (t) {}
            }, i.reprocess_events_page = function() {
                var t, i, n;
                try {
                    for (n in this.yh)
                        if (!0 === (t = this.yh[n]).enabled && (i = t.events))
                            for (var e in i) "page" === e && !0 === i[e].enabled && this.ch(n, t, i)
                } catch (t) {}
            }, i.mh = function() {
                try {
                    var t, i, n, e, s, c = !1;
                    for (s in this.yh)
                        if (!0 === (t = this.yh[s]).enabled && (i = t.events))
                            for (var a in i) !0 === (n = i[a]).enabled && "function" == typeof(e = this.ih[a]) && (e.Mt(this)(s, t, i, n.settings || {}), c = !0);
                    !0 === c && this.bh()
                } catch (t) {}
            }, i.ra = function(s, c) {
                var t, a = this;
                try {
                    !0 === this.kh(c) && !1 === this.$h(s) && ((t = g.Utility.clone(this.gh)).push(s), this.xh(function() {
                        g.Chat.State.propagate("trigger", t, !1, function(t) {
                            var i, n, e;
                            if (!0 === t && !0 === a.kh(c) && c.actions)
                                for (e in c.actions) !0 === (i = c.actions[e]).enabled && "function" == typeof(n = a.hh[e]) && (n.Mt(a)(s, c, i.settings || {}), g.Library.crisp.client.Trigger.fired(s, c.name))
                        })
                    }))
                } catch (t) {}
            }, i.xh = function(t) {
                var i = this;
                try {
                    g.Base.ensure_socket(function() {
                        !0 !== i.Fh && (i.Fh = !0, g.Chat.start_minimized()), t()
                    })
                } catch (t) {}
            }, i.kh = function(t) {
                var i = !1;
                try {
                    if (i = !1 === g.Base.is_invisible(), !0 === this.jh(t, "if_website_online") && (i = !0 === g.Action.is_website_available() && i), !0 === this.jh(t, "if_first_visit") && (i = "1" === g.Library.crisp.client.Storage.get_stamp_local(this.Xo, this.Eh("count")) && i), !0 === this.jh(t, "if_trigger_sole") && (i = !0 !== g.Chat.Message.zh && i), !0 === this.jh(t, "if_countries")) {
                        var n, e = !1,
                            s = null === (n = t.behaviors.if_countries) || void 0 === n ? void 0 : n.settings;
                        if (s)
                            for (var c in s) c === g.Base.mc.chat.country && (e = !0);
                        i = !0 === e && i
                    }!1 === g.Base.is_mobile_view() && !1 === this.Ch(t, "desktop") && (i = !1), !0 === g.Base.is_mobile_view() && !1 === this.Ch(t, "mobile") && (i = !1)
                } catch (t) {} finally {
                    return i
                }
            }, i.Ah = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 100;
                try {
                    !0 === t && i.after && 0 < i.after && (n = i.after * this.ba)
                } catch (t) {} finally {
                    return n
                }
            }, i.nh = function(t, i, n, e) {
                try {
                    if (e.after && 0 < e.after) {
                        var s, c = !1;
                        for (s in n)
                            if ("delay" !== s && !0 === n[s].enabled) {
                                c = !0;
                                break
                            }!1 === c && this.Ih(t, i, {
                            enabled: !0,
                            settings: e
                        })
                    }
                } catch (t) {}
            }, i.eh = function(i, n, e) {
                var s = this;
                try {
                    for (var t = !0, c = 0; c < this.th.length; c++) {
                        var a, r = this.th[c];
                        if (!0 === (null === (a = e[r]) || void 0 === a ? void 0 : a.enabled) && !1 === (t = this.dh[r].Mt(this)(e))) break
                    }!0 === t && (g.Utility.remove_event_listener(this.ns, "window", "mouseout"), g.Utility.add_event_listener(this.ns, "window", "mouseout", function(t) {
                        try {
                            !0 === s.qh && !t.relatedTarget && !t.toElement && t.clientY <= s.Oh && (s.qh = !1, null === s.Sh && (s.Sh = s.Ih(i, n, e.delay)))
                        } catch (t) {}
                    }), g.Utility.remove_event_listener(this.ns, "window", "mouseover"), g.Utility.add_event_listener(this.ns, "window", "mouseover", function() {
                        try {
                            !0 !== s.qh && (s.qh = !0, null !== s.Sh && (g.Utility.clear_timeout(s.Sh), s.Sh = null))
                        } catch (t) {}
                    }))
                } catch (t) {}
            }, i.sh = function(a, r, o, h) {
                var t, l = this;
                try {
                    0 < (null === (t = h.ids) || void 0 === t ? void 0 : t.length) && g.Utility.add_event_listener(this.ns, "document", "click", function(t) {
                        try {
                            if (null != t && t.target && "a" === (t.target.nodeName || "").toLowerCase())
                                for (var i = 0; i < h.ids.length; i++) {
                                    var n = document.getElementById(h.ids[i]),
                                        e = "function" == typeof document.querySelectorAll ? document.querySelectorAll(h.ids[i]) : null,
                                        s = !1;
                                    if (0 < (null == e ? void 0 : e.length))
                                        for (var c = 0; c < e.length; c++)
                                            if (e[c] === t.target) {
                                                s = !0;
                                                break
                                            }
                                    if (n === t.target || !0 === s) {
                                        l.Ih(a, r, o.delay);
                                        break
                                    }
                                }
                        } catch (t) {}
                    })
                } catch (t) {}
            }, i.ch = function(t, i, n) {
                var e;
                try {
                    !0 !== (null === (e = n.leave) || void 0 === e ? void 0 : e.enabled) && !0 === this.vh(n) && this.Ih(t, i, n.delay)
                } catch (t) {}
            }, i.ah = function(t, i, n) {
                var e;
                try {
                    !0 !== (null === (e = n.leave) || void 0 === e ? void 0 : e.enabled) && !0 === this.ph(n) && this.Ih(t, i, n.delay)
                } catch (t) {}
            }, i.rh = function(n, e, s, c) {
                var a = this;
                try {
                    c.points && 0 < g.Utility.keys(c.points).length && this.Dh("user_data", function(t) {
                        var i = "".concat(t.value);
                        t.key && i && "".concat(c.points[t.key]) === i && a.Ih(n, e, s.delay)
                    })
                } catch (t) {}
            }, i.oh = function(i, n, e, s) {
                var t, c = this;
                try {
                    0 < (null === (t = s.texts) || void 0 === t ? void 0 : t.length) && this.Dh("user_event", function(t) {
                        -1 !== s.texts.indexOf(t.text) && c.Ih(i, n, e.delay)
                    })
                } catch (t) {}
            }, i.lh = function(t, i, n) {
                var e, s, c;
                try {
                    !n || (e = (n[g.Locale.code()] || n.default || "").trim()) && (s = g.Utility.to_hashcode("trigger/".concat(t)), !(c = !1) === this.jh(i, "show_as_website") && (c = !0), g.Action.do_message_show("text", e, s, c))
                } catch (t) {}
            }, i.uh = function(t, i) {
                try {
                    g.Action.do_chat_open()
                } catch (t) {}
            }, i.fh = function(t, i) {
                try {
                    g.Sound.start("events", "chat-message-receive")
                } catch (t) {}
            }, i.vh = function(t) {
                var i = !1;
                try {
                    var n, e, s = null === (n = t.page) || void 0 === n ? void 0 : n.settings;
                    0 < (null == s || null === (e = s.urls) || void 0 === e ? void 0 : e.length) && (i = g.Utility.compare_page_rules(g.Base.Oo, s.urls))
                } catch (t) {} finally {
                    return i
                }
            }, i.ph = function(t) {
                var i, n = !1;
                try {
                    var e, s = (null === (e = t.url_parameter) || void 0 === e ? void 0 : e.settings) || {},
                        c = s.parameters || {};
                    if (0 < g.Utility.keys(c).length) {
                        for (var a, r = document.location.search || "", o = r.slice(r.indexOf("?") + 1).split("&"), h = {}, l = 0; l < o.length; l++) {
                            var u = (i = o[l].split("="), function(t) {
                                    if (Array.isArray(t)) return t
                                }(i) || function(t, i) {
                                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != n) {
                                        var e, s, c, a, r = [],
                                            o = !0,
                                            h = !1;
                                        try {
                                            for (c = (n = n.call(t)).next, 0; !(o = (e = c.call(n)).done) && (r.push(e.value), 2 !== r.length); o = !0);
                                        } catch (t) {
                                            h = !0, s = t
                                        } finally {
                                            try {
                                                if (!o && null != n.return && (a = n.return(), Object(a) !== a)) return
                                            } finally {
                                                if (h) throw s
                                            }
                                        }
                                        return r
                                    }
                                }(i) || function(t, i) {
                                    if (t) {
                                        if ("string" == typeof t) return b(t, 2);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, 2) : void 0
                                    }
                                }(i) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                f = u[0],
                                d = u[1];
                            f && (h[f.toLowerCase()] = decodeURIComponent(d || "").toLowerCase())
                        }
                        for (a in s.parameters) {
                            var v = a.toLowerCase(),
                                p = s.parameters[v].toLowerCase() + "";
                            if (h[v] === p) {
                                n = !0;
                                break
                            }
                        }
                    }
                } catch (t) {} finally {
                    return n
                }
            }, i.Ih = function(t, i) {
                var n = this,
                    e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    s = null;
                try {
                    s = g.Utility.set_timeout(function() {
                        n.ra(t, i)
                    }, this.Ah(null == e ? void 0 : e.enabled, null == e ? void 0 : e.settings))
                } catch (t) {} finally {
                    return s
                }
            }, i.Dh = function(t, i) {
                try {
                    this._h[t] = this._h[t] || [], this._h[t].push(i)
                } catch (t) {}
            }, i.jh = function(t, i) {
                var n, e = !1;
                try {
                    !0 === (null === (n = t.behaviors) || void 0 === n || null === (n = n[i]) || void 0 === n ? void 0 : n.enabled) && (e = !0)
                } catch (t) {} finally {
                    return e
                }
            }, i.$h = function(t) {
                var i = !1;
                try {
                    1 != (i = -1 !== this.gh.indexOf(t) && !0) && (i = g.Library.crisp.client.Storage.get_stamp_local(this.Xo, [g.Base.wh, "status", t]) === this.Qo && !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.Ch = function(t, i) {
                var n, e = !0;
                try {
                    !1 === (null === (n = t.platforms) || void 0 === n || null === (n = n[i]) || void 0 === n ? void 0 : n.enabled) && (e = !1)
                } catch (t) {} finally {
                    return e
                }
            }, i.bh = function() {
                try {
                    var t = this.Eh("last"),
                        i = this.Eh("count"),
                        n = parseInt(g.Library.crisp.client.Storage.get_stamp_local(this.Xo, t) || "0", 10),
                        e = parseInt(g.Library.crisp.client.Storage.get_stamp_local(this.Xo, i) || "0", 10),
                        s = g.Date.timestamp();
                    (isNaN(n) || isNaN(e) || e <= 0 || s - n >= this.Zo) && (e += 1, n = s, g.Library.crisp.client.Storage.set_stamp_local(this.Xo, i, "".concat(e))), g.Library.crisp.client.Storage.set_stamp_local(this.Xo, t, "".concat(s))
                } catch (t) {}
            }, i.Eh = function(t) {
                var i = [];
                try {
                    i = [g.Base.wh, "visit", t]
                } catch (t) {} finally {
                    return i
                }
            }, i.ht = function() {
                try {
                    this.gh = [], this.yh = null, this.Fh = !1, this.qh = !1, this.Sh = null, this.Oh = 10, this._h = {}
                } catch (t) {}
            }, t
        }());
        g.Trigger = k;
        var $ = new(function() {
            function t() {
                try {
                    this.ns = "CrispBase", this.Rh = 600, this.Bh = 480, this.Nh = 720, this.Mh = 540, this.Th = 840, this.Uh = 640, this.Ph = 6e5, this.Lh = 6e5, this.Jh = 1728e5, this.Vh = 1e3, this.Wh = 1e4, this.Hh = 3, this.Kh = /_/g, this.Gh = {
                        socket: !0,
                        buster: 1
                    }, this.Yh = {
                        other: {
                            container_index: 1e6
                        }
                    }, this.Zh = {
                        childList: !0,
                        attributes: !1,
                        subtree: !1,
                        characterData: !1
                    }, this.Xh = /^(?:https?:[\/]*)?([^\/]+)(?:\/.*)?$/i, this.Qh(), this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                var i = this,
                    t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                try {
                    !1 === this.Vc && (this.Vc = !0, this.Jc = t.dollar_crisp || null, this.tl = t.project_name || null, this.il = t.url_relay_client || null, this.nl = t.url_relay_stream || null, this.sl = t.url_website || null, this.cl = t.url_go || null, this.pc = t.url_image || null, this.al = t.url_game || null, this.Ya = t.url_assets || null, this.Ao = t.rtc_ice || null, this.rl = t.socket_affinity || null, this.ol = t.client_environment || null, this.Za = t.client_revision || null, this.yc = t.website_domain || null, this.wh = t.website_id || null, this.hl = t.token_id || null, this.ll = t.cookie_expire || null, this.ul = t.cookie_domain || null, this.Oo = t.page_url || null, this.So = t.page_domain || null, this.fl = t.browser_useragent || null, this.dl = t.browser_timezone || null, this.vl = t.browser_capabilities || null, this.ar = t.browser_locales || null, this.pl = t.ready_trigger || null, this.yl = t.reset_handler || null, this.ml = t.runtime_configuration || {}, g.Compatibility.schedule_warn_incompatible(!1), this._l(function(t) {
                        i.gl = t.socket, i.wl = t.buster || 1, i.bl = t.endpoints || {};
                        t = -1 === document.cookie.indexOf(i.kl(!0)) && !1 !== i.gl && !0;
                        !0 === (t = !1 === t && !0 === i.ml.lock_maximized || t) ? i.$l() : i.xl(), g.Event.init()
                    }, function(t) {
                        "invalid_website_id" === t && i.run_error()
                    }))
                } catch (t) {}
            }, i.reset = function() {
                try {
                    var t = this.yl;
                    g.Utility.reset_instance_children(g, this), this.ht(), this.Qh(), this.yl = t
                } catch (t) {}
            }, i.spawn_client = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    this.Fl(), this.mc = t, g.Library.crisp.web.init({
                        template: g.Template,
                        config: {
                            url: {
                                crisp_image: this.pc
                            },
                            runtime: this.ml
                        }
                    }), !0 !== i && (g.Library.crisp.client.Config.set_ignore_privacy(this.mc.chat.ignore_privacy), g.Library.crisp.client.Config.set_visitor_compose(this.mc.chat.visitor_compose)), g.Trigger.init(g.Plugin.get_triggers()), this.Ac(), this.jl = g.Template.dom(g.Template.render("client", {
                        lang: g.Locale.code(),
                        direction: g.Locale.direction()
                    })), this.El = this.jl.querySelector(".cc-1s47"), this.Kc = this.jl.querySelector(".cc-tlyw"), this.insert_style(), this.zl()
                } catch (t) {}
            }, i.run_error = function() {
                var t = this;
                try {
                    g.Locale.load(g.Broker.mr.chat.locale, function() {
                        t.spawn_client(g.Broker.mr, !0), g.Minimized.init(!0, !1, !0)
                    })
                } catch (t) {}
            }, i.apply_sizing = function() {
                try {
                    g.Store.$store.base.is_mobile_view = this.is_mobile_view(), g.Store.$store.base.is_full_view = this.is_full_view(), g.Store.$store.base.is_small_view = this.is_small_view(), g.Store.$store.base.is_large_view = this.is_large_view()
                } catch (t) {}
            }, i.is_mobile_view = function() {
                var t = !1;
                try {
                    !0 === g.Base.is_full_view() && !0 === g.Feature.has_screen_touch() && (t = !0)
                } catch (t) {} finally {
                    return t
                }
            }, i.is_full_view = function() {
                var t = !1;
                try {
                    !0 === this.ml.lock_full_view && (t = !0), (window.innerHeight < this.Rh || window.innerWidth < this.Bh) && (t = !0)
                } catch (t) {} finally {
                    return t
                }
            }, i.is_small_view = function() {
                var t = !1;
                try {
                    (window.innerHeight < this.Nh || window.innerWidth < this.Mh) && (t = !0)
                } catch (t) {} finally {
                    return t
                }
            }, i.is_large_view = function() {
                var t = !1;
                try {
                    window.innerHeight >= this.Th && window.innerWidth >= this.Uh && (t = !0)
                } catch (t) {} finally {
                    return t
                }
            }, i.is_invisible = function() {
                var t = !1;
                try {
                    !0 === this.ml.lock_maximized || !0 === g.Chat.Message.zh && !0 !== this.is_activity_outdated() || (!0 === this.is_blocked() && (t = !0), !0 === this.mc.chat.hide_vacation && (t = !0), !0 === this.mc.chat.hide_on_away && !0 !== g.Store.$store.base.was_availability_online && !0 !== g.Availability.Zc && (t = !0), !0 === this.mc.chat.hide_on_mobile && !0 === this.is_mobile_view() && (t = !0))
                } catch (t) {} finally {
                    return t
                }
            }, i.is_blocked = function() {
                var t = !1;
                try {
                    t = (!0 === this.Cl || !0 === this.Al) && !0
                } catch (t) {} finally {
                    return t
                }
            }, i.is_activity_outdated = function() {
                var t = !1;
                try {
                    0 < g.Chat.Message.Il && g.Date.timestamp() - g.Chat.Message.Il >= this.Ph && (t = !0)
                } catch (t) {} finally {
                    return t
                }
            }, i.process_blocked_states = function() {
                var t = !1;
                try {
                    var i = g.Locale.code();
                    this.Cl = !(!(0 < this.mc.chat.allowed_pages.length) || g.Utility.compare_page_rules(this.Oo, this.mc.chat.allowed_pages)) || g.Utility.compare_page_rules(this.Oo, this.mc.chat.blocked_pages) && !0, this.Al = -1 !== this.mc.chat.blocked_locales.indexOf(i), t = this.is_blocked() || !1
                } catch (t) {} finally {
                    return t
                }
            }, i.trigger_session_loaded = function() {
                try {
                    if ("function" == typeof this.pl) try {
                        this.pl(), this.pl = null
                    } catch (t) {}
                    g.Action.unstack_pending(), g.Action.event("session:loaded", g.Broker.Wt), g.Compatibility.schedule_warn_incompatible(!0)
                } catch (t) {}
            }, i.update_socket_cookie_key = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                    i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    var n = this.kl(t),
                        e = !0 === i ? new Date(0) : new Date((new Date).getTime() + (!0 === t ? this.Lh : this.Jh));
                    document.cookie = "".concat(n, "; expires=").concat(e.toUTCString(), "; path=/; ") + "samesite=lax;"
                } catch (t) {}
            }, i.update_configuration = function(t) {
                var i, n, e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    typeof(null === (i = this.mc.chat) || void 0 === i ? void 0 : i[t]) == typeof e && (this.mc.chat[t] = e, null !== this.Kc && (n = t.replace(this.Kh, "-"), this.Kc.setAttribute("data-".concat(n), !0 === e ? "true" : "false")))
                } catch (t) {}
            }, i.insert_style = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                try {
                    var i, n = this.ql;
                    for (i in t)
                        if (t.hasOwnProperty(i)) {
                            n[i] = n[i] || {};
                            var e = t[i];
                            if (null !== e)
                                for (var s in e) e.hasOwnProperty(s) && (n[i][s] = e[s])
                        }
                    this.El.innerHTML = "", this.El.appendChild(g.Template.dom(g.Template.render("style_color", {
                        colors: g.Theme.colors(n.color.theme || this.mc.chat.theme, !!n.color.theme)
                    }))), this.El.appendChild(g.Template.dom(g.Template.render("style_other", {
                        container_index: ("number" == typeof n.other.container_index ? n : this.Yh).other.container_index
                    })));
                    var c = g.Plugin.get_customization("position", "chatbox");
                    g.Utility.is_empty(c) || this.El.appendChild(g.Template.dom(g.Template.render("style_position", {
                        position: c
                    })))
                } catch (t) {}
            }, i.load_dependency = function(t, i, n) {
                var e = this,
                    s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                    c = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                try {
                    var a, r, o = "".concat(t, "_handler"),
                        h = document.createElement("script");
                    h.type = "text/javascript", (h.async = !0) === s ? (a = "window.$__CRISP_INSTANCE.__spool.".concat(o), r = "".concat(i, "?callback=").concat(encodeURIComponent(a)), c && (r += "&".concat(encodeURIComponent(c))), h.src = r) : h.src = ["".concat(this.Ya, "/static/javascripts/").concat(i), "?".concat(this.Za)].join(""), this.Jc.__spool[o] = function(t) {
                        h.parentNode.removeChild(h), delete e.Jc.__spool[o], "function" == typeof n && n(t)
                    };
                    var l = document.getElementsByTagName("head");
                    null != l && l[0] && l[0].appendChild(h)
                } catch (t) {}
            }, i.load_website_settings = function(s, c) {
                var a = this,
                    t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                try {
                    this.load_dependency("website", ["".concat(this.Ya, "/settings/website/"), "".concat(encodeURIComponent(this.wh), "/")].join(""), function(t) {
                        var i, n = !(t && !t.error);
                        (t = t || {}).settings = t.settings || {};
                        var e = {
                            website: {
                                name: t.website || "",
                                domain: g.Utility.extract(a.Xh, t.domain, a.yc, 1),
                                mailer: t.mailer || "",
                                buster: s.buster || 1,
                                count_operators: s.count_operators || 0,
                                active_operators: s.active_operators || t.operators || [],
                                response_metrics: s.response_metrics || {},
                                last_available: s.last_available || g.Date.timestamp(),
                                status: s.status || null,
                                trial: t.trial || !1
                            },
                            channels: t.channels || {},
                            plugins: t.plugins || {},
                            chat: {
                                country: g.Utility.get_or_fallback(null === (i = s.context) || void 0 === i ? void 0 : i.country, null),
                                locale: g.Locale.detect(t.settings.locale ? [t.settings.locale] : []),
                                theme: g.Utility.get_or_fallback(t.settings.color_theme, "default"),
                                allowed_pages: g.Utility.get_or_fallback(t.settings.allowed_pages, []),
                                blocked_pages: g.Utility.get_or_fallback(t.settings.blocked_pages, []),
                                blocked_locales: g.Utility.get_or_fallback(t.settings.blocked_locales, []),
                                tile: g.Utility.get_or_fallback(t.settings.tile, "default", "string"),
                                last_operator_face: g.Utility.get_or_fallback(t.settings.last_operator_face, !1, "boolean"),
                                ongoing_operator_face: g.Utility.get_or_fallback(t.settings.ongoing_operator_face, !0, "boolean"),
                                activity_metrics: g.Utility.get_or_fallback(t.settings.activity_metrics, !0, "boolean"),
                                operator_privacy: g.Utility.get_or_fallback(t.settings.operator_privacy, !1, "boolean"),
                                availability_tooltip: g.Utility.get_or_fallback(t.settings.availability_tooltip, !0, "boolean"),
                                hide_vacation: g.Utility.get_or_fallback(t.settings.hide_vacation, !1, "boolean"),
                                hide_on_away: g.Utility.get_or_fallback(t.settings.hide_on_away, !1, "boolean"),
                                hide_on_mobile: g.Utility.get_or_fallback(t.settings.hide_on_mobile, !1, "boolean"),
                                position_reverse: g.Utility.get_or_fallback(t.settings.position_reverse, !1, "boolean"),
                                email_visitors: g.Utility.get_or_fallback(t.settings.email_visitors, !0, "boolean"),
                                phone_visitors: g.Utility.get_or_fallback(t.settings.phone_visitors, !0, "boolean"),
                                force_identify: g.Utility.get_or_fallback(t.settings.force_identify, !1, "boolean"),
                                ignore_privacy: g.Utility.get_or_fallback(t.settings.ignore_privacy, !1, "boolean"),
                                visitor_compose: g.Utility.get_or_fallback(t.settings.visitor_compose, !0, "boolean"),
                                file_transfer: g.Utility.get_or_fallback(t.settings.file_transfer, !0, "boolean"),
                                helpdesk_link: g.Utility.get_or_fallback(t.settings.helpdesk_link, !0, "boolean"),
                                helpdesk_only: g.Utility.get_or_fallback(t.settings.helpdesk_only, !1, "boolean"),
                                status_health_dead: g.Utility.get_or_fallback(t.settings.status_health_dead, !0, "boolean"),
                                wait_game: g.Utility.get_or_fallback(t.settings.wait_game, !1, "boolean"),
                                theme_text: g.Utility.get_or_fallback(t.settings.text_theme, "default"),
                                theme_welcome: g.Utility.get_or_fallback(t.settings.welcome_message, "default")
                            }
                        };
                        g.Locale.load(e.chat.locale, function() {
                            c(e, t, n)
                        })
                    }, !0, t || s.buster)
                } catch (t) {}
            }, i.ensure_socket = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                !0 === g.Library.crisp.client.socket.connected ? t() : !1 !== this.gl && (g.Broker.zo.actions.push(t), null === g.Broker.zo.master && (g.Broker.zo.master = function() {
                    !0 === i && g.Minimized.init(!0, !1, !1, !1)
                }), g.Library.crisp.client.socket.connect())
            }, i.configure_console_sink = function() {
                var s = this;
                try {
                    "production" === this.ol && (g.Library.crisp.client.Issue.configure({
                        project: this.tl,
                        revision: this.Za,
                        environment: this.ol,
                        useragent: this.fl,
                        page: this.Oo
                    }), g.Library.logger.set_log_sink(function(t, i, n) {
                        var e;
                        "error" === t && ("object" == typeof(null === (e = s.Jc) || void 0 === e ? void 0 : e.__spool) && (s.Jc.__spool.error_last = {
                            ns: i,
                            value: n
                        }), (e = g.Date.timestamp()) - s.Ol >= s.Wh && (s.Ol = e, g.Library.crisp.client.Issue.report(t, i, n)))
                    }))
                } catch (t) {}
            }, i.uninsert_client = function() {
                try {
                    "MutationObserver" in window && (this.Sl("html"), this.Sl("body")), g.Library.crisp.client.socket.disconnect(), this.Fl()
                } catch (t) {}
            }, i.re_trigger_loader = function() {
                try {
                    "function" == typeof this.yl && this.yl()
                } catch (t) {}
            }, i._l = function(n, e) {
                var s = this;
                try {
                    var t = new Date,
                        i = "".concat(t.getFullYear(), "-").concat(t.getMonth(), "-").concat(t.getDate(), "-") + "".concat(t.getHours(), "-").concat(t.getMinutes());
                    this.load_dependency("website", ["".concat(this.Ya, "/settings/website/"), "".concat(encodeURIComponent(this.wh), "/prelude/")].join(""), function(t) {
                        var i = null != t && t.error ? t.error : null;
                        i ? e(i) : n(t || s.Gh)
                    }, !0, i)
                } catch (t) {}
            }, i.zl = function() {
                try {
                    this.Dl(), "MutationObserver" in window && (this.Rl(document.documentElement), this.Bl(document.body))
                } catch (t) {}
            }, i.Dl = function() {
                try {
                    var t = document.querySelector("body");
                    t && t.appendChild(this.jl), g.Template.vue(this.jl)
                } catch (t) {}
            }, i.Fl = function() {
                try {
                    null !== this.jl && (this.jl.remove(), this.jl = null)
                } catch (t) {}
            }, i.$l = function() {
                try {
                    this.Nl(!0)
                } catch (t) {}
            }, i.xl = function() {
                var e = this;
                try {
                    this.Nl(!1), this.load_website_settings({}, function(t, i, n) {
                        !0 !== n && g.Availability.receive(i.online || !1, !1), e.spawn_client(t), g.Minimized.init(!1, !1, n), g.Utility.next_render(function() {
                            e.trigger_session_loaded()
                        })
                    }, this.wl)
                } catch (t) {}
            }, i.Nl = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    var i = this.bl.socket || {},
                        n = (!0 === this.rl ? i.client : null) || this.il,
                        e = (!0 === this.rl ? i.stream : null) || this.nl;
                    g.Broker.init(this.ol, n, e, this.cl, this.yc, this.wh, this.hl, this.ll, this.ul, this.fl, this.dl, this.vl, this.ar, this.ml, t)
                } catch (t) {}
            }, i.Rl = function(t) {
                var c = this;
                try {
                    this.Sl("html"), this.Ml.html = new window.MutationObserver(function(t) {
                        for (var i = 0; i < ((null == t ? void 0 : t.length) || 0); i++) {
                            var n = t[i];
                            if ("childList" === n.type && n.addedNodes)
                                for (var e = 0; e < n.addedNodes.length; e++) {
                                    var s = n.addedNodes[e];
                                    if ("body" === (s.tagName || "").toLowerCase()) {
                                        c.Bl(s), c.Tl();
                                        break
                                    }
                                }
                        }
                    }), this.Ml.html.observe(t, this.Zh)
                } catch (t) {}
            }, i.Bl = function(t) {
                var s = this;
                try {
                    this.Sl("body"), this.Ml.body = new window.MutationObserver(function(t) {
                        for (var i = 0; i < ((null == t ? void 0 : t.length) || 0); i++) {
                            var n = t[i];
                            if ("childList" === n.type && n.removedNodes)
                                for (var e = 0; e < n.removedNodes.length; e++)
                                    if (n.removedNodes[e] === s.jl) {
                                        s.Tl();
                                        break
                                    }
                        }
                    }), this.Ml.body.observe(t, this.Zh)
                } catch (t) {}
            }, i.Sl = function(t) {
                try {
                    var i = this.Ml[t];
                    void 0 !== i && (i.disconnect(), delete this.Ml[t])
                } catch (t) {}
            }, i.Tl = function() {
                var t = this;
                try {
                    null === this.Ul && (this.Ul = g.Utility.set_timeout(function() {
                        t.Ul = null, t.Dl()
                    }, this.Vh))
                } catch (t) {}
            }, i.kl = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                    i = null;
                try {
                    i = "".concat(encodeURIComponent("crisp-client/socket/" + this.wh), "=") + "".concat(encodeURIComponent(!0 === t ? "0" : "1"))
                } catch (t) {} finally {
                    return i
                }
            }, i.Ac = function() {
                var t = {
                    configuration: this.mc || {},
                    runtime: this.ml || {},
                    environment: {
                        smileys: {
                            "small-smile": ":)",
                            "big-smile": ":D",
                            blushing: ":$",
                            confused: "x)",
                            cool: "8)",
                            crying: ":'(",
                            embarrassed: ":/",
                            heart: "<3",
                            laughing: ":'D",
                            sad: ":(",
                            angry: ":@",
                            sick: ":S",
                            "thumbs-up": "+1",
                            surprised: ":o",
                            tongue: ":P",
                            winking: ";)"
                        },
                        url: {
                            crisp_web: this.sl,
                            crisp_image: this.pc,
                            crisp_game: this.al
                        },
                        types: {
                            file_preview: g.Magnify.Pl
                        }
                    },
                    website: {
                        id: g.Base.wh,
                        domain: g.Base.mc.website.domain,
                        name: g.Base.mc.website.name
                    },
                    is_blocked: this.process_blocked_states(),
                    is_mobile_view: this.is_mobile_view(),
                    is_full_view: this.is_full_view(),
                    is_small_view: this.is_small_view(),
                    is_large_view: this.is_large_view()
                };
                g.Utility.merge(g.Store.$store.base, t), this.Ll(), this.Jl()
            }, i.Qh = function() {
                try {
                    this.jl = null, this.El = null, this.Kc = null
                } catch (t) {}
            }, i.Ll = function() {
                try {
                    var t = [],
                        i = g.Store.$store.base.configuration.website.active_operators;
                    if (0 < i.length)
                        for (var n = 0; n < i.length; n++) n < this.Hh && t.push({
                            type: "operator",
                            identifier: i[n].user_id,
                            avatar: i[n].avatar,
                            name: g.Library.crisp.web.Name.parse_first_name(i[n].nickname)
                        });
                    t.push({
                        type: "website",
                        identifier: this.wh
                    }), g.Store.$store.base.active_operators = t
                } catch (t) {}
            }, i.Jl = function() {
                try {
                    var t, i = 0,
                        n = g.Store.$store.base.configuration,
                        e = (null === (t = n.website.active_operators) || void 0 === t ? void 0 : t.length) || 0;
                    n.website.count_operators > e && (i = n.website.count_operators - e), g.Store.$store.base.other_operators_count = i
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Vc = !1, this.mc = {}, this.Jc = null, this.tl = null, this.il = null, this.nl = null, this.sl = null, this.cl = null, this.pc = null, this.al = null, this.Ya = null, this.Ao = null, this.rl = null, this.ol = null, this.Za = null, this.yc = null, this.wh = null, this.hl = null, this.ll = null, this.ul = null, this.Oo = null, this.So = null, this.fl = null, this.dl = null, this.vl = null, this.ar = null, this.wl = 1, this.gl = !0, this.bl = {}, this.Cl = !1, this.Al = !1, this.pl = null, this.yl = null, this.ml = {}, this.Ol = 0, this.Ul = null, this.ql = {
                        color: {},
                        other: {}
                    }, this.Ml = {}
                } catch (t) {}
            }, t
        }());
        g.Base = $;
        var x = new(function() {
            function t() {
                try {
                    this.ns = "CrispMinimized", this.Event = void 0, this.Interface = void 0, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                    i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                try {
                    this.Vl(n), this.Wl(i, n, t, e), this.Vc = !0
                } catch (t) {}
            }, i.reset = function() {
                try {
                    g.Utility.reset_instance_children(g.Minimized), this.ht()
                } catch (t) {}
            }, i.Vl = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    for (var i = [g.Minimized.Interface, g.Minimized.Event], n = 0; n < i.length; n++) i[n].init(t)
                } catch (t) {}
            }, i.Wl = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                try {
                    !0 !== i ? g.Minimized.Interface.pane_authorized(t, n, e) : g.Minimized.Interface.pane_unauthorized(t, e), !0 === g.Base.ml.lock_maximized && g.Minimized.Interface.Wc()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Vc = !1
                } catch (t) {}
            }, t
        }());
        g.Minimized = x;
        var F = new(function() {
            function t() {
                try {
                    this.ns = "CrispMinimizedEvent", this.pt = ["pane_click"]
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.pane_click = function(t) {
                try {
                    var i, n, e = t.target;
                    e && ((i = e.getAttribute("data-pop")) || (n = e.closest("[data-pop]")) && (i = n.getAttribute("data-pop") || null), i ? "helpdesk:search" === i && g.Action.do_helpdesk_search() : e && !0 === e.classList.contains("cc-1rzf") ? g.Minimized.Interface.conceal_general_entice() : g.Minimized.Interface.Wc())
                } catch (t) {}
            }, i.bind_all = function() {
                try {
                    g.Store.bind_events("minimized", this.pt, this)
                } catch (t) {}
            }, t
        }());
        g.Minimized.Event = F;
        var j = new(function() {
            function t() {
                try {
                    this.ns = "CrispMinimizedInterface", this.ba = 1e3, this.Hl = .25, this.Kl = 2, this.Gl = 1e3, this.Yl = 500, this.Zl = 12e3, this.Xl = "minimized", this.Ql = "1", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    this.Wl(t)
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.pane_authorized = function() {
                var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                try {
                    var s = !1;
                    !0 === g.Base.mc.chat.availability_tooltip && (g.Store.$store.minimized.pane.general_entice.is_concealed = g.Library.crisp.client.Storage.get_stamp_local(this.Xl, [g.Base.wh, "general_entice", "conceal"]) === this.Ql && !0), !0 === g.Base.mc.chat.helpdesk_link && g.Base.mc.channels.helpdesk && g.Base.So !== g.Base.mc.channels.helpdesk && !0 === g.Library.crisp.client.socket.connected && (g.Store.$store.minimized.pane.helpdesk.url = g.Chat.Interface.generate_channel_link("helpdesk"), g.Store.$store.minimized.pane.helpdesk.only = g.Base.mc.chat.helpdesk_only && !0), this.tu("minimized_authorized", !0, i, e), this.Wc = function() {
                        var i;
                        !1 === s && (!(s = !0) === n ? (t.iu(!0), g.Event.trigger_interacted(!0), i = g.Utility.set_timeout(function() {
                            g.Broker.Wt || (alert(g.Locale.text("chat", "minimized_connect_alert_failure")), g.Library.crisp.client.socket.disconnect(), t.iu(!1), g.Action.do_chat_hide())
                        }, t.Zl), g.Broker.zo.master = function(t) {
                            g.Utility.clear_timeout(i), g.Chat.init(t)
                        }, g.Library.crisp.client.socket.connect()) : g.Chat.init())
                    }, g.Availability.apply()
                } catch (t) {}
            }, i.pane_unauthorized = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    this.tu("minimized_unauthorized", !1, t, i), this.Wc = function() {}
                } catch (t) {}
            }, i.display_general_entice = function() {
                try {
                    g.Store.$store.minimized.pane.general_entice.visible = !0
                } catch (t) {}
            }, i.conceal_general_entice = function() {
                try {
                    g.Store.$store.minimized.pane.general_entice.is_concealed = !0, g.Library.crisp.client.Storage.set_stamp_local(this.Xl, [g.Base.wh, "general_entice", "conceal"], this.Ql)
                } catch (t) {}
            }, i.tu = function(t) {
                var n = this,
                    i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                try {
                    g.Minimized.Event.bind_all();
                    var c, a, r = g.Template.dom(g.Template.render(t));
                    g.Base.Kc.innerHTML = "", g.Base.Kc.appendChild(r), g.Template.vue(r), !0 === i && (c = g.Base.mc, a = !0 !== g.Base.is_full_view() && !0 === c.chat.availability_tooltip && !0 !== g.Store.$store.minimized.pane.helpdesk.only, !0 === s && g.Feature.has_css_animations() ? (!0 === e && (g.Store.$store.minimized.pane.animate_entrance = !0, g.Utility.set_timeout(function() {
                        g.Store.$store.minimized.pane.animate_entrance = !1
                    }, this.Gl)), a && g.Utility.set_timeout(function() {
                        var t = g.Store.$store.minimized.pane;
                        n.display_general_entice();
                        var i = !0 === e ? "animate_full" : "animate_short";
                        t.general_entice[i] = !0, g.Utility.set_timeout(function() {
                            t.general_entice[i] = !1
                        }, n.Yl)
                    }, this.ba * (!0 === e ? this.Kl : this.Hl))) : a && this.display_general_entice())
                } catch (t) {}
            }, i.iu = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    g.Store.$store.minimized.pane.is_waiting = t
                } catch (t) {}
            }, i.Wl = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 !== t && g.Library.crisp.client.Message.get_message_history()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Wc = function() {}
                } catch (t) {}
            }, t
        }());
        g.Minimized.Interface = j;
        var E = new(function() {
            function t() {
                try {
                    this.ns = "CrispChat", this.Alert = void 0, this.Event = void 0, this.Feedback = void 0, this.Field = void 0, this.File = void 0, this.Frame = void 0, this.Game = void 0, this.Helpdesk = void 0, this.Intent = void 0, this.Interface = void 0, this.Message = void 0, this.Misc = void 0, this.Notification = void 0, this.Picker = void 0, this.Scroll = void 0, this.Selector = void 0, this.Speech = void 0, this.State = void 0, this.Viewport = void 0, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                try {
                    this.Vl(), null !== t && g.Chat.State.restore(t), null === t && g.Action.event("chat:initiated"), this.Wl(), g.Base.update_socket_cookie_key(!1), this.Vc = !0
                } catch (t) {}
            }, i.reset = function() {
                try {
                    g.Utility.reset_instance_children(g.Chat), this.ht()
                } catch (t) {}
            }, i.start_minimized = function() {
                try {
                    this.nu(!1)
                } catch (t) {}
            }, i.start_maximized = function() {
                try {
                    this.nu(!0)
                } catch (t) {}
            }, i.nu = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 !== this.Vc && (this.init({
                        maximized: t
                    }), g.Chat.State.propagate("maximized", t, !0))
                } catch (t) {}
            }, i.Vl = function() {
                try {
                    for (var t = [g.Chat.Alert, g.Chat.Intent, g.Chat.Field, g.Chat.Interface, g.Chat.Message, g.Chat.Misc, g.Chat.Notification, g.Chat.Scroll, g.Chat.State, g.Chat.Selector, g.Chat.Event, g.Chat.Viewport], i = 0; i < t.length; i++) t[i].init()
                } catch (t) {}
            }, i.Wl = function() {
                try {
                    g.Chat.Interface.pane(), g.Chat.Field.focus_on_foreground(), g.Availability.apply(), g.Library.crisp.client.Socket.get_state(), g.Sound.initialize("events"), g.Chat.Message.restore()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Vc = !1
                } catch (t) {}
            }, t
        }());
        g.Chat = E;
        var z = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatAlert", this.eu = {
                        warn_reply: this.su,
                        email_invalid: this.cu
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.update = function(t, i) {
                var n, e, s, c;
                try {
                    "object" == typeof t ? n = t : (n = {})[t] = i;
                    var a = g.Utility.clone(this.au);
                    for (e in n) n.hasOwnProperty(e) && (s = n[e], c = !1, void 0 !== this.au[e] && this.au[e] === s && (c = !0), !1 === (c = "lock" === this.au[e] && "unlock" !== s || c) && (a[e] = s));
                    g.Chat.State.propagate("alert", a)
                } catch (t) {}
            }, i.hook = function(t, i) {
                try {
                    var n = this.eu[i];
                    "function" == typeof n && n.Mt(this)(t)
                } catch (t) {}
            }, i.su = function(t) {
                try {
                    this.ru(t)
                } catch (t) {}
            }, i.cu = function(t) {
                try {
                    this.ru(t)
                } catch (t) {}
            }, i.ru = function(t) {
                try {
                    "show" === t ? g.Chat.Message.check_form_identify_lock() : g.Chat.Message.check_form_identify_unlock()
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.au = {}
                } catch (t) {}
            }, t
        }());
        g.Chat.Alert = z;
        var C = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatIntent", this.ou = ["identity", "game", "feedback"], this.hu = {
                        identity: this.lu,
                        game: this.uu,
                        feedback: this.fu
                    }, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.update = function(t) {
                var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                    e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                try {
                    if (-1 === this.ou.indexOf(t)) throw new Error("Unknown intent: ".concat(t));
                    !0 !== e && !1 === this.au[t] || (i = g.Utility.clone(this.au), n || !1 === n ? i[t] = n : delete i[t], g.Chat.State.propagate("intent", i))
                } catch (t) {}
            }, i.cleanup = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                try {
                    for (var i, n = 0; n < this.ou.length; n++) i = this.ou[n], (t || this.au)[i] || this.toggle(i, null)
                } catch (t) {}
            }, i.toggle = function(t) {
                var i, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default",
                    e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                try {
                    -1 === this.ou.indexOf(t) || "function" == typeof(i = this.hu[t]) && i.Mt(this)(n, e)
                } catch (t) {}
            }, i.lu = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                    i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    t ? "default" === t ? g.Chat.Message.show_identity(i) : g.Chat.Message.show_identity_field(t, i) : g.Chat.Message.hide_identity()
                } catch (t) {}
            }, i.uu = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                    i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    t ? g.Chat.Message.show_game(i) : g.Chat.Message.hide_game()
                } catch (t) {}
            }, i.fu = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "default",
                    i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    switch (t) {
                        case "default":
                            g.Chat.Message.show_feedback(i);
                            break;
                        case "submitted":
                            g.Chat.Message.show_feedback_submitted(i);
                            break;
                        default:
                            g.Chat.Message.hide_feedback()
                    }
                    g.Chat.Feedback.mark_available(!(!t || "submitted" === t))
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.au = {}
                } catch (t) {}
            }, t
        }());
        g.Chat.Intent = C;
        var A = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatPicker", this.du = 10, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.toggle = function() {
                try {
                    this.vu = null, g.Store.$store.chat.picker.is_visible = !0 !== g.Store.$store.chat.picker.is_visible, g.Store.$store.chat.picker.has_animation = !0, g.Store.$store.chat.picker.type = "smiley", !0 !== g.Store.$store.chat.picker.is_visible ? g.Chat.Field.focus_on_foreground() : g.Chat.Feedback.hide()
                } catch (t) {}
            }, i.hide = function() {
                try {
                    this.vu = null, g.Store.$store.chat.picker.is_visible = !1, g.Store.$store.chat.picker.has_animation = !1, g.Store.$store.chat.picker.gif.results = [], g.Store.$store.chat.picker.gif.input = ""
                } catch (t) {}
            }, i.show = function(t) {
                try {
                    g.Store.$store.chat.picker.type !== t && (this.hide(), g.Store.$store.chat.picker.is_visible = !0, "gif" === (g.Store.$store.chat.picker.type = t) && this.load_data_gif())
                } catch (t) {}
            }, i.load_data_gif = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                try {
                    if (null !== g.Chat.Event.pu && (g.Utility.clear_timeout(g.Chat.Event.pu), g.Chat.Event.pu = null), this.vu !== t) {
                        this.vu = t, g.Library.crisp.client.Media.get_animation_list(t), g.Store.$store.chat.picker.gif.results = [];
                        for (var i = 0; i < this.du; i++) g.Store.$store.chat.picker.gif.results.push({
                            loading: !0
                        })
                    }
                } catch (t) {}
            }, i.is_open = function() {
                var t = !1;
                try {
                    t = g.Store.$store.chat.picker.is_visible
                } catch (t) {} finally {
                    return t
                }
            }, i.ht = function() {
                try {
                    this.yu = null, this.vu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Picker = A;
        var I = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatFeedback", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.request = function() {
                try {
                    g.Chat.Intent.update("feedback")
                } catch (t) {}
            }, i.toggle = function() {
                try {
                    g.Store.$store.chat.feedback.is_visible = !0 !== g.Store.$store.chat.feedback.is_visible, !0 !== g.Store.$store.chat.feedback.is_visible ? g.Chat.Field.focus_on_foreground() : g.Chat.Picker.hide()
                } catch (t) {}
            }, i.hide = function() {
                try {
                    g.Store.$store.chat.feedback.is_visible = !1
                } catch (t) {}
            }, i.show = function() {
                try {
                    this.hide(), g.Store.$store.chat.feedback.is_visible = !0
                } catch (t) {}
            }, i.is_open = function() {
                var t = !1;
                try {
                    t = g.Store.$store.chat.feedback.is_visible
                } catch (t) {} finally {
                    return t
                }
            }, i.mark_available = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    g.Store.$store.chat.feedback.is_available = t
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.yu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Feedback = I;
        var q = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatEvent", this.pt = ["fuzzy_wheel", "fuzzy_click", "pane_toggle_click", "pane_tooltip_new_messages_click", "pane_minimize_click", "pane_mode_click", "picker_click", "picker_toggle_click", "picker_show_click", "picker_smiley_click", "picker_gif_input_keyup", "picker_gif_input_reset", "picker_gif_item_click", "speech_record_click", "speech_cancel_click", "speech_send_click", "feedback_click", "feedback_submit_click", "feedback_toggle_click", "message_common_click", "message_text_click", "message_send_retry_click", "message_previous_click", "message_picker_button_click", "message_field_input_keydown", "message_field_input_focus", "message_field_input_blur", "message_field_send", "message_file_click", "message_carousel_wheel", "alert_email_invalid_click", "alert_warn_prompt_click", "alert_warn_reply_click", "alert_new_messages_click", "frame_previous_click", "game_stop_click", "flow_scroll", "flow_touch", "file_drop_dragover", "file_drop_dragleave", "file_drop", "file_change", "textarea_keydown", "textarea_keyup", "textarea_paste", "textarea_send_click", "header_channels_button_click", "header_channels_dropdown_click", "header_channels_dropdown_entry_click", "chat_wheel", "helpdesk_wheel", "helpdesk_search_keydown", "helpdesk_search_field_keyup", "helpdesk_search_article_click", "helpdesk_viewer_previous_click"], this.ia = 13, this.mu = 38, this._u = 40, this.ea = 9, this.gu = 70, this.wu = 500, this.bu = 500, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.message_common_click = function(t) {
                var i, n, e;
                try {
                    null != t && null !== (i = t.target) && void 0 !== i && i.href && g.Base.mc.channels.helpdesk && g.Base.So !== g.Base.mc.channels.helpdesk && !0 !== g.Feature.has_screen_touch() && (null === (n = g.Utility.acquire_channel_url_regex("helpdesk", "article", "([^/]+)/article/([^/]+)/.*")) || null != (e = t.target.href.match(n)) && e[1] && null != e && e[2] && (g.Action.do_helpdesk_article_open(e[1], e[2]), t.preventDefault()))
                } catch (t) {}
            }, i.message_text_click = function(t) {
                try {
                    var i, n = t.target;
                    !n || null != (i = n.closest(".cc-sput")) && i.href && (t.preventDefault(), g.Magnify.magnify("embed", i.href))
                } catch (t) {}
            }, i.message_file_click = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                try {
                    g.Magnify.magnify(t, i, n, e)
                } catch (t) {}
            }, i.message_carousel_wheel = function(t) {
                try {
                    g.Chat.Scroll.unwind_wheel(t, "cc-1nq3", "scrollLeft")
                } catch (t) {}
            }, i.message_picker_button_click = function(t, i) {
                try {
                    if ("user" !== t.from && !0 === g.Chat.Message.check_intent_send()) {
                        for (var n = !1, e = i.value, s = null, c = 0; c < t.content.choices.length; c++) {
                            var a = t.content.choices[c];
                            a.value === e ? !0 !== a.selected && (n = a.selected = !0, s = a.handler) : a.selected = !1
                        }
                        if (i.action) switch (i.action.type) {
                            case "frame":
                                g.Chat.Frame.open(i.action.target, t.content.text, {
                                    fingerprint: t.fingerprint || "",
                                    picker_id: t.content.id || "",
                                    choice_value: i.value || ""
                                });
                                break;
                            case "link":
                                g.Utility.open_link(i.action.target)
                        }!0 === n && ("function" == typeof s ? s(t) : g.Library.crisp.client.Message.update_message(t.fingerprint, t.content), g.Sound.start("events", "chat-message-action"))
                    }
                } catch (t) {}
            }, i.message_field_input_keydown = function(t, i) {
                try {
                    if (t.keyCode === this.ia) return t.preventDefault(), void this.message_field_send(i)
                } catch (t) {}
            }, i.message_field_input_focus = function() {
                try {
                    !0 === g.Base.is_mobile_view() && (g.Store.$store.chat.is_hidden_prompt = !0)
                } catch (t) {}
            }, i.message_field_input_blur = function() {
                try {
                    g.Store.$store.chat.is_hidden_prompt = !1
                } catch (t) {}
            }, i.message_field_send = function(t) {
                var i;
                try {
                    !0 !== g.Chat.Message.check_intent_send() || 0 < (i = (t.metas.field.value || "").trim()).length && ("function" == typeof t.content.handler ? t.content.handler(i) : (t.content.value = i, g.Library.crisp.client.Message.update_message(t.fingerprint, t.content)), g.Sound.start("events", "chat-message-action"), g.Utility.set_timeout(function() {
                        g.Chat.Field.focus_on_foreground()
                    }, this.bu))
                } catch (t) {}
            }, i.message_send_retry_click = function(t) {
                try {
                    !0 === g.Chat.Message.check_intent_send() && (g.Chat.Message.remove(t.fingerprint), g.Action.do_message_send(t.type, t.content))
                } catch (t) {}
            }, i.message_previous_click = function(t) {
                try {
                    g.Chat.Intent.update(t.content.previous), g.Sound.start("events", "chat-message-action")
                } catch (t) {}
            }, i.frame_previous_click = function() {
                try {
                    g.Chat.Frame.close()
                } catch (t) {}
            }, i.game_stop_click = function() {
                try {
                    g.Chat.Game.stop()
                } catch (t) {}
            }, i.fuzzy_wheel = function(t) {
                try {
                    t.stopPropagation(), t.preventDefault(), t.returnValue = !1
                } catch (t) {}
            }, i.fuzzy_click = function(t) {
                try {
                    var i = t.target;
                    i && !0 !== i.classList.contains("cc-x1l1") && !i.closest(".cc-x1l1") && g.Chat.Field.focus_on_foreground(), g.Chat.Interface.toggle_channel_dropdown(!1)
                } catch (t) {}
            }, i.pane_minimize_click = function() {
                try {
                    g.Action.do_chat_close()
                } catch (t) {}
            }, i.pane_mode_click = function(t) {
                try {
                    var i = !1;
                    switch (t) {
                        case "chat":
                            g.Store.$store.chat.mode = t, i = !0;
                            break;
                        case "helpdesk":
                            g.Action.do_helpdesk_search()
                    }
                    g.Chat.Interface.apply_chat_focus(), g.Chat.Field.focus_on_foreground(), g.Chat.Interface.toggle_channel_dropdown(!1), !0 === i && g.Chat.Interface.request_dynamic_sizing_properties()
                } catch (t) {}
            }, i.pane_toggle_click = function(t) {
                try {
                    var i = t.target;
                    i && !0 === i.classList.contains("cc-1kn9") ? g.Action.do_message_read() : g.Action.do_chat_toggle()
                } catch (t) {}
            }, i.pane_tooltip_new_messages_click = function() {
                try {
                    "chat" !== g.Store.$store.chat.mode && (g.Store.$store.chat.mode = "chat", g.Chat.Interface.request_dynamic_sizing_properties())
                } catch (t) {}
            }, i.flow_scroll = function(t) {
                try {
                    g.Chat.Interface.propagate_scroll(t.target.scrollTop), t.preventDefault(), t.stopPropagation()
                } catch (t) {}
            }, i.flow_touch = function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
            }, i.file_drop_dragover = function(t) {
                try {
                    t.preventDefault(), t.stopPropagation(), g.Chat.File.set_drop_zone(!0)
                } catch (t) {}
            }, i.file_drop_dragleave = function(t) {
                try {
                    t.preventDefault(), t.stopPropagation(), g.Chat.File.set_drop_zone(!1)
                } catch (t) {}
            }, i.file_drop = function(t) {
                var i;
                try {
                    t.preventDefault(), t.stopPropagation(), null !== (i = t.dataTransfer) && void 0 !== i && i.files && 0 < t.dataTransfer.files.length && g.Chat.File.handle_file_change(t.dataTransfer.files), g.Chat.File.set_drop_zone(!1)
                } catch (t) {}
            }, i.file_change = function(t) {
                var i;
                try {
                    !0 === g.Base.mc.chat.file_transfer && 0 < (null === (i = t.target.files) || void 0 === i ? void 0 : i.length) && (g.Event.trigger_interacted(!0), g.Chat.File.handle_file_change(t.target.files))
                } catch (t) {}
            }, i.header_channels_button_click = function() {
                try {
                    g.Chat.Interface.toggle_channel_dropdown()
                } catch (t) {}
            }, i.header_channels_dropdown_click = function(t) {
                try {
                    t.stopPropagation()
                } catch (t) {}
            }, i.header_channels_dropdown_entry_click = function() {
                try {
                    g.Chat.Interface.toggle_channel_dropdown(!1)
                } catch (t) {}
            }, i.picker_click = function(t) {
                try {
                    var i = t.target;
                    !i || !0 !== i.classList.contains("cc-143w") && i.closest(".cc-143w") || g.Chat.Picker.hide()
                } catch (t) {}
            }, i.picker_show_click = function(t) {
                try {
                    g.Chat.Picker.show(t)
                } catch (t) {}
            }, i.picker_toggle_click = function() {
                try {
                    g.Chat.Picker.toggle(), !0 === g.Store.$store.chat.picker.is_visible && g.Event.trigger_interacted(!0)
                } catch (t) {}
            }, i.picker_smiley_click = function(t) {
                try {
                    var i, n = g.Chat.Selector.get("form_textarea_message"),
                        e = n.selectionStart,
                        s = g.Action.get_message_text();
                    s && (0 < e && " " !== s[e - 1] && (t = " ".concat(t)), e < s.length && " " !== s[e] && (t = "".concat(t, " "))), i = s.substr(0, e) + t + s.substr(e), g.Action.set_message_text(i), n.dispatchEvent(new window.KeyboardEvent("keyup")), g.Utility.set_timeout(function() {
                        e += t.length, n.selectionStart = n.selectionEnd = e
                    }, 0), g.Chat.Picker.hide(), g.Chat.Field.focus_on_foreground()
                } catch (t) {}
            }, i.picker_gif_input_keyup = function(t) {
                var i = this;
                try {
                    null !== this.pu && g.Utility.clear_timeout(this.pu), this.pu = g.Utility.set_timeout(function() {
                        i.pu = null, g.Chat.Picker.load_data_gif((t.target.value || "").trim())
                    }, this.wu)
                } catch (t) {}
            }, i.picker_gif_input_reset = function() {
                try {
                    g.Store.$store.chat.picker.gif.input && (g.Store.$store.chat.picker.gif.input = "", g.Chat.Picker.load_data_gif(""))
                } catch (t) {}
            }, i.picker_gif_item_click = function(t) {
                try {
                    t.type && t.url && g.Action.do_message_send("animation", {
                        type: t.type,
                        url: t.url
                    }), g.Chat.Picker.hide()
                } catch (t) {}
            }, i.speech_record_click = function() {
                try {
                    g.Event.trigger_interacted(!0), g.Chat.Speech.record()
                } catch (t) {}
            }, i.speech_cancel_click = function() {
                try {
                    g.Chat.Speech.cancel()
                } catch (t) {}
            }, i.speech_send_click = function() {
                try {
                    g.Chat.Speech.send()
                } catch (t) {}
            }, i.feedback_click = function(t) {
                try {
                    var i = t.target;
                    !i || !0 !== i.classList.contains("cc-v9te") && i.closest(".cc-v9te") || g.Chat.Feedback.hide()
                } catch (t) {}
            }, i.feedback_submit_click = function() {
                try {
                    0 < g.Store.$store.chat.feedback.stars.selected && g.Store.$store.chat.feedback.comment && (g.Library.crisp.client.Session.send_feedback_rate(g.Store.$store.chat.feedback.stars.selected, g.Store.$store.chat.feedback.comment), g.Chat.Feedback.hide(), g.Chat.Intent.update("feedback", "submitted"))
                } catch (t) {}
            }, i.feedback_toggle_click = function() {
                try {
                    g.Chat.Feedback.toggle(), !0 === g.Store.$store.chat.feedback.is_visible && g.Event.trigger_interacted(!0)
                } catch (t) {}
            }, i.alert_warn_prompt_click = function() {
                try {
                    g.Chat.Field.focus_on_foreground(!0)
                } catch (t) {}
            }, i.alert_warn_reply_click = function() {
                try {
                    !0 === g.Base.mc.chat.phone_visitors && !0 !== g.Base.mc.chat.email_visitors ? g.Chat.Intent.update("identity", "phone") : g.Chat.Intent.update("identity", "email"), g.Chat.Field.focus_on_foreground(!0)
                } catch (t) {}
            }, i.alert_new_messages_click = function() {
                try {
                    g.Chat.Scroll.to()
                } catch (t) {}
            }, i.alert_email_invalid_click = function() {
                try {
                    g.Chat.Intent.update("identity", "email", !0)
                } catch (t) {}
            }, i.textarea_keyup = function(t) {
                try {
                    g.Chat.Field.trigger_key_pressed(t)
                } catch (t) {}
            }, i.textarea_keydown = function(t) {
                try {
                    if (t.keyCode === this.ia && !t.shiftKey) return t.preventDefault(), void g.Chat.Field.trigger_submit();
                    if (t.keyCode === this.gu && t.ctrlKey && !0 === g.Store.$store.chat.helpdesk.search) return t.preventDefault(), void g.Action.do_helpdesk_search();
                    g.Event.trigger_interacted(), g.Chat.Field.trigger_key_pressed(t)
                } catch (t) {}
            }, i.textarea_paste = function(t) {
                try {
                    var i = (t.clipboardData || t.originalEvent.clipboardData || {}).items || [];
                    if (0 < i.length) {
                        for (var n, e = [], s = 0; s < i.length; s++) "file" !== i[s].kind || null != (n = i[s].getAsFile()) && n.type && -1 !== n.type.indexOf("image/") && e.push(n);
                        0 < e.length && (t.preventDefault(), !0 === confirm(g.Locale.text("chat", "chat_form_attach_confirm_upload")) && g.Chat.File.handle_file_change(e))
                    }
                    g.Utility.set_timeout(function() {
                        g.Chat.Field.trigger_key_pressed(null)
                    }, 0)
                } catch (t) {}
            }, i.textarea_send_click = function() {
                try {
                    g.Chat.Field.trigger_submit()
                } catch (t) {}
            }, i.chat_wheel = function(t) {
                try {
                    g.Chat.Scroll.unwind_wheel(t, "cc-19vt")
                } catch (t) {}
            }, i.helpdesk_wheel = function(t) {
                try {
                    g.Chat.Scroll.unwind_wheel(t, "cc-1tz2")
                } catch (t) {}
            }, i.helpdesk_search_keydown = function(t) {
                var i;
                try {
                    switch (t.keyCode) {
                        case this.ia:
                            t.preventDefault(), g.Chat.Helpdesk.select_article();
                            break;
                        case this.mu:
                            g.Chat.Helpdesk.move_article(-1);
                            break;
                        case this._u:
                            g.Chat.Helpdesk.move_article(1);
                            break;
                        case this.ea:
                            null !== (i = t.target) && void 0 !== i && i.value && (t.preventDefault(), g.Chat.Helpdesk.expand_autocomplete());
                            break;
                        default:
                            !0 !== t.shiftKey && !0 !== t.metaKey && !0 !== t.ctrlKey && !0 !== t.altKey && g.Chat.Helpdesk.handle_autocomplete([])
                    }
                } catch (t) {}
            }, i.helpdesk_search_field_keyup = function() {
                try {
                    g.Chat.Helpdesk.search(g.Store.$store.chat.helpdesk_search.input)
                } catch (t) {}
            }, i.helpdesk_search_article_click = function(t, i, n) {
                var e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                try {
                    g.Action.do_helpdesk_article_open(t, i, n, e || null)
                } catch (t) {}
            }, i.helpdesk_viewer_previous_click = function() {
                try {
                    g.Store.$store.chat.helpdesk_viewer.url = "", g.Chat.Interface.request_dynamic_sizing_properties()
                } catch (t) {}
            }, i.bind_all = function() {
                try {
                    g.Store.bind_events("chat", this.pt, this), this.ku()
                } catch (t) {}
            }, i.ku = function() {
                try {
                    g.Utility.add_event_listener(this.ns, "window", "beforeunload", function(t) {
                        var i, n, e = null;
                        if (!0 === g.Library.crisp.client.Message.is_sending_messages() && (e = g.Locale.text("chat", "chat_message_send_abort_warn")), !0 === g.Base.mc.chat.file_transfer && (i = g.Store.$store.chat.file.state, n = g.Store.$store.chat.speech.state, -1 !== ["preparing", "uploading"].indexOf(i) && (e = g.Locale.text("chat", "chat_form_attach_abort_warn")), -1 !== ["recording", "paused"].indexOf(n) && (e = g.Locale.text("chat", "chat_form_speech_abort_warn"))), e = !0 === g.Library.crisp.client.Call.is_ongoing() ? g.Locale.text("call", "call_abort_warn") : e) return t.returnValue = e
                    })
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.pu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Event = q;
        var O = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatField", this.ia = 13, this.$u = 1e3, this.xu = 150, this.Fu = .2, this.ju = 8.5, this.Eu = /\n/g, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.trigger_submit = function() {
                try {
                    g.Event.trigger_interacted(!0), g.Chat.Message.send()
                } catch (t) {}
            }, i.trigger_key_pressed = function(t) {
                try {
                    var i, n, e, s, c, a, r, o = "";
                    null !== t && t.keyCode === this.ia && !t.shiftKey || (o = g.Action.get_message_text(), i = g.Chat.Selector.get("form_container"), n = g.Chat.Selector.get("form_textarea_message"), 0 === this.zu && (this.zu = parseInt(n.getAttribute("rows"), 10)), this.Cu(), o ? (s = o.length * this.ju / g.Chat.Interface.Au, s += (null === (e = o.match(this.Eu)) || void 0 === e ? void 0 : e.length) || 0, ((c = Math.ceil(s)) - s < this.Fu || c !== this.Iu) && (s = c, this.Iu = s, a = g.Chat.Interface.qu - g.Chat.Interface.Ou + g.Chat.Interface.Ou * s, r = g.Chat.Interface.Ou * (s - 1), a < g.Chat.Interface.Su + g.Chat.Interface.qu - this.xu && (n.setAttribute("rows", this.zu + (s - 1)), g.Chat.Field.Du(r), i.style.setProperty("height", "".concat(a, "px"), "important"))), g.Store.$store.chat.field.has_value = !0) : (g.Store.$store.chat.field.has_value = !1, i.style.height = null, n.setAttribute("rows", this.zu), this.Iu = 1, this.Du(0))), g.Library.crisp.client.Message.send_message_compose(o ? "start" : "stop", o || null)
                } catch (t) {}
            }, i.focus_on_foreground = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 !== t && g.Feature.has_screen_touch() || !0 !== g.Chat.Interface.chat_is_visible() || null === g.Chat.Selector.Ru || g.Utility.next_render(function() {
                        var t = g.Chat.Selector.get("flow_messages");
                        if (t) {
                            var i = null;
                            switch (g.Store.$store.chat.mode) {
                                case "chat":
                                    var n = t.querySelector(".cc-k6m4"),
                                        i = !0 === g.Chat.Picker.is_open() ? g.Chat.Selector.get("content").querySelector(".cc-1ibt") : !0 === g.Chat.Feedback.is_open() ? g.Chat.Selector.get("content").querySelector(".cc-7fhf") : n || g.Chat.Selector.get("form_textarea_message");
                                    break;
                                case "helpdesk":
                                    i = g.Chat.Selector.get("content").querySelector(".cc-guux")
                            }
                            i && i.focus()
                        }
                    })
                } catch (t) {}
            }, i.blur_from_foreground = function() {
                try {
                    for (var t = g.Base.Kc.querySelectorAll("input"), i = 0; i < t.length; i++) t[i].blur()
                } catch (t) {}
            }, i.Du = function(t) {
                try {
                    for (var i = g.Chat.Selector.Bu.querySelectorAll([".cc-1hzo", ".cc-16md"].join(", ")), n = 0; n < i.length; n++) i[n].style.setProperty("margin-bottom", "".concat(t, "px"), "important")
                } catch (t) {}
            }, i.Cu = function() {
                var t = this;
                try {
                    null !== this.Nu && g.Utility.clear_timeout(this.Nu), this.Nu = g.Utility.set_timeout(function() {
                        t.Nu = null, g.Chat.State.propagate("textarea", g.Action.get_message_text())
                    }, this.$u)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Mu = "", this.zu = 0, this.Iu = 1, this.Nu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Field = O;
        var S = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatFile", this.Tu = "File", this.Uu = "application/octet-stream", this.Pu = 2e3, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.upload_generated = function(t, i, n) {
                try {
                    if (!0 === g.Base.mc.chat.file_transfer) {
                        if (!this.Lu[0]) return void this.Ju();
                        if (!t || !i) return alert(g.Locale.text("chat", "chat_form_attach_alert_quota")), void this.Ju();
                        if (this.Lu[0].size >= n) return alert(g.Locale.text("chat", "chat_form_attach_alert_size")), void this.Ju();
                        this.Vu = i, this.Wu(t, this.Lu[0])
                    }
                } catch (t) {}
            }, i.set_drop_zone = function(t) {
                try {
                    !0 === g.Base.mc.chat.file_transfer && (g.Store.$store.chat.has_drop_zone = t)
                } catch (t) {}
            }, i.handle_file_change = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                try {
                    if (!0 === g.Chat.Message.check_intent_send() && 0 < t.length && "none" === g.Store.$store.chat.file.state) {
                        this.Lu = [];
                        for (var i = 0; i < t.length; i++) g.Chat.File.Lu.push(t[i]);
                        g.Store.$store.chat.file.state = "preparing", g.Library.crisp.client.Bucket.get_url_upload(t[0].name || this.Tu, t[0].type || this.Uu)
                    }
                } catch (t) {}
            }, i.Wu = function(t, i) {
                try {
                    this.Hu = new window.XMLHttpRequest, this.Hu.file = i, this.Hu.addEventListener("loadstart", this.Ku.Mt(this), !1), this.Hu.addEventListener("error", this.Gu.Mt(this), !1), this.Hu.addEventListener("abort", this.Gu.Mt(this), !1), this.Hu.addEventListener("load", this.Yu.Mt(this), !1), this.Hu.open("PUT", t, !0), this.Hu.setRequestHeader("Content-Disposition", "attachment"), this.Hu.send(i)
                } catch (t) {}
            }, i.Ku = function() {
                try {
                    g.Store.$store.chat.file.state = "uploading"
                } catch (t) {}
            }, i.Gu = function() {
                try {
                    0 < this.Lu.length && alert(g.Locale.text("chat", "chat_form_attach_alert_error")), this.Ju()
                } catch (t) {}
            }, i.Yu = function() {
                var t, i = this;
                try {
                    0 < this.Lu.length && this.Vu && (t = this.Lu[0], g.Utility.set_timeout(function() {
                        t.type && -1 !== t.type.indexOf("audio/") && "number" == typeof t.duration ? g.Action.do_message_send("audio", {
                            url: i.Vu,
                            type: t.type,
                            duration: t.duration
                        }) : g.Action.do_message_send("file", {
                            url: i.Vu,
                            name: t.name || i.Tu,
                            type: t.type || i.Uu
                        }), i.Ju()
                    }, this.Pu))
                } catch (t) {}
            }, i.Ju = function() {
                try {
                    this.Hu && (this.Hu.removeEventListener("loadstart", this.Ku, !1), this.Hu.removeEventListener("error", this.Gu, !1), this.Hu.removeEventListener("abort", this.Gu, !1), this.Hu.removeEventListener("load", this.Yu, !1)), g.Chat.Selector.get("form_input_attach").value = null, g.Store.$store.chat.file.state = "none", this.Lu.shift(), 0 < this.Lu.length && this.handle_file_change(this.Lu)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Lu = [], this.Vu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.File = S;
        var D = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatFrame", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.open = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    var e = g.Utility.insert_link_query_values(t, g.Utility.merge({
                        website_id: g.Base.wh,
                        session_id: g.Broker.Wt
                    }, n));
                    null !== this.Zu && g.Store.$store.chat.frame.target !== e && this.close(), null === this.Zu && (g.Store.$store.chat.frame.loaded = !1, g.Store.$store.chat.frame.target = e, g.Store.$store.chat.frame.title = i || "", this.Zu = g.Template.dom(g.Template.render("chat_frame")), g.Template.vue(this.Zu), g.Chat.Selector.Bu.appendChild(this.Zu))
                } catch (t) {}
            }, i.close = function() {
                try {
                    null !== this.Zu && (this.Zu.remove(), this.Zu = null, g.Store.$store.chat.frame.target = "", g.Store.$store.chat.frame.title = "", g.Store.$store.chat.frame.loaded = !1)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Zu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Frame = D;
        var R = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatGame", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.start = function() {
                try {
                    null === this.Xu && (g.Store.$store.chat.game.loaded = !1, this.Xu = g.Template.dom(g.Template.render("chat_game")), g.Template.vue(this.Xu), g.Chat.Selector.Bu.appendChild(this.Xu))
                } catch (t) {}
            }, i.stop = function() {
                try {
                    null !== this.Xu && (this.Xu.remove(), this.Xu = null)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Xu = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Game = R;
        var B = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatHelpdesk", this.Qu = 1e3, this.tf = 100, this.if = 2, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.show_search = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    i = !1;
                try {
                    var n = g.Chat.Interface.generate_channel_link("helpdesk");
                    n && (i = !0, "helpdesk" !== g.Store.$store.chat.mode ? (g.Utility.merge(g.Store.$store.chat.helpdesk_search, {
                        input: "",
                        url: n,
                        articles: [],
                        current_index: 0,
                        has_search: !1,
                        initialized: !1,
                        loading: !1
                    }), g.Store.$store.chat.mode = "helpdesk", g.Action.do_helpdesk_query("")) : g.Store.$store.chat.helpdesk_viewer.url = "", !1 === t && g.Chat.Interface.request_dynamic_sizing_properties())
                } catch (t) {} finally {
                    return i
                }
            }, i.show_article = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    s = !1;
                try {
                    var c = g.Chat.Interface.generate_channel_link("helpdesk");
                    c && (s = this.show_search(!0), g.Store.$store.chat.helpdesk_viewer.loaded = !1, g.Store.$store.chat.helpdesk_viewer.title = n || "", g.Store.$store.chat.helpdesk_viewer.category = e || "", g.Store.$store.chat.helpdesk_viewer.url = "".concat(c).concat(t, "/article/").concat(i, "/"), g.Chat.Interface.request_dynamic_sizing_properties())
                } catch (t) {} finally {
                    return s
                }
            }, i.search = function() {
                var i = this,
                    n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                try {
                    n !== this.nf && (this.ef(), g.Store.$store.chat.helpdesk_search.loading = !0, this.sf = g.Utility.set_timeout(function() {
                        var t;
                        i.sf = null, i.nf = n, g.Action.do_helpdesk_query(n), !n || (t = n.substring(n.lastIndexOf(" ") + 1).trim()) && t.length >= i.if && g.Library.crisp.client.Helpdesk.get_article_suggest(t, g.Locale.code())
                    }, this.tf))
                } catch (t) {}
            }, i.handle_articles = function() {
                var n = this,
                    e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                try {
                    "helpdesk" === g.Store.$store.chat.mode && (g.Store.$store.chat.helpdesk_search.articles = [], g.Store.$store.chat.helpdesk_search.current_index = 0, g.Store.$store.chat.helpdesk_search.has_search = t, g.Store.$store.chat.helpdesk_search.articles = e, null !== this.cf && g.Utility.clear_timeout(this.cf), s.query && (this.cf = g.Utility.set_timeout(function() {
                        n.cf = null;
                        var t = (s.query || "").trim(),
                            i = s.locale || null;
                        (i = e[0] && e[0].locale ? e[0].locale : i) && t && g.Library.crisp.client.Helpdesk.report_article_search(i, t)
                    }, this.Qu)), g.Store.$store.chat.helpdesk_search.initialized = !0, g.Store.$store.chat.helpdesk_search.loading = !1)
                } catch (t) {}
            }, i.select_article = function() {
                try {
                    var t = g.Chat.Selector.get("content").querySelector("".concat(".cc-1i08", '[data-active="true"]'));
                    t && t.click()
                } catch (t) {}
            }, i.handle_autocomplete = function() {
                var t, i, n, e, s, c, a, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                try {
                    "helpdesk" === g.Store.$store.chat.mode && (t = (r[0] || "").toLowerCase(), n = i = null, !t || (e = (n = g.Store.$store.chat.helpdesk_search.input).substring(n.lastIndexOf(" ") + 1).trim().toLowerCase()) && e.length < t.length && t.substring(0, e.length) === e && (i = t.substring(e.length)), s = g.Chat.Selector.get("content").querySelector(".cc-fayq"), c = g.Chat.Selector.get("content").querySelector(".cc-x1r7"), i && n && s ? (s.innerText = n, c.innerText = i, a = "rtl" === g.Locale.direction() ? "right" : "left", c.style.setProperty(a, "".concat(s.offsetWidth, "px"), "important"), c.style.setProperty("display", "block", "important")) : (c.style.setProperty("display", "none", "important"), c.innerText = ""))
                } catch (t) {}
            }, i.expand_autocomplete = function() {
                try {
                    var t = (g.Chat.Selector.get("content").querySelector(".cc-x1r7").innerText || "").trim();
                    t && (g.Store.$store.chat.helpdesk_search.input = "".concat(g.Store.$store.chat.helpdesk_search.input) + "".concat(t), this.handle_autocomplete([]))
                } catch (t) {}
            }, i.move_article = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                try {
                    var i = g.Store.$store.chat.helpdesk_search.current_index + t;
                    (i = i >= g.Store.$store.chat.helpdesk_search.articles.length ? 0 : i) < 0 && (i = g.Store.$store.chat.helpdesk_search.articles.length - 1), g.Store.$store.chat.helpdesk_search.current_index = i, g.Utility.next_render(function() {
                        var t = g.Chat.Selector.get("content").querySelector("".concat(".cc-1i08", '[data-active="true"]'));
                        t && t.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        })
                    })
                } catch (t) {}
            }, i.ef = function() {
                try {
                    null !== this.sf && (g.Utility.clear_timeout(this.sf), this.sf = null), null !== this.cf && (g.Utility.clear_timeout(this.cf), this.cf = null)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.cf = null, this.nf = ""
                } catch (t) {}
            }, t
        }());
        g.Chat.Helpdesk = B;
        var N = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatInterface", this.af = 320, this.rf = 340, this.hf = 360, this.lf = 460, this.uf = 400, this.ff = 580, this.df = 440, this.vf = 500, this.pf = 600, this.yf = 22, this.mf = 8, this.gf = 350, this.wf = 1e3, this.bf = 1e3, this.kf = 216e5, this.$f = 1e3, this.xf = 10, this.Ff = !1, this.jf = [
                        ["email", "Email"],
                        ["phone", "Phone"],
                        ["messenger", "Messenger"],
                        ["telegram", "Telegram"],
                        ["twitter", "X (Twitter)"],
                        ["whatsapp", "WhatsApp"],
                        ["instagram", "Instagram"]
                    ], this.Ef = /^(?:https?:)?(?:\/\/)?([^\/\?]+)/, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                try {
                    this.zf()
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.toggle_visibility = function() {
                var t, i, n, e = this,
                    s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "pane",
                    c = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    function a(t, i) {
                        1 == (t !== i) && (g.Store.$store.chat.is_opened = t, g.Utility.next_render(function() {
                            e.Cf(t)
                        }))
                    }
                    t = "pane" !== s, n = g.Store.$store.chat.is_opened, e.Af = t, !0 === c ? (i = 1 != t ? "animate_minimize" : "animate_maximize", 1 == t ? g.Store.$store.chat.is_opened = !0 : e.Cf(!1), null !== e.If && (g.Utility.clear_timeout(e.If), g.Store.$store.chat.animate_minimize = !1, g.Store.$store.chat.animate_maximize = !1), g.Store.$store.chat[i] = !0, e.If = g.Utility.set_timeout(function() {
                        e.If = null, g.Store.$store.chat[i] = !1, a(t, n)
                    }, e.gf)) : a(t, n), this.apply_chat_focus()
                } catch (t) {}
            }, i.toggle_socket_state = function() {
                var n = this,
                    e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    null !== this.qf && g.Utility.clear_timeout(this.qf), this.qf = g.Utility.set_timeout(function() {
                        n.qf = null, g.Store.$store.chat.has_offline = !0 !== e;
                        var t, i = {
                            failed: s,
                            inactive: g.Event.Go || g.Event.Yo || !1
                        };
                        for (t in i) g.Store.$store.chat["reconnect_".concat(t)] = i[t]
                    }, !0 === e ? 0 : this.wf)
                } catch (t) {}
            }, i.minimize = function() {
                try {
                    !0 !== g.Base.ml.lock_maximized && g.Chat.State.propagate("maximized", !1)
                } catch (t) {}
            }, i.maximize = function() {
                try {
                    g.Chat.State.propagate("maximized", !0, !1, function() {
                        g.Utility.next_render(function() {
                            g.Chat.Scroll.to()
                        })
                    })
                } catch (t) {}
            }, i.chat_is_visible = function() {
                var t = !0;
                try {
                    t = !(!this.Af || !0 === g.Store.$store.base.is_hidden)
                } catch (t) {} finally {
                    return t
                }
            }, i.apply_chat_focus = function() {
                try {
                    var t = this.has_chat_focus();
                    g.Library.crisp.client.Message.set_messages_in_view(t)
                } catch (t) {}
            }, i.pane = function() {
                try {
                    var t = g.Base.mc || {};
                    this.Ac(), g.Chat.Selector.Ru = g.Template.dom(g.Template.render("chat", {
                        configuration: t,
                        environment: {
                            smileys: [],
                            url: {
                                crisp_web: g.Base.sl
                            }
                        },
                        methods: {
                            generate_channel_link: this.generate_channel_link.Mt(this)
                        },
                        website: {
                            id: g.Base.wh,
                            domain: g.Base.mc.website.domain,
                            name: g.Base.mc.website.name
                        }
                    })), g.Base.Kc.innerHTML = "", g.Base.Kc.appendChild(g.Chat.Selector.Ru), g.Template.vue(g.Chat.Selector.Ru), g.Chat.Selector.bind_all(), g.Chat.Event.bind_all(), this.Of(), g.Chat.State.trigger_default_all(["intent"])
                } catch (t) {}
            }, i.toggle_channel_dropdown = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                try {
                    (t = null === t ? !1 === g.Store.$store.chat.has_channels : t) !== g.Store.$store.chat.has_channels && (g.Store.$store.chat.has_channels = t)
                } catch (t) {}
            }, i.generate_channel_link = function(t) {
                var i = "";
                try {
                    var n, e = g.Base.mc.channels[t] || null;
                    switch (t) {
                        case "email":
                            var s, c, a = g.Broker.xo;
                            a ? (s = g.Base.mc.website.name, c = "s.".concat(a, ".i@") + "".concat(g.Base.mc.website.mailer), i = "mailto:", s && (i += '"'.concat(encodeURI(s), '"')), i += "<".concat(encodeURI(c), ">")) : e && (i = "mailto:".concat(e));
                            break;
                        case "phone":
                            e && (i = "tel:".concat(e));
                            break;
                        case "messenger":
                            e && (i = "https://m.me/".concat(encodeURI(e)));
                            break;
                        case "telegram":
                            e && (i = "https://telegram.me/".concat(encodeURI(e)));
                            break;
                        case "twitter":
                            e && (i = "https://x.com/".concat(encodeURI(e)));
                            break;
                        case "whatsapp":
                            e && (i = "https://wa.me/".concat(encodeURI(e)));
                            break;
                        case "instagram":
                            e && (i = "https://www.instagram.com/".concat(encodeURI(e), "/"));
                            break;
                        case "helpdesk":
                        case "status":
                            e && (n = "production" === g.Base.ol ? "https" : "http", i = "".concat(n, "://").concat(e, "/"))
                    }
                } catch (t) {} finally {
                    return i
                }
            }, i.request_dynamic_sizing_properties = function() {
                var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 !== this.Ff && (this.Ff = !0, g.Utility.next_render(function() {
                        "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                            t.Sf(i), t.Ff = !1
                        }) : (t.Sf(i), t.Ff = !1)
                    }))
                } catch (t) {}
            }, i.refresh_resize_page_scroll = function() {
                var t, i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    window.scroll && !0 === g.Store.$store.chat.is_opened && -1 < this.Df && (!0 !== i && !0 === g.Base.is_mobile_view() ? window.scrollTo(0, -1) : ((t = document.querySelector("html")) && t.classList.remove("cc-f079"), g.Utility.remove_event_listener(this.ns, "document", "touchstart"), g.Utility.remove_event_listener(this.ns, "document", "touchmove"), window.scroll(window.scrollX, this.Df), this.Df = -1))
                } catch (t) {}
            }, i.has_chat_focus = function() {
                var t = !1;
                try {
                    t = this.Rf && this.chat_is_visible() && "chat" === g.Store.$store.chat.mode && !0
                } catch (t) {} finally {
                    return t
                }
            }, i.propagate_scroll = function(t) {
                try {
                    (Math.abs(t - (g.Chat.Scroll.Bf || 0)) >= this.xf || null !== this.Nf) && (g.Chat.Scroll.Bf = t, this.Mf(g.Chat.Scroll.Bf))
                } catch (t) {}
            }, i.Ac = function() {
                var i = this,
                    t = (g.Base.mc || {}).website || {},
                    n = g.Base.mc.chat.helpdesk_link && g.Base.mc.channels.helpdesk && g.Base.So !== g.Base.mc.channels.helpdesk && !0,
                    t = {
                        blocked: g.Base.is_blocked(),
                        helpdesk: {
                            search: n,
                            only: n && g.Base.mc.chat.helpdesk_only && !0
                        },
                        status: {
                            url: this.generate_channel_link("status")
                        },
                        activity: {
                            metrics: null !== (n = t.response_metrics) && void 0 !== n && n.mean && t.response_metrics.mean >= this.bf && t.response_metrics.mean < this.kf ? t.response_metrics.mean : null,
                            last: t.last_available && 0 < t.last_available ? t.last_available : null
                        },
                        channels: this.Tf(),
                        branding_link: "".concat(g.Store.$store.base.environment.url.crisp_web) + "/".concat(g.Locale.web(), "/livechat/") + "?ref=chatbox" + "&domain=".concat(g.Store.$store.base.website.domain) + "&name=".concat(encodeURIComponent(g.Store.$store.base.website.name))
                    };
                g.Store.$store.chat.content_source = function(t) {
                    return t.match(i.Ef)[1]
                }, g.Store.$store.chat.timestamp_to_properties = function(t) {
                    return g.Date.timestamp_to_properties(t)
                }, g.Store.$store.chat.is_different_date = function(t, i) {
                    t = g.Store.$store.messages.list[t], i = g.Store.$store.messages.list[i];
                    if (0 === (null == t ? void 0 : t.timestamp)) return !1;
                    if (!t || !i) return !0;
                    i = g.Date.timestamp_to_properties(i.timestamp), t = g.Date.timestamp_to_properties(t.timestamp);
                    return i.day !== t.day || i.month !== t.month || i.year !== t.year || !1
                }, g.Store.$store.chat.is_first_of_group = function(t, i) {
                    if (0 === i) return !0;
                    var n = g.Store.$store.messages.list[i - 1];
                    return g.Store.$store.chat.is_last_of_group(n, i - 1)
                }, g.Store.$store.chat.is_last_of_group = function(t, i) {
                    var n = g.Store.$store.messages.list[i + 1],
                        e = (null == n ? void 0 : n.user) || {},
                        s = t.user || {};
                    return g.Store.$store.chat.is_different_date(i + 1, i) || !n && !0 || (t.sending || t.error) && !(n.sending || n.error) || n && e.user_id !== s.user_id || (e.type || s.type) && s.nickname != s.nickname || !1
                }, g.Store.$store.chat.is_last_of_thread = function(t, i) {
                    return g.Store.$store.chat.is_different_date(i + 1, i) || !g.Store.$store.messages.list[i + 1] && !0 || !1
                }, g.Store.$store.chat.has_picker_selected = function(t) {
                    if ("picker" === t.type)
                        for (var i = 0; i < t.content.choices.length; i++)
                            if (!0 === t.content.choices[i].selected) return !0;
                    return !1
                }, g.Utility.merge(g.Store.$store.chat, t)
            }, i.Tf = function() {
                for (var t = [], i = 0; i < this.jf.length; i++) {
                    var n = this.jf[i][0],
                        e = this.jf[i][1],
                        s = this.generate_channel_link(n);
                    s && ("email" !== n && "phone" !== n || (e = g.Locale.text.Mt(g.Locale)("chat", "chat_header_ongoing_channel_continue_".concat(n))), t.push({
                        name: n,
                        format: e,
                        link: s
                    }))
                }
                return t
            }, i.Sf = function() {
                var t, i, n, e, s, c, a, r, o = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 === g.Action.is_chat_visible() && (r = !0 === g.Base.is_large_view() ? (this.Uf = this.ff, this.Pf = this.uf, this.pf) : !0 === g.Base.is_small_view() ? (this.Uf = this.rf, this.Pf = this.af, this.df) : (this.Uf = this.lf, this.Pf = this.hf, this.vf), "helpdesk" === g.Store.$store.chat.mode && g.Store.$store.chat.helpdesk_viewer.url && (t = parseInt(window.getComputedStyle(g.Chat.Selector.Bu).bottom.replace("px", ""), 10), this.Pf = r, this.Uf = window.innerHeight - t - g.Chat.Selector.get("header").offsetHeight - this.yf), g.Base.apply_sizing(), !0 === g.Base.is_full_view() && (this.Uf = window.innerHeight, this.Pf = window.innerWidth, window.visualViewport && (this.Uf = window.visualViewport.height + window.visualViewport.offsetTop), this.Uf -= g.Chat.Selector.get("header").offsetHeight), !0 !== g.Chat.Vc && !0 !== o || (i = "rtl" === g.Locale.direction() ? "right" : "left", n = "rtl" === g.Locale.direction() ? "left" : "right", e = parseInt(window.getComputedStyle(g.Chat.Selector.get("form_textarea_message"))[i].replace("px", ""), 10), s = parseInt(window.getComputedStyle(g.Chat.Selector.get("form_act"))[n].replace("px", ""), 10), c = this.Pf - this.mf - e - s - g.Chat.Selector.get("form_act").offsetWidth, g.Chat.Selector.Bu.style.setProperty("width", "".concat(this.Pf, "px"), "important"), g.Chat.Selector.get("content").style.setProperty("height", "".concat(this.Uf, "px"), "important"), g.Chat.Selector.get("form_textarea_message").style.setProperty("width", "".concat(c, "px"), "important"), this.Su = g.Chat.Selector.get("flow").offsetHeight, this.Au = g.Chat.Selector.get("form_textarea_message").offsetWidth, 0 === this.qu && (this.qu = g.Chat.Selector.get("form_container").offsetHeight), 0 === this.Ou && (a = window.getComputedStyle(g.Chat.Selector.get("form_textarea_message")).lineHeight || "", this.Ou = parseInt(a.replace("px", ""), 10)), g.Chat.Scroll.Lf = this.Su, g.Base.is_full_view() && !0 === this.chat_is_visible() ? g.Chat.Viewport.adapt() : g.Chat.Viewport.unadapt(), g.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup"))), g.Sound.allow(!g.Base.is_mobile_view()))
                } catch (t) {}
            }, i.Mf = function(t) {
                var i = this;
                try {
                    null !== this.Nf && g.Utility.clear_timeout(this.Nf), this.Nf = g.Utility.set_timeout(function() {
                        i.Nf = null, g.Chat.State.propagate("scroll", t)
                    }, this.$f)
                } catch (t) {}
            }, i.Cf = function() {
                var t, n, e = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    !0 === g.Base.is_mobile_view() && window.scroll && !0 === i ? -1 === this.Df && (this.Df = window.scrollY, (t = document.querySelector("html")) && t.classList.add("cc-f079"), window.scroll(window.scrollX, 0), n = 0, g.Utility.add_event_listener(this.ns, "document", "touchstart", function(t) {
                        var i;
                        null !== (i = t.changedTouches) && void 0 !== i && i[0] && (n = t.changedTouches[0].pageY)
                    }), g.Utility.add_event_listener(this.ns, "document", "touchmove", function(t) {
                        var i;
                        document.activeElement && null !== (i = t.changedTouches) && void 0 !== i && i[0] && ("input" !== document.activeElement.tagName && "textarea" !== document.activeElement.tagName || t.preventDefault(), t = t.changedTouches[0].pageY || 0, Math.abs(t - n) > e.xf && document.activeElement.blur())
                    }, {
                        passive: !1,
                        capture: !0
                    })) : this.refresh_resize_page_scroll(!0)
                } catch (t) {}
            }, i.zf = function() {
                var t = this;
                try {
                    this.Rf = (!window.hasFocus || window.hasFocus()) && !0, g.Utility.add_event_listener(this.ns, "window", "focus", function() {
                        t.Rf = !0, t.apply_chat_focus()
                    }, {
                        capture: !1
                    }), g.Utility.add_event_listener(this.ns, "window", "blur", function() {
                        t.Rf = !1, t.apply_chat_focus()
                    }, {
                        capture: !1
                    })
                } catch (t) {}
            }, i.Of = function() {
                try {
                    this.Af = !1, g.Store.$store.chat.is_opened = !1
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Af = !0, this.Su = 0, this.qu = 0, this.Au = 0, this.Ou = 0, this.Jf = 40, this.qf = null, this.If = null, this.Pf = 0, this.Uf = 0, this.Df = -1, this.Nf = null, this.Rf = !0
                } catch (t) {}
            }, t
        }());
        g.Chat.Interface = N;
        var M = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatMessage", this.Vf = 1500, this.Wf = 3e4, this.Hf = 6e4, this.Kf = 3e4, this.Gf = 400, this.Yf = 5e3, this.Zf = 12e4, this.Xf = "urn:crisp.im:triggers:0", this.Qf = ["welcome", "identity", "game", "feedback"], this.td = ["email", "phone"], this.nd = ["📨", "☎️"], this.ed = ["field", "picker"], this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                try {
                    this.sd()
                } catch (t) {}
            }, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.send = function() {
                var t;
                try {
                    !0 !== this.check_intent_send() || (t = (t = g.Action.get_message_text()).trim()) && (g.Action.do_message_send("text", t), g.Action.set_message_text(""), g.Chat.Selector.get("form_textarea_message").dispatchEvent(new window.KeyboardEvent("keyup")))
                } catch (t) {}
            }, i.received = function(t) {
                var i = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                    e = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                    s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                try {
                    var c = this.cd(t);
                    !0 === i && !1 === g.Chat.Interface.has_chat_focus() && g.Sound.start("events", "chat-message-receive"), !0 === n && !0 === c && this.ad(t.fingerprint), t.user && -1 === this.Qf.indexOf(t.user.source) && g.Chat.Misc.update_operator_details(t.user), !1 === s && g.Chat.Game.stop(), this.rd && 0 < t.timestamp && this.rd < t.timestamp && this.hide_compose(), !0 === e && g.Utility.next_render(function() {
                        g.Chat.Scroll.to_last_message("from")
                    })
                } catch (t) {}
            }, i.sent = function(t) {
                var i, n, e, s, c = this;
                try {
                    t.from = "user", !0 === this.cd(t) && this.ad(t.fingerprint), this.od(t.fingerprint), g.Chat.Intent.au.identity || !1 === g.Chat.Intent.au.identity || (i = g.Action.get_user_email(), n = g.Action.get_user_phone(), e = g.Base.mc.chat.email_visitors, s = g.Base.mc.chat.phone_visitors, (i || !0 !== e) && (n || !0 !== s) || i || n ? g.Chat.Alert.update("wait_reply", "show") : (null !== this.hd && g.Utility.clear_timeout(this.hd), this.hd = g.Utility.set_timeout(function() {
                        c.hd = null;
                        var t = "default";
                        !1 === (e && s) && (!0 === e ? t = "email" : !0 === s && (t = "phone")), g.Chat.Intent.update("identity", t), g.Chat.Alert.update("warn_reply", "show")
                    }, this.Vf))), g.Utility.next_render(function() {
                        g.Chat.Scroll.to_last_message("to")
                    })
                } catch (t) {}
            }, i.sent_acknowledgement = function(t) {
                try {
                    var i = this.ld.indexOf(t.fingerprint); - 1 !== i && this.ld.splice(i, 1), this.cd(t), this.ud(), g.Utility.next_render(function() {
                        g.Chat.Scroll.to_last_message("to")
                    })
                } catch (t) {}
            }, i.history = function(t) {
                try {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        this.cd(n), "user" === n.from && !0 === n.read && this.fd.push(n.fingerprint)
                    }
                    this.dd()
                } catch (t) {}
            }, i.removed = function(t) {
                try {
                    this.vd(t.fingerprint)
                } catch (t) {}
            }, i.show_identity = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    for (var i = "**".concat(g.Locale.text("chat", "chat_message_text_identity_main"), "**") + "\n" + "_".concat(g.Locale.text("chat", "chat_message_text_identity_ask"), "_"), n = [], e = 0; e < this.td.length; e++) {
                        var s = this.td[e],
                            c = this.nd[e];
                        !0 === g.Base.mc.chat["".concat(s, "_visitors")] && n.push({
                            value: s,
                            icon: c,
                            selected: !1,
                            label: g.Locale.text("chat", "chat_message_text_identity_pick_".concat(s)),
                            handler: function(t) {
                                return function() {
                                    g.Chat.Intent.update("identity", t)
                                }
                            }(s)
                        })
                    }
                    0 < n.length && this.pd("identity", "default", "picker", {
                        id: "ask-identity",
                        text: i,
                        choices: n
                    }, t, t)
                } catch (t) {}
            }, i.hide_identity = function() {
                try {
                    this.yd("identity")
                } catch (t) {}
            }, i.show_identity_field = function(i) {
                var t, n, e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                try {
                    -1 !== this.td.indexOf(i) && (t = "chat_message_text_identity_ask_".concat(i), n = "chat_message_text_identity_ask_field_".concat(i), this.pd("identity", i, "field", {
                        id: "identity-".concat(i),
                        text: "_".concat(g.Locale.text("chat", t), "_"),
                        explain: g.Locale.text("chat", n),
                        previous: "identity",
                        handler: function(t) {
                            try {
                                g.Action["set_user_".concat(i)](t)
                            } catch (t) {}
                        }
                    }, e, e))
                } catch (t) {}
            }, i.show_game = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    var i = "**".concat(g.Locale.text("chat", "chat_message_text_game_main"), "**\n") + "_".concat(g.Locale.text("chat", "chat_message_text_game_ask"), "_");
                    this.pd("game", "default", "picker", {
                        id: "ask-game",
                        text: i,
                        choices: [{
                            value: "play",
                            icon: "🕹️",
                            selected: !1,
                            label: g.Locale.text("chat", "chat_message_text_game_pick_yes"),
                            handler: function() {
                                g.Chat.Game.start(), g.Chat.Intent.update("game", !1)
                            }
                        }, {
                            value: "ignore",
                            selected: !1,
                            label: g.Locale.text("chat", "chat_message_text_game_pick_no"),
                            handler: function() {
                                g.Chat.Intent.update("game", !1)
                            }
                        }]
                    }, t, t)
                } catch (t) {}
            }, i.hide_game = function() {
                try {
                    this.yd("game")
                } catch (t) {}
            }, i.show_feedback = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    var i = "**".concat(g.Locale.text("chat", "chat_message_text_feedback_main"), "**") + "\n_".concat(g.Locale.text("chat", "chat_message_text_feedback_ask"), "_");
                    this.pd("feedback", "default", "picker", {
                        id: "ask-feedback",
                        text: i,
                        choices: [{
                            value: "rate",
                            icon: "⭐️",
                            selected: !1,
                            label: g.Locale.text("chat", "chat_message_text_feedback_pick_rate"),
                            handler: function() {
                                g.Chat.Feedback.show(), g.Chat.Intent.update("feedback", "rate")
                            }
                        }, {
                            value: "ignore",
                            selected: !1,
                            label: g.Locale.text("chat", "chat_message_text_feedback_pick_ignore"),
                            handler: function() {
                                g.Chat.Intent.update("feedback", !1)
                            }
                        }]
                    }, t, t)
                } catch (t) {}
            }, i.show_feedback_submitted = function() {
                var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                try {
                    var i = g.Locale.text("chat", "chat_message_text_feedback_submitted");
                    this.pd("feedback", "submitted", "text", i, t, t)
                } catch (t) {}
            }, i.hide_feedback = function() {
                try {
                    this.yd("feedback")
                } catch (t) {}
            }, i.show_compose = function(t) {
                try {
                    var i = g.Store.$store.messages.is_composing || !1;
                    this.rd = t, (g.Store.$store.messages.is_composing = !0) !== i && (this.md(), g.Utility.next_render(function() {
                        g.Chat.Scroll.to_last_message(null)
                    }))
                } catch (t) {}
            }, i.hide_compose = function() {
                try {
                    g.Store.$store.messages.is_composing = !1, this.rd = null
                } catch (t) {}
            }, i.acknowledge_read_send = function(t) {
                try {
                    if (!0 !== g.Base.mc.chat.operator_privacy) {
                        var i = null;
                        if (0 < t.length)
                            for (var n = 0; n < g.Store.$store.messages.list.length; n++) {
                                var e = g.Store.$store.messages.list[n].fingerprint; - 1 !== t.indexOf(e) && (g.Store.$store.messages.list[n].read = !0, i = e)
                            }
                        null !== i && (g.Store.$store.messages.latest_fingerprint = i)
                    }
                } catch (t) {}
            }, i.trigger_will_send_hooks = function() {
                var t = !1;
                try {
                    for (var i, n = [], e = g.Library.crisp.client.Message.get_cached_messages(), s = e.length - 1; 0 <= s && "local" === (null === (i = e[s].user) || void 0 === i ? void 0 : i.source); s--) n.push(e[s]);
                    for (var c = 0; c < n.length; c++) {
                        var a = n[c]; - 1 === this._d.indexOf(a.fingerprint) && (this._d.push(a.fingerprint), g.Library.crisp.client.Message.receive_message_mirror(a.type, this.Xf, a.content, a.fingerprint), t = !0)
                    }
                } catch (t) {} finally {
                    return t
                }
            }, i.dispatch_local = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    e = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                try {
                    var s = g.Base.mc.website.active_operators || [],
                        c = {
                            source: "local"
                        };
                    s[0] && !0 !== e ? (c.user_id = s[0].user_id, c.nickname = s[0].nickname, s[0].avatar && (c.avatar = s[0].avatar)) : (c.type = "website", c.user_id = g.Base.wh, c.nickname = g.Base.mc.website.name), g.Library.crisp.client.Message.receive_message_local(t, i, c, n)
                } catch (t) {}
            }, i.remove = function(t) {
                try {
                    for (var i = 0; i < g.Store.$store.messages.list.length; i++)
                        if (g.Store.$store.messages.list[i].fingerprint === t) {
                            g.Store.$store.messages.list.splice(i, 1), delete g.Store.$store.messages.fingerprints[t];
                            break
                        }
                } catch (t) {}
            }, i.restore = function() {
                try {
                    this.gd(), this.synchronize()
                } catch (t) {}
            }, i.synchronize = function() {
                try {
                    g.Library.crisp.client.Message.get_message_compose(), g.Library.crisp.client.Message.get_unread_messages(), g.Library.crisp.client.Message.get_message_history(), 0 === g.Library.crisp.client.Message.count_message_history() && this.dd()
                } catch (t) {}
            }, i.get_message_from_store = function(t) {
                var i = null;
                try {
                    for (var n = 0; n < g.Store.$store.messages.list.length; n++)
                        if (g.Store.$store.messages.list[n].fingerprint === t) {
                            i = g.Store.$store.messages.list[n];
                            break
                        }
                } catch (t) {} finally {
                    return i
                }
            }, i.check_intent_send = function() {
                var t = !0;
                try {
                    !0 !== g.Broker.wo && (t = !1, g.Library.crisp.client.socket.connect())
                } catch (t) {} finally {
                    return t
                }
            }, i.check_form_identify_lock = function() {
                try {
                    !0 === g.Base.mc.chat.force_identify && (g.Store.$store.chat.is_locked_identify = !0)
                } catch (t) {}
            }, i.check_form_identify_unlock = function() {
                try {
                    "true" !== g.Chat.Selector.get("form_container").getAttribute("data-retain-lock") && (g.Store.$store.chat.is_locked_identify = !1)
                } catch (t) {}
            }, i.gd = function() {
                try {
                    var t = g.Locale.text("theme_welcome", ["default_chat", "".concat(g.Base.mc.chat.theme_welcome, "_chat")], [g.Base.mc.website.name]);
                    this.pd("welcome", "default", "text", t, !1, !1)
                } catch (t) {}
            }, i.wd = function(t, i, n) {
                try {
                    if (!0 === this.ed.includes(t) && !0 === i.required) {
                        var e = !1;
                        switch (t) {
                            case "field":
                                i.value && (e = !0);
                                break;
                            case "picker":
                                for (var s = 0; s < i.choices.length; s++)
                                    if (!0 === i.choices[s].selected) {
                                        e = !0;
                                        break
                                    }
                        }
                        var c = g.Store.$store.messages.prompt_fingerprints.indexOf(n);
                        !1 === e ? -1 === c && g.Store.$store.messages.prompt_fingerprints.push(n) : -1 < c && g.Store.$store.messages.prompt_fingerprints.splice(c, 1), g.Store.$store.chat.is_locked_prompt = 0 < g.Store.$store.messages.prompt_fingerprints.length, g.Chat.Alert.update("warn_prompt", !0 === g.Store.$store.chat.is_locked_prompt ? "show" : "hide")
                    }
                } catch (t) {}
            }, i.bd = function(t, i, n) {
                var e;
                try {
                    !0 !== this.ed.includes(t) || !0 !== i.required || -1 < (e = g.Store.$store.messages.prompt_fingerprints.indexOf(n)) && (g.Store.$store.messages.prompt_fingerprints.splice(e, 1), 0 === g.Store.$store.messages.prompt_fingerprints.length && (g.Store.$store.chat.is_locked_prompt = !1, g.Chat.Alert.update("warn_prompt", "hide")))
                } catch (t) {}
            }, i.md = function() {
                var t = this;
                try {
                    this.rd && (g.Date.timestamp() - this.rd >= this.Zf ? this.hide_compose() : g.Utility.set_timeout(function() {
                        t.md()
                    }, this.Yf))
                } catch (t) {}
            }, i.cd = function(t) {
                var i = !0;
                try {
                    var n = g.Utility.clone(t);
                    if (1 == (i = !g.Store.$store.messages.fingerprints[n.fingerprint])) void 0 === n.read && (n.read = !1), void 0 === n.metas && (n.metas = {
                        is_new: !1,
                        has_error: !1
                    }, "field" !== n.type && "picker" !== n.type || (n.metas.field = {
                        value: ""
                    })), g.Store.$store.messages.fingerprints[n.fingerprint] = !0, g.Store.$store.messages.list.push(n);
                    else
                        for (var e = 0; e < g.Store.$store.messages.list.length; e++)
                            if (g.Store.$store.messages.list[e].fingerprint === n.fingerprint) {
                                g.Utility.merge(g.Store.$store.messages.list[e], n);
                                break
                            }
                    this.kd(n.type, n.content, n.fingerprint, n.from, n.user || {}, n.timestamp)
                } catch (t) {} finally {
                    return i
                }
            }, i.vd = function(t) {
                var i = !1;
                try {
                    if (!0 === g.Store.$store.messages.fingerprints[t]) {
                        delete g.Store.$store.messages.fingerprints[t];
                        var n, e = {
                            messages: g.Store.$store.messages.list,
                            preview: g.Store.$store.messages.preview
                        };
                        for (n in e) {
                            var s = e[n];
                            if (0 < s.length)
                                for (var c = 0; c < s.length; c++) {
                                    var a = s[c];
                                    if (a.fingerprint === t) {
                                        s.splice(c, 1), this.$d(a.type, a.content, a.fingerprint, a.from, a.timestamp);
                                        break
                                    }
                                }
                        }
                        i = !0
                    }
                } catch (t) {} finally {
                    return i
                }
            }, i.kd = function(t, i, n, e, s, c) {
                try {
                    var a = "local" !== s.source && -1 === this.Qf.indexOf(s.source) && !0;
                    "operator" === e && (this.rd && 0 < c && c > this.rd && this.hide_compose(), 0 < c && 1 == a && (g.Chat.Alert.update("wait_reply", "lock"), g.Chat.Intent.update("game", !1), this.wd(t, i, n))), 0 < c && (this.zh = !0, this.Il = c, 1 == a && ("operator" === e ? this.Yc = !0 : this.Gc = !0), this.xd()), !1 === g.Store.$store.base.has_local_messages && "local" === s.source && (g.Store.$store.base.has_local_messages = !0)
                } catch (t) {}
            }, i.$d = function(t, i, n, e, s) {
                try {
                    "operator" === e && 0 < s && this.bd(t, i, n)
                } catch (t) {}
            }, i.xd = function() {
                try {
                    var t, i, n = !0 === this.zh && !0 !== g.Base.is_activity_outdated();
                    g.Store.$store.base.is_activity_ongoing !== n && (g.Store.$store.base.is_activity_ongoing = n, "input" !== (i = ((null === (t = document.activeElement) || void 0 === t ? void 0 : t.tagName) || "").toLowerCase()) && "textarea" !== i && g.Chat.Interface.request_dynamic_sizing_properties())
                } catch (t) {}
            }, i.ad = function(t) {
                try {
                    var i = this.get_message_from_store(t);
                    i.metas.is_new = !0, g.Utility.set_timeout(function() {
                        i.metas.is_new = !1
                    }, this.Gf)
                } catch (t) {}
            }, i.dd = function() {
                try {
                    this.Fd = !0, 0 < this.fd.length && (this.acknowledge_read_send(this.fd, !0), this.fd = []), g.Chat.State.retrigger("intent"), g.Chat.State.retrigger("scroll"), g.Chat.Field.focus_on_foreground(), this.ud(!0)
                } catch (t) {}
            }, i.sd = function() {
                try {
                    g.Library.crisp.client.Message.set_unread_messages_callback(function(t, i, n) {
                        g.Utility.set_timeout(function() {
                            g.Chat.Notification.update_unread(t, i, n)
                        }, 0)
                    })
                } catch (t) {}
            }, i.od = function(n) {
                var e = this;
                try {
                    this.ld.push(n), g.Utility.set_timeout(function() {
                        try {
                            var t, i = e.ld.indexOf(n); - 1 === i || (t = e.get_message_from_store(n)) && (t.metas.has_error = !0), e.ld.splice(i, 1)
                        } catch (t) {}
                    }, this.Wf)
                } catch (t) {}
            }, i.ud = function() {
                var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                try {
                    g.Chat.Intent.au.game || !1 === g.Chat.Intent.au.game || !0 !== this.Gc || !0 === this.Yc || null === this.jd && (this.jd = g.Utility.set_timeout(function() {
                        try {
                            !(t.jd = null) !== t.Yc && !0 === g.Base.mc.chat.wait_game && g.Chat.Intent.update("game")
                        } catch (t) {}
                    }, !0 === i ? this.Kf : this.Hf))
                } catch (t) {}
            }, i.pd = function(t, i, n, e) {
                var s, c = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                    a = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                try {
                    if (-1 === this.Qf.indexOf(t)) throw new Error("Source ".concat(t, " not allowed"));
                    this.Ed[t] !== i && (this.Ed[t] = i, s = (new Date).getTime(), "welcome" === t && (s = 0), this.received({
                        type: n,
                        timestamp: s,
                        content: e,
                        fingerprint: "$".concat(t),
                        from: "operator",
                        user: {
                            source: t,
                            type: "website",
                            user_id: g.Base.wh,
                            nickname: g.Base.mc.website.name
                        }
                    }, !1, c, a, !0))
                } catch (t) {}
            }, i.yd = function(t) {
                try {
                    if (-1 === this.Qf.indexOf(t)) throw new Error("Source ".concat(t, " not allowed"));
                    this.Ed[t] && (delete this.Ed[t], this.remove("$".concat(t)))
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.zh = !1, this.Yc = !1, this.Gc = !1, this.Fd = !1, this.Il = 0, this.ld = [], this.fd = [], this._d = [], this.hd = null, this.jd = null, this.rd = null, this.Ed = {}
                } catch (t) {}
            }, t
        }());
        g.Chat.Message = M;
        var T = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatMisc", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.update_operator_details = function(t) {
                try {
                    g.Utility.is_equal(t, this.zd) || g.Chat.State.propagate("operator", t)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.zd = {}
                } catch (t) {}
            }, t
        }());
        g.Chat.Misc = T;
        var U = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatNotification", this.Cd = 5, this.Ad = ["text", "file", "animation", "audio", "picker", "field", "carousel"], this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.update_unread = function() {
                var t = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                    e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                try {
                    var s, c = g.Store.$store.minimized.tooltips;
                    0 < (this.Xc = i) ? (g.Store.$store.minimized.pane.unread.count = i, s = !1 === g.Store.$store.minimized.tooltips.new_messages.visible, this.Id(i, n, e, s), null === this.qd && (this.qd = document.title), this.qd && !0 !== g.Base.is_invisible() && (document.title = "💬".concat(i, " - ").concat(this.qd)), 1 == s && (null !== this.Od && g.Utility.clear_timeout(this.Od), this.Od = g.Utility.set_timeout(function() {
                        t.Od = null, c.new_messages.visible = !0, c.new_messages.animate = !0, g.Utility.set_timeout(function() {
                            c.new_messages.animate = !1
                        }, t.Sd)
                    }, this.Dd * this.ba), g.Store.$store.minimized.pane.unread.visible = !0)) : (null !== this.Od && g.Utility.clear_timeout(this.Od), c.new_messages.visible = !1, c.new_messages.animate = !1, g.Store.$store.minimized.pane.unread.visible = !1, this.qd && (document.title = this.qd))
                } catch (t) {}
            }, i.check_clearance = function() {
                try {
                    var t = g.Chat.Selector.get("flow").scrollTop,
                        i = g.Chat.Selector.get("flow").scrollHeight;
                    g.Chat.Selector.get("flow").clientHeight + t >= i - g.Chat.Interface.Jf && g.Chat.Alert.update("new_messages", "hide")
                } catch (t) {}
            }, i.Id = function(t, i, n, e) {
                var s = [];
                try {
                    for (var c = null, a = [], r = n.length - 1; 0 <= r && !(-1 !== i.indexOf(n[r].fingerprint) && (s.unshift(n[r]), s.length >= this.Cd)); r--);
                    g.Store.$store.messages.preview = [];
                    for (var o = 0; o < s.length; o++) {
                        var h = s[o],
                            l = g.Utility.clone(h); - 1 !== this.Ad.indexOf(h.type) && g.Store.$store.messages.preview.push(l), null === (c = o === s.length - 1 && null === c ? l.fingerprint : c) && null !== this.Rd || a.push(l)
                    }
                    null !== c && (this.Rd = c);
                    for (var u = 0; u < a.length; u++) a[u].animate = !0;
                    g.Utility.set_timeout(function() {
                        for (var t = 0; t < a.length; t++) a[t].animate = !1
                    }, (!0 === e ? this.Dd * this.ba : 0) + this.Bd)
                } catch (t) {} finally {
                    return s
                }
            }, i.ht = function() {
                try {
                    this.Xc = 0, this.ba = 1e3, this.Dd = .1, this.Od = null, this.Rd = null, this.qd = null, this.Sd = 500, this.Bd = 1e3
                } catch (t) {}
            }, t
        }());
        g.Chat.Notification = U;
        var P = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatScroll", this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.to = function() {
                var t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                try {
                    null === i && (i = (t = g.Chat.Selector.get("flow")).scrollHeight - t.clientHeight), g.Chat.State.propagate("scroll", i), g.Chat.Notification.check_clearance()
                } catch (t) {}
            }, i.to_last_message = function() {
                var t, i, n, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "to",
                    s = !1;
                try {
                    !0 === g.Chat.Interface.chat_is_visible() && !0 === g.Chat.Message.Fd && (t = g.Chat.Selector.get("flow").scrollTop, i = g.Chat.Selector.get("flow").scrollHeight, n = g.Chat.Selector.get("flow").clientHeight, (!t || n + t >= i - this.Lf) && (s = !0, this.to()), !1 === s && "from" === e && g.Chat.Alert.update("new_messages", "show"))
                } catch (t) {} finally {
                    return s
                }
            }, i.unwind_wheel = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "scrollTop";
                try {
                    var e, s, c = t.target;
                    c && "number" == typeof t.wheelDelta && ((s = null) !== (s = !0 === c.classList.contains(i) ? c : c.closest(".".concat(i)) || null) && (e = s[n] - t.wheelDelta, s[n] = 0 <= e ? e : 0), t.stopPropagation(), t.preventDefault(), t.returnValue = !1)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Lf = 0, this.Bf = 0
                } catch (t) {}
            }, t
        }());
        g.Chat.Scroll = P;
        var L = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatSelector", this.Nd = {
                        header: "cc-1cff",
                        content: "cc-gye0",
                        flow: "cc-19vt",
                        flow_messages: "cc-nasd",
                        form_container: "cc-1tyx",
                        form_act: "cc-1xqi",
                        form_textarea_message: "cc-c5c3",
                        form_input_attach: "cc-oky3"
                    }, this.Qh(), this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht(), this.Qh()
                } catch (t) {}
            }, i.get = function(t) {
                var i = null;
                try {
                    if (void 0 !== this.Md[t]) i = this.Md[t];
                    else {
                        if (void 0 === this.Nd[t]) throw new Error("Selector with namespace ".concat(t, " not found"));
                        if (this.Ru) {
                            if (null === (i = this.Ru.querySelector(".".concat(this.Nd[t])))) throw new Error("Could not select the element with namespace: ".concat(t));
                            this.Md[t] = i
                        }
                    }
                } catch (t) {} finally {
                    return i
                }
            }, i.bind_all = function() {
                try {
                    this.Td(), this.Ud()
                } catch (t) {}
            }, i.Td = function() {
                try {
                    this.Pd = document.querySelector('head meta[name="viewport"]')
                } catch (t) {}
            }, i.Ud = function() {
                try {
                    this.Bu = this.Ru.querySelector(".cc-1hqb")
                } catch (t) {}
            }, i.Qh = function() {
                try {
                    this.Pd = null, this.Ru = null, this.Bu = null
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Md = {}
                } catch (t) {}
            }, t
        }());
        g.Chat.Selector = L;
        var J = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatSpeech", this.ba = 1e3, this.Ld = 9e4, this.Jd = 64e3, this.Vd = [
                        ["weba", "audio/webm; codecs=opus"],
                        ["weba", "audio/webm; codecs=vorbis"],
                        ["oga", "audio/ogg; codecs=vorbis"],
                        ["m4a", "audio/mp4; codecs=mp4a.40.5"]
                    ], this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.record = function() {
                var e = this;
                try {
                    !0 === g.Feature.has_audio_recording() && !0 === g.Base.mc.chat.file_transfer && null === this.Wd && navigator.mediaDevices.getUserMedia({
                        audio: !0,
                        video: !1
                    }).then(function(t) {
                        for (var i = 0; i < e.Vd.length; i++) {
                            var n = e.Vd[i];
                            if (!0 === window.MediaRecorder.isTypeSupported(n[1])) {
                                e.Hd = n[0], e.Kd = n[1];
                                break
                            }
                        }
                        if (null === e.Hd || null === e.Kd) throw new Error("No acceptable audio codec supported");
                        e.Wd = new window.MediaRecorder(t, {
                            mimeType: e.Kd,
                            audioBitsPerSecond: e.Jd
                        }), e.Wd.addEventListener("start", e.Gd.Mt(e)), e.Wd.addEventListener("stop", e.Yd.Mt(e)), e.Wd.addEventListener("resume", e.Zd.Mt(e)), e.Wd.addEventListener("pause", e.Xd.Mt(e)), e.Wd.addEventListener("dataavailable", e.Qd.Mt(e)), e.Wd.addEventListener("error", e.tv.Mt(e)), e.Wd.start()
                    }).catch(function(t) {
                        alert(g.Locale.text("chat", "chat_form_speech_capture_error"))
                    })
                } catch (t) {}
            }, i.cancel = function() {
                try {
                    null !== this.Wd && !0 !== this.iv && (this.iv = !0, this.nv = !0, this.Wd.stop())
                } catch (t) {}
            }, i.send = function() {
                try {
                    null !== this.Wd && !0 !== this.iv && (this.iv = !0, this.Wd.stop())
                } catch (t) {}
            }, i.Gd = function() {
                try {
                    this.ev = 0, this.sv = 0, g.Store.$store.chat.speech.duration = this.ev, g.Store.$store.chat.speech.progress = this.sv, this.Zd()
                } catch (t) {}
            }, i.Yd = function() {
                var t, i;
                try {
                    g.Store.$store.chat.speech.state = "none", this.cv(), !0 !== this.nv && (t = g.Date.timestamp(), (i = new window.File(this.av, "audio_".concat(t, ".").concat(this.Hd), {
                        type: this.Kd.split(";")[0].trim(),
                        lastModified: t
                    })).duration = this.ev, !0 === g.Base.mc.chat.file_transfer && g.Chat.File.handle_file_change([i]));
                    for (var n = this.Wd.stream.getTracks(), e = 0; e < n.length; e++) n[e].stop();
                    this.ht()
                } catch (t) {}
            }, i.Xd = function() {
                try {
                    this.cv(), g.Store.$store.chat.speech.state = "paused"
                } catch (t) {}
            }, i.Zd = function() {
                try {
                    g.Store.$store.chat.speech.state = "recording", this.rv()
                } catch (t) {}
            }, i.Qd = function(t) {
                try {
                    0 < t.data.size && this.av.push(t.data)
                } catch (t) {}
            }, i.tv = function(t) {
                try {
                    alert(g.Locale.text("chat", "chat_form_speech_capture_error"))
                } catch (t) {}
            }, i.rv = function() {
                var t, i = this;
                try {
                    null === this.ov && (t = this.Ld / this.ba, this.ov = g.Utility.set_interval(function() {
                        i.ev >= t ? i.Wd.pause() : (i.ev++, i.sv = Math.floor(100 * Math.min(i.ev / t, 1)), g.Store.$store.chat.speech.duration = i.ev, g.Store.$store.chat.speech.progress = i.sv)
                    }, this.ba))
                } catch (t) {}
            }, i.cv = function() {
                try {
                    null !== this.ov && (g.Utility.clear_interval(this.ov), this.ov = null)
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Wd = null, this.av = [], this.ev = 0, this.sv = 0, this.Hd = null, this.Kd = null, this.iv = !1, this.nv = !1, this.ov = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Speech = J;
        var V = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatState", this.hv = 250, this.lv = 240, this.uv = [
                        ["show", "unlock"],
                        ["unlock", "show"],
                        ["hide", "lock"],
                        ["lock", "hide"],
                        ["lock", "show"]
                    ], this.fv = {
                        trigger: this.dv,
                        alert: this.vv,
                        intent: this.pv,
                        operator: this.yv,
                        scroll: this.mv,
                        maximized: this._v,
                        textarea: this.gv
                    }, this.wv(), this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function(t) {
                var i = this;
                try {
                    this.ht(), t.push(function() {
                        i.wv()
                    })
                } catch (t) {}
            }, i.receive = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    var n, e, s = [];
                    for (n in t) t.hasOwnProperty(n) && (g.Utility.is_equal(t[n], this.bv[n]) || (s.push(n), this.bv[n] = t[n], !1 === i && void 0 !== this.kv[n] && delete this.kv[n]));
                    for (e = 0; e < s.length; e++) n = s[e], this.fv[n].Mt(this)(this.bv[n])
                } catch (t) {}
            }, i.propagate = function(t, i) {
                var n, e = this,
                    s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                    c = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : function() {},
                    a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function() {};
                try {
                    !0 !== s && g.Utility.is_equal(this.bv[t], i) ? "function" == typeof c && c(!1) : (this.kv[t] = i, null !== this.$v && (g.Utility.clear_timeout(this.$v), this.$v = null), (n = g.Utility.clone(this.bv))[t] = i, this.receive(n, !0), this.$v = g.Utility.set_timeout(function() {
                        var t;
                        g.Utility.is_empty(e.kv) ? "function" == typeof c && c(!1) : (t = g.Utility.clone(e.kv), e.kv = {}, e.$v = null, g.Library.crisp.client.Session.set_state(t, function(t) {
                            t ? "function" == typeof a && a() : "function" == typeof c && c(!0)
                        }))
                    }, this.hv))
                } catch (t) {}
            }, i.restore = function(t) {
                try {
                    for (var i in !0 === g.Base.is_full_view() && !0 !== g.Base.ml.lock_maximized && (t.maximized = !1), this.xv) void 0 === t[i] && (t[i] = this.xv[i]);
                    this.Fv = !0, this.bv = t, this.jv = g.Utility.keys(this.bv)
                } catch (t) {}
            }, i.retrigger = function(t) {
                try {
                    this.Ev(t, this.xv[t])
                } catch (t) {}
            }, i.trigger_default_all = function() {
                var t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                try {
                    for (t in this.xv) this.xv.hasOwnProperty(t) && this.Ev(t, this.xv[t], -1 !== i.indexOf(t))
                } catch (t) {}
            }, i.Ev = function(t, i) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                try {
                    if ("function" != typeof this.fv[t]) throw new Error("No such state handler: ".concat(t));
                    void 0 === this.bv[t] && (this.bv[t] = i), this.fv[t].Mt(this)(this.bv[t], n)
                } catch (t) {}
            }, i.zv = function(t) {
                var i = !1;
                try {
                    var n = this.jv.indexOf(t); - 1 !== n && (this.jv.splice(n, 1), i = !0)
                } catch (t) {} finally {
                    return i
                }
            }, i.dv = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    if (!1 === i && (this.zv("trigger"), 0 < (null == t ? void 0 : t.length)))
                        for (var n = 0; n < t.length; n++) g.Trigger.mark_processed(t[n])
                } catch (t) {}
            }, i.vv = function(t) {
                var i, n, e, s, c, a, r, o, h = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    if (!1 === h) {
                        this.zv("alert");
                        var l = !1,
                            u = {};
                        for (i in t)
                            if (t.hasOwnProperty(i)) {
                                if (n = t[i], e = g.Chat.Alert.au[i], s = !1, e === n) s = !0;
                                else if ("unlock" !== n && "lock" === e) s = !0;
                                else
                                    for (o = 0; o < this.uv.length; o++) e === (c = this.uv[o])[0] && n === c[1] && (s = !0);
                                if (r = "hide" === n || "lock" === n, 1 == (a = "show" === n || "unlock" === n) && (l = u[i] = !0), !1 === s) {
                                    if (1 == a) g.Chat.Alert.hook("show", i);
                                    else {
                                        if (1 != r) throw new Error("Unknown action: ".concat(n));
                                        g.Chat.Alert.hook("hide", i)
                                    }
                                    g.Chat.Alert.au[i] = n, g.Chat.Field.focus_on_foreground()
                                } else g.Chat.Alert.au[i] = n
                            }
                        g.Store.$store.chat.current_alerts = !0 === l ? u : null
                    }
                } catch (t) {}
            }, i.pv = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    if (g.Chat.Intent.au = t, !1 === i) {
                        var n, e = this.zv("intent");
                        for (n in t) g.Chat.Intent.toggle(n, t[n], !e);
                        g.Chat.Intent.cleanup(t)
                    }
                } catch (t) {}
            }, i.yv = function(t) {
                var i, n, e, s, c, a, r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    !1 === r && (this.zv("operator"), g.Chat.Misc.zd = t || {}, g.Utility.is_empty(g.Chat.Misc.zd) ? (i = "initial", e = "website", s = g.Base.wh) : (i = "ongoing", e = t.type || "operator", s = t.user_id, c = t.avatar, n = "website" === t.type ? t.nickname : g.Library.crisp.web.Name.parse_first_name(t.nickname)), (a = c || s ? g.Avatar.url(this.lv, e, s, c) : a) && ("ongoing" === i && (g.Store.$store.chat.ongoing_operator = {
                        type: e,
                        name: n,
                        user_id: s,
                        url: a
                    }, !0 === g.Base.mc.chat.ongoing_operator_face && (g.Store.$store.minimized.pane.is_ongoing = !0)), g.Store.$store.chat.status_marker = i), g.Chat.Interface.request_dynamic_sizing_properties(!0))
                } catch (t) {}
            }, i.mv = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    !1 === i && !1 === this.zv("scroll") && (g.Chat.Scroll.Bf = t, g.Utility.next_render(function() {
                        g.Chat.Selector.get("flow").scrollTop = g.Chat.Scroll.Bf
                    }))
                } catch (t) {}
            }, i._v = function(t) {
                var i, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    !1 === n && (i = !0 !== this.zv("maximized") && !0, !1 === (t = !0 === g.Base.ml.lock_maximized || t) ? (g.Chat.Interface.toggle_visibility("pane", i), g.Chat.Field.blur_from_foreground(), g.Chat.Viewport.unadapt(), g.Chat.Picker.hide(), g.Chat.Feedback.hide(), g.Chat.Interface.toggle_channel_dropdown(!1), g.Chat.Frame.close(), g.Chat.Game.stop(), g.Action.event("chat:closed")) : (!0 === g.Store.$store.chat.helpdesk.only && "helpdesk" !== g.Store.$store.chat.mode && g.Chat.Helpdesk.show_search(), g.Chat.Interface.toggle_visibility("chat", i), g.Chat.Field.focus_on_foreground(), g.Chat.Viewport.adapt(), g.Chat.Notification.check_clearance(), g.Action.event("chat:opened")))
                } catch (t) {}
            }, i.gv = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    !1 === i && (this.zv("textarea"), g.Action.set_message_text(t))
                } catch (t) {}
            }, i.wv = function() {
                try {
                    this.xv = {
                        trigger: g.Trigger.gh,
                        alert: g.Chat.Alert.au,
                        intent: g.Chat.Intent.au,
                        operator: g.Chat.Misc.zd,
                        scroll: g.Chat.Scroll.Bf,
                        maximized: g.Chat.Interface.Af,
                        textarea: g.Chat.Field.Mu
                    }
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Fv = !1, this.bv = {}, this.kv = {}, this.jv = [], this.$v = null
                } catch (t) {}
            }, t
        }());
        g.Chat.State = V;
        var W = new(function() {
            function t() {
                try {
                    this.ns = "CrispChatViewport", this.Cv = /;/g, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {}, i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.adapt = function() {
                var t, i;
                try {
                    !0 === g.Base.is_full_view() ? (!1 === this.Av && (null === this.Iv && (this.Iv = this.rt()), (t = g.Utility.clone(this.Iv)).width = "device-width", t["initial-scale"] = "1", t["maximum-scale"] = "1", t["user-scalable"] = "0", i = this.qv(t), null !== g.Chat.Selector.Pd ? g.Chat.Selector.Pd.setAttribute("content", i) : (g.Chat.Selector.Pd = g.Template.dom(g.Template.render("viewport", {
                        content: i
                    })), document.querySelector("head").appendChild(g.Chat.Selector.Pd))), this.Av = !0) : this.Av = !1
                } catch (t) {}
            }, i.unadapt = function() {
                var t;
                try {
                    !0 === this.Av && (null !== g.Chat.Selector.Pd && 0 < g.Chat.Selector.Pd.length && ((t = this.qv(this.Iv)) ? g.Chat.Selector.Pd.setAttribute("content", t) : (g.Chat.Selector.Pd.remove(), g.Chat.Selector.Pd = null)), this.Av = !1)
                } catch (t) {}
            }, i.rt = function() {
                var t = {};
                try {
                    if (t = {}, null !== g.Chat.Selector.Pd) {
                        var i = g.Chat.Selector.Pd.getAttribute("content");
                        if (i = (i = i.trim()).replace(this.Cv, ","))
                            for (var n, e, s, c, a = -1 !== i.indexOf(",") ? i.split(",") : [i], r = 0; r < a.length; r++) - 1 !== (n = a[r]).indexOf("=") && (s = (e = n.split("="))[0].trim(), c = e[1].trim(), s && c && (t[s] = c))
                    }
                } catch (t) {} finally {
                    return t
                }
            }, i.qv = function(t) {
                var i = "";
                try {
                    var n, e = [];
                    for (n in t) t.hasOwnProperty(n) && e.push([n, t[n]].join("="));
                    i = e.join(", ")
                } catch (t) {} finally {
                    return i
                }
            }, i.ht = function() {
                try {
                    this.Av = !1, this.Iv = null
                } catch (t) {}
            }, t
        }());
        g.Chat.Viewport = W;
        var H = new(function() {
            function t() {
                try {
                    this.ns = "CrispMagnify", this.Event = void 0, this.Pl = {
                        image: ["image/jpg", "image/jpeg", "image/png", "image/gif"],
                        video: ["video/mp4", "video/webm"]
                    }, this.Ov = 250, this.Sv = ["image", "video"], this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.magnify = function(t, i) {
                var n = this,
                    e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                try {
                    var c = document.querySelector(".cc-uxns"),
                        a = this.Dv(-1 !== this.Sv.indexOf(t) ? s : null);
                    g.Utility.merge(g.Store.$store.magnify, {
                        state: "loading",
                        type: t,
                        source: i,
                        name: e,
                        messages: a
                    });
                    var r = g.Template.dom(g.Template.render("magnify"));
                    this.Rv = r, c ? c.parentNode.replaceChild(this.Rv, c) : g.Base.Kc.appendChild(r), g.Magnify.Event.bind_all(), g.Template.vue(this.Rv), g.Utility.set_timeout(function() {
                        n.Rv.focus()
                    }, this.Ov)
                } catch (t) {}
            }, i.disappear = function() {
                try {
                    this.Rv && this.Rv.remove(), !0 === g.Chat.Vc && g.Chat.Field.focus_on_foreground()
                } catch (t) {}
            }, i.navigate = function(t) {
                try {
                    var i, n = g.Store.$store.magnify.messages[t];
                    !n || !0 !== g.Chat.Vc || (i = g.Chat.Message.get_message_from_store(n.fingerprint)) && this.magnify(n.type, i.content.url, i.content.name, i.fingerprint)
                } catch (t) {}
            }, i.Dv = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    i = {
                        previous: null,
                        next: null
                    };
                try {
                    if (null !== t && !isNaN(Number(t)))
                        for (var n = parseInt(t, 10), e = g.Library.crisp.client.Message.get_cached_messages(), s = 0; s < e.length; s++)
                            if (e[s].fingerprint === n) {
                                if (0 < s)
                                    for (var c = s - 1; 0 <= c; c--) {
                                        var a = e[c],
                                            r = this.Bv(a);
                                        if (r && a) {
                                            i.previous = {
                                                fingerprint: a.fingerprint,
                                                type: r
                                            };
                                            break
                                        }
                                    }
                                if (s < e.length - 1)
                                    for (var o = s + 1; o < e.length; o++) {
                                        var h = e[o],
                                            l = this.Bv(h);
                                        if (l) {
                                            i.next = {
                                                fingerprint: h.fingerprint,
                                                type: l
                                            };
                                            break
                                        }
                                    }
                                break
                            }
                } catch (t) {} finally {
                    return i
                }
            }, i.Bv = function(t) {
                var i = null;
                try {
                    var n, e = (null === (n = t.content) || void 0 === n ? void 0 : n.type) || null;
                    "file" === t.type && (!0 === this.Pl.image.includes(e) && (i = "image"), !0 === this.Pl.video.includes(e) && (i = "video"))
                } catch (t) {} finally {
                    return i
                }
            }, i.ht = function() {
                try {
                    this.Rv = null
                } catch (t) {}
            }, t
        }());
        g.Magnify = H;
        var K = new(function() {
            function t() {
                try {
                    this.ns = "CrispMagnifyEvent", this.pt = ["disappear_fuzzy", "disappear", "keydown", "navigate_click"], this.Nv = 27, this.Mv = 37, this.Tv = 39
                } catch (t) {}
            }
            var i = t.prototype;
            return i.disappear_fuzzy = function(t) {
                try {
                    null != t && t.target && !0 === t.target.classList.contains("cc-uxns") && g.Magnify.disappear()
                } catch (t) {}
            }, i.disappear = function() {
                try {
                    g.Magnify.disappear()
                } catch (t) {}
            }, i.navigate_click = function(t) {
                try {
                    g.Magnify.navigate(t)
                } catch (t) {}
            }, i.keydown = function(t) {
                try {
                    switch (t.keyCode) {
                        case this.Nv:
                            g.Magnify.disappear();
                            break;
                        case this.Mv:
                            g.Magnify.navigate("previous");
                            break;
                        case this.Tv:
                            g.Magnify.navigate("next")
                    }
                } catch (t) {}
            }, i.bind_all = function() {
                try {
                    g.Store.bind_events("magnify", this.pt, this)
                } catch (t) {}
            }, t
        }());
        g.Magnify.Event = K;
        var G = new(function() {
            function t() {
                try {
                    this.ns = "CrispBrowsing", this.Assist = void 0, this.Qh()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    g.Utility.reset_instance_children(g.Browsing), this.Qh()
                } catch (t) {}
            }, i.Qh = function() {
                try {
                    this.Uv = null, this.Pv = null
                } catch (t) {}
            }, t
        }());
        g.Browsing = G;
        var Y = new(function() {
            function t() {
                try {
                    this.ns = "CrispBrowsingAssist", this.Lv = "assist", this.Jv = 500, this.Vv = 750, this.Wv = 100, this.Hv = 5, this.Kv = 600, this.Qh(), this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.stop(), this.Qh(), this.ht()
                } catch (t) {}
            }, i.start = function() {
                try {
                    null === g.Browsing.Pv && (g.Browsing.Pv = this.Lv, g.Browsing.Uv = g.Template.dom(g.Template.render("browsing_assist")), this.Gv = g.Browsing.Uv.querySelector(".cc-trvs"), g.Base.Kc.appendChild(g.Browsing.Uv), g.Template.vue(g.Browsing.Uv))
                } catch (t) {}
            }, i.stop = function() {
                try {
                    g.Browsing.Pv === this.Lv && (g.Browsing.Pv = null, g.Browsing.Uv.remove(), g.Browsing.Uv = null, this.Gv = null)
                } catch (t) {}
            }, i.pipe_mouse = function(t) {
                try {
                    g.Browsing.Pv === this.Lv && null !== this.Gv && t.mouse && (this.Gv.style.setProperty("display", "inline-block", "important"), this.Gv.style.setProperty("left", "".concat(t.mouse.x, "px"), "important"), this.Gv.style.setProperty("top", "".concat(t.mouse.y, "px"), "important"))
                } catch (t) {}
            }, i.pipe_scroll = function(t) {
                var i = this;
                try {
                    if (g.Browsing.Pv === this.Lv && t.scroll && window.scroll) {
                        null !== this.Yv && g.Utility.clear_interval(this.Yv);
                        var n, e = {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            s = {
                                x: 0,
                                y: 0
                            };
                        for (n in s) s.hasOwnProperty(n) && (s[n] = (t.scroll[n] - e[n]) / this.Wv);
                        var c = 0,
                            a = this.Jv / this.Wv;
                        0 < a && (0 !== s.x || 0 !== s.y) && (g.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!0), this.Yv = g.Utility.set_interval(function() {
                            e.x += s.x, e.y += s.y, window.scroll(e.x, e.y), ++c >= i.Wv && (g.Utility.clear_interval(i.Yv), (i.Yv = null) !== i.Zv && g.Utility.clear_timeout(i.Zv), i.Zv = g.Utility.set_timeout(function() {
                                i.Zv = null, g.Library.crisp.client.Browsing.toggle_ignore_scroll_event(!1)
                            }, i.Vv))
                        }, a))
                    }
                } catch (t) {}
            }, i.pipe_click = function(t) {
                var i, n, e, s, c = this;
                try {
                    g.Browsing.Pv === this.Lv && (null !== this.Gv && (this.Gv.setAttribute("data-is-clicking", "true"), null !== this.Xv && g.Utility.clear_timeout(this.Xv), this.Xv = g.Utility.set_timeout(function() {
                        c.Xv = null, c.Gv.removeAttribute("data-is-clicking")
                    }, this.Kv)), t.click && (i = t.click.x - this.Hv, n = t.click.y, i < 0 && (i = 0), e = document.elementFromPoint(i, n), (s = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, window, null, t.click.x, t.click.y, 0, 0, !1, !1, !1, !1, 0, null), s.ts = !0, e && e.dispatchEvent(s)))
                } catch (t) {}
            }, i.Qh = function() {
                try {
                    this.Gv = null
                } catch (t) {}
            }, i.ht = function() {
                try {
                    this.Yv = null, this.Zv = null, this.Xv = null
                } catch (t) {}
            }, t
        }());
        g.Browsing.Assist = Y;
        var Z = new(function() {
            function t() {
                try {
                    this.ns = "CrispCall", this.Event = null, this.Qv = 6, this.ba = 1e3, this.ht()
                } catch (t) {}
            }
            var i = t.prototype;
            return i.reset = function() {
                try {
                    this.ht()
                } catch (t) {}
            }, i.ring = function(t) {
                try {
                    this.tp(), g.Sound.initialize("call"), g.Utility.merge(g.Store.$store.call, {
                        mode: t.mode,
                        size: "maximized",
                        state: null,
                        duration: 0,
                        user: {
                            user_id: t.user.user_id || g.Base.wh,
                            nickname: g.Library.crisp.web.Name.parse_first_name(t.user.nickname) || g.Base.mc.website.name,
                            type: t.user.user_id ? "operator" : "website"
                        },
                        actions: this.ip(t.mode),
                        muted: {
                            audio: !1,
                            video: !1
                        }
                    }), this.np = g.Template.dom(g.Template.render("call_ring")), g.Call.Event.bind(), g.Template.vue(this.np), g.Base.Kc.appendChild(this.np), g.Sound.start("call", "call-ring", !0)
                } catch (t) {}
            }, i.screen = function() {
                try {
                    this.tp(), this.np = g.Template.dom(g.Template.render("call_screen")), g.Call.Event.bind(), g.Template.vue(this.np), this.ep(), this.sp("connecting"), g.Base.Kc.appendChild(this.np)
                } catch (t) {}
            }, i.stop = function() {
                try {
                    this.tp(), g.Sound.start("call", "call-hangup")
                } catch (t) {}
            }, i.success = function(t) {
                try {
                    switch (t) {
                        case "media_remote":
                            this.cp();
                            break;
                        case "media_local":
                            this.ap()
                    }
                } catch (t) {}
            }, i.error = function() {
                try {
                    this.tp(), g.Sound.start("call", "call-hangup")
                } catch (t) {}
            }, i.toggle_media_status = function(t) {
                var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                try {
                    for (var n = null, e = 0; e < g.Store.$store.call.actions.length; e++) {
                        var s = g.Store.$store.call.actions[e];
                        if (s.type === t) {
                            n = s;
                            break
                        }
                    }
                    null !== n && (n.state = i), g.Store.$store.call.muted[t] = !1 === i
                } catch (t) {}
            }, i.toggle_fullscreen_mode = function() {
                var t, i;
                try {
                    "minimized" === g.Store.$store.call.size || !0 !== this.rp("remote") || (t = this.np.querySelector('.cc-18c0[data-type="remote"] video')) && (i = null, "function" == typeof(i = !1 === this.op ? t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || null : t.exitFullscreen || t.msExitFullscreen || t.mozExitFullScreen || t.webkitExitFullScreen || null) && i.Mt(t)())
                } catch (t) {}
            }, i.toggle_fullscreen_aspect_ratio = function() {
                var t;
                try {
                    this.op = !!document.fullscreenElement, !0 !== this.rp("remote") || (t = this.np.querySelector('.cc-18c0[data-type="remote"]')) && (!0 === this.op ? t.setAttribute("data-aspect", "contain") : t.removeAttribute("data-aspect"))
                } catch (t) {}
            }, i.reset_position = function() {
                try {
                    var t = this.np.querySelector(".cc-q3eu");
                    t && (t.style.removeProperty("top"), t.style.removeProperty("left"))
                } catch (t) {}
            }, i.tp = function() {
                try {
                    null !== this.np && (this.np.remove(), this.np = null, this.op = !1, this.hp(), g.Sound.stop("call", "call-ring"))
                } catch (t) {}
            }, i.ap = function() {
                try {
                    this.lp("local")
                } catch (t) {}
            }, i.cp = function() {
                try {
                    !0 === this.lp("remote") && (this.sp("ongoing"), g.Sound.start("call", "call-established"))
                } catch (t) {}
            }, i.lp = function(t) {
                var i = this.np.querySelector('.cc-18c0[data-type="'.concat(t, '"]'));
                if (i) {
                    var n = i.querySelector("video");
                    if (n) return n.srcObject = g.Library.crisp.client.Call.get_stream(t), n.onloadeddata = function() {
                        var t = n.videoWidth < n.videoHeight ? "contain" : null;
                        null !== t && n.setAttribute("data-aspect", t)
                    }, !0
                }
                return !1
            }, i.ip = function(t) {
                var i;
                try {
                    i = [{
                        type: "audio",
                        state: !0,
                        visible: !0,
                        supported: !0
                    }, {
                        type: "video",
                        state: !0,
                        visible: !0,
                        supported: "video" === t
                    }, {
                        type: "hangup",
                        state: !1,
                        visible: !0,
                        supported: !0
                    }, {
                        type: "toggle",
                        state: !1,
                        visible: !0,
                        supported: !0
                    }, {
                        type: "screensharing",
                        state: !1,
                        visible: !0,
                        supported: g.Library.crisp.client.Call.has_support_screensharing()
                    }]
                } catch (t) {} finally {
                    return i || []
                }
            }, i.sp = function(t) {
                try {
                    "ongoing" === (g.Store.$store.call.state = t) && this.up()
                } catch (t) {}
            }, i.up = function() {
                var t = this;
                try {
                    this.hp(), null === this.fp && (this.dp = 0, this.fp = g.Utility.set_interval(function() {
                        t.dp++, g.Store.$store.call.duration = t.dp
                    }, this.ba))
                } catch (t) {}
            }, i.hp = function() {
                try {
                    null !== this.fp && (g.Utility.clear_interval(this.fp), this.fp = null, g.Store.$store.call.duration = 0)
                } catch (t) {}
            }, i.ep = function() {
                var a = this;
                try {
                    var r, o, h, l, i, s, n, e, u = this.np.querySelector(".cc-q3eu");
                    u && (i = function(t, i, n, e) {
                        r = u.offsetLeft, o = u.offsetTop, h = t.clientX, l = t.clientY, g.Utility.add_event_listener(a.ns, "document", i, s), g.Utility.add_event_listener(a.ns, "document", n, e)
                    }, s = function(t) {
                        t.preventDefault(), t.stopPropagation();
                        var i = null !== (c = t.touches) && void 0 !== c && c[0] ? t.touches[0] : t,
                            n = o + (i.clientY - l),
                            e = r + (i.clientX - h),
                            s = a.Qv,
                            c = a.Qv,
                            t = window.innerWidth - u.clientWidth - a.Qv,
                            i = window.innerHeight - u.clientHeight - a.Qv;
                        return e < s ? e = s : t < e && (e = t), n < c ? n = c : i < n && (n = i), u.style.setProperty("top", "".concat(n, "px"), "important"), u.style.setProperty("left", "".concat(e, "px"), "important"), !1
                    }, n = function() {
                        g.Utility.remove_event_listener(a.ns, "document", "mousemove"), g.Utility.remove_event_listener(a.ns, "document", "mouseup")
                    }, e = function() {
                        g.Utility.remove_event_listener(a.ns, "document", "touchmove"), g.Utility.remove_event_listener(a.ns, "document", "touchend")
                    }, u.addEventListener("mousedown", function(t) {
                        "minimized" === g.Store.$store.call.size && i(t, "mousemove", "mouseup", n)
                    }), u.addEventListener("touchstart", function(t) {
                        "minimized" !== g.Store.$store.call.size || null !== (t = (null === (t = t.touches) || void 0 === t ? void 0 : t[0]) || null) && i(t, "touchmove", "touchend", e)
                    }))
                } catch (t) {}
            }, i.rp = function(t) {
                t = g.Library.crisp.client.Call.get_stream(t);
                return null !== t && 0 < t.getVideoTracks().length
            }, i.ht = function() {
                try {
                    this.np = null, this.dp = 0, this.fp = null, this.op = !1
                } catch (t) {}
            }, t
        }());
        g.Call = Z;
        var X = new(function() {
            function t() {
                try {
                    this.ns = "CrispCallEvent", this.pt = ["ring_accept_click", "ring_decline_click", "action_click", "toggle_fullscreen_mode_click", "toggle_fullscreen_aspect_ratio_click"]
                } catch (t) {}
            }
            var i = t.prototype;
            return i.ring_accept_click = function() {
                try {
                    g.Library.crisp.client.Call.accept(), g.Call.screen()
                } catch (t) {}
            }, i.ring_decline_click = function() {
                try {
                    g.Library.crisp.client.Call.decline()
                } catch (t) {}
            }, i.action_click = function(t) {
                try {
                    switch (t) {
                        case "video":
                            g.Library.crisp.client.Call.toggle_video();
                            break;
                        case "audio":
                            g.Library.crisp.client.Call.toggle_audio();
                            break;
                        case "screensharing":
                            g.Library.crisp.client.Call.toggle_screensharing();
                            break;
                        case "hangup":
                            g.Library.crisp.client.Call.stop();
                            break;
                        case "toggle":
                            g.Store.$store.call.size = "minimized" === g.Store.$store.call.size ? "maximized" : "minimized", g.Call.reset_position()
                    }
                } catch (t) {}
            }, i.toggle_fullscreen_mode_click = function() {
                try {
                    g.Call.toggle_fullscreen_mode()
                } catch (t) {}
            }, i.toggle_fullscreen_aspect_ratio_click = function() {
                try {
                    g.Call.toggle_fullscreen_aspect_ratio()
                } catch (t) {}
            }, i.bind = function() {
                try {
                    g.Store.bind_events("call", this.pt, this)
                } catch (t) {}
            }, t
        }());
        g.Call.Event = X;
        var Q = {
            push: g.Pipeline.push.Mt(g.Pipeline),
            get: g.Pipeline.get.Mt(g.Pipeline),
            set: g.Pipeline.set.Mt(g.Pipeline),
            is: g.Pipeline.is.Mt(g.Pipeline),
            on: g.Pipeline.on.Mt(g.Pipeline),
            off: g.Pipeline.off.Mt(g.Pipeline),
            do: g.Pipeline.do.Mt(g.Pipeline),
            config: g.Pipeline.config.Mt(g.Pipeline),
            safe: g.Pipeline.safe.Mt(g.Pipeline),
            help: g.Pipeline.help.Mt(g.Pipeline)
        };
        if (Object.defineProperty(Q, "__init", {
                enumerable: !1,
                value: g.Base.init.Mt(g.Base)
            }), Object.defineProperty(Q, "__spool", {
                enumerable: !1,
                value: {}
            }), Object.defineProperty(Q, "__debug", {
                enumerable: !1,
                value: g
            }), Q.__spool.pending_actions = [], "object" == typeof window.$crisp && 0 < window.$crisp.length)
            for (var tt = 0; tt < window.$crisp.length; tt++) Q.__spool.pending_actions.push(window.$crisp[tt]);
        window.$__CRISP_INSTANCE = Q, window.$crisp = Q
    } catch (t) {}
})();