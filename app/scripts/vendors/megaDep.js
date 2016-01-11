/*
Cobalt Mega API by Carter Feldman

An implementation of the original MEGA sourcecode:
http://mega.co.nz/

JSON v3.2.4 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
*/
function randomByte() {
    return Math.round(Math.random() * 255) & 255
}

function rc4Init() {
    var e, t;
    var n = new Array(256);
    var r, i;
    for (e = 0; e < 256; e++) {
        s[e] = e;
        n[e] = randomByte() ^ timeByte()
    }
    i = 0;
    for (e = 0; e < 2; e++) {
        for (r = 0; r < 256; r++) {
            i = (n[e] + s[r] + i) % 256;
            t = s[r];
            s[r] = s[i];
            s[i] = t
        }
    }
    rc4x = 0;
    rc4y = 0
}

function rc4Next(e) {
    var t;
    rc4x = rc4x + 1 & 255;
    rc4y = s[rc4x] + rc4y & 255;
    t = s[rc4x];
    s[rc4x] = s[rc4y];
    s[rc4y] = t ^ e;
    return (e ^ s[(s[rc4x] + s[rc4y]) % 256]) & 255
}(function() {
    function C(i) {
        var s, o, a, f = i == "json";
        if (f || i == "json-stringify" || i == "json-parse") {
            if (i == "json-stringify" || f) {
                if (s = typeof u.stringify == "function" && E) {
                    (a = function() {
                        return 1
                    }).toJSON = a;
                    try {
                        s = u.stringify(0) === "0" && u.stringify(new Number) === "0" && u.stringify(new String) == '""' && u.stringify(r) === e && u.stringify(e) === e && u.stringify() === e && u.stringify(a) === "1" && u.stringify([a]) == "[1]" && u.stringify([e]) == "[null]" && u.stringify(n) == "null" && u.stringify([e, r, n]) == "[null,null,null]" && u.stringify({
                            A: [a, t, false, n, "\0\b\n\f\r "]
                        }) == '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' && u.stringify(n, a) === "1" && u.stringify([1, 2], n, 1) == "[\n 1,\n 2\n]" && u.stringify(new Date(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && u.stringify(new Date(864e13)) == '"+275760-09-13T00:00:00.000Z"' && u.stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && u.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                    } catch (l) {
                        s = false
                    }
                }
                if (!f) return s
            }
            if (i == "json-parse" || f) {
                if (typeof u.parse == "function") try {
                    if (u.parse("0") === 0 && !u.parse(false)) {
                        a = u.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                        if (o = a.a.length == 5 && a.a[0] == 1) {
                            try {
                                o = !u.parse('" "')
                            } catch (c) {}
                            if (o) try {
                                o = u.parse("01") != 1
                            } catch (h) {}
                        }
                    }
                } catch (p) {
                    o = false
                }
                if (!f) return o
            }
            return s && o
        }
    }
    var e = void 0,
        t = !0,
        n = null,
        r = {}.toString,
        i, s, o = "function" === typeof define && define.c,
        u = !o && "object" == typeof exports && exports;
    u || o ? "object" == typeof JSON && JSON ? o ? u = JSON : (u.stringify = JSON.stringify, u.parse = JSON.parse) : o && (u = this.JSON = {}) : u = this.JSON || (this.JSON = {});
    var a, f, l, c, h, p, d, v, m, g, y, b, w, E = new Date(-0xc782b5b800cec),
        S, x, T;
    try {
        E = -109252 == E.getUTCFullYear() && 0 === E.getUTCMonth() && 1 == E.getUTCDate() && 10 == E.getUTCHours() && 37 == E.getUTCMinutes() && 6 == E.getUTCSeconds() && 708 == E.getUTCMilliseconds()
    } catch (N) {}
    if (!C("json")) {
        E || (S = Math.floor, x = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], T = function(e, t) {
            return x[t] + 365 * (e - 1970) + S((e - 1969 + (t = +(t > 1))) / 4) - S((e - 1901 + t) / 100) + S((e - 1601 + t) / 400)
        });
        if (!(i = {}.hasOwnProperty)) i = function(e) {
            var t = {},
                s;
            if ((t.__proto__ = n, t.__proto__ = {
                    toString: 1
                }, t).toString != r) i = function(e) {
                var t = this.__proto__,
                    e = e in (this.__proto__ = n, this);
                this.__proto__ = t;
                return e
            };
            else {
                s = t.constructor;
                i = function(e) {
                    var t = (this.constructor || s).prototype;
                    return e in this && !(e in t && this[e] === t[e])
                }
            }
            t = n;
            return i.call(this, e)
        };
        s = function(e, t) {
            var s = 0,
                o, u, a;
            (o = function() {
                this.valueOf = 0
            }).prototype.valueOf = 0;
            u = new o;
            for (a in u) i.call(u, a) && s++;
            o = u = n;
            if (s) s = s == 2 ? function(e, t) {
                var n = {},
                    s = r.call(e) == "[object Function]",
                    o;
                for (o in e) !(s && o == "prototype") && !i.call(n, o) && (n[o] = 1) && i.call(e, o) && t(o)
            } : function(e, t) {
                var n = r.call(e) == "[object Function]",
                    s, o;
                for (s in e) !(n && s == "prototype") && i.call(e, s) && !(o = s === "constructor") && t(s);
                (o || i.call(e, s = "constructor")) && t(s)
            };
            else {
                u = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                s = function(e, t) {
                    var n = r.call(e) == "[object Function]",
                        s;
                    for (s in e) !(n && s == "prototype") && i.call(e, s) && t(s);
                    for (n = u.length; s = u[--n]; i.call(e, s) && t(s));
                }
            }
            s(e, t)
        };
        C("json-stringify") || (a = {
            "\\": "\\\\",
            '"': '\\"',
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "   ": "\\t"
        }, f = function(e, t) {
            return ("000000" + (t || 0)).slice(-e)
        }, l = function(e) {
            for (var t = '"', n = 0, r; r = e.charAt(n); n++) t = t + ('\\"\b\f\n\r '.indexOf(r) > -1 ? a[r] : a[r] = r < " " ? "\\u00" + f(2, r.charCodeAt(0).toString(16)) : r);
            return t + '"'
        }, c = function(o, u, a, h, p, d, v) {
            var m = u[o],
                g, y, b, w, E, x, N, C, L;
            if (typeof m == "object" && m) {
                g = r.call(m);
                if (g == "[object Date]" && !i.call(m, "toJSON"))
                    if (m > -1 / 0 && m < 1 / 0) {
                        if (T) {
                            b = S(m / 864e5);
                            for (g = S(b / 365.2425) + 1970 - 1; T(g + 1, 0) <= b; g++);
                            for (y = S((b - T(g, 0)) / 30.42); T(g, y + 1) <= b; y++);
                            b = 1 + b - T(g, y);
                            w = (m % 864e5 + 864e5) % 864e5;
                            E = S(w / 36e5) % 24;
                            x = S(w / 6e4) % 60;
                            N = S(w / 1e3) % 60;
                            w = w % 1e3
                        } else {
                            g = m.getUTCFullYear();
                            y = m.getUTCMonth();
                            b = m.getUTCDate();
                            E = m.getUTCHours();
                            x = m.getUTCMinutes();
                            N = m.getUTCSeconds();
                            w = m.getUTCMilliseconds()
                        }
                        m = (g <= 0 || g >= 1e4 ? (g < 0 ? "-" : "+") + f(6, g < 0 ? -g : g) : f(4, g)) + "-" + f(2, y + 1) + "-" + f(2, b) + "T" + f(2, E) + ":" + f(2, x) + ":" + f(2, N) + "." + f(3, w) + "Z"
                    } else m = n;
                else if (typeof m.toJSON == "function" && (g != "[object Number]" && g != "[object String]" && g != "[object Array]" || i.call(m, "toJSON"))) m = m.toJSON(o)
            }
            a && (m = a.call(u, o, m));
            if (m === n) return "null";
            g = r.call(m);
            if (g == "[object Boolean]") return "" + m;
            if (g == "[object Number]") return m > -1 / 0 && m < 1 / 0 ? "" + m : "null";
            if (g == "[object String]") return l(m);
            if (typeof m == "object") {
                for (o = v.length; o--;)
                    if (v[o] === m) throw TypeError();
                v.push(m);
                C = [];
                u = d;
                d = d + p;
                if (g == "[object Array]") {
                    y = 0;
                    for (o = m.length; y < o; L || (L = t), y++) {
                        g = c(y, m, a, h, p, d, v);
                        C.push(g === e ? "null" : g)
                    }
                    o = L ? p ? "[\n" + d + C.join(",\n" + d) + "\n" + u + "]" : "[" + C.join(",") + "]" : "[]"
                } else {
                    s(h || m, function(n) {
                        var r = c(n, m, a, h, p, d, v);
                        r !== e && C.push(l(n) + ":" + (p ? " " : "") + r);
                        L || (L = t)
                    });
                    o = L ? p ? "{\n" + d + C.join(",\n" + d) + "\n" + u + "}" : "{" + C.join(",") + "}" : "{}"
                }
                v.pop();
                return o
            }
        }, u.stringify = function(e, t, n) {
            var i, s, o, u, a, f;
            if (typeof t == "function" || typeof t == "object" && t)
                if (r.call(t) == "[object Function]") s = t;
                else if (r.call(t) == "[object Array]") {
                o = {};
                u = 0;
                for (a = t.length; u < a; f = t[u++], (r.call(f) == "[object String]" || r.call(f) == "[object Number]") && (o[f] = 1));
            }
            if (n)
                if (r.call(n) == "[object Number]") {
                    if ((n = n - n % 1) > 0) {
                        i = "";
                        for (n > 10 && (n = 10); i.length < n; i = i + " ");
                    }
                } else r.call(n) == "[object String]" && (i = n.length <= 10 ? n : n.slice(0, 10));
            return c("", (f = {}, f[""] = e, f), s, o, i, "", [])
        });
        C("json-parse") || (h = String.fromCharCode, p = {
            "\\": "\\",
            '"': '"',
            "/": "/",
            b: "\b",
            t: "    ",
            n: "\n",
            f: "\f",
            r: "\r"
        }, d = function() {
            b = w = n;
            throw SyntaxError()
        }, v = function() {
            for (var e = w, r = e.length, i, s, o, u, a; b < r;) {
                i = e.charAt(b);
                if ("   \r\n ".indexOf(i) > -1) b++;
                else {
                    if ("{}[]:,".indexOf(i) > -1) {
                        b++;
                        return i
                    }
                    if (i == '"') {
                        s = "@";
                        for (b++; b < r;) {
                            i = e.charAt(b);
                            if (i < " ") d();
                            else if (i == "\\") {
                                i = e.charAt(++b);
                                if ('\\"/btnfr'.indexOf(i) > -1) {
                                    s = s + p[i];
                                    b++
                                } else if (i == "u") {
                                    o = ++b;
                                    for (u = b + 4; b < u; b++) {
                                        i = e.charAt(b);
                                        i >= "0" && i <= "9" || i >= "a" && i <= "f" || i >= "A" && i <= "F" || d()
                                    }
                                    s = s + h("0x" + e.slice(o, b))
                                } else d()
                            } else {
                                if (i == '"') break;
                                s = s + i;
                                b++
                            }
                        }
                        if (e.charAt(b) == '"') {
                            b++;
                            return s
                        }
                    } else {
                        o = b;
                        if (i == "-") {
                            a = t;
                            i = e.charAt(++b)
                        }
                        if (i >= "0" && i <= "9") {
                            for (i == "0" && (i = e.charAt(b + 1), i >= "0" && i <= "9") && d(); b < r && (i = e.charAt(b), i >= "0" && i <= "9"); b++);
                            if (e.charAt(b) == ".") {
                                for (u = ++b; u < r && (i = e.charAt(u), i >= "0" && i <= "9"); u++);
                                u == b && d();
                                b = u
                            }
                            i = e.charAt(b);
                            if (i == "e" || i == "E") {
                                i = e.charAt(++b);
                                (i == "+" || i == "-") && b++;
                                for (u = b; u < r && (i = e.charAt(u), i >= "0" && i <= "9"); u++);
                                u == b && d();
                                b = u
                            }
                            return +e.slice(o, b)
                        }
                        a && d();
                        if (e.slice(b, b + 4) == "true") {
                            b = b + 4;
                            return t
                        }
                        if (e.slice(b, b + 5) == "false") {
                            b = b + 5;
                            return false
                        }
                        if (e.slice(b, b + 4) == "null") {
                            b = b + 4;
                            return n
                        }
                    }
                    d()
                }
            }
            return "$"
        }, m = function(e) {
            var n, r;
            e == "$" && d();
            if (typeof e == "string") {
                if (e.charAt(0) == "@") return e.slice(1);
                if (e == "[") {
                    for (n = [];; r || (r = t)) {
                        e = v();
                        if (e == "]") break;
                        if (r)
                            if (e == ",") {
                                e = v();
                                e == "]" && d()
                            } else d();
                        e == "," && d();
                        n.push(m(e))
                    }
                    return n
                }
                if (e == "{") {
                    for (n = {};; r || (r = t)) {
                        e = v();
                        if (e == "}") break;
                        if (r)
                            if (e == ",") {
                                e = v();
                                e == "}" && d()
                            } else d();
                            (e == "," || typeof e != "string" || e.charAt(0) != "@" || v() != ":") && d();
                        n[e.slice(1)] = m(v())
                    }
                    return n
                }
                d()
            }
            return e
        }, y = function(t, n, r) {
            r = g(t, n, r);
            r === e ? delete t[n] : t[n] = r
        }, g = function(e, t, n) {
            var i = e[t],
                o;
            if (typeof i == "object" && i)
                if (r.call(i) == "[object Array]")
                    for (o = i.length; o--;) y(i, o, n);
                else s(i, function(e) {
                    y(i, e, n)
                });
            return n.call(e, t, i)
        }, u.parse = function(e, t) {
            var i, s;
            b = 0;
            w = e;
            i = m(v());
            v() != "$" && d();
            b = w = n;
            return t && r.call(t) == "[object Function]" ? g((s = {}, s[""] = i, s), "", t) : i
        })
    }
    o && define(function() {
        return u
    })
})();
if (typeof localStorage == "undefined") var b_u = 1;
var d = false,
    rc4x, rc4y, s = new Array(256),
    apipath = "https://eu.api.mega.co.nz/",
    staticpath = "https://eu.static.mega.co.nz/";
var sjcl = {
    cipher: {}
};
sjcl.cipher.aes = function(a) {
    this.a[0][0][0] || this.d();
    var d, c, g, b, e = this.a[0][4],
        f = this.a[1];
    d = a.length;
    var j = 1;
    this.c = [g = a.slice(0), b = []];
    for (a = d; a < 4 * d + 28; a++) {
        c = g[a - 1];
        if (a % d === 0 || d === 8 && a % d === 4) {
            c = e[c >>> 24] << 24 ^ e[c >> 16 & 255] << 16 ^ e[c >> 8 & 255] << 8 ^ e[c & 255];
            if (a % d === 0) {
                c = c << 8 ^ c >>> 24 ^ j << 24;
                j = j << 1 ^ (j >> 7) * 283
            }
        }
        g[a] = g[a - d] ^ c
    }
    for (d = 0; a; d++, a--) {
        c = g[d & 3 ? a : a - 4];
        b[d] = a <= 4 || d < 4 ? c : f[0][e[c >>> 24]] ^ f[1][e[c >> 16 & 255]] ^ f[2][e[c >> 8 & 255]] ^ f[3][e[c & 255]]
    }
};
sjcl.cipher.aes.prototype = {
    encrypt: function(a) {
        return this.b(a, 0)
    },
    decrypt: function(a) {
        return this.b(a, 1)
    },
    a: [
        [
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            []
        ]
    ],
    d: function() {
        var a = this.a[0],
            d = this.a[1],
            c = a[4],
            g = d[4],
            b, e, f, j = [],
            l = [],
            m, i, h, k;
        for (b = 0; b < 0x100; b++) l[(j[b] = b << 1 ^ (b >> 7) * 283) ^ b] = b;
        for (e = f = 0; !c[e]; e ^= m || 1, f = l[f] || 1) {
            h = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4;
            h = h >> 8 ^ h & 255 ^ 99;
            c[e] = h;
            g[h] = e;
            i = j[b = j[m = j[e]]];
            k = i * 0x1010101 ^ b * 0x10001 ^ m * 0x101 ^ e * 0x1010100;
            i = j[h] * 0x101 ^ h * 0x1010100;
            for (b = 0; b < 4; b++) {
                a[b][e] = i = i << 24 ^ i >>> 8;
                d[b][h] = k = k << 24 ^ k >>> 8
            }
        }
        for (b = 0; b < 5; b++) {
            a[b] = a[b].slice(0);
            d[b] = d[b].slice(0)
        }
    },
    b: function(a, d) {
        var c = this.c[d],
            g = a[0] ^ c[0],
            b = a[d ? 3 : 1] ^ c[1],
            e = a[2] ^ c[2];
        a = a[d ? 1 : 3] ^ c[3];
        var f, j, l, m = c.length / 4 - 2,
            i, h = 4,
            k = [0, 0, 0, 0];
        f = this.a[d];
        var n = f[0],
            o = f[1],
            p = f[2],
            q = f[3],
            r = f[4];
        for (i = 0; i < m; i++) {
            f = n[g >>> 24] ^ o[b >> 16 & 255] ^ p[e >> 8 & 255] ^ q[a & 255] ^ c[h];
            j = n[b >>> 24] ^ o[e >> 16 & 255] ^ p[a >> 8 & 255] ^ q[g & 255] ^ c[h + 1];
            l = n[e >>> 24] ^ o[a >> 16 & 255] ^ p[g >> 8 & 255] ^ q[b & 255] ^ c[h + 2];
            a = n[a >>> 24] ^ o[g >> 16 & 255] ^ p[b >> 8 & 255] ^ q[e & 255] ^ c[h + 3];
            h += 4;
            g = f;
            b = j;
            e = l
        }
        for (i = 0; i < 4; i++) {
            k[d ? 3 & -i : i] = r[g >>> 24] << 24 ^ r[b >> 16 & 255] << 16 ^ r[e >> 8 & 255] << 8 ^ r[a & 255] ^ c[h++];
            f = g;
            g = b;
            b = e;
            e = a;
            a = f
        }
        return k
    }
};

function makeid(e) {
    var t = "";
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
    return t
};

function zeros(e) {
    var t = new Array(e);
    while (e-- > 0) t[e] = 0;
    return t
}

function zclip(e) {
    var t = e.length;
    if (e[t - 1]) return e;
    while (t > 1 && e[t - 1] == 0) t--;
    return e.slice(0, t)
}

function nbits(e) {
    var t = 1,
        n;
    if ((n = e >>> 16) != 0) {
        e = n;
        t += 16
    }
    if ((n = e >> 8) != 0) {
        e = n;
        t += 8
    }
    if ((n = e >> 4) != 0) {
        e = n;
        t += 4
    }
    if ((n = e >> 2) != 0) {
        e = n;
        t += 2
    }
    if ((n = e >> 1) != 0) {
        e = n;
        t += 1
    }
    return t
}

function badd(e, t) {
    var n = e.length;
    var r = t.length;
    if (n < r) return badd(t, e);
    var i = new Array(n);
    var s = 0,
        o = 0;
    for (; o < r; o++) {
        s += e[o] + t[o];
        i[o] = s & bm;
        s >>>= bs
    }
    for (; o < n; o++) {
        s += e[o];
        i[o] = s & bm;
        s >>>= bs
    }
    if (s) i[o] = s;
    return i
}

function bsub(e, t) {
    var n = e.length;
    var r = t.length;
    if (r > n) return [];
    if (r == n) {
        if (t[r - 1] > e[r - 1]) return [];
        if (r == 1) return [e[0] - t[0]]
    }
    var i = new Array(n);
    var s = 0;
    for (var o = 0; o < r; o++) {
        s += e[o] - t[o];
        i[o] = s & bm;
        s >>= bs
    }
    for (; o < n; o++) {
        s += e[o];
        i[o] = s & bm;
        s >>= bs
    }
    if (s) return [];
    return zclip(i)
}

function ip(e, t, n, r, i) {
    var s = n & bdm;
    var o = n >> bd;
    var u = r & bdm;
    var a = r >> bd;
    var f = o * u + a * s;
    var l = s * u + ((f & bdm) << bd) + e[t] + i;
    e[t] = l & bm;
    i = o * a + (f >> bd) + (l >> bs);
    return i
}

function bsqr(e) {
    var t = e.length;
    var n = 2 * t;
    var r = zeros(n);
    var i = 0;
    var s, o;
    for (s = 0; s < t; s++) {
        i = ip(r, 2 * s, e[s], e[s], 0);
        for (o = s + 1; o < t; o++) {
            i = ip(r, s + o, 2 * e[o], e[s], i)
        }
        r[s + t] = i
    }
    return zclip(r)
}

function bmul(e, t) {
    var n = e.length;
    var r = t.length;
    var i = zeros(n + r - 1);
    var s, o, u;
    for (o = 0; o < r; o++) {
        s = 0;
        for (u = 0; u < n; u++) {
            s = ip(i, o + u, e[u], t[o], s)
        }
        i[o + n] = s
    }
    return zclip(i)
}

function toppart(e, t, n) {
    var r = 0;
    while (t >= 0 && n-- > 0) r = r * bx2 + e[t--];
    return r
}

function bdiv(e, t) {
    var n = e.length - 1;
    var r = t.length - 1;
    var i = n - r;
    if (n < r || n == r && (e[n] < t[n] || n > 0 && e[n] == t[n] && e[n - 1] < t[n - 1])) {
        this.q = [0];
        this.mod = e;
        return this
    }
    if (n == r && toppart(e, r, 2) / toppart(t, r, 2) < 4) {
        var s = e.concat();
        var o = 0;
        var u;
        for (;;) {
            u = bsub(s, t);
            if (u.length == 0) break;
            s = u;
            o++
        }
        this.q = [o];
        this.mod = s;
        return this
    }
    var a = Math.floor(Math.log(t[r]) / log2) + 1;
    var f = bs - a;
    var s = e.concat();
    var l = t.concat();
    if (f) {
        for (c = r; c > 0; c--) l[c] = l[c] << f & bm | l[c - 1] >> a;
        l[0] = l[0] << f & bm;
        if (s[n] & (bm << a & bm)) {
            s[++n] = 0;
            i++
        }
        for (c = n; c > 0; c--) s[c] = s[c] << f & bm | s[c - 1] >> a;
        s[0] = s[0] << f & bm
    }
    var c, h, p;
    var d = zeros(i + 1);
    var v = zeros(i).concat(l);
    for (;;) {
        p = bsub(s, v);
        if (p.length == 0) break;
        d[i]++;
        s = p
    }
    var m = l[r],
        g = toppart(l, r, 2);
    for (c = n; c > r; c--) {
        var y = c - r - 1;
        if (c >= s.length) d[y] = 1;
        else if (s[c] == m) d[y] = bm;
        else d[y] = Math.floor(toppart(s, c, 2) / m);
        var b = toppart(s, c, 3);
        while (d[y] * g > b) d[y]--;
        v = v.slice(1);
        p = bsub(s, bmul([d[y]], v));
        if (p.length == 0) {
            d[y]--;
            p = bsub(s, bmul([d[y]], v))
        }
        s = p
    }
    if (f) {
        for (c = 0; c < s.length - 1; c++) s[c] = s[c] >> f | s[c + 1] << a & bm;
        s[s.length - 1] >>= f
    }
    this.q = zclip(d);
    this.mod = zclip(s);
    return this
}

function simplemod(e, t) {
    var n = 0,
        r;
    for (var i = e.length - 1; i >= 0; i--) {
        r = e[i];
        n = ((r >> bd) + (n << bd)) % t;
        n = ((r & bdm) + (n << bd)) % t
    }
    return n
}

function bmod(e, t) {
    if (t.length == 1) {
        if (e.length == 1) return [e[0] % t[0]];
        if (t[0] < bdm) return [simplemod(e, t[0])]
    }
    var n = bdiv(e, t);
    return n.mod
}

function bmod2(e, t, n) {
    var r = e.length - (t.length << 1);
    if (r > 0) return bmod2(e.slice(0, r).concat(bmod2(e.slice(r), t, n)), t, n);
    var i = t.length + 1,
        s = t.length - 1,
        o;
    var u = bmul(e.slice(s), n).slice(i);
    var a = e.slice(0, i);
    var f = bmul(u, t).slice(0, i);
    var l = bsub(a, f);
    if (l.length == 0) {
        a[i] = 1;
        l = bsub(a, f)
    }
    for (var c = 0;; c++) {
        o = bsub(l, t);
        if (o.length == 0) break;
        l = o;
        if (c >= 3) return bmod2(l, t, n)
    }
    return l
}

function bexpmod(e, t, n) {
    var r = e.concat();
    var i = t.length - 1;
    var s = nbits(t[i]) - 2;
    for (; i >= 0; i--) {
        for (; s >= 0; s -= 1) {
            r = bmod(bsqr(r), n);
            if (t[i] & 1 << s) r = bmod(bmul(r, e), n)
        }
        s = bs - 1
    }
    return r
}

function bmodexp(e, t, n) {
    var r = e.concat();
    var i = t.length - 1;
    var s = n.length * 2;
    var o = zeros(s + 1);
    o[s] = 1;
    o = bdiv(o, n).q;
    s = nbits(t[i]) - 2;
    for (; i >= 0; i--) {
        for (; s >= 0; s -= 1) {
            r = bmod2(bsqr(r), n, o);
            if (t[i] & 1 << s) r = bmod2(bmul(r, e), n, o)
        }
        s = bs - 1
    }
    return r
}

function RSAencrypt(e, t, n) {
    return bexpmod(e, t, n)
}

function RSAdecrypt(e, t, n, r, i) {
    var s = bmodexp(bmod(e, n), bmod(t, bsub(n, [1])), n);
    var o = bmodexp(bmod(e, r), bmod(t, bsub(r, [1])), r);
    var u = bsub(o, s);
    if (u.length == 0) {
        u = bsub(s, o);
        u = bmod(bmul(u, i), r);
        u = bsub(r, u)
    } else {
        u = bmod(bmul(u, i), r)
    }
    return badd(bmul(u, n), s)
}

function mpi2b(e) {
    var t = 1,
        n = [0],
        r = 0,
        i = 256;
    var s, o = e.length;
    if (o < 2) return 0;
    var u = (o - 2) * 8;
    var a = e.charCodeAt(0) * 256 + e.charCodeAt(1);
    if (a > u || a < u - 8) return 0;
    for (var f = 0; f < u; f++) {
        if ((i <<= 1) > 255) {
            i = 1;
            s = e.charCodeAt(--o)
        }
        if (t > bm) {
            t = 1;
            n[++r] = 0
        }
        if (s & i) n[r] |= t;
        t <<= 1
    }
    return n
}

function b2mpi(e) {
    var t = 1,
        n = 0,
        r = [0],
        i = 1,
        s = 0;
    var o = e.length * bs;
    var u, a = "";
    for (u = 0; u < o; u++) {
        if (e[n] & t) r[s] |= i;
        if ((i <<= 1) > 255) {
            i = 1;
            r[++s] = 0
        }
        if ((t <<= 1) > bm) {
            t = 1;
            n++
        }
    }
    while (s && r[s] == 0) s--;
    t = 256;
    for (o = 8; o > 0; o--)
        if (r[s] & (t >>= 1)) break;
    o += s * 8;
    a += String.fromCharCode(o / 256) + String.fromCharCode(o % 256);
    if (o)
        for (u = s; u >= 0; u--) a += String.fromCharCode(r[u]);
    return a
}
var bs = 28;
var bx2 = 1 << bs,
    bm = bx2 - 1,
    bx = bx2 >> 1,
    bd = bs >> 1,
    bdm = (1 << bd) - 1;
var log2 = Math.log(2);

function s2r(e) {
    var t, n, r;
    var i = "",
        s = 0,
        o = 0;
    var u = e.length;
    for (r = 0; r < u; r++) {
        n = e.charCodeAt(r);
        if (o == 0) {
            i += b64s.charAt(n >> 2 & 63);
            t = (n & 3) << 4
        } else if (o == 1) {
            i += b64s.charAt(t | n >> 4 & 15);
            t = (n & 15) << 2
        } else if (o == 2) {
            i += b64s.charAt(t | n >> 6 & 3);
            s += 1;
            if (s % 60 == 0) i += "\n";
            i += b64s.charAt(n & 63)
        }
        s += 1;
        if (s % 60 == 0) i += "\n";
        o += 1;
        if (o == 3) o = 0
    }
    if (o > 0) {
        i += b64s.charAt(t);
        s += 1;
        if (s % 60 == 0) i += "\n";
        i += "=";
        s += 1
    }
    if (o == 1) {
        if (s % 60 == 0) i += "\n";
        i += "="
    }
    return i
}

function r2s(e) {
    var t, n;
    var r = "",
        i = 0,
        s = 0;
    var o = e.length;
    for (n = 0; n < o; n++) {
        t = b64s.indexOf(e.charAt(n));
        if (t >= 0) {
            if (i) r += String.fromCharCode(s | t >> 6 - i & 255);
            i = i + 2 & 7;
            s = t << i & 255
        }
    }
    return r
}
var b64s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function s2b(e) {
    var t = 1,
        n = [0],
        r = 0,
        i = 0,
        s = 256;
    var o = e.length * 8;
    for (var u = 0; u < o; u++) {
        if ((s <<= 1) > 255) {
            s = 1;
            c = e.charCodeAt(i++)
        }
        if (t > bm) {
            t = 1;
            n[++r] = 0
        }
        if (c & s) n[r] |= t;
        t <<= 1
    }
    return n
}

function b2s(e) {
    var t = 1,
        n = 0,
        r = [0],
        i = 1,
        s = 0;
    var o = e.length * bs;
    var u, a = "";
    for (u = 0; u < o; u++) {
        if (e[n] & t) r[s] |= i;
        if ((i <<= 1) > 255) {
            i = 1;
            r[++s] = 0
        }
        if ((t <<= 1) > bm) {
            t = 1;
            n++
        }
    }
    while (s >= 0 && r[s] == 0) s--;
    for (u = 0; u <= s; u++) a = String.fromCharCode(r[u]) + a;
    return a
}

function s2hex(e) {
    var t = "";
    for (var n = 0; n < e.length; n++) {
        c = e.charCodeAt(n);
        t += (c < 16 ? "0" : "") + c.toString(16)
    }
    return t
}

function hex2s(e) {
    var t = "";
    if (e.indexOf("0x") == 0 || e.indexOf("0X") == 0) e = e.substr(2);
    if (e.length % 2) e += "0";
    for (var n = 0; n < e.length; n += 2) t += String.fromCharCode(parseInt(e.slice(n, n + 2), 16));
    return t
}

function rand(e) {
    if (e == 2) {
        if (!Rbits) {
            Rbits = 8;
            Rbits2 = rc4Next(randomByte())
        }
        Rbits--;
        var t = Rbits2 & 1;
        Rbits2 >>= 1;
        return t
    }
    var n = 1;
    t = 0;
    while (e > n && n > 0) {
        n <<= 8;
        t = t << 8 | rc4Next(randomByte())
    }
    if (cbuf) {
        window.crypto.getRandomValues(cbuf);
        t ^= cbuf[0]
    }
    if (t < 0) t ^= 2147483648;
    return t % e
}

function beq(e, t) {
    if (e.length != t.length) return 0;
    for (var n = e.length - 1; n >= 0; n--) {
        if (e[n] != t[n]) return 0
    }
    return 1
}

function blshift(e, t) {
    var n, r = 0;
    var i = new Array(e.length);
    for (n = 0; n < e.length; n++) {
        r |= e[n] << t;
        i[n] = r & bm;
        r >>= bs
    }
    if (r) i[n] = r;
    return i
}

function brshift(e) {
    var t = 0,
        n, r;
    var i = new Array(e.length);
    for (n = e.length - 1; n >= 0; n--) {
        t <<= bs;
        r = e[n];
        i[n] = (r | t) >> 1;
        t = r & 1
    }
    n = i.length;
    if (i[n - 1]) return i;
    while (n > 1 && i[n - 1] == 0) n--;
    return i.slice(0, n)
}

function bgcd(e, t) {
    var n, r, i = t.concat(),
        s = e.concat();
    for (;;) {
        n = bsub(i, s);
        if (beq(n, [0])) return s;
        if (n.length) {
            while ((n[0] & 1) == 0) n = brshift(n);
            i = n
        } else {
            r = i;
            i = s;
            s = r
        }
    }
}

function rnum(e) {
    var t, n = 1,
        r = 0;
    var i = [];
    if (e == 0) e = 1;
    for (t = e; t > 0; t--) {
        if (rand(2)) i[r] |= n;
        n <<= 1;
        if (n == bx2) {
            n = 1;
            r++
        }
    }
    return i
}

function nextPrime(e) {
    var t;
    if (e == Primes[lastPrime] && lastPrime < Primes.length - 1) {
        return Primes[++lastPrime]
    }
    if (e < Primes[Primes.length - 1]) {
        for (t = Primes.length - 2; t > 0; t--) {
            if (Primes[t] <= e) {
                lastPrime = t + 1;
                return Primes[t + 1]
            }
        }
    }
    var n, r;
    e++;
    if ((e & 1) == 0) e++;
    for (;;) {
        if (e - sieve0 > sieveSize || e < sieve0) {
            for (t = sieveSize - 1; t >= 0; t--) sieve[t] = 0;
            sieve0 = e;
            primes = Primes.concat()
        }
        if (sieve[e - sieve0] == 0) {
            for (t = 0; t < primes.length; t++) {
                if ((n = primes[t]) && e % n == 0) {
                    for (r = e - sieve0; r < sieveSize; r += n) sieve[r] = n;
                    e += 2;
                    primes[t] = 0;
                    break
                }
            }
            if (t >= primes.length) {
                return e
            }
        } else {
            e += 2
        }
    }
}

function divisable(e, t) {
    if ((e[0] & 1) == 0) return 2;
    for (c = 0; c < Primes.length; c++) {
        if (Primes[c] >= t) return 0;
        if (simplemod(e, Primes[c]) == 0) return Primes[c]
    }
    c = Primes[Primes.length - 1];
    for (;;) {
        c = nextPrime(c);
        if (c >= t) return 0;
        if (simplemod(e, c) == 0) return c
    }
}

function bPowOf2(e) {
    var t = [],
        n, r = Math.floor(e / bs);
    for (n = r - 1; n >= 0; n--) t[n] = 0;
    t[r] = 1 << e % bs;
    return t
}

function jump(e) {
    stage = e
}

function push(e, t, n) {
    stack[sp] = new Object;
    stack[sp].args = n;
    stack[sp++].stage = t;
    stage = e
}

function getargs() {
    return stack[sp - 1].args
}

function ret(e) {
    retval = e;
    delete stack[sp];
    stage = stack[--sp].stage
}

function mpp1() {
    var e = getargs();
    if (d) console.log("Getting " + e + " prime bits at depth " + depth);
    if (e < 10) ret([Primes[rand(Primes.length)]]);
    else if (e <= 20) ret([nextPrime(rand(1 << e))]);
    else {
        depth++;
        var t;
        if (e > 40) {
            for (;;) {
                t = Math.pow(2, Math.random() - 1);
                if (e - t * e > 20) break
            }
        } else {
            t = .5
        }
        push(10, 11, Math.floor(t * e) + 1)
    }
}

function mpp2() {
    qq = retval;
    cbits = getargs();
    B = cbits * cbits / 10;
    I = bPowOf2(cbits - 2);
    I = bdiv(I, qq).q;
    Il = I.length;
    rc = 0;
    jump(12)
}

function mpp3() {
    var e, t, n, r, i, s, o;
    e = [];
    for (t = 0; t < Il; t++) e[t] = rand(bx2);
    e[Il - 1] %= I[Il - 1];
    e = bmod(e, I);
    if (!e[0]) e[0] |= 1;
    e = badd(e, I);
    t = blshift(bmul(e, qq), 1);
    t[0] |= 1;
    if (!divisable(t, B)) {
        n = rnum(cbits - 1);
        n[0] |= 2;
        o = bsub(t, [1]);
        var u = bmodexp(n, o, t);
        if (beq(u, [1])) {
            s = blshift(e, 1);
            r = bsub(bmodexp(n, s, t), [1]);
            i = bgcd(r, t);
            if (beq(i, [1])) {
                depth--;
                setprogress(0, 45 * cbits / bits);
                if (i) console.log("rc=" + rc);
                ret(t)
            }
        }
    }
    rc++
}

function sub2(e, t) {
    var n = bsub(e, t);
    if (n.length == 0) {
        this.a = bsub(t, e);
        this.sign = 1
    } else {
        this.a = n;
        this.sign = 0
    }
    return this
}

function signedsub(e, t) {
    if (e.sign) {
        if (t.sign) return sub2(t, e);
        else {
            this.a = badd(e, t);
            this.sign = 1
        }
    } else {
        if (t.sign) {
            this.a = badd(e, t);
            this.sign = 0
        } else return sub2(e, t)
    }
    return this
}

function modinverse() {
    var e = getargs();
    x = e[0];
    n = e[1];
    y = n.concat();
    a = [1];
    b = [0];
    a.sign = 0;
    b.sign = 0;
    jump(201)
}

function modinverse2() {
    var e, t, n;
    if (y.length > 1 || y[0]) {
        e = y.concat();
        t = bdiv(x, y);
        y = t.mod;
        q = t.q;
        x = e;
        e = b.concat();
        n = b.sign;
        bq = bmul(b, q);
        bq.sign = b.sign;
        t = signedsub(a, bq);
        b = t.a;
        b.sign = t.sign;
        a = e;
        a.sign = n
    } else jump(202)
}

function modinverse3() {
    if (x.length != 1 || x[0] != 1) a = [0];
    else if (a.sign) a = bsub(n, a);
    ret(a)
}

function setprogress(e, t) {
    if (e) {
        basep = t;
        t = 0
    }
    ui_keyprogress(Math.floor(basep + t))
}

function keygenexec() {
    var e;
    var t = 0;
    do {
        switch (stage) {
            case 0:
                setprogress(1, 0);
                maxsp = 0;
                if (d) console.log("mpp1");
                push(10, 1, bits);
                break;
            case 1:
                setprogress(1, 45);
                maxsp = 0;
                rsa_q = retval;
                if (d) console.log("mpp2");
                push(10, 2, bits);
                break;
            case 2:
                rsa_p = retval;
                if (d) console.log("bmul");
                p1q1 = bmul(bsub(rsa_p, [1]), bsub(rsa_q, [1]));
                c = 5;
                jump(100);
                break;
            case 10:
                mpp1();
                break;
            case 11:
                mpp2();
                break;
            case 12:
                mpp3();
                break;
            case 100:
                setprogress(1, 90);
                rsa_e = [Primes[c]];
                rsa_d = push(200, 101, [rsa_e, p1q1]);
                break;
            case 101:
                setprogress(1, 95);
                rsa_d = retval;
                if (rsa_d.length != 1 || rsa_d[0] != 0 || ++c >= Primes.length) jump(102);
                else jump(100);
                break;
            case 102:
                setprogress(0, 1);
                rsa_pq = bmul(rsa_p, rsa_q);
                rsa_u = push(200, 110, [rsa_p, rsa_q]);
                break;
            case 110:
                setprogress(1, 100);
                rsa_u = retval;
                return keycomplete();
            case 200:
                setprogress(0, 2);
                modinverse();
                break;
            case 201:
                modinverse2();
                break;
            case 202:
                setprogress(0, 3);
                modinverse3()
        }
        e = (new Date).getTime();
        t++
    } while (e - lasttime < 20);
    lasttime = e;
    setTimeout(keygenexec, 0)
}

function genkey() {
    stage = 0;
    bits = 1024;
    lasttime = (new Date).getTime();
    startTime = new Date;
    keygenexec()
}

function keycomplete() {
    var e = new Date;
    if (d) console.log("Key generation took " + (e.getTime() - startTime.getTime()) / 1e3) + " seconds!";
    api_setrsa([rsa_p, rsa_q, rsa_d, rsa_u], [rsa_pq, rsa_e])
}
var Sr, Rsl, Rbits, Rbits2;
var Rx = 0,
    Ry = 0;
var cbuf;
if (typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
    cbuf = new Uint32Array(new ArrayBuffer(4))
}
var Primes = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021];
var sieveSize = 4e3;
var sieve0 = -1 * sieveSize;
var sieve = [];
var lastPrime = 0;
var depth = 0;
var sp = 0;
var stack = Array(20);
var stage;
var retval;
var B, I, Il, qq, cbits;
var maxsp = 0;
var rc;
var y, bq, a, b;
var x, n;
var rsa_p, rsa_q, rsa_e, rsa_d, rsa_pq, rsa_u;
var c, p1q1;
var bits;
var lasttime;
var basep;
var privk, pubk;
/* Mega specific functions below */
function ssl_needed() {
    for (var e = ssl_opt.length; e--;)
        if (navigator.userAgent.indexOf(ssl_opt[e]) >= 0) return 0;
    for (var e = ssl_off.length; e--;)
        if (navigator.userAgent.indexOf(ssl_off[e]) >= 0) return -1;
    return 1
}

