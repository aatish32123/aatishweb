(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818], {
        9629: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 6685, 23)), Promise.resolve().then(t.bind(t, 3055))
        },
        2575: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return c
                }
            });
            var l = t(7437);

            function c(e) {
                let {
                    black: s = !1
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center justify-center gap-2 ".concat(s ? "text-secondary" : ""),
                    children: [(0, l.jsx)("span", {
                        className: "loading loading-ring loading-lg"
                    }), (0, l.jsx)("p", {
                        className: "text-xs font-bold uppercase",
                        children: "just wait, okay?"
                    })]
                })
            }
            t(2265)
        },
        3055: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var l = t(7437),
                c = t(2265),
                a = t(9348),
                n = t(6691),
                r = t.n(n),
                i = t(1396),
                o = t.n(i);

            function d(e) {
                let {
                    title: s,
                    logo: t,
                    desc: c,
                    stack: n,
                    image: i,
                    id: d
                } = e;
                return (0, l.jsx)(o(), {
                    href: "".concat("/works/" + d),
                    className: "cursor-button-card card card-compact w-full flex-1 border bg-transparent text-start text-secondary-content backdrop-blur-md",
                    children: (0, l.jsxs)("div", {
                        className: "card-body p-5 lg:p-8",
                        children: [(0, l.jsxs)("div", {
                            className: "card-title lg:text-3xl",
                            children: [t && (0, l.jsx)(r(), {
                                src: t,
                                alt: "logo",
                                width: 40,
                                height: 40
                            }), s]
                        }), (0, l.jsx)("div", {
                            className: "card-actions",
                            children: null == n ? void 0 : n.map((e, s) => (0, l.jsx)("div", {
                                className: "badge badge-primary rounded-badge text-xs font-semibold",
                                children: e
                            }, s))
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)("small", {
                                children: c
                            })
                        }), (0, l.jsx)("div", {
                            className: "relative hidden h-full w-full overflow-hidden rounded-xl md:flex",
                            children: i && (0, l.jsx)(r(), {
                                fill: !0,
                                src: i,
                                alt: s,
                                className: "object-cover object-center"
                            })
                        }), (0, l.jsx)("div", {
                            className: "card-actions mt-auto justify-center md:hidden",
                            children: (0, l.jsxs)("a", {
                                href: "",
                                className: "flex items-center space-x-2 text-xs uppercase",
                                children: [(0, l.jsx)("span", {
                                    children: "read more"
                                }), " ", (0, l.jsx)(a.H8K, {
                                    size: 16
                                })]
                            })
                        })]
                    })
                })
            }
            var u = e => {
                    let {
                        text: s,
                        href: t,
                        icon: a
                    } = e;
                    return (0, l.jsxs)("a", {
                        href: t,
                        className: "btn btn-circle btn-primary btn-xs lg:btn-md",
                        children: [(0, l.jsx)("span", {
                            className: "hidden text-xs font-bold lg:block",
                            children: s
                        }), (0, l.jsx)("span", {
                            className: "lg:hidden",
                            children: c.cloneElement(a, {
                                className: "lg:hidden",
                                size: 14
                            })
                        })]
                    })
                },
                x = t(3553),
                h = t(2575);

            function f() {
                let [e, s] = (0, c.useState)([]), [t, n] = (0, c.useState)(!0);
                (0, c.useEffect)(() => {
                    !async function() {
                        try {
                            let e = await x.U.listDocuments("64e1087b4ec7c986993f", "64e1a13b19e68c64f5da"),
                                t = e.documents,
                                l = t.map(e => ({
                                    title: e.title,
                                    logo: e.logo,
                                    desc: e.desc,
                                    stack: e.stack,
                                    image: e.image,
                                    id: e.$id
                                }));
                            s(l), n(!1)
                        } catch (e) {
                            console.log(e)
                        }
                    }()
                }, []);
                let r = [];
                for (let s = 0; s < e.length; s += 2) r.push(e.slice(s, s + 2));
                return (0, l.jsx)("div", {
                    className: "carousel carousel-center h-full w-full",
                    children: t ? (0, l.jsx)(h.Z, {}) : (0, l.jsx)(l.Fragment, {
                        children: r.map((e, s) => (0, l.jsxs)("div", {
                            id: "works-".concat(s),
                            className: "carousel-item h-full w-full",
                            children: [(0, l.jsx)("div", {
                                className: "p-section !lg:pr-0 !xl:pr-0 w-full !pr-0",
                                children: (0, l.jsx)("div", {
                                    className: "flex h-full w-full flex-col gap-4 md:flex-row",
                                    children: e.map((e, s) => (0, l.jsx)(d, {
                                        title: e.title,
                                        logo: e.logo,
                                        desc: e.desc,
                                        stack: e.stack,
                                        image: e.image,
                                        id: e.id
                                    }, s))
                                })
                            }), (0, l.jsxs)("div", {
                                className: "p-nav group flex flex-col items-center justify-center gap-y-4",
                                children: [(0, l.jsx)("div", {
                                    className: "h-16 border-r transition-all duration-300 ease-in-out group-hover:h-24"
                                }), s < r.length - 1 && (0, l.jsx)(u, {
                                    text: "More",
                                    icon: (0, l.jsx)(a.hmH, {}),
                                    href: "#works-".concat(s + 1)
                                }), s > 0 && (0, l.jsx)(u, {
                                    text: "Back",
                                    icon: (0, l.jsx)(a.gTV, {}),
                                    href: "#works-".concat(s - 1)
                                }), s === r.length - 1 && (0, l.jsx)(u, {
                                    text: "Start",
                                    icon: (0, l.jsx)(a.oOM, {}),
                                    href: "#works-0"
                                }), (0, l.jsx)("div", {
                                    className: "h-16 border-r transition-all duration-300 ease-in-out group-hover:h-24"
                                })]
                            })]
                        }, s))
                    })
                })
            }
        },
        3553: function(e, s, t) {
            "use strict";
            t.d(s, {
                U: function() {
                    return a
                }
            });
            var l = t(7332);
            let c = new l.KU().setEndpoint("https://cloud.appwrite.io/v1").setProject("64e107c1f34913952711"),
                a = new l.Lg(c)
        }
    },
    function(e) {
        e.O(0, [169, 438, 460, 971, 596, 744], function() {
            return e(e.s = 9629)
        }), _N_E = e.O()
    }
]);