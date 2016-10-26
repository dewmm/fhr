function base64_decode(e) {
    var t, o, r, n, a, i, d, s, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        p = 0,
        l = 0,
        m = "",
        g = [];
    if (!e) return e;
    e += "";
    do n = c.indexOf(e.charAt(p++)), a = c.indexOf(e.charAt(p++)), i = c.indexOf(e.charAt(p++)), d = c.indexOf(e.charAt(p++)), s = n << 18 | a << 12 | i << 6 | d, t = s >> 16 & 255, o = s >> 8 & 255, r = 255 & s, g[l++] = 64 == i ? String.fromCharCode(t) : 64 == d ? String.fromCharCode(t, o) : String.fromCharCode(t, o, r); while (p < e.length);
    return m = g.join(""), decodeURIComponent(escape(m.replace(/\0+$/, "")))
}

function base64_encode(e) {
    var t, o, r, n, a, i, d, s, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        p = 0,
        l = 0,
        m = "",
        g = [];
    if (!e) return e;
    e = unescape(encodeURIComponent(e));
    do t = e.charCodeAt(p++), o = e.charCodeAt(p++), r = e.charCodeAt(p++), s = t << 16 | o << 8 | r, n = s >> 18 & 63, a = s >> 12 & 63, i = s >> 6 & 63, d = 63 & s, g[l++] = c.charAt(n) + c.charAt(a) + c.charAt(i) + c.charAt(d); while (p < e.length);
    m = g.join("");
    var u = e.length % 3;
    return (u ? m.slice(0, u - 3) : m) + "===".slice(u || 3)
}

function a_to_fa() {
    var e = new Array;
    return protected_links = protected_links.replace(" ", ""), e = protected_links.split(",")
}

function generate() {
    var e = window.location.hostname;
    "" == protected_links || protected_links.match(e) ? "" == protected_links && (protected_links = e) : protected_links += ", " + e;
    var t = "",
        o = new Array,
        r = 0;
    t = document.getElementsByTagName("a"), a_to_va = t.length, o = a_to_fa(), r = o.length;
    for (var n = !1, a = 0, i = "", d = 0; a_to_va > d; d++) {
        for (n = !1, a = 0; 0 == n && r > a;) i = t[d].href, !i.match(o[a]) && i && i.match("http") || (n = !0), a++;
        if (0 == n) {
            var s = base64_encode(i),
                c = base64_encode(document.getElementById("cate").rel);
            t[d].href = page_engine + "?dl=" + s + "&cate=" + c, t[d].rel = "nofollow", a_to_vb++, a_to_vc += d + ":::" + t[d].href + "\n"
        }
    }
    var p = document.getElementById("anonyminized"),
        l = document.getElementById("found_links");
    p && (p.innerHTML += a_to_vb), l && (l.innerHTML += a_to_va);
    for (var m = document.getElementById("plainuri").getElementsByTagName("a"), d = (document.title, 0); d < m.length; d++) m[d].setAttribute("target", "_blank");
    for (var d = 0; d < m.length; d++);
    document.getElementById("plainuri").getElementsByTagName("*")
}

function load() {
    skip();
    var e = document.getElementById("btn"),
        t = document.getElementById("dlurl"),
        o = document.getElementById("download"),
        r = 25,
        n = document.createElement("span");
    t.parentNode.replaceChild(n, t);
    var a;
    a = setInterval(function() {
        if (r--, 0 > r) {
            n.parentNode.replaceChild(t, n), clearInterval(a), o.style.display = "inline", e.style.display = "inline";
            var i = getParameter("dl"),
                d = base64_decode(i);
            document.getElementById("dlurl").innerHTML = '<a id="download" href="' + d + '"><button id="btn" class="Visit_Link" style="text-align:justify;margin-bottom:2px;">Visit Link</button></a>'
        } else {
            var i = getParameter("dl"),
                d = base64_decode(i);
            n.innerHTML = '<h3 style="padding-bottom:-10px;">Link will appear in ' + r.toString() + ' Second<br /><button id="btn" style="padding-bottom:-10px;" class="Visit_Link btn">Skip and Continue</button></h2>', document.getElementById("btn").onmouseover = function() {
                return document.getElementById("btn").style.display = "none", !1
            }, e.style.display = "none", o.style.display = "none", $("#adsright").click(function() {
                $(this).slideUp(), window.open(d), n.parentNode.replaceChild(t, n), clearInterval(a), o.style.display = "inline", e.style.display = "inline", document.getElementById("dlurl").innerHTML = '<a id="download" href="' + d + '"><button id="btn" class="Visit_Link" style="text-align:justify;margin-bottom:2px;">Visit Link</button></a>'
            })
        }
    }, 1e3);
    var i = base64_decode(getParameter("cate"));
    "techno" == i && (document.getElementById("fokus").innerHTML = "<p><b>Tag :</b> <i>wii u, wii games</i></p>")
}

function getParameter(e) {
    for (var t = window.location.search.substr(1).split("&"), o = 0; o < t.length; o++) {
        var r = t[o].split("=");
        if (r[0] == e) return decodeURIComponent(r[1])
    }
    return !1
}

function skip() {
    document.getElementById("dlurl").innerHTML = '<a id="download" href="#"><button id="btn" class="Visit_Link" style="text-align:justify;margin-bottom:2px;"><h2>Please Wait ...</h2></button></a>'
}
var protected_links = "",
    a_to_va = 0,
    a_to_vb = 0,
    a_to_vc = "";