function benchmark() {
    var e = Array(1048577).join("a");
    var n = str_to_ab(e);
    var r = new Uint8Array(n);
    var i = new sjcl.cipher.aes([0, 1, 2, 3]);
    t = (new Date).getTime();
    for (var s = 16; s--;) encrypt_ab_ctr(i, r, [1, 2], 3e4);
    t = (new Date).getTime() - t;
    console.log(e.length * 16 / 1024 / (t / 1e3) + " KB/s")
}

function condenseMacs(e, t) {
    var n, r;
    mac = [0, 0, 0, 0];
    r = new sjcl.cipher.aes([t[0], t[1], t[2], t[3]]);
    for (n = 0; n < e.length; n++) {
        mac[0] ^= e[n][0];
        mac[1] ^= e[n][1];
        mac[2] ^= e[n][2];
        mac[3] ^= e[n][3];
        mac = r.encrypt(mac)
    }
    return mac
}

function prepare_key(e) {
    var t, n, r;
    var i = [2479122403, 2108737444, 3518906241, 22203222];
    for (r = 65536; r--;) {
        for (n = 0; n < e.length; n += 4) {
            key = [0, 0, 0, 0];
            for (t = 0; t < 4; t++)
                if (t + n < e.length) key[t] = e[t + n];
            aes = new sjcl.cipher.aes(key);
            i = aes.encrypt(i)
        }
    }
    return i
}

