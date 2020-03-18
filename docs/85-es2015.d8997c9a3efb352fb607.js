(window.webpackJsonp = window.webpackJsonp || []).push([
    [85],
    {
        xNZy: function(t, e, i) {
            'use strict';
            i.r(e),
                i.d(e, 'ion_textarea', function() {
                    return s;
                });
            var a = i('imtE'),
                n = (i('AfW+'), i('aiEM')),
                o = i('Dl6n');
            const s = class {
                constructor(t) {
                    Object(a.k)(this, t),
                        (this.inputId = `ion-input-${r++}`),
                        (this.didBlurAfterEdit = !1),
                        (this.hasFocus = !1),
                        (this.autocapitalize = 'none'),
                        (this.autofocus = !1),
                        (this.clearOnEdit = !1),
                        (this.debounce = 0),
                        (this.disabled = !1),
                        (this.name = this.inputId),
                        (this.readonly = !1),
                        (this.required = !1),
                        (this.spellcheck = !1),
                        (this.autoGrow = !1),
                        (this.value = ''),
                        (this.onInput = (t) => {
                            this.nativeInput &&
                                (this.value = this.nativeInput.value),
                                this.emitStyle(),
                                this.ionInput.emit(t);
                        }),
                        (this.onFocus = () => {
                            (this.hasFocus = !0),
                                this.focusChange(),
                                this.ionFocus.emit();
                        }),
                        (this.onBlur = () => {
                            (this.hasFocus = !1),
                                this.focusChange(),
                                this.ionBlur.emit();
                        }),
                        (this.onKeyDown = () => {
                            this.checkClearOnEdit();
                        }),
                        (this.ionChange = Object(a.e)(this, 'ionChange', 7)),
                        (this.ionInput = Object(a.e)(this, 'ionInput', 7)),
                        (this.ionStyle = Object(a.e)(this, 'ionStyle', 7)),
                        (this.ionBlur = Object(a.e)(this, 'ionBlur', 7)),
                        (this.ionFocus = Object(a.e)(this, 'ionFocus', 7));
                }
                debounceChanged() {
                    this.ionChange = Object(n.d)(this.ionChange, this.debounce);
                }
                disabledChanged() {
                    this.emitStyle();
                }
                valueChanged() {
                    const t = this.nativeInput,
                        e = this.getValue();
                    t && t.value !== e && (t.value = e),
                        this.runAutoGrow(),
                        this.emitStyle(),
                        this.ionChange.emit({ value: e });
                }
                connectedCallback() {
                    this.emitStyle(),
                        this.debounceChanged(),
                        this.el.dispatchEvent(
                            new CustomEvent('ionInputDidLoad', {
                                detail: this.el,
                            })
                        );
                }
                disconnectedCallback() {
                    document.dispatchEvent(
                        new CustomEvent('ionInputDidUnload', {
                            detail: this.el,
                        })
                    );
                }
                componentDidLoad() {
                    this.runAutoGrow();
                }
                runAutoGrow() {
                    const t = this.nativeInput;
                    t &&
                        this.autoGrow &&
                        Object(a.g)(() => {
                            (t.style.height = 'inherit'),
                                (t.style.height = t.scrollHeight + 'px');
                        });
                }
                async setFocus() {
                    this.nativeInput && this.nativeInput.focus();
                }
                getInputElement() {
                    return Promise.resolve(this.nativeInput);
                }
                emitStyle() {
                    this.ionStyle.emit({
                        interactive: !0,
                        textarea: !0,
                        input: !0,
                        'interactive-disabled': this.disabled,
                        'has-placeholder': null != this.placeholder,
                        'has-value': this.hasValue(),
                        'has-focus': this.hasFocus,
                    });
                }
                checkClearOnEdit() {
                    this.clearOnEdit &&
                        (this.didBlurAfterEdit &&
                            this.hasValue() &&
                            (this.value = ''),
                        (this.didBlurAfterEdit = !1));
                }
                focusChange() {
                    this.clearOnEdit &&
                        !this.hasFocus &&
                        this.hasValue() &&
                        (this.didBlurAfterEdit = !0),
                        this.emitStyle();
                }
                hasValue() {
                    return '' !== this.getValue();
                }
                getValue() {
                    return this.value || '';
                }
                render() {
                    const t = Object(a.d)(this),
                        e = this.getValue(),
                        i = this.inputId + '-lbl',
                        s = Object(n.f)(this.el);
                    return (
                        s && (s.id = i),
                        Object(a.i)(
                            a.a,
                            {
                                'aria-disabled': this.disabled ? 'true' : null,
                                class: Object.assign(
                                    Object.assign({}, Object(o.a)(this.color)),
                                    { [t]: !0 }
                                ),
                            },
                            Object(a.i)(
                                'textarea',
                                {
                                    class: 'native-textarea',
                                    ref: (t) => (this.nativeInput = t),
                                    autoCapitalize: this.autocapitalize,
                                    autoFocus: this.autofocus,
                                    disabled: this.disabled,
                                    maxLength: this.maxlength,
                                    minLength: this.minlength,
                                    name: this.name,
                                    placeholder: this.placeholder || '',
                                    readOnly: this.readonly,
                                    required: this.required,
                                    spellCheck: this.spellcheck,
                                    cols: this.cols,
                                    rows: this.rows,
                                    wrap: this.wrap,
                                    onInput: this.onInput,
                                    onBlur: this.onBlur,
                                    onFocus: this.onFocus,
                                    onKeyDown: this.onKeyDown,
                                },
                                e
                            )
                        )
                    );
                }
                get el() {
                    return Object(a.f)(this);
                }
                static get watchers() {
                    return {
                        debounce: ['debounceChanged'],
                        disabled: ['disabledChanged'],
                        value: ['valueChanged'],
                    };
                }
                static get style() {
                    return '.sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}';
                }
            };
            let r = 0;
        },
    },
]);
