(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38], {
        7038: function(e, n, t) {
            e.exports = function(e, n) {
                "use strict";
                var t = function() {
                    return (t = Object.assign || function(e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        return e
                    }).apply(this, arguments)
                };

                function r(e, t, r) {
                    void 0 === r && (r = window);
                    var i = n.useRef(null);
                    n.useEffect(function() {
                        i.current = t
                    }, [t]), n.useEffect(function() {
                        if (r && r.addEventListener) {
                            var n = function(e) {
                                i.current && i.current(e)
                            };
                            return r.addEventListener(e, n),
                                function() {
                                    r.removeEventListener(e, n)
                                }
                        }
                    }, [e, r])
                }
                var i = function() {
                    if ("undefined" != typeof navigator) {
                        var e = navigator.userAgent;
                        return {
                            info: e,
                            Android: function() {
                                return e.match(/Android/i)
                            },
                            BlackBerry: function() {
                                return e.match(/BlackBerry/i)
                            },
                            IEMobile: function() {
                                return e.match(/IEMobile/i)
                            },
                            iOS: function() {
                                return e.match(/iPhone|iPad|iPod/i)
                            },
                            iPad: function() {
                                return e.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2
                            },
                            OperaMini: function() {
                                return e.match(/Opera Mini/i)
                            },
                            any: function() {
                                return i.Android() || i.BlackBerry() || i.iOS() || i.iPad() || i.OperaMini() || i.IEMobile()
                            }
                        }
                    }
                }();

                function o(e, n) {
                    for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
                    if ("function" != typeof n) throw TypeError("callback must be a function");
                    for (var i = Object(e), o = i.length >>> 0, u = t[2], c = 0; c < o; c++) {
                        var a = i[c];
                        if (n.call(u, a, c, i)) return a
                    }
                }

                function u(i) {
                    var u = i.clickables,
                        c = void 0 === u ? ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"] : u,
                        a = i.children,
                        l = i.color,
                        s = void 0 === l ? "220, 90, 90" : l,
                        f = i.innerScale,
                        d = void 0 === f ? .6 : f,
                        y = i.innerSize,
                        S = void 0 === y ? 8 : y,
                        p = i.innerStyle,
                        v = i.outerAlpha,
                        h = void 0 === v ? .4 : v,
                        m = i.outerScale,
                        b = void 0 === m ? 6 : m,
                        g = i.outerSize,
                        E = void 0 === g ? 8 : g,
                        x = i.outerStyle,
                        k = i.showSystemCursor,
                        z = void 0 !== k && k,
                        j = i.trailingSpeed,
                        w = void 0 === j ? 8 : j,
                        C = n.useMemo(function() {
                            return {
                                children: a,
                                color: s,
                                innerScale: d,
                                innerSize: S,
                                innerStyle: p,
                                outerAlpha: h,
                                outerScale: b,
                                outerSize: E,
                                outerStyle: x
                            }
                        }, [a, s, d, S, p, h, b, E, x]),
                        A = n.useRef(null),
                        L = n.useRef(null),
                        O = n.useRef(null),
                        I = n.useRef(null),
                        M = n.useState({
                            x: 0,
                            y: 0
                        }),
                        P = M[0],
                        R = M[1],
                        B = n.useState(!1),
                        F = B[0],
                        _ = B[1],
                        q = n.useState(C),
                        T = q[0],
                        N = q[1],
                        X = n.useState(!1),
                        Y = X[0],
                        D = X[1],
                        G = n.useState(!1),
                        H = G[0],
                        J = G[1],
                        K = n.useRef(0),
                        Q = n.useRef(0),
                        U = n.useCallback(function(e) {
                            var n = e.clientX,
                                t = e.clientY;
                            R({
                                x: n,
                                y: t
                            }), L.current.style.top = "".concat(t, "px"), L.current.style.left = "".concat(n, "px"), K.current = n, Q.current = t
                        }, []),
                        V = n.useCallback(function(e) {
                            void 0 !== I.current && (P.x += (K.current - P.x) / w, P.y += (Q.current - P.y) / w, A.current.style.top = "".concat(P.y, "px"), A.current.style.left = "".concat(P.x, "px")), I.current = e, O.current = requestAnimationFrame(V)
                        }, [O]);
                    n.useEffect(function() {
                        return O.current = requestAnimationFrame(V),
                            function() {
                                return cancelAnimationFrame(O.current)
                            }
                    }, [V]);
                    var W = function(e, n) {
                            return "".concat(parseInt(String(e * n)), "px")
                        },
                        Z = n.useCallback(function(e, n, t) {
                            e && (e.style.height = W(n, t), e.style.width = W(n, t))
                        }, []),
                        $ = n.useCallback(function() {
                            return D(!0)
                        }, []),
                        ee = n.useCallback(function() {
                            return D(!1)
                        }, []),
                        en = n.useCallback(function() {
                            return _(!0)
                        }, []),
                        et = n.useCallback(function() {
                            return _(!1)
                        }, []);
                    r("mousemove", U), r("mousedown", $), r("mouseup", ee), r("mouseover", en), r("mouseout", et), n.useEffect(function() {
                        Y ? (Z(L.current, T.innerSize, T.innerScale), Z(A.current, T.outerSize, T.outerScale)) : (Z(L.current, T.innerSize, 1), Z(A.current, T.outerSize, 1))
                    }, [T.innerSize, T.innerScale, T.outerSize, T.outerScale, Z, Y]), n.useEffect(function() {
                        H && (Z(L.current, T.innerSize, 1.2 * T.innerScale), Z(A.current, T.outerSize, 1.4 * T.outerScale))
                    }, [T.innerSize, T.innerScale, T.outerSize, T.outerScale, Z, H]), n.useEffect(function() {
                        F ? (L.current.style.opacity = "1", A.current.style.opacity = "1") : (L.current.style.opacity = "0", A.current.style.opacity = "0")
                    }, [F]), n.useEffect(function() {
                        var e = document.querySelectorAll(c.map(function(e) {
                            return "object" == typeof e && (null == e ? void 0 : e.target) ? e.target : null != e ? e : ""
                        }).join(","));
                        return e.forEach(function(e) {
                                z || (e.style.cursor = "none");
                                var n = "object" == typeof c ? o(c, function(n) {
                                        return "object" == typeof n && e.matches(n.target)
                                    }) : {},
                                    r = t(t({}, C), n);
                                e.addEventListener("mouseover", function() {
                                    D(!0), N(r)
                                }), e.addEventListener("click", function() {
                                    D(!0), J(!1)
                                }), e.addEventListener("mousedown", function() {
                                    J(!0)
                                }), e.addEventListener("mouseup", function() {
                                    D(!0)
                                }), e.addEventListener("mouseout", function() {
                                    D(!1), J(!1), N(C)
                                })
                            }),
                            function() {
                                e.forEach(function(e) {
                                    var n = "object" == typeof c ? o(c, function(n) {
                                            return "object" == typeof n && e.matches(n.target)
                                        }) : {},
                                        r = t(t({}, C), n);
                                    e.removeEventListener("mouseover", function() {
                                        D(!0), N(r)
                                    }), e.removeEventListener("click", function() {
                                        D(!0), J(!1)
                                    }), e.removeEventListener("mousedown", function() {
                                        J(!0)
                                    }), e.removeEventListener("mouseup", function() {
                                        D(!0)
                                    }), e.removeEventListener("mouseout", function() {
                                        D(!1), J(!1), N(C)
                                    })
                                })
                            }
                    }, [Y, c, z, C]);
                    var er = {
                            zIndex: 999,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "fixed",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            transform: "translate(-50%, -50%)",
                            transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"
                        },
                        ei = {
                            cursorInner: t(t({
                                width: T.children ? "auto" : T.innerSize,
                                height: T.children ? "auto" : T.innerSize,
                                backgroundColor: T.children ? "transparent" : "rgba(".concat(T.color, ", 1)")
                            }, er), T.innerStyle && T.innerStyle),
                            cursorOuter: t(t({
                                width: T.outerSize,
                                height: T.outerSize,
                                backgroundColor: "rgba(".concat(T.color, ", ").concat(T.outerAlpha, ")")
                            }, er), T.outerStyle && T.outerStyle)
                        };
                    return z || (document.body.style.cursor = "none"), e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            ref: A,
                            style: ei.cursorOuter
                        }), e.jsx("div", t({
                            ref: L,
                            style: ei.cursorInner
                        }, {
                            children: e.jsx("div", t({
                                style: {
                                    opacity: T.children ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out"
                                }
                            }, {
                                children: T.children
                            }))
                        }))]
                    })
                }
                return function(n) {
                    var r = n.children,
                        o = n.clickables,
                        c = n.color,
                        a = n.innerScale,
                        l = n.innerSize,
                        s = n.innerStyle,
                        f = n.outerAlpha,
                        d = n.outerScale,
                        y = n.outerSize,
                        S = n.outerStyle,
                        p = n.showSystemCursor,
                        v = n.trailingSpeed;
                    return "undefined" != typeof navigator && i.any() ? e.jsx(e.Fragment, {}) : e.jsx(u, t({
                        clickables: o,
                        color: c,
                        innerScale: a,
                        innerSize: l,
                        innerStyle: s,
                        outerAlpha: f,
                        outerScale: d,
                        outerSize: y,
                        outerStyle: S,
                        showSystemCursor: p,
                        trailingSpeed: v
                    }, {
                        children: r
                    }))
                }
            }(t(7437), t(2265))
        }
    }
]);