function prepare_key_pw(e) {
    return prepare_key(str_to_a32(e))
}

function base64urldecode(e) {
    e += "==".substr(2 - e.length * 3 & 3);
    if (typeof atob === "function") {
        e = e.replace(/\-/g, "+").replace(/_/g, "/").replace(/,/g, "");
        try {
            return atob(e)
        } catch (t) {
            return ""
        }
    }
    var n, r, i, s, o, u, a, f, l = 0,
        c = 0,
        h = "",
        p = [];
    if (!e) {
        return e
    }
    e += "";
    do {
        s = b64.indexOf(e.charAt(l++));
        o = b64.indexOf(e.charAt(l++));
        u = b64.indexOf(e.charAt(l++));
        a = b64.indexOf(e.charAt(l++));
        f = s << 18 | o << 12 | u << 6 | a;
        n = f >> 16 & 255;
        r = f >> 8 & 255;
        i = f & 255;
        if (u == 64) {
            p[c++] = String.fromCharCode(n)
        } else if (a == 64) {
            p[c++] = String.fromCharCode(n, r)
        } else {
            p[c++] = String.fromCharCode(n, r, i)
        }
    } while (l < e.length);
    h = p.join("");
    return h
}

function base64urlencode(e) {
    if (typeof btoa === "function") return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    var t, n, r, i, s, o, u, a, f = 0,
        l = 0,
        c = "",
        h = [];
    do {
        t = e.charCodeAt(f++);
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        a = t << 16 | n << 8 | r;
        i = a >> 18 & 63;
        s = a >> 12 & 63;
        o = a >> 6 & 63;
        u = a & 63;
        h[l++] = b64a[i] + b64a[s] + b64a[o] + b64a[u]
    } while (f < e.length);
    c = h.join("");
    var p = e.length % 3;
    return p ? c.slice(0, p - 3) : c
}

function a32_to_str(e) {
    var t = "";
    for (var n = 0; n < e.length * 4; n++) t = t + String.fromCharCode(e[n >> 2] >>> 24 - (n & 3) * 8 & 255);
    return t
}

function a32_to_base64(e) {
    return base64urlencode(a32_to_str(e))
}

function str_to_a32(e) {
    var t = Array(e.length + 3 >> 2);
    for (var n = 0; n < e.length; n++) t[n >> 2] |= e.charCodeAt(n) << 24 - (n & 3) * 8;
    return t
}

function base64_to_a32(e) {
    return str_to_a32(base64urldecode(e))
}

function ab_to_str(e) {
    var t = "",
        n;
    if (have_ab) {
        var t = "";
        var r = new Uint8Array(e);
        for (n = 0; n < r.length; n++) t = t + String.fromCharCode(r[n])
    } else {
        return e.buffer
    }
    return t
}

function ab_to_base64(e) {
    return base64urlencode(ab_to_str(e))
}

function ab_to_str_depad(e) {
    var t, n;
    if (have_ab) {
        t = "";
        var r = new Uint8Array(e);
        for (n = 0; n < r.length && r[n]; n++) t = t + String.fromCharCode(r[n])
    } else {
        t = ab_to_str(e);
        for (n = t.length; n-- && !t.charCodeAt(n););
        t = t.substr(0, n + 1)
    }
    return t
}

function str_to_ab(e) {
    var t, n;
    if (have_ab) {
        t = new ArrayBuffer(e.length + 15 & -16);
        var r = new Uint8Array(t);
        for (n = e.length; n--;) r[n] = e.charCodeAt(n);
        return t
    } else {
        e += Array(16 - (e.length - 1 & 15)).join(String.fromCharCode(0));
        t = {
            buffer: e
        }
    }
    return t
}

function base64_to_ab(e) {
    return str_to_ab(base64urldecode(e))
}

function encrypt_ab_ctr(e, t, n, r) {
    var i = [n[0], n[1], r / 68719476736 >>> 0, r / 16 >>> 0];
    var s = [i[0], i[1], i[0], i[1]];
    var o, u, a, f, l;
    if (have_ab) {
        var c, h, p, d;
        f = t.buffer.byteLength - 16;
        var l = new DataView(t.buffer);
        for (u = 0; u < f; u += 16) {
            c = l.getUint32(u, false);
            h = l.getUint32(u + 4, false);
            p = l.getUint32(u + 8, false);
            d = l.getUint32(u + 12, false);
            s[0] ^= c;
            s[1] ^= h;
            s[2] ^= p;
            s[3] ^= d;
            s = e.encrypt(s);
            o = e.encrypt(i);
            l.setUint32(u, c ^ o[0], false);
            l.setUint32(u + 4, h ^ o[1], false);
            l.setUint32(u + 8, p ^ o[2], false);
            l.setUint32(u + 12, d ^ o[3], false);
            if (!++i[3]) i[2]++
        }
        if (u < t.buffer.byteLength) {
            var v = new Uint8Array(t.buffer);
            var m = new ArrayBuffer(16);
            var g = new Uint8Array(m);
            g.set(v.subarray(u));
            l = new DataView(m);
            o = e.encrypt(i);
            c = l.getUint32(0, false);
            h = l.getUint32(4, false);
            p = l.getUint32(8, false);
            d = l.getUint32(12, false);
            s[0] ^= c;
            s[1] ^= h;
            s[2] ^= p;
            s[3] ^= d;
            s = e.encrypt(s);
            o = e.encrypt(i);
            l.setUint32(0, c ^ o[0], false);
            l.setUint32(4, h ^ o[1], false);
            l.setUint32(8, p ^ o[2], false);
            l.setUint32(12, d ^ o[3], false);
            v.set(g.subarray(0, a = v.length - u), u)
        }
    } else {
        var y = _str_to_a32(t.buffer);
        f = y.length - 3;
        for (u = 0; u < f; u += 4) {
            s[0] ^= y[u];
            s[1] ^= y[u + 1];
            s[2] ^= y[u + 2];
            s[3] ^= y[u + 3];
            s = e.encrypt(s);
            o = e.encrypt(i);
            y[u] ^= o[0];
            y[u + 1] ^= o[1];
            y[u + 2] ^= o[2];
            y[u + 3] ^= o[3];
            if (!++i[3]) i[2]++
        }
        if (u < y.length) {
            var l = [0, 0, 0, 0];
            for (a = u; a < y.length; a++) l[a - u] = y[a];
            s[0] ^= l[0];
            s[1] ^= l[1];
            s[2] ^= l[2];
            s[3] ^= l[3];
            s = e.encrypt(s);
            o = e.encrypt(i);
            l[0] ^= o[0];
            l[1] ^= o[1];
            l[2] ^= o[2];
            l[3] ^= o[3];
            for (a = u; a < y.length; a++) y[a] = l[a - u]
        }
        t.buffer = _a32_to_str(y, t.buffer.length)
    }
    return s
}

