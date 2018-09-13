﻿/*
jQuery Waypoints - v1.0.2
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function ($, l, n, j, d) {
    var f = $(j),
        k = [],
        m = -99999,
        i = false,
        o = false,
        g = "waypoint.reached",
        c = {
            init: function (q, p) {
                this.each(function () {
                    var u = $(this),
                        r = h(u),
                        t = r < 0 ? $.fn[l].defaults : k[r].options,
                        s = $.extend({}, t, p);
                    s.offset = s.offset === "bottom-in-view" ? function () {
                        return $[n]("viewportHeight") - $(this).outerHeight()
                    } : s.offset;
                    if (r < 0) {
                        k.push({
                            element: u,
                            offset: u.offset().top,
                            options: s
                        })
                    } else {
                        k[r].options = s
                    }
                    q && u.bind(g, q)
                });
                $[n]("refresh");
                return this
            }, remove: function () {
                return this.each(function () {
                    var p = h($(this));
                    if (p >= 0) {
                        k.splice(p, 1)
                    }
                })
            }, destroy: function () {
                return this.unbind(g)[l]("remove")
            }
        };

    function h(q) {
        var p = k.length - 1;
        while (p >= 0 && k[p].element[0] !== q[0]) {
            p -= 1
        }
        return p
    }

    function b(q, p) {
        q.element.trigger(g, p);
        if (q.options.triggerOnce) {
            q.element[l]("destroy")
        }
    }

    function e() {
        var q = f.scrollTop(),
            p = q > m,
            r = $.grep(k, function (t, s) {
                return p ? (t.offset > m && t.offset <= q) : (t.offset <= m && t.offset > q)
            });
        if (!m || !q) {
            $[n]("refresh")
        }
        m = q;
        if (!r.length) {
            return
        }
        if ($[n].settings.continuous) {
            $.each(p ? r : r.reverse(), function (t, s) {
                b(s, [p ? "down" : "up"])
            })
        } else {
            b(r[p ? r.length - 1 : 0], [p ? "down" : "up"])
        }
    }
    $.fn[l] = function (p) {
        if (c[p]) {
            return c[p].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof p === "function" || !p) {
                return c.init.apply(this, arguments)
            } else {
                if (typeof p === "object") {
                    return c.init.apply(this, [null, p])
                } else {
                    $.error("Method " + p + " does not exist on jQuery" + l)
                }
            }
        }
    };
    $.fn[l].defaults = {
        offset: 0,
        triggerOnce: false
    };
    var a = {
        refresh: function () {
            $.each(k, function (r, t) {
                var p = 0,
                    s = t.offset;
                if (typeof t.options.offset === "function") {
                    p = t.options.offset.apply(t.element)
                } else {
                    if (typeof t.options.offset === "string") {
                        var q = parseFloat(t.options.offset),
                            p = t.options.offset.indexOf("%") ? Math.ceil($[n]("viewportHeight") * (q / 100)) : q
                    } else {
                        p = t.options.offset
                    }
                }
                t.offset = t.element.offset().top - p;
                if (m > s && m <= t.offset) {
                    b(t, ["up"])
                } else {
                    if (m < s && m >= t.offset) {
                        b(t, ["down"])
                    }
                }
            });
            k.sort(function (q, p) {
                return q.offset - p.offset
            })
        }, viewportHeight: function () {
            return (j.innerHeight ? j.innerHeight : f.height())
        }, aggregate: function () {
            var p = $();
            $.each(k, function (q, r) {
                p = p.add(r.element)
            });
            return p
        }
    };
    $[n] = function (p) {
        if (a[p]) {
            return a[p].apply(this)
        } else {
            return a.aggregate()
        }
    };
    $[n].settings = {
        continuous: true,
        resizeThrottle: 200,
        scrollThrottle: 100
    };
    f.scroll(function () {
        if (!i) {
            i = true;
            j.setTimeout(function () {
                e();
                i = false
            }, $[n].settings.scrollThrottle)
        }
    }).resize(function () {
        if (!o) {
            o = true;
            j.setTimeout(function () {
                $[n]("refresh");
                o = false
            }, $[n].settings.resizeThrottle)
        }
    }).load(function () {
        $[n]("refresh");
        e()
    })
})(jQuery, "waypoint", "waypoints", this); ;