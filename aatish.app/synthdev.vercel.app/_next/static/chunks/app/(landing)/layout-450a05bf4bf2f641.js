(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [262], {
        7270: function(n, e, i) {
            Promise.resolve().then(i.bind(i, 6206))
        },
        6206: function(n, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return c
                }
            });
            var a = i(7437),
                t = i(1517),
                s = i(3641),
                r = i(8864),
                l = i.n(r);
            let o = l()(() => i.e(38).then(i.t.bind(i, 7038, 23)), {
                loadableGenerated: {
                    webpack: () => [7038]
                },
                ssr: !1
            });

            function c(n) {
                let {
                    children: e
                } = n;
                return (0, a.jsxs)("main", {
                    children: [(0, a.jsx)(t.Z, {}), (0, a.jsx)(s.Z, {}), (0, a.jsx)(o, {
                        innerSize: 0,
                        outerSize: 16,
                        color: "255, 255, 255",
                        innerScale: 0,
                        outerAlpha: 1,
                        outerScale: 2,
                        outerStyle: {
                            mixBlendMode: "exclusion"
                        },
                        clickables: ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link", "video", {
                            target: ".cursor-button-card",
                            outerScale: 8,
                            innerSize: 16,
                            innerScale: 6,
                            innerStyle: {
                                backgroundImage: 'url("/view-project.svg")',
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }
                        }, {
                            target: ".cursor-text-xxl",
                            outerScale: 12
                        }]
                    }), e]
                })
            }
        },
        1517: function(n, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return t
                }
            });
            var a = i(7437);

            function t() {
                return (0, a.jsxs)("div", {
                    className: "bg-particles",
                    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
                })
            }
        },
        3641: function(n, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var a = i(7437);
            i(2265);
            var t = i(1396),
                s = i.n(t),
                r = i(9844),
                l = i(9348);

            function o() {
                let n = {
                        initial: {
                            opacity: 0,
                            scale: .5
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .2
                        },
                        whileHover: {
                            scale: 1.2,
                            transition: {
                                duration: .2
                            }
                        }
                    },
                    e = {
                        initial: {
                            opacity: 0,
                            x: 100
                        },
                        animate: {
                            opacity: 1,
                            x: 1
                        },
                        whileHover: {
                            x: -10,
                            transition: {
                                duration: .2
                            }
                        }
                    };
                return (0, a.jsx)("div", {
                    className: "p-nav pointer-events-none fixed z-50 h-screen w-full",
                    children: (0, a.jsxs)("div", {
                        className: "flex h-full flex-col justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "flex w-full items-start justify-between",
                            children: [(0, a.jsx)(s(), {
                                href: "/",
                                className: "avatar placeholder",
                                children: (0, a.jsx)(r.E.div, {
                                    initial: n.initial,
                                    animate: n.animate,
                                    transition: n.transition,
                                    whileHover: n.whileHover,
                                    className: "pointer-events-auto rounded-full bg-base-content p-1 text-xs font-black text-base-100 lg:p-3 lg:text-sm",
                                    children: (0, a.jsx)("p", {
                                        children: "JR"
                                    })
                                })
                            }), (0, a.jsxs)("ul", {
                                className: "pointer-events-auto flex flex-row space-x-6 text-end text-sm font-bold uppercase lg:flex-col lg:space-x-0",
                                children: [(0, a.jsx)(r.E.li, {
                                    initial: e.initial,
                                    animate: e.animate,
                                    transition: {
                                        duration: .2
                                    },
                                    whileHover: e.whileHover,
                                    children: (0, a.jsx)(s(), {
                                        href: "/#about",
                                        children: "About"
                                    })
                                }), (0, a.jsx)(r.E.li, {
                                    initial: e.initial,
                                    animate: e.animate,
                                    transition: {
                                        duration: .3
                                    },
                                    whileHover: e.whileHover,
                                    children: (0, a.jsx)(s(), {
                                        href: "/#works",
                                        children: "Works"
                                    })
                                }), (0, a.jsx)(r.E.li, {
                                    initial: e.initial,
                                    animate: e.animate,
                                    transition: {
                                        duration: .4
                                    },
                                    whileHover: e.whileHover,
                                    children: (0, a.jsx)(s(), {
                                        href: "/#contact",
                                        children: "Contact"
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)("ul", {
                            className: "pointer-events-auto mb-6 w-fit space-y-8",
                            children: [(0, a.jsx)(r.E.li, {
                                initial: n.initial,
                                animate: n.animate,
                                transition: n.transition,
                                whileHover: n.whileHover,
                                children: (0, a.jsx)(s(), {
                                    href: "https://github.com/SyntheticQuimera",
                                    target: "_blank",
                                    children: (0, a.jsx)(l.PIb, {
                                        size: 22
                                    })
                                })
                            }), (0, a.jsx)(r.E.li, {
                                initial: n.initial,
                                animate: n.animate,
                                transition: n.transition,
                                whileHover: n.whileHover,
                                children: (0, a.jsx)(s(), {
                                    href: "https://www.linkedin.com/in/jaime-roschupkin/",
                                    target: "_blank",
                                    children: (0, a.jsx)(l.ZXE, {
                                        size: 22
                                    })
                                })
                            }), (0, a.jsx)(r.E.li, {
                                initial: n.initial,
                                animate: n.animate,
                                transition: n.transition,
                                whileHover: n.whileHover,
                                children: (0, a.jsx)(s(), {
                                    href: "mailto:jaimeroschupkin@gmail.com",
                                    target: "_blank",
                                    children: (0, a.jsx)(l.nMn, {
                                        size: 22
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
        }
    },
    function(n) {
        n.O(0, [169, 438, 426, 971, 596, 744], function() {
            return n(n.s = 7270)
        }), _N_E = n.O()
    }
]);