function _str_to_a32(e) {
    var t = Array(e.length + 3 >> 2);
    if (typeof e == "string") {
        for (var n = 0; n < e.length; n++) t[n >> 2] |= (e.charCodeAt(n) & 255) << 24 - (n & 3) * 8
    } else {
        for (var n = 0; n < e.length; n++) t[n >> 2] |= e[n] << (n & 3) * 8
    }
    return t
}

function _a32_to_str(e, t) {
    var n = "";
    for (var r = 0; r < t; r++) n = n + String.fromCharCode(e[r >> 2] >>> 24 - (r & 3) * 8 & 255);
    return n
}

function decrypt_ab_ctr(e, t, n, r) {
    var i = [n[0], n[1], r / 68719476736 >>> 0, r / 16 >>> 0];
    var s = [i[0], i[1], i[0], i[1]];
    var o, u, a, f, l;
    if (have_ab) {
        var c, h, p, d;
        u = t.buffer.byteLength - 16;
        var l = new DataView(t.buffer);
        for (a = 0; a < u; a += 16) {
            o = e.encrypt(i);
            c = l.getUint32(a, false) ^ o[0];
            h = l.getUint32(a + 4, false) ^ o[1];
            p = l.getUint32(a + 8, false) ^ o[2];
            d = l.getUint32(a + 12, false) ^ o[3];
            l.setUint32(a, c, false);
            l.setUint32(a + 4, h, false);
            l.setUint32(a + 8, p, false);
            l.setUint32(a + 12, d, false);
            s[0] ^= c;
            s[1] ^= h;
            s[2] ^= p;
            s[3] ^= d;
            s = e.encrypt(s);
            if (!++i[3]) i[2]++
        }
        if (a < t.buffer.byteLength) {
            var v = new Uint8Array(t.buffer);
            var m = new ArrayBuffer(16);
            var g = new Uint8Array(m);
            g.set(v.subarray(a));
            l = new DataView(m);
            o = e.encrypt(i);
            c = l.getUint32(0, false) ^ o[0];
            h = l.getUint32(4, false) ^ o[1];
            p = l.getUint32(8, false) ^ o[2];
            d = l.getUint32(12, false) ^ o[3];
            l.setUint32(0, c, false);
            l.setUint32(4, h, false);
            l.setUint32(8, p, false);
            l.setUint32(12, d, false);
            v.set(g.subarray(0, f = v.length - a), a);
            while (f < 16) g[f++] = 0;
            s[0] ^= l.getUint32(0, false);
            s[1] ^= l.getUint32(4, false);
            s[2] ^= l.getUint32(8, false);
            s[3] ^= l.getUint32(12, false);
            s = e.encrypt(s)
        }
    } else {
        var y = _str_to_a32(t.buffer);
        u = y.length - 3;
        for (a = 0; a < u; a += 4) {
            o = e.encrypt(i);
            s[0] ^= y[a] ^= o[0];
            s[1] ^= y[a + 1] ^= o[1];
            s[2] ^= y[a + 2] ^= o[2];
            s[3] ^= y[a + 3] ^= o[3];
            s = e.encrypt(s);
            if (!++i[3]) i[2]++
        }
        if (a < y.length) {
            var l = [0, 0, 0, 0];
            for (f = a; f < y.length; f++) l[f - a] = y[f];
            o = e.encrypt(i);
            l[0] ^= o[0];
            l[1] ^= o[1];
            l[2] ^= o[2];
            l[3] ^= o[3];
            var f = t.buffer.length & 15;
            var b = _str_to_a32(Array(f + 1).join(String.fromCharCode(255)) + Array(17 - f).join(String.fromCharCode(0)));
            s[0] ^= l[0] & b[0];
            s[1] ^= l[1] & b[1];
            s[2] ^= l[2] & b[2];
            s[3] ^= l[3] & b[3];
            s = e.encrypt(s);
            for (f = a; f < y.length; f++) y[f] = l[f - a]
        }
        t.buffer = _a32_to_str(y, t.buffer.length)
    }
    return s
}

function encrypt_ab_cbc(e, t) {
    if (have_ab) {
        var n = new DataView(t);
        var r = [0, 0, 0, 0],
            i = Array(4);
        var s;
        for (s = 0; s < t.byteLength; s += 16) {
            i[0] = n.getUint32(s, false) ^ r[0];
            i[1] = n.getUint32(s + 4, false) ^ r[1];
            i[2] = n.getUint32(s + 8, false) ^ r[2];
            i[3] = n.getUint32(s + 12, false) ^ r[3];
            r = e.encrypt(i);
            n.setUint32(s, r[0], false);
            n.setUint32(s + 4, r[1], false);
            n.setUint32(s + 8, r[2], false);
            n.setUint32(s + 12, r[3], false)
        }
    } else {
        var o = str_to_a32(t.buffer);
        var r = [0, 0, 0, 0],
            i = Array(4);
        var s;
        for (s = 0; s < o.length; s += 4) {
            i[0] = o[s] ^ r[0];
            i[1] = o[s + 1] ^ r[1];
            i[2] = o[s + 2] ^ r[2];
            i[3] = o[s + 3] ^ r[3];
            r = e.encrypt(i);
            o[s] = r[0];
            o[s + 1] = r[1];
            o[s + 2] = r[2];
            o[s + 3] = r[3]
        }
        t.buffer = a32_to_str(o)
    }
}

function decrypt_ab_cbc(e, t) {
    if (have_ab) {
        var n = new DataView(t);
        var r = [0, 0, 0, 0],
            i = Array(4),
            s = Array(4);
        var o;
        for (o = 0; o < t.byteLength; o += 16) {
            i[0] = n.getUint32(o, false);
            i[1] = n.getUint32(o + 4, false);
            i[2] = n.getUint32(o + 8, false);
            i[3] = n.getUint32(o + 12, false);
            s = i;
            i = e.decrypt(i);
            n.setUint32(o, i[0] ^ r[0], false);
            n.setUint32(o + 4, i[1] ^ r[1], false);
            n.setUint32(o + 8, i[2] ^ r[2], false);
            n.setUint32(o + 12, i[3] ^ r[3], false);
            r = s
        }
    } else {
        var u = str_to_a32(t.buffer);
        var r = [0, 0, 0, 0],
            i = Array(4),
            s = Array(4);
        var o;
        for (o = 0; o < u.length; o += 4) {
            i[0] = u[o];
            i[1] = u[o + 1];
            i[2] = u[o + 2];
            i[3] = u[o + 3];
            s = i;
            i = e.decrypt(i);
            u[o] = i[0] ^ r[0];
            u[o + 1] = i[1] ^ r[1];
            u[o + 2] = i[2] ^ r[2];
            u[o + 3] = i[3] ^ r[3];
            r = s
        }
        t.buffer = a32_to_str(u)
    }
}

function encrypt_key(e, t) {
    if (t.length == 4) return e.encrypt(t);
    var n = [];
    for (var r = 0; r < t.length; r += 4) n = n.concat(e.encrypt([t[r], t[r + 1], t[r + 2], t[r + 3]]));
    return n
}

function decrypt_key(e, t) {
    if (t.length == 4) return e.decrypt(t);
    var n = [];
    for (var r = 0; r < t.length; r += 4) n = n.concat(e.decrypt([t[r], t[r + 1], t[r + 2], t[r + 3]]));
    return n
}

function enc_attr(e, t) {
    var n;
    var r;
    var s;
    r = str_to_ab("MEGA" + to8(JSON.stringify(e)));
    if (!t.length)
        for (i = 4; i--;) t[i] = rand(4294967296);
    n = new sjcl.cipher.aes([t[0] ^ t[4], t[1] ^ t[5], t[2] ^ t[6], t[3] ^ t[7]]);
    encrypt_ab_cbc(n, r);
    return [r, t]
}

function dec_attr(e, t) {
    var n;
    var r;
    n = new sjcl.cipher.aes([t[0] ^ t[4], t[1] ^ t[5], t[2] ^ t[6], t[3] ^ t[7]]);
    decrypt_ab_cbc(n, e);
    r = ab_to_str_depad(e);
    if (r.substr(0, 6) != 'MEGA{"') return false;
    try {
        return JSON.parse(from8(r.substr(4)))
    } catch (i) {
        return {
            n: "MALFORMED_ATTRIBUTES"
        }
    }
}

function to8(e) {
    return unescape(encodeURIComponent(e))
}

function from8(e) {
    return decodeURIComponent(escape(e))
}

function getxhr() {
    return typeof XDomainRequest != "undefined" && typeof ArrayBuffer == "undefined" ? new XDomainRequest : new XMLHttpRequest
}

function api_req(e, t) {
    apiq.push([typeof e == "string" ? e : to8(JSON.stringify(e)), t, seqno++, 0]);
    if (apiq.length == 1) api_proc()
}

function api_proc() {
    if (apiqtimer) {
        clearTimeout(apiqtimer);
        apiqtimer = false
    }
    if (apixhr.readyState && apixhr.readyState != apixhr.DONE) {
        if (d) console.log("XHR not in DONE state: " + apixhr.readyState);
        apiqtimer = setTimeout(api_proc, 1e3);
        return
    }
    if (!apiq.length) return;
    apixhr = getxhr();
    apixhr.onerror = function(e) {
        if (d) console.log("API request error - retrying");
        api_result(-3)
    };
    apixhr.onload = function(e) {
        var t;
        if (this.responseText) this.response = this.responseText;
        if (d) console.log("API response: " + this.response);
        try {
            t = JSON.parse(from8(this.response))
        } catch (n) {
            console.log("Bad JSON data in response: " + this.response);
            t = -3
        }
        api_result(t)
    };
    if (d) console.log("Making API request: " + apiq[0][0]);
    apixhr.open("POST", apiq[0][0].substr(0, 4) == "https" ? apiq[0][0] : apipath + (apiq[0][0].substr(0, 1) == "[" ? "cs?id=" + apiq[0][2] : apiq[0][0]) + (u_sid ? "&sid=" + u_sid : ""), true);
    apixhr.send(apiq[0][0])
}

function api_result(e) {
    if (e === -3) {
        if (apiq[0][3]) apiq[0][3] *= 2;
        else apiq[0][3] = 125;
        if (d) console.log("Temporary error (" + e + ") - retrying after: " + apiq[0][3] / 1e3);
        apiqtimer = setTimeout(api_proc, apiq[0][3])
    } else {
        if (apiq[0][1]) apiq[0][1].callback(e, apiq[0][1]);
        apiq.shift();
        api_proc()
    }
}

function getsc() {
    ctx = {
        callback: function(e, t) {
            if (e.w) {
                waiturl = e.w;
                if (waitbackoff > 1e3) setTimeout(waitsc, waitbackoff);
                else waitsc()
            } else {
                if (e.sn) maxaction = e.sn;
                execsc(e.a)
            }
        }
    };
    api_req("sc?sn=" + maxaction + "&ssl=1", ctx)
}

function waitsc() {
    if (waitxhr.readyState != apixhr.DONE) waitxhr = undefined;
    if (!waitxhr) waitxhr = getxhr();
    waitxhr.onerror = function(e) {
        if (d) console.log("Error while waiting - retrying, backoff: " + waitbackoff);
        getsc()
    };
    waitxhr.onload = function(e) {
        var t = (new Date).getTime() - waitbegin;
        if (t < 1e3) waitbackoff += waitbackoff;
        else waitbackoff = 125;
        getsc()
    };
    waitbegin = (new Date).getTime();
    waitxhr.open("POST", waiturl, true);
    waitxhr.send()
}

function api_create_u_k() {
    u_k = Array(4);
    for (var e = 4; e--;) u_k[e] = rand(4294967296)
}

function api_createuser(e, t, n, r) {
    var i;
    var s = Array(4);
    var o, u;
    if (!e.passwordkey) {
        e.passwordkey = Array(4);
        for (i = 4; i--;) e.passwordkey[i] = rand(4294967296)
    }
    if (!u_k) api_create_u_k();
    for (i = 4; i--;) s[i] = rand(4294967296);
    if (d) console.log("api_createuser - masterkey: " + u_k + " passwordkey: " + e.passwordkey);
    o = {
        a: "up",
        k: a32_to_base64(encrypt_key(new sjcl.cipher.aes(e.passwordkey), u_k)),
        ts: base64urlencode(a32_to_str(s) + a32_to_str(encrypt_key(new sjcl.cipher.aes(u_k), s)))
    };
    if (t) {
        o.uh = r;
        o.ic = t;
        o.name = n
    }
    if (d) console.log("Storing key: " + o.k);
    api_req([o], e)
}

function api_checkconfirmcode(e, t) {
    res = api_req([{
        a: "uc",
        c: t
    }], e)
}

function api_getsid(e, t, n, r) {
    e.callback = api_getsid2;
    e.passwordkey = n;
    api_req([{
        a: "us",
        user: t,
        uh: r
    }], e)
}

function api_getsid2(e, t) {
    console.log((new Date).getTime());
    var n, r;
    var i = false;
    if (typeof e == "object") {
        var s = new sjcl.cipher.aes(t.passwordkey);
        if (typeof e[0].k == "string") {
            r = base64_to_a32(e[0].k);
            if (r.length == 4) {
                r = decrypt_key(s, r);
                s = new sjcl.cipher.aes(r);
                if (typeof e[0].tsid == "string") {
                    n = base64urldecode(e[0].tsid);
                    if (a32_to_str(encrypt_key(s, str_to_a32(n.substr(0, 16)))) == n.substr(-16)) i = [r, e[0].tsid]
                } else if (typeof e[0].csid == "string") {
                    var n = mpi2b(base64urldecode(e[0].csid));
                    var o = a32_to_str(decrypt_key(s, base64_to_a32(e[0].privk)));
                    var u = Array(4);
                    for (var a = 0; a < 4; a++) {
                        var f = (o.charCodeAt(0) * 256 + o.charCodeAt(1) + 7 >> 3) + 2;
                        u[a] = mpi2b(o.substr(0, f));
                        if (typeof u[a] == "number") break;
                        o = o.substr(f)
                    }
                    if (a == 4 && o.length < 16) {
                        i = [r, base64urlencode(b2s(RSAdecrypt(n, u[2], u[0], u[1], u[3])).substr(0, 43)), u]
                    }
                }
            }
        }
    }
    console.log((new Date).getTime());
    t.result(t, i)
}

function api_getuser(e) {
    api_req([{
        a: "ug"
    }], e)
}

function api_changepw(e, t, n, r, i, s) {
    var o, u;
    var a;
    var f = prepare_key_pw(i);
    if (r !== false) {
        var a = prepare_key_pw(r);
        if (a[0] != t[0] || a[1] != t[1] || a[2] != t[2] || a[3] != t[3]) return 1;
        if (a[0] == f[0] && a[1] == f[1] && a[2] == f[2] && a[3] == f[3]) return 2
    }
    var l = new sjcl.cipher.aes(f);
    var c = encrypt_key(l, n);
    o = {
        a: "up",
        k: a32_to_base64(c)
    };
    if (s.length) o.email = s;
    api_req([o], e)
}

function stringhash(e, t) {
    var n = str_to_a32(e);
    var r = [0, 0, 0, 0];
    for (i = 0; i < n.length; i++) r[i & 3] ^= n[i];
    for (i = 16384; i--;) r = t.encrypt(r);
    return a32_to_base64([r[0], r[2]])
}

