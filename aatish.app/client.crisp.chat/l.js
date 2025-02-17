/**
 * crisp-client
 * @version v2.12.1 2940d8d
 * @author Crisp IM SAS
 * @date 11/21/2023
 */
(function() {
    try {
        new(function() {
            function t() {
                var t, i = this;
                try {
                    this.ns = "CrispLoader", this.n = {
                        warn: function(t, i) {},
                        error: function(t, i) {},
                        info: function(t, i) {},
                        log: function(t, i) {},
                        debug: function(t, i) {}
                    }, this.s = !1, this.f = "crisp-client", this.w = "client.crisp.chat", this.y = "client.relay.crisp.chat", this.v = "stream.relay.crisp.chat", this.x = "2940d8d", this.on = "production", this.fn = "https:", this._n = "https://crisp.chat", this.fs = "https://go.crisp.chat", this.ws = "https://image.crisp.chat", this.ms = "https://game.crisp.chat", this.$s = "".concat(this.fn, "//").concat(this.y), this._e = "".concat(this.fn, "//").concat(this.v), this.io = "".concat(this.fn, "//").concat(this.w), this.do = [{
                        urls: ["stun:stun.media.crisp.chat:3478", "stun:stun.media.crisp.chat:3479"]
                    }, {
                        urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                        username: "client_9F9kh",
                        credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
                    }], this._a = !0, this._f = {
                        domains: [],
                        agents: ["Trident", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix", "Lighthouse", "Acunetix", "Ahrefs", "SemrushBot", "SiteAuditBot", "SplitSignalBot"]
                    }, this.el = "static/javascripts", this.pp = "static/stylesheets", this._p = "$__CRISP_INSTANCE", this.wp = "$__CRISP_INCLUDED", this.mp = 100, this.Ip = 3e4, this.yp = 1e3, this.vp = 280, this.Cp = 320, this.gp = 420, this.Rp = [{
                        pattern: /edg(?:e)?\/([0-9\.]+)/,
                        version: 79
                    }, {
                        pattern: /chrom(?:e|ium)\/([0-9\.]+)/,
                        version: 53
                    }, {
                        pattern: /firefox\/([0-9\.]+)/,
                        version: 49
                    }, {
                        pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
                        version: 10
                    }, {
                        pattern: /android ([0-9\.]+)/,
                        version: 5
                    }], this.Ep = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i, this.Sp(), !0 === window[this.wp] || void 0 !== window[this._p] && "function" == typeof window[this._p].__init || !0 !== this.Pp() || (window[this.wp] = !0, "interactive" === document.readyState || "complete" === document.readyState ? this.init() : (t = document.onreadystatechange || function() {}, window.addEventListener("DOMContentLoaded", function() {
                        i.init()
                    }), document.onreadystatechange = function() {
                        "function" == typeof t && t(), "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                            i.init()
                        }, i.yp)
                    }), this.bp())
                } catch (t) {}
            }
            var i = t.prototype;
            return i.init = function() {
                var i, n, s = this,
                    e = "init";
                try {
                    this.Dp && !0 !== this.Op && (this.Op = !0, (i = document.createElement("div")).id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(i), n = function() {
                        return "none" === window.getComputedStyle(i).getPropertyValue("display")
                    }, function t() {
                        s.Tp = setTimeout(function() {
                            s.Tp = null, s.Np -= s.mp, void 0 !== window[s._p] && "function" == typeof window[s._p].__init && !0 === n() ? (s.n.info("".concat(s.ns, ".").concat(e), "Dependencies loaded"), i.parentNode.removeChild(i), window[s._p].__init({
                                dollar_crisp: window[s._p],
                                project_name: s.f,
                                url_go: s.fs,
                                url_image: s.ws,
                                url_game: s.ms,
                                url_relay_client: s.$s,
                                url_relay_stream: s._e,
                                url_website: s._n,
                                url_assets: s.io,
                                rtc_ice: s.do,
                                socket_affinity: s._a,
                                client_environment: s.on,
                                client_revision: s.x,
                                website_domain: s.kp,
                                website_id: s.Dp,
                                token_id: s.Kp,
                                cookie_expire: s.Pi,
                                cookie_domain: s.Ap,
                                page_url: s.jp,
                                page_domain: s.Bp,
                                browser_useragent: s.Gp,
                                browser_timezone: s.xp,
                                browser_capabilities: s.Up,
                                browser_locales: s.Lp,
                                ready_trigger: s.Mp,
                                runtime_configuration: s.Yp,
                                reset_handler: function() {
                                    s.reset()
                                }
                            })) : 0 < s.Np ? t() : s.n.error("".concat(s.ns, ".").concat(e), "Could not load dependencies")
                        }, s.mp)
                    }())
                } catch (t) {}
            }, i.reset = function() {
                try {
                    null !== this.Tp && clearTimeout(this.Tp), this.Sp(), this.init()
                } catch (t) {}
            }, i.bp = function() {
                try {
                    this.Fp("dns-prefetch", this.$s), this.Fp("preconnect", this.io), this.Xp(), this.zp()
                } catch (t) {}
            }, i.Fp = function(t, i) {
                try {
                    var n = document.createElement("link");
                    n.setAttribute("href", i), n.setAttribute("rel", t), n.setAttribute("crossorigin", ""), this.Jp(n), document.getElementsByTagName("head")[0].appendChild(n)
                } catch (t) {}
            }, i.Xp = function() {
                try {
                    var t = document.createElement("script");
                    t.src = ["".concat(this.io, "/"), "".concat(this.el, "/"), "client.js?".concat(this.x)].join(""), t.type = "text/javascript", t.async = !0, this.Jp(t), document.getElementsByTagName("head")[0].appendChild(t)
                } catch (t) {}
            }, i.zp = function() {
                try {
                    var t = this.Wp(),
                        i = document.createElement("link");
                    i.href = ["".concat(this.io, "/"), "".concat(this.pp, "/"), "client_".concat(t, ".css?").concat(this.x)].join(""), i.type = "text/css", i.rel = "stylesheet", this.Jp(i), document.getElementsByTagName("head")[0].appendChild(i)
                } catch (t) {}
            }, i.Sp = function() {
                this.Hp(), this.$p(), this.qp()
            }, i.Hp = function() {
                this.Op = !1, this.Tp = null, this.Np = this.Ip, this.kp = document.domain, this.jp = document.location.href, this.Bp = document.location.hostname, this.Gp = window.navigator.userAgent, this.xp = (new Date).getTimezoneOffset(), this.Lp = this.Qp(), "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.Dp = CRISP_WEBSITE_ID : this.Dp = this.Vp(), "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.Kp = CRISP_TOKEN_ID : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.Kp = CRISP_TOKEN_ID.toString() : this.Kp = null, "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE ? this.Pi = CRISP_COOKIE_EXPIRE : this.Pi = null, "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.Ap = CRISP_COOKIE_DOMAIN : this.Ap = null, "function" == typeof CRISP_READY_TRIGGER ? this.Mp = CRISP_READY_TRIGGER : this.Mp = {}, "object" == typeof CRISP_RUNTIME_CONFIG ? this.Yp = CRISP_RUNTIME_CONFIG : this.Yp = {}, "object" == typeof CRISP_INCLUDE_ATTRS ? this.Zp = CRISP_INCLUDE_ATTRS : this.Zp = {}
            }, i.$p = function() {
                try {
                    this.Up = [], "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.Up.push("browsing"), ("function" == typeof window.RTCPeerConnection && "object" == typeof navigator.mediaDevices && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.Cp && (window.innerHeight || 0) >= this.gp || !0 === this.s) && this.Up.push("call")
                } catch (t) {}
            }, i.qp = function() {
                var t;
                try {
                    this.Yp.locale && (-1 !== (t = this.Lp.indexOf(this.Yp.locale)) && this.Lp.splice(t, 1), this.Lp.unshift(this.Yp.locale))
                } catch (t) {}
            }, i.Jp = function(t) {
                try {
                    for (var i in this.Zp) this.Zp.hasOwnProperty(i) && t.setAttribute(i, this.Zp[i])
                } catch (t) {}
            }, i.Vp = function() {
                var t = null;
                try {
                    for (var i = document.querySelectorAll("script[src]"), n = 0; n < i.length; n++) {
                        var s = this.Ep.exec(i[n].src);
                        if (s && "string" == typeof s[1]) {
                            t = s[1];
                            break
                        }
                    }
                } catch (t) {} finally {
                    return t
                }
            }, i.Wp = function() {
                var t = "default";
                try {
                    var i = (navigator.userAgent || "").toLowerCase(),
                        n = (navigator.appVersion || "").toLowerCase(),
                        s = !1;
                    if (!0 !== s && (-1 === i.indexOf("opera mini/") && -1 === i.indexOf("msie") && -1 === n.indexOf("trident/") || (s = !0)), !0 !== s)
                        for (var e = 0; e < this.Rp.length; e++) {
                            var r = this.Rp[e],
                                o = i.match(r.pattern);
                            if (null != o && o[1] && parseInt(o[1], 10) <= r.version) {
                                s = !0;
                                break
                            }
                        }!0 === s && (t = "legacy")
                } catch (t) {} finally {
                    return t
                }
            }, i.Pp = function() {
                var t = !0;
                try {
                    (window.innerWidth && window.innerWidth < this.vp || !0 !== this.t_() || !0 === this.i_(this.Bp) || !0 === this.n_(this.Gp) || !window.WebSocket || window.__nativePerformance && window.__nativePromise) && (t = !1)
                } catch (t) {} finally {
                    return t
                }
            }, i.t_ = function() {
                var t, i, n = !1;
                try {
                    !0 === navigator.cookieEnabled ? n = !0 : window.localStorage && "function" == typeof window.localStorage.setItem && "function" == typeof window.localStorage.getItem && "function" == typeof window.localStorage.removeItem && (t = "".concat((new Date).getTime()), i = "crisp-client/loader/storage/check", window.localStorage.setItem(i, t), n = window.localStorage.getItem(i) === t)
                } catch (t) {} finally {
                    return n
                }
            }, i.i_ = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    i = !1;
                try {
                    if (t)
                        for (var n = 0; n < this._f.domains.length; n++) {
                            var s = this._f.domains[n],
                                e = ".".concat(s);
                            if (t === s || t.slice(-1 * e.length) === e) {
                                i = !0;
                                break
                            }
                        }
                } catch (t) {} finally {
                    return i
                }
            }, i.n_ = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                    i = !1;
                try {
                    if (t)
                        for (var n = 0; n < this._f.agents.length; n++)
                            if (-1 !== t.indexOf(this._f.agents[n])) {
                                i = !0;
                                break
                            }
                } catch (t) {} finally {
                    return i
                }
            }, i.Qp = function() {
                var t = [];
                try {
                    for (var i, n = 0 < (null === (i = navigator.languages) || void 0 === i ? void 0 : i.length) ? navigator.languages : [navigator.language || navigator.userLanguage], s = 0; s < n.length; s++) n[s] && t.push(n[s])
                } catch (t) {} finally {
                    return t
                }
            }, t
        }())
    } catch (t) {}
})();