﻿(function (W, D, E) {
    try {
        var Ba = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
            Ca = function (a) {
                if (null == a) {
                    return String(a)
                }
                var b = Ba.exec(Object.prototype.toString.call(Object(a)));
                return b ? b[1].toLowerCase() : "object"
            },
            Ea = function (a, b) {
                return Object.prototype.hasOwnProperty.call(Object(a), b)
            },
            fa = function (a) {
                if (!a || "object" != Ca(a) || a.nodeType || a == a.window) {
                    return !1
                }
                try {
                    if (a.constructor && !Ea(a, "constructor") && !Ea(a.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (c) {
                    return !1
                }
                for (var b in a) { }
                return void 0 === b || Ea(a, b)
            },
            Fa = function (a, b) {
                var c = b || ("array" == Ca(a) ? [] : {}),
                    d, e;
                for (d in a) {
                    if (Ea(a, d)) {
                        e = a[d];
                        if (Ca(c) != "array") {
                            if (Qa.get(d)) {
                                d = Qa.get(d).F
                            }
                        }
                        "array" == Ca(e) ? ("array" != Ca(c[d]) && (c[d] = []), c[d] = Fa(e, c[d])) : fa(e) ? (fa(c[d]) || (c[d] = {}), c[d] = Fa(e, c[d])) : c[d] = e
                    }
                }
                return c
            },
            Ga = function (a, c) {
                var s = Ca(a) == "array" ? "[" : "{",
                    d, e;
                for (d in a) {
                    if (Ea(a, d)) {
                        e = a[d];
                        if (Ca(e) == "array" || Ca(e) == "object") {
                            s += c == "array" ? Ga(e, Ca(e)) + "," : '"' + d + '":' + Ga(e, Ca(e)) + ","
                        } else {
                            if (Ca(e) == "string") {
                                s += c == "array" ? '"' + e + '",' : '"' + d + '":"' + e + '",'
                            } else {
                                s += c == "array" ? "" + e + "," : '"' + d + '":' + e + ","
                            }
                        }
                    }
                }
                s += Ca(a) == "array" ? "]" : "}";
                return s
            },
            Ha = function (a) {
                var s = Ca(a) == "array" || Ca(a) == "object" ? Ga(a, Ca(a)).replace(/,}/g, "}").replace(/,]/g, "]") : a;
                return (s != "{}" ? s : "")
            },
            cp = function (a, b) {
                for (d in b) {
                    if (Ea(b, d)) {
                        a[d] = b[d]
                    }
                }
            };
        var ea = function (a) {
            return "function" == typeof a
        },
            kaa = function (a) {
                return "[object Array]" == Object.prototype.toString.call(Object(a))
            },
            qa = function (a) {
                return void 0 != a && -1 < (a.constructor + "").indexOf("String")
            },
            Dd = function (a, b) {
                return 0 == a.indexOf(b)
            };
        var pf = navigator,
            u = function (a, b, c) {
                var d = W[a];
                W[a] = void 0 === d || c ? b : d;
                return W[a]
            },
            K = function (a, b, c, d) {
                return (d || "http:" != W.location.protocol ? a : b) + c
            },
            qf = function (a) {
                var b = D.getElementsByTagName("script")[0] || D.body || D.head;
                b.parentNode.insertBefore(a, b)
            },
            ka = function (a, b) {
                b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                    a.readyState in {
                        loaded: 1,
                        complete: 1
                    } && (a.onreadystatechange = null, b())
                })
            },
            p = function (a, b, c) {
                var s = D.createElement("script");
                s.type = "text/javascript";
                s.async = !0;
                s.src = a;
                ka(s, b);
                c && (s.onerror = c);
                qf(s)
            },
            ra = function (a, b) {
                var c = D.createElement("iframe");
                c.height = "0";
                c.width = "0";
                c.style.display = "none";
                c.style.visibility = "hidden";
                void 0 !== a && (c.src = a);
                qf(c);
                ka(c, b);
                return c
            },
            N = function (a, b, c) {
                var d = new Image(1, 1);
                d.onload = function () {
                    d.onload = null;
                    b && b()
                };
                d.onerror = function () {
                    d.onerror = null;
                    c && c()
                };
                d.src = a
            },
            N1 = function (a, b, c, i) {
                if (i != null) {
                    var d = i
                } else {
                    var d = new Image(1, 1)
                }
                d.onload = function () {
                    d.onload = null;
                    b && b()
                };
                d.onerror = function () {
                    d.onerror = null;
                    c && c()
                };
                d.src = a
            },
            U = function (a, b, c, d) {
                a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            q = function (a) {
                W.setTimeout(a, 0)
            },
            max_sp = 0,
            seFlag = false,
            sp = function () {
                var scrollTo = W.pageYOffset || D.documentElement.scrollTop || D.body.scrollTop;
                var scrollHeight = D.documentElement.scrollHeight || D.body.scrollHeight;
                var clientHeight = D.documentElement.clientHeight || D.body.clientHeight;
                if (scrollHeight > clientHeight) {
                    var scrollPercent = parseInt((scrollTo / (scrollHeight - clientHeight)) * 100)
                } else {
                    max_sp = 100;
                    seFlag = true;
                    return max_sp
                } if (max_sp < scrollPercent) {
                    max_sp = scrollPercent
                }
                return scrollPercent
            },
            spF = function () {
                var scrollPercent = sp();
                if (max_sp >= 100) {
                    RR(W, "scroll", spF)
                }
                if (!seFlag && scrollPercent > 80) {
                    eval(py_n + "('event','scrollEvent')");
                    seFlag = true
                }
            },
            na = !1,
            oa = [sp],
            rf = function (a) {
                if (!na) {
                    var b = D.createEventObject,
                        c = "complete" == D.readyState,
                        f = "interactive" == D.readyState;
                    if (!a || "readystatechange" != a.type || c || !b && f) {
                        na = !0;
                        for (var e = 0; e < oa.length; e++) {
                            oa[e]()
                        }
                    }
                }
            },
            sf = 0,
            tf = function () {
                if (!na && 140 > sf) {
                    sf++;
                    try {
                        D.documentElement.doScroll("left"), rf()
                    } catch (a) {
                        W.setTimeout(tf, 50)
                    }
                }
            },
            vf = function (a) {
                var b = D.getElementById(a);
                if (b && uf(b, "id") != a) {
                    for (var c = 1; c < D.all[a].length; c++) {
                        if (uf(D.all[a][c], "id") == a) {
                            return D.all[a][c]
                        }
                    }
                }
                return b
            },
            uf = function (a, b) {
                return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
            },
            wf = function (a) {
                return a.target || a.srcElement || {}
            },
            sa = function (a) {
                var b = D.createElement("div");
                b.innerHTML = "A<div>" + a + "</div>";
                for (var b = b.lastChild, c = []; b.firstChild; ) {
                    c.push(b.removeChild(b.firstChild))
                }
                return c
            },
            xf = function (a, b) {
                for (var c = {}, d = 0; d < b.length; d++) {
                    c[b[d]] = !0
                }
                for (var e = a, d = 0; e && !c[String(e.tagName).toLowerCase()] && 100 > d; d++) {
                    e = e.parentElement
                }
                e && !c[String(e.tagName).toLowerCase()] && (e = null);
                return e
            },
            yf = !1,
            zf = [],
            Af = function () {
                if (!yf) {
                    yf = !0;
                    for (var a = 0; a < zf.length; a++) {
                        zf[a]()
                    }
                }
            },
            Bf = function (a) {
                a = a || W;
                var b = a.location.href,
                    c = b.indexOf("#");
                return 0 > c ? "" : b.substring(c + 1)
            },
            qa = function (a) {
                return void 0 != a && -1 < (a.constructor + "").indexOf("String")
            },
            Dd = function (a, b) {
                return 0 == a.indexOf(b)
            },
            raa = function (a) {
                return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
            },
            log = function (a) { },
            info = function (a) { },
            error = function (a) { },
            ab = function (a, b, c, d) {
                if (void 0 != c) {
                    switch (b) {
                        case Na:
                    }
                }
                var e = $a(b);
                e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
            },
            bb = function (a, b, c, d, e) {
                this.name = a;
                this.F = b;
                this.Z = d;
                this.o = e;
                this.defaultValue = c
            },
            $a = function (a) {
                var b = Qa.get(a);
                if (!b) {
                    for (var c = 0; c < Za.length; c++) {
                        var d = Za[c],
                            e = d[0].exec(a);
                        if (e) {
                            b = d[1](e);
                            Qa.set(b.name, b);
                            break
                        }
                    }
                }
                return b
            },
            S = function (a, b, c, d, e) {
                a = new bb(a, b, c, d, e);
                Qa.set(a.name, a);
                return a.name
            },
            SE = function (a, b, p, c, d, e) {
                a = new bb(a, b, c, d, e);
                a.p = p;
                Qa.set(a.name, a);
                return a.name
            },
            cbb = function (a, b) {
                Za.push([new RegExp("^" + a + "$"), b])
            },
            T = function (a, b, c) {
                return S(a, b, c, void 0, db)
            },
            db = function () { },
            xa = function () {
                var a = "" + D.location.hostname;
                return 0 == a.indexOf("www.") ? a.substring(4) : a
            },
            ya = function (a) {
                var b = D.referrer;
                if (/^https?:\/\//i.test(b)) {
                    if (a) {
                        return b
                    }
                    a = "//" + D.location.hostname;
                    var c = b.indexOf(a);
                    if (5 == c || 6 == c) {
                        if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a) {
                            return
                        }
                    }
                    return b
                }
            },
            za = function (a, b) {
                if (1 == b.length && null != b[0] && "object" === typeof b[0]) {
                    return b[0]
                }
                for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++) {
                    if ("object" === typeof b[e]) {
                        for (var g in b[e]) {
                            b[e].hasOwnProperty(g) && (c[g] = b[e][g])
                        }
                        break
                    } else {
                        e < a.length && (c[a[e]] = b[e])
                    }
                }
                return c
            },
            setExtraData = function (a) {
                var b = W.navigator,
                    c = W.screen,
                    d = D.location;
                a.set(lb, ya(true));
                if (d) {
                    var e = d.pathname || "";
                    "/" != e.charAt(0) && (e = "/" + e);
                    a.set(kb, d.protocol + "//" + d.hostname + e + d.search)
                }
                c && a.set(qb, c.width + "x" + c.height);
                c && a.set(pb, c.colorDepth + "-bit");
                var c = D.documentElement,
                    g = (e = D.body) && e.clientWidth && e.clientHeight,
                    ca = [];
                c && c.clientWidth && c.clientHeight && ("CSS1Compat" === D.compatMode || !g) ? ca = [c.clientWidth, c.clientHeight] : g && (ca = [e.clientWidth, e.clientHeight]);
                c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
                a.set(rb, c);
                var ps = [];
                (e = D.body) && e.scrollWidth && e.scrollHeight && (ps = [e.scrollWidth, e.scrollHeight]);
                var pn = 0 >= ps[0] || 0 >= ps[1] ? "" : ps.join("x");
                a.set(bs, pn);
                a.set(tb, fc());
                a.set(ob, D.characterSet || D.charset);
                a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
                a.set(nb, (b && (b.language || b.browserLanguage) || "").toLowerCase());
                if (d && a.get(cc) && (b = D.location.hash)) {
                    b = b.split(/[?&#]+/);
                    d = [];
                    for (c = 0; c < b.length; ++c) {
                        (Dd(b[c], "utm_id") || Dd(b[c], "utm_campaign") || Dd(b[c], "utm_source") || Dd(b[c], "utm_medium") || Dd(b[c], "utm_term") || Dd(b[c], "utm_content") || Dd(b[c], "gclid") || Dd(b[c], "dclid") || Dd(b[c], "gclsrc")) && d.push(b[c])
                    }
                    0 < d.length && (b = "#" + d.join("&"), a.set(kb, a.get(kb) + b))
                }
            };

        function fc() {
            var a, b, c;
            if ((c = (c = W.navigator) ? c.plugins : null) && c.length) {
                for (var d = 0; d < c.length && !b; d++) {
                    var e = c[d]; -1 < e.name.indexOf("Shockwave Flash") && (b = e.description)
                }
            }
            if (!b) {
                try {
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
                } catch (g) { }
            }
            if (!b) {
                try {
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
                } catch (g) { }
            }
            if (!b) {
                try {
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
                } catch (g) { }
            }
            b && (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
            return b || void 0
        }
        var ee = function () {
            this.keys = [];
            this.values = {};
            this.m = {}
        };
        ee.prototype.set = function (a, b, c) {
            this.keys.push(a);
            c ? this.m[":" + a] = b : this.values[":" + a] = b
        };
        ee.prototype.setParam = function (a, b, m, c) {
            this.keys.push(a);
            c ? (this.m[":" + a] ? this.m[":" + a][m] = b[m] : this.m[":" + a] = b) : (this.values[":" + a] ? this.values[":" + a][m] = b[m] : this.values[":" + a] = b)
        };
        ee.prototype.get = function (a) {
            return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
        };
        ee.prototype.map = function (a) {
            for (var b = 0; b < this.keys.length; b++) {
                var c = this.keys[b],
                    d = this.get(c);
                d && a(c, d)
            }
        };
        var Ya = function () {
            this.data = new ee
        },
            Qa = new ee,
            Za = [];
        Ya.prototype.get = function (a) {
            var b = $a(a),
                c = this.data.get(a);
            b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
            return b && b.Z ? b.Z(this, a, c) : c
        };
        Ya.prototype.set = function (a, b, c) {
            if (a) {
                if ("object" == typeof a) {
                    for (var d in a) {
                        a.hasOwnProperty(d) && ab(this, d, a[d], c)
                    }
                } else {
                    ab(this, a, b, c)
                }
            }
        };
        var py_n = qa(W._CommandName_) && raa(W._CommandName_) || "py";
        var clonePy = function (w, l, py) {
            var _py = function () {
                var r = arguments;
                r.length && w[l].$.e(r);
                w[l].track = function (a) {
                    (r.t = []).push(arguments);
                    if (a) {
                        w[l].$.t(r)
                    }
                };
                return w[l]
            };
            cp(_py, py);
            return _py
        };
        var py = W[py_n] = clonePy(W, W._CommandName_, W[py_n]);
        py.L = py.l;
        if (!py.a) {
            return
        }
        var nb = S("language", "lg"),
            ob = S("encoding", "ec"),
            pb = S("screenColors", "sc"),
            qb = S("screenResolution", "sr"),
            rb = S("viewportSize", "vp"),
            sb = S("javaEnabled", "je"),
            tb = S("flashVersion", "fv"),
            bs = S("pageSize", "ps");
        var kb = S("location", "u", ""),
            lb = S("referrer", "r"),
            vs = S("version", "v");
        cbb("contentGroup([0-9]+)", function (a) {
            return new bb(a[0], "cg" + a[1])
        });
        S("account", "a");
        S("activity_content", "ac");
        S("activity_end_time", "ae");
        S("activity_start_time", "as");
        S("activity_url", "au");
        S("android_schema_url", "and");
        S("brand", "b");
        S("category", "ca");
        S("categoryId", "cid");
        S("clickId", "c");
        S("cookieId", "ci");
        S("currency_code", "cc");
        S("data", "dt");
        S("discount", "dc");
        S("email", "em");
        S("id", "id");
        S("industry", "ind");
        S("ios_schema_url", "ios");
        S("mobile_activity_url", "ma");
        S("mobile_name", "mm");
        S("mobile_pic_height", "mh");
        S("mobile_pic_url", "mu");
        S("mobile_pic_width", "mw");
        S("mobile_pic_size", "ms");
        S("mobile_product_url", "wap");
        S("name", "n");
        S("off_time", "et");
        S("on_time", "sm");
        S("orig_price", "op");
        S("pc_pic_url", "ppu");
        S("pic_height", "ph");
        S("pic_width", "pw");
        S("pic_size", "pis");
        S("price", "pr");
        S("product_no", "pn");
        S("product_url", "pu");
        S("promotion", "pm");
        S("short_desc", "sd");
        S("short_name", "sn");
        S("sold_out", "so");
        S("spu_id", "si");
        S("stock", "sk");
        S("type", "tp");
        S("userId", "uid");
        S("url", "u");
        S("money", "mn");
        S("items", "it");
        S("count", "ct");
        S("trackId", "tid");
        S("event", "ev");
        S("categoryPath", "cp");
        S("page", "pg");
        S("customEvent", "ce");
        S("keywords", "k");
        SE("domain", "d", ["d"]);
        var mp = SE("mapping", "mp", ["mp"]),
            ex = SE("extend", "e", ["e"]);
        SE("user", "ur", ["id", "name", "cookieId", "email", "type", "category"]);
        SE("clickParam", "cpk", ["cpk"]);
        SE("site", "st", ["type", "id", "industry"]);
        SE("viewHome", "vh", ["pg"]);
        SE("viewList", "vl", ["cp"]);
        SE("viewItem", "vi", ["pn"]);
        SE("viewSearch", "vs", ["k"]);
        SE("viewActivity", "va", ["n"]);
        SE("viewChannel", "vn", ["n"]);
        SE("viewUserIndex", "vu", ["uid"]);
        SE("viewCart", "vc", ["mn", "it"]);
        SE("viewPage", "vg");
        SE("collect", "cl", ["id"]);
        SE("order", "od", ["id", "mn", "it"]);
        SE("purchase", "pch", ["id", "mn", "it"]);
        SE("consult", "co", ["tid"]);
        SE("message", "msg", ["tid"]);
        SE("statistics", "sts", ["tid"]);
        SE("addCart", "ad", ["id"]);
        SE("register", "rg", ["id", "dt"]);
        SE("leads", "ls", ["id", "dt"]);
        SE("custom", "cm", ["ce", "id", "dt"]);
        SE("standingTime", "ste");
        SE("scrollEvent", "se");
        cbb("dimension([0-9]+)", function (a) {
            return new bb(a[0], "cd" + a[1])
        });
        cbb("metric([0-9]+)", function (a) {
            return new bb(a[0], "cm" + a[1])
        });
        var Na = T("trackingId", "tid"),
            cc = T("allowAnchor", void 0, !0),
            ec = T("alwaysSendReferrer", void 0, !1);

        function Ic(a, b) {
            for (var c = new Date, d = W.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d) {
                c.push(e[d].description)
            }
            return La(c.join("."))
        }
        var b_i = new Ya;
        setExtraData(b_i);
        var cmf = {
            cmFun: function (d) {
                try {
                    if (!d) {
                        return
                    }
                    var maps = d.us;
                    if (maps && maps.length <= 0) {
                        return
                    }
                    var mpL = pa.get(mp);
                    var n = (mpL && (mpL.mp != void 0) && (mpL.mp < maps.length) ? mpL.mp : maps.length);
                    var imgStr = "function i(a){new Image().src = a};";
                    for (var i = 0; i < n; i++) {
                        imgStr += 'i("' + maps[i] + '");'
                    }
                    var ifr = ra("javascript:'<script>" + imgStr + "<\/script>'", this.timeOutCm);
                    ifr.name = "_pycmifr"
                } catch (e) { }
            }, timeOutCm: function () {
                try {
                    var f = D.getElementsByName("_pycmifr");
                    for (var i = f.length - 1; i >= 0; i--) {
                        if (f[i].tagName == "IFRAME") {
                            f[i].parentNode.removeChild(f[i])
                        }
                    }
                } catch (e) { }
            }
        };
        var getHostName = function () {
            var hm = location.hostname;
            var reg = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
            var hosts = hm.split(".");
            var e = hosts.length - 2;
            if (reg.test(hm) || 2 === hosts.length) {
                return hm
            }
            for (; 0 <= e; --e) {
                if ("www" === hosts[e]) {
                    return hosts.slice(e + 1).join(".")
                }
                if (-1 === ",com,net,org,gov,edu,info,name,int,mil,arpa,asia,biz,pro,coop,aero,museum,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cf,cg,ch,ci,ck,cl,cm,cn,co,cq,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,es,et,ev,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gh,gi,gl,gm,gn,gp,gr,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,in,io,iq,ir,is,it,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,ml,mm,mn,mo,mp,mq,mr,ms,mt,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nt,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pt,pw,py,qa,re,ro,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sy,sz,tc,td,tf,tg,th,tj,tk,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,va,vc,ve,vg,vn,vu,wf,ws,ye,yu,za,zm,zr,zw,".indexOf("," + hosts[e] + ",")) {
                    return hosts.slice(e).join(".")
                }
            }
            return hm
        };
        W.ipy = {
            r: /(^|&)jump=(\d*)/i,
            cookie: {
                set: function (n, j, k, m, l) {
                    z = new Date();
                    z.setTime(z.getTime() + (k || 0));
                    D.cookie = n + "=" + E(j || "") + (k ? "; expires=" + z.toGMTString() : "") + ";path=/; domain=" + (m || (location.hostname == "localhost" ? "" : location.hostname)) + (l ? "; secure" : "")
                }, get: function (a) {
                    return (a = D.cookie.match(RegExp("(^|;)\\s*" + a + "=([^;]*)", "i"))) ? decodeURIComponent(a[2]) : ""
                }
            },
            setCookie: function (e, b) {
                this.cookie.set(e, b, 31536000000, getHostName())
            }, setSession: function (e, b) {
                this.cookie.set(e, b, 0, getHostName())
            }, getJump: function () {
                var b = this.cookie.get("ipysession");
                return b && (b = b.match(this.r)) ? parseInt(b[2]) : 0
            }, setJump: function (i) {
                var e = this.cookie.get("ipysession");
                e ? e.match(this.r) ? this.setSession("ipysession", e.replace(/jump=(\d*)/, "jump=" + i)) : this.setSession("ipysession", e + "&jump=" + i) : this.setSession("ipysession", "jump=" + i)
            }, getInfo: function (n) {
                var v = this.cookie.get(n);
                if (v) {
                    return v
                }
                try {
                    if (W.localStorage) {
                        if (localStorage.getItem(n)) {
                            return localStorage.getItem(n)
                        }
                    }
                } catch (e) { }
                return ""
            }, setInfo: function (n, v) {
                if (v == null || v == "") {
                    return
                }
                this.setCookie(n, v);
                try {
                    if (W.localStorage) {
                        localStorage.setItem(n, v)
                    }
                } catch (e) { }
            }, getQueryString: function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = W.location.search.substr(1).match(reg);
                if (r != null) {
                    return r[2]
                }
                return ""
            }, getP: function () {
                var p = pa.get("viewItem");
                var id = ipy.id ? ipy.id : "";
                p = p ? p : id;
                return p
            }, getSession: function () {
                var c = ipy.getInfo("ipycookie");
                if (c && c != null) {
                    var j = ipy.getJump();
                    if (!isNaN(j) && j == 0) {
                        ipy.setJump(j + 1);
                        return ""
                    }
                    j++;
                    ipy.setJump(j);
                    return "&s=" + j
                }
                return ""
            }, css: {
                hasClass: function (element, className) {
                    var isClassNamePresent = false;
                    var classNames = this.getArrayOfClassNames(element);
                    for (var index = 0; index < classNames.length; index++) {
                        if (className == classNames[index]) {
                            isClassNamePresent = true
                        }
                    }
                    return isClassNamePresent
                }, getArrayOfClassNames: function (element) {
                    var classNames = [];
                    if (element.className) {
                        classNames = element.className.split(" ")
                    }
                    return classNames
                }
            }, getElementsByClassName: function (className, result, contextElement) {
                if (D.getElementsByClassName) {
                    return result.getElementsByClassName(className)
                }
                var allElements = null;
                if (contextElement) {
                    allElements = contextElement.getElementsByTagName("*")
                } else {
                    allElements = result.getElementsByTagName("*")
                }
                var results = [];
                for (var elementIndex = 0; elementIndex < allElements.length; elementIndex++) {
                    var element = allElements[elementIndex];
                    if (ipy.css.hasClass(element, className)) {
                        results.push(element)
                    }
                }
                return results
            }, guid: function () {
                return "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c == "x" ? r : (r & 3 | 8);
                    return v.toString(16)
                })
            }
        };
        var pv = (function () {
            var prefixSupport, keyWithPrefix = function (prefix, key) {
                if (prefix !== "") {
                    return prefix + key.slice(0, 1).toUpperCase() + key.slice(1)
                }
                return key
            };
            var isPageVisibilitySupport = (function () {
                var support = false;
                if (typeof window.screenX === "number") {
                    ["webkit", "moz", "ms", "o", ""].forEach(function (prefix) {
                        if (support == false && document[keyWithPrefix(prefix, "hidden")] != undefined) {
                            prefixSupport = prefix;
                            support = true
                        }
                    })
                }
                return support
            })();
            var isHidden = function () {
                if (isPageVisibilitySupport) {
                    return document[keyWithPrefix(prefixSupport, "hidden")]
                }
                return false
            };
            var visibilityState = function () {
                if (isPageVisibilitySupport) {
                    return document[keyWithPrefix(prefixSupport, "visibilityState")]
                }
                return undefined
            };
            return {
                hidden: isHidden(),
                state: visibilityState(),
                support: isPageVisibilitySupport,
                change: function (fn, usecapture) {
                    usecapture = undefined || false;
                    if (isPageVisibilitySupport && typeof fn === "function") {
                        return py.$.addEvent(D, prefixSupport + "visibilitychange", function (evt) {
                            this.hidden = isHidden();
                            this.visibilityState = visibilityState();
                            fn.call(this, evt)
                        } .bind(this), usecapture)
                    }
                    return undefined
                }, total: 0,
                visibilityTime: new Date(),
                sumTime: function () {
                    var d = new Date();
                    this.total = this.total + (d - this.visibilityTime);
                    this.visibilityTime = d;
                    return this.total
                }
            }
        })();
        var sEle = function (select) {
            var regexS = "[a-zA-Z]*\\[\\s*name\\s*=.*\\]",
                regex = new RegExp(regexS),
                results = regex.exec(select);
            if (results != null) {
                var a = results[0].replace(/\s+/g, "");
                select = select.replace(results[0], a)
            }
            select = select.replace(/\s+/g, " ");
            var list = select.split(" ");
            var result = [];
            for (var i = 0; i < list.length; i++) {
                result = i == 0 ? D : result;
                result = find(list[i], result)
            }
            return result
        };
        var getChild = function (parent, id) {
            var r;
            for (var i = 0; i < parent.childNodes.length; i++) {
                ch = parent.childNodes[i];
                if (ch.nodeName != "#text") {
                    if (ch.getAttribute("id") == id) {
                        return ch
                    } else {
                        r = getChild(ch, id)
                    }
                }
            }
            return r
        };
        var find = function (select, result) {
            var type = select.substr(0, 1);
            switch (type) {
                case "#":
                    var id = select.substring(1);
                    if (result.length) {
                        var m;
                        for (var i = 0; i < result.length; i++) {
                            var r = getChild(result[i], id);
                            if (r) {
                                m = r;
                                break
                            }
                        }
                        result = m
                    } else {
                        if (result == D) {
                            result = D.getElementById(id)
                        } else {
                            result = getChild(result, id)
                        }
                    }
                    break;
                case ".":
                    var id = select.substring(1);
                    if (result.length) {
                        var s = [];
                        for (var i = 0; i < result.length; i++) {
                            var m = ipy.getElementsByClassName(id, result[i]);
                            for (var j = 0; j < m.length; j++) {
                                s.push(m[j])
                            }
                        }
                        result = s
                    } else {
                        result = ipy.getElementsByClassName(id, result)
                    }
                    break;
                default:
                    var tag, ar = "=.*\\]",
                    ax = new RegExp(ar),
                    name = ax.exec(select);
                    if (name != null) {
                        name = name[0].substring(1, name[0].length - 1);
                        tag = select.substring(0, select.indexOf("["));
                        name = name.replace(/'/g, "").replace(/"/g, "");
                        if (result.length) {
                            var m;
                            for (var i = 0; i < result.length; i++) {
                                var r = getNameChild(result[i], name, tag);
                                if (r) {
                                    m = r;
                                    break
                                }
                            }
                            result = m
                        } else {
                            if (result == D) {
                                result = D.getElementsByName(name)
                            } else {
                                result = getNameChild(result, name, tag)
                            }
                        }
                    }
            }
            return result
        };
        var getNameChild = function (parent, name, tag) {
            var r, m = [];
            for (var i = 0; i < parent.childNodes.length; i++) {
                ch = parent.childNodes[i];
                if (ch.nodeName != "#text") {
                    if (ch.localName == tag && ch.getAttribute("name") == name) {
                        m.push(ch)
                    } else {
                        r = getNameChild(ch, name);
                        for (var j = 0; j < r.length; j++) {
                            m.push(r[j])
                        }
                    }
                }
            }
            return m
        };
        var cb = "cb";
        py[cb] = function (cmd, cvd) {
            try {
                py.q == void 0 && (py.q = []);
                for (var i = 0; i < py.q.length; i++) {
                    if ((py.q[i])[1] == "mapping" || (py.q[i])[1] == "clickParam") {
                        execute(py.q[i])
                    }
                }
                cmf.cmFun(cmd);
                cvd && cvd.code == 0 && cvd.data != null && cvdFun(cvd.data);
                var cu = pa.get("clickParam") && pa.get("clickParam").cpk || "pyck",
                    d = ipy.getQueryString(cu);
                d = d ? d : ipy.getInfo("ipycookie");
                ipy.setInfo("ipycookie", d);
                exeFun()
            } catch (a) { }
        };
        var cvdFun = function (d) {
            for (var i = 0; i < d.t.length; i++) {
                var s = d.t[i].s,
                        t = d.t[i].t,
                        z = true;
                for (var j = 0; j < t.length; j++) {
                    switch (t[j].r) {
                        case 0:
                            z = z && true;
                            break;
                        case 1:
                        case 2:
                            z = z && urlReg(t[j], s);
                            break;
                        case 3:
                            z = z && click(t[j], s);
                            break
                    }
                }
                if (z) {
                    if (z == true) {
                        (function () {
                            eval(s)
                        })()
                    } else {
                        for (var k = 0; k < z.length; k++) {
                            (function () {
                                var j = s;
                                U(z[k], "click", function () {
                                    try {
                                        eval(j)
                                    } catch (e) { }
                                })
                            })()
                        }
                    }
                }
            }
        },
            urlReg = function (t, s) {
                var c = (t.r == 1 ? b_i.get(kb) : b_i.get(lb));
                if (t.o == 1) {
                    var rS = t.v,
                        reg = new RegExp(rS),
                        r = reg.exec(c);
                    if (r != null) {
                        return true
                    }
                }
                return false
            },
            click = function (t, s) {
                if (t.o == 2) {
                    var l = sEle(t.v);
                    if (l == undefined || l == null) {
                        return false
                    }
                    l = l.length ? l : [l];
                    return l
                }
                return false
            };
        var pa = new ee,
            cvt = new ee,
            _pl, setFun = function (arg) {
                var t = arg[1];
                for (var i = 2; i < arg.length; i++) {
                    if (i == arg.length - 1) {
                        fa(arg[i]) ? pa.set(t, Fa(arg[i], pa.get(t))) : (setParam(arg, i))
                    } else {
                        setParam(arg, i)
                    }
                }
            },
            setParam = function (arg, i) {
                var t = arg[1],
                    o = {},
                    a = Qa.get(t).p;
                if (a[i - 2] == "tid" && arg[i] != "") {
                    arg.t = arg[i];
                    return
                }
                o[a[i - 2]] = arg[i];
                if (t == "domain") {
                    pa.set(t, o)
                } else {
                    if (t == "user" || t == "site") {
                        pa.set(t, Fa(o, pa.get(t)))
                    } else {
                        pa.setParam(t, o, a[i - 2])
                    }
                }
            },
            setEvent = function (arg) {
                var t = arg[1];
                pa.get(t) && pa.set(t, null);
                cvt.get(t) && cvt.set(t, null);
                for (var i = 2; i < arg.length; i++) {
                    if (i == arg.length - 1) {
                        if (t == "leads" || t == "custom" || t == "register") {
                            (!fa(arg[i])) ? setParam(arg, i) : (arg[i].id ? pa.setParam(t, {
                                id: arg[i].id
                            }, "id") : "", arg[i].data ? pa.setParam(t, {
                                dt: arg[i].data
                            }, "dt") : "", arg[i].customEvent ? pa.setParam(t, {
                                ce: arg[i].customEvent
                            }, "ce") : "")
                        } else {
                            if (fa(arg[i])) {
                                if (arg[i].trackId) {
                                    arg.t = arg[i].trackId;
                                    delete arg[i].trackId
                                }
                                pa.set(t, Fa(arg[i], pa.get(t)))
                            } else {
                                setParam(arg, i)
                            }
                        }
                    } else {
                        setParam(arg, i)
                    }
                }
                if (t == "order" || t == "viewCart" || t == "purchase") {
                    var a = pa.get(t);
                    a.mn && (pa.set(t, {
                        mn: a.mn
                    }), cvt.setParam(t, {
                        Money: a.mn
                    }, "Money"));
                    a.id && (pa.setParam(t, {
                        od: a.id
                    }, "od"), cvt.setParam(t, {
                        OrderNo: a.id
                    }, "OrderNo"));
                    _pl = "";
                    for (var j = 0; j < a.it.length; j++) {
                        var _p = a.it[j];
                        _pl += (_p.id ? _p.id : "") + "," + (_p.ct ? _p.ct : "") + "," + (_p.pr ? _p.pr : "") + ";"
                    }
                    _pl != "" && (pa.setParam(t, {
                        pl: _pl
                    }, "pl"), cvt.setParam(t, {
                        ProductList: _pl
                    }, "ProductList"))
                }
                if (t == "leads" || t == "custom" || t == "register") {
                    var a = pa.get(t).dt,
                        _m = [];
                    pa.get(t).id && cvt.setParam(t, {
                        OrderNo: pa.get(t).id
                    }, "OrderNo");
                    for (_p in a) {
                        _m.push((a[_p] ? (_p + "=" + a[_p]) : ""))
                    }
                    _m.length != 0 && cvt.setParam(t, {
                        ProductList: _m.join("&")
                    }, "ProductList")
                }
                if (arg.t) {
                    sendTrack(arg)
                } else {
                    pa.get("user") && pa.get("user").ca && (cvt.setParam("user", {
                        pv: pa.get("user").ca
                    }, "pv"), delete pa.get("user").ca);
                    var adv = "",
                        s = pa.get("domain") ? (pa.get("domain").d) : "stats.ipinyou.com",
                        ur = cvt.get("user") && cvt.get("user").pv ? ("&pv=" + E(cvt.get("user").pv)) : "";
                    var a1, pi_p = getPi_p(t);
                    adv = ("https:" == location.protocol ? "https" : "http") + "://" + s + "/adv?a=" + E(py.a) + pi_p + (ipy.getInfo("ipycookie") ? ("&c=" + ipy.getInfo("ipycookie")) : "") + ipy.getSession() + (b_i.get(kb) ? ("&u=" + E(b_i.get(kb))) : "") + ur + (b_i.get(lb) ? ("&r=" + E(b_i.get(lb))) : "") + "&rd=" + (new Date()).getTime() + "&v=2&e=" + E(b_serialize(0, t, pi_p));
                    p(adv);
                    sendTrack(arg)
                }
            },
            sendTrack = function (arg) {
                if (arg.t) {
                    var a = (Ca(arg.t) == "array" && arg.t.length > 0 && arg.t[0].length > 0) ? arg.t[0][0] : (Ca(arg.t) == "string" ? arg.t : "");
                    if (a != "") {
                        var t = arg[1];
                        pa.get("user") && pa.get("user").ca && (cvt.setParam("user", {
                            pv: pa.get("user").ca
                        }, "pv"), delete pa.get("user").ca);
                        var adv = "",
                            s = pa.get("domain") ? (pa.get("domain").d) : "stats.ipinyou.com",
                            ur = cvt.get("user") && cvt.get("user").pv ? ("&pv=" + E(cvt.get("user").pv)) : "";
                        var a1, pi_p = getPi_p(t);
                        var b = b_i.get(kb),
                            c = b_i.get(lb) ? b_i.get(lb) : "",
                            f, s, g = D.cookie,
                            h = g.match(/(^|;)\s*ipycookie=([^;]*)/),
                            i = g.match(/(^|;)\s*ipysession=([^;]*)/);
                        if (W.parent != W) {
                            f = b;
                            b = c;
                            c = f
                        }
                        adv = ("https:" == location.protocol ? "https" : "http") + "://" + s + "/cvt?a=" + E(a) + (h ? ("&c=" + E(h[2])) : "") + (i ? ("&s=" + E(i[2].match(/jump\%3D(\d+)/)[1])) : "") + (b_i.get(kb) ? ("&u=" + E(b_i.get(kb))) : "") + (c ? ("&r=" + E(c)) : "") + "&rd=" + (new Date()).getTime() + cvtE(t) + "&v=2&e=" + E(b_serialize(1, t, pi_p) + ur);
                        p(adv)
                    }
                }
            },
            execute = function (arg) {
                try {
                    if (arg && arg.length < 2) {
                        return
                    }
                    if (py.l != py.L) {
                        py.q.push(arg);
                        return
                    }
                    var c = arg[0];
                    switch (c) {
                        case "set":
                            return setFun(arg);
                        case "event":
                            return setEvent(arg)
                    }
                } catch (e) { }
            },
            b_serialize = function (F, t, pi) {
                if (pa.get("extend") && pa.get("extend").e != "") {
                    return "e=" + pa.get("extend").e
                }
                var k = b_i.data.keys;
                var u = "",
                    m = [];
                for (var i = 0; i < k.length; i++) {
                    if (k[i] == kb || k[i] == lb) {
                        continue
                    }
                    var c = b_i.get(k[i]);
                    if (c != undefined) {
                        m.push(Qa.get(k[i]).F + "=" + E(c))
                    }
                }
                u += m.join("&");
                u += (pa.get("user") && Ha(pa.get("user"))) ? ("&ur=" + E(Ha(pa.get("user")))) : "";
                u += (pa.get("site") && Ha(pa.get("site"))) ? ("&st=" + E(Ha(pa.get("site")))) : "";
                if (t != undefined || t != "") {
                    var p = pa.get(t);
                    u += t ? ("&ev=" + Qa.get(t).F) : "";
                    u += ((F == 1 && t == "custom") ? (p && p.ce ? ("&ce=" + p.ce) : "") : "");
                    u += t ? (F == 0 ? (pi == "" ? ((p && Ha(p)) ? ("&ep=" + E(Ha(p))) : "") : "") : (((cvt.get(t) && cvt.get(t).ProductList)) ? "" : ((p && t != "viewItem" && t != "custom") ? ("&ep=" + E(Ha(p))) : ""))) : ""
                }
                return (u)
            },
            cvtE = function (t) {
                var e = cvt.get(t),
                    l = [];
                if (e) {
                    for (var a in e) {
                        if (Ea(e, a)) {
                            e[a] && l.push(a + "=" + E(e[a]))
                        }
                    }
                }
                return l.length != 0 ? ("&" + l.join("&")) : ""
            },
            getPi_p = function (t) {
                var u = "";
                if (t == "viewItem") {
                    var vi = pa.get(t),
                        iw = [],
                        mw = [];
                    if (vi != undefined) {
                        u = (pa.get(t).pn ? ("&p=" + pa.get(t).pn) : "");
                        var pis = vi.pis && vi.pis.replace("x", "X").split("X");
                        var ms = vi.ms && vi.ms.replace("x", "X").split("X");
                        delete pa.get(t).pis;
                        delete pa.get(t).ms;
                        if (pis && pis.length == 2) {
                            pa.setParam(t, {
                                pw: pis[0]
                            }, "pw");
                            pa.setParam(t, {
                                ph: pis[1]
                            }, "ph")
                        }
                        if (ms && ms.length == 2) {
                            pa.setParam(t, {
                                mw: ms[0]
                            }, "mw");
                            pa.setParam(t, {
                                mh: ms[1]
                            }, "mh")
                        }
                        var ct = 0,
                            d;
                        for (d in pa.get(t)) {
                            if (Ea(pa.get(t), d)) {
                                ct++
                            }
                        }
                        u += Ha(pa.get(t)) != "" && !(ct == 1 && pa.get(t).pn) && !isIE678() ? ("&pi=" + E(Ha(pa.get(t)))) : ""
                    }
                } else {
                    if (t == "collect" || t == "addCart") {
                        u += (pa.get(t) != undefined && pa.get(t).id != undefined) ? ("&p=" + Qa.get(t).F + ":" + pa.get(t).id) : ""
                    }
                }
                return u
            },
            removeFun = function (pyc) {
                var f = true,
                    revArr = [];
                if (!kaa(pyc)) {
                    return
                }
                for (var i = pyc.length - 1; i >= 0; i--) {
                    var a = pyc[i];
                    if (a[0] == "remove") {
                        revArr.push(a);
                        pyc.splice(i, 1)
                    } else {
                        for (var j = 0; j < revArr.length; j++) {
                            if (a[0] == revArr[j][1] && a[1] == revArr[j][2]) {
                                pyc.splice(i, 1);
                                break
                            }
                        }
                    }
                }
            };
        var isIE678 = function () {
            var browser = navigator.appName;
            if (browser == "Microsoft Internet Explorer") {
                var b_version = navigator.appVersion;
                var version = b_version.split(";");
                var trim_Version = version[1].replace(/[ ]/g, "");
                if (/MSIE[678]/.test(trim_Version)) {
                    return true
                }
            }
            return false
        };
        var RR = function (a, b, c, d) {
            return a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
        };
        var exeFun = function () {
            var pyc = dcpy(py.q);
            py.q = [];
            removeFun(pyc);
            for (var i = 0; i < pyc.length; i++) {
                for (var j = i + 1; j < pyc.length; j++) {
                    if (pyc[i][0] != "set" && pyc[j][0] == "set") {
                        var c = pyc[i];
                        pyc[i] = pyc[j];
                        pyc[j] = c
                    }
                }
            }
            for (var i = 0; i < pyc.length; ) {
                if ((pyc[i])[1] != "mapping") {
                    execute(pyc[i])
                }
                pyc.splice(i, 1)
            }
        };
        var dcpy = function (s) {
            var d = Ca(s) == "array" ? [] : {};
            for (var p in s) {
                var a = s[p];
                var t = Ca(a);
                if (t == "array" || t == "object") {
                    d[p] = dcpya(a)
                } else {
                    d[p] = s[p]
                }
            }
            return d
        };
        var dcpya = function (s) {
            var d = {};
            for (var i = 0; i < s.length; i++) {
                d[i] = s[i]
            }
            s.t && (d.t = s.t);
            d.length = s.length;
            return d
        };
        py.$ = {
            addEvent: U,
            removeEvent: RR,
            selector: sEle,
            e: execute,
            t: sendTrack,
            getCookie: ipy.cookie.get,
            setCookie: ipy.setCookie,
            pv: pv
        };
        cp(py.$, ipy);
        var cu;
        py.q == void 0 && (py.q = []);
        for (var i = 0; i < py.q.length; i++) {
            if ((py.q[i])[1] == "clickParam") {
                cu = (py.q[i])[2]
            }
        }
        cu = cu || "pyck", d = ipy.getQueryString(cu);
        d = d ? d : ipy.getInfo("ipycookie");
        ipy.setInfo("ipycookie", d);
        p(("https:" == location.protocol ? "https" : "http") + "://stats.ipinyou.com/presadv?a=" + E(py.a) + "&cb=" + py_n + "." + cb, function (data) { }, function (data) {
            try {
                exeFun()
            } catch (e) { }
        });
        if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) {
            rf()
        } else {
            U(D, "DOMContentLoaded", rf);
            U(D, "readystatechange", rf);
            if (D.createEventObject && D.documentElement.doScroll) {
                var Zk = !0;
                try {
                    Zk = !W.frameElement
                } catch (a) { }
                Zk && tf()
            }
            U(W, "load", rf)
        }
        "complete" === D.readyState ? Af() : U(W, "load", Af)
    } catch (e) { }
})(window, document, encodeURIComponent);