function api_updateuser(e, t) {
    t.a = "up";
    res = api_req([t], e)
}

function api_cachepubkey(e, t) {
    e.user = t;
    e.callback = api_cachepubkey2;
    if (u_pubkeys[t]) e.cachepubkeycomplete(e, u_pubkeys[t]);
    else api_req([{
        a: "uk",
        u: t
    }], e)
}

function api_cachepubkey2(e, t) {
    if (typeof e == "object" && typeof e[0].pubk == "string") {
        var n = base64urldecode(e[0].pubk);
        var r = n.charCodeAt(0) * 256 + n.charCodeAt(1);
        var i = Array(3);
        var s;
        for (s = 0; s < 2; s++) {
            var o = (n.charCodeAt(0) * 256 + n.charCodeAt(1) + 7 >> 3) + 2;
            i[s] = mpi2b(n.substr(0, o));
            if (typeof i[s] == "number") break;
            n = n.substr(o)
        }
        if (s == 2 && n.length < 16) {
            i[2] = r;
            u_pubkeys[t.user] = i
        } else i = false
    }
    t.cachepubkeycomplete(t, i)
}

function encryptto(e, t) {
    var n, t;
    var r;
    if (r = u_pubkeys[e]) {
        for (n = (r[2] >> 3) - 1 - t.length; n-- > 0;) t = t + String.fromCharCode(rand(256));
        n = t.length * 8;
        t = String.fromCharCode(n >> 8) + String.fromCharCode(n & 255) + t;
        return b2mpi(RSAencrypt(mpi2b(t), r[1], r[0]))
    }
    return false
}

function api_setshare1(e, t, n, r) {
    var i, s, o, u, a, f;
    var l, c;
    var h = false;
    l = {
        a: "s",
        n: e,
        s: []
    };
    r.sharenodes = n;
    r.targets = t;
    for (i = t.length; i--;) {
        if (typeof t[i].r == "undefined") {
            l.s.push({
                u: t[i].u
            })
        } else {
            if (!l.ok) {
                if (u_sharekeys[e]) a = u_sharekeys[e];
                else {
                    a = Array(4);
                    for (s = 4; s--;) a[s] = rand(4294967296);
                    u_sharekeys[e] = a;
                    h = true
                }
                l.ok = a32_to_base64(encrypt_key(u_k_aes, a));
                l.ha = crypto_handleauth(e);
                f = a32_to_str(a)
            }
        }
    }
    u_sharekeys[e] = a;
    if (h) l.cr = crypto_makecr(n, [e], true);
    r.tried = -1;
    r.ssharekey = f;
    r.req = l;
    r.i = 0;
    r.node = e;
    r.targets = t;
    r.sharenodes = n;
    r.callback = function(t, n) {
        var r;
        var i;
        if (typeof t == "object" && typeof t[0] == "object") {
            if (typeof t[0].pubk == "string") u_pubkeys[n.targets[n.i].u] = crypto_decodepubkey(t[0].pubk);
            else if (t[0].ok) {
                u_sharekeys[e] = decrypt_key(u_k_aes, base64_to_a32(t[0].ok));
                return api_setshare(n.node, n.targets, n.sharenodes, n)
            }
        }
        if (n.i == n.targets.length) n.done(n);
        else if (!(r = u_pubkeys[n.targets[n.i].u]) && n.tried < n.i) {
            n.tried = n.i;
            api_req([{
                a: "uk",
                u: n.targets[n.i].u
            }], n)
        } else {
            o = false;
            if (r) {
                o = crypto_rsaencrypt(r, n.ssharekey)
            }
            if (o) n.req.s.push({
                u: n.targets[n.i].u,
                r: n.targets[n.i].r,
                k: base64urlencode(o)
            });
            else n.req.s.push({
                u: n.targets[n.i].u,
                r: n.targets[n.i].r
            });
            n.i++;
            n.callback(false, n)
        }
    };
    r.callback(false, r)
}

function api_setshare2(e, t) {
    if (e[0].ok) u_sharekeys[t] = decrypt_key(u_k_aes, base64_to_a32(e[0].ok))
}

function api_setrsa(e, t) {
    var n, r;
    for (n = "", r = 0; r < e.length; r++) n = n + b2mpi(e[r]);
    for (r = -n.length & 15; r--;) n = n + String.fromCharCode(rand(256));
    ctx = {
        callback: function(e, t) {
            if (d) console.log("RSA key put result=" + e);
            u_privk = t.privk;
            u_storage.privk = JSON.stringify(u_privk);
            u_type = 3;
            ui_keycomplete()
        },
        privk: e
    };
    api_req([{
        a: "up",
        privk: a32_to_base64(encrypt_key(u_k_aes, str_to_a32(n))),
        pubk: base64urlencode(b2mpi(t[0]) + b2mpi(t[1]))
    }], ctx)
}

function crypto_handleauth(e) {
    return a32_to_base64(encrypt_key(u_k_aes, str_to_a32(e + e)))
}

function crypto_decodepubkey(e) {
    var t;
    var n = base64urldecode(e);
    var r = n.charCodeAt(0) * 256 + n.charCodeAt(1);
    var i = Array(3);
    for (t = 0; t < 2; t++) {
        var s = (n.charCodeAt(0) * 256 + n.charCodeAt(1) + 7 >> 3) + 2;
        i[t] = mpi2b(n.substr(0, s));
        if (typeof i[t] == "number") break;
        n = n.substr(s)
    }
    if (t == 2 && n.length < 16) {
        i[2] = r;
        return i
    }
    return false
}

function crypto_rsaencrypt(e, t) {
    var n;
    for (n = (e[2] >> 3) - 1 - t.length; n-- > 0;) t = t + String.fromCharCode(rand(256));
    n = t.length * 8;
    t = String.fromCharCode(n >> 8) + String.fromCharCode(n & 255) + t;
    return b2mpi(RSAencrypt(mpi2b(t), e[1], e[0]))
}

function api_completeupload(e, t, n, r, i, s) {
    ctx2 = {
        callback: api_completeupload2,
        t: base64urlencode(e),
        path: n,
        n: r,
        k: i,
        ctx: s
    };
    api_completeupload2(ctx2, t)
}

function api_completeupload2(e, t) {
    var n;
    if (e.path && e.path != e.n && (n = e.path.indexOf("/")) > 0) {
        var r = e.path.substr(0, n);
        e.path = e.path.substr(n + 1);
        fm_requestfolderid(t, r, e)
    } else {
        a = {
            n: e.n
        };
        if (d) console.log(e.k);
        var i = enc_attr(a, e.k);
        if (d) console.log(i);
        var s = {
            a: "p",
            t: t,
            n: [{
                h: e.t,
                t: 0,
                a: ab_to_base64(i[0]),
                k: a32_to_base64(encrypt_key(u_k_aes, e.k))
            }]
        };
        if (t) {
            var o = fm_getsharenodes(t);
            if (o.length) {
                s.cr = crypto_makecr([e.k], o, false);
                s.cr[1][0] = e.t
            }
        }
        api_req([s], e.ctx)
    }
}

function crypto_makecr(e, t, n) {
    var r, i, s;
    var o = [t, [],
        []
    ];
    var u;
    if (n) o[1] = e;
    for (r = t.length; r--;) {
        if (u_sharekeys[t[r]]) {
            u = new sjcl.cipher.aes(u_sharekeys[t[r]]);
            for (i = e.length; i--;) {
                if (n ? nk = u_nodekeys[e[i]] : nk = e[i]) {
                    if (nk.length == 8 || nk.length == 4) o[2].push(r, i, a32_to_base64(encrypt_key(u, nk)))
                }
            }
        }
    }
    return o
}

function crypto_procsr(e) {
    var t = new Object;
    t.sr = e;
    t.i = -2;
    t.callback = function(e, t) {
        if (t.sr) {
            var n;
            if (typeof e == "object" && typeof e[0] == "object" && typeof e[0].pubk == "string") u_pubkeys[t.sr[t.i + 1]] = crypto_decodepubkey(e[0].pubk);
            while (t.i < t.sr.length - 2) {
                t.i += 2;
                if (t.sr[t.i + 1].length == 11 && !(n = u_pubkeys[t.sr[t.i + 1]])) {
                    api_req([{
                        a: "uk",
                        u: t.sr[t.i + 1]
                    }], t);
                    return
                }
            }
            var r = [];
            var i;
            var s;
            for (var o = 0; o < t.sr.length; o += 2) {
                i = t.sr[o];
                if (i.length == 8) {
                    if (u_sharekeys[i]) {
                        if (d) console.log("Encrypting sharekey " + i + " to user " + t.sr[o + 1]);
                        if (n = u_pubkeys[t.sr[o + 1]]) {
                            if (s = crypto_rsaencrypt(n, a32_to_str(u_sharekeys[i]))) r.push(i, t.sr[o + 1], base64urlencode(s))
                        }
                    }
                }
                if (r.length) api_req([{
                    a: "k",
                    sr: r
                }])
            }
        }
    };
    t.callback(false, t)
}

function crypto_processkey(e, t, n) {
    var r, i, s, o;
    if (!n.k) {
        if (!keycache[n.h]) return;
        n.k = keycache[n.h]
    }
    r = e;
    var u = n.k.indexOf(r + ":");
    if (u) {
        for (r in u_sharekeys) {
            u = n.k.indexOf(r + ":");
            if (u >= 0 && (!u || n.k.charAt(u - 1) == "/")) break;
            u = -1
        }
    }
    if (u >= 0) {
        delete keycache[n.h];
        var a = n.k.indexOf("/", u);
        if (a < 0) a = n.k.length;
        u += r.length + 1;
        i = n.k.substr(u, a - u);
        if (i.length < 46) {
            s = base64_to_a32(i);
            if (s.length == 4 || s.length == 8) {
                s = decrypt_key(r == e ? t : new sjcl.cipher.aes(u_sharekeys[r]), s)
            } else {
                if (d) console.log("Received invalid key length (" + s.length + "): " + n.h);
                return
            }
        } else {
            if (u_privk) {
                var f = mpi2b(base64urldecode(i));
                s = str_to_a32(b2s(RSAdecrypt(f, u_privk[2], u_privk[0], u_privk[1], u_privk[3])).substr(0, n.t ? 16 : 32))
            } else {
                if (d) console.log("Received RSA key, but have no public key published: " + n.h);
                return
            }
        }
        var l = base64_to_ab(n.a);
        var c = dec_attr(l, s);
        if (typeof c == "object") {
            if (typeof c.n == "string") {
                if (n.h) {
                    u_nodekeys[n.h] = s;
                    if (i.length >= 46) rsa2aes[n.h] = a32_to_str(encrypt_key(u_k_aes, s))
                }
                n.key = s;
                n.name = c.n
            }
        }
    } else {
        if (d) console.log("Received no suitable key: " + n.h);
        if (!missingkeys[n.h]) {
            newmissingkeys = true;
            missingkeys[n.h] = true
        }
        keycache[n.h] = n.k
    }
}

function crypto_sendrsa2aes() {
    var e;
    var t = [];
    for (e in rsa2aes) t.push(e, base64urlencode(rsa2aes[e]));
    if (t.length) api_req([{
        a: "k",
        nk: t
    }]);
    rsa2aes = new Object
}

function crypto_reqmissingkeys() {
    if (!newmissingkeys) {
        if (d) console.log("No new missing keys.");
        return
    }
    var e, t;
    var n, r, i, s, o;
    var u = [
        [],
        [],
        []
    ];
    i = new Object;
    s = new Object;
    for (n in missingkeys) {
        o = fm_getsharenodes(n);
        for (t = o.length; t--;) {
            r = o[t];
            if (typeof s[r] == "undefined") {
                s[r] = u[0].length;
                u[0].push(r)
            }
            if (typeof i[n] == "undefined") {
                i[n] = u[1].length;
                u[1].push(n)
            }
            u[2].push(s[r], i[n])
        }
    }
    if (!u[1].length) {
        if (d) console.log("No missing keys");
        return
    }
    if (u[0].length) {
        var a = new Object;
        a.callback = function(e, t) {
            if (d) console.log("Processing crypto response");
            if (typeof e == "object" && typeof e[0] == "object") crypto_proccr(e[0])
        };
        res = api_req([{
            a: "k",
            cr: u
        }], a)
    } else if (d) console.log("Keys " + u[1] + " missing, but no related shares found.")
}

function crypto_proccr(e) {
    var t;
    for (t = 0; t < e[2].length; t += 3) fm_updatekey(e[1][e[2][t + 1]], e[0][e[2][t]] + ":" + e[2][t + 2]);
    fm_commitkeyupdate()
}

function crypto_procmcr(e) {
    var t;
    var n = new Object,
        r = new Object;
    var i, s;
    var o = new Object;
    var u = [
        [],
        [],
        []
    ];
    for (t = 0; t < e[2].length; t += 2) {
        i = e[0][e[2][t]];
        if (u_sharekeys[i]) {
            s = e[1][e[2][t + 1]];
            if (u_nodekeys[s]) {
                if (typeof n[i] == "undefined") {
                    o[i] = new sjcl.cipher.aes(u_sharekeys[i]);
                    n[i] = u[0].length;
                    u[0].push(i)
                }
                if (typeof r[s] == "undefined") {
                    r[s] = u[1].length;
                    u[1].push(s)
                }
                u[2].push(n[i], r[s], a32_to_base64(encrypt_key(o[i], u_nodekeys[s])))
            }
        }
    }
    if (u[0].length) api_req([{
        a: "k",
        cr: u
    }])
}

function crypto_process_sharekey(e, t) {
    if (t.length > 22) {
        t = mpi2b(base64urldecode(t));
        var n = str_to_a32(b2s(RSAdecrypt(t, u_privk[2], u_privk[0], u_privk[1], u_privk[3])).substr(0, 16));
        rsasharekeys[e] = true;
        return n
    } else return decrypt_key(u_k_aes, base64_to_a32(t))
}

function crypto_share_rsa2aes() {
    var e = [];
    for (n in rsasharekeys) {
        if (u_sharekeys[n]) {
            e.push(n, u_handle, a32_to_base64(encrypt_key(u_k_aes, u_sharekeys[n])))
        }
    }
    if (e.length) {
        api_req([{
            a: "k",
            sr: e
        }]);
        rsasharekeys = new Object
    }
}
window.URL = window.URL || window.webkitURL;
var have_ab = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
var use_workers = have_ab && typeof Worker != "undefined";
if (navigator.appVersion.indexOf("Safari") > 0 && navigator.appVersion.indexOf("Version/5") > 0) {
    use_workers = false;
    have_ab = false
}
var ssl_off = ["Firefox/14", "Firefox/15", "Firefox/17", "Safari", "Firefox/16"];
var ssl_opt = ["Chrome/"];
var use_ssl = ssl_needed();
if (!use_ssl && localStorage.use_ssl) use_ssl = 1;
else use_ssl++;
var chromehack = navigator.appVersion.indexOf("Chrome/");
chromehack = chromehack >= 0 && parseInt(navigator.appVersion.substr(chromehack + 7)) > 21;
var EINTERNAL = -1;
var EARGS = -2;
var EAGAIN = -3;
var ERATELIMIT = -4;
var EFAILED = -5;
var ETOOMANY = -6;
var ERANGE = -7;
var EEXPIRED = -8;
var ENOENT = -9;
var ECIRCULAR = -10;
var EACCESS = -11;
var EEXIST = -12;
var EINCOMPLETE = -13;
var EKEY = -14;
var ESID = -15;
var EBLOCKED = -16;
var EOVERQUOTA = -17;
var ETEMPUNAVAIL = -18;
var ETOOMANYCONNECTIONS = -19;
var seqno = rand(4294967296);
var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
var b64a = b64.split("");
var apiq = new Array;
var apiqtimer = false;
var apixhr = getxhr();
var waiturl;
var waitxhr = getxhr();
var waitbackoff = 125;
var waitbegin;
var u_pubkeys = new Object;
var u_sharekeys = {};
var u_nodekeys = {};
var keycache = new Object;
var rsa2aes = new Object;
var missingkeys = new Object;
var newmissingkeys = false;
var rsasharekeys = new Object;

function u_login(e, t, n, r, i) {
    e.result = u_login2;
    e.permanent = i;
    api_getsid(e, t, prepare_key_pw(n), r)
}

