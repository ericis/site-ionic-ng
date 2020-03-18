function _possibleConstructorReturn(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t)
        ? _assertThisInitialized(e)
        : t;
}
function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function _inherits(e, t) {
    if ('function' != typeof t && null !== t)
        throw new TypeError(
            'Super expression must either be null or a function'
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
    return (_setPrototypeOf =
        Object.setPrototypeOf ||
        function(e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
    }
}
function _createClass(e, t, i) {
    return (
        t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
    );
}
function _slicedToArray(e, t) {
    return (
        _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
}
function _iterableToArrayLimit(e, t) {
    if (
        Symbol.iterator in Object(e) ||
        '[object Arguments]' === Object.prototype.toString.call(e)
    ) {
        var i = [],
            s = !0,
            a = !1,
            r = void 0;
        try {
            for (
                var n, o = e[Symbol.iterator]();
                !(s = (n = o.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                s = !0
            );
        } catch (l) {
            (a = !0), (r = l);
        } finally {
            try {
                s || null == o.return || o.return();
            } finally {
                if (a) throw r;
            }
        }
        return i;
    }
}
function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        'E+Ut': function(e, t, i) {
            'use strict';
            i.r(t),
                i.d(t, 'Swiper', function() {
                    return $;
                });
            var s =
                    'undefined' == typeof document
                        ? {
                              body: {},
                              addEventListener: function() {},
                              removeEventListener: function() {},
                              activeElement: {
                                  blur: function() {},
                                  nodeName: '',
                              },
                              querySelector: function() {
                                  return null;
                              },
                              querySelectorAll: function() {
                                  return [];
                              },
                              getElementById: function() {
                                  return null;
                              },
                              createEvent: function() {
                                  return { initEvent: function() {} };
                              },
                              createElement: function() {
                                  return {
                                      children: [],
                                      childNodes: [],
                                      style: {},
                                      setAttribute: function() {},
                                      getElementsByTagName: function() {
                                          return [];
                                      },
                                  };
                              },
                              location: { hash: '' },
                          }
                        : document,
                a =
                    'undefined' == typeof window
                        ? {
                              document: s,
                              navigator: { userAgent: '' },
                              location: {},
                              history: {},
                              CustomEvent: function() {
                                  return this;
                              },
                              addEventListener: function() {},
                              removeEventListener: function() {},
                              getComputedStyle: function() {
                                  return {
                                      getPropertyValue: function() {
                                          return '';
                                      },
                                  };
                              },
                              Image: function() {},
                              Date: function() {},
                              screen: {},
                              setTimeout: function() {},
                              clearTimeout: function() {},
                          }
                        : window,
                r = function e(t) {
                    _classCallCheck(this, e);
                    for (var i = 0; i < t.length; i += 1) this[i] = t[i];
                    return (this.length = t.length), this;
                };
            function n(e, t) {
                var i = [],
                    n = 0;
                if (e && !t && e instanceof r) return e;
                if (e)
                    if ('string' == typeof e) {
                        var o,
                            l,
                            d = e.trim();
                        if (d.indexOf('<') >= 0 && d.indexOf('>') >= 0) {
                            var h = 'div';
                            for (
                                0 === d.indexOf('<li') && (h = 'ul'),
                                    0 === d.indexOf('<tr') && (h = 'tbody'),
                                    (0 !== d.indexOf('<td') &&
                                        0 !== d.indexOf('<th')) ||
                                        (h = 'tr'),
                                    0 === d.indexOf('<tbody') && (h = 'table'),
                                    0 === d.indexOf('<option') &&
                                        (h = 'select'),
                                    (l = s.createElement(h)).innerHTML = d,
                                    n = 0;
                                n < l.childNodes.length;
                                n += 1
                            )
                                i.push(l.childNodes[n]);
                        } else
                            for (
                                o =
                                    t || '#' !== e[0] || e.match(/[ .<>:~]/)
                                        ? (t || s).querySelectorAll(e.trim())
                                        : [
                                              s.getElementById(
                                                  e.trim().split('#')[1]
                                              ),
                                          ],
                                    n = 0;
                                n < o.length;
                                n += 1
                            )
                                o[n] && i.push(o[n]);
                    } else if (e.nodeType || e === a || e === s) i.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (n = 0; n < e.length; n += 1) i.push(e[n]);
                return new r(i);
            }
            function o(e) {
                for (var t = [], i = 0; i < e.length; i += 1)
                    -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t;
            }
            (n.fn = r.prototype), (n.Class = r), (n.Dom7 = r);
            var l = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                        for (var s = 0; s < this.length; s += 1)
                            void 0 !== this[s] &&
                                void 0 !== this[s].classList &&
                                this[s].classList.add(t[i]);
                    return this;
                },
                removeClass: function(e) {
                    for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                        for (var s = 0; s < this.length; s += 1)
                            void 0 !== this[s] &&
                                void 0 !== this[s].classList &&
                                this[s].classList.remove(t[i]);
                    return this;
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e);
                },
                toggleClass: function(e) {
                    for (var t = e.split(' '), i = 0; i < t.length; i += 1)
                        for (var s = 0; s < this.length; s += 1)
                            void 0 !== this[s] &&
                                void 0 !== this[s].classList &&
                                this[s].classList.toggle(t[i]);
                    return this;
                },
                attr: function(e, t) {
                    if (1 === arguments.length && 'string' == typeof e)
                        return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (var s in e)
                                (this[i][s] = e[s]),
                                    this[i].setAttribute(s, e[s]);
                    return this;
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1)
                        this[t].removeAttribute(e);
                    return this;
                },
                data: function(e, t) {
                    var i;
                    if (void 0 !== t) {
                        for (var s = 0; s < this.length; s += 1)
                            (i = this[s]).dom7ElementDataStorage ||
                                (i.dom7ElementDataStorage = {}),
                                (i.dom7ElementDataStorage[e] = t);
                        return this;
                    }
                    if ((i = this[0]))
                        return i.dom7ElementDataStorage &&
                            e in i.dom7ElementDataStorage
                            ? i.dom7ElementDataStorage[e]
                            : i.getAttribute('data-'.concat(e)) || void 0;
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        (i.webkitTransform = e), (i.transform = e);
                    }
                    return this;
                },
                transition: function(e) {
                    'string' != typeof e && (e = ''.concat(e, 'ms'));
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        (i.webkitTransitionDuration = e),
                            (i.transitionDuration = e);
                    }
                    return this;
                },
                on: function() {
                    for (
                        var e, t = arguments.length, i = new Array(t), s = 0;
                        s < t;
                        s++
                    )
                        i[s] = arguments[s];
                    var a = i[0],
                        r = i[1],
                        o = i[2],
                        l = i[3];
                    function d(e) {
                        var t = e.target;
                        if (t) {
                            var i = e.target.dom7EventData || [];
                            if ((i.indexOf(e) < 0 && i.unshift(e), n(t).is(r)))
                                o.apply(t, i);
                            else
                                for (
                                    var s = n(t).parents(), a = 0;
                                    a < s.length;
                                    a += 1
                                )
                                    n(s[a]).is(r) && o.apply(s[a], i);
                        }
                    }
                    function h(e) {
                        var t = (e && e.target && e.target.dom7EventData) || [];
                        t.indexOf(e) < 0 && t.unshift(e), o.apply(this, t);
                    }
                    'function' == typeof i[1] &&
                        ((a = (e = _slicedToArray(i, 3))[0]),
                        (o = e[1]),
                        (l = e[2]),
                        (r = void 0)),
                        l || (l = !1);
                    for (
                        var c, u = a.split(' '), p = 0;
                        p < this.length;
                        p += 1
                    ) {
                        var v = this[p];
                        if (r)
                            for (c = 0; c < u.length; c += 1) {
                                var m = u[c];
                                v.dom7LiveListeners ||
                                    (v.dom7LiveListeners = {}),
                                    v.dom7LiveListeners[m] ||
                                        (v.dom7LiveListeners[m] = []),
                                    v.dom7LiveListeners[m].push({
                                        listener: o,
                                        proxyListener: d,
                                    }),
                                    v.addEventListener(m, d, l);
                            }
                        else
                            for (c = 0; c < u.length; c += 1) {
                                var f = u[c];
                                v.dom7Listeners || (v.dom7Listeners = {}),
                                    v.dom7Listeners[f] ||
                                        (v.dom7Listeners[f] = []),
                                    v.dom7Listeners[f].push({
                                        listener: o,
                                        proxyListener: h,
                                    }),
                                    v.addEventListener(f, h, l);
                            }
                    }
                    return this;
                },
                off: function() {
                    for (
                        var e, t = arguments.length, i = new Array(t), s = 0;
                        s < t;
                        s++
                    )
                        i[s] = arguments[s];
                    var a = i[0],
                        r = i[1],
                        n = i[2],
                        o = i[3];
                    'function' == typeof i[1] &&
                        ((a = (e = _slicedToArray(i, 3))[0]),
                        (n = e[1]),
                        (o = e[2]),
                        (r = void 0)),
                        o || (o = !1);
                    for (var l = a.split(' '), d = 0; d < l.length; d += 1)
                        for (var h = l[d], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (
                                (!r && u.dom7Listeners
                                    ? (p = u.dom7Listeners[h])
                                    : r &&
                                      u.dom7LiveListeners &&
                                      (p = u.dom7LiveListeners[h]),
                                p && p.length)
                            )
                                for (var v = p.length - 1; v >= 0; v -= 1) {
                                    var m = p[v];
                                    n && m.listener === n
                                        ? (u.removeEventListener(
                                              h,
                                              m.proxyListener,
                                              o
                                          ),
                                          p.splice(v, 1))
                                        : n &&
                                          m.listener &&
                                          m.listener.dom7proxy &&
                                          m.listener.dom7proxy === n
                                        ? (u.removeEventListener(
                                              h,
                                              m.proxyListener,
                                              o
                                          ),
                                          p.splice(v, 1))
                                        : n ||
                                          (u.removeEventListener(
                                              h,
                                              m.proxyListener,
                                              o
                                          ),
                                          p.splice(v, 1));
                                }
                        }
                    return this;
                },
                trigger: function() {
                    for (
                        var e = arguments.length, t = new Array(e), i = 0;
                        i < e;
                        i++
                    )
                        t[i] = arguments[i];
                    for (
                        var r = t[0].split(' '), n = t[1], o = 0;
                        o < r.length;
                        o += 1
                    )
                        for (var l = r[o], d = 0; d < this.length; d += 1) {
                            var h = this[d],
                                c = void 0;
                            try {
                                c = new a.CustomEvent(l, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0,
                                });
                            } catch (u) {
                                (c = s.createEvent('Event')).initEvent(
                                    l,
                                    !0,
                                    !0
                                ),
                                    (c.detail = n);
                            }
                            (h.dom7EventData = t.filter(function(e, t) {
                                return t > 0;
                            })),
                                h.dispatchEvent(c),
                                (h.dom7EventData = []),
                                delete h.dom7EventData;
                        }
                    return this;
                },
                transitionEnd: function(e) {
                    var t,
                        i = ['webkitTransitionEnd', 'transitionend'],
                        s = this;
                    function a(r) {
                        if (r.target === this)
                            for (e.call(this, r), t = 0; t < i.length; t += 1)
                                s.off(i[t], a);
                    }
                    if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
                    return this;
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return (
                                this[0].offsetWidth +
                                parseFloat(t.getPropertyValue('margin-right')) +
                                parseFloat(t.getPropertyValue('margin-left'))
                            );
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return (
                                this[0].offsetHeight +
                                parseFloat(t.getPropertyValue('margin-top')) +
                                parseFloat(t.getPropertyValue('margin-bottom'))
                            );
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            i = s.body;
                        return {
                            top:
                                t.top +
                                (e === a ? a.scrollY : e.scrollTop) -
                                (e.clientTop || i.clientTop || 0),
                            left:
                                t.left +
                                (e === a ? a.scrollX : e.scrollLeft) -
                                (e.clientLeft || i.clientLeft || 0),
                        };
                    }
                    return null;
                },
                css: function(e, t) {
                    var i;
                    if (1 === arguments.length) {
                        if ('string' != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (var s in e) this[i].style[s] = e[s];
                            return this;
                        }
                        if (this[0])
                            return a
                                .getComputedStyle(this[0], null)
                                .getPropertyValue(e);
                    }
                    if (2 === arguments.length && 'string' == typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            this[i].style[e] = t;
                        return this;
                    }
                    return this;
                },
                each: function(e) {
                    if (!e) return this;
                    for (var t = 0; t < this.length; t += 1)
                        if (!1 === e.call(this[t], t, this[t])) return this;
                    return this;
                },
                html: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t += 1)
                        this[t].innerHTML = e;
                    return this;
                },
                text: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1)
                        this[t].textContent = e;
                    return this;
                },
                is: function(e) {
                    var t,
                        i,
                        o = this[0];
                    if (!o || void 0 === e) return !1;
                    if ('string' == typeof e) {
                        if (o.matches) return o.matches(e);
                        if (o.webkitMatchesSelector)
                            return o.webkitMatchesSelector(e);
                        if (o.msMatchesSelector) return o.msMatchesSelector(e);
                        for (t = n(e), i = 0; i < t.length; i += 1)
                            if (t[i] === o) return !0;
                        return !1;
                    }
                    if (e === s) return o === s;
                    if (e === a) return o === a;
                    if (e.nodeType || e instanceof r) {
                        for (
                            t = e.nodeType ? [e] : e, i = 0;
                            i < t.length;
                            i += 1
                        )
                            if (t[i] === o) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function() {
                    var e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); )
                            1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t,
                        i = this.length;
                    return e > i - 1
                        ? new r([])
                        : e < 0
                        ? new r((t = i + e) < 0 ? [] : [this[t]])
                        : new r([this[e]]);
                },
                append: function() {
                    for (var e, t = 0; t < arguments.length; t += 1) {
                        e =
                            t < 0 || arguments.length <= t
                                ? void 0
                                : arguments[t];
                        for (var i = 0; i < this.length; i += 1)
                            if ('string' == typeof e) {
                                var a = s.createElement('div');
                                for (a.innerHTML = e; a.firstChild; )
                                    this[i].appendChild(a.firstChild);
                            } else if (e instanceof r)
                                for (var n = 0; n < e.length; n += 1)
                                    this[i].appendChild(e[n]);
                            else this[i].appendChild(e);
                    }
                    return this;
                },
                prepend: function(e) {
                    var t, i;
                    for (t = 0; t < this.length; t += 1)
                        if ('string' == typeof e) {
                            var a = s.createElement('div');
                            for (
                                a.innerHTML = e, i = a.childNodes.length - 1;
                                i >= 0;
                                i -= 1
                            )
                                this[t].insertBefore(
                                    a.childNodes[i],
                                    this[t].childNodes[0]
                                );
                        } else if (e instanceof r)
                            for (i = 0; i < e.length; i += 1)
                                this[t].insertBefore(
                                    e[i],
                                    this[t].childNodes[0]
                                );
                        else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this;
                },
                next: function(e) {
                    return this.length > 0
                        ? e
                            ? this[0].nextElementSibling &&
                              n(this[0].nextElementSibling).is(e)
                                ? new r([this[0].nextElementSibling])
                                : new r([])
                            : new r(
                                  this[0].nextElementSibling
                                      ? [this[0].nextElementSibling]
                                      : []
                              )
                        : new r([]);
                },
                nextAll: function(e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new r([]);
                    for (; i.nextElementSibling; ) {
                        var s = i.nextElementSibling;
                        e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
                    }
                    return new r(t);
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e
                            ? t.previousElementSibling &&
                              n(t.previousElementSibling).is(e)
                                ? new r([t.previousElementSibling])
                                : new r([])
                            : new r(
                                  t.previousElementSibling
                                      ? [t.previousElementSibling]
                                      : []
                              );
                    }
                    return new r([]);
                },
                prevAll: function(e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new r([]);
                    for (; i.previousElementSibling; ) {
                        var s = i.previousElementSibling;
                        e ? n(s).is(e) && t.push(s) : t.push(s), (i = s);
                    }
                    return new r(t);
                },
                parent: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        null !== this[i].parentNode &&
                            (e
                                ? n(this[i].parentNode).is(e) &&
                                  t.push(this[i].parentNode)
                                : t.push(this[i].parentNode));
                    return n(o(t));
                },
                parents: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var s = this[i].parentNode; s; )
                            e ? n(s).is(e) && t.push(s) : t.push(s),
                                (s = s.parentNode);
                    return n(o(t));
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e
                        ? new r([])
                        : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (
                            var s = this[i].querySelectorAll(e), a = 0;
                            a < s.length;
                            a += 1
                        )
                            t.push(s[a]);
                    return new r(t);
                },
                children: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (
                            var s = this[i].childNodes, a = 0;
                            a < s.length;
                            a += 1
                        )
                            e
                                ? 1 === s[a].nodeType &&
                                  n(s[a]).is(e) &&
                                  t.push(s[a])
                                : 1 === s[a].nodeType && t.push(s[a]);
                    return new r(o(t));
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1)
                        this[e].parentNode &&
                            this[e].parentNode.removeChild(this[e]);
                    return this;
                },
                add: function() {
                    for (
                        var e,
                            t,
                            i = this,
                            s = arguments.length,
                            a = new Array(s),
                            r = 0;
                        r < s;
                        r++
                    )
                        a[r] = arguments[r];
                    for (e = 0; e < a.length; e += 1) {
                        var o = n(a[e]);
                        for (t = 0; t < o.length; t += 1)
                            (i[i.length] = o[t]), (i.length += 1);
                    }
                    return i;
                },
                styles: function() {
                    return this[0] ? a.getComputedStyle(this[0], null) : {};
                },
            };
            Object.keys(l).forEach(function(e) {
                n.fn[e] = n.fn[e] || l[e];
            });
            var d,
                h,
                c,
                u = {
                    deleteProps: function(e) {
                        var t = e;
                        Object.keys(t).forEach(function(e) {
                            try {
                                t[e] = null;
                            } catch (i) {}
                            try {
                                delete t[e];
                            } catch (i) {}
                        });
                    },
                    nextTick: function(e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                        return setTimeout(e, t);
                    },
                    now: function() {
                        return Date.now();
                    },
                    getTranslate: function(e) {
                        var t,
                            i,
                            s,
                            r =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 'x',
                            n = a.getComputedStyle(e, null);
                        return (
                            a.WebKitCSSMatrix
                                ? ((i = n.transform || n.webkitTransform).split(
                                      ','
                                  ).length > 6 &&
                                      (i = i
                                          .split(', ')
                                          .map(function(e) {
                                              return e.replace(',', '.');
                                          })
                                          .join(', ')),
                                  (s = new a.WebKitCSSMatrix(
                                      'none' === i ? '' : i
                                  )))
                                : (t = (s =
                                      n.MozTransform ||
                                      n.OTransform ||
                                      n.MsTransform ||
                                      n.msTransform ||
                                      n.transform ||
                                      n
                                          .getPropertyValue('transform')
                                          .replace(
                                              'translate(',
                                              'matrix(1, 0, 0, 1,'
                                          ))
                                      .toString()
                                      .split(',')),
                            'x' === r &&
                                (i = a.WebKitCSSMatrix
                                    ? s.m41
                                    : 16 === t.length
                                    ? parseFloat(t[12])
                                    : parseFloat(t[4])),
                            'y' === r &&
                                (i = a.WebKitCSSMatrix
                                    ? s.m42
                                    : 16 === t.length
                                    ? parseFloat(t[13])
                                    : parseFloat(t[5])),
                            i || 0
                        );
                    },
                    parseUrlQuery: function(e) {
                        var t,
                            i,
                            s,
                            r,
                            n = {},
                            o = e || a.location.href;
                        if ('string' == typeof o && o.length)
                            for (
                                r = (i = (o =
                                    o.indexOf('?') > -1
                                        ? o.replace(/\S*\?/, '')
                                        : '')
                                    .split('&')
                                    .filter(function(e) {
                                        return '' !== e;
                                    })).length,
                                    t = 0;
                                t < r;
                                t += 1
                            )
                                (s = i[t].replace(/#\S+/g, '').split('=')),
                                    (n[decodeURIComponent(s[0])] =
                                        void 0 === s[1]
                                            ? void 0
                                            : decodeURIComponent(s[1]) || '');
                        return n;
                    },
                    isObject: function(e) {
                        return (
                            'object' == typeof e &&
                            null !== e &&
                            e.constructor &&
                            e.constructor === Object
                        );
                    },
                    extend: function() {
                        for (
                            var e = Object(
                                    arguments.length <= 0
                                        ? void 0
                                        : arguments[0]
                                ),
                                t = 1;
                            t < arguments.length;
                            t += 1
                        ) {
                            var i =
                                t < 0 || arguments.length <= t
                                    ? void 0
                                    : arguments[t];
                            if (null != i)
                                for (
                                    var s = Object.keys(Object(i)),
                                        a = 0,
                                        r = s.length;
                                    a < r;
                                    a += 1
                                ) {
                                    var n = s[a],
                                        o = Object.getOwnPropertyDescriptor(
                                            i,
                                            n
                                        );
                                    void 0 !== o &&
                                        o.enumerable &&
                                        (u.isObject(e[n]) && u.isObject(i[n])
                                            ? u.extend(e[n], i[n])
                                            : !u.isObject(e[n]) &&
                                              u.isObject(i[n])
                                            ? ((e[n] = {}),
                                              u.extend(e[n], i[n]))
                                            : (e[n] = i[n]));
                                }
                        }
                        return e;
                    },
                },
                p =
                    ((c = s.createElement('div')),
                    {
                        touch:
                            (a.Modernizr && !0 === a.Modernizr.touch) ||
                            !!(
                                a.navigator.maxTouchPoints > 0 ||
                                'ontouchstart' in a ||
                                (a.DocumentTouch &&
                                    s instanceof a.DocumentTouch)
                            ),
                        pointerEvents: !!(
                            a.navigator.pointerEnabled ||
                            a.PointerEvent ||
                            ('maxTouchPoints' in a.navigator &&
                                a.navigator.maxTouchPoints > 0)
                        ),
                        prefixedPointerEvents: !!a.navigator.msPointerEnabled,
                        transition:
                            ((h = c.style),
                            'transition' in h ||
                                'webkitTransition' in h ||
                                'MozTransition' in h),
                        transforms3d:
                            (a.Modernizr &&
                                !0 === a.Modernizr.csstransforms3d) ||
                            (function() {
                                var e = c.style;
                                return (
                                    'webkitPerspective' in e ||
                                    'MozPerspective' in e ||
                                    'OPerspective' in e ||
                                    'MsPerspective' in e ||
                                    'perspective' in e
                                );
                            })(),
                        flexbox: (function() {
                            for (
                                var e = c.style,
                                    t = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(
                                        ' '
                                    ),
                                    i = 0;
                                i < t.length;
                                i += 1
                            )
                                if (t[i] in e) return !0;
                            return !1;
                        })(),
                        observer:
                            'MutationObserver' in a ||
                            'WebkitMutationObserver' in a,
                        passiveListener: (function() {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({}, 'passive', {
                                    get: function() {
                                        e = !0;
                                    },
                                });
                                a.addEventListener(
                                    'testPassiveListener',
                                    null,
                                    t
                                );
                            } catch (i) {}
                            return e;
                        })(),
                        gestures: 'ongesturestart' in a,
                    }),
                v = {
                    isIE:
                        !!a.navigator.userAgent.match(/Trident/g) ||
                        !!a.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!a.navigator.userAgent.match(/Edge/g),
                    isSafari:
                        ((d = a.navigator.userAgent.toLowerCase()),
                        d.indexOf('safari') >= 0 &&
                            d.indexOf('chrome') < 0 &&
                            d.indexOf('android') < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        a.navigator.userAgent
                    ),
                },
                m = (function() {
                    function e() {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                        _classCallCheck(this, e);
                        var i = this;
                        (i.params = t),
                            (i.eventsListeners = {}),
                            i.params &&
                                i.params.on &&
                                Object.keys(i.params.on).forEach(function(e) {
                                    i.on(e, i.params.on[e]);
                                });
                    }
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'on',
                                    value: function(e, t, i) {
                                        var s = this;
                                        if ('function' != typeof t) return s;
                                        var a = i ? 'unshift' : 'push';
                                        return (
                                            e.split(' ').forEach(function(e) {
                                                s.eventsListeners[e] ||
                                                    (s.eventsListeners[e] = []),
                                                    s.eventsListeners[e][a](t);
                                            }),
                                            s
                                        );
                                    },
                                },
                                {
                                    key: 'once',
                                    value: function(e, t, i) {
                                        var s = this;
                                        if ('function' != typeof t) return s;
                                        function a() {
                                            for (
                                                var i = arguments.length,
                                                    r = new Array(i),
                                                    n = 0;
                                                n < i;
                                                n++
                                            )
                                                r[n] = arguments[n];
                                            t.apply(s, r),
                                                s.off(e, a),
                                                a.f7proxy && delete a.f7proxy;
                                        }
                                        return (a.f7proxy = t), s.on(e, a, i);
                                    },
                                },
                                {
                                    key: 'off',
                                    value: function(e, t) {
                                        var i = this;
                                        return i.eventsListeners
                                            ? (e
                                                  .split(' ')
                                                  .forEach(function(e) {
                                                      void 0 === t
                                                          ? (i.eventsListeners[
                                                                e
                                                            ] = [])
                                                          : i.eventsListeners[
                                                                e
                                                            ] &&
                                                            i.eventsListeners[e]
                                                                .length &&
                                                            i.eventsListeners[
                                                                e
                                                            ].forEach(function(
                                                                s,
                                                                a
                                                            ) {
                                                                (s === t ||
                                                                    (s.f7proxy &&
                                                                        s.f7proxy ===
                                                                            t)) &&
                                                                    i.eventsListeners[
                                                                        e
                                                                    ].splice(
                                                                        a,
                                                                        1
                                                                    );
                                                            });
                                                  }),
                                              i)
                                            : i;
                                    },
                                },
                                {
                                    key: 'emit',
                                    value: function() {
                                        var e,
                                            t,
                                            i,
                                            s = this;
                                        if (!s.eventsListeners) return s;
                                        for (
                                            var a = arguments.length,
                                                r = new Array(a),
                                                n = 0;
                                            n < a;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (
                                            'string' == typeof r[0] ||
                                            Array.isArray(r[0])
                                                ? ((e = r[0]),
                                                  (t = r.slice(1, r.length)),
                                                  (i = s))
                                                : ((e = r[0].events),
                                                  (t = r[0].data),
                                                  (i = r[0].context || s)),
                                            (Array.isArray(e)
                                                ? e
                                                : e.split(' ')
                                            ).forEach(function(e) {
                                                if (
                                                    s.eventsListeners &&
                                                    s.eventsListeners[e]
                                                ) {
                                                    var a = [];
                                                    s.eventsListeners[
                                                        e
                                                    ].forEach(function(e) {
                                                        a.push(e);
                                                    }),
                                                        a.forEach(function(e) {
                                                            e.apply(i, t);
                                                        });
                                                }
                                            }),
                                            s
                                        );
                                    },
                                },
                                {
                                    key: 'useModulesParams',
                                    value: function(e) {
                                        var t = this;
                                        t.modules &&
                                            Object.keys(t.modules).forEach(
                                                function(i) {
                                                    var s = t.modules[i];
                                                    s.params &&
                                                        u.extend(e, s.params);
                                                }
                                            );
                                    },
                                },
                                {
                                    key: 'useModules',
                                    value: function() {
                                        var e =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : {},
                                            t = this;
                                        t.modules &&
                                            Object.keys(t.modules).forEach(
                                                function(i) {
                                                    var s = t.modules[i],
                                                        a = e[i] || {};
                                                    s.instance &&
                                                        Object.keys(
                                                            s.instance
                                                        ).forEach(function(e) {
                                                            var i =
                                                                s.instance[e];
                                                            t[e] =
                                                                'function' ==
                                                                typeof i
                                                                    ? i.bind(t)
                                                                    : i;
                                                        }),
                                                        s.on &&
                                                            t.on &&
                                                            Object.keys(
                                                                s.on
                                                            ).forEach(function(
                                                                e
                                                            ) {
                                                                t.on(
                                                                    e,
                                                                    s.on[e]
                                                                );
                                                            }),
                                                        s.create &&
                                                            s.create.bind(t)(a);
                                                }
                                            );
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'installModule',
                                    value: function(e) {
                                        var t = this;
                                        t.prototype.modules ||
                                            (t.prototype.modules = {});
                                        for (
                                            var i =
                                                    e.name ||
                                                    ''
                                                        .concat(
                                                            Object.keys(
                                                                t.prototype
                                                                    .modules
                                                            ).length,
                                                            '_'
                                                        )
                                                        .concat(u.now()),
                                                s = arguments.length,
                                                a = new Array(
                                                    s > 1 ? s - 1 : 0
                                                ),
                                                r = 1;
                                            r < s;
                                            r++
                                        )
                                            a[r - 1] = arguments[r];
                                        return (
                                            (t.prototype.modules[i] = e),
                                            e.proto &&
                                                Object.keys(e.proto).forEach(
                                                    function(i) {
                                                        t.prototype[i] =
                                                            e.proto[i];
                                                    }
                                                ),
                                            e.static &&
                                                Object.keys(e.static).forEach(
                                                    function(i) {
                                                        t[i] = e.static[i];
                                                    }
                                                ),
                                            e.install && e.install.apply(t, a),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: 'use',
                                    value: function(e) {
                                        for (
                                            var t = this,
                                                i = arguments.length,
                                                s = new Array(
                                                    i > 1 ? i - 1 : 0
                                                ),
                                                a = 1;
                                            a < i;
                                            a++
                                        )
                                            s[a - 1] = arguments[a];
                                        return Array.isArray(e)
                                            ? (e.forEach(function(e) {
                                                  return t.installModule(e);
                                              }),
                                              t)
                                            : t.installModule.apply(
                                                  t,
                                                  [e].concat(s)
                                              );
                                    },
                                },
                                {
                                    key: 'components',
                                    set: function(e) {
                                        this.use && this.use(e);
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                f = {
                    updateSize: function() {
                        var e,
                            t,
                            i = this.$el;
                        (e =
                            void 0 !== this.params.width
                                ? this.params.width
                                : i[0].clientWidth),
                            (t =
                                void 0 !== this.params.height
                                    ? this.params.height
                                    : i[0].clientHeight),
                            (0 === e && this.isHorizontal()) ||
                                (0 === t && this.isVertical()) ||
                                ((e =
                                    e -
                                    parseInt(i.css('padding-left'), 10) -
                                    parseInt(i.css('padding-right'), 10)),
                                (t =
                                    t -
                                    parseInt(i.css('padding-top'), 10) -
                                    parseInt(i.css('padding-bottom'), 10)),
                                u.extend(this, {
                                    width: e,
                                    height: t,
                                    size: this.isHorizontal() ? e : t,
                                }));
                    },
                    updateSlides: function() {
                        var e = this.params,
                            t = this.$wrapperEl,
                            i = this.size,
                            s = this.rtlTranslate,
                            r = this.wrongRTL,
                            n = this.virtual && e.virtual.enabled,
                            o = n
                                ? this.virtual.slides.length
                                : this.slides.length,
                            l = t.children('.'.concat(this.params.slideClass)),
                            d = n ? this.virtual.slides.length : l.length,
                            h = [],
                            c = [],
                            m = [],
                            f = e.slidesOffsetBefore;
                        'function' == typeof f &&
                            (f = e.slidesOffsetBefore.call(this));
                        var g = e.slidesOffsetAfter;
                        'function' == typeof g &&
                            (g = e.slidesOffsetAfter.call(this));
                        var b,
                            w,
                            y = this.snapGrid.length,
                            T = this.snapGrid.length,
                            E = e.spaceBetween,
                            x = -f,
                            S = 0,
                            C = 0;
                        if (void 0 !== i) {
                            'string' == typeof E &&
                                E.indexOf('%') >= 0 &&
                                (E =
                                    (parseFloat(E.replace('%', '')) / 100) * i),
                                (this.virtualSize = -E),
                                l.css(
                                    s
                                        ? { marginLeft: '', marginTop: '' }
                                        : { marginRight: '', marginBottom: '' }
                                ),
                                e.slidesPerColumn > 1 &&
                                    ((b =
                                        Math.floor(d / e.slidesPerColumn) ===
                                        d / this.params.slidesPerColumn
                                            ? d
                                            : Math.ceil(d / e.slidesPerColumn) *
                                              e.slidesPerColumn),
                                    'auto' !== e.slidesPerView &&
                                        'row' === e.slidesPerColumnFill &&
                                        (b = Math.max(
                                            b,
                                            e.slidesPerView * e.slidesPerColumn
                                        )));
                            for (
                                var M,
                                    P = e.slidesPerColumn,
                                    k = b / P,
                                    z = Math.floor(d / e.slidesPerColumn),
                                    L = 0;
                                L < d;
                                L += 1
                            ) {
                                w = 0;
                                var $ = l.eq(L);
                                if (e.slidesPerColumn > 1) {
                                    var D = void 0,
                                        O = void 0,
                                        I = void 0;
                                    if (
                                        'column' === e.slidesPerColumnFill ||
                                        ('row' === e.slidesPerColumnFill &&
                                            e.slidesPerGroup > 1)
                                    ) {
                                        if ('column' === e.slidesPerColumnFill)
                                            (I =
                                                L -
                                                (O = Math.floor(L / P)) * P),
                                                (O > z ||
                                                    (O === z && I === P - 1)) &&
                                                    (I += 1) >= P &&
                                                    ((I = 0), (O += 1));
                                        else {
                                            var A = Math.floor(
                                                L / e.slidesPerGroup
                                            );
                                            O =
                                                L -
                                                (I =
                                                    Math.floor(
                                                        L / e.slidesPerView
                                                    ) -
                                                    A * e.slidesPerColumn) *
                                                    e.slidesPerView -
                                                A * e.slidesPerView;
                                        }
                                        (D = O + (I * b) / P),
                                            $.css({
                                                '-webkit-box-ordinal-group': D,
                                                '-moz-box-ordinal-group': D,
                                                '-ms-flex-order': D,
                                                '-webkit-order': D,
                                                order: D,
                                            });
                                    } else O = L - (I = Math.floor(L / k)) * k;
                                    $.css(
                                        'margin-'.concat(
                                            this.isHorizontal() ? 'top' : 'left'
                                        ),
                                        0 !== I &&
                                            e.spaceBetween &&
                                            ''.concat(e.spaceBetween, 'px')
                                    )
                                        .attr('data-swiper-column', O)
                                        .attr('data-swiper-row', I);
                                }
                                if ('none' !== $.css('display')) {
                                    if ('auto' === e.slidesPerView) {
                                        var B = a.getComputedStyle($[0], null),
                                            X = $[0].style.transform,
                                            Y = $[0].style.webkitTransform;
                                        if (
                                            (X &&
                                                ($[0].style.transform = 'none'),
                                            Y &&
                                                ($[0].style.webkitTransform =
                                                    'none'),
                                            e.roundLengths)
                                        )
                                            w = this.isHorizontal()
                                                ? $.outerWidth(!0)
                                                : $.outerHeight(!0);
                                        else if (this.isHorizontal()) {
                                            var G = parseFloat(
                                                    B.getPropertyValue('width')
                                                ),
                                                H = parseFloat(
                                                    B.getPropertyValue(
                                                        'padding-left'
                                                    )
                                                ),
                                                V = parseFloat(
                                                    B.getPropertyValue(
                                                        'padding-right'
                                                    )
                                                ),
                                                F = parseFloat(
                                                    B.getPropertyValue(
                                                        'margin-left'
                                                    )
                                                ),
                                                N = parseFloat(
                                                    B.getPropertyValue(
                                                        'margin-right'
                                                    )
                                                ),
                                                R = B.getPropertyValue(
                                                    'box-sizing'
                                                );
                                            w =
                                                R &&
                                                'border-box' === R &&
                                                !v.isIE
                                                    ? G + F + N
                                                    : G + H + V + F + N;
                                        } else {
                                            var W = parseFloat(
                                                    B.getPropertyValue('height')
                                                ),
                                                _ = parseFloat(
                                                    B.getPropertyValue(
                                                        'padding-top'
                                                    )
                                                ),
                                                j = parseFloat(
                                                    B.getPropertyValue(
                                                        'padding-bottom'
                                                    )
                                                ),
                                                q = parseFloat(
                                                    B.getPropertyValue(
                                                        'margin-top'
                                                    )
                                                ),
                                                U = parseFloat(
                                                    B.getPropertyValue(
                                                        'margin-bottom'
                                                    )
                                                ),
                                                K = B.getPropertyValue(
                                                    'box-sizing'
                                                );
                                            w =
                                                K &&
                                                'border-box' === K &&
                                                !v.isIE
                                                    ? W + q + U
                                                    : W + _ + j + q + U;
                                        }
                                        X && ($[0].style.transform = X),
                                            Y &&
                                                ($[0].style.webkitTransform = Y),
                                            e.roundLengths &&
                                                (w = Math.floor(w));
                                    } else
                                        (w =
                                            (i - (e.slidesPerView - 1) * E) /
                                            e.slidesPerView),
                                            e.roundLengths &&
                                                (w = Math.floor(w)),
                                            l[L] &&
                                                (this.isHorizontal()
                                                    ? (l[
                                                          L
                                                      ].style.width = ''.concat(
                                                          w,
                                                          'px'
                                                      ))
                                                    : (l[
                                                          L
                                                      ].style.height = ''.concat(
                                                          w,
                                                          'px'
                                                      )));
                                    l[L] && (l[L].swiperSlideSize = w),
                                        m.push(w),
                                        e.centeredSlides
                                            ? ((x = x + w / 2 + S / 2 + E),
                                              0 === S &&
                                                  0 !== L &&
                                                  (x = x - i / 2 - E),
                                              0 === L && (x = x - i / 2 - E),
                                              Math.abs(x) < 0.001 && (x = 0),
                                              e.roundLengths &&
                                                  (x = Math.floor(x)),
                                              C % e.slidesPerGroup == 0 &&
                                                  h.push(x),
                                              c.push(x))
                                            : (e.roundLengths &&
                                                  (x = Math.floor(x)),
                                              C % e.slidesPerGroup == 0 &&
                                                  h.push(x),
                                              c.push(x),
                                              (x = x + w + E)),
                                        (this.virtualSize += w + E),
                                        (S = w),
                                        (C += 1);
                                }
                            }
                            if (
                                ((this.virtualSize =
                                    Math.max(this.virtualSize, i) + g),
                                s &&
                                    r &&
                                    ('slide' === e.effect ||
                                        'coverflow' === e.effect) &&
                                    t.css({
                                        width: ''.concat(
                                            this.virtualSize + e.spaceBetween,
                                            'px'
                                        ),
                                    }),
                                (p.flexbox && !e.setWrapperSize) ||
                                    (this.isHorizontal()
                                        ? t.css({
                                              width: ''.concat(
                                                  this.virtualSize +
                                                      e.spaceBetween,
                                                  'px'
                                              ),
                                          })
                                        : t.css({
                                              height: ''.concat(
                                                  this.virtualSize +
                                                      e.spaceBetween,
                                                  'px'
                                              ),
                                          })),
                                e.slidesPerColumn > 1 &&
                                    ((this.virtualSize =
                                        (w + e.spaceBetween) * b),
                                    (this.virtualSize =
                                        Math.ceil(
                                            this.virtualSize / e.slidesPerColumn
                                        ) - e.spaceBetween),
                                    this.isHorizontal()
                                        ? t.css({
                                              width: ''.concat(
                                                  this.virtualSize +
                                                      e.spaceBetween,
                                                  'px'
                                              ),
                                          })
                                        : t.css({
                                              height: ''.concat(
                                                  this.virtualSize +
                                                      e.spaceBetween,
                                                  'px'
                                              ),
                                          }),
                                    e.centeredSlides))
                            ) {
                                M = [];
                                for (var J = 0; J < h.length; J += 1) {
                                    var Q = h[J];
                                    e.roundLengths && (Q = Math.floor(Q)),
                                        h[J] < this.virtualSize + h[0] &&
                                            M.push(Q);
                                }
                                h = M;
                            }
                            if (!e.centeredSlides) {
                                M = [];
                                for (var Z = 0; Z < h.length; Z += 1) {
                                    var ee = h[Z];
                                    e.roundLengths && (ee = Math.floor(ee)),
                                        h[Z] <= this.virtualSize - i &&
                                            M.push(ee);
                                }
                                (h = M),
                                    Math.floor(this.virtualSize - i) -
                                        Math.floor(h[h.length - 1]) >
                                        1 && h.push(this.virtualSize - i);
                            }
                            if (
                                (0 === h.length && (h = [0]),
                                0 !== e.spaceBetween &&
                                    (this.isHorizontal()
                                        ? l.css(
                                              s
                                                  ? {
                                                        marginLeft: ''.concat(
                                                            E,
                                                            'px'
                                                        ),
                                                    }
                                                  : {
                                                        marginRight: ''.concat(
                                                            E,
                                                            'px'
                                                        ),
                                                    }
                                          )
                                        : l.css({
                                              marginBottom: ''.concat(E, 'px'),
                                          })),
                                e.centerInsufficientSlides)
                            ) {
                                var te = 0;
                                if (
                                    (m.forEach(function(t) {
                                        te +=
                                            t +
                                            (e.spaceBetween
                                                ? e.spaceBetween
                                                : 0);
                                    }),
                                    (te -= e.spaceBetween) < i)
                                ) {
                                    var ie = (i - te) / 2;
                                    h.forEach(function(e, t) {
                                        h[t] = e - ie;
                                    }),
                                        c.forEach(function(e, t) {
                                            c[t] = e + ie;
                                        });
                                }
                            }
                            u.extend(this, {
                                slides: l,
                                snapGrid: h,
                                slidesGrid: c,
                                slidesSizesGrid: m,
                            }),
                                d !== o && this.emit('slidesLengthChange'),
                                h.length !== y &&
                                    (this.params.watchOverflow &&
                                        this.checkOverflow(),
                                    this.emit('snapGridLengthChange')),
                                c.length !== T &&
                                    this.emit('slidesGridLengthChange'),
                                (e.watchSlidesProgress ||
                                    e.watchSlidesVisibility) &&
                                    this.updateSlidesOffset();
                        }
                    },
                    updateAutoHeight: function(e) {
                        var t,
                            i = [],
                            s = 0;
                        if (
                            ('number' == typeof e
                                ? this.setTransition(e)
                                : !0 === e &&
                                  this.setTransition(this.params.speed),
                            'auto' !== this.params.slidesPerView &&
                                this.params.slidesPerView > 1)
                        )
                            for (
                                t = 0;
                                t < Math.ceil(this.params.slidesPerView);
                                t += 1
                            ) {
                                var a = this.activeIndex + t;
                                if (a > this.slides.length) break;
                                i.push(this.slides.eq(a)[0]);
                            }
                        else i.push(this.slides.eq(this.activeIndex)[0]);
                        for (t = 0; t < i.length; t += 1)
                            if (void 0 !== i[t]) {
                                var r = i[t].offsetHeight;
                                s = r > s ? r : s;
                            }
                        s && this.$wrapperEl.css('height', ''.concat(s, 'px'));
                    },
                    updateSlidesOffset: function() {
                        for (var e = this.slides, t = 0; t < e.length; t += 1)
                            e[t].swiperSlideOffset = this.isHorizontal()
                                ? e[t].offsetLeft
                                : e[t].offsetTop;
                    },
                    updateSlidesProgress: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : (this && this.translate) || 0,
                            t = this,
                            i = t.params,
                            s = t.slides,
                            a = t.rtlTranslate;
                        if (0 !== s.length) {
                            void 0 === s[0].swiperSlideOffset &&
                                t.updateSlidesOffset();
                            var r = -e;
                            a && (r = e),
                                s.removeClass(i.slideVisibleClass),
                                (t.visibleSlidesIndexes = []),
                                (t.visibleSlides = []);
                            for (var o = 0; o < s.length; o += 1) {
                                var l = s[o],
                                    d =
                                        (r +
                                            (i.centeredSlides
                                                ? t.minTranslate()
                                                : 0) -
                                            l.swiperSlideOffset) /
                                        (l.swiperSlideSize + i.spaceBetween);
                                if (i.watchSlidesVisibility) {
                                    var h = -(r - l.swiperSlideOffset),
                                        c = h + t.slidesSizesGrid[o];
                                    ((h >= 0 && h < t.size - 1) ||
                                        (c > 1 && c <= t.size) ||
                                        (h <= 0 && c >= t.size)) &&
                                        (t.visibleSlides.push(l),
                                        t.visibleSlidesIndexes.push(o),
                                        s.eq(o).addClass(i.slideVisibleClass));
                                }
                                l.progress = a ? -d : d;
                            }
                            t.visibleSlides = n(t.visibleSlides);
                        }
                    },
                    updateProgress: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : (this && this.translate) || 0,
                            t = this.params,
                            i = this.maxTranslate() - this.minTranslate(),
                            s = this.progress,
                            a = this.isBeginning,
                            r = this.isEnd,
                            n = a,
                            o = r;
                        0 === i
                            ? ((s = 0), (a = !0), (r = !0))
                            : ((a = (s = (e - this.minTranslate()) / i) <= 0),
                              (r = s >= 1)),
                            u.extend(this, {
                                progress: s,
                                isBeginning: a,
                                isEnd: r,
                            }),
                            (t.watchSlidesProgress ||
                                t.watchSlidesVisibility) &&
                                this.updateSlidesProgress(e),
                            a && !n && this.emit('reachBeginning toEdge'),
                            r && !o && this.emit('reachEnd toEdge'),
                            ((n && !a) || (o && !r)) && this.emit('fromEdge'),
                            this.emit('progress', s);
                    },
                    updateSlidesClasses: function() {
                        var e,
                            t = this.slides,
                            i = this.params,
                            s = this.$wrapperEl,
                            a = this.activeIndex,
                            r = this.realIndex,
                            n = this.virtual && i.virtual.enabled;
                        t.removeClass(
                            ''
                                .concat(i.slideActiveClass, ' ')
                                .concat(i.slideNextClass, ' ')
                                .concat(i.slidePrevClass, ' ')
                                .concat(i.slideDuplicateActiveClass, ' ')
                                .concat(i.slideDuplicateNextClass, ' ')
                                .concat(i.slideDuplicatePrevClass)
                        ),
                            (e = n
                                ? this.$wrapperEl.find(
                                      '.'
                                          .concat(
                                              i.slideClass,
                                              '[data-swiper-slide-index="'
                                          )
                                          .concat(a, '"]')
                                  )
                                : t.eq(a)).addClass(i.slideActiveClass),
                            i.loop &&
                                (e.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              '.'
                                                  .concat(
                                                      i.slideClass,
                                                      ':not(.'
                                                  )
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')[data-swiper-slide-index="'
                                                  )
                                                  .concat(r, '"]')
                                          )
                                          .addClass(i.slideDuplicateActiveClass)
                                    : s
                                          .children(
                                              '.'
                                                  .concat(i.slideClass, '.')
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(r, '"]')
                                          )
                                          .addClass(
                                              i.slideDuplicateActiveClass
                                          ));
                        var o = e
                            .nextAll('.'.concat(i.slideClass))
                            .eq(0)
                            .addClass(i.slideNextClass);
                        i.loop &&
                            0 === o.length &&
                            (o = t.eq(0)).addClass(i.slideNextClass);
                        var l = e
                            .prevAll('.'.concat(i.slideClass))
                            .eq(0)
                            .addClass(i.slidePrevClass);
                        i.loop &&
                            0 === l.length &&
                            (l = t.eq(-1)).addClass(i.slidePrevClass),
                            i.loop &&
                                (o.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              '.'
                                                  .concat(
                                                      i.slideClass,
                                                      ':not(.'
                                                  )
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      o.attr(
                                                          'data-swiper-slide-index'
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                          .addClass(i.slideDuplicateNextClass)
                                    : s
                                          .children(
                                              '.'
                                                  .concat(i.slideClass, '.')
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      o.attr(
                                                          'data-swiper-slide-index'
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                          .addClass(i.slideDuplicateNextClass),
                                l.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              '.'
                                                  .concat(
                                                      i.slideClass,
                                                      ':not(.'
                                                  )
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      l.attr(
                                                          'data-swiper-slide-index'
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                          .addClass(i.slideDuplicatePrevClass)
                                    : s
                                          .children(
                                              '.'
                                                  .concat(i.slideClass, '.')
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      l.attr(
                                                          'data-swiper-slide-index'
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                          .addClass(i.slideDuplicatePrevClass));
                    },
                    updateActiveIndex: function(e) {
                        var t,
                            i = this.rtlTranslate
                                ? this.translate
                                : -this.translate,
                            s = this.slidesGrid,
                            a = this.snapGrid,
                            r = this.params,
                            n = this.activeIndex,
                            o = this.realIndex,
                            l = this.snapIndex,
                            d = e;
                        if (void 0 === d) {
                            for (var h = 0; h < s.length; h += 1)
                                void 0 !== s[h + 1]
                                    ? i >= s[h] &&
                                      i < s[h + 1] - (s[h + 1] - s[h]) / 2
                                        ? (d = h)
                                        : i >= s[h] &&
                                          i < s[h + 1] &&
                                          (d = h + 1)
                                    : i >= s[h] && (d = h);
                            r.normalizeSlideIndex &&
                                (d < 0 || void 0 === d) &&
                                (d = 0);
                        }
                        if (
                            ((t =
                                a.indexOf(i) >= 0
                                    ? a.indexOf(i)
                                    : Math.floor(d / r.slidesPerGroup)) >=
                                a.length && (t = a.length - 1),
                            d !== n)
                        ) {
                            var c = parseInt(
                                this.slides
                                    .eq(d)
                                    .attr('data-swiper-slide-index') || d,
                                10
                            );
                            u.extend(this, {
                                snapIndex: t,
                                realIndex: c,
                                previousIndex: n,
                                activeIndex: d,
                            }),
                                this.emit('activeIndexChange'),
                                this.emit('snapIndexChange'),
                                o !== c && this.emit('realIndexChange'),
                                (this.initialized || this.runCallbacksOnInit) &&
                                    this.emit('slideChange');
                        } else
                            t !== l &&
                                ((this.snapIndex = t),
                                this.emit('snapIndexChange'));
                    },
                    updateClickedSlide: function(e) {
                        var t = this.params,
                            i = n(e.target).closest(
                                '.'.concat(t.slideClass)
                            )[0],
                            s = !1;
                        if (i)
                            for (var a = 0; a < this.slides.length; a += 1)
                                this.slides[a] === i && (s = !0);
                        if (!i || !s)
                            return (
                                (this.clickedSlide = void 0),
                                void (this.clickedIndex = void 0)
                            );
                        (this.clickedSlide = i),
                            (this.clickedIndex =
                                this.virtual && this.params.virtual.enabled
                                    ? parseInt(
                                          n(i).attr('data-swiper-slide-index'),
                                          10
                                      )
                                    : n(i).index()),
                            t.slideToClickedSlide &&
                                void 0 !== this.clickedIndex &&
                                this.clickedIndex !== this.activeIndex &&
                                this.slideToClickedSlide();
                    },
                },
                g = {
                    getTranslate: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.isHorizontal()
                                    ? 'x'
                                    : 'y',
                            t = this.params,
                            i = this.rtlTranslate,
                            s = this.translate,
                            a = this.$wrapperEl;
                        if (t.virtualTranslate) return i ? -s : s;
                        var r = u.getTranslate(a[0], e);
                        return i && (r = -r), r || 0;
                    },
                    setTranslate: function(e, t) {
                        var i = this.rtlTranslate,
                            s = this.params,
                            a = this.$wrapperEl,
                            r = this.progress,
                            n = 0,
                            o = 0;
                        this.isHorizontal() ? (n = i ? -e : e) : (o = e),
                            s.roundLengths &&
                                ((n = Math.floor(n)), (o = Math.floor(o))),
                            s.virtualTranslate ||
                                a.transform(
                                    p.transforms3d
                                        ? 'translate3d('
                                              .concat(n, 'px, ')
                                              .concat(o, 'px, 0px)')
                                        : 'translate('
                                              .concat(n, 'px, ')
                                              .concat(o, 'px)')
                                ),
                            (this.previousTranslate = this.translate),
                            (this.translate = this.isHorizontal() ? n : o);
                        var l = this.maxTranslate() - this.minTranslate();
                        (0 === l ? 0 : (e - this.minTranslate()) / l) !== r &&
                            this.updateProgress(e),
                            this.emit('setTranslate', this.translate, t);
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                },
                b = {
                    slideTo: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0,
                            t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.params.speed,
                            i =
                                !(
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                ) || arguments[2],
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            a = this,
                            r = e;
                        r < 0 && (r = 0);
                        var n = a.params,
                            o = a.snapGrid,
                            l = a.slidesGrid,
                            d = a.previousIndex,
                            h = a.activeIndex,
                            c = a.rtlTranslate;
                        if (a.animating && n.preventInteractionOnTransition)
                            return !1;
                        var u = Math.floor(r / n.slidesPerGroup);
                        u >= o.length && (u = o.length - 1),
                            (h || n.initialSlide || 0) === (d || 0) &&
                                i &&
                                a.emit('beforeSlideChangeStart');
                        var v,
                            m = -o[u];
                        if ((a.updateProgress(m), n.normalizeSlideIndex))
                            for (var f = 0; f < l.length; f += 1)
                                -Math.floor(100 * m) >=
                                    Math.floor(100 * l[f]) && (r = f);
                        if (a.initialized && r !== h) {
                            if (
                                !a.allowSlideNext &&
                                m < a.translate &&
                                m < a.minTranslate()
                            )
                                return !1;
                            if (
                                !a.allowSlidePrev &&
                                m > a.translate &&
                                m > a.maxTranslate() &&
                                (h || 0) !== r
                            )
                                return !1;
                        }
                        return (
                            (v = r > h ? 'next' : r < h ? 'prev' : 'reset'),
                            (c && -m === a.translate) ||
                            (!c && m === a.translate)
                                ? (a.updateActiveIndex(r),
                                  n.autoHeight && a.updateAutoHeight(),
                                  a.updateSlidesClasses(),
                                  'slide' !== n.effect && a.setTranslate(m),
                                  'reset' !== v &&
                                      (a.transitionStart(i, v),
                                      a.transitionEnd(i, v)),
                                  !1)
                                : (0 !== t && p.transition
                                      ? (a.setTransition(t),
                                        a.setTranslate(m),
                                        a.updateActiveIndex(r),
                                        a.updateSlidesClasses(),
                                        a.emit('beforeTransitionStart', t, s),
                                        a.transitionStart(i, v),
                                        a.animating ||
                                            ((a.animating = !0),
                                            a.onSlideToWrapperTransitionEnd ||
                                                (a.onSlideToWrapperTransitionEnd = function(
                                                    e
                                                ) {
                                                    a &&
                                                        !a.destroyed &&
                                                        e.target === this &&
                                                        (a.$wrapperEl[0].removeEventListener(
                                                            'transitionend',
                                                            a.onSlideToWrapperTransitionEnd
                                                        ),
                                                        a.$wrapperEl[0].removeEventListener(
                                                            'webkitTransitionEnd',
                                                            a.onSlideToWrapperTransitionEnd
                                                        ),
                                                        (a.onSlideToWrapperTransitionEnd = null),
                                                        delete a.onSlideToWrapperTransitionEnd,
                                                        a.transitionEnd(i, v));
                                                }),
                                            a.$wrapperEl[0].addEventListener(
                                                'transitionend',
                                                a.onSlideToWrapperTransitionEnd
                                            ),
                                            a.$wrapperEl[0].addEventListener(
                                                'webkitTransitionEnd',
                                                a.onSlideToWrapperTransitionEnd
                                            )))
                                      : (a.setTransition(0),
                                        a.setTranslate(m),
                                        a.updateActiveIndex(r),
                                        a.updateSlidesClasses(),
                                        a.emit('beforeTransitionStart', t, s),
                                        a.transitionStart(i, v),
                                        a.transitionEnd(i, v)),
                                  !0)
                        );
                    },
                    slideToLoop: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : 0,
                            t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.params.speed,
                            i =
                                !(
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                ) || arguments[2],
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            a = e;
                        return (
                            this.params.loop && (a += this.loopedSlides),
                            this.slideTo(a, t, i, s)
                        );
                    },
                    slideNext: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.params.speed,
                            t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1],
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            s = this.params,
                            a = this.animating;
                        return s.loop
                            ? !a &&
                                  (this.loopFix(),
                                  (this._clientLeft = this.$wrapperEl[0].clientLeft),
                                  this.slideTo(
                                      this.activeIndex + s.slidesPerGroup,
                                      e,
                                      t,
                                      i
                                  ))
                            : this.slideTo(
                                  this.activeIndex + s.slidesPerGroup,
                                  e,
                                  t,
                                  i
                              );
                    },
                    slidePrev: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.params.speed,
                            t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1],
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            s = this,
                            a = s.params,
                            r = s.animating,
                            n = s.snapGrid,
                            o = s.slidesGrid,
                            l = s.rtlTranslate;
                        if (a.loop) {
                            if (r) return !1;
                            s.loopFix(),
                                (s._clientLeft = s.$wrapperEl[0].clientLeft);
                        }
                        function d(e) {
                            return e < 0
                                ? -Math.floor(Math.abs(e))
                                : Math.floor(e);
                        }
                        var h,
                            c = d(l ? s.translate : -s.translate),
                            u = n.map(function(e) {
                                return d(e);
                            }),
                            p =
                                (o.map(function(e) {
                                    return d(e);
                                }),
                                u.indexOf(c),
                                n[u.indexOf(c) - 1]);
                        return (
                            void 0 !== p &&
                                (h = o.indexOf(p)) < 0 &&
                                (h = s.activeIndex - 1),
                            s.slideTo(h, e, t, i)
                        );
                    },
                    slideReset: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.params.speed,
                            t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1],
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        return this.slideTo(this.activeIndex, e, t, i);
                    },
                    slideToClosest: function() {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.params.speed,
                            t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1],
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            s = this,
                            a = s.activeIndex,
                            r = Math.floor(a / s.params.slidesPerGroup);
                        if (r < s.snapGrid.length - 1) {
                            var n = s.snapGrid[r];
                            (s.rtlTranslate ? s.translate : -s.translate) - n >
                                (s.snapGrid[r + 1] - n) / 2 &&
                                (a = s.params.slidesPerGroup);
                        }
                        return s.slideTo(a, e, t, i);
                    },
                    slideToClickedSlide: function() {
                        var e,
                            t = this,
                            i = t.params,
                            s = t.$wrapperEl,
                            a =
                                'auto' === i.slidesPerView
                                    ? t.slidesPerViewDynamic()
                                    : i.slidesPerView,
                            r = t.clickedIndex;
                        if (i.loop) {
                            if (t.animating) return;
                            (e = parseInt(
                                n(t.clickedSlide).attr(
                                    'data-swiper-slide-index'
                                ),
                                10
                            )),
                                i.centeredSlides
                                    ? r < t.loopedSlides - a / 2 ||
                                      r >
                                          t.slides.length -
                                              t.loopedSlides +
                                              a / 2
                                        ? (t.loopFix(),
                                          (r = s
                                              .children(
                                                  '.'
                                                      .concat(
                                                          i.slideClass,
                                                          '[data-swiper-slide-index="'
                                                      )
                                                      .concat(e, '"]:not(.')
                                                      .concat(
                                                          i.slideDuplicateClass,
                                                          ')'
                                                      )
                                              )
                                              .eq(0)
                                              .index()),
                                          u.nextTick(function() {
                                              t.slideTo(r);
                                          }))
                                        : t.slideTo(r)
                                    : r > t.slides.length - a
                                    ? (t.loopFix(),
                                      (r = s
                                          .children(
                                              '.'
                                                  .concat(
                                                      i.slideClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(e, '"]:not(.')
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')'
                                                  )
                                          )
                                          .eq(0)
                                          .index()),
                                      u.nextTick(function() {
                                          t.slideTo(r);
                                      }))
                                    : t.slideTo(r);
                        } else t.slideTo(r);
                    },
                },
                w = {
                    loopCreate: function() {
                        var e = this,
                            t = e.params,
                            i = e.$wrapperEl;
                        i.children(
                            '.'
                                .concat(t.slideClass, '.')
                                .concat(t.slideDuplicateClass)
                        ).remove();
                        var a = i.children('.'.concat(t.slideClass));
                        if (t.loopFillGroupWithBlank) {
                            var r =
                                t.slidesPerGroup -
                                (a.length % t.slidesPerGroup);
                            if (r !== t.slidesPerGroup) {
                                for (var o = 0; o < r; o += 1) {
                                    var l = n(s.createElement('div')).addClass(
                                        ''
                                            .concat(t.slideClass, ' ')
                                            .concat(t.slideBlankClass)
                                    );
                                    i.append(l);
                                }
                                a = i.children('.'.concat(t.slideClass));
                            }
                        }
                        'auto' !== t.slidesPerView ||
                            t.loopedSlides ||
                            (t.loopedSlides = a.length),
                            (e.loopedSlides = parseInt(
                                t.loopedSlides || t.slidesPerView,
                                10
                            )),
                            (e.loopedSlides += t.loopAdditionalSlides),
                            e.loopedSlides > a.length &&
                                (e.loopedSlides = a.length);
                        var d = [],
                            h = [];
                        a.each(function(t, i) {
                            var s = n(i);
                            t < e.loopedSlides && h.push(i),
                                t < a.length &&
                                    t >= a.length - e.loopedSlides &&
                                    d.push(i),
                                s.attr('data-swiper-slide-index', t);
                        });
                        for (var c = 0; c < h.length; c += 1)
                            i.append(
                                n(h[c].cloneNode(!0)).addClass(
                                    t.slideDuplicateClass
                                )
                            );
                        for (var u = d.length - 1; u >= 0; u -= 1)
                            i.prepend(
                                n(d[u].cloneNode(!0)).addClass(
                                    t.slideDuplicateClass
                                )
                            );
                    },
                    loopFix: function() {
                        var e,
                            t = this.params,
                            i = this.activeIndex,
                            s = this.slides,
                            a = this.loopedSlides,
                            r = this.allowSlidePrev,
                            n = this.allowSlideNext,
                            o = this.snapGrid,
                            l = this.rtlTranslate;
                        (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                        var d = -o[i] - this.getTranslate();
                        i < a
                            ? ((e = s.length - 3 * a + i),
                              (e += a),
                              this.slideTo(e, 0, !1, !0) &&
                                  0 !== d &&
                                  this.setTranslate(
                                      (l ? -this.translate : this.translate) - d
                                  ))
                            : (('auto' === t.slidesPerView && i >= 2 * a) ||
                                  i >= s.length - a) &&
                              ((e = -s.length + i + a),
                              (e += a),
                              this.slideTo(e, 0, !1, !0) &&
                                  0 !== d &&
                                  this.setTranslate(
                                      (l ? -this.translate : this.translate) - d
                                  )),
                            (this.allowSlidePrev = r),
                            (this.allowSlideNext = n);
                    },
                    loopDestroy: function() {
                        var e = this.$wrapperEl,
                            t = this.params,
                            i = this.slides;
                        e
                            .children(
                                '.'
                                    .concat(t.slideClass, '.')
                                    .concat(t.slideDuplicateClass, ',.')
                                    .concat(t.slideClass, '.')
                                    .concat(t.slideBlankClass)
                            )
                            .remove(),
                            i.removeAttr('data-swiper-slide-index');
                    },
                },
                y = {
                    setGrabCursor: function(e) {
                        if (
                            !(
                                p.touch ||
                                !this.params.simulateTouch ||
                                (this.params.watchOverflow && this.isLocked)
                            )
                        ) {
                            var t = this.el;
                            (t.style.cursor = 'move'),
                                (t.style.cursor = e
                                    ? '-webkit-grabbing'
                                    : '-webkit-grab'),
                                (t.style.cursor = e
                                    ? '-moz-grabbin'
                                    : '-moz-grab'),
                                (t.style.cursor = e ? 'grabbing' : 'grab');
                        }
                    },
                    unsetGrabCursor: function() {
                        p.touch ||
                            (this.params.watchOverflow && this.isLocked) ||
                            (this.el.style.cursor = '');
                    },
                },
                T = {
                    appendSlide: function(e) {
                        var t = this.$wrapperEl,
                            i = this.params;
                        if (
                            (i.loop && this.loopDestroy(),
                            'object' == typeof e && 'length' in e)
                        )
                            for (var s = 0; s < e.length; s += 1)
                                e[s] && t.append(e[s]);
                        else t.append(e);
                        i.loop && this.loopCreate(),
                            (i.observer && p.observer) || this.update();
                    },
                    prependSlide: function(e) {
                        var t = this.params,
                            i = this.$wrapperEl,
                            s = this.activeIndex;
                        t.loop && this.loopDestroy();
                        var a = s + 1;
                        if ('object' == typeof e && 'length' in e) {
                            for (var r = 0; r < e.length; r += 1)
                                e[r] && i.prepend(e[r]);
                            a = s + e.length;
                        } else i.prepend(e);
                        t.loop && this.loopCreate(),
                            (t.observer && p.observer) || this.update(),
                            this.slideTo(a, 0, !1);
                    },
                    addSlide: function(e, t) {
                        var i = this.$wrapperEl,
                            s = this.params,
                            a = this.activeIndex;
                        s.loop &&
                            ((a -= this.loopedSlides),
                            this.loopDestroy(),
                            (this.slides = i.children(
                                '.'.concat(s.slideClass)
                            )));
                        var r = this.slides.length;
                        if (e <= 0) this.prependSlide(t);
                        else if (e >= r) this.appendSlide(t);
                        else {
                            for (
                                var n = a > e ? a + 1 : a, o = [], l = r - 1;
                                l >= e;
                                l -= 1
                            ) {
                                var d = this.slides.eq(l);
                                d.remove(), o.unshift(d);
                            }
                            if ('object' == typeof t && 'length' in t) {
                                for (var h = 0; h < t.length; h += 1)
                                    t[h] && i.append(t[h]);
                                n = a > e ? a + t.length : a;
                            } else i.append(t);
                            for (var c = 0; c < o.length; c += 1)
                                i.append(o[c]);
                            s.loop && this.loopCreate(),
                                (s.observer && p.observer) || this.update(),
                                this.slideTo(
                                    s.loop ? n + this.loopedSlides : n,
                                    0,
                                    !1
                                );
                        }
                    },
                    removeSlide: function(e) {
                        var t = this.params,
                            i = this.$wrapperEl,
                            s = this.activeIndex;
                        t.loop &&
                            ((s -= this.loopedSlides),
                            this.loopDestroy(),
                            (this.slides = i.children(
                                '.'.concat(t.slideClass)
                            )));
                        var a,
                            r = s;
                        if ('object' == typeof e && 'length' in e) {
                            for (var n = 0; n < e.length; n += 1)
                                (a = e[n]),
                                    this.slides[a] &&
                                        this.slides.eq(a).remove(),
                                    a < r && (r -= 1);
                            r = Math.max(r, 0);
                        } else
                            (a = e),
                                this.slides[a] && this.slides.eq(a).remove(),
                                a < r && (r -= 1),
                                (r = Math.max(r, 0));
                        t.loop && this.loopCreate(),
                            (t.observer && p.observer) || this.update(),
                            this.slideTo(
                                t.loop ? r + this.loopedSlides : r,
                                0,
                                !1
                            );
                    },
                    removeAllSlides: function() {
                        for (var e = [], t = 0; t < this.slides.length; t += 1)
                            e.push(t);
                        this.removeSlide(e);
                    },
                },
                E = (function() {
                    var e = a.navigator.userAgent,
                        t = {
                            ios: !1,
                            android: !1,
                            androidChrome: !1,
                            desktop: !1,
                            windows: !1,
                            iphone: !1,
                            ipod: !1,
                            ipad: !1,
                            cordova: a.cordova || a.phonegap,
                            phonegap: a.cordova || a.phonegap,
                        },
                        i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                        r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                        n = e.match(/(iPad).*OS\s([\d_]+)/),
                        o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                        l = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                    if (
                        (i &&
                            ((t.os = 'windows'),
                            (t.osVersion = i[2]),
                            (t.windows = !0)),
                        r &&
                            !i &&
                            ((t.os = 'android'),
                            (t.osVersion = r[2]),
                            (t.android = !0),
                            (t.androidChrome =
                                e.toLowerCase().indexOf('chrome') >= 0)),
                        (n || l || o) && ((t.os = 'ios'), (t.ios = !0)),
                        l &&
                            !o &&
                            ((t.osVersion = l[2].replace(/_/g, '.')),
                            (t.iphone = !0)),
                        n &&
                            ((t.osVersion = n[2].replace(/_/g, '.')),
                            (t.ipad = !0)),
                        o &&
                            ((t.osVersion = o[3]
                                ? o[3].replace(/_/g, '.')
                                : null),
                            (t.iphone = !0)),
                        t.ios &&
                            t.osVersion &&
                            e.indexOf('Version/') >= 0 &&
                            '10' === t.osVersion.split('.')[0] &&
                            (t.osVersion = e
                                .toLowerCase()
                                .split('version/')[1]
                                .split(' ')[0]),
                        (t.desktop = !(t.os || t.android || t.webView)),
                        (t.webView =
                            (l || n || o) &&
                            e.match(/.*AppleWebKit(?!.*Safari)/i)),
                        t.os && 'ios' === t.os)
                    ) {
                        var d = t.osVersion.split('.'),
                            h = s.querySelector('meta[name="viewport"]');
                        t.minimalUi =
                            !t.webView &&
                            (o || l) &&
                            (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) &&
                            h &&
                            h.getAttribute('content').indexOf('minimal-ui') >=
                                0;
                    }
                    return (t.pixelRatio = a.devicePixelRatio || 1), t;
                })();
            function x(e) {
                var t = this.touchEventsData,
                    i = this.params,
                    r = this.touches;
                if (!this.animating || !i.preventInteractionOnTransition) {
                    var o = e;
                    if (
                        (o.originalEvent && (o = o.originalEvent),
                        (t.isTouchEvent = 'touchstart' === o.type),
                        (t.isTouchEvent || !('which' in o) || 3 !== o.which) &&
                            !(
                                (!t.isTouchEvent &&
                                    'button' in o &&
                                    o.button > 0) ||
                                (t.isTouched && t.isMoved)
                            ))
                    )
                        if (
                            i.noSwiping &&
                            n(o.target).closest(
                                i.noSwipingSelector
                                    ? i.noSwipingSelector
                                    : '.'.concat(i.noSwipingClass)
                            )[0]
                        )
                            this.allowClick = !0;
                        else if (
                            !i.swipeHandler ||
                            n(o).closest(i.swipeHandler)[0]
                        ) {
                            (r.currentX =
                                'touchstart' === o.type
                                    ? o.targetTouches[0].pageX
                                    : o.pageX),
                                (r.currentY =
                                    'touchstart' === o.type
                                        ? o.targetTouches[0].pageY
                                        : o.pageY);
                            var l = r.currentX,
                                d = r.currentY,
                                h =
                                    i.edgeSwipeThreshold ||
                                    i.iOSEdgeSwipeThreshold;
                            if (
                                (!i.edgeSwipeDetection &&
                                    !i.iOSEdgeSwipeDetection) ||
                                !(l <= h || l >= a.screen.width - h)
                            ) {
                                if (
                                    (u.extend(t, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0,
                                    }),
                                    (r.startX = l),
                                    (r.startY = d),
                                    (t.touchStartTime = u.now()),
                                    (this.allowClick = !0),
                                    this.updateSize(),
                                    (this.swipeDirection = void 0),
                                    i.threshold > 0 &&
                                        (t.allowThresholdMove = !1),
                                    'touchstart' !== o.type)
                                ) {
                                    var c = !0;
                                    n(o.target).is(t.formElements) && (c = !1),
                                        s.activeElement &&
                                            n(s.activeElement).is(
                                                t.formElements
                                            ) &&
                                            s.activeElement !== o.target &&
                                            s.activeElement.blur();
                                    var p =
                                        c &&
                                        this.allowTouchMove &&
                                        i.touchStartPreventDefault;
                                    (i.touchStartForcePreventDefault || p) &&
                                        o.preventDefault();
                                }
                                this.emit('touchStart', o);
                            }
                        }
                }
            }
            function S(e) {
                var t = this.touchEventsData,
                    i = this.params,
                    a = this.touches,
                    r = this.rtlTranslate,
                    o = e;
                if ((o.originalEvent && (o = o.originalEvent), t.isTouched)) {
                    if (!t.isTouchEvent || 'mousemove' !== o.type) {
                        var l =
                                'touchmove' === o.type
                                    ? o.targetTouches[0].pageX
                                    : o.pageX,
                            d =
                                'touchmove' === o.type
                                    ? o.targetTouches[0].pageY
                                    : o.pageY;
                        if (o.preventedByNestedSwiper)
                            return (a.startX = l), void (a.startY = d);
                        if (!this.allowTouchMove)
                            return (
                                (this.allowClick = !1),
                                void (
                                    t.isTouched &&
                                    (u.extend(a, {
                                        startX: l,
                                        startY: d,
                                        currentX: l,
                                        currentY: d,
                                    }),
                                    (t.touchStartTime = u.now()))
                                )
                            );
                        if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (this.isVertical()) {
                                if (
                                    (d < a.startY &&
                                        this.translate <=
                                            this.maxTranslate()) ||
                                    (d > a.startY &&
                                        this.translate >= this.minTranslate())
                                )
                                    return (
                                        (t.isTouched = !1),
                                        void (t.isMoved = !1)
                                    );
                            } else if (
                                (l < a.startX &&
                                    this.translate <= this.maxTranslate()) ||
                                (l > a.startX &&
                                    this.translate >= this.minTranslate())
                            )
                                return;
                        if (
                            t.isTouchEvent &&
                            s.activeElement &&
                            o.target === s.activeElement &&
                            n(o.target).is(t.formElements)
                        )
                            return (
                                (t.isMoved = !0), void (this.allowClick = !1)
                            );
                        if (
                            (t.allowTouchCallbacks && this.emit('touchMove', o),
                            !(o.targetTouches && o.targetTouches.length > 1))
                        ) {
                            (a.currentX = l), (a.currentY = d);
                            var h = a.currentX - a.startX,
                                c = a.currentY - a.startY;
                            if (
                                !(
                                    this.params.threshold &&
                                    Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) <
                                        this.params.threshold
                                )
                            ) {
                                var p;
                                if (void 0 === t.isScrolling)
                                    (this.isHorizontal() &&
                                        a.currentY === a.startY) ||
                                    (this.isVertical() &&
                                        a.currentX === a.startX)
                                        ? (t.isScrolling = !1)
                                        : h * h + c * c >= 25 &&
                                          ((p =
                                              (180 *
                                                  Math.atan2(
                                                      Math.abs(c),
                                                      Math.abs(h)
                                                  )) /
                                              Math.PI),
                                          (t.isScrolling = this.isHorizontal()
                                              ? p > i.touchAngle
                                              : 90 - p > i.touchAngle));
                                if (
                                    (t.isScrolling &&
                                        this.emit('touchMoveOpposite', o),
                                    void 0 === t.startMoving &&
                                        ((a.currentX === a.startX &&
                                            a.currentY === a.startY) ||
                                            (t.startMoving = !0)),
                                    t.isScrolling)
                                )
                                    t.isTouched = !1;
                                else if (t.startMoving) {
                                    (this.allowClick = !1),
                                        o.preventDefault(),
                                        i.touchMoveStopPropagation &&
                                            !i.nested &&
                                            o.stopPropagation(),
                                        t.isMoved ||
                                            (i.loop && this.loopFix(),
                                            (t.startTranslate = this.getTranslate()),
                                            this.setTransition(0),
                                            this.animating &&
                                                this.$wrapperEl.trigger(
                                                    'webkitTransitionEnd transitionend'
                                                ),
                                            (t.allowMomentumBounce = !1),
                                            !i.grabCursor ||
                                                (!0 !== this.allowSlideNext &&
                                                    !0 !==
                                                        this.allowSlidePrev) ||
                                                this.setGrabCursor(!0),
                                            this.emit('sliderFirstMove', o)),
                                        this.emit('sliderMove', o),
                                        (t.isMoved = !0);
                                    var v = this.isHorizontal() ? h : c;
                                    (a.diff = v),
                                        (v *= i.touchRatio),
                                        r && (v = -v),
                                        (this.swipeDirection =
                                            v > 0 ? 'prev' : 'next'),
                                        (t.currentTranslate =
                                            v + t.startTranslate);
                                    var m = !0,
                                        f = i.resistanceRatio;
                                    if (
                                        (i.touchReleaseOnEdges && (f = 0),
                                        v > 0 &&
                                        t.currentTranslate > this.minTranslate()
                                            ? ((m = !1),
                                              i.resistance &&
                                                  (t.currentTranslate =
                                                      this.minTranslate() -
                                                      1 +
                                                      Math.pow(
                                                          -this.minTranslate() +
                                                              t.startTranslate +
                                                              v,
                                                          f
                                                      )))
                                            : v < 0 &&
                                              t.currentTranslate <
                                                  this.maxTranslate() &&
                                              ((m = !1),
                                              i.resistance &&
                                                  (t.currentTranslate =
                                                      this.maxTranslate() +
                                                      1 -
                                                      Math.pow(
                                                          this.maxTranslate() -
                                                              t.startTranslate -
                                                              v,
                                                          f
                                                      ))),
                                        m && (o.preventedByNestedSwiper = !0),
                                        !this.allowSlideNext &&
                                            'next' === this.swipeDirection &&
                                            t.currentTranslate <
                                                t.startTranslate &&
                                            (t.currentTranslate =
                                                t.startTranslate),
                                        !this.allowSlidePrev &&
                                            'prev' === this.swipeDirection &&
                                            t.currentTranslate >
                                                t.startTranslate &&
                                            (t.currentTranslate =
                                                t.startTranslate),
                                        i.threshold > 0)
                                    ) {
                                        if (
                                            !(
                                                Math.abs(v) > i.threshold ||
                                                t.allowThresholdMove
                                            )
                                        )
                                            return void (t.currentTranslate =
                                                t.startTranslate);
                                        if (!t.allowThresholdMove)
                                            return (
                                                (t.allowThresholdMove = !0),
                                                (a.startX = a.currentX),
                                                (a.startY = a.currentY),
                                                (t.currentTranslate =
                                                    t.startTranslate),
                                                void (a.diff = this.isHorizontal()
                                                    ? a.currentX - a.startX
                                                    : a.currentY - a.startY)
                                            );
                                    }
                                    i.followFinger &&
                                        ((i.freeMode ||
                                            i.watchSlidesProgress ||
                                            i.watchSlidesVisibility) &&
                                            (this.updateActiveIndex(),
                                            this.updateSlidesClasses()),
                                        i.freeMode &&
                                            (0 === t.velocities.length &&
                                                t.velocities.push({
                                                    position:
                                                        a[
                                                            this.isHorizontal()
                                                                ? 'startX'
                                                                : 'startY'
                                                        ],
                                                    time: t.touchStartTime,
                                                }),
                                            t.velocities.push({
                                                position:
                                                    a[
                                                        this.isHorizontal()
                                                            ? 'currentX'
                                                            : 'currentY'
                                                    ],
                                                time: u.now(),
                                            })),
                                        this.updateProgress(t.currentTranslate),
                                        this.setTranslate(t.currentTranslate));
                                }
                            }
                        }
                    }
                } else
                    t.startMoving &&
                        t.isScrolling &&
                        this.emit('touchMoveOpposite', o);
            }
            function C(e) {
                var t = this,
                    i = t.touchEventsData,
                    s = t.params,
                    a = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    d = e;
                if (
                    (d.originalEvent && (d = d.originalEvent),
                    i.allowTouchCallbacks && t.emit('touchEnd', d),
                    (i.allowTouchCallbacks = !1),
                    !i.isTouched)
                )
                    return (
                        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                        (i.isMoved = !1),
                        void (i.startMoving = !1)
                    );
                s.grabCursor &&
                    i.isMoved &&
                    i.isTouched &&
                    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                    t.setGrabCursor(!1);
                var h,
                    c = u.now(),
                    p = c - i.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(d),
                        t.emit('tap', d),
                        p < 300 &&
                            c - i.lastClickTime > 300 &&
                            (i.clickTimeout && clearTimeout(i.clickTimeout),
                            (i.clickTimeout = u.nextTick(function() {
                                t && !t.destroyed && t.emit('click', d);
                            }, 300))),
                        p < 300 &&
                            c - i.lastClickTime < 300 &&
                            (i.clickTimeout && clearTimeout(i.clickTimeout),
                            t.emit('doubleTap', d))),
                    (i.lastClickTime = u.now()),
                    u.nextTick(function() {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !i.isTouched ||
                        !i.isMoved ||
                        !t.swipeDirection ||
                        0 === a.diff ||
                        i.currentTranslate === i.startTranslate)
                )
                    return (
                        (i.isTouched = !1),
                        (i.isMoved = !1),
                        void (i.startMoving = !1)
                    );
                if (
                    ((i.isTouched = !1),
                    (i.isMoved = !1),
                    (i.startMoving = !1),
                    (h = s.followFinger
                        ? r
                            ? t.translate
                            : -t.translate
                        : -i.currentTranslate),
                    s.freeMode)
                ) {
                    if (h < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (h > -t.maxTranslate())
                        return void t.slideTo(
                            t.slides.length < l.length
                                ? l.length - 1
                                : t.slides.length - 1
                        );
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(),
                                m = i.velocities.pop(),
                                f = v.time - m.time;
                            (t.velocity = (v.position - m.position) / f),
                                (t.velocity /= 2),
                                Math.abs(t.velocity) <
                                    s.freeModeMinimumVelocity &&
                                    (t.velocity = 0),
                                (f > 150 || u.now() - v.time > 300) &&
                                    (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= s.freeModeMomentumVelocityRatio),
                            (i.velocities.length = 0);
                        var g = 1e3 * s.freeModeMomentumRatio,
                            b = t.translate + t.velocity * g;
                        r && (b = -b);
                        var w,
                            y,
                            T = !1,
                            E =
                                20 *
                                Math.abs(t.velocity) *
                                s.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate())
                            s.freeModeMomentumBounce
                                ? (b + t.maxTranslate() < -E &&
                                      (b = t.maxTranslate() - E),
                                  (w = t.maxTranslate()),
                                  (T = !0),
                                  (i.allowMomentumBounce = !0))
                                : (b = t.maxTranslate()),
                                s.loop && s.centeredSlides && (y = !0);
                        else if (b > t.minTranslate())
                            s.freeModeMomentumBounce
                                ? (b - t.minTranslate() > E &&
                                      (b = t.minTranslate() + E),
                                  (w = t.minTranslate()),
                                  (T = !0),
                                  (i.allowMomentumBounce = !0))
                                : (b = t.minTranslate()),
                                s.loop && s.centeredSlides && (y = !0);
                        else if (s.freeModeSticky) {
                            for (var x, S = 0; S < l.length; S += 1)
                                if (l[S] > -b) {
                                    x = S;
                                    break;
                                }
                            b = -(b =
                                Math.abs(l[x] - b) < Math.abs(l[x - 1] - b) ||
                                'next' === t.swipeDirection
                                    ? l[x]
                                    : l[x - 1]);
                        }
                        if (
                            (y &&
                                t.once('transitionEnd', function() {
                                    t.loopFix();
                                }),
                            0 !== t.velocity)
                        )
                            g = r
                                ? Math.abs((-b - t.translate) / t.velocity)
                                : Math.abs((b - t.translate) / t.velocity);
                        else if (s.freeModeSticky)
                            return void t.slideToClosest();
                        s.freeModeMomentumBounce && T
                            ? (t.updateProgress(w),
                              t.setTransition(g),
                              t.setTranslate(b),
                              t.transitionStart(!0, t.swipeDirection),
                              (t.animating = !0),
                              n.transitionEnd(function() {
                                  t &&
                                      !t.destroyed &&
                                      i.allowMomentumBounce &&
                                      (t.emit('momentumBounce'),
                                      t.setTransition(s.speed),
                                      t.setTranslate(w),
                                      n.transitionEnd(function() {
                                          t &&
                                              !t.destroyed &&
                                              t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(b),
                              t.setTransition(g),
                              t.setTranslate(b),
                              t.transitionStart(!0, t.swipeDirection),
                              t.animating ||
                                  ((t.animating = !0),
                                  n.transitionEnd(function() {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(b),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || p >= s.longSwipesMs) &&
                        (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses());
                } else {
                    for (
                        var C = 0, M = t.slidesSizesGrid[0], P = 0;
                        P < o.length;
                        P += s.slidesPerGroup
                    )
                        void 0 !== o[P + s.slidesPerGroup]
                            ? h >= o[P] &&
                              h < o[P + s.slidesPerGroup] &&
                              ((C = P), (M = o[P + s.slidesPerGroup] - o[P]))
                            : h >= o[P] &&
                              ((C = P),
                              (M = o[o.length - 1] - o[o.length - 2]));
                    var k = (h - o[C]) / M;
                    if (p > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        'next' === t.swipeDirection &&
                            t.slideTo(
                                k >= s.longSwipesRatio
                                    ? C + s.slidesPerGroup
                                    : C
                            ),
                            'prev' === t.swipeDirection &&
                                t.slideTo(
                                    k > 1 - s.longSwipesRatio
                                        ? C + s.slidesPerGroup
                                        : C
                                );
                    } else {
                        if (!s.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        'next' === t.swipeDirection &&
                            t.slideTo(C + s.slidesPerGroup),
                            'prev' === t.swipeDirection && t.slideTo(C);
                    }
                }
            }
            function M() {
                var e = this.params,
                    t = this.el;
                if (!t || 0 !== t.offsetWidth) {
                    e.breakpoints && this.setBreakpoint();
                    var i = this.allowSlideNext,
                        s = this.allowSlidePrev,
                        a = this.snapGrid;
                    if (
                        ((this.allowSlideNext = !0),
                        (this.allowSlidePrev = !0),
                        this.updateSize(),
                        this.updateSlides(),
                        e.freeMode)
                    ) {
                        var r = Math.min(
                            Math.max(this.translate, this.maxTranslate()),
                            this.minTranslate()
                        );
                        this.setTranslate(r),
                            this.updateActiveIndex(),
                            this.updateSlidesClasses(),
                            e.autoHeight && this.updateAutoHeight();
                    } else
                        this.updateSlidesClasses(),
                            this.slideTo(
                                ('auto' === e.slidesPerView ||
                                    e.slidesPerView > 1) &&
                                    this.isEnd &&
                                    !this.params.centeredSlides
                                    ? this.slides.length - 1
                                    : this.activeIndex,
                                0,
                                !1,
                                !0
                            );
                    this.autoplay &&
                        this.autoplay.running &&
                        this.autoplay.paused &&
                        this.autoplay.run(),
                        (this.allowSlidePrev = s),
                        (this.allowSlideNext = i),
                        this.params.watchOverflow &&
                            a !== this.snapGrid &&
                            this.checkOverflow();
                }
            }
            function P(e) {
                this.allowClick ||
                    (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation &&
                        this.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation()));
            }
            var k = {
                    init: !0,
                    direction: 'horizontal',
                    touchEventsTarget: 'container',
                    initialSlide: 0,
                    speed: 300,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: 0.02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: 'slide',
                    breakpoints: void 0,
                    breakpointsInverse: !1,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: 'column',
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: 'swiper-no-swiping',
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: 'swiper-container-',
                    slideClass: 'swiper-slide',
                    slideBlankClass: 'swiper-slide-invisible-blank',
                    slideActiveClass: 'swiper-slide-active',
                    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
                    slideVisibleClass: 'swiper-slide-visible',
                    slideDuplicateClass: 'swiper-slide-duplicate',
                    slideNextClass: 'swiper-slide-next',
                    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
                    slidePrevClass: 'swiper-slide-prev',
                    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
                    wrapperClass: 'swiper-wrapper',
                    runCallbacksOnInit: !0,
                },
                z = {
                    update: f,
                    translate: g,
                    transition: {
                        setTransition: function(e, t) {
                            this.$wrapperEl.transition(e),
                                this.emit('setTransition', e, t);
                        },
                        transitionStart: function() {
                            var e =
                                    !(
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                    ) || arguments[0],
                                t =
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                i = this,
                                s = i.activeIndex,
                                a = i.params,
                                r = i.previousIndex;
                            a.autoHeight && i.updateAutoHeight();
                            var n = t;
                            if (
                                (n ||
                                    (n =
                                        s > r
                                            ? 'next'
                                            : s < r
                                            ? 'prev'
                                            : 'reset'),
                                i.emit('transitionStart'),
                                e && s !== r)
                            ) {
                                if ('reset' === n)
                                    return void i.emit(
                                        'slideResetTransitionStart'
                                    );
                                i.emit('slideChangeTransitionStart'),
                                    i.emit(
                                        'next' === n
                                            ? 'slideNextTransitionStart'
                                            : 'slidePrevTransitionStart'
                                    );
                            }
                        },
                        transitionEnd: function() {
                            var e =
                                    !(
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                    ) || arguments[0],
                                t =
                                    arguments.length > 1
                                        ? arguments[1]
                                        : void 0,
                                i = this,
                                s = i.activeIndex,
                                a = i.previousIndex;
                            (i.animating = !1), i.setTransition(0);
                            var r = t;
                            if (
                                (r ||
                                    (r =
                                        s > a
                                            ? 'next'
                                            : s < a
                                            ? 'prev'
                                            : 'reset'),
                                i.emit('transitionEnd'),
                                e && s !== a)
                            ) {
                                if ('reset' === r)
                                    return void i.emit(
                                        'slideResetTransitionEnd'
                                    );
                                i.emit('slideChangeTransitionEnd'),
                                    i.emit(
                                        'next' === r
                                            ? 'slideNextTransitionEnd'
                                            : 'slidePrevTransitionEnd'
                                    );
                            }
                        },
                    },
                    slide: b,
                    loop: w,
                    grabCursor: y,
                    manipulation: T,
                    events: {
                        attachEvents: function() {
                            var e = this.params,
                                t = this.touchEvents,
                                i = this.el,
                                a = this.wrapperEl;
                            (this.onTouchStart = x.bind(this)),
                                (this.onTouchMove = S.bind(this)),
                                (this.onTouchEnd = C.bind(this)),
                                (this.onClick = P.bind(this));
                            var r = 'container' === e.touchEventsTarget ? i : a,
                                n = !!e.nested;
                            if (
                                p.touch ||
                                (!p.pointerEvents && !p.prefixedPointerEvents)
                            ) {
                                if (p.touch) {
                                    var o = !(
                                        'touchstart' !== t.start ||
                                        !p.passiveListener ||
                                        !e.passiveListeners
                                    ) && { passive: !0, capture: !1 };
                                    r.addEventListener(
                                        t.start,
                                        this.onTouchStart,
                                        o
                                    ),
                                        r.addEventListener(
                                            t.move,
                                            this.onTouchMove,
                                            p.passiveListener
                                                ? { passive: !1, capture: n }
                                                : n
                                        ),
                                        r.addEventListener(
                                            t.end,
                                            this.onTouchEnd,
                                            o
                                        );
                                }
                                ((e.simulateTouch && !E.ios && !E.android) ||
                                    (e.simulateTouch && !p.touch && E.ios)) &&
                                    (r.addEventListener(
                                        'mousedown',
                                        this.onTouchStart,
                                        !1
                                    ),
                                    s.addEventListener(
                                        'mousemove',
                                        this.onTouchMove,
                                        n
                                    ),
                                    s.addEventListener(
                                        'mouseup',
                                        this.onTouchEnd,
                                        !1
                                    ));
                            } else
                                r.addEventListener(
                                    t.start,
                                    this.onTouchStart,
                                    !1
                                ),
                                    s.addEventListener(
                                        t.move,
                                        this.onTouchMove,
                                        n
                                    ),
                                    s.addEventListener(
                                        t.end,
                                        this.onTouchEnd,
                                        !1
                                    );
                            (e.preventClicks || e.preventClicksPropagation) &&
                                r.addEventListener('click', this.onClick, !0),
                                this.on(
                                    E.ios || E.android
                                        ? 'resize orientationchange observerUpdate'
                                        : 'resize observerUpdate',
                                    M,
                                    !0
                                );
                        },
                        detachEvents: function() {
                            var e = this.params,
                                t = this.touchEvents,
                                i = this.el,
                                a = this.wrapperEl,
                                r = 'container' === e.touchEventsTarget ? i : a,
                                n = !!e.nested;
                            if (
                                p.touch ||
                                (!p.pointerEvents && !p.prefixedPointerEvents)
                            ) {
                                if (p.touch) {
                                    var o = !(
                                        'onTouchStart' !== t.start ||
                                        !p.passiveListener ||
                                        !e.passiveListeners
                                    ) && { passive: !0, capture: !1 };
                                    r.removeEventListener(
                                        t.start,
                                        this.onTouchStart,
                                        o
                                    ),
                                        r.removeEventListener(
                                            t.move,
                                            this.onTouchMove,
                                            n
                                        ),
                                        r.removeEventListener(
                                            t.end,
                                            this.onTouchEnd,
                                            o
                                        );
                                }
                                ((e.simulateTouch && !E.ios && !E.android) ||
                                    (e.simulateTouch && !p.touch && E.ios)) &&
                                    (r.removeEventListener(
                                        'mousedown',
                                        this.onTouchStart,
                                        !1
                                    ),
                                    s.removeEventListener(
                                        'mousemove',
                                        this.onTouchMove,
                                        n
                                    ),
                                    s.removeEventListener(
                                        'mouseup',
                                        this.onTouchEnd,
                                        !1
                                    ));
                            } else
                                r.removeEventListener(
                                    t.start,
                                    this.onTouchStart,
                                    !1
                                ),
                                    s.removeEventListener(
                                        t.move,
                                        this.onTouchMove,
                                        n
                                    ),
                                    s.removeEventListener(
                                        t.end,
                                        this.onTouchEnd,
                                        !1
                                    );
                            (e.preventClicks || e.preventClicksPropagation) &&
                                r.removeEventListener(
                                    'click',
                                    this.onClick,
                                    !0
                                ),
                                this.off(
                                    E.ios || E.android
                                        ? 'resize orientationchange observerUpdate'
                                        : 'resize observerUpdate',
                                    M
                                );
                        },
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var e = this.activeIndex,
                                t = this.initialized,
                                i = this.loopedSlides,
                                s = void 0 === i ? 0 : i,
                                a = this.params,
                                r = a.breakpoints;
                            if (r && (!r || 0 !== Object.keys(r).length)) {
                                var n = this.getBreakpoint(r);
                                if (n && this.currentBreakpoint !== n) {
                                    var o = n in r ? r[n] : void 0;
                                    o &&
                                        [
                                            'slidesPerView',
                                            'spaceBetween',
                                            'slidesPerGroup',
                                        ].forEach(function(e) {
                                            var t = o[e];
                                            void 0 !== t &&
                                                (o[e] =
                                                    'slidesPerView' !== e ||
                                                    ('AUTO' !== t &&
                                                        'auto' !== t)
                                                        ? 'slidesPerView' === e
                                                            ? parseFloat(t)
                                                            : parseInt(t, 10)
                                                        : 'auto');
                                        });
                                    var l = o || this.originalParams,
                                        d =
                                            l.direction &&
                                            l.direction !== a.direction,
                                        h =
                                            a.loop &&
                                            (l.slidesPerView !==
                                                a.slidesPerView ||
                                                d);
                                    d && t && this.changeDirection(),
                                        u.extend(this.params, l),
                                        u.extend(this, {
                                            allowTouchMove: this.params
                                                .allowTouchMove,
                                            allowSlideNext: this.params
                                                .allowSlideNext,
                                            allowSlidePrev: this.params
                                                .allowSlidePrev,
                                        }),
                                        (this.currentBreakpoint = n),
                                        h &&
                                            t &&
                                            (this.loopDestroy(),
                                            this.loopCreate(),
                                            this.updateSlides(),
                                            this.slideTo(
                                                e - s + this.loopedSlides,
                                                0,
                                                !1
                                            )),
                                        this.emit('breakpoint', l);
                                }
                            }
                        },
                        getBreakpoint: function(e) {
                            if (e) {
                                var t = !1,
                                    i = [];
                                Object.keys(e).forEach(function(e) {
                                    i.push(e);
                                }),
                                    i.sort(function(e, t) {
                                        return (
                                            parseInt(e, 10) - parseInt(t, 10)
                                        );
                                    });
                                for (var s = 0; s < i.length; s += 1) {
                                    var r = i[s];
                                    this.params.breakpointsInverse
                                        ? r <= a.innerWidth && (t = r)
                                        : r >= a.innerWidth && !t && (t = r);
                                }
                                return t || 'max';
                            }
                        },
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this.isLocked;
                            (this.isLocked = 1 === this.snapGrid.length),
                                (this.allowSlideNext = !this.isLocked),
                                (this.allowSlidePrev = !this.isLocked),
                                e !== this.isLocked &&
                                    this.emit(
                                        this.isLocked ? 'lock' : 'unlock'
                                    ),
                                e &&
                                    e !== this.isLocked &&
                                    ((this.isEnd = !1),
                                    this.navigation.update());
                        },
                    },
                    classes: {
                        addClasses: function() {
                            var e = this.classNames,
                                t = this.params,
                                i = this.rtl,
                                s = this.$el,
                                a = [];
                            a.push('initialized'),
                                a.push(t.direction),
                                t.freeMode && a.push('free-mode'),
                                p.flexbox || a.push('no-flexbox'),
                                t.autoHeight && a.push('autoheight'),
                                i && a.push('rtl'),
                                t.slidesPerColumn > 1 && a.push('multirow'),
                                E.android && a.push('android'),
                                E.ios && a.push('ios'),
                                (v.isIE || v.isEdge) &&
                                    (p.pointerEvents ||
                                        p.prefixedPointerEvents) &&
                                    a.push('wp8-'.concat(t.direction)),
                                a.forEach(function(i) {
                                    e.push(t.containerModifierClass + i);
                                }),
                                s.addClass(e.join(' '));
                        },
                        removeClasses: function() {
                            var e = this.$el,
                                t = this.classNames;
                            e.removeClass(t.join(' '));
                        },
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, n) {
                            var o;
                            function l() {
                                n && n();
                            }
                            e.complete && r
                                ? l()
                                : t
                                ? (((o = new a.Image()).onload = l),
                                  (o.onerror = l),
                                  s && (o.sizes = s),
                                  i && (o.srcset = i),
                                  t && (o.src = t))
                                : l();
                        },
                        preloadImages: function() {
                            var e = this;
                            function t() {
                                null != e &&
                                    e &&
                                    !e.destroyed &&
                                    (void 0 !== e.imagesLoaded &&
                                        (e.imagesLoaded += 1),
                                    e.imagesLoaded === e.imagesToLoad.length &&
                                        (e.params.updateOnImagesReady &&
                                            e.update(),
                                        e.emit('imagesReady')));
                            }
                            e.imagesToLoad = e.$el.find('img');
                            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                var s = e.imagesToLoad[i];
                                e.loadImage(
                                    s,
                                    s.currentSrc || s.getAttribute('src'),
                                    s.srcset || s.getAttribute('srcset'),
                                    s.sizes || s.getAttribute('sizes'),
                                    !0,
                                    t
                                );
                            }
                        },
                    },
                },
                L = {},
                $ = (function(e) {
                    function t() {
                        var e, i, s, a;
                        _classCallCheck(this, t);
                        for (
                            var r = arguments.length, o = new Array(r), l = 0;
                            l < r;
                            l++
                        )
                            o[l] = arguments[l];
                        1 === o.length &&
                        o[0].constructor &&
                        o[0].constructor === Object
                            ? (a = o[0])
                            : ((s = (e = _slicedToArray(o, 2))[0]), (a = e[1])),
                            a || (a = {}),
                            (a = u.extend({}, a)),
                            s && !a.el && (a.el = s),
                            (i = _possibleConstructorReturn(
                                this,
                                _getPrototypeOf(t).call(this, a)
                            )),
                            Object.keys(z).forEach(function(e) {
                                Object.keys(z[e]).forEach(function(i) {
                                    t.prototype[i] ||
                                        (t.prototype[i] = z[e][i]);
                                });
                            });
                        var d = _assertThisInitialized(i);
                        void 0 === d.modules && (d.modules = {}),
                            Object.keys(d.modules).forEach(function(e) {
                                var t = d.modules[e];
                                if (t.params) {
                                    var i = Object.keys(t.params)[0],
                                        s = t.params[i];
                                    if ('object' != typeof s || null === s)
                                        return;
                                    if (!(i in a && 'enabled' in s)) return;
                                    !0 === a[i] && (a[i] = { enabled: !0 }),
                                        'object' != typeof a[i] ||
                                            'enabled' in a[i] ||
                                            (a[i].enabled = !0),
                                        a[i] || (a[i] = { enabled: !1 });
                                }
                            });
                        var h = u.extend({}, k);
                        d.useModulesParams(h),
                            (d.params = u.extend({}, h, L, a)),
                            (d.originalParams = u.extend({}, d.params)),
                            (d.passedParams = u.extend({}, a)),
                            (d.$ = n);
                        var c = n(d.params.el);
                        if (!(s = c[0])) return _possibleConstructorReturn(i);
                        if (c.length > 1) {
                            var v = [];
                            return _possibleConstructorReturn(
                                i,
                                (c.each(function(e, i) {
                                    var s = u.extend({}, a, { el: i });
                                    v.push(new t(s));
                                }),
                                v)
                            );
                        }
                        (s.swiper = d), c.data('swiper', d);
                        var m,
                            f,
                            g = c.children('.'.concat(d.params.wrapperClass));
                        return _possibleConstructorReturn(
                            i,
                            (u.extend(d, {
                                $el: c,
                                el: s,
                                $wrapperEl: g,
                                wrapperEl: g[0],
                                classNames: [],
                                slides: n(),
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: function() {
                                    return 'horizontal' === d.params.direction;
                                },
                                isVertical: function() {
                                    return 'vertical' === d.params.direction;
                                },
                                rtl:
                                    'rtl' === s.dir.toLowerCase() ||
                                    'rtl' === c.css('direction'),
                                rtlTranslate:
                                    'horizontal' === d.params.direction &&
                                    ('rtl' === s.dir.toLowerCase() ||
                                        'rtl' === c.css('direction')),
                                wrongRTL: '-webkit-box' === g.css('display'),
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                allowSlideNext: d.params.allowSlideNext,
                                allowSlidePrev: d.params.allowSlidePrev,
                                touchEvents:
                                    ((m = [
                                        'touchstart',
                                        'touchmove',
                                        'touchend',
                                    ]),
                                    (f = ['mousedown', 'mousemove', 'mouseup']),
                                    p.pointerEvents
                                        ? (f = [
                                              'pointerdown',
                                              'pointermove',
                                              'pointerup',
                                          ])
                                        : p.prefixedPointerEvents &&
                                          (f = [
                                              'MSPointerDown',
                                              'MSPointerMove',
                                              'MSPointerUp',
                                          ]),
                                    (d.touchEventsTouch = {
                                        start: m[0],
                                        move: m[1],
                                        end: m[2],
                                    }),
                                    (d.touchEventsDesktop = {
                                        start: f[0],
                                        move: f[1],
                                        end: f[2],
                                    }),
                                    p.touch || !d.params.simulateTouch
                                        ? d.touchEventsTouch
                                        : d.touchEventsDesktop),
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    formElements:
                                        'input, select, option, textarea, button, video',
                                    lastClickTime: u.now(),
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    isTouchEvent: void 0,
                                    startMoving: void 0,
                                },
                                allowClick: !0,
                                allowTouchMove: d.params.allowTouchMove,
                                touches: {
                                    startX: 0,
                                    startY: 0,
                                    currentX: 0,
                                    currentY: 0,
                                    diff: 0,
                                },
                                imagesToLoad: [],
                                imagesLoaded: 0,
                            }),
                            d.useModules(),
                            d.params.init && d.init(),
                            d)
                        );
                    }
                    return (
                        _inherits(t, e),
                        _createClass(
                            t,
                            [
                                {
                                    key: 'slidesPerViewDynamic',
                                    value: function() {
                                        var e = this.params,
                                            t = this.slides,
                                            i = this.slidesGrid,
                                            s = this.size,
                                            a = this.activeIndex,
                                            r = 1;
                                        if (e.centeredSlides) {
                                            for (
                                                var n,
                                                    o = t[a].swiperSlideSize,
                                                    l = a + 1;
                                                l < t.length;
                                                l += 1
                                            )
                                                t[l] &&
                                                    !n &&
                                                    ((r += 1),
                                                    (o +=
                                                        t[l].swiperSlideSize) >
                                                        s && (n = !0));
                                            for (var d = a - 1; d >= 0; d -= 1)
                                                t[d] &&
                                                    !n &&
                                                    ((r += 1),
                                                    (o +=
                                                        t[d].swiperSlideSize) >
                                                        s && (n = !0));
                                        } else
                                            for (
                                                var h = a + 1;
                                                h < t.length;
                                                h += 1
                                            )
                                                i[h] - i[a] < s && (r += 1);
                                        return r;
                                    },
                                },
                                {
                                    key: 'update',
                                    value: function() {
                                        var e = this;
                                        if (e && !e.destroyed) {
                                            var t = e.snapGrid,
                                                i = e.params;
                                            i.breakpoints && e.setBreakpoint(),
                                                e.updateSize(),
                                                e.updateSlides(),
                                                e.updateProgress(),
                                                e.updateSlidesClasses(),
                                                e.params.freeMode
                                                    ? (s(),
                                                      e.params.autoHeight &&
                                                          e.updateAutoHeight())
                                                    : e.slideTo(
                                                          ('auto' ===
                                                              e.params
                                                                  .slidesPerView ||
                                                              e.params
                                                                  .slidesPerView >
                                                                  1) &&
                                                              e.isEnd &&
                                                              !e.params
                                                                  .centeredSlides
                                                              ? e.slides
                                                                    .length - 1
                                                              : e.activeIndex,
                                                          0,
                                                          !1,
                                                          !0
                                                      ) || s(),
                                                i.watchOverflow &&
                                                    t !== e.snapGrid &&
                                                    e.checkOverflow(),
                                                e.emit('update');
                                        }
                                        function s() {
                                            var t = Math.min(
                                                Math.max(
                                                    e.rtlTranslate
                                                        ? -1 * e.translate
                                                        : e.translate,
                                                    e.maxTranslate()
                                                ),
                                                e.minTranslate()
                                            );
                                            e.setTranslate(t),
                                                e.updateActiveIndex(),
                                                e.updateSlidesClasses();
                                        }
                                    },
                                },
                                {
                                    key: 'changeDirection',
                                    value: function(e) {
                                        var t =
                                                !(
                                                    arguments.length > 1 &&
                                                    void 0 !== arguments[1]
                                                ) || arguments[1],
                                            i = this.params.direction;
                                        return (
                                            e ||
                                                (e =
                                                    'horizontal' === i
                                                        ? 'vertical'
                                                        : 'horizontal'),
                                            e === i ||
                                            ('horizontal' !== e &&
                                                'vertical' !== e)
                                                ? this
                                                : (this.$el
                                                      .removeClass(
                                                          ''
                                                              .concat(
                                                                  this.params
                                                                      .containerModifierClass
                                                              )
                                                              .concat(
                                                                  i,
                                                                  ' wp8-'
                                                              )
                                                              .concat(i)
                                                      )
                                                      .addClass(
                                                          ''
                                                              .concat(
                                                                  this.params
                                                                      .containerModifierClass
                                                              )
                                                              .concat(e)
                                                      ),
                                                  (v.isIE || v.isEdge) &&
                                                      (p.pointerEvents ||
                                                          p.prefixedPointerEvents) &&
                                                      this.$el.addClass(
                                                          ''
                                                              .concat(
                                                                  this.params
                                                                      .containerModifierClass,
                                                                  'wp8-'
                                                              )
                                                              .concat(e)
                                                      ),
                                                  (this.params.direction = e),
                                                  this.slides.each(function(
                                                      t,
                                                      i
                                                  ) {
                                                      'vertical' === e
                                                          ? (i.style.width = '')
                                                          : (i.style.height =
                                                                '');
                                                  }),
                                                  this.emit('changeDirection'),
                                                  t && this.update(),
                                                  this)
                                        );
                                    },
                                },
                                {
                                    key: 'init',
                                    value: function() {
                                        this.initialized ||
                                            (this.emit('beforeInit'),
                                            this.params.breakpoints &&
                                                this.setBreakpoint(),
                                            this.addClasses(),
                                            this.params.loop &&
                                                this.loopCreate(),
                                            this.updateSize(),
                                            this.updateSlides(),
                                            this.params.watchOverflow &&
                                                this.checkOverflow(),
                                            this.params.grabCursor &&
                                                this.setGrabCursor(),
                                            this.params.preloadImages &&
                                                this.preloadImages(),
                                            this.slideTo(
                                                this.params.loop
                                                    ? this.params.initialSlide +
                                                          this.loopedSlides
                                                    : this.params.initialSlide,
                                                0,
                                                this.params.runCallbacksOnInit
                                            ),
                                            this.attachEvents(),
                                            (this.initialized = !0),
                                            this.emit('init'));
                                    },
                                },
                                {
                                    key: 'destroy',
                                    value: function() {
                                        var e =
                                                !(
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                ) || arguments[0],
                                            t =
                                                !(
                                                    arguments.length > 1 &&
                                                    void 0 !== arguments[1]
                                                ) || arguments[1],
                                            i = this,
                                            s = i.params,
                                            a = i.$el,
                                            r = i.$wrapperEl,
                                            n = i.slides;
                                        return void 0 === i.params ||
                                            i.destroyed
                                            ? null
                                            : (i.emit('beforeDestroy'),
                                              (i.initialized = !1),
                                              i.detachEvents(),
                                              s.loop && i.loopDestroy(),
                                              t &&
                                                  (i.removeClasses(),
                                                  a.removeAttr('style'),
                                                  r.removeAttr('style'),
                                                  n &&
                                                      n.length &&
                                                      n
                                                          .removeClass(
                                                              [
                                                                  s.slideVisibleClass,
                                                                  s.slideActiveClass,
                                                                  s.slideNextClass,
                                                                  s.slidePrevClass,
                                                              ].join(' ')
                                                          )
                                                          .removeAttr('style')
                                                          .removeAttr(
                                                              'data-swiper-slide-index'
                                                          )
                                                          .removeAttr(
                                                              'data-swiper-column'
                                                          )
                                                          .removeAttr(
                                                              'data-swiper-row'
                                                          )),
                                              i.emit('destroy'),
                                              Object.keys(
                                                  i.eventsListeners
                                              ).forEach(function(e) {
                                                  i.off(e);
                                              }),
                                              !1 !== e &&
                                                  ((i.$el[0].swiper = null),
                                                  i.$el.data('swiper', null),
                                                  u.deleteProps(i)),
                                              (i.destroyed = !0),
                                              null);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'extendDefaults',
                                    value: function(e) {
                                        u.extend(L, e);
                                    },
                                },
                                {
                                    key: 'extendedDefaults',
                                    get: function() {
                                        return L;
                                    },
                                },
                                {
                                    key: 'defaults',
                                    get: function() {
                                        return k;
                                    },
                                },
                                {
                                    key: 'Class',
                                    get: function() {
                                        return m;
                                    },
                                },
                                {
                                    key: '$',
                                    get: function() {
                                        return n;
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(m),
                D = {
                    name: 'device',
                    proto: { device: E },
                    static: { device: E },
                },
                O = {
                    name: 'support',
                    proto: { support: p },
                    static: { support: p },
                },
                I = {
                    name: 'browser',
                    proto: { browser: v },
                    static: { browser: v },
                },
                A = {
                    name: 'resize',
                    create: function() {
                        var e = this;
                        u.extend(e, {
                            resize: {
                                resizeHandler: function() {
                                    e &&
                                        !e.destroyed &&
                                        e.initialized &&
                                        (e.emit('beforeResize'),
                                        e.emit('resize'));
                                },
                                orientationChangeHandler: function() {
                                    e &&
                                        !e.destroyed &&
                                        e.initialized &&
                                        e.emit('orientationchange');
                                },
                            },
                        });
                    },
                    on: {
                        init: function() {
                            a.addEventListener(
                                'resize',
                                this.resize.resizeHandler
                            ),
                                a.addEventListener(
                                    'orientationchange',
                                    this.resize.orientationChangeHandler
                                );
                        },
                        destroy: function() {
                            a.removeEventListener(
                                'resize',
                                this.resize.resizeHandler
                            ),
                                a.removeEventListener(
                                    'orientationchange',
                                    this.resize.orientationChangeHandler
                                );
                        },
                    },
                },
                B = {
                    func: a.MutationObserver || a.WebkitMutationObserver,
                    attach: function(e) {
                        var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {},
                            i = this,
                            s = new (0, B.func)(function(e) {
                                if (1 !== e.length) {
                                    var t = function() {
                                        i.emit('observerUpdate', e[0]);
                                    };
                                    a.requestAnimationFrame
                                        ? a.requestAnimationFrame(t)
                                        : a.setTimeout(t, 0);
                                } else i.emit('observerUpdate', e[0]);
                            });
                        s.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData:
                                void 0 === t.characterData || t.characterData,
                        }),
                            i.observer.observers.push(s);
                    },
                    init: function() {
                        if (p.observer && this.params.observer) {
                            if (this.params.observeParents)
                                for (
                                    var e = this.$el.parents(), t = 0;
                                    t < e.length;
                                    t += 1
                                )
                                    this.observer.attach(e[t]);
                            this.observer.attach(this.$el[0], {
                                childList: this.params.observeSlideChildren,
                            }),
                                this.observer.attach(this.$wrapperEl[0], {
                                    attributes: !1,
                                });
                        }
                    },
                    destroy: function() {
                        this.observer.observers.forEach(function(e) {
                            e.disconnect();
                        }),
                            (this.observer.observers = []);
                    },
                },
                X = {
                    name: 'observer',
                    params: {
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1,
                    },
                    create: function() {
                        u.extend(this, {
                            observer: {
                                init: B.init.bind(this),
                                attach: B.attach.bind(this),
                                destroy: B.destroy.bind(this),
                                observers: [],
                            },
                        });
                    },
                    on: {
                        init: function() {
                            this.observer.init();
                        },
                        destroy: function() {
                            this.observer.destroy();
                        },
                    },
                },
                Y = {
                    lastScrollTime: u.now(),
                    event:
                        a.navigator.userAgent.indexOf('firefox') > -1
                            ? 'DOMMouseScroll'
                            : (function() {
                                  var e = 'onwheel' in s;
                                  if (!e) {
                                      var t = s.createElement('div');
                                      t.setAttribute('onwheel', 'return;'),
                                          (e = 'function' == typeof t.onwheel);
                                  }
                                  return (
                                      !e &&
                                          s.implementation &&
                                          s.implementation.hasFeature &&
                                          !0 !==
                                              s.implementation.hasFeature(
                                                  '',
                                                  ''
                                              ) &&
                                          (e = s.implementation.hasFeature(
                                              'Events.wheel',
                                              '3.0'
                                          )),
                                      e
                                  );
                              })()
                            ? 'wheel'
                            : 'mousewheel',
                    normalize: function(e) {
                        var t = 0,
                            i = 0,
                            s = 0,
                            a = 0;
                        return (
                            'detail' in e && (i = e.detail),
                            'wheelDelta' in e && (i = -e.wheelDelta / 120),
                            'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
                            'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                            'axis' in e &&
                                e.axis === e.HORIZONTAL_AXIS &&
                                ((t = i), (i = 0)),
                            (s = 10 * t),
                            (a = 10 * i),
                            'deltaY' in e && (a = e.deltaY),
                            'deltaX' in e && (s = e.deltaX),
                            (s || a) &&
                                e.deltaMode &&
                                (1 === e.deltaMode
                                    ? ((s *= 40), (a *= 40))
                                    : ((s *= 800), (a *= 800))),
                            s && !t && (t = s < 1 ? -1 : 1),
                            a && !i && (i = a < 1 ? -1 : 1),
                            { spinX: t, spinY: i, pixelX: s, pixelY: a }
                        );
                    },
                    handleMouseEnter: function() {
                        this.mouseEntered = !0;
                    },
                    handleMouseLeave: function() {
                        this.mouseEntered = !1;
                    },
                    handle: function(e) {
                        var t = e,
                            i = this,
                            s = i.params.mousewheel;
                        if (!i.mouseEntered && !s.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        var r = 0,
                            n = i.rtlTranslate ? -1 : 1,
                            o = Y.normalize(t);
                        if (s.forceToAxis)
                            if (i.isHorizontal()) {
                                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                                    return !0;
                                r = o.pixelX * n;
                            } else {
                                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                                    return !0;
                                r = o.pixelY;
                            }
                        else
                            r =
                                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                                    ? -o.pixelX * n
                                    : -o.pixelY;
                        if (0 === r) return !0;
                        if ((s.invert && (r = -r), i.params.freeMode)) {
                            i.params.loop && i.loopFix();
                            var l = i.getTranslate() + r * s.sensitivity,
                                d = i.isBeginning,
                                h = i.isEnd;
                            if (
                                (l >= i.minTranslate() &&
                                    (l = i.minTranslate()),
                                l <= i.maxTranslate() && (l = i.maxTranslate()),
                                i.setTransition(0),
                                i.setTranslate(l),
                                i.updateProgress(),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses(),
                                ((!d && i.isBeginning) || (!h && i.isEnd)) &&
                                    i.updateSlidesClasses(),
                                i.params.freeModeSticky &&
                                    (clearTimeout(i.mousewheel.timeout),
                                    (i.mousewheel.timeout = u.nextTick(
                                        function() {
                                            i.slideToClosest();
                                        },
                                        300
                                    ))),
                                i.emit('scroll', t),
                                i.params.autoplay &&
                                    i.params.autoplayDisableOnInteraction &&
                                    i.autoplay.stop(),
                                l === i.minTranslate() ||
                                    l === i.maxTranslate())
                            )
                                return !0;
                        } else {
                            if (u.now() - i.mousewheel.lastScrollTime > 60)
                                if (r < 0)
                                    if (
                                        (i.isEnd && !i.params.loop) ||
                                        i.animating
                                    ) {
                                        if (s.releaseOnEdges) return !0;
                                    } else i.slideNext(), i.emit('scroll', t);
                                else if (
                                    (i.isBeginning && !i.params.loop) ||
                                    i.animating
                                ) {
                                    if (s.releaseOnEdges) return !0;
                                } else i.slidePrev(), i.emit('scroll', t);
                            i.mousewheel.lastScrollTime = new a.Date().getTime();
                        }
                        return (
                            t.preventDefault
                                ? t.preventDefault()
                                : (t.returnValue = !1),
                            !1
                        );
                    },
                    enable: function() {
                        if (!Y.event) return !1;
                        if (this.mousewheel.enabled) return !1;
                        var e = this.$el;
                        return (
                            'container' !==
                                this.params.mousewheel.eventsTarged &&
                                (e = n(this.params.mousewheel.eventsTarged)),
                            e.on(
                                'mouseenter',
                                this.mousewheel.handleMouseEnter
                            ),
                            e.on(
                                'mouseleave',
                                this.mousewheel.handleMouseLeave
                            ),
                            e.on(Y.event, this.mousewheel.handle),
                            (this.mousewheel.enabled = !0),
                            !0
                        );
                    },
                    disable: function() {
                        if (!Y.event) return !1;
                        if (!this.mousewheel.enabled) return !1;
                        var e = this.$el;
                        return (
                            'container' !==
                                this.params.mousewheel.eventsTarged &&
                                (e = n(this.params.mousewheel.eventsTarged)),
                            e.off(Y.event, this.mousewheel.handle),
                            (this.mousewheel.enabled = !1),
                            !0
                        );
                    },
                },
                G = {
                    update: function() {
                        var e = this.rtl,
                            t = this.params.pagination;
                        if (
                            t.el &&
                            this.pagination.el &&
                            this.pagination.$el &&
                            0 !== this.pagination.$el.length
                        ) {
                            var i,
                                s =
                                    this.virtual && this.params.virtual.enabled
                                        ? this.virtual.slides.length
                                        : this.slides.length,
                                a = this.pagination.$el,
                                r = this.params.loop
                                    ? Math.ceil(
                                          (s - 2 * this.loopedSlides) /
                                              this.params.slidesPerGroup
                                      )
                                    : this.snapGrid.length;
                            if (
                                (this.params.loop
                                    ? ((i = Math.ceil(
                                          (this.activeIndex -
                                              this.loopedSlides) /
                                              this.params.slidesPerGroup
                                      )) >
                                          s - 1 - 2 * this.loopedSlides &&
                                          (i -= s - 2 * this.loopedSlides),
                                      i > r - 1 && (i -= r),
                                      i < 0 &&
                                          'bullets' !==
                                              this.params.paginationType &&
                                          (i = r + i))
                                    : (i =
                                          void 0 !== this.snapIndex
                                              ? this.snapIndex
                                              : this.activeIndex || 0),
                                'bullets' === t.type &&
                                    this.pagination.bullets &&
                                    this.pagination.bullets.length > 0)
                            ) {
                                var o,
                                    l,
                                    d,
                                    h = this.pagination.bullets;
                                if (
                                    (t.dynamicBullets &&
                                        ((this.pagination.bulletSize = h
                                            .eq(0)
                                            [
                                                this.isHorizontal()
                                                    ? 'outerWidth'
                                                    : 'outerHeight'
                                            ](!0)),
                                        a.css(
                                            this.isHorizontal()
                                                ? 'width'
                                                : 'height',
                                            ''.concat(
                                                this.pagination.bulletSize *
                                                    (t.dynamicMainBullets + 4),
                                                'px'
                                            )
                                        ),
                                        t.dynamicMainBullets > 1 &&
                                            void 0 !== this.previousIndex &&
                                            ((this.pagination.dynamicBulletIndex +=
                                                i - this.previousIndex),
                                            this.pagination.dynamicBulletIndex >
                                            t.dynamicMainBullets - 1
                                                ? (this.pagination.dynamicBulletIndex =
                                                      t.dynamicMainBullets - 1)
                                                : this.pagination
                                                      .dynamicBulletIndex < 0 &&
                                                  (this.pagination.dynamicBulletIndex = 0)),
                                        (o =
                                            i -
                                            this.pagination.dynamicBulletIndex),
                                        (d =
                                            ((l =
                                                o +
                                                (Math.min(
                                                    h.length,
                                                    t.dynamicMainBullets
                                                ) -
                                                    1)) +
                                                o) /
                                            2)),
                                    h.removeClass(
                                        ''
                                            .concat(t.bulletActiveClass, ' ')
                                            .concat(
                                                t.bulletActiveClass,
                                                '-next '
                                            )
                                            .concat(
                                                t.bulletActiveClass,
                                                '-next-next '
                                            )
                                            .concat(
                                                t.bulletActiveClass,
                                                '-prev '
                                            )
                                            .concat(
                                                t.bulletActiveClass,
                                                '-prev-prev '
                                            )
                                            .concat(
                                                t.bulletActiveClass,
                                                '-main'
                                            )
                                    ),
                                    a.length > 1)
                                )
                                    h.each(function(e, s) {
                                        var a = n(s),
                                            r = a.index();
                                        r === i &&
                                            a.addClass(t.bulletActiveClass),
                                            t.dynamicBullets &&
                                                (r >= o &&
                                                    r <= l &&
                                                    a.addClass(
                                                        ''.concat(
                                                            t.bulletActiveClass,
                                                            '-main'
                                                        )
                                                    ),
                                                r === o &&
                                                    a
                                                        .prev()
                                                        .addClass(
                                                            ''.concat(
                                                                t.bulletActiveClass,
                                                                '-prev'
                                                            )
                                                        )
                                                        .prev()
                                                        .addClass(
                                                            ''.concat(
                                                                t.bulletActiveClass,
                                                                '-prev-prev'
                                                            )
                                                        ),
                                                r === l &&
                                                    a
                                                        .next()
                                                        .addClass(
                                                            ''.concat(
                                                                t.bulletActiveClass,
                                                                '-next'
                                                            )
                                                        )
                                                        .next()
                                                        .addClass(
                                                            ''.concat(
                                                                t.bulletActiveClass,
                                                                '-next-next'
                                                            )
                                                        ));
                                    });
                                else if (
                                    (h.eq(i).addClass(t.bulletActiveClass),
                                    t.dynamicBullets)
                                ) {
                                    for (
                                        var c = h.eq(o), u = h.eq(l), p = o;
                                        p <= l;
                                        p += 1
                                    )
                                        h.eq(p).addClass(
                                            ''.concat(
                                                t.bulletActiveClass,
                                                '-main'
                                            )
                                        );
                                    c
                                        .prev()
                                        .addClass(
                                            ''.concat(
                                                t.bulletActiveClass,
                                                '-prev'
                                            )
                                        )
                                        .prev()
                                        .addClass(
                                            ''.concat(
                                                t.bulletActiveClass,
                                                '-prev-prev'
                                            )
                                        ),
                                        u
                                            .next()
                                            .addClass(
                                                ''.concat(
                                                    t.bulletActiveClass,
                                                    '-next'
                                                )
                                            )
                                            .next()
                                            .addClass(
                                                ''.concat(
                                                    t.bulletActiveClass,
                                                    '-next-next'
                                                )
                                            );
                                }
                                if (t.dynamicBullets) {
                                    var v = Math.min(
                                            h.length,
                                            t.dynamicMainBullets + 4
                                        ),
                                        m =
                                            (this.pagination.bulletSize * v -
                                                this.pagination.bulletSize) /
                                                2 -
                                            d * this.pagination.bulletSize,
                                        f = e ? 'right' : 'left';
                                    h.css(
                                        this.isHorizontal() ? f : 'top',
                                        ''.concat(m, 'px')
                                    );
                                }
                            }
                            if (
                                ('fraction' === t.type &&
                                    (a
                                        .find('.'.concat(t.currentClass))
                                        .text(t.formatFractionCurrent(i + 1)),
                                    a
                                        .find('.'.concat(t.totalClass))
                                        .text(t.formatFractionTotal(r))),
                                'progressbar' === t.type)
                            ) {
                                var g;
                                g = t.progressbarOpposite
                                    ? this.isHorizontal()
                                        ? 'vertical'
                                        : 'horizontal'
                                    : this.isHorizontal()
                                    ? 'horizontal'
                                    : 'vertical';
                                var b = (i + 1) / r,
                                    w = 1,
                                    y = 1;
                                'horizontal' === g ? (w = b) : (y = b),
                                    a
                                        .find(
                                            '.'.concat(t.progressbarFillClass)
                                        )
                                        .transform(
                                            'translate3d(0,0,0) scaleX('
                                                .concat(w, ') scaleY(')
                                                .concat(y, ')')
                                        )
                                        .transition(this.params.speed);
                            }
                            'custom' === t.type && t.renderCustom
                                ? (a.html(t.renderCustom(this, i + 1, r)),
                                  this.emit('paginationRender', this, a[0]))
                                : this.emit('paginationUpdate', this, a[0]),
                                a[
                                    this.params.watchOverflow && this.isLocked
                                        ? 'addClass'
                                        : 'removeClass'
                                ](t.lockClass);
                        }
                    },
                    render: function() {
                        var e = this.params.pagination;
                        if (
                            e.el &&
                            this.pagination.el &&
                            this.pagination.$el &&
                            0 !== this.pagination.$el.length
                        ) {
                            var t = this.pagination.$el,
                                i = '';
                            if ('bullets' === e.type) {
                                for (
                                    var s = this.params.loop
                                            ? Math.ceil(
                                                  ((this.virtual &&
                                                  this.params.virtual.enabled
                                                      ? this.virtual.slides
                                                            .length
                                                      : this.slides.length) -
                                                      2 * this.loopedSlides) /
                                                      this.params.slidesPerGroup
                                              )
                                            : this.snapGrid.length,
                                        a = 0;
                                    a < s;
                                    a += 1
                                )
                                    i += e.renderBullet
                                        ? e.renderBullet.call(
                                              this,
                                              a,
                                              e.bulletClass
                                          )
                                        : '<'
                                              .concat(
                                                  e.bulletElement,
                                                  ' class="'
                                              )
                                              .concat(e.bulletClass, '"></')
                                              .concat(e.bulletElement, '>');
                                t.html(i),
                                    (this.pagination.bullets = t.find(
                                        '.'.concat(e.bulletClass)
                                    ));
                            }
                            'fraction' === e.type &&
                                ((i = e.renderFraction
                                    ? e.renderFraction.call(
                                          this,
                                          e.currentClass,
                                          e.totalClass
                                      )
                                    : '<span class="'.concat(
                                          e.currentClass,
                                          '"></span>'
                                      ) +
                                      ' / ' +
                                      '<span class="'.concat(
                                          e.totalClass,
                                          '"></span>'
                                      )),
                                t.html(i)),
                                'progressbar' === e.type &&
                                    ((i = e.renderProgressbar
                                        ? e.renderProgressbar.call(
                                              this,
                                              e.progressbarFillClass
                                          )
                                        : '<span class="'.concat(
                                              e.progressbarFillClass,
                                              '"></span>'
                                          )),
                                    t.html(i)),
                                'custom' !== e.type &&
                                    this.emit(
                                        'paginationRender',
                                        this.pagination.$el[0]
                                    );
                        }
                    },
                    init: function() {
                        var e = this,
                            t = e.params.pagination;
                        if (t.el) {
                            var i = n(t.el);
                            0 !== i.length &&
                                (e.params.uniqueNavElements &&
                                    'string' == typeof t.el &&
                                    i.length > 1 &&
                                    1 === e.$el.find(t.el).length &&
                                    (i = e.$el.find(t.el)),
                                'bullets' === t.type &&
                                    t.clickable &&
                                    i.addClass(t.clickableClass),
                                i.addClass(t.modifierClass + t.type),
                                'bullets' === t.type &&
                                    t.dynamicBullets &&
                                    (i.addClass(
                                        ''
                                            .concat(t.modifierClass)
                                            .concat(t.type, '-dynamic')
                                    ),
                                    (e.pagination.dynamicBulletIndex = 0),
                                    t.dynamicMainBullets < 1 &&
                                        (t.dynamicMainBullets = 1)),
                                'progressbar' === t.type &&
                                    t.progressbarOpposite &&
                                    i.addClass(t.progressbarOppositeClass),
                                t.clickable &&
                                    i.on(
                                        'click',
                                        '.'.concat(t.bulletClass),
                                        function(t) {
                                            t.preventDefault();
                                            var i =
                                                n(this).index() *
                                                e.params.slidesPerGroup;
                                            e.params.loop &&
                                                (i += e.loopedSlides),
                                                e.slideTo(i);
                                        }
                                    ),
                                u.extend(e.pagination, { $el: i, el: i[0] }));
                        }
                    },
                    destroy: function() {
                        var e = this.params.pagination;
                        if (
                            e.el &&
                            this.pagination.el &&
                            this.pagination.$el &&
                            0 !== this.pagination.$el.length
                        ) {
                            var t = this.pagination.$el;
                            t.removeClass(e.hiddenClass),
                                t.removeClass(e.modifierClass + e.type),
                                this.pagination.bullets &&
                                    this.pagination.bullets.removeClass(
                                        e.bulletActiveClass
                                    ),
                                e.clickable &&
                                    t.off('click', '.'.concat(e.bulletClass));
                        }
                    },
                },
                H = {
                    name: 'pagination',
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: 'span',
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: 'bullets',
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function(e) {
                                return e;
                            },
                            formatFractionTotal: function(e) {
                                return e;
                            },
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass:
                                'swiper-pagination-bullet-active',
                            modifierClass: 'swiper-pagination-',
                            currentClass: 'swiper-pagination-current',
                            totalClass: 'swiper-pagination-total',
                            hiddenClass: 'swiper-pagination-hidden',
                            progressbarFillClass:
                                'swiper-pagination-progressbar-fill',
                            progressbarOppositeClass:
                                'swiper-pagination-progressbar-opposite',
                            clickableClass: 'swiper-pagination-clickable',
                            lockClass: 'swiper-pagination-lock',
                        },
                    },
                    create: function() {
                        u.extend(this, {
                            pagination: {
                                init: G.init.bind(this),
                                render: G.render.bind(this),
                                update: G.update.bind(this),
                                destroy: G.destroy.bind(this),
                                dynamicBulletIndex: 0,
                            },
                        });
                    },
                    on: {
                        init: function() {
                            this.pagination.init(),
                                this.pagination.render(),
                                this.pagination.update();
                        },
                        activeIndexChange: function() {
                            this.params.loop
                                ? this.pagination.update()
                                : void 0 === this.snapIndex &&
                                  this.pagination.update();
                        },
                        snapIndexChange: function() {
                            this.params.loop || this.pagination.update();
                        },
                        slidesLengthChange: function() {
                            this.params.loop &&
                                (this.pagination.render(),
                                this.pagination.update());
                        },
                        snapGridLengthChange: function() {
                            this.params.loop ||
                                (this.pagination.render(),
                                this.pagination.update());
                        },
                        destroy: function() {
                            this.pagination.destroy();
                        },
                        click: function(e) {
                            if (
                                this.params.pagination.el &&
                                this.params.pagination.hideOnClick &&
                                this.pagination.$el.length > 0 &&
                                !n(e.target).hasClass(
                                    this.params.pagination.bulletClass
                                )
                            ) {
                                var t = this.pagination.$el.hasClass(
                                    this.params.pagination.hiddenClass
                                );
                                this.emit(
                                    !0 === t
                                        ? 'paginationShow'
                                        : 'paginationHide',
                                    this
                                ),
                                    this.pagination.$el.toggleClass(
                                        this.params.pagination.hiddenClass
                                    );
                            }
                        },
                    },
                },
                V = {
                    setTranslate: function() {
                        if (this.params.scrollbar.el && this.scrollbar.el) {
                            var e = this.scrollbar,
                                t = this.rtlTranslate,
                                i = this.progress,
                                s = e.dragSize,
                                a = e.trackSize,
                                r = e.$dragEl,
                                n = e.$el,
                                o = this.params.scrollbar,
                                l = s,
                                d = (a - s) * i;
                            t
                                ? (d = -d) > 0
                                    ? ((l = s - d), (d = 0))
                                    : -d + s > a && (l = a + d)
                                : d < 0
                                ? ((l = s + d), (d = 0))
                                : d + s > a && (l = a - d),
                                this.isHorizontal()
                                    ? (r.transform(
                                          p.transforms3d
                                              ? 'translate3d('.concat(
                                                    d,
                                                    'px, 0, 0)'
                                                )
                                              : 'translateX('.concat(d, 'px)')
                                      ),
                                      (r[0].style.width = ''.concat(l, 'px')))
                                    : (r.transform(
                                          p.transforms3d
                                              ? 'translate3d(0px, '.concat(
                                                    d,
                                                    'px, 0)'
                                                )
                                              : 'translateY('.concat(d, 'px)')
                                      ),
                                      (r[0].style.height = ''.concat(l, 'px'))),
                                o.hide &&
                                    (clearTimeout(this.scrollbar.timeout),
                                    (n[0].style.opacity = 1),
                                    (this.scrollbar.timeout = setTimeout(
                                        function() {
                                            (n[0].style.opacity = 0),
                                                n.transition(400);
                                        },
                                        1e3
                                    )));
                        }
                    },
                    setTransition: function(e) {
                        this.params.scrollbar.el &&
                            this.scrollbar.el &&
                            this.scrollbar.$dragEl.transition(e);
                    },
                    updateSize: function() {
                        if (this.params.scrollbar.el && this.scrollbar.el) {
                            var e = this.scrollbar,
                                t = e.$dragEl,
                                i = e.$el;
                            (t[0].style.width = ''), (t[0].style.height = '');
                            var s,
                                a = this.isHorizontal()
                                    ? i[0].offsetWidth
                                    : i[0].offsetHeight,
                                r = this.size / this.virtualSize,
                                n = r * (a / this.size);
                            (s =
                                'auto' === this.params.scrollbar.dragSize
                                    ? a * r
                                    : parseInt(
                                          this.params.scrollbar.dragSize,
                                          10
                                      )),
                                this.isHorizontal()
                                    ? (t[0].style.width = ''.concat(s, 'px'))
                                    : (t[0].style.height = ''.concat(s, 'px')),
                                (i[0].style.display = r >= 1 ? 'none' : ''),
                                this.params.scrollbar.hide &&
                                    (i[0].style.opacity = 0),
                                u.extend(e, {
                                    trackSize: a,
                                    divider: r,
                                    moveDivider: n,
                                    dragSize: s,
                                }),
                                e.$el[
                                    this.params.watchOverflow && this.isLocked
                                        ? 'addClass'
                                        : 'removeClass'
                                ](this.params.scrollbar.lockClass);
                        }
                    },
                    getPointerPosition: function(e) {
                        return this.isHorizontal()
                            ? 'touchstart' === e.type || 'touchmove' === e.type
                                ? e.targetTouches[0].pageX
                                : e.pageX || e.clientX
                            : 'touchstart' === e.type || 'touchmove' === e.type
                            ? e.targetTouches[0].pageY
                            : e.pageY || e.clientY;
                    },
                    setDragPosition: function(e) {
                        var t,
                            i = this.scrollbar,
                            s = this.rtlTranslate,
                            a = i.$el,
                            r = i.dragSize,
                            n = i.trackSize,
                            o = i.dragStartPos;
                        (t =
                            (i.getPointerPosition(e) -
                                a.offset()[
                                    this.isHorizontal() ? 'left' : 'top'
                                ] -
                                (null !== o ? o : r / 2)) /
                            (n - r)),
                            (t = Math.max(Math.min(t, 1), 0)),
                            s && (t = 1 - t);
                        var l =
                            this.minTranslate() +
                            (this.maxTranslate() - this.minTranslate()) * t;
                        this.updateProgress(l),
                            this.setTranslate(l),
                            this.updateActiveIndex(),
                            this.updateSlidesClasses();
                    },
                    onDragStart: function(e) {
                        var t = this.params.scrollbar,
                            i = this.scrollbar,
                            s = this.$wrapperEl,
                            a = i.$el,
                            r = i.$dragEl;
                        (this.scrollbar.isTouched = !0),
                            (this.scrollbar.dragStartPos =
                                e.target === r[0] || e.target === r
                                    ? i.getPointerPosition(e) -
                                      e.target.getBoundingClientRect()[
                                          this.isHorizontal() ? 'left' : 'top'
                                      ]
                                    : null),
                            e.preventDefault(),
                            e.stopPropagation(),
                            s.transition(100),
                            r.transition(100),
                            i.setDragPosition(e),
                            clearTimeout(this.scrollbar.dragTimeout),
                            a.transition(0),
                            t.hide && a.css('opacity', 1),
                            this.emit('scrollbarDragStart', e);
                    },
                    onDragMove: function(e) {
                        var t = this.scrollbar,
                            i = this.$wrapperEl,
                            s = t.$el,
                            a = t.$dragEl;
                        this.scrollbar.isTouched &&
                            (e.preventDefault
                                ? e.preventDefault()
                                : (e.returnValue = !1),
                            t.setDragPosition(e),
                            i.transition(0),
                            s.transition(0),
                            a.transition(0),
                            this.emit('scrollbarDragMove', e));
                    },
                    onDragEnd: function(e) {
                        var t = this.params.scrollbar,
                            i = this.scrollbar.$el;
                        this.scrollbar.isTouched &&
                            ((this.scrollbar.isTouched = !1),
                            t.hide &&
                                (clearTimeout(this.scrollbar.dragTimeout),
                                (this.scrollbar.dragTimeout = u.nextTick(
                                    function() {
                                        i.css('opacity', 0), i.transition(400);
                                    },
                                    1e3
                                ))),
                            this.emit('scrollbarDragEnd', e),
                            t.snapOnRelease && this.slideToClosest());
                    },
                    enableDraggable: function() {
                        if (this.params.scrollbar.el) {
                            var e = this.scrollbar,
                                t = this.touchEventsTouch,
                                i = this.touchEventsDesktop,
                                a = this.params,
                                r = e.$el[0],
                                n = !(
                                    !p.passiveListener || !a.passiveListeners
                                ) && { passive: !1, capture: !1 },
                                o = !(
                                    !p.passiveListener || !a.passiveListeners
                                ) && { passive: !0, capture: !1 };
                            p.touch
                                ? (r.addEventListener(
                                      t.start,
                                      this.scrollbar.onDragStart,
                                      n
                                  ),
                                  r.addEventListener(
                                      t.move,
                                      this.scrollbar.onDragMove,
                                      n
                                  ),
                                  r.addEventListener(
                                      t.end,
                                      this.scrollbar.onDragEnd,
                                      o
                                  ))
                                : (r.addEventListener(
                                      i.start,
                                      this.scrollbar.onDragStart,
                                      n
                                  ),
                                  s.addEventListener(
                                      i.move,
                                      this.scrollbar.onDragMove,
                                      n
                                  ),
                                  s.addEventListener(
                                      i.end,
                                      this.scrollbar.onDragEnd,
                                      o
                                  ));
                        }
                    },
                    disableDraggable: function() {
                        if (this.params.scrollbar.el) {
                            var e = this.scrollbar,
                                t = this.touchEventsTouch,
                                i = this.touchEventsDesktop,
                                a = this.params,
                                r = e.$el[0],
                                n = !(
                                    !p.passiveListener || !a.passiveListeners
                                ) && { passive: !1, capture: !1 },
                                o = !(
                                    !p.passiveListener || !a.passiveListeners
                                ) && { passive: !0, capture: !1 };
                            p.touch
                                ? (r.removeEventListener(
                                      t.start,
                                      this.scrollbar.onDragStart,
                                      n
                                  ),
                                  r.removeEventListener(
                                      t.move,
                                      this.scrollbar.onDragMove,
                                      n
                                  ),
                                  r.removeEventListener(
                                      t.end,
                                      this.scrollbar.onDragEnd,
                                      o
                                  ))
                                : (r.removeEventListener(
                                      i.start,
                                      this.scrollbar.onDragStart,
                                      n
                                  ),
                                  s.removeEventListener(
                                      i.move,
                                      this.scrollbar.onDragMove,
                                      n
                                  ),
                                  s.removeEventListener(
                                      i.end,
                                      this.scrollbar.onDragEnd,
                                      o
                                  ));
                        }
                    },
                    init: function() {
                        if (this.params.scrollbar.el) {
                            var e = this.scrollbar,
                                t = this.$el,
                                i = this.params.scrollbar,
                                s = n(i.el);
                            this.params.uniqueNavElements &&
                                'string' == typeof i.el &&
                                s.length > 1 &&
                                1 === t.find(i.el).length &&
                                (s = t.find(i.el));
                            var a = s.find(
                                '.'.concat(this.params.scrollbar.dragClass)
                            );
                            0 === a.length &&
                                ((a = n(
                                    '<div class="'.concat(
                                        this.params.scrollbar.dragClass,
                                        '"></div>'
                                    )
                                )),
                                s.append(a)),
                                u.extend(e, {
                                    $el: s,
                                    el: s[0],
                                    $dragEl: a,
                                    dragEl: a[0],
                                }),
                                i.draggable && e.enableDraggable();
                        }
                    },
                    destroy: function() {
                        this.scrollbar.disableDraggable();
                    },
                },
                F = {
                    name: 'scrollbar',
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: 'auto',
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: 'swiper-scrollbar-lock',
                            dragClass: 'swiper-scrollbar-drag',
                        },
                    },
                    create: function() {
                        u.extend(this, {
                            scrollbar: {
                                init: V.init.bind(this),
                                destroy: V.destroy.bind(this),
                                updateSize: V.updateSize.bind(this),
                                setTranslate: V.setTranslate.bind(this),
                                setTransition: V.setTransition.bind(this),
                                enableDraggable: V.enableDraggable.bind(this),
                                disableDraggable: V.disableDraggable.bind(this),
                                setDragPosition: V.setDragPosition.bind(this),
                                getPointerPosition: V.getPointerPosition.bind(
                                    this
                                ),
                                onDragStart: V.onDragStart.bind(this),
                                onDragMove: V.onDragMove.bind(this),
                                onDragEnd: V.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null,
                            },
                        });
                    },
                    on: {
                        init: function() {
                            this.scrollbar.init(),
                                this.scrollbar.updateSize(),
                                this.scrollbar.setTranslate();
                        },
                        update: function() {
                            this.scrollbar.updateSize();
                        },
                        resize: function() {
                            this.scrollbar.updateSize();
                        },
                        observerUpdate: function() {
                            this.scrollbar.updateSize();
                        },
                        setTranslate: function() {
                            this.scrollbar.setTranslate();
                        },
                        setTransition: function(e) {
                            this.scrollbar.setTransition(e);
                        },
                        destroy: function() {
                            this.scrollbar.destroy();
                        },
                    },
                },
                N = {
                    getDistanceBetweenTouches: function(e) {
                        return e.targetTouches.length < 2
                            ? 1
                            : Math.sqrt(
                                  Math.pow(
                                      e.targetTouches[1].pageX -
                                          e.targetTouches[0].pageX,
                                      2
                                  ) +
                                      Math.pow(
                                          e.targetTouches[1].pageY -
                                              e.targetTouches[0].pageY,
                                          2
                                      )
                              );
                    },
                    onGestureStart: function(e) {
                        var t = this.params.zoom,
                            i = this.zoom,
                            s = i.gesture;
                        if (
                            ((i.fakeGestureTouched = !1),
                            (i.fakeGestureMoved = !1),
                            !p.gestures)
                        ) {
                            if (
                                'touchstart' !== e.type ||
                                ('touchstart' === e.type &&
                                    e.targetTouches.length < 2)
                            )
                                return;
                            (i.fakeGestureTouched = !0),
                                (s.scaleStart = N.getDistanceBetweenTouches(e));
                        }
                        (s.$slideEl && s.$slideEl.length) ||
                        ((s.$slideEl = n(e.target).closest('.swiper-slide')),
                        0 === s.$slideEl.length &&
                            (s.$slideEl = this.slides.eq(this.activeIndex)),
                        (s.$imageEl = s.$slideEl.find('img, svg, canvas')),
                        (s.$imageWrapEl = s.$imageEl.parent(
                            '.'.concat(t.containerClass)
                        )),
                        (s.maxRatio =
                            s.$imageWrapEl.attr('data-swiper-zoom') ||
                            t.maxRatio),
                        0 !== s.$imageWrapEl.length)
                            ? (s.$imageEl.transition(0),
                              (this.zoom.isScaling = !0))
                            : (s.$imageEl = void 0);
                    },
                    onGestureChange: function(e) {
                        var t = this.params.zoom,
                            i = this.zoom,
                            s = i.gesture;
                        if (!p.gestures) {
                            if (
                                'touchmove' !== e.type ||
                                ('touchmove' === e.type &&
                                    e.targetTouches.length < 2)
                            )
                                return;
                            (i.fakeGestureMoved = !0),
                                (s.scaleMove = N.getDistanceBetweenTouches(e));
                        }
                        s.$imageEl &&
                            0 !== s.$imageEl.length &&
                            ((i.scale = p.gestures
                                ? e.scale * i.currentScale
                                : (s.scaleMove / s.scaleStart) *
                                  i.currentScale),
                            i.scale > s.maxRatio &&
                                (i.scale =
                                    s.maxRatio -
                                    1 +
                                    Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                            i.scale < t.minRatio &&
                                (i.scale =
                                    t.minRatio +
                                    1 -
                                    Math.pow(t.minRatio - i.scale + 1, 0.5)),
                            s.$imageEl.transform(
                                'translate3d(0,0,0) scale('.concat(i.scale, ')')
                            ));
                    },
                    onGestureEnd: function(e) {
                        var t = this.params.zoom,
                            i = this.zoom,
                            s = i.gesture;
                        if (!p.gestures) {
                            if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                                return;
                            if (
                                'touchend' !== e.type ||
                                ('touchend' === e.type &&
                                    e.changedTouches.length < 2 &&
                                    !E.android)
                            )
                                return;
                            (i.fakeGestureTouched = !1),
                                (i.fakeGestureMoved = !1);
                        }
                        s.$imageEl &&
                            0 !== s.$imageEl.length &&
                            ((i.scale = Math.max(
                                Math.min(i.scale, s.maxRatio),
                                t.minRatio
                            )),
                            s.$imageEl
                                .transition(this.params.speed)
                                .transform(
                                    'translate3d(0,0,0) scale('.concat(
                                        i.scale,
                                        ')'
                                    )
                                ),
                            (i.currentScale = i.scale),
                            (i.isScaling = !1),
                            1 === i.scale && (s.$slideEl = void 0));
                    },
                    onTouchStart: function(e) {
                        var t = this.zoom,
                            i = t.gesture,
                            s = t.image;
                        i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            (s.isTouched ||
                                (E.android && e.preventDefault(),
                                (s.isTouched = !0),
                                (s.touchesStart.x =
                                    'touchstart' === e.type
                                        ? e.targetTouches[0].pageX
                                        : e.pageX),
                                (s.touchesStart.y =
                                    'touchstart' === e.type
                                        ? e.targetTouches[0].pageY
                                        : e.pageY)));
                    },
                    onTouchMove: function(e) {
                        var t = this.zoom,
                            i = t.gesture,
                            s = t.image,
                            a = t.velocity;
                        if (
                            i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            ((this.allowClick = !1), s.isTouched && i.$slideEl)
                        ) {
                            s.isMoved ||
                                ((s.width = i.$imageEl[0].offsetWidth),
                                (s.height = i.$imageEl[0].offsetHeight),
                                (s.startX =
                                    u.getTranslate(i.$imageWrapEl[0], 'x') ||
                                    0),
                                (s.startY =
                                    u.getTranslate(i.$imageWrapEl[0], 'y') ||
                                    0),
                                (i.slideWidth = i.$slideEl[0].offsetWidth),
                                (i.slideHeight = i.$slideEl[0].offsetHeight),
                                i.$imageWrapEl.transition(0),
                                this.rtl &&
                                    ((s.startX = -s.startX),
                                    (s.startY = -s.startY)));
                            var r = s.width * t.scale,
                                n = s.height * t.scale;
                            if (!(r < i.slideWidth && n < i.slideHeight)) {
                                if (
                                    ((s.minX = Math.min(
                                        i.slideWidth / 2 - r / 2,
                                        0
                                    )),
                                    (s.maxX = -s.minX),
                                    (s.minY = Math.min(
                                        i.slideHeight / 2 - n / 2,
                                        0
                                    )),
                                    (s.maxY = -s.minY),
                                    (s.touchesCurrent.x =
                                        'touchmove' === e.type
                                            ? e.targetTouches[0].pageX
                                            : e.pageX),
                                    (s.touchesCurrent.y =
                                        'touchmove' === e.type
                                            ? e.targetTouches[0].pageY
                                            : e.pageY),
                                    !s.isMoved && !t.isScaling)
                                ) {
                                    if (
                                        this.isHorizontal() &&
                                        ((Math.floor(s.minX) ===
                                            Math.floor(s.startX) &&
                                            s.touchesCurrent.x <
                                                s.touchesStart.x) ||
                                            (Math.floor(s.maxX) ===
                                                Math.floor(s.startX) &&
                                                s.touchesCurrent.x >
                                                    s.touchesStart.x))
                                    )
                                        return void (s.isTouched = !1);
                                    if (
                                        !this.isHorizontal() &&
                                        ((Math.floor(s.minY) ===
                                            Math.floor(s.startY) &&
                                            s.touchesCurrent.y <
                                                s.touchesStart.y) ||
                                            (Math.floor(s.maxY) ===
                                                Math.floor(s.startY) &&
                                                s.touchesCurrent.y >
                                                    s.touchesStart.y))
                                    )
                                        return void (s.isTouched = !1);
                                }
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    (s.isMoved = !0),
                                    (s.currentX =
                                        s.touchesCurrent.x -
                                        s.touchesStart.x +
                                        s.startX),
                                    (s.currentY =
                                        s.touchesCurrent.y -
                                        s.touchesStart.y +
                                        s.startY),
                                    s.currentX < s.minX &&
                                        (s.currentX =
                                            s.minX +
                                            1 -
                                            Math.pow(
                                                s.minX - s.currentX + 1,
                                                0.8
                                            )),
                                    s.currentX > s.maxX &&
                                        (s.currentX =
                                            s.maxX -
                                            1 +
                                            Math.pow(
                                                s.currentX - s.maxX + 1,
                                                0.8
                                            )),
                                    s.currentY < s.minY &&
                                        (s.currentY =
                                            s.minY +
                                            1 -
                                            Math.pow(
                                                s.minY - s.currentY + 1,
                                                0.8
                                            )),
                                    s.currentY > s.maxY &&
                                        (s.currentY =
                                            s.maxY -
                                            1 +
                                            Math.pow(
                                                s.currentY - s.maxY + 1,
                                                0.8
                                            )),
                                    a.prevPositionX ||
                                        (a.prevPositionX = s.touchesCurrent.x),
                                    a.prevPositionY ||
                                        (a.prevPositionY = s.touchesCurrent.y),
                                    a.prevTime || (a.prevTime = Date.now()),
                                    (a.x =
                                        (s.touchesCurrent.x - a.prevPositionX) /
                                        (Date.now() - a.prevTime) /
                                        2),
                                    (a.y =
                                        (s.touchesCurrent.y - a.prevPositionY) /
                                        (Date.now() - a.prevTime) /
                                        2),
                                    Math.abs(
                                        s.touchesCurrent.x - a.prevPositionX
                                    ) < 2 && (a.x = 0),
                                    Math.abs(
                                        s.touchesCurrent.y - a.prevPositionY
                                    ) < 2 && (a.y = 0),
                                    (a.prevPositionX = s.touchesCurrent.x),
                                    (a.prevPositionY = s.touchesCurrent.y),
                                    (a.prevTime = Date.now()),
                                    i.$imageWrapEl.transform(
                                        'translate3d('
                                            .concat(s.currentX, 'px, ')
                                            .concat(s.currentY, 'px,0)')
                                    );
                            }
                        }
                    },
                    onTouchEnd: function() {
                        var e = this.zoom,
                            t = e.gesture,
                            i = e.image,
                            s = e.velocity;
                        if (t.$imageEl && 0 !== t.$imageEl.length) {
                            if (!i.isTouched || !i.isMoved)
                                return (
                                    (i.isTouched = !1), void (i.isMoved = !1)
                                );
                            (i.isTouched = !1), (i.isMoved = !1);
                            var a = 300,
                                r = 300,
                                n = i.currentX + s.x * a,
                                o = i.currentY + s.y * r;
                            0 !== s.x && (a = Math.abs((n - i.currentX) / s.x)),
                                0 !== s.y &&
                                    (r = Math.abs((o - i.currentY) / s.y));
                            var l = Math.max(a, r);
                            (i.currentX = n), (i.currentY = o);
                            var d = i.height * e.scale;
                            (i.minX = Math.min(
                                t.slideWidth / 2 - (i.width * e.scale) / 2,
                                0
                            )),
                                (i.maxX = -i.minX),
                                (i.minY = Math.min(
                                    t.slideHeight / 2 - d / 2,
                                    0
                                )),
                                (i.maxY = -i.minY),
                                (i.currentX = Math.max(
                                    Math.min(i.currentX, i.maxX),
                                    i.minX
                                )),
                                (i.currentY = Math.max(
                                    Math.min(i.currentY, i.maxY),
                                    i.minY
                                )),
                                t.$imageWrapEl
                                    .transition(l)
                                    .transform(
                                        'translate3d('
                                            .concat(i.currentX, 'px, ')
                                            .concat(i.currentY, 'px,0)')
                                    );
                        }
                    },
                    onTransitionEnd: function() {
                        var e = this.zoom,
                            t = e.gesture;
                        t.$slideEl &&
                            this.previousIndex !== this.activeIndex &&
                            (t.$imageEl.transform(
                                'translate3d(0,0,0) scale(1)'
                            ),
                            t.$imageWrapEl.transform('translate3d(0,0,0)'),
                            (e.scale = 1),
                            (e.currentScale = 1),
                            (t.$slideEl = void 0),
                            (t.$imageEl = void 0),
                            (t.$imageWrapEl = void 0));
                    },
                    toggle: function(e) {
                        var t = this.zoom;
                        t.scale && 1 !== t.scale ? t.out() : t.in(e);
                    },
                    in: function(e) {
                        var t,
                            i,
                            s,
                            a,
                            r,
                            o,
                            l,
                            d,
                            h,
                            c,
                            u,
                            p,
                            v,
                            m,
                            f,
                            g,
                            b = this.zoom,
                            w = this.params.zoom,
                            y = b.gesture,
                            T = b.image;
                        (y.$slideEl ||
                            ((y.$slideEl = this.clickedSlide
                                ? n(this.clickedSlide)
                                : this.slides.eq(this.activeIndex)),
                            (y.$imageEl = y.$slideEl.find('img, svg, canvas')),
                            (y.$imageWrapEl = y.$imageEl.parent(
                                '.'.concat(w.containerClass)
                            ))),
                        y.$imageEl && 0 !== y.$imageEl.length) &&
                            (y.$slideEl.addClass(''.concat(w.zoomedSlideClass)),
                            void 0 === T.touchesStart.x && e
                                ? ((t =
                                      'touchend' === e.type
                                          ? e.changedTouches[0].pageX
                                          : e.pageX),
                                  (i =
                                      'touchend' === e.type
                                          ? e.changedTouches[0].pageY
                                          : e.pageY))
                                : ((t = T.touchesStart.x),
                                  (i = T.touchesStart.y)),
                            (b.scale =
                                y.$imageWrapEl.attr('data-swiper-zoom') ||
                                w.maxRatio),
                            (b.currentScale =
                                y.$imageWrapEl.attr('data-swiper-zoom') ||
                                w.maxRatio),
                            e
                                ? ((f = y.$slideEl[0].offsetWidth),
                                  (g = y.$slideEl[0].offsetHeight),
                                  (s = y.$slideEl.offset().left + f / 2 - t),
                                  (a = y.$slideEl.offset().top + g / 2 - i),
                                  (l = y.$imageEl[0].offsetWidth),
                                  (d = y.$imageEl[0].offsetHeight),
                                  (h = l * b.scale),
                                  (c = d * b.scale),
                                  (v = -(u = Math.min(f / 2 - h / 2, 0))),
                                  (m = -(p = Math.min(g / 2 - c / 2, 0))),
                                  (r = s * b.scale) < u && (r = u),
                                  r > v && (r = v),
                                  (o = a * b.scale) < p && (o = p),
                                  o > m && (o = m))
                                : ((r = 0), (o = 0)),
                            y.$imageWrapEl
                                .transition(300)
                                .transform(
                                    'translate3d('
                                        .concat(r, 'px, ')
                                        .concat(o, 'px,0)')
                                ),
                            y.$imageEl
                                .transition(300)
                                .transform(
                                    'translate3d(0,0,0) scale('.concat(
                                        b.scale,
                                        ')'
                                    )
                                ));
                    },
                    out: function() {
                        var e = this.zoom,
                            t = this.params.zoom,
                            i = e.gesture;
                        i.$slideEl ||
                            ((i.$slideEl = this.clickedSlide
                                ? n(this.clickedSlide)
                                : this.slides.eq(this.activeIndex)),
                            (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
                            (i.$imageWrapEl = i.$imageEl.parent(
                                '.'.concat(t.containerClass)
                            ))),
                            i.$imageEl &&
                                0 !== i.$imageEl.length &&
                                ((e.scale = 1),
                                (e.currentScale = 1),
                                i.$imageWrapEl
                                    .transition(300)
                                    .transform('translate3d(0,0,0)'),
                                i.$imageEl
                                    .transition(300)
                                    .transform('translate3d(0,0,0) scale(1)'),
                                i.$slideEl.removeClass(
                                    ''.concat(t.zoomedSlideClass)
                                ),
                                (i.$slideEl = void 0));
                    },
                    enable: function() {
                        var e = this.zoom;
                        if (!e.enabled) {
                            e.enabled = !0;
                            var t = !(
                                'touchstart' !== this.touchEvents.start ||
                                !p.passiveListener ||
                                !this.params.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            p.gestures
                                ? (this.$wrapperEl.on(
                                      'gesturestart',
                                      '.swiper-slide',
                                      e.onGestureStart,
                                      t
                                  ),
                                  this.$wrapperEl.on(
                                      'gesturechange',
                                      '.swiper-slide',
                                      e.onGestureChange,
                                      t
                                  ),
                                  this.$wrapperEl.on(
                                      'gestureend',
                                      '.swiper-slide',
                                      e.onGestureEnd,
                                      t
                                  ))
                                : 'touchstart' === this.touchEvents.start &&
                                  (this.$wrapperEl.on(
                                      this.touchEvents.start,
                                      '.swiper-slide',
                                      e.onGestureStart,
                                      t
                                  ),
                                  this.$wrapperEl.on(
                                      this.touchEvents.move,
                                      '.swiper-slide',
                                      e.onGestureChange,
                                      t
                                  ),
                                  this.$wrapperEl.on(
                                      this.touchEvents.end,
                                      '.swiper-slide',
                                      e.onGestureEnd,
                                      t
                                  )),
                                this.$wrapperEl.on(
                                    this.touchEvents.move,
                                    '.'.concat(this.params.zoom.containerClass),
                                    e.onTouchMove
                                );
                        }
                    },
                    disable: function() {
                        var e = this.zoom;
                        if (e.enabled) {
                            this.zoom.enabled = !1;
                            var t = !(
                                'touchstart' !== this.touchEvents.start ||
                                !p.passiveListener ||
                                !this.params.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            p.gestures
                                ? (this.$wrapperEl.off(
                                      'gesturestart',
                                      '.swiper-slide',
                                      e.onGestureStart,
                                      t
                                  ),
                                  this.$wrapperEl.off(
                                      'gesturechange',
                                      '.swiper-slide',
                                      e.onGestureChange,
                                      t
                                  ),
                                  this.$wrapperEl.off(
                                      'gestureend',
                                      '.swiper-slide',
                                      e.onGestureEnd,
                                      t
                                  ))
                                : 'touchstart' === this.touchEvents.start &&
                                  (this.$wrapperEl.off(
                                      this.touchEvents.start,
                                      '.swiper-slide',
                                      e.onGestureStart,
                                      t
                                  ),
                                  this.$wrapperEl.off(
                                      this.touchEvents.move,
                                      '.swiper-slide',
                                      e.onGestureChange,
                                      t
                                  ),
                                  this.$wrapperEl.off(
                                      this.touchEvents.end,
                                      '.swiper-slide',
                                      e.onGestureEnd,
                                      t
                                  )),
                                this.$wrapperEl.off(
                                    this.touchEvents.move,
                                    '.'.concat(this.params.zoom.containerClass),
                                    e.onTouchMove
                                );
                        }
                    },
                },
                R = {
                    name: 'zoom',
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: 'swiper-zoom-container',
                            zoomedSlideClass: 'swiper-slide-zoomed',
                        },
                    },
                    create: function() {
                        var e = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3,
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0,
                                },
                            };
                        'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
                            .split(' ')
                            .forEach(function(i) {
                                t[i] = N[i].bind(e);
                            }),
                            u.extend(e, { zoom: t });
                        var i = 1;
                        Object.defineProperty(e.zoom, 'scale', {
                            get: function() {
                                return i;
                            },
                            set: function(t) {
                                i !== t &&
                                    e.emit(
                                        'zoomChange',
                                        t,
                                        e.zoom.gesture.$imageEl
                                            ? e.zoom.gesture.$imageEl[0]
                                            : void 0,
                                        e.zoom.gesture.$slideEl
                                            ? e.zoom.gesture.$slideEl[0]
                                            : void 0
                                    ),
                                    (i = t);
                            },
                        });
                    },
                    on: {
                        init: function() {
                            this.params.zoom.enabled && this.zoom.enable();
                        },
                        destroy: function() {
                            this.zoom.disable();
                        },
                        touchStart: function(e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e);
                        },
                        touchEnd: function(e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e);
                        },
                        doubleTap: function(e) {
                            this.params.zoom.enabled &&
                                this.zoom.enabled &&
                                this.params.zoom.toggle &&
                                this.zoom.toggle(e);
                        },
                        transitionEnd: function() {
                            this.zoom.enabled &&
                                this.params.zoom.enabled &&
                                this.zoom.onTransitionEnd();
                        },
                    },
                },
                W = {
                    run: function() {
                        var e = this,
                            t = e.slides.eq(e.activeIndex),
                            i = e.params.autoplay.delay;
                        t.attr('data-swiper-autoplay') &&
                            (i =
                                t.attr('data-swiper-autoplay') ||
                                e.params.autoplay.delay),
                            clearTimeout(e.autoplay.timeout),
                            (e.autoplay.timeout = u.nextTick(function() {
                                e.params.autoplay.reverseDirection
                                    ? e.params.loop
                                        ? (e.loopFix(),
                                          e.slidePrev(e.params.speed, !0, !0),
                                          e.emit('autoplay'))
                                        : e.isBeginning
                                        ? e.params.autoplay.stopOnLastSlide
                                            ? e.autoplay.stop()
                                            : (e.slideTo(
                                                  e.slides.length - 1,
                                                  e.params.speed,
                                                  !0,
                                                  !0
                                              ),
                                              e.emit('autoplay'))
                                        : (e.slidePrev(e.params.speed, !0, !0),
                                          e.emit('autoplay'))
                                    : e.params.loop
                                    ? (e.loopFix(),
                                      e.slideNext(e.params.speed, !0, !0),
                                      e.emit('autoplay'))
                                    : e.isEnd
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(0, e.params.speed, !0, !0),
                                          e.emit('autoplay'))
                                    : (e.slideNext(e.params.speed, !0, !0),
                                      e.emit('autoplay'));
                            }, i));
                    },
                    start: function() {
                        return (
                            void 0 === this.autoplay.timeout &&
                            !this.autoplay.running &&
                            ((this.autoplay.running = !0),
                            this.emit('autoplayStart'),
                            this.autoplay.run(),
                            !0)
                        );
                    },
                    stop: function() {
                        return (
                            !!this.autoplay.running &&
                            void 0 !== this.autoplay.timeout &&
                            (this.autoplay.timeout &&
                                (clearTimeout(this.autoplay.timeout),
                                (this.autoplay.timeout = void 0)),
                            (this.autoplay.running = !1),
                            this.emit('autoplayStop'),
                            !0)
                        );
                    },
                    pause: function(e) {
                        this.autoplay.running &&
                            (this.autoplay.paused ||
                                (this.autoplay.timeout &&
                                    clearTimeout(this.autoplay.timeout),
                                (this.autoplay.paused = !0),
                                0 !== e &&
                                this.params.autoplay.waitForTransition
                                    ? (this.$wrapperEl[0].addEventListener(
                                          'transitionend',
                                          this.autoplay.onTransitionEnd
                                      ),
                                      this.$wrapperEl[0].addEventListener(
                                          'webkitTransitionEnd',
                                          this.autoplay.onTransitionEnd
                                      ))
                                    : ((this.autoplay.paused = !1),
                                      this.autoplay.run())));
                    },
                },
                _ = {
                    name: 'autoplay',
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1,
                        },
                    },
                    create: function() {
                        var e = this;
                        u.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: W.run.bind(e),
                                start: W.start.bind(e),
                                stop: W.stop.bind(e),
                                pause: W.pause.bind(e),
                                onTransitionEnd: function(t) {
                                    e &&
                                        !e.destroyed &&
                                        e.$wrapperEl &&
                                        t.target === this &&
                                        (e.$wrapperEl[0].removeEventListener(
                                            'transitionend',
                                            e.autoplay.onTransitionEnd
                                        ),
                                        e.$wrapperEl[0].removeEventListener(
                                            'webkitTransitionEnd',
                                            e.autoplay.onTransitionEnd
                                        ),
                                        (e.autoplay.paused = !1),
                                        e.autoplay.running
                                            ? e.autoplay.run()
                                            : e.autoplay.stop());
                                },
                            },
                        });
                    },
                    on: {
                        init: function() {
                            this.params.autoplay.enabled &&
                                this.autoplay.start();
                        },
                        beforeTransitionStart: function(e, t) {
                            this.autoplay.running &&
                                (t || !this.params.autoplay.disableOnInteraction
                                    ? this.autoplay.pause(e)
                                    : this.autoplay.stop());
                        },
                        sliderFirstMove: function() {
                            this.autoplay.running &&
                                (this.params.autoplay.disableOnInteraction
                                    ? this.autoplay.stop()
                                    : this.autoplay.pause());
                        },
                        destroy: function() {
                            this.autoplay.running && this.autoplay.stop();
                        },
                    },
                },
                j = [D, O, I, A, X];
            void 0 === $.use &&
                (($.use = $.Class.use),
                ($.installModule = $.Class.installModule)),
                $.use(j),
                $.use([H, F, _, R]);
        },
    },
]);
