function _defineProperty(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function asyncGeneratorStep(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            l = s.value;
    } catch (d) {
        return void n(d);
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i);
}
function _asyncToGenerator(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, i) {
            var a = e.apply(t, n);
            function o(e) {
                asyncGeneratorStep(a, r, i, o, s, 'next', e);
            }
            function s(e) {
                asyncGeneratorStep(a, r, i, o, s, 'throw', e);
            }
            o(void 0);
        });
    };
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function _createClass(e, t, n) {
    return (
        t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [63],
    {
        fD4w: function(e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'ion_range', function() {
                    return o;
                });
            var r = n('imtE'),
                i = (n('AfW+'), n('aiEM')),
                a = n('Dl6n'),
                o = (function() {
                    function e(t) {
                        var n = this;
                        _classCallCheck(this, e),
                            Object(r.k)(this, t),
                            (this.noUpdate = !1),
                            (this.hasFocus = !1),
                            (this.ratioA = 0),
                            (this.ratioB = 0),
                            (this.debounce = 0),
                            (this.name = ''),
                            (this.dualKnobs = !1),
                            (this.min = 0),
                            (this.max = 100),
                            (this.pin = !1),
                            (this.snaps = !1),
                            (this.step = 1),
                            (this.ticks = !0),
                            (this.disabled = !1),
                            (this.value = 0),
                            (this.clampBounds = function(e) {
                                return Object(i.c)(n.min, e, n.max);
                            }),
                            (this.ensureValueInBounds = function(e) {
                                return n.dualKnobs
                                    ? {
                                          lower: n.clampBounds(e.lower),
                                          upper: n.clampBounds(e.upper),
                                      }
                                    : n.clampBounds(e);
                            }),
                            (this.handleKeyboard = function(e, t) {
                                var r = n.step;
                                (r = r > 0 ? r : 1),
                                    (r /= n.max - n.min),
                                    t || (r *= -1),
                                    'A' === e
                                        ? (n.ratioA = Object(i.c)(
                                              0,
                                              n.ratioA + r,
                                              1
                                          ))
                                        : (n.ratioB = Object(i.c)(
                                              0,
                                              n.ratioB + r,
                                              1
                                          )),
                                    n.updateValue();
                            }),
                            (this.onBlur = function() {
                                n.hasFocus &&
                                    ((n.hasFocus = !1),
                                    n.ionBlur.emit(),
                                    n.emitStyle());
                            }),
                            (this.onFocus = function() {
                                n.hasFocus ||
                                    ((n.hasFocus = !0),
                                    n.ionFocus.emit(),
                                    n.emitStyle());
                            }),
                            (this.ionChange = Object(r.e)(
                                this,
                                'ionChange',
                                7
                            )),
                            (this.ionStyle = Object(r.e)(this, 'ionStyle', 7)),
                            (this.ionFocus = Object(r.e)(this, 'ionFocus', 7)),
                            (this.ionBlur = Object(r.e)(this, 'ionBlur', 7));
                    }
                    var t;
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'debounceChanged',
                                    value: function() {
                                        this.ionChange = Object(i.d)(
                                            this.ionChange,
                                            this.debounce
                                        );
                                    },
                                },
                                {
                                    key: 'minChanged',
                                    value: function() {
                                        this.noUpdate || this.updateRatio();
                                    },
                                },
                                {
                                    key: 'maxChanged',
                                    value: function() {
                                        this.noUpdate || this.updateRatio();
                                    },
                                },
                                {
                                    key: 'disabledChanged',
                                    value: function() {
                                        this.gesture &&
                                            this.gesture.enable(!this.disabled),
                                            this.emitStyle();
                                    },
                                },
                                {
                                    key: 'valueChanged',
                                    value: function(e) {
                                        this.noUpdate || this.updateRatio(),
                                            (e = this.ensureValueInBounds(e)),
                                            this.ionChange.emit({ value: e });
                                    },
                                },
                                {
                                    key: 'connectedCallback',
                                    value: function() {
                                        this.updateRatio(),
                                            this.debounceChanged(),
                                            this.disabledChanged();
                                    },
                                },
                                {
                                    key: 'disconnectedCallback',
                                    value: function() {
                                        this.gesture &&
                                            (this.gesture.destroy(),
                                            (this.gesture = void 0));
                                    },
                                },
                                {
                                    key: 'componentDidLoad',
                                    value:
                                        ((t = _asyncToGenerator(
                                            regeneratorRuntime.mark(
                                                function e() {
                                                    var t,
                                                        r = this;
                                                    return regeneratorRuntime.wrap(
                                                        function(e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        if (
                                                                            ((t = this
                                                                                .rangeSlider),
                                                                            (e.t0 = t),
                                                                            !e.t0)
                                                                        ) {
                                                                            e.next = 7;
                                                                            break;
                                                                        }
                                                                        return (
                                                                            (e.next = 5),
                                                                            Promise.resolve().then(
                                                                                n.bind(
                                                                                    null,
                                                                                    'AzGJ'
                                                                                )
                                                                            )
                                                                        );
                                                                    case 5:
                                                                        (this.gesture = e.sent.createGesture(
                                                                            {
                                                                                el: t,
                                                                                gestureName:
                                                                                    'range',
                                                                                gesturePriority: 100,
                                                                                threshold: 0,
                                                                                onStart: function(
                                                                                    e
                                                                                ) {
                                                                                    return r.onStart(
                                                                                        e
                                                                                    );
                                                                                },
                                                                                onMove: function(
                                                                                    e
                                                                                ) {
                                                                                    return r.onMove(
                                                                                        e
                                                                                    );
                                                                                },
                                                                                onEnd: function(
                                                                                    e
                                                                                ) {
                                                                                    return r.onEnd(
                                                                                        e
                                                                                    );
                                                                                },
                                                                            }
                                                                        )),
                                                                            this.gesture.enable(
                                                                                !this
                                                                                    .disabled
                                                                            );
                                                                    case 7:
                                                                    case 'end':
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        this
                                                    );
                                                }
                                            )
                                        )),
                                        function() {
                                            return t.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'getValue',
                                    value: function() {
                                        var e = this.value || 0;
                                        return this.dualKnobs
                                            ? 'object' == typeof e
                                                ? e
                                                : { lower: 0, upper: e }
                                            : 'object' == typeof e
                                            ? e.upper
                                            : e;
                                    },
                                },
                                {
                                    key: 'emitStyle',
                                    value: function() {
                                        this.ionStyle.emit({
                                            interactive: !0,
                                            'interactive-disabled': this
                                                .disabled,
                                        });
                                    },
                                },
                                {
                                    key: 'onStart',
                                    value: function(e) {
                                        var t = (this.rect = this.rangeSlider.getBoundingClientRect()),
                                            n = e.currentX,
                                            r = Object(i.c)(
                                                0,
                                                (n - t.left) / t.width,
                                                1
                                            );
                                        'rtl' === document.dir && (r = 1 - r),
                                            (this.pressedKnob =
                                                !this.dualKnobs ||
                                                Math.abs(this.ratioA - r) <
                                                    Math.abs(this.ratioB - r)
                                                    ? 'A'
                                                    : 'B'),
                                            this.setFocus(this.pressedKnob),
                                            this.update(n);
                                    },
                                },
                                {
                                    key: 'onMove',
                                    value: function(e) {
                                        this.update(e.currentX);
                                    },
                                },
                                {
                                    key: 'onEnd',
                                    value: function(e) {
                                        this.update(e.currentX),
                                            (this.pressedKnob = void 0);
                                    },
                                },
                                {
                                    key: 'update',
                                    value: function(e) {
                                        var t = this.rect,
                                            n = Object(i.c)(
                                                0,
                                                (e - t.left) / t.width,
                                                1
                                            );
                                        'rtl' === document.dir && (n = 1 - n),
                                            this.snaps &&
                                                (n = d(
                                                    l(
                                                        n,
                                                        this.min,
                                                        this.max,
                                                        this.step
                                                    ),
                                                    this.min,
                                                    this.max
                                                )),
                                            'A' === this.pressedKnob
                                                ? (this.ratioA = n)
                                                : (this.ratioB = n),
                                            this.updateValue();
                                    },
                                },
                                {
                                    key: 'updateRatio',
                                    value: function() {
                                        var e = this.getValue(),
                                            t = this.min,
                                            n = this.max;
                                        this.dualKnobs
                                            ? ((this.ratioA = d(e.lower, t, n)),
                                              (this.ratioB = d(e.upper, t, n)))
                                            : (this.ratioA = d(e, t, n));
                                    },
                                },
                                {
                                    key: 'updateValue',
                                    value: function() {
                                        this.noUpdate = !0;
                                        var e = this.valA,
                                            t = this.valB;
                                        (this.value = this.dualKnobs
                                            ? {
                                                  lower: Math.min(e, t),
                                                  upper: Math.max(e, t),
                                              }
                                            : e),
                                            (this.noUpdate = !1);
                                    },
                                },
                                {
                                    key: 'setFocus',
                                    value: function(e) {
                                        if (this.el.shadowRoot) {
                                            var t = this.el.shadowRoot.querySelector(
                                                'A' === e
                                                    ? '.range-knob-a'
                                                    : '.range-knob-b'
                                            );
                                            t && t.focus();
                                        }
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e,
                                            t,
                                            n = this,
                                            o = this.min,
                                            l = this.max,
                                            c = this.step,
                                            h = this.el,
                                            u = this.handleKeyboard,
                                            b = this.pressedKnob,
                                            g = this.disabled,
                                            p = this.pin,
                                            f = this.ratioLower,
                                            k = this.ratioUpper,
                                            m = Object(r.d)(this),
                                            v = 'rtl' === document.dir,
                                            x = v ? 'right' : 'left',
                                            w = function(e) {
                                                return _defineProperty(
                                                    {},
                                                    x,
                                                    e[x]
                                                );
                                            },
                                            y =
                                                (_defineProperty(
                                                    (e = {}),
                                                    x,
                                                    ''.concat(100 * f, '%')
                                                ),
                                                _defineProperty(
                                                    e,
                                                    v ? 'left' : 'right',
                                                    ''.concat(
                                                        100 - 100 * k,
                                                        '%'
                                                    )
                                                ),
                                                e),
                                            j = [];
                                        if (this.snaps && this.ticks)
                                            for (var O = o; O <= l; O += c) {
                                                var B = d(O, o, l),
                                                    A = {
                                                        ratio: B,
                                                        active:
                                                            B >= f && B <= k,
                                                    };
                                                (A[x] = ''.concat(
                                                    100 * B,
                                                    '%'
                                                )),
                                                    j.push(A);
                                            }
                                        return (
                                            Object(i.a)(
                                                !0,
                                                h,
                                                this.name,
                                                JSON.stringify(this.getValue()),
                                                g
                                            ),
                                            Object(r.i)(
                                                r.a,
                                                {
                                                    onFocusin: this.onFocus,
                                                    onFocusout: this.onBlur,
                                                    class: Object.assign(
                                                        Object.assign(
                                                            {},
                                                            Object(a.a)(
                                                                this.color
                                                            )
                                                        ),
                                                        ((t = {}),
                                                        _defineProperty(
                                                            t,
                                                            m,
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'in-item',
                                                            Object(a.c)(
                                                                'ion-item',
                                                                h
                                                            )
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'range-disabled',
                                                            g
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'range-pressed',
                                                            void 0 !== b
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'range-has-pin',
                                                            p
                                                        ),
                                                        t)
                                                    ),
                                                },
                                                Object(r.i)('slot', {
                                                    name: 'start',
                                                }),
                                                Object(r.i)(
                                                    'div',
                                                    {
                                                        class: 'range-slider',
                                                        ref: function(e) {
                                                            return (n.rangeSlider = e);
                                                        },
                                                    },
                                                    j.map(function(e) {
                                                        return Object(r.i)(
                                                            'div',
                                                            {
                                                                style: w(e),
                                                                role:
                                                                    'presentation',
                                                                class: {
                                                                    'range-tick': !0,
                                                                    'range-tick-active':
                                                                        e.active,
                                                                },
                                                            }
                                                        );
                                                    }),
                                                    Object(r.i)('div', {
                                                        class: 'range-bar',
                                                        role: 'presentation',
                                                    }),
                                                    Object(r.i)('div', {
                                                        class:
                                                            'range-bar range-bar-active',
                                                        role: 'presentation',
                                                        style: y,
                                                    }),
                                                    s(v, {
                                                        knob: 'A',
                                                        pressed: 'A' === b,
                                                        value: this.valA,
                                                        ratio: this.ratioA,
                                                        pin: p,
                                                        disabled: g,
                                                        handleKeyboard: u,
                                                        min: o,
                                                        max: l,
                                                    }),
                                                    this.dualKnobs &&
                                                        s(v, {
                                                            knob: 'B',
                                                            pressed: 'B' === b,
                                                            value: this.valB,
                                                            ratio: this.ratioB,
                                                            pin: p,
                                                            disabled: g,
                                                            handleKeyboard: u,
                                                            min: o,
                                                            max: l,
                                                        })
                                                ),
                                                Object(r.i)('slot', {
                                                    name: 'end',
                                                })
                                            )
                                        );
                                    },
                                },
                                {
                                    key: 'valA',
                                    get: function() {
                                        return l(
                                            this.ratioA,
                                            this.min,
                                            this.max,
                                            this.step
                                        );
                                    },
                                },
                                {
                                    key: 'valB',
                                    get: function() {
                                        return l(
                                            this.ratioB,
                                            this.min,
                                            this.max,
                                            this.step
                                        );
                                    },
                                },
                                {
                                    key: 'ratioLower',
                                    get: function() {
                                        return this.dualKnobs
                                            ? Math.min(this.ratioA, this.ratioB)
                                            : 0;
                                    },
                                },
                                {
                                    key: 'ratioUpper',
                                    get: function() {
                                        return this.dualKnobs
                                            ? Math.max(this.ratioA, this.ratioB)
                                            : this.ratioA;
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(r.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'watchers',
                                    get: function() {
                                        return {
                                            debounce: ['debounceChanged'],
                                            min: ['minChanged'],
                                            max: ['maxChanged'],
                                            disabled: ['disabledChanged'],
                                            value: ['valueChanged'],
                                        };
                                    },
                                },
                                {
                                    key: 'style',
                                    get: function() {
                                        return ':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:"";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}';
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                s = function(e, t) {
                    var n,
                        i = t.knob,
                        a = t.value,
                        o = t.ratio,
                        s = t.min,
                        l = t.max,
                        d = t.disabled,
                        c = t.pressed,
                        h = t.pin,
                        u = t.handleKeyboard,
                        b = e ? 'right' : 'left';
                    return Object(r.i)(
                        'div',
                        {
                            onKeyDown: function(e) {
                                var t = e.key;
                                'ArrowLeft' === t || 'ArrowDown' === t
                                    ? (u(i, !1),
                                      e.preventDefault(),
                                      e.stopPropagation())
                                    : ('ArrowRight' !== t && 'ArrowUp' !== t) ||
                                      (u(i, !0),
                                      e.preventDefault(),
                                      e.stopPropagation());
                            },
                            class: {
                                'range-knob-handle': !0,
                                'range-knob-a': 'A' === i,
                                'range-knob-b': 'B' === i,
                                'range-knob-pressed': c,
                                'range-knob-min': a === s,
                                'range-knob-max': a === l,
                            },
                            style:
                                ((n = {}), (n[b] = ''.concat(100 * o, '%')), n),
                            role: 'slider',
                            tabindex: d ? -1 : 0,
                            'aria-valuemin': s,
                            'aria-valuemax': l,
                            'aria-disabled': d ? 'true' : null,
                            'aria-valuenow': a,
                        },
                        h &&
                            Object(r.i)(
                                'div',
                                { class: 'range-pin', role: 'presentation' },
                                Math.round(a)
                            ),
                        Object(r.i)('div', {
                            class: 'range-knob',
                            role: 'presentation',
                        })
                    );
                },
                l = function(e, t, n, r) {
                    var a = (n - t) * e;
                    return (
                        r > 0 && (a = Math.round(a / r) * r + t),
                        Object(i.c)(t, a, n)
                    );
                },
                d = function(e, t, n) {
                    return Object(i.c)(0, (e - t) / (n - t), 1);
                };
        },
    },
]);