function u_login2(e, t) {
    if (t !== false) {
        localStorage.wasloggedin = true;
        u_logout();
        u_storage = e.permanent ? localStorage : sessionStorage;
        u_storage.k = JSON.stringify(t[0]);
        u_storage.sid = t[1];
        if (t[2]) u_storage.privk = JSON.stringify(t[2]);
        u_checklogin(e, false)
    } else e.checkloginresult(e, false)
}

function u_checklogin(e, t, n, r, i) {
    if (!(u_sid = u_storage.sid)) {
        if (!t) e.checkloginresult(e, false);
        else {
            u_logout();
            api_create_u_k();
            e.createanonuserresult = u_checklogin2;
            createanonuser(e, n, r, i)
        }
    } else u_checklogin3(e)
}

function u_checklogin2(e, t) {
    if (t === false) e.checkloginresult(e, false);
    else {
        e.result = u_checklogin2a;
        api_getsid(e, t[0], e.passwordkey)
    }
}

function u_checklogin2a(e, t) {
    if (t === false) e.checkloginresult(e, false);
    else {
        u_k = t[0];
        u_sid = t[1];
        u_storage.k = JSON.stringify(u_k);
        u_storage.sid = u_sid;
        u_checklogin3(e)
    }
}

function u_checklogin3(e) {
    e.callback = u_checklogin3a;
    api_getuser(e)
}

function u_checklogin3a(e, t) {
    var n = false;
    if (typeof e != "object" || typeof e[0] != "object") {
        u_logout();
        n = e
    } else {
        u_attr = e[0];
        u_storage.attr = JSON.stringify(u_attr);
        u_storage.handle = u_handle = u_attr.u;
        try {
            u_k = JSON.parse(u_storage.k);
            if (u_attr.privk) u_privk = JSON.parse(u_storage.privk)
        } catch (r) {}
        u_k_aes = new sjcl.cipher.aes(u_k);
        if (!u_attr.email) n = 0;
        else if (!u_attr.c) n = 1;
        else if (!u_attr.privk) n = 2;
        else n = 3
    }
    t.checkloginresult(t, n)
}

function u_logout() {
    var e = [localStorage, sessionStorage];
    for (var t = 2; t--;) {
        e[t].removeItem("sid");
        e[t].removeItem("k");
        e[t].removeItem("p");
        e[t].removeItem("handle");
        e[t].removeItem("attr");
        e[t].removeItem("privk")
    }
    u_sid = u_handle = u_k = u_attr = u_privk = u_k_aes = undefined
}

function u_wasloggedin() {
    return localStorage.wasloggedin
}

function createanonuser(e, t, n, r, i) {
    e.callback = createanonuser2;
    e.passwordkey = t;
    api_createuser(e, n, r, i)
}

function createanonuser2(e, t) {
    if (e === false || !(localStorage.p = t.passwordkey) || !(localStorage.handle = e[0])) e = false;
    t.createanonuserresult(t, e)
}

function setpwreq(e, t) {
    var n = new sjcl.cipher.aes(prepare_key_pw(e));
    api_req([{
        a: "upkm",
        k: a32_to_base64(encrypt_key(n, u_k)),
        uh: stringhash(u_attr["email"].toLowerCase(), n)
    }], t)
}

function setpwset(e, t) {
    api_req([{
        a: "up",
        uk: e
    }], t)
}

function changepw(e, t, n) {
    var r = new sjcl.cipher.aes(prepare_key_pw(t));
    api_req([{
        a: "up",
        currk: a32_to_base64(encrypt_key(new sjcl.cipher.aes(prepare_key_pw(e)), u_k)),
        k: a32_to_base64(encrypt_key(r, u_k)),
        uh: stringhash(u_attr["email"].toLowerCase(), r)
    }], n)
}

function sendsignuplink(e, t, n, r) {
    var i = new sjcl.cipher.aes(prepare_key_pw(n));
    var s = {
        a: "uc",
        c: base64urlencode(a32_to_str(encrypt_key(i, u_k)) + a32_to_str(encrypt_key(i, [rand(4294967296), 0, 0, rand(4294967296)]))),
        n: base64urlencode(to8(e)),
        m: base64urlencode(t)
    };
    api_req([s], r)
}

function verifysignupcode(e, t) {
    var n = {
        a: "ud",
        c: e
    };
    t.callback = verifysignupcode2;
    api_req([n], t)
}

function verifysignupcode2(e, t) {
    if (typeof e == "object" && typeof e[0] == "object") {
        u_signupenck = base64_to_a32(e[0][3]);
        u_signuppwcheck = base64_to_a32(e[0][4]);
        t.signupcodeok(base64urldecode(e[0][0]), base64urldecode(e[0][1]))
    } else t.signupcodebad(e[0])
}

function checksignuppw(e) {
    var t = new sjcl.cipher.aes(prepare_key_pw(e));
    var n = decrypt_key(t, u_signuppwcheck);
    if (n[1] || n[2]) return false;
    u_k = decrypt_key(t, u_signupenck);
    return true
}

function checkquota(e) {
    var t = {
        a: "uq",
        xfer: 1
    };
    api_req([t], e)
}

function processquota1(e, t) {
    if (typeof e == "object" && typeof e[0] == "object") {
        if (e[0].tah) {
            var n;
            var r = 0;
            var i = 0;
            var s = -1;
            for (n = 0; n < e[0].tah.length; n++) {
                r += e[0].tah[n];
                if (s < 0) {
                    i += e[0].tah[n];
                    if (i > 1048576) {
                        s = n
                    }
                }
            }
            t.processquotaresult(t, [r, i, (6 - s) * 3600 - e[0].bt, e[0].tar, e[0].tal])
        } else t.processquotaresult(t, false)
    }
}
if (typeof localStorage == "undefined") {
    console.log("Web storage NOT supported")
}
var u_storage;
if (localStorage.sid) u_storage = localStorage;
else u_storage = sessionStorage;
var u_handle;
var u_sid;
var u_k;
var u_k_aes;
var u_p;
var u_attr;
var u_privk;
var u_signupenck;
var u_signuppwcheck

function startupload() {
    if (ul_uploading) return;
    for (;;) {
        if (ul_queue_num >= ul_queue.length) {
            if (d) console.log("No further uploads, clearing ul_queue");
            ul_queue = [];
            ul_queue_num = 0;
            return
        }
        if (ul_queue[ul_queue_num]) {
            if (!ul_skipIdentical || !file_exists(ul_queue[ul_queue_num].target, ul_queue[ul_queue_num].path || ul_queue[ul_queue_num].name, ul_queue[ul_queue_num].size)) break;
            onUploadSuccess(ul_queue_num)
        }
        ul_queue_num++
    }
    ul_uploading = true;
    if (ul_queue[ul_queue_num].flashid) {
        ul_maxSlots = 1;
        ul_flashreaderactive = false
    } else ul_reader = new FileReader;
    if (d) console.log(ul_queue_num + " - " + ul_queue.length);
    ul_queue[ul_queue_num].retries = ul_queue[ul_queue_num].retries + 1 || 0;
    if (ul_queue[ul_queue_num].posturl) initupload3();
    else {
        var e = {
            callback: initupload2,
            reqindex: []
        };
        var t = [];
        var n = 128 * 1048576;
        for (var r = ul_queue_num; r < ul_queue.length && r < ul_queue_num + 8 && n > 0; r++) {
            if (!ul_queue[ul_queue_num].posturl) {
                e.reqindex.push(r);
                t.push({
                    a: "u",
                    ssl: use_ssl,
                    ms: ul_maxSpeed,
                    s: ul_queue[r].size,
                    r: ul_queue[r].retries,
                    e: ul_lastreason
                });
                n -= ul_queue[r].size
            }
        }
        api_req(t, e)
    }
}

function initupload2(e, t) {
    var n, r;
    if (typeof e != "object") {
        return
    }
    for (var i = 0; i < e.length; i++)
        if (typeof e[i] == "object") ul_queue[t.reqindex[i]].posturl = e[i].p;
    initupload3()
}

function initupload3() {
    ul_uploadurl = ul_queue[ul_queue_num].posturl;
    if (!ul_uploadurl) {
        return
    }
    ul_key = Array(6);
    for (i = 6; i--;) ul_key[i] = rand(4294967296);
    ul_keyNonce = JSON.stringify(ul_key);
    ul_macs = [];
    totalbytessent = 0;
    ul_readq = {};
    if (ul_queue[ul_queue_num].size) {
        p = 0;
        for (i = 1; i <= 8 && p < ul_queue[ul_queue_num].size - i * 131072; i++) {
            ul_readq[p] = i * 131072;
            pp = p;
            p += ul_readq[p]
        }
        while (p < ul_queue[ul_queue_num].size) {
            ul_readq[p] = 1048576;
            pp = p;
            p += ul_readq[p]
        }
        if (!(ul_readq[pp] = ul_queue[ul_queue_num].size - pp) && ul_queue[ul_queue_num].size) delete ul_readq[pp]
    } else ul_readq[0] = 0;
    ul_plainq = {};
    ul_intransit = 0;
    ul_inflight = {};
    ul_sendchunks = {};
    ul_lastreason = 0;
    ul_errors = 0;
    ul_progress = new Array(ul_maxSlots);
    if (use_workers) {
        ul_workers = new Array(ul_max_workers);
        ul_workerbusy = new Array(ul_max_workers);
        for (var e = ul_max_workers; e--;) ul_workerbusy[e] = 0
    } else ul_aes = new sjcl.cipher.aes([ul_key[0], ul_key[1], ul_key[2], ul_key[3]]);
    ul_xhrs = new Array(ul_maxSlots);
    ul_xhrbusy = new Array(ul_maxSlots);
    if (chromehack) ul_sendbuf = new Array(ul_maxSlots);
    for (var t = ul_maxSlots; t--;) {
        ul_xhrbusy[t] = 0;
        ul_progress[t] = 0;
        if (chromehack) ul_sendbuf[t] = new ArrayBuffer(1048576)
    }
    onUploadStart(ul_queue_num);
    ul_dispatch_chain()
}

function ul_settimeout(e, t) {
    clearTimeout(ul_timeout);
    if (e >= 0) ul_timeout = setTimeout(t, e)
}

function ul_dispatch_chain() {
    ul_dispatch_read();
    ul_dispatch_encryption();
    ul_dispatch_send()
}

function ul_dispatch_encryption() {
    var e;
    if (use_workers) {
        for (e = ul_max_workers; e--;)
            if (!ul_workerbusy[e]) break;
        if (e >= 0) {
            for (var t in ul_plainq) {
                ul_workerbusy[e] = 1;
                if (typeof ul_workers[e] == "object") {
                    delete ul_workers[e].onmessage;
                    ul_workers[e].terminate();
                    ul_workers[e] = undefined
                }
                ul_workers[e] = new Worker("encrypter.js");
                ul_workers[e].postMessage = ul_workers[e].webkitPostMessage || ul_workers[e].postMessage;
                ul_workers[e].id = e;
                ul_workers[e].instance = ul_instance;
                ul_workers[e].onmessage = function(e) {
                    if (this.instance == ul_instance) {
                        if (typeof e.data == "string") {
                            if (e.data[0] == "[") ul_macs[this.pos] = JSON.parse(e.data);
                            else if (d) console.log("WORKER" + this.id + ": '" + e.data + "'")
                        } else {
                            if (d) console.log("WORKER" + this.id + ": Received " + e.data.byteLength + " encrypted bytes at " + this.pos);
                            ul_sendchunks[this.pos] = new Uint8Array(e.data);
                            ul_dispatch_chain();
                            ul_workerbusy[this.id] = 0
                        }
                    }
                };
                ul_workers[e].postMessage(ul_keyNonce);
                if (d) console.log("WORKER: Queueing " + ul_plainq[t].length + " bytes at " + t);
                ul_workers[e].pos = parseInt(t);
                ul_workers[e].postMessage(parseInt(t) / 16);
                ul_workers[e].postMessage(ul_plainq[t]);
                delete ul_plainq[t];
                break
            }
        }
    } else {
        for (var t in ul_plainq) {
            ul_macs[t] = encrypt_ab_ctr(ul_aes, ul_plainq[t], [ul_key[4], ul_key[5]], t);
            ul_sendchunks[t] = ul_plainq[t];
            delete ul_plainq[t]
        }
    }
}

function ul_dispatch_send(e) {
    var e;
    for (e = ul_maxSlots; e--;) {
        if (!ul_xhrbusy[e]) {
            var t = -1,
                n;
            for (n in ul_sendchunks) {
                if (!ul_inflight[n]) {
                    n = parseInt(n);
                    if (t == -1) t = n;
                    else if (n < t) t = n
                }
            }
            if (t == -1) break;
            if (ul_uploadurl == "" && t >= 0) break;
            ul_inflight[t] = 1;
            ul_xhrbusy[e] = 1;
            if (!ul_method) {
                ul_xhrs[e] = new XMLHttpRequest;
                ul_xhrs[e].slot = e;
                ul_xhrs[e].onreadystatechange = function(e) {
                    ul_settimeout(6e4, ul_failed);
                    if (this.readyState == this.DONE && this.instance == ul_instance) {
                        if (this.status == 200) {
                            ul_chunkcomplete(this.slot, this.pos, this.response)
                        } else {
                            if (d) console.log("HTTP POST failed with " + this.status + ", error count=" + ul_errors);
                            ul_inflight[this.pos] = 0;
                            ul_xhrbusy[this.upload.slot] = 0;
                            ul_progress[this.upload.slot] = 0;
                            ul_updateprogress();
                            if (++ul_errors > 16) ul_failed();
                            else ul_settimeout(ul_errors * 1e3, ul_dispatch_chain)
                        }
                    }
                };
                ul_xhrs[e].upload.onprogress = function(e) {
                    ul_settimeout(6e4, ul_failed);
                    if (this.instance == ul_instance) {
                        if (e.lengthComputable && ul_xhrs[this.slot].pos != 1) {
                            ul_progress[this.slot] = e.loaded;
                            ul_updateprogress()
                        }
                    }
                };
                ul_xhrs[e].pos = t;
                ul_xhrs[e].instance = ul_instance;
                ul_xhrs[e].upload.slot = e;
                ul_xhrs[e].upload.instance = ul_instance;
                ul_xhrs[e].open("POST", ul_uploadurl + "/" + t);
                if (chromehack) {
                    data8 = new Uint8Array(ul_sendchunks[t].buffer);
                    send8 = new Uint8Array(ul_sendbuf[e], 0, data8.length);
                    send8.set(data8);
                    ul_xhrs[e].send(send8)
                } else {
                    ul_xhrs[e].send(ul_sendchunks[t].buffer)
                }
            } else {
                ul_flashpos[e] = t;
                flash_uploadchunk(e, base64urlencode(ul_sendchunks[t].buffer), ul_uploadurl + "/" + t)
            }
            break
        }
    }
}

function ul_failed() {
    onUploadError(ul_queue_num, "Upload failed - retrying");
    ul_cancel();
    ul_settimeout(1e3 + 1e3 * ul_queue[ul_queue_num].retries, startupload)
}

function ul_updateprogress() {
    if (ul_queue[ul_queue_num].size) {
        var e = totalbytessent;
        for (var t = ul_maxSlots; t--;) e += ul_progress[t];
        if (e > ul_queue[ul_queue_num].size) e = ul_queue[ul_queue_num].size;
        onUploadProgress(ul_queue_num, e, ul_queue[ul_queue_num].size)
    }
}

function ul_completepending(e) {
    if (ul_completion.length) {
        var t = ul_completion.shift();
        var n = {
            target: e,
            ul_queue_num: t[5],
            callback: ul_completepending2
        };
        api_completeupload(t[0], t[1], t[2], t[3], t[4], n)
    } else ul_completing = false
}

function ul_completepending2(e, t) {
    onUploadSuccess(t.ul_queue_num);
    ul_completepending(t.target)
}

function file_exists(e, t, n) {
    var r = t.split("/");
    var i;
    return file_exists2(e, r, n)
}

function file_exists2(e, t, r) {
    if (!t.length) return false;
    var i, s = t.shift();
    if (!s.length) return file_exists2(e, t, r);
    n = fm_matchname(e, s);
    if (!t.length) {
        for (i = n.length; i--;) {
            if (n[i].size == r) return true
        }
    } else
        for (i = n.length; i--;)
            if (n[i].size < 0) return file_exists2(n[i].id, t, r); return false
}

