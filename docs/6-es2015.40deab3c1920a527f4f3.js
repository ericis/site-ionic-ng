(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        'E+Ut': function(e, t, s) {
            'use strict';
            s.r(t),
                s.d(t, 'Swiper', function() {
                    return P;
                });
            var i =
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
                              document: i,
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
                        : window;
            class n {
                constructor(e) {
                    const t = this;
                    for (let s = 0; s < e.length; s += 1) t[s] = e[s];
                    return (t.length = e.length), this;
                }
            }
            function r(e, t) {
                const s = [];
                let r = 0;
                if (e && !t && e instanceof n) return e;
                if (e)
                    if ('string' == typeof e) {
                        let a, n;
                        const o = e.trim();
                        if (o.indexOf('<') >= 0 && o.indexOf('>') >= 0) {
                            let e = 'div';
                            for (
                                0 === o.indexOf('<li') && (e = 'ul'),
                                    0 === o.indexOf('<tr') && (e = 'tbody'),
                                    (0 !== o.indexOf('<td') &&
                                        0 !== o.indexOf('<th')) ||
                                        (e = 'tr'),
                                    0 === o.indexOf('<tbody') && (e = 'table'),
                                    0 === o.indexOf('<option') &&
                                        (e = 'select'),
                                    n = i.createElement(e),
                                    n.innerHTML = o,
                                    r = 0;
                                r < n.childNodes.length;
                                r += 1
                            )
                                s.push(n.childNodes[r]);
                        } else
                            for (
                                a =
                                    t || '#' !== e[0] || e.match(/[ .<>:~]/)
                                        ? (t || i).querySelectorAll(e.trim())
                                        : [
                                              i.getElementById(
                                                  e.trim().split('#')[1]
                                              ),
                                          ],
                                    r = 0;
                                r < a.length;
                                r += 1
                            )
                                a[r] && s.push(a[r]);
                    } else if (e.nodeType || e === a || e === i) s.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (r = 0; r < e.length; r += 1) s.push(e[r]);
                return new n(s);
            }
            function o(e) {
                const t = [];
                for (let s = 0; s < e.length; s += 1)
                    -1 === t.indexOf(e[s]) && t.push(e[s]);
                return t;
            }
            (r.fn = n.prototype), (r.Class = n), (r.Dom7 = n);
            const l = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    const t = e.split(' ');
                    for (let s = 0; s < t.length; s += 1)
                        for (let e = 0; e < this.length; e += 1)
                            void 0 !== this[e] &&
                                void 0 !== this[e].classList &&
                                this[e].classList.add(t[s]);
                    return this;
                },
                removeClass: function(e) {
                    const t = e.split(' ');
                    for (let s = 0; s < t.length; s += 1)
                        for (let e = 0; e < this.length; e += 1)
                            void 0 !== this[e] &&
                                void 0 !== this[e].classList &&
                                this[e].classList.remove(t[s]);
                    return this;
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e);
                },
                toggleClass: function(e) {
                    const t = e.split(' ');
                    for (let s = 0; s < t.length; s += 1)
                        for (let e = 0; e < this.length; e += 1)
                            void 0 !== this[e] &&
                                void 0 !== this[e].classList &&
                                this[e].classList.toggle(t[s]);
                    return this;
                },
                attr: function(e, t) {
                    if (1 === arguments.length && 'string' == typeof e)
                        return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e)
                                (this[s][t] = e[t]),
                                    this[s].setAttribute(t, e[t]);
                    return this;
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1)
                        this[t].removeAttribute(e);
                    return this;
                },
                data: function(e, t) {
                    let s;
                    if (void 0 !== t) {
                        for (let i = 0; i < this.length; i += 1)
                            (s = this[i]),
                                s.dom7ElementDataStorage ||
                                    (s.dom7ElementDataStorage = {}),
                                (s.dom7ElementDataStorage[e] = t);
                        return this;
                    }
                    if (((s = this[0]), s))
                        return s.dom7ElementDataStorage &&
                            e in s.dom7ElementDataStorage
                            ? s.dom7ElementDataStorage[e]
                            : s.getAttribute(`data-${e}`) || void 0;
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) {
                        const s = this[t].style;
                        (s.webkitTransform = e), (s.transform = e);
                    }
                    return this;
                },
                transition: function(e) {
                    'string' != typeof e && (e = `${e}ms`);
                    for (let t = 0; t < this.length; t += 1) {
                        const s = this[t].style;
                        (s.webkitTransitionDuration = e),
                            (s.transitionDuration = e);
                    }
                    return this;
                },
                on: function(...e) {
                    let [t, s, i, a] = e;
                    function n(e) {
                        const t = e.target;
                        if (!t) return;
                        const a = e.target.dom7EventData || [];
                        if ((a.indexOf(e) < 0 && a.unshift(e), r(t).is(s)))
                            i.apply(t, a);
                        else {
                            const e = r(t).parents();
                            for (let t = 0; t < e.length; t += 1)
                                r(e[t]).is(s) && i.apply(e[t], a);
                        }
                    }
                    function o(e) {
                        const t =
                            (e && e.target && e.target.dom7EventData) || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
                    }
                    'function' == typeof e[1] &&
                        (([t, i, a] = e), (s = void 0)),
                        a || (a = !1);
                    const l = t.split(' ');
                    let d;
                    for (let r = 0; r < this.length; r += 1) {
                        const e = this[r];
                        if (s)
                            for (d = 0; d < l.length; d += 1) {
                                const t = l[d];
                                e.dom7LiveListeners ||
                                    (e.dom7LiveListeners = {}),
                                    e.dom7LiveListeners[t] ||
                                        (e.dom7LiveListeners[t] = []),
                                    e.dom7LiveListeners[t].push({
                                        listener: i,
                                        proxyListener: n,
                                    }),
                                    e.addEventListener(t, n, a);
                            }
                        else
                            for (d = 0; d < l.length; d += 1) {
                                const t = l[d];
                                e.dom7Listeners || (e.dom7Listeners = {}),
                                    e.dom7Listeners[t] ||
                                        (e.dom7Listeners[t] = []),
                                    e.dom7Listeners[t].push({
                                        listener: i,
                                        proxyListener: o,
                                    }),
                                    e.addEventListener(t, o, a);
                            }
                    }
                    return this;
                },
                off: function(...e) {
                    let [t, s, i, a] = e;
                    'function' == typeof e[1] &&
                        (([t, i, a] = e), (s = void 0)),
                        a || (a = !1);
                    const n = t.split(' ');
                    for (let r = 0; r < n.length; r += 1) {
                        const e = n[r];
                        for (let t = 0; t < this.length; t += 1) {
                            const n = this[t];
                            let r;
                            if (
                                (!s && n.dom7Listeners
                                    ? (r = n.dom7Listeners[e])
                                    : s &&
                                      n.dom7LiveListeners &&
                                      (r = n.dom7LiveListeners[e]),
                                r && r.length)
                            )
                                for (let t = r.length - 1; t >= 0; t -= 1) {
                                    const s = r[t];
                                    i && s.listener === i
                                        ? (n.removeEventListener(
                                              e,
                                              s.proxyListener,
                                              a
                                          ),
                                          r.splice(t, 1))
                                        : i &&
                                          s.listener &&
                                          s.listener.dom7proxy &&
                                          s.listener.dom7proxy === i
                                        ? (n.removeEventListener(
                                              e,
                                              s.proxyListener,
                                              a
                                          ),
                                          r.splice(t, 1))
                                        : i ||
                                          (n.removeEventListener(
                                              e,
                                              s.proxyListener,
                                              a
                                          ),
                                          r.splice(t, 1));
                                }
                        }
                    }
                    return this;
                },
                trigger: function(...e) {
                    const t = e[0].split(' '),
                        s = e[1];
                    for (let r = 0; r < t.length; r += 1) {
                        const o = t[r];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            let l;
                            try {
                                l = new a.CustomEvent(o, {
                                    detail: s,
                                    bubbles: !0,
                                    cancelable: !0,
                                });
                            } catch (n) {
                                (l = i.createEvent('Event')),
                                    l.initEvent(o, !0, !0),
                                    (l.detail = s);
                            }
                            (r.dom7EventData = e.filter((e, t) => t > 0)),
                                r.dispatchEvent(l),
                                (r.dom7EventData = []),
                                delete r.dom7EventData;
                        }
                    }
                    return this;
                },
                transitionEnd: function(e) {
                    const t = ['webkitTransitionEnd', 'transitionend'],
                        s = this;
                    let i;
                    function a(n) {
                        if (n.target === this)
                            for (e.call(this, n), i = 0; i < t.length; i += 1)
                                s.off(t[i], a);
                    }
                    if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
                    return this;
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return (
                                this[0].offsetWidth +
                                parseFloat(e.getPropertyValue('margin-right')) +
                                parseFloat(e.getPropertyValue('margin-left'))
                            );
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return (
                                this[0].offsetHeight +
                                parseFloat(e.getPropertyValue('margin-top')) +
                                parseFloat(e.getPropertyValue('margin-bottom'))
                            );
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = this[0],
                            t = e.getBoundingClientRect(),
                            s = i.body;
                        return {
                            top:
                                t.top +
                                (e === a ? a.scrollY : e.scrollTop) -
                                (e.clientTop || s.clientTop || 0),
                            left:
                                t.left +
                                (e === a ? a.scrollX : e.scrollLeft) -
                                (e.clientLeft || s.clientLeft || 0),
                        };
                    }
                    return null;
                },
                css: function(e, t) {
                    let s;
                    if (1 === arguments.length) {
                        if ('string' != typeof e) {
                            for (s = 0; s < this.length; s += 1)
                                for (let t in e) this[s].style[t] = e[t];
                            return this;
                        }
                        if (this[0])
                            return a
                                .getComputedStyle(this[0], null)
                                .getPropertyValue(e);
                    }
                    if (2 === arguments.length && 'string' == typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            this[s].style[e] = t;
                        return this;
                    }
                    return this;
                },
                each: function(e) {
                    if (!e) return this;
                    for (let t = 0; t < this.length; t += 1)
                        if (!1 === e.call(this[t], t, this[t])) return this;
                    return this;
                },
                html: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (let t = 0; t < this.length; t += 1)
                        this[t].innerHTML = e;
                    return this;
                },
                text: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1)
                        this[t].textContent = e;
                    return this;
                },
                is: function(e) {
                    const t = this[0];
                    let s, o;
                    if (!t || void 0 === e) return !1;
                    if ('string' == typeof e) {
                        if (t.matches) return t.matches(e);
                        if (t.webkitMatchesSelector)
                            return t.webkitMatchesSelector(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        for (s = r(e), o = 0; o < s.length; o += 1)
                            if (s[o] === t) return !0;
                        return !1;
                    }
                    if (e === i) return t === i;
                    if (e === a) return t === a;
                    if (e.nodeType || e instanceof n) {
                        for (
                            s = e.nodeType ? [e] : e, o = 0;
                            o < s.length;
                            o += 1
                        )
                            if (s[o] === t) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function() {
                    let e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); )
                            1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    let s;
                    return e > t - 1
                        ? new n([])
                        : e < 0
                        ? ((s = t + e), new n(s < 0 ? [] : [this[s]]))
                        : new n([this[e]]);
                },
                append: function(...e) {
                    let t;
                    for (let s = 0; s < e.length; s += 1) {
                        t = e[s];
                        for (let e = 0; e < this.length; e += 1)
                            if ('string' == typeof t) {
                                const s = i.createElement('div');
                                for (s.innerHTML = t; s.firstChild; )
                                    this[e].appendChild(s.firstChild);
                            } else if (t instanceof n)
                                for (let s = 0; s < t.length; s += 1)
                                    this[e].appendChild(t[s]);
                            else this[e].appendChild(t);
                    }
                    return this;
                },
                prepend: function(e) {
                    let t, s;
                    for (t = 0; t < this.length; t += 1)
                        if ('string' == typeof e) {
                            const a = i.createElement('div');
                            for (
                                a.innerHTML = e, s = a.childNodes.length - 1;
                                s >= 0;
                                s -= 1
                            )
                                this[t].insertBefore(
                                    a.childNodes[s],
                                    this[t].childNodes[0]
                                );
                        } else if (e instanceof n)
                            for (s = 0; s < e.length; s += 1)
                                this[t].insertBefore(
                                    e[s],
                                    this[t].childNodes[0]
                                );
                        else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this;
                },
                next: function(e) {
                    return this.length > 0
                        ? e
                            ? this[0].nextElementSibling &&
                              r(this[0].nextElementSibling).is(e)
                                ? new n([this[0].nextElementSibling])
                                : new n([])
                            : new n(
                                  this[0].nextElementSibling
                                      ? [this[0].nextElementSibling]
                                      : []
                              )
                        : new n([]);
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return new n([]);
                    for (; s.nextElementSibling; ) {
                        const i = s.nextElementSibling;
                        e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return new n(t);
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e
                            ? t.previousElementSibling &&
                              r(t.previousElementSibling).is(e)
                                ? new n([t.previousElementSibling])
                                : new n([])
                            : new n(
                                  t.previousElementSibling
                                      ? [t.previousElementSibling]
                                      : []
                              );
                    }
                    return new n([]);
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return new n([]);
                    for (; s.previousElementSibling; ) {
                        const i = s.previousElementSibling;
                        e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
                    }
                    return new n(t);
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1)
                        null !== this[s].parentNode &&
                            (e
                                ? r(this[s].parentNode).is(e) &&
                                  t.push(this[s].parentNode)
                                : t.push(this[s].parentNode));
                    return r(o(t));
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i; )
                            e ? r(i).is(e) && t.push(i) : t.push(i),
                                (i = i.parentNode);
                    }
                    return r(o(t));
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e
                        ? new n([])
                        : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
                    }
                    return new n(t);
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].childNodes;
                        for (let s = 0; s < i.length; s += 1)
                            e
                                ? 1 === i[s].nodeType &&
                                  r(i[s]).is(e) &&
                                  t.push(i[s])
                                : 1 === i[s].nodeType && t.push(i[s]);
                    }
                    return new n(o(t));
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1)
                        this[e].parentNode &&
                            this[e].parentNode.removeChild(this[e]);
                    return this;
                },
                add: function(...e) {
                    const t = this;
                    let s, i;
                    for (s = 0; s < e.length; s += 1) {
                        const a = r(e[s]);
                        for (i = 0; i < a.length; i += 1)
                            (t[t.length] = a[i]), (t.length += 1);
                    }
                    return t;
                },
                styles: function() {
                    return this[0] ? a.getComputedStyle(this[0], null) : {};
                },
            };
            Object.keys(l).forEach((e) => {
                r.fn[e] = r.fn[e] || l[e];
            });
            const d = {
                    deleteProps(e) {
                        const t = e;
                        Object.keys(t).forEach((e) => {
                            try {
                                t[e] = null;
                            } catch (s) {}
                            try {
                                delete t[e];
                            } catch (s) {}
                        });
                    },
                    nextTick: (e, t = 0) => setTimeout(e, t),
                    now: () => Date.now(),
                    getTranslate(e, t = 'x') {
                        let s, i, n;
                        const r = a.getComputedStyle(e, null);
                        return (
                            a.WebKitCSSMatrix
                                ? ((i = r.transform || r.webkitTransform),
                                  i.split(',').length > 6 &&
                                      (i = i
                                          .split(', ')
                                          .map((e) => e.replace(',', '.'))
                                          .join(', ')),
                                  (n = new a.WebKitCSSMatrix(
                                      'none' === i ? '' : i
                                  )))
                                : ((n =
                                      r.MozTransform ||
                                      r.OTransform ||
                                      r.MsTransform ||
                                      r.msTransform ||
                                      r.transform ||
                                      r
                                          .getPropertyValue('transform')
                                          .replace(
                                              'translate(',
                                              'matrix(1, 0, 0, 1,'
                                          )),
                                  (s = n.toString().split(','))),
                            'x' === t &&
                                (i = a.WebKitCSSMatrix
                                    ? n.m41
                                    : 16 === s.length
                                    ? parseFloat(s[12])
                                    : parseFloat(s[4])),
                            'y' === t &&
                                (i = a.WebKitCSSMatrix
                                    ? n.m42
                                    : 16 === s.length
                                    ? parseFloat(s[13])
                                    : parseFloat(s[5])),
                            i || 0
                        );
                    },
                    parseUrlQuery(e) {
                        const t = {};
                        let s,
                            i,
                            n,
                            r,
                            o = e || a.location.href;
                        if ('string' == typeof o && o.length)
                            for (
                                o =
                                    o.indexOf('?') > -1
                                        ? o.replace(/\S*\?/, '')
                                        : '',
                                    i = o.split('&').filter((e) => '' !== e),
                                    r = i.length,
                                    s = 0;
                                s < r;
                                s += 1
                            )
                                (n = i[s].replace(/#\S+/g, '').split('=')),
                                    (t[decodeURIComponent(n[0])] =
                                        void 0 === n[1]
                                            ? void 0
                                            : decodeURIComponent(n[1]) || '');
                        return t;
                    },
                    isObject: (e) =>
                        'object' == typeof e &&
                        null !== e &&
                        e.constructor &&
                        e.constructor === Object,
                    extend(...e) {
                        const t = Object(e[0]);
                        for (let s = 1; s < e.length; s += 1) {
                            const i = e[s];
                            if (null != i) {
                                const e = Object.keys(Object(i));
                                for (let s = 0, a = e.length; s < a; s += 1) {
                                    const a = e[s],
                                        n = Object.getOwnPropertyDescriptor(
                                            i,
                                            a
                                        );
                                    void 0 !== n &&
                                        n.enumerable &&
                                        (d.isObject(t[a]) && d.isObject(i[a])
                                            ? d.extend(t[a], i[a])
                                            : !d.isObject(t[a]) &&
                                              d.isObject(i[a])
                                            ? ((t[a] = {}),
                                              d.extend(t[a], i[a]))
                                            : (t[a] = i[a]));
                                }
                            }
                        }
                        return t;
                    },
                },
                c = (function() {
                    const e = i.createElement('div');
                    return {
                        touch:
                            (a.Modernizr && !0 === a.Modernizr.touch) ||
                            !!(
                                a.navigator.maxTouchPoints > 0 ||
                                'ontouchstart' in a ||
                                (a.DocumentTouch &&
                                    i instanceof a.DocumentTouch)
                            ),
                        pointerEvents: !!(
                            a.navigator.pointerEnabled ||
                            a.PointerEvent ||
                            ('maxTouchPoints' in a.navigator &&
                                a.navigator.maxTouchPoints > 0)
                        ),
                        prefixedPointerEvents: !!a.navigator.msPointerEnabled,
                        transition: (function() {
                            const t = e.style;
                            return (
                                'transition' in t ||
                                'webkitTransition' in t ||
                                'MozTransition' in t
                            );
                        })(),
                        transforms3d:
                            (a.Modernizr &&
                                !0 === a.Modernizr.csstransforms3d) ||
                            (function() {
                                const t = e.style;
                                return (
                                    'webkitPerspective' in t ||
                                    'MozPerspective' in t ||
                                    'OPerspective' in t ||
                                    'MsPerspective' in t ||
                                    'perspective' in t
                                );
                            })(),
                        flexbox: (function() {
                            const t = e.style,
                                s = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(
                                    ' '
                                );
                            for (let e = 0; e < s.length; e += 1)
                                if (s[e] in t) return !0;
                            return !1;
                        })(),
                        observer:
                            'MutationObserver' in a ||
                            'WebkitMutationObserver' in a,
                        passiveListener: (function() {
                            let e = !1;
                            try {
                                const t = Object.defineProperty({}, 'passive', {
                                    get() {
                                        e = !0;
                                    },
                                });
                                a.addEventListener(
                                    'testPassiveListener',
                                    null,
                                    t
                                );
                            } catch (t) {}
                            return e;
                        })(),
                        gestures: 'ongesturestart' in a,
                    };
                })(),
                p = {
                    isIE:
                        !!a.navigator.userAgent.match(/Trident/g) ||
                        !!a.navigator.userAgent.match(/MSIE/g),
                    isEdge: !!a.navigator.userAgent.match(/Edge/g),
                    isSafari: (function() {
                        const e = a.navigator.userAgent.toLowerCase();
                        return (
                            e.indexOf('safari') >= 0 &&
                            e.indexOf('chrome') < 0 &&
                            e.indexOf('android') < 0
                        );
                    })(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        a.navigator.userAgent
                    ),
                };
            class h {
                constructor(e = {}) {
                    const t = this;
                    (t.params = e),
                        (t.eventsListeners = {}),
                        t.params &&
                            t.params.on &&
                            Object.keys(t.params.on).forEach((e) => {
                                t.on(e, t.params.on[e]);
                            });
                }
                on(e, t, s) {
                    const i = this;
                    if ('function' != typeof t) return i;
                    const a = s ? 'unshift' : 'push';
                    return (
                        e.split(' ').forEach((e) => {
                            i.eventsListeners[e] || (i.eventsListeners[e] = []),
                                i.eventsListeners[e][a](t);
                        }),
                        i
                    );
                }
                once(e, t, s) {
                    const i = this;
                    if ('function' != typeof t) return i;
                    function a(...s) {
                        t.apply(i, s),
                            i.off(e, a),
                            a.f7proxy && delete a.f7proxy;
                    }
                    return (a.f7proxy = t), i.on(e, a, s);
                }
                off(e, t) {
                    const s = this;
                    return s.eventsListeners
                        ? (e.split(' ').forEach((e) => {
                              void 0 === t
                                  ? (s.eventsListeners[e] = [])
                                  : s.eventsListeners[e] &&
                                    s.eventsListeners[e].length &&
                                    s.eventsListeners[e].forEach((i, a) => {
                                        (i === t ||
                                            (i.f7proxy && i.f7proxy === t)) &&
                                            s.eventsListeners[e].splice(a, 1);
                                    });
                          }),
                          s)
                        : s;
                }
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners) return t;
                    let s, i, a;
                    return (
                        'string' == typeof e[0] || Array.isArray(e[0])
                            ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
                            : ((s = e[0].events),
                              (i = e[0].data),
                              (a = e[0].context || t)),
                        (Array.isArray(s) ? s : s.split(' ')).forEach((e) => {
                            if (t.eventsListeners && t.eventsListeners[e]) {
                                const s = [];
                                t.eventsListeners[e].forEach((e) => {
                                    s.push(e);
                                }),
                                    s.forEach((e) => {
                                        e.apply(a, i);
                                    });
                            }
                        }),
                        t
                    );
                }
                useModulesParams(e) {
                    const t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach((s) => {
                            const i = t.modules[s];
                            i.params && d.extend(e, i.params);
                        });
                }
                useModules(e = {}) {
                    const t = this;
                    t.modules &&
                        Object.keys(t.modules).forEach((s) => {
                            const i = t.modules[s],
                                a = e[s] || {};
                            i.instance &&
                                Object.keys(i.instance).forEach((e) => {
                                    const s = i.instance[e];
                                    t[e] =
                                        'function' == typeof s ? s.bind(t) : s;
                                }),
                                i.on &&
                                    t.on &&
                                    Object.keys(i.on).forEach((e) => {
                                        t.on(e, i.on[e]);
                                    }),
                                i.create && i.create.bind(t)(a);
                        });
                }
                static set components(e) {
                    this.use && this.use(e);
                }
                static installModule(e, ...t) {
                    const s = this;
                    s.prototype.modules || (s.prototype.modules = {});
                    const i =
                        e.name ||
                        `${Object.keys(s.prototype.modules).length}_${d.now()}`;
                    return (
                        (s.prototype.modules[i] = e),
                        e.proto &&
                            Object.keys(e.proto).forEach((t) => {
                                s.prototype[t] = e.proto[t];
                            }),
                        e.static &&
                            Object.keys(e.static).forEach((t) => {
                                s[t] = e.static[t];
                            }),
                        e.install && e.install.apply(s, t),
                        s
                    );
                }
                static use(e, ...t) {
                    const s = this;
                    return Array.isArray(e)
                        ? (e.forEach((e) => s.installModule(e)), s)
                        : s.installModule(e, ...t);
                }
            }
            var u = {
                    updateSize: function() {
                        let e, t;
                        const s = this.$el;
                        (e =
                            void 0 !== this.params.width
                                ? this.params.width
                                : s[0].clientWidth),
                            (t =
                                void 0 !== this.params.height
                                    ? this.params.height
                                    : s[0].clientHeight),
                            (0 === e && this.isHorizontal()) ||
                                (0 === t && this.isVertical()) ||
                                ((e =
                                    e -
                                    parseInt(s.css('padding-left'), 10) -
                                    parseInt(s.css('padding-right'), 10)),
                                (t =
                                    t -
                                    parseInt(s.css('padding-top'), 10) -
                                    parseInt(s.css('padding-bottom'), 10)),
                                d.extend(this, {
                                    width: e,
                                    height: t,
                                    size: this.isHorizontal() ? e : t,
                                }));
                    },
                    updateSlides: function() {
                        const e = this,
                            t = e.params,
                            {
                                $wrapperEl: s,
                                size: i,
                                rtlTranslate: n,
                                wrongRTL: r,
                            } = e,
                            o = e.virtual && t.virtual.enabled,
                            l = o ? e.virtual.slides.length : e.slides.length,
                            h = s.children(`.${e.params.slideClass}`),
                            u = o ? e.virtual.slides.length : h.length;
                        let m = [];
                        const g = [],
                            f = [];
                        let v = t.slidesOffsetBefore;
                        'function' == typeof v &&
                            (v = t.slidesOffsetBefore.call(e));
                        let b = t.slidesOffsetAfter;
                        'function' == typeof b &&
                            (b = t.slidesOffsetAfter.call(e));
                        const w = e.snapGrid.length,
                            T = e.snapGrid.length;
                        let E,
                            x,
                            y = t.spaceBetween,
                            S = -v,
                            C = 0,
                            $ = 0;
                        if (void 0 === i) return;
                        'string' == typeof y &&
                            y.indexOf('%') >= 0 &&
                            (y = (parseFloat(y.replace('%', '')) / 100) * i),
                            (e.virtualSize = -y),
                            h.css(
                                n
                                    ? { marginLeft: '', marginTop: '' }
                                    : { marginRight: '', marginBottom: '' }
                            ),
                            t.slidesPerColumn > 1 &&
                                ((E =
                                    Math.floor(u / t.slidesPerColumn) ===
                                    u / e.params.slidesPerColumn
                                        ? u
                                        : Math.ceil(u / t.slidesPerColumn) *
                                          t.slidesPerColumn),
                                'auto' !== t.slidesPerView &&
                                    'row' === t.slidesPerColumnFill &&
                                    (E = Math.max(
                                        E,
                                        t.slidesPerView * t.slidesPerColumn
                                    )));
                        const M = t.slidesPerColumn,
                            P = E / M,
                            z = Math.floor(u / t.slidesPerColumn);
                        for (let d = 0; d < u; d += 1) {
                            x = 0;
                            const s = h.eq(d);
                            if (t.slidesPerColumn > 1) {
                                let i, a, n;
                                if (
                                    'column' === t.slidesPerColumnFill ||
                                    ('row' === t.slidesPerColumnFill &&
                                        t.slidesPerGroup > 1)
                                ) {
                                    if ('column' === t.slidesPerColumnFill)
                                        (a = Math.floor(d / M)),
                                            (n = d - a * M),
                                            (a > z ||
                                                (a === z && n === M - 1)) &&
                                                ((n += 1),
                                                n >= M && ((n = 0), (a += 1)));
                                    else {
                                        const e = Math.floor(
                                            d / t.slidesPerGroup
                                        );
                                        (n =
                                            Math.floor(d / t.slidesPerView) -
                                            e * t.slidesPerColumn),
                                            (a =
                                                d -
                                                n * t.slidesPerView -
                                                e * t.slidesPerView);
                                    }
                                    (i = a + (n * E) / M),
                                        s.css({
                                            '-webkit-box-ordinal-group': i,
                                            '-moz-box-ordinal-group': i,
                                            '-ms-flex-order': i,
                                            '-webkit-order': i,
                                            order: i,
                                        });
                                } else (n = Math.floor(d / P)), (a = d - n * P);
                                s.css(
                                    `margin-${
                                        e.isHorizontal() ? 'top' : 'left'
                                    }`,
                                    0 !== n &&
                                        t.spaceBetween &&
                                        `${t.spaceBetween}px`
                                )
                                    .attr('data-swiper-column', a)
                                    .attr('data-swiper-row', n);
                            }
                            if ('none' !== s.css('display')) {
                                if ('auto' === t.slidesPerView) {
                                    const i = a.getComputedStyle(s[0], null),
                                        n = s[0].style.transform,
                                        r = s[0].style.webkitTransform;
                                    if (
                                        (n && (s[0].style.transform = 'none'),
                                        r &&
                                            (s[0].style.webkitTransform =
                                                'none'),
                                        t.roundLengths)
                                    )
                                        x = e.isHorizontal()
                                            ? s.outerWidth(!0)
                                            : s.outerHeight(!0);
                                    else if (e.isHorizontal()) {
                                        const e = parseFloat(
                                                i.getPropertyValue('width')
                                            ),
                                            t = parseFloat(
                                                i.getPropertyValue(
                                                    'padding-left'
                                                )
                                            ),
                                            s = parseFloat(
                                                i.getPropertyValue(
                                                    'padding-right'
                                                )
                                            ),
                                            a = parseFloat(
                                                i.getPropertyValue(
                                                    'margin-left'
                                                )
                                            ),
                                            n = parseFloat(
                                                i.getPropertyValue(
                                                    'margin-right'
                                                )
                                            ),
                                            r = i.getPropertyValue(
                                                'box-sizing'
                                            );
                                        x =
                                            r && 'border-box' === r && !p.isIE
                                                ? e + a + n
                                                : e + t + s + a + n;
                                    } else {
                                        const e = parseFloat(
                                                i.getPropertyValue('height')
                                            ),
                                            t = parseFloat(
                                                i.getPropertyValue(
                                                    'padding-top'
                                                )
                                            ),
                                            s = parseFloat(
                                                i.getPropertyValue(
                                                    'padding-bottom'
                                                )
                                            ),
                                            a = parseFloat(
                                                i.getPropertyValue('margin-top')
                                            ),
                                            n = parseFloat(
                                                i.getPropertyValue(
                                                    'margin-bottom'
                                                )
                                            ),
                                            r = i.getPropertyValue(
                                                'box-sizing'
                                            );
                                        x =
                                            r && 'border-box' === r && !p.isIE
                                                ? e + a + n
                                                : e + t + s + a + n;
                                    }
                                    n && (s[0].style.transform = n),
                                        r && (s[0].style.webkitTransform = r),
                                        t.roundLengths && (x = Math.floor(x));
                                } else
                                    (x =
                                        (i - (t.slidesPerView - 1) * y) /
                                        t.slidesPerView),
                                        t.roundLengths && (x = Math.floor(x)),
                                        h[d] &&
                                            (e.isHorizontal()
                                                ? (h[d].style.width = `${x}px`)
                                                : (h[
                                                      d
                                                  ].style.height = `${x}px`));
                                h[d] && (h[d].swiperSlideSize = x),
                                    f.push(x),
                                    t.centeredSlides
                                        ? ((S = S + x / 2 + C / 2 + y),
                                          0 === C &&
                                              0 !== d &&
                                              (S = S - i / 2 - y),
                                          0 === d && (S = S - i / 2 - y),
                                          Math.abs(S) < 0.001 && (S = 0),
                                          t.roundLengths && (S = Math.floor(S)),
                                          $ % t.slidesPerGroup == 0 &&
                                              m.push(S),
                                          g.push(S))
                                        : (t.roundLengths &&
                                              (S = Math.floor(S)),
                                          $ % t.slidesPerGroup == 0 &&
                                              m.push(S),
                                          g.push(S),
                                          (S = S + x + y)),
                                    (e.virtualSize += x + y),
                                    (C = x),
                                    ($ += 1);
                            }
                        }
                        let k;
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, i) + b),
                            n &&
                                r &&
                                ('slide' === t.effect ||
                                    'coverflow' === t.effect) &&
                                s.css({
                                    width: `${e.virtualSize +
                                        t.spaceBetween}px`,
                                }),
                            (c.flexbox && !t.setWrapperSize) ||
                                (e.isHorizontal()
                                    ? s.css({
                                          width: `${e.virtualSize +
                                              t.spaceBetween}px`,
                                      })
                                    : s.css({
                                          height: `${e.virtualSize +
                                              t.spaceBetween}px`,
                                      })),
                            t.slidesPerColumn > 1 &&
                                ((e.virtualSize = (x + t.spaceBetween) * E),
                                (e.virtualSize =
                                    Math.ceil(
                                        e.virtualSize / t.slidesPerColumn
                                    ) - t.spaceBetween),
                                e.isHorizontal()
                                    ? s.css({
                                          width: `${e.virtualSize +
                                              t.spaceBetween}px`,
                                      })
                                    : s.css({
                                          height: `${e.virtualSize +
                                              t.spaceBetween}px`,
                                      }),
                                t.centeredSlides))
                        ) {
                            k = [];
                            for (let s = 0; s < m.length; s += 1) {
                                let i = m[s];
                                t.roundLengths && (i = Math.floor(i)),
                                    m[s] < e.virtualSize + m[0] && k.push(i);
                            }
                            m = k;
                        }
                        if (!t.centeredSlides) {
                            k = [];
                            for (let s = 0; s < m.length; s += 1) {
                                let a = m[s];
                                t.roundLengths && (a = Math.floor(a)),
                                    m[s] <= e.virtualSize - i && k.push(a);
                            }
                            (m = k),
                                Math.floor(e.virtualSize - i) -
                                    Math.floor(m[m.length - 1]) >
                                    1 && m.push(e.virtualSize - i);
                        }
                        if (
                            (0 === m.length && (m = [0]),
                            0 !== t.spaceBetween &&
                                (e.isHorizontal()
                                    ? h.css(
                                          n
                                              ? { marginLeft: `${y}px` }
                                              : { marginRight: `${y}px` }
                                      )
                                    : h.css({ marginBottom: `${y}px` })),
                            t.centerInsufficientSlides)
                        ) {
                            let e = 0;
                            if (
                                (f.forEach((s) => {
                                    e +=
                                        s +
                                        (t.spaceBetween ? t.spaceBetween : 0);
                                }),
                                (e -= t.spaceBetween),
                                e < i)
                            ) {
                                const t = (i - e) / 2;
                                m.forEach((e, s) => {
                                    m[s] = e - t;
                                }),
                                    g.forEach((e, s) => {
                                        g[s] = e + t;
                                    });
                            }
                        }
                        d.extend(e, {
                            slides: h,
                            snapGrid: m,
                            slidesGrid: g,
                            slidesSizesGrid: f,
                        }),
                            u !== l && e.emit('slidesLengthChange'),
                            m.length !== w &&
                                (e.params.watchOverflow && e.checkOverflow(),
                                e.emit('snapGridLengthChange')),
                            g.length !== T && e.emit('slidesGridLengthChange'),
                            (t.watchSlidesProgress ||
                                t.watchSlidesVisibility) &&
                                e.updateSlidesOffset();
                    },
                    updateAutoHeight: function(e) {
                        const t = this,
                            s = [];
                        let i,
                            a = 0;
                        if (
                            ('number' == typeof e
                                ? t.setTransition(e)
                                : !0 === e && t.setTransition(t.params.speed),
                            'auto' !== t.params.slidesPerView &&
                                t.params.slidesPerView > 1)
                        )
                            for (
                                i = 0;
                                i < Math.ceil(t.params.slidesPerView);
                                i += 1
                            ) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length) break;
                                s.push(t.slides.eq(e)[0]);
                            }
                        else s.push(t.slides.eq(t.activeIndex)[0]);
                        for (i = 0; i < s.length; i += 1)
                            if (void 0 !== s[i]) {
                                const e = s[i].offsetHeight;
                                a = e > a ? e : a;
                            }
                        a && t.$wrapperEl.css('height', `${a}px`);
                    },
                    updateSlidesOffset: function() {
                        const e = this,
                            t = e.slides;
                        for (let s = 0; s < t.length; s += 1)
                            t[s].swiperSlideOffset = e.isHorizontal()
                                ? t[s].offsetLeft
                                : t[s].offsetTop;
                    },
                    updateSlidesProgress: function(
                        e = (this && this.translate) || 0
                    ) {
                        const t = this,
                            s = t.params,
                            { slides: i, rtlTranslate: a } = t;
                        if (0 === i.length) return;
                        void 0 === i[0].swiperSlideOffset &&
                            t.updateSlidesOffset();
                        let n = -e;
                        a && (n = e),
                            i.removeClass(s.slideVisibleClass),
                            (t.visibleSlidesIndexes = []),
                            (t.visibleSlides = []);
                        for (let r = 0; r < i.length; r += 1) {
                            const e = i[r],
                                o =
                                    (n +
                                        (s.centeredSlides
                                            ? t.minTranslate()
                                            : 0) -
                                        e.swiperSlideOffset) /
                                    (e.swiperSlideSize + s.spaceBetween);
                            if (s.watchSlidesVisibility) {
                                const a = -(n - e.swiperSlideOffset),
                                    o = a + t.slidesSizesGrid[r];
                                ((a >= 0 && a < t.size - 1) ||
                                    (o > 1 && o <= t.size) ||
                                    (a <= 0 && o >= t.size)) &&
                                    (t.visibleSlides.push(e),
                                    t.visibleSlidesIndexes.push(r),
                                    i.eq(r).addClass(s.slideVisibleClass));
                            }
                            e.progress = a ? -o : o;
                        }
                        t.visibleSlides = r(t.visibleSlides);
                    },
                    updateProgress: function(
                        e = (this && this.translate) || 0
                    ) {
                        const t = this.params,
                            s = this.maxTranslate() - this.minTranslate();
                        let { progress: i, isBeginning: a, isEnd: n } = this;
                        const r = a,
                            o = n;
                        0 === s
                            ? ((i = 0), (a = !0), (n = !0))
                            : ((i = (e - this.minTranslate()) / s),
                              (a = i <= 0),
                              (n = i >= 1)),
                            d.extend(this, {
                                progress: i,
                                isBeginning: a,
                                isEnd: n,
                            }),
                            (t.watchSlidesProgress ||
                                t.watchSlidesVisibility) &&
                                this.updateSlidesProgress(e),
                            a && !r && this.emit('reachBeginning toEdge'),
                            n && !o && this.emit('reachEnd toEdge'),
                            ((r && !a) || (o && !n)) && this.emit('fromEdge'),
                            this.emit('progress', i);
                    },
                    updateSlidesClasses: function() {
                        const {
                                slides: e,
                                params: t,
                                $wrapperEl: s,
                                activeIndex: i,
                                realIndex: a,
                            } = this,
                            n = this.virtual && t.virtual.enabled;
                        let r;
                        e.removeClass(
                            `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
                        ),
                            (r = n
                                ? this.$wrapperEl.find(
                                      `.${t.slideClass}[data-swiper-slide-index="${i}"]`
                                  )
                                : e.eq(i)),
                            r.addClass(t.slideActiveClass),
                            t.loop &&
                                (r.hasClass(t.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                                          )
                                          .addClass(t.slideDuplicateActiveClass)
                                    : s
                                          .children(
                                              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                                          )
                                          .addClass(
                                              t.slideDuplicateActiveClass
                                          ));
                        let o = r
                            .nextAll(`.${t.slideClass}`)
                            .eq(0)
                            .addClass(t.slideNextClass);
                        t.loop &&
                            0 === o.length &&
                            ((o = e.eq(0)), o.addClass(t.slideNextClass));
                        let l = r
                            .prevAll(`.${t.slideClass}`)
                            .eq(0)
                            .addClass(t.slidePrevClass);
                        t.loop &&
                            0 === l.length &&
                            ((l = e.eq(-1)), l.addClass(t.slidePrevClass)),
                            t.loop &&
                                (o.hasClass(t.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${t.slideClass}:not(.${
                                                  t.slideDuplicateClass
                                              })[data-swiper-slide-index="${o.attr(
                                                  'data-swiper-slide-index'
                                              )}"]`
                                          )
                                          .addClass(t.slideDuplicateNextClass)
                                    : s
                                          .children(
                                              `.${t.slideClass}.${
                                                  t.slideDuplicateClass
                                              }[data-swiper-slide-index="${o.attr(
                                                  'data-swiper-slide-index'
                                              )}"]`
                                          )
                                          .addClass(t.slideDuplicateNextClass),
                                l.hasClass(t.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${t.slideClass}:not(.${
                                                  t.slideDuplicateClass
                                              })[data-swiper-slide-index="${l.attr(
                                                  'data-swiper-slide-index'
                                              )}"]`
                                          )
                                          .addClass(t.slideDuplicatePrevClass)
                                    : s
                                          .children(
                                              `.${t.slideClass}.${
                                                  t.slideDuplicateClass
                                              }[data-swiper-slide-index="${l.attr(
                                                  'data-swiper-slide-index'
                                              )}"]`
                                          )
                                          .addClass(t.slideDuplicatePrevClass));
                    },
                    updateActiveIndex: function(e) {
                        const t = this.rtlTranslate
                                ? this.translate
                                : -this.translate,
                            {
                                slidesGrid: s,
                                snapGrid: i,
                                params: a,
                                activeIndex: n,
                                realIndex: r,
                                snapIndex: o,
                            } = this;
                        let l,
                            c = e;
                        if (void 0 === c) {
                            for (let e = 0; e < s.length; e += 1)
                                void 0 !== s[e + 1]
                                    ? t >= s[e] &&
                                      t < s[e + 1] - (s[e + 1] - s[e]) / 2
                                        ? (c = e)
                                        : t >= s[e] &&
                                          t < s[e + 1] &&
                                          (c = e + 1)
                                    : t >= s[e] && (c = e);
                            a.normalizeSlideIndex &&
                                (c < 0 || void 0 === c) &&
                                (c = 0);
                        }
                        if (
                            ((l =
                                i.indexOf(t) >= 0
                                    ? i.indexOf(t)
                                    : Math.floor(c / a.slidesPerGroup)),
                            l >= i.length && (l = i.length - 1),
                            c === n)
                        )
                            return void (
                                l !== o &&
                                ((this.snapIndex = l),
                                this.emit('snapIndexChange'))
                            );
                        const p = parseInt(
                            this.slides.eq(c).attr('data-swiper-slide-index') ||
                                c,
                            10
                        );
                        d.extend(this, {
                            snapIndex: l,
                            realIndex: p,
                            previousIndex: n,
                            activeIndex: c,
                        }),
                            this.emit('activeIndexChange'),
                            this.emit('snapIndexChange'),
                            r !== p && this.emit('realIndexChange'),
                            (this.initialized || this.runCallbacksOnInit) &&
                                this.emit('slideChange');
                    },
                    updateClickedSlide: function(e) {
                        const t = this,
                            s = t.params,
                            i = r(e.target).closest(`.${s.slideClass}`)[0];
                        let a = !1;
                        if (i)
                            for (let n = 0; n < t.slides.length; n += 1)
                                t.slides[n] === i && (a = !0);
                        if (!i || !a)
                            return (
                                (t.clickedSlide = void 0),
                                void (t.clickedIndex = void 0)
                            );
                        (t.clickedSlide = i),
                            (t.clickedIndex =
                                t.virtual && t.params.virtual.enabled
                                    ? parseInt(
                                          r(i).attr('data-swiper-slide-index'),
                                          10
                                      )
                                    : r(i).index()),
                            s.slideToClickedSlide &&
                                void 0 !== t.clickedIndex &&
                                t.clickedIndex !== t.activeIndex &&
                                t.slideToClickedSlide();
                    },
                },
                m = {
                    getTranslate: function(
                        e = this.isHorizontal() ? 'x' : 'y'
                    ) {
                        const {
                            params: t,
                            rtlTranslate: s,
                            translate: i,
                            $wrapperEl: a,
                        } = this;
                        if (t.virtualTranslate) return s ? -i : i;
                        let n = d.getTranslate(a[0], e);
                        return s && (n = -n), n || 0;
                    },
                    setTranslate: function(e, t) {
                        const {
                            rtlTranslate: s,
                            params: i,
                            $wrapperEl: a,
                            progress: n,
                        } = this;
                        let r,
                            o = 0,
                            l = 0;
                        this.isHorizontal() ? (o = s ? -e : e) : (l = e),
                            i.roundLengths &&
                                ((o = Math.floor(o)), (l = Math.floor(l))),
                            i.virtualTranslate ||
                                a.transform(
                                    c.transforms3d
                                        ? `translate3d(${o}px, ${l}px, 0px)`
                                        : `translate(${o}px, ${l}px)`
                                ),
                            (this.previousTranslate = this.translate),
                            (this.translate = this.isHorizontal() ? o : l);
                        const d = this.maxTranslate() - this.minTranslate();
                        (r = 0 === d ? 0 : (e - this.minTranslate()) / d),
                            r !== n && this.updateProgress(e),
                            this.emit('setTranslate', this.translate, t);
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                },
                g = {
                    slideTo: function(e = 0, t = this.params.speed, s = !0, i) {
                        const a = this;
                        let n = e;
                        n < 0 && (n = 0);
                        const {
                            params: r,
                            snapGrid: o,
                            slidesGrid: l,
                            previousIndex: d,
                            activeIndex: p,
                            rtlTranslate: h,
                        } = a;
                        if (a.animating && r.preventInteractionOnTransition)
                            return !1;
                        let u = Math.floor(n / r.slidesPerGroup);
                        u >= o.length && (u = o.length - 1),
                            (p || r.initialSlide || 0) === (d || 0) &&
                                s &&
                                a.emit('beforeSlideChangeStart');
                        const m = -o[u];
                        if ((a.updateProgress(m), r.normalizeSlideIndex))
                            for (let c = 0; c < l.length; c += 1)
                                -Math.floor(100 * m) >=
                                    Math.floor(100 * l[c]) && (n = c);
                        if (a.initialized && n !== p) {
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
                                (p || 0) !== n
                            )
                                return !1;
                        }
                        let g;
                        return (
                            (g = n > p ? 'next' : n < p ? 'prev' : 'reset'),
                            (h && -m === a.translate) ||
                            (!h && m === a.translate)
                                ? (a.updateActiveIndex(n),
                                  r.autoHeight && a.updateAutoHeight(),
                                  a.updateSlidesClasses(),
                                  'slide' !== r.effect && a.setTranslate(m),
                                  'reset' !== g &&
                                      (a.transitionStart(s, g),
                                      a.transitionEnd(s, g)),
                                  !1)
                                : (0 !== t && c.transition
                                      ? (a.setTransition(t),
                                        a.setTranslate(m),
                                        a.updateActiveIndex(n),
                                        a.updateSlidesClasses(),
                                        a.emit('beforeTransitionStart', t, i),
                                        a.transitionStart(s, g),
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
                                                        a.transitionEnd(s, g));
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
                                        a.updateActiveIndex(n),
                                        a.updateSlidesClasses(),
                                        a.emit('beforeTransitionStart', t, i),
                                        a.transitionStart(s, g),
                                        a.transitionEnd(s, g)),
                                  !0)
                        );
                    },
                    slideToLoop: function(
                        e = 0,
                        t = this.params.speed,
                        s = !0,
                        i
                    ) {
                        let a = e;
                        return (
                            this.params.loop && (a += this.loopedSlides),
                            this.slideTo(a, t, s, i)
                        );
                    },
                    slideNext: function(e = this.params.speed, t = !0, s) {
                        const { params: i, animating: a } = this;
                        return i.loop
                            ? !a &&
                                  (this.loopFix(),
                                  (this._clientLeft = this.$wrapperEl[0].clientLeft),
                                  this.slideTo(
                                      this.activeIndex + i.slidesPerGroup,
                                      e,
                                      t,
                                      s
                                  ))
                            : this.slideTo(
                                  this.activeIndex + i.slidesPerGroup,
                                  e,
                                  t,
                                  s
                              );
                    },
                    slidePrev: function(e = this.params.speed, t = !0, s) {
                        const i = this,
                            {
                                params: a,
                                animating: n,
                                snapGrid: r,
                                slidesGrid: o,
                                rtlTranslate: l,
                            } = i;
                        if (a.loop) {
                            if (n) return !1;
                            i.loopFix(),
                                (i._clientLeft = i.$wrapperEl[0].clientLeft);
                        }
                        function d(e) {
                            return e < 0
                                ? -Math.floor(Math.abs(e))
                                : Math.floor(e);
                        }
                        const c = d(l ? i.translate : -i.translate),
                            p = r.map((e) => d(e)),
                            h =
                                (o.map((e) => d(e)),
                                p.indexOf(c),
                                r[p.indexOf(c) - 1]);
                        let u;
                        return (
                            void 0 !== h &&
                                ((u = o.indexOf(h)),
                                u < 0 && (u = i.activeIndex - 1)),
                            i.slideTo(u, e, t, s)
                        );
                    },
                    slideReset: function(e = this.params.speed, t = !0, s) {
                        return this.slideTo(this.activeIndex, e, t, s);
                    },
                    slideToClosest: function(e = this.params.speed, t = !0, s) {
                        const i = this;
                        let a = i.activeIndex;
                        const n = Math.floor(a / i.params.slidesPerGroup);
                        if (n < i.snapGrid.length - 1) {
                            const e = i.snapGrid[n];
                            (i.rtlTranslate ? i.translate : -i.translate) - e >
                                (i.snapGrid[n + 1] - e) / 2 &&
                                (a = i.params.slidesPerGroup);
                        }
                        return i.slideTo(a, e, t, s);
                    },
                    slideToClickedSlide: function() {
                        const e = this,
                            { params: t, $wrapperEl: s } = e,
                            i =
                                'auto' === t.slidesPerView
                                    ? e.slidesPerViewDynamic()
                                    : t.slidesPerView;
                        let a,
                            n = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            (a = parseInt(
                                r(e.clickedSlide).attr(
                                    'data-swiper-slide-index'
                                ),
                                10
                            )),
                                t.centeredSlides
                                    ? n < e.loopedSlides - i / 2 ||
                                      n >
                                          e.slides.length -
                                              e.loopedSlides +
                                              i / 2
                                        ? (e.loopFix(),
                                          (n = s
                                              .children(
                                                  `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                                              )
                                              .eq(0)
                                              .index()),
                                          d.nextTick(() => {
                                              e.slideTo(n);
                                          }))
                                        : e.slideTo(n)
                                    : n > e.slides.length - i
                                    ? (e.loopFix(),
                                      (n = s
                                          .children(
                                              `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                                          )
                                          .eq(0)
                                          .index()),
                                      d.nextTick(() => {
                                          e.slideTo(n);
                                      }))
                                    : e.slideTo(n);
                        } else e.slideTo(n);
                    },
                },
                f = {
                    loopCreate: function() {
                        const e = this,
                            { params: t, $wrapperEl: s } = e;
                        s.children(
                            `.${t.slideClass}.${t.slideDuplicateClass}`
                        ).remove();
                        let a = s.children(`.${t.slideClass}`);
                        if (t.loopFillGroupWithBlank) {
                            const e =
                                t.slidesPerGroup -
                                (a.length % t.slidesPerGroup);
                            if (e !== t.slidesPerGroup) {
                                for (let a = 0; a < e; a += 1) {
                                    const e = r(
                                        i.createElement('div')
                                    ).addClass(
                                        `${t.slideClass} ${t.slideBlankClass}`
                                    );
                                    s.append(e);
                                }
                                a = s.children(`.${t.slideClass}`);
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
                        const n = [],
                            o = [];
                        a.each((t, s) => {
                            const i = r(s);
                            t < e.loopedSlides && o.push(s),
                                t < a.length &&
                                    t >= a.length - e.loopedSlides &&
                                    n.push(s),
                                i.attr('data-swiper-slide-index', t);
                        });
                        for (let i = 0; i < o.length; i += 1)
                            s.append(
                                r(o[i].cloneNode(!0)).addClass(
                                    t.slideDuplicateClass
                                )
                            );
                        for (let i = n.length - 1; i >= 0; i -= 1)
                            s.prepend(
                                r(n[i].cloneNode(!0)).addClass(
                                    t.slideDuplicateClass
                                )
                            );
                    },
                    loopFix: function() {
                        const {
                            params: e,
                            activeIndex: t,
                            slides: s,
                            loopedSlides: i,
                            allowSlidePrev: a,
                            allowSlideNext: n,
                            snapGrid: r,
                            rtlTranslate: o,
                        } = this;
                        let l;
                        (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                        const d = -r[t] - this.getTranslate();
                        t < i
                            ? ((l = s.length - 3 * i + t),
                              (l += i),
                              this.slideTo(l, 0, !1, !0) &&
                                  0 !== d &&
                                  this.setTranslate(
                                      (o ? -this.translate : this.translate) - d
                                  ))
                            : (('auto' === e.slidesPerView && t >= 2 * i) ||
                                  t >= s.length - i) &&
                              ((l = -s.length + t + i),
                              (l += i),
                              this.slideTo(l, 0, !1, !0) &&
                                  0 !== d &&
                                  this.setTranslate(
                                      (o ? -this.translate : this.translate) - d
                                  )),
                            (this.allowSlidePrev = a),
                            (this.allowSlideNext = n);
                    },
                    loopDestroy: function() {
                        const { $wrapperEl: e, params: t, slides: s } = this;
                        e
                            .children(
                                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                            )
                            .remove(),
                            s.removeAttr('data-swiper-slide-index');
                    },
                },
                v = {
                    setGrabCursor: function(e) {
                        if (
                            c.touch ||
                            !this.params.simulateTouch ||
                            (this.params.watchOverflow && this.isLocked)
                        )
                            return;
                        const t = this.el;
                        (t.style.cursor = 'move'),
                            (t.style.cursor = e
                                ? '-webkit-grabbing'
                                : '-webkit-grab'),
                            (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                            (t.style.cursor = e ? 'grabbing' : 'grab');
                    },
                    unsetGrabCursor: function() {
                        c.touch ||
                            (this.params.watchOverflow && this.isLocked) ||
                            (this.el.style.cursor = '');
                    },
                },
                b = {
                    appendSlide: function(e) {
                        const { $wrapperEl: t, params: s } = this;
                        if (
                            (s.loop && this.loopDestroy(),
                            'object' == typeof e && 'length' in e)
                        )
                            for (let i = 0; i < e.length; i += 1)
                                e[i] && t.append(e[i]);
                        else t.append(e);
                        s.loop && this.loopCreate(),
                            (s.observer && c.observer) || this.update();
                    },
                    prependSlide: function(e) {
                        const {
                            params: t,
                            $wrapperEl: s,
                            activeIndex: i,
                        } = this;
                        t.loop && this.loopDestroy();
                        let a = i + 1;
                        if ('object' == typeof e && 'length' in e) {
                            for (let t = 0; t < e.length; t += 1)
                                e[t] && s.prepend(e[t]);
                            a = i + e.length;
                        } else s.prepend(e);
                        t.loop && this.loopCreate(),
                            (t.observer && c.observer) || this.update(),
                            this.slideTo(a, 0, !1);
                    },
                    addSlide: function(e, t) {
                        const s = this,
                            { $wrapperEl: i, params: a, activeIndex: n } = s;
                        let r = n;
                        a.loop &&
                            ((r -= s.loopedSlides),
                            s.loopDestroy(),
                            (s.slides = i.children(`.${a.slideClass}`)));
                        const o = s.slides.length;
                        if (e <= 0) return void s.prependSlide(t);
                        if (e >= o) return void s.appendSlide(t);
                        let l = r > e ? r + 1 : r;
                        const d = [];
                        for (let c = o - 1; c >= e; c -= 1) {
                            const e = s.slides.eq(c);
                            e.remove(), d.unshift(e);
                        }
                        if ('object' == typeof t && 'length' in t) {
                            for (let e = 0; e < t.length; e += 1)
                                t[e] && i.append(t[e]);
                            l = r > e ? r + t.length : r;
                        } else i.append(t);
                        for (let c = 0; c < d.length; c += 1) i.append(d[c]);
                        a.loop && s.loopCreate(),
                            (a.observer && c.observer) || s.update(),
                            s.slideTo(a.loop ? l + s.loopedSlides : l, 0, !1);
                    },
                    removeSlide: function(e) {
                        const t = this,
                            { params: s, $wrapperEl: i, activeIndex: a } = t;
                        let n = a;
                        s.loop &&
                            ((n -= t.loopedSlides),
                            t.loopDestroy(),
                            (t.slides = i.children(`.${s.slideClass}`)));
                        let r,
                            o = n;
                        if ('object' == typeof e && 'length' in e) {
                            for (let s = 0; s < e.length; s += 1)
                                (r = e[s]),
                                    t.slides[r] && t.slides.eq(r).remove(),
                                    r < o && (o -= 1);
                            o = Math.max(o, 0);
                        } else
                            (r = e),
                                t.slides[r] && t.slides.eq(r).remove(),
                                r < o && (o -= 1),
                                (o = Math.max(o, 0));
                        s.loop && t.loopCreate(),
                            (s.observer && c.observer) || t.update(),
                            t.slideTo(s.loop ? o + t.loopedSlides : o, 0, !1);
                    },
                    removeAllSlides: function() {
                        const e = this,
                            t = [];
                        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
                        e.removeSlide(t);
                    },
                };
            const w = (function() {
                const e = a.navigator.userAgent,
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
                    s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    r = e.match(/(iPad).*OS\s([\d_]+)/),
                    o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (
                    (s &&
                        ((t.os = 'windows'),
                        (t.osVersion = s[2]),
                        (t.windows = !0)),
                    n &&
                        !s &&
                        ((t.os = 'android'),
                        (t.osVersion = n[2]),
                        (t.android = !0),
                        (t.androidChrome =
                            e.toLowerCase().indexOf('chrome') >= 0)),
                    (r || l || o) && ((t.os = 'ios'), (t.ios = !0)),
                    l &&
                        !o &&
                        ((t.osVersion = l[2].replace(/_/g, '.')),
                        (t.iphone = !0)),
                    r &&
                        ((t.osVersion = r[2].replace(/_/g, '.')),
                        (t.ipad = !0)),
                    o &&
                        ((t.osVersion = o[3] ? o[3].replace(/_/g, '.') : null),
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
                        (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                    t.os && 'ios' === t.os)
                ) {
                    const e = t.osVersion.split('.'),
                        s = i.querySelector('meta[name="viewport"]');
                    t.minimalUi =
                        !t.webView &&
                        (o || l) &&
                        (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) &&
                        s &&
                        s.getAttribute('content').indexOf('minimal-ui') >= 0;
                }
                return (t.pixelRatio = a.devicePixelRatio || 1), t;
            })();
            function T(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: n, touches: o } = t;
                if (t.animating && n.preventInteractionOnTransition) return;
                let l = e;
                if (
                    (l.originalEvent && (l = l.originalEvent),
                    (s.isTouchEvent = 'touchstart' === l.type),
                    !s.isTouchEvent && 'which' in l && 3 === l.which)
                )
                    return;
                if (!s.isTouchEvent && 'button' in l && l.button > 0) return;
                if (s.isTouched && s.isMoved) return;
                if (
                    n.noSwiping &&
                    r(l.target).closest(
                        n.noSwipingSelector
                            ? n.noSwipingSelector
                            : `.${n.noSwipingClass}`
                    )[0]
                )
                    return void (t.allowClick = !0);
                if (n.swipeHandler && !r(l).closest(n.swipeHandler)[0]) return;
                (o.currentX =
                    'touchstart' === l.type
                        ? l.targetTouches[0].pageX
                        : l.pageX),
                    (o.currentY =
                        'touchstart' === l.type
                            ? l.targetTouches[0].pageY
                            : l.pageY);
                const c = o.currentX,
                    p = o.currentY,
                    h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (
                    (!n.edgeSwipeDetection && !n.iOSEdgeSwipeDetection) ||
                    !(c <= h || c >= a.screen.width - h)
                ) {
                    if (
                        (d.extend(s, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0,
                        }),
                        (o.startX = c),
                        (o.startY = p),
                        (s.touchStartTime = d.now()),
                        (t.allowClick = !0),
                        t.updateSize(),
                        (t.swipeDirection = void 0),
                        n.threshold > 0 && (s.allowThresholdMove = !1),
                        'touchstart' !== l.type)
                    ) {
                        let e = !0;
                        r(l.target).is(s.formElements) && (e = !1),
                            i.activeElement &&
                                r(i.activeElement).is(s.formElements) &&
                                i.activeElement !== l.target &&
                                i.activeElement.blur();
                        const a =
                            e && t.allowTouchMove && n.touchStartPreventDefault;
                        (n.touchStartForcePreventDefault || a) &&
                            l.preventDefault();
                    }
                    t.emit('touchStart', l);
                }
            }
            function E(e) {
                const t = this,
                    s = t.touchEventsData,
                    { params: a, touches: n, rtlTranslate: o } = t;
                let l = e;
                if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
                    return void (
                        s.startMoving &&
                        s.isScrolling &&
                        t.emit('touchMoveOpposite', l)
                    );
                if (s.isTouchEvent && 'mousemove' === l.type) return;
                const c =
                        'touchmove' === l.type
                            ? l.targetTouches[0].pageX
                            : l.pageX,
                    p =
                        'touchmove' === l.type
                            ? l.targetTouches[0].pageY
                            : l.pageY;
                if (l.preventedByNestedSwiper)
                    return (n.startX = c), void (n.startY = p);
                if (!t.allowTouchMove)
                    return (
                        (t.allowClick = !1),
                        void (
                            s.isTouched &&
                            (d.extend(n, {
                                startX: c,
                                startY: p,
                                currentX: c,
                                currentY: p,
                            }),
                            (s.touchStartTime = d.now()))
                        )
                    );
                if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                    if (t.isVertical()) {
                        if (
                            (p < n.startY && t.translate <= t.maxTranslate()) ||
                            (p > n.startY && t.translate >= t.minTranslate())
                        )
                            return (s.isTouched = !1), void (s.isMoved = !1);
                    } else if (
                        (c < n.startX && t.translate <= t.maxTranslate()) ||
                        (c > n.startX && t.translate >= t.minTranslate())
                    )
                        return;
                if (
                    s.isTouchEvent &&
                    i.activeElement &&
                    l.target === i.activeElement &&
                    r(l.target).is(s.formElements)
                )
                    return (s.isMoved = !0), void (t.allowClick = !1);
                if (
                    (s.allowTouchCallbacks && t.emit('touchMove', l),
                    l.targetTouches && l.targetTouches.length > 1)
                )
                    return;
                (n.currentX = c), (n.currentY = p);
                const h = n.currentX - n.startX,
                    u = n.currentY - n.startY;
                if (
                    t.params.threshold &&
                    Math.sqrt(h ** 2 + u ** 2) < t.params.threshold
                )
                    return;
                if (void 0 === s.isScrolling) {
                    let e;
                    (t.isHorizontal() && n.currentY === n.startY) ||
                    (t.isVertical() && n.currentX === n.startX)
                        ? (s.isScrolling = !1)
                        : h * h + u * u >= 25 &&
                          ((e =
                              (180 * Math.atan2(Math.abs(u), Math.abs(h))) /
                              Math.PI),
                          (s.isScrolling = t.isHorizontal()
                              ? e > a.touchAngle
                              : 90 - e > a.touchAngle));
                }
                if (
                    (s.isScrolling && t.emit('touchMoveOpposite', l),
                    void 0 === s.startMoving &&
                        ((n.currentX === n.startX && n.currentY === n.startY) ||
                            (s.startMoving = !0)),
                    s.isScrolling)
                )
                    return void (s.isTouched = !1);
                if (!s.startMoving) return;
                (t.allowClick = !1),
                    l.preventDefault(),
                    a.touchMoveStopPropagation &&
                        !a.nested &&
                        l.stopPropagation(),
                    s.isMoved ||
                        (a.loop && t.loopFix(),
                        (s.startTranslate = t.getTranslate()),
                        t.setTransition(0),
                        t.animating &&
                            t.$wrapperEl.trigger(
                                'webkitTransitionEnd transitionend'
                            ),
                        (s.allowMomentumBounce = !1),
                        !a.grabCursor ||
                            (!0 !== t.allowSlideNext &&
                                !0 !== t.allowSlidePrev) ||
                            t.setGrabCursor(!0),
                        t.emit('sliderFirstMove', l)),
                    t.emit('sliderMove', l),
                    (s.isMoved = !0);
                let m = t.isHorizontal() ? h : u;
                (n.diff = m),
                    (m *= a.touchRatio),
                    o && (m = -m),
                    (t.swipeDirection = m > 0 ? 'prev' : 'next'),
                    (s.currentTranslate = m + s.startTranslate);
                let g = !0,
                    f = a.resistanceRatio;
                if (
                    (a.touchReleaseOnEdges && (f = 0),
                    m > 0 && s.currentTranslate > t.minTranslate()
                        ? ((g = !1),
                          a.resistance &&
                              (s.currentTranslate =
                                  t.minTranslate() -
                                  1 +
                                  (-t.minTranslate() + s.startTranslate + m) **
                                      f))
                        : m < 0 &&
                          s.currentTranslate < t.maxTranslate() &&
                          ((g = !1),
                          a.resistance &&
                              (s.currentTranslate =
                                  t.maxTranslate() +
                                  1 -
                                  (t.maxTranslate() - s.startTranslate - m) **
                                      f)),
                    g && (l.preventedByNestedSwiper = !0),
                    !t.allowSlideNext &&
                        'next' === t.swipeDirection &&
                        s.currentTranslate < s.startTranslate &&
                        (s.currentTranslate = s.startTranslate),
                    !t.allowSlidePrev &&
                        'prev' === t.swipeDirection &&
                        s.currentTranslate > s.startTranslate &&
                        (s.currentTranslate = s.startTranslate),
                    a.threshold > 0)
                ) {
                    if (!(Math.abs(m) > a.threshold || s.allowThresholdMove))
                        return void (s.currentTranslate = s.startTranslate);
                    if (!s.allowThresholdMove)
                        return (
                            (s.allowThresholdMove = !0),
                            (n.startX = n.currentX),
                            (n.startY = n.currentY),
                            (s.currentTranslate = s.startTranslate),
                            void (n.diff = t.isHorizontal()
                                ? n.currentX - n.startX
                                : n.currentY - n.startY)
                        );
                }
                a.followFinger &&
                    ((a.freeMode ||
                        a.watchSlidesProgress ||
                        a.watchSlidesVisibility) &&
                        (t.updateActiveIndex(), t.updateSlidesClasses()),
                    a.freeMode &&
                        (0 === s.velocities.length &&
                            s.velocities.push({
                                position:
                                    n[t.isHorizontal() ? 'startX' : 'startY'],
                                time: s.touchStartTime,
                            }),
                        s.velocities.push({
                            position:
                                n[t.isHorizontal() ? 'currentX' : 'currentY'],
                            time: d.now(),
                        })),
                    t.updateProgress(s.currentTranslate),
                    t.setTranslate(s.currentTranslate));
            }
            function x(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: i,
                        touches: a,
                        rtlTranslate: n,
                        $wrapperEl: r,
                        slidesGrid: o,
                        snapGrid: l,
                    } = t;
                let c = e;
                if (
                    (c.originalEvent && (c = c.originalEvent),
                    s.allowTouchCallbacks && t.emit('touchEnd', c),
                    (s.allowTouchCallbacks = !1),
                    !s.isTouched)
                )
                    return (
                        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                        (s.isMoved = !1),
                        void (s.startMoving = !1)
                    );
                i.grabCursor &&
                    s.isMoved &&
                    s.isTouched &&
                    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                    t.setGrabCursor(!1);
                const p = d.now(),
                    h = p - s.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(c),
                        t.emit('tap', c),
                        h < 300 &&
                            p - s.lastClickTime > 300 &&
                            (s.clickTimeout && clearTimeout(s.clickTimeout),
                            (s.clickTimeout = d.nextTick(() => {
                                t && !t.destroyed && t.emit('click', c);
                            }, 300))),
                        h < 300 &&
                            p - s.lastClickTime < 300 &&
                            (s.clickTimeout && clearTimeout(s.clickTimeout),
                            t.emit('doubleTap', c))),
                    (s.lastClickTime = d.now()),
                    d.nextTick(() => {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !s.isTouched ||
                        !s.isMoved ||
                        !t.swipeDirection ||
                        0 === a.diff ||
                        s.currentTranslate === s.startTranslate)
                )
                    return (
                        (s.isTouched = !1),
                        (s.isMoved = !1),
                        void (s.startMoving = !1)
                    );
                let u;
                if (
                    ((s.isTouched = !1),
                    (s.isMoved = !1),
                    (s.startMoving = !1),
                    (u = i.followFinger
                        ? n
                            ? t.translate
                            : -t.translate
                        : -s.currentTranslate),
                    i.freeMode)
                ) {
                    if (u < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (u > -t.maxTranslate())
                        return void t.slideTo(
                            t.slides.length < l.length
                                ? l.length - 1
                                : t.slides.length - 1
                        );
                    if (i.freeModeMomentum) {
                        if (s.velocities.length > 1) {
                            const e = s.velocities.pop(),
                                a = s.velocities.pop(),
                                n = e.time - a.time;
                            (t.velocity = (e.position - a.position) / n),
                                (t.velocity /= 2),
                                Math.abs(t.velocity) <
                                    i.freeModeMinimumVelocity &&
                                    (t.velocity = 0),
                                (n > 150 || d.now() - e.time > 300) &&
                                    (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= i.freeModeMomentumVelocityRatio),
                            (s.velocities.length = 0);
                        let e = 1e3 * i.freeModeMomentumRatio,
                            a = t.translate + t.velocity * e;
                        n && (a = -a);
                        let o,
                            c = !1;
                        const p =
                            20 *
                            Math.abs(t.velocity) *
                            i.freeModeMomentumBounceRatio;
                        let h;
                        if (a < t.maxTranslate())
                            i.freeModeMomentumBounce
                                ? (a + t.maxTranslate() < -p &&
                                      (a = t.maxTranslate() - p),
                                  (o = t.maxTranslate()),
                                  (c = !0),
                                  (s.allowMomentumBounce = !0))
                                : (a = t.maxTranslate()),
                                i.loop && i.centeredSlides && (h = !0);
                        else if (a > t.minTranslate())
                            i.freeModeMomentumBounce
                                ? (a - t.minTranslate() > p &&
                                      (a = t.minTranslate() + p),
                                  (o = t.minTranslate()),
                                  (c = !0),
                                  (s.allowMomentumBounce = !0))
                                : (a = t.minTranslate()),
                                i.loop && i.centeredSlides && (h = !0);
                        else if (i.freeModeSticky) {
                            let e;
                            for (let t = 0; t < l.length; t += 1)
                                if (l[t] > -a) {
                                    e = t;
                                    break;
                                }
                            (a =
                                Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) ||
                                'next' === t.swipeDirection
                                    ? l[e]
                                    : l[e - 1]),
                                (a = -a);
                        }
                        if (
                            (h &&
                                t.once('transitionEnd', () => {
                                    t.loopFix();
                                }),
                            0 !== t.velocity)
                        )
                            e = n
                                ? Math.abs((-a - t.translate) / t.velocity)
                                : Math.abs((a - t.translate) / t.velocity);
                        else if (i.freeModeSticky)
                            return void t.slideToClosest();
                        i.freeModeMomentumBounce && c
                            ? (t.updateProgress(o),
                              t.setTransition(e),
                              t.setTranslate(a),
                              t.transitionStart(!0, t.swipeDirection),
                              (t.animating = !0),
                              r.transitionEnd(() => {
                                  t &&
                                      !t.destroyed &&
                                      s.allowMomentumBounce &&
                                      (t.emit('momentumBounce'),
                                      t.setTransition(i.speed),
                                      t.setTranslate(o),
                                      r.transitionEnd(() => {
                                          t &&
                                              !t.destroyed &&
                                              t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(a),
                              t.setTransition(e),
                              t.setTranslate(a),
                              t.transitionStart(!0, t.swipeDirection),
                              t.animating ||
                                  ((t.animating = !0),
                                  r.transitionEnd(() => {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(a),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    return void (
                        (!i.freeModeMomentum || h >= i.longSwipesMs) &&
                        (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    );
                }
                let m = 0,
                    g = t.slidesSizesGrid[0];
                for (let d = 0; d < o.length; d += i.slidesPerGroup)
                    void 0 !== o[d + i.slidesPerGroup]
                        ? u >= o[d] &&
                          u < o[d + i.slidesPerGroup] &&
                          ((m = d), (g = o[d + i.slidesPerGroup] - o[d]))
                        : u >= o[d] &&
                          ((m = d), (g = o[o.length - 1] - o[o.length - 2]));
                const f = (u - o[m]) / g;
                if (h > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    'next' === t.swipeDirection &&
                        t.slideTo(
                            f >= i.longSwipesRatio ? m + i.slidesPerGroup : m
                        ),
                        'prev' === t.swipeDirection &&
                            t.slideTo(
                                f > 1 - i.longSwipesRatio
                                    ? m + i.slidesPerGroup
                                    : m
                            );
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    'next' === t.swipeDirection &&
                        t.slideTo(m + i.slidesPerGroup),
                        'prev' === t.swipeDirection && t.slideTo(m);
                }
            }
            function y() {
                const e = this,
                    { params: t, el: s } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
                if (
                    ((e.allowSlideNext = !0),
                    (e.allowSlidePrev = !0),
                    e.updateSize(),
                    e.updateSlides(),
                    t.freeMode)
                ) {
                    const s = Math.min(
                        Math.max(e.translate, e.maxTranslate()),
                        e.minTranslate()
                    );
                    e.setTranslate(s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses(),
                        t.autoHeight && e.updateAutoHeight();
                } else
                    e.updateSlidesClasses(),
                        e.slideTo(
                            ('auto' === t.slidesPerView ||
                                t.slidesPerView > 1) &&
                                e.isEnd &&
                                !e.params.centeredSlides
                                ? e.slides.length - 1
                                : e.activeIndex,
                            0,
                            !1,
                            !0
                        );
                e.autoplay &&
                    e.autoplay.running &&
                    e.autoplay.paused &&
                    e.autoplay.run(),
                    (e.allowSlidePrev = a),
                    (e.allowSlideNext = i),
                    e.params.watchOverflow &&
                        n !== e.snapGrid &&
                        e.checkOverflow();
            }
            function S(e) {
                this.allowClick ||
                    (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation &&
                        this.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation()));
            }
            var C = {
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
            };
            const $ = {
                    update: u,
                    translate: m,
                    transition: {
                        setTransition: function(e, t) {
                            this.$wrapperEl.transition(e),
                                this.emit('setTransition', e, t);
                        },
                        transitionStart: function(e = !0, t) {
                            const s = this,
                                {
                                    activeIndex: i,
                                    params: a,
                                    previousIndex: n,
                                } = s;
                            a.autoHeight && s.updateAutoHeight();
                            let r = t;
                            if (
                                (r ||
                                    (r =
                                        i > n
                                            ? 'next'
                                            : i < n
                                            ? 'prev'
                                            : 'reset'),
                                s.emit('transitionStart'),
                                e && i !== n)
                            ) {
                                if ('reset' === r)
                                    return void s.emit(
                                        'slideResetTransitionStart'
                                    );
                                s.emit('slideChangeTransitionStart'),
                                    s.emit(
                                        'next' === r
                                            ? 'slideNextTransitionStart'
                                            : 'slidePrevTransitionStart'
                                    );
                            }
                        },
                        transitionEnd: function(e = !0, t) {
                            const s = this,
                                { activeIndex: i, previousIndex: a } = s;
                            (s.animating = !1), s.setTransition(0);
                            let n = t;
                            if (
                                (n ||
                                    (n =
                                        i > a
                                            ? 'next'
                                            : i < a
                                            ? 'prev'
                                            : 'reset'),
                                s.emit('transitionEnd'),
                                e && i !== a)
                            ) {
                                if ('reset' === n)
                                    return void s.emit(
                                        'slideResetTransitionEnd'
                                    );
                                s.emit('slideChangeTransitionEnd'),
                                    s.emit(
                                        'next' === n
                                            ? 'slideNextTransitionEnd'
                                            : 'slidePrevTransitionEnd'
                                    );
                            }
                        },
                    },
                    slide: g,
                    loop: f,
                    grabCursor: v,
                    manipulation: b,
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: s,
                                    el: a,
                                    wrapperEl: n,
                                } = e;
                            (e.onTouchStart = T.bind(e)),
                                (e.onTouchMove = E.bind(e)),
                                (e.onTouchEnd = x.bind(e)),
                                (e.onClick = S.bind(e));
                            const r =
                                    'container' === t.touchEventsTarget ? a : n,
                                o = !!t.nested;
                            if (
                                c.touch ||
                                (!c.pointerEvents && !c.prefixedPointerEvents)
                            ) {
                                if (c.touch) {
                                    const i = !(
                                        'touchstart' !== s.start ||
                                        !c.passiveListener ||
                                        !t.passiveListeners
                                    ) && { passive: !0, capture: !1 };
                                    r.addEventListener(
                                        s.start,
                                        e.onTouchStart,
                                        i
                                    ),
                                        r.addEventListener(
                                            s.move,
                                            e.onTouchMove,
                                            c.passiveListener
                                                ? { passive: !1, capture: o }
                                                : o
                                        ),
                                        r.addEventListener(
                                            s.end,
                                            e.onTouchEnd,
                                            i
                                        );
                                }
                                ((t.simulateTouch && !w.ios && !w.android) ||
                                    (t.simulateTouch && !c.touch && w.ios)) &&
                                    (r.addEventListener(
                                        'mousedown',
                                        e.onTouchStart,
                                        !1
                                    ),
                                    i.addEventListener(
                                        'mousemove',
                                        e.onTouchMove,
                                        o
                                    ),
                                    i.addEventListener(
                                        'mouseup',
                                        e.onTouchEnd,
                                        !1
                                    ));
                            } else
                                r.addEventListener(s.start, e.onTouchStart, !1),
                                    i.addEventListener(
                                        s.move,
                                        e.onTouchMove,
                                        o
                                    ),
                                    i.addEventListener(s.end, e.onTouchEnd, !1);
                            (t.preventClicks || t.preventClicksPropagation) &&
                                r.addEventListener('click', e.onClick, !0),
                                e.on(
                                    w.ios || w.android
                                        ? 'resize orientationchange observerUpdate'
                                        : 'resize observerUpdate',
                                    y,
                                    !0
                                );
                        },
                        detachEvents: function() {
                            const e = this,
                                {
                                    params: t,
                                    touchEvents: s,
                                    el: a,
                                    wrapperEl: n,
                                } = e,
                                r = 'container' === t.touchEventsTarget ? a : n,
                                o = !!t.nested;
                            if (
                                c.touch ||
                                (!c.pointerEvents && !c.prefixedPointerEvents)
                            ) {
                                if (c.touch) {
                                    const i = !(
                                        'onTouchStart' !== s.start ||
                                        !c.passiveListener ||
                                        !t.passiveListeners
                                    ) && { passive: !0, capture: !1 };
                                    r.removeEventListener(
                                        s.start,
                                        e.onTouchStart,
                                        i
                                    ),
                                        r.removeEventListener(
                                            s.move,
                                            e.onTouchMove,
                                            o
                                        ),
                                        r.removeEventListener(
                                            s.end,
                                            e.onTouchEnd,
                                            i
                                        );
                                }
                                ((t.simulateTouch && !w.ios && !w.android) ||
                                    (t.simulateTouch && !c.touch && w.ios)) &&
                                    (r.removeEventListener(
                                        'mousedown',
                                        e.onTouchStart,
                                        !1
                                    ),
                                    i.removeEventListener(
                                        'mousemove',
                                        e.onTouchMove,
                                        o
                                    ),
                                    i.removeEventListener(
                                        'mouseup',
                                        e.onTouchEnd,
                                        !1
                                    ));
                            } else
                                r.removeEventListener(
                                    s.start,
                                    e.onTouchStart,
                                    !1
                                ),
                                    i.removeEventListener(
                                        s.move,
                                        e.onTouchMove,
                                        o
                                    ),
                                    i.removeEventListener(
                                        s.end,
                                        e.onTouchEnd,
                                        !1
                                    );
                            (t.preventClicks || t.preventClicksPropagation) &&
                                r.removeEventListener('click', e.onClick, !0),
                                e.off(
                                    w.ios || w.android
                                        ? 'resize orientationchange observerUpdate'
                                        : 'resize observerUpdate',
                                    y
                                );
                        },
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    activeIndex: t,
                                    initialized: s,
                                    loopedSlides: i = 0,
                                    params: a,
                                } = e,
                                n = a.breakpoints;
                            if (!n || (n && 0 === Object.keys(n).length))
                                return;
                            const r = e.getBreakpoint(n);
                            if (r && e.currentBreakpoint !== r) {
                                const o = r in n ? n[r] : void 0;
                                o &&
                                    [
                                        'slidesPerView',
                                        'spaceBetween',
                                        'slidesPerGroup',
                                    ].forEach((e) => {
                                        const t = o[e];
                                        void 0 !== t &&
                                            (o[e] =
                                                'slidesPerView' !== e ||
                                                ('AUTO' !== t && 'auto' !== t)
                                                    ? 'slidesPerView' === e
                                                        ? parseFloat(t)
                                                        : parseInt(t, 10)
                                                    : 'auto');
                                    });
                                const l = o || e.originalParams,
                                    c =
                                        l.direction &&
                                        l.direction !== a.direction,
                                    p =
                                        a.loop &&
                                        (l.slidesPerView !== a.slidesPerView ||
                                            c);
                                c && s && e.changeDirection(),
                                    d.extend(e.params, l),
                                    d.extend(e, {
                                        allowTouchMove: e.params.allowTouchMove,
                                        allowSlideNext: e.params.allowSlideNext,
                                        allowSlidePrev: e.params.allowSlidePrev,
                                    }),
                                    (e.currentBreakpoint = r),
                                    p &&
                                        s &&
                                        (e.loopDestroy(),
                                        e.loopCreate(),
                                        e.updateSlides(),
                                        e.slideTo(
                                            t - i + e.loopedSlides,
                                            0,
                                            !1
                                        )),
                                    e.emit('breakpoint', l);
                            }
                        },
                        getBreakpoint: function(e) {
                            const t = this;
                            if (!e) return;
                            let s = !1;
                            const i = [];
                            Object.keys(e).forEach((e) => {
                                i.push(e);
                            }),
                                i.sort(
                                    (e, t) => parseInt(e, 10) - parseInt(t, 10)
                                );
                            for (let n = 0; n < i.length; n += 1) {
                                const e = i[n];
                                t.params.breakpointsInverse
                                    ? e <= a.innerWidth && (s = e)
                                    : e >= a.innerWidth && !s && (s = e);
                            }
                            return s || 'max';
                        },
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this.isLocked;
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
                            const {
                                    classNames: e,
                                    params: t,
                                    rtl: s,
                                    $el: i,
                                } = this,
                                a = [];
                            a.push('initialized'),
                                a.push(t.direction),
                                t.freeMode && a.push('free-mode'),
                                c.flexbox || a.push('no-flexbox'),
                                t.autoHeight && a.push('autoheight'),
                                s && a.push('rtl'),
                                t.slidesPerColumn > 1 && a.push('multirow'),
                                w.android && a.push('android'),
                                w.ios && a.push('ios'),
                                (p.isIE || p.isEdge) &&
                                    (c.pointerEvents ||
                                        c.prefixedPointerEvents) &&
                                    a.push(`wp8-${t.direction}`),
                                a.forEach((s) => {
                                    e.push(t.containerModifierClass + s);
                                }),
                                i.addClass(e.join(' '));
                        },
                        removeClasses: function() {
                            const { $el: e, classNames: t } = this;
                            e.removeClass(t.join(' '));
                        },
                    },
                    images: {
                        loadImage: function(e, t, s, i, n, r) {
                            let o;
                            function l() {
                                r && r();
                            }
                            e.complete && n
                                ? l()
                                : t
                                ? ((o = new a.Image()),
                                  (o.onload = l),
                                  (o.onerror = l),
                                  i && (o.sizes = i),
                                  s && (o.srcset = s),
                                  t && (o.src = t))
                                : l();
                        },
                        preloadImages: function() {
                            const e = this;
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
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const i = e.imagesToLoad[s];
                                e.loadImage(
                                    i,
                                    i.currentSrc || i.getAttribute('src'),
                                    i.srcset || i.getAttribute('srcset'),
                                    i.sizes || i.getAttribute('sizes'),
                                    !0,
                                    t
                                );
                            }
                        },
                    },
                },
                M = {};
            class P extends h {
                constructor(...e) {
                    let t, s;
                    1 === e.length &&
                    e[0].constructor &&
                    e[0].constructor === Object
                        ? (s = e[0])
                        : ([t, s] = e),
                        s || (s = {}),
                        (s = d.extend({}, s)),
                        t && !s.el && (s.el = t),
                        super(s),
                        Object.keys($).forEach((e) => {
                            Object.keys($[e]).forEach((t) => {
                                P.prototype[t] || (P.prototype[t] = $[e][t]);
                            });
                        });
                    const i = this;
                    void 0 === i.modules && (i.modules = {}),
                        Object.keys(i.modules).forEach((e) => {
                            const t = i.modules[e];
                            if (t.params) {
                                const e = Object.keys(t.params)[0],
                                    i = t.params[e];
                                if ('object' != typeof i || null === i) return;
                                if (!(e in s && 'enabled' in i)) return;
                                !0 === s[e] && (s[e] = { enabled: !0 }),
                                    'object' != typeof s[e] ||
                                        'enabled' in s[e] ||
                                        (s[e].enabled = !0),
                                    s[e] || (s[e] = { enabled: !1 });
                            }
                        });
                    const a = d.extend({}, C);
                    i.useModulesParams(a),
                        (i.params = d.extend({}, a, M, s)),
                        (i.originalParams = d.extend({}, i.params)),
                        (i.passedParams = d.extend({}, s)),
                        (i.$ = r);
                    const n = r(i.params.el);
                    if (((t = n[0]), !t)) return;
                    if (n.length > 1) {
                        const e = [];
                        return (
                            n.each((t, i) => {
                                const a = d.extend({}, s, { el: i });
                                e.push(new P(a));
                            }),
                            e
                        );
                    }
                    (t.swiper = i), n.data('swiper', i);
                    const o = n.children(`.${i.params.wrapperClass}`);
                    return (
                        d.extend(i, {
                            $el: n,
                            el: t,
                            $wrapperEl: o,
                            wrapperEl: o[0],
                            classNames: [],
                            slides: r(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () =>
                                'horizontal' === i.params.direction,
                            isVertical: () => 'vertical' === i.params.direction,
                            rtl:
                                'rtl' === t.dir.toLowerCase() ||
                                'rtl' === n.css('direction'),
                            rtlTranslate:
                                'horizontal' === i.params.direction &&
                                ('rtl' === t.dir.toLowerCase() ||
                                    'rtl' === n.css('direction')),
                            wrongRTL: '-webkit-box' === o.css('display'),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: i.params.allowSlideNext,
                            allowSlidePrev: i.params.allowSlidePrev,
                            touchEvents: (function() {
                                const e = [
                                    'touchstart',
                                    'touchmove',
                                    'touchend',
                                ];
                                let t = ['mousedown', 'mousemove', 'mouseup'];
                                return (
                                    c.pointerEvents
                                        ? (t = [
                                              'pointerdown',
                                              'pointermove',
                                              'pointerup',
                                          ])
                                        : c.prefixedPointerEvents &&
                                          (t = [
                                              'MSPointerDown',
                                              'MSPointerMove',
                                              'MSPointerUp',
                                          ]),
                                    (i.touchEventsTouch = {
                                        start: e[0],
                                        move: e[1],
                                        end: e[2],
                                    }),
                                    (i.touchEventsDesktop = {
                                        start: t[0],
                                        move: t[1],
                                        end: t[2],
                                    }),
                                    c.touch || !i.params.simulateTouch
                                        ? i.touchEventsTouch
                                        : i.touchEventsDesktop
                                );
                            })(),
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
                                lastClickTime: d.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: i.params.allowTouchMove,
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
                        i.useModules(),
                        i.params.init && i.init(),
                        i
                    );
                }
                slidesPerViewDynamic() {
                    const {
                        params: e,
                        slides: t,
                        slidesGrid: s,
                        size: i,
                        activeIndex: a,
                    } = this;
                    let n = 1;
                    if (e.centeredSlides) {
                        let e,
                            s = t[a].swiperSlideSize;
                        for (let r = a + 1; r < t.length; r += 1)
                            t[r] &&
                                !e &&
                                ((s += t[r].swiperSlideSize),
                                (n += 1),
                                s > i && (e = !0));
                        for (let r = a - 1; r >= 0; r -= 1)
                            t[r] &&
                                !e &&
                                ((s += t[r].swiperSlideSize),
                                (n += 1),
                                s > i && (e = !0));
                    } else
                        for (let r = a + 1; r < t.length; r += 1)
                            s[r] - s[a] < i && (n += 1);
                    return n;
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const { snapGrid: t, params: s } = e;
                    function i() {
                        const t = Math.min(
                            Math.max(
                                e.rtlTranslate ? -1 * e.translate : e.translate,
                                e.maxTranslate()
                            ),
                            e.minTranslate()
                        );
                        e.setTranslate(t),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                    let a;
                    s.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode
                            ? (i(), e.params.autoHeight && e.updateAutoHeight())
                            : ((a = e.slideTo(
                                  ('auto' === e.params.slidesPerView ||
                                      e.params.slidesPerView > 1) &&
                                      e.isEnd &&
                                      !e.params.centeredSlides
                                      ? e.slides.length - 1
                                      : e.activeIndex,
                                  0,
                                  !1,
                                  !0
                              )),
                              a || i()),
                        s.watchOverflow &&
                            t !== e.snapGrid &&
                            e.checkOverflow(),
                        e.emit('update');
                }
                changeDirection(e, t = !0) {
                    const s = this.params.direction;
                    return (
                        e ||
                            (e =
                                'horizontal' === s ? 'vertical' : 'horizontal'),
                        e === s || ('horizontal' !== e && 'vertical' !== e)
                            ? this
                            : (this.$el
                                  .removeClass(
                                      `${this.params.containerModifierClass}${s} wp8-${s}`
                                  )
                                  .addClass(
                                      `${this.params.containerModifierClass}${e}`
                                  ),
                              (p.isIE || p.isEdge) &&
                                  (c.pointerEvents ||
                                      c.prefixedPointerEvents) &&
                                  this.$el.addClass(
                                      `${this.params.containerModifierClass}wp8-${e}`
                                  ),
                              (this.params.direction = e),
                              this.slides.each((t, s) => {
                                  'vertical' === e
                                      ? (s.style.width = '')
                                      : (s.style.height = '');
                              }),
                              this.emit('changeDirection'),
                              t && this.update(),
                              this)
                    );
                }
                init() {
                    this.initialized ||
                        (this.emit('beforeInit'),
                        this.params.breakpoints && this.setBreakpoint(),
                        this.addClasses(),
                        this.params.loop && this.loopCreate(),
                        this.updateSize(),
                        this.updateSlides(),
                        this.params.watchOverflow && this.checkOverflow(),
                        this.params.grabCursor && this.setGrabCursor(),
                        this.params.preloadImages && this.preloadImages(),
                        this.slideTo(
                            this.params.loop
                                ? this.params.initialSlide + this.loopedSlides
                                : this.params.initialSlide,
                            0,
                            this.params.runCallbacksOnInit
                        ),
                        this.attachEvents(),
                        (this.initialized = !0),
                        this.emit('init'));
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        { params: i, $el: a, $wrapperEl: n, slides: r } = s;
                    return void 0 === s.params || s.destroyed
                        ? null
                        : (s.emit('beforeDestroy'),
                          (s.initialized = !1),
                          s.detachEvents(),
                          i.loop && s.loopDestroy(),
                          t &&
                              (s.removeClasses(),
                              a.removeAttr('style'),
                              n.removeAttr('style'),
                              r &&
                                  r.length &&
                                  r
                                      .removeClass(
                                          [
                                              i.slideVisibleClass,
                                              i.slideActiveClass,
                                              i.slideNextClass,
                                              i.slidePrevClass,
                                          ].join(' ')
                                      )
                                      .removeAttr('style')
                                      .removeAttr('data-swiper-slide-index')
                                      .removeAttr('data-swiper-column')
                                      .removeAttr('data-swiper-row')),
                          s.emit('destroy'),
                          Object.keys(s.eventsListeners).forEach((e) => {
                              s.off(e);
                          }),
                          !1 !== e &&
                              ((s.$el[0].swiper = null),
                              s.$el.data('swiper', null),
                              d.deleteProps(s)),
                          (s.destroyed = !0),
                          null);
                }
                static extendDefaults(e) {
                    d.extend(M, e);
                }
                static get extendedDefaults() {
                    return M;
                }
                static get defaults() {
                    return C;
                }
                static get Class() {
                    return h;
                }
                static get $() {
                    return r;
                }
            }
            var z = {
                    name: 'device',
                    proto: { device: w },
                    static: { device: w },
                },
                k = {
                    name: 'support',
                    proto: { support: c },
                    static: { support: c },
                },
                L = {
                    name: 'browser',
                    proto: { browser: p },
                    static: { browser: p },
                },
                D = {
                    name: 'resize',
                    create() {
                        const e = this;
                        d.extend(e, {
                            resize: {
                                resizeHandler() {
                                    e &&
                                        !e.destroyed &&
                                        e.initialized &&
                                        (e.emit('beforeResize'),
                                        e.emit('resize'));
                                },
                                orientationChangeHandler() {
                                    e &&
                                        !e.destroyed &&
                                        e.initialized &&
                                        e.emit('orientationchange');
                                },
                            },
                        });
                    },
                    on: {
                        init() {
                            a.addEventListener(
                                'resize',
                                this.resize.resizeHandler
                            ),
                                a.addEventListener(
                                    'orientationchange',
                                    this.resize.orientationChangeHandler
                                );
                        },
                        destroy() {
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
                };
            const I = {
                func: a.MutationObserver || a.WebkitMutationObserver,
                attach(e, t = {}) {
                    const s = this,
                        i = new (0, I.func)((e) => {
                            if (1 === e.length)
                                return void s.emit('observerUpdate', e[0]);
                            const t = function() {
                                s.emit('observerUpdate', e[0]);
                            };
                            a.requestAnimationFrame
                                ? a.requestAnimationFrame(t)
                                : a.setTimeout(t, 0);
                        });
                    i.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData:
                            void 0 === t.characterData || t.characterData,
                    }),
                        s.observer.observers.push(i);
                },
                init() {
                    const e = this;
                    if (c.observer && e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let s = 0; s < t.length; s += 1)
                                e.observer.attach(t[s]);
                        }
                        e.observer.attach(e.$el[0], {
                            childList: e.params.observeSlideChildren,
                        }),
                            e.observer.attach(e.$wrapperEl[0], {
                                attributes: !1,
                            });
                    }
                },
                destroy() {
                    this.observer.observers.forEach((e) => {
                        e.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            };
            var O = {
                name: 'observer',
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1,
                },
                create() {
                    d.extend(this, {
                        observer: {
                            init: I.init.bind(this),
                            attach: I.attach.bind(this),
                            destroy: I.destroy.bind(this),
                            observers: [],
                        },
                    });
                },
                on: {
                    init() {
                        this.observer.init();
                    },
                    destroy() {
                        this.observer.destroy();
                    },
                },
            };
            const A = {
                    lastScrollTime: d.now(),
                    event:
                        a.navigator.userAgent.indexOf('firefox') > -1
                            ? 'DOMMouseScroll'
                            : (function() {
                                  let e = 'onwheel' in i;
                                  if (!e) {
                                      const t = i.createElement('div');
                                      t.setAttribute('onwheel', 'return;'),
                                          (e = 'function' == typeof t.onwheel);
                                  }
                                  return (
                                      !e &&
                                          i.implementation &&
                                          i.implementation.hasFeature &&
                                          !0 !==
                                              i.implementation.hasFeature(
                                                  '',
                                                  ''
                                              ) &&
                                          (e = i.implementation.hasFeature(
                                              'Events.wheel',
                                              '3.0'
                                          )),
                                      e
                                  );
                              })()
                            ? 'wheel'
                            : 'mousewheel',
                    normalize(e) {
                        let t = 0,
                            s = 0,
                            i = 0,
                            a = 0;
                        return (
                            'detail' in e && (s = e.detail),
                            'wheelDelta' in e && (s = -e.wheelDelta / 120),
                            'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
                            'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                            'axis' in e &&
                                e.axis === e.HORIZONTAL_AXIS &&
                                ((t = s), (s = 0)),
                            (i = 10 * t),
                            (a = 10 * s),
                            'deltaY' in e && (a = e.deltaY),
                            'deltaX' in e && (i = e.deltaX),
                            (i || a) &&
                                e.deltaMode &&
                                (1 === e.deltaMode
                                    ? ((i *= 40), (a *= 40))
                                    : ((i *= 800), (a *= 800))),
                            i && !t && (t = i < 1 ? -1 : 1),
                            a && !s && (s = a < 1 ? -1 : 1),
                            { spinX: t, spinY: s, pixelX: i, pixelY: a }
                        );
                    },
                    handleMouseEnter() {
                        this.mouseEntered = !0;
                    },
                    handleMouseLeave() {
                        this.mouseEntered = !1;
                    },
                    handle(e) {
                        let t = e;
                        const s = this,
                            i = s.params.mousewheel;
                        if (!s.mouseEntered && !i.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        let n = 0;
                        const r = s.rtlTranslate ? -1 : 1,
                            o = A.normalize(t);
                        if (i.forceToAxis)
                            if (s.isHorizontal()) {
                                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                                    return !0;
                                n = o.pixelX * r;
                            } else {
                                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                                    return !0;
                                n = o.pixelY;
                            }
                        else
                            n =
                                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                                    ? -o.pixelX * r
                                    : -o.pixelY;
                        if (0 === n) return !0;
                        if ((i.invert && (n = -n), s.params.freeMode)) {
                            s.params.loop && s.loopFix();
                            let e = s.getTranslate() + n * i.sensitivity;
                            const a = s.isBeginning,
                                r = s.isEnd;
                            if (
                                (e >= s.minTranslate() &&
                                    (e = s.minTranslate()),
                                e <= s.maxTranslate() && (e = s.maxTranslate()),
                                s.setTransition(0),
                                s.setTranslate(e),
                                s.updateProgress(),
                                s.updateActiveIndex(),
                                s.updateSlidesClasses(),
                                ((!a && s.isBeginning) || (!r && s.isEnd)) &&
                                    s.updateSlidesClasses(),
                                s.params.freeModeSticky &&
                                    (clearTimeout(s.mousewheel.timeout),
                                    (s.mousewheel.timeout = d.nextTick(() => {
                                        s.slideToClosest();
                                    }, 300))),
                                s.emit('scroll', t),
                                s.params.autoplay &&
                                    s.params.autoplayDisableOnInteraction &&
                                    s.autoplay.stop(),
                                e === s.minTranslate() ||
                                    e === s.maxTranslate())
                            )
                                return !0;
                        } else {
                            if (d.now() - s.mousewheel.lastScrollTime > 60)
                                if (n < 0)
                                    if (
                                        (s.isEnd && !s.params.loop) ||
                                        s.animating
                                    ) {
                                        if (i.releaseOnEdges) return !0;
                                    } else s.slideNext(), s.emit('scroll', t);
                                else if (
                                    (s.isBeginning && !s.params.loop) ||
                                    s.animating
                                ) {
                                    if (i.releaseOnEdges) return !0;
                                } else s.slidePrev(), s.emit('scroll', t);
                            s.mousewheel.lastScrollTime = new a.Date().getTime();
                        }
                        return (
                            t.preventDefault
                                ? t.preventDefault()
                                : (t.returnValue = !1),
                            !1
                        );
                    },
                    enable() {
                        if (!A.event) return !1;
                        if (this.mousewheel.enabled) return !1;
                        let e = this.$el;
                        return (
                            'container' !==
                                this.params.mousewheel.eventsTarged &&
                                (e = r(this.params.mousewheel.eventsTarged)),
                            e.on(
                                'mouseenter',
                                this.mousewheel.handleMouseEnter
                            ),
                            e.on(
                                'mouseleave',
                                this.mousewheel.handleMouseLeave
                            ),
                            e.on(A.event, this.mousewheel.handle),
                            (this.mousewheel.enabled = !0),
                            !0
                        );
                    },
                    disable() {
                        if (!A.event) return !1;
                        if (!this.mousewheel.enabled) return !1;
                        let e = this.$el;
                        return (
                            'container' !==
                                this.params.mousewheel.eventsTarged &&
                                (e = r(this.params.mousewheel.eventsTarged)),
                            e.off(A.event, this.mousewheel.handle),
                            (this.mousewheel.enabled = !1),
                            !0
                        );
                    },
                },
                B = {
                    update() {
                        const e = this,
                            t = e.rtl,
                            s = e.params.pagination;
                        if (
                            !s.el ||
                            !e.pagination.el ||
                            !e.pagination.$el ||
                            0 === e.pagination.$el.length
                        )
                            return;
                        const i =
                                e.virtual && e.params.virtual.enabled
                                    ? e.virtual.slides.length
                                    : e.slides.length,
                            a = e.pagination.$el;
                        let n;
                        const o = e.params.loop
                            ? Math.ceil(
                                  (i - 2 * e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )
                            : e.snapGrid.length;
                        if (
                            (e.params.loop
                                ? ((n = Math.ceil(
                                      (e.activeIndex - e.loopedSlides) /
                                          e.params.slidesPerGroup
                                  )),
                                  n > i - 1 - 2 * e.loopedSlides &&
                                      (n -= i - 2 * e.loopedSlides),
                                  n > o - 1 && (n -= o),
                                  n < 0 &&
                                      'bullets' !== e.params.paginationType &&
                                      (n = o + n))
                                : (n =
                                      void 0 !== e.snapIndex
                                          ? e.snapIndex
                                          : e.activeIndex || 0),
                            'bullets' === s.type &&
                                e.pagination.bullets &&
                                e.pagination.bullets.length > 0)
                        ) {
                            const i = e.pagination.bullets;
                            let o, l, d;
                            if (
                                (s.dynamicBullets &&
                                    ((e.pagination.bulletSize = i
                                        .eq(0)
                                        [
                                            e.isHorizontal()
                                                ? 'outerWidth'
                                                : 'outerHeight'
                                        ](!0)),
                                    a.css(
                                        e.isHorizontal() ? 'width' : 'height',
                                        `${e.pagination.bulletSize *
                                            (s.dynamicMainBullets + 4)}px`
                                    ),
                                    s.dynamicMainBullets > 1 &&
                                        void 0 !== e.previousIndex &&
                                        ((e.pagination.dynamicBulletIndex +=
                                            n - e.previousIndex),
                                        e.pagination.dynamicBulletIndex >
                                        s.dynamicMainBullets - 1
                                            ? (e.pagination.dynamicBulletIndex =
                                                  s.dynamicMainBullets - 1)
                                            : e.pagination.dynamicBulletIndex <
                                                  0 &&
                                              (e.pagination.dynamicBulletIndex = 0)),
                                    (o = n - e.pagination.dynamicBulletIndex),
                                    (l =
                                        o +
                                        (Math.min(
                                            i.length,
                                            s.dynamicMainBullets
                                        ) -
                                            1)),
                                    (d = (l + o) / 2)),
                                i.removeClass(
                                    `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
                                ),
                                a.length > 1)
                            )
                                i.each((e, t) => {
                                    const i = r(t),
                                        a = i.index();
                                    a === n && i.addClass(s.bulletActiveClass),
                                        s.dynamicBullets &&
                                            (a >= o &&
                                                a <= l &&
                                                i.addClass(
                                                    `${s.bulletActiveClass}-main`
                                                ),
                                            a === o &&
                                                i
                                                    .prev()
                                                    .addClass(
                                                        `${s.bulletActiveClass}-prev`
                                                    )
                                                    .prev()
                                                    .addClass(
                                                        `${s.bulletActiveClass}-prev-prev`
                                                    ),
                                            a === l &&
                                                i
                                                    .next()
                                                    .addClass(
                                                        `${s.bulletActiveClass}-next`
                                                    )
                                                    .next()
                                                    .addClass(
                                                        `${s.bulletActiveClass}-next-next`
                                                    ));
                                });
                            else if (
                                (i.eq(n).addClass(s.bulletActiveClass),
                                s.dynamicBullets)
                            ) {
                                const e = i.eq(o),
                                    t = i.eq(l);
                                for (let a = o; a <= l; a += 1)
                                    i.eq(a).addClass(
                                        `${s.bulletActiveClass}-main`
                                    );
                                e
                                    .prev()
                                    .addClass(`${s.bulletActiveClass}-prev`)
                                    .prev()
                                    .addClass(
                                        `${s.bulletActiveClass}-prev-prev`
                                    ),
                                    t
                                        .next()
                                        .addClass(`${s.bulletActiveClass}-next`)
                                        .next()
                                        .addClass(
                                            `${s.bulletActiveClass}-next-next`
                                        );
                            }
                            if (s.dynamicBullets) {
                                const a = Math.min(
                                        i.length,
                                        s.dynamicMainBullets + 4
                                    ),
                                    n =
                                        (e.pagination.bulletSize * a -
                                            e.pagination.bulletSize) /
                                            2 -
                                        d * e.pagination.bulletSize,
                                    r = t ? 'right' : 'left';
                                i.css(e.isHorizontal() ? r : 'top', `${n}px`);
                            }
                        }
                        if (
                            ('fraction' === s.type &&
                                (a
                                    .find(`.${s.currentClass}`)
                                    .text(s.formatFractionCurrent(n + 1)),
                                a
                                    .find(`.${s.totalClass}`)
                                    .text(s.formatFractionTotal(o))),
                            'progressbar' === s.type)
                        ) {
                            let t;
                            t = s.progressbarOpposite
                                ? e.isHorizontal()
                                    ? 'vertical'
                                    : 'horizontal'
                                : e.isHorizontal()
                                ? 'horizontal'
                                : 'vertical';
                            const i = (n + 1) / o;
                            let r = 1,
                                l = 1;
                            'horizontal' === t ? (r = i) : (l = i),
                                a
                                    .find(`.${s.progressbarFillClass}`)
                                    .transform(
                                        `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`
                                    )
                                    .transition(e.params.speed);
                        }
                        'custom' === s.type && s.renderCustom
                            ? (a.html(s.renderCustom(e, n + 1, o)),
                              e.emit('paginationRender', e, a[0]))
                            : e.emit('paginationUpdate', e, a[0]),
                            a[
                                e.params.watchOverflow && e.isLocked
                                    ? 'addClass'
                                    : 'removeClass'
                            ](s.lockClass);
                    },
                    render() {
                        const e = this,
                            t = e.params.pagination;
                        if (
                            !t.el ||
                            !e.pagination.el ||
                            !e.pagination.$el ||
                            0 === e.pagination.$el.length
                        )
                            return;
                        const s = e.pagination.$el;
                        let i = '';
                        if ('bullets' === t.type) {
                            const a = e.params.loop
                                ? Math.ceil(
                                      ((e.virtual && e.params.virtual.enabled
                                          ? e.virtual.slides.length
                                          : e.slides.length) -
                                          2 * e.loopedSlides) /
                                          e.params.slidesPerGroup
                                  )
                                : e.snapGrid.length;
                            for (let s = 0; s < a; s += 1)
                                i += t.renderBullet
                                    ? t.renderBullet.call(e, s, t.bulletClass)
                                    : `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                            s.html(i),
                                (e.pagination.bullets = s.find(
                                    `.${t.bulletClass}`
                                ));
                        }
                        'fraction' === t.type &&
                            ((i = t.renderFraction
                                ? t.renderFraction.call(
                                      e,
                                      t.currentClass,
                                      t.totalClass
                                  )
                                : `<span class="${t.currentClass}"></span>` +
                                  ' / ' +
                                  `<span class="${t.totalClass}"></span>`),
                            s.html(i)),
                            'progressbar' === t.type &&
                                ((i = t.renderProgressbar
                                    ? t.renderProgressbar.call(
                                          e,
                                          t.progressbarFillClass
                                      )
                                    : `<span class="${t.progressbarFillClass}"></span>`),
                                s.html(i)),
                            'custom' !== t.type &&
                                e.emit('paginationRender', e.pagination.$el[0]);
                    },
                    init() {
                        const e = this,
                            t = e.params.pagination;
                        if (!t.el) return;
                        let s = r(t.el);
                        0 !== s.length &&
                            (e.params.uniqueNavElements &&
                                'string' == typeof t.el &&
                                s.length > 1 &&
                                1 === e.$el.find(t.el).length &&
                                (s = e.$el.find(t.el)),
                            'bullets' === t.type &&
                                t.clickable &&
                                s.addClass(t.clickableClass),
                            s.addClass(t.modifierClass + t.type),
                            'bullets' === t.type &&
                                t.dynamicBullets &&
                                (s.addClass(
                                    `${t.modifierClass}${t.type}-dynamic`
                                ),
                                (e.pagination.dynamicBulletIndex = 0),
                                t.dynamicMainBullets < 1 &&
                                    (t.dynamicMainBullets = 1)),
                            'progressbar' === t.type &&
                                t.progressbarOpposite &&
                                s.addClass(t.progressbarOppositeClass),
                            t.clickable &&
                                s.on('click', `.${t.bulletClass}`, function(t) {
                                    t.preventDefault();
                                    let s =
                                        r(this).index() *
                                        e.params.slidesPerGroup;
                                    e.params.loop && (s += e.loopedSlides),
                                        e.slideTo(s);
                                }),
                            d.extend(e.pagination, { $el: s, el: s[0] }));
                    },
                    destroy() {
                        const e = this.params.pagination;
                        if (
                            !e.el ||
                            !this.pagination.el ||
                            !this.pagination.$el ||
                            0 === this.pagination.$el.length
                        )
                            return;
                        const t = this.pagination.$el;
                        t.removeClass(e.hiddenClass),
                            t.removeClass(e.modifierClass + e.type),
                            this.pagination.bullets &&
                                this.pagination.bullets.removeClass(
                                    e.bulletActiveClass
                                ),
                            e.clickable && t.off('click', `.${e.bulletClass}`);
                    },
                };
            var X = {
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
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
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
                create() {
                    d.extend(this, {
                        pagination: {
                            init: B.init.bind(this),
                            render: B.render.bind(this),
                            update: B.update.bind(this),
                            destroy: B.destroy.bind(this),
                            dynamicBulletIndex: 0,
                        },
                    });
                },
                on: {
                    init() {
                        this.pagination.init(),
                            this.pagination.render(),
                            this.pagination.update();
                    },
                    activeIndexChange() {
                        this.params.loop
                            ? this.pagination.update()
                            : void 0 === this.snapIndex &&
                              this.pagination.update();
                    },
                    snapIndexChange() {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange() {
                        this.params.loop &&
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    snapGridLengthChange() {
                        this.params.loop ||
                            (this.pagination.render(),
                            this.pagination.update());
                    },
                    destroy() {
                        this.pagination.destroy();
                    },
                    click(e) {
                        const t = this;
                        if (
                            t.params.pagination.el &&
                            t.params.pagination.hideOnClick &&
                            t.pagination.$el.length > 0 &&
                            !r(e.target).hasClass(
                                t.params.pagination.bulletClass
                            )
                        ) {
                            const e = t.pagination.$el.hasClass(
                                t.params.pagination.hiddenClass
                            );
                            t.emit(
                                !0 === e ? 'paginationShow' : 'paginationHide',
                                t
                            ),
                                t.pagination.$el.toggleClass(
                                    t.params.pagination.hiddenClass
                                );
                        }
                    },
                },
            };
            const Y = {
                setTranslate() {
                    if (!this.params.scrollbar.el || !this.scrollbar.el) return;
                    const { scrollbar: e, rtlTranslate: t, progress: s } = this,
                        { dragSize: i, trackSize: a, $dragEl: n, $el: r } = e,
                        o = this.params.scrollbar;
                    let l = i,
                        d = (a - i) * s;
                    t
                        ? ((d = -d),
                          d > 0
                              ? ((l = i - d), (d = 0))
                              : -d + i > a && (l = a + d))
                        : d < 0
                        ? ((l = i + d), (d = 0))
                        : d + i > a && (l = a - d),
                        this.isHorizontal()
                            ? (n.transform(
                                  c.transforms3d
                                      ? `translate3d(${d}px, 0, 0)`
                                      : `translateX(${d}px)`
                              ),
                              (n[0].style.width = `${l}px`))
                            : (n.transform(
                                  c.transforms3d
                                      ? `translate3d(0px, ${d}px, 0)`
                                      : `translateY(${d}px)`
                              ),
                              (n[0].style.height = `${l}px`)),
                        o.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (r[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(() => {
                                (r[0].style.opacity = 0), r.transition(400);
                            }, 1e3)));
                },
                setTransition(e) {
                    this.params.scrollbar.el &&
                        this.scrollbar.el &&
                        this.scrollbar.$dragEl.transition(e);
                },
                updateSize() {
                    if (!this.params.scrollbar.el || !this.scrollbar.el) return;
                    const { scrollbar: e } = this,
                        { $dragEl: t, $el: s } = e;
                    (t[0].style.width = ''), (t[0].style.height = '');
                    const i = this.isHorizontal()
                            ? s[0].offsetWidth
                            : s[0].offsetHeight,
                        a = this.size / this.virtualSize,
                        n = a * (i / this.size);
                    let r;
                    (r =
                        'auto' === this.params.scrollbar.dragSize
                            ? i * a
                            : parseInt(this.params.scrollbar.dragSize, 10)),
                        this.isHorizontal()
                            ? (t[0].style.width = `${r}px`)
                            : (t[0].style.height = `${r}px`),
                        (s[0].style.display = a >= 1 ? 'none' : ''),
                        this.params.scrollbar.hide && (s[0].style.opacity = 0),
                        d.extend(e, {
                            trackSize: i,
                            divider: a,
                            moveDivider: n,
                            dragSize: r,
                        }),
                        e.$el[
                            this.params.watchOverflow && this.isLocked
                                ? 'addClass'
                                : 'removeClass'
                        ](this.params.scrollbar.lockClass);
                },
                getPointerPosition(e) {
                    return this.isHorizontal()
                        ? 'touchstart' === e.type || 'touchmove' === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : 'touchstart' === e.type || 'touchmove' === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY;
                },
                setDragPosition(e) {
                    const { scrollbar: t, rtlTranslate: s } = this,
                        {
                            $el: i,
                            dragSize: a,
                            trackSize: n,
                            dragStartPos: r,
                        } = t;
                    let o;
                    (o =
                        (t.getPointerPosition(e) -
                            i.offset()[this.isHorizontal() ? 'left' : 'top'] -
                            (null !== r ? r : a / 2)) /
                        (n - a)),
                        (o = Math.max(Math.min(o, 1), 0)),
                        s && (o = 1 - o);
                    const l =
                        this.minTranslate() +
                        (this.maxTranslate() - this.minTranslate()) * o;
                    this.updateProgress(l),
                        this.setTranslate(l),
                        this.updateActiveIndex(),
                        this.updateSlidesClasses();
                },
                onDragStart(e) {
                    const t = this.params.scrollbar,
                        { scrollbar: s, $wrapperEl: i } = this,
                        { $el: a, $dragEl: n } = s;
                    (this.scrollbar.isTouched = !0),
                        (this.scrollbar.dragStartPos =
                            e.target === n[0] || e.target === n
                                ? s.getPointerPosition(e) -
                                  e.target.getBoundingClientRect()[
                                      this.isHorizontal() ? 'left' : 'top'
                                  ]
                                : null),
                        e.preventDefault(),
                        e.stopPropagation(),
                        i.transition(100),
                        n.transition(100),
                        s.setDragPosition(e),
                        clearTimeout(this.scrollbar.dragTimeout),
                        a.transition(0),
                        t.hide && a.css('opacity', 1),
                        this.emit('scrollbarDragStart', e);
                },
                onDragMove(e) {
                    const { scrollbar: t, $wrapperEl: s } = this,
                        { $el: i, $dragEl: a } = t;
                    this.scrollbar.isTouched &&
                        (e.preventDefault
                            ? e.preventDefault()
                            : (e.returnValue = !1),
                        t.setDragPosition(e),
                        s.transition(0),
                        i.transition(0),
                        a.transition(0),
                        this.emit('scrollbarDragMove', e));
                },
                onDragEnd(e) {
                    const t = this.params.scrollbar,
                        { scrollbar: s } = this,
                        { $el: i } = s;
                    this.scrollbar.isTouched &&
                        ((this.scrollbar.isTouched = !1),
                        t.hide &&
                            (clearTimeout(this.scrollbar.dragTimeout),
                            (this.scrollbar.dragTimeout = d.nextTick(() => {
                                i.css('opacity', 0), i.transition(400);
                            }, 1e3))),
                        this.emit('scrollbarDragEnd', e),
                        t.snapOnRelease && this.slideToClosest());
                },
                enableDraggable() {
                    if (!this.params.scrollbar.el) return;
                    const {
                            scrollbar: e,
                            touchEventsTouch: t,
                            touchEventsDesktop: s,
                            params: a,
                        } = this,
                        n = e.$el[0],
                        r = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    c.touch
                        ? (n.addEventListener(
                              t.start,
                              this.scrollbar.onDragStart,
                              r
                          ),
                          n.addEventListener(
                              t.move,
                              this.scrollbar.onDragMove,
                              r
                          ),
                          n.addEventListener(
                              t.end,
                              this.scrollbar.onDragEnd,
                              o
                          ))
                        : (n.addEventListener(
                              s.start,
                              this.scrollbar.onDragStart,
                              r
                          ),
                          i.addEventListener(
                              s.move,
                              this.scrollbar.onDragMove,
                              r
                          ),
                          i.addEventListener(
                              s.end,
                              this.scrollbar.onDragEnd,
                              o
                          ));
                },
                disableDraggable() {
                    if (!this.params.scrollbar.el) return;
                    const {
                            scrollbar: e,
                            touchEventsTouch: t,
                            touchEventsDesktop: s,
                            params: a,
                        } = this,
                        n = e.$el[0],
                        r = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        o = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    c.touch
                        ? (n.removeEventListener(
                              t.start,
                              this.scrollbar.onDragStart,
                              r
                          ),
                          n.removeEventListener(
                              t.move,
                              this.scrollbar.onDragMove,
                              r
                          ),
                          n.removeEventListener(
                              t.end,
                              this.scrollbar.onDragEnd,
                              o
                          ))
                        : (n.removeEventListener(
                              s.start,
                              this.scrollbar.onDragStart,
                              r
                          ),
                          i.removeEventListener(
                              s.move,
                              this.scrollbar.onDragMove,
                              r
                          ),
                          i.removeEventListener(
                              s.end,
                              this.scrollbar.onDragEnd,
                              o
                          ));
                },
                init() {
                    if (!this.params.scrollbar.el) return;
                    const { scrollbar: e, $el: t } = this,
                        s = this.params.scrollbar;
                    let i = r(s.el);
                    this.params.uniqueNavElements &&
                        'string' == typeof s.el &&
                        i.length > 1 &&
                        1 === t.find(s.el).length &&
                        (i = t.find(s.el));
                    let a = i.find(`.${this.params.scrollbar.dragClass}`);
                    0 === a.length &&
                        ((a = r(
                            `<div class="${this.params.scrollbar.dragClass}"></div>`
                        )),
                        i.append(a)),
                        d.extend(e, {
                            $el: i,
                            el: i[0],
                            $dragEl: a,
                            dragEl: a[0],
                        }),
                        s.draggable && e.enableDraggable();
                },
                destroy() {
                    this.scrollbar.disableDraggable();
                },
            };
            var G = {
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
                create() {
                    d.extend(this, {
                        scrollbar: {
                            init: Y.init.bind(this),
                            destroy: Y.destroy.bind(this),
                            updateSize: Y.updateSize.bind(this),
                            setTranslate: Y.setTranslate.bind(this),
                            setTransition: Y.setTransition.bind(this),
                            enableDraggable: Y.enableDraggable.bind(this),
                            disableDraggable: Y.disableDraggable.bind(this),
                            setDragPosition: Y.setDragPosition.bind(this),
                            getPointerPosition: Y.getPointerPosition.bind(this),
                            onDragStart: Y.onDragStart.bind(this),
                            onDragMove: Y.onDragMove.bind(this),
                            onDragEnd: Y.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init() {
                        this.scrollbar.init(),
                            this.scrollbar.updateSize(),
                            this.scrollbar.setTranslate();
                    },
                    update() {
                        this.scrollbar.updateSize();
                    },
                    resize() {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate() {
                        this.scrollbar.updateSize();
                    },
                    setTranslate() {
                        this.scrollbar.setTranslate();
                    },
                    setTransition(e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy() {
                        this.scrollbar.destroy();
                    },
                },
            };
            const V = {
                getDistanceBetweenTouches: (e) =>
                    e.targetTouches.length < 2
                        ? 1
                        : Math.sqrt(
                              (e.targetTouches[1].pageX -
                                  e.targetTouches[0].pageX) **
                                  2 +
                                  (e.targetTouches[1].pageY -
                                      e.targetTouches[0].pageY) **
                                      2
                          ),
                onGestureStart(e) {
                    const t = this.params.zoom,
                        s = this.zoom,
                        { gesture: i } = s;
                    if (
                        ((s.fakeGestureTouched = !1),
                        (s.fakeGestureMoved = !1),
                        !c.gestures)
                    ) {
                        if (
                            'touchstart' !== e.type ||
                            ('touchstart' === e.type &&
                                e.targetTouches.length < 2)
                        )
                            return;
                        (s.fakeGestureTouched = !0),
                            (i.scaleStart = V.getDistanceBetweenTouches(e));
                    }
                    (i.$slideEl && i.$slideEl.length) ||
                    ((i.$slideEl = r(e.target).closest('.swiper-slide')),
                    0 === i.$slideEl.length &&
                        (i.$slideEl = this.slides.eq(this.activeIndex)),
                    (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
                    (i.$imageWrapEl = i.$imageEl.parent(
                        `.${t.containerClass}`
                    )),
                    (i.maxRatio =
                        i.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio),
                    0 !== i.$imageWrapEl.length)
                        ? (i.$imageEl.transition(0), (this.zoom.isScaling = !0))
                        : (i.$imageEl = void 0);
                },
                onGestureChange(e) {
                    const t = this.params.zoom,
                        s = this.zoom,
                        { gesture: i } = s;
                    if (!c.gestures) {
                        if (
                            'touchmove' !== e.type ||
                            ('touchmove' === e.type &&
                                e.targetTouches.length < 2)
                        )
                            return;
                        (s.fakeGestureMoved = !0),
                            (i.scaleMove = V.getDistanceBetweenTouches(e));
                    }
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((s.scale = c.gestures
                            ? e.scale * s.currentScale
                            : (i.scaleMove / i.scaleStart) * s.currentScale),
                        s.scale > i.maxRatio &&
                            (s.scale =
                                i.maxRatio -
                                1 +
                                (s.scale - i.maxRatio + 1) ** 0.5),
                        s.scale < t.minRatio &&
                            (s.scale =
                                t.minRatio +
                                1 -
                                (t.minRatio - s.scale + 1) ** 0.5),
                        i.$imageEl.transform(
                            `translate3d(0,0,0) scale(${s.scale})`
                        ));
                },
                onGestureEnd(e) {
                    const t = this.params.zoom,
                        s = this.zoom,
                        { gesture: i } = s;
                    if (!c.gestures) {
                        if (!s.fakeGestureTouched || !s.fakeGestureMoved)
                            return;
                        if (
                            'touchend' !== e.type ||
                            ('touchend' === e.type &&
                                e.changedTouches.length < 2 &&
                                !w.android)
                        )
                            return;
                        (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
                    }
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        ((s.scale = Math.max(
                            Math.min(s.scale, i.maxRatio),
                            t.minRatio
                        )),
                        i.$imageEl
                            .transition(this.params.speed)
                            .transform(`translate3d(0,0,0) scale(${s.scale})`),
                        (s.currentScale = s.scale),
                        (s.isScaling = !1),
                        1 === s.scale && (i.$slideEl = void 0));
                },
                onTouchStart(e) {
                    const t = this.zoom,
                        { gesture: s, image: i } = t;
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        (i.isTouched ||
                            (w.android && e.preventDefault(),
                            (i.isTouched = !0),
                            (i.touchesStart.x =
                                'touchstart' === e.type
                                    ? e.targetTouches[0].pageX
                                    : e.pageX),
                            (i.touchesStart.y =
                                'touchstart' === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY)));
                },
                onTouchMove(e) {
                    const t = this,
                        s = t.zoom,
                        { gesture: i, image: a, velocity: n } = s;
                    if (!i.$imageEl || 0 === i.$imageEl.length) return;
                    if (((t.allowClick = !1), !a.isTouched || !i.$slideEl))
                        return;
                    a.isMoved ||
                        ((a.width = i.$imageEl[0].offsetWidth),
                        (a.height = i.$imageEl[0].offsetHeight),
                        (a.startX =
                            d.getTranslate(i.$imageWrapEl[0], 'x') || 0),
                        (a.startY =
                            d.getTranslate(i.$imageWrapEl[0], 'y') || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl &&
                            ((a.startX = -a.startX), (a.startY = -a.startY)));
                    const r = a.width * s.scale,
                        o = a.height * s.scale;
                    if (!(r < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((a.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
                            (a.maxX = -a.minX),
                            (a.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (a.maxY = -a.minY),
                            (a.touchesCurrent.x =
                                'touchmove' === e.type
                                    ? e.targetTouches[0].pageX
                                    : e.pageX),
                            (a.touchesCurrent.y =
                                'touchmove' === e.type
                                    ? e.targetTouches[0].pageY
                                    : e.pageY),
                            !a.isMoved && !s.isScaling)
                        ) {
                            if (
                                t.isHorizontal() &&
                                ((Math.floor(a.minX) === Math.floor(a.startX) &&
                                    a.touchesCurrent.x < a.touchesStart.x) ||
                                    (Math.floor(a.maxX) ===
                                        Math.floor(a.startX) &&
                                        a.touchesCurrent.x > a.touchesStart.x))
                            )
                                return void (a.isTouched = !1);
                            if (
                                !t.isHorizontal() &&
                                ((Math.floor(a.minY) === Math.floor(a.startY) &&
                                    a.touchesCurrent.y < a.touchesStart.y) ||
                                    (Math.floor(a.maxY) ===
                                        Math.floor(a.startY) &&
                                        a.touchesCurrent.y > a.touchesStart.y))
                            )
                                return void (a.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (a.isMoved = !0),
                            (a.currentX =
                                a.touchesCurrent.x -
                                a.touchesStart.x +
                                a.startX),
                            (a.currentY =
                                a.touchesCurrent.y -
                                a.touchesStart.y +
                                a.startY),
                            a.currentX < a.minX &&
                                (a.currentX =
                                    a.minX +
                                    1 -
                                    (a.minX - a.currentX + 1) ** 0.8),
                            a.currentX > a.maxX &&
                                (a.currentX =
                                    a.maxX -
                                    1 +
                                    (a.currentX - a.maxX + 1) ** 0.8),
                            a.currentY < a.minY &&
                                (a.currentY =
                                    a.minY +
                                    1 -
                                    (a.minY - a.currentY + 1) ** 0.8),
                            a.currentY > a.maxY &&
                                (a.currentY =
                                    a.maxY -
                                    1 +
                                    (a.currentY - a.maxY + 1) ** 0.8),
                            n.prevPositionX ||
                                (n.prevPositionX = a.touchesCurrent.x),
                            n.prevPositionY ||
                                (n.prevPositionY = a.touchesCurrent.y),
                            n.prevTime || (n.prevTime = Date.now()),
                            (n.x =
                                (a.touchesCurrent.x - n.prevPositionX) /
                                (Date.now() - n.prevTime) /
                                2),
                            (n.y =
                                (a.touchesCurrent.y - n.prevPositionY) /
                                (Date.now() - n.prevTime) /
                                2),
                            Math.abs(a.touchesCurrent.x - n.prevPositionX) <
                                2 && (n.x = 0),
                            Math.abs(a.touchesCurrent.y - n.prevPositionY) <
                                2 && (n.y = 0),
                            (n.prevPositionX = a.touchesCurrent.x),
                            (n.prevPositionY = a.touchesCurrent.y),
                            (n.prevTime = Date.now()),
                            i.$imageWrapEl.transform(
                                `translate3d(${a.currentX}px, ${a.currentY}px,0)`
                            );
                    }
                },
                onTouchEnd() {
                    const e = this.zoom,
                        { gesture: t, image: s, velocity: i } = e;
                    if (!t.$imageEl || 0 === t.$imageEl.length) return;
                    if (!s.isTouched || !s.isMoved)
                        return (s.isTouched = !1), void (s.isMoved = !1);
                    (s.isTouched = !1), (s.isMoved = !1);
                    let a = 300,
                        n = 300;
                    const r = s.currentX + i.x * a,
                        o = s.currentY + i.y * n;
                    0 !== i.x && (a = Math.abs((r - s.currentX) / i.x)),
                        0 !== i.y && (n = Math.abs((o - s.currentY) / i.y));
                    const l = Math.max(a, n);
                    (s.currentX = r), (s.currentY = o);
                    const d = s.height * e.scale;
                    (s.minX = Math.min(
                        t.slideWidth / 2 - (s.width * e.scale) / 2,
                        0
                    )),
                        (s.maxX = -s.minX),
                        (s.minY = Math.min(t.slideHeight / 2 - d / 2, 0)),
                        (s.maxY = -s.minY),
                        (s.currentX = Math.max(
                            Math.min(s.currentX, s.maxX),
                            s.minX
                        )),
                        (s.currentY = Math.max(
                            Math.min(s.currentY, s.maxY),
                            s.minY
                        )),
                        t.$imageWrapEl
                            .transition(l)
                            .transform(
                                `translate3d(${s.currentX}px, ${s.currentY}px,0)`
                            );
                },
                onTransitionEnd() {
                    const e = this.zoom,
                        { gesture: t } = e;
                    t.$slideEl &&
                        this.previousIndex !== this.activeIndex &&
                        (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
                        t.$imageWrapEl.transform('translate3d(0,0,0)'),
                        (e.scale = 1),
                        (e.currentScale = 1),
                        (t.$slideEl = void 0),
                        (t.$imageEl = void 0),
                        (t.$imageWrapEl = void 0));
                },
                toggle(e) {
                    const t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e);
                },
                in(e) {
                    const t = this.zoom,
                        s = this.params.zoom,
                        { gesture: i, image: a } = t;
                    if (
                        (i.$slideEl ||
                            ((i.$slideEl = this.clickedSlide
                                ? r(this.clickedSlide)
                                : this.slides.eq(this.activeIndex)),
                            (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
                            (i.$imageWrapEl = i.$imageEl.parent(
                                `.${s.containerClass}`
                            ))),
                        !i.$imageEl || 0 === i.$imageEl.length)
                    )
                        return;
                    let n, o, l, d, c, p, h, u, m, g, f, v, b, w, T, E, x, y;
                    i.$slideEl.addClass(`${s.zoomedSlideClass}`),
                        void 0 === a.touchesStart.x && e
                            ? ((n =
                                  'touchend' === e.type
                                      ? e.changedTouches[0].pageX
                                      : e.pageX),
                              (o =
                                  'touchend' === e.type
                                      ? e.changedTouches[0].pageY
                                      : e.pageY))
                            : ((n = a.touchesStart.x), (o = a.touchesStart.y)),
                        (t.scale =
                            i.$imageWrapEl.attr('data-swiper-zoom') ||
                            s.maxRatio),
                        (t.currentScale =
                            i.$imageWrapEl.attr('data-swiper-zoom') ||
                            s.maxRatio),
                        e
                            ? ((x = i.$slideEl[0].offsetWidth),
                              (y = i.$slideEl[0].offsetHeight),
                              (l = i.$slideEl.offset().left),
                              (d = i.$slideEl.offset().top),
                              (c = l + x / 2 - n),
                              (p = d + y / 2 - o),
                              (m = i.$imageEl[0].offsetWidth),
                              (g = i.$imageEl[0].offsetHeight),
                              (f = m * t.scale),
                              (v = g * t.scale),
                              (b = Math.min(x / 2 - f / 2, 0)),
                              (w = Math.min(y / 2 - v / 2, 0)),
                              (T = -b),
                              (E = -w),
                              (h = c * t.scale),
                              (u = p * t.scale),
                              h < b && (h = b),
                              h > T && (h = T),
                              u < w && (u = w),
                              u > E && (u = E))
                            : ((h = 0), (u = 0)),
                        i.$imageWrapEl
                            .transition(300)
                            .transform(`translate3d(${h}px, ${u}px,0)`),
                        i.$imageEl
                            .transition(300)
                            .transform(`translate3d(0,0,0) scale(${t.scale})`);
                },
                out() {
                    const e = this.zoom,
                        t = this.params.zoom,
                        { gesture: s } = e;
                    s.$slideEl ||
                        ((s.$slideEl = this.clickedSlide
                            ? r(this.clickedSlide)
                            : this.slides.eq(this.activeIndex)),
                        (s.$imageEl = s.$slideEl.find('img, svg, canvas')),
                        (s.$imageWrapEl = s.$imageEl.parent(
                            `.${t.containerClass}`
                        ))),
                        s.$imageEl &&
                            0 !== s.$imageEl.length &&
                            ((e.scale = 1),
                            (e.currentScale = 1),
                            s.$imageWrapEl
                                .transition(300)
                                .transform('translate3d(0,0,0)'),
                            s.$imageEl
                                .transition(300)
                                .transform('translate3d(0,0,0) scale(1)'),
                            s.$slideEl.removeClass(`${t.zoomedSlideClass}`),
                            (s.$slideEl = void 0));
                },
                enable() {
                    const e = this.zoom;
                    if (e.enabled) return;
                    e.enabled = !0;
                    const t = !(
                        'touchstart' !== this.touchEvents.start ||
                        !c.passiveListener ||
                        !this.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    c.gestures
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
                            `.${this.params.zoom.containerClass}`,
                            e.onTouchMove
                        );
                },
                disable() {
                    const e = this.zoom;
                    if (!e.enabled) return;
                    this.zoom.enabled = !1;
                    const t = !(
                        'touchstart' !== this.touchEvents.start ||
                        !c.passiveListener ||
                        !this.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    c.gestures
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
                            `.${this.params.zoom.containerClass}`,
                            e.onTouchMove
                        );
                },
            };
            var H = {
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
                create() {
                    const e = this,
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
                        .forEach((s) => {
                            t[s] = V[s].bind(e);
                        }),
                        d.extend(e, { zoom: t });
                    let s = 1;
                    Object.defineProperty(e.zoom, 'scale', {
                        get: () => s,
                        set(t) {
                            s !== t &&
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
                                (s = t);
                        },
                    });
                },
                on: {
                    init() {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy() {
                        this.zoom.disable();
                    },
                    touchStart(e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd(e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap(e) {
                        this.params.zoom.enabled &&
                            this.zoom.enabled &&
                            this.params.zoom.toggle &&
                            this.zoom.toggle(e);
                    },
                    transitionEnd() {
                        this.zoom.enabled &&
                            this.params.zoom.enabled &&
                            this.zoom.onTransitionEnd();
                    },
                },
            };
            const F = {
                run() {
                    const e = this,
                        t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr('data-swiper-autoplay') &&
                        (s =
                            t.attr('data-swiper-autoplay') ||
                            e.params.autoplay.delay),
                        clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = d.nextTick(() => {
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
                        }, s));
                },
                start() {
                    return (
                        void 0 === this.autoplay.timeout &&
                        !this.autoplay.running &&
                        ((this.autoplay.running = !0),
                        this.emit('autoplayStart'),
                        this.autoplay.run(),
                        !0)
                    );
                },
                stop() {
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
                pause(e) {
                    this.autoplay.running &&
                        (this.autoplay.paused ||
                            (this.autoplay.timeout &&
                                clearTimeout(this.autoplay.timeout),
                            (this.autoplay.paused = !0),
                            0 !== e && this.params.autoplay.waitForTransition
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
            };
            var N = {
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
                create() {
                    const e = this;
                    d.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: F.run.bind(e),
                            start: F.start.bind(e),
                            stop: F.stop.bind(e),
                            pause: F.pause.bind(e),
                            onTransitionEnd(t) {
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
                    init() {
                        this.params.autoplay.enabled && this.autoplay.start();
                    },
                    beforeTransitionStart(e, t) {
                        this.autoplay.running &&
                            (t || !this.params.autoplay.disableOnInteraction
                                ? this.autoplay.pause(e)
                                : this.autoplay.stop());
                    },
                    sliderFirstMove() {
                        this.autoplay.running &&
                            (this.params.autoplay.disableOnInteraction
                                ? this.autoplay.stop()
                                : this.autoplay.pause());
                    },
                    destroy() {
                        this.autoplay.running && this.autoplay.stop();
                    },
                },
            };
            const W = [z, k, L, D, O];
            void 0 === P.use &&
                ((P.use = P.Class.use),
                (P.installModule = P.Class.installModule)),
                P.use(W),
                P.use([X, G, N, H]);
        },
    },
]);