function ul_chunkcomplete(e, t, n) {
    ul_progress[e] = 0;
    delete ul_inflight[t];
    if (n.length > 27) n = base64urldecode(n);
    if (!n.length || n.length == 27) {
        if (t >= 0) ul_intransit--;
        if (ul_sendchunks[t]) {
            totalbytessent += ul_method ? ul_sendchunks[t].buffer.length : ul_sendchunks[t].length;
            ul_updateprogress();
            delete ul_sendchunks[t]
        }
        if (n.length) {
            var r = [];
            for (p in ul_macs) r.push(p);
            r.sort(function(e, t) {
                return parseInt(e) - parseInt(t)
            });
            for (var i = 0; i < r.length; i++) r[i] = ul_macs[r[i]];
            var s = condenseMacs(r, ul_key);
            ul_settimeout(-1);
            var o = {
                ul_queue_num: ul_queue_num,
                callback: ul_completepending2
            };
            var u = [ul_key[0] ^ ul_key[4], ul_key[1] ^ ul_key[5], ul_key[2] ^ s[0] ^ s[1], ul_key[3] ^ s[2] ^ s[3], ul_key[4], ul_key[5], s[0] ^ s[1], s[2] ^ s[3]];
            if (u_k_aes && !ul_completing) {
                ul_completing = true;
                api_completeupload(n, ul_queue[ul_queue_num].target, ul_queue[ul_queue_num].path, ul_queue[ul_queue_num].name, u, o)
            } else ul_completion.push([n, ul_queue[ul_queue_num].target, ul_queue[ul_queue_num].path, ul_queue[ul_queue_num].name, u, ul_queue_num]);
            ul_queue_num++;
            ul_uploading = false;
            return startupload()
        } else ul_settimeout(ul_method ? 2e5 : 6e4, ul_failed)
    } else return ul_failed();
    ul_xhrbusy[e] = 0;
    ul_dispatch_chain()
}

function ul_flash_uploaddone(e, t) {
    ul_chunkcomplete(e, ul_flashpos[e], t)
}

function ul_dispatch_read() {
    var e;
    var t;
    if (ul_intransit > 8) return;
    if (!ul_method) {
        if (ul_reader.readyState != ul_reader.LOADING) {
            for (t in ul_readq) {
                t = parseInt(t);
                var n;
                if ((ul = ul_queue[ul_queue_num].slice) || ul_queue[ul_queue_num].mozSlice) {
                    if (ul_queue[ul_queue_num].mozSlice) n = ul_queue[ul_queue_num].mozSlice(t, t + ul_readq[t]);
                    else n = ul_queue[ul_queue_num].slice(t, t + ul_readq[t]);
                    xhr_supports_typed_arrays = true
                } else n = ul_queue[ul_queue_num].webkitSlice(t, t + ul_readq[t]);
                ul_reader.pos = t;
                ul_reader.readAsArrayBuffer(n);
                ul_reader.instance = ul_instance;
                ul_reader.onloadend = function(e) {
                    if (this.instance == ul_instance) {
                        if (e.target.readyState == FileReader.DONE) {
                            delete ul_readq[this.pos];
                            ul_plainq[this.pos] = new Uint8Array(e.target.result);
                            ul_intransit++;
                            ul_dispatch_chain()
                        }
                    }
                };
                ul_reader.onerror = function(e) {
                    if (this.instance == ul_instance) {
                        if (d) console.log("Read error: " + e.getMessage())
                    }
                };
                break
            }
        }
    } else {
        if (!ul_flashreaderactive) {
            ul_flashreaderactive = true;
            for (t in ul_readq) {
                t = parseInt(t);
                flash_requestchunk(ul_queue[ul_queue_num].flashid, ul_readq[t], t);
                break
            }
        }
    }
}

function ul_flash_chunk(e, t, n) {
    if (ul_flashreaderactive) {
        ul_flashreaderactive = false;
        if (e != ul_queue[ul_queue_num].flashid) {
            if (d) console.log("INVALID ID on Flash response")
        } else {
            ul_plainq[n] = {
                buffer: base64urldecode(t)
            };
            if (ul_plainq[n].buffer.length != ul_readq[n]) {
                if (d) console.log("SHORT READ in flashreader: " + ul_plainq[n].buffer.length + " != " + ul_readq[n] + " at " + n);
                delete ul_plainq[n]
            } else {
                delete ul_readq[n];
                ul_intransit++;
                ul_dispatch_chain()
            }
        }
    }
}

function ul_cancel() {
    if (ul_xhrs) {
        for (var e = ul_maxSlots; e--;)
            if (ul_xhrs[e]) {
                ul_xhrs[e].abort();
                ul_xhrs[e] = null
            }
    }
    ul_instance++;
    ul_settimeout(-1);
    ul_workers = ul_plainq = ul_reader = ul_xhrs = ul_workers = ul_sendchunks = ul_inflight = ul_readq = undefined;
    ul_uploading = ul_flashreaderactive = false;
    delete ul_queue[ul_queue_num].posturl;
    api_req([{
        a: "u",
        t: ul_uploadurl
    }])
}
var ul_queue = [];
var ul_queue_num = 0;
var totalbytessent;
var use_ssl = 1;
if (localStorage.use_ssl) use_ssl = localStorage.use_ssl;
var ul_reader;
var ul_method;
if (!window.FileReader) ul_method = 1;
var ul_maxSlots = 4;
if (localStorage.ul_maxSlots) ul_maxSlots = localStorage.ul_maxSlots;
var ul_skipIdentical = 0;
if (localStorage.ul_skipIdentical) ul_skipIdentical = localStorage.ul_skipIdentical;
var ul_maxSpeed = -1;
if (localStorage.ul_maxSpeed) ul_maxSpeed = localStorage.ul_maxSpeed;
if (ul_method === 1) ul_maxSpeed = 0;
var ul_xhrs;
var ul_xhrbusy;
var ul_sendbuf;
var ul_progress;
var ul_errors;
var ul_intransit;
var ul_max_workers = 4;
var ul_workers;
var ul_workerbusy;
var ul_uploadurl;
var ul_keyNonce;
var ul_key;
var ul_macs;
var ul_plainq;
var ul_sendchunks;
var ul_inflight;
var ul_readq;
var ul_lastreason = 0;
var ul_instance = 0;
var ul_uploading;
var ul_aes;
var ul_flashreaderactive = false;
var ul_flashpos = Array(ul_maxSlots);
var ul_timeout;
var ul_completion = [];
var ul_completing;
var xhr_supports_typed_arrays = false;

function dl_dispatch_chain() {
    if (downloading) {
        dl_dispatch_read();
        dl_dispatch_decryption();
        dl_dispatch_write()
    }
}

function dl_dispatch_decryption() {
    if (use_workers) {
        for (var e = dl_maxWorkers; e--;) {
            if (!dl_workerbusy[e]) break
        }
        if (e >= 0) {
            for (var t in dl_cipherq) {
                dl_workerbusy[e] = 1;
                if (typeof dl_workers[e] == "object") {
                    dl_workers[e].terminate();
                    dl_workers[e] = null;
                    delete dl_workers[e]
                }
                dl_workers[e] = new Worker("decrypter.js");
                dl_workers[e].postMessage = dl_workers[e].webkitPostMessage || dl_workers[e].postMessage;
                dl_workers[e].id = e;
                dl_workers[e].instance = dl_instance;
                dl_workers[e].onmessage = function(e) {
                    if (this.instance == dl_instance) {
                        if (typeof e.data == "string") {
                            if (e.data[0] == "[") dl_macs[this.dl_pos] = JSON.parse(e.data);
                            else if (d) console.log("WORKER" + this.id + ": '" + e.data + "'")
                        } else {
                            var t = new Uint8Array(e.data);
                            if (d) console.log("WORKER" + this.id + ": Received " + t.length + " decrypted bytes at " + this.dl_pos);
                            dl_plainq[this.dl_pos] = t;
                            dl_plainqlen++;
                            dl_workerbusy[this.id] = 0;
                            dl_dispatch_chain()
                        }
                    }
                };
                dl_workers[e].postMessage(dl_keyNonce);
                if (d) console.log("WORKER" + e + ": Queueing " + dl_cipherq[t].length + " bytes at " + t);
                dl_workers[e].dl_pos = parseInt(t);
                dl_workers[e].postMessage(dl_workers[e].dl_pos / 16);
                dl_workers[e].postMessage(dl_cipherq[t]);
                delete dl_cipherq[t];
                dl_cipherqlen--;
                break
            }
        } else if (d) console.log("All worker threads are busy now.")
    } else {
        for (var t in dl_cipherq) {
            if (d) console.log("Decrypting pending block at " + t + " without workers...");
            dl_macs[t] = decrypt_ab_ctr(dl_aes, dl_cipherq[t], [dl_key[4], dl_key[5]], t);
            dl_plainq[t] = dl_cipherq[t];
            delete dl_cipherq[t];
            dl_cipherqlen--;
            dl_plainqlen++;
            break
        }
    }
}

function dl_resume(e) {
    if (downloading) dl_dispatch_chain();
    else {
        if (e)
            for (var t = dl_queue.length; t--;)
                if (e == dl_queue[t].id) dl_queue_num = t;
        startdownload()
    }
}

function dl_dispatch_write() {
    if (dl_filesize == -1) return;
    if (typeof dl_plainq[dl_write_position] != "object") {
        if (d) console.log("Plaintext at " + dl_write_position + " still missing: " + typeof dl_plainq[dl_write_position]);
        dl_checklostchunk();
        return
    }
    if (dl_method) {
        var e = dl_write_position;
        dl_writedata(dl_plainq[e]);
        dl_write_position += have_ab ? dl_plainq[e].length : dl_plainq[e].buffer.length;
        delete dl_plainq[e];
        dl_plainqlen--;
        dl_dispatch_chain()
    } else {
        if (document.fileWriter.readyState == document.fileWriter.WRITING) {
            if (d) console.log("fileWriter is busy now. Please try again later.");
            return
        }
        if (d) console.log("Writing " + dl_plainq[dl_write_position].length + " bytes of file data at dl_pos " + dl_write_position + " real_position: " + document.fileWriter.position);
        var t = new Blob([dl_plainq[dl_write_position]]);
        document.fileWriter.dl_pos = dl_write_position;
        document.fileWriter.instance = dl_instance;
        document.fileWriter.onwriteend = function() {
            if (this.instance == dl_instance) {
                if (d) console.log("fileWriter: onwriteend, position: " + this.position);
                dl_write_position = this.position;
                delete dl_plainq[this.dl_pos];
                dl_plainqlen--;
                dl_dispatch_chain()
            }
        };
        document.fileWriter.write(t)
    }
}

function dl_settimer(e, t) {
    if (d) console.log(e < 0 ? "Stopping timer" : "Starting timer " + e);
    if (dl_timeout) clearTimeout(dl_timeout);
    if (e >= 0) dl_timeout = setTimeout(t, e);
    else dl_timeout = undefined
}

function startdownload() {
    dl_settimer(-1);
    if (downloading) {
        if (d) console.log("startdownload() called with active download");
        return
    }
    if (dl_queue_num >= dl_queue.length) dl_queue_num = dl_queue.length - 1;
    if (dl_queue_num < 0) {
        if (d) console.log("startdownload() called with dl_queue_num == -1");
        return
    }
    var e = dl_queue_num;
    var t;
    var n = -1;
    for (;;) {
        if (dl_queue[dl_queue_num]) {
            if (!dl_queue[dl_queue_num].retryafter) break;
            if (!t) t = (new Date).getTime();
            if (t >= dl_queue[dl_queue_num].retryafter) break;
            if (n < 0 || dl_queue[dl_queue_num].retryafter - t < n) {
                n = dl_queue[dl_queue_num].retryafter - t;
                if (n < 0) n = 0
            }
        }
        dl_queue_num++;
        if (dl_queue_num >= dl_queue.length) {
            if (d) console.log("Reached end of dl_queue, starting from 0");
            dl_queue_num = 0
        }
        if (dl_queue_num == e) {
            if (d) console.log("Looped through all downloads, nothing left");
            dl_settimer(n, startdownload);
            if (n < 0) {
                if (d) console.log("Nothing left to retry, clearing dl_queue");
                dl_queue = [];
                dl_queue_num = 0
            }
            return
        }
    }
    downloading = true;
    dl_key = dl_queue[dl_queue_num].key;
    if (d) console.log("dl_key " + dl_key);
    if (dl_queue[dl_queue_num].ph) dl_id = dl_queue[dl_queue_num].ph;
    else dl_id = dl_queue[dl_queue_num].id;
    dl_geturl = "";
    dl_bytesreceived = 0;
    dl_chunksizes = new Array;
    dl_keyNonce = JSON.stringify([dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7], dl_key[4], dl_key[5]]);
    dl_macs = {};
    dl_filesize = -1;
    dl_retryinterval = 1e3;
    dl_cipherq = [];
    dl_cipherqlen = 0;
    dl_plainq = [];
    dl_plainqlen = 0;
    dl_lastquotawarning = 0;
    dl_pos = Array(dl_maxSlots);
    dl_progress = Array(dl_maxSlots);
    if (!dl_legacy_ie) {
        dl_xhrs = Array(dl_maxSlots);
        for (var r = dl_maxSlots; r--;) {
            dl_xhrs[r] = getxhr();
            if (dl_xhrs[r].overrideMimeType) dl_xhrs[r].overrideMimeType("text/plain; charset=x-user-defined");
            dl_xhrs[r].slot = r;
            dl_pos[r] = -1;
            dl_progress[r] = 0
        }
    } else {
        dl_flash_connections = 0;
        dl_flash_progress = {}
    }
    if (use_workers) {
        dl_workers = new Array(dl_maxWorkers);
        dl_workerbusy = new Array(dl_maxWorkers);
        for (var i = dl_maxWorkers; i--;) dl_workerbusy[i] = 0
    } else dl_aes = new sjcl.cipher.aes([dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7]]);
    dl_write_position = 0;
    dl_getsourceurl(startdownload2)
}

function dl_renewsourceurl() {
    dl_getsourceurl(dl_renewsourceurl2)
}

function dl_getsourceurl(e) {
    req = {
        a: "g",
        g: 1,
        ssl: use_ssl
    };
    if (dl_queue[dl_queue_num].ph) req.p = dl_queue[dl_queue_num].ph;
    else if (dl_queue[dl_queue_num].id) req.n = dl_queue[dl_queue_num].id;
    api_req([req], {
        callback: e
    })
}

function dl_renewsourceurl2(e, t) {
    if (typeof e == "object") {
        if (typeof e[0] == "number") {
            dl_reportstatus(dl_queue_num, e[0])
        } else {
            if (dl_queue[dl_queue_num].g) {
                dl_geturl = dl_queue[dl_queue_num].g;
                dl_dispatch_queue();
                return
            } else if (dl_queue[dl_queue_num].e) dl_reportstatus(dl_queue_num, dl_queue[dl_queue_num].e)
        }
        dl_queue_num++;
        startdownload()
    }
}

function dl_reportstatus(e, t) {
    if (dl_queue[e]) {
        dl_queue[e].lasterror = t;
        dl_queue[e].onDownloadError(dl_queue[e].id || dl_queue[e].ph, t)
    }
}

function startdownload2(e, t) {
    if (typeof e == "object") {
        if (typeof e[0] == "number") {
            dl_reportstatus(dl_queue_num, e[0])
        } else {
            if (e[0].d) {
                dl_reportstatus(dl_queue_num, e[0].d ? 2 : 1);
                dl_queue[dl_queue_num] = false
            } else if (e[0].g) {
                var n = base64_to_ab(e[0].at);
                var r = dec_attr(n, [dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7]]);
                if (typeof r == "object" && typeof r.n == "string") return dl_setcredentials(e[0].g, e[0].s, r.n);
                else dl_reportstatus(dl_queue_num, EKEY)
            } else dl_reportstatus(dl_queue_num, e[0].e)
        }
    } else dl_reportstatus(dl_queue_num, EAGAIN);
    downloading = false;
    dl_queue_num++;
    dl_retryinterval *= 1.2;
    dl_settimer(dl_retryinterval, startdownload)
}

function dl_setcredentials(e, t, n) {
    var r;
    var i;
    var s;
    dl_geturl = e;
    dl_filesize = t;
    dl_filename = n;
    dl_chunks = [];
    i = s = 0;
    for (r = 1; r <= 8 && i < dl_filesize - r * 131072; r++) {
        dl_chunksizes[i] = r * 131072;
        dl_chunks.push(i);
        s = i;
        i += dl_chunksizes[i]
    }
    while (i < dl_filesize) {
        dl_chunksizes[i] = 1048576;
        dl_chunks.push(i);
        s = i;
        i += dl_chunksizes[i]
    }
    if (!(dl_chunksizes[s] = dl_filesize - s)) {
        delete dl_chunksizes[s];
        delete dl_chunks[dl_chunks.length - 1]
    }
    if (!dl_method) dl_createtmp();
    else {
        if (dl_method == 2) dl_blob = new MSBlobBuilder;
        dl_run()
    }
}

function dl_run() {
    document.getElementById("dllink").download = dl_filename;
    if (dl_filesize) {
        for (var e = dl_maxSlots; e--;) dl_dispatch_read(e);
        dl_queue[dl_queue_num].onDownloadStart(dl_id, dl_filename, dl_filesize)
    } else dl_checklostchunk()
}

function dl_checklostchunk() {
    var e;
    if (dl_write_position == dl_filesize) {
        dl_retryinterval = 1e3;
        if (dl_filesize) {
            var t = [];
            for (p in dl_macs) t.push(p);
            t.sort(function(e, t) {
                return parseInt(e) - parseInt(t)
            });
            for (e = 0; e < t.length; e++) t[e] = dl_macs[t[e]];
            var n = condenseMacs(t, [dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7]])
        }
        downloading = false;
        if (dl_filesize && (dl_key[6] != (n[0] ^ n[1]) || dl_key[7] != (n[2] ^ n[3]))) {
            dl_reportstatus(dl_queue_num, EKEY);
            dl_queue[dl_queue_num] = false
        } else {
            if (!dl_method) {
                dl_queue[dl_queue_num].onBeforeDownloadComplete();
                document.getElementById("dllink").href = document.fileEntry.toURL();
                if (document.getElementById("dllink").click) document.getElementById("dllink").click()
            } else if (dl_method == 1) {
                document.getElementById("dlswf_" + dl_id).flashdata(dl_id, "", dl_queue[dl_queue_num].n)
            } else if (dl_method == 2) {
                navigator.msSaveOrOpenBlob(dl_blob.getBlob(), dl_queue[dl_queue_num].n)
            }
            dl_queue[dl_queue_num].onDownloadComplete(dl_id);
            dl_queue[dl_queue_num] = false;
            dl_queue_num++;
            for (e = dl_queue.length; e--;)
                if (dl_queue[e] && dl_queue[e].lasterror == EOVERQUOTA) {
                    dl_reportstatus(e, 0);
                    delete dl_queue[e].retryafter
                }
        }
        startdownload()
    }
}

function dl_httperror(e) {
    if (e == 509) {
        var t = (new Date).getTime();
        if (!dl_lastquotawarning || t - dl_lastquotawarning > 55e3) {
            dl_lastquotawarning = t;
            dl_reportstatus(dl_queue_num, e == 509 ? EOVERQUOTA : ETOOMANYCONNECTIONS);
            dl_settimer(6e4, dl_dispatch_chain)
        }
        return
    }
    dl_reportstatus(dl_queue_num, EAGAIN);
    dl_retryinterval *= 1.2;
    if (!dl_write_position) {
        dl_cancel();
        dl_queue_num++;
        dl_settimer(dl_retryinterval, startdownload)
    } else {
        if (d) console.log("Network error, retrying in " + Math.floor(dl_retryinterval) + " seconds...");
        dl_settimer(dl_retryinterval, e == 509 ? dl_dispatch_chain : dl_renewsourceurl)
    }
}

function flash_dlprogress(e, t) {
    dl_flash_progress[e] = t;
    dl_updateprogress()
}

function dl_flashdldata(e, t, n) {
    dl_flash_connections--;
    if (t == "ERROR" || n != 200) {
        dl_chunks.unshift(e);
        var r = (new Date).getTime();
        dl_httperror(n);
        return
    }
    t = base64urldecode(t);
    delete dl_flash_progress[e];
    dl_bytesreceived += t.length;
    dl_cipherq[e] = {
        buffer: t
    };
    dl_cipherqlen++;
    dl_updateprogress();
    dl_dispatch_chain()
}

function dl_dispatch_read() {
    if (dl_cipherqlen > dl_maxSlots + 8) return;
    if (!dl_chunks.length) return;
    if (dl_legacy_ie) {
        if (dl_flash_connections > 6) return;
        dl_flash_connections++;
        var e = dl_chunks[0];
        dl_chunks.splice(0, 1);
        flashdlchunk(e, dl_geturl + "/" + e + "-" + (e + dl_chunksizes[e] - 1));
        return
    }
    for (var t = dl_maxSlots; t--;)
        if (dl_pos[t] == -1) break;
    if (t < 0) return;
    dl_pos[t] = dl_chunks[0];
    dl_chunks.splice(0, 1);
    dl_xhrs[t].instance = dl_instance;
    if (d) console.log("Requesting chunk " + dl_pos[t] + "/" + dl_chunksizes[dl_pos[t]] + " on slot " + t + ", " + dl_chunks.length + " remaining");
    dl_xhrs[t].onprogress = function(e) {
        if (this.instance == dl_instance) {
            if (!dl_lastquotawarning || (new Date).getTime() - dl_lastquotawarning > 55e3) {
                if (dl_pos[this.slot] >= 0) {
                    dl_progress[this.slot] = e.loaded;
                    dl_updateprogress()
                }
            }
        }
    };
    dl_xhrs[t].onreadystatechange = function(e) {
        if (this.instance == dl_instance) {
            if (this.readyState == this.DONE) {
                if (dl_pos[this.slot] >= 0) {
                    if (this.response != null) {
                        var t = dl_pos[this.slot];
                        if (have_ab) {
                            if (t >= 0) {
                                if (navigator.appName != "Opera") dl_bytesreceived += this.response.byteLength;
                                dl_cipherq[t] = new Uint8Array(this.response)
                            }
                        } else {
                            if (t >= 0) {
                                dl_bytesreceived += this.response.length;
                                dl_cipherq[t] = {
                                    buffer: this.response
                                }
                            }
                        }
                        dl_cipherqlen++;
                        if (navigator.appName != "Opera") dl_progress[this.slot] = 0;
                        dl_updateprogress();
                        dl_pos[this.slot] = -1;
                        dl_dispatch_chain()
                    } else {
                        if (dl_pos[this.slot] != -1) {
                            dl_chunks.unshift(dl_pos[this.slot]);
                            dl_pos[this.slot] = -1;
                            dl_httperror(this.status)
                        }
                    }
                }
            }
        }
    };
    dl_xhrs[t].open("POST", dl_geturl + "/" + dl_pos[t] + "-" + (dl_pos[t] + dl_chunksizes[dl_pos[t]] - 1), true);
    dl_xhrs[t].responseType = have_ab ? "arraybuffer" : "text";
    dl_xhrs[t].send()
}

function dl_updateprogress() {
    var e = 0;
    if (dl_legacy_ie)
        for (var t in dl_flash_progress) e += dl_flash_progress[t];
    else
        for (var n = dl_maxSlots; n--;) e += dl_progress[n];
    dl_queue[dl_queue_num].onDownloadProgress(dl_id, dl_bytesreceived + e, dl_filesize)
}

function dl_writedata(e) {
    if (dl_method == 1) {
        var t, n;
        var r;
        if (have_ab) r = e.length;
        else r = e.buffer.length;
        console.log(r);
        if (have_ab) subdata = ab_to_base64(e);
        else subdata = base64urlencode(e.buffer);
        document.getElementById("dlswf_" + dl_id).flashdata(dl_id, subdata)
    } else {
        if (have_ab) dl_blob.append(dl_plainq[dl_write_position]);
        else dl_blob.append(dl_plainq[dl_write_position].buffer)
    }
}

function dl_cancel() {
    dl_settimer(-1);
    dl_instance++;
    dl_xhrs = dl_pos = dl_workers = dl_progress = dl_cipherq = dl_plainq = dl_progress = dl_chunks = dl_chunksizes = undefined;
    downloading = false
}
var dl_queue = [];
var dl_queue = [];
var dl_queue_num = 0;
var dl_retryinterval;
var dl_method;
var dl_legacy_ie = typeof XDomainRequest != "undefined" && typeof ArrayBuffer == "undefined";
var dl_flash_connections;
var dl_flash_progress;
var dl_instance = 0;
var dl_blob;
var dl_key;
var dl_keyNonce;
var dl_macs;
var dl_aes;
var dl_filename;
var dl_filesize;
var dl_geturl;
var dl_bytesreceived = 0;
var dl_chunks;
var dl_chunksizes;
var downloading = false;
var dl_maxSlots = 4;
if (localStorage.dl_maxSlots) dl_maxSlots = localStorage.dl_maxSlots;
var dl_xhrs;
var dl_pos;
var dl_progress;
var dl_cipherq;
var dl_cipherqlen;
var dl_plainq;
var dl_plainqlen;
var dl_lastquotawarning;
var dl_maxWorkers = 4;
var dl_workers;
var dl_workerbusy;
var dl_write_position;
var dl_id;
var dl_timeout;
var test;
if (window.webkitRequestFileSystem) {
    function errorHandler(e) {
        var t = "";
        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
                t = "QUOTA_EXCEEDED_ERR";
                break;
            case FileError.NOT_FOUND_ERR:
                t = "NOT_FOUND_ERR";
                break;
            case FileError.SECURITY_ERR:
                t = "SECURITY_ERR";
                break;
            case FileError.INVALID_MODIFICATION_ERR:
                t = "INVALID_MODIFICATION_ERR";
                break;
            case FileError.INVALID_STATE_ERR:
                t = "INVALID_STATE_ERR";
                break;
            default:
                t = "Unknown Error";
                break
        }
        if (d) console.log("Error: " + t)
    }
    window.webkitStorageInfo.requestQuota(TEMPORARY, 1024 * 1024 * 1024 * 10, function(e) {
        console.log("Storage space granted successfully")
    }, function(e) {
        console.log("Error", e)
    });
    var dirid = "mega";

    function dl_createtmp() {
        window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024 * 1024 * 10, dl_createtmpfile, errorHandler)
    }

    function dl_createtmpfile(e) {
        document.fs = e;
        document.fs.root.getDirectory(dirid, {
            create: true
        }, function(e) {
            if (d) console.log('Directory "' + dirid + '" created');
            document.dirEntry = e
        }, errorHandler);
        if (d) console.log("Opening file for writing: " + dl_id);
        e.root.getFile(dirid + "/" + dl_id, {
            create: true
        }, function(e) {
            e.createWriter(function(t) {
                if (d) console.log('File "' + dirid + "/" + dl_id + '" created');
                t.onerror = function(e) {
                    if (d) console.log("Write failed: " + e.toString())
                };
                document.fileWriter = t;
                document.fileEntry = e;
                dl_run()
            }, errorHandler)
        }, errorHandler)
    }
    dl_method = 0
} else if (navigator.msSaveOrOpenBlob) {
    dl_method = 2
} else {
    dl_method = 1
}
var cFileList = [],
    requesti = makeid(10),
    actioni = 0,
    cFileIndex = 0,
    timeoutcount = 0,
    timeoutcount2 = 0,
    cRootFolder, currentdirid;

function process_f_f(e) {
    if (!cFileList[e].f[cFileList[e].i]) {
        crypto_reqmissingkeys();
        if (cFileList[e].callback) cFileList[e].callback.fn(cFileList[e].callback);
        return false
    }
    var t = cFileList[e].f[cFileList[e].i];
    t.attrs = t.a;
    if (t.sk) u_sharekeys[t.h] = crypto_process_sharekey(t.h, t.sk);
    if (t.t !== 2 && t.t !== 3 && t.t !== 4 && t.k) {
        crypto_processkey(u_handle, u_k_aes, t);
        u_nodekeys[t.h] = t.key
    } else {
        if (t.a) {
            if (!missingkeys[t.h]) {
                missingkeys[t.h] = true;
                newmissingkeys = true
            }
        }
        t.k = "";
        t.name = ""
    }
    if (t.t == 2) cRootFolder = t.h;
    else if (t.t < 2 || t.t == 5) {
        if (t.t == 5) {
            t.p = t.u;
            t.t = 1
        }
        if (t.t == 1) {
            t.s = -1
        }
    }
    cFileList[e].i++;
    timeoutcount++;
    if (!(timeoutcount & 63)) {
        setTimeout(function() {
            process_f_f(e)
        }, 10);
        timeoutcount2++
    } else process_f_f(e)
}

function process_f(e, t, n) {
    if (cFileList[e].f.length == 0) return false;
    cFileList[e].i = 0;
    cFileList[e].ap = t;
    if (n) cFileList[e].callback = n;
    process_f_f(e)
};

function processpacket() {
    if (!apackets[actioni]) return false;
    var e = apackets[actioni];
    if (e.a == "s") {
        var t = false;
        if (typeof u_sharekeys[e.n] == "undefined" && typeof e.k != "undefined") {
            if (!u_sharekeys[e.n]) {
                u_sharekeys[e.n] = crypto_process_sharekey(e.n, e.k);
                t = true
            }
        }
        crypto_share_rsa2aes()
    } else if (e.a == "k") {
        if (e.sr) {
            crypto_procsr(e.sr)
        } else if (e.cr) {
            crypto_proccr(e.cr)
        } else {
            var n = crypto_makecr(e.n, [e.h], true);
            var r = [];
            r.a = "k";
            r.cr = n;
            api_req([r])
        }
    } else if (e.a == "t") {
        cFileList[cFileIndex] = new Object;
        cFileList[cFileIndex].f = e.t.f;
        process_f(cFileIndex, true, {
            fn: function() {
                actioni++;
                processpacket()
            }
        });
        cFileIndex++;
        return false
    }
    actioni++;
    processpacket()
};

function execsc(e) {
    if (e == -15) {
        ul_uploading = false;
        downloading = false;
        logout();
        return false
    }
    apackets = e;
    actioni = 0;
    processpacket()
}

function process_ok(e) {
    for (i in e) {
        if (e[i].ha == crypto_handleauth(e[i].h)) u_sharekeys[e[i].h] = decrypt_key(u_k_aes, base64_to_a32(e[i].k))
    }
};

function FileSelectHandler(e) {
    FileDragHover(e);
    var t = e.target.files || e.dataTransfer.files;
    if (t.length == 0) return false;
    if (e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items.length > 0 && e.dataTransfer.items[0].webkitGetAsEntry) {
        var n = e.dataTransfer.items;
        for (var r = 0; r < n.length; r++) {
            if (n[r].webkitGetAsEntry) {
                var i = n[r].webkitGetAsEntry();
                console.log(i);
                if (i) {
                    traverseFileTree(i)
                }
            }
        }
    } else {
        for (var r = 0, s; s = t[r]; r++) {
            if (s.webkitRelativePath) s.path = s.webkitRelativePath;
            if (s.name != ".") addupload(s)
        }
    }
    return true
}

function traverseFileTree(e, t) {
    t = t || "";
    if (e.isFile) {
        dir_inflight++;
        e.file(function(e) {
            e.path = t;
            addupload(e);
            dir_inflight--;
            if (dir_inflight == 0) {
                if (init_anoupload) anoupload()
            }
        })
    } else if (e.isDirectory) {
        dir_inflight++;
        var n = e.createReader();
        n.readEntries(function(n) {
            for (var r = 0; r < n.length; r++) {
                traverseFileTree(n[r], t + e.name + "/")
            }
            dir_inflight--;
            if (dir_inflight == 0) {
                if (init_anoupload) anoupload()
            }
        })
    }
}

function addupload(e) {
    var t = ul_queue.length;
    if (!e.flashid) e.flashid = false;
    e.target = currentdirid;
    e.id = t;
    ul_queue.push(e);
    if (!ul_uploading) startupload()
};

function fm_getsharenodes() {
    return "";
};

function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
}
